import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{W as t,c as n,n as r,s as i}from"./iframe-BRSAI4nO.js";import{n as a}from"./lib-EjdzwnHJ.js";import"./Icons-DoZ1c5fe.js";import{DropzoneIntegration as o}from"./dnd-kit.stories-C8lt1K5a.js";import{Playground as s,t as c}from"./Dropzone.stories-IbN62F0r.js";var l=e();function u(e){let u={a:`a`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,...a(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{of:c}),`
`,(0,l.jsx)(n,{children:(0,l.jsx)(t,{severity:`warning`,title:`Beta`,children:(0,l.jsx)(u.p,{children:`This component is early and the spec will be updated soon.`})})}),`
`,(0,l.jsx)(u.h1,{id:`dropzone`,children:`Dropzone`}),`
`,(0,l.jsx)(u.p,{children:`Dropzones indicate for a user that a drag and drop interaction can be done. Dropzones act as a target for the drag and drop operation.`}),`
`,(0,l.jsx)(u.pre,{children:(0,l.jsx)(u.code,{className:`language-tsx`,children:`import { Dropzone } from "@qlik/sprout-react";
`})}),`
`,(0,l.jsx)(u.p,{children:`This component implement the UI of the dropzone which should look like this:`}),`
`,(0,l.jsx)(r,{of:s}),`
`,(0,l.jsx)(u.p,{children:`But you have to build the state management around it.`}),`
`,(0,l.jsxs)(u.p,{children:[`For this we encourage you to pick the library of your choice, like `,(0,l.jsx)(u.a,{href:`https://dndkit.com/`,rel:`nofollow`,children:`dnd-kit`}),` or `,(0,l.jsx)(u.a,{href:`https://github.com/atlassian/react-beautiful-dnd`,rel:`nofollow`,children:`react-beautiful-dnd`}),`.`]}),`
`,(0,l.jsx)(u.p,{children:`Here is a demo built using dnd-kit:`}),`
`,(0,l.jsx)(r,{of:o}),`
`,(0,l.jsx)(u.pre,{children:(0,l.jsx)(u.code,{className:`language-tsx`,children:`import { type CSSProperties, useState } from "react";

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
`})})]})}function d(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}export{d as default};