import { type ReactNode, useState } from "react";

import {
  Box,
  type BoxProps,
  classNames,
  getBoxProps,
} from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const SPACING_OPTIONS = [
  undefined,
  "0",
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "xxl",
  "3xl",
];
const BORDER_OPTIONS = [
  undefined,
  "default",
  "weak",
  "moderate",
  "strong",
  "extra-strong",
];
const ALIGN_OPTIONS = [undefined, "start", "end", "center", "stretch"];

const BodyS = classNames("font-body-s", "text-default");

type Story = StoryObj<typeof Box>;

const CONTAINER_PROPS: BoxProps = {
  width: "fit",
  gap: "xl",
  border: "strong",
  p: "xl",
  bgColor: "inverse",
  typography: { font: "body_s", color: "inverse" },
};

const CONTENT_PROPS: BoxProps = {
  bgColor: "default",
  border: "moderate",
  p: "xl",
  alignItems: "center",
  justify: "center",
  typography: { font: "body_s", color: "default" },
};

function omit(obj: Record<string, unknown>, keys: Array<string>) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key)),
  );
}

const CONTENT_PROPS_TOKEN = { ...omit(CONTENT_PROPS, ["border", "style"]) };

const PROPERTY_ROW_PROPS: BoxProps = { gap: "xl" };
const PROPERTY_COL_PROPS: BoxProps = { direction: "col", alignItems: "start" };

function PropertyTile({ children }: { children: ReactNode }) {
  return (
    <h2
      className={classNames(
        "flex",
        "flex-row",
        "border-box",
        "font-heading-l",
        "text-default",
        "py-l",
      )}
    >
      {children}
    </h2>
  );
}
function PropertyValue({ children }: { children: ReactNode }) {
  return (
    <h3
      className={classNames(
        "flex",
        "flex-row",
        "border-box",
        "font-label-m",
        "text-default",
        "py-m",
      )}
    >
      {children}
    </h3>
  );
}

const meta: Meta = {
  component: Box,
  title: "Components/Box",
  args: {
    direction: "row",
    gap: "xs",
    border: "default",
    typography: { font: "label_s", color: "default" },
  },
  argTypes: {
    direction: {
      control: {
        type: "select",
      },
      options: [undefined, "row", "row-reverse", "col", "col-reverse"],
    },
    alignContent: {
      control: {
        type: "select",
      },
      options: ALIGN_OPTIONS,
    },
    alignItems: {
      control: {
        type: "select",
      },
      options: ALIGN_OPTIONS,
    },
    alignSelf: {
      control: {
        type: "select",
      },
      options: ALIGN_OPTIONS,
    },
    bgColor: {
      control: {
        type: "select",
      },
      options: [
        undefined,
        "transparent",
        "default",
        "weak",
        "moderate",
        "strong",
        "enabled",
        "disabled",
        "interactive",
        "inverse",
      ],
    },
    boxShadow: {
      control: {
        type: "select",
      },
      options: [undefined, "none", "default", "weak", "moderate", "strong"],
    },
    justify: {
      control: {
        type: "select",
      },
      options: [undefined, "start", "end", "center", "between", "around"],
    },
    gap: {
      control: {
        type: "select",
      },
      options: SPACING_OPTIONS,
    },
    rowGap: {
      control: {
        type: "select",
      },
      options: SPACING_OPTIONS,
    },
    columnGap: {
      control: {
        type: "select",
      },
      options: SPACING_OPTIONS,
    },
    border: {
      control: {
        type: "select",
      },
      options: BORDER_OPTIONS,
    },
    borderTop: {
      control: {
        type: "select",
      },
      options: BORDER_OPTIONS,
    },
    borderRight: {
      control: {
        type: "select",
      },
      options: BORDER_OPTIONS,
    },
    borderBottom: {
      control: {
        type: "select",
      },
      options: BORDER_OPTIONS,
    },
    borderLeft: {
      control: {
        type: "select",
      },
      options: BORDER_OPTIONS,
    },
    borderWidth: {
      control: {
        type: "select",
      },
      options: [undefined, "0", "default", "strong"],
    },
    boxSizing: {
      control: {
        type: "select",
      },
      options: [undefined, "content-box", "border-box"],
    },
    typography: {
      control: {
        type: "object",
      },
    },
    wrap: {
      control: {
        type: "select",
      },
      options: [undefined, "wrap", "wrap-reverse", "nowrap"],
    },
    zIndex: {
      control: {
        type: "select",
      },
      options: [
        undefined,
        "stacked",
        "floating",
        "overlay",
        "context",
        "time_sensitive",
      ],
    },
  },
};

