import{r as o,j as t}from"./iframe-CxjlquLv.js";import{A as p}from"./index-CQX_9EpV.js";import{T as x}from"./TextField-B4G6cpkZ.js";import{S as l}from"./SelectComposition-BpZ2JkqS.js";import{c as r}from"./classNames-OYhIMgh8.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-DmDJ4n-J.js";import"./Next-CVX7Uflh.js";import"./Bookmark-BfuinAGV.js";import"./Upload-DugaVjZ7.js";import"./Text-DQVBHukE.js";import"./Close-PE5EsNbf.js";import"./SortDescending-mZ0sHp6G.js";import"./Undo-p2AAmykz.js";import"./Person-BchZ2R-s.js";import"./Copy-E7NdQvaj.js";import"./Delete-DRUG6ixk.js";import"./Filter-CNv6SvW2.js";import"./Edit-CBUd60Nh.js";import"./Error-Cwyymijo.js";import"./GenerateWithAi-D14jyyKQ.js";import"./History-CjSFFZ-w.js";import"./Search-BpoXSxFe.js";import"./Info-CmHBCOIz.js";import"./Subtract-Cskw5IaI.js";import"./Map-BEEFfX2w.js";import"./NewTab-thqnkD83.js";import"./Notification-CoJL-wfE.js";import"./Paste-DbcEs-AL.js";import"./Warning-x2bCUA0M.js";import"./Tenant-BNPdNRwP.js";import"./useValueControl-z08PllWD.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BEoUSBug.js";import"./useI18n-DzUau43H.js";import"./sprout-BMjCkMv3.js";import"./Button-DovarDo_.js";import"./icons-LhMznsFI.js";import"./Button.module-CmdpHks8.js";import"./Badge-CT3AYSwq.js";import"./Tooltip-BF9waJvZ.js";import"./useId-BK-xxnhR.js";import"./ProgressCircular-54Bo0zt0.js";import"./InputButton-DFNinxRI.js";import"./useControl-BQvv0ErP.js";import"./useFieldProps-Cz5SVI77.js";import"./useFieldAriaProps-D_SD2qVI.js";import"./Field-lZWJhm0y.js";import"./FieldLabel-DnVlDuiw.js";import"./InfoTooltipPrimitive-e-SBoNBf.js";import"./Popover-D095V7L6.js";import"./HelperText-CEBD_W8W.js";import"./Menu-BRV3ljPm.js";import"./Divider-7ZQA3_Ws.js";import"./list-B1zo5gaH.js";import"./IconButton-Dn95SqkZ.js";import"./Skeleton-CHWVn6Ej.js";import"./TagGroup-DuRTMnnk.js";import"./Tag-BMD7KwwB.js";import"./TextOverflow-qrd-zg5J.js";import"./useHasOverflow-BuWth_t2.js";const we={title:"Icons"},f=["s","m","l","xl","xxl","2xl","3xl","4xl","5xl","6xl","7xl"];function d(s){return s.endsWith("Icon")?s.slice(0,-4):s}const a={render:()=>{const[s,m]=o.useState(""),[i,n]=o.useState("xxl");return t.jsxs("div",{className:r("flex","flex-col","gap-l","flex-wrap"),children:[t.jsxs("div",{className:r("flex-noreset","w-m","flex-row","items-start","p-s","gap-s","justify-start"),children:[t.jsx(x,{placeholder:"Search icons...",value:s,onChange:e=>{m(e.target.value)},"aria-label":"Search icons"}),t.jsx(l.Select,{"aria-label":"Size",value:i,onChange:e=>{n(e.target.value||"xxl")},children:f.map(e=>t.jsx(l.Option,{value:e,children:e},e))})]}),t.jsx("div",{className:r("flex","flex-row","flex-wrap","gap-m","w-fit"),children:Object.entries(p).filter(([e])=>e.toLowerCase().includes(s.toLowerCase())).map(([e,c])=>t.jsxs("div",{className:r("flex","flex-col","gap-m","p-m","border-default","radius-soft"),style:{blockSize:150,inlineSize:150},children:[t.jsx("span",{className:r("font-script-s","text-weak","break-all"),children:d(e)}),t.jsx("div",{className:r("flex","items-center","justify-center","flex-1","text-default"),children:t.jsx(c,{className:r(`size-${i}`)})})]},e))})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
