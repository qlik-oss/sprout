import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";

import style from "./Panel.module.css";

export type PanelContainerProps = HTMLDivProps & {
  overlay?: boolean | "s" | "m" | "l" | "xl" | "xxl" | "2xl" | "3xl" | "4xl";
};

/**
 * The `Panel.Container` component renders onto a `div` HTML element. It accepts all `HTMLDivElement` attributes plus the following:
 * @param overlay - If provided, displays the container as an overlay with the given size (`true`, `s`, `m`, `l`, `xl`, `xxl`, `3xl`, `4xl`).
 */
export function PanelContainer({
  children,
  overlay,
  ...props
}: PanelContainerProps) {
  return (
    <div
      className={classNames(style.container, {
        [style.overlay]: overlay === true,
        [style.overlay_s]: overlay === "s",
        [style.overlay_m]: overlay === "m",
        [style.overlay_l]: overlay === "l",
        [style.overlay_xl]: overlay === "xl",
        [style.overlay_xxl]: overlay === "xxl",
        [style.overlay_3xl]: overlay === "3xl",
        [style.overlay_4xl]: overlay === "4xl",
      })}
      {...props}
    >
      {children}
    </div>
  );
}

PanelContainer.displayName = "Panel.Container";
