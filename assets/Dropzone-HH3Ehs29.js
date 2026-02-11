import{j as n,M as s,U as p,a as e}from"./iframe-B-fqCePV.js";import{useMDXComponents as i}from"./index-DUhTx2ua.js";import{DropzoneIntegration as a}from"./dnd-kit.stories-BGJuW_v1.js";import{S as d,P as l}from"./Dropzone.stories-CjGk1Vzw.js";import{A as m}from"./AlertInline-ClMwEsXt.js";import"./preload-helper-PPVm8Dsz.js";import"./Dropzone-BoWbaE0U.js";import"./useControl-DDjCssuD.js";import"./classNames-BHQ9ieoZ.js";import"./sprout-DqOLOcsj.js";import"./Button-DgHw6K-5.js";import"./icons-BXG-SLO7.js";import"./Button.module-C2ELNEem.js";import"./Badge-BMzhzV_X.js";import"./Tooltip-DclK_iM1.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-BvkMXfLp.js";import"./useId-DU0uuk5t.js";import"./ProgressCircular-CeNa-NP_.js";import"./useI18n-uzhF32fT.js";import"./Upload-C4mriZRV.js";import"./Icons-oA9YLhAZ.js";import"./index-DvxuXuF-.js";import"./Add-CGQWcTMW.js";import"./Next-DCc_9i21.js";import"./Bookmark-C4WqJD7B.js";import"./Text-DVGjtA2-.js";import"./Close-R01cAXcl.js";import"./SortDescending-CfflnELi.js";import"./Undo-QmoTQvvJ.js";import"./Person-CQx_s9v3.js";import"./Copy-LDJw-O8w.js";import"./Delete-K_WChgQu.js";import"./Filter-_T9uGPBz.js";import"./Edit-yy_oh6IZ.js";import"./Error-BQGw3LDI.js";import"./GenerateWithAi-C8pDpEB1.js";import"./History-BlOzlZJ1.js";import"./Search-DSRoHruE.js";import"./Info-C4YmKgXN.js";import"./Subtract-DlC_wTL-.js";import"./Map-FzW2bSYj.js";import"./NewTab-DUTMcy5N.js";import"./Notification-DAAFk53n.js";import"./Paste-Bms19-bp.js";import"./Warning-GhyyIkan.js";import"./Tenant-wzlvguFI.js";import"./SeverityIcon-BvojxLgC.js";import"./IconButton-C1DotWTd.js";function o(r){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:d}),`
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
