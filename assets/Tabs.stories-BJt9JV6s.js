import{j as e,r as _}from"./iframe-Bp0nu8X6.js";import{F as U}from"./bookmark-BjcmHdPC.js";import{a as D}from"./index-ebX9fmIs.js";import{F}from"./delete-CSyzwOk8.js";import{F as h}from"./documentation-6ghMNW6p.js";import{F as B}from"./favorited-xiONJzzc.js";import{F as A}from"./person-lmjX5hbo.js";import{F as w}from"./settings-AJKzQdc1.js";import{I as L,a as E}from"./Icons-DjXICJaU.js";import{T as t}from"./Tabs-C5y6Mrx6.js";import{c as n}from"./classNames-BUd7eP-S.js";import{B as C}from"./Button-CBkOB6z4.js";import{B as S}from"./Badge-Br2oOa7d.js";const K={defaultActiveKey:{control:{type:"text"},description:"The default active tab key. Only for uncontrolled usage.",table:{type:{summary:"string"}}},activeKey:{control:{type:"select"},options:[void 0,"assets-panel","settings-panel","users-panel"],description:"The active tab key. Use with `onSelect` for controlled usage.",table:{type:{summary:"string"}}},onSelect:{control:!1,description:"Callback fired when a tab is selected. Use with `activeKey` for controlled usage.",table:{type:{summary:"(event: any, key: string) => void"}}},size:{control:{type:"select"},options:["s","m"],description:"The size of the tabs. Can be `s` or `m`. Default is `m`.",table:{type:{summary:"'s' | 'm'"},defaultValue:{summary:"m"}}},height:{control:{type:"select"},options:["100%",void 0],description:"Set the height of the tabs container to 100%.",table:{type:{summary:"'100%' | undefined"}}},tabs:{control:!1,description:"Array of tab items. Each item should have `title`, `panel`, `aria-controls` and optionally `icon`, `badge`, and `disabled`. See `Tabs.Tab`.",table:{type:{summary:"TabItemPropTypes[]"}}},showTrack:{control:{type:"boolean"},description:"Whether to show the track under the selected tab.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},N={children:{control:!1,description:"**Tabs.Container**: should contain `Tabs.List` and `Tabs.Panel` components. <br/><br/> **Tabs.List**: should contain `Tabs.Tab` components. <br/><br/> **Tabs.Panel**: should contain the content for each tab.",table:{type:{summary:"ReactNode"}}},defaultActiveKey:{control:{type:"select"},options:[void 0,"Assets","Settings","Focusable","Users"],description:"The default active tab key. Only for uncontrolled usage.",table:{type:{summary:"string"},subcategory:"Tabs.Container"}},activeKey:{control:{type:"select"},options:[void 0,"Assets","Settings","Focusable","Users"],description:"The active tab key. Use with `onSelect` for controlled usage.",table:{type:{summary:"string"},subcategory:"Tabs.Container"}},onSelect:{control:!1,description:"Callback fired when a tab is selected. Use with `activeKey` for controlled usage.",table:{type:{summary:"(event: any, key: string) => void"},subcategory:"Tabs.Container"}},size:{control:{type:"select"},options:["s","m"],description:"The size of the tabs. Can be `s` or `m`. Default is `m`.",table:{type:{summary:"'s' | 'm'"},defaultValue:{summary:"m"},subcategory:"Tabs.Container"}},height:{control:{type:"select"},options:["100%",void 0],description:"Set the height of the tabs container to 100%.",table:{type:{summary:"'100%' | undefined"},subcategory:"Tabs.Container"}},showTrack:{control:{type:"boolean"},description:"Whether to show the track under the selected tab.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},subcategory:"Tabs.List"}},"aria-controls":{control:{type:"text"},description:"The id of the associated `Tab.Panel`. Used for accessibility.",table:{type:{summary:"string"},subcategory:"Tabs.Tab"}},title:{control:{type:"text"},description:"The title of the tab.",table:{type:{summary:"string"},subcategory:"Tabs.Tab"}},badge:{control:!1,description:"Optional badge to display next to the title. See [Badge](./?path=/docs/components-badge--docs) for details.",table:{type:{summary:"ReactNode"},subcategory:"Tabs.Tab"}},disabled:{control:{type:"boolean"},description:"Whether the tab is disabled.",table:{type:{summary:"boolean"},subcategory:"Tabs.Tab"}},icon:{control:"select",options:E,mapping:L,description:"Optional icon to display next to the title.",table:{type:{summary:"ReactNode"},subcategory:"Tabs.Tab"}},useIconButton:{control:{type:"boolean"},description:"If true, Tab will only show the icon with no label.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},subcategory:"Tabs.Tab"}},id:{control:{type:"text"},description:"The id of the tab panel. Should match the `aria-controls` of the associated `Tab`.",table:{type:{summary:"string"},subcategory:"Tabs.Panel"}},renderIf:{control:{type:"boolean"},description:"Whether the panel should unmount when hidden. If false, the panel remains in the DOM but hidden.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},subcategory:"Tabs.Panel"}}},{fn:k}=__STORYBOOK_MODULE_TEST__,z={title:"Components/Tabs",component:t},f={chromatic:{disableSnapshot:!0}};function a({children:o}){return e.jsx("p",{className:n("font-body-s","text-default"),children:o})}const d={render:o=>{const{defaultActiveKey:i,activeKey:l,size:y,height:c,onSelect:x,showTrack:g,title:v,icon:P,useIconButton:r}=o;return e.jsx("div",{className:n("flex","flex-col","p-s","gap-s","w-fit"),"data-testid":"wrapper",children:e.jsxs(t.Container,{defaultActiveKey:i,activeKey:l,size:y,height:c,onSelect:x,children:[e.jsxs(t.List,{showTrack:g,children:[e.jsx(t.Tab,{"aria-controls":"Assets",title:v||"Assets",icon:P||e.jsx(h,{}),useIconButton:r}),e.jsx(t.Tab,{"aria-controls":"Settings",title:"Settings",icon:e.jsx(w,{}),useIconButton:r}),e.jsx(t.Tab,{"aria-controls":"Focusable",title:"Focusable",useIconButton:r}),e.jsx(t.Tab,{"aria-controls":"Users",title:"Users",icon:e.jsx(U,{}),disabled:!0,useIconButton:r})]}),e.jsx(t.Panel,{id:"Assets",children:e.jsx(a,{children:"Tab content for Assets"})}),e.jsx(t.Panel,{id:"Settings",children:e.jsx(a,{children:"Tab content for Settings"})}),e.jsxs(t.Panel,{id:"Focusable",children:[e.jsx(a,{children:"This panel content has some focusable elements so the focus should move directly to it if you use keyboard navigation."}),e.jsx(C,{label:"Focusable button"})]}),e.jsx(t.Panel,{id:"Users",children:"Tab content for Users"})]})})},args:{defaultActiveKey:"Assets",onSelect:k(),showTrack:!0,title:"Assets"},argTypes:N,parameters:f},b={render:function(){const[i,l]=_.useState("Assets");return e.jsxs("div",{className:n("flex","flex-col","p-s","gap-s"),"data-testid":"wrapper",children:[e.jsx(t.Container,{activeKey:i,onSelect:(y,c)=>{l(c)},children:e.jsxs(t.List,{showTrack:!0,children:[e.jsx(t.Tab,{"aria-controls":"Assets",title:"Assets",icon:e.jsx(U,{})}),e.jsx(t.Tab,{"aria-controls":"Settings",title:"Settings",icon:e.jsx(D,{})}),e.jsx(t.Tab,{"aria-controls":"Users",title:"Users",icon:e.jsx(A,{})})]})}),e.jsxs("div",{className:n("p-m"),id:i,role:"tabpanel",children:[e.jsxs(a,{children:["Current active tab: ",e.jsx("strong",{children:i})]}),e.jsx(a,{children:"This demonstrates a controlled Tabs component without Panels - the tab state is managed externally and can be used to control other parts of your UI."})]})]})},parameters:{...f}},T={render:o=>{const{defaultActiveKey:i,activeKey:l,size:y,height:c,onSelect:x,showTrack:g,title:v,icon:P,useIconButton:r}=o;return e.jsx("div",{className:n("flex","flex-col","p-s","gap-s","w-fit"),style:{blockSize:"500px"},"data-testid":"wrapper",children:e.jsxs(t.Container,{defaultActiveKey:i,activeKey:l,size:y,height:c,onSelect:x,children:[e.jsxs(t.List,{showTrack:g,children:[e.jsx(t.Tab,{"aria-controls":"Assets",title:v||"Assets",icon:P||e.jsx(h,{}),useIconButton:r}),e.jsx(t.Tab,{"aria-controls":"Settings",title:"Settings",icon:e.jsx(w,{}),useIconButton:r}),e.jsx(t.Tab,{"aria-controls":"Focusable",title:"Focusable",useIconButton:r}),e.jsx(t.Tab,{"aria-controls":"Users",title:"Users",icon:e.jsx(A,{}),disabled:!0,useIconButton:r})]}),e.jsx(t.Panel,{id:"Assets",children:Array.from({length:50},(j,s)=>e.jsxs(a,{children:["Assets - Item ",s+1]},s))}),e.jsx(t.Panel,{id:"Settings",children:Array.from({length:50},(j,s)=>e.jsxs(a,{children:["Settings- Item ",s+1]},s))}),e.jsxs(t.Panel,{id:"Focusable",children:[Array.from({length:50},(j,s)=>e.jsxs(a,{children:["Focusable - Item ",s+1]},s)),e.jsx(C,{label:"Focusable button"})]}),e.jsx(t.Panel,{id:"Users",children:Array.from({length:50},(j,s)=>e.jsxs(a,{children:["Focusable - Item ",s+1]},s))})]})})},args:{defaultActiveKey:"Assets",onSelect:k(),showTrack:!0,title:"Assets",height:"100%"},argTypes:N},I=[{title:"Assets","aria-controls":"assets-panel",icon:e.jsx(h,{}),badge:e.jsx(S,{text:"3",color:"warning",variant:"alphanumeric"}),panel:e.jsx("div",{className:n("font-body-s","text-default"),children:"Tab 1 content"})},{title:"Settings","aria-controls":"settings-panel",icon:e.jsx(w,{}),panel:e.jsx("div",{className:n("font-body-s","text-default"),children:"Tab 2 content"})},{title:"Users","aria-controls":"users-panel",icon:e.jsx(A,{}),panel:e.jsx("div",{className:n("font-body-s","text-default"),children:"Tab 3 content"})}],u={render:({showTrack:o})=>e.jsx("div",{className:n("flex","flex-col","p-s","gap-s","w-fit"),"data-testid":"wrapper",children:e.jsx(t,{showTrack:o,tabs:I})}),args:{showTrack:!1},argTypes:K,parameters:f},p={render:o=>e.jsx("div",{className:n("flex","flex-col","p-s","gap-s","w-fit"),"data-testid":"wrapper",children:e.jsx(t,{...o,tabs:I})}),args:{showTrack:!1,activeKey:"assets-panel",onSelect:k()},argTypes:K,parameters:f},m={render:()=>e.jsxs("div",{className:n("flex","flex-col","p-s","gap-s","w-fit"),"data-testid":"wrapper",children:[e.jsxs(t.Container,{defaultActiveKey:"Active",children:[e.jsxs(t.List,{showTrack:!0,children:[e.jsx(t.Tab,{"aria-controls":"Active",title:"ActiveTab",icon:e.jsx(F,{}),badge:e.jsx(S,{variant:"alphanumeric",color:"warning",text:"3"})}),e.jsx(t.Tab,{"aria-controls":"Enabled",title:"EnabledTab",icon:e.jsx(h,{})}),e.jsx(t.Tab,{"aria-controls":"Hovered",title:"HoveredTab","data-testid":"hover"}),e.jsx(t.Tab,{"aria-controls":"Focused",title:"FocusedTab","data-testid":"focus"}),e.jsx(t.Tab,{"aria-controls":"DisabledTab",title:"DisabledTab",icon:e.jsx(B,{}),disabled:!0})]}),e.jsx(t.Panel,{id:"Active",children:e.jsx(a,{children:"content"})}),e.jsx(t.Panel,{id:"Enabled",children:e.jsx(a,{children:"content"})}),e.jsx(t.Panel,{id:"Hovered",children:e.jsx(a,{children:"content"})}),e.jsx(t.Panel,{id:"Focused",children:e.jsx(a,{children:"content"})}),e.jsx(t.Panel,{id:"Users",children:e.jsx(a,{children:"content"})})]}),e.jsxs(t.Container,{defaultActiveKey:"Small Active",size:"s",children:[e.jsxs(t.List,{showTrack:!0,children:[e.jsx(t.Tab,{"aria-controls":"Small Active",title:"Small ActiveTab",icon:e.jsx(F,{}),badge:e.jsx(S,{variant:"alphanumeric",color:"warning",text:"3"})}),e.jsx(t.Tab,{"aria-controls":"Small Enabled",title:"Small EnabledTab",icon:e.jsx(h,{})}),e.jsx(t.Tab,{"aria-controls":"Small Hovered",title:"Small HoveredTab","data-testid":"hover"}),e.jsx(t.Tab,{"aria-controls":"Small Focused",title:"Small FocusedTab","data-testid":"focus"}),e.jsx(t.Tab,{"aria-controls":"Small DisabledTab",title:"Small DisabledTab",icon:e.jsx(B,{}),disabled:!0})]}),e.jsx(t.Panel,{id:"Small Active",children:e.jsx(a,{children:"content"})}),e.jsx(t.Panel,{id:"Small Enabled",children:e.jsx(a,{children:"content"})}),e.jsx(t.Panel,{id:"Small Hovered",children:e.jsx(a,{children:"content"})}),e.jsx(t.Panel,{id:"Small Focused",children:e.jsx(a,{children:"content"})}),e.jsx(t.Panel,{id:"Small DisabledTab",children:e.jsx(a,{children:"content"})})]}),e.jsx(t,{showTrack:!0,tabs:I})]}),parameters:{controls:{disable:!0},pseudo:{hover:'[data-testid="hover"]',focusVisible:'[data-testid="focus"]'}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const O=["Uncontrolled","TabsWithoutPanel","Height","UncontrolledWithTabsProp","ControlledWithTabsProp","VisualTests"],ee=Object.freeze(Object.defineProperty({__proto__:null,ControlledWithTabsProp:p,Height:T,TabsWithoutPanel:b,Uncontrolled:d,UncontrolledWithTabsProp:u,VisualTests:m,__namedExportsOrder:O,default:z},Symbol.toStringTag,{value:"Module"}));export{ee as S,b as T,d as U,u as a};
