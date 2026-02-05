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
        <div className={classNames("grid", "grid-cols-8", "gap-m", "w-3xl")}>
          {Object.entries(Icons)
            .filter(([name, Icon]) => name.toLowerCase().includes(search.toLowerCase()))
            .map(([name, Icon]) => (
              <div
                key={name}
                className={classNames(
                  "flex",
                  "flex-col",
                  "items-center",
                  "justify-around",
                  "gap-m",
                  "p-m",
                  "border-default",
                )}
              >
                <Icon height={size} width={size} />
                <span className={classNames("font-label-xs", "text-default", "break-all")}>{name}</span>
              </div>
            ))}
        </div>
      </div>
    );
  },
};
