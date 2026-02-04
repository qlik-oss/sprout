/* eslint-disable @typescript-eslint/no-redeclare */
import type { MouseEvent, ReactNode } from "react";

import {
  ColumnsIcon,
  HideIcon,
  MoreIcon,
  ShowIcon,
  SortAscendingIcon,
  SortDescendingIcon,
} from "@qlik/sprout-icons/react";

import { IconButton, Menu, useSproutI18n, type MenuProps } from "@qlik/sprout-css-react";

export function HeaderMenuButton({ ...props }: MenuProps["Trigger"]) {
  const t = useSproutI18n();
  return (
    <Menu.Trigger placement="bottom-end" {...props}>
      <IconButton
        size="small"
        aria-label={t("table.header.more-actions.aria-label")}
        icon={<MoreIcon width={undefined} height={undefined} />}
        variant="quiet"
        onClick={(e: MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
        }}
      />
    </Menu.Trigger>
  );
}

HeaderMenuButton.displayName = "Table.HeaderMenuButton";

export type HeaderMenuContentProps = {
  sortOrder?: "asc" | "desc" | false;
  onSortChange?: (sort: "asc" | "desc") => void;
  onManageColumns?: (e: MouseEvent<HTMLButtonElement>) => void;
  onHideColumn?: () => void;
  children?: ReactNode;
};

export function HeaderMenuContent({
  sortOrder,
  onSortChange,
  onManageColumns,
  onHideColumn,
  children,
}: HeaderMenuContentProps) {
  const t = useSproutI18n();
  return (
    <>
      {onSortChange ? (
        <>
          <Menu.Item
            icon={<SortAscendingIcon />}
            disabled={sortOrder === "asc"}
            label={t("table.header.sort-ascending.label")}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSortChange("asc");
            }}
          />
          <Menu.Item
            icon={<SortDescendingIcon />}
            disabled={sortOrder === "desc"}
            label={t("table.header.sort-descending.label")}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSortChange("desc");
            }}
          />
        </>
      ) : null}
      {onSortChange && (onHideColumn || onManageColumns) ? <Menu.Divider /> : null}
      {onHideColumn ? (
        <Menu.Item
          icon={<ShowIcon />}
          label={t("table.header.hide-column.label")}
          onClick={() => {
            onHideColumn();
          }}
        />
      ) : null}
      {onManageColumns ? (
        <Menu.Item
          icon={<ColumnsIcon />}
          label={t("table.header.manage-columns-visbility.label")}
          onClick={(e) => {
            onManageColumns(e);
          }}
        />
      ) : null}
      {(onSortChange || onHideColumn) && children ? <Menu.Divider /> : null}
      {children || null}
    </>
  );
}
