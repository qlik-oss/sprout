import { type ReactNode, type Ref, forwardRef } from "react";

import { Link, type LinkProps } from "../Link";
import { classNames } from "../classNames";
import type { HTMLLiProps, HTMLNavProps } from "../htmlTypes";

import styles from "./Breadcrumb.module.css";

type BreadcrumbItemProps = Array<LinkProps & { label?: string }>;

export type BreadCrumbProps = HTMLNavProps & {
  items?: BreadcrumbItemProps;
  children?: ReactNode;
  label?: string;
};

/**
 * The BreadcrumbItem component accepts all the native li props and also supports the following custom props:
 * @param children - the content of the breadcrumb item, typically a Link or plain text for the current page.
 */
export function BreadcrumbItem({
  children,
  ...props
}: HTMLLiProps & { children: ReactNode }) {
  return (
    <li className={styles.entry} {...props}>
      <div
        className={classNames(
          "flex",
          "flex-row",
          "border-box",
          "gap-m",
          "items-center",
          "flex-nowrap"
        )}
      >
        {children}
      </div>
    </li>
  );
}
BreadcrumbItem.displayName = "BreadcrumbItem";

/**
 * The Breadcrumb component accepts all the native nav props and also supports the following custom props:
 * @param label - the accessible label for the nav landmark (maps to aria-label).
 * @param items - an array of link props used to render breadcrumb entries declaratively.
 * @param children - breadcrumb entries rendered as children using BreadcrumbItem components.
 */
export const Breadcrumb = forwardRef<HTMLElement, BreadCrumbProps>(
  BreadcrumbBase
);

function getIdFromLabel(label: string) {
  return label.toLowerCase().replace(/\s+/g, "-");
}

function BreadcrumbBase(
  { label, items, children, ...rest }: BreadCrumbProps,
  ref?: Ref<HTMLElement>
) {
  const buildEntries = () => {
    if (!items) {
      return null;
    }

    return items.map(
      ({ children: entryChildren, label: entryLabel, ...entry }, index) => {
        const isLastEntry = index === items.length - 1;
        return (
          <BreadcrumbItem
            key={`${entry.href}-${getIdFromLabel(entryLabel || "")}`}
          >
            <Link
              withEllipsis
              aria-current={isLastEntry ? "page" : undefined}
              disabled={isLastEntry}
              {...entry}
            >
              {entryLabel}
              {entryChildren}
            </Link>
          </BreadcrumbItem>
        );
      }
    );
  };

  return (
    <nav
      {...rest}
      className={styles.breadcrumb}
      ref={ref}
      aria-label={label || "breadcrumb"}
    >
      <ol
        className={classNames(
          "flex",
          "flex-row",
          "border-box",
          "justify-start",
          "items-center"
        )}
      >
        {buildEntries()}
        {children}
      </ol>
    </nav>
  );
}

BreadcrumbBase.displayName = "Breadcrumb";
