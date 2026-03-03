import sprout, { type AllClasses } from "@qlik/sprout-css-modules";

import {
  BOX_CLASSES,
  CONTENT_CLASSES,
  PROPERTY_COL_PROPS,
  PROPERTY_ROW_PROPS,
  PropertyValue,
  omit,
} from "./Content";

export default {
  title: "CSS/sprout-css-modules/spacing",
};

const PADDING_PROPERTIES = [
  { name: "p", values: ["0", "s", "m", "l", "xl", "xxl", "3xl"] },
  { name: "px", values: ["0", "s", "m", "l", "xl", "xxl", "3xl"] },
  {
    name: "py",
    values: [
      "0",
      "s",
      "m",
      "l",
      "xl",
      "xxl",
      "3xl",
      "density-s",
      "density-y",
      "density-l",
      "density-xl",
      "density-xxl",
      "density-3xl",
    ],
  },
  { name: "pt", values: ["0", "s", "m", "l", "xl", "xxl", "3xl"] },
  { name: "pr", values: ["0", "s", "m", "l", "xl", "xxl", "3xl"] },
  { name: "pb", values: ["0", "s", "m", "l", "xl", "xxl", "3xl"] },
  { name: "pl", values: ["0", "s", "m", "l", "xl", "xxl", "3xl"] },
];

export const Padding = {
  name: "padding",
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div
      className={sprout.classNames(
        ...BOX_CLASSES,
        "flex-col",
        "border-none",
        "gap-0",
      )}
    >
      {PADDING_PROPERTIES.map((property) => (
        <div
          key={property.name}
          className={sprout.classNames(...PROPERTY_ROW_PROPS)}
        >
          {property.values.map((value) => {
            const className = `${property.name}-${value}` as AllClasses;
            return (
              <div
                key={className}
                className={sprout.classNames(...PROPERTY_COL_PROPS)}
              >
                <PropertyValue>{className}</PropertyValue>
                <div
                  className={sprout.classNames(
                    ...omit(CONTENT_CLASSES, "p-xl"),
                    className,
                  )}
                >
                  content
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  ),
};

const MARGIN_PROPERTIES = [
  {
    name: "m",
    values: ["auto", "0", "s", "m", "l", "xl", "xxl", "3xl"],
  },
  {
    name: "mx",
    values: ["auto", "0", "s", "m", "l", "xl", "xxl", "3xl"],
  },
  {
    name: "my",
    values: ["auto", "0", "s", "m", "l", "xl", "xxl", "3xl"],
  },
  {
    name: "mt",
    values: ["auto", "0", "s", "m", "l", "xl", "xxl", "3xl"],
  },
  {
    name: "mr",
    values: ["auto", "0", "s", "m", "l", "xl", "xxl", "3xl"],
  },
  {
    name: "mb",
    values: ["auto", "0", "s", "m", "l", "xl", "xxl", "3xl"],
  },
  {
    name: "ml",
    values: ["auto", "0", "s", "m", "l", "xl", "xxl", "3xl"],
  },
];

export const Margin = {
  name: "margin",
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div
      className={sprout.classNames(
        ...BOX_CLASSES,
        "flex-col",
        "border-none",
        "gap-0",
      )}
    >
      {MARGIN_PROPERTIES.map((property) => (
        <div
          key={property.name}
          className={sprout.classNames(...PROPERTY_ROW_PROPS)}
        >
          {property.values.map((value) => (
            <div
              key={`${property.name}-${value}`}
              className={sprout.classNames(...PROPERTY_COL_PROPS)}
            >
              <PropertyValue>
                {property.name}-{value}
              </PropertyValue>
              <div className={sprout.classNames("border-default")}>
                <div
                  className={sprout.classNames(
                    ...CONTENT_CLASSES,
                    `${property.name}_${value}` as AllClasses,
                  )}
                >
                  content
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};
