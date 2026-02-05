import{j as e,r as U}from"./iframe-BQJExRCF.js";import{F as s}from"./Bookmark-DEDDSCCD.js";import{a as c}from"./Upload-JDlmgr1C.js";import{I as C,a as K}from"./Icons-D8r5JLXA.js";import{T as t}from"./Tabs-3UCj0niv.js";import{c as o}from"./classNames-B0wfWtWT.js";import{B as I}from"./Button-C7-D-GN_.js";import{B as A}from"./Badge-B9--3FkB.js";const B={defaultActiveKey:{control:{type:"text"},description:"The default active tab key. Only for uncontrolled usage.",table:{type:{summary:"string"}}},activeKey:{control:{type:"select"},options:[void 0,"assets-panel","settings-panel","users-panel"],description:"The active tab key. Use with `onSelect` for controlled usage.",table:{type:{summary:"string"}}},onSelect:{control:!1,description:"Callback fired when a tab is selected. Use with `activeKey` for controlled usage.",table:{type:{summary:"(event: any, key: string) => void"}}},size:{control:{type:"select"},options:["s","m"],description:"The size of the tabs. Can be `s` or `m`. Default is `m`.",table:{type:{summary:"'s' | 'm'"},defaultValue:{summary:"m"}}},height:{control:{type:"select"},options:["100%",void 0],description:"Set the height of the tabs container to 100%.",table:{type:{summary:"'100%' | undefined"}}},tabs:{control:!1,description:"Array of tab items. Each item should have `title`, `panel`, `aria-controls` and optionally `icon`, `badge`, and `disabled`. See `Tabs.Tab`.",table:{type:{summary:"TabItemPropTypes[]"}}},showTrack:{control:{type:"boolean"},description:"Whether to show the track under the selected tab.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},F={children:{control:!1,description:"**Tabs.Container**: should contain `Tabs.List` and `Tabs.Panel` components. <br/><br/> **Tabs.List**: should contain `Tabs.Tab` components. <br/><br/> **Tabs.Panel**: should contain the content for each tab.",table:{type:{summary:"ReactNode"}}},defaultActiveKey:{control:{type:"select"},options:[void 0,"Assets","Settings","Focusable","Users"],description:"The default active tab key. Only for uncontrolled usage.",table:{type:{summary:"string"},subcategory:"Tabs.Container"}},activeKey:{control:{type:"select"},options:[void 0,"Assets","Settings","Focusable","Users"],description:"The active tab key. Use with `onSelect` for controlled usage.",table:{type:{summary:"string"},subcategory:"Tabs.Container"}},onSelect:{control:!1,description:"Callback fired when a tab is selected. Use with `activeKey` for controlled usage.",table:{type:{summary:"(event: any, key: string) => void"},subcategory:"Tabs.Container"}},size:{control:{type:"select"},options:["s","m"],description:"The size of the tabs. Can be `s` or `m`. Default is `m`.",table:{type:{summary:"'s' | 'm'"},defaultValue:{summary:"m"},subcategory:"Tabs.Container"}},height:{control:{type:"select"},options:["100%",void 0],description:"Set the height of the tabs container to 100%.",table:{type:{summary:"'100%' | undefined"},subcategory:"Tabs.Container"}},showTrack:{control:{type:"boolean"},description:"Whether to show the track under the selected tab.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},subcategory:"Tabs.List"}},"aria-controls":{control:{type:"text"},description:"The id of the associated `Tab.Panel`. Used for accessibility.",table:{type:{summary:"string"},subcategory:"Tabs.Tab"}},title:{control:{type:"text"},description:"The title of the tab.",table:{type:{summary:"string"},subcategory:"Tabs.Tab"}},badge:{control:!1,description:"Optional badge to display next to the title. See [Badge](./?path=/docs/components-badge--docs) for details.",table:{type:{summary:"ReactNode"},subcategory:"Tabs.Tab"}},disabled:{control:{type:"boolean"},description:"Whether the tab is disabled.",table:{type:{summary:"boolean"},subcategory:"Tabs.Tab"}},icon:{control:"select",options:K,mapping:C,description:"Optional icon to display next to the title.",table:{type:{summary:"ReactNode"},subcategory:"Tabs.Tab"}},useIconButton:{control:{type:"boolean"},description:"If true, Tab will only show the icon with no label.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},subcategory:"Tabs.Tab"}},id:{control:{type:"text"},description:"The id of the tab panel. Should match the `aria-controls` of the associated `Tab`.",table:{type:{summary:"string"},subcategory:"Tabs.Panel"}},renderIf:{control:{type:"boolean"},description:"Whether the panel should unmount when hidden. If false, the panel remains in the DOM but hidden.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},subcategory:"Tabs.Panel"}}},{fn:k}=__STORYBOOK_MODULE_TEST__,N={title:"Components/Tabs",component:t},x={chromatic:{disableSnapshot:!0}};function a({children:r}){return e.jsx("p",{className:o("font-body-s","text-default"),children:r})}const T={render:r=>{const{defaultActiveKey:i,activeKey:d,size:f,height:b,onSelect:g,showTrack:v,title:P,icon:j,useIconButton:l}=r;return e.jsx("div",{className:o("flex","flex-col","p-s","gap-s","w-fit"),"data-testid":"wrapper",children:e.jsxs(t.Container,{defaultActiveKey:i,activeKey:d,size:f,height:b,onSelect:g,children:[e.jsxs(t.List,{showTrack:v,children:[e.jsx(t.Tab,{"aria-controls":"Assets",title:P||"Assets",icon:j||e.jsx(s,{}),useIconButton:l}),e.jsx(t.Tab,{"aria-controls":"Settings",title:"Settings",icon:e.jsx(s,{}),useIconButton:l}),e.jsx(t.Tab,{"aria-controls":"Focusable",title:"Focusable",useIconButton:l}),e.jsx(t.Tab,{"aria-controls":"Users",title:"Users",icon:e.jsx(c,{}),disabled:!0,useIconButton:l})]}),e.jsx(t.Panel,{id:"Assets",children:e.jsx(a,{children:"Tab content for Assets"})}),e.jsx(t.Panel,{id:"Settings",children:e.jsx(a,{children:"Tab content for Settings"})}),e.jsxs(t.Panel,{id:"Focusable",children:[e.jsx(a,{children:"This panel content has some focusable elements so the focus should move directly to it if you use keyboard navigation."}),e.jsx(I,{label:"Focusable button"})]}),e.jsx(t.Panel,{id:"Users",children:"Tab content for Users"})]})})},args:{defaultActiveKey:"Assets",onSelect:k(),showTrack:!0,title:"Assets"},argTypes:F,parameters:x},u={render:function(){const[i,d]=U.useState("Assets");return e.jsxs("div",{className:o("flex","flex-col","p-s","gap-s"),"data-testid":"wrapper",children:[e.jsx(t.Container,{activeKey:i,onSelect:(f,b)=>{d(b)},children:e.jsxs(t.List,{showTrack:!0,children:[e.jsx(t.Tab,{"aria-controls":"Assets",title:"Assets",icon:e.jsx(s,{})}),e.jsx(t.Tab,{"aria-controls":"Settings",title:"Settings",icon:e.jsx(s,{})}),e.jsx(t.Tab,{"aria-controls":"Users",title:"Users",icon:e.jsx(c,{})})]})}),e.jsxs("div",{className:o("p-m"),id:i,role:"tabpanel",children:[e.jsxs(a,{children:["Current active tab: ",e.jsx("strong",{children:i})]}),e.jsx(a,{children:"This demonstrates a controlled Tabs component without Panels - the tab state is managed externally and can be used to control other parts of your UI."})]})]})},parameters:{...x}},p={render:r=>{const{defaultActiveKey:i,activeKey:d,size:f,height:b,onSelect:g,showTrack:v,title:P,icon:j,useIconButton:l}=r;return e.jsx("div",{className:o("flex","flex-col","p-s","gap-s","w-fit"),style:{blockSize:"500px"},"data-testid":"wrapper",children:e.jsxs(t.Container,{defaultActiveKey:i,activeKey:d,size:f,height:b,onSelect:g,children:[e.jsxs(t.List,{showTrack:v,children:[e.jsx(t.Tab,{"aria-controls":"Assets",title:P||"Assets",icon:j||e.jsx(s,{}),useIconButton:l}),e.jsx(t.Tab,{"aria-controls":"Settings",title:"Settings",icon:e.jsx(s,{}),useIconButton:l}),e.jsx(t.Tab,{"aria-controls":"Focusable",title:"Focusable",useIconButton:l}),e.jsx(t.Tab,{"aria-controls":"Users",title:"Users",icon:e.jsx(c,{}),disabled:!0,useIconButton:l})]}),e.jsx(t.Panel,{id:"Assets",children:Array.from({length:50},(S,n)=>e.jsxs(a,{children:["Assets - Item ",n+1]},n))}),e.jsx(t.Panel,{id:"Settings",children:Array.from({length:50},(S,n)=>e.jsxs(a,{children:["Settings- Item ",n+1]},n))}),e.jsxs(t.Panel,{id:"Focusable",children:[Array.from({length:50},(S,n)=>e.jsxs(a,{children:["Focusable - Item ",n+1]},n)),e.jsx(I,{label:"Focusable button"})]}),e.jsx(t.Panel,{id:"Users",children:Array.from({length:50},(S,n)=>e.jsxs(a,{children:["Focusable - Item ",n+1]},n))})]})})},args:{defaultActiveKey:"Assets",onSelect:k(),showTrack:!0,title:"Assets",height:"100%"},argTypes:F},w=[{title:"Assets","aria-controls":"assets-panel",icon:e.jsx(s,{}),badge:e.jsx(A,{text:"3",color:"warning",variant:"alphanumeric"}),panel:e.jsx("div",{className:o("font-body-s","text-default"),children:"Tab 1 content"})},{title:"Settings","aria-controls":"settings-panel",icon:e.jsx(s,{}),panel:e.jsx("div",{className:o("font-body-s","text-default"),children:"Tab 2 content"})},{title:"Users","aria-controls":"users-panel",icon:e.jsx(c,{}),panel:e.jsx("div",{className:o("font-body-s","text-default"),children:"Tab 3 content"})}],m={render:({showTrack:r})=>e.jsx("div",{className:o("flex","flex-col","p-s","gap-s","w-fit"),"data-testid":"wrapper",children:e.jsx(t,{showTrack:r,tabs:w})}),args:{showTrack:!1},argTypes:B,parameters:x},h={render:r=>e.jsx("div",{className:o("flex","flex-col","p-s","gap-s","w-fit"),"data-testid":"wrapper",children:e.jsx(t,{...r,tabs:w})}),args:{showTrack:!1,activeKey:"assets-panel",onSelect:k()},argTypes:B,parameters:x},y={render:()=>e.jsxs("div",{className:o("flex","flex-col","p-s","gap-s","w-fit"),"data-testid":"wrapper",children:[e.jsxs(t.Container,{defaultActiveKey:"Active",children:[e.jsxs(t.List,{showTrack:!0,children:[e.jsx(t.Tab,{"aria-controls":"Active",title:"ActiveTab",icon:e.jsx(s,{}),badge:e.jsx(A,{variant:"alphanumeric",color:"warning",text:"3"})}),e.jsx(t.Tab,{"aria-controls":"Enabled",title:"EnabledTab",icon:e.jsx(s,{})}),e.jsx(t.Tab,{"aria-controls":"Hovered",title:"HoveredTab","data-testid":"hover"}),e.jsx(t.Tab,{"aria-controls":"Focused",title:"FocusedTab","data-testid":"focus"}),e.jsx(t.Tab,{"aria-controls":"DisabledTab",title:"DisabledTab",icon:e.jsx(c,{}),disabled:!0})]}),e.jsx(t.Panel,{id:"Active",children:e.jsx(a,{children:"content"})}),e.jsx(t.Panel,{id:"Enabled",children:e.jsx(a,{children:"content"})}),e.jsx(t.Panel,{id:"Hovered",children:e.jsx(a,{children:"content"})}),e.jsx(t.Panel,{id:"Focused",children:e.jsx(a,{children:"content"})}),e.jsx(t.Panel,{id:"Users",children:e.jsx(a,{children:"content"})})]}),e.jsxs(t.Container,{defaultActiveKey:"Small Active",size:"s",children:[e.jsxs(t.List,{showTrack:!0,children:[e.jsx(t.Tab,{"aria-controls":"Small Active",title:"Small ActiveTab",icon:e.jsx(s,{}),badge:e.jsx(A,{variant:"alphanumeric",color:"warning",text:"3"})}),e.jsx(t.Tab,{"aria-controls":"Small Enabled",title:"Small EnabledTab",icon:e.jsx(s,{})}),e.jsx(t.Tab,{"aria-controls":"Small Hovered",title:"Small HoveredTab","data-testid":"hover"}),e.jsx(t.Tab,{"aria-controls":"Small Focused",title:"Small FocusedTab","data-testid":"focus"}),e.jsx(t.Tab,{"aria-controls":"Small DisabledTab",title:"Small DisabledTab",icon:e.jsx(c,{}),disabled:!0})]}),e.jsx(t.Panel,{id:"Small Active",children:e.jsx(a,{children:"content"})}),e.jsx(t.Panel,{id:"Small Enabled",children:e.jsx(a,{children:"content"})}),e.jsx(t.Panel,{id:"Small Hovered",children:e.jsx(a,{children:"content"})}),e.jsx(t.Panel,{id:"Small Focused",children:e.jsx(a,{children:"content"})}),e.jsx(t.Panel,{id:"Small DisabledTab",children:e.jsx(a,{children:"content"})})]}),e.jsx(t,{showTrack:!0,tabs:w})]}),parameters:{controls:{disable:!0},pseudo:{hover:'[data-testid="hover"]',focusVisible:'[data-testid="focus"]'}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
            <Tabs.Tab aria-controls="Assets" title={title || "Assets"} icon={icon || <BookmarkIcon />} useIconButton={useIconButton} />
            <Tabs.Tab aria-controls="Settings" title="Settings" icon={<BookmarkIcon />} useIconButton={useIconButton} />
            <Tabs.Tab aria-controls="Focusable" title="Focusable" useIconButton={useIconButton} />
            <Tabs.Tab aria-controls="Users" title="Users" icon={<BookmarkedIcon />} disabled useIconButton={useIconButton} />
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
}`,...T.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function TabsWithoutPanel() {
    const [activeTab, setActiveTab] = useState("Assets");
    return <div className={classNames("flex", "flex-col", "p-s", "gap-s")} data-testid="wrapper">
        <Tabs.Container activeKey={activeTab} onSelect={(_event, key) => {
        setActiveTab(key);
      }}>
          <Tabs.List showTrack>
            <Tabs.Tab aria-controls="Assets" title="Assets" icon={<BookmarkIcon />} />
            <Tabs.Tab aria-controls="Settings" title="Settings" icon={<BookmarkIcon />} />
            <Tabs.Tab aria-controls="Users" title="Users" icon={<BookmarkedIcon />} />
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
            <Tabs.Tab aria-controls="Assets" title={title || "Assets"} icon={icon || <BookmarkIcon />} useIconButton={useIconButton} />
            <Tabs.Tab aria-controls="Settings" title="Settings" icon={<BookmarkIcon />} useIconButton={useIconButton} />
            <Tabs.Tab aria-controls="Focusable" title="Focusable" useIconButton={useIconButton} />
            <Tabs.Tab aria-controls="Users" title="Users" icon={<BookmarkedIcon />} disabled useIconButton={useIconButton} />
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "p-s", "gap-s", "w-fit")} data-testid="wrapper">
      <Tabs.Container defaultActiveKey="Active">
        <Tabs.List showTrack>
          <Tabs.Tab aria-controls="Active" title="ActiveTab" icon={<BookmarkIcon />} badge={<Badge variant="alphanumeric" color="warning" text="3" />} />
          <Tabs.Tab aria-controls="Enabled" title="EnabledTab" icon={<BookmarkIcon />} />
          <Tabs.Tab aria-controls="Hovered" title="HoveredTab" data-testid="hover" />
          <Tabs.Tab aria-controls="Focused" title="FocusedTab" data-testid="focus" />
          <Tabs.Tab aria-controls="DisabledTab" title="DisabledTab" icon={<BookmarkedIcon />} disabled />
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
          <Tabs.Tab aria-controls="Small Active" title="Small ActiveTab" icon={<BookmarkIcon />} badge={<Badge variant="alphanumeric" color="warning" text="3" />} />
          <Tabs.Tab aria-controls="Small Enabled" title="Small EnabledTab" icon={<BookmarkIcon />} />
          <Tabs.Tab aria-controls="Small Hovered" title="Small HoveredTab" data-testid="hover" />
          <Tabs.Tab aria-controls="Small Focused" title="Small FocusedTab" data-testid="focus" />
          <Tabs.Tab aria-controls="Small DisabledTab" title="Small DisabledTab" icon={<BookmarkedIcon />} disabled />
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
}`,...y.parameters?.docs?.source}}};const _=["Uncontrolled","TabsWithoutPanel","Height","UncontrolledWithTabsProp","ControlledWithTabsProp","VisualTests"],R=Object.freeze(Object.defineProperty({__proto__:null,ControlledWithTabsProp:h,Height:p,TabsWithoutPanel:u,Uncontrolled:T,UncontrolledWithTabsProp:m,VisualTests:y,__namedExportsOrder:_,default:N},Symbol.toStringTag,{value:"Module"}));export{R as S,u as T,T as U,m as a};
