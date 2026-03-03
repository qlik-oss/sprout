import { type CSSProperties, useState } from "react";

import { Table } from ".";
import { Menu } from "../Menu";

export function TableTest({
  width = "600px",
  columnWidth,
  firstColumnWidth,
  enableResizing = false,
}: {
  width?: CSSProperties["width"];
  columnWidth?: CSSProperties["width"];
  firstColumnWidth?: CSSProperties["width"];
  enableResizing?: boolean;
}) {
  const onResize = enableResizing ? () => {} : undefined;
  const resetSize = enableResizing ? () => {} : undefined;

  return (
    <div
      id="component-testing"
      style={{ blockSize: "fit-content", inlineSize: width }}
    >
      <Table.Table variant="data">
        <Table.Head>
          <Table.HeaderRow>
            <Table.DataHeader
              header="Default"
              width={firstColumnWidth || columnWidth}
              onResize={onResize}
              resetSize={resetSize}
            />
            <Table.DataHeader
              header="Interactive"
              width={columnWidth}
              onResize={onResize}
              resetSize={resetSize}
            />
            <Table.DataHeader
              header="ContextMenu"
              width={columnWidth}
              onResize={onResize}
              resetSize={resetSize}
            />
            <Table.DataHeader
              header="Number"
              width={columnWidth}
              onResize={onResize}
              resetSize={resetSize}
            />
            <Table.DataHeader
              header="Overflow"
              width={columnWidth}
              onResize={onResize}
              resetSize={resetSize}
            />
            <Table.DataHeader
              header="OverflowWithMenu"
              ellipsis
              width={columnWidth}
            />
          </Table.HeaderRow>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={firstColumnWidth || columnWidth}>
              <Table.CellContent>Cell</Table.CellContent>
            </Table.Cell>
            <Table.Cell interactive width={columnWidth}>
              <Table.CellContent>Cell</Table.CellContent>
            </Table.Cell>
            <Table.Cell width={columnWidth}>
              <Table.CellContent>Cell</Table.CellContent>
              <Table.CellActionWrapper>
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
                  <Table.ContextualIconButton />
                </Menu.Trigger>
              </Table.CellActionWrapper>
            </Table.Cell>
            <Table.Cell width={columnWidth}>
              <Table.CellContent variant="number">0</Table.CellContent>
            </Table.Cell>
            <Table.Cell width={columnWidth}>
              <Table.CellContent>
                CellCellCell CellCellCell CellCellCell
              </Table.CellContent>
            </Table.Cell>
            <Table.Cell width={columnWidth}>
              <Table.CellContent>
                CellCellCell CellCellCell CellCellCell
              </Table.CellContent>
              <Table.CellActionWrapper>
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
                  <Table.ContextualIconButton />
                </Menu.Trigger>
              </Table.CellActionWrapper>
            </Table.Cell>
          </Table.Row>
          <Table.Row height="40px">
            <Table.Cell width={firstColumnWidth || columnWidth}>
              <Table.CellContent>Fixed height</Table.CellContent>
            </Table.Cell>
            <Table.Cell interactive width={columnWidth}>
              <Table.CellContent>Fixed height</Table.CellContent>
            </Table.Cell>
            <Table.Cell width={columnWidth}>
              <Table.CellContent>Fixed height</Table.CellContent>
            </Table.Cell>
            <Table.Cell width={columnWidth}>
              <Table.CellContent variant="number">32</Table.CellContent>
            </Table.Cell>
            <Table.Cell width={columnWidth}>
              <Table.CellContent>
                Fixed height Fixed height Fixed height
              </Table.CellContent>
            </Table.Cell>
            <Table.Cell width={columnWidth}>
              <Table.CellContent>
                Fixed height Fixed height Fixed height
              </Table.CellContent>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Table>
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
      <Table.Table
        variant="data"
        contentHeight={contentHeight}
        height={300}
        overflowY="virtualized"
      >
        <Table.Head>
          <Table.HeaderRow>
            <Table.Header header={`Content height: ${contentHeight}`} />
          </Table.HeaderRow>
        </Table.Head>
        <Table.Body>
          <div data-testid="table-body-content">Foo</div>
        </Table.Body>
      </Table.Table>
    </div>
  );
}
