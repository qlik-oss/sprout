import { NewTabIcon } from "@qlik/sprout-icons/react";

import { type ButtonIconProps, IconButton } from "../Button";
import { useI18n } from "../hooks/useI18n";

export type MenuSecondaryActionProps = ButtonIconProps;

/**
 * The Menu.SecondaryAction component renders an icon button as a secondary action inside a Menu.Split. It accepts the same props as an icon button.
 */
export function MenuSecondaryAction(props: MenuSecondaryActionProps) {
  const t = useI18n();
  const openLabel = t("menu.secondaryaction.label");
  return (
    <IconButton
      role="menuitem"
      tabIndex={-1}
      icon={<NewTabIcon />}
      label={openLabel}
      variant="quiet"
      {...props}
    />
  );
}
