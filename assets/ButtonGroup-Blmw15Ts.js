import{j as t,M as m,a as n,C as s}from"./iframe-Bp0nu8X6.js";import{useMDXComponents as p}from"./index-CC_VpkT-.js";import{a}from"./Button.stories-Dxe3z7w5.js";import"./TextField.stories-CL7XhXQD.js";import{S as l,P as i}from"./ButtonGroup.stories-Btmvc5LY.js";import"./preload-helper-PPVm8Dsz.js";import"./add-DiIoSsfz.js";import"./Button.argTypes-BUXeeCDC.js";import"./Icons-DjXICJaU.js";import"./index-ebX9fmIs.js";import"./move-right-CK_WVS8x.js";import"./bookmark-BjcmHdPC.js";import"./text-CczEg3TU.js";import"./close-CJ5Ns5F2.js";import"./upload-8H-KEWMp.js";import"./sort-descending-Denwaaa7.js";import"./undo-DC82ZJyQ.js";import"./settings-AJKzQdc1.js";import"./copy-BYWkoi5_.js";import"./delete-CSyzwOk8.js";import"./documentation-6ghMNW6p.js";import"./edit-Dwo3NC30.js";import"./error-BcSU3HuT.js";import"./favorited-xiONJzzc.js";import"./generate-with-ai-BLISbXKJ.js";import"./subtract-Co-tykP9.js";import"./hide-DryimjwN.js";import"./history-Ddui-ZW8.js";import"./search-DYca-rrs.js";import"./info-DGMlSu_6.js";import"./person-lmjX5hbo.js";import"./map-BFrox4w-.js";import"./more-vertical-gmqyBEHm.js";import"./move-left-CfXNAwsO.js";import"./new-tab-uRDDQ1v4.js";import"./notification-Ah1qGB0i.js";import"./paste-By_tHdXO.js";import"./show-BUDxgafp.js";import"./warning-CT_3wb2_.js";import"./tenant-5cFbeFqF.js";import"./ButtonGroup-CpiqZNxt.js";import"./classNames-BUd7eP-S.js";import"./sprout-rpr_484f.js";import"./FloatingWrapper-B5QsjZYg.js";import"./Button-CBkOB6z4.js";import"./Button.module-BRCMjQTg.js";import"./common-bQH3ZR03.js";import"./Badge-Br2oOa7d.js";import"./Tooltip-B3oqGcOh.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-D5e_-V2O.js";import"./useId-C38y77Da.js";import"./ProgressCircular-DO25q9z0.js";import"./useI18n-D2jaKmf9.js";import"./IconButton-Bu152FGZ.js";import"./Menu-Co2VX3TG.js";import"./useControl-CS67YHbK.js";import"./Divider-B3J7iNd7.js";import"./list-B1zo5gaH.js";import"./Skeleton-B__PZKef.js";import"./Field.argTypes-1rEre7SB.js";import"./TextField-BXk7dWee.js";import"./useValueControl-DAQoJtS1.js";import"./InputButton-BmHhXOBc.js";import"./useFieldProps-Cvv95kAj.js";import"./useFieldAriaProps-lqPBO4h4.js";import"./Field-4fYLnCC7.js";import"./FieldLabel-DBAKdsPr.js";import"./InfoTooltipPrimitive-C8AQG5h1.js";import"./Popover-wxpNpCGf.js";import"./padding-Z5rKYLph.js";import"./HelperText-NWZ1zrXV.js";import"./Tag-D6_7eg9E.js";import"./TextOverflow-D-B5LsyQ.js";import"./useHasOverflow-BYHEzBW0.js";import"./SelectTest-d9N61AT2.js";import"./SelectComposition-Yhre3dM9.js";import"./TagGroup-BRIA_TfO.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Components/Trigger/ButtonGroup",of:l}),`
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
