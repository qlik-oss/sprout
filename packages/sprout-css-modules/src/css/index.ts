import bgClasses from "./background.module.css";
import borderClasses from "./border.module.css";
import cursorClasses from "./cursor.module.css";
import displayClasses from "./display.module.css";
import elevationClasses from "./elevation.module.css";
import flexClasses from "./flex.module.css";
import fontClasses from "./font.module.css";
import fontStyle from "./fontstyle.module.css";
import gridClasses from "./grid.module.css";
import iconClasses from "./icon.module.css";
import justifySelfClasses from "./justifyself.module.css";
import layerClasses from "./layer.module.css";
import layoutClasses from "./layout.module.css";
import marginClasses from "./margin.module.css";
import opacityClasses from "./opacity.module.css";
import outlineClasses from "./outline.module.css";
import overflowClasses from "./overflow.module.css";
import paddingClasses from "./padding.module.css";
import patternsClasses from "./patterns.module.css";
import positionClasses from "./position.module.css";
import rtlClasses from "./rtl.module.css";
import sizingClasses from "./sizing.module.css";
import textClasses from "./text.module.css";

export type SproutKebabClasses = typeof overflowClasses &
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

export type AllKebabClasses = keyof typeof sproutKebabClasses;

export const sproutKebabClasses = {
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
