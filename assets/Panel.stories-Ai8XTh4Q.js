import{r as x,j as e}from"./iframe-itHhOQJ8.js";import{c as l}from"./classNames-8u_YGv6N.js";import{u as K}from"./useI18n-DI5kaiCu.js";import{R as Z}from"./icons-ByJhQmwX.js";import{B as M}from"./Button-D1L5V1zp.js";const J="_container_1dy96_1",Q="_panel_1dy96_11",$="_panel__left_1dy96_17",ee="_panel__right_1dy96_21",ne="_panel__x_1dy96_25",le="_panel__y_1dy96_36",oe="_panel__top_1dy96_47",re="_panel__bottom_1dy96_51",te="_overlay_1dy96_69",ae="_resize_btn_1dy96_73",se="_overlay_s_1dy96_198",ie="_overlay_m_1dy96_209",de="_overlay_l_1dy96_220",ce="_overlay_xl_1dy96_231",xe="_overlay_xxl_1dy96_242",fe="_overlay_3xl_1dy96_253",me="_overlay_4xl_1dy96_264",t={container:J,panel:Q,panel__left:$,panel__right:ee,panel__x:ne,panel__y:le,panel__top:oe,panel__bottom:re,overlay:te,resize_btn:ae,overlay_s:se,overlay_m:ie,overlay_l:de,overlay_xl:ce,overlay_xxl:xe,overlay_3xl:fe,overlay_4xl:me},N=28,be=10,k={size:0};function p({resizable:r,showResizeHandle:i,onResize:b,placement:o,minHeight:v,maxHeight:A,initialSize:q,minWidth:U,maxWidth:F,children:V,...X}){const Y=K(),[j,R]=x.useState(q),[S,L]=x.useState(!1),u=x.useRef(null),[H,I]=x.useState(!1),D=x.useCallback(d=>{if(d.key==="ArrowRight"||d.key==="ArrowLeft"||d.key==="ArrowUp"||d.key==="ArrowDown"){d.preventDefault();const z=d.key==="ArrowRight"||d.key==="ArrowDown"?1:-1;R(g=>{const h=u.current?.parentElement,y=h.parentElement.getBoundingClientRect(),f=o==="left"||o==="right"?y.width:y.height,W=o==="left"||o==="right"?h.offsetWidth:h.offsetHeight,m=(g||W)+be*z;return m>N&&m<f?m:m>=f?f:m<=N?N:g})}},[o]);return x.useEffect(()=>(H&&u.current?.addEventListener("keydown",D),()=>{u.current?.removeEventListener("keydown",D)}),[H,D]),x.useEffect(()=>{const d=()=>{L(!1),b?.(k.size)},z=g=>{const h=document.dir==="rtl";if(!u.current)return;const w=u.current.getBoundingClientRect(),y=u.current.parentElement,f=y.getBoundingClientRect(),m=y.parentElement.getBoundingClientRect();let E=1;if((h&&o==="left"||!h&&o==="right"||o==="bottom")&&(E=-1),S){if(o==="left"||o==="right"){const B=g.clientX-(w.left+w.right)/2,O=m.width,c=Math.floor(B*E-f.left+f.right);c>N&&c<O&&(k.size=c,R(c))}else if(o==="top"||o==="bottom"){const B=g.clientY-(w.top+w.bottom)/2,O=m.height,c=Math.floor(B*E-f.top+f.bottom);c>N&&c<O&&(k.size=c,R(c))}}};return document.addEventListener("mousemove",z),document.addEventListener("mouseup",d),()=>{document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",d)}},[S,b,o]),e.jsxs("div",{role:"region",className:l("flex","bg-default",t.panel,{[t.panel__top]:o==="top",[t.panel__left]:o==="left",[t.panel__right]:o==="right",[t.panel__bottom]:o==="bottom",[t.panel__x]:o==="top"||o==="bottom",[t.panel__y]:o==="left"||o==="right"}),...X,style:{inlineSize:o==="left"||o==="right"?j:void 0,blockSize:o==="top"||o==="bottom"?j:void 0,minInlineSize:U,minBlockSize:v,maxInlineSize:F,maxBlockSize:A},children:[e.jsx("div",{children:V}),r?e.jsx("button",{className:t.resize_btn,"aria-pressed":S?"true":"false",type:"button",ref:u,"aria-label":Y("panel.action.resize"),onFocus:()=>{I(!0)},onBlur:()=>{I(!1)},onMouseDown:()=>{L(!0)},onMouseUp:()=>{L(!1),j!==void 0&&b?.(j)},children:i?e.jsx(Z,{}):null}):null]})}p.displayName="Panel.Base";function G({children:r,overlay:i,...b}){return e.jsx("div",{className:l(t.container,{[t.overlay]:i===!0,[t.overlay_s]:i==="s",[t.overlay_m]:i==="m",[t.overlay_l]:i==="l",[t.overlay_xl]:i==="xl",[t.overlay_xxl]:i==="xxl",[t.overlay_3xl]:i==="3xl",[t.overlay_4xl]:i==="4xl"}),...b,children:r})}G.displayName="Panel.Container";const n={Container:G,Primitive:p,Left:r=>e.jsx(p,{...r,placement:"left"}),Right:r=>e.jsx(p,{...r,placement:"right"}),Top:r=>e.jsx(p,{...r,placement:"top"}),Bottom:r=>e.jsx(p,{...r,placement:"bottom"})};Object.assign(n.Left,{displayName:"Panel.Left"});Object.assign(n.Right,{displayName:"Panel.Right"});Object.assign(n.Top,{displayName:"Panel.Top"});Object.assign(n.Bottom,{displayName:"Panel.Bottom"});const ue={title:"Components/Panel",component:n.Primitive,argTypes:{resizable:{control:{type:"boolean"}}}},_={args:{},argTypes:{placement:{table:{disable:!0}},overlay:{control:{type:"select"},options:[void 0,!1,!0,"s","m","l","xl","xxl","2xl","3xl","4xl"]},"aria-label":{control:{type:"text"}},resizable:{control:{type:"boolean"}},showResizeHandle:{control:{type:"boolean"}},minHeight:{table:{disable:!0}},minWidth:{control:{type:"text"}},maxHeight:{table:{disable:!0}},maxWidth:{control:{type:"text"}},initialSize:{control:{type:"text"}},"data-drawer":{control:{type:"select"},options:[void 0,"closed","opened"]}},render:({overlay:r,...i})=>e.jsx("div",{className:l("flex","flex-row","border-box","p-l","border-default"),style:{inlineSize:"100%",blockSize:"300px"},children:e.jsxs(n.Container,{overlay:r,children:[e.jsx("div",{className:l("flex","flex-row","border-box","text-default"),children:e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui nec nunc ultricies tincidunt. Nullam"})}),e.jsx(n.Left,{...i,children:e.jsx("div",{className:l("flex","flex-row","border-box","p-s","font-body-m","text-default"),children:"Panel content"})})]})}),parameters:{layout:"fullscreen",chromatic:{disableSnapshot:!0}}},P={render:()=>{const[r,i]=x.useState("closed"),[b,o]=x.useState("closed");return e.jsx("div",{className:l("flex","flex-row","border-box","p-l","border-default"),style:{inlineSize:"100%",blockSize:"300px"},children:e.jsxs(n.Container,{overlay:!0,children:[e.jsx("div",{className:l("flex","flex-col","border-box","items-start","gap-s"),children:e.jsxs("p",{className:l("text-default"),children:["This is a container that can have a drawer."," ",e.jsx(M,{label:"Toggle left drawer",onClick:()=>{i(v=>v==="closed"?"opened":"closed")}}),e.jsx(M,{label:"Toggle right drawer",onClick:()=>{o(v=>v==="closed"?"opened":"closed")}})]})}),e.jsx(n.Left,{"data-drawer":r,"aria-label":"Left drawer",children:e.jsx("div",{className:l("flex","flex-row","border-box","p-s","font-body-m","text-default"),children:"Panel content"})}),e.jsx(n.Right,{"data-drawer":b,"aria-label":"Right drawer",children:e.jsx("div",{className:l("flex","flex-row","border-box","p-s","font-body-m","text-default"),children:"Panel content"})})]})})},parameters:{layout:"fullscreen",controls:{disable:!0},chromatic:{disableSnapshot:!0}}},a=e.jsx("div",{className:l("flex","flex-row","border-box","font-body-m","text-default","p-m","overflow-hidden","overflow-x-auto","overflow-y-auto"),children:"Haec subinde Constantius audiens et quaedam referente Thalassio doctus, quem eum odisse iam conpererat lege communi, scribens ad Caesarem blandius adiumenta paulatim illi subtraxit, sollicitari se simulans ne, uti est militare otium fere tumultuosum, in eius perniciem conspiraret, solisque scholis iussit esse contentum palatinis et protectorum cum Scutariis et Gentilibus, et mandabat Domitiano, ex comite largitionum, praefecto ut cum in Syriam venerit, Gallum, quem crebro acciverat, ad Italiam properare blande hortaretur et verecunde."});function s({children:r}){return e.jsx("div",{className:l("flex","flex-row","border-box","p-s","justify-center","font-body-m","text-default"),children:r})}const T="130px",C={render:()=>e.jsxs("div",{className:l("flex","flex-col","border-box","font-body-m","text-default","p-m","gap-s"),style:{inlineSize:"100vw"},children:[e.jsx("h2",{className:l("font-heading-m","text-default"),children:"Panel.Top"}),e.jsxs("div",{className:l("flex","flex-row","border-box","w-xxl","gap-3xl","flex-nowrap","grow"),style:{blockSize:T},children:[e.jsx("div",{className:l("flex","flex-row","border-box","border-default","grow"),children:e.jsxs(n.Container,{children:[a,e.jsx(n.Top,{children:e.jsx(s,{children:"top"})})]})}),e.jsx("div",{className:l("flex","flex-row","border-box","border-default","grow"),children:e.jsxs(n.Container,{children:[a,e.jsx(n.Top,{resizable:!0,children:e.jsx(s,{children:"top resizable"})})]})}),e.jsx("div",{className:l("flex","flex-row","border-box","border-default","grow"),children:e.jsxs(n.Container,{overlay:!0,children:[a,e.jsx(n.Top,{children:e.jsx(s,{children:"top overlay"})})]})}),e.jsx("div",{className:l("flex","flex-row","border-box","border-default","grow"),children:e.jsxs(n.Container,{overlay:!0,children:[a,e.jsx(n.Top,{resizable:!0,children:e.jsx(s,{children:"top overlay resizable"})})]})})]}),e.jsx("h2",{className:l("font-heading-m","text-default"),children:"Panel.Left"}),e.jsxs("div",{className:l("flex","flex-row","border-box","w-xxl","gap-3xl","flex-nowrap","grow"),style:{blockSize:T},children:[e.jsx("div",{className:l("flex","flex-row","border-box","border-default","grow"),children:e.jsxs(n.Container,{children:[a,e.jsx(n.Left,{children:e.jsx(s,{children:"Left"})})]})}),e.jsx("div",{className:l("flex","flex-row","border-box","border-default","grow"),children:e.jsxs(n.Container,{children:[a,e.jsx(n.Left,{resizable:!0,children:e.jsx(s,{children:"Left resizable"})})]})}),e.jsx("div",{className:l("flex","flex-row","border-box","border-default","grow"),children:e.jsxs(n.Container,{overlay:!0,children:[a,e.jsx(n.Left,{children:e.jsx(s,{children:"Left overlay"})})]})}),e.jsx("div",{className:l("flex","flex-row","border-box","border-default","grow"),children:e.jsxs(n.Container,{overlay:!0,children:[a,e.jsx(n.Left,{resizable:!0,children:e.jsx(s,{children:"Left overlay resizable"})})]})})]}),e.jsx("h2",{className:l("font-heading-m","text-default"),children:"Panel.Bottom"}),e.jsxs("div",{className:l("flex","flex-row","border-box","w-xxl","gap-3xl","flex-nowrap","grow"),style:{blockSize:T},children:[e.jsx("div",{className:l("flex","flex-row","border-box","border-default","grow"),children:e.jsxs(n.Container,{children:[a,e.jsx(n.Bottom,{children:e.jsx(s,{children:"Bottom"})})]})}),e.jsx("div",{className:l("flex","flex-row","border-box","border-default","grow"),children:e.jsxs(n.Container,{children:[a,e.jsx(n.Bottom,{resizable:!0,children:e.jsx(s,{children:"Bottom resizable"})})]})}),e.jsx("div",{className:l("flex","flex-row","border-box","border-default","grow"),children:e.jsxs(n.Container,{overlay:!0,children:[a,e.jsx(n.Bottom,{children:e.jsx(s,{children:"Bottom overlay"})})]})}),e.jsx("div",{className:l("flex","flex-row","border-box","border-default","grow"),children:e.jsxs(n.Container,{overlay:!0,children:[a,e.jsx(n.Bottom,{resizable:!0,children:e.jsx(s,{children:"Bottom overlay resizable"})})]})})]}),e.jsx("h2",{className:l("font-heading-m","text-default"),children:"Panel.Right"}),e.jsxs("div",{className:l("flex","flex-row","border-box","w-xxl","gap-3xl","flex-nowrap","grow"),style:{blockSize:T},children:[e.jsx("div",{className:l("flex","flex-row","border-box","border-default","grow"),children:e.jsxs(n.Container,{children:[a,e.jsx(n.Right,{children:e.jsx(s,{children:"Right"})})]})}),e.jsx("div",{className:l("flex","flex-row","border-box","border-default","grow"),children:e.jsxs(n.Container,{children:[a,e.jsx(n.Right,{resizable:!0,children:e.jsx(s,{children:"Right resizable"})})]})}),e.jsx("div",{className:l("flex","flex-row","border-box","border-default","grow"),children:e.jsxs(n.Container,{overlay:!0,children:[a,e.jsx(n.Right,{children:e.jsx(s,{children:"Right overlay"})})]})}),e.jsx("div",{className:l("flex","flex-row","border-box","border-default","grow"),children:e.jsxs(n.Container,{overlay:!0,children:[a,e.jsx(n.Right,{resizable:!0,children:e.jsx(s,{children:"Right overlay resizable"})})]})})]})]}),parameters:{layout:"fullscreen",controls:{disable:!0}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui nec nunc ultricies tincidunt. Nullam
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
}`,..._.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "border-box", "font-body-m", "text-default", "p-m", "gap-s")} style={{
    inlineSize: "100vw"
  }}>
      <h2 className={classNames("font-heading-m", "text-default")}>Panel.Top</h2>
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

      <h2 className={classNames("font-heading-m", "text-default")}>Panel.Left</h2>
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

      <h2 className={classNames("font-heading-m", "text-default")}>Panel.Bottom</h2>
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

      <h2 className={classNames("font-heading-m", "text-default")}>Panel.Right</h2>
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
}`,...C.parameters?.docs?.source}}};const he=["Playground","Drawer","VisualTest"],Ne=Object.freeze(Object.defineProperty({__proto__:null,Drawer:P,Playground:_,VisualTest:C,__namedExportsOrder:he,default:ue},Symbol.toStringTag,{value:"Module"}));export{_ as P,Ne as S};
