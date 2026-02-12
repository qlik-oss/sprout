import {
  type ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import sprout from "@qlik/sprout-css-modules";
import {
  Badge,
  Checkbox,
  IconButton,
  List,
  Tag,
  Tooltip,
  Tree,
  type TreeProps,
  classNames,
} from "@qlik/sprout-react";
import {
  type ColumnDef,
  Table,
  type TableCellParams,
} from "@qlik/sprout-css-table";
import Copy from "@qlik/sprout-icons/react/Copy";
import Edit from "@qlik/sprout-icons/react/Edit";
import FileOutline from "@qlik/sprout-icons/react/File";
import FolderOpenOutline from "@qlik/sprout-icons/react/FolderOpenOutline";
import FolderOutline from "@qlik/sprout-icons/react/FolderOutline";
import InfoOutline from "@qlik/sprout-icons/react/InfoOutline";
import type { StoryObj } from "@storybook/react-vite";

import { TreeItemArgTypes } from "./Tree.argTypes";

export default {
  title: "Components/Tree",
};

export const TreeItem: StoryObj<TreeProps["TreeItem"]> = {
  render: (props) => <Tree.TreeItem {...props} />,
  args: {
    id: "treeitem",
    label: "TreeItem",
  },
  argTypes: TreeItemArgTypes,
};

export const Playground = {
  render: () => (
    <div>
      <h1 className={sprout.classNames("text-default", "font-heading-m")}>
        TreeItem alone
      </h1>
      <Tree.TreeItem id="simple" label="Simple" />
      <Tree.TreeItem id="simple" label="Simple" disabled />
      <Tree.TreeItem id="expanded" label="Expanded" expanded />
      <Tree.TreeItem
        id="expanded-child"
        path={["expanded"]}
        label="Expanded child"
      />
      <Tree.TreeItem id="folder" label="folder" icon={<FolderOutline />} />
      <Tree.TreeItem
        id="folder_expanded"
        label="folder expanded"
        displayFolderIcon
        expanded
      />
      <Tree.TreeItem id="leaf" path={["folder_expanded"]} label="Leaf" isLeaf />
      <Tree.TreeItem
        id="leaf-icon"
        path={["folder_expanded"]}
        label="Leaf icon"
        isLeaf
        icon={<FileOutline />}
      />
      <List hasPadding={false}>
        <List.Item interactive>
          <Tree.TreeItem id="context_simple" label="Simple" />
        </List.Item>
        <List.Item interactive>
          <Tree.TreeItem id="context_expanded" label="Expanded" />
        </List.Item>
        <List.Item interactive>
          <Tree.TreeItem id="context_folder" label="folder" displayFolderIcon />
        </List.Item>
        <List.Item interactive>
          <Tree.TreeItem
            id="context_folder_child"
            path={["context_folder"]}
            label="child"
            isLeaf
          />
        </List.Item>
        <List.Item interactive>
          <Tree.TreeItem
            id="context_folder_expanded"
            label="folder expanded"
            displayFolderIcon
          />
        </List.Item>
        <List.Item interactive>
          <Tree.TreeItem
            id="context_leaf"
            path={["context_folder_expanded"]}
            label="Leaf"
            isLeaf
          />
        </List.Item>
        <List.Item interactive>
          <Tree.TreeItem
            id="context_leaf-icon"
            path={["context_folder_expanded"]}
            label="Leaf icon"
            isLeaf
            icon={<FileOutline />}
          />
        </List.Item>
      </List>
    </div>
  ),
};

type SelectionState = true | false | "partial";
type TreeContextType = {
  expanded: Record<string, boolean>;
  onExpand: (id: string, expanded: boolean) => void;
  selected: Record<string, SelectionState>;
};

const TreeContext = createContext<TreeContextType>({
  expanded: {},
  selected: {},
  onExpand: () => {},
});

type MyListItemProps = {
  id: string;
  label: string;
  onCheck: (e: { id: string; checked: boolean }) => void;
  isLeaf?: boolean;
  path?: Array<string>;
  children?: ReactNode;
};

type TreeNode = {
  id: string;
  label: string;
  path?: Array<string>;
  isLeaf?: boolean;
  children?: ReactNode;
};

const data: Array<TreeNode> = [
  { id: "folder1", label: "Folder with 1 folder and 2 files" },
  { id: "folder1.1", label: "Folder with 1 files", path: ["folder1"] },
  {
    id: "item1",
    label: "File 1",
    path: ["folder1", "folder1.1"],
    isLeaf: true,
  },
  { id: "item2", label: "File 2", path: ["folder1"], isLeaf: true },
  { id: "item3", label: "File  3", path: ["folder1"], isLeaf: true },
  {
    id: "folder2",
    label: "Empty folder",
    children: (
      <div
        className={classNames(
          "flex",
          "flex-row",
          "items-center",
          "justify-end",
          "w-full",
        )}
      >
        <IconButton variant="quiet" icon={<Copy />} aria-label="Copy" />
        <IconButton variant="quiet" icon={<Edit />} aria-label="Edit" />
      </div>
    ),
  },
  {
    id: "item4",
    label: "Orphan file",
    isLeaf: true,
    children: <Tag text="Tag" />,
  },
  {
    id: "item5",
    label: "Orphan file",
    isLeaf: true,
    children: <Badge color="info" />,
  },
  {
    id: "item6",
    label: "Orphan file",
    isLeaf: true,
    children: (
      <Tooltip title="I'm a tooltip">
        <button
          className={classNames(
            "flex",
            "p-xs",
            "m-xs",
            "border-box",
            "border-none",
            "bg-transparent",
            "cursor-pointer",
            "radius-round",
            "outline-focus-visible-centered",
          )}
        >
          <InfoOutline />
        </button>
      </Tooltip>
    ),
  },
  {
    id: "item7",
    label:
      "a-cron-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long (V2)",
    isLeaf: true,
  },
];

function computeNodeSelectionState(
  data: Array<TreeNode>,
  selectedNodeIds: Array<string>,
): Record<string, SelectionState> {
  const selectedSet = new Set(selectedNodeIds);
  const nodeMap = new Map<string, TreeNode>();
  const childrenMap = new Map<string, Array<string>>(); // parentId -> childIds

  for (const node of data) {
    nodeMap.set(node.id, node);
    const path = node.path ?? [];

    if (path.length) {
      const parentId = path[path.length - 1];
      if (!childrenMap.has(parentId)) {
        childrenMap.set(parentId, []);
      }
      childrenMap.get(parentId)!.push(node.id);
    }
  }

  const stateMap: Record<string, SelectionState> = {};

  // Step 1: Initialize all leaf nodes
  for (const node of data) {
    if (node.isLeaf || !childrenMap.has(node.id)) {
      stateMap[node.id] = !!selectedSet.has(node.id);
    }
  }

  // Step 2: Walk up tree to compute folders
  const sortedNodes = [...data].sort(
    (a, b) => (b.path?.length ?? 0) - (a.path?.length ?? 0),
  );

  for (const node of sortedNodes) {
    if (node.isLeaf) continue;

    const children = childrenMap.get(node.id) ?? [];
    const childStates = children.map((id) => stateMap[id]);

    if (childStates.length === 0) {
      stateMap[node.id] = !!selectedSet.has(node.id);
    } else {
      const allTrue = childStates.every((state) => state === true);
      const allFalse = childStates.every((state) => state === false);
      if (allTrue) {
        stateMap[node.id] = true;
      } else if (allFalse) {
        stateMap[node.id] = false;
      } else {
        stateMap[node.id] = "partial";
      }
    }
  }

  return stateMap;
}

function MyListItem({
  id,
  label,
  onCheck,
  isLeaf,
  path,
  children,
}: MyListItemProps) {
  const context = useContext(TreeContext);
  let safeVisible = true; // Default to true, can be adjusted based on context
  const indeterminate = context.selected[id] === "partial";
  const safeSelected = indeterminate ? true : !!context.selected[id];
  let safeExpanded = !!context.expanded[id];
  if (context && path) {
    safeExpanded = !!context?.expanded?.[id];
    safeVisible = path.every((p) => !!context?.expanded?.[p]);
  }
  if (!safeVisible) {
    return null; // If not visible, don't render the item
  }

  return (
    <List.Item
      interactive
      onClick={() => {
        context.onExpand?.(id, !safeExpanded);
      }}
      selected={safeSelected}
    >
      <div
        className={classNames(
          "flex",
          "flex-row",
          "w-full",
          "pl-l",
          "pr-l",
          "items-center",
          "overflow-hidden",
        )}
      >
        <div className={classNames("flex", "w-fit")}>
          <Checkbox
            aria-label={label}
            indeterminate={indeterminate}
            checked={safeSelected}
            onChange={(e) => {
              onCheck({ id, checked: !safeSelected });
            }}
          />
        </div>
        <Tree.TreeItem
          id={id}
          label={label}
          path={path}
          isLeaf={isLeaf}
          expanded={safeExpanded}
          onExpand={() => {
            context.onExpand?.(id, !safeExpanded);
          }}
          displayFolderIcon={!isLeaf}
          icon={isLeaf ? <FileOutline /> : <FolderOutline />}
        >
          {children}
        </Tree.TreeItem>
      </div>
    </List.Item>
  );
}

function updateSelectedNodeIds(
  data: Array<TreeNode>,
  currentSelected: Array<string>,
  toggledNodeId: string,
  isSelected: boolean,
): Array<string> {
  const nodeMap = new Map<string, TreeNode>();
  const childrenMap = new Map<string, Array<string>>(); // parentId -> childIds

  // Build maps
  for (const node of data) {
    nodeMap.set(node.id, node);
    const path = node.path ?? [];

    if (path.length) {
      const parentId = path[path.length - 1];
      if (!childrenMap.has(parentId)) {
        childrenMap.set(parentId, []);
      }
      childrenMap.get(parentId)!.push(node.id);
    }
  }

  // Recursive function to get all descendants of a node
  function getDescendants(id: string): Array<string> {
    const children = childrenMap.get(id) ?? [];
    const all = [...children];
    for (const childId of children) {
      all.push(...getDescendants(childId));
    }
    return all;
  }

  const selectedSet = new Set(currentSelected);
  const toggledNode = nodeMap.get(toggledNodeId);

  if (!toggledNode) return currentSelected;

  const toUpdate = [toggledNodeId, ...getDescendants(toggledNodeId)];

  if (isSelected) {
    for (const id of toUpdate) selectedSet.add(id);
  } else {
    for (const id of toUpdate) selectedSet.delete(id);
  }

  return [...selectedSet];
}

export const WithCheckbox = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => {
    const [treeSelected, setTreeSelected] = useState<
      TreeContextType["selected"]
    >({ item4: true });
    const [treeExpanded, setTreeExpanded] = useState<
      TreeContextType["expanded"]
    >({});

    const onCheck = (e: { id: string; checked: boolean }) => {
      const selectedNodesIds = Object.keys(treeSelected).filter(
        (key) => treeSelected[key] === true,
      );
      const newSelectedIds = updateSelectedNodeIds(
        data,
        selectedNodesIds,
        e.id,
        e.checked,
      );
      const newState = computeNodeSelectionState(data, newSelectedIds);
      setTreeSelected(newState);
    };

    const onExpand = (id: string, expanded: boolean) => {
      setTreeExpanded((prev) => ({ ...prev, [id]: expanded }));
    };

    return (
      <div className={classNames("flex", "w-m")}>
        <List hasPadding={false}>
          <TreeContext.Provider
            value={{ expanded: treeExpanded, selected: treeSelected, onExpand }}
          >
            {data.map((item) => (
              <MyListItem
                key={item.id}
                id={item.id}
                path={item.path}
                isLeaf={item.isLeaf}
                label={item.label}
                onCheck={onCheck}
              >
                {item.children}
              </MyListItem>
            ))}
          </TreeContext.Provider>
        </List>
      </div>
    );
  },
};

