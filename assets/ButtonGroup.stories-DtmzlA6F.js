import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./jsx-runtime-BqsN2jGA.js";import{Et as r,Fn as i,O as a,Ot as o,Ti as s,kn as c,qn as l,sn as u,ta as d,zt as f}from"./iframe-UwarwtgL.js";import{n as p,t as m}from"./SelectTest-DG7v2p_d.js";var h,g=t((()=>{h={children:{control:!1,description:`The buttons to be rendered inside the ButtonGroup.`,table:{type:{summary:`ReactNode`}}},fullWidth:{control:{type:`boolean`},description:`If true, the button group will take the full width of its container.`,table:{defaultValue:{summary:`false`},type:{summary:`boolean`}}},orientation:{control:{type:`select`},options:[`horizontal`,`vertical`],table:{defaultValue:{summary:`"horizontal"`},type:{summary:`"horizontal" | "vertical"`}}}}})),_=e({Playground:()=>x,VisualTest:()=>S,__namedExportsOrder:()=>C,default:()=>b});function v(e){return(0,y.jsx)(`h2`,{className:d(`flex`,`flex-row`,`border-box`,`font-heading-m`,`text-default`),children:e.children})}var y,b,x,S,C,w=t((()=>{a(),l(),p(),g(),y=n(),b={title:`Components/ButtonGroup`},x={render:e=>(0,y.jsxs)(u,{...e,children:[(0,y.jsx)(i,{label:`Medium`}),(0,y.jsx)(i,{label:`Medium`}),(0,y.jsx)(i,{label:`Medium`})]}),argTypes:h,parameters:{chromatic:{disableSnapshot:!0}}},S={render:()=>(0,y.jsxs)(`div`,{className:d(`flex`,`flex-col`,`border-box`,`gap-m`),children:[(0,y.jsx)(v,{children:`Default buttons`}),(0,y.jsxs)(u,{children:[(0,y.jsx)(i,{label:`Default`}),(0,y.jsx)(i,{label:`Hover`,"data-testid":`hover`}),(0,y.jsx)(i,{label:`Active`,"data-testid":`active`}),(0,y.jsx)(i,{label:`Focused`,"data-testid":`focus`})]}),(0,y.jsx)(v,{children:`Small buttons`}),(0,y.jsxs)(u,{children:[(0,y.jsx)(i,{label:`Small`,size:`small`}),(0,y.jsx)(i,{label:`Hovered`,size:`small`,"data-testid":`hover`}),(0,y.jsx)(i,{label:`Actived`,size:`small`,"data-testid":`active`}),(0,y.jsx)(i,{label:`Focused`,size:`small`,"data-testid":`focus`})]}),(0,y.jsx)(v,{children:`Quiet buttons`}),(0,y.jsxs)(u,{children:[(0,y.jsx)(i,{label:`Small`,variant:`quiet`}),(0,y.jsx)(i,{label:`Hovered`,variant:`quiet`,"data-testid":`hover`}),(0,y.jsx)(i,{label:`Actived`,variant:`quiet`,"data-testid":`active`}),(0,y.jsx)(i,{label:`Focused`,variant:`quiet`,"data-testid":`focus`})]}),(0,y.jsx)(v,{children:`Composition: Affix`}),(0,y.jsx)(`div`,{className:d(`flex`,`flex-row`,`border-box`,`w-s`),children:(0,y.jsxs)(u,{fullWidth:!0,children:[(0,y.jsx)(i,{label:`Default`}),(0,y.jsx)(f,{placeholder:`Default`}),(0,y.jsx)(c,{label:`Default`,icon:(0,y.jsx)(s,{})})]})}),(0,y.jsx)(`div`,{className:d(`flex`,`flex-row`,`border-box`,`w-s`),children:(0,y.jsxs)(u,{fullWidth:!0,children:[(0,y.jsx)(i,{label:`Default`}),(0,y.jsx)(r.Select,{placeholder:`Default`,children:m}),(0,y.jsx)(c,{label:`Default`,icon:(0,y.jsx)(s,{})})]})}),(0,y.jsx)(`div`,{className:d(`flex`,`flex-row`,`border-box`,`w-s`),children:(0,y.jsxs)(u,{fullWidth:!0,children:[(0,y.jsx)(i,{label:`Default`}),(0,y.jsx)(r.Multi,{placeholder:`colors`,"aria-label":`Color selection`,children:m}),(0,y.jsx)(c,{label:`Default`,icon:(0,y.jsx)(s,{})})]})}),(0,y.jsx)(v,{children:`Split Button`}),(0,y.jsxs)(u,{children:[(0,y.jsx)(i,{variant:`default`,label:`Default`}),(0,y.jsx)(o.Trigger,{placement:`bottom-end`,menu:(0,y.jsx)(o.Item,{label:`foo`}),children:(0,y.jsx)(c,{variant:`default`,label:`Default dropdown`,asDropdown:!0})})]}),(0,y.jsxs)(u,{children:[(0,y.jsx)(i,{variant:`primary`,label:`Default`}),(0,y.jsx)(o.Trigger,{placement:`bottom-end`,menu:(0,y.jsx)(o.Item,{label:`foo`}),children:(0,y.jsx)(c,{variant:`primary`,label:`Default dropdown`,asDropdown:!0})})]}),(0,y.jsxs)(u,{children:[(0,y.jsx)(i,{variant:`secondary`,label:`Default`}),(0,y.jsx)(o.Trigger,{placement:`bottom-end`,menu:(0,y.jsx)(o.Item,{label:`foo`}),children:(0,y.jsx)(c,{variant:`secondary`,label:`Default dropdown`,asDropdown:!0})})]}),(0,y.jsxs)(u,{children:[(0,y.jsx)(i,{variant:`destructive`,label:`Default`}),(0,y.jsx)(o.Trigger,{placement:`bottom-end`,menu:(0,y.jsx)(o.Item,{label:`foo`}),children:(0,y.jsx)(c,{variant:`destructive`,label:`Default dropdown`,asDropdown:!0})})]}),(0,y.jsxs)(u,{children:[(0,y.jsx)(i,{variant:`quiet`,label:`Default`}),(0,y.jsx)(o.Trigger,{placement:`bottom-end`,menu:(0,y.jsx)(o.Item,{label:`foo`}),children:(0,y.jsx)(c,{variant:`quiet`,label:`Default dropdown`,asDropdown:!0})})]}),(0,y.jsx)(v,{children:`Vertical`}),(0,y.jsxs)(u,{orientation:`vertical`,children:[(0,y.jsx)(i,{label:`Default`}),(0,y.jsx)(i,{label:`Hover`,"data-testid":`hover`}),(0,y.jsx)(i,{label:`Active`,"data-testid":`active`}),(0,y.jsx)(i,{label:`Focused`,"data-testid":`focus`})]})]}),parameters:{pseudo:{hover:`[data-testid="hover"]`,active:`[data-testid="active"]`,focusVisible:`[data-testid="focus"]`},controls:{disable:!0}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (props: ButtonGroupProps) => <ButtonGroup {...props}>
      <Button label="Medium" />
      <Button label="Medium" />
      <Button label="Medium" />
    </ButtonGroup>,
  argTypes: ButtonGroupArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "border-box", "gap-m")}>
      <H2>Default buttons</H2>
      <ButtonGroup>
        <Button label="Default" />
        <Button label="Hover" data-testid="hover" />
        <Button label="Active" data-testid="active" />
        <Button label="Focused" data-testid="focus" />
      </ButtonGroup>
      <H2>Small buttons</H2>
      <ButtonGroup>
        <Button label="Small" size="small" />
        <Button label="Hovered" size="small" data-testid="hover" />
        <Button label="Actived" size="small" data-testid="active" />
        <Button label="Focused" size="small" data-testid="focus" />
      </ButtonGroup>
      <H2>Quiet buttons</H2>
      <ButtonGroup>
        <Button label="Small" variant="quiet" />
        <Button label="Hovered" variant="quiet" data-testid="hover" />
        <Button label="Actived" variant="quiet" data-testid="active" />
        <Button label="Focused" variant="quiet" data-testid="focus" />
      </ButtonGroup>
      <H2>Composition: Affix</H2>
      <div className={classNames("flex", "flex-row", "border-box", "w-s")}>
        <ButtonGroup fullWidth>
          <Button label="Default" />
          <TextField placeholder="Default" />
          <IconButton label="Default" icon={<DeleteIcon />} />
        </ButtonGroup>
      </div>
      <div className={classNames("flex", "flex-row", "border-box", "w-s")}>
        <ButtonGroup fullWidth>
          <Button label="Default" />
          <Select.Select placeholder="Default">
            {OPTIONS_WITH_GROUP}
          </Select.Select>
          <IconButton label="Default" icon={<DeleteIcon />} />
        </ButtonGroup>
      </div>
      <div className={classNames("flex", "flex-row", "border-box", "w-s")}>
        <ButtonGroup fullWidth>
          <Button label="Default" />
          <Select.Multi placeholder="colors" aria-label="Color selection">
            {OPTIONS_WITH_GROUP}
          </Select.Multi>

          <IconButton label="Default" icon={<DeleteIcon />} />
        </ButtonGroup>
      </div>
      <H2>Split Button</H2>
      <ButtonGroup>
        <Button variant="default" label="Default" />
        <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
          <IconButton variant="default" label="Default dropdown" asDropdown />
        </Menu.Trigger>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="primary" label="Default" />
        <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
          <IconButton variant="primary" label="Default dropdown" asDropdown />
        </Menu.Trigger>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary" label="Default" />
        <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
          <IconButton variant="secondary" label="Default dropdown" asDropdown />
        </Menu.Trigger>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="destructive" label="Default" />
        <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
          <IconButton variant="destructive" label="Default dropdown" asDropdown />
        </Menu.Trigger>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="quiet" label="Default" />
        <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
          <IconButton variant="quiet" label="Default dropdown" asDropdown />
        </Menu.Trigger>
      </ButtonGroup>
      <H2>Vertical</H2>
      <ButtonGroup orientation="vertical">
        <Button label="Default" />
        <Button label="Hover" data-testid="hover" />
        <Button label="Active" data-testid="active" />
        <Button label="Focused" data-testid="focus" />
      </ButtonGroup>
    </div>,
  parameters: {
    pseudo: {
      hover: '[data-testid="hover"]',
      active: '[data-testid="active"]',
      focusVisible: '[data-testid="focus"]'
    },
    controls: {
      disable: true
    }
  }
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`VisualTest`]}));w();export{x as Playground,S as VisualTest,C as __namedExportsOrder,b as default,w as n,_ as t};