export default meta;

const BoxContent = (
  <>
    <Box border="default" width="100px" {...CONTENT_PROPS_TOKEN}>
      item 1
    </Box>
    <Box border="default" {...CONTENT_PROPS_TOKEN}>
      item 2
      <br />
      item 2 line 2
    </Box>
    <Box border="default" {...CONTENT_PROPS_TOKEN}>
      item 3
    </Box>
    <Box border="default" {...CONTENT_PROPS_TOKEN}>
      item 4
      <br />
      item 4 line 2
      <br />
      item 4 line 3
    </Box>
  </>
);

export const Playground: Story = {
  name: "Box (deprecated)",
  render: (props) => <Box {...props}>{BoxContent}</Box>,
  args: {
    gap: "s",
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const WithgetBoxProps: Story = {
  name: "getBoxProps (deprecated)",
  render: ({ ...props }) => {
    const [state, setState] = useState(0);
    return (
      <button
        type="button"
        {...getBoxProps(props)}
        onClick={() => {
          setState((prev) => prev + 1);
        }}
        style={{ background: "var(--sprout-common-background-color-default)" }}
      >
        Button with deprecated getBoxProps clicked {state} times
      </button>
    );
  },
  args: {
    gap: "m",
    border: "default",
    p: "xl",
    typography: {
      font: "label_m",
      color: "default",
    },
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Border: Story = {
  name: "border (deprecated)",
  args: {
    direction: "col",
    gap: "0",
    border: "none",
  },
  parameters: {
    controls: { disable: true },
  },
  render: (props) => (
    <Box {...props}>
      <PropertyTile>border</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>none</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN}>1</Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>weak</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="weak">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>default</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>moderate</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="moderate">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>strong</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="strong">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>extra-strong</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="extra-strong">
            1
          </Box>
        </Box>
      </Box>
      <PropertyTile>borderTop</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>none</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderTop="none">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>weak</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderTop="weak">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>default</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderTop="default">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>moderate</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderTop="moderate">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>strong</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderTop="strong">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>extra-strong</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderTop="extra-strong">
            1
          </Box>
        </Box>
      </Box>
      <PropertyTile>borderRight</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>none</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderRight="none">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>weak</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderRight="weak">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>default</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderRight="default">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>moderate</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderRight="moderate">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>strong</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderRight="strong">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>extra-strong</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderRight="extra-strong">
            1
          </Box>
        </Box>
      </Box>
      <PropertyTile>borderBottom</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>none</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderBottom="none">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>weak</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderBottom="weak">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>default</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderBottom="default">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>moderate</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderBottom="moderate">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>strong</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderBottom="strong">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>extra-strong</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderBottom="extra-strong">
            1
          </Box>
        </Box>
      </Box>
      <PropertyTile>borderLeft</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>none</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderLeft="none">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>weak</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderLeft="weak">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>default</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderLeft="default">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>moderate</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderLeft="moderate">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>strong</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderLeft="strong">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>extra-strong</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderLeft="extra-strong">
            1
          </Box>
        </Box>
      </Box>
      <PropertyTile>borderRadius</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>subtle</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="subtle">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>soft</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="soft">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>cushiony</PropertyValue>
          <Box
            {...CONTENT_PROPS_TOKEN}
            border="default"
            borderRadius="cushiony"
          >
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>round</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="round">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>pill</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="pill">
            1
          </Box>
        </Box>
      </Box>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>nested-subtle-xs</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="subtle">
            <Box
              {...CONTENT_PROPS_TOKEN}
              border="default"
              borderRadius="nested-subtle-xs"
            >
              1
            </Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>nested-soft-s</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="soft">
            <Box
              {...CONTENT_PROPS_TOKEN}
              border="default"
              borderRadius="nested-soft-s"
            >
              1
            </Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>nested-soft-xs</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="soft">
            <Box
              {...CONTENT_PROPS_TOKEN}
              border="default"
              borderRadius="nested-soft-xs"
            >
              1
            </Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>nested-cushiony-xs</PropertyValue>
          <Box
            {...CONTENT_PROPS_TOKEN}
            border="default"
            borderRadius="cushiony"
          >
            <Box
              {...CONTENT_PROPS_TOKEN}
              border="default"
              borderRadius="nested-cushiony-xs"
            >
              1
            </Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>nested-cushiony-s</PropertyValue>
          <Box
            {...CONTENT_PROPS_TOKEN}
            border="default"
            borderRadius="cushiony"
          >
            <Box
              {...CONTENT_PROPS_TOKEN}
              border="default"
              borderRadius="nested-cushiony-s"
            >
              1
            </Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>nested-cushiony-m</PropertyValue>
          <Box
            {...CONTENT_PROPS_TOKEN}
            border="default"
            borderRadius="cushiony"
          >
            <Box
              {...CONTENT_PROPS_TOKEN}
              border="default"
              borderRadius="nested-cushiony-m"
            >
              1
            </Box>
          </Box>
        </Box>
      </Box>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>twice-soft-xs</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="soft">
            <Box
              {...CONTENT_PROPS_TOKEN}
              border="default"
              borderRadius="nested-soft-xs"
            >
              <Box
                {...CONTENT_PROPS_TOKEN}
                border="default"
                borderRadius="twice-soft-xs"
              >
                1
              </Box>
            </Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>twice-cushiony-s-xs</PropertyValue>
          <Box
            {...CONTENT_PROPS_TOKEN}
            border="default"
            borderRadius="cushiony"
          >
            <Box
              {...CONTENT_PROPS_TOKEN}
              border="default"
              borderRadius="nested-cushiony-s"
            >
              <Box
                {...CONTENT_PROPS_TOKEN}
                border="default"
                borderRadius="twice-cushiony-s-xs"
              >
                1
              </Box>
            </Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>twice-cushiony-m-s</PropertyValue>
          <Box
            {...CONTENT_PROPS_TOKEN}
            border="default"
            borderRadius="cushiony"
          >
            <Box
              {...CONTENT_PROPS_TOKEN}
              border="default"
              borderRadius="nested-cushiony-m"
            >
              <Box
                {...CONTENT_PROPS_TOKEN}
                border="default"
                borderRadius="twice-cushiony-m-s"
              >
                1
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  ),
};

export const Padding: Story = {
  name: "padding (deprecated)",
  args: {
    direction: "col",
    border: "none",
    gap: "0",
  },
  parameters: {
    controls: { disable: true },
  },
  render: (props) => (
    <Box {...props}>
      <PropertyTile>p</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>0</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} p="0">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>s</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} p="s">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>m</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} p="m">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>l</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} p="l">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} p="xl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xxl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} p="xxl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>3xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} p="3xl">
            content
          </Box>
        </Box>
      </Box>
      <PropertyTile>px</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>0</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} px="0">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>s</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} px="s">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>m</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} px="m">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>l</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} px="l">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} px="xl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xxl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} px="xxl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>3xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} px="3xl">
            content
          </Box>
        </Box>
      </Box>
      <PropertyTile>py</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>0</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="0">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>s</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="s">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>m</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="m">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>l</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="l">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="xl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xxl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="xxl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>3xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="3xl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>density-xs</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="density-xs">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>density-s</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="density-s">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>density-m</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="density-m">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>density-l</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="density-l">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>density-xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="density-xl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>density-xxl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="density-xxl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>density-3xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="density-3xl">
            content
          </Box>
        </Box>
      </Box>
      <PropertyTile>pt</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>0</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pt="0">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>s</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pt="s">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>m</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pt="m">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>l</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pt="l">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pt="xl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xxl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pt="xxl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>3xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pt="3xl">
            content
          </Box>
        </Box>
      </Box>
      <PropertyTile>pr</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>0</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pr="0">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>s</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pr="s">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>m</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pr="m">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>l</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pr="l">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pr="xl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xxl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pr="xxl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>3xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pr="3xl">
            content
          </Box>
        </Box>
      </Box>
      <PropertyTile>pb</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>0</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pb="0">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>s</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pb="s">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>m</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pb="m">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>l</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pb="l">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pb="xl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xxl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pb="xxl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>3xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pb="3xl">
            content
          </Box>
        </Box>
      </Box>
      <PropertyTile>pl</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>0</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pl="0">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>s</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pl="s">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>m</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pl="m">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>l</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pl="l">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pl="xl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xxl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pl="xxl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>3xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pl="3xl">
            content
          </Box>
        </Box>
      </Box>
    </Box>
  ),
};

