import { Button, classNames, Menu, Message } from "@qlik/sprout-css-react";
import type { ReactNode } from "react";
import { TableHTML } from ".";

export default {
  title: "Fork/Atoms",
};

function H2({ children }: { children: ReactNode }) {
  return <h2 className={classNames("font-heading-m", "text-default")}>{children}</h2>;
}
const CONTEXT_MENU = (
  <Menu.Item
    label="Contextual menu example"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
    }}
  />
) as ReactNode;

function EmptyIllustration() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="100" fill="none" viewBox="0 0 160 100">
      <g>
        <path
          stroke="var(--sprout-illustration-color-palette-0, #595959)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M25.223 14.688 9 39.528l57.033 22.306 16.983-27.882-57.793-19.264Z"
        />
        <path
          stroke="var(--sprout-illustration-color-palette-0, #595959)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M131 18 83 33.97l17.744 29.403 49.681-21.74L131 18ZM130.417 17.73 73.384 1 25.223 14.688M73.384 1v29.718"
        />
        <path
          stroke="var(--sprout-illustration-color-palette-0, #595959)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M25.223 45.875V72.99l57.793 26.107V33.953M83.017 99.097l49.681-24.841V49.723"
        />
        <path
          stroke="var(--sprout-illustration-color-palette-2, #009844)"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m41.91 62.725 19.502 8.08V64.53l-19.501-7.67v5.866Z"
        />
      </g>
    </svg>
  );
}

const CONTEXTUAL_MENU = (
  <TableHTML.HeaderMenuButton
    menu={
      <TableHTML.HeaderMenuContent
        sortOrder="desc"
        onSortChange={() => {}}
        onHideColumn={() => {}}
        onManageColumns={() => {}}
      />
    }
  />
);

