import{j as n,M as s,U as p,a as e}from"./iframe-B4-nXs83.js";import{useMDXComponents as i}from"./index-BqykRLmO.js";import{DropzoneIntegration as a}from"./dnd-kit.stories-DnPwReRM.js";import{S as d,P as l}from"./Dropzone.stories-CycLi6vk.js";import{A as m}from"./AlertInline-DlnHae0G.js";import"./preload-helper-PPVm8Dsz.js";import"./Dropzone-D0lTVF_d.js";import"./useControl-DdRfwf_0.js";import"./classNames-eIMwhIDK.js";import"./sprout-SOoz1jzb.js";import"./Button-Cv6yFaKa.js";import"./icons-DuVV-LnW.js";import"./Button.module-C2ELNEem.js";import"./Badge-DvRPOsa9.js";import"./Tooltip-BmEIvhna.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CKYJ27w7.js";import"./useId-D71ehFqY.js";import"./ProgressCircular-CVxkPa9h.js";import"./useI18n-peGtGOOS.js";import"./Upload-BRvcNbMW.js";import"./Icons-DeygH5Zz.js";import"./index-DD81b0jm.js";import"./Add-BPhJi-H4.js";import"./Next-BDMe8uha.js";import"./Bookmark-DcjvKNmY.js";import"./Text-dLWgk66T.js";import"./Close-BgZ1uSF_.js";import"./SortDescending-CKWll_c0.js";import"./Undo-DDEyeJBa.js";import"./Person-BtJ6dcuR.js";import"./Copy-DgfNcGoS.js";import"./Delete-D5Va6LI1.js";import"./Filter-DrTBmiDb.js";import"./Edit-DzJTkpRk.js";import"./Error-D7GK58M_.js";import"./GenerateWithAi-s4i5IFD7.js";import"./History-rKaZ75zu.js";import"./Search-Ci5Kqw6S.js";import"./Info-DTuI-Of7.js";import"./Subtract-5iLtEsER.js";import"./Map-D3Po8JT9.js";import"./NewTab-Bx55GzRW.js";import"./Notification-BWSivEeO.js";import"./Paste-bE7IXLRc.js";import"./Warning-BAtVE0v3.js";import"./Tenant-Y0aD2fSL.js";import"./SeverityIcon-B1n60lm3.js";import"./IconButton-D-KEKYAI.js";function o(r){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:d}),`
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
