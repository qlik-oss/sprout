/* eslint-disable react-hooks/refs */
import { type ForwardedRef, type ReactNode, forwardRef, useMemo } from "react";

import { useMergeRefs } from "@floating-ui/react";
import { useId } from "@qlik/sprout-react-hooks";

import type { HTMLDivProps } from "../htmlTypes";
import { ModalBackdrop } from "./ModalBackdrop";
import {
  ModalActions,
  type ModalActionsProps,
  ModalContent,
  type ModalContentProps,
  ModalHeader,
  type ModalHeaderProps,
} from "./ModalComponents";
import { ModalContainer, type ModalContainerProps } from "./ModalContainer";
import { ModalContext } from "./ModalContext";
import { type UseModalProps, useModal } from "./hook";

export type ModalProps = UseModalProps &
  ModalContainerProps & {
    /** @deprecated please use headerLabelClose and footerLabelClose */
    labelClose?: ModalHeaderProps["labelClose"];
    headerTitle?: ModalHeaderProps["children"];
    headerDescription?: ModalHeaderProps["description"];
    headerLabelClose?: ModalHeaderProps["labelClose"];
    headerInfoIconTooltip?: ModalHeaderProps["infoIconTooltip"];
    headerIcon?: ModalHeaderProps["icon"];
    headerOnClickBack?: ModalHeaderProps["onClickBack"];
    headerLabelBack?: ModalHeaderProps["labelBack"];
    /**
     * @deprecated use horizontal padding (--sprout-common-spacing-xxl) on the wrapping element passed as children instead
     */
    contentPadding?: ModalContentProps["padding"];
    footerMetaLabel?: ModalActionsProps["metaLabel"];
    footerLeft?: ModalActionsProps["left"];
    footerActions?: ModalActionsProps["children"];
    footerLabelClose?: ModalActionsProps["labelClose"];
    children: ReactNode | Array<ReactNode>;
    jsx?: boolean;
  };

export type ModalCompositionProps = {
  Root: UseModalProps &
    ModalContainerProps & { children: ReactNode } & HTMLDivProps;
  Content: ModalContentProps;
  Header: ModalHeaderProps;
  Actions: ModalActionsProps;
};

// Modal props API component
const ModalBaseForwarded = forwardRef<HTMLDivElement, ModalProps>(ModalBase);
// Modal composition API root component
/**
 * The `Modal.Root` composition API root renders onto a `div` HTML element. It accepts all `HTMLDivElement` attributes plus the following:
 * @param defaultVisible - Whether the modal is visible by default.
 * @param visible - Controlled visibility state.
 * @param onClose - Callback when the modal is closed.
 * @param preventEscaping - If true, pressing Escape will not close the modal.
 * @param preventInteractiveBackdrop - If true, clicking the backdrop will not close the modal.
 * @param preventFocus - If true, focus will not be trapped inside the modal.
 * @param variant - The modal variant (`dialog`, `form`, `form-wide`, `workflow`).
 * @param height - The height of the modal.
 * @param children - Content of the modal.
 */
const ModalRoot = forwardRef<HTMLDivElement, ModalCompositionProps["Root"]>(
  (props, ref) => <ModalBaseForwarded jsx {...props} ref={ref} />,
);
ModalRoot.displayName = "Modal.Root";

// Replaces the deprecated ModalComposition.tsx
/**
 * The Modal component renders onto a `div` HTML element. It accepts the following props:
 * @param defaultVisible - Whether the modal is visible by default.
 * @param visible - Controlled visibility state.
 * @param onClose - Callback when the modal is closed.
 * @param preventEscaping - If true, pressing Escape will not close the modal.
 * @param preventInteractiveBackdrop - If true, clicking the backdrop will not close the modal.
 * @param preventFocus - If true, focus will not be trapped inside the modal.
 * @param variant - The modal variant (`dialog`, `form`, `form-wide`, `workflow`).
 * @param height - The height of the modal.
 * @param headerTitle - Title to display in the modal header.
 * @param headerDescription - Description to display in the modal header.
 * @param headerLabelClose - Label for the close button in the header.
 * @param headerInfoIconTooltip - Tooltip for the header info icon.
 * @param headerIcon - Icon to display in the modal header.
 * @param headerOnClickBack - Callback for the back button in the header.
 * @param headerLabelBack - Label for the back button in the header.
 * @param footerMetaLabel - Meta label in the footer.
 * @param footerLeft - Content on the left side of the footer.
 * @param footerActions - Action content in the footer.
 * @param footerLabelClose - Label for the close button in the footer.
 * @param children - Content of the modal.
 * @param width - @deprecated Use `variant` instead.
 * @param labelClose - @deprecated Use `headerLabelClose` and `footerLabelClose` instead.
 * @param contentPadding - @deprecated Use horizontal padding on the wrapping element instead.
 */
