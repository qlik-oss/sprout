import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{l as n,n as r,p as i,s as a}from"./iframe-UwarwtgL.js";import{t as o}from"./mdx-react-shim-DbLuWb1F.js";import{UseThemeTouch as s,t as c}from"./ThemeContext.stories-DwL-JdY_.js";function l(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,...i(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Components/ThemeContext`}),`
`,(0,d.jsx)(t.h1,{id:`themecontext--usetheme`,children:`ThemeContext / useTheme`}),`
`,(0,d.jsxs)(t.p,{children:[`You can read if the current device is touch-enabled by using the `,(0,d.jsx)(t.code,{children:`isTouch`}),` property from the context value:`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { useTheme } from "@qlik/sprout-react";

const MyComponent = () => {
  const { isTouch } = useTheme();

  return <div>{isTouch ? "Touch device" : "Non-touch device"}</div>;
};
`})}),`
`,(0,d.jsx)(r,{of:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};