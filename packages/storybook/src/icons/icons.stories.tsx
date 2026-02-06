/* eslint-disable react-hooks/rules-of-hooks */
import * as Icons from "@qlik/sprout-icons/react";
import { classNames, Select, TextField } from "@qlik/sprout-react";
import type { Meta } from "@storybook/react";
import { useState } from "react";

const meta: Meta = {
  title: "Icons",
};

export default meta;

const SIZES = ["s", "m", "l", "xl", "xxl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl"] as const;

export const AllIcons = {
  render: () => {
    const [search, setSearch] = useState("");
    const [size, setSize] = useState("xxl");
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
          <Select.Select
            aria-label="Size"
            value={size}
            onChange={(e) => {
              setSize(e.target.value || "xxl");
            }}
          >
            {SIZES.map((currentSize) => (
              <Select.Option key={currentSize} value={currentSize}>
                {currentSize}
              </Select.Option>
            ))}
          </Select.Select>
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
                  <Icon className={classNames(`size-${size}`)} />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  },
};
