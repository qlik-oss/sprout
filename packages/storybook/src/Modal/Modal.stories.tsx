/* eslint-disable react-hooks/rules-of-hooks */
import { forwardRef, useState } from "react";
import { fn } from "storybook/test";

import { useContainer } from "@qlik/sprout-css-hooks";
import {
  Button,
  type ButtonProps,
  Checkbox,
  Divider,
  Modal,
  type ModalProps,
  RadioGroup,
  Select,
  Switch,
  TextField,
  Textarea,
  classNames,
} from "@qlik/sprout-css-react";
import { UnionOutlineIcon } from "@qlik/sprout-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { CommonModalArgTypes, ModalArgTypes } from "./Modal.argTypes";

type Story = StoryObj<typeof Modal>;

// this selector give us the close button in the modal + it's tooltip
const ignoreSelectors = ['[role="tooltip"]', 'button[aria-label="Close"]'];

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Components/Modal",
};

export default meta;

const parameters = {
  chromatic: {
    disableSnapshot: true,
  },
};

const ModalStory = forwardRef<HTMLDivElement, ModalProps>(
  ({ onClose, ...props }, ref) => {
    const { children, headerTitle, ...rest } = props;

    return (
      <Modal
        ref={ref}
        headerTitle={headerTitle}
        onClose={() => {
          if (onClose) {
            onClose();
          }
        }}
        {...rest}
      >
        {children || "(Default story child)"}
      </Modal>
    );
  },
);

ModalStory.displayName = "Modal";

function GlobalContent() {
  return (
    <form>
      <div
        className={classNames(
          "flex",
          "flex-col",
          "border-box",
          "gap-m",
          "py-xl",
        )}
      >
        <TextField label="Name" id="name" />
        <div className={classNames("flex", "border-box", "py-m")}>
          <Switch label="I agree to the terms and conditions" />
        </div>
        <div className={classNames("flex", "border-box", "py-m")}>
          <Switch label="I agree to the terms and conditions" />
        </div>
        <div className={classNames("flex", "border-box", "py-m")}>
          <Switch label="I agree to the terms and conditions" />
        </div>
        <Textarea label="Comment" id="comment" />
        <RadioGroup
          label="Did you cook it?"
          name="radio-group"
          options={[
            { label: "I cooked it", value: "1" },
            { label: "I didn't cooked it", value: "2" },
            { label: "No cooking", value: "3" },
          ]}
        />
        <Textarea label="Comment" id="comment" />
        <RadioGroup
          label="Did you cook it?"
          name="radio-group"
          options={[
            { label: "I cooked it", value: "1" },
            { label: "I didn't cooked it", value: "2" },
            { label: "No cooking", value: "3" },
          ]}
        />
        <Textarea label="Comment" id="comment" />
        <RadioGroup
          label="Did you cook it?"
          name="radio-group"
          options={[
            { label: "I cooked it", value: "1" },
            { label: "I didn't cooked it", value: "2" },
            { label: "No cooking", value: "3" },
          ]}
        />
        <Select.Select
          label="Feedback"
          placeholder="Select an option"
          defaultValue="100"
        >
          <Select.Option value="1">Please add more details</Select.Option>
          <Select.Option value="2">
            I want to hire people like you
          </Select.Option>
          <Select.Option value="1">Please add more details</Select.Option>
          <Select.Option value="2">
            I want to hire people like you
          </Select.Option>
          <Select.Option value="1">Please add more details</Select.Option>
          <Select.Option value="2">
            I want to hire people like you
          </Select.Option>
          <Select.Option value="1">Please add more details</Select.Option>
          <Select.Option value="2">
            I want to hire people like you
          </Select.Option>
          <Select.Option value="1">Please add more details</Select.Option>
          <Select.Option value="2">
            I want to hire people like you
          </Select.Option>
          <Select.Option value="1">Please add more details</Select.Option>
          <Select.Option value="2">
            I want to hire people like you
          </Select.Option>
          <Select.Option value="1">Please add more details</Select.Option>
          <Select.Option value="2">
            I want to hire people like you
          </Select.Option>
          <Select.Option value="1">Please add more details</Select.Option>
          <Select.Option value="2">
            I want to hire people like you
          </Select.Option>
          <Select.Option value="1">Please add more details</Select.Option>
          <Select.Option value="100">My best value</Select.Option>
          <Select.Option value="2">
            I want to hire people like you
          </Select.Option>
          <Select.Option value="1">Please add more details</Select.Option>
          <Select.Option value="2">
            I want to hire people like you
          </Select.Option>
        </Select.Select>
        <Textarea label="Comment" id="comment" />
      </div>
    </form>
  );
}

