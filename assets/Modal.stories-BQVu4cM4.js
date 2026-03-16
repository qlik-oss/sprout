import{i as e,n as t}from"./chunk-DseTPa7n.js";import{t as n}from"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import{a as r}from"./lib-Btq7eDYl.js";import{t as i}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t as a}from"./Modal-xr3_phT3.js";import{t as o}from"./RadioGroup-BzSwHBLe.js";import{t as s}from"./Switch-Dagn8T5a.js";import{t as c}from"./Textarea-BR3AD5on.js";import{D as l,F as u,J as d,V as f,b as p,hn as m,ut as h}from"./iframe-BRSAI4nO.js";import"./Icons-DoZ1c5fe.js";import{r as g,t as _}from"./Modal.argTypes-Bk8gtk-m.js";var v=t({FullWithMarginWithFooterActions:()=>A,HeightScenario:()=>I,ModalInModal:()=>F,Playground:()=>O,VisualTest:()=>P,WithCheckbox:()=>j,WithFooterActions:()=>k,WithLeftButton:()=>M,__namedExportsOrder:()=>L,default:()=>C}),y=e(n()),b=i(),{fn:x}=__STORYBOOK_MODULE_TEST__,S=[`[role="tooltip"]`,`button[aria-label="Close"]`],C={component:a,title:`Components/Modal`},w={chromatic:{disableSnapshot:!0}},T=(0,y.forwardRef)(({onClose:e,...t},n)=>{let{children:r,headerTitle:i,...o}=t;return(0,b.jsx)(a,{ref:n,headerTitle:i,onClose:()=>{e&&e()},...o,children:r||`(Default story child)`})});T.displayName=`Modal`;function E(){return(0,b.jsx)(`form`,{children:(0,b.jsxs)(`div`,{className:m(`flex`,`flex-col`,`border-box`,`gap-m`,`py-xl`),children:[(0,b.jsx)(l,{label:`Name`,id:`name`}),(0,b.jsx)(`div`,{className:m(`flex`,`border-box`,`py-m`),children:(0,b.jsx)(s,{label:`I agree to the terms and conditions`})}),(0,b.jsx)(`div`,{className:m(`flex`,`border-box`,`py-m`),children:(0,b.jsx)(s,{label:`I agree to the terms and conditions`})}),(0,b.jsx)(`div`,{className:m(`flex`,`border-box`,`py-m`),children:(0,b.jsx)(s,{label:`I agree to the terms and conditions`})}),(0,b.jsx)(c,{label:`Comment`,id:`comment`}),(0,b.jsx)(o,{label:`Did you cook it?`,name:`radio-group`,options:[{label:`I cooked it`,value:`1`},{label:`I didn't cooked it`,value:`2`},{label:`No cooking`,value:`3`}]}),(0,b.jsx)(c,{label:`Comment`,id:`comment`}),(0,b.jsx)(o,{label:`Did you cook it?`,name:`radio-group`,options:[{label:`I cooked it`,value:`1`},{label:`I didn't cooked it`,value:`2`},{label:`No cooking`,value:`3`}]}),(0,b.jsx)(c,{label:`Comment`,id:`comment`}),(0,b.jsx)(o,{label:`Did you cook it?`,name:`radio-group`,options:[{label:`I cooked it`,value:`1`},{label:`I didn't cooked it`,value:`2`},{label:`No cooking`,value:`3`}]}),(0,b.jsxs)(p.Select,{label:`Feedback`,placeholder:`Select an option`,defaultValue:`100`,children:[(0,b.jsx)(p.Option,{value:`1`,children:`Please add more details`}),(0,b.jsx)(p.Option,{value:`2`,children:`I want to hire people like you`}),(0,b.jsx)(p.Option,{value:`1`,children:`Please add more details`}),(0,b.jsx)(p.Option,{value:`2`,children:`I want to hire people like you`}),(0,b.jsx)(p.Option,{value:`1`,children:`Please add more details`}),(0,b.jsx)(p.Option,{value:`2`,children:`I want to hire people like you`}),(0,b.jsx)(p.Option,{value:`1`,children:`Please add more details`}),(0,b.jsx)(p.Option,{value:`2`,children:`I want to hire people like you`}),(0,b.jsx)(p.Option,{value:`1`,children:`Please add more details`}),(0,b.jsx)(p.Option,{value:`2`,children:`I want to hire people like you`}),(0,b.jsx)(p.Option,{value:`1`,children:`Please add more details`}),(0,b.jsx)(p.Option,{value:`2`,children:`I want to hire people like you`}),(0,b.jsx)(p.Option,{value:`1`,children:`Please add more details`}),(0,b.jsx)(p.Option,{value:`2`,children:`I want to hire people like you`}),(0,b.jsx)(p.Option,{value:`1`,children:`Please add more details`}),(0,b.jsx)(p.Option,{value:`2`,children:`I want to hire people like you`}),(0,b.jsx)(p.Option,{value:`1`,children:`Please add more details`}),(0,b.jsx)(p.Option,{value:`100`,children:`My best value`}),(0,b.jsx)(p.Option,{value:`2`,children:`I want to hire people like you`}),(0,b.jsx)(p.Option,{value:`1`,children:`Please add more details`}),(0,b.jsx)(p.Option,{value:`2`,children:`I want to hire people like you`})]}),(0,b.jsx)(c,{label:`Comment`,id:`comment`})]})})}function D({container:e,...t}){return(0,b.jsx)(d,{...t,justified:e.get({xxs:!0,xs:!0,s:!1})})}var O={render:({onClose:e,...t})=>{let[n,r]=(0,y.useState)(!0);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d,{onClick:()=>{r(!0)},label:`Open Modal`}),(0,b.jsx)(a,{"data-testid":`default-modal`,...t,onClose:()=>{e?.(),r(!1)},children:(0,b.jsx)(a.Content,{padding:!0,overflowY:`auto`,divider:`none`,children:(0,b.jsx)(E,{})})})]})},args:{headerTitle:`Default story title`,onClose:x(),defaultVisible:!0,variant:`dialog`,height:`s`},argTypes:g,parameters:w},k={render:e=>{let t=r({boxSizing:`border-box`});return(0,b.jsx)(T,{ref:t.ref,...e,footerActions:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(D,{variant:`secondary`,label:`Secondary action`,onClick:()=>{},container:t}),(0,b.jsx)(D,{variant:`primary`,label:`Primary action`,onClick:()=>{},container:t})]}),children:(0,b.jsx)(`p`,{className:m(`font-body-s`,`text-default`),children:`A modal with title, a text content, an icon and both available actions (primary and secondary).`})})},args:{headerTitle:`Modal with footer actions`,visible:!0},argTypes:g,parameters:w},A={render:e=>{let t=r({boxSizing:`border-box`});return(0,b.jsx)(T,{ref:t.ref,...e,width:`full-with-margin`,footerActions:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(D,{variant:`secondary`,label:`Secondary action`,onClick:()=>{},container:t}),(0,b.jsx)(D,{variant:`primary`,label:`Primary action`,onClick:()=>{},container:t})]}),children:(0,b.jsx)(`p`,{className:m(`font-body-s`,`text-default`),children:`A ‘full-with-margin’ modal with title, a text content, an icon and both available actions (primary and secondary).`})})},args:{headerTitle:`Modal with footer actions`,visible:!0},argTypes:g,parameters:{chromatic:{ignoreSelectors:S}}},j={render:e=>{let t=r({boxSizing:`border-box`});return(0,b.jsxs)(T,{ref:t.ref,...e,footerLeft:(0,b.jsx)(u,{name:`checkbox-name`,label:`Checkbox label`,onChange:x()}),footerActions:(0,b.jsx)(D,{variant:`primary`,label:`Create`,onClick:x(),container:t}),children:[(0,b.jsx)(l,{label:`Username`,id:`username`}),(0,b.jsx)(l,{label:`Password`,id:`password`})]})},args:{visible:!0,headerTitle:`Create new user`},argTypes:g,parameters:{...w}},M={render:e=>{let t=r({boxSizing:`border-box`});return(0,b.jsxs)(T,{ref:t.ref,...e,footerLeft:(0,b.jsx)(d,{label:`Manage users`,onClick:x()}),footerActions:(0,b.jsx)(D,{variant:`primary`,label:`Create`,onClick:x(),container:t}),children:[(0,b.jsx)(l,{label:`Username`,id:`username`}),(0,b.jsx)(l,{label:`Password`,id:`password`})]})},args:{headerTitle:`Create new user`,visible:!0},argTypes:g,parameters:{...w}};function N({width:e}){let t=r({boxSizing:`border-box`});return(0,b.jsxs)(`div`,{className:m(`flex`,`gap-xl`,`border-default`,`w_${e}`),ref:t.ref,children:[(0,b.jsx)(a.Header,{children:`ModalHeader`}),(0,b.jsx)(f,{}),(0,b.jsx)(a.Header,{infoIconTooltip:`This is an info tooltip`,children:`ModalHeader with infoIconTooltip`}),(0,b.jsx)(f,{}),(0,b.jsx)(a.Header,{icon:(0,b.jsx)(h,{}),children:`ModalHeader with icon`}),(0,b.jsx)(f,{}),(0,b.jsx)(a.Header,{icon:(0,b.jsx)(h,{}),infoIconTooltip:`This is an info tooltip`,children:`ModalHeader with icon and infoIconTooltip`}),(0,b.jsx)(f,{}),(0,b.jsx)(a.Header,{labelBack:`Back`,onClickBack:()=>{},children:`ModalHeader with back navigation`}),(0,b.jsx)(f,{}),(0,b.jsx)(a.Header,{labelBack:`Back`,onClickBack:()=>{},infoIconTooltip:`This is an info tooltip`,children:`ModalHeader with back navigation and infoIconTooltip`}),(0,b.jsx)(f,{}),(0,b.jsx)(a.Header,{preventClose:!0,children:`ModalHeader with preventClose`}),(0,b.jsx)(f,{}),(0,b.jsx)(a.Header,{description:`Header description`,children:`ModalHeader with description`}),(0,b.jsx)(f,{}),(0,b.jsx)(a.Header,{description:`Header description`,preventClose:!0,children:`ModalHeader with description and preventClose`}),(0,b.jsx)(f,{}),(0,b.jsx)(a.Header,{description:`Headerdescription`.repeat(10),children:`ModalHeaderwithoverflowingtext`.repeat(10)}),(0,b.jsx)(f,{}),(0,b.jsx)(a.Header,{description:(0,b.jsx)(`p`,{className:m(`font-label-s`,`text-weak`),children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`}),children:`ModalHeader Overflow Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}),(0,b.jsx)(f,{}),(0,b.jsx)(a.Content,{children:(0,b.jsx)(`div`,{className:m(`px-xxl`),children:`Content wrapped`})}),(0,b.jsx)(f,{}),(0,b.jsx)(`div`,{className:m(`flex`,`w-full`),style:{blockSize:`50px`},children:(0,b.jsx)(a.Content,{children:(0,b.jsx)(`div`,{className:m(`px-xxl`),children:`Overflow is detected auto in Y and add scrollbar. It is hidden in X. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`})})}),(0,b.jsx)(f,{}),(0,b.jsx)(a.Content,{children:`Content wrapped with long text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`}),(0,b.jsx)(f,{}),(0,b.jsx)(a.Actions,{children:(0,b.jsx)(D,{variant:`primary`,label:`Create`,container:t})}),(0,b.jsx)(f,{}),(0,b.jsx)(a.Actions,{left:(0,b.jsx)(u,{label:`Send invite`}),children:(0,b.jsx)(D,{variant:`primary`,label:`Create`,container:t})}),(0,b.jsx)(f,{}),(0,b.jsx)(a.Actions,{metaLabel:`3 licences left`,children:(0,b.jsx)(D,{variant:`primary`,label:`Create`,container:t})}),(0,b.jsx)(f,{}),(0,b.jsx)(a.Actions,{left:(0,b.jsx)(d,{variant:`default`,label:`Manage users`}),children:(0,b.jsx)(D,{variant:`primary`,label:`Create`,container:t})}),(0,b.jsx)(f,{}),(0,b.jsx)(a.Actions,{left:(0,b.jsx)(u,{label:`Send invite`}),metaLabel:`3 licences left`,children:(0,b.jsx)(D,{variant:`primary`,label:`Primary action`,container:t})}),(0,b.jsx)(f,{}),(0,b.jsxs)(a.Actions,{left:(0,b.jsx)(u,{label:`Send invite`}),metaLabel:`Only 3 licences left in this workspace`,children:[(0,b.jsx)(D,{variant:`secondary`,label:`Secondary action`,container:t}),(0,b.jsx)(D,{variant:`primary`,label:`Primary action`,container:t})]})]})}var P={name:`Visual Test`,parameters:{controls:{disable:!0}},render:()=>(0,b.jsxs)(`div`,{className:m(`flex`,`flex-col`,`gap-xl`,`p-xl`),children:[(0,b.jsxs)(`div`,{className:m(`flex`,`flex-row`,`gap-xl`),children:[(0,b.jsx)(N,{width:`xs`}),(0,b.jsx)(N,{width:`s`})]}),(0,b.jsx)(N,{width:`m`}),(0,b.jsx)(N,{width:`l`}),(0,b.jsx)(N,{width:`xl`}),(0,b.jsx)(N,{width:`xxl`}),(0,b.jsx)(N,{width:`3xl`}),(0,b.jsx)(N,{width:`4xl`})]})},F={parameters:{...w,controls:{disable:!0}},render:()=>{let[e,t]=(0,y.useState)(!1),[n,i]=(0,y.useState)(!1),o=r({boxSizing:`border-box`}),s=r();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d,{onClick:()=>{t(!0)},label:`Open Modal`}),(0,b.jsxs)(a,{ref:o.ref,headerTitle:`Default Modal`,contentPadding:!1,visible:e,onClose:()=>{t(!1)},footerLeft:(0,b.jsx)(d,{label:`footerLeft`,onClick:x()}),footerActions:(0,b.jsx)(D,{variant:`primary`,label:`footerActions`,onClick:x(),container:o}),children:[(0,b.jsx)(`div`,{className:m(`px-xxl`),children:(0,b.jsx)(d,{onClick:()=>{i(!0)},label:`Open Modal`})}),(0,b.jsx)(a,{ref:s.ref,headerTitle:`Default Modal`,contentPadding:!1,visible:n,onClose:()=>{i(!1)},footerLeft:(0,b.jsx)(d,{label:`footerLeft`,onClick:x()}),footerActions:(0,b.jsx)(D,{variant:`primary`,label:`footerActions`,onClick:x(),container:s}),children:(0,b.jsx)(E,{})})]})]})}},I={parameters:{chromatic:{disableSnapshot:!0}},args:{height:`m`},argTypes:{height:_.height},render:({height:e})=>{let t=r({boxSizing:`border-box`});return(0,b.jsxs)(a.Root,{visible:!0,variant:`form`,ref:t.ref,height:e,children:[(0,b.jsx)(a.Header,{children:`Test Modal Height`}),(0,b.jsx)(a.Content,{padding:!1,divider:`visible`,children:(0,b.jsxs)(`div`,{className:m(`flex`,`border-box`,`flex-row`,`grow-1`,`h-full`,`justify-between`),"data-modal-content":!0,children:[(0,b.jsx)(`div`,{className:m(`flex`,`border-box`,`px-xxl`),children:`left panel`}),(0,b.jsx)(f,{orientation:`vertical`}),(0,b.jsx)(`div`,{className:m(`flex`,`border-box`,`px-xxl`,`items-start`,`justify-around`,`h-full`,`overflow-y-scroll`,`grow-1`),children:(0,b.jsx)(E,{})})]})}),(0,b.jsx)(a.Actions,{left:(0,b.jsx)(d,{variant:`default`,label:`Manage users`}),children:(0,b.jsx)(D,{variant:`primary`,label:`Create`,container:t})})]})}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: ({
    onClose,
    ...props
  }) => {
    const [visible, setVisible] = useState(true);
    return <>
        <Button onClick={() => {
        setVisible(true);
      }} label="Open Modal" />
        <Modal data-testid="default-modal" {...props} onClose={() => {
        onClose?.();
        setVisible(false);
      }}>
          <Modal.Content padding overflowY="auto" divider="none">
            <GlobalContent />
          </Modal.Content>
        </Modal>
      </>;
  },
  args: {
    headerTitle: "Default story title",
    onClose: fn(),
    defaultVisible: true,
    variant: "dialog",
    height: "s"
  },
  argTypes: ModalArgTypes,
  parameters
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: (props: ModalProps) => {
    const container = useContainer({
      boxSizing: "border-box"
    });
    return <ModalStory ref={container.ref} {...props} footerActions={<>
            <JustifiedButton variant="secondary" label="Secondary action" onClick={() => {}} container={container} />
            <JustifiedButton variant="primary" label="Primary action" onClick={() => {}} container={container} />
          </>}>
        <p className={classNames("font-body-s", "text-default")}>
          A modal with title, a text content, an icon and both available actions
          (primary and secondary).
        </p>
      </ModalStory>;
  },
  args: {
    headerTitle: "Modal with footer actions",
    visible: true
  },
  argTypes: ModalArgTypes,
  parameters
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: (props: ModalProps) => {
    const container = useContainer({
      boxSizing: "border-box"
    });
    return <ModalStory ref={container.ref} {...props} width="full-with-margin" footerActions={<>
            <JustifiedButton variant="secondary" label="Secondary action" onClick={() => {}} container={container} />
            <JustifiedButton variant="primary" label="Primary action" onClick={() => {}} container={container} />
          </>}>
        <p className={classNames("font-body-s", "text-default")}>
          A &lsquo;full-with-margin&rsquo; modal with title, a text content, an
          icon and both available actions (primary and secondary).
        </p>
      </ModalStory>;
  },
  args: {
    headerTitle: "Modal with footer actions",
    visible: true
  },
  argTypes: ModalArgTypes,
  parameters: {
    chromatic: {
      ignoreSelectors
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: (props: ModalProps) => {
    const container = useContainer({
      boxSizing: "border-box"
    });
    return <ModalStory ref={container.ref} {...props} footerLeft={<Checkbox name="checkbox-name" label="Checkbox label" onChange={fn()} />} footerActions={<JustifiedButton variant="primary" label="Create" onClick={fn()} container={container} />}>
        <TextField label="Username" id="username" />
        <TextField label="Password" id="password" />
      </ModalStory>;
  },
  args: {
    visible: true,
    headerTitle: "Create new user"
  },
  argTypes: ModalArgTypes,
  parameters: {
    ...parameters
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: (props: ModalProps) => {
    const container = useContainer({
      boxSizing: "border-box"
    });
    return <ModalStory ref={container.ref} {...props} footerLeft={<Button label="Manage users" onClick={fn()} />} footerActions={<JustifiedButton variant="primary" label="Create" onClick={fn()} container={container} />}>
        <TextField label="Username" id="username" />
        <TextField label="Password" id="password" />
      </ModalStory>;
  },
  args: {
    headerTitle: "Create new user",
    visible: true
  },
  argTypes: ModalArgTypes,
  parameters: {
    ...parameters
  }
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Visual Test",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    return <div className={classNames("flex", "flex-col", "gap-xl", "p-xl")}>
        <div className={classNames("flex", "flex-row", "gap-xl")}>
          <CompositionComponents width="xs" />
          <CompositionComponents width="s" />
        </div>
        <CompositionComponents width="m" />
        <CompositionComponents width="l" />
        <CompositionComponents width="xl" />
        <CompositionComponents width="xxl" />
        <CompositionComponents width="3xl" />
        <CompositionComponents width="4xl" />
      </div>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...parameters,
    controls: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const [secondOpen, setSecondOpen] = useState(false);
    const container = useContainer({
      boxSizing: "border-box"
    });
    const container2 = useContainer();
    return <>
        <Button onClick={() => {
        setOpen(true);
      }} label="Open Modal" />
        <Modal ref={container.ref} headerTitle="Default Modal" contentPadding={false} visible={open} onClose={() => {
        setOpen(false);
      }} footerLeft={<Button label="footerLeft" onClick={fn()} />} footerActions={<JustifiedButton variant="primary" label="footerActions" onClick={fn()} container={container} />}>
          <div className={classNames("px-xxl")}>
            <Button onClick={() => {
            setSecondOpen(true);
          }} label="Open Modal" />
          </div>
          <Modal ref={container2.ref} headerTitle="Default Modal" contentPadding={false} visible={secondOpen} onClose={() => {
          setSecondOpen(false);
        }} footerLeft={<Button label="footerLeft" onClick={fn()} />} footerActions={<JustifiedButton variant="primary" label="footerActions" onClick={fn()} container={container2} />}>
            <GlobalContent />
          </Modal>
        </Modal>
      </>;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    height: "m"
  },
  argTypes: {
    height: CommonModalArgTypes.height
  },
  render: ({
    height
  }) => {
    const container = useContainer({
      boxSizing: "border-box"
    });
    return <Modal.Root visible variant="form" ref={container.ref} height={height}>
        <Modal.Header>Test Modal Height</Modal.Header>
        <Modal.Content padding={false} divider="visible">
          <div className={classNames("flex", "border-box", "flex-row", "grow-1", "h-full", "justify-between")} data-modal-content>
            <div className={classNames("flex", "border-box", "px-xxl")}>
              left panel
            </div>
            <Divider orientation="vertical" />
            <div className={classNames("flex", "border-box", "px-xxl", "items-start", "justify-around", "h-full", "overflow-y-scroll", "grow-1")}>
              <GlobalContent />
            </div>
          </div>
        </Modal.Content>
        <Modal.Actions left={<Button variant="default" label="Manage users" />}>
          <JustifiedButton variant="primary" label="Create" container={container} />
        </Modal.Actions>
      </Modal.Root>;
  }
}`,...I.parameters?.docs?.source}}};var L=[`Playground`,`WithFooterActions`,`FullWithMarginWithFooterActions`,`WithCheckbox`,`WithLeftButton`,`VisualTest`,`ModalInModal`,`HeightScenario`];export{A as FullWithMarginWithFooterActions,I as HeightScenario,F as ModalInModal,O as Playground,P as VisualTest,j as WithCheckbox,k as WithFooterActions,M as WithLeftButton,L as __namedExportsOrder,C as default,v as t};