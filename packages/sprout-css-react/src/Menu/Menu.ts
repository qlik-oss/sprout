// eslint-disable-next-line import-x/no-deprecated
import { MenuContainer, type MenuContainerProps } from "./MenuContainer";
import { MenuContent, type MenuContentProps } from "./MenuContent";
import { MenuContextual, type MenuContextualProps } from "./MenuContextual";
import { MenuDivider } from "./MenuDivider";
import { MenuGroup, type MenuGroupProps } from "./MenuGroup";
import { MenuGroupLabel, type MenuGroupLabelProps } from "./MenuGroupLabel";
import { MenuItem, type MenuItemProps } from "./MenuItem";
import type { MenuRendererProps } from "./MenuRenderer";
import {
  MenuSecondaryAction,
  type MenuSecondaryActionProps,
} from "./MenuSecondaryAction";
import { MenuSkeleton } from "./MenuSkeleton";
import { MenuSplit, type MenuSplitProps } from "./MenuSplit";
import { MenuSub, type MenuSubProps } from "./MenuSub";
import { MenuTrigger, type MenuTriggerProps } from "./MenuTrigger";

export { MenuContent } from "./MenuContent";

export const Menu = {
  Container: MenuContainer,
  Content: MenuContent,
  Contextual: MenuContextual,
  Divider: MenuDivider,
  Group: MenuGroup,
  GroupLabel: MenuGroupLabel,
  Item: MenuItem,
  Sub: MenuSub,
  Trigger: MenuTrigger,
  Skeleton: MenuSkeleton,
  SecondaryAction: MenuSecondaryAction,
  Split: MenuSplit,
};

export type MenuProps = {
  Container: MenuContainerProps;
  Content: MenuContentProps;
  Contextual: MenuContextualProps;
  Group: MenuGroupProps;
  GroupLabel: MenuGroupLabelProps;
  Item: MenuItemProps;
  Sub: MenuSubProps;
  Trigger: MenuTriggerProps;
  Renderer: MenuRendererProps;
  Split: MenuSplitProps;
  SecondaryAction: MenuSecondaryActionProps;
};
