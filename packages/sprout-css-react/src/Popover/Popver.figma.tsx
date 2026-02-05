// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { Button } from "../Button";
import { Popover } from "./Popover";

figma.connect(
  Popover,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=9312-42217",
  {
    props: {},
    example: () => (
      <Popover content="Placeholder" placementUpdate placement="bottom-end">
        <Button label="Trigger" />
      </Popover>
    ),
  },
);
