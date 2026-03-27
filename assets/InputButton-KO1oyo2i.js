import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-B5xoaqtW.js";import{n as i}from"./lib-EjdzwnHJ.js";import{Playground as a,t as o}from"./InputButton.stories-B5JKl0C1.js";var s=e();function c(e){let c={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`Components/InputButton`,of:o}),`
`,(0,s.jsx)(c.h1,{id:`inputbutton`,children:`InputButton`}),`
`,(0,s.jsx)(c.p,{children:`The InputButton is a clickable element used to trigger actions, similar to the IconButton. It features compact dimensions and is designed specifically for use as a subcomponent, commonly found in inputs like text fields (e.g. a clear button) or within tags.`}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`import { InputButton, Tooltip  } from "@qlik/sprout-react";

function Component ({onRemove, removeLabel, removeLabelDefault: "Remove", ...props} : Props) {
  return (
    //...
    <span {...props}>
      {onRemove && <InputButton onClick={onRemove} aria-label={removeLabel || removeLabelDefault} size={size ? "xs" : "s"} />}
    </span>
    //...
  )
}

function ComponentWithTooltip ({onRemove, removeLabel, removeLabelDefault: "Remove", ...props} : Props) {
  return (
    //...
    <span {...props}>
      {onRemove &&
      <Tooltip title={removeLabel || removeLabelDefault}>
        <InputButton onClick={onRemove} aria-label={removeLabel || removeLabelDefault} size={size ? "xs" : "s"} />
      </Tooltip>
      }
    </span>
    //...
  )
}
`})}),`
`,(0,s.jsx)(n,{of:a}),`
`,(0,s.jsx)(t,{of:a}),`
`,(0,s.jsx)(c.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,s.jsx)(c.p,{children:(0,s.jsx)(c.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/button/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Button`})}),`
`,(0,s.jsx)(c.p,{children:`HTML Structure`}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[`InputButton use the native HTML `,(0,s.jsx)(c.code,{children:`button`}),` so it has the implicit role `,(0,s.jsx)(c.code,{children:`button`}),`.`]}),`
`,(0,s.jsxs)(c.li,{children:[`InputButton support all props to have an `,(0,s.jsx)(c.a,{href:`https://www.w3.org/WAI/tutorials/forms/labels/`,rel:`nofollow`,children:`accessible label`})]}),`
`,(0,s.jsxs)(c.li,{children:[`InputButton support `,(0,s.jsx)(c.code,{children:`aria-describedby`}),` props.`]}),`
`,(0,s.jsxs)(c.li,{children:[`InputButton use explicit `,(0,s.jsx)(c.code,{children:`disabled`}),` props to show it has unavailable.`]}),`
`]}),`
`,(0,s.jsx)(c.p,{children:`Keyboard Navigation`}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Space`}),`: Activates the button.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Enter`}),`: Activates the button.`]}),`
`]})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}export{l as default};