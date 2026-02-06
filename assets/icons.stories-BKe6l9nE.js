import{r as i,j as a}from"./iframe-qjjAf_pH.js";import{A as p}from"./index-BFR_pwzS.js";import{S as x}from"./Slider-DU4P03GP.js";import{T as f}from"./TextField-CK34yAWN.js";import{c as s}from"./classNames-BVAN1ZTN.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-DSLcMkbC.js";import"./Next-CxhzuVxv.js";import"./Bookmark-BNRO0aS9.js";import"./Upload-CL9H6pmE.js";import"./Text-B-zga3pP.js";import"./Close-Bp7FqXQR.js";import"./SortDescending-C3dNRiBL.js";import"./Undo-Dsdksioz.js";import"./Person-BIgNV-Ed.js";import"./Copy-BTa2KiQL.js";import"./Delete-BwmiKOHh.js";import"./Filter-hx7yX_Jo.js";import"./Edit-2pD94UJo.js";import"./Error-BrLGh9jC.js";import"./GenerateWithAi-f8_0IRx5.js";import"./History-atzo0mXc.js";import"./Search-DWresNZR.js";import"./Info-DxHQkaw3.js";import"./Subtract-CBZN_Qgc.js";import"./Map-in9fWS3M.js";import"./NewTab-CYZ0jhBQ.js";import"./Notification-Dtb2E571.js";import"./Paste-Qm0zT67Y.js";import"./Warning-CuGLZChC.js";import"./Tenant-oJlxY9e2.js";import"./icons-5qhXnzWI.js";import"./sprout-tokens-D9QRO1qB.js";import"./useId-CYaNFQmj.js";import"./useFieldAriaProps-7kz57GoE.js";import"./Field-Cf7Db6oK.js";import"./sprout-Dvd5rbSu.js";import"./FieldLabel-bQ0UMnrf.js";import"./useI18n-DleVkSsM.js";import"./InfoTooltipPrimitive-CrOtV9y3.js";import"./Tooltip-DvaPb59I.js";import"./renderOrClone-CXS0BGZe.js";import"./Popover-DnFzFkcI.js";import"./HelperText-CYjRsd29.js";import"./useValueControl-CExQO3qq.js";import"./Button-cYFf5aNk.js";import"./Button.module-C2ELNEem.js";import"./Badge-CvmwyUY9.js";import"./ProgressCircular-BSs6AknY.js";import"./InputButton-C0Pq6Rob.js";import"./useControl-BNhHN6uq.js";import"./useFieldProps-BNEikc4J.js";const fe={title:"Icons"},o={1:"s",2:"m",3:"l",4:"xl",5:"xxl",6:"2xl",7:"3xl",8:"4xl",9:"5xl",10:"6xl",11:"7xl"},u=[{value:1,label:"s"},{value:2,label:"m"},{value:3,label:"l"},{value:4,label:"xl"},{value:5,label:"xxl"},{value:6,label:"2xl"},{value:7,label:"3xl"},{value:8,label:"4xl"},{value:9,label:"5xl"},{value:10,label:"6xl"},{value:11,label:"7xl"}],l={render:()=>{const[t,m]=i.useState(""),[r,n]=i.useState(5);return a.jsxs("div",{className:s("flex","flex-col","gap-l","flex-wrap"),children:[a.jsxs("div",{className:s("flex-noreset","w-m","flex-row","items-start","p-s","gap-s","justify-start"),children:[a.jsx(f,{placeholder:"Search icons...",value:t,onChange:e=>{m(e.target.value)},"aria-label":"Search icons"}),a.jsx(x.Single,{"aria-label":"Icon size",min:1,max:11,step:1,marks:u,value:r,valueLabelFormat:e=>o[e],onChange:e=>{n(e)}})]}),a.jsx("div",{className:s("flex","flex-row","flex-wrap","gap-m","w-fit"),children:Object.entries(p).filter(([e])=>e.toLowerCase().includes(t.toLowerCase())).map(([e,c])=>a.jsxs("div",{className:s("flex","flex-col","gap-m","p-m","border-default","radius-soft"),style:{blockSize:150,inlineSize:150},children:[a.jsx("span",{className:s("font-script-s","text-weak","break-all"),children:e}),a.jsx("div",{className:s("flex","items-center","justify-center","flex-1","text-default"),children:a.jsx(c,{className:s(`size-${o[r]}`)})})]},e))})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = useState("");
    const [size, setSize] = useState(5);
    return <div className={classNames("flex", "flex-col", "gap-l", "flex-wrap")}>
        <div className={classNames("flex-noreset", "w-m", "flex-row", "items-start", "p-s", "gap-s", "justify-start")}>
          <TextField placeholder="Search icons..." value={search} onChange={e => {
          setSearch(e.target.value);
        }} aria-label="Search icons" />
          <Slider.Single aria-label="Icon size" min={1} max={11} step={1} marks={Marks} value={size} valueLabelFormat={value => SIZES[value]} onChange={value => {
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
}`,...l.parameters?.docs?.source}}};const ue=["AllIcons"];export{l as AllIcons,ue as __namedExportsOrder,fe as default};
