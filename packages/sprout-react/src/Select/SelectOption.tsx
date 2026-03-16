import {
  type ReactNode,
  type Ref,
  type RefObject,
  forwardRef,
  useContext,
  useState,
} from "react";

import { useId } from "@qlik/sprout-react-hooks";

import { Menu, type MenuProps } from "../Menu";
import { menuStyle } from "../Menu/MenuClassName";
import { MenuContentPrimitive } from "../Menu/MenuContent";
import type { HTMLButtonProps } from "../htmlTypes";
import { SelectContext, isValueSelected } from "./SelectContext";

export type SelectOptionProps = {
  children: ReactNode;
  value?: string;
  disabled?: boolean;
  selectable?: MenuProps["Item"]["selectable"];
} & Omit<HTMLButtonProps, "type" | "disabled">;

export const SelectOption = forwardRef<HTMLButtonElement, SelectOptionProps>(
  OptionBase,
);
export const OptionStyled = MenuContentPrimitive;

function OptionBase(
  { id, selectable, ...props }: SelectOptionProps,
  ref?: Ref<HTMLButtonElement>,
) {
  const safeId = useId(id);
  const [display, setDisplay] = useState(true);
  const context = useContext(SelectContext);
  const { value, children, ...rest } = props;
  const selected = isValueSelected(context, value);

  return (
    <button
      type="button"
      id={safeId}
      ref={(node) => {
        if (ref) {
          if (typeof ref === "function") {
            ref(node);
          } else {
            // eslint-disable-next-line no-param-reassign
            (ref as RefObject<HTMLButtonElement | null>).current = node;
          }
        }
        if (node && context.queryFilter) {
          const text = node.textContent || "";
          const isMatch = text
            .toLowerCase()
            .includes(context.queryFilter.toLowerCase());
          if (isMatch && !display) {
            setDisplay(true);
          } else if (!isMatch && display) {
            setDisplay(false);
          }
        } else if (!context.queryFilter && !display) {
          setDisplay(true);
        }
      }}
      className={menuStyle.menuitem}
      role="option"
      style={{ minInlineSize: "120px" }}
      tabIndex={-1}
      aria-selected={selected ? "true" : "false"}
      aria-hidden={!display}
      data-option={value}
      {...rest}
    >
      <Menu.Content
        selectable={selectable === undefined ? true : selectable}
        selected={selected}
      >
        {children}
      </Menu.Content>
    </button>
  );
}

OptionBase.displayName = "Option";
SelectOption.displayName = "forwardRef(Option)";
