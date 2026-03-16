import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-sE-G6KV_.js";import{t as n}from"./jsx-runtime-BtS28q-4.js";var r=e(t()),i=n(),a={title:`Integration/canvas`};function o(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(!e.current)return;let t=e.current,n=getComputedStyle(t),r=t.getContext(`2d`);r&&(t.width=640,t.height=400,r.fillStyle=n.getPropertyValue(`--sprout-common-background-color-default`),r.fillRect(50,50,200,100),r.strokeStyle=n.getPropertyValue(`--sprout-common-border-default-color`),r.lineWidth=1,r.strokeRect(50,50,200,100),r.fillStyle=n.getPropertyValue(`--sprout-common-foreground-color-default`),r.font=n.getPropertyValue(`--sprout-heading-font-m`),r.fillText(`Hello, Canvas!`,60,120))}),(0,i.jsx)(`div`,{children:(0,i.jsx)(`canvas`,{ref:e})})}var s={parameters:{chromatic:{disableSnapshot:!0}},render:()=>(0,i.jsx)(o,{})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <CanvasComponent />
}`,...s.parameters?.docs?.source}}};var c=[`Canvas`];export{s as Canvas,c as __namedExportsOrder,a as default};