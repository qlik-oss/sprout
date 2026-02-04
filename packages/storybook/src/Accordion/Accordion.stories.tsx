// eslint-disable-next-line @typescript-eslint/no-redeclare
import type { MouseEvent } from "react";

import {
  Accordion,
  type AccordionProps,
  Button,
  IconButton,
  Menu,
  TextField,
  classNames,
} from "@qlik/sprout-css-react";
import BookOutline from "@qlik/sprout-icons/react/BookOutline";
import MoreVertical from "@qlik/sprout-icons/react/MoreVertical";
import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  AccordionContainerArgTypes,
  AccordionItemArgTypes,
} from "./Accordion.argTypes";

export default {
  component: Accordion.Item,
  title: "Components/Accordion",
} as Meta;

function SampleParagraph() {
  return (
    <>
      <p className={classNames("text-default", "font-body-s")}>
        Quisque efficitur, magna sit amet tempor malesuada, orci mauris
        vestibulum enim, quis gravida est urna et ipsum. Nunc rutrum, magna id
        fermentum dignissim, magna sem volutpat risus, ut ultrices ipsum lacus
        vitae sapien. Curabitur sodales risus ac nibh efficitur, dapibus posuere
        ipsum bibendum. Proin erat ipsum, tempus in aliquet sed, auctor id sem.
        Maecenas ultrices, magna vitae pretium condimentum, ipsum lectus
        hendrerit est, a ultrices lacus odio in mi. Phasellus accumsan diam in
        metus dictum ultrices. In hac habitasse platea dictumst. Curabitur
        vestibulum vitae libero sit amet blandit. Nulla bibendum sollicitudin
        dolor at vehicula. Morbi quis viverra velit, eget ornare velit. Praesent
        porttitor sagittis nulla non vehicula. u
      </p>
      <Button variant="primary" label="ButtonLabel" onClick={() => {}} />
      <TextField label="textfield" defaultValue="one two three" />
    </>
  );
}

