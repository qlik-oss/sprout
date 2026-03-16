import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{hn as t,tt as n}from"./iframe-BRSAI4nO.js";var r={anchorEl:{control:!1,description:`The element to use as a reference to set position of the floating element.`,table:{type:{summary:`HTMLElement`}}},anchorPosition:{control:!1,description:`This is the position that may be used to set the position of the popover. The coordinates are relative to the application's client area.`,table:{type:{summary:`{ x: number; y: number } | undefined`}}},children:{control:!1,description:`The element that will trigger the tooltip.`,table:{type:{summary:`ReactNode`}}},forceMount:{control:`boolean`,description:`Define if the content is mount when not displayed.`,table:{type:{summary:`boolean`}}},initialOpen:{control:{type:`select`},description:`The initial open state when the component is not controlled`,options:[void 0,!0,!1],table:{defaultValue:{summary:`undefined`},type:{summary:`undefined | boolean`}}},maxWidth:{control:{type:`select`},options:[`reference`,`xxs`,`xs`,`s`,`m`,`l`,`xl`,`100px`],table:{type:{summary:`reference | xxs | xs | s | m | l | xl | CSSProperties['width']`}}},minWidth:{control:{type:`select`},options:[`reference`,`xxs`,`xs`,`s`,`m`,`l`,`xl`,`100px`],table:{type:{summary:`reference | xxs | xs | s | m | l | xl | CSSProperties['width']`}}},onMount:{control:!1,table:{type:{summary:`(reference?: HTMLElement, floating?: HTMLElement) => void`}}},onOpenChange:{control:!1,table:{type:{summary:`(open: boolean, reason?: Reason) => void`}}},open:{control:{type:`select`},description:`Control if the popover is displayed or not`,options:[void 0,!0,!1],table:{defaultValue:{summary:`undefined`},type:{summary:`undefined | boolean`}}},placement:{control:{type:`select`},options:[void 0,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`,`right`,`right-start`,`right-end`,`top`,`top-start`,`top-end`],table:{defaultValue:{summary:`top`},type:{summary:`undefined | bottom | bottom-start | bottom-end | left | left-start | left-end | right | right-start | right-end | top | top-start | top-end`}}},placementUpdate:{control:{type:`boolean`},description:`If true the floating element placement can be updated to keep it in view.`,table:{type:{summary:`boolean`}}},title:{control:{type:`text`},description:`The content of the tooltip.`,table:{type:{summary:`ReactNode`}}},width:{control:{type:`select`},description:`The width of the tooltip.`,options:[`reference`,`xxs`,`xs`,`s`,`m`,`l`,`xl`,`100px`],table:{type:{summary:`reference | xxs | xs | s | m | l | xl | CSSProperties['width']`}}}},i=e(),a={title:`Components/Tooltip`},o=t(`font-body-s`,`text-default`),s={render:({disableContainerScroll:e,...r})=>(0,i.jsx)(`div`,{className:t(`overflow-scroll`,`border-default`),"data-testid":`wrapper`,style:e?void 0:{width:500,height:150},ref:t=>{t&&!e&&t.scrollTo({top:80,left:250})},children:(0,i.jsx)(`div`,{className:t(`flex`,`flex-row`,`grow-1`,`shrink-0`,`items-center`,`justify-center`),style:{inlineSize:1e3,blockSize:300},children:(0,i.jsx)(n,{...r,children:(0,i.jsx)(`button`,{type:`button`,className:o,children:`Hover me`})})})}),args:{title:`Tooltip`,initialOpen:!0,disableContainerScroll:!1},argTypes:{disableContainerScroll:{control:`boolean`,description:`Disable scroll on the container div`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},...r},parameters:{chromatic:{disableSnapshot:!0}}};function c(){return(0,i.jsxs)(`div`,{className:t(`flex`,`border-box`,`flex-row`),children:[(0,i.jsxs)(`div`,{className:t(`flex`,`border-box`,`flex-col`,`p-3xl`,`justify-start`,`items-center`,`gap-3xl`),style:{inlineSize:300},children:[(0,i.jsx)(n,{title:`placement=top`,initialOpen:!0,placement:`top`,children:(0,i.jsx)(`button`,{type:`button`,className:o,children:`Top`})}),(0,i.jsx)(n,{title:`placement=left`,initialOpen:!0,placement:`left`,children:(0,i.jsx)(`button`,{type:`button`,className:o,children:`Left`})}),(0,i.jsx)(n,{title:`placement=right`,initialOpen:!0,placement:`right`,children:(0,i.jsx)(`button`,{type:`button`,className:o,children:`Right`})}),(0,i.jsx)(n,{title:`placement=bottom`,initialOpen:!0,placement:`bottom`,children:(0,i.jsx)(`button`,{type:`button`,className:o,children:`Center`})})]}),(0,i.jsxs)(`div`,{className:t(`flex`,`border-box`,`flex-col`,`justify-start`,`items-start`,`gap-3xl`),children:[(0,i.jsx)(n,{title:`ACCOUNT_NAME_UPPERCASE_SHOULD_WRAP_WITH`,initialOpen:!0,placement:`right`,children:(0,i.jsx)(`button`,{type:`button`,className:o,children:`Long text`})}),(0,i.jsx)(n,{title:`This
Text
Is
Split
Into
Multiple
Lines`,initialOpen:!0,placement:`bottom`,children:(0,i.jsx)(`button`,{type:`button`,className:o,children:`Long text with newlines`})})]})]})}s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    disableContainerScroll,
    ...rest
  }) => <div className={classNames("overflow-scroll", "border-default")} data-testid="wrapper" style={!disableContainerScroll ? {
    width: 500,
    height: 150
  } : undefined} ref={ref => {
    if (ref && !disableContainerScroll) {
      ref.scrollTo({
        top: 80,
        left: 250
      });
    }
  }}>
      <div className={classNames("flex", "flex-row", "grow-1", "shrink-0", "items-center", "justify-center")} style={{
      inlineSize: 1000,
      blockSize: 300
    }}>
        <Tooltip {...rest}>
          <button type="button" className={buttonClass}>
            Hover me
          </button>
        </Tooltip>
      </div>
    </div>,
  args: {
    title: "Tooltip",
    initialOpen: true,
    disableContainerScroll: false
  },
  argTypes: {
    disableContainerScroll: {
      control: "boolean",
      description: "Disable scroll on the container div",
      table: {
        type: {
          summary: "boolean"
        },
        defaultValue: {
          summary: "false"
        }
      }
    },
    ...TooltipArgTypes
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`function VisualTest() {
  return <div className={classNames("flex", "border-box", "flex-row")}>
      <div className={classNames("flex", "border-box", "flex-col", "p-3xl", "justify-start", "items-center", "gap-3xl")} style={{
      inlineSize: 300
    }}>
        <Tooltip title="placement=top" initialOpen placement="top">
          <button type="button" className={buttonClass}>
            Top
          </button>
        </Tooltip>
        <Tooltip title="placement=left" initialOpen placement="left">
          <button type="button" className={buttonClass}>
            Left
          </button>
        </Tooltip>
        <Tooltip title="placement=right" initialOpen placement="right">
          <button type="button" className={buttonClass}>
            Right
          </button>
        </Tooltip>
        <Tooltip title="placement=bottom" initialOpen placement="bottom">
          <button type="button" className={buttonClass}>
            Center
          </button>
        </Tooltip>
      </div>
      <div className={classNames("flex", "border-box", "flex-col", "justify-start", "items-start", "gap-3xl")}>
        <Tooltip title="ACCOUNT_NAME_UPPERCASE_SHOULD_WRAP_WITH" initialOpen placement="right">
          <button type="button" className={buttonClass}>
            Long text
          </button>
        </Tooltip>
        <Tooltip title={"This\\nText\\nIs\\nSplit\\nInto\\nMultiple\\nLines"} initialOpen placement="bottom">
          <button type="button" className={buttonClass}>
            Long text with newlines
          </button>
        </Tooltip>
      </div>
    </div>;
}`,...c.parameters?.docs?.source}}};var l=[`Playground`,`VisualTest`];export{s as Playground,c as VisualTest,l as __namedExportsOrder,a as default};