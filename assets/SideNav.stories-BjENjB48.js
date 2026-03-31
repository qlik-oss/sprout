import{n as e,r as t}from"./chunk-BneVvdWh.js";import{F as n,H as r,In as i,Ln as a,Pt as o,U as s,Ut as c,dn as l,jt as u,kn as d,v as f,vn as p,vt as m}from"./iframe-B0xl5hqz.js";import{n as h,r as g,t as _}from"./Icons-Bt98yIEE.js";var v,y,b,x,S=e((()=>{g(),v={variant:{control:{type:`select`},options:[void 0,`compact`],description:`If compact, applies compact spacing styles.`,table:{type:{summary:`'compact' | undefined`}}},children:{control:!1,description:`Content rendered inside SideNav.Nav.`,table:{type:{summary:`ReactNode`}}}},y={variant:{control:{type:`select`},options:[void 0,`compact`],description:`If compact, applies compact layout.`,table:{type:{summary:`'compact' | undefined`}}},icon:{control:{type:`select`},options:h,mapping:_,description:`Optional icon displayed before the label.`,table:{type:{summary:`ReactNode`}}},iconSize:{if:{arg:`variant`,eq:`compact`},control:{type:`select`},options:[void 0,`large`],description:`Icon size variant. Only applied when variant is compact.`,table:{type:{summary:`'large' | undefined`}}},label:{control:{type:`text`},description:`The text label of the navigation item.`,table:{type:{summary:`ReactNode`}}},indentation:{control:{type:`number`},description:`Indentation level of the item.`,table:{type:{summary:`number | undefined`}}},isExternal:{control:{type:`select`},options:[void 0,!0,!1],description:`If true, shows an external link indicator.`,table:{type:{summary:`boolean | undefined`}}}},b={label:{control:{type:`text`},description:`Optional visible label for the section.`,table:{type:{summary:`string | undefined`}}},level:{control:{type:`select`},options:[void 0,`h2`,`h3`,`h4`,`h5`,`h6`],description:"Heading level for the section label. Defaults to `h2` when omitted.",table:{type:{summary:`'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined`},defaultValue:{summary:`h2`}}},children:{control:!1,description:`Content rendered inside SideNav.Section.`,table:{type:{summary:`ReactNode`}}}},x={href:{control:{type:`text`},description:`Destination URL for the anchor element.`,table:{type:{summary:`string | undefined`}}},variant:{control:{type:`select`},options:[void 0,`compact`],description:`If compact, applies compact layout.`,table:{type:{summary:`'compact' | undefined`}}},icon:{control:{type:`select`},options:h,mapping:_,description:`Optional icon displayed before the label.`,table:{type:{summary:`ReactNode`}}},iconSize:{if:{arg:`variant`,eq:`compact`},control:{type:`select`},options:[void 0,`large`],description:`Icon size variant. Only applied when variant is compact.`,table:{type:{summary:`'large' | undefined`},defaultValue:{summary:`undefined`}}},label:{control:{type:`text`},description:`The text label of the link item.`,table:{type:{summary:`ReactNode`}}},indentation:{control:{type:`number`},description:`Indentation level of the link item.`,table:{type:{summary:`number | undefined`}}},isExternal:{control:{type:`select`},options:[void 0,!0,!1],description:`If true, shows an external link indicator.`,table:{type:{summary:`boolean | undefined`}}}}})),C=t({Item:()=>O,Link:()=>A,Nav:()=>D,Section:()=>k,VisualTest:()=>j,__namedExportsOrder:()=>M,default:()=>T}),w,T,E,D,O,k,A,j,M,N=e((()=>{f(),u(),S(),w=a(),T={title:`Components/SideNavigation`,component:n.Nav},E={chromatic:{disableSnapshot:!0}},D={name:`SideNav.Nav`,render:e=>(0,w.jsx)(`div`,{className:i(`flex`,`border-box`,`w-xl`,`border-default`,`radius-subtle`),children:(0,w.jsxs)(n.Nav,{...e,children:[(0,w.jsx)(n.Section,{label:`Files`,children:(0,w.jsxs)(r,{gap:`density-s`,children:[(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{href:`#upload`,icon:(0,w.jsx)(o,{}),label:`Uploads`})}),(0,w.jsx)(s,{hasPadding:!1,interactive:!0,selected:!0,children:(0,w.jsx)(n.Link,{href:`#recent`,"aria-current":`page`,icon:(0,w.jsx)(l,{}),label:`Recent`})}),(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{href:`#shared`,icon:(0,w.jsx)(c,{}),label:`Shared`})})]})}),(0,w.jsx)(m,{}),(0,w.jsx)(n.Section,{label:`Settings`,children:(0,w.jsxs)(r,{gap:`density-s`,children:[(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{href:`#profile`,label:`Profile`})}),(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{href:`#email`,label:`Email`,isExternal:!0,indentation:1})})]})})]})}),argTypes:v,parameters:E},O={name:`SideNav.Item`,render:e=>(0,w.jsx)(`div`,{className:i(`flex`,`border-box`,`w-xl`,`border-default`,`radius-subtle`),children:(0,w.jsx)(n.Item,{...e})}),args:{label:`Pinned dashboard`,icon:`FavoriteIcon`,indentation:1,isExternal:!1},argTypes:y,parameters:E},k={name:`SideNav.Section`,render:e=>(0,w.jsx)(`div`,{className:i(`flex`,`border-box`,`w-xl`,`border-default`,`radius-subtle`),children:(0,w.jsx)(n.Nav,{children:(0,w.jsx)(n.Section,{...e,children:(0,w.jsxs)(r,{gap:`density-s`,children:[(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{href:`#dashboards`,icon:(0,w.jsx)(p,{}),label:`Dashboards`})}),(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{href:`#history`,icon:(0,w.jsx)(l,{}),label:`History`})})]})})})}),args:{label:`Workspace`,level:`h2`},argTypes:b,parameters:E},A={name:`SideNav.Link`,render:e=>(0,w.jsx)(`div`,{className:i(`flex`,`border-box`,`w-xl`,`border-default`,`radius-subtle`),children:(0,w.jsx)(n.Link,{...e})}),args:{label:`Reports`,icon:`CloudUploadIcon`,indentation:1,isExternal:!1},argTypes:x,parameters:E},j={render:()=>(0,w.jsxs)(`div`,{className:i(`flex`,`flex-row`,`w-xl`,`gap-3xl`,`p-s`,`border-default`),children:[(0,w.jsxs)(n.Nav,{children:[(0,w.jsx)(n.Section,{label:`Default`,children:(0,w.jsxs)(r,{gap:`density-s`,children:[(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{href:`#upload`,icon:(0,w.jsx)(d,{}),label:`Uploads`})}),(0,w.jsx)(s,{hasPadding:!1,interactive:!0,selected:!0,children:(0,w.jsx)(n.Link,{href:`#recent`,"aria-current":`page`,icon:(0,w.jsx)(l,{}),label:`Recent`})}),(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{href:`#shared`,icon:(0,w.jsx)(c,{}),label:`Shared`,isExternal:!0})}),(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{href:`#shared`,icon:(0,w.jsx)(p,{}),label:`Extra long label with icon`})})]})}),(0,w.jsx)(m,{}),(0,w.jsx)(n.Section,{label:`Settings`,children:(0,w.jsxs)(r,{children:[(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{href:`#profile`,label:`Profile`})}),(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{href:`#email`,label:`email`,isExternal:!0,indentation:1})}),(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(`a`,{href:`#password`,target:`_blank`,rel:`noopener noreferrer`,style:{textDecoration:`none`,inlineSize:`100%`},children:(0,w.jsx)(n.Item,{label:`Custom link`})})})]})})]}),(0,w.jsx)(`div`,{className:i(`flex`,`w-fit`),children:(0,w.jsxs)(n.Nav,{variant:`compact`,children:[(0,w.jsx)(n.Section,{label:`Compact`,children:(0,w.jsxs)(r,{gap:`density-s`,children:[(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{variant:`compact`,href:`#upload`,icon:(0,w.jsx)(d,{}),label:`Uploads`})}),(0,w.jsx)(s,{hasPadding:!1,interactive:!0,selected:!0,children:(0,w.jsx)(n.Link,{variant:`compact`,href:`#recent`,"aria-current":`page`,icon:(0,w.jsx)(l,{}),label:`Recent`})}),(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{variant:`compact`,href:`#shared`,icon:(0,w.jsx)(c,{}),label:`Shared`,isExternal:!0})}),(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{variant:`compact`,href:`#shared`,icon:(0,w.jsx)(p,{height:void 0,width:void 0}),iconSize:`large`,label:`Extra long label with large icon`})})]})}),(0,w.jsx)(m,{}),(0,w.jsx)(n.Section,{label:`Only Icons`,children:(0,w.jsxs)(r,{children:[(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{variant:`compact`,href:`#upload`,icon:(0,w.jsx)(d,{}),"aria-label":`Uploads`})}),(0,w.jsx)(s,{hasPadding:!1,interactive:!0,selected:!0,children:(0,w.jsx)(n.Link,{variant:`compact`,href:`#recent`,"aria-current":`page`,icon:(0,w.jsx)(l,{}),"aria-label":`Recent`})}),(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{variant:`compact`,href:`#shared`,icon:(0,w.jsx)(c,{}),"aria-label":`Shared`,isExternal:!0})})]})})]})}),(0,w.jsxs)(n.Nav,{variant:`compact`,children:[(0,w.jsx)(n.Section,{label:`Compact with more space`,children:(0,w.jsxs)(r,{gap:`density-s`,children:[(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{variant:`compact`,href:`#upload`,icon:(0,w.jsx)(d,{}),label:`Uploads`})}),(0,w.jsx)(s,{hasPadding:!1,interactive:!0,selected:!0,children:(0,w.jsx)(n.Link,{variant:`compact`,href:`#recent`,"aria-current":`page`,icon:(0,w.jsx)(l,{}),label:`Recent`})}),(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{variant:`compact`,href:`#shared`,icon:(0,w.jsx)(c,{}),label:`Shared`,isExternal:!0})}),(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{variant:`compact`,href:`#shared`,icon:(0,w.jsx)(p,{height:void 0,width:void 0}),iconSize:`large`,label:`Extra long label with large icon`})})]})}),(0,w.jsx)(m,{}),(0,w.jsx)(n.Section,{label:`Only Icons`,children:(0,w.jsxs)(r,{children:[(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{variant:`compact`,href:`#upload`,icon:(0,w.jsx)(d,{}),"aria-label":`Uploads`})}),(0,w.jsx)(s,{hasPadding:!1,interactive:!0,selected:!0,children:(0,w.jsx)(n.Link,{variant:`compact`,href:`#recent`,"aria-current":`page`,icon:(0,w.jsx)(l,{}),"aria-label":`Recent`})}),(0,w.jsx)(s,{hasPadding:!1,interactive:!0,children:(0,w.jsx)(n.Link,{variant:`compact`,href:`#shared`,icon:(0,w.jsx)(c,{}),"aria-label":`Shared`,isExternal:!0})})]})})]})]}),parameters:{controls:{disable:!0}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "SideNav.Nav",
  render: props => <div className={classNames("flex", "border-box", "w-xl", "border-default", "radius-subtle")}>
      <SideNav.Nav {...props}>
        <SideNav.Section label="Files">
          <List gap="density-s">
            <ListItem hasPadding={false} interactive>
              <SideNav.Link href="#upload" icon={<UploadIcon />} label="Uploads" />
            </ListItem>
            <ListItem hasPadding={false} interactive selected>
              <SideNav.Link href="#recent" aria-current="page" icon={<HistoryIcon />} label="Recent" />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link href="#shared" icon={<ShareIcon />} label="Shared" />
            </ListItem>
          </List>
        </SideNav.Section>
        <Divider />
        <SideNav.Section label="Settings">
          <List gap="density-s">
            <ListItem hasPadding={false} interactive>
              <SideNav.Link href="#profile" label="Profile" />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link href="#email" label="Email" isExternal indentation={1} />
            </ListItem>
          </List>
        </SideNav.Section>
      </SideNav.Nav>
    </div>,
  argTypes: SideNavNavArgTypes,
  parameters: disableSnapshot
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "SideNav.Item",
  render: props => <div className={classNames("flex", "border-box", "w-xl", "border-default", "radius-subtle")}>
      <SideNav.Item {...props} />
    </div>,
  args: {
    label: "Pinned dashboard",
    icon: "FavoriteIcon",
    indentation: 1,
    isExternal: false
  },
  argTypes: SideNavItemArgTypes,
  parameters: disableSnapshot
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "SideNav.Section",
  render: props => <div className={classNames("flex", "border-box", "w-xl", "border-default", "radius-subtle")}>
      <SideNav.Nav>
        <SideNav.Section {...props}>
          <List gap="density-s">
            <ListItem hasPadding={false} interactive>
              <SideNav.Link href="#dashboards" icon={<FavoriteIcon />} label="Dashboards" />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link href="#history" icon={<HistoryIcon />} label="History" />
            </ListItem>
          </List>
        </SideNav.Section>
      </SideNav.Nav>
    </div>,
  args: {
    label: "Workspace",
    level: "h2"
  },
  argTypes: SideNavSectionArgTypes,
  parameters: disableSnapshot
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "SideNav.Link",
  render: props => <div className={classNames("flex", "border-box", "w-xl", "border-default", "radius-subtle")}>
      <SideNav.Link {...props} />
    </div>,
  args: {
    label: "Reports",
    icon: "CloudUploadIcon",
    indentation: 1,
    isExternal: false
  },
  argTypes: SideNavLinkArgTypes,
  parameters: disableSnapshot
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-row", "w-xl", "gap-3xl", "p-s", "border-default")}>
      <SideNav.Nav>
        <SideNav.Section label="Default">
          <List gap="density-s">
            <ListItem hasPadding={false} interactive>
              <SideNav.Link href="#upload" icon={<CloudUploadIcon />} label="Uploads" />
            </ListItem>
            <ListItem hasPadding={false} interactive selected>
              <SideNav.Link href="#recent" aria-current="page" icon={<HistoryIcon />} label="Recent" />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link href="#shared" icon={<ShareIcon />} label="Shared" isExternal />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link href="#shared" icon={<FavoriteIcon />} label="Extra long label with icon" />
            </ListItem>
          </List>
        </SideNav.Section>
        <Divider />
        <SideNav.Section label="Settings">
          <List>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link href="#profile" label="Profile" />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link href="#email" label="email" isExternal indentation={1} />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <a href="#password" target="_blank" rel="noopener noreferrer" style={{
              textDecoration: "none",
              inlineSize: "100%"
            }}>
                <SideNav.Item label="Custom link" />
              </a>
            </ListItem>
          </List>
        </SideNav.Section>
      </SideNav.Nav>
      <div className={classNames("flex", "w-fit")}>
        <SideNav.Nav variant="compact">
          <SideNav.Section label="Compact">
            <List gap="density-s">
              <ListItem hasPadding={false} interactive>
                <SideNav.Link variant="compact" href="#upload" icon={<CloudUploadIcon />} label="Uploads" />
              </ListItem>
              <ListItem hasPadding={false} interactive selected>
                <SideNav.Link variant="compact" href="#recent" aria-current="page" icon={<HistoryIcon />} label="Recent" />
              </ListItem>
              <ListItem hasPadding={false} interactive>
                <SideNav.Link variant="compact" href="#shared" icon={<ShareIcon />} label="Shared" isExternal />
              </ListItem>
              <ListItem hasPadding={false} interactive>
                <SideNav.Link variant="compact" href="#shared" icon={<FavoriteIcon height={undefined} width={undefined} />} iconSize="large" label="Extra long label with large icon" />
              </ListItem>
            </List>
          </SideNav.Section>
          <Divider />
          <SideNav.Section label="Only Icons">
            <List>
              <ListItem hasPadding={false} interactive>
                <SideNav.Link variant="compact" href="#upload" icon={<CloudUploadIcon />} aria-label="Uploads" />
              </ListItem>
              <ListItem hasPadding={false} interactive selected>
                <SideNav.Link variant="compact" href="#recent" aria-current="page" icon={<HistoryIcon />} aria-label="Recent" />
              </ListItem>
              <ListItem hasPadding={false} interactive>
                <SideNav.Link variant="compact" href="#shared" icon={<ShareIcon />} aria-label="Shared" isExternal />
              </ListItem>
            </List>
          </SideNav.Section>
        </SideNav.Nav>
      </div>

      <SideNav.Nav variant="compact">
        <SideNav.Section label="Compact with more space">
          <List gap="density-s">
            <ListItem hasPadding={false} interactive>
              <SideNav.Link variant="compact" href="#upload" icon={<CloudUploadIcon />} label="Uploads" />
            </ListItem>
            <ListItem hasPadding={false} interactive selected>
              <SideNav.Link variant="compact" href="#recent" aria-current="page" icon={<HistoryIcon />} label="Recent" />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link variant="compact" href="#shared" icon={<ShareIcon />} label="Shared" isExternal />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link variant="compact" href="#shared" icon={<FavoriteIcon height={undefined} width={undefined} />} iconSize="large" label="Extra long label with large icon" />
            </ListItem>
          </List>
        </SideNav.Section>
        <Divider />
        <SideNav.Section label="Only Icons">
          <List>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link variant="compact" href="#upload" icon={<CloudUploadIcon />} aria-label="Uploads" />
            </ListItem>
            <ListItem hasPadding={false} interactive selected>
              <SideNav.Link variant="compact" href="#recent" aria-current="page" icon={<HistoryIcon />} aria-label="Recent" />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link variant="compact" href="#shared" icon={<ShareIcon />} aria-label="Shared" isExternal />
            </ListItem>
          </List>
        </SideNav.Section>
      </SideNav.Nav>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...j.parameters?.docs?.source}}},M=[`Nav`,`Item`,`Section`,`Link`,`VisualTest`]}));N();export{O as Item,A as Link,D as Nav,k as Section,j as VisualTest,M as __namedExportsOrder,T as default,N as n,C as t};