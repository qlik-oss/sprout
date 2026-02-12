import type {
  ModalCompositionProps,
  ModalProps,
} from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react";

import { ICONS_MAP, ICON_OPTIONS } from "../../internal/icons/Icons";
import { FieldArgTypes } from "../Field.argTypes";

//#region Common Modal Props
export const CommonModalArgTypes: ArgTypes<ModalProps> = {
  children: {
    control: false,
    description: "Content to display inside the modal content area.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  defaultVisible: {
    control: "boolean",
    description: "Sets the initial visibility state of the modal.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  height: {
    control: "select",
    options: [undefined, "xxs", "xs", "s", "m", "l", "xl", "xxl", "full"],
    description: "Defines the height of the modal.",
    table: {
      defaultValue: {
        summary: "undefined",
      },
      type: {
        summary:
          "'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'full' | undefined",
      },
    },
  },
  onClose: {
    control: false,
    description: "Function to call when the modal is closed.",
    table: {
      type: {
        summary: "() => void",
      },
    },
  },
  preventEscaping: {
    control: "boolean",
    description: "Prevents closing the modal with the Escape key.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  preventFocus: {
    control: "boolean",
    description: "Prevents focusing on the modal when it opens.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  preventInteractiveBackdrop: {
    control: "boolean",
    description: "Prevents closing the modal by clicking on the backdrop.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  visible: {
    control: "boolean",
    description: "Controls the visibility of the modal.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  variant: {
    control: {
      type: "select",
    },
    options: [undefined, "dialog", "form", "form-wide", "workflow"],
    description: "Defines the width of the modal.",
    table: {
      defaultValue: {
        summary: "dialog",
      },
      type: {
        summary: "'dialog' | 'form' | 'form-wide' | 'workflow'",
      },
    },
  },
  width: {
    condition: {
      arg: "variant",
      neq: undefined,
    },
    control: "select",
    options: [undefined, "xxs", "xs", "s", "m", "l", "xl", "xxl", "full"],
    description: "Defines the width of the modal.",
  },
  contentPadding: {
    condition: {
      arg: "variant",
      neq: undefined,
    },
    control: "boolean",
    description:
      "If true, adds padding to the modal content area. Default is true.",
  },
};