function JustifiedButton({
  container,
  ...rest
}: ButtonProps & { container: ReturnType<typeof useContainer> }) {
  return (
    <Button
      {...rest}
      justified={container.get<boolean>({ xxs: true, xs: true, s: false })}
    />
  );
}

export const Playground: Story = {
  render: ({ onClose, ...props }) => {
    const [visible, setVisible] = useState(true);
    return (
      <>
        <Button
          onClick={() => {
            setVisible(true);
          }}
          label="Open Modal"
        />
        <Modal
          data-testid="default-modal"
          {...props}
          onClose={() => {
            onClose?.();
            setVisible(false);
          }}
        >
          <Modal.Content padding overflowY="auto" divider="none">
            <GlobalContent />
          </Modal.Content>
        </Modal>
      </>
    );
  },
  args: {
    headerTitle: "Default story title",
    onClose: fn(),
    defaultVisible: true,
    variant: "dialog",
    height: "s",
  },
  argTypes: ModalArgTypes,
  parameters,
};

export const WithFooterActions: Story = {
  render: (props: ModalProps) => {
    const container = useContainer({ boxSizing: "border-box" });
    return (
      <ModalStory
        ref={container.ref}
        {...props}
        footerActions={
          <>
            <JustifiedButton
              variant="secondary"
              label="Secondary action"
              onClick={() => {}}
              container={container}
            />
            <JustifiedButton
              variant="primary"
              label="Primary action"
              onClick={() => {}}
              container={container}
            />
          </>
        }
      >
        <p className={classNames("font-body-s", "text-default")}>
          A modal with title, a text content, an icon and both available actions
          (primary and secondary).
        </p>
      </ModalStory>
    );
  },
  args: {
    headerTitle: "Modal with footer actions",
    visible: true,
  },
  argTypes: ModalArgTypes,
  parameters,
};

export const FullWithMarginWithFooterActions: Story = {
  render: (props: ModalProps) => {
    const container = useContainer({ boxSizing: "border-box" });
    return (
      <ModalStory
        ref={container.ref}
        {...props}
        width="full-with-margin"
        footerActions={
          <>
            <JustifiedButton
              variant="secondary"
              label="Secondary action"
              onClick={() => {}}
              container={container}
            />
            <JustifiedButton
              variant="primary"
              label="Primary action"
              onClick={() => {}}
              container={container}
            />
          </>
        }
      >
        <p className={classNames("font-body-s", "text-default")}>
          A &lsquo;full-with-margin&rsquo; modal with title, a text content, an
          icon and both available actions (primary and secondary).
        </p>
      </ModalStory>
    );
  },
  args: {
    headerTitle: "Modal with footer actions",
    visible: true,
  },
  argTypes: ModalArgTypes,
  parameters: {
    chromatic: {
      ignoreSelectors,
    },
  },
};

export const WithCheckbox: Story = {
  render: (props: ModalProps) => {
    const container = useContainer({ boxSizing: "border-box" });
    return (
      <ModalStory
        ref={container.ref}
        {...props}
        footerLeft={
          <Checkbox
            name="checkbox-name"
            label="Checkbox label"
            onChange={fn()}
          />
        }
        footerActions={
          <JustifiedButton
            variant="primary"
            label="Create"
            onClick={fn()}
            container={container}
          />
        }
      >
        <TextField label="Username" id="username" />
        <TextField label="Password" id="password" />
      </ModalStory>
    );
  },
  args: {
    visible: true,
    headerTitle: "Create new user",
  },
  argTypes: ModalArgTypes,
  parameters: { ...parameters },
};

