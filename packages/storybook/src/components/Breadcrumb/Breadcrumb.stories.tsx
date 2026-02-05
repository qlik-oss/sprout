import { Breadcrumb, BreadcrumbItem, Button, Link, classNames } from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { BreadcrumbArgTypes } from "./Breadcrumb.argTypes";

type Story = StoryObj<typeof Breadcrumb>;

const meta: Meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {},
  argTypes: BreadcrumbArgTypes,
};

export default meta;

export const Basic: Story = {
  render: (args) => (
    <Breadcrumb
      {...args}
      items={[
        {
          children: "Root",
          href: "/",
        },
        {
          children: "Folder",
          href: "/folder",
        },
        {
          children: "Page",
          href: "/page",
        },
      ]}
    />
  ),

  parameters: { chromatic: { disableSnapshot: true } },
};

export const Composition: Story = {
  render: () => (
    <Breadcrumb label="composition breadcrum">
      <BreadcrumbItem>
        <Link href="/">Home</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href="/folder">Folder</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href="/folder/mypage" aria-current="page" disabled>
          current page
        </Link>
      </BreadcrumbItem>
    </Breadcrumb>
  ),

  parameters: { chromatic: { disableSnapshot: true } },
};

export const VisualTest: Story = {
  render: () => (
    <div className={classNames("flex", "flex-col", "gap-xl")}>
      <Breadcrumb label="composition breadcrum">
        <BreadcrumbItem>
          <Link href="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/folder">Folder</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/folder/mypage" aria-current="page" disabled>
            current page
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb
        items={[
          {
            children: "Root",
            href: "/",
          },
          {
            children: "Folder",
            href: "/folder",
          },
          {
            children: "Page",
            href: "/page",
          },
        ]}
      />
      <div className={classNames("flex", "flex-col", "border-default", "p-m", "w-fit")}>
        <h2 className={classNames("text-default", "font-heading-s")}>Composition using buttons (not accessible)</h2>
        <Breadcrumb label="Composition breadcrumb">
          <BreadcrumbItem>
            <Button variant="quiet" label="Foo" />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button variant="quiet" label="Bar" />
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};
