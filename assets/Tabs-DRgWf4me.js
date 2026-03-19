import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-DTk7xy32.js";import{n as i}from"./lib-EjdzwnHJ.js";import"./Icons-DrVGfMuG.js";import{TabsWithoutPanel as a,Uncontrolled as o,UncontrolledWithTabsProp as s,t as c}from"./Tabs.stories-7dUeMcYV.js";var l=e();function u(e){let u={a:`a`,blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{title:`Components/Tabs`,of:c}),`
`,(0,l.jsx)(u.h1,{id:`tabs`,children:`Tabs`}),`
`,(0,l.jsx)(u.p,{children:`Tabs are used for navigation.`}),`
`,(0,l.jsx)(u.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,l.jsxs)(u.ul,{children:[`
`,(0,l.jsx)(u.li,{children:(0,l.jsx)(u.a,{href:`#usage`,children:`Usage`})}),`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.a,{href:`#properties`,children:`Properties`}),`
`,(0,l.jsxs)(u.ul,{children:[`
`,(0,l.jsx)(u.li,{children:(0,l.jsx)(u.a,{href:`#composition-api`,children:`Composition API`})}),`
`,(0,l.jsx)(u.li,{children:(0,l.jsx)(u.a,{href:`#tabs-api`,children:`Tabs API`})}),`
`,(0,l.jsx)(u.li,{children:(0,l.jsx)(u.a,{href:`#tabs-without-panels`,children:`Tabs without Panels`})}),`
`]}),`
`]}),`
`,(0,l.jsx)(u.li,{children:(0,l.jsx)(u.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,l.jsx)(u.hr,{}),`
`,(0,l.jsx)(u.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(u.pre,{children:(0,l.jsx)(u.code,{className:`language-tsx`,children:`import { Tabs } from "@qlik/sprout-react";

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
`,(0,l.jsx)(u.h2,{id:`properties`,children:`Properties`}),`
`,(0,l.jsxs)(u.blockquote,{children:[`
`,(0,l.jsx)(u.p,{children:(0,l.jsxs)(u.em,{children:[`By passing the props `,(0,l.jsx)(u.code,{children:`activeKey`}),` and `,(0,l.jsx)(u.code,{children:`onSelect`}),` The selected Tab becomes controlled`]})}),`
`]}),`
`,(0,l.jsx)(u.h3,{id:`composition-api`,children:`Composition API`}),`
`,(0,l.jsx)(n,{of:o}),`
`,(0,l.jsx)(t,{of:o}),`
`,(0,l.jsx)(u.h3,{id:`tabs-api`,children:`Tabs API`}),`
`,(0,l.jsxs)(u.blockquote,{children:[`
`,(0,l.jsx)(u.p,{children:(0,l.jsx)(u.em,{children:`Note: tabs must be memoized to not trigger re-render`})}),`
`]}),`
`,(0,l.jsx)(n,{of:s}),`
`,(0,l.jsx)(t,{of:s}),`
`,(0,l.jsx)(u.h3,{id:`tabs-without-panels`,children:`Tabs without Panels`}),`
`,(0,l.jsx)(u.p,{children:`You can use the only the Tabs has a navigation component without the Tab Panels.`}),`
`,(0,l.jsx)(n,{of:a}),`
`,(0,l.jsx)(u.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,l.jsx)(u.p,{children:(0,l.jsx)(u.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/tabs/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Tabs`})}),`
`,(0,l.jsx)(u.p,{children:`HTML structure:`}),`
`,(0,l.jsxs)(u.ul,{children:[`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`Tabs.Container`}),`
`,(0,l.jsxs)(u.ul,{children:[`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`Tabs.List`}),` -> `,(0,l.jsx)(u.code,{children:`Tabs.Tab`})]}),`
`,(0,l.jsx)(u.li,{children:(0,l.jsx)(u.code,{children:`Tabs.Panel`})}),`
`]}),`
`]}),`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`Tabs.Container`}),` is a `,(0,l.jsx)(u.code,{children:`nav`}),` HTML element`]}),`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`Tabs.List`}),` is a `,(0,l.jsx)(u.code,{children:`div`}),` with `,(0,l.jsx)(u.code,{children:`role="tablist"`}),` attribute`]}),`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`Tabs.Tab`}),` use a `,(0,l.jsx)(u.code,{children:`button`}),` to trigger the visibility of the TabPanel`]}),`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`Tabs.Panel`}),` is a `,(0,l.jsx)(u.code,{children:`div`}),` with a role="tabpanel" attribute`]}),`
`]}),`
`,(0,l.jsx)(u.p,{children:`Keyboard interaction`}),`
`,(0,l.jsxs)(u.ul,{children:[`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`Tabs.Tab`}),`: When focus moves into the `,(0,l.jsx)(u.code,{children:`Tabs.List`}),`, places focus on the active `,(0,l.jsx)(u.code,{children:`Tab`}),` element.`]}),`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`Tabs.Tab`}),`: When the `,(0,l.jsx)(u.code,{children:`Tabs.list`}),` contains the focus, moves focus to the next element in the page tab sequence outside the tablist, which is the tabpanel unless the first element containing meaningful content inside the tabpanel is focusable.`]}),`
`,(0,l.jsxs)(u.li,{children:[`When focus is on a tab element in a horizontal tab list:`,`
`,(0,l.jsxs)(u.ul,{children:[`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`ArrowLeft`}),`: moves focus to the previous `,(0,l.jsx)(u.code,{children:`Tab`}),`. If focus is on the first tab, moves focus to the last tab.`]}),`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`ArrowRight`}),`: Moves focus to the next `,(0,l.jsx)(u.code,{children:`Tab`}),`. If focus is on the last tab element, moves focus to the first tab.`]}),`
`,(0,l.jsxs)(u.li,{children:[`if `,(0,l.jsx)(u.code,{children:`document.dir`}),` is `,(0,l.jsx)(u.code,{children:`rtl`}),` this is reversed`]}),`
`]}),`
`]}),`
`,(0,l.jsxs)(u.li,{children:[`When focus is on a `,(0,l.jsx)(u.code,{children:`Tab`}),` in a `,(0,l.jsx)(u.code,{children:`Tabs.list`}),` with either horizontal or vertical orientation:`,`
`,(0,l.jsxs)(u.ul,{children:[`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`Space`}),` or `,(0,l.jsx)(u.code,{children:`Enter`}),`: Activates the tab if it was not activated automatically on focus.`]}),`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`Home`}),`: Moves focus to the first tab. Optionally, activates the newly focused tab (See note below).`]}),`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`End`}),`: Moves focus to the last tab. Optionally, activates the newly focused tab (See note below).`]}),`
`]}),`
`]}),`
`]})]})}function d(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}export{d as default};