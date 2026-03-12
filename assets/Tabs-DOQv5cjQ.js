import{j as e,M as l,a as i,C as t}from"./iframe-ZO3EpHUh.js";import{useMDXComponents as c}from"./index-BuQoUgKa.js";import{S as d,U as o,a as r,T as h}from"./Tabs.stories-Bfp-DRDa.js";import"./preload-helper-PPVm8Dsz.js";import"./bookmark-9oZ8n8m5.js";import"./index-jgDKZr1Q.js";import"./add-DMALUOT2.js";import"./move-right-0KirwidR.js";import"./text-CcDxx1vh.js";import"./close-CFDHWYro.js";import"./upload-n0dw6Lvi.js";import"./sort-descending-DuwJD51Q.js";import"./undo-BAeS--dQ.js";import"./settings-DHuZ5QaZ.js";import"./copy-IFVMzOQk.js";import"./delete-B7ujbQKr.js";import"./documentation-BinzBdHI.js";import"./edit-BH8KrMyX.js";import"./error-Lg61ZlTl.js";import"./favorited-D41QBsE5.js";import"./generate-with-ai-D3Na992K.js";import"./subtract-1H6W3dfs.js";import"./hide-CTXMH0dL.js";import"./history-D4JWxRxn.js";import"./search-D8g2pafp.js";import"./info-DvsPKJb0.js";import"./person-Dece0dLK.js";import"./map-CMc8fJla.js";import"./more-vertical-D3wa18aZ.js";import"./move-left-CblN84mj.js";import"./new-tab-CfvnCP2A.js";import"./notification-BwvpND0x.js";import"./paste-DoYSMiJq.js";import"./show-Do692Dy4.js";import"./warning-LAozOqxS.js";import"./tenant-1icmyCcT.js";import"./Icons-BZbU0tdy.js";import"./Tabs-tkmt_Xn4.js";import"./TabsContainer-DGe5wsO2.js";import"./classNames--9J8KLdq.js";import"./sprout-JWClaPEx.js";import"./Tooltip-CjNQJJZv.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-CTOYJqpW.js";import"./useId-peRdP77j.js";import"./useListGesture-B9iOauyS.js";import"./list-B1zo5gaH.js";import"./useControl-B2Bmxigf.js";import"./Button-DwNMLHHD.js";import"./Button.module-CmtyAZAy.js";import"./common-bQH3ZR03.js";import"./Badge-CIU99cFr.js";import"./ProgressCircular-Bbm1pjbl.js";import"./useI18n-CNj_Vmmx.js";function a(s){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/Tabs",of:d}),`
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
`]})]})}function pe(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{pe as default};
