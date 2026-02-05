// DocsContainer.tsx

import { DocsContainer as BaseContainer, type DocsContainerProps } from "@storybook/addon-docs/blocks";
import { type FC, type PropsWithChildren, useEffect, useState } from "react";

import { addons } from "storybook/preview-api";
import { themes } from "storybook/theming";

const channel = addons.getChannel();

export const DocsContainer: FC<PropsWithChildren<DocsContainerProps>> = ({ children, context }) => {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    channel.on("DARK_MODE", setDark); // import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
    return () => channel.off("DARK_MODE", setDark);
  }, [channel]);

  return (
    <BaseContainer theme={isDark ? themes.dark : themes.light} context={context}>
      {children}
    </BaseContainer>
  );
};
