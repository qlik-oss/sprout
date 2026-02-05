import{j as n,M as i}from"./iframe-BThSoDrn.js";import{useMDXComponents as r}from"./index-dxYskzg-.js";import"./preload-helper-PPVm8Dsz.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"hooks/useContainer"}),`
`,n.jsx(e.h1,{id:"usecontainer",children:"useContainer"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"useContainer"}),` hook will help you to track the width of a container element.
It's an integration of `,n.jsx(e.code,{children:"@qlik/sprout-css-modules"})," sprout.container for react."]}),`
`,n.jsx(e.h2,{id:"api",children:"API"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`//type BoxSizing = "content-box" | "border-box" | "device-pixel-content-box";
import { useContainer } from "@qlik/sprout-hooks";

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
`})})]})}function d(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{d as default};
