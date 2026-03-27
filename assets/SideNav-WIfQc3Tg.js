import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Lc6HZYGU.js";import{Fn as n,l as r,n as i,s as a}from"./iframe-RiXBydPV.js";import{t as o}from"./mdx-react-shim-Cw1WyOhr.js";import{Playground as s,n as c,t as l}from"./SideNav.stories-BY531Ttq.js";function u(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{title:`Components/SideNavigation`,of:l}),`
`,(0,f.jsx)(n.h1,{id:`sidenav`,children:`SideNav`}),`
`,(0,f.jsx)(n.p,{children:`Side navigation is typically used as a primary or secondary navigation in a side panel.`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { SideNav } from "@qlik/sprout-react";

<SideNav.Nav>
  <SideNav.Section label="Default">
    <List gap="s">
      <ListItem hasPadding={false} interactive>
        <SideNav.Link
          href="#upload"
          icon={<CloudUploadIcon {...UNZIED_PROPS} />}
          label="Uploads"
        />
      </ListItem>
    </List>
  </SideNav.Section>
</SideNav.Nav>;
`})}),`
`,(0,f.jsxs)(n.p,{children:[`Note: ListItem need hasPadding=`,!1,` when used in SideNav for the sake of composition.
and this property doesn't appear in the source code panel`]}),`
`,(0,f.jsx)(i,{of:s,sourceState:`shown`}),`
`,(0,f.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-typescript`,children:`import {
  HTMLAnchorProps,
  HTMLDivProps,
  type HTMLNavProps,
  type HTMLSectionProps,
} from "../htmlTypes";

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
`,(0,f.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[`The `,(0,f.jsx)(n.code,{children:`SideNav.Nav`}),` use a `,(0,f.jsx)(n.code,{children:`nav`}),` element`]}),`
`,(0,f.jsxs)(n.li,{children:[`The `,(0,f.jsx)(n.code,{children:`SideNav.Section`}),` use a `,(0,f.jsx)(n.code,{children:`section`}),` element. The title use by default `,(0,f.jsx)(n.code,{children:`h2`}),`. It can be set by using the `,(0,f.jsx)(n.code,{children:`level`}),` property.`]}),`
`,(0,f.jsxs)(n.li,{children:[`The `,(0,f.jsx)(n.code,{children:`SideNav.Link`}),` use a `,(0,f.jsx)(n.code,{children:`a`}),` element and wrap the `,(0,f.jsx)(n.code,{children:`SideNav.Item`}),`.`]}),`
`,(0,f.jsxs)(n.li,{children:[`The `,(0,f.jsx)(n.code,{children:`SideNav.Item`}),` use a `,(0,f.jsx)(n.code,{children:`span`}),` element.`]}),`
`]}),`
`,(0,f.jsxs)(n.p,{children:[`Please see the `,(0,f.jsx)(n.a,{href:`?path=/docs/components-list--docs`,children:`List`}),` documentation for info about it.`]})]})}function d(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,f.jsx)(n,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=n(),o(),r(),c()}))();export{d as default};