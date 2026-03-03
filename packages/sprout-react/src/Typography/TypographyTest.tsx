/* eslint-disable import-x/no-deprecated */
import { getTypographyClassName } from "./Typography";

export function TypographyTest() {
  return (
    <ul>
      <li className={getTypographyClassName({ font: "heading_xs" })}>
        heading-xs
      </li>
      <li className={getTypographyClassName({ font: "heading_s" })}>
        heading-s
      </li>
      <li className={getTypographyClassName({ font: "heading_m" })}>
        heading-m
      </li>
      <li className={getTypographyClassName({ font: "heading_l" })}>
        heading-l
      </li>
      <li className={getTypographyClassName({ font: "heading_xl" })}>
        heading-xl
      </li>
      <li className={getTypographyClassName({ font: "heading_xxl" })}>
        heading-xxl
      </li>
      <li className={getTypographyClassName({ font: "body_xs" })}>body-xs</li>
      <li className={getTypographyClassName({ font: "body_s" })}>body-s</li>
      <li className={getTypographyClassName({ font: "body_m" })}>body-m</li>
      <li className={getTypographyClassName({ font: "body_l" })}>body-l</li>
      <li className={getTypographyClassName({ font: "body_xl" })}>body-xl</li>
      <li className={getTypographyClassName({ font: "body_xxl" })}>body-xxl</li>
      <li className={getTypographyClassName({ font: "label_xs" })}>label-xs</li>
      <li className={getTypographyClassName({ font: "label_xs_emphasized" })}>
        label-xs-emphasized
      </li>
      <li className={getTypographyClassName({ font: "label_s" })}>label-s</li>
      <li className={getTypographyClassName({ font: "label_s_emphasized" })}>
        label-s-emphasized
      </li>
      <li className={getTypographyClassName({ font: "label_m" })}>label-m</li>
      <li className={getTypographyClassName({ font: "label_m_emphasized" })}>
        label-m-emphasized
      </li>
      <li className={getTypographyClassName({ font: "label_l" })}>label-l</li>
      <li className={getTypographyClassName({ font: "label_l_emphasized" })}>
        label-l-emphasized
      </li>
      <li className={getTypographyClassName({ font: "script_m" })}>script-m</li>
      <li className={getTypographyClassName({ font: "script_m_emphasized" })}>
        script-m-emphasized
      </li>
      <li
        className={getTypographyClassName({
          font: "label_l",
          color: "default",
        })}
      >
        color default
      </li>
      <li
        className={getTypographyClassName({
          font: "label_l",
          color: "disabled",
        })}
      >
        color disabled
      </li>
      <li
        className={getTypographyClassName({ font: "label_l", color: "weak" })}
      >
        color weak
      </li>
    </ul>
  );
}
