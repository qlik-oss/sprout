import sprout, { type AllClasses } from "@qlik/sprout-css-modules";
import { AlertInline, Badge, Button } from "@qlik/sprout-react";
import BellOutline from "@qlik/sprout-icons/react/BellOutline";

import { CONTENT_CLASSES, PARAGRAPH, PropertyTile, src } from "./Content";

export default {
  title: "CSS/sprout-css-modules/layout",
};

export const FloatAndClear = {
  name: "float & clear",
  parameters: {
    controls: false,
  },
  render: () => (
    <div
      className={sprout.classNames(
        "flex",
        "flex-col",
        "bg-default",
        "text-default",
        "max-w-m",
        "gap-m",
      )}
    >
      <PropertyTile>float-none</PropertyTile>
      <article>
        <img alt="demo" className={sprout.classNames("float-none")} src={src} />
        <p className={sprout.classNames("p-0", "m-0", "text-justify")}>
          {PARAGRAPH}
        </p>
      </article>
      <PropertyTile>float-start</PropertyTile>
      <article>
        <img
          alt="demo"
          className={sprout.classNames("float-start")}
          src={src}
        />
        <p className={sprout.classNames("p-0", "m-0", "text-justify")}>
          {PARAGRAPH}
        </p>
      </article>
      <PropertyTile>float-end</PropertyTile>
      <article>
        <img alt="demo" className={sprout.classNames("float-end")} src={src} />
        <p className={sprout.classNames("p-0", "m-0", "text-justify")}>
          {PARAGRAPH}
        </p>
      </article>
      <PropertyTile>clear-start</PropertyTile>
      <article>
        <img
          alt="demo"
          className={sprout.classNames("float-start")}
          src={src}
        />
        <img
          alt="demo"
          className={sprout.classNames("float-end")}
          height={100}
          src={src}
        />
        <p
          className={sprout.classNames(
            "p-0",
            "m-0",
            "text-justify",
            "clear-start",
          )}
        >
          {PARAGRAPH}
        </p>
      </article>
      <PropertyTile>clear-end</PropertyTile>
      <article>
        <img
          alt="demo"
          className={sprout.classNames("float-start")}
          height={100}
          src={src}
        />
        <img alt="demo" className={sprout.classNames("float-end")} src={src} />
        <p
          className={sprout.classNames(
            "p-0",
            "m-0",
            "text-justify",
            "clear-end",
          )}
        >
          {PARAGRAPH}
        </p>
      </article>
      <PropertyTile>clear-both</PropertyTile>
      <article>
        <img
          alt="demo"
          className={sprout.classNames("float-start")}
          src={src}
        />
        <img
          alt="demo"
          className={sprout.classNames("float-end")}
          height={100}
          src={src}
        />
        <p
          className={sprout.classNames(
            "p-0",
            "m-0",
            "text-justify",
            "clear-both",
          )}
        >
          {PARAGRAPH}
        </p>
      </article>
      <PropertyTile>clear-none</PropertyTile>
      <article>
        <img
          alt="demo"
          className={sprout.classNames("float-start")}
          src={src}
        />
        <img
          alt="demo"
          className={sprout.classNames("float-end")}
          height={100}
          src={src}
        />
        <p
          className={sprout.classNames(
            "p-0",
            "m-0",
            "text-justify",
            "clear-none",
          )}
        >
          {PARAGRAPH}
        </p>
      </article>
    </div>
  ),
};

const TOP_RIGHT_NEGATIVE_SIZES: Array<[AllClasses, AllClasses]> = [
  ["-top-s", "-right-s"],
  ["-top-m", "-right-m"],
  ["-top-l", "-right-l"],
  ["-top-xl", "-right-xl"],
];

const BOTTOM_LEFT_NEGATIVE_SIZES: Array<[AllClasses, AllClasses]> = [
  ["-bottom-s", "-left-s"],
  ["-bottom-m", "-left-m"],
  ["-bottom-l", "-left-l"],
  ["-bottom-xl", "-left-xl"],
];

