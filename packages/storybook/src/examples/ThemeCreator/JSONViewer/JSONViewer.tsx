import { classNames } from "@qlik/sprout-react";
import JsonView from "@uiw/react-json-view";

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
