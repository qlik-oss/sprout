import { TreeItem, type TreeItemProps } from "./TreeItem";

/**
 * The Tree component supports the following sub-components:
 * - `Tree.TreeItem` — A tree node. Accepts `id`, `label`, `path`, `isLeaf`, `disabled`, `nesting`, `expanded`, `onExpand`, and `icon`.
 */
export const Tree = {
  TreeItem,
};

export type TreeProps = {
  TreeItem: TreeItemProps;
};