const dataWithLongNames: Array<TreeNode> = [
  {
    id: "folder1",
    label:
      "FirstFolderWithAReallyLongNameThatExceedsTheLimitAtSomePoint with 1 folder and 2 files",
  },
  {
    id: "folder1.1",
    label:
      "SecondFolderWithAReallyLongNameThatExceedsTheLimitAtSomePoint with 1 files and 1 folder",
    path: ["folder1"],
  },
  {
    id: "folder1.1.1",
    label:
      "ThirdFolderWithAReallyLongNameThatExceedsTheLimitAtSomePoint without files",
    path: ["folder1", "folder1.1"],
  },
  {
    id: "item1",
    label: "File 1",
    path: ["folder1", "folder1.1"],
    isLeaf: true,
  },
  { id: "item2", label: "File 2", path: ["folder1"], isLeaf: true },
  { id: "item3", label: "File  3", path: ["folder1"], isLeaf: true },
  { id: "folder2", label: "Empty folder" },
  { id: "item4", label: "Orphan file", isLeaf: true },
];

export const WithCheckboxAndLongNames = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => {
    const [treeSelected, setTreeSelected] = useState<
      TreeContextType["selected"]
    >({});
    const [treeExpanded, setTreeExpanded] = useState<
      TreeContextType["expanded"]
    >({ folder1: true, "folder1.1": true });

    const onCheck = (e: { id: string; checked: boolean }) => {
      const selectedNodesIds = Object.keys(treeSelected).filter(
        (key) => treeSelected[key] === true,
      );
      const newSelectedIds = updateSelectedNodeIds(
        dataWithLongNames,
        selectedNodesIds,
        e.id,
        e.checked,
      );
      const newState = computeNodeSelectionState(
        dataWithLongNames,
        newSelectedIds,
      );
      setTreeSelected(newState);
    };

    const onExpand = (id: string, expanded: boolean) => {
      setTreeExpanded((prev) => ({ ...prev, [id]: expanded }));
    };

    return (
      <div
        className={classNames("flex", "w-m", "border-weak", "overflow-auto")}
      >
        <List hasPadding={false}>
          <TreeContext.Provider
            value={{ expanded: treeExpanded, selected: treeSelected, onExpand }}
          >
            {dataWithLongNames.map((item) => (
              <MyListItem
                key={item.id}
                id={item.id}
                path={item.path}
                isLeaf={item.isLeaf}
                label={item.label}
                onCheck={onCheck}
              />
            ))}
          </TreeContext.Provider>
        </List>
      </div>
    );
  },
};

