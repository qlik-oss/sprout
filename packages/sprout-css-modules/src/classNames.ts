import classNamesBase from "classnames";
import { sproutKebabClasses, type SproutKebabClasses } from "./css";
import { sproutDeprecatedClasses, type SproutDeprecatedClasses } from "./deprecated";

export const sproutClasses: SproutKebabClasses & SproutDeprecatedClasses = {
  ...sproutKebabClasses,
  ...sproutDeprecatedClasses,
};

export type SproutClasses = typeof sproutClasses;
export type AllClasses = keyof SproutClasses;

type LiteralUnion<T extends string> = T | (string & { _?: never });

export type ClassNameArg = LiteralUnion<AllClasses> | Record<AllClasses | string, boolean>;
export type ClassNamesAPI = (...args: Array<ClassNameArg>) => string;

function isSproutKey(key: string): key is AllClasses {
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

export type {
  bg,
  border,
  cursor,
  display,
  elevation,
  flex,
  font,
  grid,
  icon,
  justifySelf,
  layer,
  layout,
  margin,
  opacity,
  outline,
  overflow,
  padding,
  position,
  sizing,
  text,
} from "./deprecated";
