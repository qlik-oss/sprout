import{i as e,n as t}from"./chunk-DseTPa7n.js";import{t as n}from"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import{a as r}from"./lib-Btq7eDYl.js";import{t as i}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{n as a,t as o}from"./Modal-BfBcUdzD.js";import{G as s,J as c,gn as l,hn as u}from"./iframe-B5xoaqtW.js";import"./Icons-DJikLCul.js";import{t as d}from"./Modal.argTypes-LPx4uGpj.js";var f=i(),p=e(n()),m=e=>e===`positive`?`information`:e===`destructive`?`error`:e??`information`,h={error:s.error,warning:s.warning,information:s.info},g=(0,p.forwardRef)(_);function _({title:e,children:t,footerLeft:n,footerRight:r,details:i,"data-testid":s,variant:d=`information`,...g},_){let v=l(),[y,b]=(0,p.useState)(!1),x=h[m(d)];return(0,f.jsxs)(o.Root,{ref:_,...g,variant:`dialog`,role:`alertdialog`,preventEscaping:!0,preventInteractiveBackdrop:!0,"aria-label":e,"data-testid":s,children:[(0,f.jsxs)(`div`,{className:u(`flex-noreset`,`flex-row`),children:[!!x&&(0,f.jsx)(`div`,{className:u(`pt-xxl`,`pl-xxl`,`icon-size-xxl`),children:x}),(0,f.jsxs)(`div`,{className:u(`flex-noreset`,`flex-col`,`items-start`,`overflow-hidden`),children:[(0,f.jsx)(`div`,{"data-testid":s?`${s}-title`:void 0,className:u(`font-label-m-emphasized`,`text-default`,`pt-xxl`,`pr-xl`,`pb-xl`,`pl-xxl`),children:e}),(0,f.jsxs)(`div`,{className:u(`flex-noreset`,`flex-col`,`pr-xxl`,`pb-m`,`pl-m`,`gap-m`,`self-stretch`),children:[(0,f.jsx)(`div`,{className:u(`pl-xl`,`gap-m`,`font-body-s`,`text-default`),children:t}),!!i&&(0,f.jsxs)(`div`,{className:u(`flex-noreset`,`flex-col`,`border-box`,`items-start`,`gap-density-m`),children:[(0,f.jsx)(c,{variant:`quiet`,asDropdown:!0,label:v(`alertmodal.label.details`),onClick:()=>{b(!y)}}),!!y&&(0,f.jsx)(`div`,{className:u(`flex-noreset`,`flex-col`,`border-box`,`max-w-full`,`overflow-auto`,`pl-xl`,`gap-xxl`,`items-center`),"data-testid":s?`${s}-details`:void 0,children:i})]})]})]})]}),(0,f.jsx)(`div`,{className:u(`flex-noreset`,`justify-end`,`items-center`,{[a.dialog_actions]:!0}),children:(0,f.jsxs)(`div`,{className:u(`flex-noreset`,`gap-m`,`p-xl`,{[a.dialog_actions_container]:!0,[a.dialog_actions_end_section]:!0}),"data-testid":s?`${s}-footer`:void 0,children:[n,r]})})]})}g.displayName=`AlertModal`;var{preventEscaping:v,preventInteractiveBackdrop:y,width:b,...x}=d,S={...x,details:{control:!1,description:`Additional details to display, can be toggled.`,table:{type:{summary:`ReactNode`}}},footerRight:{control:!1,description:`Content for the right footer area, typically buttons.`,table:{type:{summary:`ReactNode`}}},title:{control:`text`,table:{type:{summary:`string`}}},variant:{control:{type:`select`},options:[`error`,`warning`,`information`],table:{defaultValue:{summary:`information`},type:{summary:`'error' | 'warning' | 'information'`}}}},C=t({Details:()=>O,ErrorVariant:()=>T,InformationVariant:()=>D,TextContentWithEllipsis:()=>k,TextContentWithoutEllipsis:()=>A,WarningVariant:()=>E,__namedExportsOrder:()=>j,default:()=>w}),w={title:`Components/AlertModal`,component:g},T={name:`Error`,args:{visible:!0,title:`Could not fetch data`,children:`The system could not connect to the server, or the server has timed out.`,variant:`error`},argTypes:S,parameters:{},render:({children:e,...t})=>{let n=r({boxSizing:`border-box`});return(0,f.jsx)(g,{ref:n.ref,...t,footerRight:(0,f.jsx)(c,{label:`Ok`,variant:`default`,justified:n.get({xxs:!0,s:!1})}),children:e})}},E={name:`Warning`,args:{visible:!0,title:`Incomplete form`,children:`Some values may be missing. Do you want to continue?`,variant:`warning`},argTypes:S,parameters:{},render:({children:e,...t})=>{let n=r({boxSizing:`border-box`});return(0,f.jsx)(g,{ref:n.ref,...t,footerRight:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c,{label:`Cancel`,variant:`quiet`,justified:n.get({xxs:!0,s:!1})}),(0,f.jsx)(c,{label:`Continue`,variant:`default`,justified:n.get({xxs:!0,s:!1})})]}),children:e})}},D={name:`Information`,args:{visible:!0,title:`Dialog Title`,children:`Lorem ipsum dolor sit amet.`,variant:`information`},argTypes:S,parameters:{},render:({children:e,...t})=>{let n=r({boxSizing:`border-box`});return(0,f.jsx)(g,{ref:n.ref,...t,footerRight:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c,{label:`Cancel`,variant:`quiet`,justified:n.get({xxs:!0,s:!1})}),(0,f.jsx)(c,{label:`Continue`,variant:`default`,justified:n.get({xxs:!0,s:!1})})]}),children:e})}},O={args:{visible:!0,title:`Account suspended`,children:`Your account has been suspended due to suspicious activity. Contact customer service for assistance.`,details:(0,f.jsx)(`span`,{className:u(`text-default`,`break-all`),children:`The requested service 'GoogleDriveConnector (Qlik.Connectors.SDK.Common.Source.IFileHostingProviderSource)' has not been registered. To avoid this exception, either register a component to provide the service, check for service registration using IsRegistered(), or use the ResolveOptional() method to resolve an optional dependency.`}),variant:`error`},argTypes:S,parameters:{},render:({children:e,...t})=>{let n=r({boxSizing:`border-box`});return(0,f.jsx)(g,{ref:n.ref,...t,footerRight:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c,{label:`Cancel`,variant:`quiet`,justified:n.get({xxs:!0,s:!1})}),(0,f.jsx)(c,{label:`Continue`,variant:`default`,justified:n.get({xxs:!0,s:!1})})]}),children:e})}},k={args:{visible:!0,title:`Delete account`,children:(0,f.jsx)(`div`,{className:u(`truncate`,`overflow-hidden`),children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 2025-09-26_project_backup_user_documents_financial_reports_Q3_Q4_consolidated_version_final_review_approved_by_john_doe_confidential_v2.0_extra_long_filename_example_with_additional_metadata_and_hash_3f4a9b1c.tar.gz`}),variant:`error`},argTypes:S,parameters:{},render:({children:e,...t})=>(0,f.jsx)(g,{...t,footerRight:(0,f.jsx)(c,{label:`Cancel now`,variant:`quiet`}),children:e})},A={args:{visible:!0,title:`Delete account`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis sed felis at laoreet. Praesent pellentesque odio vel tellus elementum, quis vulputate est sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec nec urna eget dolor molestie interdum imperdiet nec ex. Sed et neque tempus, finibus augue sed, egestas mauris. Vivamus vitae magna congue, eleifend massa vel, fringilla massa. Fusce fermentum, lectus feugiat scelerisque viverra, nulla enim finibus turpis, in vulputate leo nunc ac felis. Duis non elementum felis. Aliquam molestie tortor eu nunc pulvinar, nec tempor tellus faucibus. Maecenas euismod nisi sed tortor tincidunt, quis vestibulum odio venenatis. `,variant:`error`},argTypes:S,parameters:{},render:({children:e,...t})=>(0,f.jsx)(g,{...t,footerRight:(0,f.jsx)(c,{label:`Cancel now`,variant:`quiet`}),children:e})};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Error",
  args: {
    visible: true,
    title: "Could not fetch data",
    children: "The system could not connect to the server, or the server has timed out.",
    variant: "error"
  },
  argTypes: AlertModalArgTypes,
  parameters: {},
  render: ({
    children,
    ...props
  }) => {
    const container = useContainer({
      boxSizing: "border-box"
    });
    return <AlertModal ref={container.ref} {...props} footerRight={<Button label="Ok" variant="default" justified={container.get<boolean>({
      xxs: true,
      s: false
    })} />}>
        {children}
      </AlertModal>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Warning",
  args: {
    visible: true,
    title: "Incomplete form",
    children: "Some values may be missing. Do you want to continue?",
    variant: "warning"
  },
  argTypes: AlertModalArgTypes,
  parameters: {},
  render: ({
    children,
    ...props
  }) => {
    const container = useContainer({
      boxSizing: "border-box"
    });
    return <AlertModal ref={container.ref} {...props} footerRight={<>
            <Button label="Cancel" variant="quiet" justified={container.get<boolean>({
        xxs: true,
        s: false
      })} />
            <Button label="Continue" variant="default" justified={container.get<boolean>({
        xxs: true,
        s: false
      })} />
          </>}>
        {children}
      </AlertModal>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Information",
  args: {
    visible: true,
    title: "Dialog Title",
    children: "Lorem ipsum dolor sit amet.",
    variant: "information"
  },
  argTypes: AlertModalArgTypes,
  parameters: {},
  render: ({
    children,
    ...props
  }) => {
    const container = useContainer({
      boxSizing: "border-box"
    });
    return <AlertModal ref={container.ref} {...props} footerRight={<>
            <Button label="Cancel" variant="quiet" justified={container.get<boolean>({
        xxs: true,
        s: false
      })} />
            <Button label="Continue" variant="default" justified={container.get<boolean>({
        xxs: true,
        s: false
      })} />
          </>}>
        {children}
      </AlertModal>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    title: "Account suspended",
    children: "Your account has been suspended due to suspicious activity. Contact customer service for assistance.",
    details: <span className={classNames("text-default", "break-all")}>
        The requested service &apos;GoogleDriveConnector
        (Qlik.Connectors.SDK.Common.Source.IFileHostingProviderSource)&apos; has
        not been registered. To avoid this exception, either register a
        component to provide the service, check for service registration using
        IsRegistered(), or use the ResolveOptional() method to resolve an
        optional dependency.
      </span>,
    variant: "error"
  },
  argTypes: AlertModalArgTypes,
  parameters: {},
  render: ({
    children,
    ...props
  }) => {
    const container = useContainer({
      boxSizing: "border-box"
    });
    return <AlertModal ref={container.ref} {...props} footerRight={<>
            <Button label="Cancel" variant="quiet" justified={container.get<boolean>({
        xxs: true,
        s: false
      })} />
            <Button label="Continue" variant="default" justified={container.get<boolean>({
        xxs: true,
        s: false
      })} />
          </>}>
        {children}
      </AlertModal>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    title: "Delete account",
    children: <div className={classNames("truncate", "overflow-hidden")}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam.
        2025-09-26_project_backup_user_documents_financial_reports_Q3_Q4_consolidated_version_final_review_approved_by_john_doe_confidential_v2.0_extra_long_filename_example_with_additional_metadata_and_hash_3f4a9b1c.tar.gz
      </div>,
    variant: "error"
  },
  argTypes: AlertModalArgTypes,
  parameters: {},
  render: ({
    children,
    ...props
  }) => <AlertModal {...props} footerRight={<Button label="Cancel now" variant="quiet" />}>
      {children}
    </AlertModal>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    title: "Delete account",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis sed felis at laoreet. Praesent pellentesque odio vel tellus elementum, quis vulputate est sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec nec urna eget dolor molestie interdum imperdiet nec ex. Sed et neque tempus, finibus augue sed, egestas mauris. Vivamus vitae magna congue, eleifend massa vel, fringilla massa. Fusce fermentum, lectus feugiat scelerisque viverra, nulla enim finibus turpis, in vulputate leo nunc ac felis. Duis non elementum felis. Aliquam molestie tortor eu nunc pulvinar, nec tempor tellus faucibus. Maecenas euismod nisi sed tortor tincidunt, quis vestibulum odio venenatis. ",
    variant: "error"
  },
  argTypes: AlertModalArgTypes,
  parameters: {},
  render: ({
    children,
    ...props
  }) => <AlertModal {...props} footerRight={<Button label="Cancel now" variant="quiet" />}>
      {children}
    </AlertModal>
}`,...A.parameters?.docs?.source}}};var j=[`ErrorVariant`,`WarningVariant`,`InformationVariant`,`Details`,`TextContentWithEllipsis`,`TextContentWithoutEllipsis`];export{O as Details,T as ErrorVariant,D as InformationVariant,k as TextContentWithEllipsis,A as TextContentWithoutEllipsis,E as WarningVariant,j as __namedExportsOrder,w as default,C as t};