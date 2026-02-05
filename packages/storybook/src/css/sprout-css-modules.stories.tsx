import sprout, { type AllClasses } from "@qlik/sprout-css-modules";
import type { StoryObj } from "@storybook/react-vite";

export default {
  title: "CSS/sprout-css-modules",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { classNames, ...rest } = sprout;

export const Playground: StoryObj<{ classNames: Array<AllClasses> }> = {
  name: "classNames",
  // eslint-disable-next-line @typescript-eslint/no-shadow
  render: ({ classNames }) => (
    <div className={sprout.classNames("flex", "border-default")}>
      <div className={sprout.classNames(...classNames)}>Hello world</div>
    </div>
  ),
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    classNames: ["flex", "border-box", "p-xl"],
  },
  argTypes: {
    classNames: {
      control: {
        type: "object",
      },
    },
  },
};
