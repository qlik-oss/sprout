import type { ReactNode } from "react";

import { tokens } from "@qlik/design-tokens";
import FolderClosed from "@qlik/sprout-icons/react/FolderClosed";
import FolderOpen from "@qlik/sprout-icons/react/FolderOpen";

import { IconButton } from "../Button";
import { classNames } from "../classNames";
import { useI18n } from "../hooks/useI18n";
import type { HTMLDivProps } from "../htmlTypes";

export type TreeItemProps = {
  id: string;
  label: string;
  path?: Array<string>;
  isLeaf?: boolean;
  /**
   * @deprecated please use icon property instead
   */
  displayFolderIcon?: boolean;
  disabled?: boolean;
  nesting?: number;
  expanded?: boolean;
  onExpand?: (id: string, expanded: boolean) => void;
  icon?: ReactNode;
  children?: ReactNode;
} & HTMLDivProps;

function DropDown() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="icons/outline/dropdown_arrow_16">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.999 9.001L5.14149 6.14159C5.06337 6.06341 4.93664 6.06342 4.85853 6.14161L4.14126 6.8596C4.06323 6.93771 4.06325 7.06427 4.1413 7.14235L6.999 10.001L7.85772 10.8589C7.93578 10.9368 8.06225 10.9369 8.14035 10.8589L9 10.001L11.8586 7.14235C11.9367 7.06427 11.9368 6.93769 11.8587 6.85958L11.1414 6.14156C11.0633 6.06339 10.9366 6.06336 10.8585 6.14149L7.999 9.001Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

function DropRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="icons/outline/dropright_arrow_16">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.501 8.501L5.64159 11.3585C5.56341 11.4366 5.56342 11.5634 5.64161 11.6415L6.3596 12.3587C6.43771 12.4368 6.56427 12.4368 6.64235 12.3587L9.501 9.501L10.3589 8.64228C10.4368 8.56422 10.4369 8.43775 10.3589 8.35965L9.501 7.5L6.64235 4.64135C6.56427 4.56327 6.43769 4.56324 6.35958 4.64128L5.64156 5.35858C5.56339 5.43667 5.56336 5.56336 5.64149 5.64149L8.501 8.501Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export function TreeItem({
  id,
  children,
  label,
  path,
  disabled,
  expanded,
  onExpand,
  nesting,
  icon,
  displayFolderIcon,
  isLeaf,
  ...props
}: TreeItemProps) {
  const t = useI18n();

  const safeExpanded = !!expanded;
  let safeNesting = nesting || 0;
  if (path) {
    safeNesting = path.length;
  }

  const onClick = () => {
    if (onExpand) {
      onExpand(id, !safeExpanded);
    }
  };

  let safeIcon = icon;
  if (displayFolderIcon) {
    safeIcon = safeExpanded ? <FolderOpen /> : <FolderClosed />;
  }

  return (
    <div
      id={id}
      className={classNames(
        "relative",
        "flex",
        "flex-row",
        "items-center",
        "font-label-s",
        "py-s",
        "w-full",
        "overflow-hidden",
        {
          "text-default": !disabled,
          "text-disabled": !!disabled,
        },
      )}
      {...props}
    >
      <div
        className={classNames("pl-m", "shrink-0")}
        style={{
          inlineSize: `calc(${safeNesting} * ${tokens.common_sizing_xxl})`,
        }}
      />

      <span
        className={classNames({
          invisible: !!isLeaf,
        })}
      >
        <IconButton
          variant="quiet"
          size="small"
          disabled={disabled}
          tabIndex={-1}
          icon={safeExpanded ? <DropDown /> : <DropRight />}
          onClick={onClick}
          aria-label={
            safeExpanded
              ? t("treeitem.label.close")
              : t("treeitem.label.expand")
          }
        />
      </span>

      <div
        data-layoutid="IconItem"
        className={classNames(
          "flex",
          "flex-row",
          "items-center",
          "gap-s",
          "w-full",
          "overflow-hidden",
        )}
      >
        {safeIcon ? (
          <span className={classNames("shrink-0", "flex", "items-center")}>
            {safeIcon}
          </span>
        ) : null}
        <div className={classNames("flex", "flex-row", "flex-nowrap", "w-max")}>
          {label}
        </div>
        {children}
      </div>
    </div>
  );
}

TreeItem.displayName = "Tree.TreeItem";
