import{j as e,M as r,C as l,a}from"./iframe-D-N3fK2j.js";import{useMDXComponents as i}from"./index-BvagnWFp.js";import{DataTable as s}from"./Tokens.stories-7IDnOaXZ.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-tokens-C5CkEUb2.js";import"./sprout-UDo5dA_z.js";import"./TanstackTable-BQSmQzm2.js";import"./useI18n-ClHBar3-.js";import"./Button-BiiNVP7I.js";import"./classNames-CrSIhzis.js";import"./icons-BEmnCRju.js";import"./Button.module-CmdpHks8.js";import"./Badge-sJnchsAW.js";import"./Tooltip-DaX3jRge.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-25h2pNOO.js";import"./useId-Bkl3iN6O.js";import"./ProgressCircular-CdUDfayh.js";import"./SortDescending-7Is3TCUG.js";import"./IconButton-Dg4ysz4Z.js";import"./Menu-CpWAuarv.js";import"./useControl-U-WkQj2I.js";import"./Divider-Aa9jm5B9.js";import"./list-B1zo5gaH.js";import"./NewTab-DIWrR844.js";import"./Skeleton-Bx_f_eFM.js";import"./Checkbox-BypGcOIl.js";import"./useValueControl-DH7McdQ1.js";import"./HelperText-DkWywDIM.js";import"./InfoTooltipPrimitive-C8Uq1qY7.js";import"./Info-DKfyJpi1.js";import"./List-DiNkJdPa.js";import"./useListGesture-DW7ff4gI.js";import"./Popover-B17Az-M5.js";import"./TextField-DMygpcri.js";import"./Error-CZbJtLWx.js";import"./InputButton-BoVH_no0.js";import"./useFieldProps-Cnz6GbX_.js";import"./useFieldAriaProps-EzEn10HD.js";import"./Field-DHjy_kFd.js";import"./FieldLabel-BNj8Kiyj.js";import"./Radio-BUTN66Da.js";import"./Message-kE_O_eKL.js";import"./ProgressBar-S0aBvDe-.js";import"./index-C4YkipDE.js";import"./Close-Clva93gw.js";import"./SeverityIcon-DDEIToER.js";import"./Warning-Dy5sqdbk.js";import"./Dialog-CiRpLpyf.js";function t(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Design Tokens"}),`
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
`,e.jsxs(o.p,{children:["You can also use our ",e.jsx(o.a,{href:"https://tailwindcss.com/",rel:"nofollow",children:"Tailwind CSS"})," classNames, which are implemented using ",e.jsx(o.a,{href:"?path=/docs/css-sprout-css-modules--docs",children:"sprout-css-modules"}),". All class names follow the Tailwind CSS naming convention. Here’s an example:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`import { classNames } from "@qlik/sprout-react";

function MyComponent() {
  return <div className={classNames("flex", "bg_default", "text_default")}>Hello world</div>;
}
`})}),`
`,e.jsx(o.h2,{id:"tokens-customization",children:"Tokens Customization"}),`
`,e.jsx(o.p,{children:"By customizing token values, you can make significant changes to the design. Our tokens are organized into different dimensions:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Appearance"}),": Covers all colors and is the first step in customization."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Roundness"}),": Helps adjust the UI to be more rounded or sharper."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Typography"}),": Allows you to specify where your fonts are located."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Density"}),": Focuses on accessibility and should generally not be changed."]}),`
`]}),`
`,e.jsx(o.p,{children:"These tokens are considered a public API, enabling integrations to provide new values and make the UI look different."}),`
`,e.jsx(o.p,{children:'We will provide multiple examples in the future to help developers test their UI with "extreme" configurations.'}),`
`,e.jsx(o.h2,{id:"tokens-data-table",children:"Tokens Data Table"}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(a,{of:s})]})}function te(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{te as default};
