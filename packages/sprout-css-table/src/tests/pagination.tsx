import { classNames } from "@qlik/sprout-css-react";
import { useState } from "react";
import { Table } from "..";
import { entityAllFields, makeEntity } from "./examples/entity";

export function PaginationSpec() {
  const [data, setData] = useState(() => makeEntity(20));
  const fetchMore = () => {
    // simulate an api call
    setTimeout(() => {
      setData((prev) => [...prev, ...makeEntity(20)]);
    }, 100);
  };
  return (
    <div className={classNames("w-full", "p-xl", "border-box")} style={{ blockSize: 400 }}>
      <Table variant="list" columns={entityAllFields} rows={data} nextPage={fetchMore} />
    </div>
  );
}
