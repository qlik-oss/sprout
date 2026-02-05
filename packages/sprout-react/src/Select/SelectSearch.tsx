import { useContext, useEffect, useRef, useState } from "react";

import sprout from "@qlik/sprout-css-modules";

import { TextField } from "../Input";
import { useI18n } from "../hooks/useI18n";
import { SelectContext } from "./SelectContext";

export function SelectSearch() {
  const t = useI18n();
  const { queryFilter, setQueryFilter, open, onKeyDownCapture } =
    useContext(SelectContext);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [filteredOptionsCount, setFilteredOptionsCount] = useState<
    number | undefined
  >(undefined);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      });
    }
  }, [open]);

  useEffect(() => {
    setTimeout(() => {
      if (queryFilter) {
        const listBox = document.querySelector('[role="listbox"]');
        const filteredOptions = listBox?.querySelectorAll(
          'button[data-option]:not([aria-hidden="true"])',
        );
        setFilteredOptionsCount(filteredOptions?.length);
      } else {
        setFilteredOptionsCount(undefined);
      }
    });
  }, [queryFilter]);

  return (
    <>
      <span className={sprout.classNames("mb-s")}>
        <TextField
          ref={searchInputRef}
          type="search"
          role="searchbox"
          placeholder={t("select.dropdown.search.placeholder")}
          value={queryFilter}
          onChange={(e) => setQueryFilter?.(e.target.value)}
          onKeyDownCapture={onKeyDownCapture}
        />
      </span>
      {!!queryFilter && filteredOptionsCount === 0 && (
        <div
          role="status"
          className={sprout.classNames("p-m", "font-label-s", "text-weak")}
          aria-live="polite"
        >
          {t("select.dropdown.no-results.message")}
        </div>
      )}
    </>
  );
}

SelectSearch.displayName = "SelectSearch";
