/* eslint-disable react-hooks/rules-of-hooks */
import { type JSX, createContext, useCallback, useContext, useEffect, useState } from "react";
import { fn } from "storybook/test";

import { GenerateWithAiIcon } from "@qlik/sprout-icons/react";
import { InlineEdit, type InlineEditProps, Select, Switch, classNames } from "@qlik/sprout-react";
import { Table, type TableProps } from "@qlik/sprout-table";
import type { StoryObj } from "@storybook/react-vite";

import { OPTIONS_WITH_GROUP } from "../Select/SelectTest";
import {
  InlineEditArgTypes,
  InlineEditMultiSelectArgTypes,
  InlineEditPrimitiveArgTypes,
  InlineEditSelectArgTypes,
  InlineEditTextFieldArgTypes,
} from "./InlineEdit.argTypes";

export default {
  title: "Components/InlineEdit",
};

export const TextField: StoryObj<InlineEditProps["TextField"]> = {
  name: "TextField",
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (props) => {
    return (
      <div className={classNames("flex", "border-box", "p-xl", "w-xs")}>
        <InlineEdit.TextField {...props} />
      </div>
    );
  },
  args: {
    defaultValue: "Edit me",
    "aria-label": "Edit color",
    onSave: fn(),
    onCancel: fn(),
    onChange: fn(),
  },
  argTypes: {
    ...InlineEditArgTypes,
    ...InlineEditTextFieldArgTypes,
  },
};

const errorMessages = ["This is an error message"];

const OPTIONS = [
  <Select.Option value="" key="empty">
    <div className={classNames("text-weak")}>empty</div>
  </Select.Option>,
  <Select.Option key="red" value="red">
    Red
  </Select.Option>,
  <Select.Option key="default" value="default">
    Default
  </Select.Option>,
  <Select.Option key="hovered" value="hovered">
    Hovered
  </Select.Option>,
  <Select.Option key="focused" value="focused">
    Focused
  </Select.Option>,
  <Select.Option key="editing" value="editing">
    Editing
  </Select.Option>,
  <Select.Option key="hasError" value="hasError">
    Has Error
  </Select.Option>,
];

export const SelectDemo: StoryObj<InlineEditProps["Select"]> = {
  name: "Select",
  args: {
    defaultValue: "red",
  },
  argTypes: {
    ...InlineEditArgTypes,
    ...InlineEditSelectArgTypes,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (props) => (
    <div className={classNames("flex", "border-box", "p-xl", "w-xs")}>
      <InlineEdit.Select aria-label="Edit color" {...props}>
        {OPTIONS_WITH_GROUP}
      </InlineEdit.Select>
    </div>
  ),
};

export const MultiSelect: StoryObj<InlineEditProps["MultiSelect"]> = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  argTypes: {
    ...InlineEditArgTypes,
    ...InlineEditMultiSelectArgTypes,
  },
  args: {
    defaultValue: ["blue", "red"],
  },
  render: (props) => (
    <div className={classNames("flex", "border-box", "p-xl", "w-xs")}>
      <InlineEdit.MultiSelect aria-label="Edit colors" {...props}>
        {OPTIONS_WITH_GROUP}
      </InlineEdit.MultiSelect>
    </div>
  ),
};

