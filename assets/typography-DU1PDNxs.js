import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,l as r,n as i,s as a}from"./iframe-B0xl5hqz.js";import{t as o}from"./mdx-react-shim-C5WuC5zb.js";import{font as s,t as c}from"./typography.stories-B0Bqdfo_.js";function l(e){let n={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`CSS/sprout-css-modules/typography`}),`
`,(0,d.jsx)(n.h2,{id:`typography-in-sprout`,children:`Typography in Sprout`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:`https://www.figma.com/design/aW0477Tif8HI1ogm3v9nv1/Sprout-DLS-Documentation?node-id=205-5249&t=gV5ImAJrr3pID7LL-0`,rel:`nofollow`,children:`Typography in Figma Documentation`})}),`
`,(0,d.jsx)(n.li,{children:`Status: can be used`}),`
`]}),`
`,(0,d.jsx)(n.p,{children:`With React we provide you a className utility to get the right class that will give you access to the correct set of tokens`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-javascript`,children:`
// This example keep the native user agent style and just override color and font
<h1 className={classNames("font-heading-xxl", "text-default")}>my title</h1>

// But you can use 'flex' className to reset styles
<h1 className={classNames("font-heading-xxl", "text-default")}>my title</h1>
`})}),`
`,(0,d.jsx)(i,{of:s}),`
`,(0,d.jsx)(n.h2,{id:`semantic`,children:`Semantic`}),`
`,(0,d.jsx)(n.p,{children:`While you can use any class to apply style the semantic of the document stays important for accessibility.`}),`
`,(0,d.jsx)(n.p,{children:`Use the right heading level for your titles and subtitles. So order is important and should be defined by the application structure.`}),`
`,(0,d.jsx)(n.h3,{id:`dont`,children:`Don't:`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[`skip styles`,`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[`use `,(0,d.jsx)(n.code,{children:`<h3>`}),` if there is no `,(0,d.jsx)(n.code,{children:`<h2>`}),` before it`]}),`
`,(0,d.jsxs)(n.li,{children:[`use `,(0,d.jsx)(n.code,{children:`<p>`}),` for paragraphs without any styles applied`]}),`
`,(0,d.jsxs)(n.li,{children:[`use `,(0,d.jsx)(n.code,{children:`<strong>`}),` or `,(0,d.jsx)(n.code,{children:`<b>`}),` without any styles applied`]}),`
`]}),`
`]}),`
`]}),`
`,(0,d.jsx)(n.h3,{id:`do`,children:`Do:`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[`use `,(0,d.jsx)(n.code,{children:`<p className={classNames("font-body-m")}>`}),` for paragraphs`]}),`
`,(0,d.jsxs)(n.li,{children:[`use `,(0,d.jsx)(n.code,{children:`<span className={classNames("font-body-m")}>`}),` for inline text`]}),`
`,(0,d.jsxs)(n.li,{children:[`use font_heading class for heading`,`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[`example 1:`,`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:`<h1 className={classNames("font-heading-xxl")}>`})}),`
`,(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:`<h2 className={classNames("font-heading-xl")}>`})}),`
`,(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:`<h3 className={classNames("font-heading-l")}>`})}),`
`]}),`
`]}),`
`,(0,d.jsxs)(n.li,{children:[`example 2:`,`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:`<h1 className={classNames("font-heading-xl")}>`})}),`
`,(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:`<h2 className={classNames("font-heading-l")}>`})}),`
`,(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:`<h3 className={classNames("font-heading-m")}>`})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,d.jsxs)(n.li,{children:[`use strong or bold with the corresponding class which should be an emphasized token`,`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:`<strong className={classNames("font-label-s-emphasized")}>`})}),`
`,(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:`<b className={classNames("font-label-s-emphasized")}>`})}),`
`]}),`
`]}),`
`]})]})}function u(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=n(),o(),r(),c()}))();export{u as default};