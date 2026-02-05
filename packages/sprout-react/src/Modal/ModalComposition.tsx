import { type ReactNode, type Ref, forwardRef } from "react";

import type { HTMLDivProps } from "../htmlTypes";
import { Modal } from "./Modal";
import {
  ModalActions,
  type ModalActionsProps,
  ModalContent,
  type ModalContentProps,
  ModalHeader,
  type ModalHeaderProps,
} from "./ModalComponents";
import type { ModalContainerProps } from "./ModalContainer";
import type { UseModalProps } from "./hook";

/**
 * @deprecated use Modal.<Component> instead from 'sprout-react' instead
 */
type ModalBaseProps = UseModalProps &
  ModalContainerProps & { children: ReactNode } & HTMLDivProps;

function ModalBase(props: ModalBaseProps, ref?: Ref<HTMLDivElement>) {
  return <Modal jsx {...props} ref={ref} />;
}
ModalBase.displayName = "ModalBase";

const ModalBaseForwarded = forwardRef<HTMLDivElement, ModalBaseProps>(
  ModalBase,
);

/**
 * @deprecated use Modal.<Component> instead from 'sprout-react' instead
 */
export const ModalComposition = {
  Modal: ModalBaseForwarded,
  Actions: ModalActions,
  Content: ModalContent,
  Header: ModalHeader,
};

/**
 * @deprecated use Modal.<Component> instead from 'sprout-react' instead
 */
export type ModalAPIProps = {
  Modal: ModalBaseProps;
  Actions: ModalActionsProps;
  Content: ModalContentProps;
  Header: ModalHeaderProps;
};
