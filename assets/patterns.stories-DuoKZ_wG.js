import"./react-sE-G6KV_.js";import{t as e}from"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{K as n,Tt as r,tn as i}from"./iframe-DTk7xy32.js";var a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`CSS/sprout-css-modules/patterns`},c={name:`disclosure-target / disclosure-trigger`,parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}},args:{onClick:o()},render:t=>(0,a.jsxs)(`div`,{className:e.classNames(`disclosure-trigger`,`focusable-target`,`flex`,`flex-row`,`items-center`,`justify-between`,`border-default`,`p-xs`,`w-m`,`bg-interactive`),children:[(0,a.jsx)(`button`,{type:`button`,...t,"aria-label":`label of the main action`,className:e.classNames(`focusable-trigger`)}),(0,a.jsx)(`p`,{children:`disclosure-target`}),(0,a.jsxs)(`div`,{className:e.classNames(`disclosure-target`,`flex`,`flex-row`,`gap-s`),children:[(0,a.jsx)(n,{label:`Copy`,icon:(0,a.jsx)(i,{height:void 0})}),(0,a.jsx)(n,{label:`Paste`,icon:(0,a.jsx)(r,{height:void 0})})]})]})},l={name:`focusable-target / focusable-trigger`,parameters:{chromatic:{disableSnapshot:!0}},args:{onClick:o()},render:t=>(0,a.jsxs)(`div`,{className:e.classNames(`flex`,`flex-col`,`items-start`,`justify-start`,`border-default`,`p-xs`,`w-m`,`bg-interactive`,`focusable-target`),children:[(0,a.jsx)(`button`,{type:`button`,"aria-label":`label of the main action`,...t,className:e.classNames(`focusable-trigger`)}),(0,a.jsxs)(`p`,{children:[(0,a.jsx)(`code`,{children:`focusable-target`}),` goes in the parent, the container you want to take focus`]}),(0,a.jsxs)(`p`,{children:[(0,a.jsx)(`code`,{children:`focusable-trigger`}),` goes to either a `,(0,a.jsx)(`code`,{children:`button`}),` or a`,` `,(0,a.jsx)(`code`,{children:`a`}),`that will receive focus and provide the interaction`]})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};var u=[`ProgressiveDisclosure`,`FocusableTarget`];export{l as FocusableTarget,c as ProgressiveDisclosure,u as __namedExportsOrder,s as default};