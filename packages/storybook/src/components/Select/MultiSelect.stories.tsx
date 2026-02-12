import type { ReactNode } from "react";
import { useState } from "react";

import {
  Select,
  type SelectProps,
  classNames,
} from "@qlik/sprout-react";
import PaletteOutline from "@qlik/sprout-icons/react/PaletteOutline";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { getMultiSelectArgTypes } from "./MultiSelect.argTypes";
import { OPTIONS_WITH_GROUP } from "./SelectTest";

export default {
  title: "Components/MultiSelect",
  component: Select.Multi,
  excludeStories: ["ValueTick", "LabelTick"],
} as Meta;

type StoryProps = SelectProps["Multi"] & { defaultValues: Array<string> };

export const Playground: StoryObj<StoryProps> = {
  render: ({ defaultValues, ...props }: StoryProps) => (
    <div
      className={classNames("flex-noreset", "border-box", "p-s", "items-start")}
      data-testid="wrapper"
      style={{ inlineSize: 300 }}
    >
      <Select.Multi {...props} defaultValue={defaultValues}>
        <Select.Option value="">--Please choose colors--</Select.Option>
        <Select.OptGroup label="Colors">
          <Select.Option value="red">Red</Select.Option>
          <Select.Option value="green">Green</Select.Option>
          <Select.Option value="blue">Blue</Select.Option>
        </Select.OptGroup>
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
      </Select.Multi>
    </div>
  ),
  args: {
    label: "Select a color",
    defaultOpen: false,
    defaultValues: ["red"],
    hasError: false,
  },
  argTypes: getMultiSelectArgTypes({ options: ["red", "green", "blue"] }),
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

const disableSnap = { chromatic: { disableSnapshot: true } };

export const UnControlled: StoryObj<StoryProps> = {
  render: ({ defaultValues, ...props }: StoryProps) => {
    return (
      <div
        className={classNames(
          "flex-noreset",
          "border-box",
          "p-s",
          "items-start",
        )}
        data-testid="wrapper"
        style={{ inlineSize: 300 }}
      >
        <Select.Multi
          label="Uncontrolled"
          {...props}
          defaultValue={defaultValues}
        >
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
            <Select.Option value="cornsilk">Cornsilk</Select.Option>
            <Select.Option value="pink">Gainsboro</Select.Option>
          </Select.OptGroup>
        </Select.Multi>
      </div>
    );
  },
  args: {
    placeholder: "Select colors",
    defaultValues: ["pink", "purple", "maroon"],
  },
  argTypes: {
    ...Playground.argTypes,
  },
  parameters: { ...disableSnap },
};

export const VisualTest: StoryObj<StoryProps> = {
  render: () => {
    const renderCustomValue = (
      values: Array<string>,
      selectedProps: Record<string, SelectProps["Option"]>,
      input: ReactNode,
    ) => {
      return (
        <div
          className={classNames(
            "flex-noreset",
            "overflow-hidden",
            "border-box",
            "w-full",
            "p-0",
            "pl-s",
            "gap-m",
            "items-center",
            "text-default",
            "font-body-m",
          )}
        >
          <PaletteOutline />
          <span
            className={classNames("flex", "flex-row", "gap-s", "flex-wrap")}
          >
            {values.map((value, index) => {
              const isLast = index === values.length - 1;

              if (isLast) {
                return (
                  <span
                    key={value}
                    className={classNames("text-default", "font-label-s")}
                  >
                    {selectedProps[value]?.children || value}
                  </span>
                );
              }

              return (
                <span
                  key={value}
                  className={classNames(
                    "flex",
                    "flex-row",
                    "text-default",
                    "font-label-s",
                  )}
                >
                  {selectedProps[value]?.children || value}
                  <span className={classNames("text-default", "font-label-s")}>
                    ,{" "}
                  </span>
                </span>
              );
            })}
          </span>
          {input}
        </div>
      );
    };
    return (
      <>
        <div
          className={classNames(
            "flex-noreset",
            "border-box",
            "flex-row",
            "p-l",
            "gap-3xl",
            "items-start",
          )}
          data-testid="wrapper"
          style={{ inlineSize: 1200, blockSize: 640 }}
        >
          <Select.Multi
            defaultOpen
            placeholder="colors"
            aria-label="Color selection"
          >
            {OPTIONS_WITH_GROUP}
          </Select.Multi>

          <Select.Multi
            defaultOpen
            label="Colors selection"
            placeholder="colors"
            defaultValue={["blue", "red", "sage"]}
          >
            {OPTIONS_WITH_GROUP}
            <Select.Option value="sage">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
              pariatur?
            </Select.Option>
          </Select.Multi>

          <div className={classNames("pl-3xl")}>
            <Select.Multi
              defaultOpen
              label="Custom render value"
              renderValue={renderCustomValue}
              defaultValue={["blue", "chartreuse", "red"]}
            >
              <Select.Option value="">--Please choose colors--</Select.Option>
              <Select.OptGroup label="Colors">
                <Select.Option value="red">Red</Select.Option>
                <Select.Option value="green">Green</Select.Option>
                <Select.Option value="blue">Blue</Select.Option>
              </Select.OptGroup>
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
            </Select.Multi>
          </div>
        </div>
        <div className={classNames("flex-noreset", "flex-row", "gap-m")}>
          <div
            className={classNames(
              "flex-noreset",
              "border-box",
              "flex-col",
              "gap-m",
              "w-xxs",
            )}
          >
            <Select.Multi
              placeholder="colors"
              label="Has error"
              hasError
              errorMessages={["Error message"]}
            >
              {OPTIONS_WITH_GROUP}
            </Select.Multi>
            <Select.Multi
              placeholder="colors"
              label="Has help"
              helpText="Help text"
            >
              {OPTIONS_WITH_GROUP}
            </Select.Multi>
            <Select.Multi
              placeholder="colors"
              label="Is disabled"
              defaultValue={["blue", "red"]}
              disabled
            >
              {OPTIONS_WITH_GROUP}
            </Select.Multi>
            <Select.Multi
              data-testid="hover"
              label="Hovered"
              placeholder="colors"
              defaultValue={["blue", "red"]}
            >
              {OPTIONS_WITH_GROUP}
            </Select.Multi>
            <Select.Multi
              label="Read only"
              placeholder="colors"
              defaultValue={["blue", "red"]}
              readOnly
            >
              {OPTIONS_WITH_GROUP}
            </Select.Multi>
          </div>
          <div className={classNames("flex-noreset", "flex-col")}>
            <Select.Multi filterValue="red" label="filter + create" defaultOpen>
              {OPTIONS_WITH_GROUP}
              <Select.OptionCreate />
            </Select.Multi>

            <div style={{ marginBlockStart: "auto" }}>
              <Select.Multi label="Read only" placeholder="colors" readOnly>
                {OPTIONS_WITH_GROUP}
              </Select.Multi>
            </div>
          </div>
        </div>
      </>
    );
  },
  parameters: {
    controls: {
      disable: true,
    },
    pseudo: {
      hover: '[data-testid="hover.combobox"]',
    },
  },
};

export const CustomRenderValue: StoryObj<StoryProps> = {
  parameters: { ...disableSnap },
  render: ({ defaultValues, ...props }: StoryProps) => {
    const renderCustomValue = (
      values: Array<string>,
      selectedProps: Record<string, SelectProps["Option"]>,
      input: ReactNode,
    ) => {
      return (
        <div
          className={classNames(
            "flex-noreset",
            "overflow-hidden",
            "border-box",
            "w-full",
            "p-0",
            "pl-s",
            "gap-m",
            "items-center",
            "text-default",
            "font-body-m",
          )}
        >
          <PaletteOutline />
          <span
            className={classNames("flex", "flex-row", "gap-s", "flex-wrap")}
          >
            {values.map((value, index) => {
              const isLast = index === values.length - 1;

              if (isLast) {
                return (
                  <span
                    key={value}
                    className={classNames("text-default", "font-label-s")}
                  >
                    {selectedProps[value]?.children || value}
                  </span>
                );
              }

              return (
                <span
                  key={value}
                  className={classNames(
                    "flex",
                    "flex-row",
                    "text-default",
                    "font-label-s",
                  )}
                >
                  {selectedProps[value]?.children || value}
                  <span className={classNames("text-default", "font-label-s")}>
                    ,{" "}
                  </span>
                </span>
              );
            })}
          </span>
          {input}
        </div>
      );
    };
    return (
      <div
        className={classNames(
          "flex-noreset",
          "border-box",
          "p-s",
          "items-start",
        )}
        data-testid="wrapper"
        style={{ inlineSize: 300 }}
      >
        <Select.Multi
          {...props}
          renderValue={renderCustomValue}
          defaultValue={defaultValues}
        >
          <Select.Option value="">--Please choose colors--</Select.Option>
          <Select.OptGroup label="Colors">
            <Select.Option value="red">Red</Select.Option>
            <Select.Option value="green">Green</Select.Option>
            <Select.Option value="blue">Blue</Select.Option>
          </Select.OptGroup>
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
        </Select.Multi>
      </div>
    );
  },
  argTypes: getMultiSelectArgTypes({
    options: ["red", "green", "blue", "chartreuse", "cornsilk", "pink"],
  }),
};

export const CreateOption: StoryObj<StoryProps> = {
  render: ({ defaultValues, ...props }: StoryProps) => {
    const [options, setOptions] = useState([
      { value: "red", label: "Red" },
      { value: "green", label: "Green" },
      { value: "blue", label: "Blue" },
    ]);
    const isExistingOption = (value: string) => {
      return options.some((opt) => opt.value === value || opt.label === value);
    };
    return (
      <div
        className={classNames(
          "flex-noreset",
          "border-box",
          "p-s",
          "items-start",
        )}
        data-testid="wrapper"
        style={{ inlineSize: 300 }}
      >
        <Select.Multi
          {...props}
          onChange={(e) => {
            const newValue = e.target.value;
            if (!newValue) return;
            // if not, create the new option
            if (!isExistingOption(newValue)) {
              setOptions((opts) => [
                ...opts,
                { value: newValue, label: newValue },
              ]);
            }
          }}
          defaultValue={defaultValues}
          placeholder="Create or select colors"
        >
          {options.map((opt) => (
            <Select.Option key={opt.value} value={opt.value}>
              {opt.label}
            </Select.Option>
          ))}
          <Select.OptionCreate
            isValid={(value) => {
              return value !== "false" && !isExistingOption(value);
            }}
          />
        </Select.Multi>
      </div>
    );
  },
  args: {
    label: "Creatable MultiSelect",
    defaultOpen: false,
    // onCreateOption: (newValue: string) => console.log(`New option created: ${newValue}`),
    defaultValues: [],
    hasError: false,
  },
  argTypes: {
    ...getMultiSelectArgTypes({ options: ["red", "green", "blue"] }),
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};
