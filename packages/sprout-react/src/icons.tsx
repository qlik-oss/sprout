import { type Ref, type SVGProps, forwardRef } from "react";

const COMMON_PROPS: Partial<SVGProps<SVGSVGElement>> = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  height: "16px",
  fill: "currentColor",
  "aria-hidden": true,
  role: "img",
};

function DropdownArrowBase(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) {
  return (
    <svg {...COMMON_PROPS} ref={ref} {...props}>
      <path d="m7.999 9.001-2.858-2.86a.2.2 0 0 0-.282 0l-.718.719a.2.2 0 0 0 0 .282L7 10.001l.859.858a.2.2 0 0 0 .282 0L9 10l2.859-2.859a.2.2 0 0 0 0-.282l-.718-.718a.2.2 0 0 0-.283 0L8 9Z" />
    </svg>
  );
}
const DropdownArrow = forwardRef(DropdownArrowBase);
export { DropdownArrow };

function DirectionLeftIconBase(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) {
  return (
    <svg {...COMMON_PROPS} ref={ref} {...props}>
      <path d="m2.15 8.5 3.416 3.659-.732.682L.316 8l4.518-4.841.732.682L2.15 7.5H15v1z" />
    </svg>
  );
}
export const DirectionLeftIcon = forwardRef(DirectionLeftIconBase);

function ResizerIconBase(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) {
  return (
    <svg {...COMMON_PROPS} ref={ref} {...props}>
      <path d="M10 0h1v16h-1zM6 2h1v12H6z" />
    </svg>
  );
}
export const ResizerIcon = forwardRef(ResizerIconBase);

function GotoIconBase(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg {...COMMON_PROPS} ref={ref} {...props}>
      <path d="M9 1v1H2v12h12V7h1v7a1 1 0 0 1-.883.993L14 15H2a1 1 0 0 1-.993-.883L1 14V2a1 1 0 0 1 .883-.993L2 1zm7-1v5h-1V1.706l-4.5 4.501-.707-.707L14.292 1H11V0z" />
    </svg>
  );
}

export const GotoIcon = forwardRef(GotoIconBase);

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

function TickOutlineBase(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) {
  return (
    <svg {...COMMON_PROPS} ref={ref} {...props}>
      <path d="m13.914 4.5-7.707 7.707L2 8l.707-.707 3.5 3.5 7-7z" />
    </svg>
  );
}

export const TickOutline = forwardRef(TickOutlineBase);
