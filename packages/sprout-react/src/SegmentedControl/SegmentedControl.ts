import { Group, type GroupProps } from "./Group";
import { Segment, type SegmentProps } from "./Segment";

/**
 * The SegmentedControl component supports the following sub-components:
 * - `SegmentedControl.Group` — Container for the segmented control. Accepts `name`, `iconOnly`, `label`, `justified`, and `orientation`.
 * - `SegmentedControl.Segment` — Individual segment rendered as a radio input. Accepts `label`, `icon`, and all `HTMLInputElement` attributes.
 */
export const SegmentedControl = {
  Group,
  Segment,
};

export type SegmentedControlProps = {
  Group: GroupProps;
  Segment: SegmentProps;
};
