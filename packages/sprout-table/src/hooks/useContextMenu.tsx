// eslint-disable-next-line @typescript-eslint/no-redeclare
import { useState, type MouseEvent, type ReactNode, type ReactPortal, type RefObject } from "react";
import { createPortal } from "react-dom";
import { ContextMenu } from "../primitives/ContextMenu";

export const useContextMenu = (containerRef: RefObject<HTMLDivElement | null>) => {
  const [portal, setPortal] = useState<ReactPortal | null>(null);

  const handleContextMenu = (rowActions?: ReactNode) => (e: MouseEvent<HTMLDivElement>) => {
    if (!rowActions) return;
    e.preventDefault();
    if (!containerRef.current) return;
    const menuPortal = createPortal(
      <ContextMenu
        menu={rowActions}
        menuPosition={{
          x: e.pageX,
          y: e.pageY,
        }}
        onClickAway={() => {
          setPortal(null);
        }}
      />,
      containerRef.current,
    );
    setPortal(menuPortal);
  };

  return { ContextMenu: portal, handleContextMenu };
};
