import{j as e,M as i,C as a,a as l}from"./iframe-ZO3EpHUh.js";import{useMDXComponents as r}from"./index-BuQoUgKa.js";import{DataTable as s}from"./Tokens.stories-CjaWU2qA.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-tokens-C5CkEUb2.js";import"./sprout-JWClaPEx.js";import"./TanstackTable-CVd5IU1r.js";import"./useI18n-CNj_Vmmx.js";import"./Button-DwNMLHHD.js";import"./classNames--9J8KLdq.js";import"./Button.module-CmtyAZAy.js";import"./common-bQH3ZR03.js";import"./Badge-CIU99cFr.js";import"./Tooltip-CjNQJJZv.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-CTOYJqpW.js";import"./useId-peRdP77j.js";import"./ProgressCircular-Bbm1pjbl.js";import"./sort-descending-DuwJD51Q.js";import"./IconButton-CM9e8KDm.js";import"./Menu-CLctAJeW.js";import"./useControl-B2Bmxigf.js";import"./Divider-Bbj5__gU.js";import"./list-B1zo5gaH.js";import"./new-tab-CfvnCP2A.js";import"./Skeleton-Ch8F1EEZ.js";import"./Popover-BDw3NIcl.js";import"./padding-nVQxVZeA.js";import"./TextField-DZIgwTux.js";import"./useValueControl-B3H3Rg3H.js";import"./error-Lg61ZlTl.js";import"./InputButton-Binv3ZHd.js";import"./useFieldProps-DqU5TkBR.js";import"./useFieldAriaProps-B_vYltrV.js";import"./Field-uEq3IPbz.js";import"./FieldLabel-DyqdK2ie.js";import"./info-DvsPKJb0.js";import"./InfoTooltipPrimitive-CX2r-Osw.js";import"./HelperText-BqjFHr21.js";import"./Checkbox-Gl5nFt4x.js";import"./List-Dc9_b6lv.js";import"./useListGesture-B9iOauyS.js";import"./Radio-DsR-8wzh.js";import"./show-Do692Dy4.js";import"./Message-CWQJdgS-.js";import"./ProgressBar-sErTAQHo.js";import"./index-UskN1EYy.js";import"./close-CFDHWYro.js";import"./SeverityIcon-DTHCWEmM.js";import"./warning-LAozOqxS.js";import"./Dialog-CWdxBo8Y.js";function n(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Docs/Design Tokens"}),`
`,e.jsx(o.h1,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsxs(o.p,{children:["In ",e.jsx(o.a,{href:"https://internal.qlik.dev/design/sprout/",rel:"nofollow",children:"Sprout"}),", we use ",e.jsx(o.a,{href:"https://internal.qlik.dev/design/sprout/design-tokens/",rel:"nofollow",children:"design tokens"}),"."]}),`
`,e.jsxs(o.p,{children:["We implement tokens using ",e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*",rel:"nofollow",children:"CSS Variables"}),". You can also read the article on ",e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",rel:"nofollow",children:"Using CSS custom properties (variables)"})," for more details."]}),`
`,e.jsx(o.h2,{id:"source",children:"Source"}),`
`,e.jsxs(o.p,{children:["The tokens are managed outside of this repository in the package ",e.jsx(o.code,{children:"@qlik/design-tokens"}),"."]}),`
`,e.jsx(o.h2,{id:"ide-extensions--developer-experience",children:"IDE Extensions / Developer Experience"}),`
`,e.jsxs(o.p,{children:["If you are using VSCode, we recommend trying the ",e.jsx(o.a,{href:"https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables",rel:"nofollow",children:"CSS Variable Autocomplete"})," extension. It provides autocompletion for CSS variables, making it easier to work with design tokens."]}),`
`,e.jsx(o.h2,{id:"how-to-use",children:"How to Use"}),`
`,e.jsxs(o.p,{children:["If you’ve followed the steps in the Getting Started guide, you’ve already used the ",e.jsx(o.code,{children:"ThemeProvider"}),". This means you can now reference tokens directly using native CSS syntax like this:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`.foo {
  color: var(--sprout-common-foreground-color-default);
  padding: var(--sprout-common-spacing-s);
  width: var(--sprout-common-sizing-3xl);
}
`})}),`
`,e.jsx(o.p,{children:"The philosophy behind tokens is to avoid relying on specific values and instead trust the semantic meaning of the tokens. As a frontend developer, your code should work seamlessly with different values, even if you don’t control them."}),`
`,e.jsx(o.p,{children:"This doesn’t mean you shouldn’t test these values. Storybook provides an excellent way to test the changes supported by Sprout."}),`
`,e.jsxs(o.p,{children:["You can also use our ",e.jsx(o.a,{href:"?path=/docs/css-sprout-css-modules--docs",children:"sprout-css-modules"})," classNames. Here’s an example:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`import { classNames } from "@qlik/sprout-react";

function MyComponent() {
  return (
    <div className={classNames("flex", "bg-default", "text-default")}>
      Hello world
    </div>
  );
}
`})}),`
`,e.jsx(o.h2,{id:"tokens-data-table",children:"Tokens Data Table"}),`
`,e.jsx(a,{of:s}),`
`,e.jsx(l,{of:s})]})}function ie(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{ie as default};
