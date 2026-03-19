import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t}from"./Modal-G8c19tco.js";import{hn as n}from"./iframe-DTk7xy32.js";import"./Icons-DrVGfMuG.js";import{i as r}from"./Modal.argTypes-jAPysF7u.js";var i=e(),a={title:`Components/Modal/Composition/Content`,component:t.Content},o={render:e=>(0,i.jsx)(`div`,{className:n(`max-w-3xl`),children:(0,i.jsx)(t.Content,{...e,children:(0,i.jsxs)(`div`,{className:n(`px-xxl`),children:[(0,i.jsx)(`p`,{className:n(`text-default`,`font-body-s`),children:`The modal content area displays any children passed to it. When the content height exceeds the available space, the section becomes scrollable and automatically renders top and bottom dividers to visually indicate overflow.`}),(0,i.jsxs)(`p`,{className:n(`text-default`,`font-body-s`),children:[`The `,(0,i.jsx)(`code`,{children:"`padding`"}),` prop on `,(0,i.jsx)(`code`,{children:"`ModalContent`"}),` is deprecated. Instead, apply spacing directly to a wrapping element. In this example,`,(0,i.jsx)(`code`,{children:"`padding=false`"}),` removes internal padding from`,` `,(0,i.jsx)(`code`,{children:"`ModalContent`"}),`, while the wrapper applies horizontal padding using the `,(0,i.jsx)(`code`,{children:"`px_xxl`"}),` utility class.`]})]})})}),argTypes:r};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("max-w-3xl")}>
      <Modal.Content {...props}>
        <div className={classNames("px-xxl")}>
          <p className={classNames("text-default", "font-body-s")}>
            The modal content area displays any children passed to it. When the
            content height exceeds the available space, the section becomes
            scrollable and automatically renders top and bottom dividers to
            visually indicate overflow.
          </p>

          <p className={classNames("text-default", "font-body-s")}>
            The <code>\`padding\`</code> prop on <code>\`ModalContent\`</code> is
            deprecated. Instead, apply spacing directly to a wrapping element.
            In this example,
            <code>\`padding=false\`</code> removes internal padding from{" "}
            <code>\`ModalContent\`</code>, while the wrapper applies horizontal
            padding using the <code>\`px_xxl\`</code> utility class.
          </p>
        </div>
      </Modal.Content>
    </div>,
  argTypes: ModalContentArgTypes
}`,...o.parameters?.docs?.source}}};var s=[`Content`];export{o as Content,s as __namedExportsOrder,a as default};