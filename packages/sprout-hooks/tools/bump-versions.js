/* eslint-disable no-console */
const { glob } = require("glob");
const fs = require("fs/promises");

const rootPackageJson = require("../package.json");

console.log("argv", process.argv);
console.log("env.VERSION", process.env.VERSION);

const versionToBump = process.argv[2] || process.env.VERSION || rootPackageJson.version;
console.log("Updating all package.json versions to", versionToBump);

(async () => {
  const packageJsonPaths = await glob("**/package.json", {
    ignore: "**/node_modules/**",
  });
  packageJsonPaths.forEach(async (packageJsonPath) => {
    // eslint-disable-next-line import-x/no-dynamic-require
    const packageJson = require(`../${packageJsonPath}`);
    packageJson.version = versionToBump;
    await fs.writeFile(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);
  });
})();
