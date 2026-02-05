import type { DesignToken, Transform } from "style-dictionary/types";

// leaves references to the semantic layer ("sprout-"") in css properties
export const referencesCssVarsSproutRefs: Transform = {
  name: "references/cssVarsSproutRefs",
  type: "value",
  transitive: true,
  filter(prop: DesignToken) {
    // matches string tokens in the semantic layer that is not to be transformed by token studio
    return (
      typeof prop.original.$value === "string" &&
      prop.original.$value.match(/\{sprout\./) !== null &&
      (!prop.original.$extensions || !Object.keys(prop.original.$extensions["studio.tokens"]).length)
    );
  },
  transform(prop: DesignToken) {
    return prop.original.$value
      .replaceAll(/\{(sprout\..+?)\}/g, "var(--$1)")
      .replaceAll(/sprout\.([a-z,-]*)\.([a-z,-]*)\.([a-z,-]*)/g, "sprout-$1-$2-$3"); // turning dot notation to kebab-case
  },
};
