/* eslint-disable react-hooks/rules-of-hooks */
import { Button, classNames, Menu, Skeleton } from "@qlik/sprout-react";
import type { StoryObj } from "@storybook/react-vite";
import { useEffect, useRef, useState } from "react";
import { fn } from "storybook/test";

import { Table, type SortingState, type TableProps } from "@qlik/sprout-table";
import {
  ColumnSizingArgTypes,
  hideArg,
  HideArgTypes,
  PaginationArgTypes,
  RowSelectionArgTypes,
  RowTogglingArgTypes,
  SortArgTypes,
  TableArgTypes,
} from "./TanstackTable.argTypes";
import { entityAllFields, entityRenderCell, makeEntity, type Entity } from "./examples/entity";
import { productColDef, productsQlikCloud, type Product } from "./examples/product";

export default {
  title: "Table/List",
};

export const Playground: StoryObj<TableProps<Entity>> = {
  name: "Playground",
  parameters: {
    chromatic: { disableSnapshot: true },
    layout: "fullscreen",
  },
  render: (props: TableProps<Entity>) => {
    const defaultSorting: SortingState = [
      {
        id: "name",
        desc: true,
      },
    ];

    return (
      <div className={classNames("w-full", "p-xl", "border-box", "h-screen")}>
        <Table defaultSorting={defaultSorting} {...props} />
      </div>
    );
  },
  args: {
    variant: "list",
    rowSelectionMode: "multiple",
    rows: makeEntity(100),
    columns: entityAllFields,
    onRowSelectionChange: fn(),
  },
  argTypes: {
    ...TableArgTypes,
    ...RowSelectionArgTypes,
    ...RowTogglingArgTypes,
    ...SortArgTypes,
    ...HideArgTypes,
    ...ColumnSizingArgTypes,
  },
};

export const GettingStarted: StoryObj<TableProps<Product>> = {
  name: "Getting Started",
  render: (props: TableProps<Product>) => {
    return <Table {...props} />;
  },
  args: {
    variant: "list",
    rows: productsQlikCloud,
    columns: productColDef,
    rowSelectionMode: "multiple",
  },
  argTypes: {
    variant: hideArg,
    rows: TableArgTypes.rows,
    columns: TableArgTypes.columns,
    rowSelectionMode: RowSelectionArgTypes.rowSelectionMode,
  },
};

export const RenderCell: StoryObj<TableProps<Entity>> = {
  name: "renderCell",
  render: (props: TableProps<Entity>) => {
    return (
      <div className={classNames("w-l", "p-xl", "border_box", "h-screen")}>
        <Table {...props} />
      </div>
    );
  },
  args: {
    variant: "list",
    rowSelectionMode: "multiple",
    rows: makeEntity(10),
    columns: entityRenderCell,
  },
  argTypes: {
    variant: hideArg,
    rows: hideArg,
    columns: TableArgTypes.columns,
    rowSelectionMode: hideArg,
    rowSelection: hideArg,
    onRowSelectionChange: hideArg,
  },
};

export const LayoutAuto: StoryObj<TableProps<Entity>> = {
  parameters: {
    layout: "fullscreen",
  },
  render: ({ rows, ...props }: TableProps<Entity>) => {
    const [data, setData] = useState([...(rows as Array<Entity>)]);

    return (
      <div>
        <div className={classNames("flex", "flex-row", "gap-s", "w-m", "items-center", "p-m")}>
          <Button
            onClick={() => {
              setData((prev) => prev.slice(0, -1));
            }}
            label="Remove a row"
          />
          <Button
            onClick={() => {
              setData((prev) => [...prev, makeEntity(1)[0]]);
            }}
            label="Add a row"
          />
        </div>

        <div
          className={classNames("p-0", "m-0")}
          style={{
            blockSize: 300,
          }}
        >
          <Table rows={data} {...props} />
        </div>
      </div>
    );
  },
  args: {
    variant: "list",
    rowSelectionMode: "multiple",
    rows: makeEntity(4),
    columns: entityAllFields,
  },
};

export const FlexParentContainer: StoryObj<TableProps<Entity>> = {
  parameters: {
    layout: "fullscreen",
  },
  name: "Flex parent container",
  render: ({ rows, ...props }: TableProps<Entity>) => {
    const [data, setData] = useState([...(rows as Array<Entity>)]);

    return (
      <div className={classNames("flex", "flex-col")}>
        <div className={classNames("flex", "flex-row", "gap-s", "w-m", "items-center", "p-m")}>
          <Button
            onClick={() => {
              setData((prev) => prev.slice(0, -1));
            }}
            label="Remove a row"
          />
          <Button
            onClick={() => {
              setData((prev) => [...prev, makeEntity(1)[0]]);
            }}
            label="Add a row"
          />
        </div>
        <div className={classNames("flex", "flex-col", "grow-1", "shrink-1")}>
          <Table rows={data} {...props} />
        </div>
      </div>
    );
  },
  args: {
    variant: "list",
    rowSelectionMode: "multiple",
    rows: makeEntity(4),
    columns: entityAllFields,
  },
};

