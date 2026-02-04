import chroma from "chroma-js";

import { Tabs, Tag, classNames } from "@qlik/sprout-css-react";
import StarIcon from "@qlik/sprout-icons/react/Star";
import Star2Icon from "@qlik/sprout-icons/react/Star2";

import type {
  DarkModeSproutThemePartial,
  LightModeSproutThemePartial,
  SemanticGroupPartial,
  SproutThemePartial,
} from "../ThemePairCreator/ThemePairCreator";

type SemanticGroups = {
  light: SemanticGroupPartial;
  dark: SemanticGroupPartial;
};

function ThemeColorCombo({
  foregroundColors,
  backgroundColor,
  backgroundColorName = "BG",
}: {
  foregroundColors: { [key: string]: { value: string } };
  backgroundColor: string;
  backgroundColorName: string;
}) {
  const fgColorToUse = Object.entries(foregroundColors)[0]
    ? Object.entries(foregroundColors)[0][1].value
    : "#000000";

  return (
    <div>
      <div
        key={backgroundColor}
        style={{
          backgroundColor,
          color: fgColorToUse,
        }}
        className={classNames("p-m")}
      >
        <div
          className={classNames("font-label-s-emphasized")}
          style={{ color: fgColorToUse }}
        >
          <span>{backgroundColorName}</span>
          <span className={classNames("font-label-s")}>
            {" "}
            ({backgroundColor})
          </span>
        </div>

        {Object.entries(foregroundColors).map(([fgKey, fgColorObj]) => {
          const fgColor = fgColorObj.value;
          return (
            <div
              key={fgKey}
              style={{
                color: fgColor,
                gridTemplateColumns:
                  "repeat(2, minmax(0, 140px)) minmax(0, 50px) minmax(0,140px) ",
              }}
              className={classNames(
                "font-label-xs",
                "grid",
                "grid-cols-4",
                "items-baseline",
                "mt-m",
              )}
            >
              <span
                className={classNames(
                  "overflow-hidden",
                  "text-nowrap",
                  "truncate",
                )}
              >
                {fgKey}
              </span>

              <div className={classNames("flex", "items-center", "flex-row")}>
                <span
                  className={classNames(
                    "flex",
                    "items-center",
                    "flex-row",
                    "mr-xs",
                  )}
                  style={{
                    color: fgColor,
                  }}
                >
                  <Star2Icon />
                  <StarIcon />
                </span>
                <span
                  className={classNames(
                    "overflow-hidden",
                    "text-nowrap",
                    "truncate",
                  )}
                >
                  {fgColor}
                </span>
              </div>
              {(() => {
                // Blend colors with alpha channels against a white background before calculating contrast
                const blendedBg =
                  chroma(backgroundColor).alpha() < 1
                    ? chroma.mix(
                        "#ffffff",
                        backgroundColor,
                        chroma(backgroundColor).alpha(),
                        "rgb",
                      )
                    : chroma(backgroundColor);
                const blendedFg =
                  chroma(fgColor).alpha() < 1
                    ? chroma.mix(
                        blendedBg.hex(),
                        fgColor,
                        chroma(fgColor).alpha(),
                        "rgb",
                      )
                    : chroma(fgColor);
                const contrastRatio = chroma.contrast(blendedBg, blendedFg);
                return (
                  <>
                    <div>{contrastRatio.toFixed(1)}: 1 </div>
                    {fgKey !== "disabled" &&
                      backgroundColorName !== "disabled" && (
                        <Tag
                          color={contrastRatio >= 4.5 ? "success" : "error"}
                          text={contrastRatio >= 4.5 ? "PASS" : "FAIL"}
                          title="WCAG 2.1 AA classification"
                          size="s"
                        />
                      )}
                  </>
                );
              })()}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SemanticGroupColorPreview({
  name,
  semanticGroups,
}: {
  name: string;
  semanticGroups: SemanticGroups;
}) {
  let lightColorCombos: Array<ColorCombo> = [];
  let darkColorCombos: Array<ColorCombo> = [];
  if (Object.hasOwn(semanticGroups, "light")) {
    lightColorCombos = getColorCombosFromSemanticGroup(semanticGroups.light);
  }
  if (Object.hasOwn(semanticGroups, "dark")) {
    darkColorCombos = getColorCombosFromSemanticGroup(semanticGroups.dark);
  }

  return (
    <div className={classNames("p-m", "flex", "gap-m")}>
      <div className={classNames("font-label-m-emphasized")}>{name}</div>
      <div
        className={classNames(
          "grid",
          lightColorCombos.length > 0 && darkColorCombos.length > 0
            ? "grid_cols_2"
            : "grid_cols_1",
        )}
      >
        <div>
          {lightColorCombos.map(
            ({
              foregroundColors,
              backgroundColor,
              backgroundColorName,
              backgroundColorType,
            }) => (
              <ThemeColorCombo
                key={`${name}-${backgroundColorName}-${backgroundColorType}-colorCombo-light`}
                foregroundColors={foregroundColors}
                backgroundColor={backgroundColor}
                backgroundColorName={backgroundColorName}
              />
            ),
          )}
        </div>
        <div>
          {darkColorCombos.map(
            ({
              foregroundColors,
              backgroundColor,
              backgroundColorName,
              backgroundColorType,
            }) => (
              <ThemeColorCombo
                key={`${name}-${backgroundColorName}-${backgroundColorType}-colorCombo-dark`}
                foregroundColors={foregroundColors}
                backgroundColor={backgroundColor}
                backgroundColorName={backgroundColorName}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function getPossibleForegroundColorsForColor(
  semanticGroup: SemanticGroupPartial,
): {
  [key: string]: { value: string };
} {
  const foregroundColors: { [key: string]: { value: string } } = {};
  // When using a color as background, we can only match with its inverse color as foreground
  if (
    Object.hasOwn(semanticGroup, "color") &&
    Object.hasOwn(semanticGroup["color"], "inverse")
  ) {
    foregroundColors["inverse"] = semanticGroup.color.inverse;
  }
  return foregroundColors;
}

function getPossibleForegroundColorsForBackground(
  semanticGroup: SemanticGroupPartial,
): {
  [key: string]: { value: string };
} {
  const foregroundColors: { [key: string]: { value: string } } = {};
  if (Object.hasOwn(semanticGroup, "color")) {
    for (const key in semanticGroup["color"]) {
      // Backgrounds should be matched with all but the inverse and weak color
      if (key !== "inverse" && key !== "weak") {
        foregroundColors[key] = semanticGroup["color"][key];
      }
    }
  }
  if (Object.hasOwn(semanticGroup, "foreground-color")) {
    for (const key in semanticGroup["foreground-color"]) {
      // Backgrounds should be matched with all but the inverse color
      if (key !== "inverse") {
        foregroundColors[key] = semanticGroup["foreground-color"][key];
      }
    }
  }

  return foregroundColors;
}

type ColorCombo = {
  foregroundColors: { [key: string]: { value: string } };
  backgroundColor: string;
  backgroundColorName: string;
  backgroundColorType: string;
};

function getColorCombosFromSemanticGroup(
  semanticGroup: SemanticGroupPartial,
): Array<ColorCombo> {
  const colorCombos: Array<ColorCombo> = [];

  for (const key in semanticGroup["background-color"]) {
    if (key !== "foreground-color" && key !== "inverse") {
      colorCombos.push({
        foregroundColors:
          getPossibleForegroundColorsForBackground(semanticGroup),
        backgroundColor: semanticGroup["background-color"][key].value,
        backgroundColorName: key,
        backgroundColorType: "background-color",
      });
    }
  }

  for (const key in semanticGroup["color"]) {
    if (key !== "foreground-color" && key !== "inverse" && key !== "weak") {
      colorCombos.push({
        foregroundColors: getPossibleForegroundColorsForColor(semanticGroup),
        backgroundColor: semanticGroup["color"][key].value,
        backgroundColorName: key,
        backgroundColorType: "color",
      });
    } else if (key === "weak") {
      //Don't match weak colors with any foregrounds
      colorCombos.push({
        foregroundColors: {},
        backgroundColor: semanticGroup["color"][key].value,
        backgroundColorName: key,
        backgroundColorType: "color",
      });
    } else if (key === "inverse") {
      colorCombos.push({
        foregroundColors:
          getPossibleForegroundColorsForBackground(semanticGroup),
        backgroundColor: semanticGroup["color"][key].value,
        backgroundColorName: key,
        backgroundColorType: "color",
      });
    }
  }
  return colorCombos;
}

export function ThemePreviewer({ theme }: { theme: SproutThemePartial }) {
  if (!Object.hasOwn(theme, "light") && !Object.hasOwn(theme, "dark")) {
    return <div>No theme data to preview</div>;
  }

  const semanticGroupKeys = Object.keys(
    Object.hasOwn(theme, "light")
      ? (theme as LightModeSproutThemePartial).light.sprout
      : (theme as DarkModeSproutThemePartial).dark.sprout,
  );

  return (
    <div className={classNames("overflow-auto")}>
      <div className={classNames("font-heading-l", "p-m")}>Theme Previewer</div>
      <Tabs.Container defaultActiveKey="Surfaces">
        <Tabs.List showTrack>
          <Tabs.Tab aria-controls="Surfaces" defaultChecked title="Surfaces" />
          <Tabs.Tab
            aria-controls="Components"
            title="Components (Not yet implemented)"
            disabled
          />
        </Tabs.List>
        <Tabs.Panel id="Surfaces">
          {semanticGroupKeys.map((semanticGroupKey) => {
            const semanticGroups: SemanticGroups = { light: {}, dark: {} };
            if (Object.hasOwn(theme, "light")) {
              semanticGroups.light = (
                theme as LightModeSproutThemePartial
              ).light.sprout[semanticGroupKey];
            }
            if (Object.hasOwn(theme, "dark")) {
              semanticGroups.dark = (
                theme as DarkModeSproutThemePartial
              ).dark.sprout[semanticGroupKey];
            }
            return (
              <SemanticGroupColorPreview
                key={semanticGroupKey}
                name={semanticGroupKey}
                semanticGroups={semanticGroups}
              />
            );
          })}
        </Tabs.Panel>
        <Tabs.Panel id="Components">
          Components preview not yet implemented
        </Tabs.Panel>
      </Tabs.Container>
    </div>
  );
}
