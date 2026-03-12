import "dotenv/config";
import * as Figma from "figma-api";
import * as fs from "fs";
import { cleanString } from "./utils/cleanString.mjs";
import { compareAllSvgs } from "./utils/compare.mjs";
import { downloadFrameImages } from "./utils/download.mjs";
import { optimizeAllSVGsInFolder } from "./utils/optimize-svg.mjs";

const INTERIM_DIRECTORY = "auto-generated-icons";
const TARGET_DIRECTORY = "auto-generated-optimized-icons";
const METADATA_FILE = "icons-metadata.json";
const MAX_NETWORK_RETRIES = 4;
const BASE_BACKOFF_MS = 500;

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

async function withNetworkRetry(taskName, fn) {
  let lastError;

  for (let attempt = 0; attempt <= MAX_NETWORK_RETRIES; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      const retryable = isRetryableNetworkError(error);
      const hasRemainingAttempts = attempt < MAX_NETWORK_RETRIES;

      if (!retryable || !hasRemainingAttempts) {
        throw error;
      }

      const backoffMs = BASE_BACKOFF_MS * 2 ** attempt;
      console.warn(
        `${taskName} failed (attempt ${attempt + 1}/${MAX_NETWORK_RETRIES + 1}): ${error.message}. Retrying in ${backoffMs}ms...`,
      );
      await sleep(backoffMs);
    }
  }

  throw lastError;
}

function createFolder(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
}

function findCardFrames(node) {
  const cardFrames = [];

  if (
    node.type === "FRAME" &&
    node.name === "Cards [DO NOT CHANGE NAME -  REQUIRED FOR EXPORT]" &&
    "children" in node &&
    node.children
  ) {
    node.children.forEach((child) => {
      cardFrames.push(child);
    });
  }

  if ("children" in node && node.children) {
    node.children.forEach((child) => {
      cardFrames.push(...findCardFrames(child));
    });
  }

  return cardFrames;
}

function getIconInfo(node) {
  const name = node.node.name || "";
  const filename = cleanString(name);
  const category = node.category || "";
  const description = node.meta.description?.trim?.() || "";
  if (description) {
    console.log("description: ", description);
  }
  const tags = description ? description.split(",").map((t) => t.trim()) : [];

  return {
    name,
    filename,
    category,
    tags,
  };
}

async function main() {
  createFolder(INTERIM_DIRECTORY);

  // Connect to Figma and get the file
  const token = process.env.FIGMA_ACCESS_TOKEN || "";
  if (!token) {
    throw new Error("FIGMA_ACCESS_TOKEN environment variable is required");
  }
  const api = new Figma.Api({
    personalAccessToken: token,
  });

  const fileKey = process.env.FIGMA_FILE_ID || "GQZX9DHncxo9fRYV4cOaWV"; //Sprout Icons file
  const file = await withNetworkRetry("getFile", () => api.getFile(fileKey));
  const page = file.document.children.find((child) => child.name === "Icons [EXPORT]");

  // eslint-disable-next-line no-console
  console.log(`Pages in file: ${file.document.children.map((c) => c.name).join(", ")}`);
  // eslint-disable-next-line no-console
  console.log(`Found page "Icons [EXPORT]": ${!!page}`);

  // Data to share across process
  const ctx = {
    api,
    fileKey,
    dir: INTERIM_DIRECTORY,
  };

  // eslint-disable-next-line no-console
  console.log(`Downloading images for file: ${file.name}`);

  const componentNodeInfos = [];
  //const privateComponents: Figma.Node[] = [];
  const publicComponents = [];

  const iconFrame = page.children.find((child) => child.name === "Icons");

  // eslint-disable-next-line no-console
  console.log(`Top-level children of page: ${page.children.map((c) => c.name).join(", ")}`);
  // eslint-disable-next-line no-console
  console.log(`Found "Icons" frame: ${!!iconFrame}`);

  const cardFrames = findCardFrames(iconFrame);

  // eslint-disable-next-line no-console
  console.log(`Found ${cardFrames.length} Card frames`);

  cardFrames.forEach((node) => {
    //Sections marks optional category

    const iconComponentNodes = node.children[1].children.filter((n) => n.type === "COMPONENT");
    const categoryName = iconComponentNodes.length > 1 ? node.children[0].children[0].characters.trim() : null; //Category is only applied if multiple icons

    iconComponentNodes.forEach((child) => {
      const componentNode = child;
      componentNodeInfos.push({
        node: componentNode,
        category: categoryName,
        meta: file.components[componentNode.id],
      });
    });
  });

  componentNodeInfos.forEach((nodeInfo) => {
    publicComponents.push(nodeInfo.node);
  });

  if (publicComponents.length > 0) {
    // eslint-disable-next-line no-console
    console.log(`Downloading ${publicComponents.length} icons`);
    await downloadFrameImages(publicComponents, ctx);
    // generate metadata file for icons
    const iconMetadata = JSON.stringify(componentNodeInfos.map(getIconInfo), null, 2);
    await fs.promises.writeFile(METADATA_FILE, iconMetadata, "utf8");
  } else {
    // eslint-disable-next-line no-console
    console.warn("No icons found — check page/frame names match the Figma file structure.");
  }

  //Optimize SVGs
  optimizeAllSVGsInFolder(INTERIM_DIRECTORY, TARGET_DIRECTORY);

  //Test SVGs for discrepancies
  compareAllSvgs(INTERIM_DIRECTORY, TARGET_DIRECTORY)
    .then(() => {
      // eslint-disable-next-line no-console
      console.log("\x1b[32m\x1b[1mAll SVGs are identical.\x1b[0m");
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log("Some SVGs differ", err);
    });
}

main()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log("SVGS generated and tested!");
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error("SVGS did not work or did not pass tests", err);
    process.exit(1);
  });
