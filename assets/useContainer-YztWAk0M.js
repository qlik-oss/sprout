import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{l as n,p as r,s as i}from"./iframe-UwarwtgL.js";import{t as a}from"./mdx-react-shim-DbLuWb1F.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...r(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`hooks/useContainer`}),`
`,(0,c.jsx)(t.h1,{id:`usecontainer`,children:`useContainer`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`useContainer`}),` hook will help you to track the width of a container element.
It's an integration of `,(0,c.jsx)(t.code,{children:`@qlik/sprout-css-modules`}),` sprout.container for react.`]}),`
`,(0,c.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`//type BoxSizing = "content-box" | "border-box" | "device-pixel-content-box";
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
`})})]})}function s(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),n()}))();export{s as default};