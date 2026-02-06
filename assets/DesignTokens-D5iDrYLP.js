import{j as e,M as r,C as l,a}from"./iframe-Dux6zP9l.js";import{useMDXComponents as i}from"./index-BCztanOQ.js";import{DataTable as s}from"./Tokens.stories-BlmYb1_K.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-tokens-DrATkuH6.js";import"./sprout-duSO2RrP.js";import"./TanstackTable-eze-MICP.js";import"./useI18n-KYbpKEsf.js";import"./Button-CUxISDo2.js";import"./classNames-T6EAEAwi.js";import"./icons-DDUP-3mh.js";import"./Button.module-C2ELNEem.js";import"./Badge-LAqT22o7.js";import"./Tooltip-64IyLuk4.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CWoZLUJZ.js";import"./useId-CfGbHbQJ.js";import"./ProgressCircular-u9vevpyG.js";import"./SortDescending-6CDLuBsq.js";import"./IconButton-Blrr834S.js";import"./Menu-BeZpFDiT.js";import"./useControl-BHRxoypK.js";import"./Divider-l6Y0Jgs3.js";import"./list-B1zo5gaH.js";import"./NewTab-B05WKzom.js";import"./Skeleton-JHrb0bly.js";import"./Checkbox-Ce6gyz1s.js";import"./useValueControl-BAwr0tlp.js";import"./HelperText-BOHUOWLI.js";import"./InfoTooltipPrimitive-BaQRZYyO.js";import"./Info-DM0ROm97.js";import"./List-C5hsffpx.js";import"./useListGesture-l6HU6M_5.js";import"./Popover-CIPB7nap.js";import"./TextField-BpUUDk4a.js";import"./Error-BylAzqMK.js";import"./InputButton-yvCJ7c_i.js";import"./useFieldProps-BNSTbevB.js";import"./useFieldAriaProps-D4sViO3r.js";import"./Field-BXzPF4nu.js";import"./FieldLabel-C0bDiOug.js";import"./Radio-BgigLezH.js";import"./Message-DOGGZn5e.js";import"./ProgressBar-DYErwZaZ.js";import"./index-DCXWyNSz.js";import"./Close-DZrODGJw.js";import"./SeverityIcon-xCN2JtCp.js";import"./Warning-DwriNDhq.js";import"./Dialog-DHYNXMyx.js";function t(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Design Tokens"}),`
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
