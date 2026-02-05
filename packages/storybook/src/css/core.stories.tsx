/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useMemo, useRef, useState } from "react";

import sprout, {
  type AllClasses,
  type BoxSizing,
  type ContainerSize,
} from "@qlik/sprout-css-modules";
import { Button, classNames } from "@qlik/sprout-css-react";
import {
  AlignLeftIcon,
  NextIcon,
} from "@qlik/sprout-icons/react";
import type { StoryContext, StoryObj } from "@storybook/react-vite";

import { Item } from "./Content";
import { SproutMediaArgTypes } from "./sprout-css-modules.argTypes";

const INITIAL_VIEWPORT = sprout.media.getViewportSize();

export default {
  title: "CSS/sprout-css-modules/core",
};

export const Responsive = {
  name: "responsive / media",
  parameters: {
    controls: false,
    layout: "fullscreen",
  },
  argTypes: SproutMediaArgTypes,
  render: (props: unknown, context: StoryContext) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [viewportSize, setViewportSize] = useState(INITIAL_VIEWPORT);
    useEffect(() => {
      sprout.media.addListener(setViewportSize);
      return () => {
        sprout.media.removeListeners();
      };
    }, [context]);
    return (
      <div className={sprout.classNames("border-box", "p-m")}>
        <div
          className={sprout.media.classNames(
            {
              s: "gap-xl",
              m: "gap-xl",
              l: "gap-xxl",
              xl: "gap-3xl",
            },
            sprout.classNames("grid", "grid-cols-16"),
          )}
        >
          <div
            className={sprout.media.classNames({
              s: ["col-start-1", "col-span-3"],
              m: ["col-start-2", "col-span-3"],
              l: ["col-start-3", "col-span-3"],
              xl: ["col-start-4", "col-span-3"],
            })}
          >
            <Item>
              {sprout.media.get({
                s: ["col-start-1", "col-span-3"].join(", "),
                m: ["col-start-2", "col-span-3"].join(", "),
                l: ["col-start-3", "col-span-3"].join(", "),
                xl: ["col-start-4", "col-span-3"].join(", "),
              })}
            </Item>
          </div>
          <div className={sprout.classNames("col-start-14", "col-end-16")}>
            <Item>end</Item>
          </div>
          <div
            className={sprout.media.classNames({
              s: ["col-span-8"],
              m: ["col-span-4"],
            })}
          >
            <Item>s=8 m=4</Item>
          </div>
          <div
            className={sprout.media.classNames({
              s: ["col-span-8"],
              m: ["col-span-4"],
            })}
          >
            <Item>s=8 m=4</Item>
          </div>
          <div
            className={sprout.media.classNames({
              s: ["col-span-16"],
              m: ["col-span-8"],
            })}
          >
            <Item>s=16 m=8</Item>
          </div>
          <div
            className={sprout.classNames("col-span-16")}
            {...sprout.media.get<{ "data-viewport": string }>({
              s: { "data-viewport": "s" },
            })}
          >
            <Item>
              sprout.media.get can return anything even object / props
              &#123;data-viewport=&quot;
              {sprout.media.getViewportSize()}&quot; &#125; !
            </Item>
          </div>
        </div>
      </div>
    );
  },
};

