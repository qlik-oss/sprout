import{j as e}from"./iframe-itHhOQJ8.js";import{F as n}from"./Tenant-B8iNkMMj.js";import{T as a}from"./Thumbnail-CC9DOBkf.js";import{c as r}from"./classNames-8u_YGv6N.js";const s=""+new URL("truck-DTX4rIZj.png",import.meta.url).href,m={size:{description:"The size of the thumbnail.",control:{type:"select"},options:["xs","s","m","l","xl"],table:{type:{summary:"string"},defaultValue:{summary:"m"}}},type:{description:'The type specifies the type of content expected inside the Thumbnail component. `type="icon"` expects an svg icon, while `type="img"` expects an image element.',control:{type:"select"},options:["icon","img"],table:{type:{summary:"string"}}},children:{table:{disable:!0}}},c={title:"Components/Thumbnail",component:a,args:{type:"icon"},argTypes:m},i={render:l=>e.jsx(a,{...l,children:l.type==="icon"?e.jsx(n,{}):e.jsx("img",{src:s,alt:"avatar"})}),parameters:{chromatic:{disableSnapshot:!0}}},t={render:()=>e.jsxs("div",{className:r("flex","gap-m","flex-col"),children:[e.jsxs("div",{className:r("flex","gap-m","flex-row"),children:[e.jsx(a,{size:"xl",type:"icon",children:e.jsx(n,{})}),e.jsx(a,{size:"l",type:"icon",children:e.jsx(n,{})}),e.jsx(a,{type:"icon",children:e.jsx(n,{})}),e.jsx(a,{size:"s",type:"icon",children:e.jsx(n,{})}),e.jsx(a,{size:"xs",type:"icon",children:e.jsx(n,{})})]}),e.jsxs("div",{className:r("flex","gap-m","flex-row"),children:[e.jsx(a,{size:"xl",type:"img",children:e.jsx("img",{src:s,alt:"avatar"})}),e.jsx(a,{size:"l",type:"img",children:e.jsx("img",{src:s,alt:"avatar"})}),e.jsx(a,{type:"img",children:e.jsx("img",{src:s,alt:"avatar"})}),e.jsx(a,{size:"s",type:"img",children:e.jsx("img",{src:s,alt:"avatar"})}),e.jsx(a,{size:"xs",type:"img",children:e.jsx("img",{src:s,alt:"avatar"})})]})]}),parameters:{controls:{disable:!0}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <Thumbnail {...props}>{props.type === "icon" ? <TenantIcon /> : <img src={src} alt="avatar" />}</Thumbnail>,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const o=["Playground","VisualTest"],d=Object.freeze(Object.defineProperty({__proto__:null,Playground:i,VisualTest:t,__namedExportsOrder:o,default:c},Symbol.toStringTag,{value:"Module"}));export{i as P,d as S};
