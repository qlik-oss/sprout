import {
  Children,
  type ReactElement,
  type ReactNode,
  isValidElement,
} from "react";

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
    <ol className={styles.stepper} {...props} data-orientation={orientation}>
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
