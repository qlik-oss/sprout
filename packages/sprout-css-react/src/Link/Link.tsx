/* eslint-disable @typescript-eslint/no-redeclare */
import { type MouseEvent, type ReactNode, type Ref, forwardRef } from "react";

import GotoIcon from "@qlik/sprout-icons/react/Goto";

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
  ref?: Ref<HTMLAnchorElement>,
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
            <GotoIcon width={undefined} height={undefined} />
          </span>
        ) : null}
      </span>
    </a>
  );
}

LinkBase.displayName = "Link";
