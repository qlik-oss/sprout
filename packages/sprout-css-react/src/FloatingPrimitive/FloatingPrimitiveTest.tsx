import { useEffect, useRef, useState } from "react";

import { Button } from "../Button";
import { classNames } from "../classNames";
import {
  FloatingPrimitive,
  type FloatingPrimitiveProps,
} from "./FloatingPrimitive";

export function FloatingPrimitiveAnchorEl({
  wrapBtn,
  open,
  onOpenChange,
  ...props
}: FloatingPrimitiveProps & { wrapBtn?: boolean }) {
  const [safeOpen, setSafeOpen] = useState(false);
  useEffect(() => {
    setSafeOpen(!!open);
  }, [open]);
  const ref = useRef<HTMLButtonElement | null>(null);
  let btn = (
    <button
      ref={ref}
      type="button"
      onClick={() => {
        setSafeOpen(true);
      }}
    >
      Click me
    </button>
  );
  // create a corner case to test if ref update works
  if (wrapBtn) {
    btn = (
      <div style={{ inlineSize: 100, blockSize: 100, padding: 20 }}>{btn}</div>
    );
  }
  return (
    <div>
      {btn}
      <FloatingPrimitive
        // eslint-disable-next-line react-hooks/refs
        anchorEl={ref.current || undefined}
        open={safeOpen}
        onOpenChange={(value) => {
          if (onOpenChange) {
            onOpenChange(value);
          }
          if (!value) {
            setSafeOpen(false);
          }
        }}
        {...props}
      />
    </div>
  );
}

export function MultipleFloatingPrimites({
  disableScrollLock,
  hideBackdrop,
}: Pick<FloatingPrimitiveProps, "disableScrollLock" | "hideBackdrop">) {
  return (
    <div className={classNames("flex", "gap-3xl")}>
      <FloatingPrimitive
        disableScrollLock={disableScrollLock}
        hideBackdrop={hideBackdrop}
        initialOpen
        content="Alpha"
        data-testid="fp-1"
      >
        <Button label="Open Alpha" />
      </FloatingPrimitive>
      <FloatingPrimitive
        disableScrollLock={disableScrollLock}
        hideBackdrop={hideBackdrop}
        initialOpen
        content="Beta"
        data-testid="fp-2"
      >
        <Button label="Open Beta" />
      </FloatingPrimitive>
      <FloatingPrimitive
        disableScrollLock={disableScrollLock}
        hideBackdrop={hideBackdrop}
        initialOpen
        content="Gamma"
        data-testid="fp-3"
      >
        <Button label="Open Gamma" />
      </FloatingPrimitive>
      <FloatingPrimitive
        disableScrollLock={disableScrollLock}
        hideBackdrop={hideBackdrop}
        initialOpen
        content="Delta"
        data-testid="fp-4"
      >
        <Button label="Open Delta" />
      </FloatingPrimitive>
    </div>
  );
}
