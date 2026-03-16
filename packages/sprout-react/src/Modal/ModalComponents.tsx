import {
  DialogActions,
  type DialogActionsProps,
  DialogContent,
  type DialogContentProps,
  DialogHeader,
  type DialogHeaderProps,
} from "../Dialog";

/**
 * The `Modal.Header` component renders onto a `div` HTML element. It accepts all `HTMLDivElement` attributes plus the following:
 * @param children - The header title content.
 * @param description - Optional description content below the title.
 * @param icon - Optional icon to display in the header.
 * @param infoIconTooltip - Tooltip content for the info icon.
 * @param labelBack - Label for the back button.
 * @param labelClose - Label for the close button.
 * @param onClickBack - Callback for the back button.
 * @param onClickClose - Callback for the close button.
 * @param preventClose - If true, the close button is hidden.
 */
export function ModalHeader(props: DialogHeaderProps) {
  return <DialogHeader {...props} />;
}
/**
 * The `Modal.Content` component renders onto a `div` HTML element. It accepts all `HTMLDivElement` attributes plus the following:
 * @param children - Content of the modal body.
 * @param padding - If true, applies padding to the content area.
 * @param overflowX - Horizontal overflow behavior.
 * @param overflowY - Vertical overflow behavior.
 * @param divider - Divider visibility strategy (`visible`, `none`, `auto`).
 */
export function ModalContent(props: DialogContentProps) {
  return <DialogContent {...props} />;
}
/**
 * The `Modal.Actions` component renders onto a `div` HTML element. It accepts all `HTMLDivElement` attributes plus the following:
 * @param children - Action buttons.
 * @param left - Content on the left side of the actions bar.
 * @param metaLabel - Meta label to display.
 * @param onClickClose - Callback for the close button.
 * @param labelClose - Label for the close button.
 * @param preventClose - If true, the close button is hidden.
 */
export function ModalActions(props: DialogActionsProps) {
  return <DialogActions {...props} />;
}

ModalHeader.displayName = "Modal.Header";
ModalContent.displayName = "Modal.Content";
ModalActions.displayName = "Modal.Actions";

export type ModalActionsProps = DialogActionsProps;
export type ModalContentProps = DialogContentProps;
export type ModalHeaderProps = DialogHeaderProps;
