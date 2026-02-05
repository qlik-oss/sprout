import { type CSSProperties, type Ref, forwardRef } from "react";

import { classNames } from "../classNames";
import type { HTMLSpanProps } from "../htmlTypes";

import styles from "./Skeleton.module.css";

type SkeletonVariant =
  | "text"
  | "circle"
  | "rectangle"
  | "Button"
  | "IconButton"
  | "Input"
  | "InputField";

export type SkeletonProps = HTMLSpanProps & {
  variant: SkeletonVariant;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
};

export const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>(
  SkeletonBase,
);

function SkeletonBase(
  { width, height, variant = "text", ...props }: SkeletonProps,
  ref?: Ref<HTMLSpanElement>,
) {
  const style: CSSProperties = {
    inlineSize: width,
    blockSize: height,
  };
  if (variant === "InputField") {
    return (
      <div className={classNames("flex", "flex-col", "gap-m")}>
        <Skeleton variant="text" />
        <Skeleton variant="Input" />
      </div>
    );
  }
  return (
    <span
      className={styles.skeleton}
      {...props}
      data-variant={variant}
      ref={ref}
      aria-hidden
      style={style}
    />
  );
}

SkeletonBase.displayName = "Skeleton";
