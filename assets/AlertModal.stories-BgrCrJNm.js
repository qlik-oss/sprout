import{n as e,r as t}from"./chunk-BneVvdWh.js";import{In as n,Ln as r,Rn as i,Wn as a,gt as o,v as s,wt as c}from"./iframe-B0xl5hqz.js";import{s as l,t as u}from"./Modal.argTypes-CmTWBKne.js";var d,f,p,m,h,g=e((()=>{l(),{preventEscaping:d,preventInteractiveBackdrop:f,width:p,...m}=u,h={...m,details:{control:!1,description:`Additional details to display, can be toggled.`,table:{type:{summary:`ReactNode`}}},footerRight:{control:!1,description:`Content for the right footer area, typically buttons.`,table:{type:{summary:`ReactNode`}}},title:{control:`text`,table:{type:{summary:`string`}}},variant:{control:{type:`select`},options:[`error`,`warning`,`information`],table:{defaultValue:{summary:`information`},type:{summary:`'error' | 'warning' | 'information'`}}}}})),_=t({Details:()=>C,ErrorVariant:()=>b,InformationVariant:()=>S,TextContentWithEllipsis:()=>w,TextContentWithoutEllipsis:()=>T,WarningVariant:()=>x,__namedExportsOrder:()=>E,default:()=>y}),v,y,b,x,S,C,w,T,E,D=e((()=>{i(),s(),g(),v=r(),y={title:`Components/AlertModal`,component:o},b={name:`Error`,args:{visible:!0,title:`Could not fetch data`,children:`The system could not connect to the server, or the server has timed out.`,variant:`error`},argTypes:h,parameters:{},render:({children:e,...t})=>{let n=a({boxSizing:`border-box`});return(0,v.jsx)(o,{ref:n.ref,...t,footerRight:(0,v.jsx)(c,{label:`Ok`,variant:`default`,justified:n.get({xxs:!0,s:!1})}),children:e})}},x={name:`Warning`,args:{visible:!0,title:`Incomplete form`,children:`Some values may be missing. Do you want to continue?`,variant:`warning`},argTypes:h,parameters:{},render:({children:e,...t})=>{let n=a({boxSizing:`border-box`});return(0,v.jsx)(o,{ref:n.ref,...t,footerRight:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c,{label:`Cancel`,variant:`quiet`,justified:n.get({xxs:!0,s:!1})}),(0,v.jsx)(c,{label:`Continue`,variant:`default`,justified:n.get({xxs:!0,s:!1})})]}),children:e})}},S={name:`Information`,args:{visible:!0,title:`Dialog Title`,children:`Lorem ipsum dolor sit amet.`,variant:`information`},argTypes:h,parameters:{},render:({children:e,...t})=>{let n=a({boxSizing:`border-box`});return(0,v.jsx)(o,{ref:n.ref,...t,footerRight:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c,{label:`Cancel`,variant:`quiet`,justified:n.get({xxs:!0,s:!1})}),(0,v.jsx)(c,{label:`Continue`,variant:`default`,justified:n.get({xxs:!0,s:!1})})]}),children:e})}},C={args:{visible:!0,title:`Account suspended`,children:`Your account has been suspended due to suspicious activity. Contact customer service for assistance.`,details:(0,v.jsx)(`span`,{className:n(`text-default`,`break-all`),children:`The requested service 'GoogleDriveConnector (Qlik.Connectors.SDK.Common.Source.IFileHostingProviderSource)' has not been registered. To avoid this exception, either register a component to provide the service, check for service registration using IsRegistered(), or use the ResolveOptional() method to resolve an optional dependency.`}),variant:`error`},argTypes:h,parameters:{},render:({children:e,...t})=>{let n=a({boxSizing:`border-box`});return(0,v.jsx)(o,{ref:n.ref,...t,footerRight:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c,{label:`Cancel`,variant:`quiet`,justified:n.get({xxs:!0,s:!1})}),(0,v.jsx)(c,{label:`Continue`,variant:`default`,justified:n.get({xxs:!0,s:!1})})]}),children:e})}},w={args:{visible:!0,title:`Delete account`,children:(0,v.jsx)(`div`,{className:n(`truncate`,`overflow-hidden`),children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 2025-09-26_project_backup_user_documents_financial_reports_Q3_Q4_consolidated_version_final_review_approved_by_john_doe_confidential_v2.0_extra_long_filename_example_with_additional_metadata_and_hash_3f4a9b1c.tar.gz`}),variant:`error`},argTypes:h,parameters:{},render:({children:e,...t})=>(0,v.jsx)(o,{...t,footerRight:(0,v.jsx)(c,{label:`Cancel now`,variant:`quiet`}),children:e})},T={args:{visible:!0,title:`Delete account`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis sed felis at laoreet. Praesent pellentesque odio vel tellus elementum, quis vulputate est sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec nec urna eget dolor molestie interdum imperdiet nec ex. Sed et neque tempus, finibus augue sed, egestas mauris. Vivamus vitae magna congue, eleifend massa vel, fringilla massa. Fusce fermentum, lectus feugiat scelerisque viverra, nulla enim finibus turpis, in vulputate leo nunc ac felis. Duis non elementum felis. Aliquam molestie tortor eu nunc pulvinar, nec tempor tellus faucibus. Maecenas euismod nisi sed tortor tincidunt, quis vestibulum odio venenatis. `,variant:`error`},argTypes:h,parameters:{},render:({children:e,...t})=>(0,v.jsx)(o,{...t,footerRight:(0,v.jsx)(c,{label:`Cancel now`,variant:`quiet`}),children:e})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`ErrorVariant`,`WarningVariant`,`InformationVariant`,`Details`,`TextContentWithEllipsis`,`TextContentWithoutEllipsis`]}));D();export{C as Details,b as ErrorVariant,S as InformationVariant,w as TextContentWithEllipsis,T as TextContentWithoutEllipsis,x as WarningVariant,E as __namedExportsOrder,y as default,D as n,_ as t};