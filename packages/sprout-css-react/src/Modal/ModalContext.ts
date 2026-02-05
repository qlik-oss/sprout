// create a React context to store labelId and descId
import { createContext, useContext } from "react";

export type ModalContextType = {
  labelId: string | null;
  descId: string | null;
};

export const ModalContext = createContext<ModalContextType>({
  labelId: null,
  descId: null,
});

export function useModalContext() {
  return useContext(ModalContext);
}
