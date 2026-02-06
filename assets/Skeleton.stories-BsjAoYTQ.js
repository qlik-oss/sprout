import{j as e}from"./iframe-itHhOQJ8.js";import{S as a}from"./Skeleton-skQ_3lbg.js";import{c as t}from"./classNames-8u_YGv6N.js";const l={variant:{options:[void 0,"text","circle","rectangle","Button","IconButton","Input","InputField"],control:{type:"select"},description:"The default variant is `text`. You can build your own variant by using composition.",table:{type:{summary:"rectangle | circle | text | Button | IconButton | Input | InputField"}}},width:{description:"The width of the skeleton. The default value depend on the variant.",table:{type:{summary:'CSSProperties["width"]'}}},height:{description:"The height of the skeleton. The default value depend on the variant.",table:{type:{summary:'CSSProperties["height"]'}}}},o={title:"Components/Skeleton",component:a,parameters:{}},n={render:r=>e.jsx("div",{className:t("flex","flex-col","p-s","gap-s","h-auto","w-s"),"data-testid":"wrapper",children:e.jsx(a,{...r})}),argTypes:l,parameters:{chromatic:{disableSnapshot:!0}}},s={render:()=>e.jsxs("div",{className:t("flex","flex-col","gap-s"),children:[e.jsx("h2",{className:t("font-heading-s","text-default"),children:'variant="text"'}),e.jsx(a,{variant:"text"}),e.jsx("h2",{className:t("font-heading-s","text-default"),children:'variant="circle"'}),e.jsx(a,{variant:"circle"}),e.jsx("h2",{className:t("font-heading-s","text-default"),children:'variant="rectangle"'}),e.jsx(a,{variant:"rectangle"}),e.jsx("h2",{className:t("font-heading-s","text-default"),children:'variant="Button"'}),e.jsx(a,{variant:"Button"}),e.jsx("h2",{className:t("font-heading-s","text-default"),children:'variant="IconButton"'}),e.jsx(a,{variant:"IconButton"}),e.jsx("h2",{className:t("font-heading-s","text-default"),children:'variant="Input"'}),e.jsx(a,{variant:"Input"}),e.jsx("h2",{className:t("font-heading-s","text-default"),children:'variant="InputField"'}),e.jsx(a,{variant:"InputField"})]}),parameters:{controls:{disable:!0}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("flex", "flex-col", "p-s", "gap-s", "h-auto", "w-s")} data-testid="wrapper">
      <Skeleton {...props} />
    </div>,
  argTypes: SkeletonArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "gap-s")}>
      <h2 className={classNames("font-heading-s", "text-default")}>variant="text"</h2>
      <Skeleton variant="text" />
      <h2 className={classNames("font-heading-s", "text-default")}>variant="circle"</h2>
      <Skeleton variant="circle" />
      <h2 className={classNames("font-heading-s", "text-default")}>variant="rectangle"</h2>
      <Skeleton variant="rectangle" />
      <h2 className={classNames("font-heading-s", "text-default")}>variant="Button"</h2>
      <Skeleton variant="Button" />
      <h2 className={classNames("font-heading-s", "text-default")}>variant="IconButton"</h2>
      <Skeleton variant="IconButton" />
      <h2 className={classNames("font-heading-s", "text-default")}>variant="Input"</h2>
      <Skeleton variant="Input" />
      <h2 className={classNames("font-heading-s", "text-default")}>variant="InputField"</h2>
      <Skeleton variant="InputField" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...s.parameters?.docs?.source}}};const i=["Playground","VisualTest"],h=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,VisualTest:s,__namedExportsOrder:i,default:o},Symbol.toStringTag,{value:"Module"}));export{n as P,h as S};
