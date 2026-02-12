import { fn } from "storybook/test";

import sprout from "@qlik/sprout-css-modules";
import { IconButton } from "@qlik/sprout-react";
import Copy from "@qlik/sprout-icons/react/Copy";
import Paste from "@qlik/sprout-icons/react/Paste";
import type { StoryObj } from "@storybook/react";

export default {
  title: "CSS/sprout-css-modules/patterns",
};

export const ProgressiveDisclosure: StoryObj<{ onClick: () => void }> = {
  name: "disclosure-target / disclosure-trigger",
  parameters: {
    controls: { disable: true },
    chromatic: { disableSnapshot: true },
  },
  args: {
    onClick: fn(),
  },
  render: (props) => (
    <div
      className={sprout.classNames(
        "disclosure-trigger",
        "focusable-target",
        "flex",
        "flex-row",
        "items-center",
        "justify-between",
        "border-default",
        "p-xs",
        "w-m",
        "bg-interactive",
      )}
    >
      <button
        type="button"
        {...props}
        aria-label="label of the main action"
        className={sprout.classNames("focusable-trigger")}
      />
      <p>disclosure-target</p>
      <div
        className={sprout.classNames(
          "disclosure-target",
          "flex",
          "flex-row",
          "gap-s",
        )}
      >
        <IconButton label="Copy" icon={<Copy height={undefined} />} />
        <IconButton label="Paste" icon={<Paste height={undefined} />} />
      </div>
    </div>
  ),
};

export const FocusableTarget: StoryObj<{ onClick: () => void }> = {
  name: "focusable-target / focusable-trigger",
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    onClick: fn(),
  },
  render: (props) => (
    <div
      className={sprout.classNames(
        "flex",
        "flex-col",
        "items-start",
        "justify-start",
        "border-default",
        "p-xs",
        "w-m",
        "bg-interactive",
        "focusable-target",
      )}
    >
      <button
        type="button"
        aria-label="label of the main action"
        {...props}
        className={sprout.classNames("focusable-trigger")}
      />
      <p>
        <code>focusable-target</code> goes in the parent, the container you want
        to take focus
      </p>
      <p>
        <code>focusable-trigger</code> goes to either a <code>button</code> or a{" "}
        <code>a</code>
        that will receive focus and provide the interaction
      </p>
    </div>
  ),
};
