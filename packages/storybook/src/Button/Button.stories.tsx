import type { ReactNode } from "react";
import { fn } from "storybook/test";

import {
  Button,
  ButtonFloating,
  ButtonGroup,
  type ButtonProps,
  IconButton,
  Menu,
  classNames,
} from "@qlik/sprout-css-react";
import AddOutline from "@qlik/sprout-icons/react/AddOutline";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { ButtonArgTypes, ButtonIconArgTypes, SIZES } from "./Button.argTypes";

type Story = StoryObj<ButtonProps>;

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  parameters: {},
};
export default meta;

const onClick = fn();

export const Playground: Story = {
  render: (props: ButtonProps) => (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "border-box",
        "p-s",
        "border-default",
      )}
      data-testid="wrapper"
      style={{ inlineSize: "300px" }}
    >
      <Button {...props} onClick={onClick} />
    </div>
  ),
  args: {
    label: "Label",
  },
  argTypes: {
    ...ButtonIconArgTypes,
    ...ButtonArgTypes,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

function Cell({ children, width }: { children: ReactNode; width?: string }) {
  return (
    <div
      className={classNames(
        "flex-noreset",
        "content-center",
        "flex-row",
        "border-box",
        "font-body-s",
        "text-default",
      )}
      style={{ inlineSize: width || "100px" }}
    >
      {children}
    </div>
  );
}

const defaultBtnProps: {
  icon: ButtonProps["icon"];
  onClick: ButtonProps["onClick"];
} = {
  icon: <AddOutline height={undefined} />,
  onClick,
};

function Row({ rowTitle, ...props }: { rowTitle: string } & ButtonProps) {
  return (
    <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
      <Cell>{rowTitle}</Cell>
      <Cell>
        <Button variant="primary" {...props} />
      </Cell>
      <Cell>
        <Button variant="primary" destructive {...props} />
      </Cell>
      <Cell>
        <Button variant="default" {...props} />
      </Cell>
      <Cell>
        <Button variant="quiet" {...props} />
      </Cell>
      <Cell>
        <Button variant="secondary" {...props} />
      </Cell>
      <Cell>
        <Button variant="secondary" destructive {...props} />
      </Cell>
    </div>
  );
}

export const DeprecatedDestructiveVariant: Story = {
  name: "Deprecated destructive variant",
  render: (props: ButtonProps) => (
    <div className={classNames("flex", "flex-col", "gap-m", "text-default")}>
      <h1 className={classNames("font-heading-m")}>
        Deprecated destructive variant
      </h1>
      <p className={classNames("font-body-s")}>
        The props `variant="destructive"` must be replaced by `variant="primary"
        destructive` props.
      </p>
      <div className={classNames("flex", "flex-row", "gap-m")}>
        <Button variant="destructive" {...props} onClick={onClick} />
        <Button
          variant="destructive"
          {...props}
          onClick={onClick}
          data-testid="hovered"
        />
        <Button
          variant="destructive"
          {...props}
          onClick={onClick}
          data-testid="actived"
        />
        <Button
          variant="destructive"
          {...props}
          onClick={onClick}
          data-testid="focused"
        />
      </div>
      <div className={classNames("flex", "flex-row", "gap-m")}>
        <Button
          variant="destructive"
          size="small"
          {...props}
          onClick={onClick}
        />
        <Button
          variant="destructive"
          size="small"
          {...props}
          onClick={onClick}
          data-testid="hovered"
        />
        <Button
          variant="destructive"
          size="small"
          {...props}
          onClick={onClick}
          data-testid="actived"
        />
        <Button
          variant="destructive"
          size="small"
          {...props}
          onClick={onClick}
          data-testid="focused"
        />
      </div>
    </div>
  ),
  args: {
    label: "Label",
  },
  argTypes: {
    ...ButtonIconArgTypes,
    ...ButtonArgTypes,
  },
  parameters: {
    pseudo: {
      hover: '[data-testid="hovered"]',
      active: '[data-testid="actived"]',
      focusVisible: '[data-testid="focused"]',
    },
  },
};

export const VisualTest: Story = {
  render: (props: ButtonProps) => {
    const newProps = { ...props, ...defaultBtnProps } as ButtonProps;
    return (
      <div
        className={classNames("flex", "flex-col", "border-box", "gap-m")}
        style={{ blockSize: 200 }}
      >
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <Cell>state/variant</Cell>
          <Cell>primary</Cell>
          <Cell>destructive</Cell>
          <Cell>default</Cell>
          <Cell>quiet</Cell>
          <Cell>secondary</Cell>
          <Cell>destructive</Cell>
        </div>
        <Row rowTitle="Default" {...newProps} />
        <Row rowTitle="Hover" {...newProps} data-testid="hovered" />
        <Row rowTitle="Active" {...newProps} data-testid="actived" />
        <Row rowTitle="Focused" {...newProps} data-testid="focused" />
        <Row rowTitle="Disabled" {...newProps} disabled />
        <Row rowTitle="Loading" {...newProps} loading />
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <Cell>Floating</Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="primary" {...newProps} />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="primary" destructive {...newProps} />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="default" {...newProps} />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="quiet" {...newProps} />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="secondary" {...newProps} />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="secondary" destructive {...newProps} />
            </ButtonFloating>
          </Cell>
        </div>
        <Row rowTitle="asDropdown" {...newProps} asDropdown />
        <Row
          rowTitle="badge"
          {...newProps}
          badge={{ text: "1", variant: "alphanumeric" }}
        />
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <Cell>Loading +</Cell>
          <div
            className={classNames("flex", "flex-row", "border-box")}
            style={{ inlineSize: "300px" }}
          >
            <Button
              variant="default"
              {...newProps}
              justified
              asDropdown
              badge={{ text: "1", variant: "alphanumeric" }}
              loading
            />
          </div>
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <Cell>Justified</Cell>
          <div
            className={classNames("flex", "flex-row", "border-box")}
            style={{ inlineSize: "300px" }}
          >
            <Button variant="default" {...newProps} justified />
          </div>
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <Cell>Overflow</Cell>
          <Cell width="300px">
            <Button
              variant="default"
              {...newProps}
              label="Label overflow dolor sit amet consectetur adipiscing"
              asDropdown
            />
          </Cell>
          <Cell width="300">
            <Button
              label="Filter"
              badge={{ text: "hello overflow world", variant: "alphanumeric" }}
            />
          </Cell>
        </div>
        <Row rowTitle="Small" {...newProps} size="small" />
        <Row
          rowTitle="Hover"
          {...newProps}
          size="small"
          data-testid="hovered"
        />
        <Row
          rowTitle="Active"
          {...newProps}
          size="small"
          data-testid="actived"
        />
        <Row
          rowTitle="Focused"
          {...newProps}
          size="small"
          data-testid="focused"
        />
        <Row rowTitle="Disabled" {...newProps} size="small" disabled />
        <Row rowTitle="Loading" {...newProps} size="small" loading />
        <Row rowTitle="asDropdown" {...newProps} size="small" asDropdown />
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <Cell>Floating</Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="primary" {...newProps} size="small" />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="destructive" {...newProps} size="small" />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="default" {...newProps} size="small" />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="quiet" {...newProps} size="small" />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="secondary" {...newProps} size="small" />
            </ButtonFloating>
          </Cell>
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <Cell>Justified</Cell>
          <div
            className={classNames("flex", "flex-row", "border-box", "gap-m")}
            style={{ inlineSize: "300px" }}
          >
            <Button variant="default" {...newProps} size="small" justified />
          </div>
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <Cell>Overflow</Cell>
          <div
            className={classNames("flex", "flex-row", "border-box")}
            style={{ inlineSize: "300px" }}
          >
            <Button
              variant="default"
              {...newProps}
              label="Label overflow dolor sit amet consectetur adipiscing"
              size="small"
              asDropdown
            />
          </div>
        </div>
      </div>
    );
  },
  args: {
    size: "default",
    label: "Label",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: SIZES,
    },
    label: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    controls: {
      disable: true,
    },
    pseudo: {
      hover: '[data-testid="hovered"]',
      active: '[data-testid="actived"]',
      focusVisible: '[data-testid="focused"]',
    },
  },
};

