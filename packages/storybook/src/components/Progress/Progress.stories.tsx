import {
  ProgressBar,
  ProgressCircular,
  classNames,
} from "@qlik/sprout-css-react";
import type { StoryObj } from "@storybook/react";

import {
  ProgressBarArgTypes,
  ProgressCircularArgTypes,
} from "./Progress.argTypes";

export default {
  title: "Components/Progress",
};

type ProgressBarStory = StoryObj<typeof ProgressBar>;
type ProgressCircularStory = StoryObj<typeof ProgressCircular>;

export const PlaygroundProgressBar: ProgressBarStory = {
  render: (props) => (
    <div className={classNames("flex", "border-box", "p-3xl")}>
      <ProgressBar {...props} />
    </div>
  ),
  argTypes: ProgressBarArgTypes,
  args: {
    percent: 50,
    "aria-label": "Wait for the end",
  },
  parameters: {
    control: { disable: true },
  },
};

export const PlaygroundProgressCircular: ProgressCircularStory = {
  render: (props) => (
    <div
      className={classNames("flex", "flex-row", "border-box", "w-fit", "p-s")}
    >
      <ProgressCircular {...props} />
    </div>
  ),
  args: {
    size: "m",
    variant: "default",
  },
  argTypes: ProgressCircularArgTypes,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const VisualTestProgressBar = {
  render: () => (
    <div className={classNames("flex", "border-box")}>
      <ProgressBar percent={50} aria-label="Wait for the end" />
      <h2 className={classNames("font-heading-m", "text-default")}>
        Contained
      </h2>
      <div
        className={classNames(
          "flex",
          "border-box",
          "gap-l",
          "p-xl",
          "w-m",
          "border-default",
        )}
      >
        <h3 className={classNames("font-heading-m", "text-default")}>
          aria-label
        </h3>
        <ProgressBar
          contained
          percent={75}
          aria-label="Loading in progress 75% !"
        />
        <h3 className={classNames("font-heading-m", "text-default")}>label</h3>
        <ProgressBar contained percent={75} label="Loading in progress 75% !" />
        <h3 className={classNames("font-heading-m", "text-default")}>
          tooltip
        </h3>
        <ProgressBar
          contained
          percent={75}
          tooltip="Loading in progress 75% !"
        />
        <h3 className={classNames("font-heading-m", "text-default")}>
          Undetermined
        </h3>
        <ProgressBar
          contained
          aria-label="Please wait until the current task is done"
        />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const VisualTestCircular = {
  render: () => (
    <div className={classNames("flex", "border-box")}>
      <div className={classNames("flex", "border-box", "gap-m")}>
        <div
          className={classNames(
            "flex",
            "flex-row",
            "border-box",
            "items-center",
            "gap-m",
          )}
        >
          <span className={classNames("font-body-s", "text-default")}>
            size=&quot;s&quot;
          </span>
          <ProgressCircular size="s" />
        </div>
        <div
          className={classNames(
            "flex",
            "flex-row",
            "border-box",
            "items-center",
            "gap-m",
          )}
        >
          <span className={classNames("font-body-s", "text-default")}>
            size=&quot;m&quot;
          </span>
          <ProgressCircular size="m" />
        </div>
        <div
          className={classNames(
            "flex",
            "flex-row",
            "border-box",
            "items-center",
            "gap-m",
          )}
        >
          <span className={classNames("font-body-s", "text-default")}>
            size=&quot;l&quot;
          </span>
          <ProgressCircular size="l" />
        </div>

        <div
          className={classNames(
            "flex",
            "flex-row",
            "border-box",
            "items-center",
            "gap-m",
          )}
        >
          <span className={classNames("font-body-s", "text-default")}>
            variant=&quot;destructive&quot;
          </span>
          <ProgressCircular size="m" variant="destructive" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};
