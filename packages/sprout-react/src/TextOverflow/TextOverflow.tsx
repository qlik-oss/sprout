import {
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { Tooltip } from "../Tooltip";
import { classNames } from "../classNames";
import { onVisible } from "../hooks/useHasOverflow";

export type TextOverflowProps = {
  /** @deprecated please use text instead */
  children?: ReactNode;
  className: string;
  variant: "tooltip" | "ellipsis" | "wrap";
  text?: string;
  maxLength?: number;
};

function TextOverflowTooltip({
  children,
  className,
  text,
  maxLength,
}: Pick<TextOverflowProps, "children" | "text" | "maxLength" | "className">) {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [overflow, setOverflow] = useState(
    text && maxLength && text.length > maxLength,
  );

  useLayoutEffect(() => {
    if (textRef.current && !maxLength) {
      onVisible(textRef.current, () => {
        const width = textRef.current?.clientWidth;
        const scrollWidth = textRef.current?.scrollWidth;
        if (width && scrollWidth && width < scrollWidth) {
          setOverflow(true);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const textExceedsMaxLength = text && maxLength && text.length > maxLength;
    if (!overflow && textExceedsMaxLength) {
      setOverflow(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, maxLength]);

  let safeText = text;
  if (text && maxLength && text.length > maxLength) {
    safeText = `${text.slice(0, maxLength)}…`;
  }

  let content = (
    <span className={className} ref={textRef}>
      {safeText || children}
    </span>
  );

  if (overflow) {
    content = (
      <Tooltip title={text || children}>
        <span className={className} aria-label={text}>
          {safeText || children}
        </span>
      </Tooltip>
    );
  }
  return content;
}

/**
 * Manage text overflow. Enforce overflow: hidden
 * @param mode - "tooltip" | "ellipsis" | "wrap"
 */
export function TextOverflow({
  children,
  text,
  maxLength,
  className,
  variant,
}: TextOverflowProps) {
  const textClasses = classNames("overflow-hidden", {
    [className]: !!className,
    "text-nowrap": variant === "tooltip",
    truncate: variant === "ellipsis" || variant === "tooltip",
    "text-wrap": variant === "wrap",
    "break-words": variant === "wrap",
  });
  if (variant === "tooltip") {
    return (
      <TextOverflowTooltip
        text={text}
        maxLength={maxLength}
        className={textClasses}
      >
        {children}
      </TextOverflowTooltip>
    );
  }
  return <span className={textClasses}>{children}</span>;
}
