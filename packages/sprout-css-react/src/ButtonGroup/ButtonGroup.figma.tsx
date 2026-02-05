// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { ButtonGroup, type ButtonGroupProps } from "./ButtonGroup";

figma.connect(
  ButtonGroup,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=21277%3A742",
  {
    props: {
      orientation: figma.enum<ButtonGroupProps["orientation"]>("Orientation", {
        Horizontal: "horizontal",
        Vertical: "vertical",
      }),
      buttons: figma.children("*Button"),
    },
    example: (props) => (
      <ButtonGroup orientation={props.orientation}>{props.buttons}</ButtonGroup>
    ),
  },
);
