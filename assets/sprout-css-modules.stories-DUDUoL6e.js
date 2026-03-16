import"./react-sE-G6KV_.js";import{t as e}from"./sprout-DH_pwd-g.js";import{t}from"./jsx-runtime-BtS28q-4.js";var n=t(),r={title:`CSS/sprout-css-modules`},{classNames:i,...a}=e,o=Object.keys(a).filter(e=>!e.includes(`_`));o.sort();var s={name:`classNames`,render:({classNames:t})=>(0,n.jsx)(`div`,{className:e.classNames(`flex`,`border-default`),children:(0,n.jsx)(`div`,{className:e.classNames(...t),children:`Hello world`})}),parameters:{chromatic:{disableSnapshot:!0}},args:{classNames:[`flex`,`border-box`,`p-xl`]},argTypes:{classNames:{control:{type:`multi-select`},rows:10,options:o}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};var c=[`Playground`];export{s as Playground,c as __namedExportsOrder,r as default};