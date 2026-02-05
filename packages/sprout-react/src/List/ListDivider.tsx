import { Divider } from "../Divider";

import styles from "./List.module.css";

export function ListDivider() {
  return (
    <li className={styles.item_divider}>
      <Divider role="separator" />
    </li>
  );
}
