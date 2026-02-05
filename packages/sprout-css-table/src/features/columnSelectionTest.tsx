import { useState } from "react";
import { Table, type TableProps } from "..";
import { entityAllFields, makeEntity, type Entity } from "../docs/examples/entity";

export function TableColumnSelection(props: Partial<TableProps<Entity>>) {
  const [columnSelectionState, setColumnSelectionState] = useState<string>();
  const [columnsSelection, setColumnsSelection] = useState<Array<string>>([]);

  return (
    <div style={{ blockSize: 400 }}>
      <pre data-testid="selection-state">{columnSelectionState}</pre>
      <pre data-testid="selections-state">{JSON.stringify(columnsSelection)}</pre>
      <Table
        variant="data"
        columnSelection={columnSelectionState}
        columnsSelection={columnsSelection}
        onColumnSelectionChange={(c) => {
          setColumnSelectionState(c);
        }}
        onColumnsSelectionChange={(c) => {
          setColumnsSelection(c);
        }}
        columns={entityAllFields}
        rows={makeEntity(20) as Array<Entity>}
        {...props}
      />
    </div>
  );
}