export const ItemPlayground: StoryObj<AccordionProps["Item"]> = {
  render: (props) => {
    const mappedProps = {
      ...props,
      affix:
        props.affix === "IconButton" ? (
          <IconButton
            variant="quiet"
            size="small"
            aria-label="More actions"
            icon={<MoreVertical height={undefined} />}
          />
        ) : (
          props.affix
        ),
    };

    return (
      <Accordion.Item {...mappedProps}>
        <SampleParagraph />
      </Accordion.Item>
    );
  },
  args: {
    id: "simple-panel",
    header: "simple panel",
    renderContent: false,
    variant: "default",
  },
  argTypes: AccordionItemArgTypes,

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const ContainerPlayground: StoryObj<AccordionProps["Container"]> = {
  render: (props) => (
    <Accordion.Container {...props}>
      <Accordion.Item id="panel-a" header="first panel">
        <SampleParagraph />
      </Accordion.Item>
      <Accordion.Item id="panel-b" header="second panel">
        <SampleParagraph />
      </Accordion.Item>
      <Accordion.Item id="panel-c" header="third panel">
        <SampleParagraph />
      </Accordion.Item>
    </Accordion.Container>
  ),
  args: {
    openedDefault: 0,
    renderContent: true,
    variant: "default",
    behavior: "linked",
  },
  argTypes: AccordionContainerArgTypes,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const AccordionItemLoopPlayground: StoryObj<
  AccordionProps["Container"]
> = {
  render: (props) => (
    <Accordion.Container {...props}>
      {["a", "b", "c"].map((panelId) => (
        <Accordion.Item
          key={`panel-${panelId}`}
          id={`panel-${panelId}`}
          header={`panel ${panelId}`}
        >
          <SampleParagraph />
        </Accordion.Item>
      ))}
    </Accordion.Container>
  ),
  args: {
    openedDefault: 0,
    renderContent: true,
    variant: "default",
    behavior: "linked",
  },
  argTypes: AccordionContainerArgTypes,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const AllOpened: StoryObj = {
  render: () => (
    <Accordion.Container behavior="isolated">
      <Accordion.Item id="panel-a" header="first panel" openedDefault>
        <SampleParagraph />
      </Accordion.Item>
      <Accordion.Item id="panel-b" header="second panel" openedDefault>
        <SampleParagraph />
      </Accordion.Item>
      <Accordion.Item id="panel-c" header="third panel" openedDefault>
        <SampleParagraph />
      </Accordion.Item>
    </Accordion.Container>
  ),
  parameters: {
    controls: { disable: true },
    chromatic: { disableSnapshot: true },
  },
};

export const VisualTest: StoryObj = {
  render: () => (
    <div className={classNames("flex", "flex-col", "gap-xl")}>
      <h2 className={classNames("font-heading-m", "text-default")}>
        Accordion container in default and quiet
      </h2>
      <div
        className={classNames("flex", "flex-row", "gap-xl")}
        style={{ inlineSize: "50vw" }}
      >
        <Accordion.Container variant="default">
          <Accordion.Item header="HeaderLabel" openedDefault>
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" data-state="hover">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" data-state="active">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" data-state="focus">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" disabled>
            <SampleParagraph />
          </Accordion.Item>
        </Accordion.Container>
        <Accordion.Container variant="quiet" renderContent>
          <Accordion.Item header="HeaderLabel">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" data-state="hover">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" data-state="active">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" data-state="focus">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" disabled>
            <SampleParagraph />
          </Accordion.Item>
        </Accordion.Container>
      </div>
      <h2 className={classNames("font-heading-m", "text-default")}>
        Accordion.Item alone in full and compact
      </h2>
      <div
        className={classNames("flex", "flex-row", "gap-xl")}
        style={{ inlineSize: "50vw" }}
      >
        <div
          className={classNames("flex", "flex-col", "gap-3xl")}
          style={{ inlineSize: 300 }}
        >
          <Accordion.Item header="HeaderLabel" width="full">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="full" data-state="hover">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="full" data-state="active">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="full" data-state="focus">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="full" value="ValueLabel">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="full"
            description="DescriptionLabel"
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="full"
            description="Quisque efficitur, magna sit amet tempor malesuada, orci mauris vestibulum enim, quis gravida est urna et ipsum."
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="full"
            icon={<BookOutline />}
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="full"
            icon={<BookOutline />}
            description="DescriptionLabel"
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="full"
            chevronPosition="leading"
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="full"
            chevronPosition="leading"
            value="ValueLabel"
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="full"
            chevronPosition="leading"
            icon={<BookOutline />}
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="full"
            affix={
              <IconButton
                variant="quiet"
                size="small"
                aria-label="More actions"
                icon={<MoreVertical height={undefined} />}
              />
            }
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="full"
            chevronPosition="leading"
            affix={
              <IconButton
                variant="quiet"
                size="small"
                aria-label="More actions"
                icon={<MoreVertical height={undefined} />}
              />
            }
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="full" openedDefault>
            <SampleParagraph />
          </Accordion.Item>
        </div>
        <div
          className={classNames("flex", "flex-col", "gap-3xl")}
          style={{ inlineSize: 300 }}
        >
          <Accordion.Item header="HeaderLabel" width="compact">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="compact"
            data-state="hover"
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="compact"
            data-state="active"
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="compact"
            data-state="focus"
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="compact"
            value="ValueLabel"
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="compact"
            description="DescriptionLabel"
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            width="compact"
            description="Quisque efficitur, magna sit amet tempor malesuada, orci mauris vestibulum enim, quis gravida est urna."
            header="HeaderLabel"
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="compact"
            icon={<BookOutline />}
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="compact"
            icon={<BookOutline />}
            description="DescriptionLabel"
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="compact"
            chevronPosition="leading"
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="compact"
            chevronPosition="leading"
            value="ValueLabel"
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="compact"
            chevronPosition="leading"
            icon={<BookOutline />}
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="compact"
            affix={
              <IconButton
                variant="quiet"
                size="small"
                aria-label="More actions"
                icon={<MoreVertical height={undefined} />}
              />
            }
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item
            header="HeaderLabel"
            width="compact"
            chevronPosition="leading"
            affix={
              <IconButton
                variant="quiet"
                size="small"
                aria-label="More actions"
                icon={<MoreVertical height={undefined} />}
              />
            }
          >
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="compact" openedDefault>
            <SampleParagraph />
          </Accordion.Item>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    pseudo: {
      hover: '[data-state="hover"] > button',
      active: '[data-state="active"] > button',
      focusVisible: '[data-state="focus"] > button',
    },
  },
};

export const WithAffix: StoryObj<AccordionProps["Item"]> = {
  render: (props) => (
    <div className={classNames("w-m", "p-xl")}>
      <Accordion.Item {...props}>
        This accordion has a vertical menu as an affix element.
      </Accordion.Item>
    </div>
  ),
  args: {
    header: "With Affix Menu",
    chevronPosition: "leading",
    affix: (
      <Menu.Trigger
        menu={
          <>
            <Menu.Item
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
              }}
            >
              Create
            </Menu.Item>
            <Menu.Item
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
              }}
            >
              Edit
            </Menu.Item>
            <Menu.Item
              variant="destructive"
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
              }}
            >
              Delete
            </Menu.Item>
          </>
        }
      >
        <IconButton
          variant="quiet"
          size="small"
          aria-label="More actions"
          icon={<MoreVertical height={undefined} />}
          onClick={(e: MouseEvent) => {
            e.stopPropagation();
          }}
        />
      </Menu.Trigger>
    ),
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};
