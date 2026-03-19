import{i as e,n as t}from"./chunk-DseTPa7n.js";import{t as n}from"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as r}from"./sprout-tokens-DS4gz5z7.js";import{t as i}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t as a}from"./Link-D4I5YVwe.js";import{G as o,J as s,K as c,gn as l,hn as u,on as d}from"./iframe-URhFfzNK.js";var f={content_max_rows:`_content_max_rows_dgjkq_2`,content_max_height:`_content_max_height_dgjkq_10`},p=i(),m=(0,e(n()).forwardRef)(h);function h({variant:e,justify:t,content:n,children:i,action:a,link:s,dismissLabel:m,onClickDismiss:h,...g},_){let v=l()(`alertbanner.dismiss`),y=u(`m-0`,`pr-m`,`my-m`,`font-body-s`,`text-default`,`overflow-hidden`,{grow:t!==`center`,"overflow-y-auto":typeof n!=`string`,"overflow-x-hidden":typeof n!=`string`,[f.content_max_height]:typeof n!=`string`,[f.content_max_rows]:typeof n==`string`});return(0,p.jsx)(`div`,{role:`status`,"aria-live":`polite`,className:u(`bg-default`,`w-full`),"data-variant":e||`info`,ref:_,...g,children:(0,p.jsxs)(`div`,{className:u(`flex-noreset`,`items-center`,`border-box`,`border-b-default`,{"bg-danger-weak":e===`error`,border_danger:e===`error`,"bg-warning-weak":e===`warning`,border_warning:e===`warning`,"bg-success-weak":e===`success`,border_success:e===`success`,"bg-info-weak":e===`info`||!e,border_info:e===`info`||!e}),style:{minBlockSize:r.common_sizing_5xl},children:[(0,p.jsxs)(`div`,{className:u(`flex-noreset`,`border-box`,`w-full`,`items-center`,`grow`,`flex-row`,`justify-start`,{"justify-center":t===`center`}),children:[(0,p.jsx)(`span`,{className:u(`flex-noreset`,`shrink-0`,`items-center`,`py-l`,`px-xl`,`icon-size-xl`),children:o[e||`info`]}),(0,p.jsx)(`div`,{className:y,children:n}),i?(0,p.jsx)(`div`,{className:y,children:i}):null,s?(0,p.jsx)(`div`,{className:u(`flex`,`items-center`,`justify-self-end`,{"pl-0":t!==`center`,"pl-m":t===`center`,"pr-m":!h||!!a}),children:s}):null,a?(0,p.jsx)(`div`,{className:u(`flex`,`items-center`,`justify-self-end`,`pl-0`,{"pr-m":!h}),children:a}):null]}),h?(0,p.jsx)(`span`,{className:u(`px-m`,`mr-auto`,{"pl-0":!a&&!s}),children:(0,p.jsx)(c,{variant:`quiet`,onClick:()=>{h()},label:m||v,icon:(0,p.jsx)(d,{})})}):null]})})}h.displayName=`AlertBanner`;var g={action:{description:`Action content, typically a button.`,table:{type:{summary:`ReactNode`}}},content:{description:`Content of the alert banner.`,table:{type:{summary:`ReactNode`}}},dismissLabel:{control:{type:`text`},description:`Label for the dismiss button.`,table:{defaultValue:{summary:`Dismiss`},type:{summary:`string`}}},justify:{control:{type:`select`},description:`Justification of the alert content.`,options:[void 0,`center`],table:{type:{summary:`undefined | center`}}},link:{description:`Link content, typically a hyperlink.`,table:{type:{summary:`ReactNode`}}},onClickDismiss:{description:`Callback when the alert is dismissed.`,table:{type:{summary:`() => void`}}},variant:{control:{type:`select`},options:[void 0,`info`,`warning`,`error`,`success`],table:{type:{summary:`info | warning | error | success`}}}},_=t({Playground:()=>x,VisualTest:()=>C,__namedExportsOrder:()=>w,default:()=>y}),{fn:v}=__STORYBOOK_MODULE_TEST__,y={title:`Components/AlertBanner`,component:m,parameters:{}},b=v(),x={render:({...e})=>(0,p.jsx)(`div`,{className:u(`flex`,`flex-col`,`p-m`,`w-s`),"data-testid":`wrapper`,children:(0,p.jsx)(m,{...e,action:(0,p.jsx)(s,{variant:`quiet`,label:`Action`,onClick:b})})}),args:{content:`Alert content`,variant:`info`,onClickDismiss:v()},argTypes:g,parameters:{chromatic:{disableSnapshot:!0}}},S={content:`Alert content`,action:(0,p.jsx)(s,{variant:`quiet`,label:`Action`,onClick:v()}),onClickDismiss:v()},C={render:()=>(0,p.jsxs)(`div`,{className:u(`flex`,`flex-col`,`p-m`,`gap-m`),style:{maxInlineSize:500},"data-testid":`wrapper`,children:[(0,p.jsx)(`p`,{className:u(`text-default`,`font-body-m`),children:`Content default:`}),(0,p.jsx)(m,{...S,variant:`info`,link:(0,p.jsx)(a,{href:`#`,isExternal:!0,font:`body_s`,children:`Link`})}),(0,p.jsx)(m,{...S,variant:`success`}),(0,p.jsx)(m,{...S,variant:`warning`}),(0,p.jsx)(m,{...S,variant:`error`}),(0,p.jsx)(`p`,{className:u(`text-default`,`font-body-m`),children:'Content centered `justify="center"`:'}),(0,p.jsx)(m,{...S,justify:`center`,variant:`info`,link:(0,p.jsx)(a,{href:`#`,isExternal:!0,font:`body_s`,children:`Link`})}),(0,p.jsx)(m,{...S,justify:`center`,variant:`success`}),(0,p.jsx)(m,{...S,justify:`center`,variant:`warning`}),(0,p.jsx)(m,{...S,justify:`center`,variant:`error`}),(0,p.jsx)(`p`,{className:u(`text-default`,`font-body-m`),children:`Without action and link:`}),(0,p.jsx)(m,{content:S.content,justify:`center`,variant:`info`,onClickDismiss:S.onClickDismiss}),(0,p.jsx)(m,{content:S.content,justify:`center`,variant:`success`,onClickDismiss:S.onClickDismiss}),(0,p.jsx)(m,{content:S.content,variant:`warning`,onClickDismiss:S.onClickDismiss}),(0,p.jsx)(m,{content:S.content,variant:`error`,onClickDismiss:S.onClickDismiss}),(0,p.jsx)(`p`,{className:u(`text-default`,`font-body-m`),children:`Custom content:`}),(0,p.jsx)(m,{variant:`info`,onClickDismiss:S.onClickDismiss,link:(0,p.jsx)(a,{href:`#`,isExternal:!0,font:`body_s`,children:`Link`}),content:"This content is passed as a `string`, but it can also be provided as a React node. In this example, the text is intentionally made really long to demonstrate how the component handles overflow."}),(0,p.jsx)(m,{variant:`success`,onClickDismiss:S.onClickDismiss,content:"This is a success banner using a longer `string` to show how text overflow is managed. When the content exceeds the available space, it will be truncated with an ellipsis, giving a visual cue without hiding the fact that more information exists."}),(0,p.jsx)(m,{variant:`warning`,justify:`center`,link:(0,p.jsx)(a,{href:`#`,isExternal:!0,font:`body_s`,children:`Link`}),content:(0,p.jsxs)(`div`,{className:u(`flex`,`flex-col`,`gap-s`),children:[(0,p.jsxs)(`p`,{className:u(`text-default`,`font-body-s`,`m-0`),children:[`This is an example of passing a `,(0,p.jsx)(`strong`,{children:`React node`}),` `,`instead of just a `,(0,p.jsx)(`code`,{children:`string`}),`.`]}),(0,p.jsx)(`p`,{className:u(`text-default`,`font-body-s`,`m-0`),children:`The banner will handle this and by default, a maximum height of 3 rows of text is applied to keep the layout consistent and visually balanced.`}),(0,p.jsx)(`p`,{className:u(`text-default`,`font-body-s`,`m-0`),children:`However, we recommend following the guidelines and preferring plain strings when possible to keep content consistent across the design system.`})]})}),(0,p.jsx)(m,{variant:`error`,justify:`center`,action:S.action,content:(0,p.jsxs)(`div`,{className:u(`flex`,`flex-col`,`gap-s`),children:[(0,p.jsxs)(`p`,{className:u(`text-default`,`font-body-s`,`m-0`),children:[`This is an error banner using `,(0,p.jsx)(`strong`,{children:`React node`}),` content.`]}),(0,p.jsx)(`p`,{className:u(`text-default`,`font-body-s`,`m-0`),children:`The same rules apply here: by default the maximum height is limited to 3 rows, so the layout stays predictable.`}),(0,p.jsx)(`p`,{className:u(`text-default`,`font-body-s`,`m-0`),children:`Whenever possible, prefer plain string content to maintain design system consistency across all alert banners.`})]})})]}),parameters:{controls:{disable:!0}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};var w=[`Playground`,`VisualTest`];export{x as Playground,C as VisualTest,w as __namedExportsOrder,y as default,_ as t};