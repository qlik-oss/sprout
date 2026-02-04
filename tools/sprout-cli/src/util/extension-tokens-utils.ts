import { readFile } from "node:fs/promises";

export interface ExtensionToken {
  value: string;
  comment?: string;
}

export type ExtensionTokenMap = Record<string, ExtensionToken>;

/**
 * Parse CSS file to extract comments for tokens
 * Matches inline comments: --token-name: value; /* comment \*\/
 * and block comments: /* comment *\/ \n --token-name: value;
 */
export async function parseTokenComments(cssFilePath: string): Promise<Map<string, string>> {
  const content = await readFile(cssFilePath, "utf-8");
  const commentMap = new Map<string, string>();

  // Match inline comments: --token-name: value; /* comment */
  const inlineRegex = /--([a-z0-9-]+):\s*[^;]+;\s*\/\*\s*(.+?)\s*\*\//g;
  for (const match of content.matchAll(inlineRegex)) {
    const tokenName = `--${match[1]}`;
    const comment = match[2].trim();
    commentMap.set(tokenName, comment);
  }

  // Match block comments before token: /* comment */ \n --token-name:
  const blockRegex = /\/\*\s*(.+?)\s*\*\/\s*\n\s*--([a-z0-9-]+):/g;
  for (const match of content.matchAll(blockRegex)) {
    const tokenName = `--${match[2]}`;
    const comment = match[1].trim();
    // Only set if not already set by inline comment (inline takes precedence)
    if (!commentMap.has(tokenName)) {
      commentMap.set(tokenName, comment);
    }
  }

  return commentMap;
}

/**
 * Flatten tokens from nested structure selecting light theme variants
 */
export function flattenLightThemeTokens(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tokens: Record<string, any>,
  commentMap: Map<string, string>,
): ExtensionTokenMap {
  const flattened: ExtensionTokenMap = {};

  // Helper to add tokens from a source object
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addTokens = (source: any) => {
    if (!source || typeof source !== "object") return;
    for (const [key, value] of Object.entries(source)) {
      if (key.startsWith("--sprout-") && typeof value === "string" && value.trim() !== "") {
        if (!(key in flattened)) {
          // Only add if not already present (first occurrence wins)
          flattened[key] = {
            value,
            comment: commentMap.get(key),
          };
        }
      }
    }
  };

  // Extract tokens from specific theme configuration (light theme defaults)
  // Order matters: later additions won't override earlier ones
  if (tokens["data-appearance"]?.["qlik-light"]) {
    addTokens(tokens["data-appearance"]["qlik-light"]);
  }
  if (tokens["data-density"]?.["comfortable"]) {
    addTokens(tokens["data-density"]["comfortable"]);
  }
  if (tokens["data-roundness"]?.["soft"]) {
    addTokens(tokens["data-roundness"]["soft"]);
  }
  if (tokens["data-sizing"]?.["mid-sized"]) {
    addTokens(tokens["data-sizing"]["mid-sized"]);
  }
  if (tokens["data-typography"]?.["source-sans"]) {
    addTokens(tokens["data-typography"]["source-sans"]);
  }
  // Root-level tokens (not under data-* attributes)
  if (tokens.root) {
    addTokens(tokens.root);
  }

  return flattened;
}
