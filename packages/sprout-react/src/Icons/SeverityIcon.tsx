import type { ReactNode } from "react";

import { tokens } from "@qlik/design-tokens";
import ErrorIcon from "@qlik/sprout-icons/react/Error";
import Info from "@qlik/sprout-icons/react/Info";
import Success from "@qlik/sprout-icons/react/Success";
import Warning from "@qlik/sprout-icons/react/Warning";

export type SeverityValue = "info" | "warning" | "error" | "success";

export const SEVERITY_ICONS: Record<SeverityValue, ReactNode> = {
  info: (
    <Info
      width={undefined}
      height={undefined}
      style={{ fill: tokens.info_color_default }}
    />
  ),
  warning: (
    <Warning
      width={undefined}
      height={undefined}
      style={{ fill: tokens.warning_color_default }}
    />
  ),
  error: (
    <ErrorIcon
      width={undefined}
      height={undefined}
      style={{ fill: tokens.danger_color_default }}
    />
  ),
  success: (
    <Success
      width={undefined}
      height={undefined}
      style={{ fill: tokens.success_color_default }}
    />
  ),
};
