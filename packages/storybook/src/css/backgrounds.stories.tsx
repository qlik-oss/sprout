import sprout from "@qlik/sprout-css-modules";

import { CONTENT_CLASSES } from "./Content";

export default {
  title: "CSS/sprout-css-modules/backgrounds",
};

export const Background = {
  name: "background-color",
  args: {
    gap: "xl",
    p: "xl",
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    controls: { disable: true },
    pseudo: {
      hover: '[data-state="hover"]',
      active: '[data-state="active"]',
      focusVisible: '[data-state="focus"]',
    },
  },
  render: () => (
    <div className={sprout.classNames("flex", "flex-col", "gap-xl", "px-xl")}>
      <div
        className={sprout.classNames(
          "flex",
          "border-box",
          "flex-row",
          "gap-xl",
          "py-xl",
        )}
      >
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-disabled")}>
          bg-disabled
        </div>
        <div
          className={sprout.classNames(...CONTENT_CLASSES, "bg-transparent")}
        >
          bg-transparent
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-weak")}>
          bg-weak
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-default")}>
          bg-default
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-enabled")}>
          bg-enabled
        </div>
        <div
          className={sprout.classNames(...CONTENT_CLASSES, "bg-interactive")}
        >
          bg-interactive
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-pressed")}>
          bg-pressed
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-moderate")}>
          bg-moderate
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-strong")}>
          bg-strong
        </div>
        <div
          className={sprout.classNames(
            ...CONTENT_CLASSES,
            "bg-inverse",
            "text-inverse",
          )}
        >
          bg-inverse
        </div>
      </div>
      <div
        className={sprout.classNames(
          "flex",
          "border-box",
          "flex-row",
          "gap-xl",
          "py-xl",
        )}
      >
        <div
          className={sprout.classNames(
            ...CONTENT_CLASSES,
            "bg-danger",
            "text-danger-inverse",
          )}
        >
          bg-danger (text-danger-inverse)
        </div>
        <div
          className={sprout.classNames(...CONTENT_CLASSES, "bg-danger-weak")}
        >
          bg-danger-weak (text-default)
        </div>
        {["default", "focus", "active", "hover", "disabled"].map((state) => (
          <button
            key={state}
            data-state={state}
            disabled={state === "disabled"}
            type="button"
            className={sprout.classNames(
              ...CONTENT_CLASSES,
              "bg-danger-interactive",
              "text-danger-inverse",
            )}
          >
            bg-danger-interactive (text-danger-inverse) / {state}
          </button>
        ))}
      </div>
      <div
        className={sprout.classNames(
          "flex",
          "border-box",
          "flex-row",
          "gap-xl",
          "py-xl",
        )}
      >
        <div
          className={sprout.classNames(
            ...CONTENT_CLASSES,
            "bg-warning",
            "text-warning-inverse",
          )}
        >
          bg-warning (text-warning-inverse)
        </div>
        <div
          className={sprout.classNames(...CONTENT_CLASSES, "bg-warning-weak")}
        >
          bg-warning-weak (text-default)
        </div>
        <div
          className={sprout.classNames(
            ...CONTENT_CLASSES,
            "bg-warning-inverse",
            "text-warning",
          )}
        >
          bg-warning-inverse (text-warning)
        </div>
      </div>
      <div
        className={sprout.classNames(
          "flex",
          "border-box",
          "flex-row",
          "gap-xl",
          "py-xl",
        )}
      >
        <div
          className={sprout.classNames(
            ...CONTENT_CLASSES,
            "bg-info",
            "text-info-inverse",
          )}
        >
          bg-info (text-info-inverse)
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-info-weak")}>
          bg-info-weak (text-default)
        </div>
        <div
          className={sprout.classNames(
            ...CONTENT_CLASSES,
            "bg-info-inverse",
            "text-info",
          )}
        >
          bg-info-inverse (text-info)
        </div>
      </div>
      <div
        className={sprout.classNames(
          "flex",
          "border-box",
          "flex-row",
          "gap-xl",
          "py-xl",
        )}
      >
        <div
          className={sprout.classNames(
            ...CONTENT_CLASSES,
            "bg-success",
            "text-success-inverse",
          )}
        >
          bg-success (text-success-inverse)
        </div>
        <div
          className={sprout.classNames(...CONTENT_CLASSES, "bg-success-weak")}
        >
          bg-success-weak (text-default)
        </div>
        <div
          className={sprout.classNames(
            ...CONTENT_CLASSES,
            "bg-success-inverse",
            "text-success",
          )}
        >
          bg-success-inverse (text-success)
        </div>
      </div>
    </div>
  ),
};
