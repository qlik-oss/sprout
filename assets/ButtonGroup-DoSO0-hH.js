import{j as t,M as m,a as n,C as s}from"./iframe-D-N3fK2j.js";import{useMDXComponents as p}from"./index-BvagnWFp.js";import{a}from"./Button.stories-gmoCRIDW.js";import"./TextField.stories-BC9Dizee.js";import{S as l,P as i}from"./ButtonGroup.stories-BoPGh4bS.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-DHz0bRTt.js";import"./icons-CN0e8FbD.js";import"./Button.argTypes-w4tJTKOg.js";import"./Icons-CGLv6dp6.js";import"./index-83n1lJXs.js";import"./Next-DG_ldtCu.js";import"./Bookmark-Dg1w8U2T.js";import"./Upload-ClDjPMMt.js";import"./Text-Bpm64yqp.js";import"./Close-Clva93gw.js";import"./SortDescending-7Is3TCUG.js";import"./Undo-Jt2aGM_z.js";import"./Person-C2Clk1QX.js";import"./Copy-DXsZFzm1.js";import"./Delete-o_szjHTs.js";import"./Filter-DXj_kdvE.js";import"./Edit-69Qgo7Td.js";import"./Error-CZbJtLWx.js";import"./GenerateWithAi-B8C8zDdl.js";import"./History-CQ5KoKvO.js";import"./Search-BEJfw-uV.js";import"./Info-DKfyJpi1.js";import"./Subtract-DrooAXHe.js";import"./Map-DsyJdFaB.js";import"./NewTab-DIWrR844.js";import"./Notification-CjmHr3yB.js";import"./Paste-B-RxeU6b.js";import"./Warning-Dy5sqdbk.js";import"./Tenant-BSwEMVQe.js";import"./ButtonGroup-CjnyzRLF.js";import"./classNames-CrSIhzis.js";import"./sprout-UDo5dA_z.js";import"./FloatingWrapper-CPYdMCWe.js";import"./Button-BiiNVP7I.js";import"./icons-BEmnCRju.js";import"./Button.module-CmdpHks8.js";import"./Badge-sJnchsAW.js";import"./Tooltip-DaX3jRge.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-25h2pNOO.js";import"./useId-Bkl3iN6O.js";import"./ProgressCircular-CdUDfayh.js";import"./useI18n-ClHBar3-.js";import"./IconButton-Dg4ysz4Z.js";import"./Menu-CpWAuarv.js";import"./useControl-U-WkQj2I.js";import"./Divider-Aa9jm5B9.js";import"./list-B1zo5gaH.js";import"./Skeleton-Bx_f_eFM.js";import"./Field.argTypes-1rEre7SB.js";import"./TextField-DMygpcri.js";import"./useValueControl-DH7McdQ1.js";import"./InputButton-BoVH_no0.js";import"./useFieldProps-Cnz6GbX_.js";import"./useFieldAriaProps-EzEn10HD.js";import"./Field-DHjy_kFd.js";import"./FieldLabel-BNj8Kiyj.js";import"./InfoTooltipPrimitive-C8Uq1qY7.js";import"./Popover-B17Az-M5.js";import"./HelperText-DkWywDIM.js";import"./Tag-CLp8bTu7.js";import"./TextOverflow-B0-vdnEr.js";import"./useHasOverflow-BWQUK3f5.js";import"./SelectTest-DVCo1c6u.js";import"./SelectComposition-2GVB6IHa.js";import"./TagGroup-7XjF8tBf.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Components/Trigger/ButtonGroup",of:l}),`
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
