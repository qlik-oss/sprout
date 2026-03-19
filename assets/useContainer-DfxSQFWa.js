import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{s as t}from"./iframe-DTk7xy32.js";import{n}from"./lib-EjdzwnHJ.js";var r=e();function i(e){let i={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{title:`hooks/useContainer`}),`
`,(0,r.jsx)(i.h1,{id:`usecontainer`,children:`useContainer`}),`
`,(0,r.jsxs)(i.p,{children:[`The `,(0,r.jsx)(i.code,{children:`useContainer`}),` hook will help you to track the width of a container element.
It's an integration of `,(0,r.jsx)(i.code,{children:`@qlik/sprout-css-modules`}),` sprout.container for react.`]}),`
`,(0,r.jsx)(i.h2,{id:`api`,children:`API`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-tsx`,children:`//type BoxSizing = "content-box" | "border-box" | "device-pixel-content-box";
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
`})})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};