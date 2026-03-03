import { type Ref, type SVGProps, forwardRef } from "react";

import { COMMON_PROPS } from "./common";

function GotoIconBase(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg {...COMMON_PROPS} ref={ref} {...props}>
      <path d="M9 1v1H2v12h12V7h1v7a1 1 0 0 1-.883.993L14 15H2a1 1 0 0 1-.993-.883L1 14V2a1 1 0 0 1 .883-.993L2 1zm7-1v5h-1V1.706l-4.5 4.501-.707-.707L14.292 1H11V0z" />
    </svg>
  );
}

export const GotoIcon = forwardRef(GotoIconBase);
