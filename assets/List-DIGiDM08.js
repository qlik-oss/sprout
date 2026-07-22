import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{i as n,l as r,n as i,p as a,s as o}from"./iframe-UwarwtgL.js";import{t as s}from"./mdx-react-shim-DbLuWb1F.js";import{ItemPlayground as c,ListPlayground as l,n as u,t as d}from"./List.stories-DFIz0UIc.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...a(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{title:`Components/List`,of:d}),`
`,(0,m.jsx)(t.h1,{id:`list`,children:`List`}),`
`,(0,m.jsx)(t.p,{children:`Lists are used to present elements in a vertical layout.`}),`
`,(0,m.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { List, ListDivider, ListItem } from "@qlik/sprout-react";

<List gap="m" dense>
  <ListItem selected>item 1</ListItem>
  <ListItem>item 2</ListItem>
  <ListDivider />
  <ListItem onClick={() => {}}>interactive item 3</ListItem>
  <ListItem>item 4</ListItem>
</List>;
`})}),`
`,(0,m.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,m.jsx)(t.h3,{id:`list-1`,children:`List`}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(n,{of:l}),`
`,(0,m.jsx)(t.h3,{id:`listitem`,children:`ListItem`}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsx)(n,{of:c}),`
`,(0,m.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`hasPadding`}),` can be used to let the content manage the padding. The props can be used once at the `,(0,m.jsx)(t.code,{children:`List`}),` level or on each `,(0,m.jsx)(t.code,{children:`ListItem`}),`.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`useGesture`}),` is a boolean to active the 'List' Keyboard navigation. More details in the next Accessibility section.`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsx)(t.p,{children:`HTML structure`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`List`}),` is an HTML `,(0,m.jsx)(t.code,{children:`ul`}),` element.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`ListItem`}),` is an HTML `,(0,m.jsx)(t.code,{children:`li`}),` element.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`ListDivider`}),` is an HTML `,(0,m.jsx)(t.code,{children:`li`}),` element which contains a `,(0,m.jsx)(t.code,{children:`Divider`}),` with `,(0,m.jsx)(t.code,{children:`role="separator"`}),` attribute.`]}),`
`]}),`
`,(0,m.jsxs)(t.p,{children:[`Note on interactive `,(0,m.jsx)(t.code,{children:`ListItem`}),`: If it receives `,(0,m.jsx)(t.code,{children:`onClick`}),` event handler it becomes interactive.
In this context to avoid composition issue, the `,(0,m.jsx)(t.code,{children:`ListItem`}),` doesn't receive the onClick. It adds a button children aside the provided children and use absolute position to make it visually be the list item.`]}),`
`,(0,m.jsx)(t.p,{children:`Keyboard Navigation`}),`
`,(0,m.jsxs)(t.p,{children:[`Variant one: without `,(0,m.jsx)(t.code,{children:`useGesture`}),` property:`]}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Tab`}),`: When focus moves into the first `,(0,m.jsx)(t.code,{children:`ListItem`}),` with onClick property.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Tab`}),`: When a `,(0,m.jsx)(t.code,{children:`ListItem`}),` has the focus, moves focus to the next `,(0,m.jsx)(t.code,{children:`ListItem`}),` element with onClick property.`]}),`
`]}),`
`,(0,m.jsxs)(t.p,{children:[`Variant two: with `,(0,m.jsx)(t.code,{children:`useGesture`}),` property:`]}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Tab`}),`: When focus moves into the `,(0,m.jsx)(t.code,{children:`List`}),`, places focus on the selected `,(0,m.jsx)(t.code,{children:`ListItem`}),` element.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Tab`}),`: When the `,(0,m.jsx)(t.code,{children:`List`}),` contains the focus, moves focus to the next element in the page tab sequence outside the List.`]}),`
`,(0,m.jsxs)(t.li,{children:[`When focus is on a `,(0,m.jsx)(t.code,{children:`ListItem`}),` element:`,`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`ArrowDown`}),`: moves focus to the next `,(0,m.jsx)(t.code,{children:`ListItem`}),`. If focus is on the last, moves focus to the first.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`ArrowUp`}),`: moves focus to the previous `,(0,m.jsx)(t.code,{children:`ListItem`}),`. If focus is on the first, moves focus to the last.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Home`}),`: Moves focus to the first `,(0,m.jsx)(t.code,{children:`ListItem`}),`.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`End`}),`: Moves focus to the last `,(0,m.jsx)(t.code,{children:`ListItem`}),`.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Space`}),` or `,(0,m.jsx)(t.code,{children:`Enter`}),`: trigger the `,(0,m.jsx)(t.code,{children:`onClick`}),`. The list is controlled so the `,(0,m.jsx)(t.code,{children:`selected`}),` props must be updated.`]}),`
`]}),`
`]}),`
`]})]})}function p(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),s(),r(),u()}))();export{p as default};