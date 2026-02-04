import { Select } from "@qlik/sprout-css-react";

export const OPTIONS_WITH_GROUP = (
  <>
    <Select.OptGroup label="Basic Colors">
      <Select.Option value="red">Red</Select.Option>
      <Select.Option value="orange">Orange</Select.Option>
      <Select.Option value="green" disabled>
        Green
      </Select.Option>
      <Select.Option value="blue">Blue</Select.Option>
      <Select.Option value="yellow">Yellow</Select.Option>
      <Select.Option value="silver">Silver</Select.Option>
      <Select.Option value="maroon">Maroon</Select.Option>
      <Select.Option value="purple">Purple</Select.Option>
      <Select.Option value="lime">Lime</Select.Option>
      <Select.Option value="brown">Brown</Select.Option>
    </Select.OptGroup>
    <Select.Divider />
    <Select.OptGroup label="Cool Colors">
      <Select.Option value="coral">Coral</Select.Option>
      <Select.Option value="cyan">Cyan</Select.Option>
      <Select.Option value="purple">Purple</Select.Option>
    </Select.OptGroup>
  </>
);
