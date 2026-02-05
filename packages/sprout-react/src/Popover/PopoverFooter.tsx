import { Button } from "../Button";
import { classNames } from "../classNames";
import type { HTMLButtonProps } from "../htmlTypes";

export type PopoverFooterAction = HTMLButtonProps & {
  label: string;
} & DataAttributes;

type PopoverFooterProps = {
  primaryAction: PopoverFooterAction;
  secondaryAction?: PopoverFooterAction;
};

export function PopoverFooter({
  primaryAction,
  secondaryAction,
}: PopoverFooterProps) {
  return (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "border-box",
        "gap-m",
        "justify-end",
      )}
    >
      {secondaryAction ? <Button {...secondaryAction} /> : null}
      <Button {...primaryAction} variant="primary" />
    </div>
  );
}
