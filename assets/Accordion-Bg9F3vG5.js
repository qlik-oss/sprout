import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-URhFfzNK.js";import{n as i}from"./lib-EjdzwnHJ.js";import{ContainerPlayground as a,ItemPlayground as o,WithAffix as s,t as c}from"./Accordion.stories-6diecX0O.js";var l=e();function u(e){let u={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{title:`Components/Accordion`,of:c}),`
`,(0,l.jsx)(u.h1,{id:`accordion`,children:`Accordion`}),`
`,(0,l.jsx)(u.p,{children:`An accordion component in a design system enables content to be expanded or collapsed, helping organize information neatly and reducing visual clutter.`}),`
`,(0,l.jsx)(u.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,l.jsxs)(u.ul,{children:[`
`,(0,l.jsx)(u.li,{children:(0,l.jsx)(u.a,{href:`#usage`,children:`Usage`})}),`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.a,{href:`#properties`,children:`Properties`}),`
`,(0,l.jsxs)(u.ul,{children:[`
`,(0,l.jsx)(u.li,{children:(0,l.jsx)(u.a,{href:`#accordioncontainer`,children:`Accordion.Container`})}),`
`,(0,l.jsx)(u.li,{children:(0,l.jsx)(u.a,{href:`#accordionitem`,children:`Accordion.Item`})}),`
`]}),`
`]}),`
`,(0,l.jsx)(u.li,{children:(0,l.jsx)(u.a,{href:`#variant-quiet`,children:`Variant quiet`})}),`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.a,{href:`#accordionitem-width`,children:`Accordion.Item Width`}),`
`,(0,l.jsxs)(u.ul,{children:[`
`,(0,l.jsx)(u.li,{children:(0,l.jsx)(u.a,{href:`#widthfull-is-the-default`,children:`width="full"`})}),`
`,(0,l.jsx)(u.li,{children:(0,l.jsx)(u.a,{href:`#widthcompact`,children:`width="compact"`})}),`
`]}),`
`]}),`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.a,{href:`#with-affix`,children:`With affix`}),`
`,(0,l.jsxs)(u.ul,{children:[`
`,(0,l.jsx)(u.li,{children:(0,l.jsx)(u.a,{href:`#interactive-menu-example`,children:`Interactive Menu Example`})}),`
`]}),`
`]}),`
`,(0,l.jsx)(u.li,{children:(0,l.jsx)(u.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,l.jsx)(u.hr,{}),`
`,(0,l.jsx)(u.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(u.p,{children:`The container controls the props around opened. The only exception is openedDefault with behavior="isolated"`}),`
`,(0,l.jsx)(u.pre,{children:(0,l.jsx)(u.code,{className:`language-jsx`,children:`import { Accordion } from "@qlik/sprout-react";

<Accordion.Container
  variant="default"
  renderContent
  openedDefault={0}
  behavior="linked"
>
  <Accordion.Item header="first panel" description="" value="value">
    <p>Content</p>
  </Accordion.Item>
</Accordion.Container>;
`})}),`
`,(0,l.jsx)(u.h2,{id:`properties`,children:`Properties`}),`
`,(0,l.jsx)(u.h3,{id:`accordioncontainer`,children:`Accordion.Container`}),`
`,(0,l.jsx)(n,{of:a}),`
`,(0,l.jsx)(t,{of:a}),`
`,(0,l.jsx)(u.h3,{id:`accordionitem`,children:`Accordion.Item`}),`
`,(0,l.jsx)(n,{of:o}),`
`,(0,l.jsx)(t,{of:o}),`
`,(0,l.jsx)(u.h2,{id:`variant-quiet`,children:`Variant quiet`}),`
`,(0,l.jsx)(u.p,{children:`For a more subtle look, use the quiet style. Remember to leave room for outer spacing/parent padding.
It will apply the rounded corners style at the same time`}),`
`,(0,l.jsx)(u.pre,{children:(0,l.jsx)(u.code,{className:`language-jsx`,children:`<Accordion.Container variant="quiet">
  <Accordion.Item header="So you don t repeat here">
    <p>Content</p>
  </Accordion.Item>
</Accordion.Container>
`})}),`
`,(0,l.jsx)(u.p,{children:`Or at the Accordion.Item level it can does the same in case it used outside of the container.`}),`
`,(0,l.jsx)(u.pre,{children:(0,l.jsx)(u.code,{className:`language-jsx`,children:`<Accordion.Item header="Click me" variant="quiet">
  <p>Content</p>
</Accordion.Item>
`})}),`
`,(0,l.jsx)(u.h2,{id:`accordionitem-width`,children:`Accordion.Item Width`}),`
`,(0,l.jsx)(u.h3,{id:`widthfull-is-the-default`,children:`width="full" (is the default)`}),`
`,(0,l.jsx)(u.p,{children:`With accordion headers that span the full width on the container.`}),`
`,(0,l.jsx)(u.pre,{children:(0,l.jsx)(u.code,{className:`language-jsx`,children:`<Accordion.Item header="Full width panel">
  <p>Content</p>
</Accordion.Item>
`})}),`
`,(0,l.jsx)(u.h3,{id:`widthcompact`,children:`width="compact"`}),`
`,(0,l.jsx)(u.p,{children:`Accordion headers with variable width based on label, suitable for isolated instances of a single accordion item.`}),`
`,(0,l.jsx)(u.pre,{children:(0,l.jsx)(u.code,{className:`language-jsx`,children:`<Accordion.Item header="Full width panel" width="compact">
  <p>Content</p>
</Accordion.Item>
`})}),`
`,(0,l.jsx)(u.h2,{id:`with-affix`,children:`With affix`}),`
`,(0,l.jsxs)(u.p,{children:[`The `,(0,l.jsx)(u.code,{children:`affix`}),` prop allows you to add custom content (like action buttons or menus) to the right side of the accordion header.`]}),`
`,(0,l.jsx)(u.h3,{id:`interactive-menu-example`,children:`Interactive Menu Example`}),`
`,(0,l.jsx)(u.p,{children:`You can add interactive elements like menus to provide additional actions for each accordion item:`}),`
`,(0,l.jsx)(n,{of:s}),`
`,(0,l.jsx)(u.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,l.jsx)(u.p,{children:(0,l.jsx)(u.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/accordion/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Accordion`})}),`
`,(0,l.jsxs)(u.ul,{children:[`
`,(0,l.jsxs)(u.li,{children:[`AccordionHeader use a `,(0,l.jsx)(u.code,{children:`button`}),` to trigger the visibility of the content`]}),`
`,(0,l.jsxs)(u.li,{children:[`use semantic header if needed (h2 ... h6) using the `,(0,l.jsx)(u.code,{children:`level`}),` props`]}),`
`,(0,l.jsxs)(u.li,{children:[`AccordionHeader use `,(0,l.jsx)(u.code,{children:`aria-expanded`})]}),`
`,(0,l.jsxs)(u.li,{children:[`AccordionHeader use `,(0,l.jsx)(u.code,{children:`aria-controls`}),` with a generated section id (fallback on provided id)`]}),`
`,(0,l.jsxs)(u.li,{children:[`AccordionItem content use `,(0,l.jsx)(u.code,{children:`aria-labelledby`}),` to refer to the header`]}),`
`,(0,l.jsxs)(u.li,{children:[`AccordionItem content set the role `,(0,l.jsx)(u.code,{children:`region`})]}),`
`]}),`
`,(0,l.jsx)(u.p,{children:`Keyboard interaction`}),`
`,(0,l.jsxs)(u.ul,{children:[`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`Enter`}),` or `,(0,l.jsx)(u.code,{children:`Space`}),`: When focus is on the accordion header for a collapsed panel, expands the associated panel. If the implementation allows only one panel to be expanded, and if another panel is expanded, collapses that panel.
When focus is on the accordion header for an expanded panel, collapses the panel if the implementation supports collapsing. Some implementations require one panel to be expanded at all times and allow only one panel to be expanded; so, they do not support a collapse function. -`,(0,l.jsx)(u.code,{children:`Tab`}),`: Moves focus to the next focusable element; all focusable elements in the accordion are included in the page Tab sequence.`]}),`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`Shift + Tab`}),`: Moves focus to the previous focusable element; all focusable elements in the accordion are included in the page Tab sequence.`]}),`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`ArrowDown`}),`: If focus is on an accordion header, moves focus to the next accordion header. If focus is on the last accordion header, either does nothing or moves focus to the first accordion header.`]}),`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`ArrowUp`}),`: If focus is on an accordion header, moves focus to the previous accordion header. If focus is on the first accordion header, either does nothing or moves focus to the last accordion header.`]}),`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`Home`}),`: When focus is on an accordion header, moves focus to the first accordion header.`]}),`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`End`}),`: When focus is on an accordion header, moves focus to the last accordion header.`]}),`
`]})]})}function d(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}export{d as default};