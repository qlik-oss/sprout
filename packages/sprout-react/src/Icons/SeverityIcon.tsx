import type { ReactNode } from "react";

import { tokens } from "@qlik/design-tokens";
import {
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from "@qlik/sprout-icons/react";

export type SeverityValue = "info" | "warning" | "error" | "success";

export const SEVERITY_ICONS: Record<SeverityValue, ReactNode> = {
  info: (
    <InfoIcon
      width={undefined}
      height={undefined}
      style={{ fill: tokens.info_color_default }}
    />
  ),
  warning: (
    <WarningIcon
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
    <SuccessIcon
      width={undefined}
      height={undefined}
      style={{ fill: tokens.success_color_default }}
    />
  ),
};
