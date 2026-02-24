import * as fs from "fs";
import * as http from "http";
import * as https from "https";
import { pipeline } from "stream/promises";
import { cleanString } from "./cleanString.js";

function downloadWithRedirects(uri, filename, redirectsLeft = 5) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(uri);
    const client = parsedUrl.protocol === "https:" ? https : http;

    const req = client.get(parsedUrl, (response) => {
      const { statusCode = 0, headers } = response;

      if (statusCode >= 300 && statusCode < 400 && headers.location) {
        response.resume();

        if (redirectsLeft <= 0) {
          reject(new Error(`Too many redirects while downloading ${uri}`));
          return;
        }

        const redirectUrl = new URL(headers.location, parsedUrl).toString();
        downloadWithRedirects(redirectUrl, filename, redirectsLeft - 1)
          .then(resolve)
          .catch(reject);
        return;
      }

      if (statusCode < 200 || statusCode >= 300) {
        response.resume();
        reject(new Error(`Failed to download ${uri}. HTTP status: ${statusCode}`));
        return;
      }

      pipeline(response, fs.createWriteStream(filename))
        .then(() => resolve(undefined))
        .catch(reject);
    });

    req.on("error", reject);
  });
}

export function download(uri, filename) {
  return downloadWithRedirects(uri, filename);
}

export async function downloadFrameImages(imageFrames, ctx) {
  // Fail early if any two icons would resolve to the same filename
  const seenNames = new Map();
  for (const frame of imageFrames) {
    const cleaned = cleanString(frame.name);
    if (seenNames.has(cleaned)) {
      throw new Error(
        `Filename collision: "${frame.name}" and "${seenNames.get(cleaned)}" both resolve to "${cleaned}.svg"`,
      );
    }
    seenNames.set(cleaned, frame.name);
  }

  // Ask Figma to generate the images
  const imgs = await ctx.api.getImage(ctx.fileKey, {
    ids: imageFrames.map((n) => n.id).join(","),
    scale: 1,
    format: "svg",
  });

  // eslint-disable-next-line no-console
  console.log(`Downloading ${imageFrames.length} images`);
  // Download the generated images into the assets folder
  const downloads = Object.entries(imgs.images).map(([, url], i) =>
    url ? download(url, `./${ctx.dir}/${cleanString(imageFrames[i].name)}.svg`) : Promise.resolve(),
  );
  await Promise.all(downloads);
}
