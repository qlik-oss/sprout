/* eslint-disable react-hooks/rules-of-hooks */
import * as Icons from "@qlik/sprout-icons/react";
import { classNames, Slider, TextField } from "@qlik/sprout-react";
import type { Meta } from "@storybook/react";
import { useState } from "react";

const meta: Meta = {
  title: "Icons",
};

export default meta;

export const AllIcons = {
  render: () => {
    const [search, setSearch] = useState("");
    const [size, setSize] = useState(16);
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
            min={16}
            max={48}
            defaultValue={24}
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
                  <Icon height={size} width={size} />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  },
};
