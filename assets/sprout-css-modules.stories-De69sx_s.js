import{j as r}from"./iframe-BQJExRCF.js";import{s as a}from"./sprout-DxA14K3u.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"CSS/sprout-css-modules"},{classNames:d,...o}=a,l=Object.keys(o).filter(e=>!e.includes("_"));l.sort();const s={name:"classNames",render:({classNames:e})=>r.jsx("div",{className:a.classNames("flex","border-default"),children:r.jsx("div",{className:a.classNames(...e),children:"Hello world"})}),parameters:{chromatic:{disableSnapshot:!0}},args:{classNames:["flex","border-box","p-xl"]},argTypes:{classNames:{control:{type:"multi-select"},rows:10,options:l}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "classNames",
  // eslint-disable-next-line @typescript-eslint/no-shadow
  render: ({
    classNames
  }) => <div className={sprout.classNames("flex", "border-default")}>
      <div className={sprout.classNames(...classNames)}>Hello world</div>
    </div>,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    classNames: ["flex", "border-box", "p-xl"]
  },
  argTypes: {
    classNames: {
      control: {
        type: "multi-select"
      },
      rows: 10,
      options: classesValue
    }
  }
}`,...s.parameters?.docs?.source}}};const i=["Playground"];export{s as Playground,i as __namedExportsOrder,m as default};
