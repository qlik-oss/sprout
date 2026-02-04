import { Divider } from "../Divider";

import style from "./Menu.module.css";

export function MenuDivider() {
  return (
    <div className={style.menu_divider}>
      {/* https://github.com/dequelabs/axe-core/issues/3938 */}
      <Divider aria-hidden />
    </div>
  );
}

MenuDivider.displayName = "Menu.Divider";
