import { type Ref, type SVGProps, forwardRef } from "react";

import { COMMON_PROPS } from "./common";

function ResizerIconBase(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) {
  return (
    <svg {...COMMON_PROPS} ref={ref} {...props}>
      <path d="M10 0h1v16h-1zM6 2h1v12H6z" />
    </svg>
  );
}
export const ResizerIcon = forwardRef(ResizerIconBase);
