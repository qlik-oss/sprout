import path from "node:path";
import { cwd } from "process";
import type { DesignToken } from "style-dictionary/types";

const CWD = cwd();

export function sourceTokenSetsFn(configTokenSets: object, source: string) {
  return Object.entries(configTokenSets)
    .filter((tokenSet) => tokenSet[1] === "source")
    .map((tokenSet) => path.resolve(CWD, source, `${tokenSet[0]}.json`));
}

export function includeTokenSetsFn(configTokenSets: object, source: string) {
  return Object.entries(configTokenSets)
    .filter((tokenSet) => tokenSet[1] !== "source")
    .map((tokenSet) => path.resolve(CWD, source, `${tokenSet[0]}.json`));
}

export function commonFilterFn(token: DesignToken) {
  return token.name?.startsWith("sprout") && !token.isSource;
}

const expandTypes = ["typography", "border", "transition"];

export const commonShorthandFilterFn = (token: DesignToken) =>
  token.name?.startsWith("sprout") && !token.isSource && expandTypes.includes(token.$type as string);
