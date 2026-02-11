import{r as o,j as t}from"./iframe-B-fqCePV.js";import{A as p}from"./index-DvxuXuF-.js";import{T as x}from"./TextField-DEQy7r8U.js";import{S as l}from"./SelectComposition-DIoBGgJg.js";import{c as r}from"./classNames-BHQ9ieoZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-CGQWcTMW.js";import"./Next-DCc_9i21.js";import"./Bookmark-C4WqJD7B.js";import"./Upload-C4mriZRV.js";import"./Text-DVGjtA2-.js";import"./Close-R01cAXcl.js";import"./SortDescending-CfflnELi.js";import"./Undo-QmoTQvvJ.js";import"./Person-CQx_s9v3.js";import"./Copy-LDJw-O8w.js";import"./Delete-K_WChgQu.js";import"./Filter-_T9uGPBz.js";import"./Edit-yy_oh6IZ.js";import"./Error-BQGw3LDI.js";import"./GenerateWithAi-C8pDpEB1.js";import"./History-BlOzlZJ1.js";import"./Search-DSRoHruE.js";import"./Info-C4YmKgXN.js";import"./Subtract-DlC_wTL-.js";import"./Map-FzW2bSYj.js";import"./NewTab-DUTMcy5N.js";import"./Notification-DAAFk53n.js";import"./Paste-Bms19-bp.js";import"./Warning-GhyyIkan.js";import"./Tenant-wzlvguFI.js";import"./useValueControl-D8vAvYvZ.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-BvkMXfLp.js";import"./useI18n-uzhF32fT.js";import"./sprout-DqOLOcsj.js";import"./Button-DgHw6K-5.js";import"./icons-BXG-SLO7.js";import"./Button.module-C2ELNEem.js";import"./Badge-BMzhzV_X.js";import"./Tooltip-DclK_iM1.js";import"./useId-DU0uuk5t.js";import"./ProgressCircular-CeNa-NP_.js";import"./InputButton-VrXIQIPl.js";import"./useControl-DDjCssuD.js";import"./useFieldProps-C5tdc_TS.js";import"./useFieldAriaProps-C2PPXi5-.js";import"./Field-BLDSqeK1.js";import"./FieldLabel-8GV8HzVd.js";import"./InfoTooltipPrimitive-D79OSySs.js";import"./Popover-D19D-oMR.js";import"./HelperText-B14iHzzi.js";import"./Menu-CaarWdBl.js";import"./Divider-B2v-xVm0.js";import"./list-B1zo5gaH.js";import"./IconButton-C1DotWTd.js";import"./Skeleton-CLuWHboh.js";import"./TagGroup-CMbRkJWe.js";import"./Tag-BBDzpCL8.js";import"./TextOverflow-DtYuM8Q8.js";import"./useHasOverflow-DXWq-MBQ.js";const we={title:"Icons"},f=["s","m","l","xl","xxl","2xl","3xl","4xl","5xl","6xl","7xl"];function d(s){return s.endsWith("Icon")?s.slice(0,-4):s}const a={render:()=>{const[s,m]=o.useState(""),[i,n]=o.useState("xxl");return t.jsxs("div",{className:r("flex","flex-col","gap-l","flex-wrap"),children:[t.jsxs("div",{className:r("flex-noreset","w-m","flex-row","items-start","p-s","gap-s","justify-start"),children:[t.jsx(x,{placeholder:"Search icons...",value:s,onChange:e=>{m(e.target.value)},"aria-label":"Search icons"}),t.jsx(l.Select,{"aria-label":"Size",value:i,onChange:e=>{n(e.target.value||"xxl")},children:f.map(e=>t.jsx(l.Option,{value:e,children:e},e))})]}),t.jsx("div",{className:r("flex","flex-row","flex-wrap","gap-m","w-fit"),children:Object.entries(p).filter(([e])=>e.toLowerCase().includes(s.toLowerCase())).map(([e,c])=>t.jsxs("div",{className:r("flex","flex-col","gap-m","p-m","border-default","radius-soft"),style:{blockSize:150,inlineSize:150},children:[t.jsx("span",{className:r("font-script-s","text-weak","break-all"),children:d(e)}),t.jsx("div",{className:r("flex","items-center","justify-center","flex-1","text-default"),children:t.jsx(c,{className:r(`size-${i}`)})})]},e))})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = useState("");
    const [size, setSize] = useState("xxl");
    return <div className={classNames("flex", "flex-col", "gap-l", "flex-wrap")}>
        <div className={classNames("flex-noreset", "w-m", "flex-row", "items-start", "p-s", "gap-s", "justify-start")}>
          <TextField placeholder="Search icons..." value={search} onChange={e => {
          setSearch(e.target.value);
        }} aria-label="Search icons" />
          <Select.Select aria-label="Size" value={size} onChange={e => {
          setSize(e.target.value || "xxl");
        }}>
            {SIZES.map(currentSize => <Select.Option key={currentSize} value={currentSize}>
                {currentSize}
              </Select.Option>)}
          </Select.Select>
        </div>
        <div className={classNames("flex", "flex-row", "flex-wrap", "gap-m", "w-fit")}>
          {Object.entries(Icons).filter(([name]) => name.toLowerCase().includes(search.toLowerCase())).map(([name, Icon]) => <div key={name} className={classNames("flex", "flex-col", "gap-m", "p-m", "border-default", "radius-soft")} style={{
          blockSize: 150,
          inlineSize: 150
        }}>
                <span className={classNames("font-script-s", "text-weak", "break-all")}>
                  {removeTrailingIconFromName(name)}
                </span>
                <div className={classNames("flex", "items-center", "justify-center", "flex-1", "text-default")}>
                  <Icon className={classNames(\`size-\${size}\`)} />
                </div>
              </div>)}
        </div>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const ze=["AllIcons"];export{a as AllIcons,ze as __namedExportsOrder,we as default};
