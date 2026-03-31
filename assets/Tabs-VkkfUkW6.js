import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,i as r,l as i,n as a,s as o}from"./iframe-B0xl5hqz.js";import{t as s}from"./mdx-react-shim-C5WuC5zb.js";import{TabsWithoutPanel as c,Uncontrolled as l,UncontrolledWithTabsProp as u,n as d,t as f}from"./Tabs.stories-DUnSixzg.js";function p(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{title:`Components/Tabs`,of:f}),`
`,(0,h.jsx)(n.h1,{id:`tabs`,children:`Tabs`}),`
`,(0,h.jsx)(n.p,{children:`Tabs are used for navigation.`}),`
`,(0,h.jsx)(n.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:`#usage`,children:`Usage`})}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.a,{href:`#properties`,children:`Properties`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:`#composition-api`,children:`Composition API`})}),`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:`#tabs-api`,children:`Tabs API`})}),`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:`#tabs-without-panels`,children:`Tabs without Panels`})}),`
`]}),`
`]}),`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,h.jsx)(n.hr,{}),`
`,(0,h.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-tsx`,children:`import { Tabs } from "@qlik/sprout-react";

// Composition API (recommended)
function MyComponent() {
  return (
    <Tabs.Container>
      <Tabs.List showTrack>
        <Tabs.Tab aria-controls="Assets" title="Assets" icon={<BookIcon />} />
        <Tabs.Tab
          aria-controls="Users"
          title="Users"
          icon={<StarIcon />}
          disabled
        />
      </Tabs.List>
      <Tabs.Panel id="Assets">Tab content for Assets</Tabs.Panel>
      <Tabs.Panel id="Settings">Tab content for Settings</Tabs.Panel>
    </Tabs.Container>
  );
}

// ------- OR --------

// Tabs API
function MyComponent() {
  // memoize tabs to avoid re-renders
  const TABS = [
    {
      title: "Assets", //needed for state management
      "aria-controls": "Assets",
      icon: <BookIcon />,
      panel: <div>Tab 1 content</div>,
    },
    {
      title: "Settings",
      "aria-controls": "Settings",
      icon: <CogwheelIcon />,
      panel: <div>Tab 2 content</div>,
    },
    // ... more tabs
  ];

  return <Tabs showTrack={true} tabs={TABS} />;
}
`})}),`
`,(0,h.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsx)(n.p,{children:(0,h.jsxs)(n.em,{children:[`By passing the props `,(0,h.jsx)(n.code,{children:`activeKey`}),` and `,(0,h.jsx)(n.code,{children:`onSelect`}),` The selected Tab becomes controlled`]})}),`
`]}),`
`,(0,h.jsx)(n.h3,{id:`composition-api`,children:`Composition API`}),`
`,(0,h.jsx)(a,{of:l}),`
`,(0,h.jsx)(r,{of:l}),`
`,(0,h.jsx)(n.h3,{id:`tabs-api`,children:`Tabs API`}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsx)(n.p,{children:(0,h.jsx)(n.em,{children:`Note: tabs must be memoized to not trigger re-render`})}),`
`]}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(r,{of:u}),`
`,(0,h.jsx)(n.h3,{id:`tabs-without-panels`,children:`Tabs without Panels`}),`
`,(0,h.jsx)(n.p,{children:`You can use the only the Tabs has a navigation component without the Tab Panels.`}),`
`,(0,h.jsx)(a,{of:c}),`
`,(0,h.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsx)(n.p,{children:(0,h.jsx)(n.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/tabs/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Tabs`})}),`
`,(0,h.jsx)(n.p,{children:`HTML structure:`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`Tabs.Container`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`Tabs.List`}),` -> `,(0,h.jsx)(n.code,{children:`Tabs.Tab`})]}),`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.code,{children:`Tabs.Panel`})}),`
`]}),`
`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`Tabs.Container`}),` is a `,(0,h.jsx)(n.code,{children:`nav`}),` HTML element`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`Tabs.List`}),` is a `,(0,h.jsx)(n.code,{children:`div`}),` with `,(0,h.jsx)(n.code,{children:`role="tablist"`}),` attribute`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`Tabs.Tab`}),` use a `,(0,h.jsx)(n.code,{children:`button`}),` to trigger the visibility of the TabPanel`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`Tabs.Panel`}),` is a `,(0,h.jsx)(n.code,{children:`div`}),` with a role="tabpanel" attribute`]}),`
`]}),`
`,(0,h.jsx)(n.p,{children:`Keyboard interaction`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`Tabs.Tab`}),`: When focus moves into the `,(0,h.jsx)(n.code,{children:`Tabs.List`}),`, places focus on the active `,(0,h.jsx)(n.code,{children:`Tab`}),` element.`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`Tabs.Tab`}),`: When the `,(0,h.jsx)(n.code,{children:`Tabs.list`}),` contains the focus, moves focus to the next element in the page tab sequence outside the tablist, which is the tabpanel unless the first element containing meaningful content inside the tabpanel is focusable.`]}),`
`,(0,h.jsxs)(n.li,{children:[`When focus is on a tab element in a horizontal tab list:`,`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`ArrowLeft`}),`: moves focus to the previous `,(0,h.jsx)(n.code,{children:`Tab`}),`. If focus is on the first tab, moves focus to the last tab.`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`ArrowRight`}),`: Moves focus to the next `,(0,h.jsx)(n.code,{children:`Tab`}),`. If focus is on the last tab element, moves focus to the first tab.`]}),`
`,(0,h.jsxs)(n.li,{children:[`if `,(0,h.jsx)(n.code,{children:`document.dir`}),` is `,(0,h.jsx)(n.code,{children:`rtl`}),` this is reversed`]}),`
`]}),`
`]}),`
`,(0,h.jsxs)(n.li,{children:[`When focus is on a `,(0,h.jsx)(n.code,{children:`Tab`}),` in a `,(0,h.jsx)(n.code,{children:`Tabs.list`}),` with either horizontal or vertical orientation:`,`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`Space`}),` or `,(0,h.jsx)(n.code,{children:`Enter`}),`: Activates the tab if it was not activated automatically on focus.`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`Home`}),`: Moves focus to the first tab. Optionally, activates the newly focused tab (See note below).`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`End`}),`: Moves focus to the last tab. Optionally, activates the newly focused tab (See note below).`]}),`
`]}),`
`]}),`
`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=n(),s(),i(),d()}))();export{m as default};