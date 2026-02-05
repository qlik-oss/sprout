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
