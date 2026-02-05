/* eslint-disable @typescript-eslint/naming-convention */
import classNamesBase from "classnames";
import bgClasses from "./css/background.module.css";
import borderClasses from "./css/border.module.css";
import cursorClasses from "./css/cursor.module.css";
import displayClasses from "./css/display.module.css";
import elevationClasses from "./css/elevation.module.css";
import flexClasses from "./css/flex.module.css";
import fontClasses from "./css/font.module.css";
import fontStyle from "./css/fontstyle.module.css";
import gridClasses from "./css/grid.module.css";
import iconClasses from "./css/icon.module.css";
import justifySelfClasses from "./css/justifyself.module.css";
import layerClasses from "./css/layer.module.css";
import layoutClasses from "./css/layout.module.css";
import marginClasses from "./css/margin.module.css";
import opacityClasses from "./css/opacity.module.css";
import outlineClasses from "./css/outline.module.css";
import overflowClasses from "./css/overflow.module.css";
import paddingClasses from "./css/padding.module.css";
import patternsClasses from "./css/patterns.module.css";
import positionClasses from "./css/position.module.css";
import rtlClasses from "./css/rtl.module.css";
import sizingClasses from "./css/sizing.module.css";
import textClasses from "./css/text.module.css";

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

export type AllClasses = keyof SproutClasses;

type LiteralUnion<T extends string> = T | (string & { _?: never });

export type ClassNameArg = LiteralUnion<AllClasses> | Record<AllClasses | string, boolean>;
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

function isAllClasses(key: string): key is AllClasses {
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
      if (isAllClasses(arg)) {
        acc.push(sproutClasses[arg]);
      } else {
        acc.push(arg);
      }
    } else if (typeof arg === "object") {
      const newObj: Record<string, boolean> = {};
      Object.keys(arg).forEach((key) => {
        if (isAllClasses(key)) {
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
