import{r as m,j as e}from"./iframe-BM36tKY9.js";import{A as l}from"./index-DM34Bggu.js";import{T as p}from"./TextField-xzsdu2-Y.js";import{c as s}from"./classNames-D2MVtjzd.js";import"./preload-helper-PPVm8Dsz.js";import"./add-VKxZMCZ1.js";import"./move-right-C1_1RL8h.js";import"./bookmark-D7CrCsbo.js";import"./text-BT02E20n.js";import"./close-CYEv2BwJ.js";import"./upload-DAbLlB0c.js";import"./sort-descending-CgwSpVd_.js";import"./undo-BnneyCmg.js";import"./settings-DCJi43F0.js";import"./copy-5pLa4d1M.js";import"./delete-iC7mKKRu.js";import"./documentation-DEtevtWp.js";import"./edit-CKp5FD3E.js";import"./error-DJM79MqW.js";import"./favorited-BqMbjWSD.js";import"./generate-with-ai-C7ZdkiKx.js";import"./subtract-CmdG1iV6.js";import"./hide-BC9kgIHr.js";import"./history-Ce6MLgVu.js";import"./search-D3DMdc9S.js";import"./info-By4pCjMF.js";import"./person-BNKCLHkq.js";import"./map-DnBNu0cY.js";import"./more-vertical-BVZqPJep.js";import"./move-left-R6H6x7U2.js";import"./new-tab-CpKZypuy.js";import"./notification-Car9C9Fn.js";import"./paste-DywRabwS.js";import"./show-C6fFsymT.js";import"./warning-GTpknHYS.js";import"./tenant-CkbwWCOd.js";import"./useValueControl-C1TwhPrN.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-lrfYqLit.js";import"./useI18n-BRpGJeHe.js";import"./sprout-BcBmzfoy.js";import"./Button-wScfBKxi.js";import"./Button.module-Bn-SZyJ6.js";import"./common-bQH3ZR03.js";import"./Badge-CjLUVOBS.js";import"./Tooltip-DOknWAYm.js";import"./useId-Cih_zwB8.js";import"./ProgressCircular-DoqAoY81.js";import"./InputButton-CEOVqhok.js";import"./useControl-Bq0hCRWZ.js";import"./useFieldProps-C0FKGzLz.js";import"./useFieldAriaProps-D-kZa2Fo.js";import"./Field-BP_0b4CU.js";import"./FieldLabel-DHI2P9wk.js";import"./InfoTooltipPrimitive-B8ta45BR.js";import"./Popover-DaYy3ijw.js";import"./padding-BVrxRlLA.js";import"./HelperText-BT_m4RdC.js";const ue={title:"Icons"};function n(r){return r.endsWith("Icon")?r.slice(0,-4):r}const a={render:()=>{const[r,o]=m.useState("");return e.jsxs("div",{className:s("flex","flex-col","gap-l","flex-wrap"),children:[e.jsx("div",{className:s("flex-noreset","w-s","flex-row","items-start","p-s","gap-s","justify-start"),children:e.jsx(p,{placeholder:"Search icons...",value:r,onChange:t=>{o(t.target.value)},"aria-label":"Search icons"})}),e.jsx("div",{className:s("flex","flex-row","flex-wrap","gap-m","w-fit"),children:Object.entries(l).filter(([t])=>t.toLowerCase().includes(r.toLowerCase())).map(([t,i])=>e.jsxs("div",{className:s("flex","flex-col","gap-m","p-m","border-default","radius-soft"),style:{blockSize:150,inlineSize:150},children:[e.jsx("span",{className:s("font-script-s","text-weak","break-all"),children:n(t)}),e.jsx("div",{className:s("flex","items-center","justify-center","flex-1","text-default"),children:e.jsx(i,{})})]},t))})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
