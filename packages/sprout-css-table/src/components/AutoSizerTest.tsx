import { classNames } from "@qlik/sprout-css-react";
import { useMemo, useState, type CSSProperties } from "react";

import { makePerson, personColDef, type Person } from "../docs/examples/person";
import { Table } from "../TanstackTable";

export function TableFillParentContainer() {
  const rows = useMemo(() => makePerson(50), []);
  return (
    <div data-testid="container" style={{ blockSize: 300 }}>
      <Table variant="list" rows={rows} columns={personColDef} />
    </div>
  );
}

export function TableFlexParentContainerHeight({ style }: { style?: CSSProperties }) {
  const rows = useMemo(() => makePerson(10), []);
  return (
    <div data-testid="container" className={classNames("flex", "flex-col")} style={style}>
      <Table variant="list" rows={rows} columns={personColDef} />
    </div>
  );
}

export function TableFlexContainerAsyncTest() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<Array<Person>>([]);

  setTimeout(() => {
    setLoading(false);
    setItems(makePerson(100));
  }, 1000);

  return (
    <div id="container" className={classNames("flex", "flex-col", "h-screen")}>
      <div id="header" className={classNames("shrink-0")} style={{ blockSize: 100 }}>
        Header
      </div>
      <div className={classNames("overflow-auto")}>
        <Table variant="list" rows={items} columns={personColDef} loading={loading} />
      </div>
      <div id="footer" className={classNames("shrink-0")} style={{ blockSize: 100 }}>
        Footer
      </div>
    </div>
  );
}
