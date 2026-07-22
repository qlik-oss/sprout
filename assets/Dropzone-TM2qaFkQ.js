import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,l as n,m as r,n as i}from"./blocks-CCeqoOOO.js";import{Qt as a,t as o}from"./sprout-react-KA55n9ke.js";import{t as s}from"./jsx-runtime-Bq1bXGty.js";import{i as c}from"./react-BnCtKaSV.js";import{t as l}from"./mdx-react-shim-9RzcSRdq.js";import{DropzoneIntegration as u,t as d}from"./dnd-kit.stories-CbU_jY48.js";import{Playground as f,n as p,t as m}from"./Dropzone.stories-sgcx_GMU.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,...c(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(n,{of:m}),`
`,(0,_.jsx)(r,{children:(0,_.jsx)(a,{severity:`warning`,title:`Beta`,children:(0,_.jsx)(t.p,{children:`This component is early and the spec will be updated soon.`})})}),`
`,(0,_.jsx)(t.h1,{id:`dropzone`,children:`Dropzone`}),`
`,(0,_.jsx)(t.p,{children:`Dropzones indicate for a user that a drag and drop interaction can be done. Dropzones act as a target for the drag and drop operation.`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`import { Dropzone } from "@qlik/sprout-react";
`})}),`
`,(0,_.jsx)(t.p,{children:`This component implement the UI of the dropzone which should look like this:`}),`
`,(0,_.jsx)(i,{of:f}),`
`,(0,_.jsx)(t.p,{children:`But you have to build the state management around it.`}),`
`,(0,_.jsxs)(t.p,{children:[`For this we encourage you to pick the library of your choice, like `,(0,_.jsx)(t.a,{href:`https://dndkit.com/`,rel:`nofollow`,children:`dnd-kit`}),` or `,(0,_.jsx)(t.a,{href:`https://github.com/atlassian/react-beautiful-dnd`,rel:`nofollow`,children:`react-beautiful-dnd`}),`.`]}),`
`,(0,_.jsx)(t.p,{children:`Here is a demo built using dnd-kit:`}),`
`,(0,_.jsx)(i,{of:u}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`import { type CSSProperties, useState } from "react";

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
`})})]})}function g(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=s(),l(),o(),t(),d(),p()}))();export{g as default};