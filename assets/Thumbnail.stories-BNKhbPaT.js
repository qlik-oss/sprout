import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./jsx-runtime-BqsN2jGA.js";import{O as r,R as i,ar as a,qn as o,ta as s}from"./iframe-UwarwtgL.js";var c,l=t((()=>{c=``+new URL(`truck-DTX4rIZj.png`,import.meta.url).href})),u,d=t((()=>{u={size:{description:`The size of the thumbnail.`,control:{type:`select`},options:[`xs`,`s`,`m`,`l`,`xl`],table:{type:{summary:`string`},defaultValue:{summary:`m`}}},type:{description:'The type specifies the type of content expected inside the Thumbnail component. `type="icon"` expects an svg icon, while `type="img"` expects an image element.',control:{type:`select`},options:[`icon`,`img`],table:{type:{summary:`string`}}},children:{table:{disable:!0}}}})),f=e({Playground:()=>h,VisualTest:()=>g,__namedExportsOrder:()=>_,default:()=>m}),p,m,h,g,_,v=t((()=>{r(),o(),l(),d(),p=n(),m={title:`Components/Thumbnail`,component:i,args:{type:`icon`},argTypes:u},h={render:e=>(0,p.jsx)(i,{...e,children:e.type===`icon`?(0,p.jsx)(a,{}):(0,p.jsx)(`img`,{src:c,alt:`avatar`})}),parameters:{chromatic:{disableSnapshot:!0}}},g={render:()=>(0,p.jsxs)(`div`,{className:s(`flex`,`gap-m`,`flex-col`),children:[(0,p.jsxs)(`div`,{className:s(`flex`,`gap-m`,`flex-row`),children:[(0,p.jsx)(i,{size:`xl`,type:`icon`,children:(0,p.jsx)(a,{})}),(0,p.jsx)(i,{size:`l`,type:`icon`,children:(0,p.jsx)(a,{})}),(0,p.jsx)(i,{type:`icon`,children:(0,p.jsx)(a,{})}),(0,p.jsx)(i,{size:`s`,type:`icon`,children:(0,p.jsx)(a,{})}),(0,p.jsx)(i,{size:`xs`,type:`icon`,children:(0,p.jsx)(a,{})})]}),(0,p.jsxs)(`div`,{className:s(`flex`,`gap-m`,`flex-row`),children:[(0,p.jsx)(i,{size:`xl`,type:`img`,children:(0,p.jsx)(`img`,{src:c,alt:`avatar`})}),(0,p.jsx)(i,{size:`l`,type:`img`,children:(0,p.jsx)(`img`,{src:c,alt:`avatar`})}),(0,p.jsx)(i,{type:`img`,children:(0,p.jsx)(`img`,{src:c,alt:`avatar`})}),(0,p.jsx)(i,{size:`s`,type:`img`,children:(0,p.jsx)(`img`,{src:c,alt:`avatar`})}),(0,p.jsx)(i,{size:`xs`,type:`img`,children:(0,p.jsx)(`img`,{src:c,alt:`avatar`})})]})]}),parameters:{controls:{disable:!0}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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