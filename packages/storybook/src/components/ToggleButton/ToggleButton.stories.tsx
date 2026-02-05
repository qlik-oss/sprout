/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useState } from "react";
import { fn } from "storybook/test";

import sprout from "@qlik/sprout-css-modules";
import { BookmarkIcon, DeleteIcon, EditIcon } from "@qlik/sprout-icons/react";
import {
  Badge,
  ButtonGroup,
  classNames,
  ToggleButton,
  type ToggleButtonProps,
  ToggleIconButton,
} from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { ToggleButtonArgTypes } from "./ToggleButton.argTypes";

const meta: Meta = {
  title: "Components/ToggleButton",
};
export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Playground: Story = {
  render: (props: ToggleButtonProps) => (
    <div className={sprout.classNames("gap-s")}>
      <ToggleButton {...props} />
    </div>
  ),
  args: {
    label: "Label",
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },

  argTypes: ToggleButtonArgTypes,
};

export const ToggleButtonGroup: Story = {
  render: () => {
    const [toggled, setToggled] = useState("Two");
    return (
      <ButtonGroup>
        {["One", "Two", "Three"].map((label) => (
          <ToggleButton
            key={label}
            label={label}
            toggled={toggled === label}
            onChange={() => {
              setToggled(label);
            }}
          />
        ))}
      </ButtonGroup>
    );
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    control: { disable: true },
  },
};

export const Controlled: Story = {
  render: ({ onChange }: Partial<ToggleButtonProps>) => {
    const [toggled, setToggled] = useState(false);
    const ref = useRef<HTMLButtonElement>(null);

    const handleChange = (e: boolean) => {
      if (onChange) {
        onChange(e);
      }
      setToggled(e);
    };
    return <ToggleButton ref={ref} label="Controlled" toggled={toggled} onChange={handleChange} />;
  },
  args: {
    onChange: fn(),
  },
  parameters: { chromatic: { disableSnapshot: true } },
};

export const ToggleIconButtonPlayground: Story = {
  render: (props: Omit<ToggleButtonProps, "icon">) => (
    <div className={sprout.classNames("gap-s")}>
      <ToggleIconButton icon={<DeleteIcon />} {...props} />
    </div>
  ),
  args: {
    label: "Label",
  },

  argTypes: Playground.argTypes,
  parameters: { chromatic: { disableSnapshot: true } },
};

function H2({ children }: { children: string }) {
  return <h2 className={classNames("flex", "flex-row", "border-box", "font-heading-m", "text-default")}>{children}</h2>;
}

