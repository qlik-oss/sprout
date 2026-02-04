import { useEffect, useRef, useState } from "react";

import { tokens } from "@qlik/design-tokens";

import { Button } from "../Button";
import { classNames } from "../classNames";
import { Tooltip, type TooltipProps } from "./Tooltip";

const TITLE = [
  "This is a simple tooltip",
  "This is a very long tooltip that should trigger the overflow handling of the tooltip component in order to make sure that it is displayed correctly within the viewport",
];

export function TooltipSimpleTest() {
  return (
    <div
      className={classNames(
        "flex",
        "flex-col",
        "border-box",
        "p-s",
        "items-start",
        "justify-start",
        "border-default",
      )}
      style={{ inlineSize: "200px", blockSize: "200px" }}
    >
      <Tooltip placement="bottom" title={TITLE[0]}>
        <Button label="b" />
      </Tooltip>
    </div>
  );
}

export function TooltipOverflowTest({ title }: { title?: string }) {
  return (
    <div
      className={classNames(
        "flex",
        "flex-col",
        "border-box",
        "p-s",
        "items-center",
        "justify-center",
        "border-default",
      )}
      style={{
        inlineSize: tokens.container_sizing_xxs,
        blockSize: tokens.container_sizing_xxs,
      }}
    >
      <Tooltip title={title}>
        <Button label="button" />
      </Tooltip>
    </div>
  );
}

export function TooltipWithRefTest() {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = "Hello world";
    }
  }, []);
  return (
    <Tooltip title="tooltip" ref={ref}>
      <button type="button">Hover me</button>
    </Tooltip>
  );
}

export function ControlledClickTooltip() {
  const [open, setOpen] = useState(true);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div
      className={classNames(
        "flex",
        "justify-center",
        "items-center",
        "w-s",
        "mt-3xl",
      )}
    >
      <Tooltip title="This should be visible if open is true" open={open}>
        <button onClick={handleClick} type="button">
          Tooltip
        </button>
      </Tooltip>
    </div>
  );
}

export function TooltipTest(props: TooltipProps) {
  return (
    <div
      id="component-testing"
      style={{ inlineSize: 200, blockSize: 200 }}
      className={classNames("p-s", "items-start")}
    >
      <Tooltip {...props}>
        <Button label="button" />
      </Tooltip>
    </div>
  );
}

export function MultipleTooltipsTest() {
  return (
    <div
      id="component-testing"
      className={classNames(
        "flex",
        "flex-row",
        "border-box",
        "p-s",
        "items-start",
        "gap-m",
      )}
      style={{ inlineSize: "200px", blockSize: "200px" }}
    >
      <Tooltip title={TITLE[0]}>
        <Button label="button-1" />
      </Tooltip>

      <Tooltip title={TITLE[1]}>
        <Button label="button-2" />
      </Tooltip>
    </div>
  );
}
