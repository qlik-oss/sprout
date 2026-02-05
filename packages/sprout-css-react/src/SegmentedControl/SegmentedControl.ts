import { Group, type GroupProps } from "./Group";
import { Segment, type SegmentProps } from "./Segment";

export const SegmentedControl = {
  Group,
  Segment,
};

export type SegmentedControlProps = {
  Group: GroupProps;
  Segment: SegmentProps;
};
