import{n as e}from"./chunk-BneVvdWh.js";import{Cn as t,Fn as n,Un as r,Wn as i,Xt as a,jt as o,v as s,xt as c}from"./iframe-RiXBydPV.js";var l,u,d,f,p,m,h=e((()=>{r(),s(),o(),l=n(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`CSS/sprout-css-modules/patterns`},f={name:`disclosure-target / disclosure-trigger`,parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}},args:{onClick:u()},render:e=>(0,l.jsxs)(`div`,{className:i.classNames(`disclosure-trigger`,`focusable-target`,`flex`,`flex-row`,`items-center`,`justify-between`,`border-default`,`p-xs`,`w-m`,`bg-interactive`),children:[(0,l.jsx)(`button`,{type:`button`,...e,"aria-label":`label of the main action`,className:i.classNames(`focusable-trigger`)}),(0,l.jsx)(`p`,{children:`disclosure-target`}),(0,l.jsxs)(`div`,{className:i.classNames(`disclosure-target`,`flex`,`flex-row`,`gap-s`),children:[(0,l.jsx)(c,{label:`Copy`,icon:(0,l.jsx)(t,{height:void 0})}),(0,l.jsx)(c,{label:`Paste`,icon:(0,l.jsx)(a,{height:void 0})})]})]})},p={name:`focusable-target / focusable-trigger`,parameters:{chromatic:{disableSnapshot:!0}},args:{onClick:u()},render:e=>(0,l.jsxs)(`div`,{className:i.classNames(`flex`,`flex-col`,`items-start`,`justify-start`,`border-default`,`p-xs`,`w-m`,`bg-interactive`,`focusable-target`),children:[(0,l.jsx)(`button`,{type:`button`,"aria-label":`label of the main action`,...e,className:i.classNames(`focusable-trigger`)}),(0,l.jsxs)(`p`,{children:[(0,l.jsx)(`code`,{children:`focusable-target`}),` goes in the parent, the container you want to take focus`]}),(0,l.jsxs)(`p`,{children:[(0,l.jsx)(`code`,{children:`focusable-trigger`}),` goes to either a `,(0,l.jsx)(`code`,{children:`button`}),` or a`,` `,(0,l.jsx)(`code`,{children:`a`}),`that will receive focus and provide the interaction`]})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "disclosure-target / disclosure-trigger",
  parameters: {
    controls: {
      disable: true
    },
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    onClick: fn()
  },
  render: props => <div className={sprout.classNames("disclosure-trigger", "focusable-target", "flex", "flex-row", "items-center", "justify-between", "border-default", "p-xs", "w-m", "bg-interactive")}>
      <button type="button" {...props} aria-label="label of the main action" className={sprout.classNames("focusable-trigger")} />
      <p>disclosure-target</p>
      <div className={sprout.classNames("disclosure-target", "flex", "flex-row", "gap-s")}>
        <IconButton label="Copy" icon={<CopyIcon height={undefined} />} />
        <IconButton label="Paste" icon={<PasteIcon height={undefined} />} />
      </div>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "focusable-target / focusable-trigger",
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    onClick: fn()
  },
  render: props => <div className={sprout.classNames("flex", "flex-col", "items-start", "justify-start", "border-default", "p-xs", "w-m", "bg-interactive", "focusable-target")}>
      <button type="button" aria-label="label of the main action" {...props} className={sprout.classNames("focusable-trigger")} />
      <p>
        <code>focusable-target</code> goes in the parent, the container you want
        to take focus
      </p>
      <p>
        <code>focusable-trigger</code> goes to either a <code>button</code> or a{" "}
        <code>a</code>
        that will receive focus and provide the interaction
      </p>
    </div>
}`,...p.parameters?.docs?.source}}},m=[`ProgressiveDisclosure`,`FocusableTarget`]}));h();export{p as FocusableTarget,f as ProgressiveDisclosure,m as __namedExportsOrder,d as default,h as t};