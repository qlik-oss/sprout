import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,i as r,l as i,n as a,s as o}from"./iframe-B0xl5hqz.js";import{t as s}from"./mdx-react-shim-C5WuC5zb.js";import{Playground as c,n as l,t as u}from"./InputButton.stories-CpV1BkmL.js";function d(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/InputButton`,of:u}),`
`,(0,p.jsx)(n.h1,{id:`inputbutton`,children:`InputButton`}),`
`,(0,p.jsx)(n.p,{children:`The InputButton is a clickable element used to trigger actions, similar to the IconButton. It features compact dimensions and is designed specifically for use as a subcomponent, commonly found in inputs like text fields (e.g. a clear button) or within tags.`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { InputButton, Tooltip  } from "@qlik/sprout-react";

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
`,(0,p.jsx)(a,{of:c}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsx)(n.p,{children:(0,p.jsx)(n.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/button/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Button`})}),`
`,(0,p.jsx)(n.p,{children:`HTML Structure`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[`InputButton use the native HTML `,(0,p.jsx)(n.code,{children:`button`}),` so it has the implicit role `,(0,p.jsx)(n.code,{children:`button`}),`.`]}),`
`,(0,p.jsxs)(n.li,{children:[`InputButton support all props to have an `,(0,p.jsx)(n.a,{href:`https://www.w3.org/WAI/tutorials/forms/labels/`,rel:`nofollow`,children:`accessible label`})]}),`
`,(0,p.jsxs)(n.li,{children:[`InputButton support `,(0,p.jsx)(n.code,{children:`aria-describedby`}),` props.`]}),`
`,(0,p.jsxs)(n.li,{children:[`InputButton use explicit `,(0,p.jsx)(n.code,{children:`disabled`}),` props to show it has unavailable.`]}),`
`]}),`
`,(0,p.jsx)(n.p,{children:`Keyboard Navigation`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Space`}),`: Activates the button.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Enter`}),`: Activates the button.`]}),`
`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),s(),i(),l()}))();export{f as default};