import { type ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { ThemeProvider } from "../ThemeProvider";

type PortalProps = {
  children: ReactNode;
};

export function Portal({ children }: PortalProps) {
  // eslint-disable-next-line react/hook-use-state
  const [container] = useState(() => {
    const el = document.createElement("div");
    el.dataset.sproutPortal = "true";
    return el;
  });

  if (!document.body.contains(container)) {
    document.body.appendChild(container);
  }

  useEffect(() => {
    return () => {
      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
    };
  }, [container]);

  return (
    <ThemeProvider
      onLoad={(dataset) => {
        Object.assign(container.dataset, { ...dataset });
      }}
    >
      {createPortal(children, container)}
    </ThemeProvider>
  );
}
