import{j as e}from"./iframe-B4vjk2_C.js";import{F as w}from"./Add-CrXyYGj8.js";import{D as C}from"./icons-69FQzCKM.js";import{B as j,a as g,S as B}from"./Button.argTypes-Bp7ZyGdO.js";import{B as y}from"./ButtonGroup-CS21pYDB.js";import{F as N}from"./FloatingWrapper-FR8zykZr.js";import{B as r}from"./Button-COVTwlCl.js";import{c as l}from"./classNames-DaRWzB8T.js";import{I as i}from"./IconButton-Ba8Tcb-S.js";import{M as h}from"./Menu-BL50xBAN.js";const d=N,{fn:z}=__STORYBOOK_MODULE_TEST__,T={title:"Components/Button",component:r,parameters:{}},c=z(),x={render:t=>e.jsx("div",{className:l("flex","flex-row","border-box","p-s","border-default"),"data-testid":"wrapper",style:{inlineSize:"300px"},children:e.jsx(r,{...t,onClick:c})}),args:{label:"Label"},argTypes:{...g,...j},parameters:{chromatic:{disableSnapshot:!0}}};function s({children:t,width:a}){return e.jsx("div",{className:l("flex-noreset","content-center","flex-row","border-box","font-body-s","text-default"),style:{inlineSize:a||"100px"},children:t})}const P={icon:e.jsx(w,{height:void 0}),onClick:c};function n({rowTitle:t,...a}){return e.jsxs("div",{className:l("flex","flex-row","border-box","gap-m"),children:[e.jsx(s,{children:t}),e.jsx(s,{children:e.jsx(r,{variant:"primary",...a})}),e.jsx(s,{children:e.jsx(r,{variant:"primary",destructive:!0,...a})}),e.jsx(s,{children:e.jsx(r,{variant:"default",...a})}),e.jsx(s,{children:e.jsx(r,{variant:"quiet",...a})}),e.jsx(s,{children:e.jsx(r,{variant:"secondary",...a})}),e.jsx(s,{children:e.jsx(r,{variant:"secondary",destructive:!0,...a})})]})}const p={name:"Deprecated destructive variant",render:t=>e.jsxs("div",{className:l("flex","flex-col","gap-m","text-default"),children:[e.jsx("h1",{className:l("font-heading-m"),children:"Deprecated destructive variant"}),e.jsx("p",{className:l("font-body-s"),children:'The props `variant="destructive"` must be replaced by `variant="primary" destructive` props.'}),e.jsxs("div",{className:l("flex","flex-row","gap-m"),children:[e.jsx(r,{variant:"destructive",...t,onClick:c}),e.jsx(r,{variant:"destructive",...t,onClick:c,"data-testid":"hovered"}),e.jsx(r,{variant:"destructive",...t,onClick:c,"data-testid":"actived"}),e.jsx(r,{variant:"destructive",...t,onClick:c,"data-testid":"focused"})]}),e.jsxs("div",{className:l("flex","flex-row","gap-m"),children:[e.jsx(r,{variant:"destructive",size:"small",...t,onClick:c}),e.jsx(r,{variant:"destructive",size:"small",...t,onClick:c,"data-testid":"hovered"}),e.jsx(r,{variant:"destructive",size:"small",...t,onClick:c,"data-testid":"actived"}),e.jsx(r,{variant:"destructive",size:"small",...t,onClick:c,"data-testid":"focused"})]})]}),args:{label:"Label"},argTypes:{...g,...j},parameters:{pseudo:{hover:'[data-testid="hovered"]',active:'[data-testid="actived"]',focusVisible:'[data-testid="focused"]'}}},m={render:t=>{const a={...t,...P};return e.jsxs("div",{className:l("flex","flex-col","border-box","gap-m"),style:{blockSize:200},children:[e.jsxs("div",{className:l("flex","flex-row","border-box","gap-m"),children:[e.jsx(s,{children:"state/variant"}),e.jsx(s,{children:"primary"}),e.jsx(s,{children:"destructive"}),e.jsx(s,{children:"default"}),e.jsx(s,{children:"quiet"}),e.jsx(s,{children:"secondary"}),e.jsx(s,{children:"destructive"})]}),e.jsx(n,{rowTitle:"Default",...a}),e.jsx(n,{rowTitle:"Hover",...a,"data-testid":"hovered"}),e.jsx(n,{rowTitle:"Active",...a,"data-testid":"actived"}),e.jsx(n,{rowTitle:"Focused",...a,"data-testid":"focused"}),e.jsx(n,{rowTitle:"Disabled",...a,disabled:!0}),e.jsx(n,{rowTitle:"Loading",...a,loading:!0}),e.jsxs("div",{className:l("flex","flex-row","border-box","gap-m"),children:[e.jsx(s,{children:"Floating"}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(r,{variant:"primary",...a})})}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(r,{variant:"primary",destructive:!0,...a})})}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(r,{variant:"default",...a})})}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(r,{variant:"quiet",...a})})}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(r,{variant:"secondary",...a})})}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(r,{variant:"secondary",destructive:!0,...a})})})]}),e.jsx(n,{rowTitle:"asDropdown",...a,asDropdown:!0}),e.jsx(n,{rowTitle:"badge",...a,badge:{text:"1",variant:"alphanumeric"}}),e.jsxs("div",{className:l("flex","flex-row","border-box","gap-m"),children:[e.jsx(s,{children:"Loading +"}),e.jsx("div",{className:l("flex","flex-row","border-box"),style:{inlineSize:"300px"},children:e.jsx(r,{variant:"default",...a,justified:!0,asDropdown:!0,badge:{text:"1",variant:"alphanumeric"},loading:!0})})]}),e.jsxs("div",{className:l("flex","flex-row","border-box","gap-m"),children:[e.jsx(s,{children:"Justified"}),e.jsx("div",{className:l("flex","flex-row","border-box"),style:{inlineSize:"300px"},children:e.jsx(r,{variant:"default",...a,justified:!0})})]}),e.jsxs("div",{className:l("flex","flex-row","border-box","gap-m"),children:[e.jsx(s,{children:"Overflow"}),e.jsx(s,{width:"300px",children:e.jsx(r,{variant:"default",...a,label:"Label overflow dolor sit amet consectetur adipiscing",asDropdown:!0})}),e.jsx(s,{width:"300",children:e.jsx(r,{label:"Filter",badge:{text:"hello overflow world",variant:"alphanumeric"}})})]}),e.jsx(n,{rowTitle:"Small",...a,size:"small"}),e.jsx(n,{rowTitle:"Hover",...a,size:"small","data-testid":"hovered"}),e.jsx(n,{rowTitle:"Active",...a,size:"small","data-testid":"actived"}),e.jsx(n,{rowTitle:"Focused",...a,size:"small","data-testid":"focused"}),e.jsx(n,{rowTitle:"Disabled",...a,size:"small",disabled:!0}),e.jsx(n,{rowTitle:"Loading",...a,size:"small",loading:!0}),e.jsx(n,{rowTitle:"asDropdown",...a,size:"small",asDropdown:!0}),e.jsxs("div",{className:l("flex","flex-row","border-box","gap-m"),children:[e.jsx(s,{children:"Floating"}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(r,{variant:"primary",...a,size:"small"})})}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(r,{variant:"destructive",...a,size:"small"})})}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(r,{variant:"default",...a,size:"small"})})}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(r,{variant:"quiet",...a,size:"small"})})}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(r,{variant:"secondary",...a,size:"small"})})})]}),e.jsxs("div",{className:l("flex","flex-row","border-box","gap-m"),children:[e.jsx(s,{children:"Justified"}),e.jsx("div",{className:l("flex","flex-row","border-box","gap-m"),style:{inlineSize:"300px"},children:e.jsx(r,{variant:"default",...a,size:"small",justified:!0})})]}),e.jsxs("div",{className:l("flex","flex-row","border-box","gap-m"),children:[e.jsx(s,{children:"Overflow"}),e.jsx("div",{className:l("flex","flex-row","border-box"),style:{inlineSize:"300px"},children:e.jsx(r,{variant:"default",...a,label:"Label overflow dolor sit amet consectetur adipiscing",size:"small",asDropdown:!0})})]})]})},args:{size:"default",label:"Label"},argTypes:{size:{control:{type:"select"},options:B},label:{control:{type:"text"}}},parameters:{controls:{disable:!0},pseudo:{hover:'[data-testid="hovered"]',active:'[data-testid="actived"]',focusVisible:'[data-testid="focused"]'}}},v={render:t=>e.jsx("div",{className:l("flex","flex-row","border-box","p-xs"),"data-testid":"wrapper",style:{inlineSize:"300px"},children:e.jsx(i,{icon:e.jsx(w,{height:void 0}),...t,onClick:c})}),args:{label:"Label",variant:"default"},argTypes:{...g,...j},parameters:{chromatic:{disableSnapshot:!0}}},o={icon:e.jsx(w,{height:void 0}),onClick:c,label:"Label"};function u({variant:t}){return e.jsxs("div",{className:l("flex","flex-col","border-box","gap-m"),children:[e.jsx(i,{...o,variant:t}),e.jsx(i,{...o,variant:t,"data-testid":"hover"}),e.jsx(i,{...o,variant:t,"data-testid":"active"}),e.jsx(i,{...o,variant:t,"data-testid":"focus"}),e.jsx(i,{...o,variant:t,disabled:!0}),e.jsx(i,{...o,variant:t,loading:!0}),e.jsx(d,{children:e.jsx(i,{...o,variant:t})}),e.jsx(i,{...o,variant:t,size:"small"}),e.jsx(i,{...o,variant:t,size:"small","data-testid":"hover"}),e.jsx(i,{...o,variant:t,size:"small","data-testid":"active"}),e.jsx(i,{...o,variant:t,size:"small","data-testid":"focus"}),e.jsx(i,{...o,variant:t,size:"small",disabled:!0}),e.jsx(i,{...o,variant:t,size:"small",loading:!0}),e.jsx(d,{children:e.jsx(i,{...o,variant:t,size:"small"})}),e.jsx(i,{...o,variant:t,size:"small",badge:{text:"1",variant:"alphanumeric"}})]})}const f={name:"SplitButton",render:t=>e.jsxs(y,{children:[e.jsx(r,{...t}),e.jsx(h.Trigger,{placement:"bottom-end",menu:e.jsx(h.Item,{label:"foo"}),children:e.jsx(i,{variant:t.variant,"aria-label":"Select your stuff",icon:e.jsx(C,{})})})]}),args:{label:"Label",variant:"primary"},argTypes:j,parameters:{chromatic:{disableSnapshot:!0}}},b={render:()=>e.jsxs("div",{className:l("flex","flex-row","border-box","gap-m"),children:[e.jsx(u,{variant:"primary"}),e.jsx(u,{variant:"destructive"}),e.jsx(u,{variant:"default"}),e.jsx(u,{variant:"quiet"}),e.jsx(u,{variant:"secondary"}),e.jsxs("div",{className:l("flex","flex-col","border-box","gap-m"),children:[e.jsx(s,{children:"Justified"}),e.jsxs("div",{className:l("flex","flex-col","border-box","content-start","gap-m"),style:{inlineSize:"300px"},children:[e.jsx(i,{variant:"default",...o,justified:!0}),e.jsx(i,{variant:"default",...o,size:"small",justified:!0})]})]})]}),parameters:{controls:{disable:!0},pseudo:{hover:'[data-testid="hover"]',active:'[data-testid="active"]',focusVisible:'[data-testid="focus"]'}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (props: ButtonProps) => <div className={classNames("flex", "flex-row", "border-box", "p-s", "border-default")} data-testid="wrapper" style={{
    inlineSize: "300px"
  }}>
      <Button {...props} onClick={onClick} />
    </div>,
  args: {
    label: "Label"
  },
  argTypes: {
    ...ButtonIconArgTypes,
    ...ButtonArgTypes
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Deprecated destructive variant",
  render: (props: ButtonProps) => <div className={classNames("flex", "flex-col", "gap-m", "text-default")}>
      <h1 className={classNames("font-heading-m")}>Deprecated destructive variant</h1>
      <p className={classNames("font-body-s")}>
        The props \`variant="destructive"\` must be replaced by \`variant="primary" destructive\` props.
      </p>
      <div className={classNames("flex", "flex-row", "gap-m")}>
        <Button variant="destructive" {...props} onClick={onClick} />
        <Button variant="destructive" {...props} onClick={onClick} data-testid="hovered" />
        <Button variant="destructive" {...props} onClick={onClick} data-testid="actived" />
        <Button variant="destructive" {...props} onClick={onClick} data-testid="focused" />
      </div>
      <div className={classNames("flex", "flex-row", "gap-m")}>
        <Button variant="destructive" size="small" {...props} onClick={onClick} />
        <Button variant="destructive" size="small" {...props} onClick={onClick} data-testid="hovered" />
        <Button variant="destructive" size="small" {...props} onClick={onClick} data-testid="actived" />
        <Button variant="destructive" size="small" {...props} onClick={onClick} data-testid="focused" />
      </div>
    </div>,
  args: {
    label: "Label"
  },
  argTypes: {
    ...ButtonIconArgTypes,
    ...ButtonArgTypes
  },
  parameters: {
    pseudo: {
      hover: '[data-testid="hovered"]',
      active: '[data-testid="actived"]',
      focusVisible: '[data-testid="focused"]'
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (props: ButtonProps) => {
    const newProps = {
      ...props,
      ...defaultBtnProps
    } as ButtonProps;
    return <div className={classNames("flex", "flex-col", "border-box", "gap-m")} style={{
      blockSize: 200
    }}>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <Cell>state/variant</Cell>
          <Cell>primary</Cell>
          <Cell>destructive</Cell>
          <Cell>default</Cell>
          <Cell>quiet</Cell>
          <Cell>secondary</Cell>
          <Cell>destructive</Cell>
        </div>
        <Row rowTitle="Default" {...newProps} />
        <Row rowTitle="Hover" {...newProps} data-testid="hovered" />
        <Row rowTitle="Active" {...newProps} data-testid="actived" />
        <Row rowTitle="Focused" {...newProps} data-testid="focused" />
        <Row rowTitle="Disabled" {...newProps} disabled />
        <Row rowTitle="Loading" {...newProps} loading />
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <Cell>Floating</Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="primary" {...newProps} />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="primary" destructive {...newProps} />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="default" {...newProps} />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="quiet" {...newProps} />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="secondary" {...newProps} />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="secondary" destructive {...newProps} />
            </ButtonFloating>
          </Cell>
        </div>
        <Row rowTitle="asDropdown" {...newProps} asDropdown />
        <Row rowTitle="badge" {...newProps} badge={{
        text: "1",
        variant: "alphanumeric"
      }} />
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <Cell>Loading +</Cell>
          <div className={classNames("flex", "flex-row", "border-box")} style={{
          inlineSize: "300px"
        }}>
            <Button variant="default" {...newProps} justified asDropdown badge={{
            text: "1",
            variant: "alphanumeric"
          }} loading />
          </div>
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <Cell>Justified</Cell>
          <div className={classNames("flex", "flex-row", "border-box")} style={{
          inlineSize: "300px"
        }}>
            <Button variant="default" {...newProps} justified />
          </div>
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <Cell>Overflow</Cell>
          <Cell width="300px">
            <Button variant="default" {...newProps} label="Label overflow dolor sit amet consectetur adipiscing" asDropdown />
          </Cell>
          <Cell width="300">
            <Button label="Filter" badge={{
            text: "hello overflow world",
            variant: "alphanumeric"
          }} />
          </Cell>
        </div>
        <Row rowTitle="Small" {...newProps} size="small" />
        <Row rowTitle="Hover" {...newProps} size="small" data-testid="hovered" />
        <Row rowTitle="Active" {...newProps} size="small" data-testid="actived" />
        <Row rowTitle="Focused" {...newProps} size="small" data-testid="focused" />
        <Row rowTitle="Disabled" {...newProps} size="small" disabled />
        <Row rowTitle="Loading" {...newProps} size="small" loading />
        <Row rowTitle="asDropdown" {...newProps} size="small" asDropdown />
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <Cell>Floating</Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="primary" {...newProps} size="small" />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="destructive" {...newProps} size="small" />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="default" {...newProps} size="small" />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="quiet" {...newProps} size="small" />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="secondary" {...newProps} size="small" />
            </ButtonFloating>
          </Cell>
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <Cell>Justified</Cell>
          <div className={classNames("flex", "flex-row", "border-box", "gap-m")} style={{
          inlineSize: "300px"
        }}>
            <Button variant="default" {...newProps} size="small" justified />
          </div>
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <Cell>Overflow</Cell>
          <div className={classNames("flex", "flex-row", "border-box")} style={{
          inlineSize: "300px"
        }}>
            <Button variant="default" {...newProps} label="Label overflow dolor sit amet consectetur adipiscing" size="small" asDropdown />
          </div>
        </div>
      </div>;
  },
  args: {
    size: "default",
    label: "Label"
  },
  argTypes: {
    size: {
      control: {
        type: "select"
      },
      options: SIZES
    },
    label: {
      control: {
        type: "text"
      }
    }
  },
  parameters: {
    controls: {
      disable: true
    },
    pseudo: {
      hover: '[data-testid="hovered"]',
      active: '[data-testid="actived"]',
      focusVisible: '[data-testid="focused"]'
    }
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("flex", "flex-row", "border-box", "p-xs")} data-testid="wrapper" style={{
    inlineSize: "300px"
  }}>
      <IconButton icon={<AddIcon height={undefined} />} {...props} onClick={onClick} />
    </div>,
  args: {
    label: "Label",
    variant: "default"
  },
  argTypes: {
    ...ButtonIconArgTypes,
    ...ButtonArgTypes
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "SplitButton",
  render: (props: ButtonProps) => <ButtonGroup>
      <Button {...props} />
      <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
        <IconButton variant={props.variant} aria-label="Select your stuff" icon={<DropdownArrow />} />
      </Menu.Trigger>
    </ButtonGroup>,
  args: {
    label: "Label",
    variant: "primary"
  },
  argTypes: ButtonArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
      <IconColumn variant="primary" />
      <IconColumn variant="destructive" />
      <IconColumn variant="default" />
      <IconColumn variant="quiet" />
      <IconColumn variant="secondary" />
      <div className={classNames("flex", "flex-col", "border-box", "gap-m")}>
        <Cell>Justified</Cell>
        <div className={classNames("flex", "flex-col", "border-box", "content-start", "gap-m")} style={{
        inlineSize: "300px"
      }}>
          <IconButton variant="default" {...defaultIconProps} justified />
          <IconButton variant="default" {...defaultIconProps} size="small" justified />
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
}`,...b.parameters?.docs?.source}}};const S=["Playground","DeprecatedDestructiveVariant","VisualTest","IconPlayground","SplitButton","VisualTestIcon"],q=Object.freeze(Object.defineProperty({__proto__:null,DeprecatedDestructiveVariant:p,IconPlayground:v,Playground:x,SplitButton:f,VisualTest:m,VisualTestIcon:b,__namedExportsOrder:S,default:T},Symbol.toStringTag,{value:"Module"}));export{v as I,x as P,q as S,m as V,f as a};
