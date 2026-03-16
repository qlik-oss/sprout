import { Toast as Content, type ToastProps as ContentProps } from "./Toast";
import { ToastContainer, type ToastContainerProps } from "./ToastContainer";

/**
 * The Toast component supports the following sub-components:
 * - `Toast.Content` — The toast notification body. Accepts `message`, `title`, `severity`, `action`, and `onClose`.
 * - `Toast.Container` — Positioned container for placing toasts. Accepts `placement`.
 */
export const Toast = {
  Content,
  Container: ToastContainer,
};

export type ToastProps = {
  Content: ContentProps;
  Container: ToastContainerProps;
};
