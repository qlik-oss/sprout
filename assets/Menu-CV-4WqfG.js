import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{i as n,l as r,n as i,p as a,s as o}from"./iframe-UwarwtgL.js";import{t as s}from"./mdx-react-shim-DbLuWb1F.js";import{JsxApi as c,n as l,t as u}from"./Menu.stories-DBVRD1pr.js";import{Content as d,t as f}from"./MenuContent.stories-00nyGDCR.js";import{Contextual as p,t as m}from"./MenuContextual.stories-BskLY0di.js";import{Group as h,t as g}from"./MenuGroup.stories-TpCG2hvS.js";import{GroupLabel as _,t as v}from"./MenuGroupLabel.stories-1DyyfjeJ.js";import{Item as y,t as b}from"./MenuItem.stories-BDeEGEQi.js";import{SecondaryAction as x,t as S}from"./MenuSecondaryAction.stories-BLr6jhDL.js";import{Skeleton as C,t as w}from"./MenuSkeleton.stories-C1UO65vE.js";import{Split as T,t as E}from"./MenuSplit.stories-DFmaKsQ0.js";import{Sub as D,t as O}from"./MenuSub.stories-CW9OGepP.js";import{Trigger as k,t as A}from"./MenuTrigger.stories-CDqqJ0wp.js";function j(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...a(),...e.components};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(o,{title:`Components/Menu`,of:u}),`
`,(0,N.jsx)(t.h1,{id:`menu`,children:`Menu`}),`
`,(0,N.jsx)(t.p,{children:`Temporary menu that appears on demand. A menu typically closes when selecting an item or clicking outside. Most of the settings can be found in the Menu item itself and Menu is the composite component. Select menu is a separate component that is to be used only as the popover in Select (dropdown) components.`}),`
`,(0,N.jsx)(i,{of:c}),`
`,(0,N.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsx)(t.li,{children:(0,N.jsx)(t.a,{href:`#usage`,children:`Usage`})}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.a,{href:`#properties`,children:`Properties`}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsx)(t.li,{children:(0,N.jsx)(t.a,{href:`#menutrigger`,children:`Menu.Trigger`})}),`
`,(0,N.jsx)(t.li,{children:(0,N.jsx)(t.a,{href:`#menucontextual`,children:`Menu.Contextual`})}),`
`,(0,N.jsx)(t.li,{children:(0,N.jsx)(t.a,{href:`#menuitem`,children:`Menu.Item`})}),`
`,(0,N.jsx)(t.li,{children:(0,N.jsx)(t.a,{href:`#menusub`,children:`Menu.Sub`})}),`
`,(0,N.jsx)(t.li,{children:(0,N.jsx)(t.a,{href:`#menugroup`,children:`Menu.Group`})}),`
`,(0,N.jsx)(t.li,{children:(0,N.jsx)(t.a,{href:`#menugrouplabel`,children:`Menu.GroupLabel`})}),`
`,(0,N.jsx)(t.li,{children:(0,N.jsx)(t.a,{href:`#menusecondaryaction`,children:`Menu.SecondaryAction`})}),`
`,(0,N.jsx)(t.li,{children:(0,N.jsx)(t.a,{href:`#menudivider`,children:`Menu.Divider`})}),`
`,(0,N.jsx)(t.li,{children:(0,N.jsx)(t.a,{href:`#menuskeleton`,children:`Menu.Skeleton`})}),`
`,(0,N.jsx)(t.li,{children:(0,N.jsx)(t.a,{href:`#menusplit`,children:`Menu.Split`})}),`
`,(0,N.jsx)(t.li,{children:(0,N.jsx)(t.a,{href:`#menucontent`,children:`Menu.Content`})}),`
`,(0,N.jsx)(t.li,{children:(0,N.jsx)(t.a,{href:`#controlled`,children:`Controlled`})}),`
`]}),`
`]}),`
`,(0,N.jsx)(t.li,{children:(0,N.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`,(0,N.jsx)(t.li,{children:(0,N.jsx)(t.a,{href:`#breaking-changes`,children:`Breaking Changes`})}),`
`]}),`
`,(0,N.jsx)(t.hr,{}),`
`,(0,N.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,N.jsx)(t.pre,{children:(0,N.jsx)(t.code,{className:`language-jsx`,children:`import { Menu } from "@qlik/sprout-react";

// data API
const MENU_DATA = [
  { component: "groupLabel", label: "User" },
  { component: "item", icon: <PersonIcon />, label: "Profile", disabled: true },
  { component: "divider" },
];

<Menu.Trigger menu={MENU_DATA}>
  <Button label="Open Menu" />
</Menu.Trigger>;

// JSX composition
<Menu.Trigger
  menu={
    <>
      <Menu.GroupLabel label="User" />
      <Menu.Item icon={<PersonIcon />} label="Profile" disabled />
      <Menu.Item icon={<LogoutIcon />} label="Logout" />
      <Menu.Item icon={null} label="Reload" />
      <Menu.Item icon={null} label="Share" />
      <Menu.Sub icon={<SettingsIcon />} label="Settings">
        <Menu.Item label="Text" />
        <Menu.Item label="Video" />
        <Menu.Sub label="Image">
          <Menu.Item label=".png" />
          <Menu.Item label=".jpg" />
          <Menu.Item label=".svg" />
          <Menu.Item label=".gif" />
        </Menu.Sub>
        <Menu.Item label="Audio" />
      </Menu.Sub>
      <Menu.Divider />
      <Menu.Item
        icon={<EditIcon />}
        label="Edit"
        description="Don’t remember what we said about overflow, but this would be it."
        valueLabel="⌘ E"
      />
      <Menu.Item icon={<BinIcon />} label="Delete" />
      <Menu.Divider />
      <Menu.Item icon={null} label="Cut" valueLabel="⌘ X" />
      <Menu.Item icon={null} label="Copy" valueLabel="⌘ C" />
      <Menu.Item icon={null} label="Paste" disabled valueLabel="⌘ V" />
      <Menu.Divider />
      <Menu.Split>
        <Menu.Item label="Open source" />
        <Menu.SecondaryAction
          onClick={() => {
            window
              .open("/?path=/story/components-menu--secondary-action", "_blank")
              ?.focus();
          }}
        />
      </Menu.Split>
    </>
  }
>
  <Button label="Open Menu" />
</Menu.Trigger>;
`})}),`
`,(0,N.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,N.jsx)(t.h3,{id:`menutrigger`,children:`Menu.Trigger`}),`
`,(0,N.jsx)(i,{of:k}),`
`,(0,N.jsx)(n,{of:k}),`
`,(0,N.jsx)(t.h3,{id:`menucontextual`,children:`Menu.Contextual`}),`
`,(0,N.jsx)(i,{of:p}),`
`,(0,N.jsx)(n,{of:p}),`
`,(0,N.jsx)(t.h3,{id:`menuitem`,children:`Menu.Item`}),`
`,(0,N.jsx)(i,{of:y}),`
`,(0,N.jsx)(n,{of:y}),`
`,(0,N.jsx)(t.h3,{id:`menusub`,children:`Menu.Sub`}),`
`,(0,N.jsx)(i,{of:D}),`
`,(0,N.jsx)(n,{of:D}),`
`,(0,N.jsx)(t.h3,{id:`menugroup`,children:`Menu.Group`}),`
`,(0,N.jsx)(i,{of:h}),`
`,(0,N.jsx)(n,{of:h}),`
`,(0,N.jsx)(t.h3,{id:`menugrouplabel`,children:`Menu.GroupLabel`}),`
`,(0,N.jsx)(i,{of:_}),`
`,(0,N.jsx)(n,{of:_}),`
`,(0,N.jsx)(t.h3,{id:`menusecondaryaction`,children:`Menu.SecondaryAction`}),`
`,(0,N.jsx)(i,{of:x}),`
`,(0,N.jsx)(n,{of:x}),`
`,(0,N.jsx)(t.h3,{id:`menudivider`,children:`Menu.Divider`}),`
`,(0,N.jsxs)(t.blockquote,{children:[`
`,(0,N.jsx)(t.p,{children:`No properties`}),`
`]}),`
`,(0,N.jsx)(t.h3,{id:`menuskeleton`,children:`Menu.Skeleton`}),`
`,(0,N.jsx)(i,{of:C}),`
`,(0,N.jsxs)(t.blockquote,{children:[`
`,(0,N.jsx)(t.p,{children:`No properties`}),`
`]}),`
`,(0,N.jsx)(t.h3,{id:`menusplit`,children:`Menu.Split`}),`
`,(0,N.jsx)(i,{of:T}),`
`,(0,N.jsx)(n,{of:T}),`
`,(0,N.jsx)(t.h3,{id:`menucontent`,children:`Menu.Content`}),`
`,(0,N.jsx)(i,{of:d}),`
`,(0,N.jsx)(n,{of:d}),`
`,(0,N.jsx)(t.h4,{id:`controlled`,children:`Controlled`}),`
`,(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.code,{children:`Menu.Trigger`}),` support the control of opening / closing the menu by using the following props:`]}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.code,{children:`defaultOpen`}),`: boolean (only for initial state)`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.code,{children:`open`}),`: boolean (controlled state)`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.code,{children:`onOpenChange`}),`: function (callback for controlled state) with onChange(open: boolean).`]}),`
`]}),`
`,(0,N.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,N.jsx)(t.p,{children:(0,N.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/menubar/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Menu bar`})}),`
`,(0,N.jsx)(t.p,{children:`HTML structure`}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[`Menu.Trigger use a `,(0,N.jsx)(t.code,{children:`button`}),` to trigger the visibility of the menu and have the following attributes:`,`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsx)(t.li,{children:(0,N.jsx)(t.code,{children:`aria-haspopup="menu"`})}),`
`,(0,N.jsx)(t.li,{children:(0,N.jsx)(t.code,{children:`aria-expanded="true|false"`})}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.code,{children:`aria-controls`}),` pointing to the menu id`]}),`
`]}),`
`]}),`
`,(0,N.jsxs)(t.li,{children:[`Menu.Container receive the following attributes`,`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsx)(t.li,{children:(0,N.jsx)(t.code,{children:`role="menu"`})}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.code,{children:`aria-labelledby`}),` pointing to the trigger id`]}),`
`,(0,N.jsx)(t.li,{children:(0,N.jsx)(t.code,{children:`aria-orientation="vertical"`})}),`
`]}),`
`]}),`
`,(0,N.jsxs)(t.li,{children:[`Menu.Group is a `,(0,N.jsx)(t.code,{children:`div`}),` with `,(0,N.jsx)(t.code,{children:`role="group"`}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsx)(t.li,{children:`FIXME: should it has aria-labelledby ?`}),`
`]}),`
`]}),`
`,(0,N.jsxs)(t.li,{children:[`Menu.Item is a `,(0,N.jsx)(t.code,{children:`button`}),` with `,(0,N.jsx)(t.code,{children:`role="menuitem"`}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[`if `,(0,N.jsx)(t.code,{children:`selectable`}),` is true `,(0,N.jsx)(t.code,{children:`role`}),` becomes `,(0,N.jsx)(t.code,{children:`menuitemcheckbox`}),` and `,(0,N.jsx)(t.code,{children:`aria-checked="false"`})]}),`
`,(0,N.jsxs)(t.li,{children:[`if `,(0,N.jsx)(t.code,{children:`selected`}),` and `,(0,N.jsx)(t.code,{children:`selectable`}),` is true `,(0,N.jsx)(t.code,{children:`aria-checked="true"`})]}),`
`,(0,N.jsxs)(t.li,{children:[`no `,(0,N.jsx)(t.code,{children:`aria-checked`}),` attribute otherwise`]}),`
`]}),`
`]}),`
`]}),`
`,(0,N.jsx)(t.p,{children:`Keyboard navigation`}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsx)(t.li,{children:`The first element in the menu receive the focus when the menu is opened.`}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.code,{children:`ArrowDown`}),` and `,(0,N.jsx)(t.code,{children:`ArrowUp`}),` navigate between all not disabled `,(0,N.jsx)(t.code,{children:`menuitem`}),` elements.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.code,{children:`Home`}),` and `,(0,N.jsx)(t.code,{children:`End`}),` navigate to the first and last not disabled `,(0,N.jsx)(t.code,{children:`menuitem`}),` elements.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.code,{children:`Space`}),` and `,(0,N.jsx)(t.code,{children:`Enter`}),` trigger click event on the focused `,(0,N.jsx)(t.code,{children:`menuitem`}),` element.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.code,{children:`ArrowRight`}),` open the menu if the focused `,(0,N.jsx)(t.code,{children:`menuitem`}),` element has a submenu using the `,(0,N.jsx)(t.code,{children:`aria-haspopup="menu"`}),` attribute.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.code,{children:`ArrowLeft`}),` close the menu and move the focus ont the parent menu's `,(0,N.jsx)(t.code,{children:`menuitem`}),` element.`]}),`
`]}),`
`,(0,N.jsx)(t.h2,{id:`breaking-changes`,children:`Breaking Changes`}),`
`,(0,N.jsx)(t.p,{children:`In the discussion of API we have decided to go with a composition and renderer approach.`}),`
`,(0,N.jsx)(t.pre,{children:(0,N.jsx)(t.code,{className:`language-diff`,children:`- import { ContextMenu, MenuTrigger, MenuItem, Menu, MenuDivider, MenuGroupLabel } from "@qlik/sprout-react";
+ import { Menu } from "@qlik/sprout-react";


- <MenuContent
+ <Menu.Content
- <ContextMenu
+ <Menu.Contextual
- <MenuTrigger
+ <Menu.Trigger
- <MenuItem
+ <Menu.Item
- <MenuDivider
+ <Menu.Divider
- <MenuGroupLabel
+ <Menu.GroupLabel
- <Menu
+ <Menu.Sub
`})})]})}function M(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,N.jsx)(t,{...e,children:(0,N.jsx)(j,{...e})}):j(e)}var N;e((()=>{N=t(),s(),r(),l(),f(),m(),g(),v(),b(),S(),w(),E(),O(),A()}))();export{M as default};