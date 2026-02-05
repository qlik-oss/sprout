import { useState } from "react";

import type { GroupProps } from "./Group";
import { SegmentedControl } from "./SegmentedControl";

export function SegmentedControlTest(props: GroupProps) {
  return (
    <div data-testid="wrapper" id="component-testing">
      <SegmentedControl.Group name="segmented-control-test-a11y" {...props}>
        <SegmentedControl.Segment label="Favorited" value="favorited" />
        <SegmentedControl.Segment label="Trending" value="trending" />
        <SegmentedControl.Segment label="Recommended" value="recommended" />
        <SegmentedControl.Segment label="For You" value="for-you" disabled />
      </SegmentedControl.Group>
    </div>
  );
}

export function ControlledSegmentedControlTest() {
  const [value, setValue] = useState<string | undefined>("favorited");

  return (
    <div data-testid="wrapper" id="component-testing">
      <SegmentedControl.Group name="segmented-control-test-controlled">
        <SegmentedControl.Segment
          label="Favorited"
          value="favorited"
          checked={value === "favorited"}
          onChange={() => {
            setValue("favorited");
          }}
        />
        <SegmentedControl.Segment
          label="Trending"
          value="trending"
          checked={value === "trending"}
          onChange={() => {
            setValue("trending");
          }}
        />
        <SegmentedControl.Segment
          label="Recommended"
          value="recommended"
          checked={value === "recommended"}
          onChange={() => {
            setValue("recommended");
          }}
        />
      </SegmentedControl.Group>
    </div>
  );
}
