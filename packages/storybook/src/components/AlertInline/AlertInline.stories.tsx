import { fn } from "storybook/test";

import {
  AlertInline,
  type AlertInlineProps,
  Button,
  Link,
  classNames,
} from "@qlik/sprout-react";
import type { StoryObj } from "@storybook/react-vite";

import { AlertInlineArgTypes } from "./AlertInline.argTypes";

type Story = StoryObj<typeof AlertInline>;

export default {
  title: "Components/AlertInline",
  component: AlertInline,
};

export const Playground: Story = {
  render: ({ ...args }: AlertInlineProps) => (
    <div
      className={classNames("flex", "flex-row", "w-xxl")}
      data-testid="wrapper"
    >
      <AlertInline
        {...args}
        actionBar={
          <>
            <Button variant="default" label="Learn more" />
            <Link isExternal>Link</Link>
          </>
        }
      />
    </div>
  ),
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    severity: "info",
    title:
      "Components/Sed sed fermentum lacus. Integer consequat ut arcu non molestie",
    onDismiss: fn(),
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis, tellus laoreet faucibus commodo.",
    layout: "vertical",
  },
  argTypes: AlertInlineArgTypes,
};

export const Minimal = {
  render: ({ severity, ...rest }: Partial<AlertInlineProps>) => (
    <div
      className={classNames("flex", "flex-row", "p-s")}
      style={{ inlineSize: "365px" }}
      data-testid="wrapper"
    >
      <AlertInline severity={severity || "info"} {...rest} />
    </div>
  ),
  args: {
    children: "Licence will expire in 4 days",
  },
  argTypes: AlertInlineArgTypes,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=20351-2534&t=zfp8iCXBhJ5IIKm5-4",
    },
    chromatic: { disableSnapshot: true },
  },
};

function H2({ children }: { children: string }) {
  return (
    <h2 className={classNames("text-default", "font-heading-s")}>{children}</h2>
  );
}

