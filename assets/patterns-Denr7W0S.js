import{j as e,M as a,a as o}from"./iframe-B4-nXs83.js";import{useMDXComponents as i}from"./index-BqykRLmO.js";import{FocusableTarget as r,ProgressiveDisclosure as l}from"./patterns.stories-CtvA19Mb.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-SOoz1jzb.js";import"./Copy-DgfNcGoS.js";import"./Paste-bE7IXLRc.js";import"./IconButton-D-KEKYAI.js";import"./Button-Cv6yFaKa.js";import"./classNames-eIMwhIDK.js";import"./icons-DuVV-LnW.js";import"./Button.module-C2ELNEem.js";import"./Badge-DvRPOsa9.js";import"./Tooltip-BmEIvhna.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CKYJ27w7.js";import"./useId-D71ehFqY.js";import"./ProgressCircular-CVxkPa9h.js";import"./useI18n-peGtGOOS.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"CSS/sprout-css-modules/patterns"}),`
`,e.jsx(n.h1,{id:"patterns",children:"Patterns"}),`
`,e.jsx(n.p,{children:"Here you will find classNames that doesn't exists in tailwindcss as they are opinionated classes that provide accessibility and useful features for every day use."}),`
`,e.jsx(n.h2,{id:"focusable--activable-blocks",children:"Focusable / Activable blocks"}),`
`,e.jsxs(n.p,{children:["It's not rare to see the need to make a ",e.jsx(n.code,{children:"div"}),` focusable to improve user experience. But it's wrong in the accessibility point of view.
One solution is to use `,e.jsx(n.code,{children:'tabindex="0"'})," on the ",e.jsx(n.code,{children:"div"}),` but it's still not enough as you must also provide a click and keydown handler.
In the end the goal is to make a `,e.jsx(n.code,{children:"div"})," behave like a button or a link."]}),`
`,e.jsx(n.p,{children:"To achieve that sprout-css-modules provide some utility classes to help you with that."}),`
`,e.jsx(n.h3,{id:"dont",children:"Don't"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<div tabIndex={0}>Focusable div yes but NOT ACCESSIBLE SO PLEASE DON'T</div>
`})}),`
`,e.jsx(n.h3,{id:"do",children:"Do"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<div className={sprout.classNames("focusable-target")}>
  <button
    type="button"
    aria-label="focus me"
    className={sprout.classNames("focusable-trigger")}
  />
  Content that can be focused in a way that is accessible
</div>
`})}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(n.h2,{id:"progressive-disclosure",children:"Progressive disclosure"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://internal.qlik.dev/design/sprout/design-patterns/progressive-disclosure/",rel:"nofollow",children:"Progressive disclosure"})," is a pattern used to show additional content or actions only when needed, reducing cognitive load and improving user experience."]}),`
`,e.jsx(n.h3,{id:"display-actions-on-hover",children:"Display actions on Hover"}),`
`,e.jsx(n.p,{children:"One common request for a dev is to display actions on hover."}),`
`,e.jsx(n.h4,{id:"dont-1",children:"Don't"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Hide actions by default */
.actions {
  display: none;
}

/* Show actions on container hover but that will not be shown in keyboard navigation !!! */
.container:hover .actions {
  display: block;
}
`})}),`
`,e.jsx(n.h4,{id:"do-1",children:"Do"}),`
`,e.jsx(n.p,{children:"The following example demonstrates how to implement progressive disclosure using Sprout CSS Modules:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<div
  className={sprout.classNames(
    "disclosure-trigger",
    "focusable-target",
    "flex",
    "flex-row",
    "items-center",
    "justify-between",
    "border-default",
    "p-xs",
    "w-m",
    "bg-interactive",
  )}
>
  <button
    type="button"
    aria-label="label of the current main action"
    className={sprout.classNames("focusable_trigger")}
  />
  <p>disclosure_target</p>
  <div
    className={sprout.classNames(
      "disclosure-target",
      "flex",
      "flex-row",
      "gap-s",
    )}
  >
    <IconButton label="Copy" icon={<Copy height={undefined} />} />
    <IconButton label="Paste" icon={<Paste height={undefined} />} />
  </div>
</div>
`})}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{})})]})}function M(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{M as default};
