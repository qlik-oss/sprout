/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import path from "path";
import { cwd } from "process";
import { checkIfFolderExists } from "../utils";

const CWD = cwd();
const DEFAULT_OUTPUT = path.resolve(CWD, "theming-api.schema.json");

function deepMerge<T extends object, U extends object>(target: T, source: U): T & U {
  const output = { ...target } as T & U;

  if (typeof target === "object" && typeof source === "object") {
    Object.keys(source).forEach((key) => {
      const sourceValue = (source as any)[key];
      const targetValue = (target as any)[key];
      if (sourceValue && typeof sourceValue === "object" && !Array.isArray(sourceValue)) {
        if (!(key in target)) {
          Object.assign(output, { [key]: sourceValue });
        } else {
          (output as any)[key] = deepMerge(targetValue, sourceValue);
        }
      } else {
        Object.assign(output, { [key]: sourceValue });
      }
    });
  }

  return output;
}

function getTypeDefKey(tokenType: string): string {
  return `${tokenType}Token`;
}

class SchemaBuilder {
  private defs: any = {};
  private defKeys = new Set<string>();

  private ensureTypeDef(tokenType: string): string {
    const defKey = getTypeDefKey(tokenType);

    if (!this.defKeys.has(defKey)) {
      this.defKeys.add(defKey);
      this.defs[defKey] = {
        type: "object",
        properties: {
          value: getValueSchema(tokenType),
        },
        required: ["value"],
      };
    }

    return defKey;
  }

  generateTokenSchema(tokenObj: any, tokenPath: string[] = []): any {
    if (tokenObj && typeof tokenObj === "object" && !Array.isArray(tokenObj)) {
      if ("$type" in tokenObj && "$value" in tokenObj) {
        const defKey = this.ensureTypeDef(tokenObj.$type);
        const schema: any = {
          $ref: `#/$defs/${defKey}`,
        };

        if (tokenObj.$description) {
          schema.description = tokenObj.$description;
        }

        return schema;
      }

      const properties: any = {};
      for (const [key, value] of Object.entries(tokenObj)) {
        properties[key] = this.generateTokenSchema(value, [...tokenPath, key]);
      }

      return {
        type: "object",
        properties,
      };
    }

    return { type: "string" };
  }

  createSproutThemeDef(sproutSchema: any): string {
    const defKey = "sproutTheme";
    this.defs[defKey] = sproutSchema;
    return defKey;
  }

  getDefs(): any {
    return this.defs;
  }
}

function getValueSchema(tokenType: string): any {
  switch (tokenType) {
    case "color":
      return {
        type: "string",
        pattern: "^(#[0-9A-Fa-f]{3,8}|rgb\\(|rgba\\(|hsl\\(|hsla\\(|\\{[^}]+\\}).*$",
        description: "Color value (hex, rgb, rgba, hsl, hsla) or token reference",
      };

    case "dimension":
    case "sizing":
      return {
        type: "string",
        pattern: "^(\\d+(\\.\\d+)?(px|em|rem|%|vh|vw)|\\{[^}]+\\})$",
        description: "Dimension value with units or token reference",
      };

    case "fontFamily":
      return {
        type: "string",
        description: "Font family name or token reference",
      };

    case "fontWeight":
      return {
        oneOf: [
          { type: "string", pattern: "^\\{[^}]+\\}$" },
          { type: "number", minimum: 100, maximum: 900 },
          { type: "string" },
        ],
        description: "Font weight value or token reference",
      };

    case "typography":
      return {
        type: "object",
        properties: {
          fontFamily: { type: "string" },
          fontWeight: { type: "string" },
          fontSize: { type: "string" },
          lineHeight: { type: "string" },
          letterSpacing: { type: "string" },
          paragraphSpacing: { type: "string" },
          paragraphIndent: { type: "string" },
          textCase: { type: "string" },
          textDecoration: { type: "string" },
        },
        required: ["fontFamily", "fontWeight", "fontSize", "lineHeight"],
        description: "Typography token with font properties",
      };

    case "border":
      return {
        type: "object",
        properties: {
          color: { type: "string" },
          width: { type: "string" },
          style: { type: "string" },
        },
        required: ["color", "width", "style"],
        description: "Border token with color, width, and style",
      };

    case "shadow":
      return {
        type: "string",
        description: "Shadow value or token reference",
      };

    case "duration":
      return {
        type: "string",
        pattern: "^(\\d+(\\.\\d+)?m?s|\\{[^}]+\\})$",
        description: "Duration value in ms or s, or token reference",
      };

    default:
      return {
        type: ["string", "number", "object"],
        description: "Token value or reference",
      };
  }
}

type ActionOptions = { source: string; objPath: string; output: string; verbose?: boolean };

export async function action(opts: ActionOptions) {
  // Implementation goes here
  const themingApiTokenFiles = fs.readdirSync(path.resolve(CWD, opts.source));
  const outputFolder = path.join(opts.output || DEFAULT_OUTPUT, "json");
  const outputPath = path.join(opts.output || DEFAULT_OUTPUT, "json", "theming-api.schema.json");
  let themeData: any = {};

  for (const file of themingApiTokenFiles) {
    if (opts.verbose) {
      console.log("Processing file:", file);
    }
    if (file.endsWith(".json")) {
      const tokenData = JSON.parse(fs.readFileSync(path.resolve(CWD, opts.source, file), "utf-8"));
      themeData = deepMerge(themeData, tokenData);
    }
  }

  // Use SchemaBuilder to generate schema with $refs and $defs
  const schemaBuilder = new SchemaBuilder();
  const sproutSchema = schemaBuilder.generateTokenSchema({
    sprout: themeData.theming,
  }).properties.sprout;

  // Create sprout theme definition
  const sproutThemeDefKey = schemaBuilder.createSproutThemeDef(sproutSchema);

  // Create top-level structure with light and dark themes
  const properties = {
    light: { $ref: `#/$defs/${sproutThemeDefKey}` },
    dark: { $ref: `#/$defs/${sproutThemeDefKey}` },
  };

  // Generate JSON Schema with $defs for reusability
  const jsonSchema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: "https://qlik.com/schemas/theming-api.json",
    title: "Qlik Theming API Schema",
    description: "JSON Schema for Qlik theming API design tokens",
    type: "object",
    properties,
    anyOf: [{ required: ["light"] }, { required: ["dark"] }],
    additionalProperties: false,
    $defs: schemaBuilder.getDefs(),
  };

  await checkIfFolderExists(outputFolder).then(async (exists) => {
    if (!exists) {
      await fs.promises.mkdir(outputFolder, { recursive: true });
    }
  });
  await fs.promises.writeFile(outputPath, JSON.stringify(jsonSchema, null, 2));
  if (opts.verbose) {
    console.log(`JSON Schema generated successfully at: ${opts.output}`);
  }
}
