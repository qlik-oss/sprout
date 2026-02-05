/* eslint-disable no-console */
import { classNames } from "@qlik/sprout-css-react";

import {
  type SproutThemePartial,
  ThemePairCreator,
} from "./ThemePairCreator/ThemePairCreator";

import "./ThemeCreator.module.css";

export default {
  title: "Examples/ThemeCreator",
};

export function Default() {
  return (
    <div className={classNames("flex", "gap-m", "p-xl", "flex-col", "h-full")}>
      <div className={classNames("font-heading-xl")}>Theme Creator Example</div>
      <ThemePairCreator
        onUpdate={(newTheme: SproutThemePartial) => {
          console.log("Theme updated:", newTheme);
        }}
      />
    </div>
  );
}

Default.parameters = {
  layout: "fullscreen",
  chromatic: { disableSnapshot: true },
};
