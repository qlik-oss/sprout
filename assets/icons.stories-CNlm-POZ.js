import{r as m,j as r}from"./iframe-CYyT-rNd.js";import{A as p}from"./index-quSI8jkX.js";import{S as c}from"./Slider-DPnb5_Po.js";import{T as d}from"./TextField-3so8vjFm.js";import{c as t}from"./classNames-BmP9dLUE.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-DcwIOkn_.js";import"./AiSparkles-CDqJAjaL.js";import"./Next-cI6d2vFk.js";import"./Bookmark-w_IQ-P6t.js";import"./Upload-1y14DHO-.js";import"./Text-BZR-PmRB.js";import"./Close-IBeLqb5W.js";import"./SortDescending-CVAYxQhu.js";import"./Undo-BLwRYRdg.js";import"./Person--hO0Fx5n.js";import"./Copy-CTuCBlSc.js";import"./Delete--7nWLgfL.js";import"./Filter-DCjOsxGl.js";import"./Edit-C5Vhfo4K.js";import"./Error-D7GnDcGx.js";import"./History-ClGIlAJq.js";import"./Search-DcLlWkDR.js";import"./Info-kPGn8DpC.js";import"./Subtract-D9yFNKnL.js";import"./Map-BB3BkA5L.js";import"./NewTab-CSZjxaIu.js";import"./Notification-DqLr7fgN.js";import"./Paste-CUVznJnn.js";import"./Warning-BO-41SRA.js";import"./Tenant-1QyupFgC.js";import"./icons-BJP5nzPh.js";import"./sprout-tokens-D9QRO1qB.js";import"./useId-BEfewr8x.js";import"./useFieldAriaProps-O3JOrChf.js";import"./Field-WnapnPu6.js";import"./sprout-UDUY6uO8.js";import"./FieldLabel-B0tZljJj.js";import"./useI18n-B8acZ0ym.js";import"./InfoTooltipPrimitive-CcAfk6tw.js";import"./Tooltip-Bq8n5z5D.js";import"./renderOrClone-GWN5S5OT.js";import"./Popover-p0wTHRSq.js";import"./HelperText-PF_3nKgd.js";import"./useValueControl-DkREc4sR.js";import"./Button-B_WU7ehq.js";import"./Button.module-C2ELNEem.js";import"./Badge-M4fZ9aOR.js";import"./ProgressCircular-BThLXJeo.js";import"./InputButton-CVMmk1vr.js";import"./useControl-CbxOYg9r.js";import"./useFieldProps-crQyhd-6.js";const ce={title:"Icons"},a={render:()=>{const[s,l]=m.useState(""),[i,n]=m.useState(16);return r.jsxs("div",{className:t("flex","flex-col","gap-l","flex-wrap"),children:[r.jsxs("div",{className:t("flex-noreset","w-m","flex-row","items-start","p-s","gap-s","justify-start"),children:[r.jsx(d,{placeholder:"Search icons...",value:s,onChange:e=>{l(e.target.value)},"aria-label":"Search icons"}),r.jsx(c.Single,{"aria-label":"Icon size",min:16,max:48,defaultValue:24,onChange:e=>{n(e)}})]}),r.jsx("div",{className:t("grid","grid-cols-8","gap-m","w-3xl"),children:Object.entries(p).filter(([e,o])=>e.toLowerCase().includes(s.toLowerCase())).map(([e,o])=>r.jsxs("div",{className:t("flex","flex-col","items-center","justify-around","gap-m","p-m","border-default"),children:[r.jsx(o,{height:i,width:i}),r.jsx("span",{className:t("font-label-xs","text-default","break-all"),children:e})]},e))})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
