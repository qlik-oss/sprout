import{j as e,M as c,a as r}from"./iframe-Dux6zP9l.js";import{useMDXComponents as s}from"./index-BCztanOQ.js";import{UseThemeTouch as i}from"./ThemeContext.stories-DqKX6KMx.js";import"./preload-helper-PPVm8Dsz.js";function o(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Components/ThemeContext"}),`
`,e.jsx(n.h1,{id:"themecontext--usetheme",children:"ThemeContext / useTheme"}),`
`,e.jsxs(n.p,{children:["You can read if the current device is touch-enabled by using the ",e.jsx(n.code,{children:"isTouch"})," property from the context value:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useTheme } from "@qlik/sprout-react";

const MyComponent = () => {
  const { isTouch } = useTheme();

  return <div>{isTouch ? "Touch device" : "Non-touch device"}</div>;
};
`})}),`
`,e.jsx(r,{of:i})]})}function d(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{d as default};
