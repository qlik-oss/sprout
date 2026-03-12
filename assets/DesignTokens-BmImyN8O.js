import{j as e,M as i,C as a,a as l}from"./iframe-s7Iwh0oT.js";import{useMDXComponents as r}from"./index-3LxxidSz.js";import{DataTable as s}from"./Tokens.stories-8f2GoYA4.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-tokens-C5CkEUb2.js";import"./sprout-Bvx94sbk.js";import"./TanstackTable-DU4sN6ms.js";import"./useI18n-DNSc_Xzu.js";import"./Button-BLnymG9d.js";import"./classNames-BgUAGgdt.js";import"./Button.module-BSdpW5zV.js";import"./common-bQH3ZR03.js";import"./Badge-CjbZkwpT.js";import"./Tooltip-_uMFampe.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BoZIv2t8.js";import"./useId-C37lMSXz.js";import"./ProgressCircular-Dm76i-ei.js";import"./sort-descending-OBAQsHI9.js";import"./IconButton-zwf3qVx9.js";import"./Menu-CU8ixYLE.js";import"./useControl-CS-bltOB.js";import"./Divider-BMuu4i8A.js";import"./list-B1zo5gaH.js";import"./new-tab-WxcYfP2Y.js";import"./Skeleton-DC7wVjwf.js";import"./Popover-CD-kPJqZ.js";import"./padding-BXgzSss2.js";import"./TextField-ID03Gn3a.js";import"./useValueControl-BSJFleLi.js";import"./error-DwsaS794.js";import"./InputButton-D_n0MlAo.js";import"./useFieldProps-BTIA5NzZ.js";import"./useFieldAriaProps-Ctj7S-QK.js";import"./Field-DJxPk6rG.js";import"./FieldLabel-CwYUiiFr.js";import"./info-DM6050LP.js";import"./InfoTooltipPrimitive-HCfeTcaQ.js";import"./HelperText-Bw9VVLAT.js";import"./Checkbox-V5fI8Yve.js";import"./List-BKWt4BD6.js";import"./useListGesture-CpxhX8BH.js";import"./Radio-CsblJSff.js";import"./show-OD0q4moC.js";import"./Message-DStVeNgc.js";import"./ProgressBar-GO4kVXd6.js";import"./index-CZbznNCi.js";import"./close-Bbk9t1FU.js";import"./SeverityIcon-Btk8aNwb.js";import"./warning-CAFk7pxH.js";import"./Dialog-N5Qk9w5h.js";function n(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Docs/Design Tokens"}),`
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
