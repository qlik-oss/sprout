import {
  type CSSProperties,
  type ReactNode,
  type Ref,
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { getDeviceInputType } from "../Utils/device";
import type { DataAttributes, HTMLDivProps } from "../htmlTypes";

function getBodyTheme() {
  return {
    theme: document.body.dataset.qlikTheme,
    appearance: document.body.dataset.qlikAppearance,
    density: document.body.dataset.qlikDensity,
    roundness: document.body.dataset.qlikRoundness,
    sizing: document.body.dataset.qlikSizing,
    typography: document.body.dataset.qlikTypography,
  } as ReturnType<typeof getTheme>;
}

type ThemeAPI = {
  /** The theme name, e.g. "qlik-light" or "qlik-dark" */
  theme?: string;
  /**
   * Optional, opt-in to enforce touch optimizations. If not set, it will be inferred.
   */
  isTouch?: boolean;
};

type ThemeProviderProps = ThemeAPI & {
  asDiv?: boolean;
  onLoad?: (theme: ReturnType<typeof themeToDataset>) => void;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
} & Omit<HTMLDivProps, "onLoad">;

const ThemeContext = createContext<Partial<ThemeAPI>>({});

export function themeToProps(
  theme: ReturnType<typeof getTheme>,
): DataAttributes {
  return Object.keys(theme).reduce((acc: DataAttributes, key: string) => {
    acc[`data-qlik-${key.toLowerCase()}`] = (theme as Record<string, string>)[
      key
    ];
    return acc;
  }, {});
}

/**
 * The ThemeProvider is coupled to the distribution of the CSS file which olds the tokens.
 * It is responsible to setup the correct data-attributes on element to make style applied.
 */
export const ThemeProvider = forwardRef<HTMLDivElement, ThemeProviderProps>(
  ThemeProviderBase,
);

function ThemeProviderBase(
  props: ThemeProviderProps,
  ref?: Ref<HTMLDivElement>,
) {
  const [myRef, setMyRef] = useState<HTMLDivElement | null>(null);
  const { theme: themeOpt, asDiv, onLoad, children, isTouch, ...rest } = props;
  const context = useContext(ThemeContext);
  const device = getDeviceInputType();

  const globalTheme = getTheme(myRef || document.body, themeOpt);

  const [bodyTheme, setBodyTheme] = useState<ReturnType<typeof getTheme>>(() =>
    getBodyTheme(),
  );

  useEffect(() => {
    // observe body attributes to update globalTheme accordingly
    const observer = new MutationObserver(() => {
      if (!asDiv) {
        setBodyTheme(getBodyTheme());
      }
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: [
        "data-qlik-theme",
        "data-qlik-appearance",
        "data-qlik-density",
        "data-qlik-roundness",
        "data-qlik-sizing",
        "data-qlik-typography",
      ],
    });
    return () => {
      observer.disconnect();
    };
  }, [themeOpt, asDiv]);

  const theme = useMemo(
    () => ({
      ...(asDiv ? globalTheme : bodyTheme),
      theme: themeOpt || context.theme || globalTheme.theme,
    }),
    [globalTheme, themeOpt, context.theme, asDiv, bodyTheme],
  );

  const themeIsTouch = useMemo(() => {
    return {
      ...theme,
      isTouch: isTouch ?? context.isTouch ?? device.isTouch,
    };
  }, [theme, isTouch, context.isTouch, device.isTouch]);

  const themeProps = themeToProps(theme);

  useEffect(() => {
    if (onLoad) {
      onLoad(themeToDataset(theme));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  if (asDiv) {
    return (
      <ThemeContext.Provider value={themeIsTouch}>
        <div
          {...themeProps}
          {...rest}
          ref={(node) => {
            setMyRef(node);
            if (ref) {
              if (typeof ref === "function") {
                ref(node);
              } else {
                // eslint-disable-next-line no-param-reassign
                ref.current = node;
              }
            }
          }}
        >
          {children}
        </div>
      </ThemeContext.Provider>
    );
  }
  return (
    <ThemeContext.Provider value={themeIsTouch}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProviderBase.displayName = "ThemeProvider";

export function useTheme() {
  return useContext(ThemeContext);
}
