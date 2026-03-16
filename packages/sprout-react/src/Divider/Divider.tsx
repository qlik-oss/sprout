import { type Ref, forwardRef } from "react";

import sprout from "@qlik/sprout-css-modules";

import type { HTMLHRProps } from "../htmlTypes";

import style from "./Divider.module.css";

export type DividerOptions = {
  /**
   * Separator's orientation.
   */
  orientation?: "horizontal" | "vertical";
};

export type DividerHTMLProps = HTMLHRProps;

export type DividerProps =
  | ({
      orientation?: "horizontal";
      width?: "auto" | "100%";
      height?: never;
    } & DividerHTMLProps)
  | ({
      orientation: "vertical";
      height?: "auto" | "100%";
      width?: never;
    } & DividerHTMLProps);

/**
 * The Divider component accepts all the native hr props and also supports the following custom props:
 * @param orientation - the separator orientation, can be horizontal or vertical. Defaults to horizontal.
 * @param width - the width of the divider when horizontal, can be auto or 100%. Defaults to 100%.
 * @param height - the height of the divider when vertical, can be auto or 100%. Defaults to auto.
 */
export const Divider = forwardRef<HTMLHRElement, DividerProps>(DividerBase);

function DividerBase(props: DividerProps, ref?: Ref<HTMLHRElement>) {
  const {
    orientation = "horizontal",
    height = "auto",
    width = "100%",
    ...rest
  } = props;

  return (
    <hr
      {...rest}
      aria-orientation={orientation}
      ref={ref}
      className={sprout.classNames("m-0", style.divider, {
        "w-full": orientation === "horizontal" && width === "100%",
        "w-auto": orientation === "horizontal" && width === "auto",
        "h-full": orientation === "vertical" && height === "100%",
        "h-auto": orientation === "vertical" && height === "auto",
      })}
    />
  );
}

DividerBase.displayName = "Divider";
