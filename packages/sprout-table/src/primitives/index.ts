/* eslint-disable @typescript-eslint/no-redeclare */
import type { MenuProps } from "@qlik/sprout-react";
import type { HTMLTableHeaderProps } from "../utils/htmlTypes";
import { TableBody, type TableBodyProps } from "./Body";
import { TableCell, type TableCellProps } from "./Cell";
import { CellActionWrapper, type CellActionWrapperProps } from "./CellActionWrapper";
import { CellContent, type CellContentProps } from "./CellContent";
import { ColumnVisibilityMenu, type ColumnVisibilityMenuProps } from "./ColumnVisibilityMenu";
import * as CONSTANT from "./constant";
import { ContextualIconButton } from "./ContextualIconButton";
import { TableHead, type TableHeadProps } from "./Head";
import { DataTableHeader, ListTableHeader, TableHeader, TableHeaderContent, type TableHeaderProps } from "./Header";
import { HeaderMenuButton, HeaderMenuContent, type HeaderMenuContentProps } from "./HeaderMenu";
import { TableHeaderRow, type TableHeaderRowProps } from "./HeaderRow";
import { Message } from "./Message";
import { TableRow, type TableRowProps } from "./Row";
import { RowActionButton } from "./RowActionButton";
import { RowNumber, type RowNumberProps } from "./RowNumber";
import { Selection, type SelectionProps } from "./Selection";
// eslint-disable-next-line import-x/no-deprecated
import { SupportCell, type SupportCellProps } from "./SupportCell";
import { Table as TableBase, type TableProps as TableBaseProps } from "./Table";

export const TableHTML = {
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
  RowActionButton,
  Cell: TableCell,
  CellContent,
  CellActionWrapper,
  ContextualIconButton,
  /**
   * @deprecated Use `Table.Cell` instead
   */
  SupportCell,
  RowNumber,
  Selection,
  ColumnVisibilityMenu,
  HeaderMenuButton,
  HeaderMenuContent,
  Message,
  CONSTANT,
};

export type TableHTMLProps = {
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
  Selection: SelectionProps;
  ColumnVisibilityMenu: ColumnVisibilityMenuProps;
  HeaderMenuButton: MenuProps["Trigger"];
  HeaderMenuContent: HeaderMenuContentProps;
};
