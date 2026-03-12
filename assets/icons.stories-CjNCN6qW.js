import{r as m,j as e}from"./iframe-DuYosUFD.js";import{A as l}from"./index-DcMjNI1G.js";import{T as p}from"./TextField-DnT8J57g.js";import{c as s}from"./classNames-zePBlFY_.js";import"./preload-helper-PPVm8Dsz.js";import"./add-Vg2U0mSE.js";import"./move-right-k-BFnqYV.js";import"./bookmark-wwgiEeRj.js";import"./text-CIJRCYzm.js";import"./close-Dyzj91Dc.js";import"./upload-ByT4gcdH.js";import"./sort-descending-BgZWkgGz.js";import"./undo-DK_DlrIJ.js";import"./settings-B-EBrcRv.js";import"./copy-CWKkJg96.js";import"./delete-D4O4nVVP.js";import"./documentation-DABWpqS4.js";import"./edit-DeXKaZx5.js";import"./error-CXY2goRU.js";import"./favorited-DIjhIM7P.js";import"./generate-with-ai-DxZm9B-P.js";import"./subtract-DEs7_1mh.js";import"./hide-D4X3-KSw.js";import"./history-CMLopSL0.js";import"./search-__Gpjj1t.js";import"./info-Bxa3p2DF.js";import"./person-C2sJpCzJ.js";import"./map-Be-Ow4bt.js";import"./more-vertical-B2Ek-mRZ.js";import"./move-left-DN19XWNV.js";import"./new-tab-Dp-d2eWd.js";import"./notification-DNCR-roH.js";import"./paste-scJGRfKP.js";import"./show-Gqxo-URH.js";import"./warning-DO6AU_ml.js";import"./tenant-r2v49Krg.js";import"./useValueControl-uslnr95T.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-DjHAObcc.js";import"./useI18n-BjJPdLTM.js";import"./sprout-CvRh1TM0.js";import"./Button-DI0ZynHS.js";import"./Button.module-D6kzoXVn.js";import"./common-bQH3ZR03.js";import"./Badge-CPj7NTO4.js";import"./Tooltip-BJFaRrUy.js";import"./useId-DRaip_NL.js";import"./ProgressCircular-BvkbtoQi.js";import"./InputButton-CpK-Hq67.js";import"./useControl-DOCWDNqa.js";import"./useFieldProps-BwY4Fxzy.js";import"./useFieldAriaProps-oaAu_ksb.js";import"./Field-MvuQg19v.js";import"./FieldLabel-BP167ITs.js";import"./InfoTooltipPrimitive-D-yTz8eW.js";import"./Popover-D-qbv7RV.js";import"./padding-BWxXYvmb.js";import"./HelperText-6attHadj.js";const ue={title:"Icons"};function n(r){return r.endsWith("Icon")?r.slice(0,-4):r}const a={render:()=>{const[r,o]=m.useState("");return e.jsxs("div",{className:s("flex","flex-col","gap-l","flex-wrap"),children:[e.jsx("div",{className:s("flex-noreset","w-s","flex-row","items-start","p-s","gap-s","justify-start"),children:e.jsx(p,{placeholder:"Search icons...",value:r,onChange:t=>{o(t.target.value)},"aria-label":"Search icons"})}),e.jsx("div",{className:s("flex","flex-row","flex-wrap","gap-m","w-fit"),children:Object.entries(l).filter(([t])=>t.toLowerCase().includes(r.toLowerCase())).map(([t,i])=>e.jsxs("div",{className:s("flex","flex-col","gap-m","p-m","border-default","radius-soft"),style:{blockSize:150,inlineSize:150},children:[e.jsx("span",{className:s("font-script-s","text-weak","break-all"),children:n(t)}),e.jsx("div",{className:s("flex","items-center","justify-center","flex-1","text-default"),children:e.jsx(i,{})})]},t))})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = useState("");
    return <div className={classNames("flex", "flex-col", "gap-l", "flex-wrap")}>
        <div className={classNames("flex-noreset", "w-s", "flex-row", "items-start", "p-s", "gap-s", "justify-start")}>
          <TextField placeholder="Search icons..." value={search} onChange={e => {
          setSearch(e.target.value);
        }} aria-label="Search icons" />
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
                  <Icon />
                </div>
              </div>)}
        </div>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const he=["AllIcons"];export{a as AllIcons,he as __namedExportsOrder,ue as default};
