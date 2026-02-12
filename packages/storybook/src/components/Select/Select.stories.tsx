import type { ReactNode } from "react";
import { fn } from "storybook/test";

import {
  Select,
  type SelectProps,
  classNames,
} from "@qlik/sprout-react";
import ChartOutline from "@qlik/sprout-icons/react/ChartOutline";
import PaletteOutline from "@qlik/sprout-icons/react/PaletteOutline";
import TableOutline from "@qlik/sprout-icons/react/TableOutline";
import TextObject from "@qlik/sprout-icons/react/TextObject";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { getSelectArgTypes } from "./Select.argTypes";
import { OPTIONS_WITH_GROUP } from "./SelectTest";

export default {
  title: "Components/Select",
  component: Select.Select,
} as Meta;

const disableSnap = { chromatic: { disableSnapshot: true } };

export const UnControlled: StoryObj<SelectProps["Select"]> = {
  render: (props) => (
    <div
      className={classNames("flex", "border-box", "items-start", "w-s")}
      data-testid="wrapper"
    >
      <Select.Select {...props} aria-label="Color">
        {/* This is good to have the empty value as in HTML */}
        <Select.Option value="">None</Select.Option>
        {OPTIONS_WITH_GROUP}
        {/* Divider in case you have multiple groups */}
        <Select.Divider />
        {/* Simple and efficient composition */}
        <Select.OptGroup label="Deprecated Colors">
          <Select.Option value="chartreuse">
            <Select.OptionStyled
              label="Chartreuse"
              description="nice color btw"
            />
          </Select.Option>
          <Select.Option value="cornsilk">
            <i>Cornsilk</i>
          </Select.Option>
          <Select.Option value="pink">
            <Select.OptionStyled label="Gainsboro" icon={<ChartOutline />} />
          </Select.Option>
          <Select.Option value="periwinkle">
            <Select.OptionStyled
              label="Periwinkle Dusk"
              description="A calm blue-violet that lingers"
              icon={
                <img
                  src="https://i.ibb.co/q956jBg/snowflake-square.png"
                  data-testid="png-icon"
                  alt="snowflake icon"
                />
              }
            />
          </Select.Option>
          <Select.Option value="teal">
            <Select.OptionStyled description="the color teal without label" />
          </Select.Option>
        </Select.OptGroup>
      </Select.Select>
    </div>
  ),
  args: {
    size: "default",
    placeholder: "Select a color",
    defaultValue: "red",
  },
  argTypes: getSelectArgTypes({
    options: ["red", "green", "blue", "chartreuse", "cornsilk", "pink"],
  }),
  parameters: { ...disableSnap },
};

export const WithField: StoryObj<SelectProps["Select"]> = {
  render: (props) => (
    <div
      className={classNames("flex", "border-box", "p-s")}
      data-testid="wrapper"
      style={{ inlineSize: 300 }}
    >
      <Select.Select label="Color" helpText="Select a color" {...props}>
        <Select.Option value="">None</Select.Option>
        {OPTIONS_WITH_GROUP}
        {/* Divider in case you have multiple groups */}
        <Select.Divider />
        {/* Simple and efficient composition */}
        <Select.OptGroup label="Deprecated Colors">
          <Select.Option value="chartreuse">
            <Select.OptionStyled
              label="Chartreuse"
              description="nice color btw"
            />
          </Select.Option>
          <Select.Option value="cornsilk">Cornsilk</Select.Option>
          <Select.Option value="pink">Gainsboro</Select.Option>
        </Select.OptGroup>
      </Select.Select>
    </div>
  ),
  args: {
    placeholder: "Select a color",
    defaultValue: "red",
  },
  argTypes: getSelectArgTypes({
    options: ["red", "green", "blue", "chartreuse", "cornsilk", "pink"],
  }),
  parameters: disableSnap,
};

export const Controlled: StoryObj<SelectProps["Select"]> = {
  render: ({ ...props }) => (
    <div
      className={classNames("flex", "border-box", "p-s")}
      data-testid="wrapper"
      style={{ inlineSize: 300 }}
    >
      <Select.Select {...props} aria-label="Color">
        <Select.Option value="">Select a color</Select.Option>
        <Select.Option value="blue">Blue</Select.Option>
        <Select.Option value="green">Green</Select.Option>
        <Select.Option value="chartreuse">Chartreuse</Select.Option>
        <Select.Option value="cornsilk">Cornsilk</Select.Option>
        <Select.Option value="pink">Pink</Select.Option>
        <Select.Option value="red">Red</Select.Option>
      </Select.Select>
    </div>
  ),
  args: {
    value: "red",
    onChange: fn(),
  },
  argTypes: getSelectArgTypes({
    options: ["red", "green", "blue", "chartreuse", "cornsilk", "pink"],
  }),
  parameters: { ...disableSnap },
};

export const WithIcons: StoryObj<
  SelectProps["Select"] & {
    options: Array<{ label: string; icon: ReactNode; value: string }>;
  }
