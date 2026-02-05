import { useState, type ReactNode } from "react";

import {
  Checkbox,
  classNames,
  Divider,
  List,
  Popover,
  TextField,
  useSproutI18n,
  type PopoverProps,
} from "@qlik/sprout-react";

type ColumnDefinition = {
  id?: string;
  label?: string;
  visible?: boolean;
  canHide?: boolean;
};

type ColumnVisibilityMenuContentProps = {
  columns: Array<ColumnDefinition>;
  onColumnVisibilityChange?: (columns: Array<ColumnDefinition>) => void;
};

export type ColumnVisibilityMenuProps = Partial<PopoverProps> & {
  children?: ReactNode;
} & ColumnVisibilityMenuContentProps;

export function ColumnVisibilityMenu({
  children,
  columns,
  onColumnVisibilityChange,
  ...props
}: ColumnVisibilityMenuProps) {
  return (
    <Popover
      {...props}
      content={<ColumnVisibilityMenuContent columns={columns} onColumnVisibilityChange={onColumnVisibilityChange} />}
    >
      {children}
    </Popover>
  );
}

function ColumnVisibilityMenuContent({ columns, onColumnVisibilityChange }: ColumnVisibilityMenuContentProps) {
  const t = useSproutI18n();
  const [query, setQuery] = useState("");
  const safeColumns = columns;
  const selected = safeColumns.filter((col) => col.visible).length;

  return (
    <div className={classNames("flex", "flex-col")}>
      <div className={classNames("flex", "flex-col", "px-xl", "py-m", "gap-m")} data-layoutid="frame-6">
        <TextField
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          aria-label={t("table.column.visilibty-form.search.aria-label")}
          placeholder={t("table.column.visilibty-form.search.placeholder")}
        />
      </div>
      <Divider />
      <div className={classNames("flex", "flex-row", "pl-xl", "pr-m", "py-l", "bg-weak")} data-layoutid="header">
        <Checkbox
          label={t("table.column.visibility-form.selectall.label")}
          checked={selected === safeColumns.length}
          indeterminate={selected > 0 && selected < safeColumns.length}
          onChange={(e) => {
            const newState = safeColumns.map((col) => {
              let visible = e.target.checked;
              if (!col.canHide && col.visible) {
                visible = true;
              }
              return { ...col, visible };
            });
            if (newState.every((col) => !col.visible)) {
              newState[0].visible = true;
            }
            onColumnVisibilityChange?.(newState);
          }}
        />
      </div>
      <Divider />
      <List gap="density-s">
        {safeColumns
          .filter((c) => {
            if (query) {
              return (c.label || "").toLowerCase().includes(query.toLowerCase());
            }
            return true;
          })
          .map((column) => (
            <List.Item key={column.label}>
              <Checkbox
                label={column.label}
                checked={column.visible}
                disabled={!column.canHide}
                onChange={(e) => {
                  const newState = columns.map((col) => {
                    if (col.id === column.id) {
                      return { ...col, visible: !!e.target.checked };
                    }
                    return col;
                  });
                  if (newState.every((col) => !col.visible)) {
                    newState[0].visible = true;
                  }
                  onColumnVisibilityChange?.(newState);
                }}
              />
            </List.Item>
          ))}
      </List>
      <Divider />
      <div
        data-layoutid="footer"
        className={classNames(
          "flex",
          "flex-row",
          "pl-xl",
          "pr-m",
          "py-l",
          "bg-weak",
          "font-label-xs-emphasized",
          "text-default",
        )}
      >
        {t("table.column.visibility-form.footer.label", safeColumns.filter((col) => col.visible).length, {
          total: `${safeColumns.length}`,
        })}
      </div>
    </div>
  );
}
