import type { BadgeProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react";

export const BadgeArgTypes: ArgTypes<BadgeProps> = {
  variant: {
    control: {
      type: "select",
    },
    options: ["dot", "alphanumeric"],
    description: "Select `alphanumeric` to display text inside the badge. `dot` shows a simple indicator without text.",
    table: {
      defaultValue: { summary: "dot" },
      type: {
        summary: "dot | alphanumeric",
      },
    },
  },
  color: {
    control: {
      type: "select",
    },
    description: "Color variant of the badge. When undefined, it defaults to the neutral variant.",
    options: ["neutral", "info", "success", "warning", "danger", "selected"],
    table: {
      defaultValue: { summary: "neutral" },
      type: {
        summary: "info | success | warning | danger | selected | neutral",
      },
    },
  },
  text: {
    if: { arg: "variant", eq: "alphanumeric" },
    control: {
      type: "text",
    },
    description: "Text to display inside the badge. Only applicable when variant is 'alphanumeric'.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
};
