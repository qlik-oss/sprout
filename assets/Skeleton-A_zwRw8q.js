import{j as n,M as o,a as i,C as r}from"./iframe-BQJExRCF.js";import{useMDXComponents as s}from"./index-BiT2RrsF.js";import{S as c,P as a}from"./Skeleton.stories-Bg-96eUU.js";import"./preload-helper-PPVm8Dsz.js";import"./Skeleton-C323E7Fo.js";import"./classNames-B0wfWtWT.js";import"./sprout-DxA14K3u.js";function l(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Components/Skeleton",of:c}),`
`,n.jsx(e.h1,{id:"skeleton",children:"Skeleton"}),`
`,n.jsx(e.p,{children:"Skeletons are used when loading a screen. It provides a visual cue of what is loading."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Skeleton, type SkeletonProps } from "@qlik/sprout-css-react";

<Skeleton variant="text" />
<Skeleton variant="circle" />
<Skeleton variant="rectangle" />
<Skeleton variant="Button" />
<Skeleton variant="IconButton" />
<Skeleton variant="Input" />
<Skeleton variant="InputField" />
`})}),`
`,n.jsx(i,{of:a}),`
`,n.jsx(r,{of:a}),`
`,n.jsx(e.h2,{id:"layout",children:"Layout"}),`
`,n.jsxs(e.p,{children:["Most of the time you will have to build your own layout by using div with ",n.jsx(e.a,{href:"/?path=/docs/css-sprout-css-modules--docs",children:"sprout-css-modules"}),"."]}),`
`,n.jsx(e.p,{children:"Here is random example of a layout with skeletons."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<div
  className={sprout.classNames(
    "flex",
    "row",
    "border_box",
    "gap_0",
    "w_full",
    "h_full",
  )}
>
  <div
    className={sprout.classNames(
      "flex",
      "col",
      "p_s",
      "gap_m",
      "bg_weak",
      "w_s",
      "h_full",
    )}
  >
    <Skeleton variant="rectangle" height="40px" width="100%" />
    <Skeleton variant="rectangle" height="40px" width="100%" />
    <Skeleton variant="rectangle" height="40px" width="100%" />
    <Skeleton variant="rectangle" height="40px" width="100%" />
  </div>
  <div
    className={sprout.classNames("flex", "col", "gap_m", "w_full", "h_full")}
  >
    <div
      className={sprout.classNames(
        "flex",
        "col",
        "p_s",
        "gap_m",
        "w_full",
        "h_fit",
        "bg_weak",
      )}
    >
      <Skeleton variant="rectangle" height="40px" />
      <Skeleton variant="rectangle" height="20px" width="50%" />
    </div>
    <div
      className={sprout.classNames(
        "flex",
        "col",
        "p_xl",
        "gap_m",
        "w_full",
        "h_full",
      )}
    >
      <Skeleton variant="InputField" />
      <Skeleton variant="InputField" />
      <Skeleton variant="InputField" />
    </div>
  </div>
</div>
`})})]})}function g(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(l,{...t})}):l(t)}export{g as default};
