// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { CharacterCount } from ".";

figma.connect(
  CharacterCount,
  "https://www.figma.com/design/h2zg2qV58RDpHsGVBVJLOo/Textfield---TextArea-Character-Limits---Sadie?node-id=37298-39211",
  {
    props: {
      currentCount: 0,
      maxCount: 100,
    },
    example: (props) => <CharacterCount {...props} />,
  },
);
