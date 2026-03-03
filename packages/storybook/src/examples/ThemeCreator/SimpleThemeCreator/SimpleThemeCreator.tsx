import { useEffect, useState } from "react";

import { classNames } from "@qlik/sprout-react";

import type { SingleModeThemePartial } from "../ThemePairCreator/ThemePairCreator";
import { ColorPicker } from "./ColorPicker/ColorPicker";
import type { SimpleThemeParamPaletteColors } from "./SimpleThemeColorPalettes";
import { type ThemeParameters, createTokenValuesFromBaseColors } from "./util";

export function SimpleThemeCreator({
  defaultThemeParams,
  palettes,
  onUpdate,
}: {
  defaultThemeParams: ThemeParameters;
  palettes: SimpleThemeParamPaletteColors;
  onUpdate: (theme: SingleModeThemePartial) => void;
}) {
  const [backgroundThemeValue, setBackgroundThemeValue] = useState<string>(
    defaultThemeParams.background,
  );
  const [foregroundThemeValue, setForegroundThemeValue] = useState<string>(
    defaultThemeParams.foreground,
  );
  const [brandThemeValue, setBrandThemeValue] = useState<string>(
    defaultThemeParams.brand,
  );
  const [selectedThemeValue, setSelectedThemeValue] = useState<string>(
    defaultThemeParams.selected,
  );

  useEffect(() => {
    const newTheme = createTokenValuesFromBaseColors({
      background: backgroundThemeValue,
      foreground: foregroundThemeValue,
      brand: brandThemeValue,
      selected: selectedThemeValue,
    });
    onUpdate(newTheme);
  }, [
    backgroundThemeValue,
    foregroundThemeValue,
    brandThemeValue,
    selectedThemeValue,
    onUpdate,
  ]);

  return (
    <div className={classNames("flex", "flex-col", "gap-m")}>
      <span className={classNames("font-label-l-emphasized")}>Appearance</span>
      <span className={classNames("font-label-m-emphasized")}>Colors</span>

      <div
        className={classNames(
          "grid",
          "grid-cols-2",
          "gap-m",
          "flex-row",
          "items-baseline",
        )}
      >
        <span className={classNames("font-label-s")}>Background</span>
        <ColorPicker
          colors={palettes.backgrounds}
          defaultSelectedColor={backgroundThemeValue}
          onChange={(color) => {
            setBackgroundThemeValue(color);
          }}
        />

        <span className={classNames("font-label-s")}>Foreground</span>
        <ColorPicker
          colors={palettes.foregrounds}
          defaultSelectedColor={foregroundThemeValue}
          onChange={(color) => {
            setForegroundThemeValue(color);
          }}
        />

        <span className={classNames("font-label-s")}>Brand</span>
        <ColorPicker
          colors={palettes.brands}
          defaultSelectedColor={brandThemeValue}
          onChange={(color) => {
            setBrandThemeValue(color);
          }}
        />

        <span className={classNames("font-label-s")}>Selected</span>
        <ColorPicker
          colors={palettes.selecteds}
          defaultSelectedColor={selectedThemeValue}
          onChange={(color) => {
            setSelectedThemeValue(color);
          }}
        />
      </div>
    </div>
  );
}
