import {
  type ComponentPropsWithoutRef,
  type ForwardedRef,
  type ReactNode,
  forwardRef,
} from "react";

import type { ViewportSize } from "@qlik/sprout-css-modules";
import { useMedia } from "@qlik/sprout-react-hooks";

import { classNames } from "../classNames";

type ColumnClass =
  | "col_span_1"
  | "col_span_2"
  | "col_span_3"
  | "col_span_4"
  | "col_span_5"
  | "col_span_6"
  | "col_span_7"
  | "col_span_8"
  | "col_span_9"
  | "col_span_10"
  | "col_span_11"
  | "col_span_12"
  | "col_span_13"
  | "col_span_14"
  | "col_span_15"
  | "col_span_16";

type ColumnProps = Partial<Record<ViewportSize, ColumnClass>> & {
  children?: ReactNode;
} & ComponentPropsWithoutRef<"div">;

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  gap?: "responsive" | "none";
  margin?: "responsive" | "none";
};

function Container(
  {
    children,
    gap = "responsive",
    margin = "none",
    className,
    ...props
  }: ContainerProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const media = useMedia();
  const gapClass =
    gap === "responsive" &&
    media.classNames({
      s: "gap_xl",
      m: "gap_xl",
      l: "gap_xxl",
      xl: "gap_3xl",
    });
  const marginClass =
    margin === "responsive" &&
    media.classNames({
      s: "m_xl",
      m: "m_xxl",
      l: "m_xxl",
      xl: "m_3xl",
    });
  return (
    <div
      ref={ref}
      className={classNames("grid", "grid-cols-16", {
        [className || ""]: !!className,
        [gapClass || ""]: !!gapClass,
        [marginClass || ""]: !!marginClass,
      })}
      {...props}
    >
      {children}
    </div>
  );
}

function Column(
  { s, m, l, xl, className, children, ...props }: ColumnProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const media = useMedia();

  return (
    <div
      ref={ref}
      className={media.classNames(
        {
          s,
          m,
          l,
          xl,
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export type GridProps = {
  Container: ContainerProps;
  Column: ColumnProps;
};

export const Grid = {
  Container: forwardRef<HTMLDivElement, ContainerProps>(Container),
  Column: forwardRef<HTMLDivElement, ColumnProps>(Column),
};
