import { tokens } from "@qlik/design-tokens";
import { useLayoutEffect } from "react";
import { useId } from "./useId";

/**
 * Copy paste from design-tokens from now as the release is broken
 */
type Tokens = typeof tokens;
type TokenKey = keyof typeof tokens;

const TOKEN_KEYS = Object.keys(tokens);

function isATokenKey(key: string): key is TokenKey {
  return TOKEN_KEYS.includes(key as TokenKey);
}

function getKeys(values: Partial<Tokens>): Array<TokenKey> {
  const keys = Object.keys(values);
  return keys.filter(isATokenKey);
}

function removeStyleSheet(selectorId: string) {
  document.querySelector(`#${selectorId}`)?.remove();
}

export function useStyleOverride(customValues: Partial<Tokens>, querySelector = "body") {
  const id = useId().replace(/:/g, "_");
  useLayoutEffect(() => {
    removeStyleSheet(id);
    const customKeys = getKeys(customValues);
    const styleSheet = document.createElement("style");
    styleSheet.id = id;
    const buff = [];
    for (const key of customKeys) {
      const value = customValues[key];
      buff.push(`  --sprout-${key.replace(/_/g, "-")}: ${value};\n`);
    }
    styleSheet.innerText = `${querySelector} {\n${buff.join("")}}\n`;
    document.head.appendChild(styleSheet);
  }, [customValues, querySelector, id]);
  return () => {
    removeStyleSheet(id);
  };
}