export const WithLeftButton: Story = {
  render: (props: ModalProps) => {
    const container = useContainer({ boxSizing: "border-box" });
    return (
      <ModalStory
        ref={container.ref}
        {...props}
        footerLeft={<Button label="Manage users" onClick={fn()} />}
        footerActions={
          <JustifiedButton
            variant="primary"
            label="Create"
            onClick={fn()}
            container={container}
          />
        }
      >
        <TextField label="Username" id="username" />
        <TextField label="Password" id="password" />
      </ModalStory>
    );
  },
  args: {
    headerTitle: "Create new user",
    visible: true,
  },
  argTypes: ModalArgTypes,
  parameters: { ...parameters },
};

function CompositionComponents({
  width,
}: {
  width: "xs" | "s" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl";
}) {
  const container = useContainer({ boxSizing: "border-box" });
  return (
    <div
      className={classNames("flex", "gap-xl", "border-default", `w_${width}`)}
      ref={container.ref}
    >
      <Modal.Header>ModalHeader</Modal.Header>
      <Divider />
      <Modal.Header infoIconTooltip="This is an info tooltip">
        ModalHeader with infoIconTooltip
      </Modal.Header>
      <Divider />
      <Modal.Header icon={<UnionOutlineIcon />}>
        ModalHeader with icon
      </Modal.Header>
      <Divider />
      <Modal.Header
        icon={<UnionOutlineIcon />}
        infoIconTooltip="This is an info tooltip"
      >
        ModalHeader with icon and infoIconTooltip
      </Modal.Header>
      <Divider />
      <Modal.Header labelBack="Back" onClickBack={() => {}}>
        ModalHeader with back navigation
      </Modal.Header>
      <Divider />
      <Modal.Header
        labelBack="Back"
        onClickBack={() => {}}
        infoIconTooltip="This is an info tooltip"
      >
        ModalHeader with back navigation and infoIconTooltip
      </Modal.Header>
      <Divider />
      <Modal.Header preventClose>ModalHeader with preventClose</Modal.Header>
      <Divider />
      <Modal.Header description="Header description">
        ModalHeader with description
      </Modal.Header>
      <Divider />
      <Modal.Header description="Header description" preventClose>
        ModalHeader with description and preventClose
      </Modal.Header>
      <Divider />
      <Modal.Header description={"Headerdescription".repeat(10)}>
        {"ModalHeaderwithoverflowingtext".repeat(10)}
      </Modal.Header>
      <Divider />
      <Modal.Header
        description={
          <p className={classNames("font-label-s", "text-weak")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        }
      >
        ModalHeader Overflow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </Modal.Header>
      <Divider />
      <Modal.Content>
        <div className={classNames("px-xxl")}>Content wrapped</div>
      </Modal.Content>
      <Divider />
      <div
        className={classNames("flex", "w-full")}
        style={{ blockSize: "50px" }}
      >
        <Modal.Content>
          <div className={classNames("px-xxl")}>
            Overflow is detected auto in Y and add scrollbar. It is hidden in X.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </div>
        </Modal.Content>
      </div>
      <Divider />
      <Modal.Content>
        Content wrapped with long text. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam.
      </Modal.Content>
      <Divider />
      <Modal.Actions>
        <JustifiedButton
          variant="primary"
          label="Create"
          container={container}
        />
      </Modal.Actions>
      <Divider />
      <Modal.Actions left={<Checkbox label="Send invite" />}>
        <JustifiedButton
          variant="primary"
          label="Create"
          container={container}
        />
      </Modal.Actions>
      <Divider />
      <Modal.Actions metaLabel="3 licences left">
        <JustifiedButton
          variant="primary"
          label="Create"
          container={container}
        />
      </Modal.Actions>
      <Divider />
      <Modal.Actions left={<Button variant="default" label="Manage users" />}>
        <JustifiedButton
          variant="primary"
          label="Create"
          container={container}
        />
      </Modal.Actions>
      <Divider />
      <Modal.Actions
        left={<Checkbox label="Send invite" />}
        metaLabel="3 licences left"
      >
        <JustifiedButton
          variant="primary"
          label="Primary action"
          container={container}
        />
      </Modal.Actions>
      <Divider />
      <Modal.Actions
        left={<Checkbox label="Send invite" />}
        metaLabel="Only 3 licences left in this workspace"
      >
        <JustifiedButton
          variant="secondary"
          label="Secondary action"
          container={container}
        />
        <JustifiedButton
          variant="primary"
          label="Primary action"
          container={container}
        />
      </Modal.Actions>
    </div>
  );
}

export const VisualTest: Story = {
  name: "Visual Test",
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    return (
      <div className={classNames("flex", "flex-col", "gap-xl", "p-xl")}>
        <div className={classNames("flex", "flex-row", "gap-xl")}>
          <CompositionComponents width="xs" />
          <CompositionComponents width="s" />
        </div>
        <CompositionComponents width="m" />
        <CompositionComponents width="l" />
        <CompositionComponents width="xl" />
        <CompositionComponents width="xxl" />
        <CompositionComponents width="3xl" />
        <CompositionComponents width="4xl" />
      </div>
    );
  },
};

