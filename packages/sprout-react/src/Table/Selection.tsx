import { Checkbox, type CheckboxProps } from "../Checkbox";
import { Radio, type RadioProps } from "../RadioGroup";
import { classNames } from "../classNames";
import { useI18n } from "../hooks/useI18n";

export type TableSelectionProps =
  | ({ isHeader?: boolean; rowSelection?: "single" } & RadioProps)
  | ({ isHeader?: boolean; rowSelection?: "multiple" } & CheckboxProps);

export function TableSelection({
  isHeader,
  rowSelection,
  ...props
}: TableSelectionProps) {
  const t = useI18n();
  if (!rowSelection) {
    return null;
  }
  if (isHeader) {
    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label className={classNames("flex-noreset", "p-m")}>
        {rowSelection === "single" ? (
          <div style={{ visibility: "hidden" }}>
            {/* keep the same width as other rows */}
            <Radio disabled {...props} />
          </div>
        ) : (
          <Checkbox {...props} />
        )}
        <span className={classNames("sr-only")}>
          {t("table.header.select-all.aria-label")}
        </span>
      </label>
    );
  }
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={classNames("flex-noreset", "p-m")}>
      {rowSelection === "single" ? (
        <Radio aria-label={t("table.row.selection.aria-label")} {...props} />
      ) : (
        <Checkbox aria-label={t("table.row.selection.aria-label")} {...props} />
      )}
      <span className={classNames("sr-only")}>
        {t("table.row.selection.aria-label")}
      </span>
    </label>
  );
}
TableSelection.displayName = "Table.Selection";
