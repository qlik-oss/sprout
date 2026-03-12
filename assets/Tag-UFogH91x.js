import{j as e,M as r,a,C as c}from"./iframe-DuYosUFD.js";import{useMDXComponents as s}from"./index-6fjbDpXn.js";import{S as d,P as i}from"./Tag.stories-BcqVvsqz.js";import"./preload-helper-PPVm8Dsz.js";import"./Tag-DpwdOoAU.js";import"./sprout-CvRh1TM0.js";import"./TextOverflow-DsMnN-5j.js";import"./classNames-zePBlFY_.js";import"./useHasOverflow-BuHjGHjQ.js";import"./Tooltip-BJFaRrUy.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-DjHAObcc.js";import"./useId-DRaip_NL.js";import"./useI18n-BjJPdLTM.js";import"./Badge-CPj7NTO4.js";import"./InputButton-CpK-Hq67.js";import"./useControl-DOCWDNqa.js";import"./ProgressCircular-BvkbtoQi.js";import"./TagGroup-CaR5HQlD.js";import"./Avatar-C0VvVHs7.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/Tag",of:d}),`
`,e.jsx(n.h1,{id:"tag",children:"Tag"}),`
`,e.jsx(n.p,{children:`Tags are clickable items used for actions. They can have different styles depending on the needs.
To use it you just have to import the Tag component like this:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {
  Tag,
  TagButton,
  TagLink,
  type TagProps,
} from "@qlik/sprout-react";

<Tag
  color="info"
  text="Tag"
  size="s"
  onRemove={() => {}}
  badge={{ color: "info", type: "number", text: "14" }}
  icon={<MyIcon />}
/>;
`})}),`
`,e.jsx(a,{of:i}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"TagLink"})," and ",e.jsx(n.code,{children:"TagButton"})," are interactive variant of the ",e.jsx(n.code,{children:"Tag"}),`.
Note `,e.jsx(n.code,{children:"onRemove"})," and ",e.jsx(n.code,{children:"color"})," properties are not accepted on these variants."]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tag"})," is a simple text element so it does not need any special accessibility treatment."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TagLink"})," is a wrapper of ",e.jsx(n.code,{children:"Tag"})," using the HTML anchor ",e.jsx(n.code,{children:"a"})," tag. It does not need any special accessibility treatment."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TagButton"})," is a wrapper of ",e.jsx(n.code,{children:"Tag"})," using the HTML ",e.jsx(n.code,{children:"button"})," tag. It does not need any special accessibility treatment."]}),`
`]})]})}function I(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{I as default};
