import{j as t,M as m,a as n,C as s}from"./iframe-CxjlquLv.js";import{useMDXComponents as p}from"./index-CopXJ1Hs.js";import{a}from"./Button.stories-3eJ3SJMe.js";import"./TextField.stories-BAAM0GbY.js";import{S as l,P as i}from"./ButtonGroup.stories-4EG1aGVe.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-DmDJ4n-J.js";import"./icons-B-ccgY_k.js";import"./Button.argTypes-BGcuNy7I.js";import"./Icons-DQbIzlC6.js";import"./index-CQX_9EpV.js";import"./Next-CVX7Uflh.js";import"./Bookmark-BfuinAGV.js";import"./Upload-DugaVjZ7.js";import"./Text-DQVBHukE.js";import"./Close-PE5EsNbf.js";import"./SortDescending-mZ0sHp6G.js";import"./Undo-p2AAmykz.js";import"./Person-BchZ2R-s.js";import"./Copy-E7NdQvaj.js";import"./Delete-DRUG6ixk.js";import"./Filter-CNv6SvW2.js";import"./Edit-CBUd60Nh.js";import"./Error-Cwyymijo.js";import"./GenerateWithAi-D14jyyKQ.js";import"./History-CjSFFZ-w.js";import"./Search-BpoXSxFe.js";import"./Info-CmHBCOIz.js";import"./Subtract-Cskw5IaI.js";import"./Map-BEEFfX2w.js";import"./NewTab-thqnkD83.js";import"./Notification-CoJL-wfE.js";import"./Paste-DbcEs-AL.js";import"./Warning-x2bCUA0M.js";import"./Tenant-BNPdNRwP.js";import"./ButtonGroup-CHjnLviU.js";import"./classNames-OYhIMgh8.js";import"./sprout-BMjCkMv3.js";import"./FloatingWrapper-DnCS5VAc.js";import"./Button-DovarDo_.js";import"./icons-LhMznsFI.js";import"./Button.module-CmdpHks8.js";import"./Badge-CT3AYSwq.js";import"./Tooltip-BF9waJvZ.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BEoUSBug.js";import"./useId-BK-xxnhR.js";import"./ProgressCircular-54Bo0zt0.js";import"./useI18n-DzUau43H.js";import"./IconButton-Dn95SqkZ.js";import"./Menu-BRV3ljPm.js";import"./useControl-BQvv0ErP.js";import"./Divider-7ZQA3_Ws.js";import"./list-B1zo5gaH.js";import"./Skeleton-CHWVn6Ej.js";import"./Field.argTypes-1rEre7SB.js";import"./TextField-B4G6cpkZ.js";import"./useValueControl-z08PllWD.js";import"./InputButton-DFNinxRI.js";import"./useFieldProps-Cz5SVI77.js";import"./useFieldAriaProps-D_SD2qVI.js";import"./Field-lZWJhm0y.js";import"./FieldLabel-DnVlDuiw.js";import"./InfoTooltipPrimitive-e-SBoNBf.js";import"./Popover-D095V7L6.js";import"./HelperText-CEBD_W8W.js";import"./Tag-BMD7KwwB.js";import"./TextOverflow-qrd-zg5J.js";import"./useHasOverflow-BuWth_t2.js";import"./SelectTest-DcsPQXLP.js";import"./SelectComposition-BpZ2JkqS.js";import"./TagGroup-DuRTMnnk.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Components/Trigger/ButtonGroup",of:l}),`
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
