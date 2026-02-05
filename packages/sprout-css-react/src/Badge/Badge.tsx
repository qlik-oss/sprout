import { Tooltip } from "../Tooltip";
import { classNames } from "../classNames";
import type { HTMLSpanProps } from "../htmlTypes";

import style from "./Badge.module.css";

/**
 * @deprecated Legacy API
 */
type LegacyDotProps = {
  /**
   * @deprecated Use `variant` instead.
   */
  type: "dot";
  /** Accepted historically, but ignored at runtime for dot */
  text?: string;
};

/**
 * @deprecated Legacy API
 */
type LegacyNumberProps = {
  /**
   * @deprecated Use `variant` instead.
   */
  type: "number";
  /** Accepted historically, but ignored at runtime for dot */
  text?: string;
};

/**
 * @deprecated Legacy API
 */
type LegacyImplicitDotProps = {
  /**
   * @deprecated Use `variant` instead.
   */
  type?: undefined;
  /** Accepted historically, but ignored at runtime for dot */
  text?: string;
};

type DotBadgeProps = {
  variant: "dot";
  text?: never;
};

type AlphanumericBadgeProps = {
  variant: "alphanumeric";
  text?: string;
  charLimit?: number;
};

/**
 * Allows omitting `variant`; defaults to a dot badge (no text).
 * Maintains the discriminated union by disallowing `text` when `variant`
 * is absent.
 */
type ImplicitDotProps = {
  variant?: undefined;
  text?: never;
};

type BaseBadgeProps = Omit<HTMLSpanProps, "type" | "color" | "text"> & {
  color?: "info" | "success" | "warning" | "danger" | "selected" | "neutral";
};

type NewApiProps = DotBadgeProps | AlphanumericBadgeProps | ImplicitDotProps;
/**
 * @deprecated Legacy API
 */
type LegacyApiProps =
  | LegacyDotProps
  | LegacyNumberProps
  | LegacyImplicitDotProps;

type NoMixProps<A, B> =
  | (A & {
      /**
       * @deprecated Use `variant` instead.
       */
      type?: never;
    })
  | (B & { variant?: never });

export type BadgeProps = BaseBadgeProps &
  NoMixProps<NewApiProps, LegacyApiProps>;

function isLegacyProps(
  props: BadgeProps,
): props is BadgeProps & LegacyApiProps {
  return "type" in props;
}

export function Badge(props: BadgeProps) {
  // eslint-disable-next-line react/destructuring-assignment
  const isOneCharText = props.text !== undefined && props.text.length === 1;
  const badgeClass = classNames(
    "flex",
    "border-box",
    "radius-round",
    "bg-inverse",
    "overflow-hidden",
    "font-label-xs-emphasized",
    style.badge,
    {
      "items-center": isOneCharText,
      "items-start": !isOneCharText,
    },
  );
  if (isLegacyProps(props)) {
    const { type, text, color, ...rest } = props as BaseBadgeProps &
      LegacyApiProps;
    const dataVariant = type === "number" ? "alphanumeric" : "dot";

    return (
      <span
        {...rest}
        className={badgeClass}
        data-variant={dataVariant}
        data-color={color}
      >
        {type === "number" && text}
      </span>
    );
  }

  const { variant, text, color, ...rest } = props as BaseBadgeProps &
    NewApiProps;
  const dataVariant = variant ?? "dot";

  const hasOverflow: boolean = text !== undefined && text.length >= 12;

  const element = (
    <span
      {...rest}
      className={badgeClass}
      data-variant={dataVariant}
      data-color={color}
    >
      {variant === "alphanumeric" && (
        <span
          className={classNames("truncate", "max-w-full", style.textwrap, {
            [style.overflow]: hasOverflow,
          })}
        >
          {text}
        </span>
      )}
    </span>
  );
  if (hasOverflow) {
    return <Tooltip title={text}>{element}</Tooltip>;
  }
  return element;
}
