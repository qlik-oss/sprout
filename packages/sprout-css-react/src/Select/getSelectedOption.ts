import type { ReactNode } from "react";

import type { SelectOptionProps } from "./SelectOption";

/**
 * Get the display name of a component by removing
 * any surrounding parentheses from HOC.
 * @param displayName
 * @returns displayName without HOC parentheses
 */
function getUnwrapDisplayName(displayName?: string) {
  if (!displayName) {
    return displayName;
  }

  const lastParenIndex = displayName.lastIndexOf("(");

  if (lastParenIndex === -1) {
    return displayName;
  }

  const afterParen = displayName.slice(lastParenIndex + 1);
  const closingParenIndex = afterParen.indexOf(")");

  if (closingParenIndex !== -1) {
    return afterParen.slice(0, closingParenIndex);
  }

  return afterParen;
}

/**
 * Approach based on MUI Select:
 * https://github.com/mui/material-ui/blob/v6.4.8/packages/mui-material/src/Select/SelectInput.js
 * But this one has limitation on their side that we will try to avoid.
 * Direct children seems to be the only valid option
 */
export function getSelectedOption(
  children?: ReactNode,
  selected?: string,
): Partial<SelectOptionProps> {
  if (!children) {
    return {};
  }
  let safeChildren = children;
  if (!Array.isArray(children)) {
    safeChildren = [children];
  }

  return (
    safeChildren as Array<{
      props: SelectOptionProps;
      type: { displayName: string };
    }>
  ).reduce((acc: Partial<SelectOptionProps>, child) => {
    if (acc.value) {
      return acc;
    }
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!child) {
      return acc;
    }
    if (typeof child !== "object") {
      return acc;
    }
    // in the case of map rendering with keys
    if (Array.isArray(child)) {
      return { ...getSelectedOption(child, selected), ...acc };
    }
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!child.props) {
      return acc;
    }
    if (getUnwrapDisplayName(child.type.displayName) !== "Option") {
      if (child.props.children) {
        const childBis = getSelectedOption(child.props.children, selected);
        if (childBis.value !== undefined) {
          return childBis;
        }
      }
    } else if (
      selected === child.props.value ||
      (!selected && child.props.value === "")
    ) {
      return child.props;
    }
    return acc;
  }, {});
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type EmptyObject = {};

export function getSelectedOptions(
  children?: ReactNode,
  selected?: Array<string>,
): Record<string, SelectOptionProps> | EmptyObject {
  if (!children) {
    return {};
  }
  let safeChildren = children;
  if (!Array.isArray(children)) {
    safeChildren = [children];
  }

  return (
    safeChildren as Array<{
      props: SelectOptionProps;
      type: { displayName: string };
    }>
  ).reduce((acc: Record<string, SelectOptionProps>, child) => {
    // if (acc.value) {
    //   return acc;
    // }
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!child) {
      return acc;
    }
    if (typeof child !== "object") {
      return acc;
    }
    // in the case of map rendering with keys
    if (Array.isArray(child)) {
      return { ...getSelectedOptions(child, selected), ...acc };
    }
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!child.props) {
      return acc;
    }
    if (getUnwrapDisplayName(child.type.displayName) !== "Option") {
      if (child.props.children) {
        const childBis = getSelectedOptions(child.props.children, selected);

        return { ...childBis, ...acc };
      }
    } else if (selected?.includes(child.props.value || "")) {
      acc[child.props.value || ""] = child.props;
    }
    return acc;
  }, {});
}

export function getSelectedValueString(
  selectedProps: Record<string, SelectOptionProps>,
  value: string,
): string {
  let label = value;
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const children = selectedProps[value]?.children as
    | string
    | { props: { label: string } };
  // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
  switch (typeof children) {
    case "string":
      label = children;
      break;
    case "object":
      label = children.props.label;
      break;
    default:
      label = value;
      break;
  }
  return label;
}