export const Modal = Object.assign(ModalBaseForwarded, {
  Root: ModalRoot,
  Content: (props: ModalCompositionProps["Content"]) => (
    <ModalContent padding={false} {...props} />
  ),
  Header: ModalHeader,
  Actions: ModalActions,
});

function ModalBase(props: ModalProps, ref?: ForwardedRef<HTMLDivElement>) {
  const {
    "aria-labelledby": ariaLabelledby,
    "aria-describedby": ariaDescribedby,
    defaultVisible,
    variant,
    visible,
    onClose,
    preventInteractiveBackdrop,
    preventEscaping,
    preventFocus,
    headerTitle,
    headerDescription,
    headerLabelClose,
    headerInfoIconTooltip,
    headerIcon,
    headerLabelBack,
    headerOnClickBack,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    labelClose,
    contentPadding,
    footerMetaLabel,
    footerLeft,
    footerActions,
    footerLabelClose,
    children,
    jsx,
    "data-testid": dataTestId = "modal",
    ...rest
  } = props;

  const modal = useModal({
    visible,
    defaultVisible,
    onClose,
    preventEscaping,
    preventFocus,
    preventInteractiveBackdrop,
  });

  const mergedRef = useMergeRefs([modal.containerRef, ref]);
  const labelId = useId();
  const descId = useId();

  const contextValue = useMemo(
    () => ({
      labelId: ariaLabelledby || labelId,
      descId: ariaDescribedby || descId,
    }),
    [labelId, descId, ariaLabelledby, ariaDescribedby],
  );

  return (
    <ModalBackdrop
      visible={modal.visible}
      data-testid={`${dataTestId}.backdrop`}
      onClick={modal.onClickBackdropHandler}
      ref={modal.backdropRef}
    >
      <ModalContainer
        {...rest}
        tabIndex={0}
        aria-modal="true"
        onClose={modal.onHideDialog}
        visible={modal.visible}
        ref={mergedRef}
        data-testid={dataTestId}
        aria-labelledby={contextValue.labelId}
        aria-describedby={contextValue.descId}
        variant={variant}
      >
        {!!headerTitle && (
          <ModalHeader
            data-testid={`${dataTestId}.header`}
            labelId={contextValue.labelId}
            descriptionId={contextValue.descId}
            onClickClose={modal.onClose}
            description={headerDescription}
            labelClose={headerLabelClose}
            preventClose={preventEscaping}
            infoIconTooltip={headerInfoIconTooltip}
            icon={headerIcon}
            labelBack={headerLabelBack}
            onClickBack={headerOnClickBack}
          >
            {headerTitle}
          </ModalHeader>
        )}

        {jsx || variant ? (
          <ModalContext.Provider value={contextValue}>
            {children}
          </ModalContext.Provider>
        ) : (
          <ModalContent padding={contentPadding}>{children}</ModalContent>
        )}

        {(!!footerActions || !!footerLeft) && (
          <ModalActions
            data-testid={`${dataTestId}.actions`}
            left={footerLeft}
            metaLabel={footerMetaLabel}
            labelClose={footerLabelClose}
            onClickClose={modal.onClose}
            preventClose={preventEscaping}
          >
            {footerActions}
          </ModalActions>
        )}
      </ModalContainer>
    </ModalBackdrop>
  );
}

ModalBase.displayName = "Modal";
