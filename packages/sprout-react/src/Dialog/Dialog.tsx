// eslint-disable-next-line @typescript-eslint/no-redeclare
import type { CSSProperties, KeyboardEvent, Ref } from "react";
import { forwardRef } from "react";

import { useControl } from "@qlik/sprout-react-hooks";

import type { HTMLDivProps } from "../htmlTypes";
import type { DialogAction, DialogProps, DialogState } from "./DialogState";

type A11yDialogPropsType = {
  onKeyDown?: (event: KeyboardEvent<HTMLDivElement>) => void;
};

export type DialogPropsType = HTMLDivProps &
  DialogProps & {
    "aria-modal"?: boolean | "true" | "false";
    className?: string;
    style?: CSSProperties;
  } & A11yDialogPropsType;

export const Dialog = forwardRef<HTMLDivElement, DialogPropsType>(DialogBase);

function DialogBase(props: DialogPropsType, ref?: Ref<HTMLDivElement>) {
  const { visible, ...rest } = props;
  if (!visible) {
    return null;
  }

  return <div tabIndex={-1} ref={ref} role="dialog" {...rest} data-dialog />;
}

DialogBase.displayName = "Dialog";

export function useDialogState(opts: Partial<DialogState & DialogAction>) {
  const controlled = useControl<boolean>(opts, {
    defaultValueKey: "defaultVisible",
    onChangeKey: "onClose",
    selector: () => false,
    valueKey: "visible",
  });

  return {
    visible: !!controlled.value,
    onClose: () => {
      controlled.onChange(false);
    },
  };
}
