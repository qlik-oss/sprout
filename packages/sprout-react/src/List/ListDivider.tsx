import { Divider } from "../Divider";
import { classNames } from "../classNames";

export function ListDivider() {
  return (
    <li className={classNames("flex-noreset")}>
      <Divider role="separator" />
    </li>
  );
}
