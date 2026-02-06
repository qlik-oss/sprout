import{j as t,M as m,a as n,C as s}from"./iframe-Dux6zP9l.js";import{useMDXComponents as p}from"./index-BCztanOQ.js";import{a}from"./Button.stories-BWCVKnkD.js";import"./TextField.stories-B-uBvSJM.js";import{S as l,P as i}from"./ButtonGroup.stories-BqFbxoBm.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-BtS2806q.js";import"./icons-DbnsKZAy.js";import"./Button.argTypes-BM6XhUSS.js";import"./Icons-homBgXPl.js";import"./index-Br4vx0U3.js";import"./Next-BewXrcs7.js";import"./Bookmark-YRYgI-pH.js";import"./Upload-DVdnZv4A.js";import"./Text-BqIxfr9D.js";import"./Close-DZrODGJw.js";import"./SortDescending-6CDLuBsq.js";import"./Undo-BlRv8m3a.js";import"./Person-DtFtgVbU.js";import"./Copy-CNcpp5JH.js";import"./Delete-DmK8BJN4.js";import"./Filter-CkxlB1aU.js";import"./Edit-jwbjvk-y.js";import"./Error-BylAzqMK.js";import"./GenerateWithAi-B-iuWyGM.js";import"./History-hc8jDZls.js";import"./Search-jnBfSIuS.js";import"./Info-DM0ROm97.js";import"./Subtract-DqagjlIq.js";import"./Map-BliWAPeQ.js";import"./NewTab-B05WKzom.js";import"./Notification-DOy9jqM5.js";import"./Paste-a9G7KIM9.js";import"./Warning-DwriNDhq.js";import"./Tenant-ewlWfidL.js";import"./ButtonGroup-Cyh3uAIS.js";import"./classNames-T6EAEAwi.js";import"./sprout-duSO2RrP.js";import"./FloatingWrapper-DWE1MRoj.js";import"./Button-CUxISDo2.js";import"./icons-DDUP-3mh.js";import"./Button.module-C2ELNEem.js";import"./Badge-LAqT22o7.js";import"./Tooltip-64IyLuk4.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CWoZLUJZ.js";import"./useId-CfGbHbQJ.js";import"./ProgressCircular-u9vevpyG.js";import"./useI18n-KYbpKEsf.js";import"./IconButton-Blrr834S.js";import"./Menu-BeZpFDiT.js";import"./useControl-BHRxoypK.js";import"./Divider-l6Y0Jgs3.js";import"./list-B1zo5gaH.js";import"./Skeleton-JHrb0bly.js";import"./Field.argTypes-1rEre7SB.js";import"./TextField-BpUUDk4a.js";import"./useValueControl-BAwr0tlp.js";import"./InputButton-yvCJ7c_i.js";import"./useFieldProps-BNSTbevB.js";import"./useFieldAriaProps-D4sViO3r.js";import"./Field-BXzPF4nu.js";import"./FieldLabel-C0bDiOug.js";import"./InfoTooltipPrimitive-BaQRZYyO.js";import"./Popover-CIPB7nap.js";import"./HelperText-BOHUOWLI.js";import"./Tag-rw8sUUkl.js";import"./TextOverflow-CaMKAJP6.js";import"./useHasOverflow-CHWGWZmC.js";import"./SelectTest-Bn5JeIT6.js";import"./SelectComposition-DpZ1oFo4.js";import"./TagGroup-Bmc-dFrU.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Components/Trigger/ButtonGroup",of:l}),`
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
