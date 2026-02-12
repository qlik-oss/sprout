import{j as n,M as s,U as p,a as e}from"./iframe-B9QkJTIx.js";import{useMDXComponents as i}from"./index-Ka0iXB8t.js";import{DropzoneIntegration as a}from"./dnd-kit.stories-CiWZZEgm.js";import{S as d,P as l}from"./Dropzone.stories-D1gfB59t.js";import{A as m}from"./AlertInline-CTpWXRpk.js";import"./preload-helper-PPVm8Dsz.js";import"./Dropzone-zJCugNlR.js";import"./useControl-CYR4PP7j.js";import"./classNames-CL7ibyjj.js";import"./sprout-DgR7PjaR.js";import"./Button-DJuasLWt.js";import"./icons-Duy9VSzr.js";import"./Button.module-C2ELNEem.js";import"./Badge--_cWWvgS.js";import"./Tooltip-Csm9nS2W.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-Dge73wkB.js";import"./useId-HR4iyljw.js";import"./ProgressCircular-CftNoQ2F.js";import"./useI18n-CoLWfcqJ.js";import"./Upload-DjMqRod7.js";import"./Icons-qa2VzuXs.js";import"./index-CiVzO2ac.js";import"./Add-BjVpk_Pb.js";import"./Next-DxRLu1Wn.js";import"./Bookmark-CJMWsvxd.js";import"./Text-CFyCRCFc.js";import"./Close-ajP2gTu5.js";import"./SortDescending-CLGWMbYc.js";import"./Undo-DzDelDAE.js";import"./Person-B_HiAQwp.js";import"./Copy-CYZlhrEr.js";import"./Delete-DvtIirUL.js";import"./Filter-CLC5itR3.js";import"./Edit-BObi6k7U.js";import"./Error-Blwva2SQ.js";import"./GenerateWithAi-DIR2TiqE.js";import"./History-EyRsG5aa.js";import"./Search-DTGA04Xo.js";import"./Info-BWEZF-KM.js";import"./Subtract-BWidOSSU.js";import"./Map-D73tVC2W.js";import"./NewTab-BMd_bij_.js";import"./Notification-B0ihougB.js";import"./Paste-Bz8M9Fm4.js";import"./Warning-B4wA6Xoa.js";import"./Tenant-YIqGolFt.js";import"./SeverityIcon-CKoJLroj.js";import"./IconButton-CrQ3EA5C.js";function o(r){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:d}),`
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