> = {
  render: ({ options, ...props }) => (
    <div
      className={classNames("flex", "border-box", "p-s")}
      data-testid="wrapper"
      style={{ inlineSize: 300 }}
    >
      <Select.Select {...props} aria-label="Visualization">
        <Select.Option value="">Select a visualization</Select.Option>
        {options.map((option) => (
          <Select.Option key={option.value} value={option.value}>
            <Select.OptionStyled {...option} />
          </Select.Option>
        ))}
      </Select.Select>
    </div>
  ),
  args: {
    defaultValue: "Table",
    placeholder: "Select a visualization",
    options: [
      {
        label: "Chart",
        icon: <ChartOutline />,
        value: "Chart",
      },
      {
        label: "Table",
        icon: <TableOutline />,
        value: "Table",
      },
      {
        label: "Text object",
        icon: <TextObject />,
        value: "Text object",
      },
      {
        label: "Image using svg",
        icon: (
          <img
            src="https://cdn.qlikcloud.com/qmfe/frontend-assets/1.44.0/artifacts/16px/app.svg"
            alt="sense_app icon"
          />
        ),
        value: "img",
      },
      {
        label: "Image using png",
        icon: (
          <img
            src="https://i.ibb.co/q956jBg/snowflake-square.png"
            data-testid="png-icon"
            alt="snowflake icon"
          />
        ),
        value: "img-png",
      },
    ],
  },
  argTypes: getSelectArgTypes({
    options: ["Chart", "Table", "Text object", "img", "img-png"],
  }),
  parameters: { ...disableSnap },
};

export const Searchable: StoryObj<SelectProps["Select"]> = {
  render: (props) => (
    <div
      className={classNames("flex", "border-box", "items-start", "w-s")}
      data-testid="wrapper"
    >
      <Select.Select {...props} aria-label="Color">
        <Select.Search />
        <Select.Option value="">None</Select.Option>
        {OPTIONS_WITH_GROUP}
        <Select.Divider />
        <Select.OptGroup label="Deprecated Colors">
          <Select.Option value="chartreuse">Chartreuse</Select.Option>
          <Select.Option value="cornsilk">
            <i>Cornsilk</i>
          </Select.Option>
          <Select.Option value="pink">Gainsboro</Select.Option>
        </Select.OptGroup>
      </Select.Select>
    </div>
  ),
  args: {
    size: "default",
    placeholder: "Select a color",
    defaultValue: "red",
  },
  argTypes: getSelectArgTypes({
    options: ["red", "green", "blue", "chartreuse", "cornsilk", "pink"],
  }),
  parameters: { ...disableSnap },
};

const SmallOptions = (
  <>
    <Select.Option value="white">
      <Select.OptionStyled
        label="White"
        icon={
          <img
            src="https://i.ibb.co/q956jBg/snowflake-square.png"
            data-testid="png-icon"
            alt="snowflake icon"
          />
        }
      />
    </Select.Option>
    <Select.Option value="red">
      <Select.OptionStyled
        label="Red"
        icon={
          <img
            src="https://cdn.qlikcloud.com/qmfe/frontend-assets/1.44.0/artifacts/16px/app.svg"
            alt="sense_app icon"
          />
        }
      />
    </Select.Option>
  </>
);
const OVERFLOW =
  "An unknown color but with a very long label that goes beyond the parent size and with no space";

export const FontPicker = {
  parameters: { ...disableSnap },
  render: () => (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Tangerine|Inconsolata|Droid+Sans|Bungee+Tint"
      />
      <style>
        {`
          .tangerine {font-family: "Tangerine", sans-serif;}
          .inconsolata {font-family: "Inconsolata", sans-serif;}
          .droidsans {font-family: "Droid Sans", sans-serif;}
          .bungeetint {font-family: "Bungee Tint", sans-serif;}
        `}
      </style>
      <Select.Select
        defaultOpen
        label="Custom option"
        placeholder="Select a font"
        defaultValue="Tangerine"
      >
        <Select.Option value="">Please select a font</Select.Option>
        <Select.Option value="Tangerine">
          <span
            className={classNames("font-label-s", "text-default", {
              tangerine: true,
            })}
          >
            Tangerine
          </span>
        </Select.Option>
        <Select.Option value="Inconsolata">
          <span
            className={classNames("font-label-s", "text-default", {
              inconsolata: true,
            })}
          >
            Inconsolata
          </span>
        </Select.Option>
        <Select.Option value="Droid+Sans">
          <span
            className={classNames("font-label-s", "text-default", {
              droidsans: true,
            })}
          >
            Droid+Sans
          </span>
        </Select.Option>
        <Select.Option value="Bungee+Tint">
          <span
            className={classNames("font-label-s", "text-default", {
              bungeetint: true,
            })}
          >
            Bungee+Tint
          </span>
        </Select.Option>
      </Select.Select>
    </div>
  ),
};

