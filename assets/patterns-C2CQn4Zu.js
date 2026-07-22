import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{l as n,n as r,p as i,s as a}from"./iframe-UwarwtgL.js";import{t as o}from"./mdx-react-shim-DbLuWb1F.js";import{FocusableTarget as s,ProgressiveDisclosure as c,t as l}from"./patterns.stories-w42gdE1C.js";function u(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,p:`p`,pre:`pre`,...i(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{title:`CSS/sprout-css-modules/patterns`}),`
`,(0,f.jsx)(t.h1,{id:`patterns`,children:`Patterns`}),`
`,(0,f.jsx)(t.p,{children:`Here you will find classNames that doesn't exists in tailwindcss as they are opinionated classes that provide accessibility and useful features for every day use.`}),`
`,(0,f.jsx)(t.h2,{id:`focusable--activable-blocks`,children:`Focusable / Activable blocks`}),`
`,(0,f.jsxs)(t.p,{children:[`It's not rare to see the need to make a `,(0,f.jsx)(t.code,{children:`div`}),` focusable to improve user experience. But it's wrong in the accessibility point of view.
One solution is to use `,(0,f.jsx)(t.code,{children:`tabindex="0"`}),` on the `,(0,f.jsx)(t.code,{children:`div`}),` but it's still not enough as you must also provide a click and keydown handler.
In the end the goal is to make a `,(0,f.jsx)(t.code,{children:`div`}),` behave like a button or a link.`]}),`
`,(0,f.jsx)(t.p,{children:`To achieve that sprout-css-modules provide some utility classes to help you with that.`}),`
`,(0,f.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`<div tabIndex={0}>Focusable div yes but NOT ACCESSIBLE SO PLEASE DON'T</div>
`})}),`
`,(0,f.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`<div className={sprout.classNames("focusable-target")}>
  <button
    type="button"
    aria-label="focus me"
    className={sprout.classNames("focusable-trigger")}
  />
  Content that can be focused in a way that is accessible
</div>
`})}),`
`,(0,f.jsx)(r,{of:s}),`
`,(0,f.jsx)(t.h2,{id:`progressive-disclosure`,children:`Progressive disclosure`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.a,{href:`https://internal.qlik.dev/design/sprout/design-patterns/progressive-disclosure/`,rel:`nofollow`,children:`Progressive disclosure`}),` is a pattern used to show additional content or actions only when needed, reducing cognitive load and improving user experience.`]}),`
`,(0,f.jsx)(t.h3,{id:`display-actions-on-hover`,children:`Display actions on Hover`}),`
`,(0,f.jsx)(t.p,{children:`One common request for a dev is to display actions on hover. The issue with this approach is that it will not be accessible for keyboard users as they won't be able to see the actions on hover.
Also there are devices that doesn't support hover at all and in that case the actions will be hidden for those users. Fortunately, sprout-css-modules provide a solution for that based on device capabilities and user interaction.`}),`
`,(0,f.jsx)(t.h4,{id:`dont-1`,children:`Don't`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-css`,children:`/* Hide actions by default */
.actions {
  display: none;
}

/* Show actions on container hover but that will not be shown in keyboard navigation !!! */
.container:hover .actions {
  display: block;
}
`})}),`
`,(0,f.jsx)(t.h4,{id:`do-1`,children:`Do`}),`
`,(0,f.jsx)(t.p,{children:`The following example demonstrates how to implement progressive disclosure using Sprout CSS Modules:`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`<div
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
    "bg-interactive"
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
      "gap-s"
    )}
  >
    <IconButton label="Copy" icon={<Copy />} />
    <IconButton label="Paste" icon={<Paste />} />
  </div>
</div>
`})}),`
`,(0,f.jsx)(r,{of:c}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{})})]})}function d(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=t(),o(),n(),l()}))();export{d as default};