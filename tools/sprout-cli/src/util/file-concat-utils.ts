import { promises as fsPromises, type Dirent } from "fs";
import * as path from "path";

async function concatenateFiles(directoryPath: string, outputFilePath: string): Promise<void> {
  try {
    const files: string[] = await getAllFiles(directoryPath);
    const cssContent: string = await concatenateFilesContent(files);
    await fsPromises.writeFile(outputFilePath, cssContent);
    console.log(`File created successfully at ${outputFilePath}`);
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getAllFiles(directoryPath: string): Promise<string[]> {
  const files: string[] = [];
  const entries: Dirent[] = await fsPromises.readdir(directoryPath, { withFileTypes: true });

  // use for loop with await to always generate the same result
  for (let i = 0; i < entries.length; ++i) {
    const entry = entries[i];
    const fullPath: string = path.join(directoryPath, entry.name);
    if (entry.isDirectory()) {
      // eslint-disable-next-line no-await-in-loop
      const nestedFiles: string[] = await getAllFiles(fullPath);
      files.push(...nestedFiles);
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function concatenateFilesContent(files: string[]): Promise<string> {
  const fileContents: string[] = [];

  // use for loop with await to always generate the same result
  for (let i = 0; i < files.length; ++i) {
    const file = files[i];
    // eslint-disable-next-line no-await-in-loop
    fileContents.push(await fsPromises.readFile(file, "utf8"));
  }

  return fileContents.join("\n");
}
export function concatFiles(dirPath: string, outputPath: string) {
  return concatenateFiles(dirPath, outputPath);
}
