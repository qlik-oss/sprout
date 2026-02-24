import{j as e,M as l,a as r,C as d}from"./iframe-CxjlquLv.js";import{useMDXComponents as s}from"./index-CopXJ1Hs.js";import{S as c,P as n,a}from"./TextField.stories-BAAM0GbY.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-DmDJ4n-J.js";import"./Copy-E7NdQvaj.js";import"./Subtract-Cskw5IaI.js";import"./Field.argTypes-1rEre7SB.js";import"./TextField-B4G6cpkZ.js";import"./useValueControl-z08PllWD.js";import"./sprout-tokens-C4H4srAS.js";import"./Error-Cwyymijo.js";import"./renderOrClone-BEoUSBug.js";import"./classNames-OYhIMgh8.js";import"./sprout-BMjCkMv3.js";import"./useI18n-DzUau43H.js";import"./Button-DovarDo_.js";import"./icons-LhMznsFI.js";import"./Button.module-CmdpHks8.js";import"./Badge-CT3AYSwq.js";import"./Tooltip-BF9waJvZ.js";import"./useId-BK-xxnhR.js";import"./ProgressCircular-54Bo0zt0.js";import"./InputButton-DFNinxRI.js";import"./useControl-BQvv0ErP.js";import"./useFieldProps-Cz5SVI77.js";import"./useFieldAriaProps-D_SD2qVI.js";import"./Field-lZWJhm0y.js";import"./FieldLabel-DnVlDuiw.js";import"./Info-CmHBCOIz.js";import"./InfoTooltipPrimitive-e-SBoNBf.js";import"./Popover-D095V7L6.js";import"./HelperText-CEBD_W8W.js";import"./IconButton-Dn95SqkZ.js";import"./ButtonGroup-CHjnLviU.js";import"./Tag-BMD7KwwB.js";import"./TextOverflow-qrd-zg5J.js";import"./useHasOverflow-BuWth_t2.js";function o(t){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/TextField",of:c}),`
`,e.jsx(i.h1,{id:"textfield",children:"TextField"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`// if you want the field
import { TextField } from "@qlik/sprout-react";

<TextField label="Label" helpText="helpText" />;
`})}),`
`,e.jsx(r,{of:n}),`
`,e.jsx(i.h2,{id:"properties-for-textfield",children:"Properties for TextField"}),`
`,e.jsxs(i.p,{children:["The TextField directly inherits properties from ",e.jsx(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input",rel:"nofollow",children:"HTML input element"})," but only support ",e.jsx(i.code,{children:'type="text"'})," and ",e.jsx(i.code,{children:'type="search"'}),"."]}),`
`,e.jsx(d,{of:n}),`
`,e.jsx(i.h2,{id:"variations",children:"Variations"}),`
`,e.jsxs(i.p,{children:["The props ",e.jsx(i.code,{children:"designSize"})," accept two values: ",e.jsx(i.code,{children:"small"})," or ",e.jsx(i.code,{children:"default"}),`.
You can also pass the type="search".`]}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(i.h2,{id:"affixwrapper",children:"AffixWrapper"}),`
`,e.jsx(i.p,{children:"To position affixes according to our guidelines you can make use of the AffixWrapper help component."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { AffixWrapper } from "@qlik/sprout-react";

<TextField
  label="Label"
  helpText="helpText"
  rightAffix={
    <AffixWrapper>
      <IconButton
        variant="quiet"
        size="small"
        label="Copy the key"
        icon={<Copy width={undefined} height={undefined} />}
      />
    </AffixWrapper>
  }
/>;
`})}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(i.p,{children:"HTML structure"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"TextField"})," structure use ",e.jsx(i.code,{children:"Field"})," -> ",e.jsx(i.code,{children:"Input"})," -> ",e.jsx(i.code,{children:"input"})," HTML tag with ",e.jsx(i.code,{children:'type="text"'})," by default."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"disabled"})," props is map to input native ",e.jsx(i.code,{children:"disabled"})," attribute."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"readOnly"})," props is map to input native ",e.jsx(i.code,{children:"readOnly"})," attribute."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"hasError"})," props is map to input native ",e.jsx(i.code,{children:"aria-invalid"})," attribute."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"label"})," generate a label tag with the htmlFor attribute."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"label"})," props add a ",e.jsx(i.code,{children:"aria-labelledby"})," attribute to the textarea."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"helpText"})," and ",e.jsx(i.code,{children:"errorMessages"})," props add a ",e.jsx(i.code,{children:"aria-describedby"})," attribute to the textarea."]}),`
`]}),`
`,e.jsx(i.p,{children:"Keyboard Interaction:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Enter"}),": as we rely on native input tag the behavior is the same as the native input tag: Submit the form."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Tab"}),": if focused it will move to the next focusable element."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Shift + Tab"}),": if focused it will move to the previous focusable element."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Backspace"}),": if focused it will delete the character before the cursor."]}),`
`]})]})}function G(t={}){const{wrapper:i}={...s(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(o,{...t})}):o(t)}export{G as default};