export const CreateContainer: StoryObj = {
  name: "createContainer",
  parameters: {
    controls: false,
    chromatic: {
      modes: {
        breakpoint_xxs: {
          viewport: "mobile1",
        },
        breakpoint_xs: {
          viewport: "mobile2",
        },
        breakpoint_m: {
          viewport: "tablet",
        },
      },
    },
  },
  render: () => {
    const ref = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState<ContainerSize>("xxs");
    const prevSize = useRef<string | null>(null);

    const container = useMemo(
      () => sprout.createContainer(size, ref.current),
      [size],
    );

    useEffect(() => {
      // box defaults to "content-box" in `sprout.widthObserver`
      const observer = sprout.widthObserver(() => ref.current, {
        boxSizing: "border-box",
        onResize: (newWidth) => {
          if (typeof newWidth === "undefined") return;
          const nextSize = container.match(newWidth);
          if (prevSize.current !== nextSize) {
            prevSize.current = nextSize;
            setSize(nextSize);
          }
        },
      });

      observer.observe();

      return () => {
        observer.disconnect();
      };
    }, [container]);

    return (
      <div
        className={sprout.classNames(
          "flex",
          "border-box",
          "flex-col",
          "gap-m",
          "w-full",
        )}
      >
        <p className={sprout.classNames("font-body-s", "text-default")}>
          This example changes alignment and layout based on the element’s own
          width using <code>widthObserver</code> together with{" "}
          <code>createContainer</code> and <code>get</code>. Drag the handle to
          resize or change the viewport size.
        </p>
        <div
          ref={ref}
          className={sprout.classNames(
            "border-box",
            "border-default",
            "p-m",
            "w-full",
          )}
          style={{ resize: "horizontal", overflow: "auto" }}
        >
          <div className={sprout.classNames("border-box", "p-m")}>
            <Button
              label={`Button - ${container.get<string>({ xs: "justified: true", m: "justified: false" })}`}
              justified={container.get<boolean>({ xxs: true, m: false })}
            />
          </div>

          <div
            className={container.classNames(
              {
                xxs: ["grid-cols-1", "gap-s"],
                xs: ["grid-cols-2", "gap-s"],
                s: ["grid-cols-3", "gap-m"],
                m: ["grid-cols-4", "gap-m"],
                l: ["grid-cols-5", "gap-l"],
                xl: ["grid-cols-6", "gap-l"],
                xxl: ["grid-cols-7", "gap-xl"],
                "3xl": ["grid-cols-8", "gap-xl"],
                "4xl": ["grid-cols-9", "gap-xl"],
              },
              sprout.classNames("grid", "border-box", "p-m"),
            )}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className={sprout.classNames(
                  "border-default",
                  "p-s",
                  "items-center",
                  "justify-center",
                  "flex",
                )}
              >
                Item {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

export const WidthObserver: StoryObj = {
  name: "widthObserver",
  parameters: {
    controls: false,
  },
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<number | undefined>(undefined);
    const [boxSizing, setBoxSizing] = useState<BoxSizing>("content-box");

    useEffect(() => {
      const observer = sprout.widthObserver(() => containerRef.current, {
        boxSizing,
        onResize: (w) => {
          setWidth(w);
        },
      });
      observer.observe();

      return () => {
        observer.disconnect();
      };
    }, [boxSizing]);

    return (
      <div
        className={sprout.classNames(
          "flex",
          "border-box",
          "flex-col",
          "gap-m",
          "w-full",
        )}
        style={{ alignItems: "flex-start" }}
      >
        <p className={sprout.classNames("font-body-s", "text-default")}>
          Resize the element horizontally, its own width (not the viewport) is
          observed via <code>ResizeObserver</code>.
        </p>

        <Button
          label={
            boxSizing === "border-box"
              ? "Switch to content-box"
              : "Switch to border-box"
          }
          onClick={() => {
            setBoxSizing(
              boxSizing === "border-box" ? "content-box" : "border-box",
            );
          }}
        />

        <div
          ref={containerRef}
          className={sprout.classNames(
            "border-default",
            "bg-default",
            "p-m",
            "w-m",
          )}
          style={{
            resize: "horizontal",
            overflow: "auto",
          }}
        >
          <Item>
            width: {typeof width === "number" ? `${Math.round(width)}px` : "—"}
          </Item>
          <div
            className={sprout.classNames(
              "font-label-s",
              "text-default",
              "pt-s",
            )}
          >
            box: {boxSizing}
          </div>
        </div>
      </div>
    );
  },
};

const RTL_CONFIG: Array<{
  dir: "ltr" | "rtl";
  styles: Array<AllClasses>;
}> = [
  {
    dir: "ltr",
    styles: ["rtl_rotate_y_180"],
  },
  {
    dir: "rtl",
    styles: ["rtl_rotate_y_180"],
  },
];

export const RTL: StoryObj = {
  name: "rtl",
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
        "gap-3xl",
        "w-m",
        "p-m",
      )}
    >
      {RTL_CONFIG.map(({ dir, styles }) => (
        <div
          key={dir}
          dir={dir}
          className={classNames(
            "flex",
            "flex-col",
            "border-box",
            "border-default",
            "p-m",
            "gap-m",
          )}
        >
          <span>
            {dir} {styles.join(" ")}
          </span>
          <div
            className={classNames("flex", "flex-row", "border-box", "gap-m")}
          >
            <NextIcon className={classNames(...styles)} />{" "}
            NextIcon
          </div>
          <div
            className={classNames("flex", "flex-row", "border-box", "gap-m")}
          >
            <AlignLeftIcon className={classNames(...styles)} />
            AlignLeftIcon
          </div>
        </div>
      ))}
    </div>
  ),
};
