import{j as t,M as m,a as n,C as s}from"./iframe-DO7qjpir.js";import{useMDXComponents as p}from"./index-DM3CO3rl.js";import{a}from"./Button.stories-DhqmBLGv.js";import"./TextField.stories-CSdAl3G0.js";import{S as l,P as i}from"./ButtonGroup.stories-CSNmOSvp.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-BuQFhIrq.js";import"./icons-CcidwTIh.js";import"./Button.argTypes-BSZUkNEJ.js";import"./Icons-BilGlRke.js";import"./index-CRIXUNi1.js";import"./Next-G0qtg1LQ.js";import"./Bookmark-DZyQ0qgi.js";import"./Upload-Dm1uqGe9.js";import"./Text-DXgxZ7rl.js";import"./Close-DVlpLiwK.js";import"./SortDescending-Bd_E1WmM.js";import"./Undo-CUmqfFkt.js";import"./Person-BjZlLNrQ.js";import"./Copy-ec0SasG8.js";import"./Delete-D4ge4hwa.js";import"./Filter-DBZqppq8.js";import"./Edit-CColNq1n.js";import"./Error-DM57iPud.js";import"./GenerateWithAi-Dv5-xc_y.js";import"./History-DHbq3km9.js";import"./Search-Bp2ziRFO.js";import"./Info-CoVbxZIf.js";import"./Subtract-CzdmJ8_U.js";import"./Map-B14QatVO.js";import"./NewTab-DA06V-wx.js";import"./Notification-ClhJe7A6.js";import"./Paste-BgvLiWgU.js";import"./Warning-CK4OS6kN.js";import"./Tenant-i2cOSROQ.js";import"./ButtonGroup-sxG0Tiqx.js";import"./classNames-C2xvgHQf.js";import"./sprout-nCaIAc8k.js";import"./FloatingWrapper-Xned63dz.js";import"./Button-DWGkri9_.js";import"./icons-B7D59aOJ.js";import"./Button.module-C2ELNEem.js";import"./Badge-BbHESnbh.js";import"./Tooltip-Bnp9G-JS.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-C_aUAXE9.js";import"./useId-B9UV2KOW.js";import"./ProgressCircular-CpbimHqB.js";import"./useI18n-CbD-mhn-.js";import"./IconButton-GXyV3m9d.js";import"./Menu-u-ysB1YM.js";import"./useControl-U2hc2GWS.js";import"./Divider-BpSmZpjh.js";import"./list-B1zo5gaH.js";import"./Skeleton-BQx9Bath.js";import"./Field.argTypes-1rEre7SB.js";import"./TextField-BvJMgdQD.js";import"./useValueControl-DIvBSOg5.js";import"./InputButton-BUj9u-fS.js";import"./useFieldProps-dIMY5Lzn.js";import"./useFieldAriaProps-B-bf9GJL.js";import"./Field-Uh2AYJyc.js";import"./FieldLabel-B6hPS730.js";import"./InfoTooltipPrimitive-CE8VNDL8.js";import"./Popover-DkNNB74y.js";import"./HelperText-BAW71J19.js";import"./Tag-CmC6rlue.js";import"./TextOverflow-DyfDSdhu.js";import"./useHasOverflow-CKe90G_4.js";import"./SelectTest-BRTrZHD4.js";import"./SelectComposition-y0uB8bOb.js";import"./TagGroup-D2w3taRT.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Components/Trigger/ButtonGroup",of:l}),`
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
