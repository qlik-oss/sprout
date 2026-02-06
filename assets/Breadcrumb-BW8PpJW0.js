import{j as e,M as o,a as s,C as c}from"./iframe-DO7qjpir.js";import{useMDXComponents as a}from"./index-DM3CO3rl.js";import{Basic as t}from"./Breadcrumb.stories---4Wl-1Q.js";import"./preload-helper-PPVm8Dsz.js";import"./classNames-C2xvgHQf.js";import"./sprout-nCaIAc8k.js";import"./Link-D7v631rY.js";import"./icons-B7D59aOJ.js";import"./Button-DWGkri9_.js";import"./Button.module-C2ELNEem.js";import"./Badge-BbHESnbh.js";import"./Tooltip-Bnp9G-JS.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-C_aUAXE9.js";import"./useId-B9UV2KOW.js";import"./ProgressCircular-CpbimHqB.js";import"./useI18n-CbD-mhn-.js";function i(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/Breadcrumb"}),`
`,e.jsx(r.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,e.jsxs(r.p,{children:[`A breadcrumb is a navigational UI for hierarchical content.
The `,e.jsx(r.code,{children:"Breadcrumb"})," component extends the native ",e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav",rel:"nofollow",children:"HTML nav element"})," attributes, so all standard navigation landmark properties are supported."]}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Breadcrumb, BreadcrumbItem, Link } from "@qlik/sprout-react";

<Breadcrumb
  items={[
    {
      label: "Root",
      href: "/",
    },
    {
      label: "Folder",
      href: "/folder",
    },
    {
      label: "Page",
      href: "/page",
    },
  ]}
/>

// Both examples are equivalent and valid but note that you need
// to add the \`aria-current="page"\` attribute on the last link.

<Breadcrumb>
    <BreadcrumbItem>
      <Link href="/">Home</Link>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <Link href="/folder">Folder</Link>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <Link href="/folder/mypage" aria-current="page">
        current page
      </Link>
    </BreadcrumbItem>
</Breadcrumb>
`})}),`
`,e.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(c,{of:t}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"composition"})," API doesn't add the needed attribute to respect the accessibility spec, so please consider that great powers comes with responsibilities."]}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/",rel:"nofollow",children:"W3/WAI/ARIA/APG Breadcrumb"})}),`
`,e.jsxs(r.p,{children:["The current component use the ",e.jsx(r.code,{children:"Link"})," component so refer to it for the corresponding accessibility questions."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"The set of Links is structured using an ordered list."}),`
`,e.jsx(r.li,{children:"The Breadcrumb (nav element) is labeled Breadcrumb identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate."}),`
`,e.jsx(r.li,{children:"The Link to the current page has aria-current set to page. If the element representing the current page is not a link, aria-current is optional."}),`
`]})]})}function w(n={}){const{wrapper:r}={...a(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{w as default};
