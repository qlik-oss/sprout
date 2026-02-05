import{j as e,M as a,a as o,C as r}from"./iframe-B4vjk2_C.js";import{useMDXComponents as s}from"./index-4mXTpVuF.js";import{S as l,C as t,I as c,W as h}from"./Accordion.stories-DRKBY97y.js";import"./preload-helper-PPVm8Dsz.js";import"./Filter-B97z2p0g.js";import"./Accordion-HDM6q4ol.js";import"./classNames-DaRWzB8T.js";import"./sprout-DTAeqvbL.js";import"./useListGesture-ChCl8FYv.js";import"./list-B1zo5gaH.js";import"./renderOrClone-D3fq_iUv.js";import"./useControl-DPltlHoP.js";import"./useId-DsPr7Fl4.js";import"./IconButton-Ba8Tcb-S.js";import"./Button-COVTwlCl.js";import"./icons-BjYZgjFf.js";import"./Button.module-C2ELNEem.js";import"./Badge-Coha5yr6.js";import"./Tooltip-D1n48xKC.js";import"./sprout-tokens-D9QRO1qB.js";import"./ProgressCircular-CXDJvuy2.js";import"./useI18n-DbSMZiRF.js";import"./Menu-BL50xBAN.js";import"./Divider-DqNucpfp.js";import"./NewTab-CGCvqCB9.js";import"./Skeleton-DGs4i03k.js";import"./TextField-BIeh6d0s.js";import"./useValueControl-f2Qxn85g.js";import"./Error-aRqdswEO.js";import"./InputButton-iEaXDKyM.js";import"./useFieldProps-DJ-a4x7W.js";import"./useFieldAriaProps-7JTDckGo.js";import"./Field-C-ZgIs6T.js";import"./FieldLabel-BSgk2xJ9.js";import"./Info-qvjQZ4-p.js";import"./InfoTooltipPrimitive-GcR7SVQV.js";import"./Popover-B32coOjQ.js";import"./HelperText-B-4Si9bt.js";function d(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/Accordion",of:l}),`
`,e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsx(n.p,{children:"An accordion component in a design system enables content to be expanded or collapsed, helping organize information neatly and reducing visual clutter."}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#properties",children:"Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#accordioncontainer",children:"Accordion.Container"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#accordionitem",children:"Accordion.Item"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#variant-quiet",children:"Variant quiet"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#accordionitem-width",children:"Accordion.Item Width"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#widthfull-is-the-default",children:'width="full"'})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#widthcompact",children:'width="compact"'})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#with-affix",children:"With affix"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#interactive-menu-example",children:"Interactive Menu Example"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#accessibility",children:"Accessibility"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:'The container controls the props around opened. The only exception is openedDefault with behavior="isolated"'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Accordion } from "@qlik/sprout-react";

<Accordion.Container variant="default" renderContent openedDefault={0} behavior="linked">
  <Accordion.Item header="first panel" description="" value="value">
    <p>Content</p>
  </Accordion.Item>
</Accordion.Container>;
`})}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(n.h3,{id:"accordioncontainer",children:"Accordion.Container"}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(n.h3,{id:"accordionitem",children:"Accordion.Item"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h2,{id:"variant-quiet",children:"Variant quiet"}),`
`,e.jsx(n.p,{children:`For a more subtle look, use the quiet style. Remember to leave room for outer spacing/parent padding.
It will apply the rounded corners style at the same time`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Accordion.Container variant="quiet">
  <Accordion.Item header="So you don t repeat here">
    <p>Content</p>
  </Accordion.Item>
</Accordion.Container>
`})}),`
`,e.jsx(n.p,{children:"Or at the Accordion.Item level it can does the same in case it used outside of the container."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Accordion.Item header="Click me" variant="quiet">
  <p>Content</p>
</Accordion.Item>
`})}),`
`,e.jsx(n.h2,{id:"accordionitem-width",children:"Accordion.Item Width"}),`
`,e.jsx(n.h3,{id:"widthfull-is-the-default",children:'width="full" (is the default)'}),`
`,e.jsx(n.p,{children:"With accordion headers that span the full width on the container."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Accordion.Item header="Full width panel">
  <p>Content</p>
</Accordion.Item>
`})}),`
`,e.jsx(n.h3,{id:"widthcompact",children:'width="compact"'}),`
`,e.jsx(n.p,{children:"Accordion headers with variable width based on label, suitable for isolated instances of a single accordion item."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Accordion.Item header="Full width panel" width="compact">
  <p>Content</p>
</Accordion.Item>
`})}),`
`,e.jsx(n.h2,{id:"with-affix",children:"With affix"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"affix"})," prop allows you to add custom content (like action buttons or menus) to the right side of the accordion header."]}),`
`,e.jsx(n.h3,{id:"interactive-menu-example",children:"Interactive Menu Example"}),`
`,e.jsx(n.p,{children:"You can add interactive elements like menus to provide additional actions for each accordion item:"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",rel:"nofollow",children:"W3/WAI/ARIA/APG Accordion"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["AccordionHeader use a ",e.jsx(n.code,{children:"button"})," to trigger the visibility of the content"]}),`
`,e.jsxs(n.li,{children:["use semantic header if needed (h2 ... h6) using the ",e.jsx(n.code,{children:"level"})," props"]}),`
`,e.jsxs(n.li,{children:["AccordionHeader use ",e.jsx(n.code,{children:"aria-expanded"})]}),`
`,e.jsxs(n.li,{children:["AccordionHeader use ",e.jsx(n.code,{children:"aria-controls"})," with a generated section id (fallback on provided id)"]}),`
`,e.jsxs(n.li,{children:["AccordionItem content use ",e.jsx(n.code,{children:"aria-labelledby"})," to refer to the header"]}),`
`,e.jsxs(n.li,{children:["AccordionItem content set the role ",e.jsx(n.code,{children:"region"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Keyboard interaction"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"}),`: When focus is on the accordion header for a collapsed panel, expands the associated panel. If the implementation allows only one panel to be expanded, and if another panel is expanded, collapses that panel.
When focus is on the accordion header for an expanded panel, collapses the panel if the implementation supports collapsing. Some implementations require one panel to be expanded at all times and allow only one panel to be expanded; so, they do not support a collapse function. -`,e.jsx(n.code,{children:"Tab"}),": Moves focus to the next focusable element; all focusable elements in the accordion are included in the page Tab sequence."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Shift + Tab"}),": Moves focus to the previous focusable element; all focusable elements in the accordion are included in the page Tab sequence."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ArrowDown"}),": If focus is on an accordion header, moves focus to the next accordion header. If focus is on the last accordion header, either does nothing or moves focus to the first accordion header."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ArrowUp"}),": If focus is on an accordion header, moves focus to the previous accordion header. If focus is on the first accordion header, either does nothing or moves focus to the last accordion header."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Home"}),": When focus is on an accordion header, moves focus to the first accordion header."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"End"}),": When focus is on an accordion header, moves focus to the last accordion header."]}),`
`]})]})}function J(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{J as default};