export const ModalInModal = {
  parameters: { ...parameters, controls: { disable: true } },
  render: () => {
    const [open, setOpen] = useState(false);
    const [secondOpen, setSecondOpen] = useState(false);
    const container = useContainer({ boxSizing: "border-box" });
    const container2 = useContainer();
    return (
      <>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          label="Open Modal"
        />
        <Modal
          ref={container.ref}
          headerTitle="Default Modal"
          contentPadding={false}
          visible={open}
          onClose={() => {
            setOpen(false);
          }}
          footerLeft={<Button label="footerLeft" onClick={fn()} />}
          footerActions={
            <JustifiedButton
              variant="primary"
              label="footerActions"
              onClick={fn()}
              container={container}
            />
          }
        >
          <div className={classNames("px-xxl")}>
            <Button
              onClick={() => {
                setSecondOpen(true);
              }}
              label="Open Modal"
            />
          </div>
          <Modal
            ref={container2.ref}
            headerTitle="Default Modal"
            contentPadding={false}
            visible={secondOpen}
            onClose={() => {
              setSecondOpen(false);
            }}
            footerLeft={<Button label="footerLeft" onClick={fn()} />}
            footerActions={
              <JustifiedButton
                variant="primary"
                label="footerActions"
                onClick={fn()}
                container={container2}
              />
            }
          >
            <GlobalContent />
          </Modal>
        </Modal>
      </>
    );
  },
};

export const HeightScenario: StoryObj<Pick<ModalProps, "height">> = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    height: "m",
  },
  argTypes: {
    height: CommonModalArgTypes.height,
  },
  render: ({ height }) => {
    const container = useContainer({ boxSizing: "border-box" });

    return (
      <Modal.Root visible variant="form" ref={container.ref} height={height}>
        <Modal.Header>Test Modal Height</Modal.Header>
        <Modal.Content padding={false} divider="visible">
          <div
            className={classNames(
              "flex",
              "border-box",
              "flex-row",
              "grow-1",
              "h-full",
              "justify-between",
            )}
            data-modal-content
          >
            <div className={classNames("flex", "border-box", "px-xxl")}>
              left panel
            </div>
            <Divider orientation="vertical" />
            <div
              className={classNames(
                "flex",
                "border-box",
                "px-xxl",
                "items-start",
                "justify-around",
                "h-full",
                "overflow-y-scroll",
                "grow-1",
              )}
            >
              <GlobalContent />
            </div>
          </div>
        </Modal.Content>
        <Modal.Actions left={<Button variant="default" label="Manage users" />}>
          <JustifiedButton
            variant="primary"
            label="Create"
            container={container}
          />
        </Modal.Actions>
      </Modal.Root>
    );
  },
};
