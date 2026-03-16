import sprout from "@qlik/sprout-css-modules";

import type { HTMLSpanProps } from "../htmlTypes";

export type VisuallyHiddenProps = HTMLSpanProps;

/**
 * The VisuallyHidden component renders onto a `span` HTML element with visually-hidden (screen-reader only) styles.
 * It accepts all `HTMLSpanElement` attributes.
 * @deprecated Use `sprout.sr_only` classes directly instead.
 */
export function VisuallyHidden(props: VisuallyHiddenProps) {
  return <span {...props} className={sprout.sr_only} aria-hidden />;
}
