/**
 * transformations to provide:
- from token folder to theme object (internal or public to serve as documentation example)
- from token folder to typescript (internal, no value)
- from token folder to jsonschema (internal, no value)
- from theme to CSS (public , token + value)
- from CSS to CSV (internal)
 */
import { program } from "commander";

import { action as compileCSS } from "./transforms/css";
import { action as compileCSV } from "./transforms/csv";
import { action as compileJS } from "./transforms/js";
import { action as compileJSON } from "./transforms/json";
import { action as compileJsonSchema } from "./transforms/jsonschema";

export function cli() {
  program
    .command("tokens")
    .description("Transform design tokens")
    .option("-c, --config <string>", "token config path")
    .option("-s, --source <string>", "token source folder path")
    .option("-f, --format <string>", "Output format (theme, typescript, jsonschema, css, csv)")
    .option("-o, --output <string>", "Output file path")
    .option("-v, --verbose", "Enable verbose logging")
    .action(async (options) => {
      console.log("Compiling tokens with options:", options.format);
      // always run json as it's the base used by csv and js
      if (options.format === "json" || !options.format || options.format === "csv" || options.format === "js") {
        try {
          await compileJSON(options);
        } catch (error) {
          console.error("Error compiling JSON:", error);
        }
      }
      if (options.format === "jsonschema" || !options.format) {
        try {
          await compileJsonSchema(options);
        } catch (error) {
          console.error("Error compiling JSON schema:", error);
        }
      }
      if (options.format === "css" || !options.format) {
        try {
          await compileCSS(options);
        } catch (error) {
          console.error("Error compiling CSS:", error);
        }
      }
      if (options.format === "csv" || !options.format) {
        try {
          await compileCSV(options);
        } catch (error) {
          console.error("Error compiling CSV:", error);
        }
      }
      if (options.format === "js" || !options.format) {
        try {
          await compileJS(options);
        } catch (error) {
          console.error("Error compiling JS:", error);
        }
      }
    });
  program.parse();
}
