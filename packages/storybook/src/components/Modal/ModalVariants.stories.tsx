/* eslint-disable react-hooks/rules-of-hooks */
import { useContainer } from "@qlik/sprout-css-hooks";
import {
  Button,
  Divider,
  Grid,
  Modal,
  Radio,
  RadioGroup,
  Select,
  Stepper,
  Switch,
  TextField,
  Textarea,
  classNames,
} from "@qlik/sprout-css-react";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Modal>;

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Components/Modal/Variants",
};

export default meta;

function StorybookCodeHint() {
  return (
    <p className={classNames("font-label-s", "text-weak")}>
      For implementation details, check the <strong>Code</strong> tab below.
    </p>
  );
}

export const Dialog: Story = {
  render: () => {
    const container = useContainer({ boxSizing: "border-box" });

    return (
      <Modal.Root visible variant="dialog" ref={container.ref}>
        <Modal.Header>Dialog Variant</Modal.Header>
        <div className={classNames("px-xxl")}>
          <p className={classNames("text-default", "font-body-s")}>
            Ex dolor velit incididunt tempor. Mollit nostrud reprehenderit id
            exercitation quis amet occaecat deserunt aliquip ipsum amet esse.
            Fugiat laboris culpa et amet aliquip mollit aliquip est cillum
            aliquip cupidatat mollit. Commodo sunt fugiat cillum occaecat
            exercitation voluptate eu reprehenderit ex non ad. Aute elit nulla
            excepteur amet exercitation consequat eu culpa velit exercitation
            est ex est.
          </p>
          <StorybookCodeHint />
        </div>

        <Modal.Actions>
          <Button
            variant="primary"
            label="Action"
            justified={container.get<boolean>({ xxs: true, s: false })}
          />
        </Modal.Actions>
      </Modal.Root>
    );
  },
};

export const Form: Story = {
  render: () => {
    const container = useContainer({ boxSizing: "border-box" });

    return (
      <Modal.Root visible variant="form" ref={container.ref}>
        <Modal.Header>Form Variant</Modal.Header>
        <Divider />
        <div className={classNames("px-xxl", "overflow-y-auto")}>
          <form
            className={classNames(
              "flex",
              "flex-col",
              "border-box",
              "gap-xxl",
              "py-xl",
            )}
          >
            <TextField
              label="Full name"
              id="full-name"
              name="fullName"
              placeholder="Alex Doe"
              required
            />

            <TextField
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="alex.doe@example.com"
              required
            />

            <TextField
              label="Company"
              id="company"
              name="company"
              placeholder="Acme Corp"
            />

            <Select.Select
              label="Topic"
              placeholder="Choose a topic"
              defaultValue="product-feedback"
              name="topic"
            >
              <Select.Option value="product-feedback">
                Product feedback
              </Select.Option>
              <Select.Option value="bug-report">Bug report</Select.Option>
              <Select.Option value="feature-request">
                Feature request
              </Select.Option>
              <Select.Option value="billing">
                Billing &amp; subscription
              </Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select.Select>

            <RadioGroup label="Priority" name="priority">
              <Radio label="Low" value="low" name="priority" />
              <Radio label="Medium" value="medium" name="priority" />
              <Radio label="High" value="high" name="priority" />
            </RadioGroup>

            <Textarea
              label="Describe your feedback"
              id="description"
              name="description"
              placeholder="Tell us what’s going on, what you expected, and any steps to reproduce."
              rows={4}
              required
            />

            <div className={classNames("flex", "border-box", "py-m")}>
              <Switch
                label="Send me updates about this request"
                name="subscribe"
              />
            </div>
          </form>
          <StorybookCodeHint />
        </div>
        <Divider />
        <Modal.Actions>
          <Button
            variant="primary"
            label="Submit"
            justified={container.get<boolean>({ xxs: true, s: false })}
          />
        </Modal.Actions>
      </Modal.Root>
    );
  },
};

export const FormWide: Story = {
  render: () => {
    const container = useContainer({ boxSizing: "border-box" });

    return (
      <Modal.Root visible variant="form-wide" ref={container.ref}>
        <Modal.Header>Form (wide) Variant</Modal.Header>
        <Divider />
        <div className={classNames("px-xxl", "overflow-y-auto")}>
          <form
            className={classNames(
              "flex",
              "flex-col",
              "border-box",
              "gap-xxl",
              "py-xl",
            )}
          >
            <TextField
              label="Full name"
              id="full-name"
              name="fullName"
              placeholder="Alex Doe"
              required
            />

            <TextField
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="alex.doe@example.com"
              required
            />

            <TextField
              label="Company"
              id="company"
              name="company"
              placeholder="Acme Corp"
            />

            <Select.Select
              label="Topic"
              placeholder="Choose a topic"
              defaultValue="product-feedback"
              name="topic"
            >
              <Select.Option value="product-feedback">
                Product feedback
              </Select.Option>
              <Select.Option value="bug-report">Bug report</Select.Option>
              <Select.Option value="feature-request">
                Feature request
              </Select.Option>
              <Select.Option value="billing">
                Billing &amp; subscription
              </Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select.Select>

            <RadioGroup label="Priority" name="priority">
              <Radio label="Low" value="low" name="priority" />
              <Radio label="Medium" value="medium" name="priority" />
              <Radio label="High" value="high" name="priority" />
            </RadioGroup>

            <Textarea
              label="Describe your feedback"
              id="description"
              name="description"
              placeholder="Tell us what’s going on, what you expected, and any steps to reproduce."
              rows={4}
              required
            />

            <div className={classNames("flex", "border-box", "py-m")}>
              <Switch
                label="Send me updates about this request"
                name="subscribe"
              />
            </div>
          </form>
          <StorybookCodeHint />
        </div>
        <Divider />
        <Modal.Actions>
          <Button
            variant="primary"
            label="Submit"
            justified={container.get<boolean>({ xxs: true, s: false })}
          />
        </Modal.Actions>
      </Modal.Root>
    );
  },
};

