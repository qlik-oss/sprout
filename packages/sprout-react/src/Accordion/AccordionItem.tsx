import { type ReactNode, type Ref, forwardRef } from "react";

import { useControl, useId } from "@qlik/sprout-hooks";

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
