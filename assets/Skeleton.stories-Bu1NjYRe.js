import{n as e,r as t}from"./chunk-BneVvdWh.js";import{In as n,Ln as r,q as i,v as a}from"./iframe-B0xl5hqz.js";var o,s=e((()=>{o={variant:{options:[void 0,`text`,`circle`,`rectangle`,`Button`,`IconButton`,`Input`,`InputField`],control:{type:`select`},description:"The default variant is `text`. You can build your own variant by using composition.",table:{type:{summary:`rectangle | circle | text | Button | IconButton | Input | InputField`}}},width:{description:`The width of the skeleton. The default value depend on the variant.`,table:{type:{summary:`CSSProperties["width"]`}}},height:{description:`The height of the skeleton. The default value depend on the variant.`,table:{type:{summary:`CSSProperties["height"]`}}}}})),c=t({Playground:()=>d,VisualTest:()=>f,__namedExportsOrder:()=>p,default:()=>u}),l,u,d,f,p,m=e((()=>{a(),s(),l=r(),u={title:`Components/Skeleton`,component:i,parameters:{}},d={render:e=>(0,l.jsx)(`div`,{className:n(`flex`,`flex-col`,`p-s`,`gap-s`,`h-auto`,`w-s`),"data-testid":`wrapper`,children:(0,l.jsx)(i,{...e})}),argTypes:o,parameters:{chromatic:{disableSnapshot:!0}}},f={render:()=>(0,l.jsxs)(`div`,{className:n(`flex`,`flex-col`,`gap-s`),children:[(0,l.jsx)(`h2`,{className:n(`font-heading-s`,`text-default`),children:`variant="text"`}),(0,l.jsx)(i,{variant:`text`}),(0,l.jsx)(`h2`,{className:n(`font-heading-s`,`text-default`),children:`variant="circle"`}),(0,l.jsx)(i,{variant:`circle`}),(0,l.jsx)(`h2`,{className:n(`font-heading-s`,`text-default`),children:`variant="rectangle"`}),(0,l.jsx)(i,{variant:`rectangle`}),(0,l.jsx)(`h2`,{className:n(`font-heading-s`,`text-default`),children:`variant="Button"`}),(0,l.jsx)(i,{variant:`Button`}),(0,l.jsx)(`h2`,{className:n(`font-heading-s`,`text-default`),children:`variant="IconButton"`}),(0,l.jsx)(i,{variant:`IconButton`}),(0,l.jsx)(`h2`,{className:n(`font-heading-s`,`text-default`),children:`variant="Input"`}),(0,l.jsx)(i,{variant:`Input`}),(0,l.jsx)(`h2`,{className:n(`font-heading-s`,`text-default`),children:`variant="InputField"`}),(0,l.jsx)(i,{variant:`InputField`})]}),parameters:{controls:{disable:!0}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("flex", "flex-col", "p-s", "gap-s", "h-auto", "w-s")} data-testid="wrapper">
      <Skeleton {...props} />
    </div>,
  argTypes: SkeletonArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`VisualTest`]}));m();export{d as Playground,f as VisualTest,p as __namedExportsOrder,u as default,m as n,c as t};