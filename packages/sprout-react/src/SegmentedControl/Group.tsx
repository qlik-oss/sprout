import {
  type PropsWithChildren,
  type Ref,
  createContext,
  forwardRef,
  useContext,
  useId,
  useMemo,
} from "react";

import sprout from "@qlik/sprout-css-modules";

import { Field, type FieldProps } from "../Field";

import style from "./SegmentedControl.module.css";

type SegmentedControlContextProps = {
  iconOnly?: boolean;
  justified?: boolean;
  name?: string;
  orientation?: "horizontal" | "vertical";
};

const SegmentedControlContext = createContext<SegmentedControlContextProps>({});

export const useSegmentedControlContext = () =>
  useContext(SegmentedControlContext);

type CommonGroupControlProps = PropsWithChildren<{
  name?: string;
  iconOnly?: boolean;
  label?: FieldProps["label"];
}>;

type HorizontalProps = {
  justified?: boolean;
  orientation?: "horizontal";
};

type VerticalProps = {
  justified?: never;
  orientation: "vertical";
};

export type GroupProps = CommonGroupControlProps &
  (HorizontalProps | VerticalProps);

/**
 * The `SegmentedControl.Group` component renders onto a `div` HTML element. It accepts all Field props plus the following:
 * @param name - The name attribute shared across all Segment inputs within this group.
 * @param iconOnly - If true, only icons are displayed (no labels) in the segments.
 * @param label - Optional visible label for the group using the Field layout.
 * @param justified - If true, segments stretch to fill the full width (horizontal only).
 * @param orientation - Layout direction of the segments (`horizontal` or `vertical`). Defaults to `horizontal`.
 */
export const Group = forwardRef<HTMLDivElement, GroupProps>(GroupBase);

function GroupBase(props: GroupProps, ref?: Ref<HTMLDivElement>) {
  const {
    children,
    justified,
    label,
    name,
    iconOnly,
    orientation = "horizontal",
    ...rest
  } = props;

  const generatedId = useId();
  const labelId = label ? generatedId : undefined;

  const contextValue: SegmentedControlContextProps = useMemo(
    () => ({
      iconOnly,
      justified,
      name,
      orientation,
    }),
    [iconOnly, justified, name, orientation],
  );

  return (
    <SegmentedControlContext.Provider value={contextValue}>
      <Field label={label} labelId={labelId} ref={ref} {...rest}>
        <div
          role="radiogroup"
          aria-labelledby={labelId}
          aria-orientation={
            orientation === "vertical" ? "vertical" : "horizontal"
          }
          className={sprout.classNames(
            "flex",
            "flex-row",
            "radius-pill",
            "items-center",
            style.segmented_control,
            {
              "w-full": !!justified,
              "w-max": !justified,
              "justify-around": !!justified,
              "flex-col": orientation === "vertical",
            },
          )}
        >
          {children}
        </div>
      </Field>
    </SegmentedControlContext.Provider>
  );
}

GroupBase.displayName = "SegmentedControl.Group";
