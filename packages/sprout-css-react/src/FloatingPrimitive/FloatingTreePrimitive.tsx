import { type Ref, forwardRef } from "react";

import { FloatingTree } from "@floating-ui/react";

import {
  FloatingPrimitive,
  type FloatingPrimitiveProps,
} from "./FloatingPrimitive";
import { useFloatingContext } from "./FloatingPrimitiveContext";

export type FloatingTreePrimitiveProps = Omit<
  FloatingPrimitiveProps,
  "tree"
> & { onCloseAll?: () => void };

export const FloatingTreePrimitive = forwardRef<
  HTMLDivElement,
  FloatingTreePrimitiveProps
>(FloatingTreePrimitiveBase);

function FloatingTreePrimitiveBase(
  { onCloseAll, ...props }: FloatingTreePrimitiveProps,
  ref?: Ref<HTMLDivElement>,
) {
  const context = useFloatingContext({ tree: true, onCloseAll });
  if (context.Provider) {
    return (
      <FloatingTree>
        <context.Provider value={context}>
          <FloatingPrimitive tree {...props} ref={ref} />
        </context.Provider>
      </FloatingTree>
    );
  }
  return <FloatingPrimitive tree {...props} />;
}

FloatingTreePrimitiveBase.displayName = "FloatingTreePrimitive";
