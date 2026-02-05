import { readFile, writeFile } from "fs/promises";
import { cwd } from "process";
import type { ActionOptions } from "./options";

type Tokens = Record<
  string,
  {
    $value: string;
    $type?: string;
    $description?: string;
  }
>;

function jsTokenKey(key: string): string {
  return key.replace("--sprout-", "").replaceAll("-", "_");
}

export async function action(opts: ActionOptions) {
  console.log("Generating JS tokens...");
  const CWD = cwd();

  const sourcePath = `${CWD}/${opts.output}/json/sprout-tokens.json`;
  const tokens: Tokens = await readFile(sourcePath, "utf-8").then((data) => JSON.parse(data));
  const tokenKeys = Object.keys(tokens);
  tokenKeys.sort();

  const jsBufferLines: string[] = [
    `/**
 * Do not edit directly - auto-generated
 */

export const tokens = {
`,
  ];
  tokenKeys.forEach((key) => {
    const token = tokens[key];
    const doc = `  /** ${token.$description}
   * Type: ${token.$type}
   */
`;
    jsBufferLines.push(`${doc}  ${jsTokenKey(key)}: "var(${key}, ${token.$value})",\n`);
  });
  jsBufferLines.push("};\n");
  const jsBuffer = jsBufferLines.join("");
  await writeFile(`${CWD}/${opts.output}/js/sprout-tokens.js`, jsBuffer, "utf-8");

  const dtsBufferLines: string[] = [
    `/**
 * Do not edit directly - auto-generated
 */

`,
  ];
  dtsBufferLines.push(`export const tokens: {
`);
  tokenKeys.forEach((key) => {
    dtsBufferLines.push(`  ${jsTokenKey(key)}: string;\n`);
  });
  dtsBufferLines.push("};\n");
  const dtsBuffer = dtsBufferLines.join("");
  await writeFile(`${CWD}/${opts.output}/js/sprout-tokens.d.ts`, dtsBuffer, "utf-8");
  return undefined;
}
