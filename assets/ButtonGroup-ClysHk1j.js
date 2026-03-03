import{j as t,M as m,a as n,C as s}from"./iframe-BM36tKY9.js";import{useMDXComponents as p}from"./index-BCPnpXol.js";import{a}from"./Button.stories-BtYFqsdI.js";import"./TextField.stories-DS5NQKxG.js";import{S as l,P as i}from"./ButtonGroup.stories-DRRpL7FV.js";import"./preload-helper-PPVm8Dsz.js";import"./add-VKxZMCZ1.js";import"./Button.argTypes-oXSdcrhy.js";import"./Icons-CQdi0Qfk.js";import"./index-DM34Bggu.js";import"./move-right-C1_1RL8h.js";import"./bookmark-D7CrCsbo.js";import"./text-BT02E20n.js";import"./close-CYEv2BwJ.js";import"./upload-DAbLlB0c.js";import"./sort-descending-CgwSpVd_.js";import"./undo-BnneyCmg.js";import"./settings-DCJi43F0.js";import"./copy-5pLa4d1M.js";import"./delete-iC7mKKRu.js";import"./documentation-DEtevtWp.js";import"./edit-CKp5FD3E.js";import"./error-DJM79MqW.js";import"./favorited-BqMbjWSD.js";import"./generate-with-ai-C7ZdkiKx.js";import"./subtract-CmdG1iV6.js";import"./hide-BC9kgIHr.js";import"./history-Ce6MLgVu.js";import"./search-D3DMdc9S.js";import"./info-By4pCjMF.js";import"./person-BNKCLHkq.js";import"./map-DnBNu0cY.js";import"./more-vertical-BVZqPJep.js";import"./move-left-R6H6x7U2.js";import"./new-tab-CpKZypuy.js";import"./notification-Car9C9Fn.js";import"./paste-DywRabwS.js";import"./show-C6fFsymT.js";import"./warning-GTpknHYS.js";import"./tenant-CkbwWCOd.js";import"./ButtonGroup-pkWcAzXg.js";import"./classNames-D2MVtjzd.js";import"./sprout-BcBmzfoy.js";import"./FloatingWrapper-BdIfZkqF.js";import"./Button-wScfBKxi.js";import"./Button.module-Bn-SZyJ6.js";import"./common-bQH3ZR03.js";import"./Badge-CjLUVOBS.js";import"./Tooltip-DOknWAYm.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-lrfYqLit.js";import"./useId-Cih_zwB8.js";import"./ProgressCircular-DoqAoY81.js";import"./useI18n-BRpGJeHe.js";import"./IconButton-DIyYlW0K.js";import"./Menu-b5Hl0xTM.js";import"./useControl-Bq0hCRWZ.js";import"./Divider-CVf_6yZu.js";import"./list-B1zo5gaH.js";import"./Skeleton-DwQqkdj6.js";import"./Field.argTypes-1rEre7SB.js";import"./TextField-xzsdu2-Y.js";import"./useValueControl-C1TwhPrN.js";import"./InputButton-CEOVqhok.js";import"./useFieldProps-C0FKGzLz.js";import"./useFieldAriaProps-D-kZa2Fo.js";import"./Field-BP_0b4CU.js";import"./FieldLabel-DHI2P9wk.js";import"./InfoTooltipPrimitive-B8ta45BR.js";import"./Popover-DaYy3ijw.js";import"./padding-BVrxRlLA.js";import"./HelperText-BT_m4RdC.js";import"./Tag-Bmu-JbUV.js";import"./TextOverflow-7rHwN7fm.js";import"./useHasOverflow-BudGxDi5.js";import"./SelectTest-CHIgTYRs.js";import"./SelectComposition-BLwTa6RT.js";import"./TagGroup-OL8HiEl_.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Components/Trigger/ButtonGroup",of:l}),`
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
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`import {
  Button,
  ButtonGroup,
  IconButton,
  Menu,
} from "@qlik/sprout-react";
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
    <IconButton
      variant="primary"
      aria-label="Select your stuff"
      icon={<DropdownArrow />}
    />
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
`,t.jsxs(o.p,{children:["HTML structure: The ",t.jsx(o.code,{children:"ButtonGroup"})," is a simple ",t.jsx(o.code,{children:"div"}),' element with a role="group" attribute.']})]})}function Nt(r={}){const{wrapper:o}={...p(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Nt as default};
