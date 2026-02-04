import { expandTypesMap, register } from "@tokens-studio/sd-transforms";
import { rm } from "node:fs/promises";
import path from "node:path";
import { cwd } from "process";
import StyleDictionary, { type Config } from "style-dictionary";
import { getConfig } from "../config";
import { CustomDataVariables } from "../style-dictionary/custom-formats";
import { referencesCssVarsSproutRefs } from "../style-dictionary/custom-transforms";
import { concatFiles } from "../util/file-concat-utils";
import { commonFilterFn, commonShorthandFilterFn, includeTokenSetsFn, sourceTokenSetsFn } from "../util/path";
import { runStyleDictionnaryBuild } from "../util/run";
import { commonTransforms, shorthandTransforms, transformerOptions } from "../util/transforms";
import type { ActionOptions } from "./options";

export async function action(opts: ActionOptions) {
  const CWD = cwd();

  await register(StyleDictionary, transformerOptions);
  StyleDictionary.registerFormat(CustomDataVariables);
  StyleDictionary.registerTransform(referencesCssVarsSproutRefs);

  const config = await getConfig(opts.config);

  const dataConfigs: Config[] = config.theme.map((thm) => ({
    source: sourceTokenSetsFn(thm.selectedTokenSets, opts.source),
    include: includeTokenSetsFn(thm.selectedTokenSets, opts.source),
    preprocessors: ["tokens-studio"],
    expand: {
      include: ["typography", "border", "transition"],
      typesMap: expandTypesMap,
    },
    log: { verbosity: "verbose" },
    platforms: {
      css: {
        transforms: commonTransforms,
        buildPath: `${CWD}/${opts.output}/css/tmp/`,
        files: [
          {
            destination: path.join(thm.group, `${thm.name}.css`),
            format: "css/custom-data-variables",
            filter: commonFilterFn,
          },
        ],
      },
    },
  }));

  const dataCompositeConfigs: Config[] = config.theme.map((thm) => ({
    source: sourceTokenSetsFn(thm.selectedTokenSets, opts.source),
    include: includeTokenSetsFn(thm.selectedTokenSets, opts.source),
    preprocessors: ["tokens-studio"],
    platforms: {
      css: {
        transforms: commonTransforms.concat(shorthandTransforms),
        buildPath: `${CWD}/${opts.output}/css/tmp/`,
        files: [
          {
            destination: path.join("shorthands", thm.group, `${thm.name}.css`),
            format: "css/custom-data-variables",
            filter: commonShorthandFilterFn,
          },
        ],
      },
    },
  }));
  try {
    await runStyleDictionnaryBuild(dataConfigs);
    await runStyleDictionnaryBuild(dataCompositeConfigs);
    // compile files to a single css file
    await concatFiles(
      path.resolve(CWD, opts.output, "css/tmp"),
      path.resolve(CWD, opts.output, "css/sprout-tokens.css"),
    );
  } catch (error) {
    console.error("Error during CSS generation:", error);
  }
  await rm(path.resolve(CWD, opts.output, "css/tmp"), { recursive: true, force: true });
}
