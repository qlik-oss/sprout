/* eslint-disable react-hooks/exhaustive-deps */
import {
  type CSSProperties,
  type JSX,
  // eslint-disable-next-line @typescript-eslint/no-redeclare
  type KeyboardEvent,
  type Ref,
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { tokens } from "@qlik/design-tokens";
import { useControl } from "@qlik/sprout-css-hooks";
import CrossOutline from "@qlik/sprout-icons/react/CrossOutline";
import EditOutline from "@qlik/sprout-icons/react/EditOutline";
import TickOutline from "@qlik/sprout-icons/react/TickOutline";

import { AlertInline } from "../AlertInline";
import { IconButton } from "../Button";
import {
  FloatingPrimitive,
  type FloatingPrimitiveProps,
} from "../FloatingPrimitive";
import { FloatingWrapper } from "../FloatingWrapper";
import { FOCUSABLE_ELEMENT_SELECTOR } from "../Utils/focus";
import { KEYBOARD_KEYS } from "../Utils/keyboardKeys";
import { mergeRefs } from "../Utils/mergeRef";
import { classNames } from "../classNames";
import { useI18n } from "../hooks/useI18n";
import type { HTMLDivProps } from "../htmlTypes";

import css from "./InlineEdit.module.css";

export type InlineEditPrimitiveProps = {
  showEditIcon?: boolean;
  /**@deprecated use showEditIcon */
  showEditButton?: boolean;
  showFormButtons?: boolean;
  view: JSX.Element | (() => JSX.Element);
  edit: JSX.Element | (() => JSX.Element);
  editFocusSelector?: string;
  editOffsetX?: CSSProperties["left"];
  editOffsetY?: CSSProperties["top"];
  /**
   * default value is cancel
   */
  blurAction?: "cancel" | "save";
  onSave?: () => void;
  onCancel?: () => void;
  isEditing?: boolean;
  isEditingDefault?: boolean;
  onEdit?: FloatingPrimitiveProps["onOpenChange"];
  errorMessages?: Array<string>;
  "data-testid"?: string;
} & Omit<HTMLDivProps, "onChange" | "defaultValue">;

export const InlineEditPrimitive = forwardRef<
  HTMLDivElement,
  InlineEditPrimitiveProps
>(InlineEditPrimitiveBase);

function InlineEditPrimitiveBase(
  {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    editFocusSelector,
    errorMessages,
    showEditButton,
    showEditIcon,
    showFormButtons,
    view,
    editOffsetX = `calc(${tokens.common_spacing_m} * -1)`,
    editOffsetY = `calc(${tokens.common_spacing_s} * -1)`,
    edit,
    isEditing,
    isEditingDefault,
    onEdit,
    blurAction = "save",
    onCancel,
    onSave,
    "data-testid": dataTestId,
    ...props
  }: InlineEditPrimitiveProps,
  ref?: Ref<HTMLDivElement>,
) {
  const t = useI18n();
  const [focusOn, setFocusOn] = useState<"edit" | "view" | undefined>(
    undefined,
  );
  const [viewHeight, setViewHeight] = useState<number>(0);
  const viewRef = useRef<HTMLDivElement | null>(null);
  const viewMergedRef = mergeRefs([viewRef, ref]);
  const formRef = useRef<HTMLFormElement | null>(null);
  const editControl = useControl<boolean>(
    {
      isEditing,
      isEditingDefault,
      onEdit,
    },
    {
      onChangeKey: "onEdit",
      valueKey: "isEditing",
      defaultValueKey: "isEditingDefault",
    },
  );

  useLayoutEffect(() => {
    if (focusOn === "view") {
      const focusable = viewRef.current?.querySelectorAll(
        FOCUSABLE_ELEMENT_SELECTOR,
      );
      if (focusable && focusable.length > 0) {
        (focusable[0] as HTMLElement).focus();
        setFocusOn(undefined);
      } else {
        viewRef.current?.focus();
      }
    } else if (focusOn === "edit") {
      const focusable = formRef.current?.querySelectorAll(
        editFocusSelector || FOCUSABLE_ELEMENT_SELECTOR,
      );
      if (focusable && focusable.length > 0) {
        const visibleFocusable = Array.from(focusable).filter((el) => {
          const style = window.getComputedStyle(el);
          return style.display !== "none" && style.visibility !== "hidden";
        });
        if (visibleFocusable.length > 0) {
          (visibleFocusable[0] as HTMLElement).focus();
          setFocusOn(undefined);
        }
      }
    }
  }, [focusOn]);

  const onFocusLost = useCallback(() => {
    editControl.onChange(false);
    if (blurAction === "cancel") {
      onCancel?.();
    } else {
      onSave?.();
    }
  }, [editControl, onCancel, onSave, blurAction]);

  useEffect(() => {
    const viewBB = viewRef.current?.getBoundingClientRect();
    const heightOfView = Math.floor(viewBB?.height || 0);
    if (viewHeight !== heightOfView) {
      setViewHeight(heightOfView);
    }

    if (editControl.value) {
      setFocusOn("edit");
    }
  }, [editControl.value]);

  const editIcon = (showEditButton || showEditIcon) && (
    <EditOutline
      className={classNames(
        "shrink-0",
        "size-xl",
        "border-box",
        "text-default",
        css.value_edit_btn,
      )}
    />
  );

  return (
    <FloatingPrimitive
      hideBackdrop
      className={classNames("flex", "flex-row", "w-full")}
      width="reference"
      open={!!editControl.value}
      onOpenChange={(newStatus, reason) => {
        if (!newStatus) {
          switch (reason) {
            case "keypress-escape":
              // We prefer to use the bubles event at the form level which is more stable
              // and do nothing here to not doubling the state machines
              break;
            case "click-outside":
              if (blurAction === "cancel") {
                onCancel?.();
              } else {
                onSave?.();
              }
              editControl.onChange(false, reason);
              break;
            case undefined: {
              throw new Error("Not implemented yet: undefined case");
            }
            default:
              editControl.onChange(false);
          }
        } else {
          editControl.onChange(true);
        }
      }}
      content={
        <div
          className={classNames(
            "bg-default",
            "radius-subtle",
            "absolute",
            "flex",
            "flex-col",
            "gap-s",
            "border-box",
            "size-full",
            "items-center",
          )}
          data-testid={dataTestId ? `${dataTestId}.edit` : "edit"}
          style={{
            inlineSize: `calc(100% - ${editOffsetX} * 2)`,
            insetInlineStart: editOffsetX,
            insetBlockStart: `calc(${viewHeight}px * -1 + ${editOffsetY || "0px"})`,
          }}
        >
          <form
            ref={formRef}
            className={classNames(
              "flex",
              "flex-row",
              "border-box",
              "w-full",
              "h-fit",
              "bg-default",
            )}
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              editControl.onChange(false, "submit");
              onSave?.();
              setFocusOn("view");
            }}
            onKeyDownCapture={(e: KeyboardEvent<HTMLFormElement>) => {
              if (e.key === KEYBOARD_KEYS.TAB) {
                if (!showFormButtons || e.shiftKey) {
                  onFocusLost();
                }
              }
              if (e.key === KEYBOARD_KEYS.ESCAPE) {
                onCancel?.();
                setFocusOn("view");
                editControl.onChange(false, "keypress-escape");
              }
            }}
          >
            {typeof edit === "function" ? edit() : edit}
          </form>
          <div
            className={classNames(
              "flex",
              "flex-row",
              "border-box",
              "w-full",
              "items-start",
              "gap-xl",
              css.floating_container,
            )}
          >
            <div
              className={classNames("flex", "flex-col", "grow-1")}
              data-target
            >
              {(errorMessages || []).map((errorMsg) => (
                <AlertInline key={errorMsg} severity="error" title={errorMsg} />
              ))}
            </div>
            {showFormButtons ? (
              <div
                className={classNames(
                  "flex",
                  "flex-row",
                  "items-start",
                  "gap-m",
                )}
              >
                <FloatingWrapper data-target>
                  <IconButton
                    aria-label={t("inline-edit.cancel")}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onCancel?.();
                      editControl.onChange(false);
                      setFocusOn("view");
                    }}
                    icon={<CrossOutline />}
                  />
                </FloatingWrapper>
                <FloatingWrapper data-target>
                  <IconButton
                    type="button"
                    aria-label={t("inline-edit.save")}
                    icon={<TickOutline />}
                    onKeyDownCapture={(e: KeyboardEvent<HTMLButtonElement>) => {
                      if (e.key === KEYBOARD_KEYS.ESCAPE) {
                        editControl.onChange(false);
                        onCancel?.();
                        setFocusOn("view");
                      }
                      if (e.key === KEYBOARD_KEYS.TAB) {
                        if (!e.shiftKey) {
                          onFocusLost();
                        }
                      }
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      editControl.onChange(false);
                      onSave?.();
                      setFocusOn("view");
                    }}
                  />
                </FloatingWrapper>
              </div>
            ) : null}
          </div>
        </div>
      }
    >
      <div
        className={classNames(
          "relative",
          "w-full",
          "border-box",
          css.value_container,
        )}
        data-testid={dataTestId}
        {...props}
      >
        <div
          {...props}
          ref={viewMergedRef}
          data-testid={dataTestId ? `${dataTestId}.view` : "view"}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (!editControl.value) {
              if (e.key === "Enter") {
                e.preventDefault();
                editControl.onChange(true);
              }
            }
          }}
          onClick={(e) => {
            if (!editControl.value) {
              e.stopPropagation();
              e.preventDefault();
              editControl.onChange(true);
            }
          }}
          className={classNames(
            "flex",
            "flex-row",
            "items-center",
            "gap-s",
            "p-0",
            "m-0",
            "w-full",
            "cursor-text",
            "outline-focus-visible-centered",
            "radius-pill",
            css.value_clickable,
          )}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
        >
          {typeof view === "function" ? view() : view}
          {editIcon}
        </div>
      </div>
    </FloatingPrimitive>
  );
}

InlineEditPrimitiveBase.displayName = "InlineEdit.Primitive";
