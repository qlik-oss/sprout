/* eslint-disable @typescript-eslint/no-redeclare */
import {
  Checkbox,
  classNames,
  Radio,
  useSproutI18n,
  type CheckboxProps,
  type RadioProps,
} from "@qlik/sprout-css-react";
import { useId, type CSSProperties } from "react";
import styles from "./Table.module.css";

export type SelectionProps =
  | ({ isHeader?: boolean; rowSelection?: "single"; className?: string; style?: CSSProperties } & RadioProps)
  | ({ isHeader?: boolean; rowSelection?: "multiple"; className?: string; style?: CSSProperties } & CheckboxProps);

export function Selection({ isHeader, rowSelection, id, className: classNameProp, style, ...props }: SelectionProps) {
  const t = useSproutI18n();
  const safeId = useId();
  if (!rowSelection) {
    return null;
  }
  if (isHeader) {
    return (
      <label
        htmlFor={id || safeId}
        className={classNames("flex-noreset", "px-m", "w-full", "items-center", "cursor-pointer", classNameProp || "", {
          [styles.cell_selection]: true,
        })}
        style={style}
      >
        {rowSelection === "single" ? undefined : <Checkbox id={id || safeId} {...props} />}
        <span className={classNames("sr-only")}>{t("table.header.select-all.aria-label")}</span>
      </label>
    );
  }
  return (
    <label
      htmlFor={id || safeId}
      className={classNames("flex-noreset", "items-center", "px-m", "w-full", "cursor-pointer", classNameProp || "", {
        [styles.cell_selection]: true,
      })}
      style={style}
    >
      {rowSelection === "single" ? (
        <Radio
          aria-label={t("table.row.selection.aria-label")}
          onClick={(e) => {
            e.stopPropagation();
          }}
          id={id || safeId}
          {...props}
        />
      ) : (
        <Checkbox
          aria-label={t("table.row.selection.aria-label")}
          onClick={(e) => {
            e.stopPropagation();
          }}
          id={id || safeId}
          {...props}
        />
      )}
      <span className={classNames("sr-only")}>{t("table.row.selection.aria-label")}</span>
    </label>
  );
}
Selection.displayName = "Table.Selection";
