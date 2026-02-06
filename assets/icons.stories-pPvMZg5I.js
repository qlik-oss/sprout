import{r as o,j as t}from"./iframe-B4-nXs83.js";import{A as p}from"./index-DD81b0jm.js";import{T as x}from"./TextField-7zXX973B.js";import{S as l}from"./SelectComposition-BaT4dRxA.js";import{c as r}from"./classNames-eIMwhIDK.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-BPhJi-H4.js";import"./Next-BDMe8uha.js";import"./Bookmark-DcjvKNmY.js";import"./Upload-BRvcNbMW.js";import"./Text-dLWgk66T.js";import"./Close-BgZ1uSF_.js";import"./SortDescending-CKWll_c0.js";import"./Undo-DDEyeJBa.js";import"./Person-BtJ6dcuR.js";import"./Copy-DgfNcGoS.js";import"./Delete-D5Va6LI1.js";import"./Filter-DrTBmiDb.js";import"./Edit-DzJTkpRk.js";import"./Error-D7GK58M_.js";import"./GenerateWithAi-s4i5IFD7.js";import"./History-rKaZ75zu.js";import"./Search-Ci5Kqw6S.js";import"./Info-DTuI-Of7.js";import"./Subtract-5iLtEsER.js";import"./Map-D3Po8JT9.js";import"./NewTab-Bx55GzRW.js";import"./Notification-BWSivEeO.js";import"./Paste-bE7IXLRc.js";import"./Warning-BAtVE0v3.js";import"./Tenant-Y0aD2fSL.js";import"./useValueControl-CtQhivtG.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CKYJ27w7.js";import"./useI18n-peGtGOOS.js";import"./sprout-SOoz1jzb.js";import"./Button-Cv6yFaKa.js";import"./icons-DuVV-LnW.js";import"./Button.module-C2ELNEem.js";import"./Badge-DvRPOsa9.js";import"./Tooltip-BmEIvhna.js";import"./useId-D71ehFqY.js";import"./ProgressCircular-CVxkPa9h.js";import"./InputButton-bRj-07Rv.js";import"./useControl-DdRfwf_0.js";import"./useFieldProps-BBrAaKPm.js";import"./useFieldAriaProps-Cbzvhn2j.js";import"./Field-B3vU29tm.js";import"./FieldLabel-DdZy9tvM.js";import"./InfoTooltipPrimitive-D8jVv135.js";import"./Popover-CS5Gu0v5.js";import"./HelperText-ByCNTNQH.js";import"./Menu-DW09POVa.js";import"./Divider-DdqecLrr.js";import"./list-B1zo5gaH.js";import"./IconButton-D-KEKYAI.js";import"./Skeleton-BsrAjAGs.js";import"./TagGroup-BFI8F1G-.js";import"./Tag-CObVgYEg.js";import"./TextOverflow-dP4PdhnE.js";import"./useHasOverflow-DZlgyJuB.js";const we={title:"Icons"},f=["s","m","l","xl","xxl","2xl","3xl","4xl","5xl","6xl","7xl"];function d(s){return s.endsWith("Icon")?s.slice(0,-4):s}const a={render:()=>{const[s,m]=o.useState(""),[i,n]=o.useState("xxl");return t.jsxs("div",{className:r("flex","flex-col","gap-l","flex-wrap"),children:[t.jsxs("div",{className:r("flex-noreset","w-m","flex-row","items-start","p-s","gap-s","justify-start"),children:[t.jsx(x,{placeholder:"Search icons...",value:s,onChange:e=>{m(e.target.value)},"aria-label":"Search icons"}),t.jsx(l.Select,{"aria-label":"Size",value:i,onChange:e=>{n(e.target.value||"xxl")},children:f.map(e=>t.jsx(l.Option,{value:e,children:e},e))})]}),t.jsx("div",{className:r("flex","flex-row","flex-wrap","gap-m","w-fit"),children:Object.entries(p).filter(([e])=>e.toLowerCase().includes(s.toLowerCase())).map(([e,c])=>t.jsxs("div",{className:r("flex","flex-col","gap-m","p-m","border-default","radius-soft"),style:{blockSize:150,inlineSize:150},children:[t.jsx("span",{className:r("font-script-s","text-weak","break-all"),children:d(e)}),t.jsx("div",{className:r("flex","items-center","justify-center","flex-1","text-default"),children:t.jsx(c,{className:r(`size-${i}`)})})]},e))})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
