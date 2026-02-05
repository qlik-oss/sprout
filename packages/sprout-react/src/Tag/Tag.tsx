import {
  type ReactElement,
  type ReactNode,
  type Ref,
  forwardRef,
  isValidElement,
} from "react";

import sprout from "@qlik/sprout-css-modules";

import { Badge, type BadgeProps } from "../Badge";
import { InputButton } from "../InputButton";
import { TextOverflow } from "../TextOverflow/TextOverflow";
import { Tooltip } from "../Tooltip";
import { useI18n } from "../hooks/useI18n";
import type { HTMLSpanProps } from "../htmlTypes";

import style from "./Tag.module.css";

const CHARACTER_LIMIT = 25;

export type TagCoreProps = {
  onRemove?: () => void;
  avatar?: ReactNode;
  icon?: ReactNode;
  badge?: BadgeProps | ReactElement<typeof Badge>;
  removeLabel?: string;
  text: string;
  size?: "s";
  color?: "error" | "info" | "success" | "warning";
};

export type TagProps = Omit<HTMLSpanProps, "children"> & TagCoreProps;

export const Tag = forwardRef<HTMLSpanElement, TagProps>(TagBase);

function TagBase(
  {
    avatar,
    badge,
    icon,
    size,
    text,
    color,
    onRemove,
    removeLabel,
    ...props
  }: TagProps,
  ref?: Ref<HTMLSpanElement>,
) {
  const t = useI18n();
  const removeLabelDefault = t("tag.remove");

  const content = (
    <TextOverflow
      text={text}
      maxLength={CHARACTER_LIMIT}
      className={style.tag_text}
      variant="tooltip"
    />
  );

  const variant = color ? style[color] : "";
  let badgeRendered: ReactNode;
  if (!isValidElement(badge) && typeof badge === "object") {
    badgeRendered = <Badge {...badge} />;
  } else {
    badgeRendered = badge as ReactNode;
  }
  return (
    <span
      ref={ref}
      className={sprout.classNames(
        "items-center",
        "bg-default",
        "border-box",
        "border-strong",
        "gap-s",
        "grow-0",
        "inline-flex",
        "justify-center",
        "overflow-hidden",
        "radius-pill",
        "text-default",
        "w-fit",
        style.tag,
        {
          [style.tag_small]: size === "s",
          [variant]: !!color,
        },
      )}
      {...props}
    >
      {!!icon && <span className={style.tag_icon}>{icon}</span>}
      {avatar}
      {content}
      {!!badgeRendered && (
        <span className={style.tag_badge}>{badgeRendered}</span>
      )}

      {!!onRemove && (
        <Tooltip title={removeLabel ?? removeLabelDefault}>
          <InputButton
            onClick={onRemove}
            aria-label={removeLabel || removeLabelDefault}
            size={size ? "xs" : "s"}
          />
        </Tooltip>
      )}
    </span>
  );
}

TagBase.displayName = "Tag";
