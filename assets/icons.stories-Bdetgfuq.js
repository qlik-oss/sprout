import{r as m,j as e}from"./iframe-Bp0nu8X6.js";import{A as l}from"./index-ebX9fmIs.js";import{T as p}from"./TextField-BXk7dWee.js";import{c as s}from"./classNames-BUd7eP-S.js";import"./preload-helper-PPVm8Dsz.js";import"./add-DiIoSsfz.js";import"./move-right-CK_WVS8x.js";import"./bookmark-BjcmHdPC.js";import"./text-CczEg3TU.js";import"./close-CJ5Ns5F2.js";import"./upload-8H-KEWMp.js";import"./sort-descending-Denwaaa7.js";import"./undo-DC82ZJyQ.js";import"./settings-AJKzQdc1.js";import"./copy-BYWkoi5_.js";import"./delete-CSyzwOk8.js";import"./documentation-6ghMNW6p.js";import"./edit-Dwo3NC30.js";import"./error-BcSU3HuT.js";import"./favorited-xiONJzzc.js";import"./generate-with-ai-BLISbXKJ.js";import"./subtract-Co-tykP9.js";import"./hide-DryimjwN.js";import"./history-Ddui-ZW8.js";import"./search-DYca-rrs.js";import"./info-DGMlSu_6.js";import"./person-lmjX5hbo.js";import"./map-BFrox4w-.js";import"./more-vertical-gmqyBEHm.js";import"./move-left-CfXNAwsO.js";import"./new-tab-uRDDQ1v4.js";import"./notification-Ah1qGB0i.js";import"./paste-By_tHdXO.js";import"./show-BUDxgafp.js";import"./warning-CT_3wb2_.js";import"./tenant-5cFbeFqF.js";import"./useValueControl-DAQoJtS1.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-D5e_-V2O.js";import"./useI18n-D2jaKmf9.js";import"./sprout-rpr_484f.js";import"./Button-CBkOB6z4.js";import"./Button.module-BRCMjQTg.js";import"./common-bQH3ZR03.js";import"./Badge-Br2oOa7d.js";import"./Tooltip-B3oqGcOh.js";import"./useId-C38y77Da.js";import"./ProgressCircular-DO25q9z0.js";import"./InputButton-BmHhXOBc.js";import"./useControl-CS67YHbK.js";import"./useFieldProps-Cvv95kAj.js";import"./useFieldAriaProps-lqPBO4h4.js";import"./Field-4fYLnCC7.js";import"./FieldLabel-DBAKdsPr.js";import"./InfoTooltipPrimitive-C8AQG5h1.js";import"./Popover-wxpNpCGf.js";import"./padding-Z5rKYLph.js";import"./HelperText-NWZ1zrXV.js";const ue={title:"Icons"};function n(r){return r.endsWith("Icon")?r.slice(0,-4):r}const a={render:()=>{const[r,o]=m.useState("");return e.jsxs("div",{className:s("flex","flex-col","gap-l","flex-wrap"),children:[e.jsx("div",{className:s("flex-noreset","w-s","flex-row","items-start","p-s","gap-s","justify-start"),children:e.jsx(p,{placeholder:"Search icons...",value:r,onChange:t=>{o(t.target.value)},"aria-label":"Search icons"})}),e.jsx("div",{className:s("flex","flex-row","flex-wrap","gap-m","w-fit"),children:Object.entries(l).filter(([t])=>t.toLowerCase().includes(r.toLowerCase())).map(([t,i])=>e.jsxs("div",{className:s("flex","flex-col","gap-m","p-m","border-default","radius-soft"),style:{blockSize:150,inlineSize:150},children:[e.jsx("span",{className:s("font-script-s","text-weak","break-all"),children:n(t)}),e.jsx("div",{className:s("flex","items-center","justify-center","flex-1","text-default"),children:e.jsx(i,{})})]},t))})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
