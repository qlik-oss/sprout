import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,i as n,l as r,n as i}from"./blocks-CCeqoOOO.js";import{t as a}from"./jsx-runtime-Bq1bXGty.js";import{i as o}from"./react-BnCtKaSV.js";import{t as s}from"./mdx-react-shim-9RzcSRdq.js";import{Playground as c,n as l,t as u}from"./InputButton.stories-RXUqAku7.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{title:`Components/InputButton`,of:u}),`
`,(0,p.jsx)(t.h1,{id:`inputbutton`,children:`InputButton`}),`
`,(0,p.jsx)(t.p,{children:`The InputButton is a clickable element used to trigger actions, similar to the IconButton. It features compact dimensions and is designed specifically for use as a subcomponent, commonly found in inputs like text fields (e.g. a clear button) or within tags.`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { InputButton, Tooltip  } from "@qlik/sprout-react";

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
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(n,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/button/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Button`})}),`
`,(0,p.jsx)(t.p,{children:`HTML Structure`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`InputButton use the native HTML `,(0,p.jsx)(t.code,{children:`button`}),` so it has the implicit role `,(0,p.jsx)(t.code,{children:`button`}),`.`]}),`
`,(0,p.jsxs)(t.li,{children:[`InputButton support all props to have an `,(0,p.jsx)(t.a,{href:`https://www.w3.org/WAI/tutorials/forms/labels/`,rel:`nofollow`,children:`accessible label`})]}),`
`,(0,p.jsxs)(t.li,{children:[`InputButton support `,(0,p.jsx)(t.code,{children:`aria-describedby`}),` props.`]}),`
`,(0,p.jsxs)(t.li,{children:[`InputButton use explicit `,(0,p.jsx)(t.code,{children:`disabled`}),` props to show it has unavailable.`]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`Keyboard Navigation`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`Space`}),`: Activates the button.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`Enter`}),`: Activates the button.`]}),`
`]})]})}function f(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=a(),s(),t(),l()}))();export{f as default};