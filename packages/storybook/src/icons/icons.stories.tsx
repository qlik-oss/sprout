/* eslint-disable react-hooks/rules-of-hooks */
import * as Icons from "@qlik/sprout-icons/react";
import { classNames, Slider, TextField } from "@qlik/sprout-react";
import type { Meta } from "@storybook/react";
import { useState } from "react";

const meta: Meta = {
  title: "Icons",
};

export default meta;

const SIZES = {
  1: "s",
  2: "m",
  3: "l",
  4: "xl",
  5: "xxl",
  6: "2xl",
  7: "3xl",
  8: "4xl",
  9: "5xl",
  10: "6xl",
  11: "7xl",
};

export const AllIcons = {
  render: () => {
    const [search, setSearch] = useState("");
    const [size, setSize] = useState(5);
    return (
      <div className={classNames("flex", "flex-col", "gap-l", "flex-wrap")}>
        <div className={classNames("flex-noreset", "w-m", "flex-row", "items-start", "p-s", "gap-s", "justify-start")}>
          <TextField
            placeholder="Search icons..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            aria-label="Search icons"
          />
          <Slider.Single
            aria-label="Icon size"
            min={1}
            max={11}
            step={1}
            marks={[
              { value: 1, label: "s" },
              { value: 2, label: "m" },
              { value: 3, label: "l" },
              { value: 4, label: "xl" },
              { value: 5, label: "xxl" },
              { value: 6, label: "2xl" },
              { value: 7, label: "3xl" },
              { value: 8, label: "4xl" },
              { value: 9, label: "5xl" },
              { value: 10, label: "6xl" },
              { value: 11, label: "7xl" },
            ]}
            defaultValue={2}
            onChange={(value) => {
              setSize(value);
            }}
          />
        </div>
        <div className={classNames("flex", "flex-row", "flex-wrap", "gap-m", "w-fit")}>
          {Object.entries(Icons)
            .filter(([name]) => name.toLowerCase().includes(search.toLowerCase()))
            .map(([name, Icon]) => (
              <div
                key={name}
                className={classNames("flex", "flex-col", "gap-m", "p-m", "border-default", "radius-soft")}
                style={{ blockSize: 150, inlineSize: 150 }}
              >
                <span className={classNames("font-script-s", "text-weak", "break-all")}>{name}</span>
                <div className={classNames("flex", "items-center", "justify-center", "flex-1", "text-default")}>
                  <Icon
                    className={classNames(`size-${SIZES[size]}`)}
                    // height={`var(--sprout-common-sizing-${SIZES[size]})`}
                    // width={`var(--sprout-common-sizing-${SIZES[size]})`}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  },
};
