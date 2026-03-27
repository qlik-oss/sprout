import{n as e}from"./chunk-BneVvdWh.js";import{Fn as t,Pn as n,_t as r,v as i}from"./iframe-RiXBydPV.js";import{i as a,s as o}from"./Modal.argTypes-BM8k9jHC.js";var s,c,l,u,d=e((()=>{i(),o(),s=t(),c={title:`Components/Modal/Composition/Content`,component:r.Content},l={render:e=>(0,s.jsx)(`div`,{className:n(`max-w-3xl`),children:(0,s.jsx)(r.Content,{...e,children:(0,s.jsxs)(`div`,{className:n(`px-xxl`),children:[(0,s.jsx)(`p`,{className:n(`text-default`,`font-body-s`),children:`The modal content area displays any children passed to it. When the content height exceeds the available space, the section becomes scrollable and automatically renders top and bottom dividers to visually indicate overflow.`}),(0,s.jsxs)(`p`,{className:n(`text-default`,`font-body-s`),children:[`The `,(0,s.jsx)(`code`,{children:"`padding`"}),` prop on `,(0,s.jsx)(`code`,{children:"`ModalContent`"}),` is deprecated. Instead, apply spacing directly to a wrapping element. In this example,`,(0,s.jsx)(`code`,{children:"`padding=false`"}),` removes internal padding from`,` `,(0,s.jsx)(`code`,{children:"`ModalContent`"}),`, while the wrapper applies horizontal padding using the `,(0,s.jsx)(`code`,{children:"`px_xxl`"}),` utility class.`]})]})})}),argTypes:a},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Content`]}));d();export{l as Content,u as __namedExportsOrder,c as default,d as t};