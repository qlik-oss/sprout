import { classNames } from "../classNames";

import styles from "./Stepper.module.css";

export function StepLine() {
  return (
    <div
      className={classNames(
        "flex-noreset",
        "grow-1",
        "border-box",
        "justify-center",
        styles.line
      )}
      role="presentation"
    />
  );
}

StepLine.displayName = "Step.Line";
