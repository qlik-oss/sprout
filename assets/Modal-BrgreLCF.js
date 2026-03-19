import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-DTk7xy32.js";import{n as i}from"./lib-EjdzwnHJ.js";import"./Icons-DrVGfMuG.js";import"./Modal.argTypes-jAPysF7u.js";import{Playground as a,t as o}from"./Modal.stories-CT2KARY0.js";import{Actions as s}from"./ModalActions.stories-CbkWssTQ.js";import{Content as c}from"./ModalContent.stories-DeL7i6ZR.js";import{Header as l}from"./ModalHeader.stories-CTUQQYUe.js";import{Root as u}from"./ModalRoot.stories-DPg5vABM.js";var d=e();function f(e){let f={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{of:o}),`
`,(0,d.jsx)(f.h1,{id:`modal`,children:`Modal`}),`
`,(0,d.jsxs)(f.p,{children:[`Please first read the `,(0,d.jsx)(f.a,{href:`https://internal.qlik.dev/design/sprout/components/modal/`,rel:`nofollow`,children:`Modal`}),` documentation on usage of the Modal component to understand it's API.`]}),`
`,(0,d.jsxs)(f.p,{children:[`The Modal exposes two usage API patterns: a `,(0,d.jsx)(f.strong,{children:`props-driven API`}),` for a quick configuration and a `,(0,d.jsx)(f.strong,{children:`composition API`}),` for full structural control.`]}),`
`,(0,d.jsx)(f.h2,{id:`table-of-contents`,children:`Table of contents`}),`
`,(0,d.jsxs)(f.ul,{children:[`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.a,{href:`#usage`,children:`Usage`})}),`
`,(0,d.jsxs)(f.li,{children:[(0,d.jsx)(f.a,{href:`#properties`,children:`Properties`}),`
`,(0,d.jsxs)(f.ul,{children:[`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.a,{href:`#modalroot`,children:`Modal.Root`})}),`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.a,{href:`#modalheader`,children:`Modal.Header`})}),`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.a,{href:`#modalcontent`,children:`Modal.Content`})}),`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.a,{href:`#modalactions`,children:`Modal.Actions`})}),`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.a,{href:`#modalprops-props-driven-api`,children:`ModalProps (props-driven API)`})}),`
`]}),`
`]}),`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.a,{href:`#style`,children:`Style`})}),`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.a,{href:`#accessibility`,children:`Accessibility`})}),`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.a,{href:`#breaking-changes`,children:`Breaking changes`})}),`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.a,{href:`#known-issues`,children:`Known issues`})}),`
`]}),`
`,(0,d.jsx)(f.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(f.pre,{children:(0,d.jsx)(f.code,{className:`language-tsx`,children:`import { Modal } from "@qlik/sprout-react";

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
`,(0,d.jsx)(f.h2,{id:`properties`,children:`Properties`}),`
`,(0,d.jsxs)(f.p,{children:[`Modal.Root extends attributes and properties from a standard `,(0,d.jsx)(f.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div#attributes`,rel:`nofollow`,children:`HTML div element`}),` and `,(0,d.jsx)(f.code,{children:`ModalContainerProps`}),`.`]}),`
`,(0,d.jsx)(f.h3,{id:`modalroot`,children:`Modal.Root`}),`
`,(0,d.jsx)(t,{of:u}),`
`,(0,d.jsx)(f.h3,{id:`modalheader`,children:`Modal.Header`}),`
`,(0,d.jsx)(n,{of:l}),`
`,(0,d.jsx)(t,{of:l}),`
`,(0,d.jsx)(f.h3,{id:`modalcontent`,children:`Modal.Content`}),`
`,(0,d.jsx)(f.p,{children:`This component do not exists in Figma but it was part of the previous design.
To avoid too much repetition we keep it as a utility not required.`}),`
`,(0,d.jsx)(n,{of:c}),`
`,(0,d.jsx)(t,{of:c}),`
`,(0,d.jsx)(f.h3,{id:`modalactions`,children:`Modal.Actions`}),`
`,(0,d.jsx)(n,{of:s}),`
`,(0,d.jsx)(t,{of:s}),`
`,(0,d.jsx)(f.h3,{id:`modalprops-props-driven-api`,children:`ModalProps (props-driven API)`}),`
`,(0,d.jsx)(t,{of:a}),`
`,(0,d.jsx)(f.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,d.jsxs)(f.ul,{children:[`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG modal`})}),`
`]}),`
`,(0,d.jsx)(f.p,{children:`HTML structure`}),`
`,(0,d.jsxs)(f.ul,{children:[`
`,(0,d.jsxs)(f.li,{children:[(0,d.jsx)(f.code,{children:`Modal`}),` is a div with `,(0,d.jsx)(f.code,{children:`role="dialog"`}),` and `,(0,d.jsx)(f.code,{children:`aria-modal="true"`}),` attributes.`]}),`
`,(0,d.jsxs)(f.li,{children:[(0,d.jsx)(f.code,{children:`Modal`}),` structure is `,(0,d.jsx)(f.code,{children:`ModalBackdrop`}),` -> `,(0,d.jsx)(f.code,{children:`ModalContainer`}),` -> `,(0,d.jsx)(f.code,{children:`ModalHeader`}),` & `,(0,d.jsx)(f.code,{children:`ModalContent`}),` & `,(0,d.jsx)(f.code,{children:`ModalActions`}),`.`]}),`
`,(0,d.jsxs)(f.li,{children:[(0,d.jsx)(f.code,{children:`ModalBackdrop`}),` which is a simple div without any special attributes to it.`]}),`
`,(0,d.jsxs)(f.li,{children:[(0,d.jsx)(f.code,{children:`ModalContainer`}),` add `,(0,d.jsx)(f.code,{children:`aria-labelledby`}),` with the id of the `,(0,d.jsx)(f.code,{children:`ModalHeader`}),`'s title.`]}),`
`,(0,d.jsxs)(f.li,{children:[(0,d.jsx)(f.code,{children:`ModalContainer`}),` add `,(0,d.jsx)(f.code,{children:`aria-describedby`}),` with the id of the `,(0,d.jsx)(f.code,{children:`ModalHeader`}),`'s description.`]}),`
`]}),`
`,(0,d.jsx)(f.p,{children:`Keyboard navigation`}),`
`,(0,d.jsxs)(f.ul,{children:[`
`,(0,d.jsxs)(f.li,{children:[(0,d.jsx)(f.code,{children:`ModalContainer`}),` trap the focus except for floating-ui portals.`]}),`
`,(0,d.jsxs)(f.li,{children:[(0,d.jsx)(f.code,{children:`Escape`}),` key close the modal (can be prevented with `,(0,d.jsx)(f.code,{children:`preventEscaping`}),`).`]}),`
`]}),`
`,(0,d.jsx)(f.p,{children:`Mouse navigation`}),`
`,(0,d.jsxs)(f.ul,{children:[`
`,(0,d.jsxs)(f.li,{children:[(0,d.jsx)(f.code,{children:`click`}),` on the `,(0,d.jsx)(f.code,{children:`ModalBackdrop`}),` close the `,(0,d.jsx)(f.code,{children:`Modal`}),` (can be prevented with `,(0,d.jsx)(f.code,{children:`preventInteractiveBackdrop`}),` or `,(0,d.jsx)(f.code,{children:`preventEscaping`}),` properties).`]}),`
`]}),`
`,(0,d.jsx)(f.h2,{id:`known-issues`,children:`Known issues`}),`
`,(0,d.jsxs)(f.ul,{children:[`
`,(0,d.jsxs)(f.li,{children:[`When using a `,(0,d.jsx)(f.a,{href:`https://main--66c7483fb987c73a261ba13b.chromatic.com/?path=/docs/components-select--docs`,rel:`nofollow`,children:`Select`}),` near the bottom of a modal, interacting with it may cause the body to display a scrollbar — but only on the first click. This occurs because the modal is not aware of body scroll and does not reposition itself accordingly. This is a known limitation of `,(0,d.jsx)(f.code,{children:`floating-ui`}),`. For more details, see `,(0,d.jsx)(f.a,{href:`https://qlik-dev.atlassian.net/browse/DLS-387`,rel:`nofollow`,children:`DLS-387`}),`.`]}),`
`]})]})}function p(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(f,{...e})}):f(e)}export{p as default};