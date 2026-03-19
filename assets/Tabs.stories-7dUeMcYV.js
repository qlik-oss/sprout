import{i as e,n as t}from"./chunk-DseTPa7n.js";import{t as n}from"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as r}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t as i}from"./Tabs-C3NqNw9o.js";import{J as a,Kt as o,Xt as s,Zt as c,bt as l,cn as u,et as d,hn as f,ln as p,wt as m}from"./iframe-DTk7xy32.js";import{n as h,t as g}from"./Icons-DrVGfMuG.js";var _=e(n()),v={defaultActiveKey:{control:{type:`text`},description:`The default active tab key. Only for uncontrolled usage.`,table:{type:{summary:`string`}}},activeKey:{control:{type:`select`},options:[void 0,`assets-panel`,`settings-panel`,`users-panel`],description:"The active tab key. Use with `onSelect` for controlled usage.",table:{type:{summary:`string`}}},onSelect:{control:!1,description:"Callback fired when a tab is selected. Use with `activeKey` for controlled usage.",table:{type:{summary:`(event: any, key: string) => void`}}},size:{control:{type:`select`},options:[`s`,`m`],description:"The size of the tabs. Can be `s` or `m`. Default is `m`.",table:{type:{summary:`'s' | 'm'`},defaultValue:{summary:`m`}}},height:{control:{type:`select`},options:[`100%`,void 0],description:`Set the height of the tabs container to 100%.`,table:{type:{summary:`'100%' | undefined`}}},tabs:{control:!1,description:"Array of tab items. Each item should have `title`, `panel`, `aria-controls` and optionally `icon`, `badge`, and `disabled`. See `Tabs.Tab`.",table:{type:{summary:`TabItemPropTypes[]`}}},showTrack:{control:{type:`boolean`},description:`Whether to show the track under the selected tab.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},y={children:{control:!1,description:"**Tabs.Container**: should contain `Tabs.List` and `Tabs.Panel` components. <br/><br/> **Tabs.List**: should contain `Tabs.Tab` components. <br/><br/> **Tabs.Panel**: should contain the content for each tab.",table:{type:{summary:`ReactNode`}}},defaultActiveKey:{control:{type:`select`},options:[void 0,`Assets`,`Settings`,`Focusable`,`Users`],description:`The default active tab key. Only for uncontrolled usage.`,table:{type:{summary:`string`},subcategory:`Tabs.Container`}},activeKey:{control:{type:`select`},options:[void 0,`Assets`,`Settings`,`Focusable`,`Users`],description:"The active tab key. Use with `onSelect` for controlled usage.",table:{type:{summary:`string`},subcategory:`Tabs.Container`}},onSelect:{control:!1,description:"Callback fired when a tab is selected. Use with `activeKey` for controlled usage.",table:{type:{summary:`(event: any, key: string) => void`},subcategory:`Tabs.Container`}},size:{control:{type:`select`},options:[`s`,`m`],description:"The size of the tabs. Can be `s` or `m`. Default is `m`.",table:{type:{summary:`'s' | 'm'`},defaultValue:{summary:`m`},subcategory:`Tabs.Container`}},height:{control:{type:`select`},options:[`100%`,void 0],description:`Set the height of the tabs container to 100%.`,table:{type:{summary:`'100%' | undefined`},subcategory:`Tabs.Container`}},showTrack:{control:{type:`boolean`},description:`Whether to show the track under the selected tab.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},subcategory:`Tabs.List`}},"aria-controls":{control:{type:`text`},description:"The id of the associated `Tab.Panel`. Used for accessibility.",table:{type:{summary:`string`},subcategory:`Tabs.Tab`}},title:{control:{type:`text`},description:`The title of the tab.`,table:{type:{summary:`string`},subcategory:`Tabs.Tab`}},badge:{control:!1,description:`Optional badge to display next to the title. See [Badge](./?path=/docs/components-badge--docs) for details.`,table:{type:{summary:`ReactNode`},subcategory:`Tabs.Tab`}},disabled:{control:{type:`boolean`},description:`Whether the tab is disabled.`,table:{type:{summary:`boolean`},subcategory:`Tabs.Tab`}},icon:{control:`select`,options:h,mapping:g,description:`Optional icon to display next to the title.`,table:{type:{summary:`ReactNode`},subcategory:`Tabs.Tab`}},useIconButton:{control:{type:`boolean`},description:`If true, Tab will only show the icon with no label.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},subcategory:`Tabs.Tab`}},id:{control:{type:`text`},description:"The id of the tab panel. Should match the `aria-controls` of the associated `Tab`.",table:{type:{summary:`string`},subcategory:`Tabs.Panel`}},renderIf:{control:{type:`boolean`},description:`Whether the panel should unmount when hidden. If false, the panel remains in the DOM but hidden.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},subcategory:`Tabs.Panel`}}},b=t({ControlledWithTabsProp:()=>j,Height:()=>O,TabsWithoutPanel:()=>D,Uncontrolled:()=>E,UncontrolledWithTabsProp:()=>A,VisualTests:()=>M,__namedExportsOrder:()=>N,default:()=>C}),x=r(),{fn:S}=__STORYBOOK_MODULE_TEST__,C={title:`Components/Tabs`,component:i},w={chromatic:{disableSnapshot:!0}};function T({children:e}){return(0,x.jsx)(`p`,{className:f(`font-body-s`,`text-default`),children:e})}var E={render:e=>{let{defaultActiveKey:t,activeKey:n,size:r,height:o,onSelect:c,showTrack:u,title:d,icon:m,useIconButton:h}=e;return(0,x.jsx)(`div`,{className:f(`flex`,`flex-col`,`p-s`,`gap-s`,`w-fit`),"data-testid":`wrapper`,children:(0,x.jsxs)(i.Container,{defaultActiveKey:t,activeKey:n,size:r,height:o,onSelect:c,children:[(0,x.jsxs)(i.List,{showTrack:u,children:[(0,x.jsx)(i.Tab,{"aria-controls":`Assets`,title:d||`Assets`,icon:m||(0,x.jsx)(s,{}),useIconButton:h}),(0,x.jsx)(i.Tab,{"aria-controls":`Settings`,title:`Settings`,icon:(0,x.jsx)(l,{}),useIconButton:h}),(0,x.jsx)(i.Tab,{"aria-controls":`Focusable`,title:`Focusable`,useIconButton:h}),(0,x.jsx)(i.Tab,{"aria-controls":`Users`,title:`Users`,icon:(0,x.jsx)(p,{}),disabled:!0,useIconButton:h})]}),(0,x.jsx)(i.Panel,{id:`Assets`,children:(0,x.jsx)(T,{children:`Tab content for Assets`})}),(0,x.jsx)(i.Panel,{id:`Settings`,children:(0,x.jsx)(T,{children:`Tab content for Settings`})}),(0,x.jsxs)(i.Panel,{id:`Focusable`,children:[(0,x.jsx)(T,{children:`This panel content has some focusable elements so the focus should move directly to it if you use keyboard navigation.`}),(0,x.jsx)(a,{label:`Focusable button`})]}),(0,x.jsx)(i.Panel,{id:`Users`,children:`Tab content for Users`})]})})},args:{defaultActiveKey:`Assets`,onSelect:S(),showTrack:!0,title:`Assets`},argTypes:y,parameters:w},D={render:function(){let[e,t]=(0,_.useState)(`Assets`);return(0,x.jsxs)(`div`,{className:f(`flex`,`flex-col`,`p-s`,`gap-s`),"data-testid":`wrapper`,children:[(0,x.jsx)(i.Container,{activeKey:e,onSelect:(e,n)=>{t(n)},children:(0,x.jsxs)(i.List,{showTrack:!0,children:[(0,x.jsx)(i.Tab,{"aria-controls":`Assets`,title:`Assets`,icon:(0,x.jsx)(p,{})}),(0,x.jsx)(i.Tab,{"aria-controls":`Settings`,title:`Settings`,icon:(0,x.jsx)(u,{})}),(0,x.jsx)(i.Tab,{"aria-controls":`Users`,title:`Users`,icon:(0,x.jsx)(m,{})})]})}),(0,x.jsxs)(`div`,{className:f(`p-m`),id:e,role:`tabpanel`,children:[(0,x.jsxs)(T,{children:[`Current active tab: `,(0,x.jsx)(`strong`,{children:e})]}),(0,x.jsx)(T,{children:`This demonstrates a controlled Tabs component without Panels - the tab state is managed externally and can be used to control other parts of your UI.`})]})]})},parameters:{...w}},O={render:e=>{let{defaultActiveKey:t,activeKey:n,size:r,height:o,onSelect:c,showTrack:u,title:d,icon:p,useIconButton:h}=e;return(0,x.jsx)(`div`,{className:f(`flex`,`flex-col`,`p-s`,`gap-s`,`w-fit`),style:{blockSize:`500px`},"data-testid":`wrapper`,children:(0,x.jsxs)(i.Container,{defaultActiveKey:t,activeKey:n,size:r,height:o,onSelect:c,children:[(0,x.jsxs)(i.List,{showTrack:u,children:[(0,x.jsx)(i.Tab,{"aria-controls":`Assets`,title:d||`Assets`,icon:p||(0,x.jsx)(s,{}),useIconButton:h}),(0,x.jsx)(i.Tab,{"aria-controls":`Settings`,title:`Settings`,icon:(0,x.jsx)(l,{}),useIconButton:h}),(0,x.jsx)(i.Tab,{"aria-controls":`Focusable`,title:`Focusable`,useIconButton:h}),(0,x.jsx)(i.Tab,{"aria-controls":`Users`,title:`Users`,icon:(0,x.jsx)(m,{}),disabled:!0,useIconButton:h})]}),(0,x.jsx)(i.Panel,{id:`Assets`,children:Array.from({length:50},(e,t)=>(0,x.jsxs)(T,{children:[`Assets - Item `,t+1]},t))}),(0,x.jsx)(i.Panel,{id:`Settings`,children:Array.from({length:50},(e,t)=>(0,x.jsxs)(T,{children:[`Settings- Item `,t+1]},t))}),(0,x.jsxs)(i.Panel,{id:`Focusable`,children:[Array.from({length:50},(e,t)=>(0,x.jsxs)(T,{children:[`Focusable - Item `,t+1]},t)),(0,x.jsx)(a,{label:`Focusable button`})]}),(0,x.jsx)(i.Panel,{id:`Users`,children:Array.from({length:50},(e,t)=>(0,x.jsxs)(T,{children:[`Focusable - Item `,t+1]},t))})]})})},args:{defaultActiveKey:`Assets`,onSelect:S(),showTrack:!0,title:`Assets`,height:`100%`},argTypes:y},k=[{title:`Assets`,"aria-controls":`assets-panel`,icon:(0,x.jsx)(s,{}),badge:(0,x.jsx)(d,{text:`3`,color:`warning`,variant:`alphanumeric`}),panel:(0,x.jsx)(`div`,{className:f(`font-body-s`,`text-default`),children:`Tab 1 content`})},{title:`Settings`,"aria-controls":`settings-panel`,icon:(0,x.jsx)(l,{}),panel:(0,x.jsx)(`div`,{className:f(`font-body-s`,`text-default`),children:`Tab 2 content`})},{title:`Users`,"aria-controls":`users-panel`,icon:(0,x.jsx)(m,{}),panel:(0,x.jsx)(`div`,{className:f(`font-body-s`,`text-default`),children:`Tab 3 content`})}],A={render:({showTrack:e})=>(0,x.jsx)(`div`,{className:f(`flex`,`flex-col`,`p-s`,`gap-s`,`w-fit`),"data-testid":`wrapper`,children:(0,x.jsx)(i,{showTrack:e,tabs:k})}),args:{showTrack:!1},argTypes:v,parameters:w},j={render:e=>(0,x.jsx)(`div`,{className:f(`flex`,`flex-col`,`p-s`,`gap-s`,`w-fit`),"data-testid":`wrapper`,children:(0,x.jsx)(i,{...e,tabs:k})}),args:{showTrack:!1,activeKey:`assets-panel`,onSelect:S()},argTypes:v,parameters:w},M={render:()=>(0,x.jsxs)(`div`,{className:f(`flex`,`flex-col`,`p-s`,`gap-s`,`w-fit`),"data-testid":`wrapper`,children:[(0,x.jsxs)(i.Container,{defaultActiveKey:`Active`,children:[(0,x.jsxs)(i.List,{showTrack:!0,children:[(0,x.jsx)(i.Tab,{"aria-controls":`Active`,title:`ActiveTab`,icon:(0,x.jsx)(c,{}),badge:(0,x.jsx)(d,{variant:`alphanumeric`,color:`warning`,text:`3`})}),(0,x.jsx)(i.Tab,{"aria-controls":`Enabled`,title:`EnabledTab`,icon:(0,x.jsx)(s,{})}),(0,x.jsx)(i.Tab,{"aria-controls":`Hovered`,title:`HoveredTab`,"data-testid":`hover`}),(0,x.jsx)(i.Tab,{"aria-controls":`Focused`,title:`FocusedTab`,"data-testid":`focus`}),(0,x.jsx)(i.Tab,{"aria-controls":`DisabledTab`,title:`DisabledTab`,icon:(0,x.jsx)(o,{}),disabled:!0})]}),(0,x.jsx)(i.Panel,{id:`Active`,children:(0,x.jsx)(T,{children:`content`})}),(0,x.jsx)(i.Panel,{id:`Enabled`,children:(0,x.jsx)(T,{children:`content`})}),(0,x.jsx)(i.Panel,{id:`Hovered`,children:(0,x.jsx)(T,{children:`content`})}),(0,x.jsx)(i.Panel,{id:`Focused`,children:(0,x.jsx)(T,{children:`content`})}),(0,x.jsx)(i.Panel,{id:`Users`,children:(0,x.jsx)(T,{children:`content`})})]}),(0,x.jsxs)(i.Container,{defaultActiveKey:`Small Active`,size:`s`,children:[(0,x.jsxs)(i.List,{showTrack:!0,children:[(0,x.jsx)(i.Tab,{"aria-controls":`Small Active`,title:`Small ActiveTab`,icon:(0,x.jsx)(c,{}),badge:(0,x.jsx)(d,{variant:`alphanumeric`,color:`warning`,text:`3`})}),(0,x.jsx)(i.Tab,{"aria-controls":`Small Enabled`,title:`Small EnabledTab`,icon:(0,x.jsx)(s,{})}),(0,x.jsx)(i.Tab,{"aria-controls":`Small Hovered`,title:`Small HoveredTab`,"data-testid":`hover`}),(0,x.jsx)(i.Tab,{"aria-controls":`Small Focused`,title:`Small FocusedTab`,"data-testid":`focus`}),(0,x.jsx)(i.Tab,{"aria-controls":`Small DisabledTab`,title:`Small DisabledTab`,icon:(0,x.jsx)(o,{}),disabled:!0})]}),(0,x.jsx)(i.Panel,{id:`Small Active`,children:(0,x.jsx)(T,{children:`content`})}),(0,x.jsx)(i.Panel,{id:`Small Enabled`,children:(0,x.jsx)(T,{children:`content`})}),(0,x.jsx)(i.Panel,{id:`Small Hovered`,children:(0,x.jsx)(T,{children:`content`})}),(0,x.jsx)(i.Panel,{id:`Small Focused`,children:(0,x.jsx)(T,{children:`content`})}),(0,x.jsx)(i.Panel,{id:`Small DisabledTab`,children:(0,x.jsx)(T,{children:`content`})})]}),(0,x.jsx)(i,{showTrack:!0,tabs:k})]}),parameters:{controls:{disable:!0},pseudo:{hover:`[data-testid="hover"]`,focusVisible:`[data-testid="focus"]`}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: props => {
    const {
      defaultActiveKey,
      activeKey,
      size,
      height,
      onSelect,
      showTrack,
      title,
      icon,
      useIconButton
    } = props;
    return <div className={classNames("flex", "flex-col", "p-s", "gap-s", "w-fit")} data-testid="wrapper">
        <Tabs.Container defaultActiveKey={defaultActiveKey} activeKey={activeKey} size={size} height={height} onSelect={onSelect}>
          <Tabs.List showTrack={showTrack}>
            <Tabs.Tab aria-controls="Assets" title={title || "Assets"} icon={icon || <DocumentationIcon />} useIconButton={useIconButton} />
            <Tabs.Tab aria-controls="Settings" title="Settings" icon={<SettingsIcon />} useIconButton={useIconButton} />
            <Tabs.Tab aria-controls="Focusable" title="Focusable" useIconButton={useIconButton} />
            <Tabs.Tab aria-controls="Users" title="Users" icon={<BookmarkIcon />} disabled useIconButton={useIconButton} />
          </Tabs.List>
          <Tabs.Panel id="Assets">
            <P>Tab content for Assets</P>
          </Tabs.Panel>
          <Tabs.Panel id="Settings">
            <P>Tab content for Settings</P>
          </Tabs.Panel>
          <Tabs.Panel id="Focusable">
            <P>
              This panel content has some focusable elements so the focus should
              move directly to it if you use keyboard navigation.
            </P>
            <Button label="Focusable button" />
          </Tabs.Panel>
          <Tabs.Panel id="Users">Tab content for Users</Tabs.Panel>
        </Tabs.Container>
      </div>;
  },
  args: {
    defaultActiveKey: "Assets",
    onSelect: fn(),
    showTrack: true,
    title: "Assets"
  },
  argTypes: TabsCompositionArgTypes,
  parameters: disableSnap
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function TabsWithoutPanel() {
    const [activeTab, setActiveTab] = useState("Assets");
    return <div className={classNames("flex", "flex-col", "p-s", "gap-s")} data-testid="wrapper">
        <Tabs.Container activeKey={activeTab} onSelect={(_event, key) => {
        setActiveTab(key);
      }}>
          <Tabs.List showTrack>
            <Tabs.Tab aria-controls="Assets" title="Assets" icon={<BookmarkIcon />} />
            <Tabs.Tab aria-controls="Settings" title="Settings" icon={<BookmarkedIcon />} />
            <Tabs.Tab aria-controls="Users" title="Users" icon={<PersonIcon />} />
          </Tabs.List>
        </Tabs.Container>

        <div className={classNames("p-m")} id={activeTab} role="tabpanel">
          <P>
            Current active tab: <strong>{activeTab}</strong>
          </P>
          <P>
            This demonstrates a controlled Tabs component without Panels - the
            tab state is managed externally and can be used to control other
            parts of your UI.
          </P>
        </div>
      </div>;
  },
  parameters: {
    ...disableSnap
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: props => {
    const {
      defaultActiveKey,
      activeKey,
      size,
      height,
      onSelect,
      showTrack,
      title,
      icon,
      useIconButton
    } = props;
    return <div className={classNames("flex", "flex-col", "p-s", "gap-s", "w-fit")} style={{
      blockSize: "500px"
    }} data-testid="wrapper">
        <Tabs.Container defaultActiveKey={defaultActiveKey} activeKey={activeKey} size={size} height={height} onSelect={onSelect}>
          <Tabs.List showTrack={showTrack}>
            <Tabs.Tab aria-controls="Assets" title={title || "Assets"} icon={icon || <DocumentationIcon />} useIconButton={useIconButton} />
            <Tabs.Tab aria-controls="Settings" title="Settings" icon={<SettingsIcon />} useIconButton={useIconButton} />
            <Tabs.Tab aria-controls="Focusable" title="Focusable" useIconButton={useIconButton} />
            <Tabs.Tab aria-controls="Users" title="Users" icon={<PersonIcon />} disabled useIconButton={useIconButton} />
          </Tabs.List>
          <Tabs.Panel id="Assets">
            {Array.from({
            length: 50
          }, (_, i) => <P key={i}>Assets - Item {i + 1}</P>)}
          </Tabs.Panel>
          <Tabs.Panel id="Settings">
            {Array.from({
            length: 50
          }, (_, i) => <P key={i}>Settings- Item {i + 1}</P>)}
          </Tabs.Panel>
          <Tabs.Panel id="Focusable">
            {Array.from({
            length: 50
          }, (_, i) => <P key={i}>Focusable - Item {i + 1}</P>)}
            <Button label="Focusable button" />
          </Tabs.Panel>
          <Tabs.Panel id="Users">
            {Array.from({
            length: 50
          }, (_, i) => <P key={i}>Focusable - Item {i + 1}</P>)}
          </Tabs.Panel>
        </Tabs.Container>
      </div>;
  },
  args: {
    defaultActiveKey: "Assets",
    onSelect: fn(),
    showTrack: true,
    title: "Assets",
    height: "100%"
  },
  argTypes: TabsCompositionArgTypes
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: ({
    showTrack
  }) => <div className={classNames("flex", "flex-col", "p-s", "gap-s", "w-fit")} data-testid="wrapper">
      <Tabs showTrack={showTrack} tabs={TABS} />
    </div>,
  args: {
    showTrack: false
  },
  argTypes: TabsArgTypes,
  parameters: disableSnap
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("flex", "flex-col", "p-s", "gap-s", "w-fit")} data-testid="wrapper">
      <Tabs {...props} tabs={TABS} />
    </div>,
  args: {
    showTrack: false,
    activeKey: "assets-panel",
    onSelect: fn()
  },
  argTypes: TabsArgTypes,
  parameters: disableSnap
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "p-s", "gap-s", "w-fit")} data-testid="wrapper">
      <Tabs.Container defaultActiveKey="Active">
        <Tabs.List showTrack>
          <Tabs.Tab aria-controls="Active" title="ActiveTab" icon={<DeleteIcon />} badge={<Badge variant="alphanumeric" color="warning" text="3" />} />
          <Tabs.Tab aria-controls="Enabled" title="EnabledTab" icon={<DocumentationIcon />} />
          <Tabs.Tab aria-controls="Hovered" title="HoveredTab" data-testid="hover" />
          <Tabs.Tab aria-controls="Focused" title="FocusedTab" data-testid="focus" />
          <Tabs.Tab aria-controls="DisabledTab" title="DisabledTab" icon={<FavoritedIcon />} disabled />
        </Tabs.List>
        <Tabs.Panel id="Active">
          <P>content</P>
        </Tabs.Panel>
        <Tabs.Panel id="Enabled">
          <P>content</P>
        </Tabs.Panel>
        <Tabs.Panel id="Hovered">
          <P>content</P>
        </Tabs.Panel>
        <Tabs.Panel id="Focused">
          <P>content</P>
        </Tabs.Panel>
        <Tabs.Panel id="Users">
          <P>content</P>
        </Tabs.Panel>
      </Tabs.Container>

      <Tabs.Container defaultActiveKey="Small Active" size="s">
        <Tabs.List showTrack>
          <Tabs.Tab aria-controls="Small Active" title="Small ActiveTab" icon={<DeleteIcon />} badge={<Badge variant="alphanumeric" color="warning" text="3" />} />
          <Tabs.Tab aria-controls="Small Enabled" title="Small EnabledTab" icon={<DocumentationIcon />} />
          <Tabs.Tab aria-controls="Small Hovered" title="Small HoveredTab" data-testid="hover" />
          <Tabs.Tab aria-controls="Small Focused" title="Small FocusedTab" data-testid="focus" />
          <Tabs.Tab aria-controls="Small DisabledTab" title="Small DisabledTab" icon={<FavoritedIcon />} disabled />
        </Tabs.List>
        <Tabs.Panel id="Small Active">
          <P>content</P>
        </Tabs.Panel>
        <Tabs.Panel id="Small Enabled">
          <P>content</P>
        </Tabs.Panel>
        <Tabs.Panel id="Small Hovered">
          <P>content</P>
        </Tabs.Panel>
        <Tabs.Panel id="Small Focused">
          <P>content</P>
        </Tabs.Panel>
        <Tabs.Panel id="Small DisabledTab">
          <P>content</P>
        </Tabs.Panel>
      </Tabs.Container>

      <Tabs showTrack tabs={TABS} />
    </div>,
  parameters: {
    controls: {
      disable: true
    },
    pseudo: {
      hover: '[data-testid="hover"]',
      focusVisible: '[data-testid="focus"]'
    }
  }
}`,...M.parameters?.docs?.source}}};var N=[`Uncontrolled`,`TabsWithoutPanel`,`Height`,`UncontrolledWithTabsProp`,`ControlledWithTabsProp`,`VisualTests`];export{j as ControlledWithTabsProp,O as Height,D as TabsWithoutPanel,E as Uncontrolled,A as UncontrolledWithTabsProp,M as VisualTests,N as __namedExportsOrder,C as default,b as t};