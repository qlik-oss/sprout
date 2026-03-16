import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-BRSAI4nO.js";import{n as i}from"./lib-EjdzwnHJ.js";import{Default as a,t as o}from"./List.stories-ia61YJpr.js";var s=e();function c(e){let c={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`Components/List`,of:o}),`
`,(0,s.jsx)(c.h1,{id:`list`,children:`List`}),`
`,(0,s.jsx)(c.p,{children:`Lists are used to present elements in a vertical layout.`}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`import { List, ListDivider, ListItem } from "@qlik/sprout-react";

<List gap="m" dense>
  <ListItem selected>item 1</ListItem>
  <ListItem>item 2</ListItem>
  <ListDivider />
  <ListItem onClick={() => {}}>interactive item 3</ListItem>
  <ListItem>item 4</ListItem>
</List>;
`})}),`
`,(0,s.jsx)(n,{of:a}),`
`,(0,s.jsx)(t,{of:a}),`
`,(0,s.jsx)(c.h2,{id:`api`,children:`API`}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`hasPadding`}),` can be used to let the content manage the padding. The props can be used once at the `,(0,s.jsx)(c.code,{children:`List`}),` level or on each `,(0,s.jsx)(c.code,{children:`ListItem`}),`.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`useGesture`}),` is a boolean to active the 'List' Keyboard navigation. More details in the next Accessibility section.`]}),`
`]}),`
`,(0,s.jsx)(c.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,s.jsx)(c.p,{children:`HTML structure`}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`List`}),` is an HTML `,(0,s.jsx)(c.code,{children:`ul`}),` element.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`ListItem`}),` is an HTML `,(0,s.jsx)(c.code,{children:`li`}),` element.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`ListDivider`}),` is an HTML `,(0,s.jsx)(c.code,{children:`li`}),` element which contains a `,(0,s.jsx)(c.code,{children:`Divider`}),` with `,(0,s.jsx)(c.code,{children:`role="separator"`}),` attribute.`]}),`
`]}),`
`,(0,s.jsxs)(c.p,{children:[`Note on interactive `,(0,s.jsx)(c.code,{children:`ListItem`}),`: If it receives `,(0,s.jsx)(c.code,{children:`onClick`}),` event handler it becomes interactive.
In this context to avoid composition issue, the `,(0,s.jsx)(c.code,{children:`ListItem`}),` doesn't receive the onClick. It adds a button children aside the provided children and use absolute position to make it visually be the list item.`]}),`
`,(0,s.jsx)(c.p,{children:`Keyboard Navigation`}),`
`,(0,s.jsxs)(c.p,{children:[`Variant one: without `,(0,s.jsx)(c.code,{children:`useGesture`}),` property:`]}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Tab`}),`: When focus moves into the first `,(0,s.jsx)(c.code,{children:`ListItem`}),` with onClick property.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Tab`}),`: When a `,(0,s.jsx)(c.code,{children:`ListItem`}),` has the focus, moves focus to the next `,(0,s.jsx)(c.code,{children:`ListItem`}),` element with onClick property.`]}),`
`]}),`
`,(0,s.jsxs)(c.p,{children:[`Variant two: with `,(0,s.jsx)(c.code,{children:`useGesture`}),` property:`]}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Tab`}),`: When focus moves into the `,(0,s.jsx)(c.code,{children:`List`}),`, places focus on the selected `,(0,s.jsx)(c.code,{children:`ListItem`}),` element.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Tab`}),`: When the `,(0,s.jsx)(c.code,{children:`List`}),` contains the focus, moves focus to the next element in the page tab sequence outside the List.`]}),`
`,(0,s.jsxs)(c.li,{children:[`When focus is on a `,(0,s.jsx)(c.code,{children:`ListItem`}),` element:`,`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`ArrowDown`}),`: moves focus to the next `,(0,s.jsx)(c.code,{children:`ListItem`}),`. If focus is on the last, moves focus to the first.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`ArrowUp`}),`: moves focus to the previous `,(0,s.jsx)(c.code,{children:`ListItem`}),`. If focus is on the first, moves focus to the last.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Home`}),`: Moves focus to the first `,(0,s.jsx)(c.code,{children:`ListItem`}),`.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`End`}),`: Moves focus to the last `,(0,s.jsx)(c.code,{children:`ListItem`}),`.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Space`}),` or `,(0,s.jsx)(c.code,{children:`Enter`}),`: trigger the `,(0,s.jsx)(c.code,{children:`onClick`}),`. The list is controlled so the `,(0,s.jsx)(c.code,{children:`selected`}),` props must be updated.`]}),`
`]}),`
`]}),`
`]})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}export{l as default};