export const BoxShadow: Story = {
  name: "boxShadow (deprecated)",
  args: {
    gap: "xl",
    p: "xl",
  },
  parameters: {
    controls: { disable: true },
    chromatic: { disableSnapshot: true },
  },

  render: (props) => (
    <Box {...props}>
      <Box
        boxShadow="none"
        {...CONTENT_PROPS_TOKEN}
        borderRadius="subtle"
        border="default"
      >
        none
      </Box>
      <Box
        boxShadow="weak"
        {...CONTENT_PROPS_TOKEN}
        borderRadius="subtle"
        border="default"
      >
        weak
      </Box>
      <Box
        boxShadow="default"
        {...CONTENT_PROPS_TOKEN}
        borderRadius="subtle"
        border="default"
      >
        default
      </Box>
      <Box
        boxShadow="moderate"
        {...CONTENT_PROPS_TOKEN}
        borderRadius="subtle"
        border="default"
      >
        moderate
      </Box>
      <Box
        boxShadow="strong"
        {...CONTENT_PROPS_TOKEN}
        borderRadius="subtle"
        border="default"
      >
        strong
      </Box>
    </Box>
  ),
};

export const bgColor: Story = {
  name: "bgColor (deprecated)",
  args: {
    gap: "xl",
    p: "xl",
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    controls: { disable: true },
  },
  render: (props) => (
    <Box {...props}>
      <Box
        {...CONTENT_PROPS_TOKEN}
        bgColor="disabled"
        borderRadius="subtle"
        border="default"
      >
        disabled
      </Box>
      <Box
        {...CONTENT_PROPS_TOKEN}
        bgColor="transparent"
        borderRadius="subtle"
        border="default"
      >
        transparent
      </Box>
      <Box
        {...CONTENT_PROPS_TOKEN}
        bgColor="weak"
        borderRadius="subtle"
        border="default"
      >
        weak
      </Box>
      <Box
        {...CONTENT_PROPS_TOKEN}
        bgColor="default"
        borderRadius="subtle"
        border="default"
      >
        default
      </Box>
      <Box
        {...CONTENT_PROPS_TOKEN}
        bgColor="enabled"
        borderRadius="subtle"
        border="default"
      >
        enabled
      </Box>
      <Box
        {...CONTENT_PROPS_TOKEN}
        bgColor="interactive"
        borderRadius="subtle"
        border="default"
      >
        interactive
      </Box>
      <Box
        {...CONTENT_PROPS_TOKEN}
        bgColor="moderate"
        borderRadius="subtle"
        border="default"
      >
        moderate
      </Box>
      <Box
        {...CONTENT_PROPS_TOKEN}
        bgColor="strong"
        borderRadius="subtle"
        border="default"
      >
        strong
      </Box>
      <Box
        {...CONTENT_PROPS_TOKEN}
        bgColor="inverse"
        borderRadius="subtle"
        border="default"
        typography={{ font: "body_s", color: "inverse" }}
      >
        inverse
      </Box>
    </Box>
  ),
};

