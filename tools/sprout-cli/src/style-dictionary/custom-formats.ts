import type { DesignToken, Format } from "style-dictionary/types";

export const CustomObject: Format = {
  name: "javascript/customObject",
  format: ({ dictionary }) => {
    const flat: Record<string, string> = {};

    dictionary.allTokens.forEach((token: DesignToken) => {
      const cssVar = `var(--${token.name}, ${token.$value})`;
      if (token.name) {
        flat[token.name.replace("sprout-", "")] = cssVar;
      }
    });

    return `/**
* Do not edit directly - auto-generated
*/
  
export const tokens = ${JSON.stringify(flat, null, 2)};`;
  },
};

export const CustomDTSObject: Format = {
  name: "typescript/customObject",
  format: ({ dictionary }) => {
    const cssVariables: Record<string, string[]> = {};
    const jsFlatKeys: Array<string> = [];

    dictionary.allTokens.forEach((token: DesignToken) => {
      if (token.name) {
        jsFlatKeys.push(token.name.replace("sprout-", ""));
      }
      if (token.$type) {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!cssVariables[token.$type]) {
          cssVariables[token.$type] = [];
        }
        cssVariables[token.$type].push(`"--${token.name}"`);
      } else {
        console.warn(`Token ${token.name} is missing a type and will not be included in the CSS variable types.`);
      }
    });

    return `/**
* Do not edit directly - auto-generated
*/

${Object.keys(cssVariables)
  .map(
    (type) => `export type SproutVariables${type.charAt(0).toUpperCase() + type.slice(1)} = 
  | ${cssVariables[type].join("\n  | ")};`,
  )
  .join("\n\n")}

export type SproutVariables = ${Object.keys(cssVariables)
      .map((type) => `SproutVariables${type.charAt(0).toUpperCase() + type.slice(1)}`)
      .join(" | ")};

export const tokens: {
  ${jsFlatKeys.map((key) => `"${key}": string`).join(";\n  ")}
};`;
  },
};

function createCSSVarFromProp(token: DesignToken): string {
  return `--${token.name}: ${token.$value}; ${token.$description ? `/* ${token.$description} */` : ""}`;
}

function createCSVVarFromProp(token: DesignToken): string {
  return `${token.name}, "${token.$value}", ${token.$description}`;
}

// creates a list of all variables with all possible values in csv following this format:
// TokenName, TokenValue, TokenDescription
export const CSVListWithHeader: Format = {
  name: "csv/list/with-header",
  format({ dictionary }) {
    const csvVars = dictionary.allTokens.map((token) => createCSVVarFromProp(token)).join("\n");

    return `TokenName, TokenValue, TokenDescription    
${csvVars}`;
  },
};

// creates a list of all variables with all possible values in csv following this format:
// TokenName, TokenValue, TokenDescription
export const CSVList: Format = {
  name: "csv/list",
  format({ dictionary }) {
    const csvVars = dictionary.allTokens.map((token) => createCSVVarFromProp(token)).join("\n");

    return csvVars;
  },
};

// creates css variables with [data-themedim=themeval] selector and which keeps sprout-related refs while resolving all internal refs
export const CustomDataVariables: Format = {
  name: "css/custom-data-variables",
  format({ dictionary, file }) {
    const themeMatches = (file.destination as string).match(/([^/]*)\/([^/]*)\./) as unknown as string;
    const dimension = themeMatches[1];
    const tokens = dictionary.allTokens;

    if (dimension === "appearance") {
      tokens.sort((a, b) => (a.name > b.name ? 1 : -1));
    }

    const cssVars = tokens.map((token) => createCSSVarFromProp(token)).join("\n\t");
    if (dimension === "core") {
      return `
:root{
  ${cssVars}
}
`;
    }

    return `
[data-qlik-${dimension}=${themeMatches[2]}]{
  ${cssVars}
}
`;
  },
};

/** create an object with all variables and values in JSON format
 * {
 * "--sprout-common-brand-primary-default": {
 *   value: "#ff0000",
 *   type: "color",
 *   description: "Primary brand color"
 * },
 * ...
 * }*/
export const JSONFlatCSSVarInfo: Format = {
  name: "json/flat-css-var-info",
  format: ({ dictionary }) => {
    const tokens: Record<string, { $value?: string; $type?: string; $description?: string }> = {};
    dictionary.allTokens.forEach((token: DesignToken) => {
      tokens[`--${token.name}`] = {
        $value: token.$value,
        $type: token.$type,
        $description: token.$description,
      };
    });

    return JSON.stringify(tokens, null, 2);
  },
};
