import{n as e}from"./chunk-DseTPa7n.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t as n}from"./Avatar-DMWRDvJ7.js";import{J as r,et as i,hn as a}from"./iframe-B5xoaqtW.js";var o={variant:{control:{type:`select`},options:[`dot`,`alphanumeric`],description:"Select `alphanumeric` to display text inside the badge. `dot` shows a simple indicator without text.",table:{defaultValue:{summary:`dot`},type:{summary:`dot | alphanumeric`}}},color:{control:{type:`select`},description:`Color variant of the badge. When undefined, it defaults to the neutral variant.`,options:[`neutral`,`info`,`success`,`warning`,`danger`,`selected`],table:{defaultValue:{summary:`neutral`},type:{summary:`info | success | warning | danger | selected | neutral`}}},text:{if:{arg:`variant`,eq:`alphanumeric`},control:{type:`text`},description:`Text to display inside the badge. Only applicable when variant is 'alphanumeric'.`,table:{type:{summary:`string`}}}},s=e({DeprecatedTypeProp:()=>p,Playground:()=>d,VisualTest:()=>h,WithAvatar:()=>f,__namedExportsOrder:()=>g,default:()=>l}),c=t(),l={title:`Components/Badge`},u={chromatic:{disableSnapshot:!0}},d={render:({...e})=>(0,c.jsx)(`div`,{className:a(`flex`,`flex-row`,`w-fit`,`p-s`),"data-testid":`wrapper`,children:(0,c.jsx)(i,{...e})}),args:{variant:`dot`},argTypes:o,parameters:u},f={render:e=>(0,c.jsx)(`div`,{children:(0,c.jsx)(n,{size:`s`,text:`OC`,badge:(0,c.jsx)(i,{...e})})}),parameters:{...u},args:{text:`1`,variant:`alphanumeric`,color:`danger`},argTypes:o},p={render:e=>(0,c.jsx)(`div`,{className:a(`flex`,`flex-row`,`w-fit`,`p-s`),"data-testid":`wrapper`,children:(0,c.jsx)(i,{...e})}),args:{type:`dot`},argTypes:{type:{control:{type:`select`},options:[`dot`,`number`]},text:{control:{type:`text`}},color:o.color}};function m({children:e}){return(0,c.jsx)(`h2`,{className:a(`p-0`,`m-0`,`font-heading-s`,`text-default`),children:e})}var h={render:()=>(0,c.jsxs)(`div`,{className:a(`flex`,`flex-col`,`border-box`,`w-fit`,`p-s`,`gap-m`),"data-testid":`wrapper`,children:[(0,c.jsx)(m,{children:`Dot`}),(0,c.jsx)(i,{}),(0,c.jsx)(i,{color:`info`}),(0,c.jsx)(i,{color:`danger`}),(0,c.jsx)(i,{color:`warning`}),(0,c.jsx)(i,{color:`success`}),(0,c.jsx)(i,{color:`selected`}),(0,c.jsx)(m,{children:`Number`}),(0,c.jsx)(i,{text:`p`,variant:`alphanumeric`}),(0,c.jsx)(i,{text:`d`,variant:`alphanumeric`,color:`info`}),(0,c.jsx)(i,{text:`2`,variant:`alphanumeric`,color:`danger`}),(0,c.jsx)(i,{text:`1`,variant:`alphanumeric`,color:`warning`}),(0,c.jsx)(i,{text:`1`,variant:`alphanumeric`,color:`success`}),(0,c.jsx)(i,{text:`1`,variant:`alphanumeric`,color:`selected`}),(0,c.jsx)(m,{children:`Text`}),(0,c.jsx)(i,{text:`hello worlp`,variant:`alphanumeric`}),(0,c.jsx)(i,{text:`hello worlp natural overflow`,variant:`alphanumeric`,color:`selected`}),(0,c.jsxs)(`div`,{className:a(`flex`,`flex-col`,`gap-s`,`overflow-hidden`),style:{inlineSize:50},children:[(0,c.jsx)(i,{text:`hello world what happens when the container shrinks ?`,variant:`alphanumeric`}),(0,c.jsx)(i,{text:`hello world`,variant:`alphanumeric`})]}),(0,c.jsx)(m,{children:`With Avatar`}),(0,c.jsx)(n,{size:`xs`,text:`OC`,badge:(0,c.jsx)(i,{color:`info`})}),(0,c.jsx)(n,{size:`s`,text:`OC`,badge:(0,c.jsx)(i,{color:`info`})}),(0,c.jsx)(n,{text:`OC`,badge:(0,c.jsx)(i,{color:`info`})}),(0,c.jsx)(n,{size:`l`,text:`OC`,badge:(0,c.jsx)(i,{color:`info`})}),(0,c.jsx)(n,{size:`xl`,text:`OC`,badge:(0,c.jsx)(i,{color:`info`})}),(0,c.jsx)(`h2`,{children:`Within Button`}),(0,c.jsx)(r,{variant:`default`,label:`label`,justified:!0,asDropdown:!0,badge:{text:`hello world truncated`,variant:`alphanumeric`}})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:"@deprecated The `type` prop is deprecated and will be removed in future releases. Remove this story once the `type` prop is removed.",...p.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};var g=[`Playground`,`WithAvatar`,`DeprecatedTypeProp`,`VisualTest`];export{p as DeprecatedTypeProp,d as Playground,h as VisualTest,f as WithAvatar,g as __namedExportsOrder,l as default,s as t};