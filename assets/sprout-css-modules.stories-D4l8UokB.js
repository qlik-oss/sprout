import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./sprout-CTw7vb1V.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";var i,a,o,s,c,l,u,d=e((()=>{n(),i=r(),a={title:`CSS/sprout-css-modules`},{classNames:o,...s}=t,c=Object.keys(s).filter(e=>!e.includes(`_`)),c.sort(),l={name:`classNames`,render:({classNames:e})=>(0,i.jsx)(`div`,{className:t.classNames(`flex`,`border-default`),children:(0,i.jsx)(`div`,{className:t.classNames(...e),children:`Hello world`})}),parameters:{chromatic:{disableSnapshot:!0}},args:{classNames:[`flex`,`border-box`,`p-xl`]},argTypes:{classNames:{control:{type:`multi-select`},rows:10,options:c}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Playground`]}));d();export{l as Playground,u as __namedExportsOrder,a as default,d as t};