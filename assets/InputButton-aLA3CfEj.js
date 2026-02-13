import{j as e,M as r,a as l,C as a}from"./iframe-D-N3fK2j.js";import{useMDXComponents as i}from"./index-BvagnWFp.js";import{S as p,P as o}from"./InputButton.stories-BIe9N2K2.js";import"./preload-helper-PPVm8Dsz.js";import"./InputButton-BoVH_no0.js";import"./sprout-UDo5dA_z.js";import"./useControl-U-WkQj2I.js";import"./ProgressCircular-CdUDfayh.js";import"./useI18n-ClHBar3-.js";import"./classNames-CrSIhzis.js";import"./Tooltip-DaX3jRge.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-25h2pNOO.js";import"./useId-Bkl3iN6O.js";function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/InputButton",of:p}),`
`,e.jsx(n.h1,{id:"inputbutton",children:"InputButton"}),`
`,e.jsx(n.p,{children:"The InputButton is a clickable element used to trigger actions, similar to the IconButton. It features compact dimensions and is designed specifically for use as a subcomponent, commonly found in inputs like text fields (e.g. a clear button) or within tags."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { InputButton, Tooltip  } from "@qlik/sprout-react";

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
`,e.jsx(l,{of:o}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/button/",rel:"nofollow",children:"W3/WAI/ARIA/APG Button"})}),`
`,e.jsx(n.p,{children:"HTML Structure"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["InputButton use the native HTML ",e.jsx(n.code,{children:"button"})," so it has the implicit role ",e.jsx(n.code,{children:"button"}),"."]}),`
`,e.jsxs(n.li,{children:["InputButton support all props to have an ",e.jsx(n.a,{href:"https://www.w3.org/WAI/tutorials/forms/labels/",rel:"nofollow",children:"accessible label"})]}),`
`,e.jsxs(n.li,{children:["InputButton support ",e.jsx(n.code,{children:"aria-describedby"})," props."]}),`
`,e.jsxs(n.li,{children:["InputButton use explicit ",e.jsx(n.code,{children:"disabled"})," props to show it has unavailable."]}),`
`]}),`
`,e.jsx(n.p,{children:"Keyboard Navigation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Space"}),": Activates the button."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Enter"}),": Activates the button."]}),`
`]})]})}function B(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{B as default};
