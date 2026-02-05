import { forwardRef } from "react";

import { MoreIcon } from "@qlik/sprout-icons/react";
import { IconButton, type ButtonProps } from "@qlik/sprout-react";

import { useSproutI18n } from "@qlik/sprout-react";

export const ContextualIconButton = forwardRef<HTMLButtonElement, Partial<ButtonProps>>(
  ({ onClick, ...props }, ref) => {
    const t = useSproutI18n();
    return (
      <IconButton
        ref={ref}
        aria-label={t("table.cell.menu.aria-label")}
        size="small"
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
  },
);

ContextualIconButton.displayName = "Table.ContextualIconButton";
