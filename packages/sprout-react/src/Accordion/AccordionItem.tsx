import { type ReactNode, type Ref, forwardRef } from "react";

import { useControl, useId } from "@qlik/sprout-react-hooks";

import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";
import {
  AccordionHeader,
  type AccordionHeaderPropsType,
} from "./AccordionHeader";

import style from "./Accordion.module.css";

type AccordionItemCommonPropsType = {
  variant?: "default" | "quiet";
  children: ReactNode;
  /**
   * You can control which tag is used. h2 with headerLevel={2}. span otherwise
   */
  headerLevel?: AccordionHeaderPropsType["level"];
  /**
   * You can control if the content rendered when opened={false}
   */
  renderContent?: boolean;
  opened?: boolean;
  openedDefault?: boolean;
  /**
   * When used alone you can use this property to make the accordion item width fit the content
   * It should never been used in an Accordion container
   * @default "full"
   */
  width?: "full" | "compact";
  disabled?: boolean;
  onToggleOpened?: () => void;
} & HTMLDivProps;

export type AccordionItemProps = AccordionItemCommonPropsType &
  Pick<
    AccordionHeaderPropsType,
    "header" | "description" | "value" | "icon" | "chevronPosition" | "affix"
  >;

/**
 * The AccordionItem component accepts all the native div props and also supports the following custom props:
 * @param header - the header text displayed on the accordion toggle button.
 * @param description - a secondary description text displayed below the header.
 * @param icon - an icon rendered at the start of the header.
 * @param affix - additional content rendered at the end of the header.
 * @param value - a value string displayed in the header (e.g. a count or label).
 * @param chevronPosition - position of the expand/collapse chevron, can be leading or trailing.
 * @param variant - the visual style of the item, can be default or quiet.
 * @param children - the content rendered inside the accordion panel when opened.
 * @param headerLevel - the heading level tag used for the header (e.g. 2 for h2). Defaults to a span otherwise.
 * @param renderContent - whether to keep the panel content in the DOM when closed.
 * @param opened - controlled open state of the accordion item.
 * @param openedDefault - uncontrolled default open state of the accordion item.
 * @param width - whether the item takes full width or fits its content. Should never be used inside an AccordionContainer.
 * @param disabled - whether the accordion item is disabled.
 * @param onToggleOpened - callback fired when the accordion item is toggled.
 */
export const AccordionItem = forwardRef<HTMLButtonElement, AccordionItemProps>(
  AccordionItemBase,
);

function AccordionItemBase(
  {
    variant = "default",
    id,
    children,
    headerLevel,
    opened,
    openedDefault,
    renderContent,
    onToggleOpened,
    icon,
    header,
    description,
    value,
    chevronPosition,
    affix,
    width = "full",
    disabled = false,
    ...rest
  }: AccordionItemProps,
  ref?: Ref<HTMLButtonElement>,
) {
  const controlled = useControl(
    {
      opened,
      openedDefault,
      onToggleOpened,
    },
    {
      onChangeKey: "onToggleOpened",
      valueKey: "opened",
      defaultValueKey: "openedDefault",
      selector: (e) => e,
    },
  );
  const safeComponentId = useId();
  const componentId = id || safeComponentId;
  const controlId = `AccordionItem__control--${componentId}`;
  const sectionId = `AccordionItem__content--${componentId}`;
  let shouldRender = true;

  if (!renderContent && !controlled.value) {
    shouldRender = false;
  }

  return (
    <div
      className={classNames(
        "flex-noreset",
        "flex-col",
        "overflow-hidden",
        "gap-m",
        {
          [style.divider]: variant === "default",
        },
      )}
      {...rest}
    >
      <AccordionHeader
        level={headerLevel}
        controlId={controlId}
        sectionId={sectionId}
        opened={!!controlled.value}
        onClick={() => {
          controlled.onChange(!controlled.value);
        }}
        icon={icon}
        header={header}
        description={description}
        value={value}
        chevronPosition={chevronPosition}
        affix={affix}
        width={width}
        disabled={disabled}
        data-variant={variant}
        ref={ref}
      />
      {shouldRender && (
        <div
          id={sectionId}
          role="region"
          data-expanded={controlled.value ? "true" : "false"}
          aria-labelledby={controlId}
          className={classNames("pt-0", "pr-xl", "pb-xl", "pl-xl", {
            hidden: !controlled.value,
          })}
          data-test="panel.section"
          data-testid="panel.section"
        >
          {children}
        </div>
      )}
    </div>
  );
}

AccordionItemBase.displayName = "Accordion.Item";
