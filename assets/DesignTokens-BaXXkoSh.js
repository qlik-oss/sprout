import{j as e,M as r,C as l,a}from"./iframe-B-fqCePV.js";import{useMDXComponents as i}from"./index-DUhTx2ua.js";import{DataTable as s}from"./Tokens.stories-DD94e4w_.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-tokens-DrATkuH6.js";import"./sprout-DqOLOcsj.js";import"./TanstackTable-CDWO9Baz.js";import"./useI18n-uzhF32fT.js";import"./Button-DgHw6K-5.js";import"./classNames-BHQ9ieoZ.js";import"./icons-BXG-SLO7.js";import"./Button.module-C2ELNEem.js";import"./Badge-BMzhzV_X.js";import"./Tooltip-DclK_iM1.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-BvkMXfLp.js";import"./useId-DU0uuk5t.js";import"./ProgressCircular-CeNa-NP_.js";import"./SortDescending-CfflnELi.js";import"./IconButton-C1DotWTd.js";import"./Menu-CaarWdBl.js";import"./useControl-DDjCssuD.js";import"./Divider-B2v-xVm0.js";import"./list-B1zo5gaH.js";import"./NewTab-DUTMcy5N.js";import"./Skeleton-CLuWHboh.js";import"./Checkbox-u2f0i23h.js";import"./useValueControl-D8vAvYvZ.js";import"./HelperText-B14iHzzi.js";import"./InfoTooltipPrimitive-D79OSySs.js";import"./Info-C4YmKgXN.js";import"./List-CBd3yLgn.js";import"./useListGesture-CsinPUm2.js";import"./Popover-D19D-oMR.js";import"./TextField-DEQy7r8U.js";import"./Error-BQGw3LDI.js";import"./InputButton-VrXIQIPl.js";import"./useFieldProps-C5tdc_TS.js";import"./useFieldAriaProps-C2PPXi5-.js";import"./Field-BLDSqeK1.js";import"./FieldLabel-8GV8HzVd.js";import"./Radio-DFWUDyFe.js";import"./Message-DGshW5gP.js";import"./ProgressBar-BPq1EUCD.js";import"./index-D3nWdDvz.js";import"./Close-R01cAXcl.js";import"./SeverityIcon-BvojxLgC.js";import"./Warning-GhyyIkan.js";import"./Dialog-Bnd6xrAH.js";function t(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Design Tokens"}),`
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
