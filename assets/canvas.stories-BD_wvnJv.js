import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Ln as n,ir as r}from"./iframe-B0xl5hqz.js";function i(){let e=(0,a.useRef)(null);return(0,a.useEffect)(()=>{if(!e.current)return;let t=e.current,n=getComputedStyle(t),r=t.getContext(`2d`);r&&(t.width=640,t.height=400,r.fillStyle=n.getPropertyValue(`--sprout-common-background-color-default`),r.fillRect(50,50,200,100),r.strokeStyle=n.getPropertyValue(`--sprout-common-border-default-color`),r.lineWidth=1,r.strokeRect(50,50,200,100),r.fillStyle=n.getPropertyValue(`--sprout-common-foreground-color-default`),r.font=n.getPropertyValue(`--sprout-heading-font-m`),r.fillText(`Hello, Canvas!`,60,120))}),(0,o.jsx)(`div`,{children:(0,o.jsx)(`canvas`,{ref:e})})}var a,o,s,c,l,u=t((()=>{a=e(r()),o=n(),s={title:`Integration/canvas`},c={parameters:{chromatic:{disableSnapshot:!0}},render:()=>(0,o.jsx)(i,{})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <CanvasComponent />
}`,...c.parameters?.docs?.source}}},l=[`Canvas`]}));u();export{c as Canvas,l as __namedExportsOrder,s as default,u as t};