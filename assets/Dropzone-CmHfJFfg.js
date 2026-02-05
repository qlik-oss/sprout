import{j as n,M as s,U as p,a as e}from"./iframe-BQJExRCF.js";import{useMDXComponents as i}from"./index-BiT2RrsF.js";import{DropzoneIntegration as a}from"./dnd-kit.stories-C7h4vPFw.js";import{S as d,P as l}from"./Dropzone.stories-Ckgy37-l.js";import{A as m}from"./AlertInline-DLvQ03s1.js";import"./preload-helper-PPVm8Dsz.js";import"./Dropzone-OEelj3gz.js";import"./useControl-XJuj1vyK.js";import"./classNames-B0wfWtWT.js";import"./sprout-DxA14K3u.js";import"./Button-C7-D-GN_.js";import"./icons-CzMI2h-K.js";import"./Button.module-C2ELNEem.js";import"./Badge-B9--3FkB.js";import"./Tooltip-CVFOQrqK.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DAgGzV0n.js";import"./useId-Drz8gmS2.js";import"./ProgressCircular-B4mHH4_Y.js";import"./useI18n-B99T9obj.js";import"./Upload-JDlmgr1C.js";import"./Icons-D8r5JLXA.js";import"./Add-CPO6AOva.js";import"./AiSparkles-ybqQooZU.js";import"./Next-BCf902gw.js";import"./Bookmark-DEDDSCCD.js";import"./Text-fjMciMda.js";import"./Close-VT6FC74F.js";import"./SortDescending-BWpZ9BF7.js";import"./Undo-B1PPlUQq.js";import"./Person-8oMSnh08.js";import"./Copy-ERSXBUQF.js";import"./Delete-CrLV--N3.js";import"./Filter-bb23MOEL.js";import"./Edit-Bc7r3LZJ.js";import"./Error-B95qseKK.js";import"./History-BSF-XiSG.js";import"./Search-B3R4dCNd.js";import"./Info-BfRROe8g.js";import"./Subtract-Ca-OouU7.js";import"./Map-pFYOI1fT.js";import"./NewTab-BMHt_Vx2.js";import"./Notification-BlWUDy4b.js";import"./Paste-Cd-nv27Q.js";import"./Warning-BB_ZpJQH.js";import"./Tenant-I_uTRlDg.js";import"./SeverityIcon-CI0epH8x.js";import"./IconButton-BEI3RZpW.js";function o(r){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:d}),`
`,n.jsx(p,{children:n.jsx(m,{severity:"warning",title:"Beta",children:n.jsx(t.p,{children:"This component is early and the spec will be updated soon."})})}),`
`,n.jsx(t.h1,{id:"dropzone",children:"Dropzone"}),`
`,n.jsx(t.p,{children:"Dropzones indicate for a user that a drag and drop interaction can be done. Dropzones act as a target for the drag and drop operation."}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { Dropzone } from "@qlik/sprout-css-react";
`})}),`
`,n.jsx(t.p,{children:"This component implement the UI of the dropzone which should look like this:"}),`
`,n.jsx(e,{of:l}),`
`,n.jsx(t.p,{children:"But you have to build the state management around it."}),`
`,n.jsxs(t.p,{children:["For this we encourage you to pick the library of your choice, like ",n.jsx(t.a,{href:"https://dndkit.com/",rel:"nofollow",children:"dnd-kit"})," or ",n.jsx(t.a,{href:"https://github.com/atlassian/react-beautiful-dnd",rel:"nofollow",children:"react-beautiful-dnd"}),"."]}),`
`,n.jsx(t.p,{children:"Here is a demo built using dnd-kit:"}),`
`,n.jsx(e,{of:a}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { type CSSProperties, useState } from "react";

import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import {
  Button,
  type ButtonProps,
  Dropzone,
  type DropzoneProps,
  classNames,
} from "@qlik/sprout-css-react";
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
