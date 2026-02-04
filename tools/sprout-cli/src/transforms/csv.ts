import { expandTypesMap, register } from "@tokens-studio/sd-transforms";
import { mkdtemp, rm } from "node:fs/promises";
import path from "node:path";
import { cwd } from "node:process";
import type { Config } from "style-dictionary";
import StyleDictionary from "style-dictionary";
import { getConfig } from "../config";
import { CSVList, CSVListWithHeader, CustomDataVariables } from "../style-dictionary/custom-formats";
import { concatFiles } from "../util/file-concat-utils";
import { commonFilterFn, commonShorthandFilterFn, includeTokenSetsFn, sourceTokenSetsFn } from "../util/path";
import { runStyleDictionnaryBuild } from "../util/run";
import { shorthandTransforms, transformerOptions } from "../util/transforms";
import type { ActionOptions } from "./options";

const csvTransforms = [
  "ts/resolveMath",
  "ts/size/px",
  "ts/opacity",
  "ts/color/modifiers",
  "attribute/color",
  "shadow/css/shorthand",
  "attribute/cti",
  "name/kebab",
  "color/hex",
];

export async function action(opts: ActionOptions) {
  const CWD = cwd();
  const tempDirPath = await mkdtemp("tmp");
  const csvTokenConfig = await getConfig(opts.config);

  await register(StyleDictionary, transformerOptions);

  StyleDictionary.registerFormat(CustomDataVariables);
  StyleDictionary.registerFormat(CSVListWithHeader);
  StyleDictionary.registerFormat(CSVList);

  const csvConfigs: Config = {
    source: sourceTokenSetsFn(csvTokenConfig.tokenSet, opts.source),
    include: includeTokenSetsFn(csvTokenConfig.tokenSet, opts.source),
    preprocessors: ["tokens-studio"],
    expand: {
      include: ["typography", "border", "transition"],
      typesMap: expandTypesMap,
    },
    platforms: {
      csv: {
        transforms: csvTransforms,
        buildPath: `${tempDirPath}/csv/`,
        files: [
          {
            destination: `${tempDirPath}/csv/a-tokens.csv`,
            format: "csv/list/with-header",
            filter: commonFilterFn,
          },
        ],
      },
    },
  };

  const csvCompositeConfigs: Config = {
    source: sourceTokenSetsFn(csvTokenConfig.tokenSet, opts.source),
    include: includeTokenSetsFn(csvTokenConfig.tokenSet, opts.source),
    preprocessors: ["tokens-studio"],
    platforms: {
      csv: {
        transforms: csvTransforms.concat(shorthandTransforms),
        buildPath: `${tempDirPath}/csv/`,
        files: [
          {
            destination: `${tempDirPath}/csv/shorthands-tokens.csv`,
            format: "csv/list",
            filter: commonShorthandFilterFn,
          },
        ],
      },
    },
  };

  try {
    await runStyleDictionnaryBuild([csvConfigs]);
    await runStyleDictionnaryBuild([csvCompositeConfigs]);
    await concatFiles(path.resolve(CWD, tempDirPath, "csv"), path.resolve(CWD, opts.output, "csv/sprout-tokens.csv"));
  } catch (error) {
    console.error("Error during CSV generation:", error);
  }
  await rm(tempDirPath, { recursive: true });
}
