export type ChangeEvent = {
  type: "change";
  target: {
    name?: string;
    value?: string;
    type?: "text" | "select-one" | "select-multiple";
    selectedOptions?: Array<{ value: string }>;
  };
};

const SELECTOR_OPTIONS_AND_DISPLAYED = `button[data-option]:not([disabled]):not([aria-hidden="true"])`;
const SELECTOR_OPTIONS_SELECTED_AND_DISPLAYED = `button[aria-selected="true"]:not([disabled]):not([aria-hidden="true"])`;

export function getAllItems(ref: HTMLElement): NodeList {
  return ref.querySelectorAll(SELECTOR_OPTIONS_AND_DISPLAYED);
}

export function getSelectedItems(ref: HTMLElement): NodeList {
  return ref.querySelectorAll(SELECTOR_OPTIONS_SELECTED_AND_DISPLAYED);
}

export const createMultiSelectOnChangeEvent = ({
  name,
  value,
  values,
  action,
}: {
  name?: string;
  value?: string;
  values?: Array<string>;
  action?: string;
}) => {
  const output: ChangeEvent = {
    type: "change",
    target: {
      name,
      value,
      type: "select-multiple",
      selectedOptions: (values || []).map((v) => ({ value: v })),
    },
  };
  if (action === "add" && value) {
    // ensure it is inside it
    if (!(values || []).find((v) => v === value)) {
      output.target.selectedOptions = output.target.selectedOptions?.concat({
        value,
      });
    }
  } else if (action === "remove") {
    output.target.selectedOptions = output.target.selectedOptions?.filter(
      (v) => v.value !== value,
    );
  }
  return output;
};
