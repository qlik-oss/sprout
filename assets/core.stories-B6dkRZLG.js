import{r,j as e}from"./iframe-B4-nXs83.js";import{s}from"./sprout-SOoz1jzb.js";import{F as g,a as h}from"./Next-BDMe8uha.js";import{I as l}from"./Content-e9hFGfMP.js";import{B as v}from"./Button-Cv6yFaKa.js";import{c as d}from"./classNames-eIMwhIDK.js";import"./preload-helper-PPVm8Dsz.js";import"./icons-DuVV-LnW.js";import"./Button.module-C2ELNEem.js";import"./Badge-DvRPOsa9.js";import"./Tooltip-BmEIvhna.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CKYJ27w7.js";import"./useId-D71ehFqY.js";import"./ProgressCircular-CVxkPa9h.js";import"./useI18n-peGtGOOS.js";const N={get:{control:!1,description:"Gets the data structure you want based on viewport sizes. It's a generic method so you need to specify the type when calling it.",table:{type:{summary:"({ s, m, l, xl }: Partial<Record<ViewportSize, T>>) => T | undefined"}}},classNames:{control:!1,description:"An extension of sprout.classNames to support viewport based classNames.",table:{type:{summary:"(options: ViewportOptions<AllClasses[] | AllClasses>, className?: string) => string"}}},addListener:{description:"Integrates sprout.media with your framework reactivity system. It's based on the native matchMedia API.",table:{type:{summary:"(viewportSize: ViewportSize) => void"}}},removeListeners:{description:"Removes all listeners added with addListener.",table:{type:{summary:"() => void"}}},getViewportSize:{control:!1,description:"Returns the current viewport size based on the system definition of it.",table:{type:{summary:"() => ViewportSize"}}}},w=s.media.getViewportSize(),W={title:"CSS/sprout-css-modules/core"},p={name:"responsive / media",parameters:{controls:!1,layout:"fullscreen"},argTypes:N,render:(t,n)=>{const[m,a]=r.useState(w);return r.useEffect(()=>(s.media.addListener(a),()=>{s.media.removeListeners()}),[n]),e.jsx("div",{className:s.classNames("border-box","p-m"),children:e.jsxs("div",{className:s.media.classNames({s:"gap-xl",m:"gap-xl",l:"gap-xxl",xl:"gap-3xl"},s.classNames("grid","grid-cols-16")),children:[e.jsx("div",{className:s.media.classNames({s:["col-start-1","col-span-3"],m:["col-start-2","col-span-3"],l:["col-start-3","col-span-3"],xl:["col-start-4","col-span-3"]}),children:e.jsx(l,{children:s.media.get({s:["col-start-1","col-span-3"].join(", "),m:["col-start-2","col-span-3"].join(", "),l:["col-start-3","col-span-3"].join(", "),xl:["col-start-4","col-span-3"].join(", ")})})}),e.jsx("div",{className:s.classNames("col-start-14","col-end-16"),children:e.jsx(l,{children:"end"})}),e.jsx("div",{className:s.media.classNames({s:["col-span-8"],m:["col-span-4"]}),children:e.jsx(l,{children:"s=8 m=4"})}),e.jsx("div",{className:s.media.classNames({s:["col-span-8"],m:["col-span-4"]}),children:e.jsx(l,{children:"s=8 m=4"})}),e.jsx("div",{className:s.media.classNames({s:["col-span-16"],m:["col-span-8"]}),children:e.jsx(l,{children:"s=16 m=8"})}),e.jsx("div",{className:s.classNames("col-span-16"),...s.media.get({s:{"data-viewport":"s"}}),children:e.jsxs(l,{children:['sprout.media.get can return anything even object / props {data-viewport="',s.media.getViewportSize(),'" } !']})})]})})}},x={name:"createContainer",parameters:{controls:!1,chromatic:{modes:{breakpoint_xxs:{viewport:"mobile1"},breakpoint_xs:{viewport:"mobile2"},breakpoint_m:{viewport:"tablet"}}}},render:()=>{const t=r.useRef(null),[n,m]=r.useState("xxs"),a=r.useRef(null),o=r.useMemo(()=>s.createContainer(n,t.current),[n]);return r.useEffect(()=>{const c=s.widthObserver(()=>t.current,{boxSizing:"border-box",onResize:i=>{if(typeof i>"u")return;const f=o.match(i);a.current!==f&&(a.current=f,m(f))}});return c.observe(),()=>{c.disconnect()}},[o]),e.jsxs("div",{className:s.classNames("flex","border-box","flex-col","gap-m","w-full"),children:[e.jsxs("p",{className:s.classNames("font-body-s","text-default"),children:["This example changes alignment and layout based on the element’s own width using ",e.jsx("code",{children:"widthObserver"})," ","together with ",e.jsx("code",{children:"createContainer"})," and ",e.jsx("code",{children:"get"}),". Drag the handle to resize or change the viewport size."]}),e.jsxs("div",{ref:t,className:s.classNames("border-box","border-default","p-m","w-full"),style:{resize:"horizontal",overflow:"auto"},children:[e.jsx("div",{className:s.classNames("border-box","p-m"),children:e.jsx(v,{label:`Button - ${o.get({xs:"justified: true",m:"justified: false"})}`,justified:o.get({xxs:!0,m:!1})})}),e.jsx("div",{className:o.classNames({xxs:["grid-cols-1","gap-s"],xs:["grid-cols-2","gap-s"],s:["grid-cols-3","gap-m"],m:["grid-cols-4","gap-m"],l:["grid-cols-5","gap-l"],xl:["grid-cols-6","gap-l"],xxl:["grid-cols-7","gap-xl"],"3xl":["grid-cols-8","gap-xl"],"4xl":["grid-cols-9","gap-xl"]},s.classNames("grid","border-box","p-m")),children:Array.from({length:9}).map((c,i)=>e.jsxs("div",{className:s.classNames("border-default","p-s","items-center","justify-center","flex"),children:["Item ",i+1]},i))})]})]})}},u={name:"widthObserver",parameters:{controls:!1},render:()=>{const t=r.useRef(null),[n,m]=r.useState(void 0),[a,o]=r.useState("content-box");return r.useEffect(()=>{const c=s.widthObserver(()=>t.current,{boxSizing:a,onResize:i=>{m(i)}});return c.observe(),()=>{c.disconnect()}},[a]),e.jsxs("div",{className:s.classNames("flex","border-box","flex-col","gap-m","w-full"),style:{alignItems:"flex-start"},children:[e.jsxs("p",{className:s.classNames("font-body-s","text-default"),children:["Resize the element horizontally, its own width (not the viewport) is observed via ",e.jsx("code",{children:"ResizeObserver"}),"."]}),e.jsx(v,{label:a==="border-box"?"Switch to content-box":"Switch to border-box",onClick:()=>{o(a==="border-box"?"content-box":"border-box")}}),e.jsxs("div",{ref:t,className:s.classNames("border-default","bg-default","p-m","w-m"),style:{resize:"horizontal",overflow:"auto"},children:[e.jsxs(l,{children:["width: ",typeof n=="number"?`${Math.round(n)}px`:"—"]}),e.jsxs("div",{className:s.classNames("font-label-s","text-default","pt-s"),children:["box: ",a]})]})]})}},z=[{dir:"ltr",styles:["rtl_rotate_y_180"]},{dir:"rtl",styles:["rtl_rotate_y_180"]}],b={name:"rtl",parameters:{controls:!1},render:()=>e.jsx("div",{className:s.classNames("flex","flex-col","bg-default","text-default","gap-3xl","w-m","p-m"),children:z.map(({dir:t,styles:n})=>e.jsxs("div",{dir:t,className:d("flex","flex-col","border-box","border-default","p-m","gap-m"),children:[e.jsxs("span",{children:[t," ",n.join(" ")]}),e.jsxs("div",{className:d("flex","flex-row","border-box","gap-m"),children:[e.jsx(g,{className:d(...n)})," NextIcon"]}),e.jsxs("div",{className:d("flex","flex-row","border-box","gap-m"),children:[e.jsx(h,{className:d(...n)}),"AlignLeftIcon"]})]},t))})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "responsive / media",
  parameters: {
    controls: false,
    layout: "fullscreen"
  },
  argTypes: SproutMediaArgTypes,
  render: (props: unknown, context: StoryContext) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [viewportSize, setViewportSize] = useState(INITIAL_VIEWPORT);
    useEffect(() => {
      sprout.media.addListener(setViewportSize);
      return () => {
        sprout.media.removeListeners();
      };
    }, [context]);
    return <div className={sprout.classNames("border-box", "p-m")}>
        <div className={sprout.media.classNames({
        s: "gap-xl",
        m: "gap-xl",
        l: "gap-xxl",
        xl: "gap-3xl"
      }, sprout.classNames("grid", "grid-cols-16"))}>
          <div className={sprout.media.classNames({
          s: ["col-start-1", "col-span-3"],
          m: ["col-start-2", "col-span-3"],
          l: ["col-start-3", "col-span-3"],
          xl: ["col-start-4", "col-span-3"]
        })}>
            <Item>
              {sprout.media.get({
              s: ["col-start-1", "col-span-3"].join(", "),
              m: ["col-start-2", "col-span-3"].join(", "),
              l: ["col-start-3", "col-span-3"].join(", "),
              xl: ["col-start-4", "col-span-3"].join(", ")
            })}
            </Item>
          </div>
          <div className={sprout.classNames("col-start-14", "col-end-16")}>
            <Item>end</Item>
          </div>
          <div className={sprout.media.classNames({
          s: ["col-span-8"],
          m: ["col-span-4"]
        })}>
            <Item>s=8 m=4</Item>
          </div>
          <div className={sprout.media.classNames({
          s: ["col-span-8"],
          m: ["col-span-4"]
        })}>
            <Item>s=8 m=4</Item>
          </div>
          <div className={sprout.media.classNames({
          s: ["col-span-16"],
          m: ["col-span-8"]
        })}>
            <Item>s=16 m=8</Item>
          </div>
          <div className={sprout.classNames("col-span-16")} {...sprout.media.get<{
          "data-viewport": string;
        }>({
          s: {
            "data-viewport": "s"
          }
        })}>
            <Item>
              sprout.media.get can return anything even object / props &#123;data-viewport=&quot;
              {sprout.media.getViewportSize()}&quot; &#125; !
            </Item>
          </div>
        </div>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "createContainer",
  parameters: {
    controls: false,
    chromatic: {
      modes: {
        breakpoint_xxs: {
          viewport: "mobile1"
        },
        breakpoint_xs: {
          viewport: "mobile2"
        },
        breakpoint_m: {
          viewport: "tablet"
        }
      }
    }
  },
  render: () => {
    const ref = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState<ContainerSize>("xxs");
    const prevSize = useRef<string | null>(null);
    const container = useMemo(() => sprout.createContainer(size, ref.current), [size]);
    useEffect(() => {
      // box defaults to "content-box" in \`sprout.widthObserver\`
      const observer = sprout.widthObserver(() => ref.current, {
        boxSizing: "border-box",
        onResize: newWidth => {
          if (typeof newWidth === "undefined") return;
          const nextSize = container.match(newWidth);
          if (prevSize.current !== nextSize) {
            prevSize.current = nextSize;
            setSize(nextSize);
          }
        }
      });
      observer.observe();
      return () => {
        observer.disconnect();
      };
    }, [container]);
    return <div className={sprout.classNames("flex", "border-box", "flex-col", "gap-m", "w-full")}>
        <p className={sprout.classNames("font-body-s", "text-default")}>
          This example changes alignment and layout based on the element’s own width using <code>widthObserver</code>{" "}
          together with <code>createContainer</code> and <code>get</code>. Drag the handle to resize or change the
          viewport size.
        </p>
        <div ref={ref} className={sprout.classNames("border-box", "border-default", "p-m", "w-full")} style={{
        resize: "horizontal",
        overflow: "auto"
      }}>
          <div className={sprout.classNames("border-box", "p-m")}>
            <Button label={\`Button - \${container.get<string>({
            xs: "justified: true",
            m: "justified: false"
          })}\`} justified={container.get<boolean>({
            xxs: true,
            m: false
          })} />
          </div>

          <div className={container.classNames({
          xxs: ["grid-cols-1", "gap-s"],
          xs: ["grid-cols-2", "gap-s"],
          s: ["grid-cols-3", "gap-m"],
          m: ["grid-cols-4", "gap-m"],
          l: ["grid-cols-5", "gap-l"],
          xl: ["grid-cols-6", "gap-l"],
          xxl: ["grid-cols-7", "gap-xl"],
          "3xl": ["grid-cols-8", "gap-xl"],
          "4xl": ["grid-cols-9", "gap-xl"]
        }, sprout.classNames("grid", "border-box", "p-m"))}>
            {Array.from({
            length: 9
          }).map((_, i) => <div key={i} className={sprout.classNames("border-default", "p-s", "items-center", "justify-center", "flex")}>
                Item {i + 1}
              </div>)}
          </div>
        </div>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "widthObserver",
  parameters: {
    controls: false
  },
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<number | undefined>(undefined);
    const [boxSizing, setBoxSizing] = useState<BoxSizing>("content-box");
    useEffect(() => {
      const observer = sprout.widthObserver(() => containerRef.current, {
        boxSizing,
        onResize: w => {
          setWidth(w);
        }
      });
      observer.observe();
      return () => {
        observer.disconnect();
      };
    }, [boxSizing]);
    return <div className={sprout.classNames("flex", "border-box", "flex-col", "gap-m", "w-full")} style={{
      alignItems: "flex-start"
    }}>
        <p className={sprout.classNames("font-body-s", "text-default")}>
          Resize the element horizontally, its own width (not the viewport) is observed via <code>ResizeObserver</code>.
        </p>

        <Button label={boxSizing === "border-box" ? "Switch to content-box" : "Switch to border-box"} onClick={() => {
        setBoxSizing(boxSizing === "border-box" ? "content-box" : "border-box");
      }} />

        <div ref={containerRef} className={sprout.classNames("border-default", "bg-default", "p-m", "w-m")} style={{
        resize: "horizontal",
        overflow: "auto"
      }}>
          <Item>width: {typeof width === "number" ? \`\${Math.round(width)}px\` : "—"}</Item>
          <div className={sprout.classNames("font-label-s", "text-default", "pt-s")}>box: {boxSizing}</div>
        </div>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "rtl",
  parameters: {
    controls: false
  },
  render: () => <div className={sprout.classNames("flex", "flex-col", "bg-default", "text-default", "gap-3xl", "w-m", "p-m")}>
      {RTL_CONFIG.map(({
      dir,
      styles
    }) => <div key={dir} dir={dir} className={classNames("flex", "flex-col", "border-box", "border-default", "p-m", "gap-m")}>
          <span>
            {dir} {styles.join(" ")}
          </span>
          <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
            <NextIcon className={classNames(...styles)} /> NextIcon
          </div>
          <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
            <AlignLeftIcon className={classNames(...styles)} />
            AlignLeftIcon
          </div>
        </div>)}
    </div>
}`,...b.parameters?.docs?.source}}};const F=["Responsive","CreateContainer","WidthObserver","RTL"];export{x as CreateContainer,b as RTL,p as Responsive,u as WidthObserver,F as __namedExportsOrder,W as default};
