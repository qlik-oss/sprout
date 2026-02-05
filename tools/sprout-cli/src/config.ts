import { readFile } from "node:fs/promises";
import path from "node:path";
import { cwd } from "node:process";

type TokenSet = Record<string, "source" | "enabled" | "disabled">;
type Structure = {
  id: string;
  name: string;
  group: string;
  selectedTokenSets: TokenSet;
};

export type Config = {
  tokenSet: TokenSet;
  theme: Array<Structure>;
};

export async function getConfig(pathStr: string): Promise<Config> {
  const configFilePath = path.join(cwd(), pathStr);

  return (await readFile(configFilePath, {
    encoding: "utf-8",
  }).then(JSON.parse)) as Config;
}
