import { Message as BaseMessage, classNames, useSproutI18n } from "@qlik/sprout-react";
import type { CSSProperties } from "react";
import type { HTMLDivProps } from "../utils/htmlTypes";

export type MessageProps = HTMLDivProps & {
  className?: string;
  style?: CSSProperties;
};

export function Message({ children, className: classNameProp, style, ...props }: MessageProps) {
  const t = useSproutI18n();
  return (
    <div
      role="row"
      className={classNames(
        "flex",
        "justify-center",
        "items-center",
        "size-full",
        "bg-default",
        "grow-1",
        classNameProp || "",
      )}
      style={style}
      {...props}
    >
      <div role="cell" aria-live="polite">
        {children || <BaseMessage title={t("table.norows.message.default-title")} />}
      </div>
    </div>
  );
}

Message.displayName = "Table.Message";
