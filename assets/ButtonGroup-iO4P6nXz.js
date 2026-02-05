import{j as t,M as m,a as n,C as s}from"./iframe-BThSoDrn.js";import{useMDXComponents as p}from"./index-dxYskzg-.js";import{a}from"./Button.stories-NWYkjtR4.js";import"./TextField.stories-Ci-v_oWZ.js";import{S as l,P as i}from"./ButtonGroup.stories-BLlnLbag.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-BQFdkl2e.js";import"./icons-VT9Nujk7.js";import"./Button.argTypes-CbPnSD34.js";import"./Icons-4m1Sc84h.js";import"./AiSparkles-CmZ_srcr.js";import"./Next-1Q1bqM5p.js";import"./Bookmark-CVLzqLqN.js";import"./Upload-Bm4njtlo.js";import"./Text-6G8hA-h1.js";import"./Close-jEAlxUHo.js";import"./SortDescending-DRIoVd-M.js";import"./Undo-WuNimhT1.js";import"./Person-3cl35KlB.js";import"./Copy-jAGX-G5W.js";import"./Delete-BwyAIRQQ.js";import"./Filter-DiKfENlM.js";import"./Edit-BnWU-wtK.js";import"./Error-LWra2rFD.js";import"./History-BWwEcsLz.js";import"./Search-c6Wqd6yN.js";import"./Info-CD_iaTpZ.js";import"./Subtract-CRNAvJ2c.js";import"./Map-BSYcvYLi.js";import"./NewTab-RTkCp496.js";import"./Notification-D5_SHIKo.js";import"./Paste-CF9HfvBI.js";import"./Warning-BKQeZIO5.js";import"./Tenant-DemsO5Qk.js";import"./ButtonGroup-BKJ7e4gF.js";import"./classNames-dIthk07I.js";import"./sprout-C7A3N88C.js";import"./FloatingWrapper-By9slcCq.js";import"./Button-DPdoSvtR.js";import"./icons-m7QrAy0p.js";import"./Button.module-C2ELNEem.js";import"./Badge-BD7yv9SE.js";import"./Tooltip-g36jqBzQ.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DhaNE9oh.js";import"./useId-hgAQXGHZ.js";import"./ProgressCircular-3frmJwTX.js";import"./useI18n-DEBX20KE.js";import"./IconButton-BNf-P6Px.js";import"./Menu-ByKPQPeJ.js";import"./useControl-BsRaFebD.js";import"./Divider-BDGjRrdZ.js";import"./list-B1zo5gaH.js";import"./Skeleton-CGjLWnQE.js";import"./Field.argTypes-1rEre7SB.js";import"./TextField-RzgPXNoi.js";import"./useValueControl-GMse0bib.js";import"./InputButton-D48x7m5m.js";import"./useFieldProps-ZuqHy8WE.js";import"./useFieldAriaProps-CdXcjcjf.js";import"./Field-FhdYhdWr.js";import"./FieldLabel-Bgszjlae.js";import"./InfoTooltipPrimitive-DKXNBt4b.js";import"./Popover-BJedhRhh.js";import"./HelperText-bJIP0f1z.js";import"./Tag-B1yXdr4G.js";import"./TextOverflow-DOzhudw2.js";import"./useHasOverflow-ChjOj1VO.js";import"./SelectTest-BrLwEsNg.js";import"./SelectComposition-BkFtZxST.js";import"./TagGroup-vpdbOI5u.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Components/Trigger/ButtonGroup",of:l}),`
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
`,t.jsxs(o.p,{children:["HTML structure: The ",t.jsx(o.code,{children:"ButtonGroup"})," is a simple ",t.jsx(o.code,{children:"div"}),' element with a role="group" attribute.']})]})}function Tt(r={}){const{wrapper:o}={...p(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Tt as default};
