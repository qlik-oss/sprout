import sprout from "@qlik/sprout-css-modules";

import { CONTENT_CLASSES } from "./Content";

export default {
  title: "CSS/sprout-css-modules/effects",
};

export const BoxShadow = {
  name: "box_shadow",
  args: {
    gap: "xl",
    p: "xl",
  },
  parameters: {
    controls: { disable: true },
    chromatic: { disableSnapshot: true },
  },

  render: () => (
    <div
      className={sprout.classNames(
        "flex",
        "border-box",
        "flex-row",
        "gap-xl",
        "p-xl",
      )}
    >
      <div className={sprout.classNames("box-shadow-none", ...CONTENT_CLASSES)}>
        box-shadow-none
      </div>
      <div className={sprout.classNames("box-shadow-weak", ...CONTENT_CLASSES)}>
        box-shadow-weak
      </div>
      <div
        className={sprout.classNames("box-shadow-default", ...CONTENT_CLASSES)}
      >
        box-shadow-default
      </div>
      <div
        className={sprout.classNames("box-shadow-moderate", ...CONTENT_CLASSES)}
      >
        box-shadow-moderate
      </div>
      <div
        className={sprout.classNames("box-shadow-strong", ...CONTENT_CLASSES)}
      >
        box-shadow-strong
      </div>
    </div>
  ),
};
