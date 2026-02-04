import type { MediaAPI } from "@qlik/sprout-css-modules";
import type { ArgTypes } from "@storybook/react-vite";

export const SproutMediaArgTypes: ArgTypes<MediaAPI> = {
  get: {
    control: false,
    description:
      "Gets the data structure you want based on viewport sizes. It's a generic method so you need to specify the type when calling it.",
    table: {
      type: {
        summary:
          "({ s, m, l, xl }: Partial<Record<ViewportSize, T>>) => T | undefined",
      },
    },
  },
  classNames: {
    control: false,
    description:
      "An extension of sprout.classNames to support viewport based classNames.",
    table: {
      type: {
        summary:
          "(options: ViewportOptions<AllClasses[] | AllClasses>, className?: string) => string",
      },
    },
  },
  addListener: {
    description:
      "Integrates sprout.media with your framework reactivity system. It's based on the native matchMedia API.",
    table: {
      type: {
        summary: "(viewportSize: ViewportSize) => void",
      },
    },
  },
  removeListeners: {
    description: "Removes all listeners added with addListener.",
    table: {
      type: {
        summary: "() => void",
      },
    },
  },
  getViewportSize: {
    control: false,
    description:
      "Returns the current viewport size based on the system definition of it.",
    table: {
      type: {
        summary: "() => ViewportSize",
      },
    },
  },
};