export const VisualTestTextField: StoryObj = {
  parameters: {
    pseudo: {
      hover: ['[data-testid="hovered.view"]'],
      active: '[data-testid="actived.view"]',
      focusVisible: '[data-testid="focused"] > [role="button"]',
    },
  },
  render: () => (
    <div className={classNames("flex", "border-box", "flex-col", "gap-3xl")}>
      <h2 className={classNames("flex", "border-box", "font-heading-m", "text-default")}>InlineEdit.TextField</h2>
      <div
        className={classNames(
          "flex",
          "border-box",
          "flex-row",
          "gap-xl",
          "p-m",
          "items-center",
          "justify-start",
          "w-fit",
        )}
      >
        <div className={classNames("flex", "border-box", "w-fit", "p-m")}>
          <InlineEdit.TextField aria-label="Edit color" defaultValue="" placeholder="placeholder" />
        </div>
        <div className={classNames("flex", "border-box", "w-fit", "p-m")}>
          <InlineEdit.TextField aria-label="Edit color" defaultValue="default value" showEditIcon />
        </div>
        <div className={classNames("flex", "border-box", "w-fit", "p-m")}>
          <InlineEdit.TextField
            aria-label="Edit color"
            defaultValue="Hover + showEditIcon"
            showEditIcon
            data-testid="hovered"
          />
        </div>
        <div className={classNames("flex", "border-box", "w-fit", "p-m")}>
          <InlineEdit.TextField aria-label="Edit color" defaultValue="Hover" data-testid="hovered" />
        </div>
        <div className={classNames("flex", "border-box", "w-fit", "p-m")}>
          <InlineEdit.TextField aria-label="Edit color" defaultValue="Focus" data-testid="focused" />
        </div>
        <div className={classNames("flex", "border-box", "p-m")} style={{ inlineSize: "100px" }}>
          <InlineEdit.TextField aria-label="Edit color" defaultValue="Default with overflow" />
        </div>
      </div>
      <h2 className={classNames("flex", "border-box", "font-heading-m", "text-default")}>
        InlineEdit.TextField editMode
      </h2>
      <div
        className={classNames("flex", "border-box", "flex-row", "gap-xl", "p-m", "items-center", "justify-start")}
        style={{ inlineSize: "500px" }}
      >
        <InlineEdit.TextField aria-label="Edit color" defaultValue="Edit" showEditIcon isEditingDefault />
        <InlineEdit.TextField
          aria-label="Edit color"
          defaultValue="Edit + showFormButtons"
          showFormButtons
          isEditingDefault
        />
      </div>

      <h2 className={classNames("flex", "border-box", "font-heading-m", "text-default")}>
        InlineEdit.TextField editMode vs view mode
      </h2>
      <div
        className={classNames("flex", "border-box", "flex-row", "gap-xl", "p-m", "items-center", "justify-start")}
        style={{ inlineSize: "500px" }}
      >
        <InlineEdit.TextField
          aria-label="Edit color"
          defaultValue="Should not     trim   spaces.   WYSIWYG"
          isEditing
        />
        <InlineEdit.TextField aria-label="Edit color" defaultValue="Should not     trim   spaces.   WYSIWYG" />
      </div>

      <h2 className={classNames("flex", "border-box", "font-heading-m", "text-default")}>
        InlineEdit.TextField editMode + error
      </h2>
      <div
        className={classNames("flex", "border-box", "flex-row", "gap-xl", "p-m", "items-start", "justify-start")}
        style={{
          inlineSize: "1000px",
          blockSize: "150px",
        }}
      >
        <div className={classNames("flex", "border-box", "grow", "shrink-0")} style={{ flexBasis: 1 }}>
          <InlineEdit.TextField aria-label="Edit color" defaultValue="Edit + Error" hasError isEditingDefault />
        </div>
        <div className={classNames("flex", "border-box", "grow", "shrink-0")} style={{ flexBasis: 1 }}>
          <InlineEdit.TextField
            aria-label="Edit color"
            defaultValue="Error + showFormButtons"
            hasError
            showFormButtons
            isEditingDefault
          />
        </div>
        <div className={classNames("flex", "border-box", "grow", "shrink-0")} style={{ flexBasis: 1 }}>
          <InlineEdit.TextField
            aria-label="Edit color"
            defaultValue="Error + errorMessages"
            hasError
            isEditingDefault
            errorMessages={errorMessages}
          />
        </div>
        <div className={classNames("flex", "border-box", "grow", "shrink-0")} style={{ flexBasis: 1 }}>
          <InlineEdit.TextField
            aria-label="Edit color"
            defaultValue="Error + errorMessages + showFormButtons"
            hasError
            showFormButtons
            isEditingDefault
            errorMessages={errorMessages}
          />
        </div>
      </div>
      <h2 className={classNames("flex", "border-box", "font-heading-m", "text-default")}>InlineEdit.TextField font</h2>
      <div className={classNames("flex", "border-box", "flex-row", "gap-xl", "p-m", "items-center", "justify-start")}>
        <div className={classNames("flex", "border-box", "w-fit", "p-m")}>
          <InlineEdit.TextField
            aria-label="Edit color"
            defaultValue="custom font heading-xl"
            font="heading-xl"
            showEditIcon
          />
        </div>
        <div className={classNames("flex", "border-box", "w-fit", "p-m")}>
          <InlineEdit.TextField
            aria-label="Edit color"
            defaultValue="custom font script-s"
            font="script-s"
            view={({ children }) => (
              <span className={classNames("text-end", "font-script-s", "text-inverse", "bg-inverse")}>{children}</span>
            )}
            showEditIcon
          />
        </div>
      </div>
    </div>
  ),
};

