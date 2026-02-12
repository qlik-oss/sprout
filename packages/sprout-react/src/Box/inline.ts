import type { CSSProperties } from "react";

import type { sizing } from "@qlik/sprout-css-modules";

import { classNames } from "../classNames";
import type { ContainerSizing } from "./tokens";

type SizingWidth = sizing extends `w_${string}` ? `w_${string}` : never;
type SizingHeight = sizing extends `h_${string}` ? `h_${string}` : never;

export type InlineStyleProps = {
  width?: ContainerSizing | SizingWidth | CSSProperties["width"];
  maxWidth?: ContainerSizing | CSSProperties["maxWidth"];
  minWidth?: ContainerSizing | CSSProperties["minWidth"];
  height?: ContainerSizing | SizingHeight | CSSProperties["height"];
  minHeight?: CSSProperties["minHeight"];
  maxHeight?: CSSProperties["maxHeight"];
  shrink?: CSSProperties["flexShrink"];
  basis?: CSSProperties["flexBasis"];
  grow?: boolean | CSSProperties["flexGrow"];
};

const CONTAINER_SIZE = [
  "xxs",
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "xxl",
  "3xl",
  "4xl",
  "full",
  "fit",
  "min",
  "max",
];

export const INLINE_PROPS: Array<keyof InlineStyleProps> = [
  "width",
  "maxWidth",
  "minWidth",
  "height",
  "minHeight",
  "maxHeight",
  "shrink",
  "basis",
  "grow",
];

export function getInlineStyleProps<
  T extends InlineStyleProps & { style?: CSSProperties; className?: string },
>(props: T) {
  const {
    shrink,
    basis,
    grow,
    style,
    width,
    height,
    maxHeight,
    maxWidth,
    minWidth,
    minHeight,
    className,
    ...rest
  } = props;
  const newClassName: Record<string, boolean> = {};
  const newStyle: CSSProperties = {
    ...(style || {}),
  };
  newStyle.containerType = "normal";
  if (width) {
    if (CONTAINER_SIZE.includes(width as ContainerSizing)) {
      newClassName[`w_${width}`] = true;
    } else {
      newStyle.width = width;
    }
  }
  if (height) {
    if (CONTAINER_SIZE.includes(height as ContainerSizing)) {
      newClassName[`h_${height}`] = true;
    } else {
      newStyle.height = height;
    }
  }
  if (minWidth) {
    if (CONTAINER_SIZE.includes(minWidth as ContainerSizing)) {
      newStyle.minWidth = `var(--sprout-container-sizing-${minWidth})`;
    } else {
      newStyle.minWidth = minWidth;
    }
  }
  if (maxWidth) {
    if (CONTAINER_SIZE.includes(maxWidth as ContainerSizing)) {
      newStyle.maxWidth = `var(--sprout-container-sizing-${maxWidth})`;
    } else {
      newStyle.maxWidth = maxWidth;
    }
  }
  if (minHeight) {
    newStyle.minHeight = minHeight;
  }
  if (maxHeight) {
    newStyle.maxHeight = maxHeight;
  }
  if (grow) {
    if (typeof grow === "number") {
      newStyle.flexGrow = grow;
    } else {
      newStyle.flexGrow = 1;
    }
  }
  if (shrink !== undefined) {
    newStyle.flexShrink = shrink;
  }
  if (basis !== undefined) {
    newStyle.flexBasis = basis;
  }
  return {
    style: newStyle,
    className: classNames(newClassName, {
      [className || ""]: !!className,
    }),
    ...rest,
  };
}
