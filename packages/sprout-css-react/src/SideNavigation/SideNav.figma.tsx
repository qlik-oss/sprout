// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { SideNav, type SideNavProps } from ".";

// section
figma.connect(
  SideNav.Section,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=21054-3797",
  {
    props: {
      label: figma.nestedProps("_SideNav.GroupLabel", {
        text: figma.textContent("Group label"),
      }),
      children: figma.children("List"),
    },
    example: (props) => (
      <SideNav.Section label={props.label.text} level="h2">
        {props.children}
      </SideNav.Section>
    ),
  },
);

figma.connect(
  SideNav.Nav,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=20786-3670",
  {
    props: {
      variant: figma.enum<SideNavProps["Nav"]["variant"]>("Variant", {
        Compact: "compact",
      }),
      children: figma.children("_SideNav.Section"),
    },
    example: (props) => (
      <SideNav.Nav variant={props.variant}>{props.children}</SideNav.Nav>
    ),
  },
);

figma.connect(
  SideNav.Link,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=30245-5287",
  {
    props: {
      label: figma.boolean("Has label", {
        true: figma.string("Label text"),
        false: "",
      }),
      indentation: figma.boolean("Indented", {
        true: 1,
        false: undefined,
      }),
      icon: figma.boolean("Has Icon", {
        true: figma.nestedProps("_SideNavIcon", {
          icon: figma.instance("Icon"),
        }),
        false: {
          icon: undefined,
        },
      }),
      iconSize: figma.boolean("Has Icon", {
        true: figma.nestedProps("_SideNavIcon", {
          variant: figma.enum<SideNavProps["Link"]["iconSize"] | undefined>(
            "Size",
            {
              Default: undefined,
              Large: "large",
            },
          ),
        }),
        false: {
          variant: undefined,
        },
      }),
      variant: figma.enum<SideNavProps["Link"]["variant"]>("Variant", {
        Compact: "compact",
      }),
      isExternal: figma.boolean("Is external"),
    },
    example: (props) => (
      <SideNav.Link
        href="/foo"
        label={props.label}
        icon={props.icon.icon}
        variant={props.variant}
        iconSize={props.iconSize.variant}
        indentation={props.indentation}
      />
    ),
  },
);
