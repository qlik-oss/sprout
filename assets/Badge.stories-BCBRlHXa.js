import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Dt as n,Fn as r,Pn as i,ht as a,v as o,wt as s}from"./iframe-RiXBydPV.js";var c,l=e((()=>{c={variant:{control:{type:`select`},options:[`dot`,`alphanumeric`],description:"Select `alphanumeric` to display text inside the badge. `dot` shows a simple indicator without text.",table:{defaultValue:{summary:`dot`},type:{summary:`dot | alphanumeric`}}},color:{control:{type:`select`},description:`Color variant of the badge. When undefined, it defaults to the neutral variant.`,options:[`neutral`,`info`,`success`,`warning`,`danger`,`selected`],table:{defaultValue:{summary:`neutral`},type:{summary:`info | success | warning | danger | selected | neutral`}}},text:{if:{arg:`variant`,eq:`alphanumeric`},control:{type:`text`},description:`Text to display inside the badge. Only applicable when variant is 'alphanumeric'.`,table:{type:{summary:`string`}}}}})),u=t({DeprecatedTypeProp:()=>_,Playground:()=>h,VisualTest:()=>v,WithAvatar:()=>g,__namedExportsOrder:()=>y,default:()=>p});function d({children:e}){return(0,f.jsx)(`h2`,{className:i(`p-0`,`m-0`,`font-heading-s`,`text-default`),children:e})}var f,p,m,h,g,_,v,y,b=e((()=>{o(),l(),f=r(),p={title:`Components/Badge`},m={chromatic:{disableSnapshot:!0}},h={render:({...e})=>(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`w-fit`,`p-s`),"data-testid":`wrapper`,children:(0,f.jsx)(n,{...e})}),args:{variant:`dot`},argTypes:c,parameters:m},g={render:e=>(0,f.jsx)(`div`,{children:(0,f.jsx)(a,{size:`s`,text:`OC`,badge:(0,f.jsx)(n,{...e})})}),parameters:{...m},args:{text:`1`,variant:`alphanumeric`,color:`danger`},argTypes:c},_={render:e=>(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`w-fit`,`p-s`),"data-testid":`wrapper`,children:(0,f.jsx)(n,{...e})}),args:{type:`dot`},argTypes:{type:{control:{type:`select`},options:[`dot`,`number`]},text:{control:{type:`text`}},color:c.color}},v={render:()=>(0,f.jsxs)(`div`,{className:i(`flex`,`flex-col`,`border-box`,`w-fit`,`p-s`,`gap-m`),"data-testid":`wrapper`,children:[(0,f.jsx)(d,{children:`Dot`}),(0,f.jsx)(n,{}),(0,f.jsx)(n,{color:`info`}),(0,f.jsx)(n,{color:`danger`}),(0,f.jsx)(n,{color:`warning`}),(0,f.jsx)(n,{color:`success`}),(0,f.jsx)(n,{color:`selected`}),(0,f.jsx)(d,{children:`Number`}),(0,f.jsx)(n,{text:`p`,variant:`alphanumeric`}),(0,f.jsx)(n,{text:`d`,variant:`alphanumeric`,color:`info`}),(0,f.jsx)(n,{text:`2`,variant:`alphanumeric`,color:`danger`}),(0,f.jsx)(n,{text:`1`,variant:`alphanumeric`,color:`warning`}),(0,f.jsx)(n,{text:`1`,variant:`alphanumeric`,color:`success`}),(0,f.jsx)(n,{text:`1`,variant:`alphanumeric`,color:`selected`}),(0,f.jsx)(d,{children:`Text`}),(0,f.jsx)(n,{text:`hello worlp`,variant:`alphanumeric`}),(0,f.jsx)(n,{text:`hello worlp natural overflow`,variant:`alphanumeric`,color:`selected`}),(0,f.jsxs)(`div`,{className:i(`flex`,`flex-col`,`gap-s`,`overflow-hidden`),style:{inlineSize:50},children:[(0,f.jsx)(n,{text:`hello world what happens when the container shrinks ?`,variant:`alphanumeric`}),(0,f.jsx)(n,{text:`hello world`,variant:`alphanumeric`})]}),(0,f.jsx)(d,{children:`With Avatar`}),(0,f.jsx)(a,{size:`xs`,text:`OC`,badge:(0,f.jsx)(n,{color:`info`})}),(0,f.jsx)(a,{size:`s`,text:`OC`,badge:(0,f.jsx)(n,{color:`info`})}),(0,f.jsx)(a,{text:`OC`,badge:(0,f.jsx)(n,{color:`info`})}),(0,f.jsx)(a,{size:`l`,text:`OC`,badge:(0,f.jsx)(n,{color:`info`})}),(0,f.jsx)(a,{size:`xl`,text:`OC`,badge:(0,f.jsx)(n,{color:`info`})}),(0,f.jsx)(`h2`,{children:`Within Button`}),(0,f.jsx)(s,{variant:`default`,label:`label`,justified:!0,asDropdown:!0,badge:{text:`hello world truncated`,variant:`alphanumeric`}})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:"@deprecated The `type` prop is deprecated and will be removed in future releases. Remove this story once the `type` prop is removed.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`WithAvatar`,`DeprecatedTypeProp`,`VisualTest`]}));b();export{_ as DeprecatedTypeProp,h as Playground,v as VisualTest,g as WithAvatar,y as __namedExportsOrder,p as default,b as n,u as t};