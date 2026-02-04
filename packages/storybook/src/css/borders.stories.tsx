import sprout from "@qlik/sprout-css-modules";
import type { StoryObj } from "@storybook/react-vite";

import {
  CONTENT_PROPS_TOKEN,
  PROPERTY_COL_PROPS,
  PROPERTY_ROW_PROPS,
  PropertyValue,
} from "./Content";

export default {
  title: "CSS/sprout-css-modules/borders",
};

export const border: StoryObj<unknown> = {
  name: "border",
  render: () => (
    <div
      className={sprout.classNames(
        "flex",
        "border-box",
        "flex-col",
        "gap-0",
        "border-none",
      )}
    >
      <div className={sprout.classNames(...PROPERTY_ROW_PROPS)}>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-none</PropertyValue>
          <button
            type="button"
            className={sprout.classNames(...CONTENT_PROPS_TOKEN, "border-none")}
          >
            1
          </button>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-weak</PropertyValue>
          <div
            className={sprout.classNames(...CONTENT_PROPS_TOKEN, "border-weak")}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-default</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-default",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-moderate</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-moderate",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-strong</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-strong",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-extra-strong</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-extra-strong",
            )}
          >
            1
          </div>
        </div>
      </div>

      <div className={sprout.classNames(...PROPERTY_ROW_PROPS)}>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-t-none</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-default",
              "border-t-none",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-t-weak</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-t-weak",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-t-default</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-t-default",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-t-moderate</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-t-moderate",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-t-strong</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-t-strong",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-t-extra-strong</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-t-extra-strong",
            )}
          >
            1
          </div>
        </div>
      </div>
      <div className={sprout.classNames(...PROPERTY_ROW_PROPS)}>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-r-none</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,

              "border-default",
              "border-r-none",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-r-weak</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-r-weak",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-r-default</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-r-default",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-r-moderate</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-r-moderate",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-r-strong</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-r-strong",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-r-extra-strong</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-r-extra-strong",
            )}
          >
            1
          </div>
        </div>
      </div>
      <div className={sprout.classNames(...PROPERTY_ROW_PROPS)}>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-b-none</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-default",
              "border-b-none",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-b-weak</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-b-weak",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-b-default</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-b-default",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-b-moderate</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-b-moderate",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-b-strong</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-b-strong",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-b-extra-strong</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-b-extra-strong",
            )}
          >
            1
          </div>
        </div>
      </div>
      <div className={sprout.classNames(...PROPERTY_ROW_PROPS)}>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-l-none</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-default",
              "border-l-none",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-l-weak</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-l-weak",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-l-default</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-l-default",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-l-moderate</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-l-moderate",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-l-strong</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-l-strong",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>border-l-extra-strong</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-l-extra-strong",
            )}
          >
            1
          </div>
        </div>
      </div>
    </div>
  ),
};

export const BorderWidth = {
  name: "border-width",
  render: () => (
    <div className={sprout.classNames(...PROPERTY_ROW_PROPS)}>
      <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
        <PropertyValue>border-width-0</PropertyValue>
        <div
          className={sprout.classNames(
            ...CONTENT_PROPS_TOKEN,
            "border-default",
            "border-width-0",
          )}
        >
          1
        </div>
      </div>
      <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
        <PropertyValue>border-width-default</PropertyValue>
        <div
          className={sprout.classNames(
            ...CONTENT_PROPS_TOKEN,
            "border-default",
            "border-width-default",
          )}
        >
          1
        </div>
      </div>
      <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
        <PropertyValue>border-width-strong</PropertyValue>
        <div
          className={sprout.classNames(
            ...CONTENT_PROPS_TOKEN,
            "border-default",
            "border-width-strong",
          )}
        >
          1
        </div>
      </div>
    </div>
  ),
};

