import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{i as n,l as r,n as i,p as a,s as o}from"./iframe-UwarwtgL.js";import{t as s}from"./mdx-react-shim-DbLuWb1F.js";import{Playground as c,Search as l,n as u,t as d}from"./TextField.stories-B0kmqbuB.js";function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...a(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{title:`Components/TextField`,of:d}),`
`,(0,m.jsx)(t.h1,{id:`textfield`,children:`TextField`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`// if you want the field
import { TextField } from "@qlik/sprout-react";

<TextField label="Label" helpText="helpText" />;
`})}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsx)(t.h2,{id:`properties-for-textfield`,children:`Properties for TextField`}),`
`,(0,m.jsxs)(t.p,{children:[`The TextField directly inherits properties from `,(0,m.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input`,rel:`nofollow`,children:`HTML input element`}),` but only support `,(0,m.jsx)(t.code,{children:`type="text"`}),` and `,(0,m.jsx)(t.code,{children:`type="search"`}),`.`]}),`
`,(0,m.jsx)(n,{of:c}),`
`,(0,m.jsx)(t.h2,{id:`variations`,children:`Variations`}),`
`,(0,m.jsxs)(t.p,{children:[`The props `,(0,m.jsx)(t.code,{children:`designSize`}),` accept two values: `,(0,m.jsx)(t.code,{children:`small`}),` or `,(0,m.jsx)(t.code,{children:`default`}),`.
You can also pass the type="search".`]}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`affixwrapper`,children:`AffixWrapper`}),`
`,(0,m.jsx)(t.p,{children:`To position affixes according to our guidelines you can make use of the AffixWrapper help component.`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { AffixWrapper } from "@qlik/sprout-react";

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
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsx)(t.p,{children:`HTML structure`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`TextField`}),` structure use `,(0,m.jsx)(t.code,{children:`Field`}),` -> `,(0,m.jsx)(t.code,{children:`Input`}),` -> `,(0,m.jsx)(t.code,{children:`input`}),` HTML tag with `,(0,m.jsx)(t.code,{children:`type="text"`}),` by default.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`disabled`}),` props is map to input native `,(0,m.jsx)(t.code,{children:`disabled`}),` attribute.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`readOnly`}),` props is map to input native `,(0,m.jsx)(t.code,{children:`readOnly`}),` attribute.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`hasError`}),` props is map to input native `,(0,m.jsx)(t.code,{children:`aria-invalid`}),` attribute.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`label`}),` generate a label tag with the htmlFor attribute.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`label`}),` props add a `,(0,m.jsx)(t.code,{children:`aria-labelledby`}),` attribute to the textarea.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`helpText`}),` and `,(0,m.jsx)(t.code,{children:`errorMessages`}),` props add a `,(0,m.jsx)(t.code,{children:`aria-describedby`}),` attribute to the textarea.`]}),`
`]}),`
`,(0,m.jsx)(t.p,{children:`Keyboard Interaction:`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Enter`}),`: as we rely on native input tag the behavior is the same as the native input tag: Submit the form.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Tab`}),`: if focused it will move to the next focusable element.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Shift + Tab`}),`: if focused it will move to the previous focusable element.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Backspace`}),`: if focused it will delete the character before the cursor.`]}),`
`]})]})}function p(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),s(),r(),u()}))();export{p as default};