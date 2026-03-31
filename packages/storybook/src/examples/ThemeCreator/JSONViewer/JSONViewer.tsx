import { classNames } from "@qlik/sprout-react";
import JsonView from "@uiw/react-json-view";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function JSONViewer({ data }: { data: any }) {
  return (
    <div
      className={classNames("flex", "p-m", "border-default", "radius-subtle")}
    >
      <JsonView
        value={data}
        displayDataTypes={false}
        displayObjectSize={false}
      />
    </div>
  );
}
