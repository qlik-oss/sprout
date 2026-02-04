import type { ReactElement, ReactNode, Ref } from "react";
import { forwardRef } from "react";

import { tokens } from "@qlik/design-tokens";

import { Dialog, type DialogPropsType } from "../Dialog";

import styles from "./Modal.module.css";

type ModalVariant = "dialog" | "form" | "form-wide" | "workflow";
type ModalHeight = "full" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";
type ModalWidth =
  | "s"
  | "m"
  | "l"
  | "xl"
  | "xxl"
  | "3xl"
  | "full"
  | "full-with-margin"
  /** @deprecated use full-with-margin*/
  | "full-with-padding"
  /** @deprecated use full-with-margin*/
  | "full-width-padding";

export type ModalContainerProps = {
  container?: boolean;
  onClose?: () => void;
  children: ReactNode | Array<ReactNode>;
  /**
   * @deprecated use variant instead
   */
  width?: ModalWidth;
  height?: ModalHeight;
  variant?: ModalVariant;
} & Omit<DialogPropsType, "aria-modal" | "hide" | "style" | "className">;

export const ModalContainer = forwardRef<HTMLDivElement, ModalContainerProps>(
  ModalContainerBase,
);

const heightMap = {
  xxs: tokens.container_sizing_xxs,
  xs: tokens.container_sizing_xs,
  s: tokens.container_sizing_s,
  m: tokens.container_sizing_m,
  l: tokens.container_sizing_l,
  xl: tokens.container_sizing_xl,
  xxl: tokens.container_sizing_xxl,
  full: "100%",
} as const;

function ModalContainerBase(
  props: ModalContainerProps,
  ref?: Ref<HTMLDivElement>,
): ReactElement {
  const {
    visible,
    onClose,
    children,
    width = "m",
    height,
    variant,
    "data-testid": dataTestId = "modal",
    ...rest
  } = props;

  let safeWidth = width;
  // BB
  if (safeWidth === "full-with-padding" || safeWidth === "full-width-padding") {
    safeWidth = "full-with-margin";
  }

  const blockSize = height ? heightMap[height] : undefined;

  return (
    <Dialog
      visible={visible}
      onClose={onClose}
      data-testid={dataTestId}
      data-size={typeof variant === "undefined" && safeWidth}
      data-variant={variant}
      ref={ref}
      {...rest}
      style={{ blockSize }}
      className={styles.modal}
    >
      {visible ? children : null}
    </Dialog>
  );
}
