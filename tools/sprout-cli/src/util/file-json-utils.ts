import * as fs from "fs/promises";

// Function to read and parse a JSON file
const readJSONFile = async (filePath: string): Promise<object> => {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
};

// Recursive function to deep merge two objects
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const deepMerge = (target: any, source: any): any => {
  for (const key in source) {
    if (source[key] instanceof Object && key in target) {
      Object.assign(source[key], deepMerge(target[key], source[key]));
    }
  }
  return { ...target, ...source };
};

// Function to merge multiple JSON objects deeply
export const mergeJSONFiles = async (filePaths: string[]): Promise<object> => {
  let mergedObject = {};

  // use for loop with await to always generate the same result
  for (let i = 0; i < filePaths.length; ++i) {
    const filePath = filePaths[i];
    // eslint-disable-next-line no-await-in-loop
    const obj = await readJSONFile(filePath);
    mergedObject = deepMerge(mergedObject, obj);
  }
  return mergedObject;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const extractTokensRecursive = (obj: any, tokens: Record<string, number>) => {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      extractTokensRecursive(obj[key], tokens);
    } else {
      const token = `var(${key})`;
      if (!tokens[token]) {
        // it is a token value as string
        // eslint-disable-next-line no-param-reassign
        tokens[token] = 1;
      }
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const extractTokenValues = (json: any): Record<string, number> => {
  const tokens: Record<string, number> = {};
  extractTokensRecursive(json, tokens);
  return tokens;
};
