import{j as e,M as d,a as t,C as r}from"./iframe-DuYosUFD.js";import{useMDXComponents as s}from"./index-6fjbDpXn.js";import{S as c,P as i,a as l}from"./SegmentedControl.stories-BERSYrhU.js";import"./preload-helper-PPVm8Dsz.js";import"./bookmark-wwgiEeRj.js";import"./Icons-CxYMpq3s.js";import"./index-DcMjNI1G.js";import"./add-Vg2U0mSE.js";import"./move-right-k-BFnqYV.js";import"./text-CIJRCYzm.js";import"./close-Dyzj91Dc.js";import"./upload-ByT4gcdH.js";import"./sort-descending-BgZWkgGz.js";import"./undo-DK_DlrIJ.js";import"./settings-B-EBrcRv.js";import"./copy-CWKkJg96.js";import"./delete-D4O4nVVP.js";import"./documentation-DABWpqS4.js";import"./edit-DeXKaZx5.js";import"./error-CXY2goRU.js";import"./favorited-DIjhIM7P.js";import"./generate-with-ai-DxZm9B-P.js";import"./subtract-DEs7_1mh.js";import"./hide-D4X3-KSw.js";import"./history-CMLopSL0.js";import"./search-__Gpjj1t.js";import"./info-Bxa3p2DF.js";import"./person-C2sJpCzJ.js";import"./map-Be-Ow4bt.js";import"./more-vertical-B2Ek-mRZ.js";import"./move-left-DN19XWNV.js";import"./new-tab-Dp-d2eWd.js";import"./notification-DNCR-roH.js";import"./paste-scJGRfKP.js";import"./show-Gqxo-URH.js";import"./warning-DO6AU_ml.js";import"./tenant-r2v49Krg.js";import"./SegmentedControl-T8Lmx6sE.js";import"./sprout-CvRh1TM0.js";import"./Field-MvuQg19v.js";import"./FieldLabel-BP167ITs.js";import"./classNames-zePBlFY_.js";import"./useI18n-BjJPdLTM.js";import"./InfoTooltipPrimitive-D-yTz8eW.js";import"./Tooltip-BJFaRrUy.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-DjHAObcc.js";import"./useId-DRaip_NL.js";import"./Popover-D-qbv7RV.js";import"./padding-BWxXYvmb.js";import"./HelperText-6attHadj.js";import"./useValueControl-uslnr95T.js";function a(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Components/SegmentedControl",of:c}),`
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
