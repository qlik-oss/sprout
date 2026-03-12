import{j as e}from"./iframe-DuYosUFD.js";import{F as a}from"./tenant-r2v49Krg.js";import{T as n}from"./Thumbnail-cZO6_aVY.js";import{c as r}from"./classNames-zePBlFY_.js";const s=""+new URL("truck-DTX4rIZj.png",import.meta.url).href,m={size:{description:"The size of the thumbnail.",control:{type:"select"},options:["xs","s","m","l","xl"],table:{type:{summary:"string"},defaultValue:{summary:"m"}}},type:{description:'The type specifies the type of content expected inside the Thumbnail component. `type="icon"` expects an svg icon, while `type="img"` expects an image element.',control:{type:"select"},options:["icon","img"],table:{type:{summary:"string"}}},children:{table:{disable:!0}}},c={title:"Components/Thumbnail",component:n,args:{type:"icon"},argTypes:m},i={render:l=>e.jsx(n,{...l,children:l.type==="icon"?e.jsx(a,{}):e.jsx("img",{src:s,alt:"avatar"})}),parameters:{chromatic:{disableSnapshot:!0}}},t={render:()=>e.jsxs("div",{className:r("flex","gap-m","flex-col"),children:[e.jsxs("div",{className:r("flex","gap-m","flex-row"),children:[e.jsx(n,{size:"xl",type:"icon",children:e.jsx(a,{})}),e.jsx(n,{size:"l",type:"icon",children:e.jsx(a,{})}),e.jsx(n,{type:"icon",children:e.jsx(a,{})}),e.jsx(n,{size:"s",type:"icon",children:e.jsx(a,{})}),e.jsx(n,{size:"xs",type:"icon",children:e.jsx(a,{})})]}),e.jsxs("div",{className:r("flex","gap-m","flex-row"),children:[e.jsx(n,{size:"xl",type:"img",children:e.jsx("img",{src:s,alt:"avatar"})}),e.jsx(n,{size:"l",type:"img",children:e.jsx("img",{src:s,alt:"avatar"})}),e.jsx(n,{type:"img",children:e.jsx("img",{src:s,alt:"avatar"})}),e.jsx(n,{size:"s",type:"img",children:e.jsx("img",{src:s,alt:"avatar"})}),e.jsx(n,{size:"xs",type:"img",children:e.jsx("img",{src:s,alt:"avatar"})})]})]}),parameters:{controls:{disable:!0}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <Thumbnail {...props}>
      {props.type === "icon" ? <TenantIcon /> : <img src={src} alt="avatar" />}
    </Thumbnail>,
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
