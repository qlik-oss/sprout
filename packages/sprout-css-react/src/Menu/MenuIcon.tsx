import type { SVGAttributes } from "react";

export function ChevronRight(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="icons/outline/chevron_right">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.58578 8.00004L4.43933 2.85359L5.14644 2.14648L11 8.00004L5.14644 13.8536L4.43933 13.1465L9.58578 8.00004Z"
        />
      </g>
    </svg>
  );
}

ChevronRight.displayName = "MenuIcon.ChevronRight";
