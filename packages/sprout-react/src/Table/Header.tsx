import type { CSSProperties, ReactNode, Ref } from "react";
import { forwardRef } from "react";

import { Checkbox } from "../Checkbox";
import { Radio } from "../RadioGroup";
import { classNames } from "../classNames";
import { useI18n } from "../hooks/useI18n";
import type { HTMLDivProps } from "../htmlTypes";
import { CellActionWrapper } from "./CellActionWrapper";
import { ResizingIndicator } from "./ResizingIndicator";
import { SortingIndicator } from "./SortingIndicator";
import { getWidth } from "./getWidth";

import className from "./Table.module.css";

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
  /**
   * @deprecated use children instead with Table.CellActionWrapper
   */
  contextualMenu?: ReactNode;
  width?: CSSProperties["width"];
  ellipsis?: boolean;
  lines?: number;
} & HTMLDivProps;

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
  ...props
}: TableHeaderProps & {
  /**
   * @deprecated it now reads it from the parent Table
   */
  variant?: "list" | "data";
} & { children?: ReactNode }) {
  const t = useI18n();
  return (
    <div
      data-layoutid="state-container"
      className={classNames("border-box", "w-full", "radius-subtle")}
    >
      <div
        {...props}
        data-layoutid="header_row"
        className={classNames(
          "flex",
          "border-box",
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
          className={classNames(
            "flex",
            "flex-row",
            "gap-m",
            "w-full",
            "overflow-hidden",
            "pr-m",
          )}
        >
          {!!selection && (
            <div
              className={classNames("flex", "justify-center")}
              data-layoutid="start"
            >
              {selection === "single" && (
                <Radio
                  aria-label={t("table.header.select-radio.aria-label")}
                  onChange={(e) => onSelectHeader?.(e.target.checked)}
                  checked={selected}
                />
              )}
              {selection === "multiple" && (
                <Checkbox
                  aria-label={t("table.header.select-multiple.aria-label")}
                  onChange={(e) => onSelectHeader?.(e.target.checked)}
                  checked={selected}
                />
              )}
            </div>
          )}
          <div
            className={classNames(
              "flex",
              "flex-col",
              "w-full",
              "overflow-hidden",
            )}
            data-layoutid="frame-95"
          >
            <div
              data-layoutid="frame-96"
              className={classNames(
                "flex",
                "flex-row",
                "gap-m",
                "items-center",
                "icon-size-xl",
                className.sort_indicator__wrapper,
              )}
            >
              {statusIcon}{" "}
              <span
                className={classNames("overflow-hidden", {
                  truncate: !!ellipsis,
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
              className={classNames(
                "flex",
                "flex-row",
                "justify-stretch",
                "font-label-s",
                "text-weak",
                "flex-nowrap",
                "truncate",
              )}
              data-layoutid="frame-97"
            >
              {additionalInfo}
            </div>
          </div>
          {!!contextualMenu && (
            <CellActionWrapper>{contextualMenu}</CellActionWrapper>
          )}
        </div>
      </div>
      {!!children && (
        <div
          data-layoutid="additional-content"
          className={classNames(
            "flex",
            "flex-col",
            "px-m",
            "pb-m",
            "gap-s",
            "overflow-hidden",
            "truncate",
          )}
        >
          {children}
        </div>
      )}
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
>(TableHeaderBase);

function TableHeaderBase(
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
    ellipsis,
    lines,
    ...props
  }: TableHeaderProps & {
    /**
     * @deprecated it now reads it from the parent Table
     */
    variant?: "list" | "data";
  },
  ref?: Ref<HTMLDivElement>,
) {
  let style = {};
  if (width) {
    style = {
      flex: `1 1 ${getWidth(width)}`,
    };
  }

  let ariaSortOrder: "none" | "ascending" | "descending" | "other" | undefined;
  if (sortOrder === "asc") {
    ariaSortOrder = "ascending";
  } else if (sortOrder === "desc") {
    ariaSortOrder = "descending";
  }

  return (
    <div
      ref={ref}
      role="columnheader"
      data-variant={variant}
      {...props}
      className={classNames(
        "inline-flex",
        "cursor-pointer",
        "border-box",
        "flex-wrap",
        "outline-none",
        "relative",
        className.th,
      )}
      aria-sort={ariaSortOrder}
      tabIndex={0}
      onClick={() => {
        onSortChange?.(sortOrder === "asc" ? "desc" : "asc");
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.stopPropagation();
          onSortChange?.(sortOrder === "asc" ? "desc" : "asc");
        }
      }}
      style={style}
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
      {!!onResize && !!resetSize && (
        <ResizingIndicator onResize={onResize} resetSize={resetSize} />
      )}
    </div>
  );
}
TableHeaderBase.displayName = "Table.Header";

export const DataTableHeader = forwardRef<HTMLDivElement, TableHeaderProps>(
  DataTableHeaderBase,
);

function DataTableHeaderBase(
  props: TableHeaderProps,
  ref?: Ref<HTMLDivElement>,
) {
  return <TableHeader {...props} ref={ref} />;
}
DataTableHeaderBase.displayName = "Table.DataHeader(Deprecated)";

export const ListTableHeader = forwardRef<HTMLDivElement, TableHeaderProps>(
  ListTableHeaderBase,
);

function ListTableHeaderBase(
  props: TableHeaderProps,
  ref?: Ref<HTMLDivElement>,
) {
  return <TableHeader {...props} ref={ref} />;
}

ListTableHeaderBase.displayName = "Table.ListHeader(Deprecated)";
