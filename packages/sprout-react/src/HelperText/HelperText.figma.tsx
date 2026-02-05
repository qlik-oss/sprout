// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { HelperText } from ".";

figma.connect(
  HelperText,
  "https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=7628-86411",
  {
    props: {
      helpText: figma.string("Text"),
      isError: figma.enum("Variant", {
        Error: true,
      }),
    },
    example: ({ helpText, isError }) => (
      <HelperText helpText={helpText} isError={isError} />
    ),
  },
);
