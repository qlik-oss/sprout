import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{$ as n,$r as r,Pt as i,cn as a,ft as o,ki as s,nn as c,t as l,tt as u,xn as d}from"./sprout-react-KA55n9ke.js";import{t as f}from"./jsx-runtime-Bq1bXGty.js";import{n as p,t as m}from"./SelectTest-D5tMuEya.js";var h,g=e((()=>{h={children:{control:!1,description:`The buttons to be rendered inside the ButtonGroup.`,table:{type:{summary:`ReactNode`}}},fullWidth:{control:{type:`boolean`},description:`If true, the button group will take the full width of its container.`,table:{defaultValue:{summary:`false`},type:{summary:`boolean`}}},orientation:{control:{type:`select`},options:[`horizontal`,`vertical`],table:{defaultValue:{summary:`"horizontal"`},type:{summary:`"horizontal" | "vertical"`}}}}})),_=t({Playground:()=>x,VisualTest:()=>S,__namedExportsOrder:()=>C,default:()=>b});function v(e){return(0,y.jsx)(`h2`,{className:s(`flex`,`flex-row`,`border-box`,`font-heading-m`,`text-default`),children:e.children})}var y,b,x,S,C,w=e((()=>{l(),d(),p(),g(),y=f(),b={title:`Components/ButtonGroup`},x={render:e=>(0,y.jsxs)(i,{...e,children:[(0,y.jsx)(a,{label:`Medium`}),(0,y.jsx)(a,{label:`Medium`}),(0,y.jsx)(a,{label:`Medium`})]}),argTypes:h,parameters:{chromatic:{disableSnapshot:!0}}},S={render:()=>(0,y.jsxs)(`div`,{className:s(`flex`,`flex-col`,`border-box`,`gap-m`),children:[(0,y.jsx)(v,{children:`Default buttons`}),(0,y.jsxs)(i,{children:[(0,y.jsx)(a,{label:`Default`}),(0,y.jsx)(a,{label:`Hover`,"data-testid":`hover`}),(0,y.jsx)(a,{label:`Active`,"data-testid":`active`}),(0,y.jsx)(a,{label:`Focused`,"data-testid":`focus`})]}),(0,y.jsx)(v,{children:`Small buttons`}),(0,y.jsxs)(i,{children:[(0,y.jsx)(a,{label:`Small`,size:`small`}),(0,y.jsx)(a,{label:`Hovered`,size:`small`,"data-testid":`hover`}),(0,y.jsx)(a,{label:`Actived`,size:`small`,"data-testid":`active`}),(0,y.jsx)(a,{label:`Focused`,size:`small`,"data-testid":`focus`})]}),(0,y.jsx)(v,{children:`Quiet buttons`}),(0,y.jsxs)(i,{children:[(0,y.jsx)(a,{label:`Small`,variant:`quiet`}),(0,y.jsx)(a,{label:`Hovered`,variant:`quiet`,"data-testid":`hover`}),(0,y.jsx)(a,{label:`Actived`,variant:`quiet`,"data-testid":`active`}),(0,y.jsx)(a,{label:`Focused`,variant:`quiet`,"data-testid":`focus`})]}),(0,y.jsx)(v,{children:`Composition: Affix`}),(0,y.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`w-s`),children:(0,y.jsxs)(i,{fullWidth:!0,children:[(0,y.jsx)(a,{label:`Default`}),(0,y.jsx)(o,{placeholder:`Default`}),(0,y.jsx)(c,{label:`Default`,icon:(0,y.jsx)(r,{})})]})}),(0,y.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`w-s`),children:(0,y.jsxs)(i,{fullWidth:!0,children:[(0,y.jsx)(a,{label:`Default`}),(0,y.jsx)(n.Select,{placeholder:`Default`,children:m}),(0,y.jsx)(c,{label:`Default`,icon:(0,y.jsx)(r,{})})]})}),(0,y.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`w-s`),children:(0,y.jsxs)(i,{fullWidth:!0,children:[(0,y.jsx)(a,{label:`Default`}),(0,y.jsx)(n.Multi,{placeholder:`colors`,"aria-label":`Color selection`,children:m}),(0,y.jsx)(c,{label:`Default`,icon:(0,y.jsx)(r,{})})]})}),(0,y.jsx)(v,{children:`Split Button`}),(0,y.jsxs)(i,{children:[(0,y.jsx)(a,{variant:`default`,label:`Default`}),(0,y.jsx)(u.Trigger,{placement:`bottom-end`,menu:(0,y.jsx)(u.Item,{label:`foo`}),children:(0,y.jsx)(c,{variant:`default`,label:`Default dropdown`,asDropdown:!0})})]}),(0,y.jsxs)(i,{children:[(0,y.jsx)(a,{variant:`primary`,label:`Default`}),(0,y.jsx)(u.Trigger,{placement:`bottom-end`,menu:(0,y.jsx)(u.Item,{label:`foo`}),children:(0,y.jsx)(c,{variant:`primary`,label:`Default dropdown`,asDropdown:!0})})]}),(0,y.jsxs)(i,{children:[(0,y.jsx)(a,{variant:`secondary`,label:`Default`}),(0,y.jsx)(u.Trigger,{placement:`bottom-end`,menu:(0,y.jsx)(u.Item,{label:`foo`}),children:(0,y.jsx)(c,{variant:`secondary`,label:`Default dropdown`,asDropdown:!0})})]}),(0,y.jsxs)(i,{children:[(0,y.jsx)(a,{variant:`destructive`,label:`Default`}),(0,y.jsx)(u.Trigger,{placement:`bottom-end`,menu:(0,y.jsx)(u.Item,{label:`foo`}),children:(0,y.jsx)(c,{variant:`destructive`,label:`Default dropdown`,asDropdown:!0})})]}),(0,y.jsxs)(i,{children:[(0,y.jsx)(a,{variant:`quiet`,label:`Default`}),(0,y.jsx)(u.Trigger,{placement:`bottom-end`,menu:(0,y.jsx)(u.Item,{label:`foo`}),children:(0,y.jsx)(c,{variant:`quiet`,label:`Default dropdown`,asDropdown:!0})})]}),(0,y.jsx)(v,{children:`Vertical`}),(0,y.jsxs)(i,{orientation:`vertical`,children:[(0,y.jsx)(a,{label:`Default`}),(0,y.jsx)(a,{label:`Hover`,"data-testid":`hover`}),(0,y.jsx)(a,{label:`Active`,"data-testid":`active`}),(0,y.jsx)(a,{label:`Focused`,"data-testid":`focus`})]})]}),parameters:{pseudo:{hover:`[data-testid="hover"]`,active:`[data-testid="active"]`,focusVisible:`[data-testid="focus"]`},controls:{disable:!0}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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