export const TopRightBottonLeft = {
  name: "top / right / bottom / left",
  parameters: {
    controls: false,
  },
  render: () => (
    <div className={sprout.classNames("flex", "flex-col", "max-w-m", "gap-m")}>
      <div
        className={sprout.classNames("flex", "flex-row", "max-w-m", "gap-m")}
      >
        <div
          className={sprout.classNames(
            "relative",
            "flex",
            "border-box",
            "border-default",
          )}
          style={{ inlineSize: 150, blockSize: 150 }}
        >
          <img
            alt="demo"
            className={sprout.classNames("absolute", "inset-0")}
            style={{ inlineSize: "30px" }}
            src={src}
          />
          <span
            className={sprout.classNames(
              "absolute",
              "bottom-0",
              "left-0",
              "p-xs",
              "text-default",
              "font-label-s",
            )}
          >
            inset-0
          </span>
        </div>
        <div
          className={sprout.classNames(
            "relative",
            "flex",
            "border-box",
            "border-default",
          )}
          style={{ inlineSize: 150, blockSize: 150 }}
        >
          <img
            alt="demo"
            className={sprout.classNames("absolute", "inset-s")}
            style={{ inlineSize: "30px" }}
            src={src}
          />
          <span
            className={sprout.classNames(
              "absolute",
              "bottom-0",
              "left-0",
              "p-xs",
              "text-default",
              "font-label-s",
            )}
          >
            inset-s
          </span>
        </div>
        <div
          className={sprout.classNames(
            "relative",
            "flex",
            "border-box",
            "border-default",
          )}
          style={{ inlineSize: 150, blockSize: 150 }}
        >
          <img
            alt="demo"
            className={sprout.classNames("absolute", "inset-m")}
            style={{ inlineSize: "30px" }}
            src={src}
          />
          <span
            className={sprout.classNames(
              "absolute",
              "bottom-0",
              "left-0",
              "p-xs",
              "text-default",
              "font-label-s",
            )}
          >
            inset-m
          </span>
        </div>
        <div
          className={sprout.classNames(
            "relative",
            "flex",
            "border-box",
            "border-default",
          )}
          style={{ inlineSize: 150, blockSize: 150 }}
        >
          <img
            alt="demo"
            className={sprout.classNames("absolute", "inset-l")}
            style={{ inlineSize: "30px" }}
            src={src}
          />
          <span
            className={sprout.classNames(
              "absolute",
              "bottom-0",
              "left-0",
              "p-xs",
              "text-default",
              "font-label-s",
            )}
          >
            inset-l
          </span>
        </div>
      </div>
      <div
        className={sprout.classNames(
          "flex",
          "flex-row",
          "max-w-m",
          "gap-xl",
          "p-xl",
        )}
      >
        {TOP_RIGHT_NEGATIVE_SIZES.map((tsize) => (
          <div
            key={tsize[0]}
            className={sprout.classNames("relative", "flex", "w-fit")}
          >
            <Button icon={<BellOutline />} label={`${tsize[0]} ${tsize[1]}`} />
            <div className={sprout.classNames("absolute", tsize[0], tsize[1])}>
              <Badge variant="alphanumeric" color="info" text="32" />
            </div>
          </div>
        ))}
      </div>
      <div
        className={sprout.classNames(
          "flex",
          "flex-row",
          "max-w-m",
          "gap-xl",
          "p-xl",
        )}
      >
        {BOTTOM_LEFT_NEGATIVE_SIZES.map((tsize) => (
          <div
            key={tsize[0]}
            className={sprout.classNames("relative", "flex", "w-fit")}
          >
            <Button icon={<BellOutline />} label={`${tsize[0]} ${tsize[1]}`} />
            <div className={sprout.classNames("absolute", tsize[0], tsize[1])}>
              <Badge variant="alphanumeric" color="info" text="32" />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const ObjectFit = {
  name: "object-fit",
  parameters: {
    controls: false,
  },
  render: () => (
    <div
      className={sprout.classNames(
        "flex",
        "flex-col",
        "bg-default",
        "text-default",
        "max-w-m",
        "gap-m",
      )}
    >
      <PropertyTile>object-contain</PropertyTile>
      <img
        alt="demo"
        className={sprout.classNames("object-contain", "border-default", "p-s")}
        src={src}
        style={{ inlineSize: 200, blockSize: 100 }}
      />
      <PropertyTile>object-cover</PropertyTile>
      <img
        alt="demo"
        className={sprout.classNames("object-cover", "border-default", "p-s")}
        src={src}
        style={{ inlineSize: 200, blockSize: 100 }}
      />
      <PropertyTile>object-fill</PropertyTile>
      <img
        alt="demo"
        className={sprout.classNames("object-fill", "border-default", "p-s")}
        src={src}
        style={{ inlineSize: 200, blockSize: 100 }}
      />
      <PropertyTile>object-none</PropertyTile>
      <img
        alt="demo"
        className={sprout.classNames("object-none", "border-default", "p-s")}
        src={src}
        style={{ inlineSize: 200, blockSize: 100 }}
      />
      <PropertyTile>object-scale-down</PropertyTile>
      <img
        alt="demo"
        className={sprout.classNames(
          "object-scale-down",
          "border-default",
          "p-s",
        )}
        src={src}
        style={{ inlineSize: 200, blockSize: 50 }}
      />
    </div>
  ),
};

export const ObjectPosition = {
  name: "object-position",
  parameters: {
    controls: false,
  },
  render: () => (
    <div className={sprout.classNames("grid", "grid-cols-3", "max-w-m")}>
      <div
        className={sprout.classNames(
          "relative",
          "flex",
          "border-box",
          "border-default",
        )}
        style={{ inlineSize: 150, blockSize: 150 }}
      >
        <img
          alt="demo"
          className={sprout.classNames("object-none", "object-top-left")}
          src={src}
        />
        <span
          className={sprout.classNames(
            "absolute",
            "bottom-0",
            "left-0",
            "p-xs",
            "text-default",
            "font-label-s",
          )}
        >
          object-top-left
        </span>
      </div>
      <div
        className={sprout.classNames(
          "relative",
          "flex",
          "border-box",
          "border-default",
        )}
        style={{ inlineSize: 150, blockSize: 150 }}
      >
        <img
          alt="demo"
          className={sprout.classNames("relative", "object-none", "object-top")}
          src={src}
        />
        <span
          className={sprout.classNames(
            "absolute",
            "bottom-0",
            "left-0",
            "p-xs",
            "text-default",
            "font-label-s",
          )}
        >
          object-top
        </span>
      </div>
      <div
        className={sprout.classNames(
          "relative",
          "flex",
          "border-box",
          "border-default",
        )}
        style={{ inlineSize: 150, blockSize: 150 }}
      >
        <img
          alt="demo"
          className={sprout.classNames(
            "relative",
            "object-none",
            "object-top-right",
          )}
          src={src}
        />
        <span
          className={sprout.classNames(
            "absolute",
            "bottom-0",
            "left-0",
            "p-xs",
            "text-default",
            "font-label-s",
          )}
        >
          object-top-right
        </span>
      </div>
      <div
        className={sprout.classNames(
          "relative",
          "flex",
          "border-box",
          "border-default",
        )}
        style={{ inlineSize: 150, blockSize: 150 }}
      >
        <img
          alt="demo"
          className={sprout.classNames(
            "relative",
            "object-none",
            "object-center-left",
          )}
          src={src}
        />
        <span
          className={sprout.classNames(
            "absolute",
            "bottom-0",
            "left-0",
            "p-xs",
            "text-default",
            "font-label-s",
          )}
        >
          object-center-left
        </span>
      </div>
      <div
        className={sprout.classNames(
          "relative",
          "flex",
          "border-box",
          "border-default",
        )}
        style={{ inlineSize: 150, blockSize: 150 }}
      >
        <img
          alt="demo"
          className={sprout.classNames(
            "relative",
            "object-none",
            "object-center",
          )}
          src={src}
        />
        <span
          className={sprout.classNames(
            "absolute",
            "bottom-0",
            "left-0",
            "p-xs",
            "text-default",
            "font-label-s",
          )}
        >
          object-center
        </span>
      </div>
      <div
        className={sprout.classNames(
          "relative",
          "flex",
          "border-box",
          "border-default",
        )}
        style={{ inlineSize: 150, blockSize: 150 }}
      >
        <img
          alt="demo"
          className={sprout.classNames(
            "relative",
            "object-none",
            "object-center-right",
          )}
          src={src}
        />
        <span
          className={sprout.classNames(
            "absolute",
            "bottom-0",
            "left-0",
            "p-xs",
            "text-default",
            "font-label-s",
          )}
        >
          object-center-right
        </span>
      </div>
      <div
        className={sprout.classNames(
          "relative",
          "flex",
          "border-box",
          "border-default",
        )}
        style={{ inlineSize: 150, blockSize: 150 }}
      >
        <img
          alt="demo"
          className={sprout.classNames(
            "relative",
            "object-none",
            "object-bottom-left",
          )}
          src={src}
        />
        <span
          className={sprout.classNames(
            "absolute",
            "top-0",
            "left-0",
            "p-xs",
            "text-default",
            "font-label-s",
          )}
        >
          object-bottom-left
        </span>
      </div>
      <div
        className={sprout.classNames(
          "relative",
          "flex",
          "border-box",
          "border-default",
        )}
        style={{ inlineSize: 150, blockSize: 150 }}
      >
        <img
          alt="demo"
          className={sprout.classNames(
            "relative",
            "object-none",
            "object-bottom",
          )}
          src={src}
        />
        <span
          className={sprout.classNames(
            "absolute",
            "top-0",
            "left-0",
            "p-xs",
            "text-default",
            "font-label-s",
          )}
        >
          object-bottom
        </span>
      </div>
      <div
        className={sprout.classNames(
          "relative",
          "flex",
          "border-box",
          "border-default",
        )}
        style={{ inlineSize: 150, blockSize: 150 }}
      >
        <img
          alt="demo"
          className={sprout.classNames(
            "relative",
            "object-none",
            "object-bottom-right",
          )}
          src={src}
        />
        <span
          className={sprout.classNames(
            "absolute",
            "top-0",
            "left-0",
            "p-xs",
            "text-default",
            "font-label-s",
          )}
        >
          object-bottom-right
        </span>
      </div>
    </div>
  ),
};

export const ZIndex = {
  name: "z-index",
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
        "border-default",
        "p-xl",
        "flex-col",
        "w-s",
        "gap-0",
      )}
    >
      <div
        className={sprout.classNames(...CONTENT_CLASSES, "z-cursor")}
        style={{
          marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))",
          inlineSize: "calc(100% - (6 * var(--sprout-common-sizing-xxl)))",
        }}
      >
        z-cursor
      </div>
      <div
        className={sprout.classNames(...CONTENT_CLASSES, "z-time-sensitive")}
        style={{
          marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))",
          inlineSize: "calc(100% - (5 * var(--sprout-common-sizing-xxl)))",
        }}
      >
        z-time-sensitive
      </div>
      <div
        className={sprout.classNames(...CONTENT_CLASSES, "z-context")}
        style={{
          marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))",
          inlineSize: "calc(100% - (4 * var(--sprout-common-sizing-xxl)))",
        }}
      >
        z-context
      </div>
      <div
        className={sprout.classNames(...CONTENT_CLASSES, "z-overlay")}
        style={{
          marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))",
          inlineSize: "calc(100% - (3 * var(--sprout-common-sizing-xxl)))",
        }}
      >
        z-overlay
      </div>
      <div
        className={sprout.classNames(...CONTENT_CLASSES, "z-floating")}
        style={{
          marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))",
          inlineSize: "calc(100% - (2 * var(--sprout-common-sizing-xxl)))",
        }}
      >
        z-floating
      </div>
      <div
        className={sprout.classNames(...CONTENT_CLASSES, "z-stacked")}
        style={{
          marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))",
          inlineSize: "calc(100% - (1 * var(--sprout-common-sizing-xxl)))",
        }}
      >
        z-stacked
      </div>
      <div
        className={sprout.classNames(...CONTENT_CLASSES)}
        style={{ marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))" }}
      >
        undefined
      </div>
    </div>
  ),
};

