import { type ReactNode, type Ref, forwardRef } from "react";

import sprout from "@qlik/sprout-css-modules";

import { classNames } from "../classNames";
import { useValueControl } from "../hooks/useValueControl";
import type { HTMLInputProps } from "../htmlTypes";
import { useSegmentedControlContext } from "./Group";

import style from "./SegmentedControl.module.css";

export type SegmentProps = Omit<HTMLInputProps, "type" | "prefix"> & {
  icon?: ReactNode;
  label: string;
};

export const Segment = forwardRef<HTMLInputElement, SegmentProps>(SegmentBase);

function SegmentBase(props: SegmentProps, ref?: Ref<HTMLInputElement>) {
  const { icon, label, name, ...rest } = props;

  const {
    iconOnly,
    justified,
    name: contextName,
    orientation,
  } = useSegmentedControlContext();

  const controlled = useValueControl(props, {
    onChangeKey: "onChange",
    valueKey: "checked",
    defaultValueKey: "defaultChecked",
    selector: (e) => e.target.checked,
  });

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label
      className={sprout.classNames(
        "font-label-s-emphasized",
        "text-default",
        "text-nowrap",
        style.segment,
        {
          "w-full": !!justified,
          "w-max": !justified,
        },
      )}
    >
      <input
        {...rest}
        {...controlled}
        className={classNames("sr-only")}
        type="radio"
        name={contextName || name}
        ref={ref}
      />
      <span
        className={classNames(
          "flex",
          "flex-row",
          "items-center",
          "gap-s",
          "justify-center",
          "p-m",
          "radius-pill",
          "cursor-pointer",
          "border-box",
        )}
      >
        {icon}
        <span
          className={classNames("px-s", {
            "sr-only": !!iconOnly || (orientation === "vertical" && !!label),
          })}
        >
          {label}
        </span>
      </span>
    </label>
  );
}

SegmentBase.displayName = "SegmentedControl.Segment";
