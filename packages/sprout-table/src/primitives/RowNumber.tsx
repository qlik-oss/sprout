import { classNames } from "@qlik/sprout-react";
import type { CSSProperties } from "react";
import styles from "./Table.module.css";

export type RowNumberProps = {
  index?: number | string;
  className?: string;
  style?: CSSProperties;
};

export function RowNumber({ index, className: classNameProp, style }: RowNumberProps) {
  return (
    <div
      className={classNames(
        "w-full",
        "h-full",
        "bg-moderate",
        "font-label-s",
        "text-weak",
        "flex-noreset",
        "items-center",
        "py-0",
        "px-m",
        "gap-s",
        "border_box",
        "justify-center",
        classNameProp || "",
        {
          [styles.row_number]: true,
        },
      )}
      style={style}
    >
      {index}
    </div>
  );
}

RowNumber.displayName = "Table.RowNumber";
