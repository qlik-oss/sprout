import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Lc6HZYGU.js";import{Fn as n,i as r,l as i,n as a,s as o}from"./iframe-RiXBydPV.js";import{t as s}from"./mdx-react-shim-Cw1WyOhr.js";import{ContainerPlayground as c,ItemPlayground as l,WithAffix as u,n as d,t as f}from"./Accordion.stories-B4YObuat.js";function p(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{title:`Components/Accordion`,of:f}),`
`,(0,h.jsx)(n.h1,{id:`accordion`,children:`Accordion`}),`
`,(0,h.jsx)(n.p,{children:`An accordion component in a design system enables content to be expanded or collapsed, helping organize information neatly and reducing visual clutter.`}),`
`,(0,h.jsx)(n.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:`#usage`,children:`Usage`})}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.a,{href:`#properties`,children:`Properties`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:`#accordioncontainer`,children:`Accordion.Container`})}),`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:`#accordionitem`,children:`Accordion.Item`})}),`
`]}),`
`]}),`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:`#variant-quiet`,children:`Variant quiet`})}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.a,{href:`#accordionitem-width`,children:`Accordion.Item Width`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:`#widthfull-is-the-default`,children:`width="full"`})}),`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:`#widthcompact`,children:`width="compact"`})}),`
`]}),`
`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.a,{href:`#with-affix`,children:`With affix`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:`#interactive-menu-example`,children:`Interactive Menu Example`})}),`
`]}),`
`]}),`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,h.jsx)(n.hr,{}),`
`,(0,h.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsx)(n.p,{children:`The container controls the props around opened. The only exception is openedDefault with behavior="isolated"`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`import { Accordion } from "@qlik/sprout-react";

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
`,(0,h.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,h.jsx)(n.h3,{id:`accordioncontainer`,children:`Accordion.Container`}),`
`,(0,h.jsx)(a,{of:c}),`
`,(0,h.jsx)(r,{of:c}),`
`,(0,h.jsx)(n.h3,{id:`accordionitem`,children:`Accordion.Item`}),`
`,(0,h.jsx)(a,{of:l}),`
`,(0,h.jsx)(r,{of:l}),`
`,(0,h.jsx)(n.h2,{id:`variant-quiet`,children:`Variant quiet`}),`
`,(0,h.jsx)(n.p,{children:`For a more subtle look, use the quiet style. Remember to leave room for outer spacing/parent padding.
It will apply the rounded corners style at the same time`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Accordion.Container variant="quiet">
  <Accordion.Item header="So you don t repeat here">
    <p>Content</p>
  </Accordion.Item>
</Accordion.Container>
`})}),`
`,(0,h.jsx)(n.p,{children:`Or at the Accordion.Item level it can does the same in case it used outside of the container.`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Accordion.Item header="Click me" variant="quiet">
  <p>Content</p>
</Accordion.Item>
`})}),`
`,(0,h.jsx)(n.h2,{id:`accordionitem-width`,children:`Accordion.Item Width`}),`
`,(0,h.jsx)(n.h3,{id:`widthfull-is-the-default`,children:`width="full" (is the default)`}),`
`,(0,h.jsx)(n.p,{children:`With accordion headers that span the full width on the container.`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Accordion.Item header="Full width panel">
  <p>Content</p>
</Accordion.Item>
`})}),`
`,(0,h.jsx)(n.h3,{id:`widthcompact`,children:`width="compact"`}),`
`,(0,h.jsx)(n.p,{children:`Accordion headers with variable width based on label, suitable for isolated instances of a single accordion item.`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Accordion.Item header="Full width panel" width="compact">
  <p>Content</p>
</Accordion.Item>
`})}),`
`,(0,h.jsx)(n.h2,{id:`with-affix`,children:`With affix`}),`
`,(0,h.jsxs)(n.p,{children:[`The `,(0,h.jsx)(n.code,{children:`affix`}),` prop allows you to add custom content (like action buttons or menus) to the right side of the accordion header.`]}),`
`,(0,h.jsx)(n.h3,{id:`interactive-menu-example`,children:`Interactive Menu Example`}),`
`,(0,h.jsx)(n.p,{children:`You can add interactive elements like menus to provide additional actions for each accordion item:`}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsx)(n.p,{children:(0,h.jsx)(n.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/accordion/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Accordion`})}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsxs)(n.li,{children:[`AccordionHeader use a `,(0,h.jsx)(n.code,{children:`button`}),` to trigger the visibility of the content`]}),`
`,(0,h.jsxs)(n.li,{children:[`use semantic header if needed (h2 ... h6) using the `,(0,h.jsx)(n.code,{children:`level`}),` props`]}),`
`,(0,h.jsxs)(n.li,{children:[`AccordionHeader use `,(0,h.jsx)(n.code,{children:`aria-expanded`})]}),`
`,(0,h.jsxs)(n.li,{children:[`AccordionHeader use `,(0,h.jsx)(n.code,{children:`aria-controls`}),` with a generated section id (fallback on provided id)`]}),`
`,(0,h.jsxs)(n.li,{children:[`AccordionItem content use `,(0,h.jsx)(n.code,{children:`aria-labelledby`}),` to refer to the header`]}),`
`,(0,h.jsxs)(n.li,{children:[`AccordionItem content set the role `,(0,h.jsx)(n.code,{children:`region`})]}),`
`]}),`
`,(0,h.jsx)(n.p,{children:`Keyboard interaction`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`Enter`}),` or `,(0,h.jsx)(n.code,{children:`Space`}),`: When focus is on the accordion header for a collapsed panel, expands the associated panel. If the implementation allows only one panel to be expanded, and if another panel is expanded, collapses that panel.
When focus is on the accordion header for an expanded panel, collapses the panel if the implementation supports collapsing. Some implementations require one panel to be expanded at all times and allow only one panel to be expanded; so, they do not support a collapse function. -`,(0,h.jsx)(n.code,{children:`Tab`}),`: Moves focus to the next focusable element; all focusable elements in the accordion are included in the page Tab sequence.`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`Shift + Tab`}),`: Moves focus to the previous focusable element; all focusable elements in the accordion are included in the page Tab sequence.`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`ArrowDown`}),`: If focus is on an accordion header, moves focus to the next accordion header. If focus is on the last accordion header, either does nothing or moves focus to the first accordion header.`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`ArrowUp`}),`: If focus is on an accordion header, moves focus to the previous accordion header. If focus is on the first accordion header, either does nothing or moves focus to the last accordion header.`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`Home`}),`: When focus is on an accordion header, moves focus to the first accordion header.`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`End`}),`: When focus is on an accordion header, moves focus to the last accordion header.`]}),`
`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=n(),s(),i(),d()}))();export{m as default};