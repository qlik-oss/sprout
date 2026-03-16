import { type ReactNode, type Ref, forwardRef } from "react";

import { SEVERITY_ICONS } from "../Icons/SeverityIcon";
import { ProgressCircular } from "../Progress";
import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";
import { StepDivider } from "./StepDivider";
import { StepLine } from "./StepLine";

import styles from "./Stepper.module.css";

export type StepProps = {
  /** Define the content displayed */
  text: string;
  /** Define the visual step status indicator */
  semantic?: "completed" | "active" | "inactive" | "error";
  state?: "default" | "progress";
  /** @warning this property is controlled by the StepperContainer */
  number?: string;
  /** @warning this property is controlled by the StepperContainer */
  children?: ReactNode;
  isLast?: boolean;
} & HTMLDivProps;

/**
 * The `Stepper.Step` component renders onto an `li` HTML element. It accepts all `HTMLDivElement` attributes plus the following:
 * @param text - The label text for this step.
 * @param semantic - Visual status indicator for this step (`completed`, `active`, `inactive`, `error`).
 * @param state - The step display state (`default` or `progress`).
 * @param number - The step number shown in the indicator (controlled by `Stepper.Container`).
 * @param children - Additional content inside the step.
 * @param isLast - Whether this is the last step in the sequence (controlled by `Stepper.Container`).
 */
export const Step = forwardRef<HTMLLIElement, StepProps>(StepBase);
Step.displayName = "Stepper.Step";

function StepBase(
  { number, semantic, text, children, state, isLast, ...rest }: StepProps,
  ref?: Ref<HTMLLIElement>,
) {
  const safeSemantic = semantic || "inactive";
  const safeState = state || "default";
  return (
    <li
      className={classNames("flex-noreset", "border-box")}
      aria-current={safeSemantic === "active" ? "step" : false}
      ref={ref}
    >
      <div
        className={classNames(
          "flex-noreset",
          "items-center",
          "grow-0",
          "shrink-1",
          "basis-auto",
          "gap-m",
          "p-s",
          styles.step,
        )}
        data-semantic={semantic}
        {...rest}
        role={rest.onClick ? "button" : undefined}
        tabIndex={rest.tabIndex || rest.onClick ? 0 : undefined}
      >
        {safeState === "progress" && (
          <span
            className={classNames(
              "flex",
              "border-box",
              "flex-col",
              "items-center",
              "size-xxl",
              "justify-center",
            )}
          >
            <ProgressCircular />
          </span>
        )}
        {safeState === "default" && (
          <span
            className={classNames(
              "inline-flex",
              "border-box",
              "size-xxl",
              styles.indicator,
            )}
          >
            {(safeSemantic === "inactive" || safeSemantic === "active") && (
              <span
                className={classNames(
                  "inline-flex",
                  "radius-round",
                  "border-box",
                  "size-xxl",
                  "items-center",
                  "justify-center",
                  "font-label-s-emphasized",
                )}
              >
                {number}
              </span>
            )}
            {safeSemantic === "completed" && SEVERITY_ICONS["success"]}
            {safeSemantic === "error" && SEVERITY_ICONS["error"]}
          </span>
        )}
        <span
          className={classNames(
            "inline-flex",
            "shrink-1",
            "font-label-s-emphasized",
            "text-default",
          )}
        >
          {text}
        </span>
      </div>
      {!isLast && !children ? <StepLine /> : null}
      {children ? <StepDivider>{children}</StepDivider> : null}
    </li>
  );
}

StepBase.displayName = "StepPrimitive";
