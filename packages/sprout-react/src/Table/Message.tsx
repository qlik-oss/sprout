import { Message as BaseMessage } from "../Message";
import { classNames } from "../classNames";
import { useI18n } from "../hooks/useI18n";
import type { HTMLDivProps } from "../htmlTypes";

export type MessageProps = HTMLDivProps;

export function Message({ children, ...props }: MessageProps) {
  const t = useI18n();
  return (
    <div
      role="row"
      className={classNames(
        "flex",
        "justify-center",
        "items-center",
        "size-full",
        "bg-weak",
      )}
      {...props}
    >
      <div role="cell" aria-live="polite">
        {children || (
          <BaseMessage title={t("table.norows.message.default-title")} />
        )}
      </div>
    </div>
  );
}

Message.displayName = "Table.Message";