const CommonHeaderArgTypes: ArgTypes<Partial<ModalCompositionProps["Header"]>> =
  {
    icon: {
      control: "select",
      options: ICON_OPTIONS,
      mapping: ICONS_MAP,
      description:
        "Icon to display next to the header title. Should not be used together with back navigation props.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    labelBack: {
      control: "text",
      description:
        "Accessible label for the back button. Should not be used together with an icon",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    onClickBack: {
      control: false,
      description:
        "Function to call when the back button is clicked. Should not be used together with an icon.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
  };

//#endregion

//#region Composition Components
export const ModalRootArgTypes: ArgTypes<ModalCompositionProps["Root"]> = {
  container: {
    control: "boolean",
    description:
      "If true, the modal will use a responsive container that adjusts its size based on the viewport.",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
  },
  variant: CommonModalArgTypes.variant,
  ...CommonModalArgTypes,
};

export const ModalActionsArgTypes: ArgTypes<ModalCompositionProps["Actions"]> =
  {
    children: {
      control: false,
      description: "Content to display inside the modal actions.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    labelClose: {
      control: "text",
      description: "Accessible label for the close button.",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "Cancel",
        },
      },
    },
    left: {
      control: false,
      description: "Left aligned content to display in the modal actions.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    metaLabel: {
      control: "text",
      description: "Meta label text to display in the modal actions.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    onClickClose: {
      control: false,
      description: "Function to call when the close button is clicked.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    preventClose: {
      control: "boolean",
      description: "Prevents the modal from being closed via the close button.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  };

export const ModalHeaderArgTypes: ArgTypes<ModalCompositionProps["Header"]> = {
  children: {
    control: "text",
    description: "Title text to display in the modal header.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  description: {
    control: "text",
    description: "Description text to display below the header title.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  icon: {
    if: {
      arg: "labelBack",
      exists: false,
    },
    ...CommonHeaderArgTypes.icon,
  },
  infoIconTooltip: FieldArgTypes.infoIconTooltip,
  descriptionId: {
    control: "text",
    description:
      "ID for the description element, used for accessibility purposes.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  labelBack: {
    if: {
      arg: "icon",
      exists: false,
    },
    ...CommonHeaderArgTypes.labelBack,
  },
  labelClose: {
    control: "text",
    description: "Accessible label for the close button.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  labelId: {
    control: "text",
    description:
      "ID for the header title element, used for accessibility purposes.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  onClickBack: {
    if: {
      arg: "icon",
      exists: false,
    },
    ...CommonHeaderArgTypes.onClickBack,
  },
  onClickClose: {
    control: false,
    description: "Function to call when the close button is clicked.",
    table: {
      type: {
        summary: "() => void",
      },
    },
  },
  preventClose: {
    control: "boolean",
    description:
      "Prevents the modal from being closed via the close button. If true, the close button will not be rendered.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
};

export const ModalContentArgTypes: ArgTypes<ModalCompositionProps["Content"]> =
  {
    children: CommonModalArgTypes.children,
    padding: {
      control: "boolean",
      description:
        "Deprecated: use horizontal padding (--sprout-common-spacing-xxl) on the wrapping element passed as children instead.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "true",
        },
      },
    },
    overflowY: {
      control: "select",
      options: [undefined, "hidden", "visible", "scroll", "auto"],
      description:
        "Sets the vertical overflow behavior of the modal content area.",
      table: {
        type: {
          summary: "'hidden' | 'visible' | 'scroll' | 'auto'",
        },
        defaultValue: {
          summary: "auto",
        },
      },
    },
    overflowX: {
      control: "select",
      options: [undefined, "hidden", "visible", "scroll", "auto"],
      description:
        "Sets the horizontal overflow behavior of the modal content area.",
      table: {
        type: {
          summary: "'hidden' | 'visible' | 'scroll' | 'auto'",
        },
        defaultValue: {
          summary: "hidden",
        },
      },
    },
    divider: {
      control: "select",
      options: [undefined, "visible", "none", "auto"],
      description:
        "Controls the visibility of the top and bottom dividers in the modal content area.",
      table: {
        type: {
          summary: "'visible' | 'none' | 'auto'",
        },
        defaultValue: {
          summary: "auto",
        },
      },
    },
  };
//#endregion

//#region Modal API
export const ModalArgTypes: ArgTypes<ModalProps> = {
  ...CommonModalArgTypes,
  headerTitle: ModalHeaderArgTypes.children,
  headerDescription: ModalHeaderArgTypes.description,
  headerLabelClose: ModalHeaderArgTypes.labelClose,
  headerIcon: {
    if: {
      arg: "headerLabelBack",
      exists: false,
    },
    ...CommonHeaderArgTypes.icon,
  },
  headerInfoIconTooltip: ModalHeaderArgTypes.infoIconTooltip,
  headerLabelBack: {
    if: {
      arg: "headerIcon",
      exists: false,
    },
    ...CommonHeaderArgTypes.labelBack,
  },
  headerOnClickBack: {
    if: {
      arg: "headerIcon",
      exists: false,
    },
    ...CommonHeaderArgTypes.onClickBack,
  },
  jsx: {
    control: "boolean",
    description:
      "If true, allows the use of JSX elements as children for more complex structures.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  footerActions: ModalActionsArgTypes.children,
  footerLeft: ModalActionsArgTypes.left,
  footerMetaLabel: ModalActionsArgTypes.metaLabel,
  footerLabelClose: ModalActionsArgTypes.labelClose,
};
//#endregion
