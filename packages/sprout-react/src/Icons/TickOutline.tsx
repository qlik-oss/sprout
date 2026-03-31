import { type Ref, type SVGProps, forwardRef } from "react";

import { COMMON_PROPS } from "./common";

function TickOutlineBase(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) {
  return (
    <svg {...COMMON_PROPS} ref={ref} {...props}>
      <path d="m13.914 4.5-7.707 7.707L2 8l.707-.707 3.5 3.5 7-7z" />
    </svg>
  );
}

export const TickOutline = forwardRef(TickOutlineBase);
