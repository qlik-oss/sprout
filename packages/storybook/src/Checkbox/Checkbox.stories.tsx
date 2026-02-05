/* eslint-disable react-hooks/rules-of-hooks */
import { type ChangeEvent, useState } from "react";
import { fn } from "storybook/test";

import sprout from "@qlik/sprout-css-modules";
import {
  Checkbox,
  CheckboxGroup,
  classNames,
} from "@qlik/sprout-css-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { CheckboxArgTypes, CheckboxGroupArgTypes } from "./Checkbox.argTypes";

type Story = StoryObj<typeof Checkbox>;

const meta: Meta = {
  title: "Components/Checkbox",
  component: Checkbox,
};

export default meta;

export const Playground: Story = {
  render: (props) => <Checkbox {...props} />,
  args: {
    name: "checkbox",
    label: "Checkbox",
  },
  argTypes: CheckboxArgTypes,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Controlled: Story = {
  render: ({ onChange, ...args }) => {
    const [checked, setChecked] = useState(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <>
        <div
          data-testid="wrapper"
          className={classNames(
            "flex",
            "flex-row",
            "border-box",
            "p-s",
            "w-fit",
          )}
        >
          <Checkbox {...args} checked={checked} onChange={handleChange} />
        </div>

        <p className={sprout.classNames("font-body-s", "text-default")}>
          Checked: {checked ? "true" : "false"}
        </p>
      </>
    );
  },
  args: {
    name: "checkbox",
    label: "Checkbox",
    onChange: fn(),
    disabled: false,
  },
  argTypes: CheckboxArgTypes,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Group: StoryObj = {
  render: (args) => (
    <div
      data-testid="wrapper"
      className={classNames(
        "flex",
        "flex-row",
        "border-box",
        "p-s",
        "items-start",
        "gap-m",
        "w-fit",
      )}
    >
      <CheckboxGroup
        {...args}
        options={[
          { name: "q1", label: "Option 1" },
          { name: "q2", label: "Option 2" },
          { name: "q3", label: "Option 3" },
        ]}
      />
    </div>
  ),

  args: {
    helpText: "Help text",
    label: "Checkbox Group",
  },
  argTypes: CheckboxGroupArgTypes,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Indeterminate: Story = {
  render: () => {
    const [checked, setChecked] = useState([true, false]);

    const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
    };

    return (
      <div
        data-testid="wrapper"
        className={classNames(
          "flex",
          "flex-col",
          "border-box",
          "p-s",
          "gap-m",
          "w-fit",
        )}
      >
        <Checkbox
          label="Parent"
          checked={checked[0] ? checked[1] : undefined}
          indeterminate={checked[0] !== checked[1]}
          onChange={handleChange1}
        />

        <div
          className={classNames(
            "flex",
            "flex-col",
            "border-box",
            "pl-m",
            "items-start",
            "gap-m",
          )}
        >
          <Checkbox
            label="Child 1"
            checked={checked[0]}
            onChange={handleChange2}
          />
          <Checkbox
            label="Child 2"
            checked={checked[1]}
            onChange={handleChange3}
          />
        </div>
      </div>
    );
  },
  parameters: {
    controls: { disable: true },
    chromatic: { disableSnapshot: true },
  },
};

export const VisualTest: Story = {
  render: () => (
    <div className={classNames("flex", "flex-col", "border-box")}>
      <h2 className={sprout.classNames("font-heading-m", "text-default")}>
        States
      </h2>

      <div
        className={classNames(
          "flex",
          "flex-row",
          "border-box",
          "justify-stretch",
          "gap-m",
        )}
      >
        <div
          className={classNames(
            "flex",
            "flex-col",
            "border-box",
            "gap-m",
            "justify-stretch",
          )}
        >
          <Checkbox name="checkbox1" label="Uncheck default" />
          <Checkbox
            name="checkbox1"
            label="Uncheck hover"
            data-testid="hover"
          />
          <Checkbox
            name="checkbox1"
            label="Uncheck focus"
            data-testid="focus"
          />
          <Checkbox name="checkbox4" label="Uncheck disabled" disabled />
        </div>

        <div
          className={classNames(
            "flex",
            "flex-col",
            "border-box",
            "gap-m",
            "justify-stretch",
          )}
        >
          <Checkbox
            name="checkbox2"
            label="Indeterminate default"
            indeterminate
          />
          <Checkbox
            name="checkbox2"
            label="Indeterminate hover"
            indeterminate
            data-testid="hover"
          />
          <Checkbox
            name="checkbox3"
            label="Indeterminate focus"
            indeterminate
            data-testid="focus"
          />
          <Checkbox
            name="checkbox5"
            label="Indeterminate disabled"
            indeterminate
            disabled
          />
        </div>
        <div
          className={classNames(
            "flex",
            "flex-col",
            "border-box",
            "gap-m",
            "justify-stretch",
          )}
        >
          <Checkbox name="checkbox3" label="Checked default" checked />
          <Checkbox
            name="checkbox3"
            label="Checked hover"
            checked
            data-testid="hover"
          />
          <Checkbox
            name="checkbox3"
            label="Checked focus"
            checked
            data-testid="focus"
          />
          <Checkbox
            name="checkbox6"
            label="Checked disabled"
            checked
            disabled
          />
        </div>
      </div>

      <h2 className={sprout.classNames("font-heading-m", "text-default")}>
        Tooltip and help text
      </h2>
      <div
        className={classNames(
          "flex",
          "flex-row",
          "border-box",
          "justify-stretch",
          "gap-m",
        )}
      >
        <div
          className={classNames(
            "flex",
            "flex-col",
            "border-box",
            "gap-m",
            "justify-stretch",
          )}
        >
          <Checkbox
            name="checkbox1"
            label="Uncheck tooltip"
            infoIconTooltip="This is some additional info about this checkbox"
          />
          <Checkbox
            name="checkbox1"
            label="Unchecked with help text and tooltip"
            helpText="This is some help text for this checkbox"
            infoIconTooltip="This is some additional info about this checkbox"
          />
          <Checkbox
            name="checkbox1"
            checked
            label="Checked with help text and tooltip"
            helpText="This is some help text for this checkbox"
            infoIconTooltip="This is some additional info about this checkbox"
          />
          <Checkbox
            name="checkbox1"
            disabled
            label="Disabled uncheck tooltip"
            infoIconTooltip="This is some additional info about this checkbox"
          />
          <Checkbox
            name="checkbox1"
            disabled
            label="Disabled unchecked with help text and tooltip"
            helpText="This is some help text for this checkbox"
            infoIconTooltip="This is some additional info about this checkbox"
          />
          <Checkbox
            name="checkbox1"
            checked
            disabled
            label="Disabled checked with help text and tooltip"
            helpText="This is some help text for this checkbox"
            infoIconTooltip="This is some additional info about this checkbox"
          />
        </div>
      </div>

      <h2 className={sprout.classNames("font-heading-m", "text-default")}>
        Field
      </h2>
      <div
        data-testid="wrapper"
        className={classNames(
          "flex",
          "flex-col",
          "border-box",
          "p-s",
          "gap-m",
          "w-fit",
        )}
      >
        <CheckboxGroup
          label="Checkbox group"
          helpText="help me"
          options={[
            { name: "q1", label: "Option 1" },
            { name: "q2", label: "Option 2" },
            { name: "q3", label: "Option 3" },
          ]}
        />
      </div>
      <h2 className={sprout.classNames("font-heading-m", "text-default")}>
        Label overflow
      </h2>
      <div
        className={classNames("flex", "flex-col", "border-box", "gap-m")}
        style={{ inlineSize: 200 }}
      >
        <Checkbox
          label="Long label that wraps over to a new row"
          name="overflow"
        />
        <Checkbox label="Longlabelthatwrapsovertoanewrow" name="overflow" />
        <Checkbox
          label="Automatically flag outdated records and queue them for clean-up during the nightly maintenance job"
          name="overflow"
        />
        <Checkbox
          label="Maintain a full audit log of field-level changes so that analysts can reconstruct the exact record state at any point in time"
          name="overflow"
        />
        <Checkbox
          label="/data/warehouse/customers/archived/2025/region/eu-west/segment/high-value/records"
          name="overflow"
        />
        <Checkbox
          label="Enable supercalifragilisticexpialidocious mode for enhanced performance and reliability"
          name="overflow"
          infoIconTooltip="This is some additional info about this checkbox"
        />
      </div>
      <h2 className={sprout.classNames("font-heading-m", "text-default")}>
        Helper text
      </h2>
      <div
        className={classNames("flex", "flex-col", "border-box", "gap-m")}
        style={{ inlineSize: 200 }}
      >
        <Checkbox
          label="Enable dark mode"
          name="helptext"
          helpText="Activates dark mode theme for less eye strain"
        />

        <Checkbox
          label="Enable dark mode"
          name="helptext"
          helpText="Anim cupidatat ex ad voluptate sit occaecat deserunt minim cupidatat ipsum exercitation ex veniam cupidatat. Incididunt culpa dolore duis commodo."
        />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    pseudo: {
      hover: '[data-testid="hover"]',
      focusVisible: '[data-testid="focus"]',
    },
  },
};
