import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,i as r,l as i,n as a,s as o}from"./iframe-B0xl5hqz.js";import{t as s}from"./mdx-react-shim-C5WuC5zb.js";import{Playground as c,Search as l,n as u,t as d}from"./TextField.stories-BXaZSFcv.js";function f(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{title:`Components/TextField`,of:d}),`
`,(0,m.jsx)(n.h1,{id:`textfield`,children:`TextField`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`// if you want the field
import { TextField } from "@qlik/sprout-react";

<TextField label="Label" helpText="helpText" />;
`})}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(n.h2,{id:`properties-for-textfield`,children:`Properties for TextField`}),`
`,(0,m.jsxs)(n.p,{children:[`The TextField directly inherits properties from `,(0,m.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input`,rel:`nofollow`,children:`HTML input element`}),` but only support `,(0,m.jsx)(n.code,{children:`type="text"`}),` and `,(0,m.jsx)(n.code,{children:`type="search"`}),`.`]}),`
`,(0,m.jsx)(r,{of:c}),`
`,(0,m.jsx)(n.h2,{id:`variations`,children:`Variations`}),`
`,(0,m.jsxs)(n.p,{children:[`The props `,(0,m.jsx)(n.code,{children:`designSize`}),` accept two values: `,(0,m.jsx)(n.code,{children:`small`}),` or `,(0,m.jsx)(n.code,{children:`default`}),`.
You can also pass the type="search".`]}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsx)(n.h2,{id:`affixwrapper`,children:`AffixWrapper`}),`
`,(0,m.jsx)(n.p,{children:`To position affixes according to our guidelines you can make use of the AffixWrapper help component.`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { AffixWrapper } from "@qlik/sprout-react";

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
`,(0,m.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsx)(n.p,{children:`HTML structure`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`TextField`}),` structure use `,(0,m.jsx)(n.code,{children:`Field`}),` -> `,(0,m.jsx)(n.code,{children:`Input`}),` -> `,(0,m.jsx)(n.code,{children:`input`}),` HTML tag with `,(0,m.jsx)(n.code,{children:`type="text"`}),` by default.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`disabled`}),` props is map to input native `,(0,m.jsx)(n.code,{children:`disabled`}),` attribute.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`readOnly`}),` props is map to input native `,(0,m.jsx)(n.code,{children:`readOnly`}),` attribute.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`hasError`}),` props is map to input native `,(0,m.jsx)(n.code,{children:`aria-invalid`}),` attribute.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`label`}),` generate a label tag with the htmlFor attribute.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`label`}),` props add a `,(0,m.jsx)(n.code,{children:`aria-labelledby`}),` attribute to the textarea.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`helpText`}),` and `,(0,m.jsx)(n.code,{children:`errorMessages`}),` props add a `,(0,m.jsx)(n.code,{children:`aria-describedby`}),` attribute to the textarea.`]}),`
`]}),`
`,(0,m.jsx)(n.p,{children:`Keyboard Interaction:`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Enter`}),`: as we rely on native input tag the behavior is the same as the native input tag: Submit the form.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Tab`}),`: if focused it will move to the next focusable element.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Shift + Tab`}),`: if focused it will move to the previous focusable element.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Backspace`}),`: if focused it will delete the character before the cursor.`]}),`
`]})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=n(),s(),i(),u()}))();export{p as default};