const GRID_CONTENT: Array<AllClasses> = [
  "border-default",
  "items-center",
  "justify-center",
  "w-fit",
  "p-m",
];

export const PlaceContent = {
  name: "place-content",
  parameters: {
    controls: false,
  },
  render: () => (
    <div
      className={sprout.classNames(
        "flex",
        "border-box",
        "gap-m",
        "flex-col",
        "w-full",
        "max-w-m",
      )}
    >
      <div className={sprout.classNames("flex", "border-box", "flex-col")}>
        <AlertInline severity="warning">
          We do not provide place-content shorthand so please use content- and
          justify- instead
        </AlertInline>
        <PropertyTile>content-start justify-start</PropertyTile>
        <div
          className={sprout.classNames(
            "grid",
            "auto-rows-auto",
            "content-start",
            "justify-start",
            "gap-s",
            "border-default",
          )}
          style={{
            blockSize: 200,
            inlineSize: 200,
            gridTemplateColumns: "repeat(2, 56px)",
          }}
        >
          <div className={sprout.classNames(...GRID_CONTENT)}>01</div>
          <div className={sprout.classNames(...GRID_CONTENT)}>02</div>
          <div className={sprout.classNames(...GRID_CONTENT)}>03</div>
          <div className={sprout.classNames(...GRID_CONTENT)}>04</div>
        </div>
        <PropertyTile>content-center justify-center</PropertyTile>
        <div
          className={sprout.classNames(
            "grid",
            "auto-rows-auto",
            "content-center",
            "justify-center",
            "gap-s",
            "border-default",
          )}
          style={{
            blockSize: 200,
            inlineSize: 200,
            gridTemplateColumns: "repeat(2, 56px)",
          }}
        >
          <div className={sprout.classNames(...GRID_CONTENT)}>01</div>
          <div className={sprout.classNames(...GRID_CONTENT)}>02</div>
          <div className={sprout.classNames(...GRID_CONTENT)}>03</div>
          <div className={sprout.classNames(...GRID_CONTENT)}>04</div>
        </div>
        <PropertyTile>content-end justify-end</PropertyTile>
        <div
          className={sprout.classNames(
            "grid",
            "auto-rows-auto",
            "content-end",
            "justify-end",
            "gap-s",
            "border-default",
          )}
          style={{
            blockSize: 200,
            inlineSize: 200,
            gridTemplateColumns: "repeat(2, 56px)",
          }}
        >
          <div className={sprout.classNames(...GRID_CONTENT)}>01</div>
          <div className={sprout.classNames(...GRID_CONTENT)}>02</div>
          <div className={sprout.classNames(...GRID_CONTENT)}>03</div>
          <div className={sprout.classNames(...GRID_CONTENT)}>04</div>
        </div>
        <PropertyTile>content-between justify-between</PropertyTile>
        <div
          className={sprout.classNames(
            "grid",
            "auto-rows-auto",
            "content-between",
            "justify-between",
            "gap-s",
            "border-default",
          )}
          style={{
            blockSize: 200,
            inlineSize: 200,
            gridTemplateColumns: "repeat(2, 56px)",
          }}
        >
          <div className={sprout.classNames(...GRID_CONTENT)}>01</div>
          <div className={sprout.classNames(...GRID_CONTENT)}>02</div>
          <div className={sprout.classNames(...GRID_CONTENT)}>03</div>
          <div className={sprout.classNames(...GRID_CONTENT)}>04</div>
        </div>
        <PropertyTile>content-around justify-around</PropertyTile>
        <div
          className={sprout.classNames(
            "grid",
            "auto-rows-auto",
            "content-around",
            "justify-around",
            "gap-s",
            "border-default",
          )}
          style={{
            blockSize: 200,
            inlineSize: 200,
            gridTemplateColumns: "repeat(2, 56px)",
          }}
        >
          <div className={sprout.classNames(...GRID_CONTENT)}>01</div>
          <div className={sprout.classNames(...GRID_CONTENT)}>02</div>
          <div className={sprout.classNames(...GRID_CONTENT)}>03</div>
          <div className={sprout.classNames(...GRID_CONTENT)}>04</div>
        </div>
      </div>
    </div>
  ),
};

