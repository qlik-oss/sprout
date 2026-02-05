import {
  Children,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
  type Ref,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useControl, useId } from "@qlik/sprout-hooks";

import {
  FloatingPrimitive,
  type FloatingPrimitiveProps,
  type FloatingPublicProps,
} from "../FloatingPrimitive";
import { SelectComboboxGesture } from "../Utils/gesture/SelectCombobox";
import { mergeRefs } from "../Utils/mergeRef";
import { classNames } from "../classNames";
import { getTokenInt } from "../getTokenValue";
import type { HTMLButtonProps } from "../htmlTypes";
import { Combobox, type ComboboxProps } from "./SelectCombobox";
import { SelectContext } from "./SelectContext";
import { SelectSearch } from "./SelectSearch";
import { type ChangeEvent, getAllItems, getSelectedItems } from "./SelectUtils";
import { useTypeahead } from "./useTypeahead";

import menuStyle from "../Menu/Menu.module.css";

const spacingXxl = getTokenInt("--sprout-common-spacing-xxl") || 24;

export type SelectFloatingProps = Omit<
  HTMLButtonProps,
  "type" | "children" | "size" | "onChange"
> & {
  defaultOpen?: boolean;
  open: boolean;
  onOpenChange: (value: boolean) => void;
  hasError?: boolean;
  size?: "default" | "small";
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent) => void;
  renderValue?: ComboboxProps["renderValue"];
  children?: ReactNode;
  readOnly?: ComboboxProps["readOnly"];
  placementUpdate?: FloatingPrimitiveProps["placementUpdate"];
  maxWidth?: FloatingPrimitiveProps["maxWidth"];
} & Pick<FloatingPublicProps, "disableScrollLock" | "hideBackdrop">;

export const SelectFloating = forwardRef<HTMLInputElement, SelectFloatingProps>(
  SelectFloatingBase,
);

function getSelectFloatingContent(children: ReactNode): ReactNode {
  const [firstChild, ...rest] = Children.toArray(children);

  if (isValidElement(firstChild) && firstChild.type === SelectSearch) {
    return (
      <>
        {firstChild}
        <div
          className={classNames("overflow-auto")}
          role="listbox"
          tabIndex={-1}
        >
          {rest}
        </div>
      </>
    );
  }

  return children;
}

