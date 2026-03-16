import type { MenuProps } from "../Menu";
import type { HTMLTableHeaderProps } from "../htmlTypes";
import { TableBody, type TableBodyProps } from "./Body";
import { TableCell, type TableCellProps } from "./Cell";
import {
  CellActionWrapper,
  type CellActionWrapperProps,
} from "./CellActionWrapper";
import { CellContent, type CellContentProps } from "./CellContent";
import {
  ColumnVisibilityMenu,
  type ColumnVisibilityMenuProps,
} from "./ColumnVisibilityMenu";
import { ContextualIconButton } from "./ContextualIconButton";
import { TableHead, type TableHeadProps } from "./Head";
import {
  DataTableHeader,
  ListTableHeader,
  TableHeader,
  TableHeaderContent,
  type TableHeaderProps,
} from "./Header";
import {
  HeaderMenuButton,
  HeaderMenuContent,
  type HeaderMenuContentProps,
} from "./HeaderMenu";
import { TableHeaderRow, type TableHeaderRowProps } from "./HeaderRow";
import { Message } from "./Message";
import { TableRow, type TableRowProps } from "./Row";
import { RowNumber, type RowNumberProps } from "./RowNumber";
import { TableSelection, type TableSelectionProps } from "./Selection";
import { SupportCell, type SupportCellProps } from "./SupportCell";
import { Table as TableBase, type TableProps as TableBaseProps } from "./Table";

type TableType = {
  Table: typeof TableBase;
  Head: typeof TableHead;
  Body: typeof TableBody;

  HeaderRow: typeof TableHeaderRow;
  Header: typeof TableHeader;
  DataHeader: typeof DataTableHeader;
  ListHeader: typeof ListTableHeader;
  HeaderContent: typeof TableHeaderContent;

  Row: typeof TableRow;
  Cell: typeof TableCell;
  CellContent: typeof CellContent;
  CellActionWrapper: typeof CellActionWrapper;
  ContextualIconButton: typeof ContextualIconButton;
  SupportCell: typeof SupportCell;
  RowNumber: typeof RowNumber;
  Selection: typeof TableSelection;
  ColumnVisibilityMenu: typeof ColumnVisibilityMenu;
  HeaderMenuButton: typeof HeaderMenuButton;
  HeaderMenuContent: typeof HeaderMenuContent;
  Message: typeof Message;
};

/**
 * The Table component supports the following sub-components:
 * - `Table.Table` — Main wrapper. Requires `variant` (`list` or `data`).
 * - `Table.Head` — Table head section.
 * - `Table.Body` — Table body section.
 * - `Table.HeaderRow` — Row within the table head.
 * - `Table.Header` — Column header cell with sort, filter, and resize capabilities.
 * - `Table.HeaderContent` — Custom content for a header cell.
 * - `Table.Row` — A data row.
 * - `Table.Cell` — A data cell.
 * - `Table.CellContent` — Cell content container.
 * - `Table.CellActionWrapper` — Wrapper for contextual cell actions.
 * - `Table.ContextualIconButton` — Icon button revealed on row hover.
 * - `Table.SupportCell` — System cell (for selection or row numbers).
 * - `Table.RowNumber` — Row number display cell.
 * - `Table.Selection` — Selection checkbox cell.
 * - `Table.ColumnVisibilityMenu` — Menu to control column visibility.
 * - `Table.HeaderMenuButton` — Trigger button for the header action menu.
 * - `Table.HeaderMenuContent` — Content of the header action menu.
 * - `Table.Message` — Empty state message.
 * - `Table.DataHeader` — @deprecated Use `Table.Header` instead.
 * - `Table.ListHeader` — @deprecated Use `Table.Header` instead.
 */
export const Table: TableType = {
  Table: TableBase,
  Head: TableHead,
  Body: TableBody,
  HeaderRow: TableHeaderRow,
  Header: TableHeader,
  /**
   * @deprecated Use `Table.Header` instead.
   */
  DataHeader: DataTableHeader,
  /**
   * @deprecated Use `Table.Header` instead.
   */
  ListHeader: ListTableHeader,
  HeaderContent: TableHeaderContent,
  Row: TableRow,
  Cell: TableCell,
  CellContent,
  CellActionWrapper,
  ContextualIconButton,
  SupportCell,
  RowNumber,
  Selection: TableSelection,
  ColumnVisibilityMenu,
  HeaderMenuButton,
  HeaderMenuContent,
  Message,
};

export type TableProps = {
  Table: TableBaseProps;
  Head: TableHeadProps;
  Body: TableBodyProps;
  HeaderRow: TableHeaderRowProps;
  Header: TableHeaderProps & HTMLTableHeaderProps;
  HeaderContent: TableHeaderProps;
  Row: TableRowProps;
  Cell: TableCellProps;
  CellActionWrapper: CellActionWrapperProps;
  CellContent: CellContentProps;
  SupportCell: SupportCellProps;
  RowNumber: RowNumberProps;
  Selection: TableSelectionProps;
  ColumnVisibilityMenu: ColumnVisibilityMenuProps;
  HeaderMenuButton: MenuProps["Trigger"];
  HeaderMenuContent: HeaderMenuContentProps;
};
