import { type ReactNode, useState } from "react";

import { Button, Panel, classNames } from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

export default {
  title: "Components/Panel",
  component: Panel.Primitive,
  argTypes: {
    resizable: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

export const Playground: StoryObj<typeof Panel.Primitive> = {
  args: {},
  argTypes: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    placement: {
      table: {
        disable: true,
      },
    },
    overlay: {
      control: {
        type: "select",
      },
      options: [undefined, false, true, "s", "m", "l", "xl", "xxl", "2xl", "3xl", "4xl"],
    },
    "aria-label": {
      control: {
        type: "text",
      },
    },
    resizable: {
      control: {
        type: "boolean",
      },
    },
    showResizeHandle: {
      control: {
        type: "boolean",
      },
    },
    minHeight: {
      table: {
        disable: true,
      },
    },
    minWidth: {
      control: {
        type: "text",
      },
    },
    maxHeight: {
      table: {
        disable: true,
      },
    },
    maxWidth: {
      control: {
        type: "text",
      },
    },
    initialSize: {
      control: {
        type: "text",
      },
    },
    "data-drawer": {
      control: {
        type: "select",
      },
      options: [undefined, "closed", "opened"],
    },
  },
  render: ({ overlay, ...props }) => (
    <div
      className={classNames("flex", "flex-row", "border-box", "p-l", "border-default")}
      style={{ inlineSize: "100%", blockSize: "300px" }}
    >
      <Panel.Container overlay={overlay}>
        <div className={classNames("flex", "flex-row", "border-box", "text-default")}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui nec nunc ultricies tincidunt. Nullam
          </p>
        </div>
        <Panel.Left {...props}>
          <div className={classNames("flex", "flex-row", "border-box", "p-s", "font-body-m", "text-default")}>
            Panel content
          </div>
        </Panel.Left>
      </Panel.Container>
    </div>
  ),

  parameters: {
    layout: "fullscreen",
    chromatic: { disableSnapshot: true },
  },
};

export const Drawer: StoryObj<typeof Panel.Primitive> = {
  render: () => {
    const [drawerLeft, setDrawerLeft] = useState<"closed" | "opened">("closed");
    const [drawerRight, setDrawerRight] = useState<"closed" | "opened">("closed");
    return (
      <div
        className={classNames("flex", "flex-row", "border-box", "p-l", "border-default")}
        style={{ inlineSize: "100%", blockSize: "300px" }}
      >
        <Panel.Container overlay>
          <div className={classNames("flex", "flex-col", "border-box", "items-start", "gap-s")}>
            <p className={classNames("text-default")}>
              This is a container that can have a drawer.{" "}
              <Button
                label="Toggle left drawer"
                onClick={() => {
                  setDrawerLeft((prev) => (prev === "closed" ? "opened" : "closed"));
                }}
              />
              <Button
                label="Toggle right drawer"
                onClick={() => {
                  setDrawerRight((prev) => (prev === "closed" ? "opened" : "closed"));
                }}
              />
            </p>
          </div>
          <Panel.Left data-drawer={drawerLeft} aria-label="Left drawer">
            <div className={classNames("flex", "flex-row", "border-box", "p-s", "font-body-m", "text-default")}>
              Panel content
            </div>
          </Panel.Left>
          <Panel.Right data-drawer={drawerRight} aria-label="Right drawer">
            <div className={classNames("flex", "flex-row", "border-box", "p-s", "font-body-m", "text-default")}>
              Panel content
            </div>
          </Panel.Right>
        </Panel.Container>
      </div>
    );
  },
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    chromatic: { disableSnapshot: true },
  },
};

const CONTENT = (
  <div
    className={classNames(
      "flex",
      "flex-row",
      "border-box",
      "font-body-m",
      "text-default",
      "p-m",
      "overflow-hidden",
      "overflow-x-auto",
      "overflow-y-auto",
    )}
  >
    Haec subinde Constantius audiens et quaedam referente Thalassio doctus, quem eum odisse iam conpererat lege communi,
    scribens ad Caesarem blandius adiumenta paulatim illi subtraxit, sollicitari se simulans ne, uti est militare otium
    fere tumultuosum, in eius perniciem conspiraret, solisque scholis iussit esse contentum palatinis et protectorum cum
    Scutariis et Gentilibus, et mandabat Domitiano, ex comite largitionum, praefecto ut cum in Syriam venerit, Gallum,
    quem crebro acciverat, ad Italiam properare blande hortaretur et verecunde.
  </div>
);

