import{j as n,M as s,U as p,a as e}from"./iframe-B4vjk2_C.js";import{useMDXComponents as i}from"./index-4mXTpVuF.js";import{DropzoneIntegration as a}from"./dnd-kit.stories-CQaJlRCO.js";import{S as d,P as l}from"./Dropzone.stories-Bsxi1XBq.js";import{A as m}from"./AlertInline-DKFV__in.js";import"./preload-helper-PPVm8Dsz.js";import"./Dropzone-DY11-MWK.js";import"./useControl-DPltlHoP.js";import"./classNames-DaRWzB8T.js";import"./sprout-DTAeqvbL.js";import"./Button-COVTwlCl.js";import"./icons-BjYZgjFf.js";import"./Button.module-C2ELNEem.js";import"./Badge-Coha5yr6.js";import"./Tooltip-D1n48xKC.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-D3fq_iUv.js";import"./useId-DsPr7Fl4.js";import"./ProgressCircular-CXDJvuy2.js";import"./useI18n-DbSMZiRF.js";import"./Upload-CPekzzW9.js";import"./Icons-BmPwnPxU.js";import"./index-Z8VovJW6.js";import"./Add-CrXyYGj8.js";import"./AiSparkles-Dl0R-qK2.js";import"./Next-D7BL29gd.js";import"./Bookmark-CibNrEfK.js";import"./Text-VlP5SB55.js";import"./Close-CzhTZSOO.js";import"./SortDescending-B7jfx8Af.js";import"./Undo-9QyGmJ12.js";import"./Person-Dcr2ZAg5.js";import"./Copy-o7IORLfG.js";import"./Delete-B3An4l3N.js";import"./Filter-B97z2p0g.js";import"./Edit-DrJZ1rCf.js";import"./Error-aRqdswEO.js";import"./History-C5KmixAH.js";import"./Search-KjZbxp4C.js";import"./Info-qvjQZ4-p.js";import"./Subtract-CiGs9Rom.js";import"./Map-CaMFTBLm.js";import"./NewTab-CGCvqCB9.js";import"./Notification-Bvs5iQDr.js";import"./Paste-DdDmevxd.js";import"./Warning-mmXjUrwg.js";import"./Tenant-pz9GTM4b.js";import"./SeverityIcon-BXOn61Fa.js";import"./IconButton-Ba8Tcb-S.js";function o(r){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:d}),`
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