export const RenderValue = {
  parameters: { ...disableSnap },
  render: () => (
    <div className={classNames("flex", "border-box", "flex-col", "w-s")}>
      <Select.Select
        defaultOpen
        label="Render value"
        placeholder="Select a color"
        defaultValue="red"
        renderValue={(value, selectedProps) => (
          <span
            className={classNames("flex", "gap-m", "flex-row", "items-center")}
          >
            <PaletteOutline style={{ color: value }} />
            <i className={classNames("text-default", "font-label-s")}>
              {selectedProps?.children || value}
            </i>
          </span>
        )}
      >
        <Select.Option value="">Please select a color</Select.Option>
        {OPTIONS_WITH_GROUP}
      </Select.Select>
    </div>
  ),
};

export const VisualTest = {
  render: () => (
    <div className={classNames("flex", "border-box", "flex-col", "w-4xl")}>
      <div
        className={classNames(
          "flex",
          "border-box",
          "flex-row",
          "p-l",
          "gap-xl",
          "w-xs",
          "items-start",
        )}
      >
        <Select.Select label="Option children overflow" defaultValue="overflow">
          <Select.Option value="overflow">{OVERFLOW}</Select.Option>
        </Select.Select>
        <Select.Select
          label="OptionStyled label overflow"
          defaultValue="overflow"
        >
          <Select.Option value="overflow">
            <Select.OptionStyled label={OVERFLOW} />
          </Select.Option>
        </Select.Select>
        <Select.Select
          label="OptionStyled description overflow"
          defaultValue="overflow"
        >
          <Select.Option value="overflow">
            <Select.OptionStyled label="Value" description={OVERFLOW} />
          </Select.Option>
        </Select.Select>
        <Select.Select
          label="OptionStyled label with icon"
          defaultValue="overflow"
        >
          <Select.Option value="overflow">
            <Select.OptionStyled
              label={OVERFLOW}
              icon={
                <img
                  src="https://i.ibb.co/q956jBg/snowflake-square.png"
                  data-testid="png-icon"
                  alt="snowflake icon"
                />
              }
            />
          </Select.Option>
        </Select.Select>
      </div>

      <div
        className={classNames(
          "flex",
          "border-box",
          "flex-row",
          "p-l",
          "gap-xl",
          "w-full",
          "items-start",
        )}
        style={{ blockSize: "200px" }}
      >
        <Select.Select
          defaultOpen
          placeholder="color"
          label="Default opened"
          defaultValue="red"
          size="small"
        >
          {SmallOptions}
        </Select.Select>
        <div className={classNames("shrink-0")} style={{ inlineSize: "275px" }}>
          <Select.Select
            defaultOpen
            defaultValue="unknown"
            placeholder="color"
            maxWidth="reference"
            label="Default opened with overflow"
            size="small"
          >
            <Select.Option value="">Please select a value</Select.Option>
            <Select.Option value="unknown">
              An_unknown color_but_with_a_very
              long_label_that_goes_beyond_the_parent_size_and_with_no_space
            </Select.Option>
            <Select.Option value="known">
              Example of label with overflow text lorem ipsum need to go over
              400px
            </Select.Option>
          </Select.Select>
        </div>
        <Select.Select
          placeholder="color"
          label="Default"
          defaultValue="red"
          size="small"
        >
          {SmallOptions}
        </Select.Select>
        <Select.Select
          placeholder="color"
          label="hasError"
          hasError
          size="small"
        >
          {SmallOptions}
        </Select.Select>
        <Select.Select
          placeholder="color"
          label="hasError"
          disabled
          size="small"
        >
          {SmallOptions}
        </Select.Select>
        <Select.Select
          placeholder="color"
          label="hasError"
          readOnly
          size="small"
        >
          {SmallOptions}
        </Select.Select>
      </div>
      <div
        className={classNames(
          "flex",
          "border-box",
          "flex-row",
          "p-l",
          "gap-xl",
          "w-full",
          "items-start",
        )}
        style={{ blockSize: "380px" }}
      >
        <Select.Select
          defaultOpen
          placeholder="color"
          label="Default opened"
          defaultValue="red"
        >
          {OPTIONS_WITH_GROUP}
        </Select.Select>
        <Select.Select
          defaultOpen
          label="Default opened with overflow"
          helpText="Help text"
          placeholder="color"
          defaultValue="red"
        >
          <Select.Option value="" defaultValue="red">
            Example of label with overflow text lorem ipsum need to go over
            400px
          </Select.Option>
          {OPTIONS_WITH_GROUP}
        </Select.Select>
        <Select.Select
          label="Default"
          helpText="Help text"
          placeholder="color"
        />
        <Select.Select
          label="hasError"
          helpText="Help text"
          placeholder="color"
          hasError
        />
        <Select.Select
          label="Disabled"
          helpText="Help text"
          placeholder="color"
          disabled
        />
        <Select.Select
          label="ReadOnly"
          helpText="Help text"
          placeholder="color"
          readOnly
          defaultValue="red"
        >
          {OPTIONS_WITH_GROUP}
        </Select.Select>
      </div>
    </div>
  ),
  parameters: {
    controls: {
      disable: true,
    },
    chromatic: {
      ignoreSelectors: ['[data-testid="png-icon"]'],
    },
  },
};
