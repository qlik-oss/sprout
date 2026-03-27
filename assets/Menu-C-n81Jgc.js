import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-B5xoaqtW.js";import{n as i}from"./lib-EjdzwnHJ.js";import"./Icons-DJikLCul.js";import"./Button.argTypes-O7s9Wee9.js";import{JsxApi as a,t as o}from"./Menu.stories-LabYuzxk.js";import"./Menu.argTypes-GB2I-evK.js";import{Content as s}from"./MenuContent.stories-eZK9TNZ0.js";import{Contextual as c}from"./MenuContextual.stories-BmScHZr5.js";import{Group as l}from"./MenuGroup.stories-DWa-jZSF.js";import{GroupLabel as u}from"./MenuGroupLabel.stories-CbJDBInL.js";import{Item as d}from"./MenuItem.stories-DcU2_meU.js";import{SecondaryAction as f}from"./MenuSecondaryAction.stories-CEg3lz1f.js";import{Skeleton as p}from"./MenuSkeleton.stories-D5MSqnDB.js";import{Split as m}from"./MenuSplit.stories-DA9ZKnUJ.js";import{Sub as h}from"./MenuSub.stories-DKf7_N4c.js";import{Trigger as g}from"./MenuTrigger.stories-Ct-LIIZN.js";var _=e();function v(e){let v={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(r,{title:`Components/Menu`,of:o}),`
`,(0,_.jsx)(v.h1,{id:`menu`,children:`Menu`}),`
`,(0,_.jsx)(v.p,{children:`Temporary menu that appears on demand. A menu typically closes when selecting an item or clicking outside. Most of the settings can be found in the Menu item itself and Menu is the composite component. Select menu is a separate component that is to be used only as the popover in Select (dropdown) components.`}),`
`,(0,_.jsx)(n,{of:a}),`
`,(0,_.jsx)(v.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,_.jsxs)(v.ul,{children:[`
`,(0,_.jsx)(v.li,{children:(0,_.jsx)(v.a,{href:`#usage`,children:`Usage`})}),`
`,(0,_.jsxs)(v.li,{children:[(0,_.jsx)(v.a,{href:`#properties`,children:`Properties`}),`
`,(0,_.jsxs)(v.ul,{children:[`
`,(0,_.jsx)(v.li,{children:(0,_.jsx)(v.a,{href:`#menutrigger`,children:`Menu.Trigger`})}),`
`,(0,_.jsx)(v.li,{children:(0,_.jsx)(v.a,{href:`#menucontextual`,children:`Menu.Contextual`})}),`
`,(0,_.jsx)(v.li,{children:(0,_.jsx)(v.a,{href:`#menuitem`,children:`Menu.Item`})}),`
`,(0,_.jsx)(v.li,{children:(0,_.jsx)(v.a,{href:`#menusub`,children:`Menu.Sub`})}),`
`,(0,_.jsx)(v.li,{children:(0,_.jsx)(v.a,{href:`#menugroup`,children:`Menu.Group`})}),`
`,(0,_.jsx)(v.li,{children:(0,_.jsx)(v.a,{href:`#menugrouplabel`,children:`Menu.GroupLabel`})}),`
`,(0,_.jsx)(v.li,{children:(0,_.jsx)(v.a,{href:`#menusecondaryaction`,children:`Menu.SecondaryAction`})}),`
`,(0,_.jsx)(v.li,{children:(0,_.jsx)(v.a,{href:`#menudivider`,children:`Menu.Divider`})}),`
`,(0,_.jsx)(v.li,{children:(0,_.jsx)(v.a,{href:`#menuskeleton`,children:`Menu.Skeleton`})}),`
`,(0,_.jsx)(v.li,{children:(0,_.jsx)(v.a,{href:`#menusplit`,children:`Menu.Split`})}),`
`,(0,_.jsx)(v.li,{children:(0,_.jsx)(v.a,{href:`#menucontent`,children:`Menu.Content`})}),`
`,(0,_.jsx)(v.li,{children:(0,_.jsx)(v.a,{href:`#controlled`,children:`Controlled`})}),`
`]}),`
`]}),`
`,(0,_.jsx)(v.li,{children:(0,_.jsx)(v.a,{href:`#accessibility`,children:`Accessibility`})}),`
`,(0,_.jsx)(v.li,{children:(0,_.jsx)(v.a,{href:`#breaking-changes`,children:`Breaking Changes`})}),`
`]}),`
`,(0,_.jsx)(v.hr,{}),`
`,(0,_.jsx)(v.h2,{id:`usage`,children:`Usage`}),`
`,(0,_.jsx)(v.pre,{children:(0,_.jsx)(v.code,{className:`language-jsx`,children:`import { Menu } from "@qlik/sprout-react";

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
`,(0,_.jsx)(v.h2,{id:`properties`,children:`Properties`}),`
`,(0,_.jsx)(v.h3,{id:`menutrigger`,children:`Menu.Trigger`}),`
`,(0,_.jsx)(n,{of:g}),`
`,(0,_.jsx)(t,{of:g}),`
`,(0,_.jsx)(v.h3,{id:`menucontextual`,children:`Menu.Contextual`}),`
`,(0,_.jsx)(n,{of:c}),`
`,(0,_.jsx)(t,{of:c}),`
`,(0,_.jsx)(v.h3,{id:`menuitem`,children:`Menu.Item`}),`
`,(0,_.jsx)(n,{of:d}),`
`,(0,_.jsx)(t,{of:d}),`
`,(0,_.jsx)(v.h3,{id:`menusub`,children:`Menu.Sub`}),`
`,(0,_.jsx)(n,{of:h}),`
`,(0,_.jsx)(t,{of:h}),`
`,(0,_.jsx)(v.h3,{id:`menugroup`,children:`Menu.Group`}),`
`,(0,_.jsx)(n,{of:l}),`
`,(0,_.jsx)(t,{of:l}),`
`,(0,_.jsx)(v.h3,{id:`menugrouplabel`,children:`Menu.GroupLabel`}),`
`,(0,_.jsx)(n,{of:u}),`
`,(0,_.jsx)(t,{of:u}),`
`,(0,_.jsx)(v.h3,{id:`menusecondaryaction`,children:`Menu.SecondaryAction`}),`
`,(0,_.jsx)(n,{of:f}),`
`,(0,_.jsx)(t,{of:f}),`
`,(0,_.jsx)(v.h3,{id:`menudivider`,children:`Menu.Divider`}),`
`,(0,_.jsxs)(v.blockquote,{children:[`
`,(0,_.jsx)(v.p,{children:`No properties`}),`
`]}),`
`,(0,_.jsx)(v.h3,{id:`menuskeleton`,children:`Menu.Skeleton`}),`
`,(0,_.jsx)(n,{of:p}),`
`,(0,_.jsxs)(v.blockquote,{children:[`
`,(0,_.jsx)(v.p,{children:`No properties`}),`
`]}),`
`,(0,_.jsx)(v.h3,{id:`menusplit`,children:`Menu.Split`}),`
`,(0,_.jsx)(n,{of:m}),`
`,(0,_.jsx)(t,{of:m}),`
`,(0,_.jsx)(v.h3,{id:`menucontent`,children:`Menu.Content`}),`
`,(0,_.jsx)(n,{of:s}),`
`,(0,_.jsx)(t,{of:s}),`
`,(0,_.jsx)(v.h4,{id:`controlled`,children:`Controlled`}),`
`,(0,_.jsxs)(v.p,{children:[(0,_.jsx)(v.code,{children:`Menu.Trigger`}),` support the control of opening / closing the menu by using the following props:`]}),`
`,(0,_.jsxs)(v.ul,{children:[`
`,(0,_.jsxs)(v.li,{children:[(0,_.jsx)(v.code,{children:`defaultOpen`}),`: boolean (only for initial state)`]}),`
`,(0,_.jsxs)(v.li,{children:[(0,_.jsx)(v.code,{children:`open`}),`: boolean (controlled state)`]}),`
`,(0,_.jsxs)(v.li,{children:[(0,_.jsx)(v.code,{children:`onOpenChange`}),`: function (callback for controlled state) with onChange(open: boolean).`]}),`
`]}),`
`,(0,_.jsx)(v.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsx)(v.p,{children:(0,_.jsx)(v.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/menubar/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Menu bar`})}),`
`,(0,_.jsx)(v.p,{children:`HTML structure`}),`
`,(0,_.jsxs)(v.ul,{children:[`
`,(0,_.jsxs)(v.li,{children:[`Menu.Trigger use a `,(0,_.jsx)(v.code,{children:`button`}),` to trigger the visibility of the menu and have the following attributes:`,`
`,(0,_.jsxs)(v.ul,{children:[`
`,(0,_.jsx)(v.li,{children:(0,_.jsx)(v.code,{children:`aria-haspopup="menu"`})}),`
`,(0,_.jsx)(v.li,{children:(0,_.jsx)(v.code,{children:`aria-expanded="true|false"`})}),`
`,(0,_.jsxs)(v.li,{children:[(0,_.jsx)(v.code,{children:`aria-controls`}),` pointing to the menu id`]}),`
`]}),`
`]}),`
`,(0,_.jsxs)(v.li,{children:[`Menu.Container receive the following attributes`,`
`,(0,_.jsxs)(v.ul,{children:[`
`,(0,_.jsx)(v.li,{children:(0,_.jsx)(v.code,{children:`role="menu"`})}),`
`,(0,_.jsxs)(v.li,{children:[(0,_.jsx)(v.code,{children:`aria-labelledby`}),` pointing to the trigger id`]}),`
`,(0,_.jsx)(v.li,{children:(0,_.jsx)(v.code,{children:`aria-orientation="vertical"`})}),`
`]}),`
`]}),`
`,(0,_.jsxs)(v.li,{children:[`Menu.Group is a `,(0,_.jsx)(v.code,{children:`div`}),` with `,(0,_.jsx)(v.code,{children:`role="group"`}),`
`,(0,_.jsxs)(v.ul,{children:[`
`,(0,_.jsx)(v.li,{children:`FIXME: should it has aria-labelledby ?`}),`
`]}),`
`]}),`
`,(0,_.jsxs)(v.li,{children:[`Menu.Item is a `,(0,_.jsx)(v.code,{children:`button`}),` with `,(0,_.jsx)(v.code,{children:`role="menuitem"`}),`
`,(0,_.jsxs)(v.ul,{children:[`
`,(0,_.jsxs)(v.li,{children:[`if `,(0,_.jsx)(v.code,{children:`selectable`}),` is true `,(0,_.jsx)(v.code,{children:`role`}),` becomes `,(0,_.jsx)(v.code,{children:`menuitemcheckbox`}),` and `,(0,_.jsx)(v.code,{children:`aria-checked="false"`})]}),`
`,(0,_.jsxs)(v.li,{children:[`if `,(0,_.jsx)(v.code,{children:`selected`}),` and `,(0,_.jsx)(v.code,{children:`selectable`}),` is true `,(0,_.jsx)(v.code,{children:`aria-checked="true"`})]}),`
`,(0,_.jsxs)(v.li,{children:[`no `,(0,_.jsx)(v.code,{children:`aria-checked`}),` attribute otherwise`]}),`
`]}),`
`]}),`
`]}),`
`,(0,_.jsx)(v.p,{children:`Keyboard navigation`}),`
`,(0,_.jsxs)(v.ul,{children:[`
`,(0,_.jsx)(v.li,{children:`The first element in the menu receive the focus when the menu is opened.`}),`
`,(0,_.jsxs)(v.li,{children:[(0,_.jsx)(v.code,{children:`ArrowDown`}),` and `,(0,_.jsx)(v.code,{children:`ArrowUp`}),` navigate between all not disabled `,(0,_.jsx)(v.code,{children:`menuitem`}),` elements.`]}),`
`,(0,_.jsxs)(v.li,{children:[(0,_.jsx)(v.code,{children:`Home`}),` and `,(0,_.jsx)(v.code,{children:`End`}),` navigate to the first and last not disabled `,(0,_.jsx)(v.code,{children:`menuitem`}),` elements.`]}),`
`,(0,_.jsxs)(v.li,{children:[(0,_.jsx)(v.code,{children:`Space`}),` and `,(0,_.jsx)(v.code,{children:`Enter`}),` trigger click event on the focused `,(0,_.jsx)(v.code,{children:`menuitem`}),` element.`]}),`
`,(0,_.jsxs)(v.li,{children:[(0,_.jsx)(v.code,{children:`ArrowRight`}),` open the menu if the focused `,(0,_.jsx)(v.code,{children:`menuitem`}),` element has a submenu using the `,(0,_.jsx)(v.code,{children:`aria-haspopup="menu"`}),` attribute.`]}),`
`,(0,_.jsxs)(v.li,{children:[(0,_.jsx)(v.code,{children:`ArrowLeft`}),` close the menu and move the focus ont the parent menu's `,(0,_.jsx)(v.code,{children:`menuitem`}),` element.`]}),`
`]}),`
`,(0,_.jsx)(v.h2,{id:`breaking-changes`,children:`Breaking Changes`}),`
`,(0,_.jsx)(v.p,{children:`In the discussion of API we have decided to go with a composition and renderer approach.`}),`
`,(0,_.jsx)(v.pre,{children:(0,_.jsx)(v.code,{className:`language-diff`,children:`- import { ContextMenu, MenuTrigger, MenuItem, Menu, MenuDivider, MenuGroupLabel } from "@qlik/sprout-react";
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
`})})]})}function y(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(v,{...e})}):v(e)}export{y as default};