export const ContainerSizing: Story = {
  name: "width=container-sizing (deprecated)",
  parameters: {
    chromatic: { disableSnapshot: true },
    controls: { disable: true },
  },
  render: () => (
    <Box direction="col" gap="m" p="s">
      <Box direction="col" gap="m" width="m">
        <h1
          className={classNames(
            "flex",
            "flex-row",
            "border-box",
            "font-heading-m",
            "text-default",
          )}
        >
          Container
        </h1>
        <p className={classNames("font-body-s", "text-default")}>
          As we do not have a set of generic layouts in mind and the fact CSS
          media query doesnt support the usage of tokens we have decided to
          explain it like this. Media query are simple enought to write so it is
          ok to use hard coded value for{" "}
          <strong className={classNames("font-label-s-emphasized")}>
            breakpoint
          </strong>{" "}
          based layout. You have already a good examples on the{" "}
          <strong className={classNames("font-label-s-emphasized")}>
            Modal
          </strong>{" "}
          component.
        </p>
      </Box>
      <Box border="default" width="xxs" {...CONTENT_PROPS_TOKEN}>
        xxs
      </Box>
      <Box border="default" width="xs" {...CONTENT_PROPS_TOKEN}>
        xs
      </Box>
      <Box border="default" width="s" {...CONTENT_PROPS_TOKEN}>
        s
      </Box>
      <Box border="default" width="m" {...CONTENT_PROPS_TOKEN}>
        m
      </Box>
      <Box border="default" width="l" {...CONTENT_PROPS_TOKEN}>
        l
      </Box>
      <Box border="default" width="xl" {...CONTENT_PROPS_TOKEN}>
        xl
      </Box>
      <Box border="default" width="xxl" {...CONTENT_PROPS_TOKEN}>
        m
      </Box>
      <Box border="default" width="3xl" {...CONTENT_PROPS_TOKEN}>
        3xl
      </Box>
      <Box border="default" width="4xl" {...CONTENT_PROPS_TOKEN}>
        4xl
      </Box>
    </Box>
  ),
};

