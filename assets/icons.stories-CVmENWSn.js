import{r,j as e}from"./iframe-DO7qjpir.js";import{A as c}from"./index-CRIXUNi1.js";import{S as p}from"./Slider-B-aFpxsL.js";import{T as x}from"./TextField-BvJMgdQD.js";import{c as s}from"./classNames-C2xvgHQf.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-BuQFhIrq.js";import"./Next-G0qtg1LQ.js";import"./Bookmark-DZyQ0qgi.js";import"./Upload-Dm1uqGe9.js";import"./Text-DXgxZ7rl.js";import"./Close-DVlpLiwK.js";import"./SortDescending-Bd_E1WmM.js";import"./Undo-CUmqfFkt.js";import"./Person-BjZlLNrQ.js";import"./Copy-ec0SasG8.js";import"./Delete-D4ge4hwa.js";import"./Filter-DBZqppq8.js";import"./Edit-CColNq1n.js";import"./Error-DM57iPud.js";import"./GenerateWithAi-Dv5-xc_y.js";import"./History-DHbq3km9.js";import"./Search-Bp2ziRFO.js";import"./Info-CoVbxZIf.js";import"./Subtract-CzdmJ8_U.js";import"./Map-B14QatVO.js";import"./NewTab-DA06V-wx.js";import"./Notification-ClhJe7A6.js";import"./Paste-BgvLiWgU.js";import"./Warning-CK4OS6kN.js";import"./Tenant-i2cOSROQ.js";import"./icons-B7D59aOJ.js";import"./sprout-tokens-D9QRO1qB.js";import"./useId-B9UV2KOW.js";import"./useFieldAriaProps-B-bf9GJL.js";import"./Field-Uh2AYJyc.js";import"./sprout-nCaIAc8k.js";import"./FieldLabel-B6hPS730.js";import"./useI18n-CbD-mhn-.js";import"./InfoTooltipPrimitive-CE8VNDL8.js";import"./Tooltip-Bnp9G-JS.js";import"./renderOrClone-C_aUAXE9.js";import"./Popover-DkNNB74y.js";import"./HelperText-BAW71J19.js";import"./useValueControl-DIvBSOg5.js";import"./Button-DWGkri9_.js";import"./Button.module-C2ELNEem.js";import"./Badge-BbHESnbh.js";import"./ProgressCircular-CpbimHqB.js";import"./InputButton-BUj9u-fS.js";import"./useControl-U2hc2GWS.js";import"./useFieldProps-dIMY5Lzn.js";const fe={title:"Icons"},f={1:"s",2:"m",3:"l",4:"xl",5:"xxl",6:"2xl",7:"3xl",8:"4xl",9:"5xl",10:"6xl",11:"7xl"},d=[{value:1,label:"s"},{value:2,label:"m"},{value:3,label:"l"},{value:4,label:"xl"},{value:5,label:"xxl"},{value:6,label:"2xl"},{value:7,label:"3xl"},{value:8,label:"4xl"},{value:9,label:"5xl"},{value:10,label:"6xl"},{value:11,label:"7xl"}],l={render:()=>{const[t,i]=r.useState(""),[o,m]=r.useState(5);return e.jsxs("div",{className:s("flex","flex-col","gap-l","flex-wrap"),children:[e.jsxs("div",{className:s("flex-noreset","w-m","flex-row","items-start","p-s","gap-s","justify-start"),children:[e.jsx(x,{placeholder:"Search icons...",value:t,onChange:a=>{i(a.target.value)},"aria-label":"Search icons"}),e.jsx(p.Single,{"aria-label":"Icon size",min:1,max:11,step:1,marks:d,defaultValue:2,onChange:a=>{m(a)}})]}),e.jsx("div",{className:s("flex","flex-row","flex-wrap","gap-m","w-fit"),children:Object.entries(c).filter(([a])=>a.toLowerCase().includes(t.toLowerCase())).map(([a,n])=>e.jsxs("div",{className:s("flex","flex-col","gap-m","p-m","border-default","radius-soft"),style:{blockSize:150,inlineSize:150},children:[e.jsx("span",{className:s("font-script-s","text-weak","break-all"),children:a}),e.jsx("div",{className:s("flex","items-center","justify-center","flex-1","text-default"),children:e.jsx(n,{className:s(`size-${f[o]}`)})})]},a))})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = useState("");
    const [size, setSize] = useState(5);
    return <div className={classNames("flex", "flex-col", "gap-l", "flex-wrap")}>
        <div className={classNames("flex-noreset", "w-m", "flex-row", "items-start", "p-s", "gap-s", "justify-start")}>
          <TextField placeholder="Search icons..." value={search} onChange={e => {
          setSearch(e.target.value);
        }} aria-label="Search icons" />
          <Slider.Single aria-label="Icon size" min={1} max={11} step={1} marks={Marks} defaultValue={2} onChange={value => {
          setSize(value);
        }} />
        </div>
        <div className={classNames("flex", "flex-row", "flex-wrap", "gap-m", "w-fit")}>
          {Object.entries(Icons).filter(([name]) => name.toLowerCase().includes(search.toLowerCase())).map(([name, Icon]) => <div key={name} className={classNames("flex", "flex-col", "gap-m", "p-m", "border-default", "radius-soft")} style={{
          blockSize: 150,
          inlineSize: 150
        }}>
                <span className={classNames("font-script-s", "text-weak", "break-all")}>{name}</span>
                <div className={classNames("flex", "items-center", "justify-center", "flex-1", "text-default")}>
                  <Icon className={classNames(\`size-\${SIZES[size]}\`)} />
                </div>
              </div>)}
        </div>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};const de=["AllIcons"];export{l as AllIcons,de as __namedExportsOrder,fe as default};
