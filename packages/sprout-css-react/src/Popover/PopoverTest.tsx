import { type CSSProperties, useState } from "react";

import { AlertInline } from "../AlertInline";
import { Button } from "../Button";
import { Menu } from "../Menu";
import { classNames } from "../classNames";
import { Popover, type PopoverProps } from "./Popover";

export function AnchorPositionAPI() {
  const [clickPos, setClickPos] = useState<
    PopoverProps["anchorPosition"] | undefined
  >();
  const [open, setOpen] = useState(false);
  return (
    <div
      className={classNames("flex", "flex-col", "gap-xl")}
      style={{ inlineSize: "400px" }}
    >
      <Menu.Trigger
        menu={
          <Menu.Item
            label="Delete"
            onClick={(e) => {
              setClickPos({
                top: e.clientY,
                left: e.clientX,
              });
              setOpen(!open);
            }}
          />
        }
      >
        <Button label="OpenMenu" asDropdown />
      </Menu.Trigger>
      <Popover
        anchorPosition={clickPos}
        p="m"
        open={open}
        onOpenChange={setOpen}
        content={
          <form
            className={classNames(
              "flex",
              "flex-col",
              "gap-m",
              "items-start",
              "bg-default",
            )}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h2
              className={classNames("flex", "text-default", "font-heading-s")}
            >
              Delete confirmation
            </h2>
            <AlertInline severity="warning">
              This action can t be reverted
            </AlertInline>
            <div
              className={classNames(
                "flex",
                "flex-col",
                "gap-m",
                "w-full",
                "items-end",
              )}
            >
              <Button variant="primary" label="Yes" type="submit" />
            </div>
          </form>
        }
      />
    </div>
  );
}

type PopoverDemoContentProps = {
  demoContentWidth?: CSSProperties["width"];
  demoContentHeight?: CSSProperties["height"];
  demoContainerWidth?: CSSProperties["width"];
  demoContainerHeight?: CSSProperties["height"];
};

export function PopoverPlacement({
  demoContainerHeight = "100vh",
  demoContainerWidth = "100vw",
  demoContentHeight = 100,
  demoContentWidth = 200,
  ...props
}: Partial<PopoverProps> & PopoverDemoContentProps) {
  return (
    <div
      style={{
        inlineSize: demoContainerWidth,
        blockSize: demoContainerHeight,
        overflow: "hidden",
      }}
    >
      <Popover
        initialOpen
        content={
          <div
            style={{
              inlineSize: demoContentWidth,
              blockSize: demoContentHeight,
            }}
          >
            <p>This is the place where the popover content will appear.</p>
          </div>
        }
        {...props}
      >
        <button type="button">Open Popover</button>
      </Popover>
    </div>
  );
}
