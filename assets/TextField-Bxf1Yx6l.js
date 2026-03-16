import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-BRSAI4nO.js";import{n as i}from"./lib-EjdzwnHJ.js";import{Playground as a,Search as o,t as s}from"./TextField.stories-D1HpgLQx.js";var c=e();function l(e){let l={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Components/TextField`,of:s}),`
`,(0,c.jsx)(l.h1,{id:`textfield`,children:`TextField`}),`
`,(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:`language-tsx`,children:`// if you want the field
import { TextField } from "@qlik/sprout-react";

<TextField label="Label" helpText="helpText" />;
`})}),`
`,(0,c.jsx)(n,{of:a}),`
`,(0,c.jsx)(l.h2,{id:`properties-for-textfield`,children:`Properties for TextField`}),`
`,(0,c.jsxs)(l.p,{children:[`The TextField directly inherits properties from `,(0,c.jsx)(l.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input`,rel:`nofollow`,children:`HTML input element`}),` but only support `,(0,c.jsx)(l.code,{children:`type="text"`}),` and `,(0,c.jsx)(l.code,{children:`type="search"`}),`.`]}),`
`,(0,c.jsx)(t,{of:a}),`
`,(0,c.jsx)(l.h2,{id:`variations`,children:`Variations`}),`
`,(0,c.jsxs)(l.p,{children:[`The props `,(0,c.jsx)(l.code,{children:`designSize`}),` accept two values: `,(0,c.jsx)(l.code,{children:`small`}),` or `,(0,c.jsx)(l.code,{children:`default`}),`.
You can also pass the type="search".`]}),`
`,(0,c.jsx)(n,{of:o}),`
`,(0,c.jsx)(l.h2,{id:`affixwrapper`,children:`AffixWrapper`}),`
`,(0,c.jsx)(l.p,{children:`To position affixes according to our guidelines you can make use of the AffixWrapper help component.`}),`
`,(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:`language-tsx`,children:`import { AffixWrapper } from "@qlik/sprout-react";

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
`,(0,c.jsx)(l.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,c.jsx)(l.p,{children:`HTML structure`}),`
`,(0,c.jsxs)(l.ul,{children:[`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`TextField`}),` structure use `,(0,c.jsx)(l.code,{children:`Field`}),` -> `,(0,c.jsx)(l.code,{children:`Input`}),` -> `,(0,c.jsx)(l.code,{children:`input`}),` HTML tag with `,(0,c.jsx)(l.code,{children:`type="text"`}),` by default.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`disabled`}),` props is map to input native `,(0,c.jsx)(l.code,{children:`disabled`}),` attribute.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`readOnly`}),` props is map to input native `,(0,c.jsx)(l.code,{children:`readOnly`}),` attribute.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`hasError`}),` props is map to input native `,(0,c.jsx)(l.code,{children:`aria-invalid`}),` attribute.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`label`}),` generate a label tag with the htmlFor attribute.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`label`}),` props add a `,(0,c.jsx)(l.code,{children:`aria-labelledby`}),` attribute to the textarea.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`helpText`}),` and `,(0,c.jsx)(l.code,{children:`errorMessages`}),` props add a `,(0,c.jsx)(l.code,{children:`aria-describedby`}),` attribute to the textarea.`]}),`
`]}),`
`,(0,c.jsx)(l.p,{children:`Keyboard Interaction:`}),`
`,(0,c.jsxs)(l.ul,{children:[`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`Enter`}),`: as we rely on native input tag the behavior is the same as the native input tag: Submit the form.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`Tab`}),`: if focused it will move to the next focusable element.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`Shift + Tab`}),`: if focused it will move to the previous focusable element.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`Backspace`}),`: if focused it will delete the character before the cursor.`]}),`
`]})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}export{u as default};