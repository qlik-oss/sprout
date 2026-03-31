import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,i as r,l as i,n as a,s as o}from"./iframe-B0xl5hqz.js";import{t as s}from"./mdx-react-shim-C5WuC5zb.js";import{Item as c,Link as l,Nav as u,Section as d,n as f,t as p}from"./SideNav.stories-BjENjB48.js";function m(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{title:`Components/SideNavigation`,of:p}),`
`,(0,g.jsx)(n.h1,{id:`sidenav`,children:`SideNav`}),`
`,(0,g.jsx)(n.p,{children:`Side navigation is typically used as a primary or secondary navigation in a side panel.`}),`
`,(0,g.jsx)(n.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.a,{href:`#usage`,children:`Usage`})}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`#properties`,children:`Properties`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.a,{href:`#sidenavnav`,children:`SideNav.Nav`})}),`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.a,{href:`#sidenavsection`,children:`SideNav.Section`})}),`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.a,{href:`#sidenavitem`,children:`SideNav.Item`})}),`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.a,{href:`#sidenavlink`,children:`SideNav.Link`})}),`
`]}),`
`]}),`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.a,{href:`#compact-variant`,children:`Compact variant`})}),`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,g.jsx)(n.hr,{}),`
`,(0,g.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-tsx`,children:`import { List, ListItem, SideNav } from "@qlik/sprout-react";

<SideNav.Nav>
  <SideNav.Section label="Files">
    <List gap="density-s">
      <ListItem hasPadding={false} interactive>
        <SideNav.Link
          href="#upload"
          icon={<CloudUploadIcon />}
          label="Uploads"
        />
      </ListItem>
      <ListItem hasPadding={false} interactive selected>
        <SideNav.Link
          href="#recent"
          aria-current="page"
          icon={<HistoryIcon />}
          label="Recent"
        />
      </ListItem>
    </List>
  </SideNav.Section>
</SideNav.Nav>;
`})}),`
`,(0,g.jsxs)(n.blockquote,{children:[`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.strong,{children:`Note:`}),` `,(0,g.jsx)(n.code,{children:`ListItem`}),` requires `,(0,g.jsx)(n.code,{children:`hasPadding={false}`}),` when used inside `,(0,g.jsx)(n.code,{children:`SideNav`}),` for correct composition. This prop does not appear in the source code panel.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,g.jsx)(n.h3,{id:`sidenavnav`,children:`SideNav.Nav`}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(r,{of:u}),`
`,(0,g.jsx)(n.h3,{id:`sidenavsection`,children:`SideNav.Section`}),`
`,(0,g.jsx)(a,{of:d}),`
`,(0,g.jsx)(r,{of:d}),`
`,(0,g.jsx)(n.h3,{id:`sidenavitem`,children:`SideNav.Item`}),`
`,(0,g.jsx)(a,{of:c}),`
`,(0,g.jsx)(r,{of:c}),`
`,(0,g.jsx)(n.h3,{id:`sidenavlink`,children:`SideNav.Link`}),`
`,(0,g.jsx)(a,{of:l}),`
`,(0,g.jsx)(r,{of:l}),`
`,(0,g.jsx)(n.h2,{id:`compact-variant`,children:`Compact variant`}),`
`,(0,g.jsxs)(n.p,{children:[`The `,(0,g.jsx)(n.code,{children:`variant="compact"`}),` prop can be applied to `,(0,g.jsx)(n.code,{children:`SideNav.Nav`}),`, `,(0,g.jsx)(n.code,{children:`SideNav.Item`}),`, and `,(0,g.jsx)(n.code,{children:`SideNav.Link`}),` to switch to a condensed layout. In compact mode, icons can also use `,(0,g.jsx)(n.code,{children:`iconSize="large"`}),` for a larger touch target.`]}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-tsx`,children:`<SideNav.Nav variant="compact">
  <SideNav.Section label="Files">
    <List gap="density-s">
      <ListItem hasPadding={false} interactive>
        <SideNav.Link
          variant="compact"
          href="#upload"
          icon={<CloudUploadIcon />}
          label="Uploads"
        />
      </ListItem>
      <ListItem hasPadding={false} interactive>
        {/* icon-only link */}
        <SideNav.Link
          variant="compact"
          href="#recent"
          icon={<HistoryIcon />}
          aria-label="Recent"
        />
      </ListItem>
    </List>
  </SideNav.Section>
</SideNav.Nav>
`})}),`
`,(0,g.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html`,rel:`nofollow`,children:`W3/WAI/ARIA/APG navigation landmark`})}),`
`]}),`
`,(0,g.jsx)(n.p,{children:`HTML structure`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.code,{children:`SideNav.Nav`}),` renders a `,(0,g.jsx)(n.code,{children:`nav`}),` element.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.code,{children:`SideNav.Section`}),` renders a `,(0,g.jsx)(n.code,{children:`section`}),` element with `,(0,g.jsx)(n.code,{children:`aria-labelledby`}),` pointing to its heading when a `,(0,g.jsx)(n.code,{children:`label`}),` is provided. The heading level defaults to `,(0,g.jsx)(n.code,{children:`h2`}),` and can be changed via the `,(0,g.jsx)(n.code,{children:`level`}),` prop.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.code,{children:`SideNav.Link`}),` renders an `,(0,g.jsx)(n.code,{children:`a`}),` element and wraps `,(0,g.jsx)(n.code,{children:`SideNav.Item`}),` internally.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.code,{children:`SideNav.Item`}),` renders a `,(0,g.jsx)(n.code,{children:`span`}),` element.`]}),`
`]}),`
`,(0,g.jsx)(n.p,{children:`Keyboard navigation`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[`Use `,(0,g.jsx)(n.code,{children:`Tab`}),` / `,(0,g.jsx)(n.code,{children:`Shift+Tab`}),` to move focus between links.`]}),`
`,(0,g.jsxs)(n.li,{children:[`The currently active link should carry `,(0,g.jsx)(n.code,{children:`aria-current="page"`}),`.`]}),`
`,(0,g.jsxs)(n.li,{children:[`When a link opens an external destination, `,(0,g.jsx)(n.code,{children:`isExternal`}),` adds a visual indicator; pair it with a descriptive `,(0,g.jsx)(n.code,{children:`aria-label`}),` when no visible label is present.`]}),`
`]}),`
`,(0,g.jsxs)(n.p,{children:[`Please see the `,(0,g.jsx)(n.a,{href:`?path=/docs/components-list--docs`,children:`List`}),` documentation for further details on `,(0,g.jsx)(n.code,{children:`List`}),` and `,(0,g.jsx)(n.code,{children:`ListItem`}),`.`]})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=n(),s(),i(),f()}))();export{h as default};