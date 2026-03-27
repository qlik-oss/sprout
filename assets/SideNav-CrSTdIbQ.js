import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{n as t,s as n}from"./iframe-B5xoaqtW.js";import{n as r}from"./lib-EjdzwnHJ.js";import{Playground as i,t as a}from"./SideNav.stories-CM8TeCc_.js";var o=e();function s(e){let s={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...r(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{title:`Components/SideNavigation`,of:a}),`
`,(0,o.jsx)(s.h1,{id:`sidenav`,children:`SideNav`}),`
`,(0,o.jsx)(s.p,{children:`Side navigation is typically used as a primary or secondary navigation in a side panel.`}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-tsx`,children:`import { SideNav } from "@qlik/sprout-react";

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
`,(0,o.jsxs)(s.p,{children:[`Note: ListItem need hasPadding=`,!1,` when used in SideNav for the sake of composition.
and this property doesn't appear in the source code panel`]}),`
`,(0,o.jsx)(t,{of:i,sourceState:`shown`}),`
`,(0,o.jsx)(s.h2,{id:`api`,children:`API`}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-typescript`,children:`import {
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
`,(0,o.jsx)(s.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,o.jsxs)(s.ul,{children:[`
`,(0,o.jsxs)(s.li,{children:[`The `,(0,o.jsx)(s.code,{children:`SideNav.Nav`}),` use a `,(0,o.jsx)(s.code,{children:`nav`}),` element`]}),`
`,(0,o.jsxs)(s.li,{children:[`The `,(0,o.jsx)(s.code,{children:`SideNav.Section`}),` use a `,(0,o.jsx)(s.code,{children:`section`}),` element. The title use by default `,(0,o.jsx)(s.code,{children:`h2`}),`. It can be set by using the `,(0,o.jsx)(s.code,{children:`level`}),` property.`]}),`
`,(0,o.jsxs)(s.li,{children:[`The `,(0,o.jsx)(s.code,{children:`SideNav.Link`}),` use a `,(0,o.jsx)(s.code,{children:`a`}),` element and wrap the `,(0,o.jsx)(s.code,{children:`SideNav.Item`}),`.`]}),`
`,(0,o.jsxs)(s.li,{children:[`The `,(0,o.jsx)(s.code,{children:`SideNav.Item`}),` use a `,(0,o.jsx)(s.code,{children:`span`}),` element.`]}),`
`]}),`
`,(0,o.jsxs)(s.p,{children:[`Please see the `,(0,o.jsx)(s.a,{href:`?path=/docs/components-list--docs`,children:`List`}),` documentation for info about it.`]})]})}function c(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}export{c as default};