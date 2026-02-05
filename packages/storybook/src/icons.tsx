import { type Ref, type SVGProps, forwardRef } from "react";

const COMMON_PROPS: Partial<SVGProps<SVGSVGElement>> = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  height: "16px",
  fill: "currentColor",
  "aria-hidden": true,
  role: "img",
};

function DropdownArrowBase(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg {...COMMON_PROPS} ref={ref} {...props}>
      <path d="m7.999 9.001-2.858-2.86a.2.2 0 0 0-.282 0l-.718.719a.2.2 0 0 0 0 .282L7 10.001l.859.858a.2.2 0 0 0 .282 0L9 10l2.859-2.859a.2.2 0 0 0 0-.282l-.718-.718a.2.2 0 0 0-.283 0L8 9Z" />
    </svg>
  );
}
const DropdownArrow = forwardRef(DropdownArrowBase);
export { DropdownArrow };

function LogoutIconBase(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg {...COMMON_PROPS} ref={ref} {...props}>
      <path d="" />
    </svg>
  );
}

export const LogoutIcon = forwardRef(LogoutIconBase);

function PersonIconBase(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg {...COMMON_PROPS} ref={ref} {...props}>
      <path d="" />
    </svg>
  );
}

export const PersonIcon = forwardRef(PersonIconBase);

function CogwhellIconBase(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg {...COMMON_PROPS} ref={ref} {...props}>
      <path d="" />
    </svg>
  );
}

export const CogwhellIcon = forwardRef(CogwhellIconBase);

function ArrowLeftIconBase(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg {...COMMON_PROPS} ref={ref} {...props}>
      <path d="" />
    </svg>
  );
}

export const ArrowLeftIcon = forwardRef(ArrowLeftIconBase);

function ArrowRightIconBase(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg {...COMMON_PROPS} ref={ref} {...props}>
      <path d="" />
    </svg>
  );
}

export const ArrowRightIcon = forwardRef(ArrowRightIconBase);

function PaletteOutlineIconBase(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg {...COMMON_PROPS} ref={ref} {...props}>
      <path d="" />
    </svg>
  );
}

export const PaletteOutlineIcon = forwardRef(PaletteOutlineIconBase);
