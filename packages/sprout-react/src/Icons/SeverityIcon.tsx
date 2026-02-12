import type { ReactNode } from "react";

import { tokens } from "@qlik/design-tokens";
import ErrorOutline from "@qlik/sprout-icons/react/ErrorOutline";
import InfoOutline from "@qlik/sprout-icons/react/InfoOutline";
import SuccessOutline from "@qlik/sprout-icons/react/SuccessOutline";
import WarningOutline from "@qlik/sprout-icons/react/WarningOutline";

export type SeverityValue = "info" | "warning" | "error" | "success";

export const SEVERITY_ICONS: Record<SeverityValue, ReactNode> = {
  info: (
    <InfoOutline
      width={undefined}
      height={undefined}
      style={{ fill: tokens.info_color_default }}
    />
  ),
  warning: (
    <WarningOutline
      width={undefined}
      height={undefined}
      style={{ fill: tokens.warning_color_default }}
    />
  ),
  error: (
    <ErrorOutline
      width={undefined}
      height={undefined}
      style={{ fill: tokens.danger_color_default }}
    />
  ),
  success: (
    <SuccessOutline
      width={undefined}
      height={undefined}
      style={{ fill: tokens.success_color_default }}
    />
  ),
};
