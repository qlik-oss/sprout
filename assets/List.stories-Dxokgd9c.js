import{n as e,r as t}from"./chunk-BneVvdWh.js";import{H as n,In as r,K as i,Ln as a,U as o,V as s,ct as c,v as l}from"./iframe-B0xl5hqz.js";var u,d,f=e((()=>{u={gap:{control:{type:`select`},description:`Gap between list items.`,options:[`0`,`s`,`m`,`l`,`xl`],table:{type:{summary:`"0" | "s" | "m" | "l" | "xl"`}}},useGesture:{control:{type:`boolean`},description:`Enables arrow key keyboard navigation between list items.`,table:{type:{summary:`boolean`}}},hasPadding:{control:{type:`boolean`},description:`When false, removes padding from all list items.`,table:{type:{summary:`boolean`}}}},d={children:{control:{type:`text`},description:`Content rendered inside the list item.`,table:{type:{summary:`ReactNode`}}},selected:{control:{type:`boolean`},description:`Marks the list item as selected.`,table:{type:{summary:`boolean`}}},disabled:{control:{type:`boolean`},description:`Disables the interactive button when onClick is provided.`,table:{type:{summary:`boolean`}}},hasPadding:{control:{type:`select`},options:[void 0,!0,!1],description:`Overrides List-level item padding.`,table:{type:{summary:`boolean`}}},interactive:{control:{type:`select`},options:[void 0,!0,!1],description:`Forces interactive styling even without an onClick handler.`,table:{type:{summary:`boolean`}}},onClick:{control:!1,description:`Click handler that enables keyboard-focusable interaction.`,table:{type:{summary:`() => void`}}}}})),p=t({ItemPlayground:()=>y,ListPlayground:()=>v,VisualTest:()=>b,__namedExportsOrder:()=>x,default:()=>_});function m(){return(0,g.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,g.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M16 3V13C16 13.5523 15.5523 14 15 14H1C0.447715 14 0 13.5523 0 13V3C0 2.44772 0.447715 2 1 2H15C15.5523 2 16 2.44772 16 3ZM1.70801 13H14.291L9.58801 8.29601L8.97619 8.82181C8.45191 9.2712 7.69489 9.30116 7.13957 8.91169L7.02382 8.82181L6.41001 8.29601L1.70801 13ZM10.35 7.644L15 12.295V3.658L10.35 7.644ZM1 12.294L5.649 7.643L1 3.658V12.294ZM1.76801 3L7.67461 8.06255C7.83845 8.20298 8.07047 8.22054 8.25136 8.11521L8.3254 8.06255L14.231 3H1.76801Z`,fill:`currentColor`})})}function h(){return(0,g.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,g.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M16 5.375L11.5556 1H4.44444L0 5.375V13.25C0 14.125 0.888889 15 1.77778 15H14.2222C15.1111 15 16 14.125 16 13.25V5.375ZM11.1111 1.875L14.25 5H1.75L4.8889 1.875H11.1111ZM15 6V13C15 13.5523 14.5523 14 14 14H2C1.44772 14 1 13.5523 1 13V6H15ZM9.93835 8.91781C10 8.84996 10 8.7261 10 8.5C10 8.2739 10 8.15004 9.93835 8.08219C9.86368 8 9.69853 8 9.33333 8H6.66667C6.30147 8 6.13632 8 6.06165 8.08219C6 8.15004 6 8.2739 6 8.5C6 8.7261 6 8.84996 6.06165 8.91781C6.13632 9 6.30147 9 6.66667 9H9.33333C9.69853 9 9.86368 9 9.93835 8.91781Z`,fill:`currentColor`})})}var g,_,v,y,b,x,S=e((()=>{l(),f(),g=a(),_={title:`Components/List`,component:n},v={render:e=>(0,g.jsx)(`div`,{className:r(`flex`,`flex-col`,`border-box`,`p-s`,`gap-s`),style:{inlineSize:`300px`},"data-testid":`wrapper`,children:(0,g.jsxs)(n,{...e,children:[(0,g.jsx)(o,{selected:!0,onClick:()=>{},children:(0,g.jsx)(c,{label:`select item 1`})}),(0,g.jsx)(o,{onClick:()=>{},children:(0,g.jsx)(c,{label:`select item 2`})}),(0,g.jsx)(s,{}),(0,g.jsxs)(o,{onClick:()=>{},children:[(0,g.jsx)(h,{}),`Inbox`]}),(0,g.jsxs)(o,{onClick:()=>{},children:[(0,g.jsx)(m,{}),`Draft`]}),(0,g.jsxs)(o,{disabled:!0,onClick:()=>{},children:[(0,g.jsx)(m,{}),`Disabled`]})]})}),args:{},argTypes:u,parameters:{chromatic:{disableSnapshot:!0}}},y={render:e=>(0,g.jsx)(`div`,{className:r(`flex`,`flex-col`,`border-box`,`p-s`,`gap-s`),style:{inlineSize:`300px`},"data-testid":`wrapper`,children:(0,g.jsx)(n,{gap:`s`,children:(0,g.jsx)(o,{...e})})}),args:{children:`List item`,onClick:()=>{},selected:!1,disabled:!1,hasPadding:void 0,interactive:void 0},argTypes:d,parameters:{chromatic:{disableSnapshot:!0}}},b={render:()=>(0,g.jsxs)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`p-s`,`gap-xl`),style:{inlineSize:`750px`},children:[(0,g.jsxs)(n,{gap:`s`,children:[(0,g.jsx)(o,{onClick:()=>{},children:`Enabled`}),(0,g.jsx)(o,{onClick:()=>{},"data-state":`hover`,children:`Hover`}),(0,g.jsx)(o,{onClick:()=>{},"data-state":`pressed`,children:`Pressed`}),(0,g.jsx)(o,{onClick:()=>{},"data-state":`focus`,children:`Focus`}),(0,g.jsx)(o,{onClick:()=>{},disabled:!0,children:`Disabled`}),(0,g.jsx)(o,{onClick:()=>{},selected:!0,children:`Selected`}),(0,g.jsx)(o,{children:`Non interactive`}),(0,g.jsx)(s,{}),(0,g.jsx)(i.Trigger,{menu:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.GroupLabel,{label:`User`}),(0,g.jsx)(i.Item,{label:`Profile`,disabled:!0}),(0,g.jsx)(i.Item,{label:`Logout`}),(0,g.jsx)(i.Item,{label:`Reload`}),(0,g.jsx)(i.Item,{label:`Share`})]}),children:(0,g.jsx)(o,{children:`Menu Integration`})}),(0,g.jsx)(o,{children:`Overflow Lorem ipsum dolor sit amet, consectetur adipiscing elit`})]}),(0,g.jsxs)(n,{gap:`s`,hasPadding:!1,children:[(0,g.jsx)(o,{onClick:()=>{},"data-state":`hover`,children:(0,g.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`border-default`,`w-full`,`h-full`,`font-body-s`,`text-default`),children:`List hasPadding=true`})}),(0,g.jsx)(o,{onClick:()=>{},hasPadding:!0,"data-state":`hover`,children:(0,g.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`border-default`,`w-full`,`h-full`,`font-body-s`,`text-default`),children:`ListItem hasPadding`})})]}),(0,g.jsxs)(n,{gap:`s`,hasPadding:!0,children:[(0,g.jsx)(o,{onClick:()=>{},"data-state":`hover`,children:(0,g.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`border-default`,`w-full`,`font-body-s`,`text-default`),children:`List hasPadding=true`})}),(0,g.jsx)(o,{onClick:()=>{},hasPadding:!1,"data-state":`hover`,children:(0,g.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`border-default`,`w-full`,`font-body-s`,`text-default`),children:`ListItem hasPadding=false`})})]}),(0,g.jsxs)(n,{gap:`s`,children:[(0,g.jsx)(o,{onClick:()=>{},children:(0,g.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`content-center`,`items-center`,`justify-between`),children:(0,g.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`gap-m`),children:(0,g.jsxs)(`div`,{className:r(`flex`,`flex-col`,`border-box`),children:[(0,g.jsx)(`h6`,{className:r(`flex`,`flex-row`,`border-box`,`font-label-m`,`text-default`),children:`Custom Item`}),(0,g.jsx)(`p`,{className:r(`flex`,`flex-row`,`border-box`,`font-body-s`,`text-default`),children:`3 tasks`})]})})})}),(0,g.jsx)(o,{onClick:()=>{},"data-state":`hover`,children:(0,g.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`content-center`,`items-center`,`justify-between`),children:(0,g.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`gap-m`),children:(0,g.jsxs)(`div`,{className:r(`flex`,`flex-col`,`border-box`),children:[(0,g.jsx)(`h6`,{className:r(`flex`,`flex-row`,`border-box`,`font-label-m`,`text-default`),children:`Custom Item hover`}),(0,g.jsx)(`p`,{className:r(`flex`,`flex-row`,`border-box`,`font-body-s`,`text-default`),children:`3 tasks`})]})})})}),(0,g.jsx)(o,{onClick:()=>{},"data-state":`focus`,children:(0,g.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`content-center`,`items-center`,`justify-between`),children:(0,g.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`gap-m`),children:(0,g.jsxs)(`div`,{className:r(`flex`,`flex-col`,`border-box`),children:[(0,g.jsx)(`h6`,{className:r(`flex`,`flex-row`,`border-box`,`font-label-m`,`text-default`),children:`Custom Item focus`}),(0,g.jsx)(`p`,{className:r(`flex`,`flex-row`,`border-box`,`font-body-s`,`text-default`),children:`3 tasks`})]})})})}),(0,g.jsx)(o,{onClick:()=>{},"data-state":`pressed`,children:(0,g.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`content-center`,`items-center`,`justify-between`),children:(0,g.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`gap-m`),children:(0,g.jsxs)(`div`,{className:r(`flex`,`flex-col`,`border-box`),children:[(0,g.jsx)(`h6`,{className:r(`flex`,`flex-row`,`border-box`,`font-label-m`,`text-default`),children:`Custom Item pressed`}),(0,g.jsx)(`p`,{className:r(`flex`,`flex-row`,`border-box`,`font-body-s`,`text-default`),children:`3 tasks`})]})})})}),(0,g.jsx)(o,{onClick:()=>{},selected:!0,children:(0,g.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`content-center`,`items-center`,`justify-between`),children:(0,g.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`gap-m`),children:(0,g.jsxs)(`div`,{className:r(`flex`,`flex-col`,`border-box`),children:[(0,g.jsx)(`h6`,{className:r(`flex`,`flex-row`,`border-box`,`font-label-m`,`text-default`),children:`Custom Item selected`}),(0,g.jsx)(`p`,{className:r(`flex`,`flex-row`,`border-box`,`font-body-s`,`text-default`),children:`2 tasks`})]})})})})]})]}),parameters:{controls:{disable:!0},pseudo:{hover:`[data-state="hover"] > button`,active:`[data-state="pressed"] > button`,focusVisible:`[data-state="focus"] > button`}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("flex", "flex-col", "border-box", "p-s", "gap-s")} style={{
    inlineSize: "300px"
  }} data-testid="wrapper">
      <List {...props}>
        <ListItem selected onClick={() => {}}>
          <Checkbox label="select item 1" />
        </ListItem>
        <ListItem onClick={() => {}}>
          <Checkbox label="select item 2" />
        </ListItem>
        <ListDivider />
        <ListItem onClick={() => {}}>
          <Inbox />
          Inbox
        </ListItem>
        <ListItem onClick={() => {}}>
          <Draft />
          Draft
        </ListItem>
        <ListItem disabled onClick={() => {}}>
          <Draft />
          Disabled
        </ListItem>
      </List>
    </div>,
  args: {},
  argTypes: ListArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("flex", "flex-col", "border-box", "p-s", "gap-s")} style={{
    inlineSize: "300px"
  }} data-testid="wrapper">
      <List gap="s">
        <ListItem {...props} />
      </List>
    </div>,
  args: {
    children: "List item",
    onClick: () => {},
    selected: false,
    disabled: false,
    hasPadding: undefined,
    interactive: undefined
  },
  argTypes: ListItemArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-row", "border-box", "p-s", "gap-xl")} style={{
    inlineSize: "750px"
  }}>
      <List gap="s">
        <ListItem onClick={() => {}}>Enabled</ListItem>
        <ListItem onClick={() => {}} data-state="hover">
          Hover
        </ListItem>
        <ListItem onClick={() => {}} data-state="pressed">
          Pressed
        </ListItem>
        <ListItem onClick={() => {}} data-state="focus">
          Focus
        </ListItem>
        <ListItem onClick={() => {}} disabled>
          Disabled
        </ListItem>
        <ListItem onClick={() => {}} selected>
          Selected
        </ListItem>
        <ListItem>Non interactive</ListItem>
        <ListDivider />
        <Menu.Trigger menu={<>
              <Menu.GroupLabel label="User" />
              <Menu.Item label="Profile" disabled />
              <Menu.Item label="Logout" />
              <Menu.Item label="Reload" />
              <Menu.Item label="Share" />
            </>}>
          <ListItem>Menu Integration</ListItem>
        </Menu.Trigger>
        <ListItem>
          Overflow Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </ListItem>
      </List>
      <List gap="s" hasPadding={false}>
        <ListItem onClick={() => {}} data-state="hover">
          <div className={classNames("flex", "flex-row", "border-box", "border-default", "w-full", "h-full", "font-body-s", "text-default")}>
            List hasPadding=true
          </div>
        </ListItem>
        <ListItem onClick={() => {}} hasPadding data-state="hover">
          <div className={classNames("flex", "flex-row", "border-box", "border-default", "w-full", "h-full", "font-body-s", "text-default")}>
            ListItem hasPadding
          </div>
        </ListItem>
      </List>
      <List gap="s" hasPadding>
        <ListItem onClick={() => {}} data-state="hover">
          <div className={classNames("flex", "flex-row", "border-box", "border-default", "w-full", "font-body-s", "text-default")}>
            List hasPadding=true
          </div>
        </ListItem>
        <ListItem onClick={() => {}} hasPadding={false} data-state="hover">
          <div className={classNames("flex", "flex-row", "border-box", "border-default", "w-full", "font-body-s", "text-default")}>
            ListItem hasPadding=false
          </div>
        </ListItem>
      </List>
      <List gap="s">
        <ListItem onClick={() => {}}>
          <div className={classNames("flex", "flex-row", "border-box", "content-center", "items-center", "justify-between")}>
            <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
              <div className={classNames("flex", "flex-col", "border-box")}>
                <h6 className={classNames("flex", "flex-row", "border-box", "font-label-m", "text-default")}>
                  Custom Item
                </h6>
                <p className={classNames("flex", "flex-row", "border-box", "font-body-s", "text-default")}>
                  3 tasks
                </p>
              </div>
            </div>
          </div>
        </ListItem>
        <ListItem onClick={() => {}} data-state="hover">
          <div className={classNames("flex", "flex-row", "border-box", "content-center", "items-center", "justify-between")}>
            <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
              <div className={classNames("flex", "flex-col", "border-box")}>
                <h6 className={classNames("flex", "flex-row", "border-box", "font-label-m", "text-default")}>
                  Custom Item hover
                </h6>
                <p className={classNames("flex", "flex-row", "border-box", "font-body-s", "text-default")}>
                  3 tasks
                </p>
              </div>
            </div>
          </div>
        </ListItem>
        <ListItem onClick={() => {}} data-state="focus">
          <div className={classNames("flex", "flex-row", "border-box", "content-center", "items-center", "justify-between")}>
            <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
              <div className={classNames("flex", "flex-col", "border-box")}>
                <h6 className={classNames("flex", "flex-row", "border-box", "font-label-m", "text-default")}>
                  Custom Item focus
                </h6>
                <p className={classNames("flex", "flex-row", "border-box", "font-body-s", "text-default")}>
                  3 tasks
                </p>
              </div>
            </div>
          </div>
        </ListItem>
        <ListItem onClick={() => {}} data-state="pressed">
          <div className={classNames("flex", "flex-row", "border-box", "content-center", "items-center", "justify-between")}>
            <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
              <div className={classNames("flex", "flex-col", "border-box")}>
                <h6 className={classNames("flex", "flex-row", "border-box", "font-label-m", "text-default")}>
                  Custom Item pressed
                </h6>
                <p className={classNames("flex", "flex-row", "border-box", "font-body-s", "text-default")}>
                  3 tasks
                </p>
              </div>
            </div>
          </div>
        </ListItem>
        <ListItem onClick={() => {}} selected>
          <div className={classNames("flex", "flex-row", "border-box", "content-center", "items-center", "justify-between")}>
            <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
              <div className={classNames("flex", "flex-col", "border-box")}>
                <h6 className={classNames("flex", "flex-row", "border-box", "font-label-m", "text-default")}>
                  Custom Item selected
                </h6>
                <p className={classNames("flex", "flex-row", "border-box", "font-body-s", "text-default")}>
                  2 tasks
                </p>
              </div>
            </div>
          </div>
        </ListItem>
      </List>
    </div>,
  parameters: {
    controls: {
      disable: true
    },
    pseudo: {
      hover: '[data-state="hover"] > button',
      active: '[data-state="pressed"] > button',
      focusVisible: '[data-state="focus"] > button'
    }
  }
}`,...b.parameters?.docs?.source}}},x=[`ListPlayground`,`ItemPlayground`,`VisualTest`]}));S();export{y as ItemPlayground,v as ListPlayground,b as VisualTest,x as __namedExportsOrder,_ as default,S as n,p as t};