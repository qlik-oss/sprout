/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

type UseOpenControlProps = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean, ...args: any) => void;
};

type UseOpenControlReturns = {
  open?: boolean;
  onOpenChange?: (open: boolean, ...args: any) => void;
};

/**
 * useOpenControl is a simplified version of useControl
 * that is specifically designed for open and onOpenChange
 * handling for `FloatingPrimitive.tsx` and `Tooltip.tsx`. This is for internal * use only.
 */
export function useOpenControl({
  defaultOpen,
  onOpenChange,
  open: externalOpen,
}: UseOpenControlProps): UseOpenControlReturns {
  const isControlled = typeof externalOpen !== "undefined";
  const [internalOpen, setInternalOpen] = useState(defaultOpen ?? false);

  const handleOpenChange = (newOpen: boolean, ...args: any) => {
    if (typeof onOpenChange === "function") {
      onOpenChange(newOpen, ...args);
    }

    if (!isControlled) {
      setInternalOpen(newOpen);
    }
  };

  // controlled
  if (isControlled) {
    return {
      open: externalOpen,
      onOpenChange,
    };
  }

  // uncontrolled
  return {
    open: internalOpen,
    onOpenChange: handleOpenChange,
  };
}
