import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{Nn as n,d as r,ki as i,t as a,xn as o}from"./sprout-react-KA55n9ke.js";import{t as s}from"./jsx-runtime-Bq1bXGty.js";var c,l=e((()=>{c=``+new URL(`truck-DTX4rIZj.png`,import.meta.url).href})),u,d=e((()=>{u={size:{description:`The size of the thumbnail.`,control:{type:`select`},options:[`xs`,`s`,`m`,`l`,`xl`],table:{type:{summary:`string`},defaultValue:{summary:`m`}}},type:{description:'The type specifies the type of content expected inside the Thumbnail component. `type="icon"` expects an svg icon, while `type="img"` expects an image element.',control:{type:`select`},options:[`icon`,`img`],table:{type:{summary:`string`}}},children:{table:{disable:!0}}}})),f=t({Playground:()=>h,VisualTest:()=>g,__namedExportsOrder:()=>_,default:()=>m}),p,m,h,g,_,v=e((()=>{a(),o(),l(),d(),p=s(),m={title:`Components/Thumbnail`,component:r,args:{type:`icon`},argTypes:u},h={render:e=>(0,p.jsx)(r,{...e,children:e.type===`icon`?(0,p.jsx)(n,{}):(0,p.jsx)(`img`,{src:c,alt:`avatar`})}),parameters:{chromatic:{disableSnapshot:!0}}},g={render:()=>(0,p.jsxs)(`div`,{className:i(`flex`,`gap-m`,`flex-col`),children:[(0,p.jsxs)(`div`,{className:i(`flex`,`gap-m`,`flex-row`),children:[(0,p.jsx)(r,{size:`xl`,type:`icon`,children:(0,p.jsx)(n,{})}),(0,p.jsx)(r,{size:`l`,type:`icon`,children:(0,p.jsx)(n,{})}),(0,p.jsx)(r,{type:`icon`,children:(0,p.jsx)(n,{})}),(0,p.jsx)(r,{size:`s`,type:`icon`,children:(0,p.jsx)(n,{})}),(0,p.jsx)(r,{size:`xs`,type:`icon`,children:(0,p.jsx)(n,{})})]}),(0,p.jsxs)(`div`,{className:i(`flex`,`gap-m`,`flex-row`),children:[(0,p.jsx)(r,{size:`xl`,type:`img`,children:(0,p.jsx)(`img`,{src:c,alt:`avatar`})}),(0,p.jsx)(r,{size:`l`,type:`img`,children:(0,p.jsx)(`img`,{src:c,alt:`avatar`})}),(0,p.jsx)(r,{type:`img`,children:(0,p.jsx)(`img`,{src:c,alt:`avatar`})}),(0,p.jsx)(r,{size:`s`,type:`img`,children:(0,p.jsx)(`img`,{src:c,alt:`avatar`})}),(0,p.jsx)(r,{size:`xs`,type:`img`,children:(0,p.jsx)(`img`,{src:c,alt:`avatar`})})]})]}),parameters:{controls:{disable:!0}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: props => <Thumbnail {...props}>
      {props.type === "icon" ? <TenantIcon /> : <img src={src} alt="avatar" />}
    </Thumbnail>,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "gap-m", "flex-col")}>
      <div className={classNames("flex", "gap-m", "flex-row")}>
        <Thumbnail size="xl" type="icon">
          <TenantIcon />
        </Thumbnail>
        <Thumbnail size="l" type="icon">
          <TenantIcon />
        </Thumbnail>
        <Thumbnail type="icon">
          <TenantIcon />
        </Thumbnail>
        <Thumbnail size="s" type="icon">
          <TenantIcon />
        </Thumbnail>
        <Thumbnail size="xs" type="icon">
          <TenantIcon />
        </Thumbnail>
      </div>
      <div className={classNames("flex", "gap-m", "flex-row")}>
        <Thumbnail size="xl" type="img">
          <img src={src} alt="avatar" />
        </Thumbnail>
        <Thumbnail size="l" type="img">
          <img src={src} alt="avatar" />
        </Thumbnail>
        <Thumbnail type="img">
          <img src={src} alt="avatar" />
        </Thumbnail>
        <Thumbnail size="s" type="img">
          <img src={src} alt="avatar" />
        </Thumbnail>
        <Thumbnail size="xs" type="img">
          <img src={src} alt="avatar" />
        </Thumbnail>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`VisualTest`]}));v();export{h as Playground,g as VisualTest,_ as __namedExportsOrder,m as default,v as n,f as t};