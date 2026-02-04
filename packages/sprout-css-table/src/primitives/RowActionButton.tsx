import { forwardRef } from "react";

import { IconButton, type ButtonProps } from "@qlik/sprout-css-react";
import { MoreIcon } from "@qlik/sprout-icons/react";

import { useSproutI18n } from "@qlik/sprout-css-react";

export const RowActionButton = forwardRef<HTMLButtonElement, Partial<ButtonProps>>(({ onClick, ...props }, ref) => {
  const t = useSproutI18n();
  return (
    <IconButton
      ref={ref}
      aria-label={t("table.cell.menu.aria-label")}
      size="default"
      tabIndex={0}
      icon={<MoreIcon width={undefined} height={undefined} />}
      variant="quiet"
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
      {...props}
    />
  );
});

RowActionButton.displayName = "Table.RowActionButton";
