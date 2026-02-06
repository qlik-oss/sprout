import{j as e,M as a,a as t}from"./iframe-itHhOQJ8.js";import{useMDXComponents as i}from"./index-M6OOd87p.js";import{font as c}from"./typography.stories-CZhFMBuX.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-5bk7oM4L.js";function l(n){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"CSS/sprout-css-modules/typography"}),`
`,e.jsx(s.h2,{id:"typography-in-sprout",children:"Typography in Sprout"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://www.figma.com/design/aW0477Tif8HI1ogm3v9nv1/Sprout-DLS-Documentation?node-id=205-5249&t=gV5ImAJrr3pID7LL-0",rel:"nofollow",children:"Typography in Figma Documentation"})}),`
`,e.jsx(s.li,{children:"Status: can be used"}),`
`]}),`
`,e.jsx(s.p,{children:"With React we provide you a className utility to get the right class that will give you access to the correct set of tokens"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`
// This example keep the native user agent style and just override color and font
<h1 className={classNames("font-heading-xxl", "text-default")}>my title</h1>

// But you can use 'flex' className to reset styles
<h1 className={classNames("font-heading-xxl", "text-default")}>my title</h1>
`})}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(s.h2,{id:"semantic",children:"Semantic"}),`
`,e.jsx(s.p,{children:"While you can use any class to apply style the semantic of the document stays important for accessibility."}),`
`,e.jsx(s.p,{children:"Use the right heading level for your titles and subtitles. So order is important and should be defined by the application structure."}),`
`,e.jsx(s.h3,{id:"dont",children:"Don't:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["skip styles",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["use ",e.jsx(s.code,{children:"<h3>"})," if there is no ",e.jsx(s.code,{children:"<h2>"})," before it"]}),`
`,e.jsxs(s.li,{children:["use ",e.jsx(s.code,{children:"<p>"})," for paragraphs without any styles applied"]}),`
`,e.jsxs(s.li,{children:["use ",e.jsx(s.code,{children:"<strong>"})," or ",e.jsx(s.code,{children:"<b>"})," without any styles applied"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.h3,{id:"do",children:"Do:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["use ",e.jsx(s.code,{children:'<p className={classNames("font-body-m")}>'})," for paragraphs"]}),`
`,e.jsxs(s.li,{children:["use ",e.jsx(s.code,{children:'<span className={classNames("font-body-m")}>'})," for inline text"]}),`
`,e.jsxs(s.li,{children:["use font-heading class for heading",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["example 1:",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'<h1 className={classNames("font-heading-xxl")}>'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'<h2 className={classNames("font-heading-xl")}>'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'<h3 className={classNames("font-heading-l")}>'})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["example 2:",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'<h1 className={classNames("font-heading-xl")}>'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'<h2 className={classNames("font-heading-l")}>'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'<h3 className={classNames("font-heading-m")}>'})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["use strong or bold with the corresponding class which should be an emphasized token",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'<strong className={classNames("font-label-s-emphasized")}>'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'<b className={classNames("font-label-s-emphasized")}>'})}),`
`]}),`
`]}),`
`]})]})}function m(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{m as default};
