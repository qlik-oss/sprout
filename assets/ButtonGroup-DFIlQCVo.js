import{j as t,M as m,a as n,C as s}from"./iframe-B4-nXs83.js";import{useMDXComponents as p}from"./index-BqykRLmO.js";import{a}from"./Button.stories-D8o3ON4n.js";import"./TextField.stories-C0hRrA2k.js";import{S as l,P as i}from"./ButtonGroup.stories-DUtsAJ3l.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-BPhJi-H4.js";import"./icons-Du9QpEBe.js";import"./Button.argTypes-KPVAhW80.js";import"./Icons-DeygH5Zz.js";import"./index-DD81b0jm.js";import"./Next-BDMe8uha.js";import"./Bookmark-DcjvKNmY.js";import"./Upload-BRvcNbMW.js";import"./Text-dLWgk66T.js";import"./Close-BgZ1uSF_.js";import"./SortDescending-CKWll_c0.js";import"./Undo-DDEyeJBa.js";import"./Person-BtJ6dcuR.js";import"./Copy-DgfNcGoS.js";import"./Delete-D5Va6LI1.js";import"./Filter-DrTBmiDb.js";import"./Edit-DzJTkpRk.js";import"./Error-D7GK58M_.js";import"./GenerateWithAi-s4i5IFD7.js";import"./History-rKaZ75zu.js";import"./Search-Ci5Kqw6S.js";import"./Info-DTuI-Of7.js";import"./Subtract-5iLtEsER.js";import"./Map-D3Po8JT9.js";import"./NewTab-Bx55GzRW.js";import"./Notification-BWSivEeO.js";import"./Paste-bE7IXLRc.js";import"./Warning-BAtVE0v3.js";import"./Tenant-Y0aD2fSL.js";import"./ButtonGroup-bvbDOy4w.js";import"./classNames-eIMwhIDK.js";import"./sprout-SOoz1jzb.js";import"./FloatingWrapper-Y9LgBPDf.js";import"./Button-Cv6yFaKa.js";import"./icons-DuVV-LnW.js";import"./Button.module-C2ELNEem.js";import"./Badge-DvRPOsa9.js";import"./Tooltip-BmEIvhna.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CKYJ27w7.js";import"./useId-D71ehFqY.js";import"./ProgressCircular-CVxkPa9h.js";import"./useI18n-peGtGOOS.js";import"./IconButton-D-KEKYAI.js";import"./Menu-DW09POVa.js";import"./useControl-DdRfwf_0.js";import"./Divider-DdqecLrr.js";import"./list-B1zo5gaH.js";import"./Skeleton-BsrAjAGs.js";import"./Field.argTypes-1rEre7SB.js";import"./TextField-7zXX973B.js";import"./useValueControl-CtQhivtG.js";import"./InputButton-bRj-07Rv.js";import"./useFieldProps-BBrAaKPm.js";import"./useFieldAriaProps-Cbzvhn2j.js";import"./Field-B3vU29tm.js";import"./FieldLabel-DdZy9tvM.js";import"./InfoTooltipPrimitive-D8jVv135.js";import"./Popover-CS5Gu0v5.js";import"./HelperText-ByCNTNQH.js";import"./Tag-CObVgYEg.js";import"./TextOverflow-dP4PdhnE.js";import"./useHasOverflow-DZlgyJuB.js";import"./SelectTest-BckEf98r.js";import"./SelectComposition-BaT4dRxA.js";import"./TagGroup-BFI8F1G-.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Components/Trigger/ButtonGroup",of:l}),`
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
