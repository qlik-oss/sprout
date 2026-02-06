import{j as n,M as s,U as p,a as e}from"./iframe-itHhOQJ8.js";import{useMDXComponents as i}from"./index-M6OOd87p.js";import{DropzoneIntegration as a}from"./dnd-kit.stories-CqBuZ9bB.js";import{S as d,P as l}from"./Dropzone.stories-ETaLvFPi.js";import{A as m}from"./AlertInline-v7KfNwSs.js";import"./preload-helper-PPVm8Dsz.js";import"./Dropzone-CiuPM7mP.js";import"./useControl-tJx49zVQ.js";import"./classNames-8u_YGv6N.js";import"./sprout-5bk7oM4L.js";import"./Button-D1L5V1zp.js";import"./icons-ByJhQmwX.js";import"./Button.module-C2ELNEem.js";import"./Badge-Fno8cZv5.js";import"./Tooltip-CsCotLcm.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DcDxQLMY.js";import"./useId-B9bqBKq5.js";import"./ProgressCircular-DxTh7cF9.js";import"./useI18n-DI5kaiCu.js";import"./Upload-Dc2Rb3D-.js";import"./Icons-ShlI4R_X.js";import"./index-B_CWJT9D.js";import"./Add-sGTd4JLT.js";import"./Next-Cf3Uq2yv.js";import"./Bookmark-B-8xOmKH.js";import"./Text-CLPV3Ayx.js";import"./Close-DeQxVhkZ.js";import"./SortDescending-BgGAHRpl.js";import"./Undo-CedmJl7g.js";import"./Person-CY2HVuRl.js";import"./Copy-BZIqKWxc.js";import"./Delete-BVSKNF4j.js";import"./Filter-Mkk8kKEU.js";import"./Edit-C4Gy6c5s.js";import"./Error-CgMRcq7x.js";import"./GenerateWithAi-CzXUyJWm.js";import"./History-BANgh6BZ.js";import"./Search-Cgypvig1.js";import"./Info-CR8Ra2BB.js";import"./Subtract-BguCuCMl.js";import"./Map-BgJ3dtI2.js";import"./NewTab-CD_BiguK.js";import"./Notification-CB15fS1l.js";import"./Paste-A6OS6xze.js";import"./Warning-Wt3nbj6y.js";import"./Tenant-B8iNkMMj.js";import"./SeverityIcon-B8lRHlGc.js";import"./IconButton-BFY56UPS.js";function o(r){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:d}),`
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
