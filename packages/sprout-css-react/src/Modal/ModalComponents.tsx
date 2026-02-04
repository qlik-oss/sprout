import {
  DialogActions,
  type DialogActionsProps,
  DialogContent,
  type DialogContentProps,
  DialogHeader,
  type DialogHeaderProps,
} from "../Dialog";

export function ModalHeader(props: DialogHeaderProps) {
  return <DialogHeader {...props} />;
}

export function ModalContent(props: DialogContentProps) {
  return <DialogContent {...props} />;
}

export function ModalActions(props: DialogActionsProps) {
  return <DialogActions {...props} />;
}

ModalHeader.displayName = "Modal.Header";
ModalContent.displayName = "Modal.Content";
ModalActions.displayName = "Modal.Actions";

export type ModalActionsProps = DialogActionsProps;
export type ModalContentProps = DialogContentProps;
export type ModalHeaderProps = DialogHeaderProps;
