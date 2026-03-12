/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

import iconsMetadata from "@qlik/sprout-icons/metadata.json";
import * as Icons from "@qlik/sprout-icons/react";
import { Checkbox, List, ListItem, Tag, TextField, classNames } from "@qlik/sprout-react";
import type { Meta } from "@storybook/react";

const meta: Meta = {
  title: "Icons",
};

export default meta;

const metadataByName = iconsMetadata.reduce(
  (acc, metadata) => {
    // transformation_flow -> TransformationFlow
    const name = metadata.filename
      .split("_")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");
    acc[`${name}Icon`] = metadata;
    return acc;
  },
  {} as Record<string, (typeof iconsMetadata)[number]>,
);

function AllIconsStoryContent() {
  const [search, setSearch] = useState("");
  const [showImport, setShowImport] = useState(false);

  const filteredIcons = Object.entries(Icons).filter(([name]) => name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div
      className={classNames("flex", "flex-col", "border-box", "gap-l", "p-xl", "w-xl", "h-screen", "overflow-y-hidden")}
    >
      <div className={classNames("flex", "flex-row", "border-box", "items-center", "w-full", "gap-m")}>
        <TextField
          placeholder="Search icons..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          aria-label="Search icons"
        />
        <Checkbox
          label="Copy using import"
          checked={showImport}
          onChange={(e) => {
            setShowImport(e.target.checked);
          }}
        />
      </div>
      <div className={classNames("flex-1", "overflow-y-auto")}>
        <List gap="xs" hasPadding={false}>
          {filteredIcons.map(([name, Icon]) => (
            <ListItem
              key={name}
              onClick={() => {
                void navigator.clipboard.writeText(
                  showImport ? `import { ${name} } from '@qlik/sprout-icons/react';` : name,
                );
              }}
              aria-label={`Copy icon name: ${name}`}
            >
              <div
                className={classNames(
                  "flex",
                  "flex-row",
                  "border-box",
                  "items-center",
                  "justify-between",
                  "w-full",
                  "gap-m",
                  "p-m",
                )}
              >
                <div className={classNames("flex", "flex-row", "flex-1", "border-box", "items-center", "gap-m")}>
                  <div className={classNames("flex", "items-center", "justify-center", "text-default")}>
                    <Icon />
                  </div>
                  <div className={classNames("flex", "flex-col", "flex-1", "shrink-0")}>
                    <span className={classNames("font-body-s", "text-default", "break-all")}>{name}</span>
                    <span className={classNames("font-body-s", "text-weak", "break-all")}>
                      {metadataByName[name].category}
                    </span>
                  </div>
                  <div className={classNames("flex", "flex-row", "flex-1", "gap-s", "justify-start", "flex-wrap")}>
                    {metadataByName[name].tags.map((tag) => (
                      <Tag key={tag} text={tag} size="s" />
                    ))}
                  </div>
                </div>
              </div>
            </ListItem>
          ))}

          {filteredIcons.length === 0 ? (
            <ListItem>
              <span className={classNames("font-body-s", "text-subtle")}>No icons found</span>
            </ListItem>
          ) : null}
        </List>
      </div>
    </div>
  );
}
AllIconsStoryContent.displayName = "AllIconsStoryContent";

export const AllIcons = {
  parameters: {
    chromatic: { disableSnapshot: true },
    layout: "fullscreen",
  },
  render: () => <AllIconsStoryContent />,
};
