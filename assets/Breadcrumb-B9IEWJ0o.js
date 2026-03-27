import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Lc6HZYGU.js";import{Fn as n,i as r,l as i,n as a,s as o}from"./iframe-RiXBydPV.js";import{t as s}from"./mdx-react-shim-Cw1WyOhr.js";import{Basic as c,t as l}from"./Breadcrumb.stories-DZFcMqTb.js";function u(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{title:`Components/Breadcrumb`}),`
`,(0,f.jsx)(n.h1,{id:`breadcrumb`,children:`Breadcrumb`}),`
`,(0,f.jsxs)(n.p,{children:[`A breadcrumb is a navigational UI for hierarchical content.
The `,(0,f.jsx)(n.code,{children:`Breadcrumb`}),` component extends the native `,(0,f.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav`,rel:`nofollow`,children:`HTML nav element`}),` attributes, so all standard navigation landmark properties are supported.`]}),`
`,(0,f.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { Breadcrumb, BreadcrumbItem, Link } from "@qlik/sprout-react";

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
`,(0,f.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,f.jsx)(a,{of:c}),`
`,(0,f.jsx)(r,{of:c}),`
`,(0,f.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,f.jsxs)(n.p,{children:[`The `,(0,f.jsx)(n.code,{children:`composition`}),` API doesn't add the needed attribute to respect the accessibility spec, so please consider that great powers comes with responsibilities.`]}),`
`,(0,f.jsx)(n.p,{children:(0,f.jsx)(n.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Breadcrumb`})}),`
`,(0,f.jsxs)(n.p,{children:[`The current component use the `,(0,f.jsx)(n.code,{children:`Link`}),` component so refer to it for the corresponding accessibility questions.`]}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsx)(n.li,{children:`The set of Links is structured using an ordered list.`}),`
`,(0,f.jsx)(n.li,{children:`The Breadcrumb (nav element) is labeled Breadcrumb identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate.`}),`
`,(0,f.jsx)(n.li,{children:`The Link to the current page has aria-current set to page. If the element representing the current page is not a link, aria-current is optional.`}),`
`]})]})}function d(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,f.jsx)(n,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=n(),s(),i(),l()}))();export{d as default};