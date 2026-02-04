import { classNames, InlineEdit } from "@qlik/sprout-css-react";
import { createContext, memo, useContext, useEffect, useState, type Context, type JSX, type ReactNode } from "react";

import { editUtility } from "./api";
import type { TableCellParams } from "./props";

type TableInlineEditContextType<ContentType> = {
  onRowChange: (row: ContentType) => void;
};

function createInlineEditContext<ContentType>() {
  return createContext<TableInlineEditContextType<ContentType>>({
    onRowChange: () => {},
  });
}

function getInlineEditString<ContentType>(contextDef: Context<TableInlineEditContextType<ContentType>>) {
  return memo(function TextEditCell({
    row,
    colDef,
    value,
    variant,
    children,
  }: {
    variant?: keyof typeof InlineEdit & ("TextField" | "Select");
    children?: ReactNode;
  } & TableCellParams<ContentType>): JSX.Element {
    const context = useContext(contextDef);
    const InlineEditComp = variant ? InlineEdit[variant] : InlineEdit.TextField;

    const [state, setState] = useState<string>(value as string);

    useEffect(() => {
      if (state !== (value as string)) {
        setState(value as string);
      }
      // this is intentional to only update when value changes
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
      <div className={classNames("px-s", "border_box", "w-full", "relative")}>
        <InlineEditComp
          value={state}
          onChange={(e, reason) => {
            if (reason === "cancel") {
              setState(value as string);
              return;
            }
            setState(e.target.value);
          }}
          onSave={() => {
            context.onRowChange(editUtility.getUpdatedRow(row, colDef, state));
          }}
          aria-label={colDef.headerName}
        >
          {children}
        </InlineEditComp>
      </div>
    );
  });
}
export const TableInlineEdit = {
  createContext: createInlineEditContext,
  getEditString: getInlineEditString,
};
