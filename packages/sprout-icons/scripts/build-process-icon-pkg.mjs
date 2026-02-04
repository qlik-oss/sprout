import fs from "node:fs/promises";
import Module from "node:module";

const require = Module.createRequire(import.meta.url);
const rootPackageJson = require("../package.json");

const packageJSON = {
  name: "@qlik/sprout-icons",
  description: "Sprout icons packaged for usage in react and vue",
  type: "module",
  license: rootPackageJson.license,
  version: rootPackageJson.version,
  repository: rootPackageJson.repository,
  publishConfig: rootPackageJson.publishConfig,
  engines: rootPackageJson.engines,
};

await fs.writeFile("./dist-icons/package.json", JSON.stringify(packageJSON, null, 2));

// copy README.md
await fs.cp("./README-sprout-icons.md", "./dist-icons/README.md");