export const VisualTest: Story = {
  render: () => (
    <div className={sprout.classNames("flex", "border-box", "flex-col", "gap-l", "w-s")}>
      <H2>States</H2>
      <div className={sprout.classNames("flex", "border-box", "gap-s", "w-full", "flex-row")}>
        <ToggleButton label="Default" />
        <ToggleButton label="Hover" data-testid="hover" />
        <ToggleButton label="Active" data-testid="active" />
        <ToggleButton label="Focus" data-testid="focused" />
        <ToggleButton label="Toggle" toggled />
        <ToggleButton label="Dropdown" asDropdown />
      </div>
      <div className={sprout.classNames("flex", "border-box", "gap-s", "w-full", "flex-row")}>
        <ToggleButton icon={<DeleteIcon />} label="Default" />
        <ToggleButton icon={<DeleteIcon />} label="Hover" data-testid="hover" />
        <ToggleButton icon={<DeleteIcon />} label="Active" data-testid="active" />
        <ToggleButton icon={<DeleteIcon />} label="Focus" data-testid="focused" />
        <ToggleButton icon={<DeleteIcon />} label="Toggle" toggled />
        <ToggleButton icon={<DeleteIcon />} label="Dropdown" asDropdown />
      </div>
      <div className={sprout.classNames("flex", "border-box", "gap-s", "w-full", "flex-row")}>
        <ToggleIconButton size="small" icon={<DeleteIcon height={undefined} width={undefined} />} label="Default" />
        <ToggleIconButton
          size="small"
          icon={<DeleteIcon height={undefined} width={undefined} />}
          label="Hover"
          data-testid="hover"
        />
        <ToggleIconButton
          size="small"
          icon={<DeleteIcon height={undefined} width={undefined} />}
          label="Active"
          data-testid="active"
        />
        <ToggleIconButton
          size="small"
          icon={<DeleteIcon height={undefined} width={undefined} />}
          label="Focus"
          data-testid="focused"
        />
        <ToggleIconButton
          size="small"
          icon={<DeleteIcon height={undefined} width={undefined} />}
          label="Toggle"
          toggled
        />
        <ToggleIconButton
          size="small"
          icon={<DeleteIcon height={undefined} width={undefined} />}
          label="Dropdown"
          asDropdown
        />
      </div>
      <H2>With Badge</H2>
      <div className={sprout.classNames("flex", "border-box", "gap-s", "w-full", "flex-row")}>
        <ToggleButton label="Default" badge={<Badge text="1" variant="alphanumeric" />} />
        <ToggleButton label="Hover" data-testid="hover" badge={<Badge text="1" variant="alphanumeric" />} />
        <ToggleButton label="Active" data-testid="active" badge={<Badge text="1" variant="alphanumeric" />} />
        <ToggleButton label="Focus" data-testid="focused" badge={<Badge text="1" variant="alphanumeric" />} />
        <ToggleButton label="Toggle" toggled badge={<Badge text="1" variant="alphanumeric" />} />
        <ToggleButton label="Dropdown" asDropdown badge={<Badge text="1" variant="alphanumeric" />} />
      </div>
      <H2>Inside ButtonGroup</H2>
      <ButtonGroup>
        <ToggleButton label="Default" />
        <ToggleButton label="Hover" data-testid="hover" />
        <ToggleButton label="Active" data-testid="active" />
        <ToggleButton label="Focus" data-testid="focused" />
        <ToggleButton label="Toggle" toggled />
        <ToggleButton label="Dropdown" asDropdown />
      </ButtonGroup>
      <H2>ToggleIconButton</H2>
      <ButtonGroup>
        <ToggleIconButton label="Default" icon={<DeleteIcon />} />
        <ToggleIconButton label="Hover" icon={<BookmarkIcon />} data-testid="hover" />
        <ToggleIconButton label="Active" icon={<EditIcon />} data-testid="active" />
        <ToggleIconButton label="Focus" icon={<BookmarkIcon />} data-testid="focused" />
        <ToggleIconButton label="Toggle" icon={<BookmarkIcon />} toggled />
        <ToggleIconButton label="Dropdown" icon={<BookmarkIcon />} toggled asDropdown />
      </ButtonGroup>
      <ButtonGroup>
        <ToggleIconButton label="Default" badge={<Badge text="1" variant="alphanumeric" />} icon={<DeleteIcon />} />
        <ToggleIconButton
          label="Hover"
          badge={<Badge text="1" variant="alphanumeric" />}
          icon={<BookmarkIcon />}
          data-testid="hover"
        />
        <ToggleIconButton
          label="Active"
          badge={<Badge text="1" variant="alphanumeric" />}
          icon={<EditIcon />}
          data-testid="active"
        />
        <ToggleIconButton
          label="Focus"
          badge={<Badge text="1" variant="alphanumeric" />}
          icon={<BookmarkIcon />}
          data-testid="focused"
        />
        <ToggleIconButton
          label="Toggle"
          badge={<Badge text="1" variant="alphanumeric" />}
          icon={<BookmarkIcon />}
          toggled
        />
        <ToggleIconButton
          label="Toggle"
          badge={<Badge text="1" variant="alphanumeric" />}
          icon={<BookmarkIcon />}
          asDropdown
        />
      </ButtonGroup>
    </div>
  ),
  parameters: {
    pseudo: {
      hover: "[data-testid='hover']",
      active: "[data-testid='active']",
      focusVisible: '[data-testid="focused"]',
    },
    control: { disable: true },
  },
};
