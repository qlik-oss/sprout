import{j as n,M as s,U as p,a as e}from"./iframe-BThSoDrn.js";import{useMDXComponents as i}from"./index-dxYskzg-.js";import{DropzoneIntegration as a}from"./dnd-kit.stories-DueCz7zD.js";import{S as d,P as l}from"./Dropzone.stories-CFimiTtd.js";import{A as m}from"./AlertInline-CTeynTLS.js";import"./preload-helper-PPVm8Dsz.js";import"./Dropzone-D2huGAmQ.js";import"./useControl-BsRaFebD.js";import"./classNames-dIthk07I.js";import"./sprout-C7A3N88C.js";import"./Button-DPdoSvtR.js";import"./icons-m7QrAy0p.js";import"./Button.module-C2ELNEem.js";import"./Badge-BD7yv9SE.js";import"./Tooltip-g36jqBzQ.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DhaNE9oh.js";import"./useId-hgAQXGHZ.js";import"./ProgressCircular-3frmJwTX.js";import"./useI18n-DEBX20KE.js";import"./Upload-Bm4njtlo.js";import"./Icons-4m1Sc84h.js";import"./Add-BQFdkl2e.js";import"./AiSparkles-CmZ_srcr.js";import"./Next-1Q1bqM5p.js";import"./Bookmark-CVLzqLqN.js";import"./Text-6G8hA-h1.js";import"./Close-jEAlxUHo.js";import"./SortDescending-DRIoVd-M.js";import"./Undo-WuNimhT1.js";import"./Person-3cl35KlB.js";import"./Copy-jAGX-G5W.js";import"./Delete-BwyAIRQQ.js";import"./Filter-DiKfENlM.js";import"./Edit-BnWU-wtK.js";import"./Error-LWra2rFD.js";import"./History-BWwEcsLz.js";import"./Search-c6Wqd6yN.js";import"./Info-CD_iaTpZ.js";import"./Subtract-CRNAvJ2c.js";import"./Map-BSYcvYLi.js";import"./NewTab-RTkCp496.js";import"./Notification-D5_SHIKo.js";import"./Paste-CF9HfvBI.js";import"./Warning-BKQeZIO5.js";import"./Tenant-DemsO5Qk.js";import"./SeverityIcon-CDrAKmG1.js";import"./IconButton-BNf-P6Px.js";function o(r){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:d}),`
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
`})})]})}function pn(r={}){const{wrapper:t}={...i(),...r.components};return t?n.jsx(t,{...r,children:n.jsx(o,{...r})}):o(r)}export{pn as default};
