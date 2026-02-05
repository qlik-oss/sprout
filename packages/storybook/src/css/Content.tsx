import type { ReactNode } from "react";

import sprout, { type AllClasses } from "@qlik/sprout-css-modules";

import src from "../internal/assets/image.png";

export const BOX_CLASSES: Array<AllClasses> = ["flex", "border-box"];

export const CONTAINER_CLASSES: Array<AllClasses> = [
  "flex",
  "border-box",
  "flex-row",
  "w-fit",
  "gap-xl",
  "border-strong",
  "p-xl",
  "bg-inverse",
  "font-body-s",
  "text-inverse",
];

export const CONTENT_CLASSES: Array<AllClasses> = [
  "flex",
  "border-box",
  "bg-default",
  "border-moderate",
  "p-xl",
  "items_center",
  "justify_center",
  "font-body-s",
  "text-default",
];

export const GRID_CONTENT_CLASSES: Array<AllClasses> = [
  "border-box",
  "bg-default",
  "border-moderate",
  "p-m",
  "items_center",
  "justify_center",
  "font-body-s",
  "text-default",
  "break-words",
  "overflow_hidden",
];

export const CONTENT_PROPS_TOKEN: Array<AllClasses> = CONTENT_CLASSES.filter(
  (c) => !c.startsWith("border") || c === "border-box",
);

export const PROPERTY_ROW_PROPS: Array<AllClasses> = [
  "flex",
  "flex-row",
  "border-box",
  "gap-xl",
];
export const PROPERTY_COL_PROPS: Array<AllClasses> = [
  "flex",
  "flex-col",
  "border-box",
  "items_start",
];

export function PropertyTile({ children }: { children: ReactNode }) {
  return (
    <h2 className={sprout.classNames("font-heading-l", "text-default", "py-l")}>
      {children}
    </h2>
  );
}

export function PropertyValue({ children }: { children: ReactNode }) {
  return (
    <h3 className={sprout.classNames("font-label-m", "text-default", "py-m")}>
      {children}
    </h3>
  );
}

export function omit(
  arr: Array<AllClasses>,
  ...values: Array<AllClasses>
): Array<AllClasses> {
  return arr.filter((item) => !values.includes(item));
}

export const PARAGRAPH = `Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat`;
export { src };

export function Item({ children }: { children: ReactNode }) {
  return (
    <div
      className={sprout.classNames(
        "border-default",
        "border-box",
        "flex",
        "items-center",
        "p-m",
        "font-body-s",
        "text-default",
      )}
    >
      {children}
    </div>
  );
}
