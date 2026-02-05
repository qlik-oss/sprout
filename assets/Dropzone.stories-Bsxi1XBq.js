import{j as e}from"./iframe-B4vjk2_C.js";import{F as t}from"./Upload-CPekzzW9.js";import{I as d,a as c}from"./Icons-BmPwnPxU.js";import{D as o}from"./Dropzone-DY11-MWK.js";import{A as r}from"./AlertInline-DKFV__in.js";import{c as a}from"./classNames-DaRWzB8T.js";import{B as p}from"./Button-COVTwlCl.js";const u={disabled:{control:"boolean",description:"Disables the dropzone and prevents user interaction.",table:{type:{summary:"boolean"}}},status:{control:"select",description:"The current status of the dropzone.",options:[void 0,"dragging","hover"],table:{type:{summary:'undefined | "dragging" | "hover"'}}},statusDefault:{control:"select",description:"The default status of the dropzone when not controlled.",options:[void 0,"dragging","hover"],table:{type:{summary:'undefined | "dragging" | "hover"'}}},onStatusChange:{control:!1,action:"statusChanged",description:"Callback function when the status changes.",table:{type:{summary:"(status: 'dragging' | 'hover') => void"}}},icon:{control:"select",description:"The icon displayed in the dropzone.",options:c,mapping:d,table:{type:{summary:"ReactNode | undefined"}}},title:{control:"text",description:"The title displayed in the dropzone.",table:{type:{summary:"ReactNode"}}},description:{control:"text",description:"The description displayed in the dropzone.",table:{type:{summary:"ReactNode"}}},button:{control:"object",description:"Configuration for the primary button in the dropzone.",table:{type:{summary:"Partial<ButtonProps>"}}},secondaryButton:{control:"object",description:"Configuration for the secondary button in the dropzone.",table:{type:{summary:"Partial<ButtonProps>"}}},onDragOver:{control:!1,description:"Callback function when a drag event occurs over the dropzone.",table:{type:{summary:"(event: DragEvent) => void"}}}},f={title:"Components/Dropzone",component:o,argTypes:u,args:{icon:"Upload",title:"Upload file",description:"Drop file to upload or browse your device.",button:{label:"Browse",variant:"primary"},secondaryButton:{label:"Attach from library",variant:"default"}}},i={parameters:{chromatic:{disableSnapshot:!0}},render:({icon:s,...n})=>e.jsxs("div",{className:a("flex","flex-col","gap-xl"),children:[e.jsx("div",{className:a("w-s"),children:e.jsx(r,{severity:"warning",title:"Beta",children:"This component is early and the spec will be updated soon. If you use it you engage to update it without breaking changes."})}),e.jsxs("div",{className:a("flex-noreset","flex-row","gap-xl","items-start"),children:[e.jsx("div",{className:a("w-xxs"),children:e.jsx(o,{...n,icon:s?e.jsx(t,{}):null,children:e.jsx(r,{severity:"error",title:"Status",children:"You should use this to manage state"})})}),e.jsx(p,{variant:"quiet",label:"Draggable",draggable:!0})]})]})},l={render:()=>e.jsxs("div",{className:a("flex","flex-row","gap-xl","w-xxl"),children:[e.jsxs("div",{className:a("flex","flex-col","gap-xl","w-s"),children:[e.jsx(o,{}),e.jsx(o,{icon:e.jsx(t,{})}),e.jsx(o,{icon:e.jsx(t,{}),title:"Upload file"}),e.jsx(o,{icon:e.jsx(t,{}),title:"Upload file",description:"Drop file to upload or browse your device."}),e.jsx(o,{icon:e.jsx(t,{}),title:"Upload file",description:"Drop file to upload or browse your device.",button:{label:"Browse",variant:"primary"},secondaryButton:{label:"Attach from library",variant:"default"}}),e.jsx(o,{icon:e.jsx(t,{}),title:"Upload file",description:"Drop file to upload or browse your device.",button:{label:"Browse",variant:"primary"},secondaryButton:{label:"Attach from library",variant:"default"},children:e.jsx(r,{severity:"error",title:"Status",children:"You should use this to manage state"})})]}),e.jsxs("div",{className:a("flex","flex-col","gap-xl","w-s"),children:[e.jsx(o,{disabled:!0}),e.jsx(o,{disabled:!0,icon:e.jsx(t,{})}),e.jsx(o,{disabled:!0,icon:e.jsx(t,{}),title:"Upload file"}),e.jsx(o,{disabled:!0,icon:e.jsx(t,{}),title:"Upload file",description:"Drop file to upload or browse your device."}),e.jsx(o,{disabled:!0,icon:e.jsx(t,{}),title:"Upload file",description:"Drop file to upload or browse your device.",button:{label:"Browse",variant:"primary"},secondaryButton:{label:"Attach from library",variant:"default"}}),e.jsx(o,{disabled:!0,icon:e.jsx(t,{}),title:"Upload file",description:"Drop file to upload or browse your device.",button:{label:"Browse",variant:"primary"},secondaryButton:{label:"Attach from library",variant:"default"},children:e.jsx(r,{severity:"error",title:"Status",children:"You should use this to manage state"})})]}),e.jsxs("div",{className:a("flex","flex-col","gap-xl","w-s"),children:[e.jsx(o,{"data-testid":"focusVisible"}),e.jsx(o,{"data-testid":"focusVisible",icon:e.jsx(t,{})}),e.jsx(o,{"data-testid":"focusVisible",icon:e.jsx(t,{}),title:"Upload file"}),e.jsx(o,{"data-testid":"focusVisible",icon:e.jsx(t,{}),title:"Upload file",description:"Drop file to upload or browse your device."}),e.jsx(o,{"data-testid":"focusVisible",icon:e.jsx(t,{}),title:"Upload file",description:"Drop file to upload or browse your device.",button:{label:"Browse",variant:"primary"},secondaryButton:{label:"Attach from library",variant:"default"}}),e.jsx(o,{"data-testid":"focusVisible",icon:e.jsx(t,{}),title:"Upload file",description:"Drop file to upload or browse your device.",button:{label:"Browse",variant:"primary"},secondaryButton:{label:"Attach from library",variant:"default"},children:e.jsx(r,{severity:"error",title:"Status",children:"You should use this to manage state"})})]}),e.jsxs("div",{className:a("flex","flex-col","gap-xl","w-s"),children:[e.jsx(o,{status:"dragging"}),e.jsx(o,{status:"dragging",icon:e.jsx(t,{})}),e.jsx(o,{status:"dragging",icon:e.jsx(t,{}),title:"Upload file"}),e.jsx(o,{status:"dragging",icon:e.jsx(t,{}),title:"Upload file",description:"Drop file to upload or browse your device."}),e.jsx(o,{status:"dragging",icon:e.jsx(t,{}),title:"Upload file",description:"Drop file to upload or browse your device.",button:{label:"Browse",variant:"primary"},secondaryButton:{label:"Attach from library",variant:"default"}}),e.jsx(o,{status:"dragging",icon:e.jsx(t,{}),title:"Upload file",description:"Drop file to upload or browse your device.",button:{label:"Browse",variant:"primary"},secondaryButton:{label:"Attach from library",variant:"default"},children:e.jsx(r,{severity:"error",title:"Status",children:"You should use this to manage state"})})]})]}),parameters:{pseudo:{focusVisible:'[data-testid="focusVisible"]'}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: ({
    icon,
    ...args
  }: DropzoneProps) => <div className={classNames("flex", "flex-col", "gap-xl")}>
      <div className={classNames("w-s")}>
        <AlertInline severity="warning" title="Beta">
          This component is early and the spec will be updated soon. If you use it you engage to update it without
          breaking changes.
        </AlertInline>
      </div>
      <div className={classNames("flex-noreset", "flex-row", "gap-xl", "items-start")}>
        <div className={classNames("w-xxs")}>
          <Dropzone {...args} icon={icon ? <UploadIcon /> : null}>
            <AlertInline severity="error" title="Status">
              You should use this to manage state
            </AlertInline>
          </Dropzone>
        </div>
        <Button variant="quiet" label="Draggable" draggable />
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-row", "gap-xl", "w-xxl")}>
      <div className={classNames("flex", "flex-col", "gap-xl", "w-s")}>
        <Dropzone />
        <Dropzone icon={<UploadIcon />} />
        <Dropzone icon={<UploadIcon />} title="Upload file" />
        <Dropzone icon={<UploadIcon />} title="Upload file" description="Drop file to upload or browse your device." />
        <Dropzone icon={<UploadIcon />} title="Upload file" description="Drop file to upload or browse your device." button={{
        label: "Browse",
        variant: "primary"
      }} secondaryButton={{
        label: "Attach from library",
        variant: "default"
      }} />
        <Dropzone icon={<UploadIcon />} title="Upload file" description="Drop file to upload or browse your device." button={{
        label: "Browse",
        variant: "primary"
      }} secondaryButton={{
        label: "Attach from library",
        variant: "default"
      }}>
          <AlertInline severity="error" title="Status">
            You should use this to manage state
          </AlertInline>
        </Dropzone>
      </div>
      <div className={classNames("flex", "flex-col", "gap-xl", "w-s")}>
        <Dropzone disabled />
        <Dropzone disabled icon={<UploadIcon />} />
        <Dropzone disabled icon={<UploadIcon />} title="Upload file" />
        <Dropzone disabled icon={<UploadIcon />} title="Upload file" description="Drop file to upload or browse your device." />
        <Dropzone disabled icon={<UploadIcon />} title="Upload file" description="Drop file to upload or browse your device." button={{
        label: "Browse",
        variant: "primary"
      }} secondaryButton={{
        label: "Attach from library",
        variant: "default"
      }} />
        <Dropzone disabled icon={<UploadIcon />} title="Upload file" description="Drop file to upload or browse your device." button={{
        label: "Browse",
        variant: "primary"
      }} secondaryButton={{
        label: "Attach from library",
        variant: "default"
      }}>
          <AlertInline severity="error" title="Status">
            You should use this to manage state
          </AlertInline>
        </Dropzone>
      </div>
      <div className={classNames("flex", "flex-col", "gap-xl", "w-s")}>
        <Dropzone data-testid="focusVisible" />
        <Dropzone data-testid="focusVisible" icon={<UploadIcon />} />
        <Dropzone data-testid="focusVisible" icon={<UploadIcon />} title="Upload file" />
        <Dropzone data-testid="focusVisible" icon={<UploadIcon />} title="Upload file" description="Drop file to upload or browse your device." />
        <Dropzone data-testid="focusVisible" icon={<UploadIcon />} title="Upload file" description="Drop file to upload or browse your device." button={{
        label: "Browse",
        variant: "primary"
      }} secondaryButton={{
        label: "Attach from library",
        variant: "default"
      }} />
        <Dropzone data-testid="focusVisible" icon={<UploadIcon />} title="Upload file" description="Drop file to upload or browse your device." button={{
        label: "Browse",
        variant: "primary"
      }} secondaryButton={{
        label: "Attach from library",
        variant: "default"
      }}>
          <AlertInline severity="error" title="Status">
            You should use this to manage state
          </AlertInline>
        </Dropzone>
      </div>
      <div className={classNames("flex", "flex-col", "gap-xl", "w-s")}>
        <Dropzone status="dragging" />
        <Dropzone status="dragging" icon={<UploadIcon />} />
        <Dropzone status="dragging" icon={<UploadIcon />} title="Upload file" />
        <Dropzone status="dragging" icon={<UploadIcon />} title="Upload file" description="Drop file to upload or browse your device." />
        <Dropzone status="dragging" icon={<UploadIcon />} title="Upload file" description="Drop file to upload or browse your device." button={{
        label: "Browse",
        variant: "primary"
      }} secondaryButton={{
        label: "Attach from library",
        variant: "default"
      }} />
        <Dropzone status="dragging" icon={<UploadIcon />} title="Upload file" description="Drop file to upload or browse your device." button={{
        label: "Browse",
        variant: "primary"
      }} secondaryButton={{
        label: "Attach from library",
        variant: "default"
      }}>
          <AlertInline severity="error" title="Status">
            You should use this to manage state
          </AlertInline>
        </Dropzone>
      </div>
    </div>,
  parameters: {
    pseudo: {
      focusVisible: '[data-testid="focusVisible"]'
    }
  }
}`,...l.parameters?.docs?.source}}};const b=["Playground","VisualTest"],j=Object.freeze(Object.defineProperty({__proto__:null,Playground:i,VisualTest:l,__namedExportsOrder:b,default:f},Symbol.toStringTag,{value:"Module"}));export{i as P,j as S};
