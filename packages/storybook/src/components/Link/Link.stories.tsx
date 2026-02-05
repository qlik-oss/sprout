import { Link, Tooltip, classNames } from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { LinkArgTypes } from "./Link.argTypes";

type Story = StoryObj<typeof Link>;

const meta: Meta = {
  title: "Components/Link",
  component: Link,
  parameters: {},
};

export default meta;

const disableSnap = { chromatic: { disableSnapshot: true } };

export const Playground: Story = {
  render: (args) => (
    <div data-testid="wrapper" className={classNames("flex", "flex-row", "border-box", "w-fit", "p-s")}>
      <h2 className={classNames("font-heading-m", "text-default")}>
        H2 title <Link {...args} />
      </h2>
    </div>
  ),
  args: {
    children: "Link",
    href: "#",
    font: "heading_m",
  },
  argTypes: LinkArgTypes,

  parameters: disableSnap,
};

export const VisualTest: Story = {
  render: () => (
    <div className={classNames("flex", "border-box", "gap-l", "flex-col")}>
      <div className={classNames("flex", "flex-row", "gap-xl")}>
        <div className={classNames("flex", "flex-row", "gap-l")}>
          <div className={classNames("flex", "flex-col", "items-start", "p-s", "gap-s", "border-default")}>
            <Link href="/" font="body_xs">
              Default link
            </Link>
            <Link isExternal href="/" font="body_xs">
              Default link
            </Link>
            <Link href="/" font="body_xs" data-state="hover">
              Hovered link
            </Link>
            <Link href="/" font="body_xs" data-state="focusVisible">
              Focus Visible link
            </Link>
            <Link href="/" font="body_xs" disabled>
              Disabled link
            </Link>
          </div>
          <div className={classNames("flex", "flex-col", "items-start", "p-s", "gap-s", "border-default")}>
            <Link href="/" font="body_s">
              Default link
            </Link>
            <Link isExternal href="/" font="body_s">
              Default link
            </Link>
            <Link href="/" font="body_s" data-state="hover">
              Hovered link
            </Link>
            <Link href="/" font="body_s" data-state="focusVisible">
              Focus Visible link
            </Link>
            <Link href="/" font="body_s" disabled>
              Disabled link
            </Link>
          </div>
          <div className={classNames("flex", "flex-col", "items-start", "p-s", "gap-s", "border-default")}>
            <Link href="/" font="body_m">
              Default link
            </Link>
            <Link isExternal href="/" font="body_m">
              Default link
            </Link>
            <Link href="/" font="body_m" data-state="hover">
              Hovered link
            </Link>
            <Link href="/" font="body_m" data-state="focusVisible">
              Focus Visible link
            </Link>
            <Link href="/" font="body_m" disabled>
              Disabled link
            </Link>
          </div>
          <div className={classNames("flex", "flex-col", "items-start", "p-s", "gap-s", "border-default")}>
            <Link href="/" font="body_l">
              Default link
            </Link>
            <Link isExternal href="/" font="body_l">
              Default link
            </Link>
            <Link href="/" font="body_l" data-state="hover">
              Hovered link
            </Link>
            <Link href="/" font="body_l" data-state="focusVisible">
              Focus Visible link
            </Link>
            <Link href="/" font="body_l" disabled>
              Disabled link
            </Link>
          </div>
          <div className={classNames("flex", "flex-col", "items-start", "p-s", "gap-s", "border-default")}>
            <Link href="/" font="body_xl">
              Default link
            </Link>
            <Link isExternal href="/" font="body_xl">
              Default link
            </Link>
            <Link href="/" font="body_xl" data-state="hover">
              Hovered link
            </Link>
            <Link href="/" font="body_xl" data-state="focusVisible">
              Focus Visible link
            </Link>
            <Link href="/" font="body_xl" disabled>
              Disabled link
            </Link>
          </div>
          <div className={classNames("flex", "flex-col", "items-start", "p-s", "gap-s", "border-default")}>
            <Link href="/" font="body_xxl">
              Default link
            </Link>
            <Link isExternal href="/" font="body_xxl">
              Default link
            </Link>
            <Link href="/" font="body_xxl" data-state="hover">
              Hovered link
            </Link>
            <Link href="/" font="body_xxl" data-state="focusVisible">
              Focus Visible link
            </Link>
            <Link href="/" font="body_xxl" disabled>
              Disabled link
            </Link>
          </div>
        </div>
      </div>
      <div className={classNames("flex", "flex-row", "gap-xl")}>
        <div
          className={classNames("flex", "flex-col", "items-start", "p-s", "gap-s", "border-default", "text-default")}
          style={{ inlineSize: "210px" }}
        >
          <Link href="https://www.qlik.com/" isExternal>
            External link
          </Link>
          <Link href="https://www.qlik.com/" isExternal data-state="hover">
            External link hovered
          </Link>
          <Link href="https://www.qlik.com/" isExternal data-state="focusVisible">
            External link focus
          </Link>
          <Link href="https://www.qlik.com/" isExternal disabled>
            External link disabled
          </Link>
          <span className={classNames("font-body-s")}>
            Click{" "}
            <Link href="https://www.qlik.com/" font="inherit" isExternal>
              External link
            </Link>
          </span>
          <span className={classNames("font-body-l")}>
            Click{" "}
            <Link href="https://www.qlik.com/" font="inherit" isExternal>
              External link
            </Link>
          </span>
          <span className={classNames("font-label-s")}>
            Click{" "}
            <Link href="https://www.qlik.com/" font="inherit" isExternal>
              External link
            </Link>
          </span>
        </div>
        <div
          className={classNames("flex", "flex-col", "items-start", "p-s", "gap-s", "border-default", "text-default")}
          style={{ inlineSize: "210px" }}
        >
          <Link href="#">Without ellipsis if too long you will not see ellipsis</Link>
          <Link href="#" withEllipsis>
            With ellipsis if too long you will see ellipsis
          </Link>
          <Link href="#" isExternal>
            Without ellipsis and isExternal if too long you will not see ellipsis but the icon
          </Link>
          <Link href="#" withEllipsis isExternal>
            With ellipsis and isExternal too long you will see ellipsis
          </Link>
          <Tooltip title="Tooltip content" placement="right" initialOpen>
            <Link href="#">With tooltip</Link>
          </Tooltip>
          <div className={classNames("p-xl", "border-default", "flex-col")}>
            <Link href="#">With a Box col</Link>
          </div>
          <span className={classNames("font-body-s")} style={{ whiteSpace: "nowrap" }}>
            with a{" "}
            <Link font="body_s" href="#">
              span
            </Link>
          </span>
          <p className={classNames("font-body-m")}>
            With a{" "}
            <Link href="#" font="body_m">
              paragraph
            </Link>
          </p>
          <h2 className={classNames("font-heading-m")}>
            With a{" "}
            <Link font="heading_m" href="#">
              title
            </Link>
          </h2>
          <div className={classNames("flex", "flex-row", "p-s", "border-default", "items-center", "w-full")}>
            <span className={classNames("font-body-m")} style={{ whiteSpace: "nowrap" }}>
              Inline link:{" "}
            </span>
            <Link href="#" withEllipsis isExternal>
              withEllipsis and isExternal
            </Link>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    pseudo: {
      hover: '[data-state="hover"]',
      focusVisible: '[data-state="focusVisible"]',
    },
  },
};
