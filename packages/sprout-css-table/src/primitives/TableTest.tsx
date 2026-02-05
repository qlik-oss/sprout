import { useState, type CSSProperties } from "react";

import { Menu } from "@qlik/sprout-css-react";
import { TableHTML, type TableHTMLProps } from ".";
import { Table } from "../TanstackTable";
import { makePerson, personColDef } from "../docs/examples/person";

export function TableTest({
  width = 600,
  columnWidth,
  firstColumnWidth,
  resizable = false,
}: {
  width?: number;
  columnWidth?: number;
  firstColumnWidth?: number;
  resizable?: boolean;
}) {
  const onResize = resizable ? () => {} : undefined;
  const resetSize = resizable ? () => {} : undefined;

  return (
    <div id="component-testing" style={{ blockSize: "fit-content", width }}>
      <TableHTML.Table variant="data">
        <TableHTML.Head>
          <TableHTML.HeaderRow>
            <TableHTML.DataHeader
              header="Default"
              width={firstColumnWidth || columnWidth}
              onResize={onResize}
              resetSize={resetSize}
            />
            <TableHTML.DataHeader header="Interactive" width={columnWidth} onResize={onResize} resetSize={resetSize} />
            <TableHTML.DataHeader header="ContextMenu" width={columnWidth} onResize={onResize} resetSize={resetSize} />
            <TableHTML.DataHeader header="Number" width={columnWidth} onResize={onResize} resetSize={resetSize} />
            <TableHTML.DataHeader header="Overflow" width={columnWidth} onResize={onResize} resetSize={resetSize} />
            <TableHTML.DataHeader header="OverflowWithMenu" ellipsis width={columnWidth} />
          </TableHTML.HeaderRow>
        </TableHTML.Head>
        <TableHTML.Body>
          <TableHTML.Row>
            <TableHTML.Cell width={firstColumnWidth || columnWidth}>
              <TableHTML.CellContent>Cell</TableHTML.CellContent>
            </TableHTML.Cell>
            <TableHTML.Cell interactive width={columnWidth}>
              <TableHTML.CellContent>Cell</TableHTML.CellContent>
            </TableHTML.Cell>
            <TableHTML.Cell width={columnWidth}>
              <TableHTML.CellContent>Cell</TableHTML.CellContent>
              <TableHTML.CellActionWrapper>
                <Menu.Trigger
                  menu={
                    <Menu.Item
                      label="Contextual menu example"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                    />
                  }
                >
                  <TableHTML.ContextualIconButton />
                </Menu.Trigger>
              </TableHTML.CellActionWrapper>
            </TableHTML.Cell>
            <TableHTML.Cell width={columnWidth}>
              <TableHTML.CellContent variant="number">0</TableHTML.CellContent>
            </TableHTML.Cell>
            <TableHTML.Cell width={columnWidth}>
              <TableHTML.CellContent>CellCellCell CellCellCell CellCellCell</TableHTML.CellContent>
            </TableHTML.Cell>
            <TableHTML.Cell width={columnWidth}>
              <TableHTML.CellContent>CellCellCell CellCellCell CellCellCell</TableHTML.CellContent>
              <TableHTML.CellActionWrapper>
                <Menu.Trigger
                  menu={
                    <Menu.Item
                      label="Contextual menu example"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                    />
                  }
                >
                  <TableHTML.ContextualIconButton />
                </Menu.Trigger>
              </TableHTML.CellActionWrapper>
            </TableHTML.Cell>
          </TableHTML.Row>
          <TableHTML.Row height="40px">
            <TableHTML.Cell width={firstColumnWidth || columnWidth}>
              <TableHTML.CellContent>Fixed height</TableHTML.CellContent>
            </TableHTML.Cell>
            <TableHTML.Cell interactive width={columnWidth}>
              <TableHTML.CellContent>Fixed height</TableHTML.CellContent>
            </TableHTML.Cell>
            <TableHTML.Cell width={columnWidth}>
              <TableHTML.CellContent>Fixed height</TableHTML.CellContent>
            </TableHTML.Cell>
            <TableHTML.Cell width={columnWidth}>
              <TableHTML.CellContent variant="number">32</TableHTML.CellContent>
            </TableHTML.Cell>
            <TableHTML.Cell width={columnWidth}>
              <TableHTML.CellContent>Fixed height Fixed height Fixed height</TableHTML.CellContent>
            </TableHTML.Cell>
            <TableHTML.Cell width={columnWidth}>
              <TableHTML.CellContent>Fixed height Fixed height Fixed height</TableHTML.CellContent>
            </TableHTML.Cell>
          </TableHTML.Row>
        </TableHTML.Body>
      </TableHTML.Table>
    </div>
  );
}

export function TableContextHeight() {
  const [contentHeight, setContentHeight] = useState(50);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setContentHeight((prev) => prev + 50);
        }}
      >
        Increase Content Height
      </button>
      <button
        type="button"
        onClick={() => {
          setContentHeight((prev) => Math.max(prev - 50, 50));
        }}
      >
        Decrease Content Height
      </button>
      <TableHTML.Table variant="data" contentHeight={contentHeight} height={300} overflowY="virtualized">
        <TableHTML.Head>
          <TableHTML.HeaderRow>
            <TableHTML.Header header={`Content height: ${contentHeight}`} />
          </TableHTML.HeaderRow>
        </TableHTML.Head>
        <TableHTML.Body>
          <div data-testid="table-body-content">Foo</div>
        </TableHTML.Body>
      </TableHTML.Table>
    </div>
  );
}

export function TableColumnSize({ totalWidth }: { totalWidth: CSSProperties["width"] }) {
  const colProps: Record<string, TableHTMLProps["Header"]> = {
    header1: { minWidth: 50, maxWidth: 300 },
    header2: { width: 50 },
    header3: { minWidth: 400 },
  };

  return (
    <div style={{ inlineSize: totalWidth }}>
      <TableHTML.Table variant="data" height={200} overflowY="virtualized" contentHeight={100 * 32}>
        <TableHTML.Head>
          <TableHTML.HeaderRow>
            <TableHTML.Header header="Header 1" {...colProps.header1} />
            <TableHTML.Header header="header 2" {...colProps.header2} />
            <TableHTML.Header header="Header 3" {...colProps.header3} />
          </TableHTML.HeaderRow>
        </TableHTML.Head>
        <TableHTML.Body>
          {Array.from({ length: 20 }, (_, i) => (
            <TableHTML.Row key={i} startPosition={i * 32}>
              <TableHTML.Cell interactive {...colProps.header1}>
                <TableHTML.CellContent>Cell {i + 1}</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell interactive {...colProps.header2}>
                <TableHTML.CellContent>Cell {i + 1}</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell interactive {...colProps.header3}>
                <TableHTML.CellContent>Cell {i + 1}</TableHTML.CellContent>
              </TableHTML.Cell>
            </TableHTML.Row>
          ))}
        </TableHTML.Body>
      </TableHTML.Table>
    </div>
  );
}

export function TableDataTest() {
  return (
    <div
      id="component-testing"
      style={{
        blockSize: 400,
        inlineSize: "100%",
        boxSizing: "border-box",
        padding: "var(--sprout-common-spacing-xl)",
      }}
    >
      <Table variant="data" rowHeight={48} rows={makePerson(10)} columns={personColDef} />
    </div>
  );
}
