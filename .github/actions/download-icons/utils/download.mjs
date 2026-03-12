import * as fs from "fs";
import * as http from "http";
import * as https from "https";
import { pipeline } from "stream/promises";
import { cleanString } from "./cleanString.mjs";

const MAX_NETWORK_RETRIES = 4;
const BASE_BACKOFF_MS = 500;
const REQUEST_TIMEOUT_MS = 30_000;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isRetryableNetworkError(error) {
  const retryableCodes = new Set([
    "ECONNRESET",
    "ECONNREFUSED",
    "EPIPE",
    "ETIMEDOUT",
    "ENOTFOUND",
    "EAI_AGAIN",
    "ECONNABORTED",
  ]);

  const code = error?.code;
  if (code && retryableCodes.has(code)) {
    return true;
  }

  const message = String(error?.message || "");
  return /socket hang up|network|timed out/i.test(message);
}

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
    req.setTimeout(REQUEST_TIMEOUT_MS, () => {
      req.destroy(new Error(`Request timed out after ${REQUEST_TIMEOUT_MS}ms for ${uri}`));
    });
  });
}

async function downloadWithRetry(uri, filename) {
  let lastError;

  for (let attempt = 0; attempt <= MAX_NETWORK_RETRIES; attempt++) {
    try {
      await downloadWithRedirects(uri, filename);
      return;
    } catch (error) {
      lastError = error;

      const retryable = isRetryableNetworkError(error);
      const hasRemainingAttempts = attempt < MAX_NETWORK_RETRIES;

      if (!retryable || !hasRemainingAttempts) {
        throw error;
      }

      const backoffMs = BASE_BACKOFF_MS * 2 ** attempt;
      console.warn(
        `Download failed for ${uri} (attempt ${attempt + 1}/${MAX_NETWORK_RETRIES + 1}): ${error.message}. Retrying in ${backoffMs}ms...`,
      );
      await sleep(backoffMs);
    }
  }

  throw lastError;
}

export function download(uri, filename) {
  return downloadWithRetry(uri, filename);
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
  let imgs;
  let getImageError;
  for (let attempt = 0; attempt <= MAX_NETWORK_RETRIES; attempt++) {
    try {
      imgs = await ctx.api.getImage(ctx.fileKey, {
        ids: imageFrames.map((n) => n.id).join(","),
        scale: 1,
        format: "svg",
      });
      break;
    } catch (error) {
      getImageError = error;
      const retryable = isRetryableNetworkError(error);
      const hasRemainingAttempts = attempt < MAX_NETWORK_RETRIES;

      if (!retryable || !hasRemainingAttempts) {
        throw error;
      }

      const backoffMs = BASE_BACKOFF_MS * 2 ** attempt;
      console.warn(
        `getImage failed (attempt ${attempt + 1}/${MAX_NETWORK_RETRIES + 1}): ${error.message}. Retrying in ${backoffMs}ms...`,
      );
      await sleep(backoffMs);
    }
  }

  if (!imgs) {
    throw getImageError || new Error("Failed to fetch image URLs from Figma");
  }

  // eslint-disable-next-line no-console
  console.log(`Downloading ${imageFrames.length} images`);
  // Download the generated images into the assets folder
  const downloads = Object.entries(imgs.images).map(([, url], i) =>
    url ? download(url, `./${ctx.dir}/${cleanString(imageFrames[i].name)}.svg`) : Promise.resolve(),
  );
  await Promise.all(downloads);
}
