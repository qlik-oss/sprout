import { type ReactNode, type Ref, forwardRef } from "react";

import { classNames } from "../classNames";
import type { HTMLButtonProps } from "../htmlTypes";

import styles from "./Accordion.module.css";

type HeaderLevel = 2 | 3 | 4 | 5 | 6;

export type AccordionHeaderPropsType = {
  level?: HeaderLevel;
  opened: boolean;
  disabled?: boolean; // state enabled/disabled
  controlId: string;
  sectionId: string;
  icon?: ReactNode;
  header?: string;
  description?: string;
  width: "full" | "compact";
  onClick: () => unknown;
  chevronPosition?: "leading" | "trailing";
  affix?: ReactNode;
} & Omit<HTMLButtonProps, "type" | "onClick" | "disabled">;

function ChevronIcon({ opened }: { opened: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={
          opened
            ? "M7.99645 5.41421L13.1429 10.5607L13.85 9.85355L7.99645 4L2.1429 9.85355L2.85001 10.5607L7.99645 5.41421Z"
            : "M7.99641 10.5858L13.1429 5.43933L13.85 6.14644L7.99641 12L2.14285 6.14644L2.84996 5.43933L7.99641 10.5858Z"
        }
        fill="currentColor"
      />
    </svg>
  );
}

function HeaderLabel({
  children,
  className,
  level,
}: {
  children: ReactNode;
  className?: string;
  level?: HeaderLevel;
}) {
  // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
  switch (level) {
    case 2:
      return <h2 className={className}>{children}</h2>;
    case 3:
      return <h3 className={className}>{children}</h3>;
    case 4:
      return <h4 className={className}>{children}</h4>;
    case 5:
      return <h5 className={className}>{children}</h5>;
    case 6:
      return <h6 className={className}>{children}</h6>;
    default:
      return <span className={className}>{children}</span>;
  }
}

const headerDisabled = classNames(
  "cursor-not-allowed",
  "bg-disabled",
  "text-disabled",
);
const headerEnabled = classNames(
  "cursor-pointer",
  "bg-interactive",
  "text-default",
  "outline-focus-visible-inner",
);

export const AccordionHeader = forwardRef<
  HTMLButtonElement,
  AccordionHeaderPropsType
>(AccordionHeaderBase);

function AccordionHeaderBase(
  {
    level,
    controlId,
    sectionId,
    opened,
    onClick,
    icon,
    header,
    description,
    value,
    disabled = false,
    width,
    chevronPosition = "trailing",
    affix,
    ...props
  }: AccordionHeaderPropsType,
  ref?: Ref<HTMLButtonElement>,
) {
  return (
    <button
      id={controlId}
      aria-controls={sectionId}
      aria-expanded={opened}
      onClick={onClick}
      className={classNames(
        "flex-noreset",
        "flex-row",
        "flex-nowrap",
        "items-center",
        "gap-l",
        "bg-transparent",
        "py-density-m",
        "px-xl",
        "text-default",
        styles.header,
        {
          [headerEnabled]: !disabled,
          [headerDisabled]: disabled,
          "w-fit": width === "compact",
        },
      )}
      disabled={disabled}
      ref={ref}
      data-test="panel.header"
      data-testid="panel.header"
      type="button"
      {...props}
      style={{ maxInlineSize: "100%" }}
    >
      {chevronPosition === "leading" && (
        <div
          className={classNames(
            "icon-size-xl",
            "text-default",
            "flex-noreset",
            "flex-row",
            "flex-nowrap",
            "items-center",
            "justify-center",
          )}
        >
          <ChevronIcon opened={opened} />
        </div>
      )}

      {icon ? (
        <span
          className={classNames(
            "pt-s",
            "text-default",
            "self-start",
            styles.icon,
          )}
        >
          {icon}
        </span>
      ) : null}
      <div
        className={classNames(
          "flex-noreset",
          "grow-1",
          "flex-col",
          "items-start",
          "gap-s",
          "py-s",
          "pr-m",
          "overflow-hidden",
        )}
      >
        <HeaderLabel
          level={level}
          className={classNames(
            "font-label-s-emphasized",
            "p-0",
            "m-0",
            "text-start",
          )}
        >
          {header}
        </HeaderLabel>
        {description ? (
          <span
            className={classNames("font-label-xs", "text-weak", "text-start")}
          >
            {description}
          </span>
        ) : null}
      </div>
      <div
        className={classNames(
          "flex-noreset",
          "flex-row",
          "items-center",
          "justify-end",
          "gap-m",
        )}
      >
        {value ? (
          <span className={classNames("font-label-xs", "text-weak")}>
            {value}
          </span>
        ) : null}

        {affix ? (
          <div
            className={classNames("flex-noreset", "flex-row", "items-center")}
          >
            {affix}
          </div>
        ) : null}
        {chevronPosition === "trailing" && (
          <div
            className={classNames(
              "icon-size-xl",
              "text-default",
              "flex-noreset",
              "flex-row",
              "flex-nowrap",
              "items-center",
              "justify-center",
            )}
          >
            <ChevronIcon opened={opened} />
          </div>
        )}
      </div>
    </button>
  );
}

AccordionHeaderBase.displayName = "Accordion.Header";
