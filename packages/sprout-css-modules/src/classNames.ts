/* eslint-disable @typescript-eslint/naming-convention */
import classNamesBase from "classnames";
import cursorClasses from "./cursor.module.css";
import displayClasses from "./display.module.css";
import flexClasses from "./flex.module.css";
import gridClasses from "./grid.module.css";
import iconClasses from "./icon.module.css";
import justifySelfClasses from "./justifyself.module.css";
import layoutClasses from "./layout.module.css";
import opacityClasses from "./opacity.module.css";
import overflowClasses from "./Overflow.module.css";
import positionClasses from "./position.module.css";
import rtlClasses from "./rtl.module.css";
import bgClasses from "./tokens/background.module.css";
import borderClasses from "./tokens/border.module.css";
import elevationClasses from "./tokens/elevation.module.css";
import fontClasses from "./tokens/font.module.css";
import layerClasses from "./tokens/layer.module.css";
import marginClasses from "./tokens/margin.module.css";
import outlineClasses from "./tokens/outline.module.css";
import paddingClasses from "./tokens/padding.module.css";
import sizingClasses from "./tokens/sizing.module.css";
import textClasses from "./tokens/text.module.css";
import fontStyle from "./utility/fontstyle.module.css";
import patternsClasses from "./utility/patterns.module.css";

export type SproutClasses = typeof overflowClasses &
  typeof flexClasses &
  typeof bgClasses &
  typeof borderClasses &
  typeof cursorClasses &
  typeof elevationClasses &
  typeof fontClasses &
  typeof fontStyle &
  typeof iconClasses &
  typeof justifySelfClasses &
  typeof layerClasses &
  typeof paddingClasses &
  typeof marginClasses &
  typeof sizingClasses &
  typeof textClasses &
  typeof displayClasses &
  typeof positionClasses &
  typeof opacityClasses &
  typeof outlineClasses &
  typeof gridClasses &
  typeof layoutClasses &
  typeof patternsClasses &
  typeof rtlClasses;

type SproutKey = keyof SproutClasses;
/**
 * @deprecated use SproutBg instead
 */
export type bg = keyof typeof bgClasses;
/**
 * @deprecated use SproutBorder instead
 */
export type border = keyof typeof borderClasses;
/**
 * @deprecated use SproutCursor instead
 */
export type cursor = keyof typeof cursorClasses;
/**
 * @deprecated use SproutDisplay instead
 */
export type display = keyof typeof displayClasses;
/**
 * @deprecated use SproutElevation instead
 */
export type elevation = keyof typeof elevationClasses;
/**
 * @deprecated use SproutFlex instead
 */
export type flex = keyof typeof flexClasses;
/**
 * @deprecated use SproutFont instead
 */
export type font = keyof typeof fontClasses;
/**
 * @deprecated use SproutGrid instead
 */
export type grid = keyof typeof gridClasses;
/**
 * @deprecated use SproutIcon instead
 */
export type icon = keyof typeof iconClasses;
/**
 * @deprecated use SproutJustifySelf instead
 */
export type justifySelf = keyof typeof justifySelfClasses;
/**
 * @deprecated use SproutLayout instead
 */
export type layout = keyof typeof layoutClasses;
/**
 * @deprecated use SproutLayer instead
 */
export type layer = keyof typeof layerClasses;
/**
 * @deprecated use SproutMargin instead
 */
export type margin = keyof typeof marginClasses;
/**
 * @deprecated use SproutOpacity instead
 */
export type opacity = keyof typeof opacityClasses;
/**
 * @deprecated use SproutOutline instead
 */
export type outline = keyof typeof outlineClasses;
/**
 * @deprecated use SproutOverflow instead
 */
export type overflow = keyof typeof overflowClasses;
/**
 * @deprecated use SproutPadding instead
 */
export type padding = keyof typeof paddingClasses;
/**
 * @deprecated use SproutPosition instead
 */
export type position = keyof typeof positionClasses;
/**
 * @deprecated use SproutSizing instead
 */
export type sizing = keyof typeof sizingClasses;
/**
 * @deprecated use SproutText instead
 */
export type text = keyof typeof textClasses;

export type SproutBg = keyof typeof bgClasses;
export type SproutBorder = keyof typeof borderClasses;
export type SproutCursor = keyof typeof cursorClasses;
export type SproutDisplay = keyof typeof displayClasses;
export type SproutElevation = keyof typeof elevationClasses;
export type SproutFlex = keyof typeof flexClasses;
export type SproutFont = keyof typeof fontClasses;
export type SproutGrid = keyof typeof gridClasses;
export type SproutIcon = keyof typeof iconClasses;
export type SproutJustifySelf = keyof typeof justifySelfClasses;
export type SproutLayout = keyof typeof layoutClasses;
export type SproutLayer = keyof typeof layerClasses;
export type SproutMargin = keyof typeof marginClasses;
export type SproutOpacity = keyof typeof opacityClasses;
export type SproutOutline = keyof typeof outlineClasses;
export type SproutOverflow = keyof typeof overflowClasses;
export type SproutPadding = keyof typeof paddingClasses;
export type SproutPosition = keyof typeof positionClasses;
export type SproutSizing = keyof typeof sizingClasses;
export type SproutText = keyof typeof textClasses;
export type AllClasses = keyof typeof sproutClasses;

type LiteralUnion<T extends string> = T | (string & { _?: never });

export type ClassNameArg = LiteralUnion<keyof SproutClasses> | Record<keyof SproutClasses | string, boolean>;
export type ClassNamesAPI = (...args: Array<ClassNameArg>) => string;

export const sproutClasses: SproutClasses = {
  ...overflowClasses,
  ...flexClasses,
  ...bgClasses,
  ...borderClasses,
  ...cursorClasses,
  ...elevationClasses,
  ...fontClasses,
  ...fontStyle,
  ...iconClasses,
  ...justifySelfClasses,
  ...layerClasses,
  ...paddingClasses,
  ...marginClasses,
  ...textClasses,
  ...sizingClasses,
  ...displayClasses,
  ...positionClasses,
  ...opacityClasses,
  ...outlineClasses,
  ...gridClasses,
  ...layoutClasses,
  ...rtlClasses,
  ...patternsClasses,
};

function isSproutKey(key: string): key is SproutKey {
  return key in sproutClasses;
}

// autocompletion do not work when we add string to the array.
// we propose here to limit direct string args to get better dev experience.
// if you want to use simple string just use the object.
// ...args: (keyof typeof classes)[] | string[] | Record<keyof typeof classes | string, boolean>[]
// ...args: (keyof typeof classes | string| Record<keyof typeof classes | string, boolean>)[]
export const classNames: ClassNamesAPI = (...args) => {
  const newArgs = args.reduce<Array<string | Record<string, boolean>>>((acc, arg) => {
    if (typeof arg === "string") {
      if (isSproutKey(arg)) {
        acc.push(sproutClasses[arg]);
      } else {
        acc.push(arg);
      }
    } else if (typeof arg === "object") {
      const newObj: Record<string, boolean> = {};
      Object.keys(arg).forEach((key) => {
        if (isSproutKey(key)) {
          newObj[sproutClasses[key]] = arg[key];
        } else {
          newObj[key] = arg[key];
        }
      });
      acc.push(newObj);
    }
    return acc;
  }, []);
  return classNamesBase(...newArgs);
};
