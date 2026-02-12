import{r as o,j as t}from"./iframe-B9QkJTIx.js";import{A as p}from"./index-CiVzO2ac.js";import{T as x}from"./TextField-D-V1YVvE.js";import{S as l}from"./SelectComposition-C03WeBSC.js";import{c as r}from"./classNames-CL7ibyjj.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-BjVpk_Pb.js";import"./Next-DxRLu1Wn.js";import"./Bookmark-CJMWsvxd.js";import"./Upload-DjMqRod7.js";import"./Text-CFyCRCFc.js";import"./Close-ajP2gTu5.js";import"./SortDescending-CLGWMbYc.js";import"./Undo-DzDelDAE.js";import"./Person-B_HiAQwp.js";import"./Copy-CYZlhrEr.js";import"./Delete-DvtIirUL.js";import"./Filter-CLC5itR3.js";import"./Edit-BObi6k7U.js";import"./Error-Blwva2SQ.js";import"./GenerateWithAi-DIR2TiqE.js";import"./History-EyRsG5aa.js";import"./Search-DTGA04Xo.js";import"./Info-BWEZF-KM.js";import"./Subtract-BWidOSSU.js";import"./Map-D73tVC2W.js";import"./NewTab-BMd_bij_.js";import"./Notification-B0ihougB.js";import"./Paste-Bz8M9Fm4.js";import"./Warning-B4wA6Xoa.js";import"./Tenant-YIqGolFt.js";import"./useValueControl-Db5KsQ4Q.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-Dge73wkB.js";import"./useI18n-CoLWfcqJ.js";import"./sprout-DgR7PjaR.js";import"./Button-DJuasLWt.js";import"./icons-Duy9VSzr.js";import"./Button.module-C2ELNEem.js";import"./Badge--_cWWvgS.js";import"./Tooltip-Csm9nS2W.js";import"./useId-HR4iyljw.js";import"./ProgressCircular-CftNoQ2F.js";import"./InputButton-BrKvM5py.js";import"./useControl-CYR4PP7j.js";import"./useFieldProps-YNPoJw4_.js";import"./useFieldAriaProps-B8MgKfHo.js";import"./Field-DqJdoNjO.js";import"./FieldLabel-DJkQe3UY.js";import"./InfoTooltipPrimitive-DoWpqGGg.js";import"./Popover-GGNis2px.js";import"./HelperText-BYWuUqrF.js";import"./Menu-CYXlESaf.js";import"./Divider-CQpF3Ph8.js";import"./list-B1zo5gaH.js";import"./IconButton-CrQ3EA5C.js";import"./Skeleton-wIQNnjB0.js";import"./TagGroup-h28o7ATL.js";import"./Tag-B3eV28ox.js";import"./TextOverflow-NR2fjX4A.js";import"./useHasOverflow-BYbTVzOs.js";const we={title:"Icons"},f=["s","m","l","xl","xxl","2xl","3xl","4xl","5xl","6xl","7xl"];function d(s){return s.endsWith("Icon")?s.slice(0,-4):s}const a={render:()=>{const[s,m]=o.useState(""),[i,n]=o.useState("xxl");return t.jsxs("div",{className:r("flex","flex-col","gap-l","flex-wrap"),children:[t.jsxs("div",{className:r("flex-noreset","w-m","flex-row","items-start","p-s","gap-s","justify-start"),children:[t.jsx(x,{placeholder:"Search icons...",value:s,onChange:e=>{m(e.target.value)},"aria-label":"Search icons"}),t.jsx(l.Select,{"aria-label":"Size",value:i,onChange:e=>{n(e.target.value||"xxl")},children:f.map(e=>t.jsx(l.Option,{value:e,children:e},e))})]}),t.jsx("div",{className:r("flex","flex-row","flex-wrap","gap-m","w-fit"),children:Object.entries(p).filter(([e])=>e.toLowerCase().includes(s.toLowerCase())).map(([e,c])=>t.jsxs("div",{className:r("flex","flex-col","gap-m","p-m","border-default","radius-soft"),style:{blockSize:150,inlineSize:150},children:[t.jsx("span",{className:r("font-script-s","text-weak","break-all"),children:d(e)}),t.jsx("div",{className:r("flex","items-center","justify-center","flex-1","text-default"),children:t.jsx(c,{className:r(`size-${i}`)})})]},e))})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
