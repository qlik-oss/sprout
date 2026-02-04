import sprout from "@qlik/sprout-css-modules";

import { CONTENT_CLASSES } from "./Content";

export default {
  title: "CSS/sprout-css-modules/sizing",
};

export const Width = {
  name: "width",
  parameters: {
    chromatic: { disableSnapshot: true },
    controls: { disable: true },
    layout: "fullscreen",
  },
  render: () => (
    <div
      className={sprout.classNames("flex", "border-box", "flex-col", "gap-m")}
    >
      <div
        className={sprout.classNames(
          "flex",
          "border-box",
          "flex-col",
          "gap-m",
          "w-m",
          "overflow-visible",
        )}
      >
        <h1
          className={sprout.classNames(
            "flex",
            "border-box",
            "font-heading-m",
            "text-default",
          )}
        >
          Container
        </h1>
        <p className={sprout.classNames("font-body-s", "text-default")}>
          As we do not have a set of generic layouts in mind and the fact CSS
          media query doesnt support the usage of tokens we have decided to
          explain it like this. Media query are simple enought to write so it is
          ok to use hard coded value for{" "}
          <strong className={sprout.classNames("font-label-s-emphasized")}>
            breakpoint
          </strong>
          based layout. You have already a good examples on the
          <strong className={sprout.classNames("font-label-s-emphasized")}>
            Modal
          </strong>{" "}
          component.
        </p>
      </div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "w-xxs")}>
        w-xxs
      </div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "w-xs")}>w-xs</div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "w-s")}>w-s</div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "w-m")}>w-m</div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "w-l")}>w-l</div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "w-xl")}>w-xl</div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "w-xxl")}>
        w-xxl
      </div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "w-3xl")}>
        w-3xl
      </div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "w-4xl")}>
        w-4xl
      </div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "w-full")}>
        w-full
      </div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "w-screen")}>
        w-screen
      </div>
    </div>
  ),
};

export const MinWidth = {
  name: "min-width",
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <div
      className={sprout.classNames(
        "flex",
        "border-box",
        "flex-col",
        "items-start",
        "gap-m",
        "w-m",
        "h-fit",
        "overflow-visible",
      )}
    >
      <div className={sprout.classNames(...CONTENT_CLASSES, "min-w-0")}>
        min-w-0
      </div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "min-w-full")}>
        min-w-full
      </div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "min-w-screen")}>
        min-w-screen
      </div>
    </div>
  ),
};

export const MaxWidth = {
  name: "max-width",
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <div
      className={sprout.classNames(
        "flex",
        "border-box",
        "flex-col",
        "items-start",
        "gap-m",
        "w-full",
        "h-fit",
        "p-m",
      )}
    >
      <div
        className={sprout.classNames(
          "flex",
          "border-box",
          "border-default",
          "overflow-visible",
          "py-m",
          "text-default",
          "max-w-0",
        )}
      >
        max-w-0
      </div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "max-w-xxs")}>
        max-w-xxs
      </div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "max-w-xs")}>
        max-w-xs
      </div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "max-w-s")}>
        max-w-s
      </div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "max-w-m")}>
        max-w-m
      </div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "max-w-l")}>
        max-w-l
      </div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "max-w-xl")}>
        max-w-xl
      </div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "max-w-xxl")}>
        max-w-xxl
      </div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "max-w-3xl")}>
        max-w-3xl
      </div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "max-w-4xl")}>
        max-w-4xl
      </div>
    </div>
  ),
};

