import { promises as fs } from "fs";

export async function checkIfFolderExists(folderPath: string): Promise<boolean> {
  try {
    const stats = await fs.stat(folderPath);
    return stats.isDirectory();
  } catch (err) {
    console.error(`Error checking folder existence: ${err}`);
    return false;
  }
}
