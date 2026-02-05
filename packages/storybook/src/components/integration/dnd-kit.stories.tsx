/* eslint-disable react-hooks/rules-of-hooks */
import { type CSSProperties, useState } from "react";

import { DndContext, type DragEndEvent, type UniqueIdentifier, useDraggable, useDroppable } from "@dnd-kit/core";
import { Button, type ButtonProps, Dropzone, type DropzoneProps, classNames } from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Integration/@dnd-kit",
  component: Dropzone,
} as Meta<typeof Dropzone>;

function Draggable({ id, ...props }: ButtonProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id || "draggable",
  });
  const style: CSSProperties = {};
  if (transform) {
    style.transform = `translate(${transform.x}px, ${transform.y}px)`;
  }
  return (
    <div ref={setNodeRef} style={{ ...style }} {...listeners} {...attributes}>
      <Button {...props} />
    </div>
  );
}

function DndKitDropzone({ disabled, ...props }: DropzoneProps) {
  const id = "droppable";
  const drop = useDroppable({
    disabled,
    id,
  });

  return (
    <Dropzone
      status={drop.isOver ? "dragging" : undefined}
      onStatusChange={() => {}}
      id={id}
      {...props}
      ref={drop.setNodeRef}
    />
  );
}

export const DropzoneIntegration: StoryObj<DropzoneProps> = {
  name: "@dnd-kit/core",
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  render: ({ disabled }) => {
    const [parent, setParent] = useState<null | UniqueIdentifier>(null);
    const draggable = <Draggable id="draggable" label="Drag me in" />;
    const resetBtn = {
      label: "Reset",
      onClick: () => {
        setParent(null);
      },
    };
    return (
      <div className={classNames("flex-noreset", "flex-row", "gap-xl", "items-start", "w-xl")}>
        <DndContext
          onDragEnd={(args: DragEndEvent) => {
            setParent(args.over ? args.over.id : null);
          }}
        >
          <DndKitDropzone
            disabled={disabled}
            title={parent === "droppable" ? "Well done" : "Demo"}
            description="Drop the button in here."
            width="250px"
            button={parent === "droppable" ? resetBtn : undefined}
          />

          {!parent ? draggable : null}
        </DndContext>
      </div>
    );
  },
};
