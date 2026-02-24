import * as fs from "fs";
import * as path from "path";
import { PNG } from "pngjs";
import sharp from "sharp";

// Function to render an SVG to a PNG buffer
async function renderSvgToPng(svgPath, outputPath) {
  const svgBuffer = fs.readFileSync(svgPath);
  await sharp(svgBuffer).threshold(128).png().toFile(outputPath);
  return Promise.resolve();
}

// Function to compare two PNG images
async function comparePngs(pngPath1, pngPath2, diffPath) {
  const { default: pixelmatch } = await import("pixelmatch");

  const img1 = PNG.sync.read(fs.readFileSync(pngPath1));
  const img2 = PNG.sync.read(fs.readFileSync(pngPath2));

  const { width, height } = img1;
  const diff = new PNG({ width, height });

  const numDiffPixels = pixelmatch(
    img1.data,
    img2.data,
    diff.data,
    width,
    height,
    { threshold: 0.1 }, // Adjust threshold as needed
  );

  fs.writeFileSync(diffPath, PNG.sync.write(diff));
  return numDiffPixels;
}

// Main function to compare two SVGs
async function compareSvgs(svgPath1, svgPath2) {
  const pngPath1 = "output1.png";
  const pngPath2 = "output2.png";
  const diffPath = "diff.png";

  // Render SVGs to PNGs
  await renderSvgToPng(svgPath1, pngPath1);
  await renderSvgToPng(svgPath2, pngPath2);

  // Compare the PNGs
  const numDiffPixels = await comparePngs(pngPath1, pngPath2, diffPath);

  if (numDiffPixels === 0) {
    // eslint-disable-next-line no-console
    console.log("The SVGs are identical.");
  } else if (numDiffPixels < 24) {
    console.warn(`The SVGs differ by ${numDiffPixels} pixels, deemed acceptable. Please check manually.`);
  } else {
    throw new Error(
      `The Icon ${svgPath1.replace(/.*\/(.*)\.svg/, "$1")} differ by ${numDiffPixels} pixels. See diff.png for details.`,
    );
  }

  return Promise.resolve();
}
// Function to get all SVG files in a directory
function getSvgFiles(directory) {
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".svg"))
    .map((file) => path.join(directory, file));
}

// Main function to compare all SVGs in two directories
export async function compareAllSvgs(dir1, dir2) {
  const svgFiles1 = getSvgFiles(dir1);

  for (const file1 of svgFiles1) {
    const fileName = path.basename(file1);
    const file2 = path.join(dir2, fileName);

    if (fs.existsSync(file2)) {
      // eslint-disable-next-line no-console

      console.log(`Comparing ${file2.split("/")[1].replace(".svg", "")}`);
      await compareSvgs(file1, file2);
    } else {
      // eslint-disable-next-line no-console
      console.log(`File ${fileName} does not exist in ${dir2}`);
    }
  }

  return Promise.resolve();
}
