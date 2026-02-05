export type DialogProps = {
  visible?: boolean;
  defaultVisible?: boolean;
  onClose?: () => void;
};

export type DialogState = {
  defaultVisible?: boolean;
  visible: boolean;
};

export type DialogAction = {
  onClose: () => void;
};
