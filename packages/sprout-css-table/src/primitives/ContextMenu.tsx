import { Menu } from "@qlik/sprout-css-react";
import { useMemo, type CSSProperties, type ReactNode } from "react";

type ContextMenuProps = {
  menu: ReactNode;
  menuPosition: { x: number; y: number } | null;
  onClickAway: () => void;
  className?: string;
  style?: CSSProperties;
};

export function ContextMenu({ menu, menuPosition, onClickAway, className, style }: ContextMenuProps) {
  const wrapperStyle = useMemo(() => {
    const baseStyle = menuPosition
      ? {
          top: menuPosition.y,
          left: menuPosition.x,
          position: "fixed" as const,
        }
      : { display: "none" };
    return { ...baseStyle, ...style };
  }, [menuPosition, style]);

  return (
    <Menu.Trigger
      menu={menu}
      open
      onOpenChange={() => {
        onClickAway();
      }}
    >
      <div style={wrapperStyle} className={className} />
    </Menu.Trigger>
  );
}

ContextMenu.displayName = "Table.ContextMenu";
