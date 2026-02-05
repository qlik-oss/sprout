type Default = {
  "text-default": string;
  "text-disabled": string;
  "text-weak": string;
  "text-inverse": string;
  "text-danger": string;
  "text-danger-inverse": string;
  "text-warning": string;
  "text-warning-inverse": string;
  "text-info": string;
  "text-info-inverse": string;
  "text-success": string;
  "text-success-inverse": string;
  "text-center": string;
  "text-left": string;
  "text-right": string;
  "text-start": string;
  "text-end": string;
  "text-justify": string;
  "text-ellipsis": string;
  "text-clip": string;
  truncate: string;
  "text-wrap": string;
  "text-nowrap": string;
  "no-underline": string;
  underline: string;
  overline: string;
  linethrough: string;
  "break-words": string;
  "break-all": string;
};

/**
 * @deprecated classes - will be removed in future major release
 */
type Deprecated = {
  /** @deprecated please use truncate */
  ellipsis: string;
  /** @deprecated please use text-default */
  text_default: string;
  /** @deprecated please use text-disabled */
  text_disabled: string;
  /** @deprecated please use text-weak */
  text_weak: string;
  /** @deprecated please use text-inverse */
  text_inverse: string;
  /** @deprecated please use text-danger */
  text_danger: string;
  /** @deprecated please use text-danger-inverse */
  text_danger_inverse: string;
  /** @deprecated please use text-warning */
  text_warning: string;
  /** @deprecated please use text-warning-inverse */
  text_warning_inverse: string;
  /** @deprecated please use text-info */
  text_info: string;
  /** @deprecated please use text-info-inverse */
  text_info_inverse: string;
  /** @deprecated please use text-success */
  text_success: string;
  /** @deprecated please use text-success-inverse */
  text_success_inverse: string;
  /** @deprecated please use text-center */
  text_center: string;
  /** @deprecated please use text-left */
  text_left: string;
  /** @deprecated please use text-right */
  text_right: string;
  /** @deprecated please use text-start */
  text_start: string;
  /** @deprecated please use text-end */
  text_end: string;
  /** @deprecated please use text-justify */
  text_justify: string;
  /** @deprecated please use text-ellipsis */
  text_ellipsis: string;
  /** @deprecated please use text-clip */
  text_clip: string;
  /** @deprecated please use text-wrap */
  text_wrap: string;
  /** @deprecated please use text-nowrap */
  text_nowrap: string;
  /** @deprecated please use no-underline */
  no_underline: string;
  /** @deprecated please use break-words */
  break_words: string;
  /** @deprecated please use break-all */
  break_all: string;
};

const classes: Default & Deprecated;
export default classes;
