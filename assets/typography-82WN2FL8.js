import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{n as t,s as n}from"./iframe-DaKWDHAC.js";import{n as r}from"./lib-EjdzwnHJ.js";import{font as i}from"./typography.stories-CKif6o-2.js";var a=e();function o(e){let o={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...r(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{title:`CSS/sprout-css-modules/typography`}),`
`,(0,a.jsx)(o.h2,{id:`typography-in-sprout`,children:`Typography in Sprout`}),`
`,(0,a.jsxs)(o.ul,{children:[`
`,(0,a.jsx)(o.li,{children:(0,a.jsx)(o.a,{href:`https://www.figma.com/design/aW0477Tif8HI1ogm3v9nv1/Sprout-DLS-Documentation?node-id=205-5249&t=gV5ImAJrr3pID7LL-0`,rel:`nofollow`,children:`Typography in Figma Documentation`})}),`
`,(0,a.jsx)(o.li,{children:`Status: can be used`}),`
`]}),`
`,(0,a.jsx)(o.p,{children:`With React we provide you a className utility to get the right class that will give you access to the correct set of tokens`}),`
`,(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:`language-javascript`,children:`
// This example keep the native user agent style and just override color and font
<h1 className={classNames("font-heading-xxl", "text-default")}>my title</h1>

// But you can use 'flex' className to reset styles
<h1 className={classNames("font-heading-xxl", "text-default")}>my title</h1>
`})}),`
`,(0,a.jsx)(t,{of:i}),`
`,(0,a.jsx)(o.h2,{id:`semantic`,children:`Semantic`}),`
`,(0,a.jsx)(o.p,{children:`While you can use any class to apply style the semantic of the document stays important for accessibility.`}),`
`,(0,a.jsx)(o.p,{children:`Use the right heading level for your titles and subtitles. So order is important and should be defined by the application structure.`}),`
`,(0,a.jsx)(o.h3,{id:`dont`,children:`Don't:`}),`
`,(0,a.jsxs)(o.ul,{children:[`
`,(0,a.jsxs)(o.li,{children:[`skip styles`,`
`,(0,a.jsxs)(o.ul,{children:[`
`,(0,a.jsxs)(o.li,{children:[`use `,(0,a.jsx)(o.code,{children:`<h3>`}),` if there is no `,(0,a.jsx)(o.code,{children:`<h2>`}),` before it`]}),`
`,(0,a.jsxs)(o.li,{children:[`use `,(0,a.jsx)(o.code,{children:`<p>`}),` for paragraphs without any styles applied`]}),`
`,(0,a.jsxs)(o.li,{children:[`use `,(0,a.jsx)(o.code,{children:`<strong>`}),` or `,(0,a.jsx)(o.code,{children:`<b>`}),` without any styles applied`]}),`
`]}),`
`]}),`
`]}),`
`,(0,a.jsx)(o.h3,{id:`do`,children:`Do:`}),`
`,(0,a.jsxs)(o.ul,{children:[`
`,(0,a.jsxs)(o.li,{children:[`use `,(0,a.jsx)(o.code,{children:`<p className={classNames("font-body-m")}>`}),` for paragraphs`]}),`
`,(0,a.jsxs)(o.li,{children:[`use `,(0,a.jsx)(o.code,{children:`<span className={classNames("font-body-m")}>`}),` for inline text`]}),`
`,(0,a.jsxs)(o.li,{children:[`use font_heading class for heading`,`
`,(0,a.jsxs)(o.ul,{children:[`
`,(0,a.jsxs)(o.li,{children:[`example 1:`,`
`,(0,a.jsxs)(o.ul,{children:[`
`,(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:`<h1 className={classNames("font-heading-xxl")}>`})}),`
`,(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:`<h2 className={classNames("font-heading-xl")}>`})}),`
`,(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:`<h3 className={classNames("font-heading-l")}>`})}),`
`]}),`
`]}),`
`,(0,a.jsxs)(o.li,{children:[`example 2:`,`
`,(0,a.jsxs)(o.ul,{children:[`
`,(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:`<h1 className={classNames("font-heading-xl")}>`})}),`
`,(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:`<h2 className={classNames("font-heading-l")}>`})}),`
`,(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:`<h3 className={classNames("font-heading-m")}>`})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,a.jsxs)(o.li,{children:[`use strong or bold with the corresponding class which should be an emphasized token`,`
`,(0,a.jsxs)(o.ul,{children:[`
`,(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:`<strong className={classNames("font-label-s-emphasized")}>`})}),`
`,(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:`<b className={classNames("font-label-s-emphasized")}>`})}),`
`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}export{s as default};