export const PlaceItems = {
  name: "place-items",
  parameters: {
    controls: false,
  },
  render: () => (
    <div
      className={sprout.classNames(
        "flex",
        "border-box",
        "gap-m",
        "flex-col",
        "w-full",
        "max-w-m",
      )}
    >
      <AlertInline severity="warning">
        We do not provide place-items shorthand so please use items- and
        justify- instead
      </AlertInline>
      <PropertyTile>items-start justify-items-start</PropertyTile>
      <div
        className={sprout.classNames(
          "grid",
          "grid-cols-2",
          "items-start",
          "justify-items-start",
          "auto-rows-auto",
          "gap-s",
          "border-default",
        )}
        style={{ blockSize: 200, inlineSize: 200 }}
      >
        <div className={sprout.classNames(...CONTENT_CLASSES)}>01</div>
        <div className={sprout.classNames(...CONTENT_CLASSES)}>02</div>
        <div className={sprout.classNames(...CONTENT_CLASSES)}>03</div>
        <div className={sprout.classNames(...CONTENT_CLASSES)}>04</div>
      </div>
      <PropertyTile>items-end justify-items-end</PropertyTile>
      <div
        className={sprout.classNames(
          "grid",
          "grid-cols-2",
          "items-end",
          "justify-items-end",
          "auto-rows-auto",
          "gap-s",
          "border-default",
        )}
        style={{ blockSize: 200, inlineSize: 200 }}
      >
        <div className={sprout.classNames(...CONTENT_CLASSES)}>01</div>
        <div className={sprout.classNames(...CONTENT_CLASSES)}>02</div>
        <div className={sprout.classNames(...CONTENT_CLASSES)}>03</div>
        <div className={sprout.classNames(...CONTENT_CLASSES)}>04</div>
      </div>
      <PropertyTile>items-center justify-items-center</PropertyTile>
      <div
        className={sprout.classNames(
          "grid",
          "grid-cols-2",
          "items-center",
          "justify-items-center",
          "auto-rows-auto",
          "gap-s",
          "border-default",
        )}
        style={{ blockSize: 200, inlineSize: 200 }}
      >
        <div className={sprout.classNames(...CONTENT_CLASSES)}>01</div>
        <div className={sprout.classNames(...CONTENT_CLASSES)}>02</div>
        <div className={sprout.classNames(...CONTENT_CLASSES)}>03</div>
        <div className={sprout.classNames(...CONTENT_CLASSES)}>04</div>
      </div>
      <PropertyTile>items-stretch justify-items-stretch</PropertyTile>
      <div
        className={sprout.classNames(
          "grid",
          "grid-cols-2",
          "items-stretch",
          "justify-items-stretch",
          "auto-rows-auto",
          "gap-s",
          "border-default",
        )}
        style={{ blockSize: 200, inlineSize: 200 }}
      >
        <div className={sprout.classNames(...CONTENT_CLASSES)}>01</div>
        <div className={sprout.classNames(...CONTENT_CLASSES)}>02</div>
        <div className={sprout.classNames(...CONTENT_CLASSES)}>03</div>
        <div className={sprout.classNames(...CONTENT_CLASSES)}>04</div>
      </div>
    </div>
  ),
};
