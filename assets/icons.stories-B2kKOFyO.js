import{r as m,j as e}from"./iframe-ZO3EpHUh.js";import{A as l}from"./index-jgDKZr1Q.js";import{T as p}from"./TextField-DZIgwTux.js";import{c as s}from"./classNames--9J8KLdq.js";import"./preload-helper-PPVm8Dsz.js";import"./add-DMALUOT2.js";import"./move-right-0KirwidR.js";import"./bookmark-9oZ8n8m5.js";import"./text-CcDxx1vh.js";import"./close-CFDHWYro.js";import"./upload-n0dw6Lvi.js";import"./sort-descending-DuwJD51Q.js";import"./undo-BAeS--dQ.js";import"./settings-DHuZ5QaZ.js";import"./copy-IFVMzOQk.js";import"./delete-B7ujbQKr.js";import"./documentation-BinzBdHI.js";import"./edit-BH8KrMyX.js";import"./error-Lg61ZlTl.js";import"./favorited-D41QBsE5.js";import"./generate-with-ai-D3Na992K.js";import"./subtract-1H6W3dfs.js";import"./hide-CTXMH0dL.js";import"./history-D4JWxRxn.js";import"./search-D8g2pafp.js";import"./info-DvsPKJb0.js";import"./person-Dece0dLK.js";import"./map-CMc8fJla.js";import"./more-vertical-D3wa18aZ.js";import"./move-left-CblN84mj.js";import"./new-tab-CfvnCP2A.js";import"./notification-BwvpND0x.js";import"./paste-DoYSMiJq.js";import"./show-Do692Dy4.js";import"./warning-LAozOqxS.js";import"./tenant-1icmyCcT.js";import"./useValueControl-B3H3Rg3H.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-CTOYJqpW.js";import"./useI18n-CNj_Vmmx.js";import"./sprout-JWClaPEx.js";import"./Button-DwNMLHHD.js";import"./Button.module-CmtyAZAy.js";import"./common-bQH3ZR03.js";import"./Badge-CIU99cFr.js";import"./Tooltip-CjNQJJZv.js";import"./useId-peRdP77j.js";import"./ProgressCircular-Bbm1pjbl.js";import"./InputButton-Binv3ZHd.js";import"./useControl-B2Bmxigf.js";import"./useFieldProps-DqU5TkBR.js";import"./useFieldAriaProps-B_vYltrV.js";import"./Field-uEq3IPbz.js";import"./FieldLabel-DyqdK2ie.js";import"./InfoTooltipPrimitive-CX2r-Osw.js";import"./Popover-BDw3NIcl.js";import"./padding-nVQxVZeA.js";import"./HelperText-BqjFHr21.js";const ue={title:"Icons"};function n(r){return r.endsWith("Icon")?r.slice(0,-4):r}const a={render:()=>{const[r,o]=m.useState("");return e.jsxs("div",{className:s("flex","flex-col","gap-l","flex-wrap"),children:[e.jsx("div",{className:s("flex-noreset","w-s","flex-row","items-start","p-s","gap-s","justify-start"),children:e.jsx(p,{placeholder:"Search icons...",value:r,onChange:t=>{o(t.target.value)},"aria-label":"Search icons"})}),e.jsx("div",{className:s("flex","flex-row","flex-wrap","gap-m","w-fit"),children:Object.entries(l).filter(([t])=>t.toLowerCase().includes(r.toLowerCase())).map(([t,i])=>e.jsxs("div",{className:s("flex","flex-col","gap-m","p-m","border-default","radius-soft"),style:{blockSize:150,inlineSize:150},children:[e.jsx("span",{className:s("font-script-s","text-weak","break-all"),children:n(t)}),e.jsx("div",{className:s("flex","items-center","justify-center","flex-1","text-default"),children:e.jsx(i,{})})]},t))})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
