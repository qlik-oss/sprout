import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Divider,
  SegmentedControl,
  classNames,
} from "@qlik/sprout-react";

import { JSONViewer } from "../JSONViewer/JSONViewer";
import {
  DARKPALETTE,
  LIGHTPALETTE,
} from "../SimpleThemeCreator/SimpleThemeColorPalettes";
import { SimpleThemeCreator } from "../SimpleThemeCreator/SimpleThemeCreator";
import { ThemePreviewer } from "../ThemePreviewer/ThemePreviewer";

export type LightModeSproutThemePartial = {
  light: SingleModeThemePartial;
};

export type DarkModeSproutThemePartial = {
  dark: SingleModeThemePartial;
};

export type BothModeSproutThemePartial = {
  light: SingleModeThemePartial;
  dark: SingleModeThemePartial;
};

export type SproutThemePartial =
  | LightModeSproutThemePartial
  | DarkModeSproutThemePartial
  | BothModeSproutThemePartial;

export type SingleModeThemePartial = {
  sprout: { [key: string]: SemanticGroupPartial };
};

export type SemanticGroupPartial = {
  [key: string]: { [key: string]: { value: string } | { value: string } };
};

const noop = () => {};

export function ThemePairCreator({
  onUpdate = noop,
}: {
  onUpdate: (themePair: SproutThemePartial) => void;
}) {
  const defaultThemeParams = {
    light: {
      background: LIGHTPALETTE.backgrounds[0],
      foreground: LIGHTPALETTE.foregrounds[0],
      brand: LIGHTPALETTE.brands[0],
      selected: LIGHTPALETTE.selecteds[0],
    },
    dark: {
      background: DARKPALETTE.backgrounds[0],
      foreground: DARKPALETTE.foregrounds[0],
      brand: DARKPALETTE.brands[0],
      selected: DARKPALETTE.selecteds[0],
    },
  };

  const [themeMode, setThemeMode] = useState<string>("light");
  const [themePair, setThemePair] = useState<SproutThemePartial>({
    light: { sprout: {} },
    dark: { sprout: {} },
  });
  const [themeCreationMode, setThemeCreationMode] = useState<string>("simple");

  const onUpdateRef = useRef(onUpdate);
  useLayoutEffect(() => {
    onUpdateRef.current = onUpdate;
  });

  const currentTheme = useMemo<SproutThemePartial>(() => {
    if (themeMode === "both") {
      return themePair;
    }
    if (themeMode === "light") {
      return { light: (themePair as LightModeSproutThemePartial).light };
    }
    return { dark: (themePair as DarkModeSproutThemePartial).dark };
  }, [themeMode, themePair]);

  useEffect(() => {
    onUpdateRef.current(currentTheme);
  }, [currentTheme]);

  const onUpdateLightTheme = useCallback((theme: SingleModeThemePartial) => {
    setThemePair((prev) => ({ ...prev, light: theme }));
  }, []);

  const onUpdateDarkTheme = useCallback((theme: SingleModeThemePartial) => {
    setThemePair((prev) => ({ ...prev, dark: theme }));
  }, []);

  return (
    <div className={classNames("flex", "flex-col", "gap-m", "h-full")}>
      <SegmentedControl.Group name="theme-simplicity-mode">
        <SegmentedControl.Segment
          defaultChecked
          label="Simple"
          value="simple"
          onChange={() => {
            setThemeCreationMode("simple");
          }}
        />
        <SegmentedControl.Segment
          label="Advanced"
          value="advanced"
          onChange={() => {
            setThemeCreationMode("advanced");
          }}
        />
      </SegmentedControl.Group>

      <Divider />
      <div className={classNames("flex", "flex-row", "gap-m", "h-full")}>
        {themeCreationMode === "simple" && (
          <div className={classNames("min-w-s")}>
            <SegmentedControl.Group name="theme-pairing-mode-control">
              <SegmentedControl.Segment
                defaultChecked
                label="Light"
                value="light"
                onChange={() => {
                  setThemeMode("light");
                }}
              />
              <SegmentedControl.Segment
                label="Dark"
                value="dark"
                onChange={() => {
                  setThemeMode("dark");
                }}
              />
              <SegmentedControl.Segment
                label="Both"
                value="both"
                onChange={() => {
                  setThemeMode("both");
                }}
              />
            </SegmentedControl.Group>

            <div
              className={classNames(
                "flex",
                "flex-col",
                "gap-m",
                "h-full",
                "overflow-auto",
              )}
              style={{
                blockSize: "var(--sprout-container-sizing-l)",
              }}
            >
              <div className={classNames("flex", "flex-col", "gap-s")}>
                {themeMode !== "dark" && (
                  <>
                    <div className={classNames("font-heading-l")}>Light</div>
                    <SimpleThemeCreator
                      palettes={LIGHTPALETTE}
                      defaultThemeParams={defaultThemeParams.light}
                      onUpdate={onUpdateLightTheme}
                    />
                  </>
                )}
                {themeMode !== "light" && (
                  <>
                    <div className={classNames("font-heading-l")}>Dark</div>
                    <SimpleThemeCreator
                      palettes={DARKPALETTE}
                      defaultThemeParams={defaultThemeParams.dark}
                      onUpdate={onUpdateDarkTheme}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        )}
        {themeCreationMode === "advanced" && (
          <div className={classNames("min-w-m", "overflow-auto")}>
            (Not yet implemented)
            <JSONViewer data={currentTheme} />
          </div>
        )}
        <Divider orientation="vertical" />
        <div className={classNames("overflow-auto", "grow-1")}>
          <ThemePreviewer theme={currentTheme} />
        </div>
      </div>
    </div>
  );
}
