import type { SVGAttributes } from "react";

import { useI18n } from "../hooks/useI18n";
import { getA11yProgressProps } from "./a11yProps";

import style from "./ProgressCircular.module.css";

export type ProgressCircularSize = "s" | "m" | "l";

// const RADIUS = 20;
// const CIRCUMFERENCE = Math.PI * (RADIUS * 2);
const VIEWBOX = {
  s: "0 0 12 12",
  m: "0 0 16 16",
  l: "0 0 32 32",
};

const RADIUS = {
  s: 5,
  m: 7,
  l: 15,
};
const CIRCUMFERENCE = {
  s: Math.PI * (RADIUS.s * 2),
  m: Math.PI * (RADIUS.m * 2),
  l: Math.PI * (RADIUS.l * 2),
};

function getCircleStyle(
  percent: number | undefined,
  size: ProgressCircularSize = "m",
) {
  if (percent) {
    return {
      strokeDasharray: CIRCUMFERENCE[size],
      strokeDashoffset: ((100 - percent) / 100) * CIRCUMFERENCE[size],
    };
  }
  return {
    strokeDasharray: CIRCUMFERENCE[size] / 10,
    strokeDashoffset: 0,
  };
}

export type ProgressCircularProps = Omit<
  SVGAttributes<SVGSVGElement>,
  "className" | "style"
> & {
  size?: ProgressCircularSize;
  percent?: number;
  variant?: "default" | "destructive";
};

export function ProgressCircular({
  size = "m",
  percent,
  variant = "default",
  "aria-label": ariaLabel,
  ...props
}: ProgressCircularProps) {
  const t = useI18n();
  const progressDefaultLabel = t("progress.circular.loading");
  return (
    <svg
      focusable="false"
      className={style.container}
      data-surface="progress-circular"
      data-size={size}
      data-variant={variant}
      viewBox={VIEWBOX[size]}
      data-testid="progress-circular"
      data-animate={percent ? "false" : "true"}
      aria-label={ariaLabel || progressDefaultLabel}
      {...getA11yProgressProps({ percent })}
      {...props}
    >
      <circle
        className={style.background}
        r={RADIUS[size]}
        cx={RADIUS[size] + 1}
        cy={RADIUS[size] + 1}
        fill="none"
        style={getCircleStyle(100, size)}
      />
      <circle
        className={style.progress}
        r={RADIUS[size]}
        cx={RADIUS[size] + 1}
        cy={RADIUS[size] + 1}
        fill="none"
        style={getCircleStyle(percent, size)}
      />
    </svg>
  );
}
