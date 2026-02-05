import{j as e}from"./iframe-B4vjk2_C.js";import{I as a}from"./InputButton-iEaXDKyM.js";import{c as i}from"./classNames-DaRWzB8T.js";import{T as s}from"./Tooltip-D1n48xKC.js";const r=[void 0,"xs","s"],c={"aria-label":{control:{type:"text"},description:"The `aria-label` attribute is optional for `InputButton` but required to pass [WCAG compliance](https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html) since the it does not have a describing text",table:{type:{summary:"string"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},initialLoading:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},loading:{control:{type:"boolean"},description:"See [Progress](./?path=/docs/components-progress--docs) for details.",table:{type:{summary:"boolean"}}},onClick:{table:{type:{summary:"() => void | Promise<any>"}}},onLoadingChange:{table:{type:{summary:"(loading: boolean) => void"}}},size:{control:{type:"select"},options:r,table:{type:{summary:"xs | s"}}}},{fn:d}=__STORYBOOK_MODULE_TEST__,m={title:"Components/InputButton",component:a,parameters:{}},t=d(),l={render:n=>e.jsx("div",{className:i("p-xs"),"data-testid":"wrapper",style:{inlineSize:"300px"},children:e.jsx(a,{...n,onClick:t})}),args:{"aria-label":"Clear input"},argTypes:c,parameters:{chromatic:{disableSnapshot:!0}}},o={render:()=>e.jsxs("div",{className:i("flex","gap-s"),children:[e.jsx("h2",{className:i("font-heading-l","text-default"),children:"InputButton"}),e.jsxs("div",{className:i("flex","gap-xxl","flex-row"),children:[e.jsxs("div",{className:i("flex","gap-m","flex-col"),children:[e.jsx(a,{"aria-label":"Remove",onClick:t,size:"xs"}),e.jsx(a,{"aria-label":"Remove",onClick:t,size:"xs","data-testid":"hover"}),e.jsx(a,{"aria-label":"Remove",onClick:t,size:"xs","data-testid":"active"}),e.jsx(a,{"aria-label":"Remove",onClick:t,size:"xs","data-testid":"focus"}),e.jsx(a,{"aria-label":"Remove",onClick:t,size:"xs",disabled:!0}),e.jsx(a,{"aria-label":"Remove",onClick:t,size:"xs",loading:!0})]}),e.jsxs("div",{className:i("flex","gap-m","flex-col"),children:[e.jsx(a,{"aria-label":"Remove",onClick:t,size:"s"}),e.jsx(a,{"aria-label":"Remove",onClick:t,size:"s","data-testid":"hover"}),e.jsx(a,{"aria-label":"Remove",onClick:t,size:"s","data-testid":"active"}),e.jsx(a,{"aria-label":"Remove",onClick:t,size:"s","data-testid":"focus"}),e.jsx(a,{"aria-label":"Remove",onClick:t,size:"s",disabled:!0}),e.jsx(a,{"aria-label":"Remove",onClick:t,size:"s",loading:!0})]})]}),e.jsx("h2",{className:i("font-heading-l","text-default"),children:"InputButton with Tooltip"}),e.jsxs("div",{className:i("flex","gap-xxl","flex-row"),children:[e.jsxs("div",{className:i("flex","gap-m","flex-col"),children:[e.jsx(s,{title:"Remove",children:e.jsx(a,{"aria-label":"Remove",onClick:t,size:"xs"})}),e.jsx(s,{title:"Remove",children:e.jsx(a,{"aria-label":"Remove",onClick:t,size:"xs","data-testid":"hover"})}),e.jsx(s,{title:"Remove",children:e.jsx(a,{"aria-label":"Remove",onClick:t,size:"xs","data-testid":"active"})}),e.jsx(s,{title:"Remove",children:e.jsx(a,{"aria-label":"Remove",onClick:t,size:"xs","data-testid":"focus"})}),e.jsx(s,{title:"Remove",children:e.jsx(a,{"aria-label":"Remove",onClick:t,size:"xs",disabled:!0})}),e.jsx(s,{title:"Remove",children:e.jsx(a,{"aria-label":"Remove",onClick:t,size:"xs",loading:!0})})]}),e.jsxs("div",{className:i("flex","gap-m","flex-col"),children:[e.jsx(s,{title:"Remove",children:e.jsx(a,{"aria-label":"Remove",onClick:t,size:"s"})}),e.jsx(s,{title:"Remove",children:e.jsx(a,{"aria-label":"Remove",onClick:t,size:"s","data-testid":"hover"})}),e.jsx(s,{title:"Remove",children:e.jsx(a,{"aria-label":"Remove",onClick:t,size:"s","data-testid":"active"})}),e.jsx(s,{title:"Remove",children:e.jsx(a,{"aria-label":"Remove",onClick:t,size:"s","data-testid":"focus"})}),e.jsx(s,{title:"Remove",children:e.jsx(a,{"aria-label":"Remove",onClick:t,size:"s",disabled:!0})}),e.jsx(s,{title:"Remove",children:e.jsx(a,{"aria-label":"Remove",onClick:t,size:"s",loading:!0})})]})]})]}),parameters:{controls:{disable:!0},pseudo:{hover:'[data-testid="hover"]',active:'[data-testid="active"]',focusVisible:'[data-testid="focus"]'}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("p-xs")} data-testid="wrapper" style={{
    inlineSize: "300px"
  }}>
      <InputButton {...props} onClick={onClick} />
    </div>,
  args: {
    "aria-label": "Clear input"
  },
  argTypes: InputButtonArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "gap-s")}>
      <h2 className={classNames("font-heading-l", "text-default")}>InputButton</h2>
      <div className={classNames("flex", "gap-xxl", "flex-row")}>
        <div className={classNames("flex", "gap-m", "flex-col")}>
          <InputButton aria-label="Remove" onClick={onClick} size="xs" />
          <InputButton aria-label="Remove" onClick={onClick} size="xs" data-testid="hover" />
          <InputButton aria-label="Remove" onClick={onClick} size="xs" data-testid="active" />
          <InputButton aria-label="Remove" onClick={onClick} size="xs" data-testid="focus" />
          <InputButton aria-label="Remove" onClick={onClick} size="xs" disabled />
          <InputButton aria-label="Remove" onClick={onClick} size="xs" loading />
        </div>

        <div className={classNames("flex", "gap-m", "flex-col")}>
          <InputButton aria-label="Remove" onClick={onClick} size="s" />
          <InputButton aria-label="Remove" onClick={onClick} size="s" data-testid="hover" />
          <InputButton aria-label="Remove" onClick={onClick} size="s" data-testid="active" />
          <InputButton aria-label="Remove" onClick={onClick} size="s" data-testid="focus" />
          <InputButton aria-label="Remove" onClick={onClick} size="s" disabled />
          <InputButton aria-label="Remove" onClick={onClick} size="s" loading />
        </div>
      </div>

      <h2 className={classNames("font-heading-l", "text-default")}>InputButton with Tooltip</h2>
      <div className={classNames("flex", "gap-xxl", "flex-row")}>
        <div className={classNames("flex", "gap-m", "flex-col")}>
          <Tooltip title="Remove">
            <InputButton aria-label="Remove" onClick={onClick} size="xs" />
          </Tooltip>
          <Tooltip title="Remove">
            <InputButton aria-label="Remove" onClick={onClick} size="xs" data-testid="hover" />
          </Tooltip>
          <Tooltip title="Remove">
            <InputButton aria-label="Remove" onClick={onClick} size="xs" data-testid="active" />
          </Tooltip>
          <Tooltip title="Remove">
            <InputButton aria-label="Remove" onClick={onClick} size="xs" data-testid="focus" />
          </Tooltip>
          <Tooltip title="Remove">
            <InputButton aria-label="Remove" onClick={onClick} size="xs" disabled />
          </Tooltip>
          <Tooltip title="Remove">
            <InputButton aria-label="Remove" onClick={onClick} size="xs" loading />
          </Tooltip>
        </div>

        <div className={classNames("flex", "gap-m", "flex-col")}>
          <Tooltip title="Remove">
            <InputButton aria-label="Remove" onClick={onClick} size="s" />
          </Tooltip>
          <Tooltip title="Remove">
            <InputButton aria-label="Remove" onClick={onClick} size="s" data-testid="hover" />
          </Tooltip>
          <Tooltip title="Remove">
            <InputButton aria-label="Remove" onClick={onClick} size="s" data-testid="active" />
          </Tooltip>
          <Tooltip title="Remove">
            <InputButton aria-label="Remove" onClick={onClick} size="s" data-testid="focus" />
          </Tooltip>
          <Tooltip title="Remove">
            <InputButton aria-label="Remove" onClick={onClick} size="s" disabled />
          </Tooltip>
          <Tooltip title="Remove">
            <InputButton aria-label="Remove" onClick={onClick} size="s" loading />
          </Tooltip>
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    },
    pseudo: {
      hover: '[data-testid="hover"]',
      active: '[data-testid="active"]',
      focusVisible: '[data-testid="focus"]'
    }
  }
}`,...o.parameters?.docs?.source}}};const p=["Playground","VisualTest"],R=Object.freeze(Object.defineProperty({__proto__:null,Playground:l,VisualTest:o,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{l as P,R as S};
