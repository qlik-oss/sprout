import{j as t,M as m,a as n,C as s}from"./iframe-DuYosUFD.js";import{useMDXComponents as p}from"./index-6fjbDpXn.js";import{a}from"./Button.stories-UTb2Y15P.js";import"./TextField.stories-Dqbgnfn7.js";import{S as l,P as i}from"./ButtonGroup.stories-BVkYvVBe.js";import"./preload-helper-PPVm8Dsz.js";import"./add-Vg2U0mSE.js";import"./Button.argTypes-CK1NI-g2.js";import"./Icons-CxYMpq3s.js";import"./index-DcMjNI1G.js";import"./move-right-k-BFnqYV.js";import"./bookmark-wwgiEeRj.js";import"./text-CIJRCYzm.js";import"./close-Dyzj91Dc.js";import"./upload-ByT4gcdH.js";import"./sort-descending-BgZWkgGz.js";import"./undo-DK_DlrIJ.js";import"./settings-B-EBrcRv.js";import"./copy-CWKkJg96.js";import"./delete-D4O4nVVP.js";import"./documentation-DABWpqS4.js";import"./edit-DeXKaZx5.js";import"./error-CXY2goRU.js";import"./favorited-DIjhIM7P.js";import"./generate-with-ai-DxZm9B-P.js";import"./subtract-DEs7_1mh.js";import"./hide-D4X3-KSw.js";import"./history-CMLopSL0.js";import"./search-__Gpjj1t.js";import"./info-Bxa3p2DF.js";import"./person-C2sJpCzJ.js";import"./map-Be-Ow4bt.js";import"./more-vertical-B2Ek-mRZ.js";import"./move-left-DN19XWNV.js";import"./new-tab-Dp-d2eWd.js";import"./notification-DNCR-roH.js";import"./paste-scJGRfKP.js";import"./show-Gqxo-URH.js";import"./warning-DO6AU_ml.js";import"./tenant-r2v49Krg.js";import"./ButtonGroup-C5vjLD5l.js";import"./classNames-zePBlFY_.js";import"./sprout-CvRh1TM0.js";import"./FloatingWrapper-BYrVCp-F.js";import"./Button-DI0ZynHS.js";import"./Button.module-D6kzoXVn.js";import"./common-bQH3ZR03.js";import"./Badge-CPj7NTO4.js";import"./Tooltip-BJFaRrUy.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-DjHAObcc.js";import"./useId-DRaip_NL.js";import"./ProgressCircular-BvkbtoQi.js";import"./useI18n-BjJPdLTM.js";import"./IconButton-BE9E_AnQ.js";import"./Menu-D_Niw5ai.js";import"./useControl-DOCWDNqa.js";import"./Divider-DVRuu_FL.js";import"./list-B1zo5gaH.js";import"./Skeleton-R2z-cDq5.js";import"./Field.argTypes-1rEre7SB.js";import"./TextField-DnT8J57g.js";import"./useValueControl-uslnr95T.js";import"./InputButton-CpK-Hq67.js";import"./useFieldProps-BwY4Fxzy.js";import"./useFieldAriaProps-oaAu_ksb.js";import"./Field-MvuQg19v.js";import"./FieldLabel-BP167ITs.js";import"./InfoTooltipPrimitive-D-yTz8eW.js";import"./Popover-D-qbv7RV.js";import"./padding-BWxXYvmb.js";import"./HelperText-6attHadj.js";import"./Tag-DpwdOoAU.js";import"./TextOverflow-DsMnN-5j.js";import"./useHasOverflow-BuHjGHjQ.js";import"./SelectTest-CIaFLujX.js";import"./SelectComposition-eEorCX1T.js";import"./TagGroup-CaR5HQlD.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Components/Trigger/ButtonGroup",of:l}),`
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
