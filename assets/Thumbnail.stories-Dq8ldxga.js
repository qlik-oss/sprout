import{n as e}from"./chunk-DseTPa7n.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t as n}from"./Thumbnail-DXfGG4Vh.js";import{hn as r,pt as i}from"./iframe-DTk7xy32.js";var a=``+new URL(`truck-DTX4rIZj.png`,import.meta.url).href,o={size:{description:`The size of the thumbnail.`,control:{type:`select`},options:[`xs`,`s`,`m`,`l`,`xl`],table:{type:{summary:`string`},defaultValue:{summary:`m`}}},type:{description:'The type specifies the type of content expected inside the Thumbnail component. `type="icon"` expects an svg icon, while `type="img"` expects an image element.',control:{type:`select`},options:[`icon`,`img`],table:{type:{summary:`string`}}},children:{table:{disable:!0}}},s=e({Playground:()=>u,VisualTest:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c=t(),l={title:`Components/Thumbnail`,component:n,args:{type:`icon`},argTypes:o},u={render:e=>(0,c.jsx)(n,{...e,children:e.type===`icon`?(0,c.jsx)(i,{}):(0,c.jsx)(`img`,{src:a,alt:`avatar`})}),parameters:{chromatic:{disableSnapshot:!0}}},d={render:()=>(0,c.jsxs)(`div`,{className:r(`flex`,`gap-m`,`flex-col`),children:[(0,c.jsxs)(`div`,{className:r(`flex`,`gap-m`,`flex-row`),children:[(0,c.jsx)(n,{size:`xl`,type:`icon`,children:(0,c.jsx)(i,{})}),(0,c.jsx)(n,{size:`l`,type:`icon`,children:(0,c.jsx)(i,{})}),(0,c.jsx)(n,{type:`icon`,children:(0,c.jsx)(i,{})}),(0,c.jsx)(n,{size:`s`,type:`icon`,children:(0,c.jsx)(i,{})}),(0,c.jsx)(n,{size:`xs`,type:`icon`,children:(0,c.jsx)(i,{})})]}),(0,c.jsxs)(`div`,{className:r(`flex`,`gap-m`,`flex-row`),children:[(0,c.jsx)(n,{size:`xl`,type:`img`,children:(0,c.jsx)(`img`,{src:a,alt:`avatar`})}),(0,c.jsx)(n,{size:`l`,type:`img`,children:(0,c.jsx)(`img`,{src:a,alt:`avatar`})}),(0,c.jsx)(n,{type:`img`,children:(0,c.jsx)(`img`,{src:a,alt:`avatar`})}),(0,c.jsx)(n,{size:`s`,type:`img`,children:(0,c.jsx)(`img`,{src:a,alt:`avatar`})}),(0,c.jsx)(n,{size:`xs`,type:`img`,children:(0,c.jsx)(`img`,{src:a,alt:`avatar`})})]})]}),parameters:{controls:{disable:!0}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: props => <Thumbnail {...props}>
      {props.type === "icon" ? <TenantIcon /> : <img src={src} alt="avatar" />}
    </Thumbnail>,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};var f=[`Playground`,`VisualTest`];export{u as Playground,d as VisualTest,f as __namedExportsOrder,l as default,s as t};