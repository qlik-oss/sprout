import { type Provider, createContext, useEffect, useMemo } from "react";

import {
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
} from "@floating-ui/react";

type FloatingPrimitiveContextValue = {
  nodeId: string;
  parentId: string | null;
  Provider?: Provider<FloatingPrimitiveContextValue | undefined>;
  closeAll: () => void;
};

export const FloatingPrimitiveContext = createContext<
  FloatingPrimitiveContextValue | undefined
>(undefined);

const DEFAULT_ARGS = {};

export function useFloatingContext(
  args: {
    onCloseAll?: () => void;
    tree?: boolean;
  } = DEFAULT_ARGS,
) {
  const tree = useFloatingTree();
  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();
  const isRootNode = parentId === null;
  const context: FloatingPrimitiveContextValue = useMemo(() => {
    return {
      nodeId: nodeId || "invalid",
      parentId,
      closeAll: () => {
        if (args.tree) {
          tree?.events.emit("closeallfloating", { nodeId, parentId });
        }
      },
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodeId, parentId]);

  useEffect(() => {
    if (!args.tree || !isRootNode) {
      return;
    }
    if (args.onCloseAll) {
      tree?.events.on("closeallfloating", args.onCloseAll);
    }
    // eslint-disable-next-line consistent-return
    return () => {
      if (args.onCloseAll) {
        tree?.events.off("closeallfloating", args.onCloseAll);
      }
    };
  }, [args, args.onCloseAll, args.tree, tree, isRootNode]);

  if (args.tree && isRootNode) {
    context.Provider = FloatingPrimitiveContext.Provider;
  }

  return context;
}
