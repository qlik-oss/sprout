import{r as m,j as r}from"./iframe-B4vjk2_C.js";import{A as p}from"./index-Z8VovJW6.js";import{S as c}from"./Slider-CzynPvMb.js";import{T as d}from"./TextField-BIeh6d0s.js";import{c as t}from"./classNames-DaRWzB8T.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-CrXyYGj8.js";import"./AiSparkles-Dl0R-qK2.js";import"./Next-D7BL29gd.js";import"./Bookmark-CibNrEfK.js";import"./Upload-CPekzzW9.js";import"./Text-VlP5SB55.js";import"./Close-CzhTZSOO.js";import"./SortDescending-B7jfx8Af.js";import"./Undo-9QyGmJ12.js";import"./Person-Dcr2ZAg5.js";import"./Copy-o7IORLfG.js";import"./Delete-B3An4l3N.js";import"./Filter-B97z2p0g.js";import"./Edit-DrJZ1rCf.js";import"./Error-aRqdswEO.js";import"./History-C5KmixAH.js";import"./Search-KjZbxp4C.js";import"./Info-qvjQZ4-p.js";import"./Subtract-CiGs9Rom.js";import"./Map-CaMFTBLm.js";import"./NewTab-CGCvqCB9.js";import"./Notification-Bvs5iQDr.js";import"./Paste-DdDmevxd.js";import"./Warning-mmXjUrwg.js";import"./Tenant-pz9GTM4b.js";import"./icons-BjYZgjFf.js";import"./sprout-tokens-D9QRO1qB.js";import"./useId-DsPr7Fl4.js";import"./useFieldAriaProps-7JTDckGo.js";import"./Field-C-ZgIs6T.js";import"./sprout-DTAeqvbL.js";import"./FieldLabel-BSgk2xJ9.js";import"./useI18n-DbSMZiRF.js";import"./InfoTooltipPrimitive-GcR7SVQV.js";import"./Tooltip-D1n48xKC.js";import"./renderOrClone-D3fq_iUv.js";import"./Popover-B32coOjQ.js";import"./HelperText-B-4Si9bt.js";import"./useValueControl-f2Qxn85g.js";import"./Button-COVTwlCl.js";import"./Button.module-C2ELNEem.js";import"./Badge-Coha5yr6.js";import"./ProgressCircular-CXDJvuy2.js";import"./InputButton-iEaXDKyM.js";import"./useControl-DPltlHoP.js";import"./useFieldProps-DJ-a4x7W.js";const ce={title:"Icons"},a={render:()=>{const[s,l]=m.useState(""),[i,n]=m.useState(16);return r.jsxs("div",{className:t("flex","flex-col","gap-l","flex-wrap"),children:[r.jsxs("div",{className:t("flex-noreset","w-m","flex-row","items-start","p-s","gap-s","justify-start"),children:[r.jsx(d,{placeholder:"Search icons...",value:s,onChange:e=>{l(e.target.value)},"aria-label":"Search icons"}),r.jsx(c.Single,{"aria-label":"Icon size",min:16,max:48,defaultValue:24,onChange:e=>{n(e)}})]}),r.jsx("div",{className:t("grid","grid-cols-8","gap-m","w-3xl"),children:Object.entries(p).filter(([e,o])=>e.toLowerCase().includes(s.toLowerCase())).map(([e,o])=>r.jsxs("div",{className:t("flex","flex-col","items-center","justify-around","gap-m","p-m","border-default"),children:[r.jsx(o,{height:i,width:i}),r.jsx("span",{className:t("font-label-xs","text-default","break-all"),children:e})]},e))})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = useState("");
    const [size, setSize] = useState(16);
    return <div className={classNames("flex", "flex-col", "gap-l", "flex-wrap")}>
        <div className={classNames("flex-noreset", "w-m", "flex-row", "items-start", "p-s", "gap-s", "justify-start")}>
          <TextField placeholder="Search icons..." value={search} onChange={e => {
          setSearch(e.target.value);
        }} aria-label="Search icons" />
          <Slider.Single aria-label="Icon size" min={16} max={48} defaultValue={24} onChange={value => {
          setSize(value);
        }} />
        </div>
        <div className={classNames("grid", "grid-cols-8", "gap-m", "w-3xl")}>
          {Object.entries(Icons).filter(([name, Icon]) => name.toLowerCase().includes(search.toLowerCase())).map(([name, Icon]) => <div key={name} className={classNames("flex", "flex-col", "items-center", "justify-around", "gap-m", "p-m", "border-default")}>
                <Icon height={size} width={size} />
                <span className={classNames("font-label-xs", "text-default", "break-all")}>{name}</span>
              </div>)}
        </div>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const de=["AllIcons"];export{a as AllIcons,de as __namedExportsOrder,ce as default};
