// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { Panel, type PanelProps } from ".";
import { classNames } from "../classNames";

figma.connect(
  Panel.Primitive,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=25785-3403",
  {
    props: {
      overlay: figma.boolean("Overlayed"),
      placement: figma.enum<PanelProps["Primitive"]["placement"]>("Position", {
        Top: "top",
        Left: "left",
        Right: "right",
        Bottom: "bottom",
      }),
      showResizeHandle: figma.boolean("Show resize handle"),
      content: figma.children("*"),
    },
    example: (props) => (
      <Panel.Container overlay={props.overlay}>
        <div className={classNames("flex")}>Rest of the page</div>
        <Panel.Primitive
          placement={props.placement}
          showResizeHandle={props.showResizeHandle}
          resizable
        >
          {props.content}
        </Panel.Primitive>
      </Panel.Container>
    ),
  },
);

function MyPanelContent() {
  return null;
}

figma.connect(
  MyPanelContent,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=31387-63497",
  {
    props: {},
    example: () => (
      <div
        className={classNames("flex", "items-center", "justify-center")}
        style={{
          inlineSize: "100%",
          blockSize: "100%",
        }}
      >
        <span className={classNames("font-body-m")}>Panel content</span>
      </div>
    ),
  },
);
