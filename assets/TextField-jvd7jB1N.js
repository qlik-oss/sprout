import{j as e,M as l,a as r,C as d}from"./iframe-itHhOQJ8.js";import{useMDXComponents as s}from"./index-M6OOd87p.js";import{S as c,P as n,a}from"./TextField.stories-DgYIkr17.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-sGTd4JLT.js";import"./Copy-BZIqKWxc.js";import"./Subtract-BguCuCMl.js";import"./Field.argTypes-1rEre7SB.js";import"./TextField-CrzVSwY1.js";import"./useValueControl-BoLujgBt.js";import"./sprout-tokens-D9QRO1qB.js";import"./Error-CgMRcq7x.js";import"./renderOrClone-DcDxQLMY.js";import"./classNames-8u_YGv6N.js";import"./sprout-5bk7oM4L.js";import"./useI18n-DI5kaiCu.js";import"./Button-D1L5V1zp.js";import"./icons-ByJhQmwX.js";import"./Button.module-C2ELNEem.js";import"./Badge-Fno8cZv5.js";import"./Tooltip-CsCotLcm.js";import"./useId-B9bqBKq5.js";import"./ProgressCircular-DxTh7cF9.js";import"./InputButton-CobW-7UY.js";import"./useControl-tJx49zVQ.js";import"./useFieldProps-ZapC1bKU.js";import"./useFieldAriaProps-DJiNiZ9_.js";import"./Field-BglQDcK_.js";import"./FieldLabel-k_vhoLHi.js";import"./Info-CR8Ra2BB.js";import"./InfoTooltipPrimitive-BycnW3Wq.js";import"./Popover-D-VXifUT.js";import"./HelperText-CZI4gvqv.js";import"./IconButton-BFY56UPS.js";import"./ButtonGroup-tVNqHLGk.js";import"./Tag-D6Whh4y4.js";import"./TextOverflow-ZR1lg4UG.js";import"./useHasOverflow-BPrWXac9.js";function o(t){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/TextField",of:c}),`
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
