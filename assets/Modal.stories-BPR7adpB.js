import{j as e,r as N}from"./iframe-CYyT-rNd.js";import{M as o,u as p}from"./Modal-sGRBfLkw.js";import{F as I}from"./index-quSI8jkX.js";import{M as y,C as L}from"./Modal.argTypes-DvHSRiHf.js";import{T as O}from"./Textarea-hzK9bAMX.js";import{R as H}from"./RadioGroup-D4hbS-xy.js";import{c as i}from"./classNames-BmP9dLUE.js";import{D as r}from"./Divider-DGcHtPQB.js";import{B as l}from"./Button-B_WU7ehq.js";import{T as C}from"./TextField-3so8vjFm.js";import{C as A}from"./Checkbox-CEdksXS8.js";import{S as P}from"./Switch-B3jCY72a.js";import{S as a}from"./SelectComposition-Cc6wbRHo.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,F=['[role="tooltip"]','button[aria-label="Close"]'],z={component:o,title:"Components/Modal"},w={chromatic:{disableSnapshot:!0}},M=N.forwardRef(({onClose:t,...n},k)=>{const{children:x,headerTitle:S,...T}=n;return e.jsx(o,{ref:k,headerTitle:S,onClose:()=>{t&&t()},...T,children:x||"(Default story child)"})});M.displayName="Modal";function B(){return e.jsx("form",{children:e.jsxs("div",{className:i("flex","flex-col","border-box","gap-m","py-xl"),children:[e.jsx(C,{label:"Name",id:"name"}),e.jsx("div",{className:i("flex","border-box","py-m"),children:e.jsx(P,{label:"I agree to the terms and conditions"})}),e.jsx("div",{className:i("flex","border-box","py-m"),children:e.jsx(P,{label:"I agree to the terms and conditions"})}),e.jsx("div",{className:i("flex","border-box","py-m"),children:e.jsx(P,{label:"I agree to the terms and conditions"})}),e.jsx(O,{label:"Comment",id:"comment"}),e.jsx(H,{label:"Did you cook it?",name:"radio-group",options:[{label:"I cooked it",value:"1"},{label:"I didn't cooked it",value:"2"},{label:"No cooking",value:"3"}]}),e.jsx(O,{label:"Comment",id:"comment"}),e.jsx(H,{label:"Did you cook it?",name:"radio-group",options:[{label:"I cooked it",value:"1"},{label:"I didn't cooked it",value:"2"},{label:"No cooking",value:"3"}]}),e.jsx(O,{label:"Comment",id:"comment"}),e.jsx(H,{label:"Did you cook it?",name:"radio-group",options:[{label:"I cooked it",value:"1"},{label:"I didn't cooked it",value:"2"},{label:"No cooking",value:"3"}]}),e.jsxs(a.Select,{label:"Feedback",placeholder:"Select an option",defaultValue:"100",children:[e.jsx(a.Option,{value:"1",children:"Please add more details"}),e.jsx(a.Option,{value:"2",children:"I want to hire people like you"}),e.jsx(a.Option,{value:"1",children:"Please add more details"}),e.jsx(a.Option,{value:"2",children:"I want to hire people like you"}),e.jsx(a.Option,{value:"1",children:"Please add more details"}),e.jsx(a.Option,{value:"2",children:"I want to hire people like you"}),e.jsx(a.Option,{value:"1",children:"Please add more details"}),e.jsx(a.Option,{value:"2",children:"I want to hire people like you"}),e.jsx(a.Option,{value:"1",children:"Please add more details"}),e.jsx(a.Option,{value:"2",children:"I want to hire people like you"}),e.jsx(a.Option,{value:"1",children:"Please add more details"}),e.jsx(a.Option,{value:"2",children:"I want to hire people like you"}),e.jsx(a.Option,{value:"1",children:"Please add more details"}),e.jsx(a.Option,{value:"2",children:"I want to hire people like you"}),e.jsx(a.Option,{value:"1",children:"Please add more details"}),e.jsx(a.Option,{value:"2",children:"I want to hire people like you"}),e.jsx(a.Option,{value:"1",children:"Please add more details"}),e.jsx(a.Option,{value:"100",children:"My best value"}),e.jsx(a.Option,{value:"2",children:"I want to hire people like you"}),e.jsx(a.Option,{value:"1",children:"Please add more details"}),e.jsx(a.Option,{value:"2",children:"I want to hire people like you"})]}),e.jsx(O,{label:"Comment",id:"comment"})]})})}function s({container:t,...n}){return e.jsx(l,{...n,justified:t.get({xxs:!0,xs:!0,s:!1})})}const m={render:({onClose:t,...n})=>{const[k,x]=N.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>{x(!0)},label:"Open Modal"}),e.jsx(o,{"data-testid":"default-modal",...n,onClose:()=>{t?.(),x(!1)},children:e.jsx(o.Content,{padding:!0,overflowY:"auto",divider:"none",children:e.jsx(B,{})})})]})},args:{headerTitle:"Default story title",onClose:d(),defaultVisible:!0,variant:"dialog",height:"s"},argTypes:y,parameters:w},u={render:t=>{const n=p({boxSizing:"border-box"});return e.jsx(M,{ref:n.ref,...t,footerActions:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"secondary",label:"Secondary action",onClick:()=>{},container:n}),e.jsx(s,{variant:"primary",label:"Primary action",onClick:()=>{},container:n})]}),children:e.jsx("p",{className:i("font-body-s","text-default"),children:"A modal with title, a text content, an icon and both available actions (primary and secondary)."})})},args:{headerTitle:"Modal with footer actions",visible:!0},argTypes:y,parameters:w},f={render:t=>{const n=p({boxSizing:"border-box"});return e.jsx(M,{ref:n.ref,...t,width:"full-with-margin",footerActions:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"secondary",label:"Secondary action",onClick:()=>{},container:n}),e.jsx(s,{variant:"primary",label:"Primary action",onClick:()=>{},container:n})]}),children:e.jsx("p",{className:i("font-body-s","text-default"),children:"A ‘full-with-margin’ modal with title, a text content, an icon and both available actions (primary and secondary)."})})},args:{headerTitle:"Modal with footer actions",visible:!0},argTypes:y,parameters:{chromatic:{ignoreSelectors:F}}},h={render:t=>{const n=p({boxSizing:"border-box"});return e.jsxs(M,{ref:n.ref,...t,footerLeft:e.jsx(A,{name:"checkbox-name",label:"Checkbox label",onChange:d()}),footerActions:e.jsx(s,{variant:"primary",label:"Create",onClick:d(),container:n}),children:[e.jsx(C,{label:"Username",id:"username"}),e.jsx(C,{label:"Password",id:"password"})]})},args:{visible:!0,headerTitle:"Create new user"},argTypes:y,parameters:{...w}},b={render:t=>{const n=p({boxSizing:"border-box"});return e.jsxs(M,{ref:n.ref,...t,footerLeft:e.jsx(l,{label:"Manage users",onClick:d()}),footerActions:e.jsx(s,{variant:"primary",label:"Create",onClick:d(),container:n}),children:[e.jsx(C,{label:"Username",id:"username"}),e.jsx(C,{label:"Password",id:"password"})]})},args:{headerTitle:"Create new user",visible:!0},argTypes:y,parameters:{...w}};function c({width:t}){const n=p({boxSizing:"border-box"});return e.jsxs("div",{className:i("flex","gap-xl","border-default",`w_${t}`),ref:n.ref,children:[e.jsx(o.Header,{children:"ModalHeader"}),e.jsx(r,{}),e.jsx(o.Header,{infoIconTooltip:"This is an info tooltip",children:"ModalHeader with infoIconTooltip"}),e.jsx(r,{}),e.jsx(o.Header,{icon:e.jsx(I,{}),children:"ModalHeader with icon"}),e.jsx(r,{}),e.jsx(o.Header,{icon:e.jsx(I,{}),infoIconTooltip:"This is an info tooltip",children:"ModalHeader with icon and infoIconTooltip"}),e.jsx(r,{}),e.jsx(o.Header,{labelBack:"Back",onClickBack:()=>{},children:"ModalHeader with back navigation"}),e.jsx(r,{}),e.jsx(o.Header,{labelBack:"Back",onClickBack:()=>{},infoIconTooltip:"This is an info tooltip",children:"ModalHeader with back navigation and infoIconTooltip"}),e.jsx(r,{}),e.jsx(o.Header,{preventClose:!0,children:"ModalHeader with preventClose"}),e.jsx(r,{}),e.jsx(o.Header,{description:"Header description",children:"ModalHeader with description"}),e.jsx(r,{}),e.jsx(o.Header,{description:"Header description",preventClose:!0,children:"ModalHeader with description and preventClose"}),e.jsx(r,{}),e.jsx(o.Header,{description:"Headerdescription".repeat(10),children:"ModalHeaderwithoverflowingtext".repeat(10)}),e.jsx(r,{}),e.jsx(o.Header,{description:e.jsx("p",{className:i("font-label-s","text-weak"),children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}),children:"ModalHeader Overflow Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e.jsx(r,{}),e.jsx(o.Content,{children:e.jsx("div",{className:i("px-xxl"),children:"Content wrapped"})}),e.jsx(r,{}),e.jsx("div",{className:i("flex","w-full"),style:{blockSize:"50px"},children:e.jsx(o.Content,{children:e.jsx("div",{className:i("px-xxl"),children:"Overflow is detected auto in Y and add scrollbar. It is hidden in X. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."})})}),e.jsx(r,{}),e.jsx(o.Content,{children:"Content wrapped with long text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}),e.jsx(r,{}),e.jsx(o.Actions,{children:e.jsx(s,{variant:"primary",label:"Create",container:n})}),e.jsx(r,{}),e.jsx(o.Actions,{left:e.jsx(A,{label:"Send invite"}),children:e.jsx(s,{variant:"primary",label:"Create",container:n})}),e.jsx(r,{}),e.jsx(o.Actions,{metaLabel:"3 licences left",children:e.jsx(s,{variant:"primary",label:"Create",container:n})}),e.jsx(r,{}),e.jsx(o.Actions,{left:e.jsx(l,{variant:"default",label:"Manage users"}),children:e.jsx(s,{variant:"primary",label:"Create",container:n})}),e.jsx(r,{}),e.jsx(o.Actions,{left:e.jsx(A,{label:"Send invite"}),metaLabel:"3 licences left",children:e.jsx(s,{variant:"primary",label:"Primary action",container:n})}),e.jsx(r,{}),e.jsxs(o.Actions,{left:e.jsx(A,{label:"Send invite"}),metaLabel:"Only 3 licences left in this workspace",children:[e.jsx(s,{variant:"secondary",label:"Secondary action",container:n}),e.jsx(s,{variant:"primary",label:"Primary action",container:n})]})]})}const j={name:"Visual Test",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{className:i("flex","flex-col","gap-xl","p-xl"),children:[e.jsxs("div",{className:i("flex","flex-row","gap-xl"),children:[e.jsx(c,{width:"xs"}),e.jsx(c,{width:"s"})]}),e.jsx(c,{width:"m"}),e.jsx(c,{width:"l"}),e.jsx(c,{width:"xl"}),e.jsx(c,{width:"xxl"}),e.jsx(c,{width:"3xl"}),e.jsx(c,{width:"4xl"})]})},v={parameters:{...w,controls:{disable:!0}},render:()=>{const[t,n]=N.useState(!1),[k,x]=N.useState(!1),S=p({boxSizing:"border-box"}),T=p();return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>{n(!0)},label:"Open Modal"}),e.jsxs(o,{ref:S.ref,headerTitle:"Default Modal",contentPadding:!1,visible:t,onClose:()=>{n(!1)},footerLeft:e.jsx(l,{label:"footerLeft",onClick:d()}),footerActions:e.jsx(s,{variant:"primary",label:"footerActions",onClick:d(),container:S}),children:[e.jsx("div",{className:i("px-xxl"),children:e.jsx(l,{onClick:()=>{x(!0)},label:"Open Modal"})}),e.jsx(o,{ref:T.ref,headerTitle:"Default Modal",contentPadding:!1,visible:k,onClose:()=>{x(!1)},footerLeft:e.jsx(l,{label:"footerLeft",onClick:d()}),footerActions:e.jsx(s,{variant:"primary",label:"footerActions",onClick:d(),container:T}),children:e.jsx(B,{})})]})]})}},g={parameters:{chromatic:{disableSnapshot:!0}},args:{height:"m"},argTypes:{height:L.height},render:({height:t})=>{const n=p({boxSizing:"border-box"});return e.jsxs(o.Root,{visible:!0,variant:"form",ref:n.ref,height:t,children:[e.jsx(o.Header,{children:"Test Modal Height"}),e.jsx(o.Content,{padding:!1,divider:"visible",children:e.jsxs("div",{className:i("flex","border-box","flex-row","grow-1","h-full","justify-between"),"data-modal-content":!0,children:[e.jsx("div",{className:i("flex","border-box","px-xxl"),children:"left panel"}),e.jsx(r,{orientation:"vertical"}),e.jsx("div",{className:i("flex","border-box","px-xxl","items-start","justify-around","h-full","overflow-y-scroll","grow-1"),children:e.jsx(B,{})})]})}),e.jsx(o.Actions,{left:e.jsx(l,{variant:"default",label:"Manage users"}),children:e.jsx(s,{variant:"primary",label:"Create",container:n})})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (props: ModalProps) => {
    const container = useContainer({
      boxSizing: "border-box"
    });
    return <ModalStory ref={container.ref} {...props} footerActions={<>
            <JustifiedButton variant="secondary" label="Secondary action" onClick={() => {}} container={container} />
            <JustifiedButton variant="primary" label="Primary action" onClick={() => {}} container={container} />
          </>}>
        <p className={classNames("font-body-s", "text-default")}>
          A modal with title, a text content, an icon and both available actions (primary and secondary).
        </p>
      </ModalStory>;
  },
  args: {
    headerTitle: "Modal with footer actions",
    visible: true
  },
  argTypes: ModalArgTypes,
  parameters
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: (props: ModalProps) => {
    const container = useContainer({
      boxSizing: "border-box"
    });
    return <ModalStory ref={container.ref} {...props} width="full-with-margin" footerActions={<>
            <JustifiedButton variant="secondary" label="Secondary action" onClick={() => {}} container={container} />
            <JustifiedButton variant="primary" label="Primary action" onClick={() => {}} container={container} />
          </>}>
        <p className={classNames("font-body-s", "text-default")}>
          A &lsquo;full-with-margin&rsquo; modal with title, a text content, an icon and both available actions (primary
          and secondary).
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
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
            <div className={classNames("flex", "border-box", "px-xxl")}>left panel</div>
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
}`,...g.parameters?.docs?.source}}};const D=["Playground","WithFooterActions","FullWithMarginWithFooterActions","WithCheckbox","WithLeftButton","VisualTest","ModalInModal","HeightScenario"],Q=Object.freeze(Object.defineProperty({__proto__:null,FullWithMarginWithFooterActions:f,HeightScenario:g,ModalInModal:v,Playground:m,VisualTest:j,WithCheckbox:h,WithFooterActions:u,WithLeftButton:b,__namedExportsOrder:D,default:z},Symbol.toStringTag,{value:"Module"}));export{m as P,Q as S};
