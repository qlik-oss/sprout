import { createContext } from "react";

type ListContextProps = {
  useGesture: boolean;
  hasPadding: boolean;
};

export const ListContext = createContext<ListContextProps | undefined>({
  useGesture: false,
  hasPadding: true,
});
