import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Fn as n,G as r,K as i,Pn as a,Q as o,jt as s,lt as c,v as l,wt as u,xt as d,yn as f}from"./iframe-RiXBydPV.js";import{n as p,t as m}from"./SelectTest-DrCQF0Gj.js";var h,g=e((()=>{h={children:{control:!1,description:`The buttons to be rendered inside the ButtonGroup.`,table:{type:{summary:`ReactNode`}}},fullWidth:{control:{type:`boolean`},description:`If true, the button group will take the full width of its container.`,table:{defaultValue:{summary:`false`},type:{summary:`boolean`}}},orientation:{control:{type:`select`},options:[`horizontal`,`vertical`],table:{defaultValue:{summary:`"horizontal"`},type:{summary:`"horizontal" | "vertical"`}}}}})),_=t({Playground:()=>x,VisualTest:()=>S,__namedExportsOrder:()=>C,default:()=>b});function v(e){return(0,y.jsx)(`h2`,{className:a(`flex`,`flex-row`,`border-box`,`font-heading-m`,`text-default`),children:e.children})}var y,b,x,S,C,w=e((()=>{l(),s(),p(),g(),y=n(),b={title:`Components/ButtonGroup`},x={render:e=>(0,y.jsxs)(c,{...e,children:[(0,y.jsx)(u,{label:`Medium`}),(0,y.jsx)(u,{label:`Medium`}),(0,y.jsx)(u,{label:`Medium`})]}),argTypes:h,parameters:{chromatic:{disableSnapshot:!0}}},S={render:()=>(0,y.jsxs)(`div`,{className:a(`flex`,`flex-col`,`border-box`,`gap-m`),children:[(0,y.jsx)(v,{children:`Default buttons`}),(0,y.jsxs)(c,{children:[(0,y.jsx)(u,{label:`Default`}),(0,y.jsx)(u,{label:`Hover`,"data-testid":`hover`}),(0,y.jsx)(u,{label:`Active`,"data-testid":`active`}),(0,y.jsx)(u,{label:`Focused`,"data-testid":`focus`})]}),(0,y.jsx)(v,{children:`Small buttons`}),(0,y.jsxs)(c,{children:[(0,y.jsx)(u,{label:`Small`,size:`small`}),(0,y.jsx)(u,{label:`Hovered`,size:`small`,"data-testid":`hover`}),(0,y.jsx)(u,{label:`Actived`,size:`small`,"data-testid":`active`}),(0,y.jsx)(u,{label:`Focused`,size:`small`,"data-testid":`focus`})]}),(0,y.jsx)(v,{children:`Quiet buttons`}),(0,y.jsxs)(c,{children:[(0,y.jsx)(u,{label:`Small`,variant:`quiet`}),(0,y.jsx)(u,{label:`Hovered`,variant:`quiet`,"data-testid":`hover`}),(0,y.jsx)(u,{label:`Actived`,variant:`quiet`,"data-testid":`active`}),(0,y.jsx)(u,{label:`Focused`,variant:`quiet`,"data-testid":`focus`})]}),(0,y.jsx)(v,{children:`Composition: Affix`}),(0,y.jsx)(`div`,{className:a(`flex`,`flex-row`,`border-box`,`w-s`),children:(0,y.jsxs)(c,{fullWidth:!0,children:[(0,y.jsx)(u,{label:`Default`}),(0,y.jsx)(o,{placeholder:`Default`}),(0,y.jsx)(d,{label:`Default`,icon:(0,y.jsx)(f,{})})]})}),(0,y.jsx)(`div`,{className:a(`flex`,`flex-row`,`border-box`,`w-s`),children:(0,y.jsxs)(c,{fullWidth:!0,children:[(0,y.jsx)(u,{label:`Default`}),(0,y.jsx)(r.Select,{placeholder:`Default`,children:m}),(0,y.jsx)(d,{label:`Default`,icon:(0,y.jsx)(f,{})})]})}),(0,y.jsx)(`div`,{className:a(`flex`,`flex-row`,`border-box`,`w-s`),children:(0,y.jsxs)(c,{fullWidth:!0,children:[(0,y.jsx)(u,{label:`Default`}),(0,y.jsx)(r.Multi,{placeholder:`colors`,"aria-label":`Color selection`,children:m}),(0,y.jsx)(d,{label:`Default`,icon:(0,y.jsx)(f,{})})]})}),(0,y.jsx)(v,{children:`Split Button`}),(0,y.jsxs)(c,{children:[(0,y.jsx)(u,{variant:`default`,label:`Default`}),(0,y.jsx)(i.Trigger,{placement:`bottom-end`,menu:(0,y.jsx)(i.Item,{label:`foo`}),children:(0,y.jsx)(d,{variant:`default`,label:`Default dropdown`,asDropdown:!0})})]}),(0,y.jsxs)(c,{children:[(0,y.jsx)(u,{variant:`primary`,label:`Default`}),(0,y.jsx)(i.Trigger,{placement:`bottom-end`,menu:(0,y.jsx)(i.Item,{label:`foo`}),children:(0,y.jsx)(d,{variant:`primary`,label:`Default dropdown`,asDropdown:!0})})]}),(0,y.jsxs)(c,{children:[(0,y.jsx)(u,{variant:`secondary`,label:`Default`}),(0,y.jsx)(i.Trigger,{placement:`bottom-end`,menu:(0,y.jsx)(i.Item,{label:`foo`}),children:(0,y.jsx)(d,{variant:`secondary`,label:`Default dropdown`,asDropdown:!0})})]}),(0,y.jsxs)(c,{children:[(0,y.jsx)(u,{variant:`destructive`,label:`Default`}),(0,y.jsx)(i.Trigger,{placement:`bottom-end`,menu:(0,y.jsx)(i.Item,{label:`foo`}),children:(0,y.jsx)(d,{variant:`destructive`,label:`Default dropdown`,asDropdown:!0})})]}),(0,y.jsxs)(c,{children:[(0,y.jsx)(u,{variant:`quiet`,label:`Default`}),(0,y.jsx)(i.Trigger,{placement:`bottom-end`,menu:(0,y.jsx)(i.Item,{label:`foo`}),children:(0,y.jsx)(d,{variant:`quiet`,label:`Default dropdown`,asDropdown:!0})})]}),(0,y.jsx)(v,{children:`Vertical`}),(0,y.jsxs)(c,{orientation:`vertical`,children:[(0,y.jsx)(u,{label:`Default`}),(0,y.jsx)(u,{label:`Hover`,"data-testid":`hover`}),(0,y.jsx)(u,{label:`Active`,"data-testid":`active`}),(0,y.jsx)(u,{label:`Focused`,"data-testid":`focus`})]})]}),parameters:{pseudo:{hover:`[data-testid="hover"]`,active:`[data-testid="active"]`,focusVisible:`[data-testid="focus"]`},controls:{disable:!0}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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