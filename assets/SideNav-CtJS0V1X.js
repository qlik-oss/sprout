import{j as e,M as o,a}from"./iframe-B4Gn7jRD.js";import{useMDXComponents as t}from"./index-BtGsBDbQ.js";import{S as r,P as c}from"./SideNav.stories-Be2uwZa4.js";import"./preload-helper-PPVm8Dsz.js";import"./Bookmark-CKHX2VYo.js";import"./Upload-BAurdPXS.js";import"./History-CgCTywjh.js";import"./classNames-CTBLippR.js";import"./sprout-CWCWYkgH.js";import"./sprout-tokens-C4H4srAS.js";import"./icons-CPBvMsVh.js";import"./useId-DXegRsHP.js";import"./List-DOrcG2Zx.js";import"./useListGesture-C4X2DLyP.js";import"./list-B1zo5gaH.js";import"./Divider-OzvHaalV.js";function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/SideNavigation",of:r}),`
`,e.jsx(n.h1,{id:"sidenav",children:"SideNav"}),`
`,e.jsx(n.p,{children:"Side navigation is typically used as a primary or secondary navigation in a side panel."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { SideNav } from "@qlik/sprout-react";

<SideNav.Nav>
  <SideNav.Section label="Default">
    <List gap="s">
      <ListItem hasPadding={false} interactive>
        <SideNav.Link href="#upload" icon={<CloudUploadIcon {...UNZIED_PROPS} />} label="Uploads" />
      </ListItem>
    </List>
  </SideNav.Section>
</SideNav.Nav>;
`})}),`
`,e.jsxs(n.p,{children:["Note: ListItem need hasPadding=",!1,` when used in SideNav for the sake of composition.
and this property doesn't appear in the source code panel`]}),`
`,e.jsx(a,{of:c,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { HTMLAnchorProps, HTMLDivProps, type HTMLNavProps, type HTMLSectionProps } from "../htmlTypes";

type SideNavProps = {
  Nav: {
    variant?: "compact";
  }; // & HTMLNavProps
  Section: {
    label: string;
    level?: "h2" | "h3" | "h4" | "h5" | "h6";
  }; // & HTMLSectionProps
  Item: {
    variant?: "compact";
    icon?: ReactNode;
    iconSize?: "large";
    label: ReactNode;
    indentation?: number;
    isExternal?: boolean;
  }; // & HTMLDivProps
  Link: {}; // same as Item + HTMLAnchorProps
};
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"SideNav.Nav"})," use a ",e.jsx(n.code,{children:"nav"})," element"]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"SideNav.Section"})," use a ",e.jsx(n.code,{children:"section"})," element. The title use by default ",e.jsx(n.code,{children:"h2"}),". It can be set by using the ",e.jsx(n.code,{children:"level"})," property."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"SideNav.Link"})," use a ",e.jsx(n.code,{children:"a"})," element and wrap the ",e.jsx(n.code,{children:"SideNav.Item"}),"."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"SideNav.Item"})," use a ",e.jsx(n.code,{children:"span"})," element."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Please see the ",e.jsx(n.a,{href:"?path=/docs/components-list--docs",children:"List"})," documentation for info about it."]})]})}function M(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{M as default};
