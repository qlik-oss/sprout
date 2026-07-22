import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./sprout-CTw7vb1V.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{Ni as i,O as a,kn as o,kr as s,qn as c}from"./iframe-UwarwtgL.js";var l,u,d,f,p,m,h=e((()=>{n(),a(),c(),l=r(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`CSS/sprout-css-modules/patterns`},f={name:`disclosure-target / disclosure-trigger`,parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}},args:{onClick:u()},render:e=>(0,l.jsxs)(`div`,{className:t.classNames(`disclosure-trigger`,`focusable-target`,`flex`,`flex-row`,`items-center`,`justify-between`,`border-default`,`p-xs`,`w-m`,`bg-interactive`),children:[(0,l.jsx)(`button`,{type:`button`,...e,"aria-label":`label of the main action`,className:t.classNames(`focusable-trigger`)}),(0,l.jsx)(`p`,{children:`disclosure-target`}),(0,l.jsxs)(`div`,{className:t.classNames(`disclosure-target`,`flex`,`flex-row`,`gap-s`),children:[(0,l.jsx)(o,{label:`Copy`,icon:(0,l.jsx)(i,{})}),(0,l.jsx)(o,{label:`Paste`,icon:(0,l.jsx)(s,{})})]})]})},p={name:`focusable-target / focusable-trigger`,parameters:{chromatic:{disableSnapshot:!0}},args:{onClick:u()},render:e=>(0,l.jsxs)(`div`,{className:t.classNames(`flex`,`flex-col`,`items-start`,`justify-start`,`border-default`,`p-xs`,`w-m`,`bg-interactive`,`focusable-target`),children:[(0,l.jsx)(`button`,{type:`button`,"aria-label":`label of the main action`,...e,className:t.classNames(`focusable-trigger`)}),(0,l.jsxs)(`p`,{children:[(0,l.jsx)(`code`,{children:`focusable-target`}),` goes in the parent, the container you want to take focus`]}),(0,l.jsxs)(`p`,{children:[(0,l.jsx)(`code`,{children:`focusable-trigger`}),` goes to either a `,(0,l.jsx)(`code`,{children:`button`}),` or a`,` `,(0,l.jsx)(`code`,{children:`a`}),`that will receive focus and provide the interaction`]})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
        <IconButton label="Copy" icon={<CopyIcon />} />
        <IconButton label="Paste" icon={<PasteIcon />} />
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