export const ZIndex: Story = {
  name: "zIndex (deprecated)",
  args: {
    gap: "xl",
    p: "xl",
  },
  parameters: {
    controls: { disable: true },
    chromatic: { disableSnapshot: true },
  },

  render: (props) => (
    <Box {...props} width="400px" gap="0" direction="col">
      <Box
        zIndex="cursor"
        {...CONTENT_PROPS_TOKEN}
        borderRadius="subtle"
        border="default"
        width="calc(100% - (6 * var(--sprout-common-sizing-xxl)))"
        style={{ marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))" }}
      >
        cursor
      </Box>
      <Box
        zIndex="time_sensitive"
        {...CONTENT_PROPS_TOKEN}
        borderRadius="subtle"
        border="default"
        width="calc(100% - (5 * var(--sprout-common-sizing-xxl)))"
        style={{ marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))" }}
      >
        time_sensitive
      </Box>
      <Box
        zIndex="context"
        {...CONTENT_PROPS_TOKEN}
        borderRadius="subtle"
        border="default"
        width="calc(100% - (4 * var(--sprout-common-sizing-xxl)))"
        style={{ marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))" }}
      >
        context
      </Box>
      <Box
        zIndex="overlay"
        {...CONTENT_PROPS_TOKEN}
        borderRadius="subtle"
        border="default"
        width="calc(100% - (3 * var(--sprout-common-sizing-xxl)))"
        style={{ marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))" }}
      >
        overlay
      </Box>
      <Box
        zIndex="floating"
        {...CONTENT_PROPS_TOKEN}
        borderRadius="subtle"
        border="default"
        width="calc(100% - (2 * var(--sprout-common-sizing-xxl)))"
        style={{ marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))" }}
      >
        floating
      </Box>
      <Box
        zIndex="stacked"
        {...CONTENT_PROPS_TOKEN}
        borderRadius="subtle"
        border="default"
        width="calc(100% - (1 * var(--sprout-common-sizing-xxl)))"
        style={{ marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))" }}
      >
        stacked
      </Box>
      <Box
        zIndex={undefined}
        {...CONTENT_PROPS_TOKEN}
        borderRadius="subtle"
        border="default"
        style={{ marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))" }}
      >
        undefined
      </Box>
    </Box>
  ),
};

