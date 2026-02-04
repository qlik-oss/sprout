import { useContext, useEffect, useState } from "react";

import AddOutline from "@qlik/sprout-icons/react/AddOutline";

import { classNames } from "../classNames";
import { useI18n } from "../hooks/useI18n";
import { SelectContext } from "./SelectContext";
import { SelectOption, type SelectOptionProps } from "./SelectOption";

export type OptionCreateProps = {
  label?: string;
  isValid?: (value: string) => boolean;
} & Partial<SelectOptionProps>;

export function OptionCreate({ label, isValid, ...props }: OptionCreateProps) {
  const t = useI18n();
  const defaultLabel = t("select.createoption.label");
  const [display, setDisplay] = useState(false);
  const context = useContext(SelectContext);
  const queryFilter = context.queryFilter || "";

  useEffect(() => {
    const shouldOk = isValid ? isValid(queryFilter) : true;

    setDisplay(shouldOk && queryFilter.length >= 2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryFilter]);

  if (!display) {
    return null;
  }

  return (
    <SelectOption
      {...props}
      selectable={false}
      data-create="true"
      value={context.queryFilter}
    >
      <div className={classNames("flex-noreset", "items-center", "gap-m")}>
        <AddOutline />
        <span
          className={classNames("truncate")}
          title={context.queryFilter || ""}
        >
          {`${label || defaultLabel} ${(context.queryFilter || "").trim()}`}
        </span>
        <span />
      </div>
    </SelectOption>
  );
}
