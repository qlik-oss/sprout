import {
  Children,
  type JSX,
  type ChangeEvent as ReactChangeEvent,
  type ReactNode,
  type Ref,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useMemo } from "react";

import { useControl } from "@qlik/sprout-css-hooks";
import sprout from "@qlik/sprout-css-modules";

import { type CommonFieldProps, Field, useFieldProps } from "../Field";
import {
  FloatingPrimitive,
  type FloatingPublicProps,
} from "../FloatingPrimitive";
import { Tag, TagGroups } from "../Tag";
import { MultiSelectComboboxGesture } from "../Utils/gesture/MultiSelectCombobox";
import { mergeRefs } from "../Utils/mergeRef";
import { useI18n } from "../hooks/useI18n";
import {
  ComboboxEditable,
  type ComboboxPropsEditable,
} from "./SelectComboboxEditable";
import { SelectContext } from "./SelectContext";
import type { SelectOptionProps } from "./SelectOption";
import {
  type ChangeEvent,
  createMultiSelectOnChangeEvent,
  getAllItems,
  getSelectedItems,
} from "./SelectUtils";
import { getSelectedValueString } from "./getSelectedOption";

import menuStyle from "../Menu/Menu.module.css";

const noOpOnChange = () => {};

/**
 * Extract all option values from Select.Option children
 */
const extractOptionValues = (children: ReactNode): Array<string> => {
  const values: Array<string> = [];

  const extractFromChild = (child: ReactNode): void => {
    if (!isValidElement(child)) {
      return;
    }

    // Check if it's a Select.Option with a value prop
    if (
      child.props &&
      typeof child.props === "object" &&
      "value" in child.props &&
      typeof child.props.value === "string"
    ) {
      values.push(child.props.value);
    }

    // Recursively check children
    if (
      child.props &&
      typeof child.props === "object" &&
      "children" in child.props &&
      child.props.children &&
      (typeof child.props.children === "string" ||
        typeof child.props.children === "number" ||
        typeof child.props.children === "boolean" ||
        Array.isArray(child.props.children) ||
        isValidElement(child.props.children))
    ) {
      Children.forEach(child.props.children as ReactNode, extractFromChild);
    }
  };

  Children.forEach(children, extractFromChild);
  return values;
};

