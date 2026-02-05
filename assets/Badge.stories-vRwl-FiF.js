import{j as e}from"./iframe-BThSoDrn.js";import{B as a}from"./Badge-BD7yv9SE.js";import{c as i}from"./classNames-dIthk07I.js";import{A as t}from"./Avatar-BAhtQgTE.js";import{B as x}from"./Button-DPdoSvtR.js";const c={variant:{control:{type:"select"},options:["dot","alphanumeric"],description:"Select `alphanumeric` to display text inside the badge. `dot` shows a simple indicator without text.",table:{defaultValue:{summary:"dot"},type:{summary:"dot | alphanumeric"}}},color:{control:{type:"select"},description:"Color variant of the badge. When undefined, it defaults to the neutral variant.",options:["neutral","info","success","warning","danger","selected"],table:{defaultValue:{summary:"neutral"},type:{summary:"info | success | warning | danger | selected | neutral"}}},text:{if:{arg:"variant",eq:"alphanumeric"},control:{type:"text"},description:"Text to display inside the badge. Only applicable when variant is 'alphanumeric'.",table:{type:{summary:"string"}}}},m={title:"Components/Badge"},p={chromatic:{disableSnapshot:!0}},o={render:({...r})=>e.jsx("div",{className:i("flex","flex-row","w-fit","p-s"),"data-testid":"wrapper",children:e.jsx(a,{...r})}),args:{variant:"dot"},argTypes:c,parameters:p},s={render:r=>e.jsx("div",{children:e.jsx(t,{size:"s",text:"OC",badge:e.jsx(a,{...r})})}),parameters:{...p},args:{text:"1",variant:"alphanumeric",color:"danger"},argTypes:c},n={render:r=>e.jsx("div",{className:i("flex","flex-row","w-fit","p-s"),"data-testid":"wrapper",children:e.jsx(a,{...r})}),args:{type:"dot"},argTypes:{type:{control:{type:"select"},options:["dot","number"]},text:{control:{type:"text"}},color:c.color}};function d({children:r}){return e.jsx("h2",{className:i("p-0","m-0","font-heading-s","text-default"),children:r})}const l={render:()=>e.jsxs("div",{className:i("flex","flex-col","border-box","w-fit","p-s","gap-m"),"data-testid":"wrapper",children:[e.jsx(d,{children:"Dot"}),e.jsx(a,{}),e.jsx(a,{color:"info"}),e.jsx(a,{color:"danger"}),e.jsx(a,{color:"warning"}),e.jsx(a,{color:"success"}),e.jsx(a,{color:"selected"}),e.jsx(d,{children:"Number"}),e.jsx(a,{text:"p",variant:"alphanumeric"}),e.jsx(a,{text:"d",variant:"alphanumeric",color:"info"}),e.jsx(a,{text:"2",variant:"alphanumeric",color:"danger"}),e.jsx(a,{text:"1",variant:"alphanumeric",color:"warning"}),e.jsx(a,{text:"1",variant:"alphanumeric",color:"success"}),e.jsx(a,{text:"1",variant:"alphanumeric",color:"selected"}),e.jsx(d,{children:"Text"}),e.jsx(a,{text:"hello worlp",variant:"alphanumeric"}),e.jsx(a,{text:"hello worlp natural overflow",variant:"alphanumeric",color:"selected"}),e.jsxs("div",{className:i("flex","flex-col","gap-s","overflow-hidden"),style:{inlineSize:50},children:[e.jsx(a,{text:"hello world what happens when the container shrinks ?",variant:"alphanumeric"}),e.jsx(a,{text:"hello world",variant:"alphanumeric"})]}),e.jsx(d,{children:"With Avatar"}),e.jsx(t,{size:"xs",text:"OC",badge:e.jsx(a,{color:"info"})}),e.jsx(t,{size:"s",text:"OC",badge:e.jsx(a,{color:"info"})}),e.jsx(t,{text:"OC",badge:e.jsx(a,{color:"info"})}),e.jsx(t,{size:"l",text:"OC",badge:e.jsx(a,{color:"info"})}),e.jsx(t,{size:"xl",text:"OC",badge:e.jsx(a,{color:"info"})}),e.jsx("h2",{children:"Within Button"}),e.jsx(x,{variant:"default",label:"label",justified:!0,asDropdown:!0,badge:{text:"hello world truncated",variant:"alphanumeric"}})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ({
    ...props
  }) => <div className={classNames("flex", "flex-row", "w-fit", "p-s")} data-testid="wrapper">
      <Badge {...props} />
    </div>,
  args: {
    variant: "dot"
  },
  argTypes: BadgeArgTypes,
  parameters
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <div>
      <Avatar size="s" text="OC" badge={<Badge {...props} />} />
    </div>,
  parameters: {
    ...parameters
  },
  args: {
    text: "1",
    variant: "alphanumeric",
    color: "danger"
  },
  argTypes: BadgeArgTypes
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("flex", "flex-row", "w-fit", "p-s")} data-testid="wrapper">
      <Badge {...props} />
    </div>,
  args: {
    type: "dot"
  },
  argTypes: {
    type: {
      control: {
        type: "select"
      },
      options: ["dot", "number"]
    },
    text: {
      control: {
        type: "text"
      }
    },
    color: BadgeArgTypes.color
  }
}`,...n.parameters?.docs?.source},description:{story:"@deprecated The `type` prop is deprecated and will be removed in future releases. Remove this story once the `type` prop is removed.",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s", "gap-m")} data-testid="wrapper">
      <H2>Dot</H2>
      <Badge />
      <Badge color="info" />
      <Badge color="danger" />
      <Badge color="warning" />
      <Badge color="success" />
      <Badge color="selected" />

      <H2>Number</H2>
      <Badge text="p" variant="alphanumeric" />
      <Badge text="d" variant="alphanumeric" color="info" />
      <Badge text="2" variant="alphanumeric" color="danger" />
      <Badge text="1" variant="alphanumeric" color="warning" />
      <Badge text="1" variant="alphanumeric" color="success" />
      <Badge text="1" variant="alphanumeric" color="selected" />

      <H2>Text</H2>
      <Badge text="hello worlp" variant="alphanumeric" />
      <Badge text="hello worlp natural overflow" variant="alphanumeric" color="selected" />
      <div className={classNames("flex", "flex-col", "gap-s", "overflow-hidden")} style={{
      inlineSize: 50
    }}>
        <Badge text="hello world what happens when the container shrinks ?" variant="alphanumeric" />
        <Badge text="hello world" variant="alphanumeric" />
      </div>

      <H2>With Avatar</H2>
      <Avatar size="xs" text="OC" badge={<Badge color="info" />} />
      <Avatar size="s" text="OC" badge={<Badge color="info" />} />
      <Avatar text="OC" badge={<Badge color="info" />} />
      <Avatar size="l" text="OC" badge={<Badge color="info" />} />
      <Avatar size="xl" text="OC" badge={<Badge color="info" />} />
      <h2>Within Button</h2>
      <Button variant="default" label="label" justified asDropdown badge={{
      text: "hello world truncated",
      variant: "alphanumeric"
    }} />
    </div>
}`,...l.parameters?.docs?.source}}};const u=["Playground","WithAvatar","DeprecatedTypeProp","VisualTest"],w=Object.freeze(Object.defineProperty({__proto__:null,DeprecatedTypeProp:n,Playground:o,VisualTest:l,WithAvatar:s,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{o as P,w as S};
