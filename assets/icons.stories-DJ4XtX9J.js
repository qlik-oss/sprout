import{r as i,j as e}from"./iframe-Dux6zP9l.js";import{A as c}from"./index-Br4vx0U3.js";import{S as p}from"./Slider-BisFrxpt.js";import{T as x}from"./TextField-BpUUDk4a.js";import{c as s}from"./classNames-T6EAEAwi.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-BtS2806q.js";import"./Next-BewXrcs7.js";import"./Bookmark-YRYgI-pH.js";import"./Upload-DVdnZv4A.js";import"./Text-BqIxfr9D.js";import"./Close-DZrODGJw.js";import"./SortDescending-6CDLuBsq.js";import"./Undo-BlRv8m3a.js";import"./Person-DtFtgVbU.js";import"./Copy-CNcpp5JH.js";import"./Delete-DmK8BJN4.js";import"./Filter-CkxlB1aU.js";import"./Edit-jwbjvk-y.js";import"./Error-BylAzqMK.js";import"./GenerateWithAi-B-iuWyGM.js";import"./History-hc8jDZls.js";import"./Search-jnBfSIuS.js";import"./Info-DM0ROm97.js";import"./Subtract-DqagjlIq.js";import"./Map-BliWAPeQ.js";import"./NewTab-B05WKzom.js";import"./Notification-DOy9jqM5.js";import"./Paste-a9G7KIM9.js";import"./Warning-DwriNDhq.js";import"./Tenant-ewlWfidL.js";import"./icons-DDUP-3mh.js";import"./sprout-tokens-D9QRO1qB.js";import"./useId-CfGbHbQJ.js";import"./useFieldAriaProps-D4sViO3r.js";import"./Field-BXzPF4nu.js";import"./sprout-duSO2RrP.js";import"./FieldLabel-C0bDiOug.js";import"./useI18n-KYbpKEsf.js";import"./InfoTooltipPrimitive-BaQRZYyO.js";import"./Tooltip-64IyLuk4.js";import"./renderOrClone-CWoZLUJZ.js";import"./Popover-CIPB7nap.js";import"./HelperText-BOHUOWLI.js";import"./useValueControl-BAwr0tlp.js";import"./Button-CUxISDo2.js";import"./Button.module-C2ELNEem.js";import"./Badge-LAqT22o7.js";import"./ProgressCircular-u9vevpyG.js";import"./InputButton-yvCJ7c_i.js";import"./useControl-BHRxoypK.js";import"./useFieldProps-BNSTbevB.js";const fe={title:"Icons"},f={1:"s",2:"m",3:"l",4:"xl",5:"xxl",6:"2xl",7:"3xl",8:"4xl",9:"5xl",10:"6xl",11:"7xl"},d=[{value:1,label:"s"},{value:2,label:"m"},{value:3,label:"l"},{value:4,label:"xl"},{value:5,label:"xxl"},{value:6,label:"2xl"},{value:7,label:"3xl"},{value:8,label:"4xl"},{value:9,label:"5xl"},{value:10,label:"6xl"},{value:11,label:"7xl"}],l={render:()=>{const[t,o]=i.useState(""),[r,m]=i.useState(5);return e.jsxs("div",{className:s("flex","flex-col","gap-l","flex-wrap"),children:[e.jsxs("div",{className:s("flex-noreset","w-m","flex-row","items-start","p-s","gap-s","justify-start"),children:[e.jsx(x,{placeholder:"Search icons...",value:t,onChange:a=>{o(a.target.value)},"aria-label":"Search icons"}),e.jsx(p.Single,{"aria-label":"Icon size",min:1,max:11,step:1,marks:d,value:r,onChange:a=>{m(a)}})]}),e.jsx("div",{className:s("flex","flex-row","flex-wrap","gap-m","w-fit"),children:Object.entries(c).filter(([a])=>a.toLowerCase().includes(t.toLowerCase())).map(([a,n])=>e.jsxs("div",{className:s("flex","flex-col","gap-m","p-m","border-default","radius-soft"),style:{blockSize:150,inlineSize:150},children:[e.jsx("span",{className:s("font-script-s","text-weak","break-all"),children:a}),e.jsx("div",{className:s("flex","items-center","justify-center","flex-1","text-default"),children:e.jsx(n,{className:s(`size-${f[r]}`)})})]},a))})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = useState("");
    const [size, setSize] = useState(5);
    return <div className={classNames("flex", "flex-col", "gap-l", "flex-wrap")}>
        <div className={classNames("flex-noreset", "w-m", "flex-row", "items-start", "p-s", "gap-s", "justify-start")}>
          <TextField placeholder="Search icons..." value={search} onChange={e => {
          setSearch(e.target.value);
        }} aria-label="Search icons" />
          <Slider.Single aria-label="Icon size" min={1} max={11} step={1} marks={Marks} value={size} onChange={value => {
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
