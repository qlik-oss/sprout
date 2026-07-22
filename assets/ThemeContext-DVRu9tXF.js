import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,l as n,n as r}from"./blocks-CCeqoOOO.js";import{t as i}from"./jsx-runtime-Bq1bXGty.js";import{i as a}from"./react-BnCtKaSV.js";import{t as o}from"./mdx-react-shim-9RzcSRdq.js";import{UseThemeTouch as s,t as c}from"./ThemeContext.stories-DU3YsqIN.js";function l(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,...a(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{title:`Components/ThemeContext`}),`
`,(0,d.jsx)(t.h1,{id:`themecontext--usetheme`,children:`ThemeContext / useTheme`}),`
`,(0,d.jsxs)(t.p,{children:[`You can read if the current device is touch-enabled by using the `,(0,d.jsx)(t.code,{children:`isTouch`}),` property from the context value:`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { useTheme } from "@qlik/sprout-react";

const MyComponent = () => {
  const { isTouch } = useTheme();

  return <div>{isTouch ? "Touch device" : "Non-touch device"}</div>;
};
`})}),`
`,(0,d.jsx)(r,{of:s})]})}function u(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=i(),o(),t(),c()}))();export{u as default};