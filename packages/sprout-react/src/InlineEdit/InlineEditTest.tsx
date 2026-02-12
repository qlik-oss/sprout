import { InlineEdit } from ".";
import { Select } from "../Select";
import { classNames } from "../classNames";
import { InlineEditPrimitive } from "./InlineEditPrimitive";

const OPTIONS_WITH_GROUP = (
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

export function InlineEditPrimitiveJSXTest() {
  return (
    <InlineEditPrimitive
      data-testid="inline-edit"
      showFormButtons
      view={<span data-testid="view-content">Hello world</span>}
      edit={<input data-testid="edit-input" defaultValue="Hello world" />}
    />
  );
}

export function InlineEditPrimitiveFunctionTest() {
  return (
    <InlineEditPrimitive
      data-testid="inline-edit-fn"
      showFormButtons
      // eslint-disable-next-line react/no-unstable-nested-components
      view={() => <span data-testid="view-content">Hello fn</span>}
      // eslint-disable-next-line react/no-unstable-nested-components
      edit={() => <input data-testid="edit-input" defaultValue="Hello fn" />}
    />
  );
}

export function InlineEditMultiSelectOverflowTest() {
  return (
    <div
      id="component-testing"
      className={classNames("w-m", "p-xl", "border-box", "overflow-auto")}
      style={{
        blockSize: "300px",
      }}
    >
      <div style={{ inlineSize: "600px" }}>
        <div className={classNames("flex", "border-box", "p-m", "w-xs")}>
          <div className={classNames("font-body-s", "text-weak")}>
            Scroll to reach the InlineEdit
          </div>
        </div>
        <InlineEdit.MultiSelect
          aria-label="Edit colors"
          defaultValue={["red", "orange", "green"]}
          data-testid="test-multiselect-scroll"
        >
          {OPTIONS_WITH_GROUP}
        </InlineEdit.MultiSelect>
      </div>
    </div>
  );
}

export function InlineEditSelectOverflowTest() {
  return (
    <div
      id="component-testing"
      className={classNames("w-m", "p-xl", "border-box", "overflow-auto")}
      style={{
        blockSize: "300px",
      }}
    >
      <div style={{ inlineSize: "600px" }}>
        <div className={classNames("flex", "border-box", "p-m", "w-xs")}>
          <div className={classNames("font-body-s", "text-weak")}>
            Scroll to reach the InlineEdit
          </div>
        </div>
        <InlineEdit.Select
          aria-label="Edit color"
          defaultValue="red"
          data-testid="test-select-scroll"
        >
          {OPTIONS_WITH_GROUP}
        </InlineEdit.Select>
      </div>
    </div>
  );
}

export function InlineEditTextFieldOverflowTest() {
  return (
    <div
      id="component-testing"
      className={classNames("w-m", "p-xl", "border-box", "overflow-auto")}
      style={{
        blockSize: "300px",
      }}
    >
      <div style={{ inlineSize: "600px" }}>
        <div className={classNames("flex", "border-box", "p-m", "w-xs")}>
          <div className={classNames("font-body-s", "text-weak")}>
            Scroll to reach the InlineEdit
          </div>
        </div>
        <InlineEdit.TextField
          aria-label="Edit text"
          defaultValue="Edit me"
          data-testid="test-textfield-scroll"
        />
      </div>
    </div>
  );
}

export function InlineEditPrimitiveOverflowTest() {
  return (
    <div
      id="component-testing"
      className={classNames("w-m", "p-xl", "border-box", "overflow-auto")}
      style={{
        blockSize: "300px",
      }}
    >
      <div style={{ inlineSize: "600px" }}>
        <div className={classNames("flex", "border-box", "p-m", "w-xs")}>
          <div className={classNames("font-body-s", "text-weak")}>
            Scroll to reach the InlineEdit
          </div>
        </div>
        <InlineEditPrimitive
          data-testid="test-primitive-scroll"
          showFormButtons
          view={<span data-testid="view-content">Hello world</span>}
          edit={<input data-testid="edit-input" defaultValue="Hello world" />}
        />
      </div>
    </div>
  );
}