function TreeCell({ row }: Pick<TableCellParams<TreeNode>, "row">) {
  const context = useContext(TreeContext);
  const safeExpanded = !!context.expanded[row.id];
  return (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "w-full",
        "pl-l",
        "pr-l",
        "items-center",
        "overflow-hidden",
      )}
      onClick={() => {
        context.onExpand?.(row.id, !safeExpanded);
      }}
    >
      <Tree.TreeItem
        onExpand={context.onExpand}
        expanded={safeExpanded}
        id={row.id}
        displayFolderIcon={!row.isLeaf}
        label={row.label}
        isLeaf={row.isLeaf}
        path={row.path}
        icon={row.isLeaf ? <FileOutline /> : <FolderOutline />}
      />
    </div>
  );
}

const columns: Array<ColumnDef<TreeNode>> = [
  {
    field: "label",
    headerName: "Name",
    width: 300,
    renderCell: (info) => <TreeCell row={info.row} />,
  },
  {
    field: "path",
    headerName: "Path",
    flex: 1,
    renderCell: (info) => (info.row.path || []).join(" / "),
  },
];

export const TreeTable = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => {
    const [treeExpanded, setTreeExpanded] = useState<
      TreeContextType["expanded"]
    >({});
    const filteredData = useMemo(() => {
      return data.filter((item) => {
        if (!item.path) return true;
        return item.path.every((p) => !!treeExpanded[p]);
      });
    }, [treeExpanded, data]);
    return (
      <div className={classNames("border-weak", "w-l")}>
        <TreeContext.Provider
          value={{
            expanded: treeExpanded,
            selected: {},
            onExpand: (id: string, expanded: boolean) => {
              setTreeExpanded({ ...treeExpanded, [id]: expanded });
            },
          }}
        >
          <Table
            variant="list"
            rows={filteredData}
            columns={columns}
            rowHeight={40}
          />
        </TreeContext.Provider>
        <pre>{JSON.stringify(treeExpanded, null, 2)}</pre>
      </div>
    );
  },
};
