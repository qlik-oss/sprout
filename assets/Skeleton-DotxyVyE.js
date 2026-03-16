import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-BRSAI4nO.js";import{n as i}from"./lib-EjdzwnHJ.js";import{Playground as a,t as o}from"./Skeleton.stories-BF7lgd9w.js";var s=e();function c(e){let c={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`Components/Skeleton`,of:o}),`
`,(0,s.jsx)(c.h1,{id:`skeleton`,children:`Skeleton`}),`
`,(0,s.jsx)(c.p,{children:`Skeletons are used when loading a screen. It provides a visual cue of what is loading.`}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`import { Skeleton, type SkeletonProps } from "@qlik/sprout-react";

<Skeleton variant="text" />
<Skeleton variant="circle" />
<Skeleton variant="rectangle" />
<Skeleton variant="Button" />
<Skeleton variant="IconButton" />
<Skeleton variant="Input" />
<Skeleton variant="InputField" />
`})}),`
`,(0,s.jsx)(n,{of:a}),`
`,(0,s.jsx)(t,{of:a}),`
`,(0,s.jsx)(c.h2,{id:`layout`,children:`Layout`}),`
`,(0,s.jsxs)(c.p,{children:[`Most of the time you will have to build your own layout by using div with `,(0,s.jsx)(c.a,{href:`/?path=/docs/css-sprout-css-modules--docs`,children:`sprout-css-modules`}),`.`]}),`
`,(0,s.jsx)(c.p,{children:`Here is random example of a layout with skeletons.`}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`<div
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
`})})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}export{l as default};