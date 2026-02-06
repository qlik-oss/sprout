import{r as l,j as t}from"./iframe-itHhOQJ8.js";import{A as c}from"./index-B_CWJT9D.js";import{T as x}from"./TextField-CrzVSwY1.js";import{S as o}from"./SelectComposition-1S4bJavw.js";import{c as r}from"./classNames-8u_YGv6N.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-sGTd4JLT.js";import"./Next-Cf3Uq2yv.js";import"./Bookmark-B-8xOmKH.js";import"./Upload-Dc2Rb3D-.js";import"./Text-CLPV3Ayx.js";import"./Close-DeQxVhkZ.js";import"./SortDescending-BgGAHRpl.js";import"./Undo-CedmJl7g.js";import"./Person-CY2HVuRl.js";import"./Copy-BZIqKWxc.js";import"./Delete-BVSKNF4j.js";import"./Filter-Mkk8kKEU.js";import"./Edit-C4Gy6c5s.js";import"./Error-CgMRcq7x.js";import"./GenerateWithAi-CzXUyJWm.js";import"./History-BANgh6BZ.js";import"./Search-Cgypvig1.js";import"./Info-CR8Ra2BB.js";import"./Subtract-BguCuCMl.js";import"./Map-BgJ3dtI2.js";import"./NewTab-CD_BiguK.js";import"./Notification-CB15fS1l.js";import"./Paste-A6OS6xze.js";import"./Warning-Wt3nbj6y.js";import"./Tenant-B8iNkMMj.js";import"./useValueControl-BoLujgBt.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DcDxQLMY.js";import"./useI18n-DI5kaiCu.js";import"./sprout-5bk7oM4L.js";import"./Button-D1L5V1zp.js";import"./icons-ByJhQmwX.js";import"./Button.module-C2ELNEem.js";import"./Badge-Fno8cZv5.js";import"./Tooltip-CsCotLcm.js";import"./useId-B9bqBKq5.js";import"./ProgressCircular-DxTh7cF9.js";import"./InputButton-CobW-7UY.js";import"./useControl-tJx49zVQ.js";import"./useFieldProps-ZapC1bKU.js";import"./useFieldAriaProps-DJiNiZ9_.js";import"./Field-BglQDcK_.js";import"./FieldLabel-k_vhoLHi.js";import"./InfoTooltipPrimitive-BycnW3Wq.js";import"./Popover-D-VXifUT.js";import"./HelperText-CZI4gvqv.js";import"./Menu-BI017uJL.js";import"./Divider-Z7gRZlXH.js";import"./list-B1zo5gaH.js";import"./IconButton-BFY56UPS.js";import"./Skeleton-skQ_3lbg.js";import"./TagGroup-B35wMlua.js";import"./Tag-D6Whh4y4.js";import"./TextOverflow-ZR1lg4UG.js";import"./useHasOverflow-BPrWXac9.js";const we={title:"Icons"},f=["s","m","l","xl","xxl","2xl","3xl","4xl","5xl","6xl","7xl"],s={render:()=>{const[a,m]=l.useState(""),[i,n]=l.useState("xxl");return t.jsxs("div",{className:r("flex","flex-col","gap-l","flex-wrap"),children:[t.jsxs("div",{className:r("flex-noreset","w-m","flex-row","items-start","p-s","gap-s","justify-start"),children:[t.jsx(x,{placeholder:"Search icons...",value:a,onChange:e=>{m(e.target.value)},"aria-label":"Search icons"}),t.jsx(o.Select,{"aria-label":"Size",value:i,onChange:e=>{n(e.target.value||"xxl")},children:f.map(e=>t.jsx(o.Option,{value:e,children:e},e))})]}),t.jsx("div",{className:r("flex","flex-row","flex-wrap","gap-m","w-fit"),children:Object.entries(c).filter(([e])=>e.toLowerCase().includes(a.toLowerCase())).map(([e,p])=>t.jsxs("div",{className:r("flex","flex-col","gap-m","p-m","border-default","radius-soft"),style:{blockSize:150,inlineSize:150},children:[t.jsx("span",{className:r("font-script-s","text-weak","break-all"),children:e}),t.jsx("div",{className:r("flex","items-center","justify-center","flex-1","text-default"),children:t.jsx(p,{className:r(`size-${i}`)})})]},e))})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
                <span className={classNames("font-script-s", "text-weak", "break-all")}>{name}</span>
                <div className={classNames("flex", "items-center", "justify-center", "flex-1", "text-default")}>
                  <Icon className={classNames(\`size-\${size}\`)} />
                </div>
              </div>)}
        </div>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const ge=["AllIcons"];export{s as AllIcons,ge as __namedExportsOrder,we as default};
