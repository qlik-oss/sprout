import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

describe("tokens.css", () => {
  it("should have a css file", async () => {
    const tokenPath = join(__dirname, "../generated/tokens/css/sprout-tokens.css");

    let tokensContent: string;
    try {
      tokensContent = await readFile(tokenPath, "utf-8");
    } catch {
      throw new Error(`Extension tokens not found at ${tokenPath}. Run 'pnpm gen-tokens' first.`);
    }

    expect(tokensContent).toBeDefined();
    // count the number of lines
    const lines = tokensContent.split("\n");
    expect(lines.length).toBe(1212); // Ensure we have no new tokens or token removed
  });
});
