/*

//Uncomment after asDropdown has been delievered


// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";
import { Button, IconButton } from ".";
import { Menu } from "../Menu/Menu";

figma.connect(
  "https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=7602-60727&node-type=frame&t=PnaKgNTyvjElXTXa-0",
  {
    variant: { "As dropdown": true },
    props: {
      label: figma.string("Text"),
      variant: figma.enum("Variant", {
        Primary: "primary",
        Secondary: "secondary",
        Quiet: "quiet",
        Destructive: "destructive",
      }),
      disabled: figma.enum("State", {
        Disabled: true,
      }),
      loading: figma.enum("State", {
        Loading: true,
      }),
      size: figma.enum("Size", {
        Small: "small",
      }),
      icon: figma.boolean("Has icon", { true: figma.instance("Icon"), false: undefined }),
    },
    example: (props) => (
      <Menu.Trigger menu={[]}>
        <Button {...props} asDropdown />
      </Menu.Trigger>
    ),
  },
);

figma.connect("https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=18318%3A40996", {
  variant: { "As dropdown": true },
  props: {
    size: figma.enum("Size", {
      Small: "small",
    }),
    state: figma.enum("State", {
      Disabled: "disabled",
      Loading: "loading",
    }),
    variant: figma.enum("Variant", {
      Primary: "primary",
      Destructive: "destructive",
      Quiet: "quiet",
      Secondary: "secondary",
    }),
    loading: figma.enum("State", {
      Loading: true,
    }),
  },
  example: (props) => (
    <Menu.Trigger menu={[]}>
      <IconButton label="Label" {...props} asDropdown />
    </Menu.Trigger>
  ),
});
*/