export const VisualTest: Story = {
  render: () => (
    <div className={classNames("flex", "flex-row", "gap-l")}>
      <div
        className={classNames("flex", "flex-col", "gap-m")}
        style={{ inlineSize: 400 }}
      >
        <H2>Error</H2>
        <AlertInline severity="error">
          Password must contain at least one capital letter and one number.
        </AlertInline>
        <H2>Warning</H2>
        <AlertInline severity="warning">
          Payment solution currently unavailable
        </AlertInline>
        <H2>Info</H2>
        <AlertInline severity="info">Licence will expire in 4 days</AlertInline>
        <H2>Success</H2>
        <AlertInline severity="success">Invitation sent</AlertInline>
        <H2>With title</H2>
        <AlertInline title="Invite users">
          Enter eail addresses to invite new users
        </AlertInline>
        <H2>With action</H2>
        <AlertInline
          severity="error"
          title="Connection interrupted"
          actionBar={<Button variant="default" label="Re-connect" />}
        >
          Could not complete request due to lost connection
        </AlertInline>
        <AlertInline
          layout="horizontal"
          severity="error"
          onDismiss={fn()}
          actionBar={
            <>
              <Button variant="default" label="Action" />
              <Link href="#" isExternal>
                Label
              </Link>
            </>
          }
        >
          Password must contain at least one capital letter and one number.
        </AlertInline>
        <H2>Is dismissable</H2>
        <AlertInline
          severity="info"
          title="New beta features"
          actionBar={<Button variant="default" label="Learn more" />}
          onDismiss={fn()}
        >
          Try out new beta features
        </AlertInline>
        <AlertInline
          severity="success"
          layout="horizontal"
          actionBar={<Button variant="default" label="View details" />}
          onDismiss={fn()}
        >
          Changes saved
        </AlertInline>
        <AlertInline severity="warning" onDismiss={fn()}>
          Consider a stronger password
        </AlertInline>
        <H2>Text wrapping</H2>
        <AlertInline
          severity="info"
          title="Sed sed fermentum lacus. Integer consequat ut arcu non molestie"
          actionBar={<Button variant="default" label="Learn more" />}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          venenatis, tellus laoreet faucibus commodo.
        </AlertInline>
        <AlertInline
          severity="info"
          title="TestOverflowWithOnlyOneBigWordThatShouldBeMoreThanParentContainerAndShouldWrap"
          actionBar={<Button variant="default" label="Learn more" />}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          venenatis, tellus laoreet faucibus commodo.
        </AlertInline>
        <AlertInline
          severity="info"
          title="Sed sed fermentum lacus. Integer consequat ut arcu non molestie"
          actionBar={<Button variant="default" label="Learn more" />}
        >
          TestOverflowWithOnlyOneBigWordThatShouldBeMoreThanParentContainerAndShouldWrap
        </AlertInline>
      </div>

      <div className={classNames("flex", "flex-col", "gap-m")}>
        <div className={classNames("flex", "flex-col", "gap-m")}>
          <H2>Layout</H2>
          <AlertInline
            title="Horizontal"
            severity="info"
            layout="horizontal"
            actionBar={
              <>
                <Button variant="default" label="Learn more" />
                <Link isExternal>Link</Link>
              </>
            }
            onDismiss={fn()}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </AlertInline>
          <AlertInline
            severity="info"
            layout="horizontal"
            actionBar={
              <>
                <Button variant="default" label="Learn more" />
                <Link isExternal>Link</Link>
              </>
            }
            onDismiss={fn()}
          >
            <i>Horizontal without title.</i> Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </AlertInline>
          <AlertInline
            severity="info"
            layout="horizontal"
            actionBar={
              <>
                <Button variant="default" label="Learn more" />
                <Link isExternal>Link</Link>
              </>
            }
            onDismiss={fn()}
          >
            <i>Horizontal without title and a really long message.</i> Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
            fugit odit pariatur obcaecati. Totam tenetur blanditiis itaque
            repellat minima quibusdam, sint quasi mollitia! Quibusdam hic odio
            et amet, aperiam delectus!
          </AlertInline>

          <AlertInline
            title="Vertical"
            severity="info"
            layout="vertical"
            actionBar={
              <>
                <Button variant="default" label="Learn more" />
                <Link isExternal>Link</Link>
              </>
            }
            onDismiss={fn()}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </AlertInline>
          <AlertInline
            severity="info"
            actionBar={
              <>
                <Button variant="default" label="Learn more" />
                <Link isExternal>Link</Link>
              </>
            }
            onDismiss={fn()}
          >
            <i>Vertical without title.</i> Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </AlertInline>
          <AlertInline
            severity="info"
            actionBar={
              <>
                <Button variant="default" label="Learn more" />
                <Link isExternal>Link</Link>
              </>
            }
            onDismiss={fn()}
          >
            <i>Vertical without title and a really long message.</i> Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Quasi deleniti eos
            libero voluptas fuga, repudiandae eius illum facere suscipit odit
            voluptate. Obcaecati consequatur commodi aliquid soluta sed
            repellat, modi aperiam corrupti omnis ea, ratione corporis culpa
            reprehenderit cupiditate laboriosam? Ab!
          </AlertInline>
        </div>
        <div className={classNames("flex", "flex-col", "gap-m")}>
          <H2>Custom content</H2>
          <AlertInline title="Explore" severity="info">
            <p>
              This feed is populated with Insights based on the available
              Categories. A Category groups Metrics together from which Insights
              can be found and appear here.
            </p>
            <ul>
              <li>
                To change what you see, click Categories and choose from what is
                available.
              </li>
              <li>
                To keep track of an Insight, click to “Follow” it. Any future
                insights will now also appear in the Following feed.
              </li>
              <li>
                To see the source of an Insight, click on the ... menu and then
                “Open source”
              </li>
            </ul>
          </AlertInline>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};
