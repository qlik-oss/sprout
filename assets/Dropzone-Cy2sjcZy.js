import{j as n,M as p,U as s,a as o}from"./iframe-ZO3EpHUh.js";import{useMDXComponents as i}from"./index-BuQoUgKa.js";import{DropzoneIntegration as a}from"./dnd-kit.stories-B-62k_OH.js";import{S as d,P as m}from"./Dropzone.stories-JJvmJRM1.js";import{A as l}from"./AlertInline-DQse9J3b.js";import"./preload-helper-PPVm8Dsz.js";import"./Dropzone-DBQ2I554.js";import"./useControl-B2Bmxigf.js";import"./classNames--9J8KLdq.js";import"./sprout-JWClaPEx.js";import"./Button-DwNMLHHD.js";import"./Button.module-CmtyAZAy.js";import"./common-bQH3ZR03.js";import"./Badge-CIU99cFr.js";import"./Tooltip-CjNQJJZv.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-CTOYJqpW.js";import"./useId-peRdP77j.js";import"./ProgressCircular-Bbm1pjbl.js";import"./useI18n-CNj_Vmmx.js";import"./upload-n0dw6Lvi.js";import"./Icons-BZbU0tdy.js";import"./index-jgDKZr1Q.js";import"./add-DMALUOT2.js";import"./move-right-0KirwidR.js";import"./bookmark-9oZ8n8m5.js";import"./text-CcDxx1vh.js";import"./close-CFDHWYro.js";import"./sort-descending-DuwJD51Q.js";import"./undo-BAeS--dQ.js";import"./settings-DHuZ5QaZ.js";import"./copy-IFVMzOQk.js";import"./delete-B7ujbQKr.js";import"./documentation-BinzBdHI.js";import"./edit-BH8KrMyX.js";import"./error-Lg61ZlTl.js";import"./favorited-D41QBsE5.js";import"./generate-with-ai-D3Na992K.js";import"./subtract-1H6W3dfs.js";import"./hide-CTXMH0dL.js";import"./history-D4JWxRxn.js";import"./search-D8g2pafp.js";import"./info-DvsPKJb0.js";import"./person-Dece0dLK.js";import"./map-CMc8fJla.js";import"./more-vertical-D3wa18aZ.js";import"./move-left-CblN84mj.js";import"./new-tab-CfvnCP2A.js";import"./notification-BwvpND0x.js";import"./paste-DoYSMiJq.js";import"./show-Do692Dy4.js";import"./warning-LAozOqxS.js";import"./tenant-1icmyCcT.js";import"./SeverityIcon-DTHCWEmM.js";import"./IconButton-CM9e8KDm.js";function e(r){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:d}),`
`,n.jsx(s,{children:n.jsx(l,{severity:"warning",title:"Beta",children:n.jsx(t.p,{children:"This component is early and the spec will be updated soon."})})}),`
`,n.jsx(t.h1,{id:"dropzone",children:"Dropzone"}),`
`,n.jsx(t.p,{children:"Dropzones indicate for a user that a drag and drop interaction can be done. Dropzones act as a target for the drag and drop operation."}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { Dropzone } from "@qlik/sprout-react";
`})}),`
`,n.jsx(t.p,{children:"This component implement the UI of the dropzone which should look like this:"}),`
`,n.jsx(o,{of:m}),`
`,n.jsx(t.p,{children:"But you have to build the state management around it."}),`
`,n.jsxs(t.p,{children:["For this we encourage you to pick the library of your choice, like ",n.jsx(t.a,{href:"https://dndkit.com/",rel:"nofollow",children:"dnd-kit"})," or ",n.jsx(t.a,{href:"https://github.com/atlassian/react-beautiful-dnd",rel:"nofollow",children:"react-beautiful-dnd"}),"."]}),`
`,n.jsx(t.p,{children:"Here is a demo built using dnd-kit:"}),`
`,n.jsx(o,{of:a}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { type CSSProperties, useState } from "react";

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
`})})]})}function hn(r={}){const{wrapper:t}={...i(),...r.components};return t?n.jsx(t,{...r,children:n.jsx(e,{...r})}):e(r)}export{hn as default};
