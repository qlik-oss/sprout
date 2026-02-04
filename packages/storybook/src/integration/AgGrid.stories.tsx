/* eslint-disable react-hooks/rules-of-hooks */
import {
  AllCommunityModule,
  ModuleRegistry,
  type Theme,
  themeQuartz,
} from "ag-grid-community";
import {
  AgGridReact,
  type AgGridReactProps,
  type CustomHeaderProps,
} from "ag-grid-react";
import { useEffect, useState } from "react";

import { AlertInline, Table } from "@qlik/sprout-css-react";

import { AgGrid33 } from "./AgGrid";

const theme: Theme = themeQuartz.withParams(AgGrid33.theme);

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

export default {
  title: "Integration/ag-grid",
};

const gridOptions: Partial<AgGridReactProps> = {
  rowData: [
    { make: "Tesla", model: "Model Y", price: "Null", electric: "true" },
    { make: "Ford", model: "F-Series", price: 33850, electric: "false" },
    { make: "Toyota", model: "Corolla", price: 29600, electric: "false" },
    { make: "", model: "Megane", price: "NaN", electric: "false" },
    { make: "Frod", model: "Campus", price: 18700, electric: "false" },
  ],
  // Column Definitions: Defines the columns to be displayed.
  columnDefs: [
    { valueGetter: "node.rowIndex + 1", width: 68, maxWidth: 68, flex: 0 },
    { headerName: "Brand", field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ],
};

const components = {
  agColumnHeader: (props: CustomHeaderProps) => {
    // Function to get the current sort order
    const getSortOrder = () => {
      const sortModel = props.api.getColumnState(); // Get state of all columns
      const currentColumnState = sortModel.find(
        (col) => col.colId === props.column.getColId(),
      );
      return currentColumnState?.sort || undefined; // Returns "asc", "desc", or null
    };

    // Sort order can also change dynamically, so track it
    const [sortOrder, setSortOrder] = useState(getSortOrder());

    useEffect(() => {
      const onSortChanged = () => {
        setSortOrder(getSortOrder());
      };

      // Add a listener for sort changes
      props.api.addEventListener("sortChanged", onSortChanged);

      // Cleanup listener when component unmounts
      return () => {
        props.api.removeEventListener("sortChanged", onSortChanged);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.api, props.column]);

    return (
      <Table.HeaderContent
        variant="data"
        header={props.displayName}
        sortOrder={props.enableSorting ? sortOrder || false : undefined}
        onSortChange={(direction) => {
          props.setSort(direction, false);
        }}
      />
    );
  },
};

export const AgGridTable = {
  name: "Table",
  parameters: {
    chromatic: { disableSnapshot: true },
    controls: { disable: true },
  },
  render: () => (
    <div>
      <style>{`#storybook-root {height: 100vh}`}</style>
      <AlertInline
        severity="warning"
        title="Design not ready"
        message="This component may change, as discussions are ongoing around it. Please do not use."
      />
      <div style={{ blockSize: "500px" }}>
        <AgGridReact
          components={components}
          theme={theme}
          defaultColDef={AgGrid33.DEFAULT_COLUMN_DEFINITIONS}
          columnDefs={gridOptions.columnDefs}
          rowData={gridOptions.rowData}
          headerHeight={68}
          rowHeight={40}
          scrollbarWidth={16}
          suppressMovableColumns
          suppressRowDrag
          onHeaderFocused={(event) => {
            event.api.clearFocusedCell();
          }}
        />
      </div>
    </div>
  ),
};
