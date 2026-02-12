import { classNames } from "../classNames";
import type { Overflow } from "./tokens";

export type OverflowProps = {
  overflow?: Overflow;
  overflowX?: Overflow;
  overflowY?: Overflow;
};

const STYLE_CONDITIONS: Record<
  keyof OverflowProps,
  (k: Overflow) => Record<string, boolean>
> = {
  overflow: (overflow: Overflow) => ({
    overflow_auto: overflow === "auto",
    overflow_hidden: overflow === "hidden",
    overflow_scroll: overflow === "scroll",
    overflow_visible: overflow === "visible",
  }),
  overflowX: (overflowX: Overflow) => ({
    overflow_x_auto: overflowX === "auto",
    overflow_x_hidden: overflowX === "hidden",
    overflow_x_scroll: overflowX === "scroll",
    overflow_x_visible: overflowX === "visible",
  }),
  overflowY: (overflowY: Overflow) => ({
    overflow_y_auto: overflowY === "auto",
    overflow_y_hidden: overflowY === "hidden",
    overflow_y_scroll: overflowY === "scroll",
    overflow_y_visible: overflowY === "visible",
  }),
};

const OVERFLOW_PROPS: Array<keyof OverflowProps> = [
  "overflow",
  "overflowX",
  "overflowY",
];

export function getOverflowProps<
  T extends OverflowProps & { className?: string },
>(props: T) {
  const { className, ...rest } = props;
  const cond = OVERFLOW_PROPS.reduce(
    (acc, key) => {
      if (key in props) {
        Object.assign(acc, STYLE_CONDITIONS[key](props[key] as Overflow));
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete rest[key];
      }
      return acc;
    },
    {
      [className || ""]: !!className,
    },
  );
  const newClassName = classNames(cond);
  return { className: newClassName, ...rest };
}
