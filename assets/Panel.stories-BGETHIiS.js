import{i as e,n as t}from"./chunk-DseTPa7n.js";import{t as n}from"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as r}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{J as i,Z as a,gn as o,hn as s}from"./iframe-B5xoaqtW.js";var c=r(),l=e(n());function u(e,t){return(0,c.jsx)(`svg`,{...a,ref:t,...e,children:(0,c.jsx)(`path`,{d:`M10 0h1v16h-1zM6 2h1v12H6z`})})}var d=(0,l.forwardRef)(u),f={container:`_container_1dy96_1`,panel:`_panel_1dy96_11`,panel__left:`_panel__left_1dy96_17`,panel__right:`_panel__right_1dy96_21`,panel__x:`_panel__x_1dy96_25`,panel__y:`_panel__y_1dy96_36`,panel__top:`_panel__top_1dy96_47`,panel__bottom:`_panel__bottom_1dy96_51`,overlay:`_overlay_1dy96_69`,resize_btn:`_resize_btn_1dy96_73`,overlay_s:`_overlay_s_1dy96_198`,overlay_m:`_overlay_m_1dy96_209`,overlay_l:`_overlay_l_1dy96_220`,overlay_xl:`_overlay_xl_1dy96_231`,overlay_xxl:`_overlay_xxl_1dy96_242`,overlay_3xl:`_overlay_3xl_1dy96_253`,overlay_4xl:`_overlay_4xl_1dy96_264`},p=28,m=10,h={size:0};function g({resizable:e,showResizeHandle:t,onResize:n,placement:r,minHeight:i,maxHeight:a,initialSize:u,minWidth:g,maxWidth:_,children:v,...y}){let b=o(),[x,S]=(0,l.useState)(u),[C,w]=(0,l.useState)(!1),T=(0,l.useRef)(null),[E,D]=(0,l.useState)(!1),O=(0,l.useCallback)(e=>{if(e.key===`ArrowRight`||e.key===`ArrowLeft`||e.key===`ArrowUp`||e.key===`ArrowDown`){e.preventDefault();let t=e.key===`ArrowRight`||e.key===`ArrowDown`?1:-1;S(e=>{let n=T.current?.parentElement,i=n.parentElement.getBoundingClientRect(),a=r===`left`||r===`right`?i.width:i.height,o=r===`left`||r===`right`?n.offsetWidth:n.offsetHeight,s=(e||o)+m*t;return s>p&&s<a?s:s>=a?a:s<=p?p:e})}},[r]);return(0,l.useEffect)(()=>(E&&T.current?.addEventListener(`keydown`,O),()=>{T.current?.removeEventListener(`keydown`,O)}),[E,O]),(0,l.useEffect)(()=>{let e=()=>{w(!1),n?.(h.size)},t=e=>{let t=document.dir===`rtl`;if(!T.current)return;let n=T.current.getBoundingClientRect(),i=T.current.parentElement,a=i.getBoundingClientRect(),o=i.parentElement.getBoundingClientRect(),s=1;if((t&&r===`left`||!t&&r===`right`||r===`bottom`)&&(s=-1),C){if(r===`left`||r===`right`){let t=e.clientX-(n.left+n.right)/2,r=o.width,i=Math.floor(t*s-a.left+a.right);i>p&&i<r&&(h.size=i,S(i))}else if(r===`top`||r===`bottom`){let t=e.clientY-(n.top+n.bottom)/2,r=o.height,i=Math.floor(t*s-a.top+a.bottom);i>p&&i<r&&(h.size=i,S(i))}}};return document.addEventListener(`mousemove`,t),document.addEventListener(`mouseup`,e),()=>{document.removeEventListener(`mousemove`,t),document.removeEventListener(`mouseup`,e)}},[C,n,r]),(0,c.jsxs)(`div`,{role:`region`,className:s(`flex`,`bg-default`,f.panel,{[f.panel__top]:r===`top`,[f.panel__left]:r===`left`,[f.panel__right]:r===`right`,[f.panel__bottom]:r===`bottom`,[f.panel__x]:r===`top`||r===`bottom`,[f.panel__y]:r===`left`||r===`right`}),...y,style:{inlineSize:r===`left`||r===`right`?x:void 0,blockSize:r===`top`||r===`bottom`?x:void 0,minInlineSize:g,minBlockSize:i,maxInlineSize:_,maxBlockSize:a},children:[(0,c.jsx)(`div`,{children:v}),e?(0,c.jsx)(`button`,{className:f.resize_btn,"aria-pressed":C?`true`:`false`,type:`button`,ref:T,"aria-label":b(`panel.action.resize`),onFocus:()=>{D(!0)},onBlur:()=>{D(!1)},onMouseDown:()=>{w(!0)},onMouseUp:()=>{w(!1),x!==void 0&&n?.(x)},children:t?(0,c.jsx)(d,{}):null}):null]})}g.displayName=`Panel.Base`;function _({children:e,overlay:t,...n}){return(0,c.jsx)(`div`,{className:s(f.container,{[f.overlay]:t===!0,[f.overlay_s]:t===`s`,[f.overlay_m]:t===`m`,[f.overlay_l]:t===`l`,[f.overlay_xl]:t===`xl`,[f.overlay_xxl]:t===`xxl`,[f.overlay_3xl]:t===`3xl`,[f.overlay_4xl]:t===`4xl`}),...n,children:e})}_.displayName=`Panel.Container`;var v={Container:_,Primitive:g,Left:e=>(0,c.jsx)(g,{...e,placement:`left`}),Right:e=>(0,c.jsx)(g,{...e,placement:`right`}),Top:e=>(0,c.jsx)(g,{...e,placement:`top`}),Bottom:e=>(0,c.jsx)(g,{...e,placement:`bottom`})};Object.assign(v.Left,{displayName:`Panel.Left`}),Object.assign(v.Right,{displayName:`Panel.Right`}),Object.assign(v.Top,{displayName:`Panel.Top`}),Object.assign(v.Bottom,{displayName:`Panel.Bottom`});var y=t({Drawer:()=>S,Playground:()=>x,VisualTest:()=>E,__namedExportsOrder:()=>D,default:()=>b}),b={title:`Components/Panel`,component:v.Primitive,argTypes:{resizable:{control:{type:`boolean`}}}},x={args:{},argTypes:{placement:{table:{disable:!0}},overlay:{control:{type:`select`},options:[void 0,!1,!0,`s`,`m`,`l`,`xl`,`xxl`,`2xl`,`3xl`,`4xl`]},"aria-label":{control:{type:`text`}},resizable:{control:{type:`boolean`}},showResizeHandle:{control:{type:`boolean`}},minHeight:{table:{disable:!0}},minWidth:{control:{type:`text`}},maxHeight:{table:{disable:!0}},maxWidth:{control:{type:`text`}},initialSize:{control:{type:`text`}},"data-drawer":{control:{type:`select`},options:[void 0,`closed`,`opened`]}},render:({overlay:e,...t})=>(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`p-l`,`border-default`),style:{inlineSize:`100%`,blockSize:`300px`},children:(0,c.jsxs)(v.Container,{overlay:e,children:[(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`text-default`),children:(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui nec nunc ultricies tincidunt. Nullam`})}),(0,c.jsx)(v.Left,{...t,children:(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`p-s`,`font-body-m`,`text-default`),children:`Panel content`})})]})}),parameters:{layout:`fullscreen`,chromatic:{disableSnapshot:!0}}},S={render:()=>{let[e,t]=(0,l.useState)(`closed`),[n,r]=(0,l.useState)(`closed`);return(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`p-l`,`border-default`),style:{inlineSize:`100%`,blockSize:`300px`},children:(0,c.jsxs)(v.Container,{overlay:!0,children:[(0,c.jsx)(`div`,{className:s(`flex`,`flex-col`,`border-box`,`items-start`,`gap-s`),children:(0,c.jsxs)(`p`,{className:s(`text-default`),children:[`This is a container that can have a drawer.`,` `,(0,c.jsx)(i,{label:`Toggle left drawer`,onClick:()=>{t(e=>e===`closed`?`opened`:`closed`)}}),(0,c.jsx)(i,{label:`Toggle right drawer`,onClick:()=>{r(e=>e===`closed`?`opened`:`closed`)}})]})}),(0,c.jsx)(v.Left,{"data-drawer":e,"aria-label":`Left drawer`,children:(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`p-s`,`font-body-m`,`text-default`),children:`Panel content`})}),(0,c.jsx)(v.Right,{"data-drawer":n,"aria-label":`Right drawer`,children:(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`p-s`,`font-body-m`,`text-default`),children:`Panel content`})})]})})},parameters:{layout:`fullscreen`,controls:{disable:!0},chromatic:{disableSnapshot:!0}}},C=(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`font-body-m`,`text-default`,`p-m`,`overflow-hidden`,`overflow-x-auto`,`overflow-y-auto`),children:`Haec subinde Constantius audiens et quaedam referente Thalassio doctus, quem eum odisse iam conpererat lege communi, scribens ad Caesarem blandius adiumenta paulatim illi subtraxit, sollicitari se simulans ne, uti est militare otium fere tumultuosum, in eius perniciem conspiraret, solisque scholis iussit esse contentum palatinis et protectorum cum Scutariis et Gentilibus, et mandabat Domitiano, ex comite largitionum, praefecto ut cum in Syriam venerit, Gallum, quem crebro acciverat, ad Italiam properare blande hortaretur et verecunde.`});function w({children:e}){return(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`p-s`,`justify-center`,`font-body-m`,`text-default`),children:e})}var T=`130px`,E={render:()=>(0,c.jsxs)(`div`,{className:s(`flex`,`flex-col`,`border-box`,`font-body-m`,`text-default`,`p-m`,`gap-s`),style:{inlineSize:`100vw`},children:[(0,c.jsx)(`h2`,{className:s(`font-heading-m`,`text-default`),children:`Panel.Top`}),(0,c.jsxs)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`w-xxl`,`gap-3xl`,`flex-nowrap`,`grow`),style:{blockSize:T},children:[(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,c.jsxs)(v.Container,{children:[C,(0,c.jsx)(v.Top,{children:(0,c.jsx)(w,{children:`top`})})]})}),(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,c.jsxs)(v.Container,{children:[C,(0,c.jsx)(v.Top,{resizable:!0,children:(0,c.jsx)(w,{children:`top resizable`})})]})}),(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,c.jsxs)(v.Container,{overlay:!0,children:[C,(0,c.jsx)(v.Top,{children:(0,c.jsx)(w,{children:`top overlay`})})]})}),(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,c.jsxs)(v.Container,{overlay:!0,children:[C,(0,c.jsx)(v.Top,{resizable:!0,children:(0,c.jsx)(w,{children:`top overlay resizable`})})]})})]}),(0,c.jsx)(`h2`,{className:s(`font-heading-m`,`text-default`),children:`Panel.Left`}),(0,c.jsxs)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`w-xxl`,`gap-3xl`,`flex-nowrap`,`grow`),style:{blockSize:T},children:[(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,c.jsxs)(v.Container,{children:[C,(0,c.jsx)(v.Left,{children:(0,c.jsx)(w,{children:`Left`})})]})}),(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,c.jsxs)(v.Container,{children:[C,(0,c.jsx)(v.Left,{resizable:!0,children:(0,c.jsx)(w,{children:`Left resizable`})})]})}),(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,c.jsxs)(v.Container,{overlay:!0,children:[C,(0,c.jsx)(v.Left,{children:(0,c.jsx)(w,{children:`Left overlay`})})]})}),(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,c.jsxs)(v.Container,{overlay:!0,children:[C,(0,c.jsx)(v.Left,{resizable:!0,children:(0,c.jsx)(w,{children:`Left overlay resizable`})})]})})]}),(0,c.jsx)(`h2`,{className:s(`font-heading-m`,`text-default`),children:`Panel.Bottom`}),(0,c.jsxs)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`w-xxl`,`gap-3xl`,`flex-nowrap`,`grow`),style:{blockSize:T},children:[(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,c.jsxs)(v.Container,{children:[C,(0,c.jsx)(v.Bottom,{children:(0,c.jsx)(w,{children:`Bottom`})})]})}),(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,c.jsxs)(v.Container,{children:[C,(0,c.jsx)(v.Bottom,{resizable:!0,children:(0,c.jsx)(w,{children:`Bottom resizable`})})]})}),(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,c.jsxs)(v.Container,{overlay:!0,children:[C,(0,c.jsx)(v.Bottom,{children:(0,c.jsx)(w,{children:`Bottom overlay`})})]})}),(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,c.jsxs)(v.Container,{overlay:!0,children:[C,(0,c.jsx)(v.Bottom,{resizable:!0,children:(0,c.jsx)(w,{children:`Bottom overlay resizable`})})]})})]}),(0,c.jsx)(`h2`,{className:s(`font-heading-m`,`text-default`),children:`Panel.Right`}),(0,c.jsxs)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`w-xxl`,`gap-3xl`,`flex-nowrap`,`grow`),style:{blockSize:T},children:[(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,c.jsxs)(v.Container,{children:[C,(0,c.jsx)(v.Right,{children:(0,c.jsx)(w,{children:`Right`})})]})}),(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,c.jsxs)(v.Container,{children:[C,(0,c.jsx)(v.Right,{resizable:!0,children:(0,c.jsx)(w,{children:`Right resizable`})})]})}),(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,c.jsxs)(v.Container,{overlay:!0,children:[C,(0,c.jsx)(v.Right,{children:(0,c.jsx)(w,{children:`Right overlay`})})]})}),(0,c.jsx)(`div`,{className:s(`flex`,`flex-row`,`border-box`,`border-default`,`grow`),children:(0,c.jsxs)(v.Container,{overlay:!0,children:[C,(0,c.jsx)(v.Right,{resizable:!0,children:(0,c.jsx)(w,{children:`Right overlay resizable`})})]})})]})]}),parameters:{layout:`fullscreen`,controls:{disable:!0}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};var D=[`Playground`,`Drawer`,`VisualTest`];export{S as Drawer,x as Playground,E as VisualTest,D as __namedExportsOrder,b as default,y as t};