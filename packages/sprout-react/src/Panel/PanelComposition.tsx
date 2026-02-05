import { PanelPrimitive, type PanelPrimitiveProps } from "./Panel";
import { PanelContainer, type PanelContainerProps } from "./PanelContainer";

type PlacedPanelProps = Omit<PanelPrimitiveProps, "placement">;

export const Panel = {
  Container: PanelContainer,
  Primitive: PanelPrimitive,
  Left: (props: PlacedPanelProps) => (
    <PanelPrimitive {...props} placement="left" />
  ),
  Right: (props: PlacedPanelProps) => (
    <PanelPrimitive {...props} placement="right" />
  ),
  Top: (props: PlacedPanelProps) => (
    <PanelPrimitive {...props} placement="top" />
  ),
  Bottom: (props: PlacedPanelProps) => (
    <PanelPrimitive {...props} placement="bottom" />
  ),
};

Object.assign(Panel.Left, { displayName: "Panel.Left" });
Object.assign(Panel.Right, { displayName: "Panel.Right" });
Object.assign(Panel.Top, { displayName: "Panel.Top" });
Object.assign(Panel.Bottom, { displayName: "Panel.Bottom" });

export type PanelProps = {
  Container: PanelContainerProps;
  Left: PlacedPanelProps;
  Right: PlacedPanelProps;
  Top: PlacedPanelProps;
  Bottom: PlacedPanelProps;
  Primitive: PanelPrimitiveProps;
};
