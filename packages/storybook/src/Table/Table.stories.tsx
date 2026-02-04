import type { ReactNode } from "react";

import {
  Button,
  Menu,
  Message,
  Table,
  type TableProps,
  classNames,
} from "@qlik/sprout-css-react";

export default {
  title: "Components/Table",
};

function EmptyIllustration() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="160"
      height="100"
      fill="none"
      viewBox="0 0 160 100"
    >
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

export const HTMLTable = {
  name: "Table HTML",
  args: {
    variant: "data",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["list", "data"],
    },
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=27931-7373&t=8KuaKPqH6gSP8Hci-0",
    },
  },
  render: ({ variant }: TableProps["Table"]) => (
    <Table.Table variant={variant}>
      <Table.Head>
        <Table.HeaderRow>
          <Table.SupportCell isHeader>
            <Table.RowNumber index="#" />
          </Table.SupportCell>
          <Table.SupportCell isHeader interactive>
            <Table.Selection rowSelection="multiple" isHeader />
          </Table.SupportCell>
          <Table.Header
            additionalInfo="sorted asc"
            header="Header"
            sortOrder="asc"
          >
            <span
              className={classNames("truncate", "font-body-xs", "text-weak")}
            >
              placeholder
            </span>
          </Table.Header>
          <Table.Header
            additionalInfo="sorted desc"
            header="Header"
            sortOrder="desc"
          />
          <Table.Header
            additionalInfo="sortable"
            header="Header"
            sortOrder={false}
          />
          <Table.Header additionalInfo="not sortable" header="Header" />
        </Table.HeaderRow>
      </Table.Head>
      <Table.Body>
        <Table.Row interactive>
          <Table.SupportCell>
            <Table.RowNumber index={1} />
          </Table.SupportCell>
          <Table.SupportCell interactive>
            <Table.Selection rowSelection="multiple" />
          </Table.SupportCell>
          <Table.Cell>
            <Table.CellContent>cell</Table.CellContent>
          </Table.Cell>
          <Table.Cell>
            <Table.CellContent variant="number">201,234.00</Table.CellContent>
          </Table.Cell>
          <Table.Cell>
            <Table.CellContent>cell</Table.CellContent>
          </Table.Cell>
          <Table.Cell>
            <Table.CellContent>cell</Table.CellContent>
          </Table.Cell>
        </Table.Row>
        <Table.Row interactive>
          <Table.SupportCell>
            <Table.RowNumber index={2} />
          </Table.SupportCell>
          <Table.SupportCell interactive>
            <Table.Selection rowSelection="multiple" />
          </Table.SupportCell>
          <Table.Cell>
            <Table.CellContent>cell</Table.CellContent>
          </Table.Cell>
          <Table.Cell>
            <Table.CellContent variant="number">201,234.00</Table.CellContent>
          </Table.Cell>
          <Table.Cell>
            <Table.CellContent>cell</Table.CellContent>
          </Table.Cell>
          <Table.Cell>
            <Table.CellContent>cell</Table.CellContent>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Table>
  ),
};

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className={classNames("font-heading-m", "text-default")}>{children}</h2>
  );
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

