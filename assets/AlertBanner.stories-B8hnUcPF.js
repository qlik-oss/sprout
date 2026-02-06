import{r as w,j as e}from"./iframe-B4-nXs83.js";import{t as N}from"./sprout-tokens-D9QRO1qB.js";import{F as C}from"./Close-BgZ1uSF_.js";import{S as _}from"./SeverityIcon-B1n60lm3.js";import{c as n}from"./classNames-eIMwhIDK.js";import{u as A}from"./useI18n-peGtGOOS.js";import{I as B}from"./IconButton-D-KEKYAI.js";import{B as y}from"./Button-Cv6yFaKa.js";import{L as m}from"./Link-BgX08Hyd.js";const D="_content_max_rows_dgjkq_2",P="_content_max_height_dgjkq_10",h={content_max_rows:D,content_max_height:P},s=w.forwardRef(g);function g({variant:a,justify:l,content:i,children:u,action:c,link:p,dismissLabel:b,onClickDismiss:d,...j},v){const k=A()("alertbanner.dismiss"),x=n("m-0","pr-m","my-m","font-body-s","text-default","overflow-hidden",{grow:l!=="center","overflow-y-auto":typeof i!="string","overflow-x-hidden":typeof i!="string",[h.content_max_height]:typeof i!="string",[h.content_max_rows]:typeof i=="string"});return e.jsx("div",{role:"status","aria-live":"polite",className:n("bg-default","w-full"),"data-variant":a||"info",ref:v,...j,children:e.jsxs("div",{className:n("flex-noreset","items-center","border-box","border-b-default",{"bg-danger-weak":a==="error",border_danger:a==="error","bg-warning-weak":a==="warning",border_warning:a==="warning","bg-success-weak":a==="success",border_success:a==="success","bg-info-weak":a==="info"||!a,border_info:a==="info"||!a}),style:{minBlockSize:N.common_sizing_5xl},children:[e.jsxs("div",{className:n("flex-noreset","border-box","w-full","items-center","grow","flex-row","justify-start",{"justify-center":l==="center"}),children:[e.jsx("span",{className:n("flex-noreset","shrink-0","items-center","py-l","px-xl","icon-size-xl"),children:_[a||"info"]}),e.jsx("div",{className:x,children:i}),u?e.jsx("div",{className:x,children:u}):null,p?e.jsx("div",{className:n("flex","items-center","justify-self-end",{"pl-0":l!=="center","pl-m":l==="center","pr-m":!d||!!c}),children:p}):null,c?e.jsx("div",{className:n("flex","items-center","justify-self-end","pl-0",{"pr-m":!d}),children:c}):null]}),d?e.jsx("span",{className:n("px-m","mr-auto",{"pl-0":!c&&!p}),children:e.jsx(B,{variant:"quiet",onClick:()=>{d()},label:b||k,icon:e.jsx(C,{})})}):null]})})}g.displayName="AlertBanner";const L={action:{description:"Action content, typically a button.",table:{type:{summary:"ReactNode"}}},content:{description:"Content of the alert banner.",table:{type:{summary:"ReactNode"}}},dismissLabel:{control:{type:"text"},description:"Label for the dismiss button.",table:{defaultValue:{summary:"Dismiss"},type:{summary:"string"}}},justify:{control:{type:"select"},description:"Justification of the alert content.",options:[void 0,"center"],table:{type:{summary:"undefined | center"}}},link:{description:"Link content, typically a hyperlink.",table:{type:{summary:"ReactNode"}}},onClickDismiss:{description:"Callback when the alert is dismissed.",table:{type:{summary:"() => void"}}},variant:{control:{type:"select"},options:[void 0,"info","warning","error","success"],table:{type:{summary:"info | warning | error | success"}}}},{fn:f}=__STORYBOOK_MODULE_TEST__,T={title:"Components/AlertBanner",component:s,parameters:{}},S=f(),r={render:({...a})=>e.jsx("div",{className:n("flex","flex-col","p-m","w-s"),"data-testid":"wrapper",children:e.jsx(s,{...a,action:e.jsx(y,{variant:"quiet",label:"Action",onClick:S})})}),args:{content:"Alert content",variant:"info",onClickDismiss:f()},argTypes:L,parameters:{chromatic:{disableSnapshot:!0}}},t={content:"Alert content",action:e.jsx(y,{variant:"quiet",label:"Action",onClick:f()}),onClickDismiss:f()},o={render:()=>e.jsxs("div",{className:n("flex","flex-col","p-m","gap-m"),style:{maxInlineSize:500},"data-testid":"wrapper",children:[e.jsx("p",{className:n("text-default","font-body-m"),children:"Content default:"}),e.jsx(s,{...t,variant:"info",link:e.jsx(m,{href:"#",isExternal:!0,font:"body-s",children:"Link"})}),e.jsx(s,{...t,variant:"success"}),e.jsx(s,{...t,variant:"warning"}),e.jsx(s,{...t,variant:"error"}),e.jsx("p",{className:n("text-default","font-body-m"),children:'Content centered `justify="center"`:'}),e.jsx(s,{...t,justify:"center",variant:"info",link:e.jsx(m,{href:"#",isExternal:!0,font:"body-s",children:"Link"})}),e.jsx(s,{...t,justify:"center",variant:"success"}),e.jsx(s,{...t,justify:"center",variant:"warning"}),e.jsx(s,{...t,justify:"center",variant:"error"}),e.jsx("p",{className:n("text-default","font-body-m"),children:"Without action and link:"}),e.jsx(s,{content:t.content,justify:"center",variant:"info",onClickDismiss:t.onClickDismiss}),e.jsx(s,{content:t.content,justify:"center",variant:"success",onClickDismiss:t.onClickDismiss}),e.jsx(s,{content:t.content,variant:"warning",onClickDismiss:t.onClickDismiss}),e.jsx(s,{content:t.content,variant:"error",onClickDismiss:t.onClickDismiss}),e.jsx("p",{className:n("text-default","font-body-m"),children:"Custom content:"}),e.jsx(s,{variant:"info",onClickDismiss:t.onClickDismiss,link:e.jsx(m,{href:"#",isExternal:!0,font:"body-s",children:"Link"}),content:"This content is passed as a `string`, but it can also be provided as a React node. In this example, the text is intentionally made really long to demonstrate how the component handles overflow."}),e.jsx(s,{variant:"success",onClickDismiss:t.onClickDismiss,content:"This is a success banner using a longer `string` to show how text overflow is managed. When the content exceeds the available space, it will be truncated with an ellipsis, giving a visual cue without hiding the fact that more information exists."}),e.jsx(s,{variant:"warning",justify:"center",link:e.jsx(m,{href:"#",isExternal:!0,font:"body-s",children:"Link"}),content:e.jsxs("div",{className:n("flex","flex-col","gap-s"),children:[e.jsxs("p",{className:n("text-default","font-body-s","m-0"),children:["This is an example of passing a ",e.jsx("strong",{children:"React node"})," instead of just a ",e.jsx("code",{children:"string"}),"."]}),e.jsx("p",{className:n("text-default","font-body-s","m-0"),children:"The banner will handle this and by default, a maximum height of 3 rows of text is applied to keep the layout consistent and visually balanced."}),e.jsx("p",{className:n("text-default","font-body-s","m-0"),children:"However, we recommend following the guidelines and preferring plain strings when possible to keep content consistent across the design system."})]})}),e.jsx(s,{variant:"error",justify:"center",action:t.action,content:e.jsxs("div",{className:n("flex","flex-col","gap-s"),children:[e.jsxs("p",{className:n("text-default","font-body-s","m-0"),children:["This is an error banner using ",e.jsx("strong",{children:"React node"})," content."]}),e.jsx("p",{className:n("text-default","font-body-s","m-0"),children:"The same rules apply here: by default the maximum height is limited to 3 rows, so the layout stays predictable."}),e.jsx("p",{className:n("text-default","font-body-s","m-0"),children:"Whenever possible, prefer plain string content to maintain design system consistency across all alert banners."})]})})]}),parameters:{controls:{disable:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: ({
    ...props
  }) => <div className={classNames("flex", "flex-col", "p-m", "w-s")} data-testid="wrapper">
      <AlertBanner {...props} action={<Button variant="quiet" label="Action" onClick={onClickAction} />} />
    </div>,
  args: {
    content: "Alert content",
    variant: "info",
    onClickDismiss: fn()
  },
  argTypes: AlertBannerArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "p-m", "gap-m")} style={{
    maxInlineSize: 500
  }} data-testid="wrapper">
      <p className={classNames("text-default", "font-body-m")}>Content default:</p>
      <AlertBanner {...defaultProps} variant="info" link={<Link href="#" isExternal font="body-s">
            Link
          </Link>} />
      <AlertBanner {...defaultProps} variant="success" />
      <AlertBanner {...defaultProps} variant="warning" />
      <AlertBanner {...defaultProps} variant="error" />

      <p className={classNames("text-default", "font-body-m")}>Content centered \`justify="center"\`:</p>
      <AlertBanner {...defaultProps} justify="center" variant="info" link={<Link href="#" isExternal font="body-s">
            Link
          </Link>} />
      <AlertBanner {...defaultProps} justify="center" variant="success" />
      <AlertBanner {...defaultProps} justify="center" variant="warning" />
      <AlertBanner {...defaultProps} justify="center" variant="error" />
      <p className={classNames("text-default", "font-body-m")}>Without action and link:</p>
      <AlertBanner content={defaultProps.content} justify="center" variant="info" onClickDismiss={defaultProps.onClickDismiss} />
      <AlertBanner content={defaultProps.content} justify="center" variant="success" onClickDismiss={defaultProps.onClickDismiss} />
      <AlertBanner content={defaultProps.content} variant="warning" onClickDismiss={defaultProps.onClickDismiss} />
      <AlertBanner content={defaultProps.content} variant="error" onClickDismiss={defaultProps.onClickDismiss} />

      <p className={classNames("text-default", "font-body-m")}>Custom content:</p>
      <AlertBanner variant="info" onClickDismiss={defaultProps.onClickDismiss} link={<Link href="#" isExternal font="body-s">
            Link
          </Link>} content="This content is passed as a \`string\`, but it can also be provided as a React node. In this example, the text is intentionally made really long to demonstrate how the component handles overflow." />

      <AlertBanner variant="success" onClickDismiss={defaultProps.onClickDismiss} content="This is a success banner using a longer \`string\` to show how text overflow is managed. When the content exceeds the available space, it will be truncated with an ellipsis, giving a visual cue without hiding the fact that more information exists." />
      <AlertBanner variant="warning" justify="center" link={<Link href="#" isExternal font="body-s">
            Link
          </Link>} content={<div className={classNames("flex", "flex-col", "gap-s")}>
            <p className={classNames("text-default", "font-body-s", "m-0")}>
              This is an example of passing a <strong>React node</strong> instead of just a <code>string</code>.
            </p>
            <p className={classNames("text-default", "font-body-s", "m-0")}>
              The banner will handle this and by default, a maximum height of 3 rows of text is applied to keep the
              layout consistent and visually balanced.
            </p>
            <p className={classNames("text-default", "font-body-s", "m-0")}>
              However, we recommend following the guidelines and preferring plain strings when possible to keep content
              consistent across the design system.
            </p>
          </div>} />
      <AlertBanner variant="error" justify="center" action={defaultProps.action} content={<div className={classNames("flex", "flex-col", "gap-s")}>
            <p className={classNames("text-default", "font-body-s", "m-0")}>
              This is an error banner using <strong>React node</strong> content.
            </p>
            <p className={classNames("text-default", "font-body-s", "m-0")}>
              The same rules apply here: by default the maximum height is limited to 3 rows, so the layout stays
              predictable.
            </p>
            <p className={classNames("text-default", "font-body-s", "m-0")}>
              Whenever possible, prefer plain string content to maintain design system consistency across all alert
              banners.
            </p>
          </div>} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...o.parameters?.docs?.source}}};const E=["Playground","VisualTest"],Y=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,VisualTest:o,__namedExportsOrder:E,default:T},Symbol.toStringTag,{value:"Module"}));export{r as P,Y as S};
