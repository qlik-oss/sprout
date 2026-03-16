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
import {
  type Theme,
  type ThemeDataset,
  getTheme,
  themeToDataset,
} from "./theme";

function getBodyTheme(): Partial<Theme> {
  return {
    theme: document.body.dataset.qlikTheme,
  };
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
  onLoad?: (theme: ThemeDataset) => void;
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
/**
 * The ThemeProvider component renders onto a `div` HTML element. It accepts all `HTMLDivElement` attributes plus the following:
 * @param theme - The theme name to apply (e.g. `qlik-light` or `qlik-dark`).
 * @param isTouch - Optional opt-in to enforce touch optimizations. Inferred automatically if not set.
 * @param asDiv - If false, renders as a non-div container.
 * @param onLoad - Callback called when the theme is loaded.
 * @param children - Content to render inside the themed container.
 */
export const ThemeProvider = forwardRef<HTMLDivElement, ThemeProviderProps>(
  ThemeProviderBase,
);

function ThemeProviderBase(
  props: ThemeProviderProps,
  ref?: Ref<HTMLDivElement>,
) {
  const [myRef, setMyRef] = useState<HTMLDivElement | null>(null);
  const {
    theme: themeOpt,
    asDiv,
    onLoad,
    children,
    isTouch,
    "data-qlik-theme": asDivTheme,
    ...rest
  } = props;
  const context = useContext(ThemeContext);
  const device = getDeviceInputType();

  const [bodyTheme, setBodyTheme] = useState<Partial<Theme>>(() =>
    getBodyTheme(),
  );

  useEffect(() => {
    // observe body attributes to update globalTheme accordingly
    const observer = new MutationObserver(() => {
      if (!asDiv) {
        const newBodyTheme = getBodyTheme();
        if (newBodyTheme.theme !== bodyTheme.theme) {
          if (newBodyTheme.theme) {
            setBodyTheme(newBodyTheme);
          }
        }
      }
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-qlik-theme"],
    });
    return () => {
      observer.disconnect();
    };
  }, [themeOpt, asDiv, bodyTheme.theme]);

  const theme = useMemo(() => {
    const parentTheme: Partial<Theme> = myRef ? getTheme(myRef) : {};
    return {
      theme:
        themeOpt ||
        context.theme ||
        asDivTheme ||
        parentTheme.theme ||
        bodyTheme.theme ||
        "qlik-light",
    };
  }, [asDivTheme, themeOpt, context.theme, bodyTheme, myRef]);

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
