import{j as t,M as m,a as n,C as s}from"./iframe-BQJExRCF.js";import{useMDXComponents as p}from"./index-BiT2RrsF.js";import{a}from"./Button.stories-CYtemeUR.js";import"./TextField.stories-bbIHKKhd.js";import{S as l,P as i}from"./ButtonGroup.stories-Chu1_Nnz.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-CPO6AOva.js";import"./icons-CDNrxXy4.js";import"./Button.argTypes-C6WRveIs.js";import"./Icons-D8r5JLXA.js";import"./AiSparkles-ybqQooZU.js";import"./Next-BCf902gw.js";import"./Bookmark-DEDDSCCD.js";import"./Upload-JDlmgr1C.js";import"./Text-fjMciMda.js";import"./Close-VT6FC74F.js";import"./SortDescending-BWpZ9BF7.js";import"./Undo-B1PPlUQq.js";import"./Person-8oMSnh08.js";import"./Copy-ERSXBUQF.js";import"./Delete-CrLV--N3.js";import"./Filter-bb23MOEL.js";import"./Edit-Bc7r3LZJ.js";import"./Error-B95qseKK.js";import"./History-BSF-XiSG.js";import"./Search-B3R4dCNd.js";import"./Info-BfRROe8g.js";import"./Subtract-Ca-OouU7.js";import"./Map-pFYOI1fT.js";import"./NewTab-BMHt_Vx2.js";import"./Notification-BlWUDy4b.js";import"./Paste-Cd-nv27Q.js";import"./Warning-BB_ZpJQH.js";import"./Tenant-I_uTRlDg.js";import"./ButtonGroup-Dt9wcK5B.js";import"./classNames-B0wfWtWT.js";import"./sprout-DxA14K3u.js";import"./FloatingWrapper-DTdVRmL6.js";import"./Button-C7-D-GN_.js";import"./icons-CzMI2h-K.js";import"./Button.module-C2ELNEem.js";import"./Badge-B9--3FkB.js";import"./Tooltip-CVFOQrqK.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DAgGzV0n.js";import"./useId-Drz8gmS2.js";import"./ProgressCircular-B4mHH4_Y.js";import"./useI18n-B99T9obj.js";import"./IconButton-BEI3RZpW.js";import"./Menu-D_upy4ds.js";import"./useControl-XJuj1vyK.js";import"./Divider-Byw016rg.js";import"./list-B1zo5gaH.js";import"./Skeleton-C323E7Fo.js";import"./Field.argTypes-1rEre7SB.js";import"./TextField-C-5GsH-r.js";import"./useValueControl-CRzMHMlu.js";import"./InputButton-CeEVJl7G.js";import"./useFieldProps-C0xARZ1e.js";import"./useFieldAriaProps-DaZEG-MV.js";import"./Field-BIldF_Al.js";import"./FieldLabel-BWOyYL3A.js";import"./InfoTooltipPrimitive-BqPdPqRN.js";import"./Popover-CTsqc6Mc.js";import"./HelperText-CWubgWiG.js";import"./Tag-DLmRXsBI.js";import"./TextOverflow-D_EYc0DY.js";import"./useHasOverflow-o-wZv5E2.js";import"./SelectTest-DtQ-bhHw.js";import"./SelectComposition-cKAmPh1H.js";import"./TagGroup-BsZ4uWAl.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Components/Trigger/ButtonGroup",of:l}),`
`,t.jsx(o.h1,{id:"buttongroup",children:"ButtonGroup"}),`
`,t.jsxs(o.p,{children:["ButtonGroup is used to group two or more ",t.jsx(o.code,{children:"Button"})," together."]}),`
`,t.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`import { Button, ButtonGroup } from "@qlik/sprout-css-react";

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
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`import { Button, ButtonGroup, IconButton, Menu } from "@qlik/sprout-css-react";
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
