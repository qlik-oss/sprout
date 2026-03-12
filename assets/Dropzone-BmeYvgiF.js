import{j as n,M as p,U as s,a as o}from"./iframe-s7Iwh0oT.js";import{useMDXComponents as i}from"./index-3LxxidSz.js";import{DropzoneIntegration as a}from"./dnd-kit.stories-BwlBqPO2.js";import{S as d,P as m}from"./Dropzone.stories-Wfc5CdbL.js";import{A as l}from"./AlertInline-CMKa7hjh.js";import"./preload-helper-PPVm8Dsz.js";import"./Dropzone-BrHAYupD.js";import"./useControl-CS-bltOB.js";import"./classNames-BgUAGgdt.js";import"./sprout-Bvx94sbk.js";import"./Button-BLnymG9d.js";import"./Button.module-BSdpW5zV.js";import"./common-bQH3ZR03.js";import"./Badge-CjbZkwpT.js";import"./Tooltip-_uMFampe.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BoZIv2t8.js";import"./useId-C37lMSXz.js";import"./ProgressCircular-Dm76i-ei.js";import"./useI18n-DNSc_Xzu.js";import"./upload-B0Ew5N01.js";import"./Icons-CovZA8ho.js";import"./index-Cjzpg9K1.js";import"./add-phUaYqr2.js";import"./move-right-CjgOxL1h.js";import"./bookmark-Cey_2BFE.js";import"./text-DyI8tiuz.js";import"./close-Bbk9t1FU.js";import"./sort-descending-OBAQsHI9.js";import"./undo-BkTBorEJ.js";import"./settings-Dgdg0xWp.js";import"./copy-D5AkX6QI.js";import"./delete-cf8eEynv.js";import"./documentation-DPV8gHFU.js";import"./edit-PEgxvuNP.js";import"./error-DwsaS794.js";import"./favorited-BVK7D5qd.js";import"./generate-with-ai-BbRQXXpT.js";import"./subtract-nH5WHpwI.js";import"./hide-DKS27jyb.js";import"./history-DnP2rvJO.js";import"./search-yk4qOQEV.js";import"./info-DM6050LP.js";import"./person-Ds3mXeFF.js";import"./map-d8AgHSnc.js";import"./more-vertical-BEPBAxGJ.js";import"./move-left-DgChsxhn.js";import"./new-tab-WxcYfP2Y.js";import"./notification-DtKu0F84.js";import"./paste-DtW837rj.js";import"./show-OD0q4moC.js";import"./warning-CAFk7pxH.js";import"./tenant-DVh-K1xI.js";import"./SeverityIcon-Btk8aNwb.js";import"./IconButton-zwf3qVx9.js";function e(r){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:d}),`
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