export type MultiSelectProps = {
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  id?: string;
  value?: Array<string>;
  defaultValue?: Array<string>;
  onChange?: (e: ChangeEvent) => void;
  filterValue?: string;
  onFilterChange?: (e: ReactChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
  "data-testid"?: string;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  hasError?: boolean;
  renderValue?: (
    value: Array<string>,
    selectedOptions: Record<string, SelectOptionProps>,
    input: ReactNode,
  ) => JSX.Element;
} & Pick<ComboboxPropsEditable, "labelClear" | "readOnly"> &
  CommonFieldProps & {
    /** @deprecated please use errorMessages instead */
    isError?: boolean;
  } & Pick<FloatingPublicProps, "disableScrollLock" | "hideBackdrop">;

export const MultiSelect = forwardRef<HTMLSelectElement, MultiSelectProps>(
  MultiSelectBase,
);

function MultiSelectBase(
  {
    "data-testid": dataTestId,
    children,
    defaultOpen,
    defaultValue,
    disabled,
    disableScrollLock = false,
    filterValue,
    hideBackdrop = false,
    isError,
    name,
    onChange,
    onFilterChange,
    onOpenChange,
    open,
    placeholder,
    readOnly,
    renderValue,
    value,
    ...props
  }: MultiSelectProps,
  ref?: Ref<HTMLSelectElement>,
) {
  const t = useI18n();
  const { inputProps, fieldProps, useField } = useFieldProps(props);
  const [ariaActiveDescendant, setAriaActiveDescendant] = useState<
    string | undefined
  >("");
  const [filteredOptionsCount, setFilteredOptionsCount] = useState<
    number | undefined
  >(undefined);
  const listboxId = `${inputProps.id}-listbox`;

  const filterControlled = useControl<string>(
    {
      value: filterValue,
      onChange: (event: ReactChangeEvent<HTMLInputElement>) => {
        onFilterChange?.(event);
        if (!isOpen && event.target.value) {
          setIsOpen(true);
        }
      },
    },
    {
      selector: (e) => e.target.value,
    },
  );

  const onChangeDelayed = (e: ChangeEvent) => {
    setTimeout(() => {
      // react-hook-form: we have to wait the ref to be updated before calling the onChange
      if (onChange) {
        onChange(e);
      }
    });
  };

  const controlled = useControl<Array<string>>(
    {
      value,
      onChange: onChangeDelayed,
      defaultValue,
    },
    {
      onChangeKey: "onChange",
      valueKey: "value",
      defaultValueKey: "defaultValue",
      selector: (e) =>
        e.target.selectedOptions.map((o: { value: string }) => o.value),
    },
  );

  const controlledOpen = useControl<boolean>(
    {
      open,
      onOpenChange,
      initialOpen: defaultOpen ?? false,
    },
    {
      defaultValueKey: "initialOpen",
      valueKey: "open",
      onChangeKey: "onOpenChange",
      selector: (v) => v,
    },
  );
  const isOpen = !!controlledOpen.value;
  const setIsOpen = controlledOpen.onChange;
  const selectRef = useRef<HTMLSelectElement>(null);

  const refsFloating = useRef<HTMLDivElement>(null);
  const refsReference = useRef<HTMLInputElement>(null);

  // Sync value from the native select element after react-hook-form sets it
  useEffect(() => {
    if (selectRef.current && !value) {
      // Only sync if not externally controlled
      const nativeValue = Array.from(selectRef.current.selectedOptions).map(
        (opt) => opt.value,
      );
      if (
        nativeValue.length > 0 &&
        JSON.stringify(nativeValue) !== JSON.stringify(controlled.value)
      ) {
        // Update internal state to match what react-hook-form set
        controlled.onChange(
          createMultiSelectOnChangeEvent({
            name,
            values: nativeValue,
          }),
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onComboboxChange = useCallback((btn?: HTMLElement) => {
    if (btn) {
      const id = btn.getAttribute("id");
      if (id) {
        setAriaActiveDescendant(id);
      }
    }
  }, []);

  const gestureRef = useRef<MultiSelectComboboxGesture>(
    new MultiSelectComboboxGesture({
      name,
      getAllItems,
      getSelectedItems,
      isOpen,
      onOpenChange: (newValue: boolean) => {
        setIsOpen(newValue);
      },
      onChange: onComboboxChange,
      onSelect: (e: ChangeEvent) => {
        controlled.onChange(e);
        onChangeDelayed(e);

        filterControlled.onChange({
          target: {
            value: "",
          },
        });
      },
    }),
  );

  if (refsFloating.current) {
    gestureRef.current.setListbox(refsFloating.current);
  }

  if (refsReference.current) {
    gestureRef.current.setElement(refsReference.current);
  }

  useEffect(() => {
    gestureRef.current.setIsIOpen(isOpen);

    if (!isOpen) {
      filterControlled.onChange({
        target: {
          value: "",
        },
      });
    }
  }, [isOpen, filterControlled]);

  useEffect(() => {
    if (isOpen && refsFloating.current) {
      if (controlled.value === undefined) {
        gestureRef.current.focusOnFirst();
      } else {
        gestureRef.current.focusOnFirstSelected();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    gestureRef.current.setValue(controlled.value);
  }, [controlled.value]);

  useEffect(() => {
    setTimeout(() => {
      if (filterControlled.value) {
        const listBox = document.querySelector('[role="listbox"]');
        const filteredOptions = listBox?.querySelectorAll(
          'button[data-option]:not([aria-hidden="true"])',
        );
        setFilteredOptionsCount(filteredOptions?.length);
      } else {
        setFilteredOptionsCount(undefined);
      }
    });
  }, [filterControlled.value]);

  useEffect(() => {
    const clearT = setTimeout(() => {
      gestureRef.current.resetFocus();
      // Focus on first selected item if any otherwise first option
      gestureRef.current.focusOnFirstSelected();
    }, 0);
    return () => {
      clearTimeout(clearT);
    };
  }, [filterControlled.value]);

  const safeRenderValue = useCallback(
    (
      values: Array<string>,
      selectedProps: Record<string, SelectOptionProps>,
      input: ReactNode,
    ) => {
      if (renderValue) {
        return renderValue(values, selectedProps, input);
      }
      return (
        <TagGroups data-class="tag-groups">
          {values.map((newValue: string) => {
            const label: string = getSelectedValueString(
              selectedProps,
              newValue,
            );
            return (
              <Tag
                size="s"
                key={newValue}
                text={label}
                data-testid={
                  dataTestId
                    ? `${dataTestId}.combobox.tag.${newValue}`
                    : `combobox.tag.${newValue}`
                }
                onRemove={
                  !disabled && !readOnly
                    ? () => {
                        controlled.onChange(
                          createMultiSelectOnChangeEvent({
                            name,
                            value: newValue,
                            values,
                            action: "remove",
                          }),
                        );
                      }
                    : undefined
                }
              />
            );
          })}
          {input}
        </TagGroups>
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [disabled, readOnly, renderValue],
  );
  const contextValue = useMemo(
    () => ({
      queryFilter: filterControlled.value || "",
      value: controlled.value,
    }),
    [filterControlled.value, controlled.value],
  );
  const renderOptions = (
    <SelectContext.Provider value={contextValue}>
      {children}
      {!!filterControlled.value && filteredOptionsCount === 0 && (
        <div
          role="status"
          className={sprout.classNames("p-m", "font-label-s", "text-weak")}
          aria-live="polite"
        >
          {t("select.dropdown.no-results.message")}
        </div>
      )}
    </SelectContext.Provider>
  );

  // Extract all available option values from children for the hidden select
  const allOptionValues = useMemo(
    () => extractOptionValues(children),
    [children],
  );

  const mergeSelectRef = mergeRefs([selectRef, ref]);

  const content = (
    <>
      <span className={sprout.sr_only}>
        <select
          multiple
          // Don't set value when using react-hook-form register, let it manage through DOM
          defaultValue={defaultValue}
          value={!defaultValue ? controlled.value : undefined}
          // provide onChange to avoid react warning
          onChange={noOpOnChange}
          name={name}
          ref={mergeSelectRef}
          tabIndex={-1}
          aria-hidden="true"
          className={sprout.hidden}
        >
          {allOptionValues.map((v) => (
            <option key={v} value={v} tabIndex={-1}>
              {v}
            </option>
          ))}
        </select>
      </span>
      <ComboboxEditable
        {...inputProps}
        renderValues={safeRenderValue}
        values={controlled.value}
        hasError={isError || inputProps.hasError}
        placeholder={controlled.value?.length ? undefined : placeholder}
        role="combobox"
        aria-autocomplete="list"
        aria-activedescendant={ariaActiveDescendant}
        aria-controls={listboxId}
        value={filterControlled.value || ""}
        onChange={filterControlled.onChange}
        autoComplete="off"
        disabled={disabled}
        readOnly={readOnly}
        ref={refsReference}
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true);
          }
        }}
        onFocus={() => {
          // On focus only open the list, don't close it otherwise dropdown click will not work
          if (!isOpen) {
            setIsOpen(true);
          }
        }}
        onKeyDownCapture={gestureRef.current.onKeyDownHandler}
        onClear={
          controlled.value?.length
            ? () => {
                controlled.onChange(
                  createMultiSelectOnChangeEvent({ name, values: [] }),
                );
              }
            : undefined
        }
        data-testid={dataTestId ? `${dataTestId}.combobox` : "combobox"}
        aria-expanded={isOpen ? "true" : "false"}
      >
        {renderOptions}
      </ComboboxEditable>

      <FloatingPrimitive
        disableScrollLock={disableScrollLock}
        hideBackdrop={hideBackdrop}
        ref={refsFloating}
        className={menuStyle.menu}
        role="listbox"
        initialOpen={defaultOpen}
        open={isOpen}
        onOpenChange={setIsOpen}
        anchorEl={refsReference.current || undefined}
        forceMount
        minWidth="reference"
        minHeight={100}
        placementUpdate="dropdown"
        maxWidth="s"
        tabIndex={-1}
        data-testid={dataTestId ? `${dataTestId}.listbox` : "listbox"}
        onMouseDown={(event) => {
          if (event.button === 0) {
            event.preventDefault();
            event.stopPropagation();
            const target = event.target as HTMLElement;
            const btn = target.closest(
              "button[data-option]",
            ) as HTMLElement | null;
            if (btn) {
              const newValue = btn.dataset.option;
              const selected = btn.getAttribute("aria-selected") === "true";
              controlled.onChange(
                createMultiSelectOnChangeEvent({
                  name,
                  value: newValue,
                  values: controlled.value,
                  action: selected ? "remove" : "add",
                }),
              );
              filterControlled.onChange({
                target: {
                  value: "",
                },
              });
            }
          }
        }}
        aria-labelledby={inputProps.id}
        id={listboxId}
        content={renderOptions}
      />
    </>
  );
  if (useField) {
    return (
      <Field {...fieldProps} isError={isError || inputProps.hasError}>
        {content}
      </Field>
    );
  }
  return content;
}

MultiSelectBase.displayName = "MultiSelect";
