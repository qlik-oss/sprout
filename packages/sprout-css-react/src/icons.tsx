import { type Ref, type SVGProps, forwardRef } from "react";

function DropdownArrowBase(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      height="16px"
      fill="currentColor"
      aria-hidden="true"
      role="img"
      ref={ref}
      {...props}
    >
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
  return <svg />;
}
export const DirectionLeftIcon = forwardRef(DirectionLeftIconBase);

function ResizerIconBase(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) {
  return <svg />;
}
export const ResizerIcon = forwardRef(ResizerIconBase);

function GotoIconBase(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return <svg />;
}

export const GotoIcon = forwardRef(GotoIconBase);
function SliderIconBase(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) {
  return <svg />;
}

export const SliderIcon = forwardRef(SliderIconBase);

function TickOutlineBase(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) {
  return <svg />;
}

export const TickOutline = forwardRef(TickOutlineBase);
