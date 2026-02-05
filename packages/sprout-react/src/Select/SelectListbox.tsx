import {
  type CSSProperties,
  type ReactNode,
  type Ref,
  forwardRef,
} from "react";

import type { HTMLDivProps } from "../htmlTypes";

import menuStyle from "../Menu/Menu.module.css";

export type ListboxProps = {
  children: ReactNode;
  id: string;
  style?: CSSProperties; //
  ["aria-labelledby"]: string;
} & HTMLDivProps;

export const Listbox = forwardRef<HTMLDivElement, ListboxProps>(ListboxBase);

function ListboxBase(
  { children, ...props }: ListboxProps,
  ref?: Ref<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={menuStyle.menu} role="listbox" {...props}>
      {children}
    </div>
  );
}

ListboxBase.displayName = "Listbox";
