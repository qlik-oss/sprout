import{r as g,j as e}from"./iframe-ZO3EpHUh.js";import{F as D,a as m,b as p,c as j}from"./upload-n0dw6Lvi.js";import{F as f}from"./history-D4JWxRxn.js";import{c as v}from"./classNames--9J8KLdq.js";import{t as I}from"./sprout-tokens-C4H4srAS.js";import{s as o}from"./sprout-JWClaPEx.js";import{G as k}from"./GotoIcon-BJoJAFlT.js";import{u as O}from"./useId-peRdP77j.js";import{L as c,a as n}from"./List-Dc9_b6lv.js";import{D as L}from"./Divider-Bbj5__gU.js";const Z="_nav_compact_1rob6_1",z="_item_compact_1rob6_6",_={nav_compact:Z,item_compact:z},C=g.forwardRef(E);function E({variant:s,...r},l){return e.jsx("nav",{ref:l,...r,className:v("flex","flex-col","w-full","gap-m",{[_.nav_compact]:s==="compact"})})}E.displayName="SideNav.Nav";const y=g.forwardRef(R);function R({variant:s,icon:r,label:l,indentation:t,iconSize:x,isExternal:d,...h},N){const P=s==="compact"?x:void 0,b=e.jsxs(e.Fragment,{children:[!!r&&e.jsx("span",{className:o.classNames("text-default",{"size-xxl":P==="large","size-xl":P!=="large"}),children:r}),!!l&&e.jsx("span",{className:o.classNames("flex","grow-1","font-label-s","text-default",{"text-center":s==="compact"}),children:l})]});return s!=="compact"?e.jsxs("span",{ref:N,className:o.classNames("w-full","flex","border-box","flex-row","gap-l","py-density-l","pr-l","text-default"),style:{paddingInlineStart:t?`calc(${I.common_sizing_xl} + ${t||0} * ${I.common_sizing_xxl})`:I.common_sizing_xl},...h,children:[b,!!d&&e.jsx("span",{className:o.classNames("text-default","size-xl"),children:e.jsx(k,{width:void 0,height:void 0})})]}):e.jsxs("span",{ref:N,className:o.classNames("w-full","flex","flex-col","py-density-l","radius-subtle","gap-density-l","relative",_.item_compact),...h,children:[e.jsx("span",{className:o.classNames("flex","flex-col","items-center","px-m","gap-m"),children:b}),!!d&&e.jsx("span",{className:o.classNames("absolute","flex","shrink-0","text-default","size-m"),style:{insetBlockStart:"8px",insetInlineEnd:"8px"},children:e.jsx(k,{width:void 0,height:void 0})})]})}R.displayName="SideNav.Item";const F=g.forwardRef(U);function U({variant:s,icon:r,iconSize:l,label:t,indentation:x,isExternal:d,...h},N){return e.jsx("a",{ref:N,...h,className:v("flex","w-full","no-underline"),children:e.jsx(y,{variant:s,icon:r,iconSize:l,label:t,indentation:x,isExternal:d})})}U.displayName="SideNav.Link";const $=g.forwardRef(w);function w({label:s,level:r,children:l,...t},x){const d=O(),h=r||"h2";return e.jsxs("section",{ref:x,className:v("flex","flex-col"),...t,"aria-labelledby":s?d:void 0,children:[!!s&&e.jsx(h,{className:v("flex","py-l","px-xl","font-label-s-emphasized","text-default"),id:d,children:s}),l]})}w.displayName="SideNav.Section";const a={Nav:C,Item:y,Section:$,Link:F},H={title:"Components/SideNavigation",component:a.Nav},i={width:void 0,height:void 0},S={render:({label:s,indentation:r,isExternal:l,variant:t})=>e.jsxs(a.Nav,{variant:t,children:[e.jsx(a.Section,{label:"Files",children:e.jsxs(c,{gap:"density-s",children:[e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx(a.Link,{href:"#upload",icon:e.jsx(D,{...i}),label:"Uploads",variant:t})}),e.jsx(n,{hasPadding:!1,interactive:!0,selected:!0,children:e.jsx(a.Link,{href:"#recent","aria-current":"page",icon:e.jsx(f,{...i}),label:"Recent",variant:t})}),e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx(a.Link,{href:"#shared",icon:e.jsx(m,{...i}),label:"Shared",variant:t})})]})}),e.jsx(L,{}),e.jsx(a.Section,{label:"Settings",children:e.jsxs(c,{children:[e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx(a.Link,{href:"#profile",label:"Profile",variant:t})}),e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx(a.Link,{href:"#email",label:"email",variant:t,isExternal:l,indentation:r})}),e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx("a",{href:"#password",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.jsx(a.Item,{label:s,variant:t})})})]})})]}),args:{indentation:1,isExternal:!0,label:"Custom link"},argTypes:{variant:{control:{type:"select"},options:[void 0,"compact"]},indentation:{control:{type:"number"}},isExternal:{control:{type:"select"},options:[void 0,!0,!1]}},parameters:{chromatic:{disableSnapshot:!0}}},u={render:()=>e.jsxs("div",{className:v("flex","flex-row","w-xl","gap-3xl","p-s","border-default"),children:[e.jsxs(a.Nav,{children:[e.jsx(a.Section,{label:"Default",children:e.jsxs(c,{gap:"density-s",children:[e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx(a.Link,{href:"#upload",icon:e.jsx(p,{...i}),label:"Uploads"})}),e.jsx(n,{hasPadding:!1,interactive:!0,selected:!0,children:e.jsx(a.Link,{href:"#recent","aria-current":"page",icon:e.jsx(f,{...i}),label:"Recent"})}),e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx(a.Link,{href:"#shared",icon:e.jsx(m,{...i}),label:"Shared",isExternal:!0})}),e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx(a.Link,{href:"#shared",icon:e.jsx(j,{...i}),label:"Extra long label with icon"})})]})}),e.jsx(L,{}),e.jsx(a.Section,{label:"Settings",children:e.jsxs(c,{children:[e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx(a.Link,{href:"#profile",label:"Profile"})}),e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx(a.Link,{href:"#email",label:"email",isExternal:!0,indentation:1})}),e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx("a",{href:"#password",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",inlineSize:"100%"},children:e.jsx(a.Item,{label:"Custom link"})})})]})})]}),e.jsx("div",{className:v("flex","w-fit"),children:e.jsxs(a.Nav,{variant:"compact",children:[e.jsx(a.Section,{label:"Compact",children:e.jsxs(c,{gap:"density-s",children:[e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx(a.Link,{variant:"compact",href:"#upload",icon:e.jsx(p,{...i}),label:"Uploads"})}),e.jsx(n,{hasPadding:!1,interactive:!0,selected:!0,children:e.jsx(a.Link,{variant:"compact",href:"#recent","aria-current":"page",icon:e.jsx(f,{...i}),label:"Recent"})}),e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx(a.Link,{variant:"compact",href:"#shared",icon:e.jsx(m,{...i}),label:"Shared",isExternal:!0})}),e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx(a.Link,{variant:"compact",href:"#shared",icon:e.jsx(j,{...i}),iconSize:"large",label:"Extra long label with large icon"})})]})}),e.jsx(L,{}),e.jsx(a.Section,{label:"Only Icons",children:e.jsxs(c,{children:[e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx(a.Link,{variant:"compact",href:"#upload",icon:e.jsx(p,{...i}),"aria-label":"Uploads"})}),e.jsx(n,{hasPadding:!1,interactive:!0,selected:!0,children:e.jsx(a.Link,{variant:"compact",href:"#recent","aria-current":"page",icon:e.jsx(f,{...i}),"aria-label":"Recent"})}),e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx(a.Link,{variant:"compact",href:"#shared",icon:e.jsx(m,{...i}),"aria-label":"Shared",isExternal:!0})})]})})]})}),e.jsxs(a.Nav,{variant:"compact",children:[e.jsx(a.Section,{label:"Compact with more space",children:e.jsxs(c,{gap:"density-s",children:[e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx(a.Link,{variant:"compact",href:"#upload",icon:e.jsx(p,{...i}),label:"Uploads"})}),e.jsx(n,{hasPadding:!1,interactive:!0,selected:!0,children:e.jsx(a.Link,{variant:"compact",href:"#recent","aria-current":"page",icon:e.jsx(f,{...i}),label:"Recent"})}),e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx(a.Link,{variant:"compact",href:"#shared",icon:e.jsx(m,{...i}),label:"Shared",isExternal:!0})}),e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx(a.Link,{variant:"compact",href:"#shared",icon:e.jsx(j,{...i}),iconSize:"large",label:"Extra long label with large icon"})})]})}),e.jsx(L,{}),e.jsx(a.Section,{label:"Only Icons",children:e.jsxs(c,{children:[e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx(a.Link,{variant:"compact",href:"#upload",icon:e.jsx(p,{...i}),"aria-label":"Uploads"})}),e.jsx(n,{hasPadding:!1,interactive:!0,selected:!0,children:e.jsx(a.Link,{variant:"compact",href:"#recent","aria-current":"page",icon:e.jsx(f,{...i}),"aria-label":"Recent"})}),e.jsx(n,{hasPadding:!1,interactive:!0,children:e.jsx(a.Link,{variant:"compact",href:"#shared",icon:e.jsx(m,{...i}),"aria-label":"Shared",isExternal:!0})})]})})]})]}),parameters:{controls:{disable:!0}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: ({
    label,
    indentation,
    isExternal,
    variant
  }) => <SideNav.Nav variant={variant}>
      <SideNav.Section label="Files">
        <List gap="density-s">
          <ListItem hasPadding={false} interactive>
            <SideNav.Link href="#upload" icon={<UploadIcon {...UNZIED_PROPS} />} label="Uploads" variant={variant} />
          </ListItem>
          <ListItem hasPadding={false} interactive selected>
            <SideNav.Link href="#recent" aria-current="page" icon={<HistoryIcon {...UNZIED_PROPS} />} label="Recent" variant={variant} />
          </ListItem>
          <ListItem hasPadding={false} interactive>
            <SideNav.Link href="#shared" icon={<ShareIcon {...UNZIED_PROPS} />} label="Shared" variant={variant} />
          </ListItem>
        </List>
      </SideNav.Section>
      <Divider />
      <SideNav.Section label="Settings">
        <List>
          <ListItem hasPadding={false} interactive>
            <SideNav.Link href="#profile" label="Profile" variant={variant} />
          </ListItem>
          <ListItem hasPadding={false} interactive>
            <SideNav.Link href="#email" label="email" variant={variant} isExternal={isExternal} indentation={indentation} />
          </ListItem>
          <ListItem hasPadding={false} interactive>
            <a href="#password" target="_blank" rel="noopener noreferrer" style={{
            textDecoration: "none"
          }}>
              <SideNav.Item label={label} variant={variant} />
            </a>
          </ListItem>
        </List>
      </SideNav.Section>
    </SideNav.Nav>,
  args: {
    indentation: 1,
    isExternal: true,
    label: "Custom link"
  },
  argTypes: {
    variant: {
      control: {
        type: "select"
      },
      options: [undefined, "compact"]
    },
    indentation: {
      control: {
        type: "number"
      }
    },
    isExternal: {
      control: {
        type: "select"
      },
      options: [undefined, true, false]
    }
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...S.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-row", "w-xl", "gap-3xl", "p-s", "border-default")}>
      <SideNav.Nav>
        <SideNav.Section label="Default">
          <List gap="density-s">
            <ListItem hasPadding={false} interactive>
              <SideNav.Link href="#upload" icon={<CloudUploadIcon {...UNZIED_PROPS} />} label="Uploads" />
            </ListItem>
            <ListItem hasPadding={false} interactive selected>
              <SideNav.Link href="#recent" aria-current="page" icon={<HistoryIcon {...UNZIED_PROPS} />} label="Recent" />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link href="#shared" icon={<ShareIcon {...UNZIED_PROPS} />} label="Shared" isExternal />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link href="#shared" icon={<FavoriteIcon {...UNZIED_PROPS} />} label="Extra long label with icon" />
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
                <SideNav.Link variant="compact" href="#upload" icon={<CloudUploadIcon {...UNZIED_PROPS} />} label="Uploads" />
              </ListItem>
              <ListItem hasPadding={false} interactive selected>
                <SideNav.Link variant="compact" href="#recent" aria-current="page" icon={<HistoryIcon {...UNZIED_PROPS} />} label="Recent" />
              </ListItem>
              <ListItem hasPadding={false} interactive>
                <SideNav.Link variant="compact" href="#shared" icon={<ShareIcon {...UNZIED_PROPS} />} label="Shared" isExternal />
              </ListItem>
              <ListItem hasPadding={false} interactive>
                <SideNav.Link variant="compact" href="#shared" icon={<FavoriteIcon {...UNZIED_PROPS} />} iconSize="large" label="Extra long label with large icon" />
              </ListItem>
            </List>
          </SideNav.Section>
          <Divider />
          <SideNav.Section label="Only Icons">
            <List>
              <ListItem hasPadding={false} interactive>
                <SideNav.Link variant="compact" href="#upload" icon={<CloudUploadIcon {...UNZIED_PROPS} />} aria-label="Uploads" />
              </ListItem>
              <ListItem hasPadding={false} interactive selected>
                <SideNav.Link variant="compact" href="#recent" aria-current="page" icon={<HistoryIcon {...UNZIED_PROPS} />} aria-label="Recent" />
              </ListItem>
              <ListItem hasPadding={false} interactive>
                <SideNav.Link variant="compact" href="#shared" icon={<ShareIcon {...UNZIED_PROPS} />} aria-label="Shared" isExternal />
              </ListItem>
            </List>
          </SideNav.Section>
        </SideNav.Nav>
      </div>

      <SideNav.Nav variant="compact">
        <SideNav.Section label="Compact with more space">
          <List gap="density-s">
            <ListItem hasPadding={false} interactive>
              <SideNav.Link variant="compact" href="#upload" icon={<CloudUploadIcon {...UNZIED_PROPS} />} label="Uploads" />
            </ListItem>
            <ListItem hasPadding={false} interactive selected>
              <SideNav.Link variant="compact" href="#recent" aria-current="page" icon={<HistoryIcon {...UNZIED_PROPS} />} label="Recent" />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link variant="compact" href="#shared" icon={<ShareIcon {...UNZIED_PROPS} />} label="Shared" isExternal />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link variant="compact" href="#shared" icon={<FavoriteIcon {...UNZIED_PROPS} />} iconSize="large" label="Extra long label with large icon" />
            </ListItem>
          </List>
        </SideNav.Section>
        <Divider />
        <SideNav.Section label="Only Icons">
          <List>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link variant="compact" href="#upload" icon={<CloudUploadIcon {...UNZIED_PROPS} />} aria-label="Uploads" />
            </ListItem>
            <ListItem hasPadding={false} interactive selected>
              <SideNav.Link variant="compact" href="#recent" aria-current="page" icon={<HistoryIcon {...UNZIED_PROPS} />} aria-label="Recent" />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link variant="compact" href="#shared" icon={<ShareIcon {...UNZIED_PROPS} />} aria-label="Shared" isExternal />
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
}`,...u.parameters?.docs?.source}}};const T=["Playground","VisualTest"],X=Object.freeze(Object.defineProperty({__proto__:null,Playground:S,VisualTest:u,__namedExportsOrder:T,default:H},Symbol.toStringTag,{value:"Module"}));export{S as P,X as S};