export const FlexParentContainerBoundaries: StoryObj<TableProps<Entity>> = {
  parameters: {
    layout: "fullscreen",
  },
  name: "Flex parent container boundaries",
  render: ({ rows, ...props }: TableProps<Entity>) => {
    const [data, setData] = useState([...(rows as Array<Entity>)]);

    return (
      <div className={classNames("flex", "flex-col")}>
        <div className={classNames("flex", "flex-row", "gap-s", "w-m", "items-center", "p-m")}>
          <Button
            onClick={() => {
              setData((prev) => prev.slice(0, -1));
            }}
            label="Remove a row"
          />
          <Button
            onClick={() => {
              setData((prev) => [...prev, makeEntity(1)[0]]);
            }}
            label="Add a row"
          />
        </div>

        <div className={classNames("flex", "flex-col", "p-0", "m-0")} style={{ minBlockSize: 200, maxBlockSize: 300 }}>
          <Table rows={data} {...props} />
        </div>
      </div>
    );
  },
  args: {
    ...FlexParentContainer.args,
  },
};

export const PredefinedDimensions: StoryObj<TableProps<Entity>> = {
  name: "Predefined dimensions",
  render: ({ rows, ...props }: TableProps<Entity>) => {
    const [data, setData] = useState(rows);

    return (
      <div className={classNames("flex", "flex-col")}>
        <div className={classNames("flex", "flex-row", "gap-s", "w-m", "items-center", "p-m")}>
          <Button
            onClick={() => {
              setData((prev) => (prev || []).slice(0, -1));
            }}
            label="Remove a row"
          />
          <Button
            onClick={() => {
              setData((prev) => [...(prev || []), makeEntity(1)[0]]);
            }}
            label="Add a row"
          />
        </div>

        <div style={{ blockSize: 300, inlineSize: 700 }}>
          <Table {...props} rows={data} />
        </div>
      </div>
    );
  },
  args: { rows: makeEntity(4), columns: entityAllFields, variant: "list" },
};

export const RowSingleSelection: StoryObj<TableProps<Entity>> = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (props: TableProps<Entity>) => {
    const [selected, setSelected] = useState<Record<string, boolean>>({});

    return (
      <div className={classNames("w-full", "p-xl", "border_box")}>
        <div style={{ blockSize: 200 }}>
          <Table
            {...props}
            onRowSelectionChange={(v) => {
              setSelected(v);
            }}
            rowSelection={selected}
          />
        </div>
        <h2>rowSelection state</h2>
        <pre className={classNames("bg-inverse", "text-inverse")}>{JSON.stringify(selected, null, 2)}</pre>
      </div>
    );
  },
  args: {
    variant: "list",
    rowSelectionMode: "single",
    rows: makeEntity(30) as Array<Entity>,
    columns: entityAllFields,
  },
  argTypes: {
    variant: hideArg,
    rows: hideArg,
    columns: hideArg,
    ...RowSelectionArgTypes,
  },
};

export const RowMultipleSelection: StoryObj<TableProps<Entity>> = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (props: TableProps<Entity>) => {
    const [selected, setSelected] = useState<Record<string, boolean>>({});

    return (
      <div className={classNames("w-full", "p-xl", "border_box")}>
        <div style={{ blockSize: 200 }}>
          <Table
            {...props}
            onRowSelectionChange={(v) => {
              setSelected(v);
            }}
            rowSelection={selected}
          />
        </div>
        <h2>rowSelection state</h2>
        <pre className={classNames("bg-inverse", "text-inverse")}>{JSON.stringify(selected, null, 2)}</pre>
      </div>
    );
  },
  args: {
    variant: "list",
    rowSelectionMode: "multiple",
    rows: makeEntity(30) as Array<Entity>,
    columns: entityAllFields,
  },
  argTypes: {
    variant: hideArg,
    rows: hideArg,
    columns: hideArg,
    ...RowSelectionArgTypes,
  },
};

export const RowActions: StoryObj<TableProps<Entity>> = {
  name: "rowActions",
  render: (props: TableProps<Entity>) => {
    return (
      <div className={classNames("w-full", "p-xl", "border_box")} style={{ blockSize: 400 }}>
        <Table {...props} />
      </div>
    );
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    variant: "list",
    rowSelectionMode: "multiple",
    rows: makeEntity(100),
    columns: entityRenderCell,
    rowActions: () => (
      <>
        <Menu.Item
          onClick={() => {
            // eslint-disable-next-line no-alert
            alert("onClick was triggered");
          }}
        >
          Edit
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            // eslint-disable-next-line no-alert
            alert("onClick was triggered");
          }}
        >
          Delete
        </Menu.Item>
      </>
    ),
  },
  argTypes: {
    variant: hideArg,
    rows: hideArg,
    columns: TableArgTypes.columns,
    ...TableArgTypes,
    ...RowSelectionArgTypes,
    ...SortArgTypes,
    ...HideArgTypes,
  },
};

