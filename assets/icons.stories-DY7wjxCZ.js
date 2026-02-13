import{r as o,j as t}from"./iframe-D-N3fK2j.js";import{A as p}from"./index-83n1lJXs.js";import{T as x}from"./TextField-DMygpcri.js";import{S as l}from"./SelectComposition-2GVB6IHa.js";import{c as r}from"./classNames-CrSIhzis.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-DHz0bRTt.js";import"./Next-DG_ldtCu.js";import"./Bookmark-Dg1w8U2T.js";import"./Upload-ClDjPMMt.js";import"./Text-Bpm64yqp.js";import"./Close-Clva93gw.js";import"./SortDescending-7Is3TCUG.js";import"./Undo-Jt2aGM_z.js";import"./Person-C2Clk1QX.js";import"./Copy-DXsZFzm1.js";import"./Delete-o_szjHTs.js";import"./Filter-DXj_kdvE.js";import"./Edit-69Qgo7Td.js";import"./Error-CZbJtLWx.js";import"./GenerateWithAi-B8C8zDdl.js";import"./History-CQ5KoKvO.js";import"./Search-BEJfw-uV.js";import"./Info-DKfyJpi1.js";import"./Subtract-DrooAXHe.js";import"./Map-DsyJdFaB.js";import"./NewTab-DIWrR844.js";import"./Notification-CjmHr3yB.js";import"./Paste-B-RxeU6b.js";import"./Warning-Dy5sqdbk.js";import"./Tenant-BSwEMVQe.js";import"./useValueControl-DH7McdQ1.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-25h2pNOO.js";import"./useI18n-ClHBar3-.js";import"./sprout-UDo5dA_z.js";import"./Button-BiiNVP7I.js";import"./icons-BEmnCRju.js";import"./Button.module-CmdpHks8.js";import"./Badge-sJnchsAW.js";import"./Tooltip-DaX3jRge.js";import"./useId-Bkl3iN6O.js";import"./ProgressCircular-CdUDfayh.js";import"./InputButton-BoVH_no0.js";import"./useControl-U-WkQj2I.js";import"./useFieldProps-Cnz6GbX_.js";import"./useFieldAriaProps-EzEn10HD.js";import"./Field-DHjy_kFd.js";import"./FieldLabel-BNj8Kiyj.js";import"./InfoTooltipPrimitive-C8Uq1qY7.js";import"./Popover-B17Az-M5.js";import"./HelperText-DkWywDIM.js";import"./Menu-CpWAuarv.js";import"./Divider-Aa9jm5B9.js";import"./list-B1zo5gaH.js";import"./IconButton-Dg4ysz4Z.js";import"./Skeleton-Bx_f_eFM.js";import"./TagGroup-7XjF8tBf.js";import"./Tag-CLp8bTu7.js";import"./TextOverflow-B0-vdnEr.js";import"./useHasOverflow-BWQUK3f5.js";const we={title:"Icons"},f=["s","m","l","xl","xxl","2xl","3xl","4xl","5xl","6xl","7xl"];function d(s){return s.endsWith("Icon")?s.slice(0,-4):s}const a={render:()=>{const[s,m]=o.useState(""),[i,n]=o.useState("xxl");return t.jsxs("div",{className:r("flex","flex-col","gap-l","flex-wrap"),children:[t.jsxs("div",{className:r("flex-noreset","w-m","flex-row","items-start","p-s","gap-s","justify-start"),children:[t.jsx(x,{placeholder:"Search icons...",value:s,onChange:e=>{m(e.target.value)},"aria-label":"Search icons"}),t.jsx(l.Select,{"aria-label":"Size",value:i,onChange:e=>{n(e.target.value||"xxl")},children:f.map(e=>t.jsx(l.Option,{value:e,children:e},e))})]}),t.jsx("div",{className:r("flex","flex-row","flex-wrap","gap-m","w-fit"),children:Object.entries(p).filter(([e])=>e.toLowerCase().includes(s.toLowerCase())).map(([e,c])=>t.jsxs("div",{className:r("flex","flex-col","gap-m","p-m","border-default","radius-soft"),style:{blockSize:150,inlineSize:150},children:[t.jsx("span",{className:r("font-script-s","text-weak","break-all"),children:d(e)}),t.jsx("div",{className:r("flex","items-center","justify-center","flex-1","text-default"),children:t.jsx(c,{className:r(`size-${i}`)})})]},e))})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
