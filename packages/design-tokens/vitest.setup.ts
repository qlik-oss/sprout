import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

// Ensure extension tokens are generated before running tests
export async function setup() {
  const tokenPath = join(__dirname, "generated/tokens/json/sprout-tokens.json");

  if (!existsSync(tokenPath)) {
    console.log("Extension tokens not found, generating...");
    execSync("pnpm gen-tokens", { stdio: "inherit", cwd: __dirname });
  }
}