export const loading: StoryObj<TableProps<Entity>> = {
  name: "loading",
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (props: TableProps<Entity>) => {
    return (
      <div className={classNames("flex", "grow-1", "border_box")} style={{ blockSize: 300 }}>
        <Table {...props} />
      </div>
    );
  },
  args: {
    variant: "list",
    loading: true,
    rowSelectionMode: "multiple",
    columns: entityAllFields,
  },
  argTypes: {
    ...TableArgTypes,
    ...RowSelectionArgTypes,
    ...SortArgTypes,
    ...HideArgTypes,
  },
};

export const RowToggling: StoryObj<TableProps<Entity>> = {
  name: "Row toggling",
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (props: Pick<TableProps<Entity>, "defaultToggledRowId" | "toggledRowId" | "onToggledRowChange">) => {
    return (
      <div className={classNames("w-full", "p-xl", "border_box")} style={{ blockSize: 400 }}>
        <Table variant="list" rows={makeEntity(10)} columns={entityAllFields} {...props} />
      </div>
    );
  },
  argTypes: {
    ...RowSelectionArgTypes,
    ...RowTogglingArgTypes,
    variant: hideArg,
    rows: hideArg,
    columns: hideArg,
  },
  args: {
    getRowId: (row) => row.id,
    defaultToggledRowId: "34b40266-50ef-469f-8d12-b33526fbe46e",
  },
};

function LazyMenu({ row }: { row: Entity }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [content, setContent] = useState(
    <>
      <div className={classNames("flex", "border_box", "p-m")}>
        <Skeleton variant="text" width={100} height={16} />
      </div>
      <div className={classNames("flex", "border_box", "p-m")}>
        <Skeleton variant="text" width={100} height={16} />
      </div>
    </>,
  );
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    if (isInView) {
      // simulate api call or any asynchreous operation using the row
      setTimeout(() => {
        setContent(
          <>
            <Menu.Item>Edit {row.name}</Menu.Item>
            <Menu.Item>Delete {row.name}</Menu.Item>
          </>,
        );
      }, 1000);
    }
  }, [isInView, row.name]);
  return <div ref={ref}>{content}</div>;
}

export const LazyRowActions: StoryObj<TableProps<Entity>> = {
  render: (props: TableProps<Entity>) => <Table {...props} />,
  args: {
    variant: "list",
    rows: makeEntity(10),
    columns: entityAllFields,
    rowActions: (row) => <LazyMenu row={row} />,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    controls: false,
  },
};

export const Pagination: StoryObj<TableProps<Entity>> = {
  name: "Pagination / Infinite scroll",
  argTypes: {
    ...PaginationArgTypes,
  },
  parameters: {
    controls: false,
    chromatic: { disableSnapshot: true },
  },
  render: () => {
    const [data, setData] = useState(() => makeEntity(20));
    const fetchMore = () => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          setData((prev) => [...prev, ...makeEntity(20)]);
          resolve();
        }, 500);
      });
    };
    return (
      <div className={classNames("w-full", "p-xl", "border_box")} style={{ blockSize: 400 }}>
        <Table variant="list" rowSelectionMode="multiple" columns={entityAllFields} rows={data} nextPage={fetchMore} />
      </div>
    );
  },
  args: {},
};

export const ServerSideSorting: StoryObj<TableProps<Entity>> = {
  name: "Server side sorting",
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    variant: "list",
    rows: makeEntity(50),
    columns: entityAllFields,
    sortingMode: "server",
  },
  argTypes: {
    variant: hideArg,
    rows: hideArg,
    columns: hideArg,
    ...SortArgTypes,
  },
  render: (props: TableProps<Entity>) => {
    const [data, setData] = useState(() => makeEntity(50));
    const [sorting, setSorting] = useState<SortingState>([]);

    useEffect(() => {
      setTimeout(() => {
        if (sorting.length === 0) {
          return;
        }
        const sort = sorting[0];
        const sortedData = [...data].sort((a, b) => {
          const objectA = a[sort.id as keyof Entity];
          const objectB = b[sort.id as keyof Entity];
          if (objectA && objectB && objectA < objectB) return sort.desc ? 1 : -1;
          if (objectA && objectB && objectA > objectB) return sort.desc ? -1 : 1;
          return 0;
        });
        setData(sortedData);
      }, 1000); // simulate server delay
    }, [sorting, data]);
    return (
      <div className={classNames("w-full", "p-xl", "border_box")} style={{ blockSize: 400 }}>
        <Table {...props} columns={entityAllFields} rows={data} sorting={sorting} onSortingChange={setSorting} />
      </div>
    );
  },
};
