import styles from "./Stepper.module.css";

export function StepLine() {
  return <div className={styles.line} role="presentation" />;
}

StepLine.displayName = "Step.Line";
