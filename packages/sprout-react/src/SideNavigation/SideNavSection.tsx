import { type Ref, forwardRef } from "react";

import { useId } from "@qlik/sprout-react-hooks";

import { classNames } from "../classNames";
import type { HTMLSectionProps } from "../htmlTypes";

export type SideNavSectionProps = {
  label?: string;
  level?: "h2" | "h3" | "h4" | "h5" | "h6";
} & HTMLSectionProps;

/**
 * The `SideNav.Section` component renders onto a `section` HTML element. It accepts all `HTMLSectionElement` attributes plus the following:
 * @param label - Optional visible label for the section.
 * @param level - Heading level for the section label (`h2` through `h6`). Defaults to `h2`.
 */
export const SideNavSection = forwardRef<HTMLDivElement, SideNavSectionProps>(
  SideNavSectionBase
);

function SideNavSectionBase(
  { label, level, children, ...props }: SideNavSectionProps,
  ref?: Ref<HTMLDivElement>
) {
  const id = useId();
  const Title = level || "h2";
  return (
    <section
      ref={ref}
      className={classNames("flex", "flex-col")}
      {...props}
      aria-labelledby={label ? id : undefined}
    >
      {!!label && (
        <Title
          className={classNames(
            "flex",
            "py-l",
            "px-xl",
            "font-label-s-emphasized",
            "text-default"
          )}
          id={id}
        >
          {label}
        </Title>
      )}
      {children}
    </section>
  );
}

SideNavSectionBase.displayName = "SideNav.Section";
