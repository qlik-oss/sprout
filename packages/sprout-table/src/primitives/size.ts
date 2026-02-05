import type { CSSProperties } from "react";
import { COL_DEFAULT_WIDTH } from "./constant";

export type CellSizeProps = {
  width?: number;
  minWidth?: number;
  maxWidth?: number;
};

export function getCellStyle(style: CSSProperties, props: CellSizeProps): CSSProperties {
  const minWidth = props.minWidth || 16;
  return {
    flexShrink: 0,
    width: `${props.width || COL_DEFAULT_WIDTH}px`,
    minWidth: `${minWidth}px`,
    maxWidth: props.maxWidth ? `${props.maxWidth}px` : undefined,
    ...style,
  };
}
