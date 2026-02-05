/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import sprout from "@qlik/sprout-css-modules";

export type PossibleValues = {
  family: "heading" | "body" | "label" | "script";
  font:
    | "heading_xs"
    | "heading_s"
    | "heading_m"
    | "heading_l"
    | "heading_xl"
    | "heading_xxl"
    | "body_xs"
    | "body_s"
    | "body_m"
    | "body_l"
    | "body_xl"
    | "body_xxl"
    | "label_xs"
    | "label_xs_emphasized"
    | "label_s"
    | "label_s_emphasized"
    | "label_m"
    | "label_m_emphasized"
    | "label_l"
    | "label_l_emphasized"
    | "script_s"
    | "script_s_emphasized"
    | "script_m"
    | "script_m_emphasized";
  color: "default" | "weak" | "disabled" | "inverse";
  size: "xs" | "s" | "m" | "l" | "xl" | "xxl";
};

type WithColor = {
  family?: undefined;
  font: PossibleValues["font"];
  color?: PossibleValues["color"];
  ellipsis?: boolean;
};

/**
 * @deprecated use font instead
 */
type DeconstructedFont =
  | {
      font?: undefined;
      /** @deprecated use font instead */
      family: "heading";
      size?: "xs" | "s" | "m" | "l" | "xl" | "xxl";
      /** @deprecated use font instead */
      emphasized?: undefined;
    }
  | {
      font?: undefined;
      /** @deprecated use font instead */
      family: "body";
      /** @deprecated use font instead */
      size?: "xs" | "s" | "m" | "l" | "xl" | "xxl";
      /** @deprecated use font instead */
      emphasized?: undefined;
    }
  | {
      font?: undefined;
      /** @deprecated use font instead */
      family: "label";
      /** @deprecated use font instead */
      size?: "xs" | "s" | "m" | "l";
      /** @deprecated use font instead */
      emphasized?: boolean;
    }
  | {
      font?: undefined;
      /** @deprecated use font instead */
      family: "script";
      /** @deprecated use font instead */
      size?: "m";
      /** @deprecated use font instead */
      emphasized?: boolean;
    };

export type TypographyProps = WithColor | DeconstructedFont;

function getKey(props: TypographyProps): PossibleValues["font"] | undefined {
  if (props.font) {
    return undefined;
  }

  const { family, size, emphasized } = props;
  if (!family) {
    return undefined;
  }
  switch (family) {
    case "heading":
    case "body":
      return `${family}_${size || "m"}`;
    case "label":
      return `${family}_${size || "m"}${emphasized ? "_emphasized" : ""}`;
    case "script":
      return `${family}_${size || "m"}${emphasized ? "_emphasized" : ""}`;
    default:
      return undefined;
  }
}

/**
 * @deprecated please use classNames from sprout instead
 */
export function getTypographyClassName(props: TypographyProps): string {
  if (props.font) {
    const { font, color, ellipsis } = props;
    return sprout.classNames(`font_${font}`, {
      truncate: !!ellipsis,
      [`text_${color || "default"}`]: !!color,
    });
  }

  let key = getKey(props);
  if (!key) {
    // @deprecated this code should be removed in the next major release
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    key = getKey({ ...props, family: props.familly });
  }

  if (!key || sprout[`font_${key}`] === undefined) {
    return "";
  }
  return sprout[`font_${key}`];
}
