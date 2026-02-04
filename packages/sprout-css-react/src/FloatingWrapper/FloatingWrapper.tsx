import { type ReactNode, type Ref, forwardRef } from "react";

import { classNames } from "../classNames";

export type FloatingWrapperProps = {
  children: ReactNode;
};

export const FloatingWrapper = forwardRef<HTMLDivElement, FloatingWrapperProps>(
  FloatingWrapperBase,
);

function FloatingWrapperBase(
  { children }: FloatingWrapperProps,
  ref?: Ref<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className={classNames(
        "flex",
        "flex-row",
        "border-box",
        "w-fit",
        "box-shadow-default",
        "radius-pill",
        "bg-default",
        "items-stretch",
      )}
    >
      {children}
    </div>
  );
}

FloatingWrapperBase.displayName = "FloatingWrapper";
