import{j as e,M as l,a as r,C as d}from"./iframe-BM36tKY9.js";import{useMDXComponents as s}from"./index-BCPnpXol.js";import{S as c,P as n,a}from"./TextField.stories-DS5NQKxG.js";import"./preload-helper-PPVm8Dsz.js";import"./add-VKxZMCZ1.js";import"./copy-5pLa4d1M.js";import"./subtract-CmdG1iV6.js";import"./Field.argTypes-1rEre7SB.js";import"./TextField-xzsdu2-Y.js";import"./useValueControl-C1TwhPrN.js";import"./sprout-tokens-C4H4srAS.js";import"./error-DJM79MqW.js";import"./renderOrClone-lrfYqLit.js";import"./classNames-D2MVtjzd.js";import"./sprout-BcBmzfoy.js";import"./useI18n-BRpGJeHe.js";import"./Button-wScfBKxi.js";import"./Button.module-Bn-SZyJ6.js";import"./common-bQH3ZR03.js";import"./Badge-CjLUVOBS.js";import"./Tooltip-DOknWAYm.js";import"./useId-Cih_zwB8.js";import"./ProgressCircular-DoqAoY81.js";import"./InputButton-CEOVqhok.js";import"./useControl-Bq0hCRWZ.js";import"./useFieldProps-C0FKGzLz.js";import"./useFieldAriaProps-D-kZa2Fo.js";import"./Field-BP_0b4CU.js";import"./FieldLabel-DHI2P9wk.js";import"./info-By4pCjMF.js";import"./InfoTooltipPrimitive-B8ta45BR.js";import"./Popover-DaYy3ijw.js";import"./padding-BVrxRlLA.js";import"./HelperText-BT_m4RdC.js";import"./IconButton-DIyYlW0K.js";import"./ButtonGroup-pkWcAzXg.js";import"./Tag-Bmu-JbUV.js";import"./TextOverflow-7rHwN7fm.js";import"./useHasOverflow-BudGxDi5.js";function o(t){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/TextField",of:c}),`
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
`]})]})}function J(t={}){const{wrapper:i}={...s(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(o,{...t})}):o(t)}export{J as default};
