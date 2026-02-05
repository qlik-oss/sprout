import { type MouseEvent as ReactMouseEvent, useState } from "react";

import { Link } from ".";
import { classNames } from "../classNames";

export function LinkTest() {
  const [count, setCount] = useState(0);
  const onClick = (e: ReactMouseEvent) => {
    e.preventDefault();
    setCount(count + 1);
  };
  return (
    <div
      className={classNames(
        "flex",
        "flex-col",
        "border-box",
        "items-start",
        "border-default",
        "p-s",
      )}
      style={{ inlineSize: "200px" }}
    >
      <div data-testid="count">{count}</div>
      <Link href="/" onClick={onClick}>
        Default link
      </Link>
      <Link href="/" disabled onClick={onClick}>
        Disabled link
      </Link>
      <Link
        href="https://www.qlik.com/"
        isExternal
        onClick={onClick}
        target="_blank"
      >
        External link
      </Link>
      <Link href="https://www.qlik.com/" isExternal disabled onClick={onClick}>
        External link disabled
      </Link>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link href="#" withEllipsis onClick={onClick}>
        With ellipsis if too long you will see ellipsis
      </Link>
    </div>
  );
}
