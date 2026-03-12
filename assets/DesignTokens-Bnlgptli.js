import{j as e,M as i,C as a,a as l}from"./iframe-Bp0nu8X6.js";import{useMDXComponents as r}from"./index-CC_VpkT-.js";import{DataTable as s}from"./Tokens.stories-DQhKc28W.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-tokens-C5CkEUb2.js";import"./sprout-rpr_484f.js";import"./TanstackTable-DNTipomW.js";import"./useI18n-D2jaKmf9.js";import"./Button-CBkOB6z4.js";import"./classNames-BUd7eP-S.js";import"./Button.module-BRCMjQTg.js";import"./common-bQH3ZR03.js";import"./Badge-Br2oOa7d.js";import"./Tooltip-B3oqGcOh.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-D5e_-V2O.js";import"./useId-C38y77Da.js";import"./ProgressCircular-DO25q9z0.js";import"./sort-descending-Denwaaa7.js";import"./IconButton-Bu152FGZ.js";import"./Menu-Co2VX3TG.js";import"./useControl-CS67YHbK.js";import"./Divider-B3J7iNd7.js";import"./list-B1zo5gaH.js";import"./new-tab-uRDDQ1v4.js";import"./Skeleton-B__PZKef.js";import"./Popover-wxpNpCGf.js";import"./padding-Z5rKYLph.js";import"./TextField-BXk7dWee.js";import"./useValueControl-DAQoJtS1.js";import"./error-BcSU3HuT.js";import"./InputButton-BmHhXOBc.js";import"./useFieldProps-Cvv95kAj.js";import"./useFieldAriaProps-lqPBO4h4.js";import"./Field-4fYLnCC7.js";import"./FieldLabel-DBAKdsPr.js";import"./info-DGMlSu_6.js";import"./InfoTooltipPrimitive-C8AQG5h1.js";import"./HelperText-NWZ1zrXV.js";import"./Checkbox-Djd4-Wye.js";import"./List-Dh5d5DNB.js";import"./useListGesture-CvQX60jh.js";import"./Radio-CN8Ey4gw.js";import"./show-BUDxgafp.js";import"./Message-DGkKaG0R.js";import"./ProgressBar-DPn0IQrz.js";import"./index-CVlxIw56.js";import"./close-CJ5Ns5F2.js";import"./SeverityIcon-CBpxoadr.js";import"./warning-CT_3wb2_.js";import"./Dialog-Cr5lw4sh.js";function n(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Docs/Design Tokens"}),`
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
