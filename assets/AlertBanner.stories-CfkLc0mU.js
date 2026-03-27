import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Fn as n,Pn as r,bt as i,ft as a,v as o,wt as s}from"./iframe-RiXBydPV.js";var c,l=e((()=>{c={action:{description:`Action content, typically a button.`,table:{type:{summary:`ReactNode`}}},content:{description:`Content of the alert banner.`,table:{type:{summary:`ReactNode`}}},dismissLabel:{control:{type:`text`},description:`Label for the dismiss button.`,table:{defaultValue:{summary:`Dismiss`},type:{summary:`string`}}},justify:{control:{type:`select`},description:`Justification of the alert content.`,options:[void 0,`center`],table:{type:{summary:`undefined | center`}}},link:{description:`Link content, typically a hyperlink.`,table:{type:{summary:`ReactNode`}}},onClickDismiss:{description:`Callback when the alert is dismissed.`,table:{type:{summary:`() => void`}}},variant:{control:{type:`select`},options:[void 0,`info`,`warning`,`error`,`success`],table:{type:{summary:`info | warning | error | success`}}}}})),u=t({Playground:()=>h,VisualTest:()=>_,__namedExportsOrder:()=>v,default:()=>p}),d,f,p,m,h,g,_,v,y=e((()=>{o(),l(),d=n(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/AlertBanner`,component:i,parameters:{}},m=f(),h={render:({...e})=>(0,d.jsx)(`div`,{className:r(`flex`,`flex-col`,`p-m`,`w-s`),"data-testid":`wrapper`,children:(0,d.jsx)(i,{...e,action:(0,d.jsx)(s,{variant:`quiet`,label:`Action`,onClick:m})})}),args:{content:`Alert content`,variant:`info`,onClickDismiss:f()},argTypes:c,parameters:{chromatic:{disableSnapshot:!0}}},g={content:`Alert content`,action:(0,d.jsx)(s,{variant:`quiet`,label:`Action`,onClick:f()}),onClickDismiss:f()},_={render:()=>(0,d.jsxs)(`div`,{className:r(`flex`,`flex-col`,`p-m`,`gap-m`),style:{maxInlineSize:500},"data-testid":`wrapper`,children:[(0,d.jsx)(`p`,{className:r(`text-default`,`font-body-m`),children:`Content default:`}),(0,d.jsx)(i,{...g,variant:`info`,link:(0,d.jsx)(a,{href:`#`,isExternal:!0,font:`body_s`,children:`Link`})}),(0,d.jsx)(i,{...g,variant:`success`}),(0,d.jsx)(i,{...g,variant:`warning`}),(0,d.jsx)(i,{...g,variant:`error`}),(0,d.jsx)(`p`,{className:r(`text-default`,`font-body-m`),children:'Content centered `justify="center"`:'}),(0,d.jsx)(i,{...g,justify:`center`,variant:`info`,link:(0,d.jsx)(a,{href:`#`,isExternal:!0,font:`body_s`,children:`Link`})}),(0,d.jsx)(i,{...g,justify:`center`,variant:`success`}),(0,d.jsx)(i,{...g,justify:`center`,variant:`warning`}),(0,d.jsx)(i,{...g,justify:`center`,variant:`error`}),(0,d.jsx)(`p`,{className:r(`text-default`,`font-body-m`),children:`Without action and link:`}),(0,d.jsx)(i,{content:g.content,justify:`center`,variant:`info`,onClickDismiss:g.onClickDismiss}),(0,d.jsx)(i,{content:g.content,justify:`center`,variant:`success`,onClickDismiss:g.onClickDismiss}),(0,d.jsx)(i,{content:g.content,variant:`warning`,onClickDismiss:g.onClickDismiss}),(0,d.jsx)(i,{content:g.content,variant:`error`,onClickDismiss:g.onClickDismiss}),(0,d.jsx)(`p`,{className:r(`text-default`,`font-body-m`),children:`Custom content:`}),(0,d.jsx)(i,{variant:`info`,onClickDismiss:g.onClickDismiss,link:(0,d.jsx)(a,{href:`#`,isExternal:!0,font:`body_s`,children:`Link`}),content:"This content is passed as a `string`, but it can also be provided as a React node. In this example, the text is intentionally made really long to demonstrate how the component handles overflow."}),(0,d.jsx)(i,{variant:`success`,onClickDismiss:g.onClickDismiss,content:"This is a success banner using a longer `string` to show how text overflow is managed. When the content exceeds the available space, it will be truncated with an ellipsis, giving a visual cue without hiding the fact that more information exists."}),(0,d.jsx)(i,{variant:`warning`,justify:`center`,link:(0,d.jsx)(a,{href:`#`,isExternal:!0,font:`body_s`,children:`Link`}),content:(0,d.jsxs)(`div`,{className:r(`flex`,`flex-col`,`gap-s`),children:[(0,d.jsxs)(`p`,{className:r(`text-default`,`font-body-s`,`m-0`),children:[`This is an example of passing a `,(0,d.jsx)(`strong`,{children:`React node`}),` `,`instead of just a `,(0,d.jsx)(`code`,{children:`string`}),`.`]}),(0,d.jsx)(`p`,{className:r(`text-default`,`font-body-s`,`m-0`),children:`The banner will handle this and by default, a maximum height of 3 rows of text is applied to keep the layout consistent and visually balanced.`}),(0,d.jsx)(`p`,{className:r(`text-default`,`font-body-s`,`m-0`),children:`However, we recommend following the guidelines and preferring plain strings when possible to keep content consistent across the design system.`})]})}),(0,d.jsx)(i,{variant:`error`,justify:`center`,action:g.action,content:(0,d.jsxs)(`div`,{className:r(`flex`,`flex-col`,`gap-s`),children:[(0,d.jsxs)(`p`,{className:r(`text-default`,`font-body-s`,`m-0`),children:[`This is an error banner using `,(0,d.jsx)(`strong`,{children:`React node`}),` content.`]}),(0,d.jsx)(`p`,{className:r(`text-default`,`font-body-s`,`m-0`),children:`The same rules apply here: by default the maximum height is limited to 3 rows, so the layout stays predictable.`}),(0,d.jsx)(`p`,{className:r(`text-default`,`font-body-s`,`m-0`),children:`Whenever possible, prefer plain string content to maintain design system consistency across all alert banners.`})]})})]}),parameters:{controls:{disable:!0}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "p-m", "gap-m")} style={{
    maxInlineSize: 500
  }} data-testid="wrapper">
      <p className={classNames("text-default", "font-body-m")}>
        Content default:
      </p>
      <AlertBanner {...defaultProps} variant="info" link={<Link href="#" isExternal font="body_s">
            Link
          </Link>} />
      <AlertBanner {...defaultProps} variant="success" />
      <AlertBanner {...defaultProps} variant="warning" />
      <AlertBanner {...defaultProps} variant="error" />

      <p className={classNames("text-default", "font-body-m")}>
        Content centered \`justify="center"\`:
      </p>
      <AlertBanner {...defaultProps} justify="center" variant="info" link={<Link href="#" isExternal font="body_s">
            Link
          </Link>} />
      <AlertBanner {...defaultProps} justify="center" variant="success" />
      <AlertBanner {...defaultProps} justify="center" variant="warning" />
      <AlertBanner {...defaultProps} justify="center" variant="error" />
      <p className={classNames("text-default", "font-body-m")}>
        Without action and link:
      </p>
      <AlertBanner content={defaultProps.content} justify="center" variant="info" onClickDismiss={defaultProps.onClickDismiss} />
      <AlertBanner content={defaultProps.content} justify="center" variant="success" onClickDismiss={defaultProps.onClickDismiss} />
      <AlertBanner content={defaultProps.content} variant="warning" onClickDismiss={defaultProps.onClickDismiss} />
      <AlertBanner content={defaultProps.content} variant="error" onClickDismiss={defaultProps.onClickDismiss} />

      <p className={classNames("text-default", "font-body-m")}>
        Custom content:
      </p>
      <AlertBanner variant="info" onClickDismiss={defaultProps.onClickDismiss} link={<Link href="#" isExternal font="body_s">
            Link
          </Link>} content="This content is passed as a \`string\`, but it can also be provided as a React node. In this example, the text is intentionally made really long to demonstrate how the component handles overflow." />

      <AlertBanner variant="success" onClickDismiss={defaultProps.onClickDismiss} content="This is a success banner using a longer \`string\` to show how text overflow is managed. When the content exceeds the available space, it will be truncated with an ellipsis, giving a visual cue without hiding the fact that more information exists." />
      <AlertBanner variant="warning" justify="center" link={<Link href="#" isExternal font="body_s">
            Link
          </Link>} content={<div className={classNames("flex", "flex-col", "gap-s")}>
            <p className={classNames("text-default", "font-body-s", "m-0")}>
              This is an example of passing a <strong>React node</strong>{" "}
              instead of just a <code>string</code>.
            </p>
            <p className={classNames("text-default", "font-body-s", "m-0")}>
              The banner will handle this and by default, a maximum height of 3
              rows of text is applied to keep the layout consistent and visually
              balanced.
            </p>
            <p className={classNames("text-default", "font-body-s", "m-0")}>
              However, we recommend following the guidelines and preferring
              plain strings when possible to keep content consistent across the
              design system.
            </p>
          </div>} />
      <AlertBanner variant="error" justify="center" action={defaultProps.action} content={<div className={classNames("flex", "flex-col", "gap-s")}>
            <p className={classNames("text-default", "font-body-s", "m-0")}>
              This is an error banner using <strong>React node</strong> content.
            </p>
            <p className={classNames("text-default", "font-body-s", "m-0")}>
              The same rules apply here: by default the maximum height is
              limited to 3 rows, so the layout stays predictable.
            </p>
            <p className={classNames("text-default", "font-body-s", "m-0")}>
              Whenever possible, prefer plain string content to maintain design
              system consistency across all alert banners.
            </p>
          </div>} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`VisualTest`]}));y();export{h as Playground,_ as VisualTest,v as __namedExportsOrder,p as default,y as n,u as t};