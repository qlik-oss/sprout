import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,i as r,l as i,n as a,s as o}from"./iframe-B0xl5hqz.js";import{t as s}from"./mdx-react-shim-C5WuC5zb.js";import{Playground as c,n as l,t as u}from"./Modal.stories-BnIlOO1n.js";import{Actions as d,t as f}from"./ModalActions.stories-gD1D8vdY.js";import{Content as p,t as m}from"./ModalContent.stories-CAQV5d54.js";import{Header as h,t as g}from"./ModalHeader.stories-D9_YEaue.js";import{Root as _,t as v}from"./ModalRoot.stories-CSbLOklA.js";function y(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o,{of:u}),`
`,(0,x.jsx)(n.h1,{id:`modal`,children:`Modal`}),`
`,(0,x.jsxs)(n.p,{children:[`Please first read the `,(0,x.jsx)(n.a,{href:`https://internal.qlik.dev/design/sprout/components/modal/`,rel:`nofollow`,children:`Modal`}),` documentation on usage of the Modal component to understand it's API.`]}),`
`,(0,x.jsxs)(n.p,{children:[`The Modal exposes two usage API patterns: a `,(0,x.jsx)(n.strong,{children:`props-driven API`}),` for a quick configuration and a `,(0,x.jsx)(n.strong,{children:`composition API`}),` for full structural control.`]}),`
`,(0,x.jsx)(n.h2,{id:`table-of-contents`,children:`Table of contents`}),`
`,(0,x.jsxs)(n.ul,{children:[`
`,(0,x.jsx)(n.li,{children:(0,x.jsx)(n.a,{href:`#usage`,children:`Usage`})}),`
`,(0,x.jsxs)(n.li,{children:[(0,x.jsx)(n.a,{href:`#properties`,children:`Properties`}),`
`,(0,x.jsxs)(n.ul,{children:[`
`,(0,x.jsx)(n.li,{children:(0,x.jsx)(n.a,{href:`#modalroot`,children:`Modal.Root`})}),`
`,(0,x.jsx)(n.li,{children:(0,x.jsx)(n.a,{href:`#modalheader`,children:`Modal.Header`})}),`
`,(0,x.jsx)(n.li,{children:(0,x.jsx)(n.a,{href:`#modalcontent`,children:`Modal.Content`})}),`
`,(0,x.jsx)(n.li,{children:(0,x.jsx)(n.a,{href:`#modalactions`,children:`Modal.Actions`})}),`
`,(0,x.jsx)(n.li,{children:(0,x.jsx)(n.a,{href:`#modalprops-props-driven-api`,children:`ModalProps (props-driven API)`})}),`
`]}),`
`]}),`
`,(0,x.jsx)(n.li,{children:(0,x.jsx)(n.a,{href:`#style`,children:`Style`})}),`
`,(0,x.jsx)(n.li,{children:(0,x.jsx)(n.a,{href:`#accessibility`,children:`Accessibility`})}),`
`,(0,x.jsx)(n.li,{children:(0,x.jsx)(n.a,{href:`#breaking-changes`,children:`Breaking changes`})}),`
`,(0,x.jsx)(n.li,{children:(0,x.jsx)(n.a,{href:`#known-issues`,children:`Known issues`})}),`
`]}),`
`,(0,x.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,x.jsx)(n.pre,{children:(0,x.jsx)(n.code,{className:`language-tsx`,children:`import { Modal } from "@qlik/sprout-react";

// props API
<Modal
  visible
  variant="dialog"
  headerTitle="Title"
  headerDescription="Description"
  onClose={() => {}}
  preventEscaping // escape do not close
  preventInteractiveBackdrop // click on backdrop do not close
  footerLeft={<Checkbox name="checkbox-name" label="Checkbox label" onChange={() => {}} />}
  footerActions={
    <>
      <Button variant="secondary" label="Secondary action" onClick={() => {}} />
      <Button variant="primary" label="Primary action" onClick={() => {}} />
    </>
  }
>
  <Modal.Content padding overflowY="none">
    What ever you want inside the body
  </div>
</Modal>;

// Composition API
import { Modal } from "@qlik/sprout-react";

<Modal.Root visible variant="dialog">
  <Modal.Header description="Header description">Header title</Modal.Header>
  <Modal.Content padding overflowY="auto">
    What ever you want inside the body
  </Modal.Content>
  <Modal.Actions left={<Checkbox name="checkbox-name" label="Checkbox label" onChange={() => {}} />}>
    <Button variant="secondary" label="Secondary action" onClick={() => {}} />
    <Button variant="primary" label="Primary action" onClick={() => {}} />
  </Modal.Actions>
</Modal.Root>
`})}),`
`,(0,x.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,x.jsxs)(n.p,{children:[`Modal.Root extends attributes and properties from a standard `,(0,x.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div#attributes`,rel:`nofollow`,children:`HTML div element`}),` and `,(0,x.jsx)(n.code,{children:`ModalContainerProps`}),`.`]}),`
`,(0,x.jsx)(n.h3,{id:`modalroot`,children:`Modal.Root`}),`
`,(0,x.jsx)(r,{of:_}),`
`,(0,x.jsx)(n.h3,{id:`modalheader`,children:`Modal.Header`}),`
`,(0,x.jsx)(a,{of:h}),`
`,(0,x.jsx)(r,{of:h}),`
`,(0,x.jsx)(n.h3,{id:`modalcontent`,children:`Modal.Content`}),`
`,(0,x.jsx)(n.p,{children:`This component do not exists in Figma but it was part of the previous design.
To avoid too much repetition we keep it as a utility not required.`}),`
`,(0,x.jsx)(a,{of:p}),`
`,(0,x.jsx)(r,{of:p}),`
`,(0,x.jsx)(n.h3,{id:`modalactions`,children:`Modal.Actions`}),`
`,(0,x.jsx)(a,{of:d}),`
`,(0,x.jsx)(r,{of:d}),`
`,(0,x.jsx)(n.h3,{id:`modalprops-props-driven-api`,children:`ModalProps (props-driven API)`}),`
`,(0,x.jsx)(r,{of:c}),`
`,(0,x.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,x.jsxs)(n.ul,{children:[`
`,(0,x.jsx)(n.li,{children:(0,x.jsx)(n.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG modal`})}),`
`]}),`
`,(0,x.jsx)(n.p,{children:`HTML structure`}),`
`,(0,x.jsxs)(n.ul,{children:[`
`,(0,x.jsxs)(n.li,{children:[(0,x.jsx)(n.code,{children:`Modal`}),` is a div with `,(0,x.jsx)(n.code,{children:`role="dialog"`}),` and `,(0,x.jsx)(n.code,{children:`aria-modal="true"`}),` attributes.`]}),`
`,(0,x.jsxs)(n.li,{children:[(0,x.jsx)(n.code,{children:`Modal`}),` structure is `,(0,x.jsx)(n.code,{children:`ModalBackdrop`}),` -> `,(0,x.jsx)(n.code,{children:`ModalContainer`}),` -> `,(0,x.jsx)(n.code,{children:`ModalHeader`}),` & `,(0,x.jsx)(n.code,{children:`ModalContent`}),` & `,(0,x.jsx)(n.code,{children:`ModalActions`}),`.`]}),`
`,(0,x.jsxs)(n.li,{children:[(0,x.jsx)(n.code,{children:`ModalBackdrop`}),` which is a simple div without any special attributes to it.`]}),`
`,(0,x.jsxs)(n.li,{children:[(0,x.jsx)(n.code,{children:`ModalContainer`}),` add `,(0,x.jsx)(n.code,{children:`aria-labelledby`}),` with the id of the `,(0,x.jsx)(n.code,{children:`ModalHeader`}),`'s title.`]}),`
`,(0,x.jsxs)(n.li,{children:[(0,x.jsx)(n.code,{children:`ModalContainer`}),` add `,(0,x.jsx)(n.code,{children:`aria-describedby`}),` with the id of the `,(0,x.jsx)(n.code,{children:`ModalHeader`}),`'s description.`]}),`
`]}),`
`,(0,x.jsx)(n.p,{children:`Keyboard navigation`}),`
`,(0,x.jsxs)(n.ul,{children:[`
`,(0,x.jsxs)(n.li,{children:[(0,x.jsx)(n.code,{children:`ModalContainer`}),` trap the focus except for floating-ui portals.`]}),`
`,(0,x.jsxs)(n.li,{children:[(0,x.jsx)(n.code,{children:`Escape`}),` key close the modal (can be prevented with `,(0,x.jsx)(n.code,{children:`preventEscaping`}),`).`]}),`
`]}),`
`,(0,x.jsx)(n.p,{children:`Mouse navigation`}),`
`,(0,x.jsxs)(n.ul,{children:[`
`,(0,x.jsxs)(n.li,{children:[(0,x.jsx)(n.code,{children:`click`}),` on the `,(0,x.jsx)(n.code,{children:`ModalBackdrop`}),` close the `,(0,x.jsx)(n.code,{children:`Modal`}),` (can be prevented with `,(0,x.jsx)(n.code,{children:`preventInteractiveBackdrop`}),` or `,(0,x.jsx)(n.code,{children:`preventEscaping`}),` properties).`]}),`
`]}),`
`,(0,x.jsx)(n.h2,{id:`known-issues`,children:`Known issues`}),`
`,(0,x.jsxs)(n.ul,{children:[`
`,(0,x.jsxs)(n.li,{children:[`When using a `,(0,x.jsx)(n.a,{href:`https://main--66c7483fb987c73a261ba13b.chromatic.com/?path=/docs/components-select--docs`,rel:`nofollow`,children:`Select`}),` near the bottom of a modal, interacting with it may cause the body to display a scrollbar — but only on the first click. This occurs because the modal is not aware of body scroll and does not reposition itself accordingly. This is a known limitation of `,(0,x.jsx)(n.code,{children:`floating-ui`}),`. For more details, see `,(0,x.jsx)(n.a,{href:`https://qlik-dev.atlassian.net/browse/DLS-387`,rel:`nofollow`,children:`DLS-387`}),`.`]}),`
`]})]})}function b(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,x.jsx)(n,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;e((()=>{x=n(),s(),i(),l(),f(),m(),g(),v()}))();export{b as default};