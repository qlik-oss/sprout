type Css = {
  "font-heading-xs": string;
  "font-heading-s": string;
  "font-heading-m": string;
  "font-heading-l": string;
  "font-heading-xl": string;
  "font-heading-xxl": string;
  "font-body-xs": string;
  "font-body-s": string;
  "font-body-m": string;
  "font-body-l": string;
  "font-body-xl": string;
  "font-body-xxl": string;
  "font-label-xs": string;
  "font-label-xs-emphasized": string;
  "font-label-s": string;
  "font-label-s-emphasized": string;
  "font-label-m": string;
  "font-label-m-emphasized": string;
  "font-label-l": string;
  "font-label-l-emphasized": string;
  "font-script-s": string;
  "font-script-s-emphasized": string;
  "font-script-m": string;
  "font-script-m-emphasized": string;
};

type Deprecated = {
  /** @deprecated please use font-heading-xs */
  font_heading_xs: string;
  /** @deprecated please use font-heading-s */
  font_heading_s: string;
  /** @deprecated please use font-heading-m */
  font_heading_m: string;
  /** @deprecated please use font-heading-l */
  font_heading_l: string;
  /** @deprecated please use font-heading-xl */
  font_heading_xl: string;
  /** @deprecated please use font-heading-xxl */
  font_heading_xxl: string;
  /** @deprecated please use font-body-xs */
  font_body_xs: string;
  /** @deprecated please use font-body-s */
  font_body_s: string;
  /** @deprecated please use font-body-m */
  font_body_m: string;
  /** @deprecated please use font-body-l */
  font_body_l: string;
  /** @deprecated please use font-body-xl */
  font_body_xl: string;
  /** @deprecated please use font-body-xxl */
  font_body_xxl: string;
  /** @deprecated please use font-label-xs */
  font_label_xs: string;
  /** @deprecated please use font-label-xs-emphasized */
  font_label_xs_emphasized: string;
  /** @deprecated please use font-label-s */
  font_label_s: string;
  /** @deprecated please use font-label-s-emphasized */
  font_label_s_emphasized: string;
  /** @deprecated please use font-label-m */
  font_label_m: string;
  /** @deprecated please use font-label-m-emphasized */
  font_label_m_emphasized: string;
  /** @deprecated please use font-label-l */
  font_label_l: string;
  /** @deprecated please use font-label-l-emphasized */
  font_label_l_emphasized: string;
  /** @deprecated please use font-script-s */
  font_script_s: string;
  /** @deprecated please use font-script-s-emphasized */
  font_script_s_emphasized: string;
  /** @deprecated please use font-script-m */
  font_script_m: string;
  /** @deprecated please use font-script-m-emphasized */
  font_script_m_emphasized: string;
};

declare const classes: Css & Deprecated;
export default classes;
