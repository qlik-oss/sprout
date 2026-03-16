import {
  Children,
  type ReactElement,
  type ReactNode,
  isValidElement,
} from "react";

import { classNames } from "../classNames";
import { renderOrClone } from "../renderOrClone";
import type { StepProps } from "./Step";

import styles from "./Stepper.module.css";

export type StepperContainerProps = {
  children: ReactNode;
  orientation: "horizontal" | "vertical";
  currentStepIndex?: number;
  currentStepError?: boolean;
  stateLess?: boolean;
};

/**
 * The `Stepper.Container` component renders the stepper wrapper and manages step numbering and state.
 * @param children - `Stepper.Step` elements.
 * @param orientation - Layout direction of the stepper (`horizontal` or `vertical`).
 * @param currentStepIndex - Zero-based index of the currently active step.
 * @param currentStepError - If true, marks the current step as having an error.
 * @param stateLess - If true, steps are rendered as-is without computed state.
 */
export function StepperContainer({
  children,
  orientation,
  currentStepError,
  currentStepIndex,
  stateLess,
  ...props
}: StepperContainerProps) {
  const count = Children.count(children);

  return (
    <ol
      className={classNames(
        "flex-noreset",
        "w-full",
        "border-box",
        "p-s",
        "m-0",
        "justify-between",
        styles.stepper,
        {
          "flex-col": orientation === "vertical",
          "flex-row": orientation !== "horizontal",
          "overflow-y-auto": orientation === "vertical",
          "overflow-x-auto": orientation === "horizontal",
        },
      )}
      {...props}
      data-orientation={orientation}
    >
      {stateLess
        ? children
        : Children.map(children, (child, index) => {
            const childProps: Partial<StepProps> = {
              number: `${index + 1}`,
              isLast: index === count - 1,
            };
            if (typeof currentStepIndex === "number") {
              if (currentStepIndex === index) {
                if (currentStepError) {
                  childProps.semantic = "error";
                } else {
                  childProps.semantic = "active";
                }
              } else if (currentStepIndex > index) {
                childProps.semantic = "completed";
              } else if (currentStepIndex < index) {
                childProps.semantic = "inactive";
              }
            }

            return (
              !!isValidElement(child) &&
              renderOrClone(child as ReactElement<StepProps>, childProps)
            );
          })}
    </ol>
  );
}

StepperContainer.displayName = "StepperContainer";
