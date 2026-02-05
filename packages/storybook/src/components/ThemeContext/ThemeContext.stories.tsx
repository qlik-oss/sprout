import { useTheme } from "@qlik/sprout-css-react";
import type { StoryObj } from "@storybook/react";

export default {
  title: "Components/ThemeContext",
  component: useTheme,
};

export const UseThemeTouch: StoryObj = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isTouch } = useTheme();
    return <span>{isTouch ? "Touch device" : "Non-touch device"}</span>;
  },
};
