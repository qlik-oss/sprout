import { InlineEditPrimitive } from "./InlineEditPrimitive";

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
