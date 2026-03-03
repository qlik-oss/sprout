import { type Ref, forwardRef } from "react";

import { MoreIcon } from "@qlik/sprout-icons/react";

import { type ButtonProps, IconButton } from "../Button";
import { useI18n } from "../hooks/useI18n";

export const ContextualIconButton = forwardRef<
  HTMLButtonElement,
  Partial<ButtonProps>
>(ContextualIconButtonBase);

function ContextualIconButtonBase(
  { onClick, ...props }: Partial<ButtonProps>,
  ref?: Ref<HTMLButtonElement>,
) {
  const t = useI18n();
  return (
    <IconButton
      ref={ref}
      aria-label={t("table.cell.menu.aria-label")}
      size="small"
      tabIndex={0}
      icon={<MoreIcon />}
      variant="quiet"
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
      {...props}
    />
  );
}

ContextualIconButtonBase.displayName = "Table.ContextualIconButton";
