import { Stepper, classNames } from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

type Story = StoryObj<typeof Stepper.Container>;

export default {
  title: "Components/Stepper",
  component: Stepper.Container,
} as Meta;

const LOREM = (
  <div className={classNames("font-label-s", "text-default", "max-w-xs")}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.
  </div>
);

export const Playground: Story = {
  render: ({ orientation, ...args }) => (
    <div
      className={classNames("flex", "flex-row", "border-box")}
      style={{
        inlineSize: orientation === "vertical" ? "fit-content" : "600px",
        blockSize: orientation === "horizontal" ? "fit-content" : "300px",
      }}
    >
      <Stepper.Container {...args} orientation={orientation}>
        <Stepper.Step text="First" onClick={() => {}}>
          foo
        </Stepper.Step>
        <Stepper.Step text="Second" />
        <Stepper.Step text="Third" />
        <Stepper.Step text="Last" />
      </Stepper.Container>
    </div>
  ),
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    orientation: "horizontal",
    currentStepIndex: 1,
    currentStepError: false,
  },
  argTypes: {
    orientation: {
      control: {
        type: "select",
      },
      options: ["horizontal", "vertical"],
    },
    currentStepIndex: {
      control: {
        type: "number",
      },
    },
    currentStepError: {
      control: {
        type: "boolean",
      },
    },
  },
};

export function VisualTest() {
  return (
    <div className={classNames("flex", "flex-col", "border-box", "p-xl", "gap-xxl")}>
      <h2 className={classNames("font-heading-m", "text-default")}>Horizontal stretch</h2>

      <div
        className={classNames("flex", "flex-row", "border-box")}
        style={{ inlineSize: "600px", blockSize: "fit-content" }}
      >
        <Stepper.Container currentStepIndex={1} orientation="horizontal">
          <Stepper.Step text="First" onClick={() => {}} />
          <Stepper.Step text="Second" />
          <Stepper.Step text="Third" state="progress" />
          <Stepper.Step text="Fourth" />
          <Stepper.Step text="Last" />
        </Stepper.Container>
      </div>

      <h2 className={classNames("font-heading-m", "text-default")}>Horizontal fit</h2>
      <div className={classNames("flex", "flex-row", "border-box", "w-fit", "h-fit")}>
        <Stepper.Container currentStepIndex={1} orientation="horizontal" currentStepError>
          <Stepper.Step text="First" onClick={() => {}} />
          <Stepper.Step text="Second" />
          <Stepper.Step text="Third" />
          <Stepper.Step text="Last" />
        </Stepper.Container>
      </div>
      <h2 className={classNames("font-heading-m", "text-default")}>Horizontal overflow</h2>
      <div className={classNames("flex", "flex-row", "border-box", "h-fit")} style={{ inlineSize: "300px" }}>
        <Stepper.Container currentStepIndex={1} orientation="horizontal" currentStepError>
          <Stepper.Step text="First" onClick={() => {}} />
          <Stepper.Step text="Second" />
          <Stepper.Step text="Third" />
          <Stepper.Step text="Last" />
        </Stepper.Container>
      </div>
      <h2 className={classNames("font-heading-m", "text-default")}>Horizontal step interactive states</h2>
      <div className={classNames("flex", "flex-col", "border-box", "h-fit")} style={{ inlineSize: "800px" }}>
        <Stepper.Container orientation="horizontal">
          <Stepper.Step semantic="active" text="Active State" onClick={() => {}} />
          <Stepper.Step semantic="active" text="Active State Hover" data-testid="hover" onClick={() => {}} />
          <Stepper.Step semantic="active" text="Active State Active" data-testid="active" onClick={() => {}} />
          <Stepper.Step semantic="active" text="Active State Focused" data-testid="focus" onClick={() => {}} />
        </Stepper.Container>
        <Stepper.Container orientation="horizontal">
          <Stepper.Step semantic="completed" text="Completed State" onClick={() => {}} />
          <Stepper.Step semantic="completed" text="Completed State Hover" data-testid="hover" onClick={() => {}} />
          <Stepper.Step semantic="completed" text="Completed state Active" data-testid="active" onClick={() => {}} />
          <Stepper.Step semantic="completed" text="Completed State Focused" data-testid="focus" onClick={() => {}} />
        </Stepper.Container>
        <Stepper.Container orientation="horizontal">
          <Stepper.Step semantic="error" text="Error State" onClick={() => {}} />
          <Stepper.Step semantic="error" text="Error State Hover" data-testid="hover" onClick={() => {}} />
          <Stepper.Step semantic="error" text="Error State Active" data-testid="active" onClick={() => {}} />
          <Stepper.Step semantic="error" text="Error State Focused" data-testid="focus" onClick={() => {}} />
        </Stepper.Container>
        <Stepper.Container orientation="horizontal">
          <Stepper.Step semantic="inactive" text="Inactive State" onClick={() => {}} />
          <Stepper.Step semantic="inactive" text="Inactive State Hover" data-testid="hover" onClick={() => {}} />
          <Stepper.Step semantic="inactive" text="Inactive State Active" data-testid="active" onClick={() => {}} />
          <Stepper.Step semantic="inactive" text="Inactive State Focused" data-testid="focus" onClick={() => {}} />
        </Stepper.Container>
        <Stepper.Container orientation="horizontal">
          <Stepper.Step text="progress" state="progress" />
        </Stepper.Container>
      </div>
      <h2 className={classNames("font-heading-m", "text-default")}>Vertical</h2>

      <div className={classNames("flex", "flex-row", "border-box", "gap-xxl")}>
        <Stepper.Container currentStepIndex={1} orientation="vertical">
          <Stepper.Step text="First" onClick={() => {}}>
            {LOREM}
          </Stepper.Step>
          <Stepper.Step text="Second" />
          <Stepper.Step text="Third" />
          <Stepper.Step text="Last" state="progress">
            {LOREM}
          </Stepper.Step>
        </Stepper.Container>
        <Stepper.Container orientation="vertical" currentStepIndex={1} currentStepError>
          <Stepper.Step text="First" onClick={() => {}}>
            {LOREM}
          </Stepper.Step>
          <Stepper.Step text="Second" />
          <Stepper.Step text="Third" />
          <Stepper.Step text="Last">{LOREM}</Stepper.Step>
        </Stepper.Container>
        <Stepper.Container orientation="vertical" stateLess>
          <Stepper.Step number="1" semantic="completed" text="stateLess container" onClick={() => {}}>
            {LOREM}
          </Stepper.Step>
          <Stepper.Step number="2" text="Second" semantic="active" />
          <Stepper.Step number="3" text="Third" semantic="error" />
          <Stepper.Step number="4" text="Last no children" semantic="inactive" isLast />
        </Stepper.Container>
      </div>
    </div>
  );
}
VisualTest.parameters = {
  pseudo: {
    hover: '[data-testid="hover"] ',
    active: '[data-testid="active"]',
    focusVisible: '[data-testid="focus"]',
  },
};