export const Workflow: Story = {
  render: () => {
    const container = useContainer({ boxSizing: "border-box" });

    return (
      <Modal.Root visible variant="workflow" ref={container.ref}>
        <Modal.Header>Workflow Variant</Modal.Header>
        <div className={classNames("px-xxl")}>
          <Stepper.Container orientation="horizontal" currentStepIndex={0}>
            <Stepper.Step text="Details" />
            <Stepper.Step text="Configuration" />
            <Stepper.Step text="Review" />
          </Stepper.Container>
        </div>
        <Divider />
        <div
          className={classNames(
            "px-xxl",
            "py-xl",
            "flex",
            "flex-col",
            "gap-xl",
            "overflow-y-auto",
            "font-body-s",
            "grow-1",
          )}
        >
          <Grid.Container>
            <Grid.Column s="col_span_10">
              <form className={classNames("flex", "flex-col", "gap-xxl")}>
                <TextField
                  label="Workflow name"
                  id="workflow-name"
                  name="workflowName"
                  placeholder="Quarterly review process"
                  required
                />

                <Select.Select
                  label="Input type"
                  placeholder="Choose an input"
                  defaultValue="form-submissions"
                  name="inputType"
                >
                  <Select.Option value="form-submissions">
                    Form submissions
                  </Select.Option>
                  <Select.Option value="file-uploads">
                    File uploads
                  </Select.Option>
                  <Select.Option value="manual-entries">
                    Manual entries
                  </Select.Option>
                </Select.Select>

                <Select.Select
                  label="Outcome"
                  placeholder="Choose an outcome"
                  defaultValue="summary-report"
                  name="outcome"
                >
                  <Select.Option value="summary-report">
                    Summary report
                  </Select.Option>
                  <Select.Option value="task-list">Task list</Select.Option>
                  <Select.Option value="export-file">Export file</Select.Option>
                </Select.Select>

                <RadioGroup label="Start mode" name="start-mode">
                  <Radio label="Manual" value="manual" name="start-mode" />
                  <Radio
                    label="Automatic"
                    value="automatic"
                    name="start-mode"
                  />
                </RadioGroup>

                <Select.Select
                  label="Frequency"
                  placeholder="Select frequency"
                  defaultValue="ad-hoc"
                  name="frequency"
                >
                  <Select.Option value="ad-hoc">
                    Only when started manually
                  </Select.Option>
                  <Select.Option value="daily">Daily</Select.Option>
                  <Select.Option value="weekly">Weekly</Select.Option>
                </Select.Select>

                <Switch
                  label="Notify participants by email"
                  name="notify-email"
                />

                <Textarea
                  label="Workflow description (optional)"
                  id="workflow-description"
                  name="workflowDescription"
                  placeholder="Describe what this workflow does, who it affects, and any important guidelines."
                  rows={3}
                />
              </form>
            </Grid.Column>
            <Grid.Column s="col_span_1">
              <div
                className={classNames(
                  "flex-noreset",
                  "justify-center",
                  "h-full",
                )}
              >
                <Divider orientation="vertical" />
              </div>
            </Grid.Column>
            <Grid.Column s="col_span_5">
              <h2 className={classNames("font-label-s", "text-weak")}>
                Workflow overview
              </h2>
              <p className={classNames("text-default")}>
                This workflow will collect input, apply the configured steps,
                and produce the selected outcome. Use this view to confirm that
                the setup matches how your team expects the process to run.
              </p>
              <p className={classNames("font-label-s", "text-weak")}>
                Tip: Use clear names and descriptions so others can easily
                understand, discover, and reuse this workflow.
              </p>
            </Grid.Column>
          </Grid.Container>

          <StorybookCodeHint />
        </div>
        <Divider />
        <Modal.Actions>
          <Button
            variant="default"
            label="Back"
            justified={container.get<boolean>({ xxs: true, s: false })}
          />
          <Button
            variant="primary"
            label="Start workflow"
            justified={container.get<boolean>({ xxs: true, s: false })}
          />
        </Modal.Actions>
      </Modal.Root>
    );
  },
};
