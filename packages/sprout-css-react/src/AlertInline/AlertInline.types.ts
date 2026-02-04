import type { ReactNode } from "react";

import type { HTMLDivProps } from "../htmlTypes";

export type AlertInlineSeverity = "info" | "warning" | "error" | "success";

export type AlertInlineProps = HTMLDivProps & {
  layout?: "horizontal" | "vertical";
  severity?: AlertInlineSeverity;
  title?: string;
  /**
   * @deprecated use `children` instead
   */
  message?: string;
  actionBar?: ReactNode;
  labelDismiss?: string;
  onDismiss?: () => void;
};
