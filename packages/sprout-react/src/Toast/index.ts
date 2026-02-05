import { Toast as Content, type ToastProps as ContentProps } from "./Toast";
import { ToastContainer, type ToastContainerProps } from "./ToastContainer";

export const Toast = {
  Content,
  Container: ToastContainer,
};

export type ToastProps = {
  Content: ContentProps;
  Container: ToastContainerProps;
};
