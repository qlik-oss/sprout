import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Lc6HZYGU.js";import{Fn as n,l as r,s as i}from"./iframe-RiXBydPV.js";import{t as a}from"./mdx-react-shim-Cw1WyOhr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`hooks/useContainer`}),`
`,(0,c.jsx)(n.h1,{id:`usecontainer`,children:`useContainer`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`useContainer`}),` hook will help you to track the width of a container element.
It's an integration of `,(0,c.jsx)(n.code,{children:`@qlik/sprout-css-modules`}),` sprout.container for react.`]}),`
`,(0,c.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`//type BoxSizing = "content-box" | "border-box" | "device-pixel-content-box";
import { useContainer } from "@qlik/sprout-react-hooks";

function MyComponent({id?: string, ...props}) {
  const container = useContainer({ boxSizing: "border-box" });

 return (
  <div ref={container.ref} className={container.classNames({
    s: ["padding_4"],
    m: ["padding_8"],
    l: ["padding_16"],
  })}>
    <Button justified={container.get<boolean>({ xxs: true, m: false })} />;
  </div>
 )
};
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};