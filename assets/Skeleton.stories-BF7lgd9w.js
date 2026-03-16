import{n as e}from"./chunk-DseTPa7n.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{S as n,hn as r}from"./iframe-BRSAI4nO.js";var i={variant:{options:[void 0,`text`,`circle`,`rectangle`,`Button`,`IconButton`,`Input`,`InputField`],control:{type:`select`},description:"The default variant is `text`. You can build your own variant by using composition.",table:{type:{summary:`rectangle | circle | text | Button | IconButton | Input | InputField`}}},width:{description:`The width of the skeleton. The default value depend on the variant.`,table:{type:{summary:`CSSProperties["width"]`}}},height:{description:`The height of the skeleton. The default value depend on the variant.`,table:{type:{summary:`CSSProperties["height"]`}}}},a=e({Playground:()=>c,VisualTest:()=>l,__namedExportsOrder:()=>u,default:()=>s}),o=t(),s={title:`Components/Skeleton`,component:n,parameters:{}},c={render:e=>(0,o.jsx)(`div`,{className:r(`flex`,`flex-col`,`p-s`,`gap-s`,`h-auto`,`w-s`),"data-testid":`wrapper`,children:(0,o.jsx)(n,{...e})}),argTypes:i,parameters:{chromatic:{disableSnapshot:!0}}},l={render:()=>(0,o.jsxs)(`div`,{className:r(`flex`,`flex-col`,`gap-s`),children:[(0,o.jsx)(`h2`,{className:r(`font-heading-s`,`text-default`),children:`variant="text"`}),(0,o.jsx)(n,{variant:`text`}),(0,o.jsx)(`h2`,{className:r(`font-heading-s`,`text-default`),children:`variant="circle"`}),(0,o.jsx)(n,{variant:`circle`}),(0,o.jsx)(`h2`,{className:r(`font-heading-s`,`text-default`),children:`variant="rectangle"`}),(0,o.jsx)(n,{variant:`rectangle`}),(0,o.jsx)(`h2`,{className:r(`font-heading-s`,`text-default`),children:`variant="Button"`}),(0,o.jsx)(n,{variant:`Button`}),(0,o.jsx)(`h2`,{className:r(`font-heading-s`,`text-default`),children:`variant="IconButton"`}),(0,o.jsx)(n,{variant:`IconButton`}),(0,o.jsx)(`h2`,{className:r(`font-heading-s`,`text-default`),children:`variant="Input"`}),(0,o.jsx)(n,{variant:`Input`}),(0,o.jsx)(`h2`,{className:r(`font-heading-s`,`text-default`),children:`variant="InputField"`}),(0,o.jsx)(n,{variant:`InputField`})]}),parameters:{controls:{disable:!0}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("flex", "flex-col", "p-s", "gap-s", "h-auto", "w-s")} data-testid="wrapper">
      <Skeleton {...props} />
    </div>,
  argTypes: SkeletonArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "gap-s")}>
      <h2 className={classNames("font-heading-s", "text-default")}>
        variant="text"
      </h2>
      <Skeleton variant="text" />
      <h2 className={classNames("font-heading-s", "text-default")}>
        variant="circle"
      </h2>
      <Skeleton variant="circle" />
      <h2 className={classNames("font-heading-s", "text-default")}>
        variant="rectangle"
      </h2>
      <Skeleton variant="rectangle" />
      <h2 className={classNames("font-heading-s", "text-default")}>
        variant="Button"
      </h2>
      <Skeleton variant="Button" />
      <h2 className={classNames("font-heading-s", "text-default")}>
        variant="IconButton"
      </h2>
      <Skeleton variant="IconButton" />
      <h2 className={classNames("font-heading-s", "text-default")}>
        variant="Input"
      </h2>
      <Skeleton variant="Input" />
      <h2 className={classNames("font-heading-s", "text-default")}>
        variant="InputField"
      </h2>
      <Skeleton variant="InputField" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...l.parameters?.docs?.source}}};var u=[`Playground`,`VisualTest`];export{c as Playground,l as VisualTest,u as __namedExportsOrder,s as default,a as t};