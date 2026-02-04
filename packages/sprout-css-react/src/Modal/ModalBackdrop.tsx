import { type Ref, forwardRef } from "react";

import type { DialogState } from "../Dialog/DialogState";
import type { HTMLDivProps } from "../htmlTypes";
import { Portal } from "./Portal";

import styles from "./Modal.module.css";

export type DialogBackdropProps = HTMLDivProps & DialogState;

export const ModalBackdrop = forwardRef<HTMLDivElement, DialogBackdropProps>(
  BackdropBase,
);

function BackdropBase(props: DialogBackdropProps, ref?: Ref<HTMLDivElement>) {
  const { children, visible, ...rest } = props;
  if (!visible) {
    return null;
  }
  return (
    <Portal>
      <div {...rest} className={styles.modal__backdrop} ref={ref}>
        {children}
      </div>
    </Portal>
  );
}
