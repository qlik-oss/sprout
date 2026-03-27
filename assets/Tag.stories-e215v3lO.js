import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Dt as n,Fn as r,J as i,Ot as a,Pn as o,X as s,Y as c,Z as l,ht as u,v as d}from"./iframe-RiXBydPV.js";var f,p,m,h=e((()=>{f=[void 0,`s`],p=[void 0,`error`,`info`,`success`,`warning`],m={text:{control:{type:`text`},description:`The text content displayed in the tag.`,table:{type:{summary:`string`}}},size:{control:{type:`select`},options:f,description:`Size of the tag. When undefined, the tag uses default size.`,table:{defaultValue:{summary:`default`},type:{summary:`s | undefined`}}},color:{control:{type:`select`},options:p,description:`Color variant of the tag. When undefined, uses neutral color. Not available on TagLink and TagButton variants.`,table:{defaultValue:{summary:`neutral`},type:{summary:`error | info | success | warning | undefined`}}},avatar:{control:!1,description:`Avatar component displayed at the start of the tag. See [Avatar](./?path=/docs/components-avatar--docs) for details.`,table:{type:{summary:`ReactNode`}}},icon:{control:!1,description:`Icon component displayed at the start of the tag, before the text.`,table:{type:{summary:`ReactNode`}}},badge:{control:!1,description:`Badge component or badge props displayed at the end of the tag. See [Badge](./?path=/docs/components-badge--docs) for details.`,table:{type:{summary:`BadgeProps | ReactElement<typeof Badge>`}}},onRemove:{control:!1,description:`Callback function called when the remove button is clicked. When provided, a remove button is displayed. Not available on TagLink and TagButton variants.`,table:{type:{summary:`() => void`}}},removeLabel:{control:{type:`text`},description:`Custom label for the remove button. Defaults to 'remove' from i18n translations.`,table:{defaultValue:{summary:`'remove'`},type:{summary:`string`}}},id:{control:{type:`text`},description:`HTML id attribute for the tag element.`,table:{type:{summary:`string`}}}}})),g=t({GroupPlayground:()=>C,Playground:()=>S,Removable:()=>w,VisualTests:()=>O,WithAvatar:()=>T,WithBadge:()=>D,WithIcon:()=>E,__namedExportsOrder:()=>k,default:()=>b});function _(){return(0,v.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,v.jsx)(`g`,{clipPath:`url(#clip0_20897_69)`,children:(0,v.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M9.3 9.7L9 10H8V12H6V14H4V16H0V13L6.3 6.7C6.1 6.2 6 5.6 6 5C6 2.2 8.2 0 11 0C13.8 0 16 2.2 16 5C16 7.8 13.8 10 11 10C10.4 10 9.8 9.9 9.3 9.7ZM7 9H8.58579L9.05916 8.52663L9.67139 8.77152C10.0316 8.91559 10.5015 9 11 9C13.2477 9 15 7.24771 15 5C15 2.75228 13.2477 1 11 1C8.75229 1 7 2.75228 7 5C7 5.49845 7.08441 5.96843 7.22848 6.32861L7.47337 6.94084L1 13.4142V15H3V13H5V11H7V9ZM12 5C11.4667 5 11 4.53333 11 4C11 3.46667 11.4667 3 12 3C12.5333 3 13 3.46667 13 4C13 4.53333 12.5333 5 12 5Z`,fill:`currentColor`})}),(0,v.jsx)(`defs`,{children:(0,v.jsx)(`clipPath`,{id:`clip0_20897_69`,children:(0,v.jsx)(`rect`,{width:`16`,height:`16`,fill:`white`})})})]})}var v,y,b,x,S,C,w,T,E,D,O,k,A=e((()=>{d(),h(),v=r(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/Tag`,component:l,argTypes:m},x={chromatic:{disableSnapshot:!0}},S={render:e=>(0,v.jsx)(`div`,{className:o(`flex`,`border-box`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,v.jsx)(l,{...e})}),args:{text:`Tag`,onRemove:void 0},parameters:{...x}},C={render:e=>(0,v.jsxs)(s,{children:[(0,v.jsx)(l,{...e}),(0,v.jsx)(l,{...e}),(0,v.jsx)(l,{...e}),(0,v.jsx)(l,{...e})]}),args:S.args,parameters:{...x}},w={render:e=>(0,v.jsx)(`div`,{className:o(`flex`,`border-box`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,v.jsx)(l,{...e})}),args:{text:`Tag`,onRemove:y()},parameters:{...x}},T={render:e=>(0,v.jsx)(`div`,{className:o(`flex`,`border-box`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,v.jsx)(l,{...e,avatar:(0,v.jsx)(u,{size:`s`,text:`OC`})})}),args:{text:`Olivier Carnac`},parameters:x},E={render:e=>(0,v.jsx)(`div`,{className:o(`flex`,`border-box`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,v.jsx)(l,{...e,icon:(0,v.jsx)(_,{})})}),args:{text:`ABCD-1234-EFGH-5678`},parameters:x},D={render:e=>(0,v.jsx)(`div`,{className:o(`flex`,`border-box`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,v.jsx)(l,{...e,badge:(0,v.jsx)(n,{text:`14`,variant:`alphanumeric`})})}),args:{text:`App`},parameters:x},O={render:()=>(0,v.jsxs)(`div`,{className:o(`flex`,`flex-col`,`gap-s`),children:[(0,v.jsxs)(`div`,{className:o(`flex`,`flex-col`,`gap-s`),children:[(0,v.jsx)(`h2`,{className:o(`font-heading-m`,`text-default`),children:`Default`}),(0,v.jsxs)(s,{children:[(0,v.jsx)(l,{text:`Tag`}),(0,v.jsx)(l,{text:`Tag error`,color:`error`}),(0,v.jsx)(l,{text:`Tag info`,color:`info`}),(0,v.jsx)(l,{text:`Tag success`,color:`success`}),(0,v.jsx)(a,{title:`Tooltip over tag`,initialOpen:!0,children:(0,v.jsx)(l,{text:`Tag warning`,color:`warning`})}),(0,v.jsx)(l,{text:`Tag text is really too long`})]}),(0,v.jsxs)(s,{children:[(0,v.jsx)(l,{text:`onRemove`,onRemove:()=>{}}),(0,v.jsx)(l,{text:`onRemove error`,color:`error`,onRemove:()=>{}}),(0,v.jsx)(l,{text:`onRemove info`,color:`info`,onRemove:()=>{}}),(0,v.jsx)(l,{text:`onRemove success`,color:`success`,onRemove:()=>{}}),(0,v.jsx)(l,{text:`onRemove warning`,color:`warning`,onRemove:()=>{}})]}),(0,v.jsxs)(s,{children:[(0,v.jsx)(c,{href:`#`,text:`TagLink`}),(0,v.jsx)(c,{href:`#`,text:`TagLink`,"data-testid":`hover`}),(0,v.jsx)(c,{href:`#`,text:`TagLink`,"data-testid":`active`}),(0,v.jsx)(c,{href:`#`,text:`TagLink`,"data-testid":`focus`}),(0,v.jsx)(c,{href:`#`,text:`TagLink`,"aria-disabled":`true`})]}),(0,v.jsxs)(s,{children:[(0,v.jsx)(i,{onClick:()=>{},text:`TagButton`}),(0,v.jsx)(i,{onClick:()=>{},text:`TagButton`,"data-testid":`hover`}),(0,v.jsx)(i,{onClick:()=>{},text:`TagButton`,"data-testid":`active`}),(0,v.jsx)(i,{onClick:()=>{},text:`TagButton`,"data-testid":`focus`}),(0,v.jsx)(i,{onClick:()=>{},text:`TagButton`,"aria-disabled":`true`})]}),(0,v.jsx)(l,{text:`With icon`,icon:(0,v.jsx)(_,{})}),(0,v.jsxs)(`div`,{className:o(`flex`,`flex-row`,`gap-s`),children:[(0,v.jsx)(l,{text:`With badge`,badge:(0,v.jsx)(n,{text:`14`,variant:`alphanumeric`})}),(0,v.jsx)(l,{text:`Apps`,badge:{text:`14`,variant:`alphanumeric`,color:`info`}}),(0,v.jsx)(l,{text:`Boolean`,color:`success`,badge:{text:`true`,variant:`alphanumeric`,color:`success`}})]}),(0,v.jsxs)(`div`,{className:o(`flex`,`flex-row`,`gap-s`,`w-xxs`),children:[(0,v.jsx)(l,{text:`With badge`,badge:(0,v.jsx)(n,{text:`14`,variant:`alphanumeric`})}),(0,v.jsx)(l,{text:`Apps`,badge:{text:`14`,variant:`alphanumeric`,color:`info`}}),(0,v.jsx)(l,{text:`Boolean`,color:`success`,badge:{text:`true`,variant:`alphanumeric`,color:`success`}})]})]}),(0,v.jsxs)(`div`,{className:o(`flex`,`flex-col`,`gap-s`),children:[(0,v.jsx)(`h2`,{className:o(`font-heading-m`,`text-default`),children:`Small`}),(0,v.jsxs)(s,{children:[(0,v.jsx)(l,{size:`s`,text:`Tag`}),(0,v.jsx)(l,{size:`s`,text:`Tag error`,color:`error`}),(0,v.jsx)(l,{size:`s`,text:`Tag info`,color:`info`}),(0,v.jsx)(l,{size:`s`,text:`Tag success`,color:`success`}),(0,v.jsx)(l,{size:`s`,text:`Tag warning`,color:`warning`})]}),(0,v.jsxs)(s,{children:[(0,v.jsx)(l,{size:`s`,text:`onRemove`,onRemove:()=>{}}),(0,v.jsx)(l,{size:`s`,text:`onRemove error`,color:`error`,onRemove:()=>{}}),(0,v.jsx)(l,{size:`s`,text:`onRemove info`,color:`info`,onRemove:()=>{}}),(0,v.jsx)(l,{size:`s`,text:`onRemove success`,color:`success`,onRemove:()=>{}}),(0,v.jsx)(l,{size:`s`,text:`onRemove warning`,color:`warning`,onRemove:()=>{}})]}),(0,v.jsxs)(s,{children:[(0,v.jsx)(c,{size:`s`,href:`#`,text:`TagLink`}),(0,v.jsx)(c,{size:`s`,href:`#`,text:`TagLink`,"data-testid":`hover`}),(0,v.jsx)(c,{size:`s`,href:`#`,text:`TagLink`,"data-testid":`active`}),(0,v.jsx)(c,{size:`s`,href:`#`,text:`TagLink`,"data-testid":`focus`}),(0,v.jsx)(c,{size:`s`,href:`#`,text:`TagLink`,"aria-disabled":`true`})]}),(0,v.jsxs)(s,{children:[(0,v.jsx)(i,{size:`s`,onClick:()=>{},text:`TagButton`}),(0,v.jsx)(i,{size:`s`,onClick:()=>{},text:`TagButton`,"data-testid":`hover`}),(0,v.jsx)(i,{size:`s`,onClick:()=>{},text:`TagButton`,"data-testid":`active`}),(0,v.jsx)(i,{size:`s`,onClick:()=>{},text:`TagButton`,"data-testid":`focus`}),(0,v.jsx)(i,{size:`s`,onClick:()=>{},text:`TagButton`,"aria-disabled":`true`})]}),(0,v.jsx)(l,{size:`s`,text:`With icon`,icon:(0,v.jsx)(_,{})}),(0,v.jsxs)(`div`,{className:o(`flex`,`flex-row`,`gap-s`),children:[(0,v.jsx)(l,{size:`s`,text:`With badge`,badge:(0,v.jsx)(n,{text:`14`,variant:`alphanumeric`})}),(0,v.jsx)(l,{size:`s`,text:`Apps`,badge:{text:`14`,variant:`alphanumeric`,color:`info`}}),(0,v.jsx)(l,{size:`s`,text:`Boolean`,color:`success`,badge:{text:`true`,variant:`alphanumeric`,color:`success`}})]}),(0,v.jsxs)(`div`,{className:o(`flex`,`flex-row`,`gap-s`,`w-xxs`),children:[(0,v.jsx)(l,{size:`s`,text:`With badge`,badge:(0,v.jsx)(n,{text:`14`,variant:`alphanumeric`})}),(0,v.jsx)(l,{size:`s`,text:`Apps`,badge:{text:`14`,variant:`alphanumeric`,color:`info`}}),(0,v.jsx)(l,{size:`s`,text:`Boolean`,color:`success`,badge:{text:`true`,variant:`alphanumeric`,color:`success`}})]})]})]}),parameters:{pseudo:{hover:`[data-testid="hover"]`,active:`[data-testid="active"]`,focusVisible:`[data-testid="focus"]`},controls:{disable:!0}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (props: TagProps) => <div className={classNames("flex", "border-box", "p-m", "w-fit")} data-testid="wrapper">
      <Tag {...props} />
    </div>,
  args: {
    text: "Tag",
    onRemove: undefined
  },
  parameters: {
    ...disableSnap
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: (props: TagProps) => <TagGroups>
      <Tag {...props} />
      <Tag {...props} />
      <Tag {...props} />
      <Tag {...props} />
    </TagGroups>,
  args: Playground.args,
  parameters: {
    ...disableSnap
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (props: TagProps) => <div className={classNames("flex", "border-box", "p-m", "w-fit")} data-testid="wrapper">
      <Tag {...props} />
    </div>,
  args: {
    text: "Tag",
    onRemove: fn()
  },
  parameters: {
    ...disableSnap
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: (args: TagProps) => <div className={classNames("flex", "border-box", "p-m", "w-fit")} data-testid="wrapper">
      <Tag {...args} avatar={<Avatar size="s" text="OC" />} />
    </div>,
  args: {
    text: "Olivier Carnac"
  },
  parameters: disableSnap
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: (args: TagProps) => <div className={classNames("flex", "border-box", "p-m", "w-fit")} data-testid="wrapper">
      <Tag {...args} icon={<Icon />} />
    </div>,
  args: {
    text: "ABCD-1234-EFGH-5678"
  },
  parameters: disableSnap
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: (args: TagProps) => <div className={classNames("flex", "border-box", "p-m", "w-fit")} data-testid="wrapper">
      <Tag {...args} badge={<Badge text="14" variant="alphanumeric" />} />
    </div>,
  args: {
    text: "App"
  },
  parameters: disableSnap
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "gap-s")}>
      <div className={classNames("flex", "flex-col", "gap-s")}>
        <h2 className={classNames("font-heading-m", "text-default")}>
          Default
        </h2>
        <TagGroups>
          <Tag text="Tag" />
          <Tag text="Tag error" color="error" />
          <Tag text="Tag info" color="info" />
          <Tag text="Tag success" color="success" />
          <Tooltip title="Tooltip over tag" initialOpen>
            <Tag text="Tag warning" color="warning" />
          </Tooltip>
          <Tag text="Tag text is really too long" />
        </TagGroups>
        <TagGroups>
          <Tag text="onRemove" onRemove={() => {}} />
          <Tag text="onRemove error" color="error" onRemove={() => {}} />
          <Tag text="onRemove info" color="info" onRemove={() => {}} />
          <Tag text="onRemove success" color="success" onRemove={() => {}} />
          <Tag text="onRemove warning" color="warning" onRemove={() => {}} />
        </TagGroups>
        <TagGroups>
          <TagLink href="#" text="TagLink" />
          <TagLink href="#" text="TagLink" data-testid="hover" />
          <TagLink href="#" text="TagLink" data-testid="active" />
          <TagLink href="#" text="TagLink" data-testid="focus" />
          <TagLink href="#" text="TagLink" aria-disabled="true" />
        </TagGroups>
        <TagGroups>
          <TagButton onClick={() => {}} text="TagButton" />
          <TagButton onClick={() => {}} text="TagButton" data-testid="hover" />
          <TagButton onClick={() => {}} text="TagButton" data-testid="active" />
          <TagButton onClick={() => {}} text="TagButton" data-testid="focus" />
          <TagButton onClick={() => {}} text="TagButton" aria-disabled="true" />
        </TagGroups>
        <Tag text="With icon" icon={<Icon />} />
        <div className={classNames("flex", "flex-row", "gap-s")}>
          <Tag text="With badge" badge={<Badge text="14" variant="alphanumeric" />} />
          <Tag text="Apps" badge={{
          text: "14",
          variant: "alphanumeric",
          color: "info"
        }} />
          <Tag text="Boolean" color="success" badge={{
          text: "true",
          variant: "alphanumeric",
          color: "success"
        }} />
        </div>
        <div className={classNames("flex", "flex-row", "gap-s", "w-xxs")}>
          <Tag text="With badge" badge={<Badge text="14" variant="alphanumeric" />} />
          <Tag text="Apps" badge={{
          text: "14",
          variant: "alphanumeric",
          color: "info"
        }} />
          <Tag text="Boolean" color="success" badge={{
          text: "true",
          variant: "alphanumeric",
          color: "success"
        }} />
        </div>
      </div>
      <div className={classNames("flex", "flex-col", "gap-s")}>
        <h2 className={classNames("font-heading-m", "text-default")}>Small</h2>
        <TagGroups>
          <Tag size="s" text="Tag" />
          <Tag size="s" text="Tag error" color="error" />
          <Tag size="s" text="Tag info" color="info" />
          <Tag size="s" text="Tag success" color="success" />
          <Tag size="s" text="Tag warning" color="warning" />
        </TagGroups>
        <TagGroups>
          <Tag size="s" text="onRemove" onRemove={() => {}} />
          <Tag size="s" text="onRemove error" color="error" onRemove={() => {}} />
          <Tag size="s" text="onRemove info" color="info" onRemove={() => {}} />
          <Tag size="s" text="onRemove success" color="success" onRemove={() => {}} />
          <Tag size="s" text="onRemove warning" color="warning" onRemove={() => {}} />
        </TagGroups>
        <TagGroups>
          <TagLink size="s" href="#" text="TagLink" />
          <TagLink size="s" href="#" text="TagLink" data-testid="hover" />
          <TagLink size="s" href="#" text="TagLink" data-testid="active" />
          <TagLink size="s" href="#" text="TagLink" data-testid="focus" />
          <TagLink size="s" href="#" text="TagLink" aria-disabled="true" />
        </TagGroups>
        <TagGroups>
          <TagButton size="s" onClick={() => {}} text="TagButton" />
          <TagButton size="s" onClick={() => {}} text="TagButton" data-testid="hover" />
          <TagButton size="s" onClick={() => {}} text="TagButton" data-testid="active" />
          <TagButton size="s" onClick={() => {}} text="TagButton" data-testid="focus" />
          <TagButton size="s" onClick={() => {}} text="TagButton" aria-disabled="true" />
        </TagGroups>
        <Tag size="s" text="With icon" icon={<Icon />} />
        <div className={classNames("flex", "flex-row", "gap-s")}>
          <Tag size="s" text="With badge" badge={<Badge text="14" variant="alphanumeric" />} />
          <Tag size="s" text="Apps" badge={{
          text: "14",
          variant: "alphanumeric",
          color: "info"
        }} />
          <Tag size="s" text="Boolean" color="success" badge={{
          text: "true",
          variant: "alphanumeric",
          color: "success"
        }} />
        </div>
        <div className={classNames("flex", "flex-row", "gap-s", "w-xxs")}>
          <Tag size="s" text="With badge" badge={<Badge text="14" variant="alphanumeric" />} />
          <Tag size="s" text="Apps" badge={{
          text: "14",
          variant: "alphanumeric",
          color: "info"
        }} />
          <Tag size="s" text="Boolean" color="success" badge={{
          text: "true",
          variant: "alphanumeric",
          color: "success"
        }} />
        </div>
      </div>
    </div>,
  parameters: {
    pseudo: {
      hover: '[data-testid="hover"]',
      active: '[data-testid="active"]',
      focusVisible: '[data-testid="focus"]'
    },
    controls: {
      disable: true
    }
  }
}`,...O.parameters?.docs?.source}}},k=[`Playground`,`GroupPlayground`,`Removable`,`WithAvatar`,`WithIcon`,`WithBadge`,`VisualTests`]}));A();export{C as GroupPlayground,S as Playground,w as Removable,O as VisualTests,T as WithAvatar,D as WithBadge,E as WithIcon,k as __namedExportsOrder,b as default,A as n,g as t};