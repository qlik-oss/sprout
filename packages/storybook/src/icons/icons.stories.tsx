/* eslint-disable react-hooks/rules-of-hooks */
import * as Icons from "@qlik/sprout-icons/react";
import { classNames, TextField } from "@qlik/sprout-react";
import type { Meta } from "@storybook/react";
import { useState } from "react";

const meta: Meta = {
  title: "Icons",
};

export default meta;

function removeTrailingIconFromName(name: string) {
  return name.endsWith("Icon") ? name.slice(0, -4) : name;
}

export const AllIcons = {
  render: () => {
    const [search, setSearch] = useState("");
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
                <span className={classNames("font-script-s", "text-weak", "break-all")}>
                  {removeTrailingIconFromName(name)}
                </span>
                <div className={classNames("flex", "items-center", "justify-center", "flex-1", "text-default")}>
                  <Icon />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  },
};
