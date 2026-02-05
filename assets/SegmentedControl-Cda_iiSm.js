import{j as e,M as d,a as n,C as r}from"./iframe-B4vjk2_C.js";import{useMDXComponents as s}from"./index-4mXTpVuF.js";import{S as c,P as i,a as l}from"./SegmentedControl.stories-2f-mickV.js";import"./preload-helper-PPVm8Dsz.js";import"./Bookmark-CibNrEfK.js";import"./Icons-BmPwnPxU.js";import"./index-Z8VovJW6.js";import"./Add-CrXyYGj8.js";import"./AiSparkles-Dl0R-qK2.js";import"./Next-D7BL29gd.js";import"./Upload-CPekzzW9.js";import"./Text-VlP5SB55.js";import"./Close-CzhTZSOO.js";import"./SortDescending-B7jfx8Af.js";import"./Undo-9QyGmJ12.js";import"./Person-Dcr2ZAg5.js";import"./Copy-o7IORLfG.js";import"./Delete-B3An4l3N.js";import"./Filter-B97z2p0g.js";import"./Edit-DrJZ1rCf.js";import"./Error-aRqdswEO.js";import"./History-C5KmixAH.js";import"./Search-KjZbxp4C.js";import"./Info-qvjQZ4-p.js";import"./Subtract-CiGs9Rom.js";import"./Map-CaMFTBLm.js";import"./NewTab-CGCvqCB9.js";import"./Notification-Bvs5iQDr.js";import"./Paste-DdDmevxd.js";import"./Warning-mmXjUrwg.js";import"./Tenant-pz9GTM4b.js";import"./SegmentedControl-6w_wLoxw.js";import"./sprout-DTAeqvbL.js";import"./Field-C-ZgIs6T.js";import"./FieldLabel-BSgk2xJ9.js";import"./classNames-DaRWzB8T.js";import"./useI18n-DbSMZiRF.js";import"./InfoTooltipPrimitive-GcR7SVQV.js";import"./Tooltip-D1n48xKC.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-D3fq_iUv.js";import"./useId-DsPr7Fl4.js";import"./Popover-B32coOjQ.js";import"./HelperText-B-4Si9bt.js";import"./useValueControl-f2Qxn85g.js";function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Components/SegmentedControl",of:c}),`
`,e.jsx(o.h1,{id:"segmentedcontrol",children:"SegmentedControl"}),`
`,e.jsx(o.p,{children:"The segmented control allows users to make a mutually exclusive selection from a range of predefined options, similar to a radio group but with a more compact and visually distinct layout."}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"SegmentedControl.Segment"})," directly inherits properties from ",e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input",rel:"nofollow",children:"HTML input element"})," and is set to ",e.jsx(o.code,{children:'type="radio"'}),"."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { SegmentedControl } from "@qlik/sprout-react";

// With label and icon
<SegmentedControl.Group name="segmented-control-group">
  <SegmentedControl.Segment value="A" label="Segment" icon={<Star2 />} />
  <SegmentedControl.Segment value="B" label="Segment" icon={<Star2 />} />
  <SegmentedControl.Segment value="C" label="Segment" icon={<Star2 />} disabled />
</SegmentedControl.Group>;

// Icon only
<SegmentedControl.Group name="segmented-control-group" iconOnly>
  <SegmentedControl.Segment value="A" label="Segment" icon={<Star2 />} />
  <SegmentedControl.Segment value="B" label="Segment" icon={<Star2 />} />
  <SegmentedControl.Segment value="C" label="Segment" icon={<Star2 />} disabled />
</SegmentedControl.Group>;

// Vertical layout
<SegmentedControl.Group name="segmented-control-group" orientation="vertical">
  <SegmentedControl.Segment value="A" label="Segment" icon={<Star2 />} />
  <SegmentedControl.Segment value="B" label="Segment" icon={<Star2 />} />
  <SegmentedControl.Segment value="C" label="Segment" icon={<Star2 />} disabled />
</SegmentedControl.Group>;

// Set name either on the group or on each segment
<SegmentedControl.Group>
  <SegmentedControl.Segment value="A" label="Segment A" name="segmented-control-group" />
  <SegmentedControl.Segment value="B" label="Segment B" name="segmented-control-group" />
  <SegmentedControl.Segment value="C" label="Segment C" name="segmented-control-group" disabled />
</SegmentedControl.Group>;
`})}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(n,{of:i}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/radio/",rel:"nofollow",children:"W3/WAI/ARIA/APG RadioGroup"})}),`
`,e.jsx(o.p,{children:"HTML Structure"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["The radio buttons are contained in or owned by an element with role ",e.jsx(o.code,{children:"radiogroup"}),"."]}),`
`,e.jsxs(o.li,{children:["Each radio button element has role ",e.jsx(o.code,{children:"radio"}),"."]}),`
`,e.jsxs(o.li,{children:["If a radio button is checked, the radio element has ",e.jsx(o.code,{children:"aria-checked"})," set to true. If it is not checked, it has ",e.jsx(o.code,{children:"aria-checked"})," set to false."]}),`
`,e.jsxs(o.li,{children:["Each radio element is labelled by its content, has a visible label referenced by ",e.jsx(o.code,{children:"aria-labelledby"}),", or has a label specified with ",e.jsx(o.code,{children:"aria-label"}),"."]}),`
`,e.jsxs(o.li,{children:["The radiogroup element has a visible label referenced by ",e.jsx(o.code,{children:"aria-labelledby"})," or has a label specified with ",e.jsx(o.code,{children:"aria-label"}),"."]}),`
`,e.jsxs(o.li,{children:["If elements providing additional information about either the radio group or each radio button are present, those elements are referenced by the radiogroup element or radio elements with the ",e.jsx(o.code,{children:"aria-describedby"})," property."]}),`
`,e.jsxs(o.li,{children:["HTML ",e.jsx(o.code,{children:"input"}),' element with type="checkbox" and type="radio" as these have built in semantics and do not require ARIA attributes. ',e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked",rel:"nofollow",children:"Source"})]}),`
`]}),`
`,e.jsx(o.p,{children:"Keyboard navigation"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Tab"})," and ",e.jsx(o.code,{children:"Tab + Shift"}),": Move focus into and out of the radio group. When focus moves into a radio group, and a radio button is already checked, focus is set on the checked button. If none of the radio buttons are checked, focus is set on the first radio button in the group."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Space"}),": Checks the focused radio button if it is not already checked."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Right Arrow"})," and ",e.jsx(o.code,{children:"Down Arrow"}),": move focus to the next radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the last button, focus moves to the first button."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Left Arrow"})," and ",e.jsx(o.code,{children:"Up Arrow"}),": move focus to the previous radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the first button, focus moves to the last button."]}),`
`]})]})}function te(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a(t)}export{te as default};
