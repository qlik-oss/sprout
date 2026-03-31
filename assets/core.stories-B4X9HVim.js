import{a as e,n as t}from"./chunk-BneVvdWh.js";import{$t as n,Gn as r,In as i,Kn as a,Ln as o,Nn as s,ir as c,jt as l,v as u,wt as d}from"./iframe-B0xl5hqz.js";import{f,o as p}from"./Content-C41FVtgA.js";var m,h=t((()=>{m={get:{control:!1,description:`Gets the data structure you want based on viewport sizes. It's a generic method so you need to specify the type when calling it.`,table:{type:{summary:`({ s, m, l, xl }: Partial<Record<ViewportSize, T>>) => T | undefined`}}},classNames:{control:!1,description:`An extension of sprout.classNames to support viewport based classNames.`,table:{type:{summary:`(options: ViewportOptions<AllClasses[] | AllClasses>, className?: string) => string`}}},addListener:{description:`Integrates sprout.media with your framework reactivity system. It's based on the native matchMedia API.`,table:{type:{summary:`(viewportSize: ViewportSize) => void`}}},removeListeners:{description:`Removes all listeners added with addListener.`,table:{type:{summary:`() => void`}}},getViewportSize:{control:!1,description:`Returns the current viewport size based on the system definition of it.`,table:{type:{summary:`() => ViewportSize`}}}}})),g,_,v,y,b,x,S,C,w,T,E=t((()=>{g=e(c()),r(),u(),l(),f(),h(),_=o(),v=a.media.getViewportSize(),y={title:`CSS/sprout-css-modules/core`},b={name:`responsive / media`,parameters:{controls:!1,layout:`fullscreen`},argTypes:m,render:(e,t)=>{let[n,r]=(0,g.useState)(v);return(0,g.useEffect)(()=>(a.media.addListener(r),()=>{a.media.removeListeners()}),[t]),(0,_.jsx)(`div`,{className:a.classNames(`border-box`,`p-m`),children:(0,_.jsxs)(`div`,{className:a.media.classNames({s:`gap-xl`,m:`gap-xl`,l:`gap-xxl`,xl:`gap-3xl`},a.classNames(`grid`,`grid-cols-16`)),children:[(0,_.jsx)(`div`,{className:a.media.classNames({s:[`col-start-1`,`col-span-3`],m:[`col-start-2`,`col-span-3`],l:[`col-start-3`,`col-span-3`],xl:[`col-start-4`,`col-span-3`]}),children:(0,_.jsx)(p,{children:a.media.get({s:[`col-start-1`,`col-span-3`].join(`, `),m:[`col-start-2`,`col-span-3`].join(`, `),l:[`col-start-3`,`col-span-3`].join(`, `),xl:[`col-start-4`,`col-span-3`].join(`, `)})})}),(0,_.jsx)(`div`,{className:a.classNames(`col-start-14`,`col-end-16`),children:(0,_.jsx)(p,{children:`end`})}),(0,_.jsx)(`div`,{className:a.media.classNames({s:[`col-span-8`],m:[`col-span-4`]}),children:(0,_.jsx)(p,{children:`s=8 m=4`})}),(0,_.jsx)(`div`,{className:a.media.classNames({s:[`col-span-8`],m:[`col-span-4`]}),children:(0,_.jsx)(p,{children:`s=8 m=4`})}),(0,_.jsx)(`div`,{className:a.media.classNames({s:[`col-span-16`],m:[`col-span-8`]}),children:(0,_.jsx)(p,{children:`s=16 m=8`})}),(0,_.jsx)(`div`,{className:a.classNames(`col-span-16`),...a.media.get({s:{"data-viewport":`s`}}),children:(0,_.jsxs)(p,{children:[`sprout.media.get can return anything even object / props {data-viewport="`,a.media.getViewportSize(),`" } !`]})})]})})}},x={name:`createContainer`,parameters:{controls:!1,chromatic:{modes:{breakpoint_xxs:{viewport:`mobile1`},breakpoint_xs:{viewport:`mobile2`},breakpoint_m:{viewport:`tablet`}}}},render:()=>{let e=(0,g.useRef)(null),[t,n]=(0,g.useState)(`xxs`),r=(0,g.useRef)(null),i=(0,g.useMemo)(()=>a.createContainer(t,e.current),[t]);return(0,g.useEffect)(()=>{let t=a.widthObserver(()=>e.current,{boxSizing:`border-box`,onResize:e=>{if(e===void 0)return;let t=i.match(e);r.current!==t&&(r.current=t,n(t))}});return t.observe(),()=>{t.disconnect()}},[i]),(0,_.jsxs)(`div`,{className:a.classNames(`flex`,`border-box`,`flex-col`,`gap-m`,`w-full`),children:[(0,_.jsxs)(`p`,{className:a.classNames(`font-body-s`,`text-default`),children:[`This example changes alignment and layout based on the element’s own width using `,(0,_.jsx)(`code`,{children:`widthObserver`}),` together with`,` `,(0,_.jsx)(`code`,{children:`createContainer`}),` and `,(0,_.jsx)(`code`,{children:`get`}),`. Drag the handle to resize or change the viewport size.`]}),(0,_.jsxs)(`div`,{ref:e,className:a.classNames(`border-box`,`border-default`,`p-m`,`w-full`),style:{resize:`horizontal`,overflow:`auto`},children:[(0,_.jsx)(`div`,{className:a.classNames(`border-box`,`p-m`),children:(0,_.jsx)(d,{label:`Button - ${i.get({xs:`justified: true`,m:`justified: false`})}`,justified:i.get({xxs:!0,m:!1})})}),(0,_.jsx)(`div`,{className:i.classNames({xxs:[`grid-cols-1`,`gap-s`],xs:[`grid-cols-2`,`gap-s`],s:[`grid-cols-3`,`gap-m`],m:[`grid-cols-4`,`gap-m`],l:[`grid-cols-5`,`gap-l`],xl:[`grid-cols-6`,`gap-l`],xxl:[`grid-cols-7`,`gap-xl`],"3xl":[`grid-cols-8`,`gap-xl`],"4xl":[`grid-cols-9`,`gap-xl`]},a.classNames(`grid`,`border-box`,`p-m`)),children:Array.from({length:9}).map((e,t)=>(0,_.jsxs)(`div`,{className:a.classNames(`border-default`,`p-s`,`items-center`,`justify-center`,`flex`),children:[`Item `,t+1]},t))})]})]})}},S={name:`widthObserver`,parameters:{controls:!1},render:()=>{let e=(0,g.useRef)(null),[t,n]=(0,g.useState)(void 0),[r,i]=(0,g.useState)(`content-box`);return(0,g.useEffect)(()=>{let t=a.widthObserver(()=>e.current,{boxSizing:r,onResize:e=>{n(e)}});return t.observe(),()=>{t.disconnect()}},[r]),(0,_.jsxs)(`div`,{className:a.classNames(`flex`,`border-box`,`flex-col`,`gap-m`,`w-full`),style:{alignItems:`flex-start`},children:[(0,_.jsxs)(`p`,{className:a.classNames(`font-body-s`,`text-default`),children:[`Resize the element horizontally, its own width (not the viewport) is observed via `,(0,_.jsx)(`code`,{children:`ResizeObserver`}),`.`]}),(0,_.jsx)(d,{label:r===`border-box`?`Switch to content-box`:`Switch to border-box`,onClick:()=>{i(r===`border-box`?`content-box`:`border-box`)}}),(0,_.jsxs)(`div`,{ref:e,className:a.classNames(`border-default`,`bg-default`,`p-m`,`w-m`),style:{resize:`horizontal`,overflow:`auto`},children:[(0,_.jsxs)(p,{children:[`width: `,typeof t==`number`?`${Math.round(t)}px`:`—`]}),(0,_.jsxs)(`div`,{className:a.classNames(`font-label-s`,`text-default`,`pt-s`),children:[`box: `,r]})]})]})}},C=[{dir:`ltr`,styles:[`rtl_rotate_y_180`]},{dir:`rtl`,styles:[`rtl_rotate_y_180`]}],w={name:`rtl`,parameters:{controls:!1},render:()=>(0,_.jsx)(`div`,{className:a.classNames(`flex`,`flex-col`,`bg-default`,`text-default`,`gap-3xl`,`w-m`,`p-m`),children:C.map(({dir:e,styles:t})=>(0,_.jsxs)(`div`,{dir:e,className:i(`flex`,`flex-col`,`border-box`,`border-default`,`p-m`,`gap-m`),children:[(0,_.jsxs)(`span`,{children:[e,` `,t.join(` `)]}),(0,_.jsxs)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,_.jsx)(n,{className:i(...t)}),` MoveRightIcon`]}),(0,_.jsxs)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,_.jsx)(s,{className:i(...t)}),`AlignLeftIcon`]})]},e))})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
              sprout.media.get can return anything even object / props
              &#123;data-viewport=&quot;
              {sprout.media.getViewportSize()}&quot; &#125; !
            </Item>
          </div>
        </div>
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
          This example changes alignment and layout based on the element’s own
          width using <code>widthObserver</code> together with{" "}
          <code>createContainer</code> and <code>get</code>. Drag the handle to
          resize or change the viewport size.
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
          Resize the element horizontally, its own width (not the viewport) is
          observed via <code>ResizeObserver</code>.
        </p>

        <Button label={boxSizing === "border-box" ? "Switch to content-box" : "Switch to border-box"} onClick={() => {
        setBoxSizing(boxSizing === "border-box" ? "content-box" : "border-box");
      }} />

        <div ref={containerRef} className={sprout.classNames("border-default", "bg-default", "p-m", "w-m")} style={{
        resize: "horizontal",
        overflow: "auto"
      }}>
          <Item>
            width: {typeof width === "number" ? \`\${Math.round(width)}px\` : "—"}
          </Item>
          <div className={sprout.classNames("font-label-s", "text-default", "pt-s")}>
            box: {boxSizing}
          </div>
        </div>
      </div>;
  }
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
            <MoveRightIcon className={classNames(...styles)} /> MoveRightIcon
          </div>
          <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
            <AlignLeftIcon className={classNames(...styles)} />
            AlignLeftIcon
          </div>
        </div>)}
    </div>
}`,...w.parameters?.docs?.source}}},T=[`Responsive`,`CreateContainer`,`WidthObserver`,`RTL`]}));E();export{x as CreateContainer,w as RTL,b as Responsive,S as WidthObserver,T as __namedExportsOrder,y as default,E as t};