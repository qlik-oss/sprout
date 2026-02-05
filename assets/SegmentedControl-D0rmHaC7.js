import{j as e,M as d,a as t,C as r}from"./iframe-BQJExRCF.js";import{useMDXComponents as s}from"./index-BiT2RrsF.js";import{S as c,P as i,a as l}from"./SegmentedControl.stories-DoqO_Djp.js";import"./preload-helper-PPVm8Dsz.js";import"./Bookmark-DEDDSCCD.js";import"./Icons-D8r5JLXA.js";import"./Add-CPO6AOva.js";import"./AiSparkles-ybqQooZU.js";import"./Next-BCf902gw.js";import"./Upload-JDlmgr1C.js";import"./Text-fjMciMda.js";import"./Close-VT6FC74F.js";import"./SortDescending-BWpZ9BF7.js";import"./Undo-B1PPlUQq.js";import"./Person-8oMSnh08.js";import"./Copy-ERSXBUQF.js";import"./Delete-CrLV--N3.js";import"./Filter-bb23MOEL.js";import"./Edit-Bc7r3LZJ.js";import"./Error-B95qseKK.js";import"./History-BSF-XiSG.js";import"./Search-B3R4dCNd.js";import"./Info-BfRROe8g.js";import"./Subtract-Ca-OouU7.js";import"./Map-pFYOI1fT.js";import"./NewTab-BMHt_Vx2.js";import"./Notification-BlWUDy4b.js";import"./Paste-Cd-nv27Q.js";import"./Warning-BB_ZpJQH.js";import"./Tenant-I_uTRlDg.js";import"./SegmentedControl-DjQBwedk.js";import"./sprout-DxA14K3u.js";import"./Field-BIldF_Al.js";import"./FieldLabel-BWOyYL3A.js";import"./classNames-B0wfWtWT.js";import"./useI18n-B99T9obj.js";import"./InfoTooltipPrimitive-BqPdPqRN.js";import"./Tooltip-CVFOQrqK.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DAgGzV0n.js";import"./useId-Drz8gmS2.js";import"./Popover-CTsqc6Mc.js";import"./HelperText-CWubgWiG.js";import"./useValueControl-CRzMHMlu.js";function a(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Components/SegmentedControl",of:c}),`
`,e.jsx(n.h1,{id:"segmentedcontrol",children:"SegmentedControl"}),`
`,e.jsx(n.p,{children:"The segmented control allows users to make a mutually exclusive selection from a range of predefined options, similar to a radio group but with a more compact and visually distinct layout."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SegmentedControl.Segment"})," directly inherits properties from ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input",rel:"nofollow",children:"HTML input element"})," and is set to ",e.jsx(n.code,{children:'type="radio"'}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { SegmentedControl } from "@qlik/sprout-css-react";

// With label and icon
<SegmentedControl.Group name="segmented-control-group">
  <SegmentedControl.Segment value="A" label="Segment" icon={<Star2 />} />
  <SegmentedControl.Segment value="B" label="Segment" icon={<Star2 />} />
  <SegmentedControl.Segment
    value="C"
    label="Segment"
    icon={<Star2 />}
    disabled
  />
</SegmentedControl.Group>;

// Icon only
<SegmentedControl.Group name="segmented-control-group" iconOnly>
  <SegmentedControl.Segment value="A" label="Segment" icon={<Star2 />} />
  <SegmentedControl.Segment value="B" label="Segment" icon={<Star2 />} />
  <SegmentedControl.Segment
    value="C"
    label="Segment"
    icon={<Star2 />}
    disabled
  />
</SegmentedControl.Group>;

// Vertical layout
<SegmentedControl.Group name="segmented-control-group" orientation="vertical">
  <SegmentedControl.Segment value="A" label="Segment" icon={<Star2 />} />
  <SegmentedControl.Segment value="B" label="Segment" icon={<Star2 />} />
  <SegmentedControl.Segment
    value="C"
    label="Segment"
    icon={<Star2 />}
    disabled
  />
</SegmentedControl.Group>;

// Set name either on the group or on each segment
<SegmentedControl.Group>
  <SegmentedControl.Segment
    value="A"
    label="Segment A"
    name="segmented-control-group"
  />
  <SegmentedControl.Segment
    value="B"
    label="Segment B"
    name="segmented-control-group"
  />
  <SegmentedControl.Segment
    value="C"
    label="Segment C"
    name="segmented-control-group"
    disabled
  />
</SegmentedControl.Group>;
`})}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(t,{of:i}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/radio/",rel:"nofollow",children:"W3/WAI/ARIA/APG RadioGroup"})}),`
`,e.jsx(n.p,{children:"HTML Structure"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The radio buttons are contained in or owned by an element with role ",e.jsx(n.code,{children:"radiogroup"}),"."]}),`
`,e.jsxs(n.li,{children:["Each radio button element has role ",e.jsx(n.code,{children:"radio"}),"."]}),`
`,e.jsxs(n.li,{children:["If a radio button is checked, the radio element has ",e.jsx(n.code,{children:"aria-checked"})," set to true. If it is not checked, it has ",e.jsx(n.code,{children:"aria-checked"})," set to false."]}),`
`,e.jsxs(n.li,{children:["Each radio element is labelled by its content, has a visible label referenced by ",e.jsx(n.code,{children:"aria-labelledby"}),", or has a label specified with ",e.jsx(n.code,{children:"aria-label"}),"."]}),`
`,e.jsxs(n.li,{children:["The radiogroup element has a visible label referenced by ",e.jsx(n.code,{children:"aria-labelledby"})," or has a label specified with ",e.jsx(n.code,{children:"aria-label"}),"."]}),`
`,e.jsxs(n.li,{children:["If elements providing additional information about either the radio group or each radio button are present, those elements are referenced by the radiogroup element or radio elements with the ",e.jsx(n.code,{children:"aria-describedby"})," property."]}),`
`,e.jsxs(n.li,{children:["HTML ",e.jsx(n.code,{children:"input"}),' element with type="checkbox" and type="radio" as these have built in semantics and do not require ARIA attributes. ',e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked",rel:"nofollow",children:"Source"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Keyboard navigation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tab"})," and ",e.jsx(n.code,{children:"Tab + Shift"}),": Move focus into and out of the radio group. When focus moves into a radio group, and a radio button is already checked, focus is set on the checked button. If none of the radio buttons are checked, focus is set on the first radio button in the group."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Space"}),": Checks the focused radio button if it is not already checked."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Right Arrow"})," and ",e.jsx(n.code,{children:"Down Arrow"}),": move focus to the next radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the last button, focus moves to the first button."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Left Arrow"})," and ",e.jsx(n.code,{children:"Up Arrow"}),": move focus to the previous radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the first button, focus moves to the last button."]}),`
`]})]})}function ne(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{ne as default};
