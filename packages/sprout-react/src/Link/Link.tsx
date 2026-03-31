/* eslint-disable @typescript-eslint/no-redeclare */
import { type MouseEvent, type ReactNode, type Ref, forwardRef } from "react";

import { OpenInNewWindowIcon } from "@qlik/sprout-icons/react";

import type { PossibleValues } from "../Typography";
import { classNames } from "../classNames";
import type { HTMLAnchorProps } from "../htmlTypes";

import style from "./Link.module.css";

export type LinkProps = Omit<HTMLAnchorProps, "className"> & {
  /** if the link is disabled */
  disabled?: boolean;
  /** @deprecated use children instead */
  label?: string;
  children: ReactNode;
  isExternal?: boolean;
  withEllipsis?: boolean;
  font?: PossibleValues["font"] | "inherit";
};

/**
 * The Link component accepts all the native anchor props outside of `className`, and also supports the following custom props:
 * @param children - the content of the link.
 * @param disabled - whether the link is disabled.
 * @param isExternal - whether clicking opens a new tab, also renders an external link icon.
 * @param withEllipsis - whether to truncate long link text with an ellipsis.
 * @param font - the font style applied to the link text. Defaults to body_m.
 * @param label - deprecated use `children` instead.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(LinkBase);

function LinkBase(
  {
    onClick,
    disabled,
    font = "body_m",
    isExternal,
    href,
    target,
    withEllipsis,
    label,
    children,
    title,
    rel,
    ...rest
  }: LinkProps,
  ref?: Ref<HTMLAnchorElement>
) {
  return (
    <a
      target={target}
      // avoid focus when disabled (not supported natively)
      tabIndex={disabled ? -1 : undefined}
      // avoid security issue when using target
      rel={rel || (target ? "noopener noreferrer" : undefined)}
      {...rest}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        // prevent the click on disabled link
        if (disabled) {
          e.preventDefault();
          return;
        }
        if (onClick) {
          onClick(e);
        }
      }}
      href={href}
      className={classNames(style.link, {
        "font-body-s": font === "inherit",
        [`font_${font}`]: font !== "inherit",
        [style.link_inherit]: font === "inherit",
        [style.with_ellipsis]: !!withEllipsis,
      })}
      title={title}
      aria-disabled={disabled}
      ref={ref}
    >
      <span
        className={classNames(style.link__text, {
          [style.with_ellipsis]: !!withEllipsis,
        })}
      >
        {children || label}
        {isExternal ? (
          <span className={style.link__external}>
            <OpenInNewWindowIcon />
          </span>
        ) : null}
      </span>
    </a>
  );
}

LinkBase.displayName = "Link";
