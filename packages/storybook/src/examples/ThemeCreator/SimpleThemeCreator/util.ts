import chroma from "chroma-js";

import type { SingleModeThemePartial } from "../ThemePairCreator/ThemePairCreator";

export type ThemeParameters = {
  background: string;
  foreground: string;
  brand: string;
  selected: string;
};

export function createTokenValuesFromBaseColors(
  themeParams: ThemeParameters,
): SingleModeThemePartial {
  return {
    sprout: {
      common: {
        "background-color": {
          default: {
            value: themeParams.background,
          },
          weak: {
            value: chroma(themeParams.background).darken(0.1).hex(),
          },
          moderate: {
            value: chroma(themeParams.background).darken(0.2).hex(),
          },
          strong: {
            value: chroma(themeParams.background).darken(0.3).hex(),
          },
        },
        "foreground-color": {
          default: {
            value: themeParams.foreground,
          },
          weak: {
            value: chroma(themeParams.foreground).alpha(0.76).hex(),
          },
          disabled: {
            value: chroma(themeParams.foreground).alpha(0.55).hex(),
          },
        },
      },
      "brand-primary": {
        color: {
          default: {
            value: themeParams.brand,
          },
          hover: {
            value: chroma(themeParams.brand).darken(0.1).hex(),
          },
          pressed: {
            value: chroma(themeParams.brand).darken(0.2).hex(),
          },
          toggled: {
            value: chroma(themeParams.brand).darken(0.3).hex(),
          },
          focus: {
            value: chroma(themeParams.brand).darken(0.1).hex(),
          },
          weak: {
            value: chroma(themeParams.brand).alpha(0.2).hex(),
          },
          disabled: {
            value: chroma(themeParams.brand).desaturate(10).brighten(1).hex(),
          },
          inverse: {
            value:
              chroma.contrast(themeParams.brand, "#ffffff") > 4.5
                ? "#ffffff"
                : "#000000",
          },
        },
      },
      selected: {
        color: {
          default: {
            value: themeParams.selected,
          },
          inverse: {
            value:
              chroma.contrast(themeParams.selected, "#ffffff") > 4.5
                ? "#ffffff"
                : "#000000",
          },
        },
        "background-color": {
          default: {
            value: chroma(
              chroma.contrast(themeParams.selected, "#ffffff") > 4.5
                ? "#ffffff"
                : "#000000",
            )
              .darken(0.4)
              .hex(),
          },
        },
        border: {
          default: {
            value: `1px solid ${themeParams.selected}`,
          },
        },
      },
    },
  };
}
