type Css = {
  "bg-transparent": string;
  "bg-default": string;
  "bg-weak": string;
  "bg-moderate": string;
  "bg-strong": string;
  "bg-enabled": string;
  "bg-disabled": string;
  "bg-pressed": string;
  "bg-inverse": string;
  "bg-interactive": string;
  "bg-danger": string;
  "bg-danger-weak": string;

  "bg-danger-inverse": string;
  "bg-danger-toggled": string;
  "bg-warning": string;
  "bg-warning-weak": string;
  "bg-warning-inverse": string;
  "bg-info": string;
  "bg-info-weak": string;
  "bg-info-inverse": string;
  "bg-success": string;
  "bg-success-weak": string;
  "bg-success-inverse": string;
};

/**
 "* @deprecated classes - will be removed in "future major release
 */
type Deprecated = {
  /** @deprecated please use bg-transparent */
  bg_transparent: string;
  /** @deprecated please use bg-default */
  bg_default: string;
  /** @deprecated please use bg-weak */
  bg_weak: string;
  /** @deprecated please use bg-moderate */
  bg_moderate: string;
  /** @deprecated please use bg-strong */
  bg_strong: string;
  /** @deprecated please use bg-enabled */
  bg_enabled: string;
  /** @deprecated please use bg-disabled */
  bg_disabled: string;
  /** @deprecated please use bg-pressed */
  bg_pressed: string;
  /** @deprecated please use bg-inverse */
  bg_inverse: string;
  /** @deprecated please use bg-interactive */
  bg_interactive: string;
  /** @deprecated please use bg-danger */
  bg_danger: string;
  /** @deprecated please use bg-danger-weak */
  bg_danger_weak: string;
  /** @deprecated please use bg-danger-inverse */
  bg_danger_inverse: string;
  /** @deprecated please use bg-danger-toggled */
  bg_danger_toggled: string;
  /** @deprecated please use bg-warning */
  bg_warning: string;
  /** @deprecated please use bg-warning-weak */
  bg_warning_weak: string;
  /** @deprecated please use bg-warning-inverse */
  bg_warning_inverse: string;
  /** @deprecated please use bg-info */
  bg_info: string;
  /** @deprecated please use bg-info-weak */
  bg_info_weak: string;
  /** @deprecated please use bg-info-inverse */
  bg_info_inverse: string;
  /** @deprecated please use bg-success */
  bg_success: string;
  /** @deprecated please use bg-success-weak */
  bg_success_weak: string;
  /** @deprecated please use bg-success-inverse */
  bg_success_inverse: string;
};

const classes: Css & Deprecated;

export default classes;
