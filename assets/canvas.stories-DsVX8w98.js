import{j as a,r as s}from"./iframe-CYyT-rNd.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Integration/canvas"};function u(){const n=s.useRef(null),c=640,l=400;return s.useEffect(()=>{if(!n.current)return;const t=n.current,r=getComputedStyle(t),e=t.getContext("2d");e&&(t.width=c,t.height=l,e.fillStyle=r.getPropertyValue("--sprout-common-background-color-default"),e.fillRect(50,50,200,100),e.strokeStyle=r.getPropertyValue("--sprout-common-border-default-color"),e.lineWidth=1,e.strokeRect(50,50,200,100),e.fillStyle=r.getPropertyValue("--sprout-common-foreground-color-default"),e.font=r.getPropertyValue("--sprout-heading-font-m"),e.fillText("Hello, Canvas!",60,120))}),a.jsx("div",{children:a.jsx("canvas",{ref:n})})}const o={parameters:{chromatic:{disableSnapshot:!0}},render:()=>a.jsx(u,{})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <CanvasComponent />
}`,...o.parameters?.docs?.source}}};const m=["Canvas"];export{o as Canvas,m as __namedExportsOrder,d as default};
