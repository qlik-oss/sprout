import { forwardRef, type Ref, type SVGProps } from "react";

function DescedingIconBase(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return <svg {...props} ref={ref} />;
}
export const DescendingIcon = forwardRef(DescedingIconBase);
