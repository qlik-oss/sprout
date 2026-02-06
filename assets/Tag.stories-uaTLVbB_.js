import{j as e}from"./iframe-itHhOQJ8.js";import{s as z,T as a}from"./Tag-D6Whh4y4.js";import{T as i}from"./TagGroup-B35wMlua.js";import{c as s}from"./classNames-8u_YGv6N.js";import{T as w}from"./Tooltip-CsCotLcm.js";import{B as l}from"./Badge-Fno8cZv5.js";import{A as B}from"./Avatar-BYndDEJW.js";function o({avatar:t,icon:T,text:v,badge:f,size:h,...j}){return e.jsx("a",{className:z.interactive,...j,children:e.jsx(a,{text:v,icon:T,avatar:t,badge:f,size:h})})}function r({avatar:t,icon:T,text:v,badge:f,size:h,...j}){return e.jsx("button",{className:z.interactive,type:"button",...j,children:e.jsx(a,{text:v,icon:T,avatar:t,badge:f,size:h})})}const k=[void 0,"s"],R=[void 0,"error","info","success","warning"],N={text:{control:{type:"text"},description:"The text content displayed in the tag.",table:{type:{summary:"string"}}},size:{control:{type:"select"},options:k,description:"Size of the tag. When undefined, the tag uses default size.",table:{defaultValue:{summary:"default"},type:{summary:"s | undefined"}}},color:{control:{type:"select"},options:R,description:"Color variant of the tag. When undefined, uses neutral color. Not available on TagLink and TagButton variants.",table:{defaultValue:{summary:"neutral"},type:{summary:"error | info | success | warning | undefined"}}},avatar:{control:!1,description:"Avatar component displayed at the start of the tag. See [Avatar](./?path=/docs/components-avatar--docs) for details.",table:{type:{summary:"ReactNode"}}},icon:{control:!1,description:"Icon component displayed at the start of the tag, before the text.",table:{type:{summary:"ReactNode"}}},badge:{control:!1,description:"Badge component or badge props displayed at the end of the tag. See [Badge](./?path=/docs/components-badge--docs) for details.",table:{type:{summary:"BadgeProps | ReactElement<typeof Badge>"}}},onRemove:{control:!1,description:"Callback function called when the remove button is clicked. When provided, a remove button is displayed. Not available on TagLink and TagButton variants.",table:{type:{summary:"() => void"}}},removeLabel:{control:{type:"text"},description:"Custom label for the remove button. Defaults to 'remove' from i18n translations.",table:{defaultValue:{summary:"'remove'"},type:{summary:"string"}}},id:{control:{type:"text"},description:"HTML id attribute for the tag element.",table:{type:{summary:"string"}}}},{fn:C}=__STORYBOOK_MODULE_TEST__,y={title:"Components/Tag",component:a,argTypes:N},c={chromatic:{disableSnapshot:!0}},n={render:t=>e.jsx("div",{className:s("flex","border-box","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{...t})}),args:{text:"Tag",onRemove:void 0},parameters:{...c}},d={render:t=>e.jsxs(i,{children:[e.jsx(a,{...t}),e.jsx(a,{...t}),e.jsx(a,{...t}),e.jsx(a,{...t})]}),args:n.args,parameters:{...c}},x={render:t=>e.jsx("div",{className:s("flex","border-box","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{...t})}),args:{text:"Tag",onRemove:C()},parameters:{...c}},g={render:t=>e.jsx("div",{className:s("flex","border-box","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{...t,avatar:e.jsx(B,{size:"s",text:"OC"})})}),args:{text:"Olivier Carnac"},parameters:c};function b(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_20897_69)",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.3 9.7L9 10H8V12H6V14H4V16H0V13L6.3 6.7C6.1 6.2 6 5.6 6 5C6 2.2 8.2 0 11 0C13.8 0 16 2.2 16 5C16 7.8 13.8 10 11 10C10.4 10 9.8 9.9 9.3 9.7ZM7 9H8.58579L9.05916 8.52663L9.67139 8.77152C10.0316 8.91559 10.5015 9 11 9C13.2477 9 15 7.24771 15 5C15 2.75228 13.2477 1 11 1C8.75229 1 7 2.75228 7 5C7 5.49845 7.08441 5.96843 7.22848 6.32861L7.47337 6.94084L1 13.4142V15H3V13H5V11H7V9ZM12 5C11.4667 5 11 4.53333 11 4C11 3.46667 11.4667 3 12 3C12.5333 3 13 3.46667 13 4C13 4.53333 12.5333 5 12 5Z",fill:"currentColor"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_20897_69",children:e.jsx("rect",{width:"16",height:"16",fill:"white"})})})]})}const p={render:t=>e.jsx("div",{className:s("flex","border-box","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{...t,icon:e.jsx(b,{})})}),args:{text:"ABCD-1234-EFGH-5678"},parameters:c},m={render:t=>e.jsx("div",{className:s("flex","border-box","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{...t,badge:e.jsx(l,{text:"14",variant:"alphanumeric"})})}),args:{text:"App"},parameters:c},u={render:()=>e.jsxs("div",{className:s("flex","flex-col","gap-s"),children:[e.jsxs("div",{className:s("flex","flex-col","gap-s"),children:[e.jsx("h2",{className:s("font-heading-m","text-default"),children:"Default"}),e.jsxs(i,{children:[e.jsx(a,{text:"Tag"}),e.jsx(a,{text:"Tag error",color:"error"}),e.jsx(a,{text:"Tag info",color:"info"}),e.jsx(a,{text:"Tag success",color:"success"}),e.jsx(w,{title:"Tooltip over tag",initialOpen:!0,children:e.jsx(a,{text:"Tag warning",color:"warning"})}),e.jsx(a,{text:"Tag text is really too long"})]}),e.jsxs(i,{children:[e.jsx(a,{text:"onRemove",onRemove:()=>{}}),e.jsx(a,{text:"onRemove error",color:"error",onRemove:()=>{}}),e.jsx(a,{text:"onRemove info",color:"info",onRemove:()=>{}}),e.jsx(a,{text:"onRemove success",color:"success",onRemove:()=>{}}),e.jsx(a,{text:"onRemove warning",color:"warning",onRemove:()=>{}})]}),e.jsxs(i,{children:[e.jsx(o,{href:"#",text:"TagLink"}),e.jsx(o,{href:"#",text:"TagLink","data-testid":"hover"}),e.jsx(o,{href:"#",text:"TagLink","data-testid":"active"}),e.jsx(o,{href:"#",text:"TagLink","data-testid":"focus"}),e.jsx(o,{href:"#",text:"TagLink","aria-disabled":"true"})]}),e.jsxs(i,{children:[e.jsx(r,{onClick:()=>{},text:"TagButton"}),e.jsx(r,{onClick:()=>{},text:"TagButton","data-testid":"hover"}),e.jsx(r,{onClick:()=>{},text:"TagButton","data-testid":"active"}),e.jsx(r,{onClick:()=>{},text:"TagButton","data-testid":"focus"}),e.jsx(r,{onClick:()=>{},text:"TagButton","aria-disabled":"true"})]}),e.jsx(a,{text:"With icon",icon:e.jsx(b,{})}),e.jsxs("div",{className:s("flex","flex-row","gap-s"),children:[e.jsx(a,{text:"With badge",badge:e.jsx(l,{text:"14",variant:"alphanumeric"})}),e.jsx(a,{text:"Apps",badge:{text:"14",variant:"alphanumeric",color:"info"}}),e.jsx(a,{text:"Boolean",color:"success",badge:{text:"true",variant:"alphanumeric",color:"success"}})]}),e.jsxs("div",{className:s("flex","flex-row","gap-s","w-xxs"),children:[e.jsx(a,{text:"With badge",badge:e.jsx(l,{text:"14",variant:"alphanumeric"})}),e.jsx(a,{text:"Apps",badge:{text:"14",variant:"alphanumeric",color:"info"}}),e.jsx(a,{text:"Boolean",color:"success",badge:{text:"true",variant:"alphanumeric",color:"success"}})]})]}),e.jsxs("div",{className:s("flex","flex-col","gap-s"),children:[e.jsx("h2",{className:s("font-heading-m","text-default"),children:"Small"}),e.jsxs(i,{children:[e.jsx(a,{size:"s",text:"Tag"}),e.jsx(a,{size:"s",text:"Tag error",color:"error"}),e.jsx(a,{size:"s",text:"Tag info",color:"info"}),e.jsx(a,{size:"s",text:"Tag success",color:"success"}),e.jsx(a,{size:"s",text:"Tag warning",color:"warning"})]}),e.jsxs(i,{children:[e.jsx(a,{size:"s",text:"onRemove",onRemove:()=>{}}),e.jsx(a,{size:"s",text:"onRemove error",color:"error",onRemove:()=>{}}),e.jsx(a,{size:"s",text:"onRemove info",color:"info",onRemove:()=>{}}),e.jsx(a,{size:"s",text:"onRemove success",color:"success",onRemove:()=>{}}),e.jsx(a,{size:"s",text:"onRemove warning",color:"warning",onRemove:()=>{}})]}),e.jsxs(i,{children:[e.jsx(o,{size:"s",href:"#",text:"TagLink"}),e.jsx(o,{size:"s",href:"#",text:"TagLink","data-testid":"hover"}),e.jsx(o,{size:"s",href:"#",text:"TagLink","data-testid":"active"}),e.jsx(o,{size:"s",href:"#",text:"TagLink","data-testid":"focus"}),e.jsx(o,{size:"s",href:"#",text:"TagLink","aria-disabled":"true"})]}),e.jsxs(i,{children:[e.jsx(r,{size:"s",onClick:()=>{},text:"TagButton"}),e.jsx(r,{size:"s",onClick:()=>{},text:"TagButton","data-testid":"hover"}),e.jsx(r,{size:"s",onClick:()=>{},text:"TagButton","data-testid":"active"}),e.jsx(r,{size:"s",onClick:()=>{},text:"TagButton","data-testid":"focus"}),e.jsx(r,{size:"s",onClick:()=>{},text:"TagButton","aria-disabled":"true"})]}),e.jsx(a,{size:"s",text:"With icon",icon:e.jsx(b,{})}),e.jsxs("div",{className:s("flex","flex-row","gap-s"),children:[e.jsx(a,{size:"s",text:"With badge",badge:e.jsx(l,{text:"14",variant:"alphanumeric"})}),e.jsx(a,{size:"s",text:"Apps",badge:{text:"14",variant:"alphanumeric",color:"info"}}),e.jsx(a,{size:"s",text:"Boolean",color:"success",badge:{text:"true",variant:"alphanumeric",color:"success"}})]}),e.jsxs("div",{className:s("flex","flex-row","gap-s","w-xxs"),children:[e.jsx(a,{size:"s",text:"With badge",badge:e.jsx(l,{text:"14",variant:"alphanumeric"})}),e.jsx(a,{size:"s",text:"Apps",badge:{text:"14",variant:"alphanumeric",color:"info"}}),e.jsx(a,{size:"s",text:"Boolean",color:"success",badge:{text:"true",variant:"alphanumeric",color:"success"}})]})]})]}),parameters:{pseudo:{hover:'[data-testid="hover"]',active:'[data-testid="active"]',focusVisible:'[data-testid="focus"]'},controls:{disable:!0}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (props: TagProps) => <div className={classNames("flex", "border-box", "p-m", "w-fit")} data-testid="wrapper">
      <Tag {...props} />
    </div>,
  args: {
    text: "Tag",
    onRemove: undefined
  },
  parameters: {
    ...disableSnap
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (props: TagProps) => <TagGroups>
      <Tag {...props} />
      <Tag {...props} />
      <Tag {...props} />
      <Tag {...props} />
    </TagGroups>,
  args: Playground.args,
  parameters: {
    ...disableSnap
  }
}`,...d.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (props: TagProps) => <div className={classNames("flex", "border-box", "p-m", "w-fit")} data-testid="wrapper">
      <Tag {...props} />
    </div>,
  args: {
    text: "Tag",
    onRemove: fn()
  },
  parameters: {
    ...disableSnap
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: TagProps) => <div className={classNames("flex", "border-box", "p-m", "w-fit")} data-testid="wrapper">
      <Tag {...args} avatar={<Avatar size="s" text="OC" />} />
    </div>,
  args: {
    text: "Olivier Carnac"
  },
  parameters: disableSnap
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: TagProps) => <div className={classNames("flex", "border-box", "p-m", "w-fit")} data-testid="wrapper">
      <Tag {...args} icon={<Icon />} />
    </div>,
  args: {
    text: "ABCD-1234-EFGH-5678"
  },
  parameters: disableSnap
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: TagProps) => <div className={classNames("flex", "border-box", "p-m", "w-fit")} data-testid="wrapper">
      <Tag {...args} badge={<Badge text="14" variant="alphanumeric" />} />
    </div>,
  args: {
    text: "App"
  },
  parameters: disableSnap
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "gap-s")}>
      <div className={classNames("flex", "flex-col", "gap-s")}>
        <h2 className={classNames("font-heading-m", "text-default")}>Default</h2>
        <TagGroups>
          <Tag text="Tag" />
          <Tag text="Tag error" color="error" />
          <Tag text="Tag info" color="info" />
          <Tag text="Tag success" color="success" />
          <Tooltip title="Tooltip over tag" initialOpen>
            <Tag text="Tag warning" color="warning" />
          </Tooltip>
          <Tag text="Tag text is really too long" />
        </TagGroups>
        <TagGroups>
          <Tag text="onRemove" onRemove={() => {}} />
          <Tag text="onRemove error" color="error" onRemove={() => {}} />
          <Tag text="onRemove info" color="info" onRemove={() => {}} />
          <Tag text="onRemove success" color="success" onRemove={() => {}} />
          <Tag text="onRemove warning" color="warning" onRemove={() => {}} />
        </TagGroups>
        <TagGroups>
          <TagLink href="#" text="TagLink" />
          <TagLink href="#" text="TagLink" data-testid="hover" />
          <TagLink href="#" text="TagLink" data-testid="active" />
          <TagLink href="#" text="TagLink" data-testid="focus" />
          <TagLink href="#" text="TagLink" aria-disabled="true" />
        </TagGroups>
        <TagGroups>
          <TagButton onClick={() => {}} text="TagButton" />
          <TagButton onClick={() => {}} text="TagButton" data-testid="hover" />
          <TagButton onClick={() => {}} text="TagButton" data-testid="active" />
          <TagButton onClick={() => {}} text="TagButton" data-testid="focus" />
          <TagButton onClick={() => {}} text="TagButton" aria-disabled="true" />
        </TagGroups>
        <Tag text="With icon" icon={<Icon />} />
        <div className={classNames("flex", "flex-row", "gap-s")}>
          <Tag text="With badge" badge={<Badge text="14" variant="alphanumeric" />} />
          <Tag text="Apps" badge={{
          text: "14",
          variant: "alphanumeric",
          color: "info"
        }} />
          <Tag text="Boolean" color="success" badge={{
          text: "true",
          variant: "alphanumeric",
          color: "success"
        }} />
        </div>
        <div className={classNames("flex", "flex-row", "gap-s", "w-xxs")}>
          <Tag text="With badge" badge={<Badge text="14" variant="alphanumeric" />} />
          <Tag text="Apps" badge={{
          text: "14",
          variant: "alphanumeric",
          color: "info"
        }} />
          <Tag text="Boolean" color="success" badge={{
          text: "true",
          variant: "alphanumeric",
          color: "success"
        }} />
        </div>
      </div>
      <div className={classNames("flex", "flex-col", "gap-s")}>
        <h2 className={classNames("font-heading-m", "text-default")}>Small</h2>
        <TagGroups>
          <Tag size="s" text="Tag" />
          <Tag size="s" text="Tag error" color="error" />
          <Tag size="s" text="Tag info" color="info" />
          <Tag size="s" text="Tag success" color="success" />
          <Tag size="s" text="Tag warning" color="warning" />
        </TagGroups>
        <TagGroups>
          <Tag size="s" text="onRemove" onRemove={() => {}} />
          <Tag size="s" text="onRemove error" color="error" onRemove={() => {}} />
          <Tag size="s" text="onRemove info" color="info" onRemove={() => {}} />
          <Tag size="s" text="onRemove success" color="success" onRemove={() => {}} />
          <Tag size="s" text="onRemove warning" color="warning" onRemove={() => {}} />
        </TagGroups>
        <TagGroups>
          <TagLink size="s" href="#" text="TagLink" />
          <TagLink size="s" href="#" text="TagLink" data-testid="hover" />
          <TagLink size="s" href="#" text="TagLink" data-testid="active" />
          <TagLink size="s" href="#" text="TagLink" data-testid="focus" />
          <TagLink size="s" href="#" text="TagLink" aria-disabled="true" />
        </TagGroups>
        <TagGroups>
          <TagButton size="s" onClick={() => {}} text="TagButton" />
          <TagButton size="s" onClick={() => {}} text="TagButton" data-testid="hover" />
          <TagButton size="s" onClick={() => {}} text="TagButton" data-testid="active" />
          <TagButton size="s" onClick={() => {}} text="TagButton" data-testid="focus" />
          <TagButton size="s" onClick={() => {}} text="TagButton" aria-disabled="true" />
        </TagGroups>
        <Tag size="s" text="With icon" icon={<Icon />} />
        <div className={classNames("flex", "flex-row", "gap-s")}>
          <Tag size="s" text="With badge" badge={<Badge text="14" variant="alphanumeric" />} />
          <Tag size="s" text="Apps" badge={{
          text: "14",
          variant: "alphanumeric",
          color: "info"
        }} />
          <Tag size="s" text="Boolean" color="success" badge={{
          text: "true",
          variant: "alphanumeric",
          color: "success"
        }} />
        </div>
        <div className={classNames("flex", "flex-row", "gap-s", "w-xxs")}>
          <Tag size="s" text="With badge" badge={<Badge text="14" variant="alphanumeric" />} />
          <Tag size="s" text="Apps" badge={{
          text: "14",
          variant: "alphanumeric",
          color: "info"
        }} />
          <Tag size="s" text="Boolean" color="success" badge={{
          text: "true",
          variant: "alphanumeric",
          color: "success"
        }} />
        </div>
      </div>
    </div>,
  parameters: {
    pseudo: {
      hover: '[data-testid="hover"]',
      active: '[data-testid="active"]',
      focusVisible: '[data-testid="focus"]'
    },
    controls: {
      disable: true
    }
  }
}`,...u.parameters?.docs?.source}}};const L=["Playground","GroupPlayground","Removable","WithAvatar","WithIcon","WithBadge","VisualTests"],V=Object.freeze(Object.defineProperty({__proto__:null,GroupPlayground:d,Playground:n,Removable:x,VisualTests:u,WithAvatar:g,WithBadge:m,WithIcon:p,__namedExportsOrder:L,default:y},Symbol.toStringTag,{value:"Module"}));export{n as P,V as S};
