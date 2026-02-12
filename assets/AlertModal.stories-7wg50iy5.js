import{r as j,j as e}from"./iframe-B4Gn7jRD.js";import{M as w,d as x,u as g}from"./Modal-CMui8VoY.js";import{C as N}from"./Modal.argTypes-Dxw18voe.js";import{S as v}from"./SeverityIcon-CafQc9yX.js";import{c as a}from"./classNames-CTBLippR.js";import{u as R}from"./useI18n-DOe-EdfE.js";import{B as s}from"./Button-DuNeVE70.js";const D=t=>t==="positive"?"information":t==="destructive"?"error":t??"information",E={error:v.error,warning:v.warning,information:v.info},i=j.forwardRef(z);function z({title:t,children:r,footerLeft:n,footerRight:y,details:b,"data-testid":o,variant:C="information",...A},S){const M=R(),[h,T]=j.useState(!1),q=D(C),_=E[q];return e.jsxs(w.Root,{ref:S,...A,variant:"dialog",role:"alertdialog",preventEscaping:!0,preventInteractiveBackdrop:!0,"aria-label":t,"data-testid":o,children:[e.jsxs("div",{className:a("flex-noreset","flex-row"),children:[!!_&&e.jsx("div",{className:a("pt-xxl","pl-xxl","icon-size-xxl"),children:_}),e.jsxs("div",{className:a("flex-noreset","flex-col","items-start","overflow-hidden"),children:[e.jsx("div",{"data-testid":o?`${o}-title`:void 0,className:a("font-label-m-emphasized","text-default","pt-xxl","pr-xl","pb-xl","pl-xxl"),children:t}),e.jsxs("div",{className:a("flex-noreset","flex-col","pr-xxl","pb-m","pl-m","gap-m","self-stretch"),children:[e.jsx("div",{className:a("pl-xl","gap-m","font-body-s","text-default"),children:r}),!!b&&e.jsxs("div",{className:a("flex-noreset","flex-col","border-box","items-start","gap-density-m"),children:[e.jsx(s,{variant:"quiet",asDropdown:!0,label:M("alertmodal.label.details"),onClick:()=>{T(!h)}}),!!h&&e.jsx("div",{className:a("flex-noreset","flex-col","border-box","max-w-full","overflow-auto","pl-xl","gap-xxl","items-center"),"data-testid":o?`${o}-details`:void 0,children:b})]})]})]})]}),e.jsx("div",{className:a("flex-noreset","justify-end","items-center",{[x.dialog_actions]:!0}),children:e.jsxs("div",{className:a("flex-noreset","gap-m","p-xl",{[x.dialog_actions_container]:!0,[x.dialog_actions_end_section]:!0}),"data-testid":o?`${o}-footer`:void 0,children:[n,y]})})]})}i.displayName="AlertModal";const{preventEscaping:Y,preventInteractiveBackdrop:$,width:G,...B}=N,l={...B,details:{control:!1,description:"Additional details to display, can be toggled.",table:{type:{summary:"ReactNode"}}},footerRight:{control:!1,description:"Content for the right footer area, typically buttons.",table:{type:{summary:"ReactNode"}}},title:{control:"text",table:{type:{summary:"string"}}},variant:{control:{type:"select"},options:["error","warning","information"],table:{defaultValue:{summary:"information"},type:{summary:"'error' | 'warning' | 'information'"}}}},k={title:"Components/AlertModal",component:i},c={name:"Error",args:{visible:!0,title:"Could not fetch data",children:"The system could not connect to the server, or the server has timed out.",variant:"error"},argTypes:l,parameters:{},render:({children:t,...r})=>{const n=g({boxSizing:"border-box"});return e.jsx(i,{ref:n.ref,...r,footerRight:e.jsx(s,{label:"Ok",variant:"default",justified:n.get({xxs:!0,s:!1})}),children:t})}},u={name:"Warning",args:{visible:!0,title:"Incomplete form",children:"Some values may be missing. Do you want to continue?",variant:"warning"},argTypes:l,parameters:{},render:({children:t,...r})=>{const n=g({boxSizing:"border-box"});return e.jsx(i,{ref:n.ref,...r,footerRight:e.jsxs(e.Fragment,{children:[e.jsx(s,{label:"Cancel",variant:"quiet",justified:n.get({xxs:!0,s:!1})}),e.jsx(s,{label:"Continue",variant:"default",justified:n.get({xxs:!0,s:!1})})]}),children:t})}},d={name:"Information",args:{visible:!0,title:"Dialog Title",children:"Lorem ipsum dolor sit amet.",variant:"information"},argTypes:l,parameters:{},render:({children:t,...r})=>{const n=g({boxSizing:"border-box"});return e.jsx(i,{ref:n.ref,...r,footerRight:e.jsxs(e.Fragment,{children:[e.jsx(s,{label:"Cancel",variant:"quiet",justified:n.get({xxs:!0,s:!1})}),e.jsx(s,{label:"Continue",variant:"default",justified:n.get({xxs:!0,s:!1})})]}),children:t})}},m={args:{visible:!0,title:"Account suspended",children:"Your account has been suspended due to suspicious activity. Contact customer service for assistance.",details:e.jsx("span",{className:a("text-default","break-all"),children:"The requested service 'GoogleDriveConnector (Qlik.Connectors.SDK.Common.Source.IFileHostingProviderSource)' has not been registered. To avoid this exception, either register a component to provide the service, check for service registration using IsRegistered(), or use the ResolveOptional() method to resolve an optional dependency."}),variant:"error"},argTypes:l,parameters:{},render:({children:t,...r})=>{const n=g({boxSizing:"border-box"});return e.jsx(i,{ref:n.ref,...r,footerRight:e.jsxs(e.Fragment,{children:[e.jsx(s,{label:"Cancel",variant:"quiet",justified:n.get({xxs:!0,s:!1})}),e.jsx(s,{label:"Continue",variant:"default",justified:n.get({xxs:!0,s:!1})})]}),children:t})}},p={args:{visible:!0,title:"Delete account",children:e.jsx("div",{className:a("truncate","overflow-hidden"),children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 2025-09-26_project_backup_user_documents_financial_reports_Q3_Q4_consolidated_version_final_review_approved_by_john_doe_confidential_v2.0_extra_long_filename_example_with_additional_metadata_and_hash_3f4a9b1c.tar.gz"}),variant:"error"},argTypes:l,parameters:{},render:({children:t,...r})=>e.jsx(i,{...r,footerRight:e.jsx(s,{label:"Cancel now",variant:"quiet"}),children:t})},f={args:{visible:!0,title:"Delete account",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis sed felis at laoreet. Praesent pellentesque odio vel tellus elementum, quis vulputate est sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec nec urna eget dolor molestie interdum imperdiet nec ex. Sed et neque tempus, finibus augue sed, egestas mauris. Vivamus vitae magna congue, eleifend massa vel, fringilla massa. Fusce fermentum, lectus feugiat scelerisque viverra, nulla enim finibus turpis, in vulputate leo nunc ac felis. Duis non elementum felis. Aliquam molestie tortor eu nunc pulvinar, nec tempor tellus faucibus. Maecenas euismod nisi sed tortor tincidunt, quis vestibulum odio venenatis. ",variant:"error"},argTypes:l,parameters:{},render:({children:t,...r})=>e.jsx(i,{...r,footerRight:e.jsx(s,{label:"Cancel now",variant:"quiet"}),children:t})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    title: "Account suspended",
    children: "Your account has been suspended due to suspicious activity. Contact customer service for assistance.",
    details: <span className={classNames("text-default", "break-all")}>
        The requested service &apos;GoogleDriveConnector
        (Qlik.Connectors.SDK.Common.Source.IFileHostingProviderSource)&apos; has not been registered. To avoid this
        exception, either register a component to provide the service, check for service registration using
        IsRegistered(), or use the ResolveOptional() method to resolve an optional dependency.
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    title: "Delete account",
    children: <div className={classNames("truncate", "overflow-hidden")}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
        dapibus diam.
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
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const I=["ErrorVariant","WarningVariant","InformationVariant","Details","TextContentWithEllipsis","TextContentWithoutEllipsis"],H=Object.freeze(Object.defineProperty({__proto__:null,Details:m,ErrorVariant:c,InformationVariant:d,TextContentWithEllipsis:p,TextContentWithoutEllipsis:f,WarningVariant:u,__namedExportsOrder:I,default:k},Symbol.toStringTag,{value:"Module"}));export{c as E,H as S};
