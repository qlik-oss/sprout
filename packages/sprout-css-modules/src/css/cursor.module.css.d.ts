type Css = {
  "cursor-auto": string;
  "cursor-default": string;
  "cursor-pointer": string;
  "cursor-wait": string;
  "cursor-text": string;
  "cursor-progress": string;
  "cursor-not-allowed": string;
  "cursor-none": string;
  "cursor-no-drop": string;
  "cursor-unset": string;
  "cursor-initial": string;
  "cursor-help": string;
  "cursor-row-resize": string;
  "cursor-col-resize": string;
  "pointer-events-none": string;
  "pointer-events-auto": string;
};

type Deprecated = {
  /** @deprecated please use cursor-auto */
  cursor_auto: string;
  /** @deprecated please use cursor-default */
  cursor_default: string;
  /** @deprecated please use cursor-pointer */
  cursor_pointer: string;
  /** @deprecated please use cursor-wait */
  cursor_wait: string;
  /** @deprecated please use cursor-text */
  cursor_text: string;
  /** @deprecated please use cursor-progress */
  cursor_progress: string;
  /** @deprecated please use cursor-not-allowed */
  cursor_not_allowed: string;
  /** @deprecated please use cursor-none */
  cursor_none: string;
  /** @deprecated please use cursor-no-drop */
  cursor_no_drop: string;
  /** @deprecated please use cursor-unset */
  cursor_unset: string;
  /** @deprecated please use cursor-initial */
  cursor_initial: string;
  /** @deprecated please use cursor-help */
  cursor_help: string;
  /** @deprecated please use cursor-row-resize */
  cursor_row_resize: string;
  /** @deprecated please use cursor-col-resize */
  cursor_col_resize: string;
  /** @deprecated please use pointer-events-none */
  pointer_events_none: string;
  /** @deprecated please use pointer-events-auto */
  pointer_events_auto: string;
};

declare const classes: Css & Deprecated;
export default classes;