export const IconPlayground: StoryObj = {
  render: (props) => (
    <div
      className={classNames("flex", "flex-row", "border-box", "p-xs")}
      data-testid="wrapper"
      style={{ inlineSize: "300px" }}
    >
      <IconButton
        icon={<AddOutline height={undefined} />}
        {...props}
        onClick={onClick}
      />
    </div>
  ),
  args: {
    label: "Label",
    variant: "default",
  },
  argTypes: {
    ...ButtonIconArgTypes,
    ...ButtonArgTypes,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

const defaultIconProps = {
  icon: <AddOutline height={undefined} />,
  onClick,
  label: "Label",
};

function IconColumn({ variant }: Pick<ButtonProps, "variant">) {
  return (
    <div className={classNames("flex", "flex-col", "border-box", "gap-m")}>
      <IconButton {...defaultIconProps} variant={variant} />
      <IconButton {...defaultIconProps} variant={variant} data-testid="hover" />
      <IconButton
        {...defaultIconProps}
        variant={variant}
        data-testid="active"
      />
      <IconButton {...defaultIconProps} variant={variant} data-testid="focus" />
      <IconButton {...defaultIconProps} variant={variant} disabled />
      <IconButton {...defaultIconProps} variant={variant} loading />
      <ButtonFloating>
        <IconButton {...defaultIconProps} variant={variant} />
      </ButtonFloating>
      <IconButton {...defaultIconProps} variant={variant} size="small" />
      <IconButton
        {...defaultIconProps}
        variant={variant}
        size="small"
        data-testid="hover"
      />
      <IconButton
        {...defaultIconProps}
        variant={variant}
        size="small"
        data-testid="active"
      />
      <IconButton
        {...defaultIconProps}
        variant={variant}
        size="small"
        data-testid="focus"
      />
      <IconButton
        {...defaultIconProps}
        variant={variant}
        size="small"
        disabled
      />
      <IconButton
        {...defaultIconProps}
        variant={variant}
        size="small"
        loading
      />
      <ButtonFloating>
        <IconButton {...defaultIconProps} variant={variant} size="small" />
      </ButtonFloating>
      <IconButton
        {...defaultIconProps}
        variant={variant}
        size="small"
        badge={{ text: "1", variant: "alphanumeric" }}
      />
    </div>
  );
}

export const SplitButton: Story = {
  name: "SplitButton",
  render: (props: ButtonProps) => (
    <ButtonGroup>
      <Button {...props} />
      <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
        <IconButton
          variant={props.variant}
          aria-label="Select your stuff"
          icon={<DropdownArrow />}
        />
      </Menu.Trigger>
    </ButtonGroup>
  ),
  args: {
    label: "Label",
    variant: "primary",
  },
  argTypes: ButtonArgTypes,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const VisualTestIcon: Story = {
  render: () => (
    <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
      <IconColumn variant="primary" />
      <IconColumn variant="destructive" />
      <IconColumn variant="default" />
      <IconColumn variant="quiet" />
      <IconColumn variant="secondary" />
      <div className={classNames("flex", "flex-col", "border-box", "gap-m")}>
        <Cell>Justified</Cell>
        <div
          className={classNames(
            "flex",
            "flex-col",
            "border-box",
            "content-start",
            "gap-m",
          )}
          style={{ inlineSize: "300px" }}
        >
          <IconButton variant="default" {...defaultIconProps} justified />
          <IconButton
            variant="default"
            {...defaultIconProps}
            size="small"
            justified
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: {
      disable: true,
    },
    pseudo: {
      hover: '[data-testid="hover"]',
      active: '[data-testid="active"]',
      focusVisible: '[data-testid="focus"]',
    },
  },
};
