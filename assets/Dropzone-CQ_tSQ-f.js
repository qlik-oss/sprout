import{j as n,M as p,U as s,a as o}from"./iframe-lMEil1TA.js";import{useMDXComponents as i}from"./index-Wkq3wkd2.js";import{DropzoneIntegration as a}from"./dnd-kit.stories-BZLQSVaV.js";import{S as d,P as m}from"./Dropzone.stories-4vzIDjnX.js";import{A as l}from"./AlertInline-Dsva9G2S.js";import"./preload-helper-PPVm8Dsz.js";import"./Dropzone-DBmfnzYG.js";import"./useControl-Crf27nxo.js";import"./classNames-B_Twdkca.js";import"./sprout-fe7_-ZbP.js";import"./Button-B3VC5XuI.js";import"./Button.module-ZjqCyrss.js";import"./common-bQH3ZR03.js";import"./Badge-BUdEAQ9u.js";import"./Tooltip-wsnfK-o5.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-ikaB6BKo.js";import"./useId-BL8g_bWL.js";import"./ProgressCircular-DzkpdMMq.js";import"./useI18n-CDksjSf0.js";import"./upload-531rT3Nn.js";import"./Icons-DXhpQYiC.js";import"./index-XQNqsQ5O.js";import"./add-OoYVhzw8.js";import"./move-right-CxgFVc5X.js";import"./bookmark-CXl6cost.js";import"./text-Dvq4klSt.js";import"./close-CrtKz3TF.js";import"./sort-descending-DBF7-f7_.js";import"./undo-DPBprsjr.js";import"./settings-oS6F6h_p.js";import"./copy-8HFCGFIv.js";import"./delete-CG-UgknF.js";import"./documentation-3Ki2NWn5.js";import"./edit-Bij8o67D.js";import"./error-D8ruDyrJ.js";import"./favorited-eFV-EpYm.js";import"./generate-with-ai-DxtmBI1k.js";import"./subtract-BFWMKw7W.js";import"./hide-J1VEVLcZ.js";import"./history-DsyI5OdF.js";import"./search-Cjd_t8Yd.js";import"./info-B4Qytw2Z.js";import"./person-6TmEe_Ks.js";import"./map-Bw_UfIsn.js";import"./more-vertical-3Ccbf6lb.js";import"./move-left-BJhvkpSj.js";import"./new-tab-CrWdziAn.js";import"./notification-BvurbYEj.js";import"./paste-CWtbLVgn.js";import"./show-CL2zF-Fm.js";import"./warning-X1qrbfM3.js";import"./tenant-DisbRmPu.js";import"./SeverityIcon-Dpf8kFNW.js";import"./IconButton-CuZnXk5P.js";function e(r){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:d}),`
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
