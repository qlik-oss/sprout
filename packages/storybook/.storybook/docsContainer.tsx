import type { PropsWithChildren } from "react";

import {
  DocsContainer as BaseContainer,
  type DocsContainerProps,
} from "@storybook/addon-docs/blocks";

import { type Mode, getMode } from "./theme";

export function DocsContainer({
  children,
  context,
}: PropsWithChildren<DocsContainerProps>) {
  const backgroundsValue = (context as any)?.store?.userGlobals?.globals
    ?.mode as Mode;

  const theme = getMode(backgroundsValue);

  return (
    <BaseContainer theme={theme} context={context}>
      {children}
    </BaseContainer>
  );
}