export const VisualTest = {
  name: "Visual Test",
  render: () => (
    <div className={classNames("flex", "flex-col", "gap-xl")}>
      <div className={classNames("flex", "flex-col", "gap-s", "w-l")}>
        <div
          className={classNames("flex", "justify-start", "items-start", "flex-row", "gap-s", "w-full")}
          style={{ blockSize: "300px" }}
        >
          <div className={classNames("grow-1")}>
            <H2>_ColumVisibilityMenu</H2>
            <TableHTML.ColumnVisibilityMenu
              initialOpen
              columns={[
                { id: "col1", label: "Col 1", visible: true },
                { id: "col2", label: "Col 2", visible: false },
              ]}
              onColumnVisibilityChange={() => {}}
            >
              <Button label="trigger" />
            </TableHTML.ColumnVisibilityMenu>
          </div>
          <div className={classNames("grow-1")} style={{ blockSize: 180 }}>
            <H2>ContextualMenu</H2>
            <TableHTML.Table variant="data">
              <TableHTML.Head>
                <TableHTML.HeaderRow>
                  <TableHTML.Header
                    width={220}
                    additionalInfo="addition info"
                    header="Contextual"
                    sortOrder="desc"
                    data-status="hover"
                    contextualMenu={CONTEXTUAL_MENU}
                  />
                </TableHTML.HeaderRow>
              </TableHTML.Head>
            </TableHTML.Table>
          </div>
        </div>
      </div>
      <H2>Header (Data)</H2>
      <div className={classNames("flex", "flex-col", "gap-xl", "w-l")}>
        <TableHTML.Table variant="data">
          <TableHTML.Head>
            <TableHTML.HeaderRow>
              <TableHTML.Header
                header="Default"
                additionalInfo="additionalInfo"
                width={150}
                contextualMenu={CONTEXTUAL_MENU}
              />
              <TableHTML.Header
                contextualMenu={CONTEXTUAL_MENU}
                additionalInfo="addition info"
                header="Hover"
                sortOrder="desc"
                data-status="hover"
                width={150}
              />

              <TableHTML.Header
                width={150}
                additionalInfo="addition info"
                header="Focus"
                sortOrder="desc"
                data-status="focus"
                contextualMenu={CONTEXTUAL_MENU}
              />
              <TableHTML.Header
                width={150}
                additionalInfo="addition info"
                header="Focus Visible"
                sortOrder="desc"
                data-status="focus-visible"
                contextualMenu={CONTEXTUAL_MENU}
              />
            </TableHTML.HeaderRow>
          </TableHTML.Head>
        </TableHTML.Table>
        <TableHTML.Table variant="data">
          <TableHTML.Head>
            <TableHTML.HeaderRow>
              <TableHTML.Header
                contextualMenu={CONTEXTUAL_MENU}
                width={150}
                additionalInfo="selection multiple"
                header="Default"
                sortOrder="desc"
                selection="multiple"
              />
              <TableHTML.Header
                contextualMenu={CONTEXTUAL_MENU}
                width={150}
                additionalInfo="selection multiple"
                header="Hover"
                sortOrder="desc"
                selection="multiple"
                data-status="hover"
              />
              <TableHTML.Header
                contextualMenu={CONTEXTUAL_MENU}
                width={150}
                additionalInfo="selection multiple + selected"
                header="Selected"
                sortOrder="desc"
                selection="multiple"
                selected
              />
              <TableHTML.Header
                contextualMenu={CONTEXTUAL_MENU}
                width={150}
                additionalInfo="selection multiple + selected + hover"
                header="Hover + Selected"
                sortOrder="desc"
                selection="multiple"
                selected
                data-status="hover"
              />
            </TableHTML.HeaderRow>
          </TableHTML.Head>
        </TableHTML.Table>
        <TableHTML.Table variant="data">
          <TableHTML.Head>
            <TableHTML.HeaderRow>
              <TableHTML.Header
                contextualMenu={CONTEXTUAL_MENU}
                width={150}
                additionalInfo="selection single"
                header="Default"
                sortOrder="desc"
                selection="single"
              />
              <TableHTML.Header
                contextualMenu={CONTEXTUAL_MENU}
                width={150}
                additionalInfo="selection single + hover"
                header="DataHeader"
                sortOrder="desc"
                selection="single"
                data-status="hover"
              />
              <TableHTML.Header
                contextualMenu={CONTEXTUAL_MENU}
                width={150}
                additionalInfo="selection single + selected"
                header="Selected"
                sortOrder="desc"
                selection="single"
                selected
              />
              <TableHTML.Header
                contextualMenu={CONTEXTUAL_MENU}
                width={150}
                additionalInfo="selection single + selected + hover"
                header="Hover + Selected"
                sortOrder="desc"
                selection="single"
                selected
                data-status="hover"
              />
            </TableHTML.HeaderRow>
          </TableHTML.Head>
        </TableHTML.Table>
        <TableHTML.Table variant="data" width={602}>
          <TableHTML.Head>
            <TableHTML.HeaderRow>
              <TableHTML.Header
                contextualMenu={CONTEXTUAL_MENU}
                additionalInfo="default overflow"
                header="Overflowing DataHeader label"
                sortOrder="desc"
                selection="single"
                width={150}
              />
              <TableHTML.Header
                contextualMenu={CONTEXTUAL_MENU}
                additionalInfo="ellipsis for overflow"
                header="Overflowing DataHeader label"
                sortOrder="desc"
                selection="single"
                ellipsis
                width={150}
              />
              <TableHTML.Header
                contextualMenu={CONTEXTUAL_MENU}
                additionalInfo="2 lines before overflow"
                header="Overflowing DataHeader label"
                sortOrder="desc"
                selection="single"
                lines={2}
                width={150}
              />
            </TableHTML.HeaderRow>
          </TableHTML.Head>
        </TableHTML.Table>
      </div>
      <H2>Header (List)</H2>
      <div className={classNames("flex", "flex-col", "gap-s", "w-l")}>
        <TableHTML.Table variant="list">
          <TableHTML.Head>
            <TableHTML.HeaderRow>
              <TableHTML.Header additionalInfo="additional info" header="Default" sortOrder="desc" />
              <TableHTML.Header additionalInfo="additional info" header="Hover" sortOrder="desc" data-status="hover" />
              <TableHTML.Header additionalInfo="additional info" header="Focus" sortOrder="desc" data-status="focus" />
              <TableHTML.Header
                additionalInfo="additional info"
                header="FocusVisible"
                sortOrder="desc"
                data-status="focus-visible"
              />
            </TableHTML.HeaderRow>
          </TableHTML.Head>
        </TableHTML.Table>
      </div>
      <H2>_TableCell</H2>
      <div className={classNames("flex", "flex-col", "gap-s", "w-xxl")}>
        <TableHTML.Table variant="list">
          <TableHTML.Head>
            <TableHTML.HeaderRow>
              <TableHTML.Header header="Default" />
              <TableHTML.Header header="Interactive" />
              <TableHTML.Header header="ContextMenu" />
              <TableHTML.Header header="Number" />
              <TableHTML.Header header="Overflow" />
              <TableHTML.Header header="OverflowWithMenu" ellipsis />
            </TableHTML.HeaderRow>
          </TableHTML.Head>
          <TableHTML.Body>
            <TableHTML.Row>
              <TableHTML.Cell>
                <TableHTML.CellContent>Cell</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell interactive>
                <TableHTML.CellContent>Cell</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell>
                <TableHTML.CellContent>Cell</TableHTML.CellContent>
                <TableHTML.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <TableHTML.ContextualIconButton />
                  </Menu.Trigger>
                </TableHTML.CellActionWrapper>
              </TableHTML.Cell>
              <TableHTML.Cell>
                <TableHTML.CellContent variant="number">0</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell>
                <TableHTML.CellContent>CellCellCell CellCellCell CellCellCell</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell>
                <TableHTML.CellContent>CellCellCell CellCellCell CellCellCell</TableHTML.CellContent>
                <TableHTML.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <TableHTML.ContextualIconButton />
                  </Menu.Trigger>
                </TableHTML.CellActionWrapper>
              </TableHTML.Cell>
            </TableHTML.Row>
            <TableHTML.Row>
              <TableHTML.Cell>
                <TableHTML.CellContent>:hover</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell interactive data-status="hover">
                <TableHTML.CellContent>:hover</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell interactive data-status="hover">
                <TableHTML.CellContent>:hover</TableHTML.CellContent>
                <TableHTML.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <TableHTML.ContextualIconButton />
                  </Menu.Trigger>
                </TableHTML.CellActionWrapper>
              </TableHTML.Cell>
              <TableHTML.Cell>
                <TableHTML.CellContent variant="number">10</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell data-status="hover">
                <TableHTML.CellContent>CellCellCell CellCellCell CellCellCell</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell data-status="hover">
                <TableHTML.CellContent>CellCellCell CellCellCell CellCellCell</TableHTML.CellContent>
                <TableHTML.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <TableHTML.ContextualIconButton />
                  </Menu.Trigger>
                </TableHTML.CellActionWrapper>
              </TableHTML.Cell>
            </TableHTML.Row>
            <TableHTML.Row>
              <TableHTML.Cell data-status="focus-visible">
                <TableHTML.CellContent>:focus-visible</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell interactive data-status="focus-visible">
                <TableHTML.CellContent>:focus-visible</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell data-status="focus-visible">
                <TableHTML.CellContent>:focus-visible</TableHTML.CellContent>
                <TableHTML.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <TableHTML.ContextualIconButton />
                  </Menu.Trigger>
                </TableHTML.CellActionWrapper>
              </TableHTML.Cell>
              <TableHTML.Cell data-status="focus-visible">
                <TableHTML.CellContent variant="number">100</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell data-status="focus-visible">
                <TableHTML.CellContent>CellCellCell CellCellCell CellCellCell</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell data-status="focus-visible">
                <TableHTML.CellContent>CellCellCell CellCellCell CellCellCell</TableHTML.CellContent>
                <TableHTML.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <TableHTML.ContextualIconButton />
                  </Menu.Trigger>
                </TableHTML.CellActionWrapper>
              </TableHTML.Cell>
            </TableHTML.Row>
            <TableHTML.Row>
              <TableHTML.Cell selected>
                <TableHTML.CellContent>Selected</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell interactive selected>
                <TableHTML.CellContent>Selected</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell selected>
                <TableHTML.CellContent>Selected</TableHTML.CellContent>
                <TableHTML.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <TableHTML.ContextualIconButton />
                  </Menu.Trigger>
                </TableHTML.CellActionWrapper>
              </TableHTML.Cell>
              <TableHTML.Cell selected>
                <TableHTML.CellContent variant="number">1000</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell selected>
                <TableHTML.CellContent>CellCellCell CellCellCell CellCellCell</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell selected>
                <TableHTML.CellContent>CellCellCell CellCellCell CellCellCell</TableHTML.CellContent>
                <TableHTML.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <TableHTML.ContextualIconButton />
                  </Menu.Trigger>
                </TableHTML.CellActionWrapper>
              </TableHTML.Cell>
            </TableHTML.Row>
            <TableHTML.Row height="40px">
              <TableHTML.Cell>
                <TableHTML.CellContent>Fixed height</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell interactive>
                <TableHTML.CellContent>Fixed height</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell>
                <TableHTML.CellContent>Fixed height</TableHTML.CellContent>
                <TableHTML.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <TableHTML.ContextualIconButton />
                  </Menu.Trigger>
                </TableHTML.CellActionWrapper>
              </TableHTML.Cell>
              <TableHTML.Cell>
                <TableHTML.CellContent variant="number">32</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell>
                <TableHTML.CellContent>Fixed height Fixed height Fixed height</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell>
                <TableHTML.CellContent>Fixed height Fixed height Fixed height</TableHTML.CellContent>
                <TableHTML.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <TableHTML.ContextualIconButton />
                  </Menu.Trigger>
                </TableHTML.CellActionWrapper>
              </TableHTML.Cell>
            </TableHTML.Row>
            <TableHTML.Row>
              <TableHTML.Cell>
                <TableHTML.CellContent ellipsis>Ellipses overflowing content</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell interactive>
                <TableHTML.CellContent ellipsis>Ellipses overflowing content</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell>
                <TableHTML.CellContent ellipsis>Ellipses overflowing content</TableHTML.CellContent>
                <TableHTML.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <TableHTML.ContextualIconButton />
                  </Menu.Trigger>
                </TableHTML.CellActionWrapper>
              </TableHTML.Cell>
              <TableHTML.Cell>
                <TableHTML.CellContent ellipsis variant="number">
                  12345678901234567890
                </TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell>
                <TableHTML.CellContent ellipsis>
                  Ellipses overflowing content Ellipses overflowing content
                </TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell>
                <TableHTML.CellContent ellipsis>
                  Ellipses overflowing content Ellipses overflowing content
                </TableHTML.CellContent>
                <TableHTML.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <TableHTML.ContextualIconButton />
                  </Menu.Trigger>
                </TableHTML.CellActionWrapper>
              </TableHTML.Cell>
            </TableHTML.Row>
            <TableHTML.Row>
              <TableHTML.Cell height="32px">
                <TableHTML.CellContent lines={2}>2 lines of overflowing content</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell height="32px" interactive>
                <TableHTML.CellContent lines={2}>2 lines of overflowing content</TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell height="32px">
                <TableHTML.CellContent lines={2}>2 lines of overflowing content</TableHTML.CellContent>
                <TableHTML.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <TableHTML.ContextualIconButton />
                  </Menu.Trigger>
                </TableHTML.CellActionWrapper>
              </TableHTML.Cell>
              <TableHTML.Cell height="32px">
                <TableHTML.CellContent lines={2} variant="number">
                  12345678901234567890 12345678901234567890
                </TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell height="32px">
                <TableHTML.CellContent lines={2}>
                  2 lines of overflowing content 2 lines of overflowing content
                </TableHTML.CellContent>
              </TableHTML.Cell>
              <TableHTML.Cell height="32px">
                <TableHTML.CellContent lines={2}>
                  2 lines of overflowing content 2 lines of overflowing content
                </TableHTML.CellContent>
                <TableHTML.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <TableHTML.ContextualIconButton />
                  </Menu.Trigger>
                </TableHTML.CellActionWrapper>
              </TableHTML.Cell>
            </TableHTML.Row>
          </TableHTML.Body>
        </TableHTML.Table>
      </div>
      <H2>Vertical scroll</H2>
      <div className={classNames("flex", "flex-col", "gap-s", "w-xl")}>
        <TableHTML.Table variant="list" height={200}>
          <TableHTML.Head>
            <TableHTML.HeaderRow>
              <TableHTML.Cell width={34} isHeader interactive>
                <TableHTML.Selection rowSelection="multiple" isHeader />
              </TableHTML.Cell>
              <TableHTML.Header header="Header" />
              <TableHTML.Header header="Header" />
              <TableHTML.Header header="Header" />
            </TableHTML.HeaderRow>
          </TableHTML.Head>
          <TableHTML.Body>
            {Array.from({ length: 20 }, (_, i) => (
              <TableHTML.Row key={i} interactive selected={i === 3} data-status={i === 2 ? "hover" : undefined}>
                <TableHTML.Cell width={TableHTML.CONSTANT.COL_WIDTH_SELECTION} interactive>
                  <TableHTML.Selection rowSelection="multiple" checked={i === 3} />
                </TableHTML.Cell>
                <TableHTML.Cell>
                  <TableHTML.CellContent>Cell {i + 1}</TableHTML.CellContent>
                </TableHTML.Cell>
                <TableHTML.Cell>
                  <TableHTML.CellContent>Cell {i + 1}</TableHTML.CellContent>
                </TableHTML.Cell>
                <TableHTML.Cell>
                  <TableHTML.CellContent>Cell {i + 1}</TableHTML.CellContent>
                </TableHTML.Cell>
              </TableHTML.Row>
            ))}
          </TableHTML.Body>
        </TableHTML.Table>
      </div>
      <H2>Vertical scroll virtualized</H2>
      <div className={classNames("overflow-auto", "gap-s", "w-xl")} style={{ blockSize: "200px" }}>
        <TableHTML.Table variant="data" height={200} overflowY="virtualized" contentHeight={100 * 32}>
          <TableHTML.Head>
            <TableHTML.HeaderRow>
              <TableHTML.Cell width={TableHTML.CONSTANT.COL_WIDTH_ROW_NUMBER} isHeader>
                <TableHTML.RowNumber index="#" />
              </TableHTML.Cell>
              <TableHTML.Cell width={TableHTML.CONSTANT.COL_WIDTH_SELECTION} isHeader interactive>
                <TableHTML.Selection rowSelection="single" />
              </TableHTML.Cell>
              <TableHTML.Header header="Header" />
              <TableHTML.Header header="Header" />
              <TableHTML.Header header="Header" />
            </TableHTML.HeaderRow>
          </TableHTML.Head>
          <TableHTML.Body>
            {Array.from({ length: 20 }, (_, i) => (
              <TableHTML.Row key={i} startPosition={i * 32}>
                <TableHTML.Cell width={TableHTML.CONSTANT.COL_WIDTH_ROW_NUMBER} interactive>
                  <TableHTML.RowNumber index={i} />
                </TableHTML.Cell>
                <TableHTML.Cell width={TableHTML.CONSTANT.COL_WIDTH_SELECTION} interactive>
                  <TableHTML.Selection rowSelection="single" checked={i === 3} />
                </TableHTML.Cell>
                <TableHTML.Cell interactive>
                  <TableHTML.CellContent>Cell {i + 1}</TableHTML.CellContent>
                </TableHTML.Cell>
                <TableHTML.Cell interactive>
                  <TableHTML.CellContent>Cell {i + 1}</TableHTML.CellContent>
                </TableHTML.Cell>
                <TableHTML.Cell interactive>
                  <TableHTML.CellContent>Cell {i + 1}</TableHTML.CellContent>
                </TableHTML.Cell>
              </TableHTML.Row>
            ))}
          </TableHTML.Body>
        </TableHTML.Table>
      </div>
      <H2>Horizontal scroll</H2>
      TODO
      <H2>Empty state</H2>
      <div className={classNames("overflow-auto", "gap-s", "w-xl")} style={{ blockSize: "250px" }}>
        <TableHTML.Table variant="data" height={250} overflowY="virtualized" contentHeight={100 * 32}>
          <TableHTML.Head>
            <TableHTML.HeaderRow>
              <TableHTML.Cell width={TableHTML.CONSTANT.COL_WIDTH_ROW_NUMBER} isHeader>
                <TableHTML.RowNumber index="#" />
              </TableHTML.Cell>
              <TableHTML.Cell width={TableHTML.CONSTANT.COL_WIDTH_SELECTION} isHeader interactive>
                <TableHTML.Selection rowSelection="single" />
              </TableHTML.Cell>
              <TableHTML.Header header="Header" />
              <TableHTML.Header header="Header" />
              <TableHTML.Header header="Header" />
            </TableHTML.HeaderRow>
          </TableHTML.Head>
          <TableHTML.Message>
            <Message
              title="Empty table reason"
              message="Description of why table is empty, replace illustration with best fit"
              illustration={<EmptyIllustration />}
            />
          </TableHTML.Message>
        </TableHTML.Table>
      </div>
    </div>
  ),

  parameters: {
    chromatic: { disableSnapshot: false },
    controls: { disable: true },
    pseudo: {
      hover: '[data-status="hover"]',
      active: '[data-status="active"]',
      focus: ['[data-status="focus"]'],
      focusVisible: ['[data-status="focus-visible"]'],
    },
  },
};
