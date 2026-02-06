import{j as t,M as m,a as n,C as s}from"./iframe-itHhOQJ8.js";import{useMDXComponents as p}from"./index-M6OOd87p.js";import{a}from"./Button.stories-fvylRGla.js";import"./TextField.stories-DgYIkr17.js";import{S as l,P as i}from"./ButtonGroup.stories-C-1KAC_B.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-sGTd4JLT.js";import"./icons-CitEqhfm.js";import"./Button.argTypes-CAtneASM.js";import"./Icons-ShlI4R_X.js";import"./index-B_CWJT9D.js";import"./Next-Cf3Uq2yv.js";import"./Bookmark-B-8xOmKH.js";import"./Upload-Dc2Rb3D-.js";import"./Text-CLPV3Ayx.js";import"./Close-DeQxVhkZ.js";import"./SortDescending-BgGAHRpl.js";import"./Undo-CedmJl7g.js";import"./Person-CY2HVuRl.js";import"./Copy-BZIqKWxc.js";import"./Delete-BVSKNF4j.js";import"./Filter-Mkk8kKEU.js";import"./Edit-C4Gy6c5s.js";import"./Error-CgMRcq7x.js";import"./GenerateWithAi-CzXUyJWm.js";import"./History-BANgh6BZ.js";import"./Search-Cgypvig1.js";import"./Info-CR8Ra2BB.js";import"./Subtract-BguCuCMl.js";import"./Map-BgJ3dtI2.js";import"./NewTab-CD_BiguK.js";import"./Notification-CB15fS1l.js";import"./Paste-A6OS6xze.js";import"./Warning-Wt3nbj6y.js";import"./Tenant-B8iNkMMj.js";import"./ButtonGroup-tVNqHLGk.js";import"./classNames-8u_YGv6N.js";import"./sprout-5bk7oM4L.js";import"./FloatingWrapper-CvOMWb5A.js";import"./Button-D1L5V1zp.js";import"./icons-ByJhQmwX.js";import"./Button.module-C2ELNEem.js";import"./Badge-Fno8cZv5.js";import"./Tooltip-CsCotLcm.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DcDxQLMY.js";import"./useId-B9bqBKq5.js";import"./ProgressCircular-DxTh7cF9.js";import"./useI18n-DI5kaiCu.js";import"./IconButton-BFY56UPS.js";import"./Menu-BI017uJL.js";import"./useControl-tJx49zVQ.js";import"./Divider-Z7gRZlXH.js";import"./list-B1zo5gaH.js";import"./Skeleton-skQ_3lbg.js";import"./Field.argTypes-1rEre7SB.js";import"./TextField-CrzVSwY1.js";import"./useValueControl-BoLujgBt.js";import"./InputButton-CobW-7UY.js";import"./useFieldProps-ZapC1bKU.js";import"./useFieldAriaProps-DJiNiZ9_.js";import"./Field-BglQDcK_.js";import"./FieldLabel-k_vhoLHi.js";import"./InfoTooltipPrimitive-BycnW3Wq.js";import"./Popover-D-VXifUT.js";import"./HelperText-CZI4gvqv.js";import"./Tag-D6Whh4y4.js";import"./TextOverflow-ZR1lg4UG.js";import"./useHasOverflow-BPrWXac9.js";import"./SelectTest-HutyAOj3.js";import"./SelectComposition-1S4bJavw.js";import"./TagGroup-B35wMlua.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Components/Trigger/ButtonGroup",of:l}),`
`,t.jsx(o.h1,{id:"buttongroup",children:"ButtonGroup"}),`
`,t.jsxs(o.p,{children:["ButtonGroup is used to group two or more ",t.jsx(o.code,{children:"Button"})," together."]}),`
`,t.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`import { Button, ButtonGroup } from "@qlik/sprout-react";

<ButtonGroup orientation="horizontal">
  <Button label="Name" />
  <Button label="Date" />
  <Button label="City" />
  <Button label="Country" />
</ButtonGroup>;
`})}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(n,{of:i}),`
`,t.jsx(s,{of:i}),`
`,t.jsx(o.h2,{id:"splitbutton",children:"SplitButton"}),`
`,t.jsx(n,{of:a}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`import { Button, ButtonGroup, IconButton, Menu } from "@qlik/sprout-react";
import { DropdownArrow } from "@qlik/sprout-icons/react";

<ButtonGroup>
  <Button label="Label" />
  <Menu.Trigger
    placement="bottom-end"
    menu={
      <>
        <Menu.Item label="foo" />
      </>
    }
  >
    <IconButton variant="primary" aria-label="Select your stuff" icon={<DropdownArrow />} />
  </Menu.Trigger>
</ButtonGroup>;
`})}),`
`,t.jsx(o.h2,{id:"api",children:"API"}),`
`,t.jsxs(o.p,{children:["Under the hood ",t.jsx(o.code,{children:"ButtonGroup"})," change button and div that has border. It let the content set it's own border, it will only change the ",t.jsx(o.code,{children:"border-radius"}),`.
To make your component works well with it you have only one constraint the border and focus has to be defined at the root html element of the component.`]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`type ButtonGroupProps = HTMLDivProps & {
  orientation?: "horizontal" | "vertical";
  fullWidth?: boolean;
};
`})}),`
`,t.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsxs(o.p,{children:["HTML structure: The ",t.jsx(o.code,{children:"ButtonGroup"})," is a simple ",t.jsx(o.code,{children:"div"}),' element with a role="group" attribute.']})]})}function Pt(r={}){const{wrapper:o}={...p(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Pt as default};
