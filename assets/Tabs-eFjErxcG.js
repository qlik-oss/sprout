import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,i as n,l as r,n as i}from"./blocks-CCeqoOOO.js";import{t as a}from"./jsx-runtime-Bq1bXGty.js";import{i as o}from"./react-BnCtKaSV.js";import{t as s}from"./mdx-react-shim-9RzcSRdq.js";import{TabsWithoutPanel as c,Uncontrolled as l,UncontrolledWithTabsProp as u,n as d,t as f}from"./Tabs.stories-Df7XCTOn.js";function p(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r,{title:`Components/Tabs`,of:f}),`
`,(0,h.jsx)(t.h1,{id:`tabs`,children:`Tabs`}),`
`,(0,h.jsx)(t.p,{children:`Tabs are used for navigation.`}),`
`,(0,h.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#usage`,children:`Usage`})}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.a,{href:`#properties`,children:`Properties`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#composition-api`,children:`Composition API`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#tabs-api`,children:`Tabs API`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#tabs-without-panels`,children:`Tabs without Panels`})}),`
`]}),`
`]}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,h.jsx)(t.hr,{}),`
`,(0,h.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import { Tabs } from "@qlik/sprout-react";

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
`,(0,h.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,h.jsxs)(t.blockquote,{children:[`
`,(0,h.jsx)(t.p,{children:(0,h.jsxs)(t.em,{children:[`By passing the props `,(0,h.jsx)(t.code,{children:`activeKey`}),` and `,(0,h.jsx)(t.code,{children:`onSelect`}),` The selected Tab becomes controlled`]})}),`
`]}),`
`,(0,h.jsx)(t.h3,{id:`composition-api`,children:`Composition API`}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(n,{of:l}),`
`,(0,h.jsx)(t.h3,{id:`tabs-api`,children:`Tabs API`}),`
`,(0,h.jsxs)(t.blockquote,{children:[`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.em,{children:`Note: tabs must be memoized to not trigger re-render`})}),`
`]}),`
`,(0,h.jsx)(i,{of:u}),`
`,(0,h.jsx)(n,{of:u}),`
`,(0,h.jsx)(t.h3,{id:`tabs-without-panels`,children:`Tabs without Panels`}),`
`,(0,h.jsx)(t.p,{children:`You can use the only the Tabs has a navigation component without the Tab Panels.`}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/tabs/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Tabs`})}),`
`,(0,h.jsx)(t.p,{children:`HTML structure:`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`Tabs.Container`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`Tabs.List`}),` -> `,(0,h.jsx)(t.code,{children:`Tabs.Tab`})]}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.code,{children:`Tabs.Panel`})}),`
`]}),`
`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`Tabs.Container`}),` is a `,(0,h.jsx)(t.code,{children:`nav`}),` HTML element`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`Tabs.List`}),` is a `,(0,h.jsx)(t.code,{children:`div`}),` with `,(0,h.jsx)(t.code,{children:`role="tablist"`}),` attribute`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`Tabs.Tab`}),` use a `,(0,h.jsx)(t.code,{children:`button`}),` to trigger the visibility of the TabPanel`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`Tabs.Panel`}),` is a `,(0,h.jsx)(t.code,{children:`div`}),` with a role="tabpanel" attribute`]}),`
`]}),`
`,(0,h.jsx)(t.p,{children:`Keyboard interaction`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`Tabs.Tab`}),`: When focus moves into the `,(0,h.jsx)(t.code,{children:`Tabs.List`}),`, places focus on the active `,(0,h.jsx)(t.code,{children:`Tab`}),` element.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`Tabs.Tab`}),`: When the `,(0,h.jsx)(t.code,{children:`Tabs.list`}),` contains the focus, moves focus to the next element in the page tab sequence outside the tablist, which is the tabpanel unless the first element containing meaningful content inside the tabpanel is focusable.`]}),`
`,(0,h.jsxs)(t.li,{children:[`When focus is on a tab element in a horizontal tab list:`,`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`ArrowLeft`}),`: moves focus to the previous `,(0,h.jsx)(t.code,{children:`Tab`}),`. If focus is on the first tab, moves focus to the last tab.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`ArrowRight`}),`: Moves focus to the next `,(0,h.jsx)(t.code,{children:`Tab`}),`. If focus is on the last tab element, moves focus to the first tab.`]}),`
`,(0,h.jsxs)(t.li,{children:[`if `,(0,h.jsx)(t.code,{children:`document.dir`}),` is `,(0,h.jsx)(t.code,{children:`rtl`}),` this is reversed`]}),`
`]}),`
`]}),`
`,(0,h.jsxs)(t.li,{children:[`When focus is on a `,(0,h.jsx)(t.code,{children:`Tab`}),` in a `,(0,h.jsx)(t.code,{children:`Tabs.list`}),` with either horizontal or vertical orientation:`,`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`Space`}),` or `,(0,h.jsx)(t.code,{children:`Enter`}),`: Activates the tab if it was not activated automatically on focus.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`Home`}),`: Moves focus to the first tab. Optionally, activates the newly focused tab (See note below).`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`End`}),`: Moves focus to the last tab. Optionally, activates the newly focused tab (See note below).`]}),`
`]}),`
`]}),`
`]})]})}function m(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=a(),s(),t(),d()}))();export{m as default};