import type {} from "@qlik/sprout-react";
import type { HeaderContext } from "@tanstack/react-table";
import { useRef } from "react";
import type { ColumnSelectionColumn } from "../features";
import { TableHTML, type TableHTMLProps } from "../primitives";
import type { ColumnDef } from "../props";

export type HeaderWrapperProps<ContentType> = {
  info: HeaderContext<ContentType, unknown>;
  colDef: ColumnDef<ContentType>;
  minWidth?: number;
  maxWidth?: number;
} & TableHTMLProps["Header"];

export function HeaderWrapper<ContentType>({ info, colDef, children, ...props }: HeaderWrapperProps<ContentType>) {
  const ref = useRef<HTMLDivElement>(null);
  const selectionColumn = info.column as ColumnSelectionColumn<ContentType>;
  const isResizingEnabled: boolean = selectionColumn.getCanResize();
  const isSortingEnabled: boolean = selectionColumn.getCanSort();
  const isHidingEnabled: boolean = selectionColumn.getCanHide();

  const hasActions: boolean =
    isSortingEnabled || isHidingEnabled || info.table.options.enableHiding || colDef.headerContextMenu !== undefined;

  return (
    <TableHTML.Header
      {...props}
      ref={ref}
      sortOrder={selectionColumn.getIsSorted()}
      onSortChange={selectionColumn.getToggleSortingHandler()}
      width={selectionColumn.getSize()}
      minWidth={colDef.minWidth}
      maxWidth={colDef.maxWidth}
      ellipsis
      contextualMenu={
        hasActions ? (
          <TableHTML.HeaderMenuButton
            onClick={(e) => {
              e.stopPropagation();
            }}
            menu={
              <TableHTML.HeaderMenuContent
                sortOrder={isSortingEnabled ? selectionColumn.getIsSorted() : undefined}
                onSortChange={
                  isSortingEnabled
                    ? (sort: "asc" | "desc") => {
                        selectionColumn.toggleSorting(sort === "desc");
                      }
                    : undefined
                }
                onHideColumn={
                  isHidingEnabled
                    ? () => {
                        selectionColumn.toggleVisibility();
                      }
                    : undefined
                }
                onManageColumns={
                  info.table.options.enableHiding
                    ? (e) => {
                        const ev = new CustomEvent("sprout-table-action", {
                          detail: { action: "manage-columns", clientX: e.clientX, clientY: e.clientY },
                          bubbles: true,
                        });
                        ref.current?.dispatchEvent(ev);
                      }
                    : undefined
                }
              >
                {colDef.headerContextMenu ? colDef.headerContextMenu() : null}
              </TableHTML.HeaderMenuContent>
            }
          />
        ) : null
      }
      onResize={isResizingEnabled ? info.header.getResizeHandler() : undefined}
      resetSize={isResizingEnabled ? selectionColumn.resetSize : undefined}
      statusIcon={colDef.statusIcon}
      selection={selectionColumn.getSelectionMode()}
      selected={selectionColumn.isSelected()}
      onSelectHeader={selectionColumn.toggleSelection}
    >
      {children}
    </TableHTML.Header>
  );
}

HeaderWrapper.displayName = "HeaderWrapper";
