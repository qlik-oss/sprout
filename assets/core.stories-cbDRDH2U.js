import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-sE-G6KV_.js";import{t as n}from"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as r}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{J as i,hn as a,kt as o,un as s}from"./iframe-DaKWDHAC.js";import{o as c}from"./Content-Bil5yaVg.js";var l=e(t()),u={get:{control:!1,description:`Gets the data structure you want based on viewport sizes. It's a generic method so you need to specify the type when calling it.`,table:{type:{summary:`({ s, m, l, xl }: Partial<Record<ViewportSize, T>>) => T | undefined`}}},classNames:{control:!1,description:`An extension of sprout.classNames to support viewport based classNames.`,table:{type:{summary:`(options: ViewportOptions<AllClasses[] | AllClasses>, className?: string) => string`}}},addListener:{description:`Integrates sprout.media with your framework reactivity system. It's based on the native matchMedia API.`,table:{type:{summary:`(viewportSize: ViewportSize) => void`}}},removeListeners:{description:`Removes all listeners added with addListener.`,table:{type:{summary:`() => void`}}},getViewportSize:{control:!1,description:`Returns the current viewport size based on the system definition of it.`,table:{type:{summary:`() => ViewportSize`}}}},d=r(),f=n.media.getViewportSize(),p={title:`CSS/sprout-css-modules/core`},m={name:`responsive / media`,parameters:{controls:!1,layout:`fullscreen`},argTypes:u,render:(e,t)=>{let[r,i]=(0,l.useState)(f);return(0,l.useEffect)(()=>(n.media.addListener(i),()=>{n.media.removeListeners()}),[t]),(0,d.jsx)(`div`,{className:n.classNames(`border-box`,`p-m`),children:(0,d.jsxs)(`div`,{className:n.media.classNames({s:`gap-xl`,m:`gap-xl`,l:`gap-xxl`,xl:`gap-3xl`},n.classNames(`grid`,`grid-cols-16`)),children:[(0,d.jsx)(`div`,{className:n.media.classNames({s:[`col-start-1`,`col-span-3`],m:[`col-start-2`,`col-span-3`],l:[`col-start-3`,`col-span-3`],xl:[`col-start-4`,`col-span-3`]}),children:(0,d.jsx)(c,{children:n.media.get({s:[`col-start-1`,`col-span-3`].join(`, `),m:[`col-start-2`,`col-span-3`].join(`, `),l:[`col-start-3`,`col-span-3`].join(`, `),xl:[`col-start-4`,`col-span-3`].join(`, `)})})}),(0,d.jsx)(`div`,{className:n.classNames(`col-start-14`,`col-end-16`),children:(0,d.jsx)(c,{children:`end`})}),(0,d.jsx)(`div`,{className:n.media.classNames({s:[`col-span-8`],m:[`col-span-4`]}),children:(0,d.jsx)(c,{children:`s=8 m=4`})}),(0,d.jsx)(`div`,{className:n.media.classNames({s:[`col-span-8`],m:[`col-span-4`]}),children:(0,d.jsx)(c,{children:`s=8 m=4`})}),(0,d.jsx)(`div`,{className:n.media.classNames({s:[`col-span-16`],m:[`col-span-8`]}),children:(0,d.jsx)(c,{children:`s=16 m=8`})}),(0,d.jsx)(`div`,{className:n.classNames(`col-span-16`),...n.media.get({s:{"data-viewport":`s`}}),children:(0,d.jsxs)(c,{children:[`sprout.media.get can return anything even object / props {data-viewport="`,n.media.getViewportSize(),`" } !`]})})]})})}},h={name:`createContainer`,parameters:{controls:!1,chromatic:{modes:{breakpoint_xxs:{viewport:`mobile1`},breakpoint_xs:{viewport:`mobile2`},breakpoint_m:{viewport:`tablet`}}}},render:()=>{let e=(0,l.useRef)(null),[t,r]=(0,l.useState)(`xxs`),a=(0,l.useRef)(null),o=(0,l.useMemo)(()=>n.createContainer(t,e.current),[t]);return(0,l.useEffect)(()=>{let t=n.widthObserver(()=>e.current,{boxSizing:`border-box`,onResize:e=>{if(e===void 0)return;let t=o.match(e);a.current!==t&&(a.current=t,r(t))}});return t.observe(),()=>{t.disconnect()}},[o]),(0,d.jsxs)(`div`,{className:n.classNames(`flex`,`border-box`,`flex-col`,`gap-m`,`w-full`),children:[(0,d.jsxs)(`p`,{className:n.classNames(`font-body-s`,`text-default`),children:[`This example changes alignment and layout based on the element’s own width using `,(0,d.jsx)(`code`,{children:`widthObserver`}),` together with`,` `,(0,d.jsx)(`code`,{children:`createContainer`}),` and `,(0,d.jsx)(`code`,{children:`get`}),`. Drag the handle to resize or change the viewport size.`]}),(0,d.jsxs)(`div`,{ref:e,className:n.classNames(`border-box`,`border-default`,`p-m`,`w-full`),style:{resize:`horizontal`,overflow:`auto`},children:[(0,d.jsx)(`div`,{className:n.classNames(`border-box`,`p-m`),children:(0,d.jsx)(i,{label:`Button - ${o.get({xs:`justified: true`,m:`justified: false`})}`,justified:o.get({xxs:!0,m:!1})})}),(0,d.jsx)(`div`,{className:o.classNames({xxs:[`grid-cols-1`,`gap-s`],xs:[`grid-cols-2`,`gap-s`],s:[`grid-cols-3`,`gap-m`],m:[`grid-cols-4`,`gap-m`],l:[`grid-cols-5`,`gap-l`],xl:[`grid-cols-6`,`gap-l`],xxl:[`grid-cols-7`,`gap-xl`],"3xl":[`grid-cols-8`,`gap-xl`],"4xl":[`grid-cols-9`,`gap-xl`]},n.classNames(`grid`,`border-box`,`p-m`)),children:Array.from({length:9}).map((e,t)=>(0,d.jsxs)(`div`,{className:n.classNames(`border-default`,`p-s`,`items-center`,`justify-center`,`flex`),children:[`Item `,t+1]},t))})]})]})}},g={name:`widthObserver`,parameters:{controls:!1},render:()=>{let e=(0,l.useRef)(null),[t,r]=(0,l.useState)(void 0),[a,o]=(0,l.useState)(`content-box`);return(0,l.useEffect)(()=>{let t=n.widthObserver(()=>e.current,{boxSizing:a,onResize:e=>{r(e)}});return t.observe(),()=>{t.disconnect()}},[a]),(0,d.jsxs)(`div`,{className:n.classNames(`flex`,`border-box`,`flex-col`,`gap-m`,`w-full`),style:{alignItems:`flex-start`},children:[(0,d.jsxs)(`p`,{className:n.classNames(`font-body-s`,`text-default`),children:[`Resize the element horizontally, its own width (not the viewport) is observed via `,(0,d.jsx)(`code`,{children:`ResizeObserver`}),`.`]}),(0,d.jsx)(i,{label:a===`border-box`?`Switch to content-box`:`Switch to border-box`,onClick:()=>{o(a===`border-box`?`content-box`:`border-box`)}}),(0,d.jsxs)(`div`,{ref:e,className:n.classNames(`border-default`,`bg-default`,`p-m`,`w-m`),style:{resize:`horizontal`,overflow:`auto`},children:[(0,d.jsxs)(c,{children:[`width: `,typeof t==`number`?`${Math.round(t)}px`:`—`]}),(0,d.jsxs)(`div`,{className:n.classNames(`font-label-s`,`text-default`,`pt-s`),children:[`box: `,a]})]})]})}},_=[{dir:`ltr`,styles:[`rtl_rotate_y_180`]},{dir:`rtl`,styles:[`rtl_rotate_y_180`]}],v={name:`rtl`,parameters:{controls:!1},render:()=>(0,d.jsx)(`div`,{className:n.classNames(`flex`,`flex-col`,`bg-default`,`text-default`,`gap-3xl`,`w-m`,`p-m`),children:_.map(({dir:e,styles:t})=>(0,d.jsxs)(`div`,{dir:e,className:a(`flex`,`flex-col`,`border-box`,`border-default`,`p-m`,`gap-m`),children:[(0,d.jsxs)(`span`,{children:[e,` `,t.join(` `)]}),(0,d.jsxs)(`div`,{className:a(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,d.jsx)(o,{className:a(...t)}),` MoveRightIcon`]}),(0,d.jsxs)(`div`,{className:a(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,d.jsx)(s,{className:a(...t)}),`AlignLeftIcon`]})]},e))})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};var y=[`Responsive`,`CreateContainer`,`WidthObserver`,`RTL`];export{h as CreateContainer,v as RTL,m as Responsive,g as WidthObserver,y as __namedExportsOrder,p as default};