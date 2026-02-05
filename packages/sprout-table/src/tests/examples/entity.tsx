import { classNames, Skeleton } from "@qlik/sprout-react";

import type { ColumnDef } from "../../props";
import entities from "./entity.json";

export type Entity = {
  id: string;
  name: string;
  type: "Application Qlik Sense";
  modified: string;
  modifiedBy: string;
  space: string;
  createDate?: number;
};

export function makeEntity(lens: number): Array<Entity> {
  return (entities as Array<Entity>).slice(0, lens);
}

export const entityAllFields: Array<ColumnDef<Entity>> = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    renderCellLoading: () => (
      <div className={classNames("flex", "flex-row", "gap-m")}>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </div>
    ),
  },
  {
    field: "type",
    headerName: "Type",
  },
  {
    field: "modified",
    headerName: "Modified",
    width: 150,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    field: "space",
    headerName: "Space",
    resizable: false,
  },
];

export const entityDisabledSorting: Array<ColumnDef<Entity>> = [
  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
  {
    field: "type",
    headerName: "Type",
  },
  {
    field: "modified",
    headerName: "Modified",
    width: 100,
    sortable: false,
  },
  {
    field: "space",
    headerName: "Space",
    sortable: false,
  },
];

export const entityCustomSorting: Array<ColumnDef<Entity>> = [
  {
    field: "name",
    headerName: "Name",
  },
  {
    field: "modified",
    headerName: "Modified",
    sortComparator: (a, b) => new Date(a.modified).getTime() - new Date(b.modified).getTime(),
  },
  {
    field: "createDate",
    headerName: "Create date",
    sortComparator: "datetime",
    renderCell: (info) => new Date(info.row.createDate || 0).getFullYear(),
  },
];

export const entityDisabledColumnResizing: Array<ColumnDef<Entity>> = [
  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
  {
    field: "type",
    headerName: "Type",
  },
  {
    field: "modified",
    headerName: "Modified",
    width: 100,
    resizable: false,
  },
  {
    field: "space",
    headerName: "Space",
    resizable: false,
  },
];

export const entityRenderCell: Array<ColumnDef<Entity>> = [
  {
    field: "name",
    headerName: "Name",
    minWidth: 300,
    flex: 1,
    renderCell: ({ row }) => {
      return (
        <div className={classNames("flex", "flex-col", "px-m")} data-testid="entity">
          <div className={classNames("font-label-s", "text-default")} data-testid="entity-name">
            {row.name}
          </div>
          <div className={classNames("font-label-xs", "text-weak")} data-testid="entity-metadata">
            {row.type} - {row.modifiedBy}
          </div>
        </div>
      );
    },
  },
  {
    field: "space",
    headerName: "Space",
  },
];
