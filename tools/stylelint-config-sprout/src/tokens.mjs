import { tokens } from "@qlik/design-tokens";

function findTokens(data) {
  return Object.keys(data).map((key) => `--sprout-${key.replaceAll("_", "-")}`);
}

export const TOKENS = findTokens(tokens);
