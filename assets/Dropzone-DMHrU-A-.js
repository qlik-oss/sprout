import{j as n,M as s,U as p,a as e}from"./iframe-qjjAf_pH.js";import{useMDXComponents as i}from"./index-BAT7sozL.js";import{DropzoneIntegration as a}from"./dnd-kit.stories-BvAahQyy.js";import{S as d,P as l}from"./Dropzone.stories-DHHvMfLE.js";import{A as m}from"./AlertInline-BvFLYRiR.js";import"./preload-helper-PPVm8Dsz.js";import"./Dropzone-MlH9PBXt.js";import"./useControl-BNhHN6uq.js";import"./classNames-BVAN1ZTN.js";import"./sprout-Dvd5rbSu.js";import"./Button-cYFf5aNk.js";import"./icons-5qhXnzWI.js";import"./Button.module-C2ELNEem.js";import"./Badge-CvmwyUY9.js";import"./Tooltip-DvaPb59I.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CXS0BGZe.js";import"./useId-CYaNFQmj.js";import"./ProgressCircular-BSs6AknY.js";import"./useI18n-DleVkSsM.js";import"./Upload-CL9H6pmE.js";import"./Icons-Blxgg6XZ.js";import"./index-BFR_pwzS.js";import"./Add-DSLcMkbC.js";import"./Next-CxhzuVxv.js";import"./Bookmark-BNRO0aS9.js";import"./Text-B-zga3pP.js";import"./Close-Bp7FqXQR.js";import"./SortDescending-C3dNRiBL.js";import"./Undo-Dsdksioz.js";import"./Person-BIgNV-Ed.js";import"./Copy-BTa2KiQL.js";import"./Delete-BwmiKOHh.js";import"./Filter-hx7yX_Jo.js";import"./Edit-2pD94UJo.js";import"./Error-BrLGh9jC.js";import"./GenerateWithAi-f8_0IRx5.js";import"./History-atzo0mXc.js";import"./Search-DWresNZR.js";import"./Info-DxHQkaw3.js";import"./Subtract-CBZN_Qgc.js";import"./Map-in9fWS3M.js";import"./NewTab-CYZ0jhBQ.js";import"./Notification-Dtb2E571.js";import"./Paste-Qm0zT67Y.js";import"./Warning-CuGLZChC.js";import"./Tenant-oJlxY9e2.js";import"./SeverityIcon-DTXO1k7w.js";import"./IconButton-DKYxz8uh.js";function o(r){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:d}),`
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
