import StyleDictionary, { type Config } from "style-dictionary";

export async function runStyleDictionnaryBuild(configs: Config[]) {
  const results: Array<Promise<StyleDictionary>> = [];

  for (const cfg of configs) {
    const sd = new StyleDictionary(cfg);
    results.push(sd.hasInitialized);
    results.push(sd.buildAllPlatforms());
  }
  return Promise.all(results);
}
