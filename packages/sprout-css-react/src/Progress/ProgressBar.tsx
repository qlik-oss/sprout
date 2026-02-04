import { useId } from "@qlik/sprout-css-hooks";

import { Tooltip } from "../Tooltip";
import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";
import { getA11yProgressProps } from "./a11yProps";

import styles from "./ProgressBar.module.css";

function normalize(percent?: number) {
  if (!percent) {
    return 0;
  }
  if (percent > 100) {
    return 100;
  }
  if (percent < 0) {
    return 0;
  }
  return percent;
}

export type ProgressBarProps = {
  percent?: number;
  label?: string;
  "aria-label"?: string;
  tooltip?: string;
  contained?: boolean;
} & (
  | { label: string; "aria-label"?: never; tooltip?: never }
  | { "aria-label": string; label?: never; tooltip?: never }
  | { tooltip: string; label?: never; "aria-label"?: never }
) &
  HTMLDivProps;

export function ProgressBar({
  percent,
  label,
  tooltip,
  contained,
  ...props
}: ProgressBarProps) {
  const type = percent ? "determined" : "undetermined";

  const normalizedPercent = type === "undetermined" ? 25 : normalize(percent);
  const style = { width: `${normalizedPercent}%` };
  const labelId = useId();

  const rootClassNames = classNames(styles.progress, {
    [styles.hidden]: normalizedPercent === 0,
    [styles.fixed]: !contained,
  });

  let progress = (
    <div className={styles.wrapper}>
      <div
        style={style}
        className={classNames(styles.percent, {
          [styles.undetermined]: type === "undetermined",
        })}
      />
    </div>
  );

  const a11yProps: HTMLDivProps = getA11yProgressProps({ percent });

  if (tooltip) {
    a11yProps["aria-label"] = tooltip;
    progress = (
      <Tooltip id={labelId} title={tooltip} placement="bottom">
        {progress}
      </Tooltip>
    );
  } else if (label) {
    a11yProps["aria-labelledby"] = labelId;
  }

  return (
    <div className={rootClassNames} {...a11yProps} {...props}>
      {progress}
      {label ? (
        <span className={styles.label} id={labelId}>
          {label}
        </span>
      ) : null}
    </div>
  );
}
ProgressBar.displayName = "ProgressBar";
