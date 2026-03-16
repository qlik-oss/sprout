import { PanelPrimitive, type PanelPrimitiveProps } from "./Panel";
import { PanelContainer, type PanelContainerProps } from "./PanelContainer";

type PlacedPanelProps = Omit<PanelPrimitiveProps, "placement">;

/**
 * The Panel component supports the following sub-components:
 * - `Panel.Container` — Wrapping container for panel primitives. Accepts `overlay` for overlay display modes.
 * - `Panel.Primitive` — Base panel with full control over `placement`, `resizable`, `showResizeHandle`, `overlay`, `onResize`, and dimension constraints.
 * - `Panel.Left` — Panel.Primitive pre-configured with `placement="left"`.
 * - `Panel.Right` — Panel.Primitive pre-configured with `placement="right"`.
 * - `Panel.Top` — Panel.Primitive pre-configured with `placement="top"`.
 * - `Panel.Bottom` — Panel.Primitive pre-configured with `placement="bottom"`.
 */
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
