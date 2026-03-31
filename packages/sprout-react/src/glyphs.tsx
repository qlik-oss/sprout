import { type Ref, type SVGProps, forwardRef } from "react";

import { COMMON_PROPS } from "./Icons/common";

function DropdownArrowBase(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) {
  return (
    <svg {...COMMON_PROPS} ref={ref} {...props}>
      <path d="m7.999 9.001-2.858-2.86a.2.2 0 0 0-.282 0l-.718.719a.2.2 0 0 0 0 .282L7 10.001l.859.858a.2.2 0 0 0 .282 0L9 10l2.859-2.859a.2.2 0 0 0 0-.282l-.718-.718a.2.2 0 0 0-.283 0L8 9Z" />
    </svg>
  );
}

const DropdownArrow = forwardRef(DropdownArrowBase);
export { DropdownArrow };
