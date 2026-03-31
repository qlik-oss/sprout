import { type CSSProperties, useMemo } from "react";

import { classNames } from "@qlik/sprout-react";

import { Table } from "../TanstackTable";
import { makePerson, personColDef } from "../docs/examples/person";

export function TableSeveralCols() {
  const rows = useMemo(() => makePerson(50), []);
  return (
    <div data-testid="container" style={{ blockSize: 300 }}>
      <Table variant="list" rows={rows} columns={personColDef} />
    </div>
  );
}

export function Table2Cols({ style }: { style?: CSSProperties }) {
  const rows = useMemo(() => makePerson(10), []);
  const oneCol = useMemo(
    () =>
      personColDef.filter(
        (col) => col.field === "firstName" || col.field === "lastName"
      ),
    []
  );
  return (
    <div
      data-testid="container"
      className={classNames("flex", "flex-col")}
      style={style}
    >
      <Table variant="list" rows={rows} columns={oneCol} />
    </div>
  );
}
