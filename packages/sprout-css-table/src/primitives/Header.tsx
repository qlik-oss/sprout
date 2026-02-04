import type { CSSProperties, ReactNode } from "react";
import { forwardRef } from "react";

import { CellActionWrapper } from "./CellActionWrapper";
import { ResizingIndicator } from "./ResizingIndicator";
import { SortingIndicator } from "./SortingIndicator";
import { type CellSizeProps, getCellStyle } from "./size";

import { Checkbox, classNames, Radio, useSproutI18n } from "@qlik/sprout-css-react";
import type { HTMLDivProps } from "../utils/htmlTypes";
import styles from "./Table.module.css";

export type TableHeaderProps = {
  header?: ReactNode;
  additionalInfo?: ReactNode;
  sortOrder?: "asc" | "desc" | false;
  selection?: "multiple" | "single";
  selected?: boolean;
  statusIcon?: ReactNode;
  onSelectHeader?: (selected: boolean) => void;
  onSortChange?: (sort: "asc" | "desc") => void;
  onResize?: (event: unknown) => void;
  resetSize?: () => void;
  contextualMenu?: ReactNode;
  ellipsis?: boolean;
  lines?: number;
  className?: string;
  style?: CSSProperties;
} & CellSizeProps &
  HTMLDivProps;

export function TableHeaderContent({
  header,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant,
  selection,
  selected,
  sortOrder,
  statusIcon,
  onSelectHeader,
  contextualMenu,
  additionalInfo,
  children,
  lines,
  ellipsis,
  className: classNameProp,
  style,
  ...props
}: TableHeaderProps & {
  /**
   * @deprecated it now reads it from the parent Table
   */
  variant?: "list" | "data";
} & { children?: ReactNode }) {
  const t = useSproutI18n();
  return (
    <div
      data-layoutid="state-container"
      className={classNames("border_box", "w-full", "radius-subtle", classNameProp || "")}
      style={style}
    >
      <div
        {...props}
        data-layoutid="header_row"
        className={classNames(
          "flex",
          "border_box",
          "flex-row",
          "py-m",
          "pl-m",
          "items-center",
          "font-heading-s",
          "text-default",
          "w-full",
          "overflow-hidden",
        )}
      >
        <div
          data-layoutid="rest"
          className={classNames("flex", "flex-row", "gap-m", "w-full", "overflow-hidden", "pr-m")}
        >
          {selection ? (
            <div className={classNames("flex", "justify-center")} data-layoutid="start">
              {selection === "single" && (
                <Radio
                  aria-label={t("table.header.select-radio.aria-label")}
                  onChange={(e) => onSelectHeader?.(e.target.checked)}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  checked={selected}
                />
              )}
              {selection === "multiple" && (
                <Checkbox
                  aria-label={t("table.header.select-multiple.aria-label")}
                  onChange={(e) => onSelectHeader?.(e.target.checked)}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  checked={selected}
                />
              )}
            </div>
          ) : null}
          <div className={classNames("flex", "flex-col", "w-full", "overflow-hidden")} data-layoutid="frame-95">
            <div
              data-layoutid="frame-96"
              className={classNames("flex", "flex-row", "gap-m", "items-center", "icon-size-xl", {
                [styles.sort_indicator__wrapper]: true,
              })}
            >
              {statusIcon}{" "}
              <span
                className={classNames("overflow-hidden", {
                  ellipsis: !!ellipsis,
                })}
                style={
                  lines
                    ? {
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: lines,
                        overflow: "hidden",
                      }
                    : undefined
                }
              >
                {header}
              </span>{" "}
              <SortingIndicator direction={sortOrder} />
            </div>
            <div
              className={classNames("flex", "flex-row", "justify-stretch", "font-label-s", "text-weak", "flex-nowrap")}
              data-layoutid="frame-97"
            >
              <div className={classNames("truncate")}>{additionalInfo}</div>
            </div>
          </div>
          {contextualMenu ? <CellActionWrapper>{contextualMenu}</CellActionWrapper> : null}
        </div>
      </div>
      {children ? (
        <div
          data-layoutid="additional-content"
          className={classNames("flex", "flex-col", "px-m", "pb-m", "gap-s", "overflow-hidden", "truncate")}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

TableHeaderContent.displayName = "Table.HeaderContent";

export const TableHeader = forwardRef<
  HTMLDivElement,
  TableHeaderProps & {
    /**
     * @deprecated it now reads it from the parent Table
     */
    variant?: "list" | "data";
  }
>(
  (
    {
      variant,
      header,
      selection,
      selected,
      sortOrder,
      statusIcon,
      onSortChange,
      contextualMenu,
      onSelectHeader,
      onResize,
      resetSize,
      additionalInfo,
      children,
      width,
      minWidth,
      maxWidth,
      ellipsis,
      lines,
      className: classNameProp,
      style,
      ...props
    },
    ref,
  ) => {
    const baseStyle = getCellStyle(
      {},
      {
        width,
        minWidth,
        maxWidth,
      },
    );
    let ariaSort: "none" | "ascending" | "descending" | undefined;
    if (sortOrder === "asc") {
      ariaSort = "ascending";
    } else if (sortOrder === "desc") {
      ariaSort = "descending";
    } else if (selection) {
      ariaSort = "none";
    }

    return (
      <div
        ref={ref}
        role="columnheader"
        data-variant={variant}
        className={classNames(
          "inline-flex",
          "cursor-pointer",
          "border_box",
          "flex-wrap",
          "outline-none",
          "relative",
          {
            [styles.th]: true,
          },
          classNameProp || "",
        )}
        aria-sort={ariaSort}
        tabIndex={0}
        {...props}
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
          switch (selection) {
            case "multiple":
              onSelectHeader?.(!selected);
              break;
            case "single":
              if (!selected) {
                onSelectHeader?.(!selected);
              } else {
                onSortChange?.(sortOrder === "asc" ? "desc" : "asc");
              }
              break;
            default:
              onSortChange?.(sortOrder === "asc" ? "desc" : "asc");
              break;
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.stopPropagation();
            onSortChange?.(sortOrder === "asc" ? "desc" : "asc");
          }
        }}
        style={{ ...baseStyle, ...style }}
      >
        <TableHeaderContent
          header={header}
          selection={selection}
          selected={selected}
          statusIcon={statusIcon}
          sortOrder={sortOrder}
          onSelectHeader={onSelectHeader}
          additionalInfo={additionalInfo}
          contextualMenu={contextualMenu}
          lines={lines}
          ellipsis={ellipsis}
          variant={variant}
        >
          {children}
        </TableHeaderContent>
        {onResize && resetSize ? <ResizingIndicator onResize={onResize} resetSize={resetSize} /> : null}
      </div>
    );
  },
);
TableHeader.displayName = "Table.Header";

export const DataTableHeader = forwardRef<HTMLDivElement, TableHeaderProps>((props, ref) => {
  return <TableHeader {...props} ref={ref} />;
});
DataTableHeader.displayName = "Table.DataHeader(Deprecated)";

export const ListTableHeader = forwardRef<HTMLDivElement, TableHeaderProps>((props, ref) => {
  return <TableHeader {...props} ref={ref} />;
});

ListTableHeader.displayName = "Table.ListHeader(Deprecated)";
