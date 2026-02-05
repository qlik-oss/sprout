/* eslint-disable no-console, no-await-in-loop */
import { DOMParser } from "@xmldom/xmldom";
import camelcase from "camelcase";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import pc from "picocolors";

const ICONS_DIR = "./icons/svg";

/**
 * List of attributes set on path elements that we want to prevent
 * being shipped.
 *
 * Some of our icons use "fill-rule" and "clip-rule". Check if we can reexport those and add them back here.
 */
const FORBIDDEN_PATH_ATTRS = ["fill"]; //
const ADDED_ICONS = new Set();
const INVALID_ICONS = new Set();

/**
 * Returns true if the svg asset is valid, false otherwise.
 */
async function validateSVG(filename: string) {
  const data = await readFile(join(ICONS_DIR, filename), "utf8");
  const svg = new DOMParser().parseFromString(data, "application/xml");

  // If there isn't an SVG element it isn't valid
  if (svg.getElementsByTagName("svg").length !== 1) {
    return false;
  }
  const paths = svg.getElementsByTagName("path");
  // SVGs need at least one path
  if (paths.length === 0) {
    return false;
  }
  const path = paths[0];

  // Check attributes of path
  const pathProps = Object.values(path.attributes).map(({ name }) => name);

  const foundForbiddenAttrs: string[] = [];
  const hasForbiddenProps = pathProps.some((pathAttr) => {
    if (FORBIDDEN_PATH_ATTRS.includes(pathAttr)) {
      foundForbiddenAttrs.push(pathAttr);
      return true;
    }
    return false;
  });
  if (hasForbiddenProps) {
    console.error(`- ${pc.underline(filename)} has forbidden attributes (${foundForbiddenAttrs.join(", ")})`);
    return false;
  }

  return true;
}

/**
 * Performs validation on all icon assets.
 *
 * Throws an error if a duplicate is detected.
 * Returns successfully otherwise.
 */
async function validateIcons() {
  console.log("Validating icons..");
  const files = await readdir(ICONS_DIR);
  for (const file of files) {
    const camelCasedFilename = camelcase(file.replace(/\.svg$/, ""));
    const isValidSVG = await validateSVG(file);
    if (!isValidSVG) {
      INVALID_ICONS.add(file);
    }

    if (ADDED_ICONS.has(camelCasedFilename)) {
      INVALID_ICONS.add(file);
      console.error(`- ${pc.underline(camelCasedFilename)} already exists. Check for underscores in the filename."`);
    }
    ADDED_ICONS.add(camelCasedFilename);
  }

  const nrOfInvalidIcons = INVALID_ICONS.size;
  if (nrOfInvalidIcons > 0) {
    console.error(pc.red(`\n${nrOfInvalidIcons} invalid icons detected`));
    process.exit(1);
  } else {
    console.log(pc.green("All good!"));
  }
  console.log("Done");
}

await validateIcons();