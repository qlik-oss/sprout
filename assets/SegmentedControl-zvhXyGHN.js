import{j as e,M as d,a as t,C as r}from"./iframe-BM36tKY9.js";import{useMDXComponents as s}from"./index-BCPnpXol.js";import{S as c,P as i,a as l}from"./SegmentedControl.stories-CmM66PiA.js";import"./preload-helper-PPVm8Dsz.js";import"./bookmark-D7CrCsbo.js";import"./Icons-CQdi0Qfk.js";import"./index-DM34Bggu.js";import"./add-VKxZMCZ1.js";import"./move-right-C1_1RL8h.js";import"./text-BT02E20n.js";import"./close-CYEv2BwJ.js";import"./upload-DAbLlB0c.js";import"./sort-descending-CgwSpVd_.js";import"./undo-BnneyCmg.js";import"./settings-DCJi43F0.js";import"./copy-5pLa4d1M.js";import"./delete-iC7mKKRu.js";import"./documentation-DEtevtWp.js";import"./edit-CKp5FD3E.js";import"./error-DJM79MqW.js";import"./favorited-BqMbjWSD.js";import"./generate-with-ai-C7ZdkiKx.js";import"./subtract-CmdG1iV6.js";import"./hide-BC9kgIHr.js";import"./history-Ce6MLgVu.js";import"./search-D3DMdc9S.js";import"./info-By4pCjMF.js";import"./person-BNKCLHkq.js";import"./map-DnBNu0cY.js";import"./more-vertical-BVZqPJep.js";import"./move-left-R6H6x7U2.js";import"./new-tab-CpKZypuy.js";import"./notification-Car9C9Fn.js";import"./paste-DywRabwS.js";import"./show-C6fFsymT.js";import"./warning-GTpknHYS.js";import"./tenant-CkbwWCOd.js";import"./SegmentedControl-k9nPUPAM.js";import"./sprout-BcBmzfoy.js";import"./Field-BP_0b4CU.js";import"./FieldLabel-DHI2P9wk.js";import"./classNames-D2MVtjzd.js";import"./useI18n-BRpGJeHe.js";import"./InfoTooltipPrimitive-B8ta45BR.js";import"./Tooltip-DOknWAYm.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-lrfYqLit.js";import"./useId-Cih_zwB8.js";import"./Popover-DaYy3ijw.js";import"./padding-BVrxRlLA.js";import"./HelperText-BT_m4RdC.js";import"./useValueControl-C1TwhPrN.js";function a(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Components/SegmentedControl",of:c}),`
`,e.jsx(n.h1,{id:"segmentedcontrol",children:"SegmentedControl"}),`
`,e.jsx(n.p,{children:"The segmented control allows users to make a mutually exclusive selection from a range of predefined options, similar to a radio group but with a more compact and visually distinct layout."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SegmentedControl.Segment"})," directly inherits properties from ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input",rel:"nofollow",children:"HTML input element"})," and is set to ",e.jsx(n.code,{children:'type="radio"'}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { SegmentedControl } from "@qlik/sprout-react";

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
`]})]})}function de(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{de as default};
