import{a as e,n as t,r as n}from"./chunk-BneVvdWh.js";import{An as r,Dt as i,E as a,Fn as o,Gt as s,Pn as c,Yt as l,hn as u,jt as d,kn as f,nr as p,v as m,vn as h,wt as g,yn as _}from"./iframe-RiXBydPV.js";import{n as v,r as y,t as b}from"./Icons-C4p2uBG3.js";var x,S,C=t((()=>{y(),x={defaultActiveKey:{control:{type:`text`},description:`The default active tab key. Only for uncontrolled usage.`,table:{type:{summary:`string`}}},activeKey:{control:{type:`select`},options:[void 0,`assets-panel`,`settings-panel`,`users-panel`],description:"The active tab key. Use with `onSelect` for controlled usage.",table:{type:{summary:`string`}}},onSelect:{control:!1,description:"Callback fired when a tab is selected. Use with `activeKey` for controlled usage.",table:{type:{summary:`(event: any, key: string) => void`}}},size:{control:{type:`select`},options:[`s`,`m`],description:"The size of the tabs. Can be `s` or `m`. Default is `m`.",table:{type:{summary:`'s' | 'm'`},defaultValue:{summary:`m`}}},height:{control:{type:`select`},options:[`100%`,void 0],description:`Set the height of the tabs container to 100%.`,table:{type:{summary:`'100%' | undefined`}}},tabs:{control:!1,description:"Array of tab items. Each item should have `title`, `panel`, `aria-controls` and optionally `icon`, `badge`, and `disabled`. See `Tabs.Tab`.",table:{type:{summary:`TabItemPropTypes[]`}}},showTrack:{control:{type:`boolean`},description:`Whether to show the track under the selected tab.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},S={children:{control:!1,description:"**Tabs.Container**: should contain `Tabs.List` and `Tabs.Panel` components. <br/><br/> **Tabs.List**: should contain `Tabs.Tab` components. <br/><br/> **Tabs.Panel**: should contain the content for each tab.",table:{type:{summary:`ReactNode`}}},defaultActiveKey:{control:{type:`select`},options:[void 0,`Assets`,`Settings`,`Focusable`,`Users`],description:`The default active tab key. Only for uncontrolled usage.`,table:{type:{summary:`string`},subcategory:`Tabs.Container`}},activeKey:{control:{type:`select`},options:[void 0,`Assets`,`Settings`,`Focusable`,`Users`],description:"The active tab key. Use with `onSelect` for controlled usage.",table:{type:{summary:`string`},subcategory:`Tabs.Container`}},onSelect:{control:!1,description:"Callback fired when a tab is selected. Use with `activeKey` for controlled usage.",table:{type:{summary:`(event: any, key: string) => void`},subcategory:`Tabs.Container`}},size:{control:{type:`select`},options:[`s`,`m`],description:"The size of the tabs. Can be `s` or `m`. Default is `m`.",table:{type:{summary:`'s' | 'm'`},defaultValue:{summary:`m`},subcategory:`Tabs.Container`}},height:{control:{type:`select`},options:[`100%`,void 0],description:`Set the height of the tabs container to 100%.`,table:{type:{summary:`'100%' | undefined`},subcategory:`Tabs.Container`}},showTrack:{control:{type:`boolean`},description:`Whether to show the track under the selected tab.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},subcategory:`Tabs.List`}},"aria-controls":{control:{type:`text`},description:"The id of the associated `Tab.Panel`. Used for accessibility.",table:{type:{summary:`string`},subcategory:`Tabs.Tab`}},title:{control:{type:`text`},description:`The title of the tab.`,table:{type:{summary:`string`},subcategory:`Tabs.Tab`}},badge:{control:!1,description:`Optional badge to display next to the title. See [Badge](./?path=/docs/components-badge--docs) for details.`,table:{type:{summary:`ReactNode`},subcategory:`Tabs.Tab`}},disabled:{control:{type:`boolean`},description:`Whether the tab is disabled.`,table:{type:{summary:`boolean`},subcategory:`Tabs.Tab`}},icon:{control:`select`,options:v,mapping:b,description:`Optional icon to display next to the title.`,table:{type:{summary:`ReactNode`},subcategory:`Tabs.Tab`}},useIconButton:{control:{type:`boolean`},description:`If true, Tab will only show the icon with no label.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},subcategory:`Tabs.Tab`}},id:{control:{type:`text`},description:"The id of the tab panel. Should match the `aria-controls` of the associated `Tab`.",table:{type:{summary:`string`},subcategory:`Tabs.Panel`}},renderIf:{control:{type:`boolean`},description:`Whether the panel should unmount when hidden. If false, the panel remains in the DOM but hidden.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},subcategory:`Tabs.Panel`}}}})),w=n({ControlledWithTabsProp:()=>I,Height:()=>N,TabsWithoutPanel:()=>M,Uncontrolled:()=>j,UncontrolledWithTabsProp:()=>F,VisualTests:()=>L,__namedExportsOrder:()=>R,default:()=>k});function T({children:e}){return(0,D.jsx)(`p`,{className:c(`font-body-s`,`text-default`),children:e})}var E,D,O,k,A,j,M,N,P,F,I,L,R,z=t((()=>{E=e(p()),m(),d(),C(),D=o(),{fn:O}=__STORYBOOK_MODULE_TEST__,k={title:`Components/Tabs`,component:a},A={chromatic:{disableSnapshot:!0}},j={render:e=>{let{defaultActiveKey:t,activeKey:n,size:i,height:o,onSelect:l,showTrack:u,title:d,icon:f,useIconButton:p}=e;return(0,D.jsx)(`div`,{className:c(`flex`,`flex-col`,`p-s`,`gap-s`,`w-fit`),"data-testid":`wrapper`,children:(0,D.jsxs)(a.Container,{defaultActiveKey:t,activeKey:n,size:i,height:o,onSelect:l,children:[(0,D.jsxs)(a.List,{showTrack:u,children:[(0,D.jsx)(a.Tab,{"aria-controls":`Assets`,title:d||`Assets`,icon:f||(0,D.jsx)(h,{}),useIconButton:p}),(0,D.jsx)(a.Tab,{"aria-controls":`Settings`,title:`Settings`,icon:(0,D.jsx)(s,{}),useIconButton:p}),(0,D.jsx)(a.Tab,{"aria-controls":`Focusable`,title:`Focusable`,useIconButton:p}),(0,D.jsx)(a.Tab,{"aria-controls":`Users`,title:`Users`,icon:(0,D.jsx)(r,{}),disabled:!0,useIconButton:p})]}),(0,D.jsx)(a.Panel,{id:`Assets`,children:(0,D.jsx)(T,{children:`Tab content for Assets`})}),(0,D.jsx)(a.Panel,{id:`Settings`,children:(0,D.jsx)(T,{children:`Tab content for Settings`})}),(0,D.jsxs)(a.Panel,{id:`Focusable`,children:[(0,D.jsx)(T,{children:`This panel content has some focusable elements so the focus should move directly to it if you use keyboard navigation.`}),(0,D.jsx)(g,{label:`Focusable button`})]}),(0,D.jsx)(a.Panel,{id:`Users`,children:`Tab content for Users`})]})})},args:{defaultActiveKey:`Assets`,onSelect:O(),showTrack:!0,title:`Assets`},argTypes:S,parameters:A},M={render:function(){let[e,t]=(0,E.useState)(`Assets`);return(0,D.jsxs)(`div`,{className:c(`flex`,`flex-col`,`p-s`,`gap-s`),"data-testid":`wrapper`,children:[(0,D.jsx)(a.Container,{activeKey:e,onSelect:(e,n)=>{t(n)},children:(0,D.jsxs)(a.List,{showTrack:!0,children:[(0,D.jsx)(a.Tab,{"aria-controls":`Assets`,title:`Assets`,icon:(0,D.jsx)(r,{})}),(0,D.jsx)(a.Tab,{"aria-controls":`Settings`,title:`Settings`,icon:(0,D.jsx)(f,{})}),(0,D.jsx)(a.Tab,{"aria-controls":`Users`,title:`Users`,icon:(0,D.jsx)(l,{})})]})}),(0,D.jsxs)(`div`,{className:c(`p-m`),id:e,role:`tabpanel`,children:[(0,D.jsxs)(T,{children:[`Current active tab: `,(0,D.jsx)(`strong`,{children:e})]}),(0,D.jsx)(T,{children:`This demonstrates a controlled Tabs component without Panels - the tab state is managed externally and can be used to control other parts of your UI.`})]})]})},parameters:{...A}},N={render:e=>{let{defaultActiveKey:t,activeKey:n,size:r,height:i,onSelect:o,showTrack:u,title:d,icon:f,useIconButton:p}=e;return(0,D.jsx)(`div`,{className:c(`flex`,`flex-col`,`p-s`,`gap-s`,`w-fit`),style:{blockSize:`500px`},"data-testid":`wrapper`,children:(0,D.jsxs)(a.Container,{defaultActiveKey:t,activeKey:n,size:r,height:i,onSelect:o,children:[(0,D.jsxs)(a.List,{showTrack:u,children:[(0,D.jsx)(a.Tab,{"aria-controls":`Assets`,title:d||`Assets`,icon:f||(0,D.jsx)(h,{}),useIconButton:p}),(0,D.jsx)(a.Tab,{"aria-controls":`Settings`,title:`Settings`,icon:(0,D.jsx)(s,{}),useIconButton:p}),(0,D.jsx)(a.Tab,{"aria-controls":`Focusable`,title:`Focusable`,useIconButton:p}),(0,D.jsx)(a.Tab,{"aria-controls":`Users`,title:`Users`,icon:(0,D.jsx)(l,{}),disabled:!0,useIconButton:p})]}),(0,D.jsx)(a.Panel,{id:`Assets`,children:Array.from({length:50},(e,t)=>(0,D.jsxs)(T,{children:[`Assets - Item `,t+1]},t))}),(0,D.jsx)(a.Panel,{id:`Settings`,children:Array.from({length:50},(e,t)=>(0,D.jsxs)(T,{children:[`Settings- Item `,t+1]},t))}),(0,D.jsxs)(a.Panel,{id:`Focusable`,children:[Array.from({length:50},(e,t)=>(0,D.jsxs)(T,{children:[`Focusable - Item `,t+1]},t)),(0,D.jsx)(g,{label:`Focusable button`})]}),(0,D.jsx)(a.Panel,{id:`Users`,children:Array.from({length:50},(e,t)=>(0,D.jsxs)(T,{children:[`Focusable - Item `,t+1]},t))})]})})},args:{defaultActiveKey:`Assets`,onSelect:O(),showTrack:!0,title:`Assets`,height:`100%`},argTypes:S},P=[{title:`Assets`,"aria-controls":`assets-panel`,icon:(0,D.jsx)(h,{}),badge:(0,D.jsx)(i,{text:`3`,color:`warning`,variant:`alphanumeric`}),panel:(0,D.jsx)(`div`,{className:c(`font-body-s`,`text-default`),children:`Tab 1 content`})},{title:`Settings`,"aria-controls":`settings-panel`,icon:(0,D.jsx)(s,{}),panel:(0,D.jsx)(`div`,{className:c(`font-body-s`,`text-default`),children:`Tab 2 content`})},{title:`Users`,"aria-controls":`users-panel`,icon:(0,D.jsx)(l,{}),panel:(0,D.jsx)(`div`,{className:c(`font-body-s`,`text-default`),children:`Tab 3 content`})}],F={render:({showTrack:e})=>(0,D.jsx)(`div`,{className:c(`flex`,`flex-col`,`p-s`,`gap-s`,`w-fit`),"data-testid":`wrapper`,children:(0,D.jsx)(a,{showTrack:e,tabs:P})}),args:{showTrack:!1},argTypes:x,parameters:A},I={render:e=>(0,D.jsx)(`div`,{className:c(`flex`,`flex-col`,`p-s`,`gap-s`,`w-fit`),"data-testid":`wrapper`,children:(0,D.jsx)(a,{...e,tabs:P})}),args:{showTrack:!1,activeKey:`assets-panel`,onSelect:O()},argTypes:x,parameters:A},L={render:()=>(0,D.jsxs)(`div`,{className:c(`flex`,`flex-col`,`p-s`,`gap-s`,`w-fit`),"data-testid":`wrapper`,children:[(0,D.jsxs)(a.Container,{defaultActiveKey:`Active`,children:[(0,D.jsxs)(a.List,{showTrack:!0,children:[(0,D.jsx)(a.Tab,{"aria-controls":`Active`,title:`ActiveTab`,icon:(0,D.jsx)(_,{}),badge:(0,D.jsx)(i,{variant:`alphanumeric`,color:`warning`,text:`3`})}),(0,D.jsx)(a.Tab,{"aria-controls":`Enabled`,title:`EnabledTab`,icon:(0,D.jsx)(h,{})}),(0,D.jsx)(a.Tab,{"aria-controls":`Hovered`,title:`HoveredTab`,"data-testid":`hover`}),(0,D.jsx)(a.Tab,{"aria-controls":`Focused`,title:`FocusedTab`,"data-testid":`focus`}),(0,D.jsx)(a.Tab,{"aria-controls":`DisabledTab`,title:`DisabledTab`,icon:(0,D.jsx)(u,{}),disabled:!0})]}),(0,D.jsx)(a.Panel,{id:`Active`,children:(0,D.jsx)(T,{children:`content`})}),(0,D.jsx)(a.Panel,{id:`Enabled`,children:(0,D.jsx)(T,{children:`content`})}),(0,D.jsx)(a.Panel,{id:`Hovered`,children:(0,D.jsx)(T,{children:`content`})}),(0,D.jsx)(a.Panel,{id:`Focused`,children:(0,D.jsx)(T,{children:`content`})}),(0,D.jsx)(a.Panel,{id:`Users`,children:(0,D.jsx)(T,{children:`content`})})]}),(0,D.jsxs)(a.Container,{defaultActiveKey:`Small Active`,size:`s`,children:[(0,D.jsxs)(a.List,{showTrack:!0,children:[(0,D.jsx)(a.Tab,{"aria-controls":`Small Active`,title:`Small ActiveTab`,icon:(0,D.jsx)(_,{}),badge:(0,D.jsx)(i,{variant:`alphanumeric`,color:`warning`,text:`3`})}),(0,D.jsx)(a.Tab,{"aria-controls":`Small Enabled`,title:`Small EnabledTab`,icon:(0,D.jsx)(h,{})}),(0,D.jsx)(a.Tab,{"aria-controls":`Small Hovered`,title:`Small HoveredTab`,"data-testid":`hover`}),(0,D.jsx)(a.Tab,{"aria-controls":`Small Focused`,title:`Small FocusedTab`,"data-testid":`focus`}),(0,D.jsx)(a.Tab,{"aria-controls":`Small DisabledTab`,title:`Small DisabledTab`,icon:(0,D.jsx)(u,{}),disabled:!0})]}),(0,D.jsx)(a.Panel,{id:`Small Active`,children:(0,D.jsx)(T,{children:`content`})}),(0,D.jsx)(a.Panel,{id:`Small Enabled`,children:(0,D.jsx)(T,{children:`content`})}),(0,D.jsx)(a.Panel,{id:`Small Hovered`,children:(0,D.jsx)(T,{children:`content`})}),(0,D.jsx)(a.Panel,{id:`Small Focused`,children:(0,D.jsx)(T,{children:`content`})}),(0,D.jsx)(a.Panel,{id:`Small DisabledTab`,children:(0,D.jsx)(T,{children:`content`})})]}),(0,D.jsx)(a,{showTrack:!0,tabs:P})]}),parameters:{controls:{disable:!0},pseudo:{hover:`[data-testid="hover"]`,focusVisible:`[data-testid="focus"]`}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R=[`Uncontrolled`,`TabsWithoutPanel`,`Height`,`UncontrolledWithTabsProp`,`ControlledWithTabsProp`,`VisualTests`]}));z();export{I as ControlledWithTabsProp,N as Height,M as TabsWithoutPanel,j as Uncontrolled,F as UncontrolledWithTabsProp,L as VisualTests,R as __namedExportsOrder,k as default,z as n,w as t};