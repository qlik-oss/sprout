import { Divider } from "../Divider";
import { classNames } from "../classNames";

export function MenuDivider() {
  return (
    <div className={classNames("py-s", "px-l")}>
      {/* https://github.com/dequelabs/axe-core/issues/3938 */}
      <Divider aria-hidden />
    </div>
  );
}

MenuDivider.displayName = "Menu.Divider";
