import { Skeleton } from "../Skeleton";
import { classNames } from "../classNames";

export function MenuSkeleton() {
  return (
    <div className={classNames("flex", "flex-col", "border-box", "gap-m")}>
      <Skeleton variant="rectangle" width="150px" height="22px" />
      <Skeleton variant="rectangle" width="100px" height="22px" />
      <Skeleton variant="rectangle" width="200px" height="22px" />
    </div>
  );
}
