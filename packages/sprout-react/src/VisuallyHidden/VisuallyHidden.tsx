import sprout from "@qlik/sprout-css-modules";

import type { HTMLSpanProps } from "../htmlTypes";

export type VisuallyHiddenProps = HTMLSpanProps;

/**
 * @deprecated use sprout.sr_only classes instead
 */
export function VisuallyHidden(props: VisuallyHiddenProps) {
  return <span {...props} className={sprout.sr_only} aria-hidden />;
}
