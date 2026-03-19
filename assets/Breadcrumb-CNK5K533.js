import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-DTk7xy32.js";import{n as i}from"./lib-EjdzwnHJ.js";import{Basic as a}from"./Breadcrumb.stories-Nc6u6Kf3.js";var o=e();function s(e){let s={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{title:`Components/Breadcrumb`}),`
`,(0,o.jsx)(s.h1,{id:`breadcrumb`,children:`Breadcrumb`}),`
`,(0,o.jsxs)(s.p,{children:[`A breadcrumb is a navigational UI for hierarchical content.
The `,(0,o.jsx)(s.code,{children:`Breadcrumb`}),` component extends the native `,(0,o.jsx)(s.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav`,rel:`nofollow`,children:`HTML nav element`}),` attributes, so all standard navigation landmark properties are supported.`]}),`
`,(0,o.jsx)(s.h2,{id:`usage`,children:`Usage`}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-tsx`,children:`import { Breadcrumb, BreadcrumbItem, Link } from "@qlik/sprout-react";

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
`,(0,o.jsx)(s.h2,{id:`properties`,children:`Properties`}),`
`,(0,o.jsx)(n,{of:a}),`
`,(0,o.jsx)(t,{of:a}),`
`,(0,o.jsx)(s.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,o.jsxs)(s.p,{children:[`The `,(0,o.jsx)(s.code,{children:`composition`}),` API doesn't add the needed attribute to respect the accessibility spec, so please consider that great powers comes with responsibilities.`]}),`
`,(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Breadcrumb`})}),`
`,(0,o.jsxs)(s.p,{children:[`The current component use the `,(0,o.jsx)(s.code,{children:`Link`}),` component so refer to it for the corresponding accessibility questions.`]}),`
`,(0,o.jsxs)(s.ul,{children:[`
`,(0,o.jsx)(s.li,{children:`The set of Links is structured using an ordered list.`}),`
`,(0,o.jsx)(s.li,{children:`The Breadcrumb (nav element) is labeled Breadcrumb identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate.`}),`
`,(0,o.jsx)(s.li,{children:`The Link to the current page has aria-current set to page. If the element representing the current page is not a link, aria-current is optional.`}),`
`]})]})}function c(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}export{c as default};