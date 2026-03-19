import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{n as t,s as n}from"./iframe-DaKWDHAC.js";import{n as r}from"./lib-EjdzwnHJ.js";import{FocusableTarget as i,ProgressiveDisclosure as a}from"./patterns.stories-1qJPnSJg.js";var o=e();function s(e){let s={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,p:`p`,pre:`pre`,...r(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{title:`CSS/sprout-css-modules/patterns`}),`
`,(0,o.jsx)(s.h1,{id:`patterns`,children:`Patterns`}),`
`,(0,o.jsx)(s.p,{children:`Here you will find classNames that doesn't exists in tailwindcss as they are opinionated classes that provide accessibility and useful features for every day use.`}),`
`,(0,o.jsx)(s.h2,{id:`focusable--activable-blocks`,children:`Focusable / Activable blocks`}),`
`,(0,o.jsxs)(s.p,{children:[`It's not rare to see the need to make a `,(0,o.jsx)(s.code,{children:`div`}),` focusable to improve user experience. But it's wrong in the accessibility point of view.
One solution is to use `,(0,o.jsx)(s.code,{children:`tabindex="0"`}),` on the `,(0,o.jsx)(s.code,{children:`div`}),` but it's still not enough as you must also provide a click and keydown handler.
In the end the goal is to make a `,(0,o.jsx)(s.code,{children:`div`}),` behave like a button or a link.`]}),`
`,(0,o.jsx)(s.p,{children:`To achieve that sprout-css-modules provide some utility classes to help you with that.`}),`
`,(0,o.jsx)(s.h3,{id:`dont`,children:`Don't`}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-tsx`,children:`<div tabIndex={0}>Focusable div yes but NOT ACCESSIBLE SO PLEASE DON'T</div>
`})}),`
`,(0,o.jsx)(s.h3,{id:`do`,children:`Do`}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-tsx`,children:`<div className={sprout.classNames("focusable-target")}>
  <button
    type="button"
    aria-label="focus me"
    className={sprout.classNames("focusable-trigger")}
  />
  Content that can be focused in a way that is accessible
</div>
`})}),`
`,(0,o.jsx)(t,{of:i}),`
`,(0,o.jsx)(s.h2,{id:`progressive-disclosure`,children:`Progressive disclosure`}),`
`,(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:`https://internal.qlik.dev/design/sprout/design-patterns/progressive-disclosure/`,rel:`nofollow`,children:`Progressive disclosure`}),` is a pattern used to show additional content or actions only when needed, reducing cognitive load and improving user experience.`]}),`
`,(0,o.jsx)(s.h3,{id:`display-actions-on-hover`,children:`Display actions on Hover`}),`
`,(0,o.jsx)(s.p,{children:`One common request for a dev is to display actions on hover.`}),`
`,(0,o.jsx)(s.h4,{id:`dont-1`,children:`Don't`}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-css`,children:`/* Hide actions by default */
.actions {
  display: none;
}

/* Show actions on container hover but that will not be shown in keyboard navigation !!! */
.container:hover .actions {
  display: block;
}
`})}),`
`,(0,o.jsx)(s.h4,{id:`do-1`,children:`Do`}),`
`,(0,o.jsx)(s.p,{children:`The following example demonstrates how to implement progressive disclosure using Sprout CSS Modules:`}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-tsx`,children:`<div
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
`,(0,o.jsx)(t,{of:a}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{})})]})}function c(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}export{c as default};