export const Height = {
  name: "height",
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <div
      className={sprout.classNames("flex", "border-box", "flex-col", "gap-m")}
    >
      <div
        className={sprout.classNames(
          "flex",
          "border-box",
          "flex-row",
          "items-start",
          "gap-m",
          "w-m",
          "h-screen",
        )}
      >
        <div className={sprout.classNames(...CONTENT_CLASSES, "h-0")}>
          h-xxs
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "h-auto")}>
          h-auto
        </div>
        <div style={{ blockSize: 300 }}>
          <div className={sprout.classNames(...CONTENT_CLASSES, "h-full")}>
            h-full
          </div>
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "h-screen")}>
          h-screen
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "h-fit")}>
          h-fit
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "h-min")}>
          h-min
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "h-max")}>
          h-max
        </div>
      </div>
      <h1 className={sprout.classNames("font-heading-m", "text-default")}>
        Setting both width and height
      </h1>
      <div
        className={sprout.classNames(
          "flex",
          "border-box",
          "flex-col",
          "items-start",
          "gap-m",
          "w-m",
        )}
      >
        <div
          className={sprout.classNames(
            ...CONTENT_CLASSES,
            "overflow-visible",
            "size-0",
          )}
        >
          size-0
        </div>
        <div style={{ blockSize: 200, inlineSize: 200 }}>
          <div className={sprout.classNames(...CONTENT_CLASSES, "size-full")}>
            size-full
          </div>
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "size-auto")}>
          size-auto
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "size-fit")}>
          size-fit
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "size-min")}>
          size-min
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "size-max")}>
          size-max
        </div>
        <div
          className={sprout.classNames(...CONTENT_CLASSES, "gap-m", "flex-row")}
        >
          <span>size-s</span>
          <div className={sprout.classNames("border-default", "size-s")} />
        </div>
        <div
          className={sprout.classNames(...CONTENT_CLASSES, "gap-m", "flex-row")}
        >
          <span>size-m</span>
          <div className={sprout.classNames("border-default", "size-m")} />
        </div>
        <div
          className={sprout.classNames(...CONTENT_CLASSES, "gap-m", "flex-row")}
        >
          <span>size-l</span>
          <div className={sprout.classNames("border-default", "size-l")} />
        </div>
        <div
          className={sprout.classNames(...CONTENT_CLASSES, "gap-m", "flex-row")}
        >
          <span>size-xl</span>
          <div className={sprout.classNames("border-default", "size-xl")} />
        </div>
        <div
          className={sprout.classNames(...CONTENT_CLASSES, "gap-m", "flex-row")}
        >
          <span>size-xxl</span>
          <div className={sprout.classNames("border-default", "size-xxl")} />
        </div>
        <div
          className={sprout.classNames(...CONTENT_CLASSES, "gap-m", "flex-row")}
        >
          <span>size-3xl</span>
          <div className={sprout.classNames("border-default", "size-3xl")} />
        </div>
        <div
          className={sprout.classNames(...CONTENT_CLASSES, "gap-m", "flex-row")}
        >
          <span>size-4xl</span>
          <div className={sprout.classNames("border-default", "size-4xl")} />
        </div>
        <div
          className={sprout.classNames(...CONTENT_CLASSES, "gap-m", "flex-row")}
        >
          <span>size-5xl</span>
          <div className={sprout.classNames("border-default", "size-5xl")} />
        </div>
        <div
          className={sprout.classNames(...CONTENT_CLASSES, "gap-m", "flex-row")}
        >
          <span>size-6xl</span>
          <div className={sprout.classNames("border-default", "size-6xl")} />
        </div>
        <div
          className={sprout.classNames(...CONTENT_CLASSES, "gap-m", "flex-row")}
        >
          <span>size-7xl</span>
          <div className={sprout.classNames("border-default", "size-7xl")} />
        </div>
      </div>
    </div>
  ),
};

export const MinHeight = {
  name: "min-height",
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <div
      className={sprout.classNames(
        "flex",
        "border-box",
        "flex-row",
        "items-start",
        "gap-m",
        "w-m",
        "h-fit",
      )}
    >
      <div className={sprout.classNames(...CONTENT_CLASSES, "min-h-0")}>
        min-h-0
      </div>
      <div style={{ blockSize: 300 }}>
        <div className={sprout.classNames(...CONTENT_CLASSES, "min-h-full")}>
          min-h-full
        </div>
      </div>
      <div className={sprout.classNames(...CONTENT_CLASSES, "min-h-screen")}>
        min-h-screen
      </div>
    </div>
  ),
};
