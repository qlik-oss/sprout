import{j as t,M as m,a as n,C as s}from"./iframe-s7Iwh0oT.js";import{useMDXComponents as p}from"./index-3LxxidSz.js";import{a}from"./Button.stories-C1v38vUu.js";import"./TextField.stories-0UzDZuCJ.js";import{S as l,P as i}from"./ButtonGroup.stories-ReqC3OLX.js";import"./preload-helper-PPVm8Dsz.js";import"./add-phUaYqr2.js";import"./Button.argTypes-C8wXIbb1.js";import"./Icons-CovZA8ho.js";import"./index-Cjzpg9K1.js";import"./move-right-CjgOxL1h.js";import"./bookmark-Cey_2BFE.js";import"./text-DyI8tiuz.js";import"./close-Bbk9t1FU.js";import"./upload-B0Ew5N01.js";import"./sort-descending-OBAQsHI9.js";import"./undo-BkTBorEJ.js";import"./settings-Dgdg0xWp.js";import"./copy-D5AkX6QI.js";import"./delete-cf8eEynv.js";import"./documentation-DPV8gHFU.js";import"./edit-PEgxvuNP.js";import"./error-DwsaS794.js";import"./favorited-BVK7D5qd.js";import"./generate-with-ai-BbRQXXpT.js";import"./subtract-nH5WHpwI.js";import"./hide-DKS27jyb.js";import"./history-DnP2rvJO.js";import"./search-yk4qOQEV.js";import"./info-DM6050LP.js";import"./person-Ds3mXeFF.js";import"./map-d8AgHSnc.js";import"./more-vertical-BEPBAxGJ.js";import"./move-left-DgChsxhn.js";import"./new-tab-WxcYfP2Y.js";import"./notification-DtKu0F84.js";import"./paste-DtW837rj.js";import"./show-OD0q4moC.js";import"./warning-CAFk7pxH.js";import"./tenant-DVh-K1xI.js";import"./ButtonGroup-D0ELDPa5.js";import"./classNames-BgUAGgdt.js";import"./sprout-Bvx94sbk.js";import"./FloatingWrapper-97ZbCiI4.js";import"./Button-BLnymG9d.js";import"./Button.module-BSdpW5zV.js";import"./common-bQH3ZR03.js";import"./Badge-CjbZkwpT.js";import"./Tooltip-_uMFampe.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BoZIv2t8.js";import"./useId-C37lMSXz.js";import"./ProgressCircular-Dm76i-ei.js";import"./useI18n-DNSc_Xzu.js";import"./IconButton-zwf3qVx9.js";import"./Menu-CU8ixYLE.js";import"./useControl-CS-bltOB.js";import"./Divider-BMuu4i8A.js";import"./list-B1zo5gaH.js";import"./Skeleton-DC7wVjwf.js";import"./Field.argTypes-1rEre7SB.js";import"./TextField-ID03Gn3a.js";import"./useValueControl-BSJFleLi.js";import"./InputButton-D_n0MlAo.js";import"./useFieldProps-BTIA5NzZ.js";import"./useFieldAriaProps-Ctj7S-QK.js";import"./Field-DJxPk6rG.js";import"./FieldLabel-CwYUiiFr.js";import"./InfoTooltipPrimitive-HCfeTcaQ.js";import"./Popover-CD-kPJqZ.js";import"./padding-BXgzSss2.js";import"./HelperText-Bw9VVLAT.js";import"./Tag-n2PVbDmU.js";import"./TextOverflow-BrM9-ZKJ.js";import"./useHasOverflow-Bo6hxDeF.js";import"./SelectTest-B198ofEx.js";import"./SelectComposition-jF7Zv2uF.js";import"./TagGroup-CvMtNFQT.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Components/Trigger/ButtonGroup",of:l}),`
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
