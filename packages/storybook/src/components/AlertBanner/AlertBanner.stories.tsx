import { fn } from "storybook/test";

import { AlertBanner, type AlertBannerProps, Button, Link, classNames } from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { AlertBannerArgTypes } from "./AlertBanner.argTypes";

type Story = StoryObj<typeof AlertBanner>;

const meta: Meta = {
  title: "Components/AlertBanner",
  component: AlertBanner,
  parameters: {},
};

export default meta;

const onClickAction = fn();

export const Playground: Story = {
  render: ({ ...props }) => (
    <div className={classNames("flex", "flex-col", "p-m", "w-s")} data-testid="wrapper">
      <AlertBanner {...props} action={<Button variant="quiet" label="Action" onClick={onClickAction} />} />
    </div>
  ),

  args: {
    content: "Alert content",
    variant: "info",
    onClickDismiss: fn(),
  },
  argTypes: AlertBannerArgTypes,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

const defaultProps: AlertBannerProps = {
  content: "Alert content",
  action: <Button variant="quiet" label="Action" onClick={fn()} />,
  onClickDismiss: fn(),
};

export const VisualTest: Story = {
  render: () => (
    <div
      className={classNames("flex", "flex-col", "p-m", "gap-m")}
      style={{ maxInlineSize: 500 }}
      data-testid="wrapper"
    >
      <p className={classNames("text-default", "font-body-m")}>Content default:</p>
      <AlertBanner
        {...defaultProps}
        variant="info"
        link={
          <Link href="#" isExternal font="body_s">
            Link
          </Link>
        }
      />
      <AlertBanner {...defaultProps} variant="success" />
      <AlertBanner {...defaultProps} variant="warning" />
      <AlertBanner {...defaultProps} variant="error" />

      <p className={classNames("text-default", "font-body-m")}>Content centered `justify="center"`:</p>
      <AlertBanner
        {...defaultProps}
        justify="center"
        variant="info"
        link={
          <Link href="#" isExternal font="body_s">
            Link
          </Link>
        }
      />
      <AlertBanner {...defaultProps} justify="center" variant="success" />
      <AlertBanner {...defaultProps} justify="center" variant="warning" />
      <AlertBanner {...defaultProps} justify="center" variant="error" />
      <p className={classNames("text-default", "font-body-m")}>Without action and link:</p>
      <AlertBanner
        content={defaultProps.content}
        justify="center"
        variant="info"
        onClickDismiss={defaultProps.onClickDismiss}
      />
      <AlertBanner
        content={defaultProps.content}
        justify="center"
        variant="success"
        onClickDismiss={defaultProps.onClickDismiss}
      />
      <AlertBanner content={defaultProps.content} variant="warning" onClickDismiss={defaultProps.onClickDismiss} />
      <AlertBanner content={defaultProps.content} variant="error" onClickDismiss={defaultProps.onClickDismiss} />

      <p className={classNames("text-default", "font-body-m")}>Custom content:</p>
      <AlertBanner
        variant="info"
        onClickDismiss={defaultProps.onClickDismiss}
        link={
          <Link href="#" isExternal font="body_s">
            Link
          </Link>
        }
        content="This content is passed as a `string`, but it can also be provided as a React node. In this example, the text is intentionally made really long to demonstrate how the component handles overflow."
      />

      <AlertBanner
        variant="success"
        onClickDismiss={defaultProps.onClickDismiss}
        content="This is a success banner using a longer `string` to show how text overflow is managed. When the content exceeds the available space, it will be truncated with an ellipsis, giving a visual cue without hiding the fact that more information exists."
      />
      <AlertBanner
        variant="warning"
        justify="center"
        link={
          <Link href="#" isExternal font="body_s">
            Link
          </Link>
        }
        content={
          <div className={classNames("flex", "flex-col", "gap-s")}>
            <p className={classNames("text-default", "font-body-s", "m-0")}>
              This is an example of passing a <strong>React node</strong> instead of just a <code>string</code>.
            </p>
            <p className={classNames("text-default", "font-body-s", "m-0")}>
              The banner will handle this and by default, a maximum height of 3 rows of text is applied to keep the
              layout consistent and visually balanced.
            </p>
            <p className={classNames("text-default", "font-body-s", "m-0")}>
              However, we recommend following the guidelines and preferring plain strings when possible to keep content
              consistent across the design system.
            </p>
          </div>
        }
      />
      <AlertBanner
        variant="error"
        justify="center"
        action={defaultProps.action}
        content={
          <div className={classNames("flex", "flex-col", "gap-s")}>
            <p className={classNames("text-default", "font-body-s", "m-0")}>
              This is an error banner using <strong>React node</strong> content.
            </p>
            <p className={classNames("text-default", "font-body-s", "m-0")}>
              The same rules apply here: by default the maximum height is limited to 3 rows, so the layout stays
              predictable.
            </p>
            <p className={classNames("text-default", "font-body-s", "m-0")}>
              Whenever possible, prefer plain string content to maintain design system consistency across all alert
              banners.
            </p>
          </div>
        }
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};
