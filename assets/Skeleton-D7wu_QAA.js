import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,i as n,l as r,n as i}from"./blocks-CCeqoOOO.js";import{t as a}from"./jsx-runtime-Bq1bXGty.js";import{i as o}from"./react-BnCtKaSV.js";import{t as s}from"./mdx-react-shim-9RzcSRdq.js";import{Playground as c,n as l,t as u}from"./Skeleton.stories-DjW8QKNM.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...o(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{title:`Components/Skeleton`,of:u}),`
`,(0,p.jsx)(t.h1,{id:`skeleton`,children:`Skeleton`}),`
`,(0,p.jsx)(t.p,{children:`Skeletons are used when loading a screen. It provides a visual cue of what is loading.`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { Skeleton, type SkeletonProps } from "@qlik/sprout-react";

<Skeleton variant="text" />
<Skeleton variant="circle" />
<Skeleton variant="rectangle" />
<Skeleton variant="Button" />
<Skeleton variant="IconButton" />
<Skeleton variant="Input" />
<Skeleton variant="InputField" />
`})}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(n,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,p.jsxs)(t.p,{children:[`Most of the time you will have to build your own layout by using div with `,(0,p.jsx)(t.a,{href:`/?path=/docs/css-sprout-css-modules--docs`,children:`sprout-css-modules`}),`.`]}),`
`,(0,p.jsx)(t.p,{children:`Here is random example of a layout with skeletons.`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<div
  className={sprout.classNames(
    "flex",
    "row",
    "border_box",
    "gap_0",
    "w_full",
    "h_full"
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
      "h_full"
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
        "bg_weak"
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
        "h_full"
      )}
    >
      <Skeleton variant="InputField" />
      <Skeleton variant="InputField" />
      <Skeleton variant="InputField" />
    </div>
  </div>
</div>
`})})]})}function f(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=a(),s(),t(),l()}))();export{f as default};