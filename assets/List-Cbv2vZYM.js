import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Lc6HZYGU.js";import{Fn as n,i as r,l as i,n as a,s as o}from"./iframe-RiXBydPV.js";import{t as s}from"./mdx-react-shim-Cw1WyOhr.js";import{Default as c,n as l,t as u}from"./List.stories-BJsucHzo.js";function d(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/List`,of:u}),`
`,(0,p.jsx)(n.h1,{id:`list`,children:`List`}),`
`,(0,p.jsx)(n.p,{children:`Lists are used to present elements in a vertical layout.`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { List, ListDivider, ListItem } from "@qlik/sprout-react";

<List gap="m" dense>
  <ListItem selected>item 1</ListItem>
  <ListItem>item 2</ListItem>
  <ListDivider />
  <ListItem onClick={() => {}}>interactive item 3</ListItem>
  <ListItem>item 4</ListItem>
</List>;
`})}),`
`,(0,p.jsx)(a,{of:c}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`hasPadding`}),` can be used to let the content manage the padding. The props can be used once at the `,(0,p.jsx)(n.code,{children:`List`}),` level or on each `,(0,p.jsx)(n.code,{children:`ListItem`}),`.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`useGesture`}),` is a boolean to active the 'List' Keyboard navigation. More details in the next Accessibility section.`]}),`
`]}),`
`,(0,p.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsx)(n.p,{children:`HTML structure`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`List`}),` is an HTML `,(0,p.jsx)(n.code,{children:`ul`}),` element.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`ListItem`}),` is an HTML `,(0,p.jsx)(n.code,{children:`li`}),` element.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`ListDivider`}),` is an HTML `,(0,p.jsx)(n.code,{children:`li`}),` element which contains a `,(0,p.jsx)(n.code,{children:`Divider`}),` with `,(0,p.jsx)(n.code,{children:`role="separator"`}),` attribute.`]}),`
`]}),`
`,(0,p.jsxs)(n.p,{children:[`Note on interactive `,(0,p.jsx)(n.code,{children:`ListItem`}),`: If it receives `,(0,p.jsx)(n.code,{children:`onClick`}),` event handler it becomes interactive.
In this context to avoid composition issue, the `,(0,p.jsx)(n.code,{children:`ListItem`}),` doesn't receive the onClick. It adds a button children aside the provided children and use absolute position to make it visually be the list item.`]}),`
`,(0,p.jsx)(n.p,{children:`Keyboard Navigation`}),`
`,(0,p.jsxs)(n.p,{children:[`Variant one: without `,(0,p.jsx)(n.code,{children:`useGesture`}),` property:`]}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Tab`}),`: When focus moves into the first `,(0,p.jsx)(n.code,{children:`ListItem`}),` with onClick property.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Tab`}),`: When a `,(0,p.jsx)(n.code,{children:`ListItem`}),` has the focus, moves focus to the next `,(0,p.jsx)(n.code,{children:`ListItem`}),` element with onClick property.`]}),`
`]}),`
`,(0,p.jsxs)(n.p,{children:[`Variant two: with `,(0,p.jsx)(n.code,{children:`useGesture`}),` property:`]}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Tab`}),`: When focus moves into the `,(0,p.jsx)(n.code,{children:`List`}),`, places focus on the selected `,(0,p.jsx)(n.code,{children:`ListItem`}),` element.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Tab`}),`: When the `,(0,p.jsx)(n.code,{children:`List`}),` contains the focus, moves focus to the next element in the page tab sequence outside the List.`]}),`
`,(0,p.jsxs)(n.li,{children:[`When focus is on a `,(0,p.jsx)(n.code,{children:`ListItem`}),` element:`,`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`ArrowDown`}),`: moves focus to the next `,(0,p.jsx)(n.code,{children:`ListItem`}),`. If focus is on the last, moves focus to the first.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`ArrowUp`}),`: moves focus to the previous `,(0,p.jsx)(n.code,{children:`ListItem`}),`. If focus is on the first, moves focus to the last.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Home`}),`: Moves focus to the first `,(0,p.jsx)(n.code,{children:`ListItem`}),`.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`End`}),`: Moves focus to the last `,(0,p.jsx)(n.code,{children:`ListItem`}),`.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Space`}),` or `,(0,p.jsx)(n.code,{children:`Enter`}),`: trigger the `,(0,p.jsx)(n.code,{children:`onClick`}),`. The list is controlled so the `,(0,p.jsx)(n.code,{children:`selected`}),` props must be updated.`]}),`
`]}),`
`]}),`
`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),s(),i(),l()}))();export{f as default};