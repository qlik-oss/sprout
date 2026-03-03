import fs from "node:fs";
import path from "node:path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const srcDir = path.join(__dirname, "src/translations");
const destDir = path.join(__dirname, "lib/translations");

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.readdirSync(srcDir).forEach((file) => {
  if (file.endsWith(".json")) {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);

    const data = JSON.parse(fs.readFileSync(srcPath, "utf8").toString());
    const cleaned = Object.keys(data).reduce((acc, key) => {
      const value = data[key];
      if (value && typeof value === "object") {
        if (value && typeof value === "object") {
          const { comment, version, ...rest } = value;
          return { ...acc, [key]: rest };
        }
      }
      return acc;
    }, {});

    fs.writeFileSync(destPath, JSON.stringify(cleaned, null, 2), "utf8");
  }
});
