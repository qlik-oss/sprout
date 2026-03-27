import{a as e,n as t,r as n}from"./chunk-BneVvdWh.js";import{Fn as r,Pn as i,nr as a,v as o,wt as s,z as c}from"./iframe-RiXBydPV.js";var l=n({Drawer:()=>h,Playground:()=>m,VisualTest:()=>v,__namedExportsOrder:()=>y,default:()=>p});function u({children:e}){return(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`p-s`,`justify-center`,`font-body-m`,`text-default`),children:e})}var d,f,p,m,h,g,_,v,y,b=t((()=>{d=e(a()),o(),f=r(),p={title:`Components/Panel`,component:c.Primitive,argTypes:{resizable:{control:{type:`boolean`}}}},m={args:{},argTypes:{placement:{table:{disable:!0}},overlay:{control:{type:`select`},options:[void 0,!1,!0,`s`,`m`,`l`,`xl`,`xxl`,`2xl`,`3xl`,`4xl`]},"aria-label":{control:{type:`text`}},resizable:{control:{type:`boolean`}},showResizeHandle:{control:{type:`boolean`}},minHeight:{table:{disable:!0}},minWidth:{control:{type:`text`}},maxHeight:{table:{disable:!0}},maxWidth:{control:{type:`text`}},initialSize:{control:{type:`text`}},"data-drawer":{control:{type:`select`},options:[void 0,`closed`,`opened`]}},render:({overlay:e,...t})=>(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`p-l`,`border-default`),style:{inlineSize:`100%`,blockSize:`300px`},children:(0,f.jsxs)(c.Container,{overlay:e,children:[(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`text-default`),children:(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui nec nunc ultricies tincidunt. Nullam`})}),(0,f.jsx)(c.Left,{...t,children:(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`p-s`,`font-body-m`,`text-default`),children:`Panel content`})})]})}),parameters:{layout:`fullscreen`,chromatic:{disableSnapshot:!0}}},h={render:()=>{let[e,t]=(0,d.useState)(`closed`),[n,r]=(0,d.useState)(`closed`);return(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`p-l`,`border-default`),style:{inlineSize:`100%`,blockSize:`300px`},children:(0,f.jsxs)(c.Container,{overlay:!0,children:[(0,f.jsx)(`div`,{className:i(`flex`,`flex-col`,`border-box`,`items-start`,`gap-s`),children:(0,f.jsxs)(`p`,{className:i(`text-default`),children:[`This is a container that can have a drawer.`,` `,(0,f.jsx)(s,{label:`Toggle left drawer`,onClick:()=>{t(e=>e===`closed`?`opened`:`closed`)}}),(0,f.jsx)(s,{label:`Toggle right drawer`,onClick:()=>{r(e=>e===`closed`?`opened`:`closed`)}})]})}),(0,f.jsx)(c.Left,{"data-drawer":e,"aria-label":`Left drawer`,children:(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`p-s`,`font-body-m`,`text-default`),children:`Panel content`})}),(0,f.jsx)(c.Right,{"data-drawer":n,"aria-label":`Right drawer`,children:(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`p-s`,`font-body-m`,`text-default`),children:`Panel content`})})]})})},parameters:{layout:`fullscreen`,controls:{disable:!0},chromatic:{disableSnapshot:!0}}},g=(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`font-body-m`,`text-default`,`p-m`,`overflow-hidden`,`overflow-x-auto`,`overflow-y-auto`),children:`Haec subinde Constantius audiens et quaedam referente Thalassio doctus, quem eum odisse iam conpererat lege communi, scribens ad Caesarem blandius adiumenta paulatim illi subtraxit, sollicitari se simulans ne, uti est militare otium fere tumultuosum, in eius perniciem conspiraret, solisque scholis iussit esse contentum palatinis et protectorum cum Scutariis et Gentilibus, et mandabat Domitiano, ex comite largitionum, praefecto ut cum in Syriam venerit, Gallum, quem crebro acciverat, ad Italiam properare blande hortaretur et verecunde.`}),_=`130px`,v={render:()=>(0,f.jsxs)(`div`,{className:i(`flex`,`flex-col`,`border-box`,`font-body-m`,`text-default`,`p-m`,`gap-s`),style:{inlineSize:`100vw`},children:[(0,f.jsx)(`h2`,{className:i(`font-heading-m`,`text-default`),children:`Panel.Top`}),(0,f.jsxs)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`w-xxl`,`gap-3xl`,`flex-nowrap`,`grow`),style:{blockSize:_},children:[(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,f.jsxs)(c.Container,{children:[g,(0,f.jsx)(c.Top,{children:(0,f.jsx)(u,{children:`top`})})]})}),(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,f.jsxs)(c.Container,{children:[g,(0,f.jsx)(c.Top,{resizable:!0,children:(0,f.jsx)(u,{children:`top resizable`})})]})}),(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,f.jsxs)(c.Container,{overlay:!0,children:[g,(0,f.jsx)(c.Top,{children:(0,f.jsx)(u,{children:`top overlay`})})]})}),(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,f.jsxs)(c.Container,{overlay:!0,children:[g,(0,f.jsx)(c.Top,{resizable:!0,children:(0,f.jsx)(u,{children:`top overlay resizable`})})]})})]}),(0,f.jsx)(`h2`,{className:i(`font-heading-m`,`text-default`),children:`Panel.Left`}),(0,f.jsxs)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`w-xxl`,`gap-3xl`,`flex-nowrap`,`grow`),style:{blockSize:_},children:[(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,f.jsxs)(c.Container,{children:[g,(0,f.jsx)(c.Left,{children:(0,f.jsx)(u,{children:`Left`})})]})}),(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,f.jsxs)(c.Container,{children:[g,(0,f.jsx)(c.Left,{resizable:!0,children:(0,f.jsx)(u,{children:`Left resizable`})})]})}),(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,f.jsxs)(c.Container,{overlay:!0,children:[g,(0,f.jsx)(c.Left,{children:(0,f.jsx)(u,{children:`Left overlay`})})]})}),(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,f.jsxs)(c.Container,{overlay:!0,children:[g,(0,f.jsx)(c.Left,{resizable:!0,children:(0,f.jsx)(u,{children:`Left overlay resizable`})})]})})]}),(0,f.jsx)(`h2`,{className:i(`font-heading-m`,`text-default`),children:`Panel.Bottom`}),(0,f.jsxs)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`w-xxl`,`gap-3xl`,`flex-nowrap`,`grow`),style:{blockSize:_},children:[(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,f.jsxs)(c.Container,{children:[g,(0,f.jsx)(c.Bottom,{children:(0,f.jsx)(u,{children:`Bottom`})})]})}),(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,f.jsxs)(c.Container,{children:[g,(0,f.jsx)(c.Bottom,{resizable:!0,children:(0,f.jsx)(u,{children:`Bottom resizable`})})]})}),(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,f.jsxs)(c.Container,{overlay:!0,children:[g,(0,f.jsx)(c.Bottom,{children:(0,f.jsx)(u,{children:`Bottom overlay`})})]})}),(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,f.jsxs)(c.Container,{overlay:!0,children:[g,(0,f.jsx)(c.Bottom,{resizable:!0,children:(0,f.jsx)(u,{children:`Bottom overlay resizable`})})]})})]}),(0,f.jsx)(`h2`,{className:i(`font-heading-m`,`text-default`),children:`Panel.Right`}),(0,f.jsxs)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`w-xxl`,`gap-3xl`,`flex-nowrap`,`grow`),style:{blockSize:_},children:[(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,f.jsxs)(c.Container,{children:[g,(0,f.jsx)(c.Right,{children:(0,f.jsx)(u,{children:`Right`})})]})}),(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,f.jsxs)(c.Container,{children:[g,(0,f.jsx)(c.Right,{resizable:!0,children:(0,f.jsx)(u,{children:`Right resizable`})})]})}),(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,f.jsxs)(c.Container,{overlay:!0,children:[g,(0,f.jsx)(c.Right,{children:(0,f.jsx)(u,{children:`Right overlay`})})]})}),(0,f.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,f.jsxs)(c.Container,{overlay:!0,children:[g,(0,f.jsx)(c.Right,{resizable:!0,children:(0,f.jsx)(u,{children:`Right overlay resizable`})})]})})]})]}),parameters:{layout:`fullscreen`,controls:{disable:!0}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {},
  argTypes: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    placement: {
      table: {
        disable: true
      }
    },
    overlay: {
      control: {
        type: "select"
      },
      options: [undefined, false, true, "s", "m", "l", "xl", "xxl", "2xl", "3xl", "4xl"]
    },
    "aria-label": {
      control: {
        type: "text"
      }
    },
    resizable: {
      control: {
        type: "boolean"
      }
    },
    showResizeHandle: {
      control: {
        type: "boolean"
      }
    },
    minHeight: {
      table: {
        disable: true
      }
    },
    minWidth: {
      control: {
        type: "text"
      }
    },
    maxHeight: {
      table: {
        disable: true
      }
    },
    maxWidth: {
      control: {
        type: "text"
      }
    },
    initialSize: {
      control: {
        type: "text"
      }
    },
    "data-drawer": {
      control: {
        type: "select"
      },
      options: [undefined, "closed", "opened"]
    }
  },
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
  parameters: {
    layout: "fullscreen",
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`Drawer`,`VisualTest`]}));b();export{h as Drawer,m as Playground,v as VisualTest,y as __namedExportsOrder,p as default,b as n,l as t};