export const VisualTest = {
  name: "Visual Test",
  render: () => (
    <div className={classNames("flex", "flex-col", "gap-xl")}>
      <div className={classNames("flex", "flex-col", "gap-s", "w-l")}>
        <div
          className={classNames(
            "flex",
            "justify-start",
            "items-start",
            "flex-row",
            "gap-s",
            "w-full",
          )}
          style={{ blockSize: "300px" }}
        >
          <div className={classNames("grow-1")}>
            <H2>_ColumVisibilityMenu</H2>
            <Table.ColumnVisibilityMenu
              initialOpen
              columns={[
                { id: "col1", label: "Col 1", visible: true },
                { id: "col2", label: "Col 2", visible: false },
              ]}
              onColumnVisibilityChange={() => {}}
            >
              <Button label="trigger" />
            </Table.ColumnVisibilityMenu>
          </div>
          <div className={classNames("grow-1")} style={{ blockSize: 180 }}>
            <H2>ContextualMenu</H2>
            <Table.Table variant="data">
              <Table.Head>
                <Table.HeaderRow>
                  <Table.Header
                    additionalInfo="addition info"
                    header="Contextual"
                    sortOrder="desc"
                    data-status="hover"
                    contextualMenu={
                      <Table.HeaderMenuButton
                        defaultOpen
                        menu={
                          <Table.HeaderMenuContent
                            sortOrder="desc"
                            onSortChange={() => {}}
                            onHideColumn={() => {}}
                            onManageColumns={() => {}}
                          />
                        }
                      />
                    }
                  />
                </Table.HeaderRow>
              </Table.Head>
            </Table.Table>
          </div>
        </div>
      </div>
      <H2>Header(Data)</H2>
      <div className={classNames("flex", "flex-col", "gap-xl", "w-xl")}>
        <Table.Table variant="data">
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header header="DataHeader" />
              <Table.Header
                header="DataHeader"
                additionalInfo="additionalInfo"
              />
              <Table.Header
                additionalInfo="addition info"
                header="Hover"
                sortOrder="desc"
                data-status="hover"
              />
              <Table.Header
                additionalInfo="addition info"
                header="Contextual + Hover"
                sortOrder="desc"
                data-status="hover"
                contextualMenu={
                  <Table.HeaderMenuButton
                    menu={
                      <Table.HeaderMenuContent
                        sortOrder="desc"
                        onSortChange={() => {}}
                        onHideColumn={() => {}}
                        onManageColumns={() => {}}
                      />
                    }
                  />
                }
              />
              <Table.Header
                additionalInfo="addition info"
                header="Focus"
                sortOrder="desc"
                data-status="focus"
                contextualMenu={
                  <Table.HeaderMenuButton
                    menu={
                      <Table.HeaderMenuContent
                        sortOrder="desc"
                        onSortChange={() => {}}
                        onHideColumn={() => {}}
                        onManageColumns={() => {}}
                      />
                    }
                  />
                }
              />
            </Table.HeaderRow>
          </Table.Head>
        </Table.Table>
        <Table.Table variant="data">
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header
                additionalInfo="selection multiple"
                header="DataHeader"
                sortOrder="desc"
                selection="multiple"
              />
              <Table.Header
                additionalInfo="selection multiple"
                header="DataHeader hover"
                sortOrder="desc"
                selection="multiple"
                data-status="hover"
              />
              <Table.Header
                additionalInfo="selection multiple + selected"
                header="DataHeader"
                sortOrder="desc"
                selection="multiple"
                selected
              />
              <Table.Header
                additionalInfo="selection multiple + selected + hover"
                header="DataHeader"
                sortOrder="desc"
                selection="multiple"
                selected
                data-status="hover"
              />
              <Table.Header
                additionalInfo="selection multiple + selected + hover"
                header="Overflowing DataHeader label"
                sortOrder="desc"
                selection="multiple"
                selected
                data-status="hover"
              />
            </Table.HeaderRow>
          </Table.Head>
        </Table.Table>
        <Table.Table variant="data">
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header
                additionalInfo="selection single"
                header="DataHeader"
                sortOrder="desc"
                selection="single"
              />
              <Table.Header
                additionalInfo="selection single + hover"
                header="DataHeader"
                sortOrder="desc"
                selection="single"
                data-status="hover"
              />
              <Table.Header
                additionalInfo="selection single + selected"
                header="DataHeader"
                sortOrder="desc"
                selection="single"
                selected
              />
              <Table.Header
                additionalInfo="selection single + selected + hover"
                header="DataHeader"
                sortOrder="desc"
                selection="single"
                selected
                data-status="hover"
              />
              <Table.Header
                additionalInfo="selection single + selected + hover"
                header="Overflowing DataHeader label"
                sortOrder="desc"
                selection="single"
                selected
                data-status="hover"
              />
            </Table.HeaderRow>
          </Table.Head>
        </Table.Table>
        <Table.Table variant="data" width={602}>
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header
                additionalInfo="default overflow"
                header="Overflowing DataHeader label"
                sortOrder="desc"
                selection="single"
                width={150}
              />
              <Table.Header
                additionalInfo="ellipsis for overflow"
                header="Overflowing DataHeader label"
                sortOrder="desc"
                selection="single"
                ellipsis
                width={150}
              />
              <Table.Header
                additionalInfo="2 lines before overflow"
                header="Overflowing DataHeader label"
                sortOrder="desc"
                selection="single"
                lines={2}
                width={150}
              />
              <Table.Header
                additionalInfo="addition info"
                header="Overflowing header label"
                sortOrder="desc"
                data-status="hover"
                width={150}
                ellipsis
                contextualMenu={
                  <Table.HeaderMenuButton
                    menu={
                      <Table.HeaderMenuContent
                        sortOrder="desc"
                        onSortChange={() => {}}
                        onHideColumn={() => {}}
                        onManageColumns={() => {}}
                      />
                    }
                  />
                }
              />
            </Table.HeaderRow>
          </Table.Head>
        </Table.Table>
      </div>
      <H2>Header (List)</H2>
      <div className={classNames("flex", "flex-col", "gap-s", "w-m")}>
        <Table.Table variant="list">
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header
                additionalInfo="additional info"
                header="Header"
                sortOrder="desc"
              />
              <Table.Header
                additionalInfo="additional info"
                header="Header"
                sortOrder="desc"
                data-status="hover"
              />
              <Table.Header
                additionalInfo="additional info"
                header="Header"
                sortOrder="desc"
                data-status="focus"
              />
            </Table.HeaderRow>
          </Table.Head>
        </Table.Table>
      </div>
      <H2>_TableCell</H2>
      <div className={classNames("flex", "flex-col", "gap-s", "w-xl")}>
        <Table.Table variant="list">
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header header="Default" />
              <Table.Header header="Interactive" />
              <Table.Header header="ContextMenu" />
              <Table.Header header="Number" />
              <Table.Header header="Overflow" />
              <Table.Header header="OverflowWithMenu" ellipsis />
            </Table.HeaderRow>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Table.CellContent>Cell</Table.CellContent>
              </Table.Cell>
              <Table.Cell interactive>
                <Table.CellContent>Cell</Table.CellContent>
              </Table.Cell>
              <Table.Cell>
                <Table.CellContent>Cell</Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
              <Table.Cell>
                <Table.CellContent variant="number">0</Table.CellContent>
              </Table.Cell>
              <Table.Cell>
                <Table.CellContent>
                  CellCellCell CellCellCell CellCellCell
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell>
                <Table.CellContent>
                  CellCellCell CellCellCell CellCellCell
                </Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Table.CellContent>:hover</Table.CellContent>
              </Table.Cell>
              <Table.Cell interactive data-status="hover">
                <Table.CellContent>:hover</Table.CellContent>
              </Table.Cell>
              <Table.Cell interactive data-status="hover">
                <Table.CellContent>:hover</Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
              <Table.Cell>
                <Table.CellContent variant="number">10</Table.CellContent>
              </Table.Cell>
              <Table.Cell data-status="hover">
                <Table.CellContent>
                  CellCellCell CellCellCell CellCellCell
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell data-status="hover">
                <Table.CellContent>
                  CellCellCell CellCellCell CellCellCell
                </Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell data-status="focus">
                <Table.CellContent>:focus</Table.CellContent>
              </Table.Cell>
              <Table.Cell interactive data-status="focus">
                <Table.CellContent>:focus</Table.CellContent>
              </Table.Cell>
              <Table.Cell data-status="focus">
                <Table.CellContent>:focus </Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
              <Table.Cell data-status="focus">
                <Table.CellContent variant="number">100</Table.CellContent>
              </Table.Cell>
              <Table.Cell data-status="focus">
                <Table.CellContent>
                  CellCellCell CellCellCell CellCellCell
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell data-status="focus">
                <Table.CellContent>
                  CellCellCell CellCellCell CellCellCell
                </Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell selected>
                <Table.CellContent>Selected</Table.CellContent>
              </Table.Cell>
              <Table.Cell interactive selected>
                <Table.CellContent>Selected</Table.CellContent>
              </Table.Cell>
              <Table.Cell selected>
                <Table.CellContent>Selected</Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
              <Table.Cell selected>
                <Table.CellContent variant="number">1000</Table.CellContent>
              </Table.Cell>
              <Table.Cell selected>
                <Table.CellContent>
                  CellCellCell CellCellCell CellCellCell
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell selected>
                <Table.CellContent>
                  CellCellCell CellCellCell CellCellCell
                </Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
            </Table.Row>
            <Table.Row height="40px">
              <Table.Cell>
                <Table.CellContent>Fixed height</Table.CellContent>
              </Table.Cell>
              <Table.Cell interactive>
                <Table.CellContent>Fixed height</Table.CellContent>
              </Table.Cell>
              <Table.Cell>
                <Table.CellContent>Fixed height</Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
              <Table.Cell>
                <Table.CellContent variant="number">32</Table.CellContent>
              </Table.Cell>
              <Table.Cell>
                <Table.CellContent>
                  Fixed height Fixed height Fixed height
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell>
                <Table.CellContent>
                  Fixed height Fixed height Fixed height
                </Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell width={150}>
                <Table.CellContent ellipsis>
                  Ellipses overflowing content
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell width={150} interactive>
                <Table.CellContent ellipsis>
                  Ellipses overflowing content
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell width={150}>
                <Table.CellContent ellipsis>
                  Ellipses overflowing content
                </Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
              <Table.Cell width={150}>
                <Table.CellContent ellipsis variant="number">
                  12345678901234567890
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell width={150}>
                <Table.CellContent ellipsis>
                  Ellipses overflowing content Ellipses overflowing content
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell width={150}>
                <Table.CellContent ellipsis>
                  Ellipses overflowing content Ellipses overflowing content
                </Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell width={150} height="32px">
                <Table.CellContent lines={2}>
                  2 lines of overflowing content
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell width={150} height="32px" interactive>
                <Table.CellContent lines={2}>
                  2 lines of overflowing content
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell width={150} height="32px">
                <Table.CellContent lines={2}>
                  2 lines of overflowing content
                </Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
              <Table.Cell width={150} height="32px">
                <Table.CellContent lines={2} variant="number">
                  12345678901234567890 12345678901234567890
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell width={150} height="32px">
                <Table.CellContent lines={2}>
                  2 lines of overflowing content 2 lines of overflowing content
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell width={150} height="32px">
                <Table.CellContent lines={2}>
                  2 lines of overflowing content 2 lines of overflowing content
                </Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Table>
      </div>
      <H2>Vertical scroll</H2>
      <div className={classNames("flex", "flex-col", "gap-s", "w-xl")}>
        <Table.Table variant="list" height={200}>
          <Table.Head>
            <Table.HeaderRow>
              <Table.SupportCell isHeader interactive>
                <Table.Selection rowSelection="multiple" isHeader />
              </Table.SupportCell>
              <Table.Header header="Header" />
              <Table.Header header="Header" />
              <Table.Header header="Header" />
            </Table.HeaderRow>
          </Table.Head>
          <Table.Body>
            {Array.from({ length: 20 }, (_, i) => (
              <Table.Row
                key={i}
                interactive
                selected={i === 3}
                data-status={i === 2 ? "hover" : undefined}
              >
                <Table.SupportCell interactive>
                  <Table.Selection rowSelection="multiple" checked={i === 3} />
                </Table.SupportCell>
                <Table.Cell>
                  <Table.CellContent>Cell {i + 1}</Table.CellContent>
                </Table.Cell>
                <Table.Cell>
                  <Table.CellContent>Cell {i + 1}</Table.CellContent>
                </Table.Cell>
                <Table.Cell>
                  <Table.CellContent>Cell {i + 1}</Table.CellContent>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Table>
      </div>
      <H2>Vertical scroll virtualized</H2>
      <div
        className={classNames("overflow-auto", "gap-s", "w-xl")}
        style={{ blockSize: "200px" }}
      >
        <Table.Table
          variant="data"
          height={200}
          overflowY="virtualized"
          contentHeight={100 * 32}
        >
          <Table.Head>
            <Table.HeaderRow>
              <Table.SupportCell isHeader>
                <Table.RowNumber index="#" />
              </Table.SupportCell>
              <Table.SupportCell isHeader interactive>
                <Table.Selection rowSelection="single" />
              </Table.SupportCell>
              <Table.Header header="Header" />
              <Table.Header header="Header" />
              <Table.Header header="Header" />
            </Table.HeaderRow>
          </Table.Head>
          <Table.Body>
            {Array.from({ length: 20 }, (_, i) => (
              <Table.Row key={i} startPosition={i * 32}>
                <Table.SupportCell>
                  <Table.RowNumber index={i} />
                </Table.SupportCell>
                <Table.SupportCell interactive>
                  <Table.Selection rowSelection="single" checked={i === 3} />
                </Table.SupportCell>
                <Table.Cell interactive>
                  <Table.CellContent>Cell {i + 1}</Table.CellContent>
                </Table.Cell>
                <Table.Cell interactive>
                  <Table.CellContent>Cell {i + 1}</Table.CellContent>
                </Table.Cell>
                <Table.Cell interactive>
                  <Table.CellContent>Cell {i + 1}</Table.CellContent>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Table>
      </div>
      <H2>Horizontal scroll</H2>
      TODO
      <H2>Empty state</H2>
      <div
        className={classNames("overflow-auto", "gap-s", "w-xl")}
        style={{ blockSize: "250px" }}
      >
        <Table.Table
          variant="data"
          height={250}
          overflowY="virtualized"
          contentHeight={100 * 32}
        >
          <Table.Head>
            <Table.HeaderRow>
              <Table.SupportCell isHeader>
                <Table.RowNumber index="#" />
              </Table.SupportCell>
              <Table.SupportCell isHeader interactive>
                <Table.Selection rowSelection="single" />
              </Table.SupportCell>
              <Table.Header header="Header" />
              <Table.Header header="Header" />
              <Table.Header header="Header" />
            </Table.HeaderRow>
          </Table.Head>
          <Table.Message>
            <Message
              title="Empty table reason"
              message="Description of why table is empty, replace illustration with best fit"
              illustration={<EmptyIllustration />}
            />
          </Table.Message>
        </Table.Table>
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
    },
  },
};