function SelectFloatingBase(
  {
    children,
    defaultOpen,
    defaultValue,
    disabled,
    disableScrollLock,
    hasError,
    hideBackdrop,
    id,
    maxWidth,
    name,
    onChange,
    onOpenChange,
    open,
    placeholder,
    placementUpdate,
    readOnly,
    size,
    value,
    ...props
  }: SelectFloatingProps,
  ref?: Ref<HTMLInputElement>,
) {
  const safeId = useId(id);

  const [floatingMounted, setFloatingMounted] = useState<boolean>(false);
  const [ariaActiveDescendant, setAriaActiveDescendant] = useState<
    string | undefined
  >("");
  const [queryFilter, setQueryFilter] = useState<string>("");
  const listboxId = `${safeId}-listbox`;
  const refsFloating = useRef<HTMLDivElement>(null);
  const refsReference = useRef<HTMLButtonElement>(null);

  const isSearchable = useMemo(() => {
    const [firstChild] = Children.toArray(children);
    return isValidElement(firstChild) && firstChild.type === SelectSearch;
  }, [children]);

  const onChangeDelayed = (e: ChangeEvent) => {
    setTimeout(() => {
      // react-hook-form: we have to wait the ref to be updated before calling the onChange
      if (onChange) {
        onChange(e);
      }
    });
  };
  const controlled = useControl<string>(
    {
      value,
      onChange: onChangeDelayed,
      defaultValue,
    },
    {
      selector: (e) => e?.target?.value,
    },
  );

  const onComboboxChange = useCallback((btn?: HTMLElement) => {
    if (btn) {
      const btnId = btn.getAttribute("id");
      if (btnId) {
        setAriaActiveDescendant(btnId);
      }
    }
  }, []);

  // Keep SelectComboboxGesture instance in a ref so it persists across re-renders.
  // This avoids recreating it on every render and ensures gesture state/methods remain stable.
  const gestureRef = useRef<SelectComboboxGesture>(
    new SelectComboboxGesture({
      name,
      getAllItems,
      getSelectedItems,
      isOpen: open,
      onOpenChange,
      onChange: onComboboxChange,
      onSelect: (e: ChangeEvent) => {
        controlled.onChange(e);
        onChangeDelayed(e);
      },
    }),
  );

  useEffect(() => {
    gestureRef.current.setIsIOpen(open);

    if (!open) {
      setQueryFilter("");
    }

    if (refsReference.current && open) {
      refsReference.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (open && refsFloating.current) {
      if (controlled.value === undefined) {
        gestureRef.current.focusOnFirst();
      } else {
        gestureRef.current.focusOnFirstSelected();
      }
    }
  }, [open, refsFloating, controlled.value]);

  useEffect(() => {
    gestureRef.current.setValue(controlled.value);
  }, [controlled.value]);

  const { onKeydown, resetTypeahead } = useTypeahead<
    string,
    SelectComboboxGesture
  >(gestureRef);

  const onKeyDownCapture = useCallback(
    (event: ReactKeyboardEvent<HTMLButtonElement | HTMLInputElement>) => {
      const isTextKey =
        event.key.length === 1 &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey &&
        event.key !== " ";

      if (isTextKey) {
        onKeydown({
          typedCharacter: event.key,
          open,
          onChange: controlled.onChange,
        });
      }

      gestureRef.current.onKeyDownHandler(event);
      resetTypeahead();
    },
    [open, onKeydown, resetTypeahead, controlled.onChange],
  );

  const contextValue = useMemo(
    () => ({
      queryFilter: queryFilter || "",
      setQueryFilter,
      value: controlled.value,
      open,
      onKeyDownCapture,
    }),
    [controlled.value, queryFilter, setQueryFilter, open, onKeyDownCapture],
  );

  const renderedOptions = (
    <SelectContext.Provider value={contextValue}>
      {getSelectFloatingContent(children)}
    </SelectContext.Provider>
  );

  if (refsFloating.current) {
    gestureRef.current.setListbox(refsFloating.current);
  }

  if (refsReference.current) {
    gestureRef.current.setElement(refsReference.current);
  }

  const myRef = useRef<HTMLInputElement>(null);
  const mergeInputRef = mergeRefs([myRef, ref]);

  // support uncontrolled component where value is set from ref (react-hook-form)
  useEffect(() => {
    const currentValue = myRef.current?.value;
    if (defaultValue === undefined && value === undefined) {
      if (currentValue) {
        controlled.onChange({
          type: "change",
          target: myRef.current,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue, value, myRef]);

  return (
    <>
      <input
        type="hidden"
        defaultValue={defaultValue}
        value={!defaultValue ? controlled.value : undefined}
        name={name}
        ref={mergeInputRef}
      />
      <FloatingPrimitive
        disableScrollLock={disableScrollLock}
        hideBackdrop={hideBackdrop}
        initialOpen={defaultOpen}
        open={floatingMounted ? open : false}
        onOpenChange={onOpenChange}
        anchorEl={refsReference.current || undefined}
        forceMount
        onMount={() => {
          // force a re-render to update the label inside the combobox
          // we need option to render it
          setFloatingMounted(true);
        }}
        minWidth="reference"
        maxWidth={maxWidth || "s"}
        minHeight={100}
        viewportPadding={spacingXxl}
        placementUpdate={
          placementUpdate === undefined ? "dropdown" : placementUpdate
        }
        id={listboxId}
        className={menuStyle.menu}
        aria-labelledby={safeId}
        ref={refsFloating}
        role={isSearchable ? undefined : "listbox"}
        tabIndex={-1}
        onClick={(event) => {
          const target = event.target as HTMLElement;

          const btn = target.closest("button[data-option]") as
            | HTMLElement
            | undefined;

          if (!btn) {
            return;
          }

          onOpenChange(false);

          const myevent: ChangeEvent = {
            type: "change",
            target: {
              type: "select-one",
              name,
              value: btn.dataset.option,
            },
          };
          controlled.onChange(myevent);
        }}
        content={renderedOptions}
      />

      <Combobox
        {...props}
        hasError={hasError}
        aria-activedescendant={ariaActiveDescendant}
        placeholder={placeholder}
        isOpen={open}
        size={size}
        value={controlled.value}
        id={safeId}
        aria-controls={listboxId}
        disabled={disabled}
        readOnly={readOnly}
        ref={refsReference}
        onClick={() => {
          onOpenChange(!open);
        }}
        onKeyDownCapture={onKeyDownCapture}
      >
        {renderedOptions}
      </Combobox>
    </>
  );
}

SelectFloatingBase.displayName = "SelectFloating";
