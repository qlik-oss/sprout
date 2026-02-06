import{j as e,M as l,a as i,C as t}from"./iframe-Dux6zP9l.js";import{useMDXComponents as c}from"./index-BCztanOQ.js";import{S as d,U as o,a as r,T as h}from"./Tabs.stories-wJAjo5-h.js";import"./preload-helper-PPVm8Dsz.js";import"./Bookmark-YRYgI-pH.js";import"./Upload-DVdnZv4A.js";import"./Icons-homBgXPl.js";import"./index-Br4vx0U3.js";import"./Add-BtS2806q.js";import"./Next-BewXrcs7.js";import"./Text-BqIxfr9D.js";import"./Close-DZrODGJw.js";import"./SortDescending-6CDLuBsq.js";import"./Undo-BlRv8m3a.js";import"./Person-DtFtgVbU.js";import"./Copy-CNcpp5JH.js";import"./Delete-DmK8BJN4.js";import"./Filter-CkxlB1aU.js";import"./Edit-jwbjvk-y.js";import"./Error-BylAzqMK.js";import"./GenerateWithAi-B-iuWyGM.js";import"./History-hc8jDZls.js";import"./Search-jnBfSIuS.js";import"./Info-DM0ROm97.js";import"./Subtract-DqagjlIq.js";import"./Map-BliWAPeQ.js";import"./NewTab-B05WKzom.js";import"./Notification-DOy9jqM5.js";import"./Paste-a9G7KIM9.js";import"./Warning-DwriNDhq.js";import"./Tenant-ewlWfidL.js";import"./Tabs-G5qUaPJq.js";import"./TabsContainer-kTNcJmH_.js";import"./classNames-T6EAEAwi.js";import"./sprout-duSO2RrP.js";import"./Tooltip-64IyLuk4.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CWoZLUJZ.js";import"./useId-CfGbHbQJ.js";import"./useListGesture-l6HU6M_5.js";import"./list-B1zo5gaH.js";import"./useControl-BHRxoypK.js";import"./Button-CUxISDo2.js";import"./icons-DDUP-3mh.js";import"./Button.module-C2ELNEem.js";import"./Badge-LAqT22o7.js";import"./ProgressCircular-u9vevpyG.js";import"./useI18n-KYbpKEsf.js";function a(s){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/Tabs",of:d}),`
`,e.jsx(n.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsx(n.p,{children:"Tabs are used for navigation."}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#properties",children:"Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#composition-api",children:"Composition API"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tabs-api",children:"Tabs API"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tabs-without-panels",children:"Tabs without Panels"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#accessibility",children:"Accessibility"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Tabs } from "@qlik/sprout-react";

// Composition API (recommended)
function MyComponent() {
  return (
    <Tabs.Container>
      <Tabs.List showTrack>
        <Tabs.Tab aria-controls="Assets" title="Assets" icon={<BookIcon />} />
        <Tabs.Tab aria-controls="Users" title="Users" icon={<StarIcon />} disabled />
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
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["By passing the props ",e.jsx(n.code,{children:"activeKey"})," and ",e.jsx(n.code,{children:"onSelect"})," The selected Tab becomes controlled"]})}),`
`]}),`
`,e.jsx(n.h3,{id:"composition-api",children:"Composition API"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(n.h3,{id:"tabs-api",children:"Tabs API"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Note: tabs must be memoized to not trigger re-render"})}),`
`]}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(n.h3,{id:"tabs-without-panels",children:"Tabs without Panels"}),`
`,e.jsx(n.p,{children:"You can use the only the Tabs has a navigation component without the Tab Panels."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tabs/",rel:"nofollow",children:"W3/WAI/ARIA/APG Tabs"})}),`
`,e.jsx(n.p,{children:"HTML structure:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tabs.Container"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tabs.List"})," -> ",e.jsx(n.code,{children:"Tabs.Tab"})]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Tabs.Panel"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tabs.Container"})," is a ",e.jsx(n.code,{children:"nav"})," HTML element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tabs.List"})," is a ",e.jsx(n.code,{children:"div"})," with ",e.jsx(n.code,{children:'role="tablist"'})," attribute"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tabs.Tab"})," use a ",e.jsx(n.code,{children:"button"})," to trigger the visibility of the TabPanel"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tabs.Panel"})," is a ",e.jsx(n.code,{children:"div"}),' with a role="tabpanel" attribute']}),`
`]}),`
`,e.jsx(n.p,{children:"Keyboard interaction"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tabs.Tab"}),": When focus moves into the ",e.jsx(n.code,{children:"Tabs.List"}),", places focus on the active ",e.jsx(n.code,{children:"Tab"})," element."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tabs.Tab"}),": When the ",e.jsx(n.code,{children:"Tabs.list"})," contains the focus, moves focus to the next element in the page tab sequence outside the tablist, which is the tabpanel unless the first element containing meaningful content inside the tabpanel is focusable."]}),`
`,e.jsxs(n.li,{children:["When focus is on a tab element in a horizontal tab list:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ArrowLeft"}),": moves focus to the previous ",e.jsx(n.code,{children:"Tab"}),". If focus is on the first tab, moves focus to the last tab."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ArrowRight"}),": Moves focus to the next ",e.jsx(n.code,{children:"Tab"}),". If focus is on the last tab element, moves focus to the first tab."]}),`
`,e.jsxs(n.li,{children:["if ",e.jsx(n.code,{children:"document.dir"})," is ",e.jsx(n.code,{children:"rtl"})," this is reversed"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["When focus is on a ",e.jsx(n.code,{children:"Tab"})," in a ",e.jsx(n.code,{children:"Tabs.list"})," with either horizontal or vertical orientation:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Space"})," or ",e.jsx(n.code,{children:"Enter"}),": Activates the tab if it was not activated automatically on focus."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Home"}),": Moves focus to the first tab. Optionally, activates the newly focused tab (See note below)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"End"}),": Moves focus to the last tab. Optionally, activates the newly focused tab (See note below)."]}),`
`]}),`
`]}),`
`]})]})}function re(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{re as default};
