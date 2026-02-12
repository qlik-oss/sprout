// this one must stay empty at the moment until
// we know if we really want  a runtime library or not
import {
  type UseControlReturns,
  useContainer as useContainerBase,
  useControl as useControlPrimitive,
  useId as useIdBase,
} from "@qlik/sprout-react-hooks";

import { useI18n } from "./hooks/useI18n";

export * from "./Accordion";
export * from "./AlertBanner";
export * from "./AlertInline";
export * from "./AlertModal";
export * from "./Avatar";
export * from "./Badge";
export * from "./Box";
export * from "./Breadcrumb";
export * from "./Button";
export * from "./ButtonGroup";
export * from "./Checkbox";
export * from "./classNames";
export * from "./Divider";
export * from "./Dropzone";
export * from "./Field";
export * from "./FieldLabel";
export * from "./FloatingWrapper";
export * from "./Grid";
export * from "./HelperText";
export * from "./SearchHighlight";
export * from "./InlineEdit";
export * from "./Input";
export * from "./InputButton";
export * from "./Link";
export * from "./List";
export * from "./Menu";
export * from "./Message";
export * from "./Modal";
export * from "./Panel";
export * from "./Popover";
export * from "./Progress";
export * from "./RadioGroup";
export * from "./SegmentedControl";
export * from "./Select";
export * from "./SideNavigation";
export * from "./Skeleton";
export * from "./Slider";
export * from "./Stepper";
export * from "./Switch";
export * from "./Table";
export * from "./Tabs";
export * from "./Tag";
export * from "./Textarea";
export * from "./ThemeProvider";
export * from "./Thumbnail";
export * from "./Toast";
export * from "./ToggleButton";
export * from "./Tooltip";
export * from "./Tree";
export * from "./Typography";
export * from "./VisuallyHidden";
export type { UseControlReturns };

/**
 * Exported for extended but OpenSource components like the table.
 */
export const useSproutI18n = useI18n;

/**
 * @deprecated
 * import { useControl } from '@qlik/sprout-react-hooks'; instead
 */
export const useControl = useControlPrimitive;

/**
 * @deprecated
 * import { useId } from '@qlik/sprout-react-hooks'; instead.
 */
export const useId = useIdBase;

/**
 * @deprecated
 * import { useContainer } from '@qlik/sprout-react-hooks'; instead.
 */
export const useContainer = useContainerBase;
