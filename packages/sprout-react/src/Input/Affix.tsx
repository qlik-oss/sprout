import {
  type ReactElement,
  type ReactNode,
  cloneElement,
  isValidElement,
} from "react";

import sprout from "@qlik/sprout-css-modules";

import { Button } from "../Button/Button";
import type { HTMLSpanProps } from "../htmlTypes";

export type AffixProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode & { height?: number; width?: number };
};

export type AffixWrapperProps = {
  children: ReactNode;
} & HTMLSpanProps;

const affixWrapper = sprout.classNames("flex", "items-center", "m-s");
const affixContent = sprout.classNames("flex", "bg-moderate", "radius-pill");

export function AffixWrapper({ children, ...props }: { children: ReactNode }) {
  return (
    <span className={affixContent} {...props}>
      {children}
    </span>
  );
}

export function Affix({ affix }: { affix: AffixProps | ReactNode }) {
  if (isValidElement(affix)) {
    return <span className={affixWrapper}>{affix}</span>;
  }

  const affixProps = affix as AffixProps;
  if (affixProps.icon && isValidElement(affixProps.icon)) {
    // fix usage of icon that may set height and width which break the visual in size small
    // eslint-disable-next-line react-hooks/immutability
    affixProps.icon = cloneElement(
      affixProps.icon as ReactElement<{ width?: string; height?: string }>,
      {
        height: undefined,
        width: undefined,
      },
    );
  }
  return (
    <span className={affixWrapper}>
      <AffixWrapper>
        <Button {...affixProps} variant="quiet" size="small" />
      </AffixWrapper>
    </span>
  );
}
