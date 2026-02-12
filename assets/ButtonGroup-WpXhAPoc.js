import{j as t,M as m,a as n,C as s}from"./iframe-B4Gn7jRD.js";import{useMDXComponents as p}from"./index-BtGsBDbQ.js";import{a}from"./Button.stories-UorwU9o5.js";import"./TextField.stories-T6AisQYJ.js";import{S as l,P as i}from"./ButtonGroup.stories-DVaty7Lc.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-CKNXHNSz.js";import"./icons-BJHeoiDX.js";import"./Button.argTypes-C68159WU.js";import"./Icons-Cn4ElvJa.js";import"./index-9KegtbkR.js";import"./Next-C0judd8d.js";import"./Bookmark-CKHX2VYo.js";import"./Upload-BAurdPXS.js";import"./Text-BW23LcKZ.js";import"./Close-DbHLglso.js";import"./SortDescending-CucUSsiY.js";import"./Undo-DLO9n_h1.js";import"./Person-CNI9Q8fr.js";import"./Copy-NISNc1Lm.js";import"./Delete-fA9YqxRL.js";import"./Filter-khtwO5TH.js";import"./Edit-BJvse-oo.js";import"./Error-ClTRWykU.js";import"./GenerateWithAi-C6A5sahu.js";import"./History-CgCTywjh.js";import"./Search-DN4_Th9X.js";import"./Info-C0xP7z1J.js";import"./Subtract-BjFnpmMb.js";import"./Map-DeFMr3_u.js";import"./NewTab-BFfS-RhS.js";import"./Notification-CGfvhvJZ.js";import"./Paste-DGzyaON5.js";import"./Warning-BFJpCY38.js";import"./Tenant-D8URuGVO.js";import"./ButtonGroup-C1r8qKYj.js";import"./classNames-CTBLippR.js";import"./sprout-CWCWYkgH.js";import"./FloatingWrapper-DqyIwrdS.js";import"./Button-DuNeVE70.js";import"./icons-CPBvMsVh.js";import"./Button.module-C2ELNEem.js";import"./Badge-CknI2ibL.js";import"./Tooltip-BG958zrQ.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-COCCCrf6.js";import"./useId-DXegRsHP.js";import"./ProgressCircular-C_VqfatA.js";import"./useI18n-DOe-EdfE.js";import"./IconButton-CoZ792nv.js";import"./Menu-CwfGS8df.js";import"./useControl-7TH6mjrF.js";import"./Divider-OzvHaalV.js";import"./list-B1zo5gaH.js";import"./Skeleton-V0Ckz_0t.js";import"./Field.argTypes-1rEre7SB.js";import"./TextField-BiWstluF.js";import"./useValueControl-_ZNYrQQF.js";import"./InputButton-BNDgbGEz.js";import"./useFieldProps-C0qESN5d.js";import"./useFieldAriaProps-BSt-3PUW.js";import"./Field-C61xY5sZ.js";import"./FieldLabel-DN1zz7rD.js";import"./InfoTooltipPrimitive-YcCF56yH.js";import"./Popover-CYDrc_g3.js";import"./HelperText-BkP0Ayki.js";import"./Tag-XD_XBSO2.js";import"./TextOverflow-BcmLE7aV.js";import"./useHasOverflow-B8tWSk8V.js";import"./SelectTest-DWd0RDUj.js";import"./SelectComposition-KKpfvx4F.js";import"./TagGroup-D2_tvUz2.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Components/Trigger/ButtonGroup",of:l}),`
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