export const VisualTestSelect: StoryObj = {
  parameters: {
    pseudo: {
      hover: ['[data-testid="hovered.view"][role="button"]', '[data-testid="focused"] [role="button"]'],
      active: '[data-testid="actived"]',
      focusVisible: ['[data-testid="focused"] > role="button"', '[data-testid="focused.edit"] [role="combobox"]'],
    },
  },
  render: () => (
    <div className={classNames("flex", "border-box", "flex-col", "gap-3xl")}>
      <h2 className={classNames("flex", "border-box", "font-heading-m", "text-default")}>InlineEdit.Select</h2>
      <div className={classNames("flex", "border-box", "flex-col", "gap-xxl")}>
        <div className={classNames("w-xxs", "flex", "flex-col", "gap-xl")}>
          <InlineEdit.Select aria-label="Edit color" defaultValue="default" showEditIcon>
            {OPTIONS}
          </InlineEdit.Select>
          <InlineEdit.Select aria-label="Edit color" defaultValue="hovered" showEditIcon data-testid="hovered">
            {OPTIONS}
          </InlineEdit.Select>
          <InlineEdit.Select aria-label="Edit color" defaultValue="focused" showEditIcon data-testid="focused">
            {OPTIONS}
          </InlineEdit.Select>
        </div>
        <div className={classNames("w-l", "flex", "flex-row", "gap-xxl", "items-start")} style={{ blockSize: "250px" }}>
          <InlineEdit.Select aria-label="Edit color" defaultValue="editing" showEditIcon isEditingDefault>
            {OPTIONS}
          </InlineEdit.Select>
          <InlineEdit.Select aria-label="Edit color" defaultValue="hasError" hasError isEditingDefault>
            {OPTIONS}
          </InlineEdit.Select>
          <InlineEdit.Select
            aria-label="Edit color"
            defaultValue="focused"
            showEditIcon
            data-testid="focused"
            showFormButtons
            isEditingDefault
          >
            {OPTIONS}
          </InlineEdit.Select>
        </div>
      </div>
    </div>
  ),
};

export const VisualTestMultiSelect: StoryObj = {
  parameters: {
    pseudo: {
      hover: ['[data-testid="hovered"]', '[data-testid="focused"] > button'],
      active: '[data-testid="actived"]',
      focusVisible: '[data-testid="focused"] > button',
    },
  },
  render: () => (
    <div className={classNames("flex", "border-box", "flex-col", "gap-3xl")}>
      <h2 className={classNames("flex", "border-box", "font-heading-m", "text-default")}>InlineEdit.MultiSelect</h2>
      <div className={classNames("flex", "border-box", "flex-col", "gap-xxl", "items-start")}>
        <div className={classNames("w-xxs", "flex", "gap-xl")}>
          <InlineEdit.MultiSelect aria-label="Edit colors" defaultValue={["default"]} showEditIcon>
            {OPTIONS}
          </InlineEdit.MultiSelect>
          <InlineEdit.MultiSelect
            aria-label="Edit colors"
            defaultValue={["hovered"]}
            showEditIcon
            data-testid="hovered"
          >
            {OPTIONS}
          </InlineEdit.MultiSelect>
          <InlineEdit.MultiSelect
            aria-label="Edit colors"
            defaultValue={["focused"]}
            showEditIcon
            data-testid="focused"
          >
            {OPTIONS}
          </InlineEdit.MultiSelect>
        </div>
        <div
          className={classNames("w-xl", "flex", "flex-row", "gap-xxl", "items-start")}
          style={{ blockSize: "250px" }}
        >
          <InlineEdit.MultiSelect aria-label="Edit colors" defaultValue={["editing"]} showEditIcon isEditingDefault>
            {OPTIONS}
          </InlineEdit.MultiSelect>
          <InlineEdit.MultiSelect aria-label="Edit colors" defaultValue={["hasError"]} hasError isEditingDefault>
            {OPTIONS}
          </InlineEdit.MultiSelect>
          <InlineEdit.MultiSelect
            aria-label="Edit colors"
            defaultValue={["editing"]}
            showEditIcon
            showFormButtons
            isEditingDefault
          >
            {OPTIONS}
          </InlineEdit.MultiSelect>
        </div>
      </div>
    </div>
  ),
};

export const CustomInlineEdit: StoryObj<Omit<InlineEditProps["Primitive"], "view" | "edit">> = {
  render: (props) => {
    const [value, setValue] = useState(true);
    const [initialValue, setInitialValue] = useState(true);
    return (
      <div className={classNames("flex", "border-box", "p-xl", "w-xs", "bg-weak")}>
        <InlineEdit.Primitive
          onCancel={() => {
            setValue(initialValue);
          }}
          onSave={() => {
            setInitialValue(value);
          }}
          view={
            <div
              className={classNames(
                "flex",
                "flex-row",
                "gap-m",
                "items-center",
                "w-full",
                "text-default",
                "bg-default",
              )}
            >
              <GenerateWithAiIcon className={classNames("fill-current")} />
              <div className={classNames("flex", "flex-col", "gap-m")}>
                <span className={classNames("font-label-m-emphasized", "text-default")}>{value ? "On" : "Off"}</span>
                <span className={classNames("font-label-s", "text-weak")}>AI Features</span>
              </div>
            </div>
          }
          edit={
            <div className={classNames("flex", "flex-row", "bg-default", "gap-m", "px-m", "py-xl", "items-center")}>
              <Switch
                checked={value}
                onChange={() => {
                  setValue((prev) => !prev);
                }}
                label="AI Features"
              />
            </div>
          }
          {...props}
        />
      </div>
    );
  },
  args: {
    showFormButtons: true,
    onSave: fn(),
  },
  argTypes: InlineEditPrimitiveArgTypes,
};

