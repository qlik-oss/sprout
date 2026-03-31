import{a as e,n as t,r as n}from"./chunk-BneVvdWh.js";import{In as r,Ln as i,ir as a,v as o,wt as s,z as c}from"./iframe-B0xl5hqz.js";var l,u=t((()=>{l={placement:{control:!1,description:`The side of the container where the panel is attached.`,table:{type:{summary:`'top' | 'left' | 'right' | 'bottom'`}}},resizable:{control:{type:`boolean`},description:`Enables mouse and keyboard resizing.`,table:{defaultValue:{summary:`false`},type:{summary:`boolean`}}},showResizeHandle:{control:{type:`boolean`},description:`When true, displays the resize icon inside the resize button while hovered or focused.`,table:{defaultValue:{summary:`false`},type:{summary:`boolean`}}},overlay:{control:{type:`select`},options:[!1,`s`,`m`,`l`,`xl`,`xxl`,`3xl`,`4xl`],description:`If provided, displays the panel as an overlay with the given size.`,table:{type:{summary:`boolean | 's' | 'm' | 'l' | 'xl' | 'xxl' | '3xl' | '4xl'`}}},onResize:{control:!1,description:`Callback fired after resizing ends.`,table:{type:{summary:`(size: number) => void`}}},minWidth:{control:!1,description:`Minimum width of the panel.`,table:{type:{summary:`number | string`}}},maxWidth:{control:!1,description:`Maximum width of the panel.`,table:{type:{summary:`number | string`}}},minHeight:{control:!1,description:`Minimum height of the panel.`,table:{type:{summary:`number | string`}}},maxHeight:{control:!1,description:`Maximum height of the panel.`,table:{type:{summary:`number | string`}}},initialSize:{control:!1,description:`Initial panel size in pixels.`,table:{type:{summary:`number`}}},children:{control:!1,description:`Content rendered inside the panel.`,table:{type:{summary:`ReactNode`}}}}})),d=n({Drawer:()=>_,Playground:()=>g,VisualTest:()=>b,__namedExportsOrder:()=>x,default:()=>h});function f({children:e}){return(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`p-s`,`justify-center`,`font-body-m`,`text-default`),children:e})}var p,m,h,g,_,v,y,b,x,S=t((()=>{p=e(a()),o(),u(),m=i(),h={title:`Components/Panel`,component:c.Primitive},g={render:({overlay:e,...t})=>(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`p-l`,`border-default`),style:{inlineSize:`100%`,blockSize:`300px`},children:(0,m.jsxs)(c.Container,{overlay:e,children:[(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`text-default`),children:(0,m.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui nec nunc ultricies tincidunt. Nullam`})}),(0,m.jsx)(c.Left,{...t,children:(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`p-s`,`font-body-m`,`text-default`),children:`Panel content`})})]})}),argTypes:l,parameters:{layout:`fullscreen`,chromatic:{disableSnapshot:!0}}},_={render:()=>{let[e,t]=(0,p.useState)(`closed`),[n,i]=(0,p.useState)(`closed`);return(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`p-l`,`border-default`),style:{inlineSize:`100%`,blockSize:`300px`},children:(0,m.jsxs)(c.Container,{overlay:!0,children:[(0,m.jsx)(`div`,{className:r(`flex`,`flex-col`,`border-box`,`items-start`,`gap-s`),children:(0,m.jsxs)(`p`,{className:r(`text-default`),children:[`This is a container that can have a drawer.`,` `,(0,m.jsx)(s,{label:`Toggle left drawer`,onClick:()=>{t(e=>e===`closed`?`opened`:`closed`)}}),(0,m.jsx)(s,{label:`Toggle right drawer`,onClick:()=>{i(e=>e===`closed`?`opened`:`closed`)}})]})}),(0,m.jsx)(c.Left,{"data-drawer":e,"aria-label":`Left drawer`,children:(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`p-s`,`font-body-m`,`text-default`),children:`Panel content`})}),(0,m.jsx)(c.Right,{"data-drawer":n,"aria-label":`Right drawer`,children:(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`p-s`,`font-body-m`,`text-default`),children:`Panel content`})})]})})},parameters:{layout:`fullscreen`,controls:{disable:!0},chromatic:{disableSnapshot:!0}}},v=(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`font-body-m`,`text-default`,`p-m`,`overflow-hidden`,`overflow-x-auto`,`overflow-y-auto`),children:`Haec subinde Constantius audiens et quaedam referente Thalassio doctus, quem eum odisse iam conpererat lege communi, scribens ad Caesarem blandius adiumenta paulatim illi subtraxit, sollicitari se simulans ne, uti est militare otium fere tumultuosum, in eius perniciem conspiraret, solisque scholis iussit esse contentum palatinis et protectorum cum Scutariis et Gentilibus, et mandabat Domitiano, ex comite largitionum, praefecto ut cum in Syriam venerit, Gallum, quem crebro acciverat, ad Italiam properare blande hortaretur et verecunde.`}),y=`130px`,b={render:()=>(0,m.jsxs)(`div`,{className:r(`flex`,`flex-col`,`border-box`,`font-body-m`,`text-default`,`p-m`,`gap-s`),style:{inlineSize:`100vw`},children:[(0,m.jsx)(`h2`,{className:r(`font-heading-m`,`text-default`),children:`Panel.Top`}),(0,m.jsxs)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`w-xxl`,`gap-3xl`,`flex-nowrap`,`grow`),style:{blockSize:y},children:[(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,m.jsxs)(c.Container,{children:[v,(0,m.jsx)(c.Top,{children:(0,m.jsx)(f,{children:`top`})})]})}),(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,m.jsxs)(c.Container,{children:[v,(0,m.jsx)(c.Top,{resizable:!0,children:(0,m.jsx)(f,{children:`top resizable`})})]})}),(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,m.jsxs)(c.Container,{overlay:!0,children:[v,(0,m.jsx)(c.Top,{children:(0,m.jsx)(f,{children:`top overlay`})})]})}),(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,m.jsxs)(c.Container,{overlay:!0,children:[v,(0,m.jsx)(c.Top,{resizable:!0,children:(0,m.jsx)(f,{children:`top overlay resizable`})})]})})]}),(0,m.jsx)(`h2`,{className:r(`font-heading-m`,`text-default`),children:`Panel.Left`}),(0,m.jsxs)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`w-xxl`,`gap-3xl`,`flex-nowrap`,`grow`),style:{blockSize:y},children:[(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,m.jsxs)(c.Container,{children:[v,(0,m.jsx)(c.Left,{children:(0,m.jsx)(f,{children:`Left`})})]})}),(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,m.jsxs)(c.Container,{children:[v,(0,m.jsx)(c.Left,{resizable:!0,children:(0,m.jsx)(f,{children:`Left resizable`})})]})}),(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,m.jsxs)(c.Container,{overlay:!0,children:[v,(0,m.jsx)(c.Left,{children:(0,m.jsx)(f,{children:`Left overlay`})})]})}),(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,m.jsxs)(c.Container,{overlay:!0,children:[v,(0,m.jsx)(c.Left,{resizable:!0,children:(0,m.jsx)(f,{children:`Left overlay resizable`})})]})})]}),(0,m.jsx)(`h2`,{className:r(`font-heading-m`,`text-default`),children:`Panel.Bottom`}),(0,m.jsxs)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`w-xxl`,`gap-3xl`,`flex-nowrap`,`grow`),style:{blockSize:y},children:[(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,m.jsxs)(c.Container,{children:[v,(0,m.jsx)(c.Bottom,{children:(0,m.jsx)(f,{children:`Bottom`})})]})}),(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,m.jsxs)(c.Container,{children:[v,(0,m.jsx)(c.Bottom,{resizable:!0,children:(0,m.jsx)(f,{children:`Bottom resizable`})})]})}),(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,m.jsxs)(c.Container,{overlay:!0,children:[v,(0,m.jsx)(c.Bottom,{children:(0,m.jsx)(f,{children:`Bottom overlay`})})]})}),(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,m.jsxs)(c.Container,{overlay:!0,children:[v,(0,m.jsx)(c.Bottom,{resizable:!0,children:(0,m.jsx)(f,{children:`Bottom overlay resizable`})})]})})]}),(0,m.jsx)(`h2`,{className:r(`font-heading-m`,`text-default`),children:`Panel.Right`}),(0,m.jsxs)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`w-xxl`,`gap-3xl`,`flex-nowrap`,`grow`),style:{blockSize:y},children:[(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,m.jsxs)(c.Container,{children:[v,(0,m.jsx)(c.Right,{children:(0,m.jsx)(f,{children:`Right`})})]})}),(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,m.jsxs)(c.Container,{children:[v,(0,m.jsx)(c.Right,{resizable:!0,children:(0,m.jsx)(f,{children:`Right resizable`})})]})}),(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,m.jsxs)(c.Container,{overlay:!0,children:[v,(0,m.jsx)(c.Right,{children:(0,m.jsx)(f,{children:`Right overlay`})})]})}),(0,m.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,m.jsxs)(c.Container,{overlay:!0,children:[v,(0,m.jsx)(c.Right,{resizable:!0,children:(0,m.jsx)(f,{children:`Right overlay resizable`})})]})})]})]}),parameters:{layout:`fullscreen`,controls:{disable:!0}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: ({
    overlay,
    ...props
  }) => <div className={classNames("flex", "flex-row", "border-box", "p-l", "border-default")} style={{
    inlineSize: "100%",
    blockSize: "300px"
  }}>
      <Panel.Container overlay={overlay}>
        <div className={classNames("flex", "flex-row", "border-box", "text-default")}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            dui nec nunc ultricies tincidunt. Nullam
          </p>
        </div>
        <Panel.Left {...props}>
          <div className={classNames("flex", "flex-row", "border-box", "p-s", "font-body-m", "text-default")}>
            Panel content
          </div>
        </Panel.Left>
      </Panel.Container>
    </div>,
  argTypes: PanelPrimitiveArgTypes,
  parameters: {
    layout: "fullscreen",
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [drawerLeft, setDrawerLeft] = useState<"closed" | "opened">("closed");
    const [drawerRight, setDrawerRight] = useState<"closed" | "opened">("closed");
    return <div className={classNames("flex", "flex-row", "border-box", "p-l", "border-default")} style={{
      inlineSize: "100%",
      blockSize: "300px"
    }}>
        <Panel.Container overlay>
          <div className={classNames("flex", "flex-col", "border-box", "items-start", "gap-s")}>
            <p className={classNames("text-default")}>
              This is a container that can have a drawer.{" "}
              <Button label="Toggle left drawer" onClick={() => {
              setDrawerLeft(prev => prev === "closed" ? "opened" : "closed");
            }} />
              <Button label="Toggle right drawer" onClick={() => {
              setDrawerRight(prev => prev === "closed" ? "opened" : "closed");
            }} />
            </p>
          </div>
          <Panel.Left data-drawer={drawerLeft} aria-label="Left drawer">
            <div className={classNames("flex", "flex-row", "border-box", "p-s", "font-body-m", "text-default")}>
              Panel content
            </div>
          </Panel.Left>
          <Panel.Right data-drawer={drawerRight} aria-label="Right drawer">
            <div className={classNames("flex", "flex-row", "border-box", "p-s", "font-body-m", "text-default")}>
              Panel content
            </div>
          </Panel.Right>
        </Panel.Container>
      </div>;
  },
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true
    },
    chromatic: {
      disableSnapshot: true
    }
  }
}`,..._.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "border-box", "font-body-m", "text-default", "p-m", "gap-s")} style={{
    inlineSize: "100vw"
  }}>
      <h2 className={classNames("font-heading-m", "text-default")}>
        Panel.Top
      </h2>
      <div className={classNames("flex", "flex-row", "border-box", "w-xxl", "gap-3xl", "flex-nowrap", "grow")} style={{
      blockSize: ROW_HEIGHT
    }}>
        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container>
            {CONTENT}
            <Panel.Top>
              <DemoPanelContent>top</DemoPanelContent>
            </Panel.Top>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container>
            {CONTENT}
            <Panel.Top resizable>
              <DemoPanelContent>top resizable</DemoPanelContent>
            </Panel.Top>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container overlay>
            {CONTENT}
            <Panel.Top>
              <DemoPanelContent>top overlay</DemoPanelContent>
            </Panel.Top>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container overlay>
            {CONTENT}
            <Panel.Top resizable>
              <DemoPanelContent>top overlay resizable</DemoPanelContent>
            </Panel.Top>
          </Panel.Container>
        </div>
      </div>

      <h2 className={classNames("font-heading-m", "text-default")}>
        Panel.Left
      </h2>
      <div className={classNames("flex", "flex-row", "border-box", "w-xxl", "gap-3xl", "flex-nowrap", "grow")} style={{
      blockSize: ROW_HEIGHT
    }}>
        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container>
            {CONTENT}
            <Panel.Left>
              <DemoPanelContent>Left</DemoPanelContent>
            </Panel.Left>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container>
            {CONTENT}
            <Panel.Left resizable>
              <DemoPanelContent>Left resizable</DemoPanelContent>
            </Panel.Left>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container overlay>
            {CONTENT}
            <Panel.Left>
              <DemoPanelContent>Left overlay</DemoPanelContent>
            </Panel.Left>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container overlay>
            {CONTENT}
            <Panel.Left resizable>
              <DemoPanelContent>Left overlay resizable</DemoPanelContent>
            </Panel.Left>
          </Panel.Container>
        </div>
      </div>

      <h2 className={classNames("font-heading-m", "text-default")}>
        Panel.Bottom
      </h2>
      <div className={classNames("flex", "flex-row", "border-box", "w-xxl", "gap-3xl", "flex-nowrap", "grow")} style={{
      blockSize: ROW_HEIGHT
    }}>
        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container>
            {CONTENT}
            <Panel.Bottom>
              <DemoPanelContent>Bottom</DemoPanelContent>
            </Panel.Bottom>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container>
            {CONTENT}
            <Panel.Bottom resizable>
              <DemoPanelContent>Bottom resizable</DemoPanelContent>
            </Panel.Bottom>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container overlay>
            {CONTENT}
            <Panel.Bottom>
              <DemoPanelContent>Bottom overlay</DemoPanelContent>
            </Panel.Bottom>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container overlay>
            {CONTENT}
            <Panel.Bottom resizable>
              <DemoPanelContent>Bottom overlay resizable</DemoPanelContent>
            </Panel.Bottom>
          </Panel.Container>
        </div>
      </div>

      <h2 className={classNames("font-heading-m", "text-default")}>
        Panel.Right
      </h2>
      <div className={classNames("flex", "flex-row", "border-box", "w-xxl", "gap-3xl", "flex-nowrap", "grow")} style={{
      blockSize: ROW_HEIGHT
    }}>
        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container>
            {CONTENT}
            <Panel.Right>
              <DemoPanelContent>Right</DemoPanelContent>
            </Panel.Right>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container>
            {CONTENT}
            <Panel.Right resizable>
              <DemoPanelContent>Right resizable</DemoPanelContent>
            </Panel.Right>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container overlay>
            {CONTENT}
            <Panel.Right>
              <DemoPanelContent>Right overlay</DemoPanelContent>
            </Panel.Right>
          </Panel.Container>
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "border-default", "grow")}>
          <Panel.Container overlay>
            {CONTENT}
            <Panel.Right resizable>
              <DemoPanelContent>Right overlay resizable</DemoPanelContent>
            </Panel.Right>
          </Panel.Container>
        </div>
      </div>
    </div>,
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true
    }
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`Drawer`,`VisualTest`]}));S();export{_ as Drawer,g as Playground,b as VisualTest,x as __namedExportsOrder,h as default,S as n,d as t};