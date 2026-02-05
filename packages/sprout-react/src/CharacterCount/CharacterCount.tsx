import { classNames } from "../classNames";
import type { HTMLSpanProps } from "../htmlTypes";

export type CharacterCountProps = Omit<HTMLSpanProps, "span"> & {
  currentCount: number;
  maxCount?: number;
};

export function CharacterCount({
  currentCount,
  maxCount = 100,
  ...props
}: CharacterCountProps) {
  const limitExceded = classNames("text-danger");
  return (
    <div
      className={classNames("text-weak", "font-body-s", "font-label-xs", {
        [limitExceded]: currentCount > maxCount || false,
      })}
    >
      <span {...props}>
        {currentCount} / {maxCount}
      </span>
    </div>
  );
}
CharacterCount.displayName = "CharacterCount";
