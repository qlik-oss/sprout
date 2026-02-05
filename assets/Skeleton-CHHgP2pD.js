import{j as e,M as s,a as i,C as r}from"./iframe-B4vjk2_C.js";import{useMDXComponents as o}from"./index-4mXTpVuF.js";import{S as c,P as a}from"./Skeleton.stories-tC6siAt9.js";import"./preload-helper-PPVm8Dsz.js";import"./Skeleton-DGs4i03k.js";import"./classNames-DaRWzB8T.js";import"./sprout-DTAeqvbL.js";function l(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/Skeleton",of:c}),`
`,e.jsx(n.h1,{id:"skeleton",children:"Skeleton"}),`
`,e.jsx(n.p,{children:"Skeletons are used when loading a screen. It provides a visual cue of what is loading."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Skeleton, type SkeletonProps } from "@qlik/sprout-react";

<Skeleton variant="text" />
<Skeleton variant="circle" />
<Skeleton variant="rectangle" />
<Skeleton variant="Button" />
<Skeleton variant="IconButton" />
<Skeleton variant="Input" />
<Skeleton variant="InputField" />
`})}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(n.h2,{id:"layout",children:"Layout"}),`
`,e.jsxs(n.p,{children:["Most of the time you will have to build your own layout by using div with ",e.jsx(n.a,{href:"/?path=/docs/css-sprout-css-modules--docs",children:"sprout-css-modules"}),"."]}),`
`,e.jsx(n.p,{children:"Here is random example of a layout with skeletons."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<div className={sprout.classNames("flex", "row", "border_box", "gap_0", "w_full", "h_full")}>
  <div className={sprout.classNames("flex", "col", "p_s", "gap_m", "bg_weak", "w_s", "h_full")}>
    <Skeleton variant="rectangle" height="40px" width="100%" />
    <Skeleton variant="rectangle" height="40px" width="100%" />
    <Skeleton variant="rectangle" height="40px" width="100%" />
    <Skeleton variant="rectangle" height="40px" width="100%" />
  </div>
  <div className={sprout.classNames("flex", "col", "gap_m", "w_full", "h_full")}>
    <div className={sprout.classNames("flex", "col", "p_s", "gap_m", "w_full", "h_fit", "bg_weak")}>
      <Skeleton variant="rectangle" height="40px" />
      <Skeleton variant="rectangle" height="20px" width="50%" />
    </div>
    <div className={sprout.classNames("flex", "col", "p_xl", "gap_m", "w_full", "h_full")}>
      <Skeleton variant="InputField" />
      <Skeleton variant="InputField" />
      <Skeleton variant="InputField" />
    </div>
  </div>
</div>
`})})]})}function g(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{g as default};
