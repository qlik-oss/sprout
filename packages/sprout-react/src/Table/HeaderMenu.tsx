// eslint-disable-next-line @typescript-eslint/no-redeclare
import type { MouseEvent, ReactNode } from "react";

import AscendingIcon from "@qlik/sprout-icons/react/Ascending";
import ColumnsIcon from "@qlik/sprout-icons/react/Columns";
import DescendingIcon from "@qlik/sprout-icons/react/Descending";
import MoreIcon from "@qlik/sprout-icons/react/More";
import ViewDisabledIcon from "@qlik/sprout-icons/react/ViewDisabled";

import { IconButton } from "../Button";
import { Menu, type MenuProps } from "../Menu";
import { useI18n } from "../hooks/useI18n";

export function HeaderMenuButton({ ...props }: MenuProps["Trigger"]) {
  const t = useI18n();
  return (
    <Menu.Trigger placement="bottom-end" {...props}>
      <IconButton
        size="small"
        aria-label={t("table.header.more-actions.aria-label")}
        icon={<MoreIcon />}
        variant="quiet"
        onClick={(e: MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
        }}
      />
    </Menu.Trigger>
  );
}

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
  const t = useI18n();
  return (
    <>
      {!!onSortChange && (
        <>
          <Menu.Item
            icon={<AscendingIcon />}
            disabled={sortOrder === "asc"}
            label={t("table.header.sort-ascending.label")}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSortChange("asc");
            }}
          />
          <Menu.Item
            icon={<DescendingIcon />}
            disabled={sortOrder === "desc"}
            label={t("table.header.sort-descending.label")}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSortChange("desc");
            }}
          />
          <Menu.Divider />
        </>
      )}
      {!!onHideColumn && (
        <Menu.Item
          icon={<ViewDisabledIcon />}
          label={t("table.header.hide-column.label")}
          onClick={() => {
            onHideColumn();
          }}
        />
      )}
      {!!onManageColumns && (
        <Menu.Item
          icon={<ColumnsIcon />}
          label={t("table.header.manage-columns-visbility.label")}
          onClick={(e) => {
            onManageColumns(e);
          }}
        />
      )}
      {children}
    </>
  );
}
HeaderMenuButton.displayName = "Table.HeaderMenuButton";
