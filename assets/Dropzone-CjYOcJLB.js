import{j as n,M as s,U as p,a as e}from"./iframe-D-N3fK2j.js";import{useMDXComponents as i}from"./index-BvagnWFp.js";import{DropzoneIntegration as a}from"./dnd-kit.stories-9YK5wvBx.js";import{S as d,P as l}from"./Dropzone.stories-DMd1-WES.js";import{A as m}from"./AlertInline-DkGYkHAy.js";import"./preload-helper-PPVm8Dsz.js";import"./Dropzone-D6olJ07U.js";import"./useControl-U-WkQj2I.js";import"./classNames-CrSIhzis.js";import"./sprout-UDo5dA_z.js";import"./Button-BiiNVP7I.js";import"./icons-BEmnCRju.js";import"./Button.module-CmdpHks8.js";import"./Badge-sJnchsAW.js";import"./Tooltip-DaX3jRge.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-25h2pNOO.js";import"./useId-Bkl3iN6O.js";import"./ProgressCircular-CdUDfayh.js";import"./useI18n-ClHBar3-.js";import"./Upload-ClDjPMMt.js";import"./Icons-CGLv6dp6.js";import"./index-83n1lJXs.js";import"./Add-DHz0bRTt.js";import"./Next-DG_ldtCu.js";import"./Bookmark-Dg1w8U2T.js";import"./Text-Bpm64yqp.js";import"./Close-Clva93gw.js";import"./SortDescending-7Is3TCUG.js";import"./Undo-Jt2aGM_z.js";import"./Person-C2Clk1QX.js";import"./Copy-DXsZFzm1.js";import"./Delete-o_szjHTs.js";import"./Filter-DXj_kdvE.js";import"./Edit-69Qgo7Td.js";import"./Error-CZbJtLWx.js";import"./GenerateWithAi-B8C8zDdl.js";import"./History-CQ5KoKvO.js";import"./Search-BEJfw-uV.js";import"./Info-DKfyJpi1.js";import"./Subtract-DrooAXHe.js";import"./Map-DsyJdFaB.js";import"./NewTab-DIWrR844.js";import"./Notification-CjmHr3yB.js";import"./Paste-B-RxeU6b.js";import"./Warning-Dy5sqdbk.js";import"./Tenant-BSwEMVQe.js";import"./SeverityIcon-DDEIToER.js";import"./IconButton-Dg4ysz4Z.js";function o(r){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:d}),`
`,n.jsx(p,{children:n.jsx(m,{severity:"warning",title:"Beta",children:n.jsx(t.p,{children:"This component is early and the spec will be updated soon."})})}),`
`,n.jsx(t.h1,{id:"dropzone",children:"Dropzone"}),`
`,n.jsx(t.p,{children:"Dropzones indicate for a user that a drag and drop interaction can be done. Dropzones act as a target for the drag and drop operation."}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { Dropzone } from "@qlik/sprout-react";
`})}),`
`,n.jsx(t.p,{children:"This component implement the UI of the dropzone which should look like this:"}),`
`,n.jsx(e,{of:l}),`
`,n.jsx(t.p,{children:"But you have to build the state management around it."}),`
`,n.jsxs(t.p,{children:["For this we encourage you to pick the library of your choice, like ",n.jsx(t.a,{href:"https://dndkit.com/",rel:"nofollow",children:"dnd-kit"})," or ",n.jsx(t.a,{href:"https://github.com/atlassian/react-beautiful-dnd",rel:"nofollow",children:"react-beautiful-dnd"}),"."]}),`
`,n.jsx(t.p,{children:"Here is a demo built using dnd-kit:"}),`
`,n.jsx(e,{of:a}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { type CSSProperties, useState } from "react";

import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { Button, type ButtonProps, Dropzone, type DropzoneProps, classNames } from "@qlik/sprout-react";
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
`})})]})}function an(r={}){const{wrapper:t}={...i(),...r.components};return t?n.jsx(t,{...r,children:n.jsx(o,{...r})}):o(r)}export{an as default};
