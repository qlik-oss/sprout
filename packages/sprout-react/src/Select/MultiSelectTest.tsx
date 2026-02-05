import { useEffect, useState } from "react";

import { Select } from ".";
import { Modal } from "../Modal";
import { classNames } from "../classNames";
import { MultiSelect, type MultiSelectProps } from "./MultiSelect";
import { OPTIONS_WITH_GROUP } from "./SelectTest";

const children = (
  <>
    {OPTIONS_WITH_GROUP}
    <Select.Divider />
    <Select.OptGroup label="Deprecated Colors">
      <Select.Option value="chartreuse">
        <Select.OptionStyled description="nice color btw" label="Chartreuse" />
      </Select.Option>
      <Select.Option value="cornsilk">Cornsilk</Select.Option>
      <Select.Option value="pink">Gainsboro</Select.Option>
      <Select.Option value="sage">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
        pariatur?
      </Select.Option>
    </Select.OptGroup>
  </>
);

export function MultiSelectTest(props?: Partial<MultiSelectProps>) {
  return (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "border-box",
        "p-l",
        "gap-xl",
        "items-center",
      )}
    >
      <MultiSelect {...props} label="color" placeholder="Please select colors">
        <Select.Option value="">--Please choose colors--</Select.Option>
        {children}
      </MultiSelect>
    </div>
  );
}

export function WithoutNoValueOption(props?: Partial<MultiSelectProps>) {
  return (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "border-box",
        "p-l",
        "gap-xl",
        "items-center",
      )}
    >
      <MultiSelect {...props} label="color" placeholder="Please select colors">
        {children}
      </MultiSelect>
    </div>
  );
}

export function WithCustomDataTestId() {
  return (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "border-box",
        "p-l",
        "gap-xl",
        "items-center",
      )}
    >
      <MultiSelect
        label="color"
        placeholder="Please select colors"
        data-testid="my_multiselect"
      >
        {children}
      </MultiSelect>
    </div>
  );
}

export function OptionTick() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={classNames("flex", "flex-col", "border-box", "p-l")}
      style={{ inlineSize: "300px" }}
    >
      <MultiSelect
        label="Loading values"
        placeholder="colors"
        defaultValue={["blue", "red"]}
        data-testid="my_multiselect"
      >
        {loading ? <Select.Option>Loading</Select.Option> : OPTIONS_WITH_GROUP}
      </MultiSelect>
    </div>
  );
}

export function MultiSelectWithFilterProps() {
  const [filter, setFilter] = useState("");
  return (
    <div>
      <div data-testid="filter">{filter}</div>
      <MultiSelect
        label="color"
        placeholder="Please select colors"
        data-testid="my_multiselect"
        filterValue={filter}
        onFilterChange={(e) => {
          setFilter(e.target.value);
        }}
      >
        {OPTIONS_WITH_GROUP}
      </MultiSelect>
    </div>
  );
}

export function MultiSelectWithCreateOption() {
  const [options, setOptions] = useState([
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "orange", label: "Orange" },
    { value: "coral", label: "Coral" },
  ]);
  const isExistingOption = (value: string) => {
    return options.some((opt) => opt.value === value || opt.label === value);
  };
  return (
    <div lang="en">
      <Select.Multi
        label="Creatable MultiSelect"
        onChange={(e) => {
          const newValue = e.target.value;
          if (!newValue) return;
          if (!isExistingOption(newValue)) {
            setOptions((opts) => [
              ...opts,
              { value: newValue, label: newValue },
            ]);
          }
        }}
        placeholder="Create or select colors"
      >
        {options.map((opt) => (
          <Select.Option key={opt.value} value={opt.value}>
            {opt.label}
          </Select.Option>
        ))}
        <Select.OptionCreate
          data-testid="create-option"
          isValid={(value: string) => {
            return value !== "not-existing" && !isExistingOption(value);
          }}
        />
      </Select.Multi>
    </div>
  );
}

export function MultiSelectInModal() {
  return (
    <Modal headerTitle="MultiSelect in Modal" defaultVisible>
      <form>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Select.Select
            label="Feedback"
            placeholder="Select an option"
            defaultValue="2"
            data-testid="select"
          >
            <Select.Option value="1">Please add more details</Select.Option>
            <Select.Option value="2">
              I want to hire people like you
            </Select.Option>
            <Select.Option value="3">Please add more details</Select.Option>
            <Select.Option value="4" data-testid="myoption">
              I want to hire people like you
            </Select.Option>
          </Select.Select>

          <MultiSelectTest data-testid="multiselect" />
        </div>
      </form>
    </Modal>
  );
}
