import { classNames } from "../classNames";

import className from "./Table.module.css";

export type RowNumberProps = {
  index?: number | string;
};

export function RowNumber({ index }: RowNumberProps) {
  return (
    <div
      className={classNames(
        "font-label-s",
        "text-weak",
        "flex-noreset",
        "py-0",
        "px-m",
        "gap-s",
        "border-box",
        "justify-center",
        className.row_number,
      )}
    >
      {index}
    </div>
  );
}

RowNumber.displayName = "Table.RowNumber";