function DemoPanelContent({ children }: { children: ReactNode }) {
  return (
    <div
      className={classNames("flex", "flex-row", "border-box", "p-s", "justify-center", "font-body-m", "text-default")}
    >
      {children}
    </div>
  );
}

const ROW_HEIGHT = "130px";

export const VisualTest = {
  render: () => (
    <div
      className={classNames("flex", "flex-col", "border-box", "font-body-m", "text-default", "p-m", "gap-s")}
      style={{ inlineSize: "100vw" }}
    >
      <h2 className={classNames("font-heading-m", "text-default")}>Panel.Top</h2>
      <div
        className={classNames("flex", "flex-row", "border-box", "w-xxl", "gap-3xl", "flex-nowrap", "grow")}
        style={{ blockSize: ROW_HEIGHT }}
      >
        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container>
            {CONTENT}
            <Panel.Top>
              <DemoPanelContent>top</DemoPanelContent>
            </Panel.Top>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container>
            {CONTENT}
            <Panel.Top resizable>
              <DemoPanelContent>top resizable</DemoPanelContent>
            </Panel.Top>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container overlay>
            {CONTENT}
            <Panel.Top>
              <DemoPanelContent>top overlay</DemoPanelContent>
            </Panel.Top>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container overlay>
            {CONTENT}
            <Panel.Top resizable>
              <DemoPanelContent>top overlay resizable</DemoPanelContent>
            </Panel.Top>
          </Panel.Container>
        </div>
      </div>

      <h2 className={classNames("font-heading-m", "text-default")}>Panel.Left</h2>
      <div
        className={classNames("flex", "flex-row", "border-box", "w-xxl", "gap-3xl", "flex-nowrap", "grow")}
        style={{ blockSize: ROW_HEIGHT }}
      >
        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container>
            {CONTENT}
            <Panel.Left>
              <DemoPanelContent>Left</DemoPanelContent>
            </Panel.Left>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container>
            {CONTENT}
            <Panel.Left resizable>
              <DemoPanelContent>Left resizable</DemoPanelContent>
            </Panel.Left>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container overlay>
            {CONTENT}
            <Panel.Left>
              <DemoPanelContent>Left overlay</DemoPanelContent>
            </Panel.Left>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container overlay>
            {CONTENT}
            <Panel.Left resizable>
              <DemoPanelContent>Left overlay resizable</DemoPanelContent>
            </Panel.Left>
          </Panel.Container>
        </div>
      </div>

      <h2 className={classNames("font-heading-m", "text-default")}>Panel.Bottom</h2>
      <div
        className={classNames("flex", "flex-row", "border-box", "w-xxl", "gap-3xl", "flex-nowrap", "grow")}
        style={{ blockSize: ROW_HEIGHT }}
      >
        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container>
            {CONTENT}
            <Panel.Bottom>
              <DemoPanelContent>Bottom</DemoPanelContent>
            </Panel.Bottom>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container>
            {CONTENT}
            <Panel.Bottom resizable>
              <DemoPanelContent>Bottom resizable</DemoPanelContent>
            </Panel.Bottom>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container overlay>
            {CONTENT}
            <Panel.Bottom>
              <DemoPanelContent>Bottom overlay</DemoPanelContent>
            </Panel.Bottom>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container overlay>
            {CONTENT}
            <Panel.Bottom resizable>
              <DemoPanelContent>Bottom overlay resizable</DemoPanelContent>
            </Panel.Bottom>
          </Panel.Container>
        </div>
      </div>

      <h2 className={classNames("font-heading-m", "text-default")}>Panel.Right</h2>
      <div
        className={classNames("flex", "flex-row", "border-box", "w-xxl", "gap-3xl", "flex-nowrap", "grow")}
        style={{ blockSize: ROW_HEIGHT }}
      >
        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container>
            {CONTENT}
            <Panel.Right>
              <DemoPanelContent>Right</DemoPanelContent>
            </Panel.Right>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container>
            {CONTENT}
            <Panel.Right resizable>
              <DemoPanelContent>Right resizable</DemoPanelContent>
            </Panel.Right>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container overlay>
            {CONTENT}
            <Panel.Right>
              <DemoPanelContent>Right overlay</DemoPanelContent>
            </Panel.Right>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container overlay>
            {CONTENT}
            <Panel.Right resizable>
              <DemoPanelContent>Right overlay resizable</DemoPanelContent>
            </Panel.Right>
          </Panel.Container>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
  },
};
