import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,i as r,l as i,n as a,s as o}from"./iframe-B0xl5hqz.js";import{t as s}from"./mdx-react-shim-C5WuC5zb.js";import{Playground as c,n as l,t as u}from"./Skeleton.stories-Bu1NjYRe.js";function d(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/Skeleton`,of:u}),`
`,(0,p.jsx)(n.h1,{id:`skeleton`,children:`Skeleton`}),`
`,(0,p.jsx)(n.p,{children:`Skeletons are used when loading a screen. It provides a visual cue of what is loading.`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { Skeleton, type SkeletonProps } from "@qlik/sprout-react";

<Skeleton variant="text" />
<Skeleton variant="circle" />
<Skeleton variant="rectangle" />
<Skeleton variant="Button" />
<Skeleton variant="IconButton" />
<Skeleton variant="Input" />
<Skeleton variant="InputField" />
`})}),`
`,(0,p.jsx)(a,{of:c}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`layout`,children:`Layout`}),`
`,(0,p.jsxs)(n.p,{children:[`Most of the time you will have to build your own layout by using div with `,(0,p.jsx)(n.a,{href:`/?path=/docs/css-sprout-css-modules--docs`,children:`sprout-css-modules`}),`.`]}),`
`,(0,p.jsx)(n.p,{children:`Here is random example of a layout with skeletons.`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`<div
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
`})})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),s(),i(),l()}))();export{f as default};