import{j as n,M as l}from"./iframe-lMEil1TA.js";import{useMDXComponents as r}from"./index-Wkq3wkd2.js";import"./preload-helper-PPVm8Dsz.js";function o(s){const e={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Migration/From MUI"}),`
`,n.jsx(e.h1,{id:"migration-from-mui-to-sprout-css-react",children:"Migration from MUI to Sprout CSS React"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://qlikinternal.us.qlikcloud.com/sense/app/10f1d425-8e89-421b-8480-30bbea5be4bb/sheet/nEbpM/",rel:"nofollow",children:"Metrics dashboard"})}),`
`,n.jsxs(e.p,{children:["This guide outlines how to migrate components and styling from ",n.jsx(e.strong,{children:"MUI"})," to ",n.jsx(e.strong,{children:"Sprout CSS React"}),".",n.jsx(e.br,{}),`
`,"We’ll start with global practices, followed by component-specific guidance."]}),`
`,n.jsx(e.h2,{id:"sx-props",children:"sx props"}),`
`,n.jsx(e.p,{children:"Restyling a component is a violation, you must consider each Sprout component as a Lego brick that you can't change anything, even adding margin. This is the only way to guarantee consistency and ownership of those components. Overrides makes update impossible."}),`
`,n.jsx(e.p,{children:"The different technics to work with sprout components:"}),`
`,n.jsx(e.h3,{id:"solution-1-wrap-the-component",children:"Solution 1: Wrap the component"}),`
`,n.jsx(e.p,{children:'Instead of adding margin to a "button" you can do wrap it and add the margin on this wrapper:'}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`<span className={classNames('m_xs')}><Button onClick={} label="label"/></span>
`})}),`
`,n.jsx(e.h3,{id:"warning-marginleft-paddingright-and-other-physical-properties-brakes-rtl-support",children:"Warning: MarginLeft, PaddingRight, and other physical properties brakes RTL support"}),`
`,n.jsxs(e.p,{children:["First you should rely on ",n.jsx(e.code,{children:"classNames"})," all the time even for small layouting."]}),`
`,n.jsxs(e.p,{children:["This example is wrong as it breaks RTL. Also the spacing are incorrect, you should always rely on the spacing and density ",n.jsx(e.a,{href:"https://internal.qlik.dev/design/sprout/design-tokens/list-of-all-tokens/#spacing",rel:"nofollow",children:"tokens"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`<Box
  sx={{
    paddingLeft: 1,
    paddingRight: 1,
    marginBottom: "2px",
  }}
>...</Box>
`})}),`
`,n.jsxs(e.p,{children:[`This kind of layout should be done by using our
`,n.jsx(e.a,{href:"/?path=/story/css-sprout-css-modules--typography",children:"padding"}),` and margin utility classes
which are named using left/right top/bottom but internally are using logical properties:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`<div className={classNames("flex", "border_box", "flex_row", "pl_xs", "pr_xs", "mb_xs")}>...</div>
`})}),`
`,n.jsx(e.p,{children:"An other important point if the design has 1px, it's incorrect and you should request for an update. You should never need 1px in spacing."}),`
`,n.jsx(e.h2,{id:"typography",children:"Typography"}),`
`,n.jsxs(e.p,{children:["You can rely on our classNames for ",n.jsx(e.a,{href:"/?path=/story/css-sprout-css-modules--typography",children:"typography"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { classNames } from '@qlik/sprout-css'

<h1 className={classNames("font_heading_m", "text_default")}>my title</h1>
`})}),`
`,n.jsx(e.h2,{id:"box",children:"Box"}),`
`,n.jsxs(e.p,{children:["Box exists in sprout-css but it's ",n.jsx(e.strong,{children:"deprecated"}),". You should rely on our ",n.jsx(e.a,{href:"/?path=/story/css-sprout-css-modules--flexbox",children:"flex"})," and ",n.jsx(e.a,{href:"/?path=/story/css-sprout-css-modules--grid",children:"grid"})," utilities instead."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { classNames } from '@qlik/sprout-css'

<div className={classNames("flex", "flex_col", "border_box")}></div>
`})}),`
`,n.jsx(e.h2,{id:"grid",children:"Grid"}),`
`,n.jsx(e.p,{children:"sprout-css provides a CSS Grid system supporting up to 16 columns and 4 rows, with responsive grids coming soon."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { classNames } from '@qlik/sprout-css'
<div className={classNames("grid", "grid_cols_12", "gap_m")}>
  <div className={classNames("col_span_2")}></div>
  ...
</div>
`})}),`
`,n.jsx(e.h2,{id:"accordion",children:"Accordion"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/components-accordion--docs",children:"storybook"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://internal.qlik.dev/design/sprout/components/accordion/",rel:"nofollow",children:"devportal"})}),`
`]}),`
`,n.jsx(e.h2,{id:"alertinline",children:"AlertInline"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/components-alertinline--docs",children:"storybook"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://internal.qlik.dev/design/sprout/components/alert-in-line/",rel:"nofollow",children:"devportal"})}),`
`]}),`
`,n.jsx(e.h2,{id:"avatar",children:"Avatar"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/components-avatar--docs",children:"storybook"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://internal.qlik.dev/design/sprout/components/avatar/",rel:"nofollow",children:"devportal"})}),`
`]}),`
`,n.jsx(e.h2,{id:"breadcrumbs",children:"Breadcrumbs"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/components-breadcrumb--docs",children:"storybook"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://internal.qlik.dev/design/sprout/components/breadcrumb/",rel:"nofollow",children:"devportal"})}),`
`]}),`
`,n.jsx(e.h2,{id:"button",children:"Button"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/components-button--docs",children:"storybook"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://internal.qlik.dev/design/sprout/components/button/",rel:"nofollow",children:"devportal"})}),`
`]}),`
`,n.jsx(e.p,{children:"To improve consistency you can't have a right icon."}),`
`,n.jsx(e.h2,{id:"checkbox",children:"Checkbox"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/components-checkbox--docs",children:"storybook"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://internal.qlik.dev/design/sprout/components/checkbox/",rel:"nofollow",children:"devportal"})}),`
`]}),`
`,n.jsx(e.h2,{id:"chip",children:"Chip"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/components-tag--docs",children:"storybook"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://internal.qlik.dev/design/sprout/components/tag/",rel:"nofollow",children:"devportal"})}),`
`]}),`
`,n.jsx(e.h2,{id:"progress",children:"Progress"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/components-progress--docs",children:"storybook"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://internal.qlik.dev/design/sprout/components/progress-indicators/",rel:"nofollow",children:"devportal"})}),`
`]}),`
`,n.jsx(e.h2,{id:"dialog",children:"Dialog"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/components-modal--docs",children:"storybook"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://internal.qlik.dev/design/sprout/components/modal/",rel:"nofollow",children:"devportal"})}),`
`]}),`
`,n.jsx(e.h2,{id:"divider",children:"Divider"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/components-divider--docs",children:"storybook"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://internal.qlik.dev/design/sprout/components/divider/",rel:"nofollow",children:"devportal"})}),`
`]}),`
`,n.jsx(e.h2,{id:"formcontrol",children:"FormControl"}),`
`,n.jsx(e.p,{children:"TBD"}),`
`,n.jsx(e.h2,{id:"formhelpertext",children:"FormHelperText"}),`
`,n.jsx(e.p,{children:"TBD"}),`
`,n.jsx(e.h2,{id:"formlabel",children:"FormLabel"}),`
`,n.jsx(e.p,{children:"TBD"}),`
`,n.jsx(e.h2,{id:"list--listitem",children:"List && ListItem"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/components-list--docs",children:"storybook"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://internal.qlik.dev/design/sprout/components/list/",rel:"nofollow",children:"devportal"})}),`
`]}),`
`,n.jsx(e.h2,{id:"select",children:"Select"}),`
`,n.jsx(e.p,{children:"Simple selection:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/components-select--docs",children:"storybook"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://internal.qlik.dev/design/sprout/components/select/",rel:"nofollow",children:"devportal"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/qlik-trial/sprout-css-virtual",rel:"nofollow",children:"virtualized version"})}),`
`]}),`
`,n.jsx(e.p,{children:"Multiple selection:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/components-multiselect--docs",children:"storybook"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://internal.qlik.dev/design/sprout/components/multi-select/",rel:"nofollow",children:"devportal"})}),`
`]}),`
`,n.jsx(e.h2,{id:"skeleton",children:"Skeleton"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/components-skeleton--docs",children:"storybook"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://internal.qlik.dev/design/sprout/components/skeleton/",rel:"nofollow",children:"devportal"})}),`
`]}),`
`,n.jsx(e.h2,{id:"textfield",children:"TextField"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/components-textfield--docs",children:"storybook"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://internal.qlik.dev/design/sprout/components/text-field/",rel:"nofollow",children:"devportal"})}),`
`]}),`
`,n.jsx(e.h2,{id:"tooltip",children:"Tooltip"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/components-tooltip--docs",children:"storybook"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://internal.qlik.dev/design/sprout/components/tooltip/",rel:"nofollow",children:"devportal"})}),`
`]})]})}function c(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}export{c as default};
