import {
  Button,
  ButtonGroup,
  type ButtonGroupProps,
  IconButton,
  Menu,
  Select,
  TextField,
  classNames,
} from "@qlik/sprout-css-react";
import { DeleteIcon } from "@qlik/sprout-icons/react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { DropdownArrow } from "../../icons";
import { OPTIONS_WITH_GROUP } from "../Select/SelectTest";
import { ButtonGroupArgTypes } from "./ButtonGroup.argTypes";

const meta: Meta = {
  title: "Components/ButtonGroup",
};
export default meta;

type Story = StoryObj;

export const Playground: Story = {
  render: (props: ButtonGroupProps) => (
    <ButtonGroup {...props}>
      <Button label="Medium" />
      <Button label="Medium" />
      <Button label="Medium" />
    </ButtonGroup>
  ),
  argTypes: ButtonGroupArgTypes,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

function H2(props: { children: string }) {
  return (
    <h2 className={classNames("flex", "flex-row", "border-box", "font-heading-m", "text-default")}>{props.children}</h2>
  );
}

export const VisualTest: Story = {
  render: () => (
    <div className={classNames("flex", "flex-col", "border-box", "gap-m")}>
      <H2>Default buttons</H2>
      <ButtonGroup>
        <Button label="Default" />
        <Button label="Hover" data-testid="hover" />
        <Button label="Active" data-testid="active" />
        <Button label="Focused" data-testid="focus" />
      </ButtonGroup>
      <H2>Small buttons</H2>
      <ButtonGroup>
        <Button label="Small" size="small" />
        <Button label="Hovered" size="small" data-testid="hover" />
        <Button label="Actived" size="small" data-testid="active" />
        <Button label="Focused" size="small" data-testid="focus" />
      </ButtonGroup>
      <H2>Quiet buttons</H2>
      <ButtonGroup>
        <Button label="Small" variant="quiet" />
        <Button label="Hovered" variant="quiet" data-testid="hover" />
        <Button label="Actived" variant="quiet" data-testid="active" />
        <Button label="Focused" variant="quiet" data-testid="focus" />
      </ButtonGroup>
      <H2>Composition: Affix</H2>
      <div className={classNames("flex", "flex-row", "border-box", "w-s")}>
        <ButtonGroup fullWidth>
          <Button label="Default" />
          <TextField placeholder="Default" />
          <IconButton label="Default" icon={<DeleteIcon />} />
        </ButtonGroup>
      </div>
      <div className={classNames("flex", "flex-row", "border-box", "w-s")}>
        <ButtonGroup fullWidth>
          <Button label="Default" />
          <Select.Select placeholder="Default">{OPTIONS_WITH_GROUP}</Select.Select>
          <IconButton label="Default" icon={<DeleteIcon />} />
        </ButtonGroup>
      </div>
      <div className={classNames("flex", "flex-row", "border-box", "w-s")}>
        <ButtonGroup fullWidth>
          <Button label="Default" />
          <Select.Multi placeholder="colors" aria-label="Color selection">
            {OPTIONS_WITH_GROUP}
          </Select.Multi>

          <IconButton label="Default" icon={<DeleteIcon />} />
        </ButtonGroup>
      </div>
      <H2>Split Button</H2>
      <ButtonGroup>
        <Button variant="default" label="Default" />
        <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
          <IconButton variant="default" label="Default dropdown" icon={<DropdownArrow />} />
        </Menu.Trigger>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="primary" label="Default" />
        <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
          <IconButton variant="primary" label="Default dropdown" icon={<DropdownArrow />} />
        </Menu.Trigger>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary" label="Default" />
        <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
          <IconButton variant="secondary" label="Default dropdown" icon={<DropdownArrow />} />
        </Menu.Trigger>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="destructive" label="Default" />
        <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
          <IconButton variant="destructive" label="Default dropdown" icon={<DropdownArrow />} />
        </Menu.Trigger>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="quiet" label="Default" />
        <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
          <IconButton variant="quiet" label="Default dropdown" icon={<DropdownArrow />} />
        </Menu.Trigger>
      </ButtonGroup>
      <H2>Vertical</H2>
      <ButtonGroup orientation="vertical">
        <Button label="Default" />
        <Button label="Hover" data-testid="hover" />
        <Button label="Active" data-testid="active" />
        <Button label="Focused" data-testid="focus" />
      </ButtonGroup>
    </div>
  ),

  parameters: {
    pseudo: {
      hover: '[data-testid="hover"]',
      active: '[data-testid="active"]',
      focusVisible: '[data-testid="focus"]',
    },
    controls: { disable: true },
  },
};
