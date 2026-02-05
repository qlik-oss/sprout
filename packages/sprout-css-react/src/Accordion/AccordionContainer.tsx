import type { ReactElement } from "react";
import { Children, isValidElement, useEffect, useRef, useState } from "react";

import { classNames } from "../classNames";
import { useListGesture } from "../hooks/useListGesture";
import type { HTMLDivProps } from "../htmlTypes";
import { renderOrClone } from "../renderOrClone";
import type { AccordionHeaderPropsType } from "./AccordionHeader";
import type { AccordionItemProps } from "./AccordionItem";

import style from "./Accordion.module.css";

export type AccordionContainerProps = HTMLDivProps & {
  children: Array<ReactElement> | ReactElement;
  headerLevel?: AccordionHeaderPropsType["level"];
  behavior?: "linked" | "isolated";
  openedDefault?: number;
  /**
   * You can control if the content rendered when opened={false}
   */
  renderContent?: boolean;
  variant?: "default" | "quiet";
};

function getAllItems(ref: HTMLElement): NodeList {
  return ref.querySelectorAll(`.${style.header}`);
}
function getSelectedItems(ref: HTMLElement): NodeList {
  return ref.querySelectorAll(`.${style.header}`);
}

export function AccordionContainer({
  behavior = "linked",
  headerLevel,
  children,
  openedDefault,
  renderContent,
  variant,
  ...props
}: AccordionContainerProps) {
  const [openedPanelIndex, setOpenedPanelIndex] = useState<number | undefined>(
    openedDefault,
  );
  const ref = useRef<HTMLDivElement>(null);
  const gesture = useListGesture({ getAllItems, getSelectedItems });
  useEffect(() => {
    if (ref.current) {
      gesture.setElement(ref.current);
      gesture.isActivated = () => {
        return !!document.activeElement?.classList.contains(style.header);
      };
    }

    return () => {
      gesture.setElement();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onToggleOpened = (index: number) => {
    if (index === openedPanelIndex) {
      setOpenedPanelIndex(undefined);
    } else {
      setOpenedPanelIndex(index);
    }
  };

  return (
    <div
      className={classNames("flex-noreset", "w-full", "flex-col")}
      {...props}
      ref={ref}
    >
      {Children.map(children, (child, index) => {
        //controlled
        if (!isValidElement(child)) {
          return child;
        }
        const childProps: Partial<AccordionItemProps> = {
          onToggleOpened: () => {
            onToggleOpened(index);
          },
          opened: index === openedPanelIndex,
          renderContent,
          variant,
          headerLevel,
        };
        if (behavior === "isolated") {
          //uncontrolled
          delete childProps.opened;
          if (openedDefault !== undefined) {
            childProps.openedDefault = index === openedDefault;
          }
        }
        return renderOrClone(child, childProps);
      })}
    </div>
  );
}

AccordionContainer.displayName = "Accordion.Container";
