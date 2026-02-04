import { type ReactNode, type Ref, forwardRef } from "react";

import sprout from "@qlik/sprout-css-modules";

import type { HTMLDivProps } from "../htmlTypes";

import style from "./Toast.module.css";

export type ToastContainerProps = {
  children?: ReactNode;
  placement?:
    | "top"
    | "bottom"
    | "top-end"
    | "top-start"
    | "bottom-end"
    | "bottom-start";
} & HTMLDivProps;

export const ToastContainer = forwardRef<HTMLDivElement, ToastContainerProps>(
  ToastContainerBase,
);

function ToastContainerBase(
  { placement, children, ...props }: ToastContainerProps,
  ref?: Ref<HTMLDivElement>,
) {
  return (
    <div
      data-placement={placement || "top"}
      ref={ref}
      className={sprout.classNames(
        "flex",
        "fixed",
        "flex-col",
        "gap-m",
        "w-fit",
        "z-time-sensitive",
        style.container,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

ToastContainerBase.displayName = "Toast.Container";