export const VisualTest: Story = {
  args: {
    direction: "col",
    border: "none",
    typography: { font: "label_s", color: "default" },
    bgColor: "default",
  },
  render: (props) => (
    <Box {...props}>
      <PropertyTile>direction</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>row (default)</PropertyValue>
          <Box {...CONTAINER_PROPS} direction="row">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>row-reverse</PropertyValue>
          <Box {...CONTAINER_PROPS} direction="row-reverse">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>col</PropertyValue>
          <Box {...CONTAINER_PROPS} direction="col">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>col-reverse</PropertyValue>
          <Box {...CONTAINER_PROPS} direction="col-reverse">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
      </Box>
      <PropertyTile>wrap</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>nowrap (default)</PropertyValue>
          <Box {...CONTAINER_PROPS} width="200px">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
            <Box {...CONTENT_PROPS}>4</Box>
            <Box {...CONTENT_PROPS}>5</Box>
            <Box {...CONTENT_PROPS}>6</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>wrap</PropertyValue>
          <Box {...CONTAINER_PROPS} wrap="wrap" width="200px">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
            <Box {...CONTENT_PROPS}>4</Box>
            <Box {...CONTENT_PROPS}>5</Box>
            <Box {...CONTENT_PROPS}>6</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>wrap-reverse</PropertyValue>
          <Box {...CONTAINER_PROPS} wrap="wrap-reverse" width="200px">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
            <Box {...CONTENT_PROPS}>4</Box>
            <Box {...CONTENT_PROPS}>5</Box>
            <Box {...CONTENT_PROPS}>6</Box>
          </Box>
        </Box>
      </Box>
      <PropertyTile>justify</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS} wrap="wrap">
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>start (default)</PropertyValue>
          <Box {...CONTAINER_PROPS} width="400px">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>end</PropertyValue>
          <Box {...CONTAINER_PROPS} justify="end" width="400px">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>center</PropertyValue>
          <Box {...CONTAINER_PROPS} justify="center" width="400px">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>between</PropertyValue>
          <Box {...CONTAINER_PROPS} justify="between" width="400px">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>around</PropertyValue>
          <Box {...CONTAINER_PROPS} justify="around" width="400px">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>evenly</PropertyValue>
          <Box {...CONTAINER_PROPS} justify="evenly" width="400px">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
      </Box>
      <PropertyTile>alignItems</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS} wrap="wrap">
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>stretch (default)</PropertyValue>
          <Box {...CONTAINER_PROPS} height="150px">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>start</PropertyValue>
          <Box {...CONTAINER_PROPS} alignItems="start" height="150px">
            <Box {...CONTENT_PROPS} height="20px">
              1
            </Box>
            <Box {...CONTENT_PROPS} height="100px">
              2
            </Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>end</PropertyValue>
          <Box {...CONTAINER_PROPS} alignItems="end" height="150px">
            <Box {...CONTENT_PROPS} height="20px">
              1
            </Box>
            <Box {...CONTENT_PROPS} height="100px">
              2
            </Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>center</PropertyValue>
          <Box {...CONTAINER_PROPS} alignItems="center" height="150px">
            <Box {...CONTENT_PROPS} height="20px">
              1
            </Box>
            <Box {...CONTENT_PROPS} height="100px">
              2
            </Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>baseline</PropertyValue>
          <Box {...CONTAINER_PROPS} alignItems="baseline" height="150px">
            <Box {...CONTENT_PROPS} alignItems="center" height="100px">
              <h1 className={BodyS}>Text text</h1>
            </Box>
            <Box {...CONTENT_PROPS} alignItems="end" height="100px">
              <p className={BodyS}>Text text</p>
            </Box>
            <Box {...CONTENT_PROPS} alignItems="start" height="100px">
              <h2 className={BodyS}>Text text</h2>
            </Box>
          </Box>
        </Box>
      </Box>
      <PropertyTile>alignContent</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS} wrap="wrap">
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>start (default)</PropertyValue>
          <Box
            {...CONTAINER_PROPS}
            alignContent="start"
            wrap="wrap"
            height="250px"
            width="200px"
          >
            <Box {...CONTENT_PROPS} height="20px">
              1
            </Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS} height="20px">
              3
            </Box>
            <Box {...CONTENT_PROPS}>4</Box>
            <Box {...CONTENT_PROPS}>5</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>end</PropertyValue>
          <Box
            {...CONTAINER_PROPS}
            alignContent="end"
            wrap="wrap"
            height="250px"
            width="200px"
          >
            <Box {...CONTENT_PROPS} height="20px">
              1
            </Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS} height="20px">
              3
            </Box>
            <Box {...CONTENT_PROPS}>4</Box>
            <Box {...CONTENT_PROPS}>5</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>center</PropertyValue>
          <Box
            {...CONTAINER_PROPS}
            alignContent="center"
            wrap="wrap"
            height="250px"
            width="200px"
          >
            <Box {...CONTENT_PROPS} height="20px">
              1
            </Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS} height="20px">
              3
            </Box>
            <Box {...CONTENT_PROPS}>4</Box>
            <Box {...CONTENT_PROPS}>5</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>stretch</PropertyValue>
          <Box
            {...CONTAINER_PROPS}
            alignContent="stretch"
            wrap="wrap"
            height="250px"
            width="200px"
          >
            <Box {...CONTENT_PROPS} height="20px">
              1
            </Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS} height="20px">
              3
            </Box>
            <Box {...CONTENT_PROPS}>4</Box>
            <Box {...CONTENT_PROPS}>5</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>between</PropertyValue>
          <Box
            {...CONTAINER_PROPS}
            alignContent="between"
            wrap="wrap"
            height="250px"
            width="200px"
          >
            <Box {...CONTENT_PROPS} height="20px">
              1
            </Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS} height="20px">
              3
            </Box>
            <Box {...CONTENT_PROPS}>4</Box>
            <Box {...CONTENT_PROPS}>5</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>around</PropertyValue>
          <Box
            {...CONTAINER_PROPS}
            alignContent="around"
            wrap="wrap"
            height="250px"
            width="200px"
          >
            <Box {...CONTENT_PROPS} height="20px">
              1
            </Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS} height="20px">
              3
            </Box>
            <Box {...CONTENT_PROPS}>4</Box>
            <Box {...CONTENT_PROPS}>5</Box>
          </Box>
        </Box>
      </Box>
      <Box direction="col">
        <PropertyTile>gap, row-gap, column-gap</PropertyTile>
        <Box {...PROPERTY_ROW_PROPS}>
          <Box {...PROPERTY_COL_PROPS}>
            <PropertyValue>gap=s</PropertyValue>
            <Box
              {...CONTAINER_PROPS}
              direction="row"
              alignItems="start"
              wrap="wrap"
              width="200px"
              gap="s"
            >
              <Box {...CONTENT_PROPS}>1</Box>
              <Box {...CONTENT_PROPS}>2</Box>
              <Box {...CONTENT_PROPS}>3</Box>
            </Box>
          </Box>
          <Box {...PROPERTY_COL_PROPS}>
            <PropertyValue>columGap=s rowGap=xl</PropertyValue>
            <Box
              {...CONTAINER_PROPS}
              direction="row"
              alignItems="start"
              wrap="wrap"
              width="200px"
              rowGap="xl"
              columnGap="s"
            >
              <Box {...CONTENT_PROPS}>1</Box>
              <Box {...CONTENT_PROPS}>2</Box>
              <Box {...CONTENT_PROPS}>3</Box>
              <Box {...CONTENT_PROPS}>4</Box>
              <Box {...CONTENT_PROPS}>5</Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box direction="col">
        <PropertyTile>grow / shrink</PropertyTile>
        <Box {...PROPERTY_ROW_PROPS}>
          <Box {...PROPERTY_COL_PROPS}>
            <PropertyValue>grow</PropertyValue>
            <Box {...CONTAINER_PROPS} direction="row" width="300px">
              <Box {...CONTENT_PROPS} grow={1}>
                1
              </Box>
              <Box {...CONTENT_PROPS} grow={1}>
                1
              </Box>
              <Box {...CONTENT_PROPS} grow={1}>
                1
              </Box>
            </Box>
            <Box {...CONTAINER_PROPS} direction="row" width="300px">
              <Box {...CONTENT_PROPS} grow={1}>
                1
              </Box>
              <Box {...CONTENT_PROPS} grow={2}>
                2
              </Box>
              <Box {...CONTENT_PROPS} grow={1}>
                1
              </Box>
            </Box>
          </Box>
          <Box {...PROPERTY_COL_PROPS}>
            <PropertyValue>shrink</PropertyValue>
            <Box {...CONTAINER_PROPS} direction="row" width="280px">
              <Box {...CONTENT_PROPS} basis="300px" shrink={0}>
                shrink = 0
              </Box>
            </Box>
            <Box {...CONTAINER_PROPS} direction="row" width="280px">
              <Box {...CONTENT_PROPS} basis="300px" shrink={1}>
                shrink = 1
              </Box>
              <Box {...CONTENT_PROPS} basis="300px" shrink={1}>
                shrink = 1
              </Box>
            </Box>
            <Box {...CONTAINER_PROPS} direction="row" width="280px">
              <Box {...CONTENT_PROPS} basis="300px" shrink={2}>
                shrink = 2
              </Box>
              <Box {...CONTENT_PROPS} basis="300px" shrink={1}>
                shrink = 1
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box direction="col">
        <PropertyTile>align-self</PropertyTile>
        <Box {...PROPERTY_ROW_PROPS}>
          <Box
            {...CONTAINER_PROPS}
            direction="row"
            height="250px"
            alignItems="start"
          >
            <Box {...CONTENT_PROPS} alignSelf="start">
              start
            </Box>
            <Box {...CONTENT_PROPS} alignSelf="center">
              center
            </Box>
            <Box {...CONTENT_PROPS} alignSelf="end">
              end
            </Box>
            <Box {...CONTENT_PROPS}>3</Box>
            <Box {...CONTENT_PROPS}>4</Box>
          </Box>
        </Box>
      </Box>
      <Box direction="col">
        <PropertyTile>Overflow</PropertyTile>
        <Box {...PROPERTY_ROW_PROPS}>
          <Box {...PROPERTY_COL_PROPS}>
            <PropertyValue>overflow</PropertyValue>
            <Box
              {...CONTAINER_PROPS}
              direction="row"
              width="fit"
              overflow="visible"
            >
              <Box
                {...CONTENT_PROPS}
                overflow="auto"
                justify="start"
                width="80px"
                noShrink
                tabIndex={0}
              >
                <Box width="500px" noShrink grow>
                  auto Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt
                </Box>
              </Box>
              <Box
                {...CONTENT_PROPS}
                overflow="hidden"
                justify="start"
                width="80px"
                noShrink
              >
                <Box width="500px" noShrink grow alignItems="center">
                  hidden Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt
                </Box>
              </Box>
              <Box
                {...CONTENT_PROPS}
                overflow="scroll"
                justify="start"
                width="80px"
                noShrink
                tabIndex={0}
              >
                <Box width="500px" noShrink grow>
                  scroll Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt
                </Box>
              </Box>
              <Box
                {...CONTENT_PROPS}
                overflow="visible"
                justify="start"
                width="80px"
                noShrink
              >
                <Box
                  width="500px"
                  noShrink
                  grow
                  typography={{ font: "body_m", color: "default" }}
                >
                  visible Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box {...PROPERTY_ROW_PROPS}>
          <Box {...PROPERTY_COL_PROPS}>
            <PropertyValue>overflow-x</PropertyValue>
            <Box
              {...CONTAINER_PROPS}
              direction="row"
              width="fit-content"
              overflowX="visible"
            >
              <Box
                {...CONTENT_PROPS}
                overflowX="auto"
                justify="start"
                width="80px"
                noShrink
                tabIndex={0}
              >
                <Box width="500px" noShrink grow>
                  auto Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt
                </Box>
              </Box>
              <Box
                {...CONTENT_PROPS}
                overflowX="hidden"
                justify="start"
                width="80px"
                noShrink
              >
                <Box width="500px" noShrink grow alignItems="center">
                  hidden Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt
                </Box>
              </Box>
              <Box
                {...CONTENT_PROPS}
                overflowX="scroll"
                justify="start"
                width="80px"
                noShrink
                tabIndex={0}
              >
                <Box width="500px" noShrink grow>
                  scroll Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt
                </Box>
              </Box>
              <Box
                {...CONTENT_PROPS}
                overflowX="visible"
                justify="start"
                width="80px"
                noShrink
              >
                <Box
                  width="500px"
                  noShrink
                  grow
                  typography={{ font: "body_m", color: "default" }}
                >
                  visible Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box {...PROPERTY_ROW_PROPS}>
          <Box {...PROPERTY_COL_PROPS}>
            <PropertyValue>overflowY</PropertyValue>
            <Box {...CONTAINER_PROPS} direction="row" width="fit-content">
              <Box
                {...CONTENT_PROPS}
                overflowY="auto"
                justify="start"
                width="110px"
                height="80px"
                noShrink
                tabIndex={0}
              >
                <Box height="200px">
                  auto Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt
                </Box>
              </Box>
              <Box
                {...CONTENT_PROPS}
                overflowY="hidden"
                justify="start"
                width="110px"
                height="80px"
                noShrink
              >
                <Box height="200px" alignItems="center">
                  hidden Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt
                </Box>
              </Box>
              <Box
                {...CONTENT_PROPS}
                overflowY="scroll"
                justify="start"
                width="110px"
                height="80px"
                noShrink
                tabIndex={0}
              >
                <Box height="200px">
                  scroll Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt
                </Box>
              </Box>
              <Box
                {...CONTENT_PROPS}
                overflowY="visible"
                justify="start"
                width="110px"
                height="80px"
                noShrink
              >
                <Box
                  height="200px"
                  typography={{ font: "body_m", color: "default" }}
                >
                  visible Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  ),
  parameters: {
    controls: { disable: true },
  },
};
