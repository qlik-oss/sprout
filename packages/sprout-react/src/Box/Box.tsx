import { type CSSProperties, type Ref, forwardRef } from "react";

import { type TypographyProps, getTypographyClassName } from "../Typography";
import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";
import { type BackgroundProps, getBackgroundProps } from "./background";
import { type BorderProps, getBorderProps } from "./border";
import { type BoxShadowProps, getBoxShadow } from "./boxShadow";
import { type FlexArgs, type FlexProps, getFlexProps } from "./flex";
import { type InlineStyleProps, getInlineStyleProps } from "./inline";
import { type OverflowProps, getOverflowProps } from "./overflow";
import { type PaddingProps, getPaddingProps } from "./padding";

export type BoxPropsOnly = InlineStyleProps &
  PaddingProps &
  FlexProps &
  BorderProps &
  BackgroundProps &
  BoxShadowProps &
  OverflowProps & {
    typography?: TypographyProps;
  };

export type BoxProps = BoxPropsOnly &
  HTMLDivProps & { className?: string; style?: CSSProperties };

/**
 * @deprecated Box is deprecated, you must use classNames instead like so:
 * <div className={classNames('flex', 'flex_row', 'border_box')}></div>
 */
export const Box = forwardRef<HTMLDivElement, BoxProps>(BoxBase);

function BoxBase({ children, ...props }: BoxProps, ref?: Ref<HTMLDivElement>) {
  return (
    <div {...getBoxProps(props)} ref={ref}>
      {children}
    </div>
  );
}

BoxBase.displayName = "Box";

/**
 * @deprecated getBoxProps is deprecated, you must use classNames instead
 * classNames('flex', 'row', 'border-box')
 */
export function getBoxProps(
  {
    typography,
    ...props
  }: BoxPropsOnly & { className?: string; style?: CSSProperties },
  opt: FlexArgs = { apply: true },
) {
  const { className, ...boxProps } = getOverflowProps(
    getBoxShadow(
      getBackgroundProps(
        getBorderProps(
          getFlexProps(getPaddingProps(getInlineStyleProps(props)), opt),
        ),
      ),
    ),
  );

  return {
    ...boxProps,
    className: classNames({
      [`${typography && getTypographyClassName(typography)}`]: !!typography,
      [className]: true,
    }),
  };
}
