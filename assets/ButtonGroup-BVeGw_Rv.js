import{j as t,M as m,a as n,C as s}from"./iframe-qjjAf_pH.js";import{useMDXComponents as p}from"./index-BAT7sozL.js";import{a}from"./Button.stories-CzajQk2z.js";import"./TextField.stories-voLqe8kf.js";import{S as l,P as i}from"./ButtonGroup.stories-BCklkhWJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-DSLcMkbC.js";import"./icons-CIq2CjWF.js";import"./Button.argTypes-BxTnw5Wa.js";import"./Icons-Blxgg6XZ.js";import"./index-BFR_pwzS.js";import"./Next-CxhzuVxv.js";import"./Bookmark-BNRO0aS9.js";import"./Upload-CL9H6pmE.js";import"./Text-B-zga3pP.js";import"./Close-Bp7FqXQR.js";import"./SortDescending-C3dNRiBL.js";import"./Undo-Dsdksioz.js";import"./Person-BIgNV-Ed.js";import"./Copy-BTa2KiQL.js";import"./Delete-BwmiKOHh.js";import"./Filter-hx7yX_Jo.js";import"./Edit-2pD94UJo.js";import"./Error-BrLGh9jC.js";import"./GenerateWithAi-f8_0IRx5.js";import"./History-atzo0mXc.js";import"./Search-DWresNZR.js";import"./Info-DxHQkaw3.js";import"./Subtract-CBZN_Qgc.js";import"./Map-in9fWS3M.js";import"./NewTab-CYZ0jhBQ.js";import"./Notification-Dtb2E571.js";import"./Paste-Qm0zT67Y.js";import"./Warning-CuGLZChC.js";import"./Tenant-oJlxY9e2.js";import"./ButtonGroup-tgc_FKbn.js";import"./classNames-BVAN1ZTN.js";import"./sprout-Dvd5rbSu.js";import"./FloatingWrapper-wvjLqIRc.js";import"./Button-cYFf5aNk.js";import"./icons-5qhXnzWI.js";import"./Button.module-C2ELNEem.js";import"./Badge-CvmwyUY9.js";import"./Tooltip-DvaPb59I.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CXS0BGZe.js";import"./useId-CYaNFQmj.js";import"./ProgressCircular-BSs6AknY.js";import"./useI18n-DleVkSsM.js";import"./IconButton-DKYxz8uh.js";import"./Menu-C5_qGJie.js";import"./useControl-BNhHN6uq.js";import"./Divider-Cf0WguxB.js";import"./list-B1zo5gaH.js";import"./Skeleton-BKmE9JlX.js";import"./Field.argTypes-1rEre7SB.js";import"./TextField-CK34yAWN.js";import"./useValueControl-CExQO3qq.js";import"./InputButton-C0Pq6Rob.js";import"./useFieldProps-BNEikc4J.js";import"./useFieldAriaProps-7kz57GoE.js";import"./Field-Cf7Db6oK.js";import"./FieldLabel-bQ0UMnrf.js";import"./InfoTooltipPrimitive-CrOtV9y3.js";import"./Popover-DnFzFkcI.js";import"./HelperText-CYjRsd29.js";import"./Tag-CyqCz7gG.js";import"./TextOverflow-QXR0TMUv.js";import"./useHasOverflow-B98-wlZO.js";import"./SelectTest-6ySHDqOl.js";import"./SelectComposition-aqwnCHtS.js";import"./TagGroup-B7F15cvC.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Components/Trigger/ButtonGroup",of:l}),`
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
