import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Lc6HZYGU.js";import{Fn as n,i as r,l as i,n as a,s as o}from"./iframe-RiXBydPV.js";import{t as s}from"./mdx-react-shim-Cw1WyOhr.js";import{Playground as c,Segment as l,n as u,t as d}from"./SegmentedControl.stories-CF59x9np.js";function f(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{title:`Components/SegmentedControl`,of:d}),`
`,(0,m.jsx)(n.h1,{id:`segmentedcontrol`,children:`SegmentedControl`}),`
`,(0,m.jsx)(n.p,{children:`The segmented control allows users to make a mutually exclusive selection from a range of predefined options, similar to a radio group but with a more compact and visually distinct layout.`}),`
`,(0,m.jsxs)(n.p,{children:[`The `,(0,m.jsx)(n.code,{children:`SegmentedControl.Segment`}),` directly inherits properties from `,(0,m.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input`,rel:`nofollow`,children:`HTML input element`}),` and is set to `,(0,m.jsx)(n.code,{children:`type="radio"`}),`.`]}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { SegmentedControl } from "@qlik/sprout-react";

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
`,(0,m.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(r,{of:c}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsx)(r,{of:l}),`
`,(0,m.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsx)(n.p,{children:(0,m.jsx)(n.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/radio/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG RadioGroup`})}),`
`,(0,m.jsx)(n.p,{children:`HTML Structure`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsxs)(n.li,{children:[`The radio buttons are contained in or owned by an element with role `,(0,m.jsx)(n.code,{children:`radiogroup`}),`.`]}),`
`,(0,m.jsxs)(n.li,{children:[`Each radio button element has role `,(0,m.jsx)(n.code,{children:`radio`}),`.`]}),`
`,(0,m.jsxs)(n.li,{children:[`If a radio button is checked, the radio element has `,(0,m.jsx)(n.code,{children:`aria-checked`}),` set to true. If it is not checked, it has `,(0,m.jsx)(n.code,{children:`aria-checked`}),` set to false.`]}),`
`,(0,m.jsxs)(n.li,{children:[`Each radio element is labelled by its content, has a visible label referenced by `,(0,m.jsx)(n.code,{children:`aria-labelledby`}),`, or has a label specified with `,(0,m.jsx)(n.code,{children:`aria-label`}),`.`]}),`
`,(0,m.jsxs)(n.li,{children:[`The radiogroup element has a visible label referenced by `,(0,m.jsx)(n.code,{children:`aria-labelledby`}),` or has a label specified with `,(0,m.jsx)(n.code,{children:`aria-label`}),`.`]}),`
`,(0,m.jsxs)(n.li,{children:[`If elements providing additional information about either the radio group or each radio button are present, those elements are referenced by the radiogroup element or radio elements with the `,(0,m.jsx)(n.code,{children:`aria-describedby`}),` property.`]}),`
`,(0,m.jsxs)(n.li,{children:[`HTML `,(0,m.jsx)(n.code,{children:`input`}),` element with type="checkbox" and type="radio" as these have built in semantics and do not require ARIA attributes. `,(0,m.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked`,rel:`nofollow`,children:`Source`})]}),`
`]}),`
`,(0,m.jsx)(n.p,{children:`Keyboard navigation`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Tab`}),` and `,(0,m.jsx)(n.code,{children:`Tab + Shift`}),`: Move focus into and out of the radio group. When focus moves into a radio group, and a radio button is already checked, focus is set on the checked button. If none of the radio buttons are checked, focus is set on the first radio button in the group.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Space`}),`: Checks the focused radio button if it is not already checked.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Right Arrow`}),` and `,(0,m.jsx)(n.code,{children:`Down Arrow`}),`: move focus to the next radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the last button, focus moves to the first button.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Left Arrow`}),` and `,(0,m.jsx)(n.code,{children:`Up Arrow`}),`: move focus to the previous radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the first button, focus moves to the last button.`]}),`
`]})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=n(),s(),i(),u()}))();export{p as default};