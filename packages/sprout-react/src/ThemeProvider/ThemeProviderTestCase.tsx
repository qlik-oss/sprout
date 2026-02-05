/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";

import { ThemeProvider, useTheme } from "./ThemeProvider";

function useRemoveBodyDataset() {
  useEffect(() => {
    // playwright body setup of default theme we need to drop
    // @ts-ignore
    delete document.body.dataset.theme;
    // @ts-ignore
    delete document.body.dataset.appearance;
    // @ts-ignore
    delete document.body.dataset.density;
    // @ts-ignore
    delete document.body.dataset.roundness;
    // @ts-ignore
    delete document.body.dataset.sizing;
    // @ts-ignore
    delete document.body.dataset.typography;
    return () => {
      document.body.dataset.qlikTheme = "qlik-light";
      document.body.dataset.qlikAppearance = "qlik-light";
      document.body.dataset.qlikDensity = "comfortable";
      document.body.dataset.qlikRoundness = "soft";
      document.body.dataset.qlikSizing = "mid-sized";
      document.body.dataset.qlikTypography = "source-sans";
    };
  }, []);
}

export function ThemeProviderGlobal() {
  useRemoveBodyDataset();
  return (
    <ThemeProvider asDiv id="component-testing">
      up
    </ThemeProvider>
  );
}

export function ThemeProviderCascade() {
  useRemoveBodyDataset();

  return (
    <ThemeProvider asDiv data-testid="root" data-qlik-density="dense">
      <ThemeProvider asDiv data-testid="nested" data-qlik-roundness="rounded">
        up
      </ThemeProvider>
    </ThemeProvider>
  );
}

export function ThemeProviderWithManualSetup() {
  useRemoveBodyDataset();

  return (
    <div data-qlik-sizing="foo" data-qlik-typography="source-sans">
      <div data-qlik-appearance="qlik-dark">
        <div data-qlik-density="dense">
          <ThemeProvider asDiv data-testid="deep">
            up
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

function ReadIsTouch() {
  const theme = useTheme();
  return <div data-testid="isTouch">{theme.isTouch ? "true" : "false"}</div>;
}

export function ThemeExposeIsTouch({ isTouch }: { isTouch?: boolean }) {
  return (
    <ThemeProvider isTouch={isTouch}>
      <ReadIsTouch />
    </ThemeProvider>
  );
}

export function ThemeProviderWatchBody() {
  const [theme, setTheme] = useState<{ qlikAppearance: string } | null>(null);
  return (
    <ThemeProvider
      onLoad={(t) => {
        setTheme(t);
      }}
    >
      <button
        type="button"
        data-testid="theme-appearance"
        onClick={() => {
          document.body.dataset.qlikAppearance =
            document.body.dataset.qlikAppearance === "qlik-light"
              ? "qlik-dark"
              : "qlik-light";
        }}
      >
        {theme?.qlikAppearance || "no-theme"}
      </button>
    </ThemeProvider>
  );
}
