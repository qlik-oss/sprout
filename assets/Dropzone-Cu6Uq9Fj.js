import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,c as r,l as i,n as a,s as o,v as s,yt as c}from"./iframe-B0xl5hqz.js";import{t as l}from"./mdx-react-shim-C5WuC5zb.js";import{DropzoneIntegration as u,t as d}from"./dnd-kit.stories-uyxwIX9E.js";import{Playground as f,n as p,t as m}from"./Dropzone.stories-BtD4Kb8i.js";function h(e){let n={a:`a`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o,{of:m}),`
`,(0,_.jsx)(r,{children:(0,_.jsx)(c,{severity:`warning`,title:`Beta`,children:(0,_.jsx)(n.p,{children:`This component is early and the spec will be updated soon.`})})}),`
`,(0,_.jsx)(n.h1,{id:`dropzone`,children:`Dropzone`}),`
`,(0,_.jsx)(n.p,{children:`Dropzones indicate for a user that a drag and drop interaction can be done. Dropzones act as a target for the drag and drop operation.`}),`
`,(0,_.jsx)(n.pre,{children:(0,_.jsx)(n.code,{className:`language-tsx`,children:`import { Dropzone } from "@qlik/sprout-react";
`})}),`
`,(0,_.jsx)(n.p,{children:`This component implement the UI of the dropzone which should look like this:`}),`
`,(0,_.jsx)(a,{of:f}),`
`,(0,_.jsx)(n.p,{children:`But you have to build the state management around it.`}),`
`,(0,_.jsxs)(n.p,{children:[`For this we encourage you to pick the library of your choice, like `,(0,_.jsx)(n.a,{href:`https://dndkit.com/`,rel:`nofollow`,children:`dnd-kit`}),` or `,(0,_.jsx)(n.a,{href:`https://github.com/atlassian/react-beautiful-dnd`,rel:`nofollow`,children:`react-beautiful-dnd`}),`.`]}),`
`,(0,_.jsx)(n.p,{children:`Here is a demo built using dnd-kit:`}),`
`,(0,_.jsx)(a,{of:u}),`
`,(0,_.jsx)(n.pre,{children:(0,_.jsx)(n.code,{className:`language-tsx`,children:`import { type CSSProperties, useState } from "react";

import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import {
  Button,
  type ButtonProps,
  Dropzone,
  type DropzoneProps,
  classNames,
} from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react";

function Draggable({ id, ...props }: ButtonProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id || "draggable",
  });
  const style: CSSProperties = {};
  if (transform) {
    style.transform = \`translate(\${transform.x}px, \${transform.y}px)\`;
  }
  return (
    <div ref={setNodeRef} style={{ ...style }} {...listeners} {...attributes}>
      <Button {...props} />
    </div>
  );
}

function DndKitDropzone(props: DropzoneProps) {
  const id = "droppable";
  const drop = useDroppable({
    disabled: props.disabled,
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
  render: ({ disabled }) => {
    const [parent, setParent] = useState(null);
    const draggable = <Draggable id="draggable" label="Drag me in" />;
    const resetBtn = {
      label: "Reset",
      onClick: () => {
        setParent(null);
      },
    };
    return (
      <div className={classNames("flex_noreset", "row", "gap_xl", "ai_start")}>
        <DndContext
          onDragEnd={(args: any) => {
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
`})})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=n(),l(),s(),i(),d(),p()}))();export{g as default};