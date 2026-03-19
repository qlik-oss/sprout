import{n as e}from"./chunk-DseTPa7n.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t as n}from"./Avatar-Cr86r9rq.js";import{C as r,T as i,et as a,hn as o,tt as s,w as c}from"./iframe-DTk7xy32.js";var l=t();function u({avatar:e,icon:t,text:n,badge:r,size:a,...o}){return(0,l.jsx)(`a`,{className:i.interactive,...o,children:(0,l.jsx)(c,{text:n,icon:t,avatar:e,badge:r,size:a})})}function d({avatar:e,icon:t,text:n,badge:r,size:a,...o}){return(0,l.jsx)(`button`,{className:i.interactive,type:`button`,...o,children:(0,l.jsx)(c,{text:n,icon:t,avatar:e,badge:r,size:a})})}var f={text:{control:{type:`text`},description:`The text content displayed in the tag.`,table:{type:{summary:`string`}}},size:{control:{type:`select`},options:[void 0,`s`],description:`Size of the tag. When undefined, the tag uses default size.`,table:{defaultValue:{summary:`default`},type:{summary:`s | undefined`}}},color:{control:{type:`select`},options:[void 0,`error`,`info`,`success`,`warning`],description:`Color variant of the tag. When undefined, uses neutral color. Not available on TagLink and TagButton variants.`,table:{defaultValue:{summary:`neutral`},type:{summary:`error | info | success | warning | undefined`}}},avatar:{control:!1,description:`Avatar component displayed at the start of the tag. See [Avatar](./?path=/docs/components-avatar--docs) for details.`,table:{type:{summary:`ReactNode`}}},icon:{control:!1,description:`Icon component displayed at the start of the tag, before the text.`,table:{type:{summary:`ReactNode`}}},badge:{control:!1,description:`Badge component or badge props displayed at the end of the tag. See [Badge](./?path=/docs/components-badge--docs) for details.`,table:{type:{summary:`BadgeProps | ReactElement<typeof Badge>`}}},onRemove:{control:!1,description:`Callback function called when the remove button is clicked. When provided, a remove button is displayed. Not available on TagLink and TagButton variants.`,table:{type:{summary:`() => void`}}},removeLabel:{control:{type:`text`},description:`Custom label for the remove button. Defaults to 'remove' from i18n translations.`,table:{defaultValue:{summary:`'remove'`},type:{summary:`string`}}},id:{control:{type:`text`},description:`HTML id attribute for the tag element.`,table:{type:{summary:`string`}}}},p=e({GroupPlayground:()=>v,Playground:()=>_,Removable:()=>y,VisualTests:()=>w,WithAvatar:()=>b,WithBadge:()=>C,WithIcon:()=>S,__namedExportsOrder:()=>T,default:()=>h}),{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Tag`,component:c,argTypes:f},g={chromatic:{disableSnapshot:!0}},_={render:e=>(0,l.jsx)(`div`,{className:o(`flex`,`border-box`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,l.jsx)(c,{...e})}),args:{text:`Tag`,onRemove:void 0},parameters:{...g}},v={render:e=>(0,l.jsxs)(r,{children:[(0,l.jsx)(c,{...e}),(0,l.jsx)(c,{...e}),(0,l.jsx)(c,{...e}),(0,l.jsx)(c,{...e})]}),args:_.args,parameters:{...g}},y={render:e=>(0,l.jsx)(`div`,{className:o(`flex`,`border-box`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,l.jsx)(c,{...e})}),args:{text:`Tag`,onRemove:m()},parameters:{...g}},b={render:e=>(0,l.jsx)(`div`,{className:o(`flex`,`border-box`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,l.jsx)(c,{...e,avatar:(0,l.jsx)(n,{size:`s`,text:`OC`})})}),args:{text:`Olivier Carnac`},parameters:g};function x(){return(0,l.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,l.jsx)(`g`,{clipPath:`url(#clip0_20897_69)`,children:(0,l.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M9.3 9.7L9 10H8V12H6V14H4V16H0V13L6.3 6.7C6.1 6.2 6 5.6 6 5C6 2.2 8.2 0 11 0C13.8 0 16 2.2 16 5C16 7.8 13.8 10 11 10C10.4 10 9.8 9.9 9.3 9.7ZM7 9H8.58579L9.05916 8.52663L9.67139 8.77152C10.0316 8.91559 10.5015 9 11 9C13.2477 9 15 7.24771 15 5C15 2.75228 13.2477 1 11 1C8.75229 1 7 2.75228 7 5C7 5.49845 7.08441 5.96843 7.22848 6.32861L7.47337 6.94084L1 13.4142V15H3V13H5V11H7V9ZM12 5C11.4667 5 11 4.53333 11 4C11 3.46667 11.4667 3 12 3C12.5333 3 13 3.46667 13 4C13 4.53333 12.5333 5 12 5Z`,fill:`currentColor`})}),(0,l.jsx)(`defs`,{children:(0,l.jsx)(`clipPath`,{id:`clip0_20897_69`,children:(0,l.jsx)(`rect`,{width:`16`,height:`16`,fill:`white`})})})]})}var S={render:e=>(0,l.jsx)(`div`,{className:o(`flex`,`border-box`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,l.jsx)(c,{...e,icon:(0,l.jsx)(x,{})})}),args:{text:`ABCD-1234-EFGH-5678`},parameters:g},C={render:e=>(0,l.jsx)(`div`,{className:o(`flex`,`border-box`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,l.jsx)(c,{...e,badge:(0,l.jsx)(a,{text:`14`,variant:`alphanumeric`})})}),args:{text:`App`},parameters:g},w={render:()=>(0,l.jsxs)(`div`,{className:o(`flex`,`flex-col`,`gap-s`),children:[(0,l.jsxs)(`div`,{className:o(`flex`,`flex-col`,`gap-s`),children:[(0,l.jsx)(`h2`,{className:o(`font-heading-m`,`text-default`),children:`Default`}),(0,l.jsxs)(r,{children:[(0,l.jsx)(c,{text:`Tag`}),(0,l.jsx)(c,{text:`Tag error`,color:`error`}),(0,l.jsx)(c,{text:`Tag info`,color:`info`}),(0,l.jsx)(c,{text:`Tag success`,color:`success`}),(0,l.jsx)(s,{title:`Tooltip over tag`,initialOpen:!0,children:(0,l.jsx)(c,{text:`Tag warning`,color:`warning`})}),(0,l.jsx)(c,{text:`Tag text is really too long`})]}),(0,l.jsxs)(r,{children:[(0,l.jsx)(c,{text:`onRemove`,onRemove:()=>{}}),(0,l.jsx)(c,{text:`onRemove error`,color:`error`,onRemove:()=>{}}),(0,l.jsx)(c,{text:`onRemove info`,color:`info`,onRemove:()=>{}}),(0,l.jsx)(c,{text:`onRemove success`,color:`success`,onRemove:()=>{}}),(0,l.jsx)(c,{text:`onRemove warning`,color:`warning`,onRemove:()=>{}})]}),(0,l.jsxs)(r,{children:[(0,l.jsx)(u,{href:`#`,text:`TagLink`}),(0,l.jsx)(u,{href:`#`,text:`TagLink`,"data-testid":`hover`}),(0,l.jsx)(u,{href:`#`,text:`TagLink`,"data-testid":`active`}),(0,l.jsx)(u,{href:`#`,text:`TagLink`,"data-testid":`focus`}),(0,l.jsx)(u,{href:`#`,text:`TagLink`,"aria-disabled":`true`})]}),(0,l.jsxs)(r,{children:[(0,l.jsx)(d,{onClick:()=>{},text:`TagButton`}),(0,l.jsx)(d,{onClick:()=>{},text:`TagButton`,"data-testid":`hover`}),(0,l.jsx)(d,{onClick:()=>{},text:`TagButton`,"data-testid":`active`}),(0,l.jsx)(d,{onClick:()=>{},text:`TagButton`,"data-testid":`focus`}),(0,l.jsx)(d,{onClick:()=>{},text:`TagButton`,"aria-disabled":`true`})]}),(0,l.jsx)(c,{text:`With icon`,icon:(0,l.jsx)(x,{})}),(0,l.jsxs)(`div`,{className:o(`flex`,`flex-row`,`gap-s`),children:[(0,l.jsx)(c,{text:`With badge`,badge:(0,l.jsx)(a,{text:`14`,variant:`alphanumeric`})}),(0,l.jsx)(c,{text:`Apps`,badge:{text:`14`,variant:`alphanumeric`,color:`info`}}),(0,l.jsx)(c,{text:`Boolean`,color:`success`,badge:{text:`true`,variant:`alphanumeric`,color:`success`}})]}),(0,l.jsxs)(`div`,{className:o(`flex`,`flex-row`,`gap-s`,`w-xxs`),children:[(0,l.jsx)(c,{text:`With badge`,badge:(0,l.jsx)(a,{text:`14`,variant:`alphanumeric`})}),(0,l.jsx)(c,{text:`Apps`,badge:{text:`14`,variant:`alphanumeric`,color:`info`}}),(0,l.jsx)(c,{text:`Boolean`,color:`success`,badge:{text:`true`,variant:`alphanumeric`,color:`success`}})]})]}),(0,l.jsxs)(`div`,{className:o(`flex`,`flex-col`,`gap-s`),children:[(0,l.jsx)(`h2`,{className:o(`font-heading-m`,`text-default`),children:`Small`}),(0,l.jsxs)(r,{children:[(0,l.jsx)(c,{size:`s`,text:`Tag`}),(0,l.jsx)(c,{size:`s`,text:`Tag error`,color:`error`}),(0,l.jsx)(c,{size:`s`,text:`Tag info`,color:`info`}),(0,l.jsx)(c,{size:`s`,text:`Tag success`,color:`success`}),(0,l.jsx)(c,{size:`s`,text:`Tag warning`,color:`warning`})]}),(0,l.jsxs)(r,{children:[(0,l.jsx)(c,{size:`s`,text:`onRemove`,onRemove:()=>{}}),(0,l.jsx)(c,{size:`s`,text:`onRemove error`,color:`error`,onRemove:()=>{}}),(0,l.jsx)(c,{size:`s`,text:`onRemove info`,color:`info`,onRemove:()=>{}}),(0,l.jsx)(c,{size:`s`,text:`onRemove success`,color:`success`,onRemove:()=>{}}),(0,l.jsx)(c,{size:`s`,text:`onRemove warning`,color:`warning`,onRemove:()=>{}})]}),(0,l.jsxs)(r,{children:[(0,l.jsx)(u,{size:`s`,href:`#`,text:`TagLink`}),(0,l.jsx)(u,{size:`s`,href:`#`,text:`TagLink`,"data-testid":`hover`}),(0,l.jsx)(u,{size:`s`,href:`#`,text:`TagLink`,"data-testid":`active`}),(0,l.jsx)(u,{size:`s`,href:`#`,text:`TagLink`,"data-testid":`focus`}),(0,l.jsx)(u,{size:`s`,href:`#`,text:`TagLink`,"aria-disabled":`true`})]}),(0,l.jsxs)(r,{children:[(0,l.jsx)(d,{size:`s`,onClick:()=>{},text:`TagButton`}),(0,l.jsx)(d,{size:`s`,onClick:()=>{},text:`TagButton`,"data-testid":`hover`}),(0,l.jsx)(d,{size:`s`,onClick:()=>{},text:`TagButton`,"data-testid":`active`}),(0,l.jsx)(d,{size:`s`,onClick:()=>{},text:`TagButton`,"data-testid":`focus`}),(0,l.jsx)(d,{size:`s`,onClick:()=>{},text:`TagButton`,"aria-disabled":`true`})]}),(0,l.jsx)(c,{size:`s`,text:`With icon`,icon:(0,l.jsx)(x,{})}),(0,l.jsxs)(`div`,{className:o(`flex`,`flex-row`,`gap-s`),children:[(0,l.jsx)(c,{size:`s`,text:`With badge`,badge:(0,l.jsx)(a,{text:`14`,variant:`alphanumeric`})}),(0,l.jsx)(c,{size:`s`,text:`Apps`,badge:{text:`14`,variant:`alphanumeric`,color:`info`}}),(0,l.jsx)(c,{size:`s`,text:`Boolean`,color:`success`,badge:{text:`true`,variant:`alphanumeric`,color:`success`}})]}),(0,l.jsxs)(`div`,{className:o(`flex`,`flex-row`,`gap-s`,`w-xxs`),children:[(0,l.jsx)(c,{size:`s`,text:`With badge`,badge:(0,l.jsx)(a,{text:`14`,variant:`alphanumeric`})}),(0,l.jsx)(c,{size:`s`,text:`Apps`,badge:{text:`14`,variant:`alphanumeric`,color:`info`}}),(0,l.jsx)(c,{size:`s`,text:`Boolean`,color:`success`,badge:{text:`true`,variant:`alphanumeric`,color:`success`}})]})]})]}),parameters:{pseudo:{hover:`[data-testid="hover"]`,active:`[data-testid="active"]`,focusVisible:`[data-testid="focus"]`},controls:{disable:!0}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (args: TagProps) => <div className={classNames("flex", "border-box", "p-m", "w-fit")} data-testid="wrapper">
      <Tag {...args} avatar={<Avatar size="s" text="OC" />} />
    </div>,
  args: {
    text: "Olivier Carnac"
  },
  parameters: disableSnap
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (args: TagProps) => <div className={classNames("flex", "border-box", "p-m", "w-fit")} data-testid="wrapper">
      <Tag {...args} icon={<Icon />} />
    </div>,
  args: {
    text: "ABCD-1234-EFGH-5678"
  },
  parameters: disableSnap
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: (args: TagProps) => <div className={classNames("flex", "border-box", "p-m", "w-fit")} data-testid="wrapper">
      <Tag {...args} badge={<Badge text="14" variant="alphanumeric" />} />
    </div>,
  args: {
    text: "App"
  },
  parameters: disableSnap
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};var T=[`Playground`,`GroupPlayground`,`Removable`,`WithAvatar`,`WithIcon`,`WithBadge`,`VisualTests`];export{v as GroupPlayground,_ as Playground,y as Removable,w as VisualTests,b as WithAvatar,C as WithBadge,S as WithIcon,T as __namedExportsOrder,h as default,p as t};