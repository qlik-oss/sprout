import { useEffect, useState } from "react";

import { ThemeProvider, useTheme } from "./ThemeProvider";

function useRemoveBodyDataset() {
  useEffect(() => {
    // playwright body setup of default theme we need to drop
    delete document.body.dataset.qlikTheme;
    return () => {
      document.body.dataset.qlikTheme = "qlik-light";
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
    <div data-qlik-theme="qlik-dark">
      <ThemeProvider asDiv data-testid="deep">
        up
      </ThemeProvider>
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
  const [theme, setTheme] = useState<{ qlikTheme: string } | null>(null);
  return (
    <ThemeProvider
      onLoad={(t) => {
        if (t.qlikTheme !== theme?.qlikTheme) {
          setTheme(t as { qlikTheme: string });
        }
      }}
    >
      <button
        type="button"
        data-testid="theme"
        onClick={() => {
          document.body.dataset.qlikTheme =
            document.body.dataset.qlikTheme === "qlik-light"
              ? "qlik-dark"
              : "qlik-light";
        }}
      >
        {theme?.qlikTheme || "no-theme"}
      </button>
    </ThemeProvider>
  );
}
