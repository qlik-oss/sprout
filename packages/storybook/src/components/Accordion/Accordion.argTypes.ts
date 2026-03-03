import type { AccordionProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react-vite";

export const AccordionItemArgTypes: ArgTypes<AccordionProps["Item"]> = {
  header: {
    control: {
      type: "text",
    },
    table: {
      type: {
        summary: "string",
      },
    },
  },
  description: {
    description: "Adds a description label to the accordion item.",
    control: {
      type: "text",
    },
    table: {
      type: {
        summary: "string",
      },
    },
  },
  value: {
    control: {
      type: "text",
    },
    table: {
      type: {
        summary: "string | number | readonly string[] | undefined",
      },
    },
  },
  children: {
    control: false,
    description: "The content of the accordion that will be displayed/hidden.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  disabled: {
    description: "Disables the accordion item, preventing user interaction.",
    control: {
      type: "boolean",
    },
    table: {
      defaultValue: {
        summary: "false",
      },
      type: {
        summary: "boolean",
      },
    },
  },

  id: {
    control: {
      type: "text",
    },
    table: {
      type: {
        summary: "string",
      },
    },
  },
  openedDefault: {
    control: {
      type: "boolean",
    },
    description:
      "Initial opened state of the accordion item. Works only with behavior=isolated.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  width: {
    control: {
      type: "radio",
    },
    description:
      "When used alone you can use this property to make the accordion item width fit the content. It should never been used in an Accordion container",
    options: ["full", "compact"],
    table: {
      defaultValue: {
        summary: "full",
      },
      type: {
        summary: "full | compact",
      },
    },
  },
  icon: {
    description: "Adds an icon next to the label",
    control: {
      type: "object",
    },
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  chevronPosition: {
    description: "Controls the position of the chevron icon (arrow up/down).",
    control: {
      type: "select",
    },
    options: [undefined, "leading", "trailing"],
    table: {
      type: {
        summary: "'leading' | 'trailing'",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  affix: {
    description: "Adds custom content (like badges or menus).",
    control: {
      type: "select",
    },
    options: [undefined, "IconButton"],
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
};

export const AccordionContainerArgTypes: ArgTypes<AccordionProps["Container"]> =
  {
    variant: {
      description: "Sets the visual style of the accordion.",
      control: {
        type: "radio",
      },
      options: ["default", "quiet"],
      table: {
        defaultValue: {
          summary: "default",
        },
        type: {
          summary: "default | quiet",
        },
      },
    },
    behavior: {
      control: {
        type: "radio",
      },
      description:
        "Controls the behavior of the accordion items. 'linked' means only one item can be opened at a time, 'isolated' allows multiple items to be opened simultaneously.",
      options: ["linked", "isolated"],
      table: {
        defaultValue: {
          summary: "linked",
        },
        type: {
          summary: "linked | isolated",
        },
      },
    },
    openedDefault: {
      control: {
        type: "number",
      },
      description: "Initial opened state of an accordion item.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    headerLevel: {
      control: {
        type: "select",
      },
      options: [2, 3, 4, 5, 6, undefined],
      description:
        "Specifies the heading level used for the header. Renders as an `<h2>` if `headerLevel={2}`, or a `<span>` if not set.",
      table: {
        type: {
          summary: "2 | 3 | 4 | 5 | 6 | undefined",
        },
      },
    },
    renderContent: {
      control: {
        type: "boolean",
      },
      description:
        "You can control if the content rendered when `opened={false}`",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },

    children: {
      control: false,
      description:
        "The Accordion.Item[] to be rendered within the container and controlled by it.",
      table: {
        type: {
          summary: "ReactElement[] | ReactElement",
        },
      },
    },
  };