export const BorderRadius: StoryObj<unknown> = {
  name: "border-radius",
  render: () => (
    <div>
      <div className={sprout.classNames(...PROPERTY_ROW_PROPS)}>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>radius-subtle</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-default",
              "radius-subtle",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>radius-soft</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-default",
              "radius-soft",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>radius-cushiony</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-default",
              "radius-cushiony",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>radius-round</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-default",
              "radius-round",
            )}
          >
            1
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>radius-pill</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-default",
              "radius-pill",
            )}
          >
            1
          </div>
        </div>
      </div>
      <div className={sprout.classNames(...PROPERTY_ROW_PROPS)}>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>radius-nested-subtle-xs</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-default",
              "radius-subtle",
            )}
          >
            <div
              className={sprout.classNames(
                ...CONTENT_PROPS_TOKEN,
                "border-default",
                "radius-nested-subtle-xs",
              )}
            >
              1
            </div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>radius-nested-soft-s</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-default",
              "radius-soft",
            )}
          >
            <div
              className={sprout.classNames(
                ...CONTENT_PROPS_TOKEN,
                "border-default",
                "radius-nested-soft-s",
              )}
            >
              1
            </div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>radius-nested-soft-xs</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-default",
              "radius-soft",
            )}
          >
            <div
              className={sprout.classNames(
                ...CONTENT_PROPS_TOKEN,
                "border-default",
                "radius-nested-soft-xs",
              )}
            >
              1
            </div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>radius-nested-cushiony-xs</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-default",
              "radius-cushiony",
            )}
          >
            <div
              className={sprout.classNames(
                ...CONTENT_PROPS_TOKEN,
                "border-default",
                "radius-nested-cushiony-xs",
              )}
            >
              1
            </div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>radius-nested-cushiony-s</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-default",
              "radius-cushiony",
            )}
          >
            <div
              className={sprout.classNames(
                ...CONTENT_PROPS_TOKEN,
                "border-default",
                "radius-nested-cushiony-s",
              )}
            >
              1
            </div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>radius-nested-cushiony-m</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-default",
              "radius-cushiony",
            )}
          >
            <div
              className={sprout.classNames(
                ...CONTENT_PROPS_TOKEN,
                "border-default",
                "radius-nested-cushiony-m",
              )}
            >
              1
            </div>
          </div>
        </div>
      </div>
      <div className={sprout.classNames(...PROPERTY_ROW_PROPS)}>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>radius-twice-soft-xs</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-default",
              "radius-soft",
            )}
          >
            <div
              className={sprout.classNames(
                ...CONTENT_PROPS_TOKEN,
                "border-default",
                "radius-nested-soft-xs",
              )}
            >
              <div
                className={sprout.classNames(
                  ...CONTENT_PROPS_TOKEN,
                  "border-default",
                  "radius-twice-soft-xs",
                )}
              >
                1
              </div>
            </div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>radius-twice-cushiony-s-xs</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-default",
              "radius-cushiony",
            )}
          >
            <div
              className={sprout.classNames(
                ...CONTENT_PROPS_TOKEN,
                "border-default",
                "radius-nested-cushiony-s",
              )}
            >
              <div
                className={sprout.classNames(
                  ...CONTENT_PROPS_TOKEN,
                  "border-default",
                  "radius-twice-cushiony-s-xs",
                )}
              >
                1
              </div>
            </div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>radius-twice-cushiony-m-s</PropertyValue>
          <div
            className={sprout.classNames(
              ...CONTENT_PROPS_TOKEN,
              "border-default",
              "radius-cushiony",
            )}
          >
            <div
              className={sprout.classNames(
                ...CONTENT_PROPS_TOKEN,
                "border-default",
                "radius-nested-cushiony-m",
              )}
            >
              <div
                className={sprout.classNames(
                  ...CONTENT_PROPS_TOKEN,
                  "border-default",
                  "radius-twice-cushiony-m-s",
                )}
              >
                1
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const BorderColor: StoryObj<unknown> = {
  name: "border-color",
  render: () => (
    <div className={sprout.classNames(...PROPERTY_ROW_PROPS)}>
      <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
        <PropertyValue>border-info</PropertyValue>
        <div
          className={sprout.classNames(
            ...CONTENT_PROPS_TOKEN,
            "border-default",
            "border_info",
          )}
        />
      </div>
      <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
        <PropertyValue>border-danger</PropertyValue>
        <div
          className={sprout.classNames(
            ...CONTENT_PROPS_TOKEN,
            "border-default",
            "border_danger",
          )}
        />
      </div>
      <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
        <PropertyValue>border-warning</PropertyValue>
        <div
          className={sprout.classNames(
            ...CONTENT_PROPS_TOKEN,
            "border-default",
            "border_warning",
          )}
        />
      </div>
      <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
        <PropertyValue>border-success</PropertyValue>
        <div
          className={sprout.classNames(
            ...CONTENT_PROPS_TOKEN,
            "border-default",
            "border_success",
          )}
        />
      </div>
    </div>
  ),
};
