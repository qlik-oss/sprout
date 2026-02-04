// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { Breadcrumb } from "./Breadcrumb";

figma.connect(
  Breadcrumb,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=18388%3A3329",
  {
    props: {
      items: [
        {
          href: "/",
          children: "Root",
        },
        {
          href: "/folder",
          children: "Folder",
        },
      ],
    },
    example: (props) => <Breadcrumb {...props} />,
  },
);
