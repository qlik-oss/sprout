import type { PropsWithChildren, Ref } from "react";
import { forwardRef } from "react";

import { classNames } from "../classNames";
import type { CommonSliderProps } from "./common.types";

import styles from "./Slider.module.css";

type SliderTrackProps = PropsWithChildren<{
  orientation?: CommonSliderProps["orientation"];
  innerTrackRef?: Ref<HTMLDivElement>;
}>;

export const SliderTrack = forwardRef<HTMLDivElement, SliderTrackProps>(
  SliderTrackBase,
);

function SliderTrackBase(
  { children, orientation = "horizontal", innerTrackRef }: SliderTrackProps,
  ref?: Ref<HTMLDivElement>,
) {
  return (
    <div
      className={classNames("cursor-pointer", styles.slider_track_wrapper, {
        "w-full": orientation === "horizontal",
      })}
      data-orientation={orientation}
      role="presentation"
      ref={ref}
    >
      <div className={classNames("p-xl")} role="presentation">
        <div
          className={classNames(
            "relative",
            "radius-round",
            "border-box",
            styles.slider_track,
          )}
          data-orientation={orientation}
          ref={innerTrackRef}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

SliderTrackBase.displayName = "Slider.Track";
