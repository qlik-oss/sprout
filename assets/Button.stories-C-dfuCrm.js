import{n as e}from"./chunk-DseTPa7n.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t as n}from"./ButtonGroup-BO5OiNKO.js";import{J as r,K as i,dn as a,hn as o,q as s,x as c}from"./iframe-BRSAI4nO.js";import"./Icons-DoZ1c5fe.js";import{n as l,r as u,t as d}from"./Button.argTypes-_HwelCQ3.js";var f=s,p=e({DeprecatedDestructiveVariant:()=>S,IconPlayground:()=>w,Playground:()=>v,SplitButton:()=>D,VisualTest:()=>C,VisualTestIcon:()=>O,__namedExportsOrder:()=>k,default:()=>g}),m=t(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Button`,component:r,parameters:{}},_=h(),v={render:e=>(0,m.jsx)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`p-s`,`border-default`),"data-testid":`wrapper`,style:{inlineSize:`300px`},children:(0,m.jsx)(r,{...e,onClick:_})}),args:{label:`Label`},argTypes:{...l,...d},parameters:{chromatic:{disableSnapshot:!0}}};function y({children:e,width:t}){return(0,m.jsx)(`div`,{className:o(`flex-noreset`,`content-center`,`flex-row`,`border-box`,`font-body-s`,`text-default`),style:{inlineSize:t||`100px`},children:e})}var b={icon:(0,m.jsx)(a,{}),onClick:_};function x({rowTitle:e,...t}){return(0,m.jsxs)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,m.jsx)(y,{children:e}),(0,m.jsx)(y,{children:(0,m.jsx)(r,{variant:`primary`,...t})}),(0,m.jsx)(y,{children:(0,m.jsx)(r,{variant:`primary`,destructive:!0,...t})}),(0,m.jsx)(y,{children:(0,m.jsx)(r,{variant:`default`,...t})}),(0,m.jsx)(y,{children:(0,m.jsx)(r,{variant:`quiet`,...t})}),(0,m.jsx)(y,{children:(0,m.jsx)(r,{variant:`secondary`,...t})}),(0,m.jsx)(y,{children:(0,m.jsx)(r,{variant:`secondary`,destructive:!0,...t})})]})}var S={name:`Deprecated destructive variant`,render:e=>(0,m.jsxs)(`div`,{className:o(`flex`,`flex-col`,`gap-m`,`text-default`),children:[(0,m.jsx)(`h1`,{className:o(`font-heading-m`),children:`Deprecated destructive variant`}),(0,m.jsx)(`p`,{className:o(`font-body-s`),children:'The props `variant="destructive"` must be replaced by `variant="primary" destructive` props.'}),(0,m.jsxs)(`div`,{className:o(`flex`,`flex-row`,`gap-m`),children:[(0,m.jsx)(r,{variant:`destructive`,...e,onClick:_}),(0,m.jsx)(r,{variant:`destructive`,...e,onClick:_,"data-testid":`hovered`}),(0,m.jsx)(r,{variant:`destructive`,...e,onClick:_,"data-testid":`actived`}),(0,m.jsx)(r,{variant:`destructive`,...e,onClick:_,"data-testid":`focused`})]}),(0,m.jsxs)(`div`,{className:o(`flex`,`flex-row`,`gap-m`),children:[(0,m.jsx)(r,{variant:`destructive`,size:`small`,...e,onClick:_}),(0,m.jsx)(r,{variant:`destructive`,size:`small`,...e,onClick:_,"data-testid":`hovered`}),(0,m.jsx)(r,{variant:`destructive`,size:`small`,...e,onClick:_,"data-testid":`actived`}),(0,m.jsx)(r,{variant:`destructive`,size:`small`,...e,onClick:_,"data-testid":`focused`})]})]}),args:{label:`Label`},argTypes:{...l,...d},parameters:{pseudo:{hover:`[data-testid="hovered"]`,active:`[data-testid="actived"]`,focusVisible:`[data-testid="focused"]`}}},C={render:e=>{let t={...e,...b};return(0,m.jsxs)(`div`,{className:o(`flex`,`flex-col`,`border-box`,`gap-m`),style:{blockSize:200},children:[(0,m.jsxs)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,m.jsx)(y,{children:`state/variant`}),(0,m.jsx)(y,{children:`primary`}),(0,m.jsx)(y,{children:`destructive`}),(0,m.jsx)(y,{children:`default`}),(0,m.jsx)(y,{children:`quiet`}),(0,m.jsx)(y,{children:`secondary`}),(0,m.jsx)(y,{children:`destructive`})]}),(0,m.jsx)(x,{rowTitle:`Default`,...t}),(0,m.jsx)(x,{rowTitle:`Hover`,...t,"data-testid":`hovered`}),(0,m.jsx)(x,{rowTitle:`Active`,...t,"data-testid":`actived`}),(0,m.jsx)(x,{rowTitle:`Focused`,...t,"data-testid":`focused`}),(0,m.jsx)(x,{rowTitle:`Disabled`,...t,disabled:!0}),(0,m.jsx)(x,{rowTitle:`Loading`,...t,loading:!0}),(0,m.jsxs)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,m.jsx)(y,{children:`Floating`}),(0,m.jsx)(y,{children:(0,m.jsx)(f,{children:(0,m.jsx)(r,{variant:`primary`,...t})})}),(0,m.jsx)(y,{children:(0,m.jsx)(f,{children:(0,m.jsx)(r,{variant:`primary`,destructive:!0,...t})})}),(0,m.jsx)(y,{children:(0,m.jsx)(f,{children:(0,m.jsx)(r,{variant:`default`,...t})})}),(0,m.jsx)(y,{children:(0,m.jsx)(f,{children:(0,m.jsx)(r,{variant:`quiet`,...t})})}),(0,m.jsx)(y,{children:(0,m.jsx)(f,{children:(0,m.jsx)(r,{variant:`secondary`,...t})})}),(0,m.jsx)(y,{children:(0,m.jsx)(f,{children:(0,m.jsx)(r,{variant:`secondary`,destructive:!0,...t})})})]}),(0,m.jsx)(x,{rowTitle:`asDropdown`,...t,asDropdown:!0}),(0,m.jsx)(x,{rowTitle:`badge`,...t,badge:{text:`1`,variant:`alphanumeric`}}),(0,m.jsxs)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,m.jsx)(y,{children:`Loading +`}),(0,m.jsx)(`div`,{className:o(`flex`,`flex-row`,`border-box`),style:{inlineSize:`300px`},children:(0,m.jsx)(r,{variant:`default`,...t,justified:!0,asDropdown:!0,badge:{text:`1`,variant:`alphanumeric`},loading:!0})})]}),(0,m.jsxs)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,m.jsx)(y,{children:`Justified`}),(0,m.jsx)(`div`,{className:o(`flex`,`flex-row`,`border-box`),style:{inlineSize:`300px`},children:(0,m.jsx)(r,{variant:`default`,...t,justified:!0})})]}),(0,m.jsxs)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,m.jsx)(y,{children:`Overflow`}),(0,m.jsx)(y,{width:`300px`,children:(0,m.jsx)(r,{variant:`default`,...t,label:`Label overflow dolor sit amet consectetur adipiscing`,asDropdown:!0})}),(0,m.jsx)(y,{width:`300`,children:(0,m.jsx)(r,{label:`Filter`,badge:{text:`hello overflow world`,variant:`alphanumeric`}})})]}),(0,m.jsx)(x,{rowTitle:`Small`,...t,size:`small`}),(0,m.jsx)(x,{rowTitle:`Hover`,...t,size:`small`,"data-testid":`hovered`}),(0,m.jsx)(x,{rowTitle:`Active`,...t,size:`small`,"data-testid":`actived`}),(0,m.jsx)(x,{rowTitle:`Focused`,...t,size:`small`,"data-testid":`focused`}),(0,m.jsx)(x,{rowTitle:`Disabled`,...t,size:`small`,disabled:!0}),(0,m.jsx)(x,{rowTitle:`Loading`,...t,size:`small`,loading:!0}),(0,m.jsx)(x,{rowTitle:`asDropdown`,...t,size:`small`,asDropdown:!0}),(0,m.jsxs)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,m.jsx)(y,{children:`Floating`}),(0,m.jsx)(y,{children:(0,m.jsx)(f,{children:(0,m.jsx)(r,{variant:`primary`,...t,size:`small`})})}),(0,m.jsx)(y,{children:(0,m.jsx)(f,{children:(0,m.jsx)(r,{variant:`destructive`,...t,size:`small`})})}),(0,m.jsx)(y,{children:(0,m.jsx)(f,{children:(0,m.jsx)(r,{variant:`default`,...t,size:`small`})})}),(0,m.jsx)(y,{children:(0,m.jsx)(f,{children:(0,m.jsx)(r,{variant:`quiet`,...t,size:`small`})})}),(0,m.jsx)(y,{children:(0,m.jsx)(f,{children:(0,m.jsx)(r,{variant:`secondary`,...t,size:`small`})})})]}),(0,m.jsxs)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,m.jsx)(y,{children:`Justified`}),(0,m.jsx)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`gap-m`),style:{inlineSize:`300px`},children:(0,m.jsx)(r,{variant:`default`,...t,size:`small`,justified:!0})})]}),(0,m.jsxs)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,m.jsx)(y,{children:`Overflow`}),(0,m.jsx)(`div`,{className:o(`flex`,`flex-row`,`border-box`),style:{inlineSize:`300px`},children:(0,m.jsx)(r,{variant:`default`,...t,label:`Label overflow dolor sit amet consectetur adipiscing`,size:`small`,asDropdown:!0})})]})]})},args:{size:`default`,label:`Label`},argTypes:{size:{control:{type:`select`},options:u},label:{control:{type:`text`}}},parameters:{controls:{disable:!0},pseudo:{hover:`[data-testid="hovered"]`,active:`[data-testid="actived"]`,focusVisible:`[data-testid="focused"]`}}},w={render:e=>(0,m.jsx)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`p-xs`),"data-testid":`wrapper`,style:{inlineSize:`300px`},children:(0,m.jsx)(i,{icon:(0,m.jsx)(a,{}),...e,onClick:_})}),args:{label:`Label`,variant:`default`},argTypes:{...l,...d},parameters:{chromatic:{disableSnapshot:!0}}},T={icon:(0,m.jsx)(a,{}),onClick:_,label:`Label`};function E({variant:e}){return(0,m.jsxs)(`div`,{className:o(`flex`,`flex-col`,`border-box`,`gap-m`),children:[(0,m.jsx)(i,{...T,variant:e}),(0,m.jsx)(i,{...T,variant:e,"data-testid":`hover`}),(0,m.jsx)(i,{...T,variant:e,"data-testid":`active`}),(0,m.jsx)(i,{...T,variant:e,"data-testid":`focus`}),(0,m.jsx)(i,{...T,variant:e,disabled:!0}),(0,m.jsx)(i,{...T,variant:e,loading:!0}),(0,m.jsx)(f,{children:(0,m.jsx)(i,{...T,variant:e})}),(0,m.jsx)(i,{...T,variant:e,size:`small`}),(0,m.jsx)(i,{...T,variant:e,size:`small`,"data-testid":`hover`}),(0,m.jsx)(i,{...T,variant:e,size:`small`,"data-testid":`active`}),(0,m.jsx)(i,{...T,variant:e,size:`small`,"data-testid":`focus`}),(0,m.jsx)(i,{...T,variant:e,size:`small`,disabled:!0}),(0,m.jsx)(i,{...T,variant:e,size:`small`,loading:!0}),(0,m.jsx)(f,{children:(0,m.jsx)(i,{...T,variant:e,size:`small`})}),(0,m.jsx)(i,{...T,variant:e,size:`small`,badge:{text:`1`,variant:`alphanumeric`}})]})}var D={name:`SplitButton`,render:e=>(0,m.jsxs)(n,{children:[(0,m.jsx)(r,{...e}),(0,m.jsx)(c.Trigger,{placement:`bottom-end`,menu:(0,m.jsx)(c.Item,{label:`foo`}),children:(0,m.jsx)(i,{variant:e.variant,"aria-label":`Select your stuff`,asDropdown:!0})})]}),args:{label:`Label`,variant:`primary`},argTypes:d,parameters:{chromatic:{disableSnapshot:!0}}},O={render:()=>(0,m.jsxs)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,m.jsx)(E,{variant:`primary`}),(0,m.jsx)(E,{variant:`destructive`}),(0,m.jsx)(E,{variant:`default`}),(0,m.jsx)(E,{variant:`quiet`}),(0,m.jsx)(E,{variant:`secondary`}),(0,m.jsxs)(`div`,{className:o(`flex`,`flex-col`,`border-box`,`gap-m`),children:[(0,m.jsx)(y,{children:`Justified`}),(0,m.jsxs)(`div`,{className:o(`flex`,`flex-col`,`border-box`,`content-start`,`gap-m`),style:{inlineSize:`300px`},children:[(0,m.jsx)(i,{variant:`default`,...T,justified:!0}),(0,m.jsx)(i,{variant:`default`,...T,size:`small`,justified:!0})]})]})]}),parameters:{controls:{disable:!0},pseudo:{hover:`[data-testid="hover"]`,active:`[data-testid="active"]`,focusVisible:`[data-testid="focus"]`}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Deprecated destructive variant",
  render: (props: ButtonProps) => <div className={classNames("flex", "flex-col", "gap-m", "text-default")}>
      <h1 className={classNames("font-heading-m")}>
        Deprecated destructive variant
      </h1>
      <p className={classNames("font-body-s")}>
        The props \`variant="destructive"\` must be replaced by \`variant="primary"
        destructive\` props.
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("flex", "flex-row", "border-box", "p-xs")} data-testid="wrapper" style={{
    inlineSize: "300px"
  }}>
      <IconButton icon={<AddIcon />} {...props} onClick={onClick} />
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
}`,...w.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "SplitButton",
  render: (props: ButtonProps) => <ButtonGroup>
      <Button {...props} />
      <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
        <IconButton variant={props.variant} aria-label="Select your stuff" asDropdown />
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};var k=[`Playground`,`DeprecatedDestructiveVariant`,`VisualTest`,`IconPlayground`,`SplitButton`,`VisualTestIcon`];export{S as DeprecatedDestructiveVariant,w as IconPlayground,v as Playground,D as SplitButton,C as VisualTest,O as VisualTestIcon,k as __namedExportsOrder,g as default,p as t};