import{r as m,j as e}from"./iframe-lMEil1TA.js";import{A as l}from"./index-XQNqsQ5O.js";import{T as p}from"./TextField-BJ7hRtnc.js";import{c as s}from"./classNames-B_Twdkca.js";import"./preload-helper-PPVm8Dsz.js";import"./add-OoYVhzw8.js";import"./move-right-CxgFVc5X.js";import"./bookmark-CXl6cost.js";import"./text-Dvq4klSt.js";import"./close-CrtKz3TF.js";import"./upload-531rT3Nn.js";import"./sort-descending-DBF7-f7_.js";import"./undo-DPBprsjr.js";import"./settings-oS6F6h_p.js";import"./copy-8HFCGFIv.js";import"./delete-CG-UgknF.js";import"./documentation-3Ki2NWn5.js";import"./edit-Bij8o67D.js";import"./error-D8ruDyrJ.js";import"./favorited-eFV-EpYm.js";import"./generate-with-ai-DxtmBI1k.js";import"./subtract-BFWMKw7W.js";import"./hide-J1VEVLcZ.js";import"./history-DsyI5OdF.js";import"./search-Cjd_t8Yd.js";import"./info-B4Qytw2Z.js";import"./person-6TmEe_Ks.js";import"./map-Bw_UfIsn.js";import"./more-vertical-3Ccbf6lb.js";import"./move-left-BJhvkpSj.js";import"./new-tab-CrWdziAn.js";import"./notification-BvurbYEj.js";import"./paste-CWtbLVgn.js";import"./show-CL2zF-Fm.js";import"./warning-X1qrbfM3.js";import"./tenant-DisbRmPu.js";import"./useValueControl-JgME-MAi.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-ikaB6BKo.js";import"./useI18n-CDksjSf0.js";import"./sprout-fe7_-ZbP.js";import"./Button-B3VC5XuI.js";import"./Button.module-ZjqCyrss.js";import"./common-bQH3ZR03.js";import"./Badge-BUdEAQ9u.js";import"./Tooltip-wsnfK-o5.js";import"./useId-BL8g_bWL.js";import"./ProgressCircular-DzkpdMMq.js";import"./InputButton-BcBP8Pmj.js";import"./useControl-Crf27nxo.js";import"./useFieldProps-lilq_Daj.js";import"./useFieldAriaProps-BeXWYVK1.js";import"./Field-C2NiUE28.js";import"./FieldLabel-hmMjgROH.js";import"./InfoTooltipPrimitive-BLPBLLHp.js";import"./Popover-C2pxt5JU.js";import"./padding-ChQcYsRi.js";import"./HelperText-B_x3JSnr.js";const ue={title:"Icons"};function n(r){return r.endsWith("Icon")?r.slice(0,-4):r}const a={render:()=>{const[r,o]=m.useState("");return e.jsxs("div",{className:s("flex","flex-col","gap-l","flex-wrap"),children:[e.jsx("div",{className:s("flex-noreset","w-s","flex-row","items-start","p-s","gap-s","justify-start"),children:e.jsx(p,{placeholder:"Search icons...",value:r,onChange:t=>{o(t.target.value)},"aria-label":"Search icons"})}),e.jsx("div",{className:s("flex","flex-row","flex-wrap","gap-m","w-fit"),children:Object.entries(l).filter(([t])=>t.toLowerCase().includes(r.toLowerCase())).map(([t,i])=>e.jsxs("div",{className:s("flex","flex-col","gap-m","p-m","border-default","radius-soft"),style:{blockSize:150,inlineSize:150},children:[e.jsx("span",{className:s("font-script-s","text-weak","break-all"),children:n(t)}),e.jsx("div",{className:s("flex","items-center","justify-center","flex-1","text-default"),children:e.jsx(i,{})})]},t))})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
