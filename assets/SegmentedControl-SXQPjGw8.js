import{j as e,M as d,a as n,C as r}from"./iframe-B4Gn7jRD.js";import{useMDXComponents as s}from"./index-BtGsBDbQ.js";import{S as c,P as i,a as l}from"./SegmentedControl.stories-B45SH44u.js";import"./preload-helper-PPVm8Dsz.js";import"./Bookmark-CKHX2VYo.js";import"./Icons-Cn4ElvJa.js";import"./index-9KegtbkR.js";import"./Add-CKNXHNSz.js";import"./Next-C0judd8d.js";import"./Upload-BAurdPXS.js";import"./Text-BW23LcKZ.js";import"./Close-DbHLglso.js";import"./SortDescending-CucUSsiY.js";import"./Undo-DLO9n_h1.js";import"./Person-CNI9Q8fr.js";import"./Copy-NISNc1Lm.js";import"./Delete-fA9YqxRL.js";import"./Filter-khtwO5TH.js";import"./Edit-BJvse-oo.js";import"./Error-ClTRWykU.js";import"./GenerateWithAi-C6A5sahu.js";import"./History-CgCTywjh.js";import"./Search-DN4_Th9X.js";import"./Info-C0xP7z1J.js";import"./Subtract-BjFnpmMb.js";import"./Map-DeFMr3_u.js";import"./NewTab-BFfS-RhS.js";import"./Notification-CGfvhvJZ.js";import"./Paste-DGzyaON5.js";import"./Warning-BFJpCY38.js";import"./Tenant-D8URuGVO.js";import"./SegmentedControl-n9ApX7cP.js";import"./sprout-CWCWYkgH.js";import"./Field-C61xY5sZ.js";import"./FieldLabel-DN1zz7rD.js";import"./classNames-CTBLippR.js";import"./useI18n-DOe-EdfE.js";import"./InfoTooltipPrimitive-YcCF56yH.js";import"./Tooltip-BG958zrQ.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-COCCCrf6.js";import"./useId-DXegRsHP.js";import"./Popover-CYDrc_g3.js";import"./HelperText-BkP0Ayki.js";import"./useValueControl-_ZNYrQQF.js";function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Components/SegmentedControl",of:c}),`
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
