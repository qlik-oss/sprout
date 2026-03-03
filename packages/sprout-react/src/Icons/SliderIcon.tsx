import { type Ref, type SVGProps, forwardRef } from "react";

import { COMMON_PROPS } from "./common";

function SliderIconBase(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) {
  return (
    <svg {...COMMON_PROPS} ref={ref} {...props}>
      <path d="M7 4H6v8h1zm3 0H9v8h1z" />
    </svg>
  );
}

export const SliderIcon = forwardRef(SliderIconBase);
