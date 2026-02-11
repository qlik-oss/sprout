import{j as e,M as c,a as r,C as d}from"./iframe-B-fqCePV.js";import{useMDXComponents as o}from"./index-DUhTx2ua.js";import{S as l,D as s}from"./List.stories-C00XTL96.js";import"./preload-helper-PPVm8Dsz.js";import"./List-CBd3yLgn.js";import"./classNames-BHQ9ieoZ.js";import"./sprout-DqOLOcsj.js";import"./useListGesture-CsinPUm2.js";import"./list-B1zo5gaH.js";import"./useId-DU0uuk5t.js";import"./Divider-B2v-xVm0.js";import"./Checkbox-u2f0i23h.js";import"./useValueControl-D8vAvYvZ.js";import"./HelperText-B14iHzzi.js";import"./InfoTooltipPrimitive-D79OSySs.js";import"./Info-C4YmKgXN.js";import"./Tooltip-DclK_iM1.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-BvkMXfLp.js";import"./Menu-CaarWdBl.js";import"./icons-BXG-SLO7.js";import"./useControl-DDjCssuD.js";import"./NewTab-DUTMcy5N.js";import"./useI18n-uzhF32fT.js";import"./IconButton-C1DotWTd.js";import"./Button-DgHw6K-5.js";import"./Button.module-C2ELNEem.js";import"./Badge-BMzhzV_X.js";import"./ProgressCircular-CeNa-NP_.js";import"./Skeleton-CLuWHboh.js";function n(t){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Components/List",of:l}),`
`,e.jsx(i.h1,{id:"list",children:"List"}),`
`,e.jsx(i.p,{children:"Lists are used to present elements in a vertical layout."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { List, ListDivider, ListItem } from "@qlik/sprout-react";

<List gap="m" dense>
  <ListItem selected>item 1</ListItem>
  <ListItem>item 2</ListItem>
  <ListDivider />
  <ListItem onClick={() => {}}>interactive item 3</ListItem>
  <ListItem>item 4</ListItem>
</List>;
`})}),`
`,e.jsx(r,{of:s}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(i.h2,{id:"api",children:"API"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"hasPadding"})," can be used to let the content manage the padding. The props can be used once at the ",e.jsx(i.code,{children:"List"})," level or on each ",e.jsx(i.code,{children:"ListItem"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"useGesture"})," is a boolean to active the 'List' Keyboard navigation. More details in the next Accessibility section."]}),`
`]}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(i.p,{children:"HTML structure"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"List"})," is an HTML ",e.jsx(i.code,{children:"ul"})," element."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"ListItem"})," is an HTML ",e.jsx(i.code,{children:"li"})," element."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"ListDivider"})," is an HTML ",e.jsx(i.code,{children:"li"})," element which contains a ",e.jsx(i.code,{children:"Divider"})," with ",e.jsx(i.code,{children:'role="separator"'})," attribute."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Note on interactive ",e.jsx(i.code,{children:"ListItem"}),": If it receives ",e.jsx(i.code,{children:"onClick"}),` event handler it becomes interactive.
In this context to avoid composition issue, the `,e.jsx(i.code,{children:"ListItem"})," doesn't receive the onClick. It adds a button children aside the provided children and use absolute position to make it visually be the list item."]}),`
`,e.jsx(i.p,{children:"Keyboard Navigation"}),`
`,e.jsxs(i.p,{children:["Variant one: without ",e.jsx(i.code,{children:"useGesture"})," property:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Tab"}),": When focus moves into the first ",e.jsx(i.code,{children:"ListItem"})," with onClick property."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Tab"}),": When a ",e.jsx(i.code,{children:"ListItem"})," has the focus, moves focus to the next ",e.jsx(i.code,{children:"ListItem"})," element with onClick property."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Variant two: with ",e.jsx(i.code,{children:"useGesture"})," property:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Tab"}),": When focus moves into the ",e.jsx(i.code,{children:"List"}),", places focus on the selected ",e.jsx(i.code,{children:"ListItem"})," element."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Tab"}),": When the ",e.jsx(i.code,{children:"List"})," contains the focus, moves focus to the next element in the page tab sequence outside the List."]}),`
`,e.jsxs(i.li,{children:["When focus is on a ",e.jsx(i.code,{children:"ListItem"})," element:",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"ArrowDown"}),": moves focus to the next ",e.jsx(i.code,{children:"ListItem"}),". If focus is on the last, moves focus to the first."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"ArrowUp"}),": moves focus to the previous ",e.jsx(i.code,{children:"ListItem"}),". If focus is on the first, moves focus to the last."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Home"}),": Moves focus to the first ",e.jsx(i.code,{children:"ListItem"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"End"}),": Moves focus to the last ",e.jsx(i.code,{children:"ListItem"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Space"})," or ",e.jsx(i.code,{children:"Enter"}),": trigger the ",e.jsx(i.code,{children:"onClick"}),". The list is controlled so the ",e.jsx(i.code,{children:"selected"})," props must be updated."]}),`
`]}),`
`]}),`
`]})]})}function P(t={}){const{wrapper:i}={...o(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{P as default};