type Person = {
  uuid: string;
  firstName: string;
  lastName: string;
  bio: string;
};

const data: Array<Person> = [
  {
    uuid: "1",
    firstName: "John",
    lastName: "Doe",
    bio: "Lorem ipsum dolor sit amet.",
  },
  {
    uuid: "2",
    firstName: "Jane",
    lastName: "Smith",
    bio: "Consectetur adipiscing elit.",
  },
  {
    uuid: "3",
    firstName: "Alice",
    lastName: "Johnson",
    bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    uuid: "4",
    firstName: "Bob",
    lastName: "Brown",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    uuid: "5",
    firstName: "Charlie",
    lastName: "Davis",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur.",
  },
  {
    uuid: "6",
    firstName: "Eve",
    lastName: "Wilson",
    bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    uuid: "7",
    firstName: "Frank",
    lastName: "Garcia",
    bio: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin.",
  },
  {
    uuid: "8",
    firstName: "Grace",
    lastName: "Martinez",
    bio: "Integer in mauris eu nibh. Nullam mollis. Etiam vel erat sed augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi lacinia molestie dui.",
  },
  {
    uuid: "9",
    firstName: "Hank",
    lastName: "Lopez",
    bio: "Praesent id justo in neque elementum ultrices. Fusce fermentum. Donec ut mauris eget massa tempor convallis. Nulla facilisi.",
  },
  {
    uuid: "10",
    firstName: "Ivy",
    lastName: "Hernandez",
    bio: "Sed lectus. Integer euismod lacus luctus magna, non interdum quam sodales ut. Sed lectus. Integer euismod lacus luctus magna, non interdum quam sodales ut.",
  },
];

const TableInlineEditContext = createContext<{
  onRowChange: (row: Person) => void;
}>({ onRowChange: () => {} });

function EditCell({ row, attr, label }: { row: Person; attr: keyof Person; label: string }): JSX.Element {
  const context = useContext(TableInlineEditContext);
  const [state, setState] = useState<string>(row[attr] as string);
  useEffect(() => {
    setState(row[attr] as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [row[attr]]);
  return (
    <div className={classNames("px-s", "border-box", "w-full", "relative")}>
      <InlineEdit.TextField
        value={state}
        onChange={(e, reason) => {
          if (reason === "cancel") {
            setState(row[attr] as string);
            return;
          }
          setState(e.target.value);
        }}
        onSave={() => {
          context.onRowChange({ ...row, [attr]: state });
        }}
        aria-label={label}
        onSubmit={() => {
          // eslint-disable-next-line no-console
          console.log("submit", state);
          context.onRowChange({ ...row, [attr]: state });
        }}
      />
    </div>
  );
}

export const InlineEditTable: StoryObj<TableProps<Person>> = {
  name: "InlineEdit in Table",
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (props: TableProps<Person>) => {
    const [rows, setRows] = useState<Array<Person>>(data);
    const onRowChange = useCallback(
      () => (row: Person) => {
        setRows((prevRows) => prevRows.map((r) => (r.uuid === row.uuid ? { ...r, ...row } : r)));
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [rows],
    );
    return (
      <TableInlineEditContext.Provider
        value={{
          onRowChange,
        }}
      >
        <div className={classNames("w-full", "p-xl", "border-box")} style={{ blockSize: 300 }}>
          <Table {...props} rows={rows} getRowId={(row) => row.uuid} />
        </div>
      </TableInlineEditContext.Provider>
    );
  },
  args: {
    variant: "data",
    columns: [
      {
        field: "firstName",
        headerName: "First Name",
        renderCell: ({ row, colDef }) => {
          return <EditCell row={row} attr="firstName" label={colDef.headerName} />;
        },
      },
      {
        field: "lastName",
        headerName: "Last Name",
        renderCell: ({ row, colDef }) => {
          return <EditCell row={row} attr="lastName" label={colDef.headerName} />;
        },
      },
      {
        field: "bio",
        headerName: "Bio",
        flex: 1,
        renderCell: ({ row, colDef }) => {
          return <EditCell row={row} attr="bio" label={colDef.headerName} />;
        },
      },
    ],
  },
};
