import{j as t,M as m,a as n,C as s}from"./iframe-B-fqCePV.js";import{useMDXComponents as p}from"./index-DUhTx2ua.js";import{a}from"./Button.stories-BTyFBUpQ.js";import"./TextField.stories-DHlmqcEW.js";import{S as l,P as i}from"./ButtonGroup.stories-C3hRphjN.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-CGQWcTMW.js";import"./icons-DTOHuE0Q.js";import"./Button.argTypes-B7B56CaK.js";import"./Icons-oA9YLhAZ.js";import"./index-DvxuXuF-.js";import"./Next-DCc_9i21.js";import"./Bookmark-C4WqJD7B.js";import"./Upload-C4mriZRV.js";import"./Text-DVGjtA2-.js";import"./Close-R01cAXcl.js";import"./SortDescending-CfflnELi.js";import"./Undo-QmoTQvvJ.js";import"./Person-CQx_s9v3.js";import"./Copy-LDJw-O8w.js";import"./Delete-K_WChgQu.js";import"./Filter-_T9uGPBz.js";import"./Edit-yy_oh6IZ.js";import"./Error-BQGw3LDI.js";import"./GenerateWithAi-C8pDpEB1.js";import"./History-BlOzlZJ1.js";import"./Search-DSRoHruE.js";import"./Info-C4YmKgXN.js";import"./Subtract-DlC_wTL-.js";import"./Map-FzW2bSYj.js";import"./NewTab-DUTMcy5N.js";import"./Notification-DAAFk53n.js";import"./Paste-Bms19-bp.js";import"./Warning-GhyyIkan.js";import"./Tenant-wzlvguFI.js";import"./ButtonGroup-jCKcdFBk.js";import"./classNames-BHQ9ieoZ.js";import"./sprout-DqOLOcsj.js";import"./FloatingWrapper-Bu-VdDpQ.js";import"./Button-DgHw6K-5.js";import"./icons-BXG-SLO7.js";import"./Button.module-C2ELNEem.js";import"./Badge-BMzhzV_X.js";import"./Tooltip-DclK_iM1.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-BvkMXfLp.js";import"./useId-DU0uuk5t.js";import"./ProgressCircular-CeNa-NP_.js";import"./useI18n-uzhF32fT.js";import"./IconButton-C1DotWTd.js";import"./Menu-CaarWdBl.js";import"./useControl-DDjCssuD.js";import"./Divider-B2v-xVm0.js";import"./list-B1zo5gaH.js";import"./Skeleton-CLuWHboh.js";import"./Field.argTypes-1rEre7SB.js";import"./TextField-DEQy7r8U.js";import"./useValueControl-D8vAvYvZ.js";import"./InputButton-VrXIQIPl.js";import"./useFieldProps-C5tdc_TS.js";import"./useFieldAriaProps-C2PPXi5-.js";import"./Field-BLDSqeK1.js";import"./FieldLabel-8GV8HzVd.js";import"./InfoTooltipPrimitive-D79OSySs.js";import"./Popover-D19D-oMR.js";import"./HelperText-B14iHzzi.js";import"./Tag-BBDzpCL8.js";import"./TextOverflow-DtYuM8Q8.js";import"./useHasOverflow-DXWq-MBQ.js";import"./SelectTest-B_h2m4i9.js";import"./SelectComposition-DIoBGgJg.js";import"./TagGroup-CMbRkJWe.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Components/Trigger/ButtonGroup",of:l}),`
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
