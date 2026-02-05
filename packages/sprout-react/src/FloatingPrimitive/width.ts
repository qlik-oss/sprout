import type { CSSProperties } from "react";

import { tokens } from "@qlik/design-tokens";

export type WidthStrategy =
  | "reference"
  | "xxs"
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl"
  | "screen"
  | CSSProperties["width"];

export function getWidth(
  width: WidthStrategy,
  referenceWidth: number,
): CSSProperties["width"] {
  // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
  switch (width) {
    case "reference":
      return `${referenceWidth}px`;
    case "screen":
      return "calc(100vw - var(--sprout-common-spacing-m) * 2)";
    case "xxs":
      return tokens.container_sizing_xxs;
    case "xs":
      return tokens.container_sizing_xs;
    case "s":
      return tokens.container_sizing_s;
    case "m":
      return tokens.container_sizing_m;
    case "l":
      return tokens.container_sizing_l;
    case "xl":
      return tokens.container_sizing_xl;
    default:
      return width;
  }
}
