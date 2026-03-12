import{r as x,j as e}from"./iframe-Bp0nu8X6.js";import{c as r}from"./classNames-BUd7eP-S.js";import{F as E,a as A,b as D,c as de}from"./sort-descending-Denwaaa7.js";import{u as j}from"./useI18n-D2jaKmf9.js";import{I as F}from"./IconButton-Bu152FGZ.js";import{M as C}from"./Menu-Co2VX3TG.js";import{C as H}from"./Checkbox-Djd4-Wye.js";import{L as ce,a as Ce}from"./List-Dh5d5DNB.js";import{P as be}from"./Popover-wxpNpCGf.js";import{T as ue}from"./TextField-BXk7dWee.js";import{D as _}from"./Divider-B3J7iNd7.js";import{R as I}from"./Radio-CN8Ey4gw.js";import{F as xe}from"./hide-DryimjwN.js";import{M as L}from"./Message-DGkKaG0R.js";import{B as he}from"./Button-CBkOB6z4.js";const M=x.createContext({overflowY:"default",scrollBarWidth:0,setScrollBarWidth:()=>{}}),Te="_table_13ypz_1",pe="_thead_13ypz_5",fe="_th_13ypz_5",je="_tr_interactive_13ypz_16",me="_tr_selected_13ypz_20",ve="_cell_13ypz_28",ge="_cell_state_13ypz_35",we="_cell_content_13ypz_52",He="_tr_13ypz_16",ye="_tbody_13ypz_105",Ne="_cell_action_wrapper_13ypz_133",Se="_sort_indicator__wrapper_13ypz_158",_e="_resizing_indicator_13ypz_162",Ie="_row_number_13ypz_180",T={table:Te,thead:pe,th:fe,tr_interactive:je,tr_selected:me,cell:ve,cell_state:ge,cell_content:we,tr:He,tbody:ye,cell_action_wrapper:Ne,sort_indicator__wrapper:Se,resizing_indicator:_e,row_number:Ie};function V({children:a,...t}){const n=x.useContext(M),[o,d]=x.useState(0),i=x.useRef(null);return x.useEffect(()=>{if(i.current&&(n.setScrollBarWidth(i.current.offsetWidth-i.current.clientWidth),n.overflowY==="virtualized")){const c=i.current.parentElement?.querySelectorAll("[role='rowgroup']"),s=Array.from(c||[]).indexOf(i.current);if(s>0){const b=c?.[s-1];b&&d(b.clientHeight)}}},[n.overflowY,i.current]),n.overflowY==="virtualized"?e.jsx("div",{role:"rowgroup",ref:i,className:r("overflow-auto","bg-default","w-full","border-box",T.tbody),style:{blockSize:n.containerHeight?`${n.containerHeight-o}px`:void 0},children:e.jsx("div",{className:r("relative","w-full"),...t,style:{blockSize:n.contentHeight?`${n.contentHeight}px`:void 0},children:a})}):e.jsx("div",{role:"rowgroup",ref:i,className:r("bg-default","w-full","border-box","overflow-y-auto",T.tbody),...t,children:a})}V.displayName="Table.Body";const R=x.forwardRef($);function $({children:a,...t},n){return e.jsx("div",{className:r("flex","flex-row","pr-m","gap-s","items-center","justify-start",T.cell_action_wrapper),"data-layoutid":"cell-action-wrapper",ref:n,...t,children:a})}$.displayName="Table.CellActionWrapper";const U=x.forwardRef(X);function X({onClick:a,...t},n){const o=j();return e.jsx(F,{ref:n,"aria-label":o("table.cell.menu.aria-label"),size:"small",tabIndex:0,icon:e.jsx(E,{}),variant:"quiet",onClick:d=>{d.stopPropagation(),a?.(d)},...t})}X.displayName="Table.ContextualIconButton";function O(a){return typeof a=="number"?`${a}px`:typeof a=="string"?a:"auto"}function B({children:a,interactive:t,selected:n,noRole:o,contextMenu:d,width:i,height:c,...s}){let b={blockSize:c};return i&&(b={blockSize:c,flex:`1 1 ${O(i)}`}),e.jsx("div",{role:o?void 0:"gridcell","data-interactive":!!t,"aria-selected":n,className:r("inline-flex","border-box","flex-row","overflow-hidden",T.cell),tabIndex:t||d?0:void 0,style:b,...s,children:e.jsxs("div",{className:r("flex-noreset","border-box","flex-row","items-center","h-full","w-full","overflow-hidden",T.cell_state),children:[a,!!d&&e.jsx(R,{children:e.jsx(C.Trigger,{menu:d,children:e.jsx(U,{})})})]})})}B.displayName="Table.Cell";function P({variant:a,children:t,ellipsis:n,lines:o}){return e.jsx("div",{className:r("flex","flex-row","px-m","gap-m","items-center","text-default","justify-start","w-full","border-box","overflow-hidden",T.cell_content,{"justify-start":a!=="number","font-label-s":a!=="number","justify-end":a==="number"}),"data-variant":a,children:e.jsx("div",{"data-layoutid":"frame-98",className:r("h-full","overflow-hidden",{truncate:!!n}),style:o?{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:o,overflow:"hidden"}:void 0,children:t})})}P.displayName="Table.CellContent";function Me({children:a,columns:t,onColumnVisibilityChange:n,...o}){return e.jsx(be,{...o,content:e.jsx(Re,{columns:t,onColumnVisibilityChange:n}),children:a})}function Re({columns:a,onColumnVisibilityChange:t}){const n=j(),[o,d]=x.useState(""),i=a||[],c=i.filter(s=>s.visible).length;return e.jsxs("div",{className:r("flex","flex-col"),children:[e.jsx("div",{className:r("flex","flex-col","px-xl","py-m","gap-m"),"data-layoutid":"frame-6",children:e.jsx(ue,{type:"search",value:o,onChange:s=>{d(s.target.value)},"aria-label":n("table.column.visilibty-form.search.aria-label"),placeholder:n("table.column.visilibty-form.search.placeholder")})}),e.jsx(_,{}),e.jsx("div",{className:r("flex","flex-row","pl-xl","pr-m","py-l","bg-weak"),"data-layoutid":"header",children:e.jsx(H,{label:n("table.column.visibility-form.selectall.label"),checked:c===i.length,indeterminate:c>0&&c<i.length,onChange:s=>{const b=i.map(u=>{let h=s.target.checked;return!u.canHide&&u.visible&&(h=!0),{...u,visible:h}});b.every(u=>!u.visible)&&(b[0].visible=!0),t?.(b)}})}),e.jsx(_,{}),e.jsx(ce,{gap:"density-s",children:i.filter(s=>o?(s.label||"").toLowerCase().includes(o.toLowerCase()):!0).map(s=>e.jsx(Ce,{children:e.jsx(H,{label:s.label,checked:s.visible,disabled:!s.canHide,onChange:b=>{const u=a.map(h=>h.id===s.id?{...h,visible:!!b.target.checked}:h);u.every(h=>!h.visible)&&(u[0].visible=!0),t?.(u)}})},s.label))}),e.jsx(_,{}),e.jsx("div",{"data-layoutid":"footer",className:r("flex","flex-row","pl-xl","pr-m","py-l","bg-weak","font-label-xs-emphasized","text-default"),children:n("table.column.visibility-form.footer.label",i.filter(s=>s.visible).length,{total:`${i.length}`})})]})}const Oe=x.forwardRef(Y);function Y(a,t){const n=x.useContext(M),o=n.overflowY==="virtualized"?{position:"sticky",insetBlockStart:0,zIndex:1,paddingInlineEnd:n.scrollBarWidth}:{paddingInlineEnd:n.scrollBarWidth};return e.jsx("div",{role:"rowgroup",className:r(T.thead),...a,ref:t,style:o})}Y.displayName="Table.Head";function Be({onResize:a,resetSize:t}){const n=j();return e.jsx("button",{type:"button",className:r("absolute","top-0","cursor-col-resize","z-floating",T.resizing_indicator),"aria-label":n("table.header.resize-column.aria-label"),onDoubleClick:t,onMouseDown:a,onTouchStart:a,tabIndex:-1,"data-testid":"table.header.resize-column"})}function ke({direction:a}){return a==="asc"?e.jsx(A,{}):a==="desc"?e.jsx(D,{}):null}function q({header:a,variant:t,selection:n,selected:o,sortOrder:d,statusIcon:i,onSelectHeader:c,contextualMenu:s,additionalInfo:b,children:u,lines:h,ellipsis:y,...N}){const m=j();return e.jsxs("div",{"data-layoutid":"state-container",className:r("border-box","w-full","radius-subtle"),children:[e.jsx("div",{...N,"data-layoutid":"header_row",className:r("flex","border-box","flex-row","py-m","pl-m","items-center","font-heading-s","text-default","w-full","overflow-hidden"),children:e.jsxs("div",{"data-layoutid":"rest",className:r("flex","flex-row","gap-m","w-full","overflow-hidden","pr-m"),children:[!!n&&e.jsxs("div",{className:r("flex","justify-center"),"data-layoutid":"start",children:[n==="single"&&e.jsx(I,{"aria-label":m("table.header.select-radio.aria-label"),onChange:v=>c?.(v.target.checked),checked:o}),n==="multiple"&&e.jsx(H,{"aria-label":m("table.header.select-multiple.aria-label"),onChange:v=>c?.(v.target.checked),checked:o})]}),e.jsxs("div",{className:r("flex","flex-col","w-full","overflow-hidden"),"data-layoutid":"frame-95",children:[e.jsxs("div",{"data-layoutid":"frame-96",className:r("flex","flex-row","gap-m","items-center","icon-size-xl",T.sort_indicator__wrapper),children:[i," ",e.jsx("span",{className:r("overflow-hidden",{truncate:!!y}),style:h?{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:h,overflow:"hidden"}:void 0,children:a})," ",e.jsx(ke,{direction:d})]}),e.jsx("div",{className:r("flex","flex-row","justify-stretch","font-label-s","text-weak","flex-nowrap","truncate"),"data-layoutid":"frame-97",children:b})]}),!!s&&e.jsx(R,{children:s})]})}),!!u&&e.jsx("div",{"data-layoutid":"additional-content",className:r("flex","flex-col","px-m","pb-m","gap-s","overflow-hidden","truncate"),children:u})]})}q.displayName="Table.HeaderContent";const k=x.forwardRef(K);function K({variant:a,header:t,selection:n,selected:o,sortOrder:d,statusIcon:i,onSortChange:c,contextualMenu:s,onSelectHeader:b,onResize:u,resetSize:h,additionalInfo:y,children:N,width:m,ellipsis:v,lines:oe,...ie},se){let W={};m&&(W={flex:`1 1 ${O(m)}`});let S;return d==="asc"?S="ascending":d==="desc"&&(S="descending"),e.jsxs("div",{ref:se,role:"columnheader","data-variant":a,...ie,className:r("inline-flex","cursor-pointer","border-box","flex-wrap","outline-none","relative",T.th),"aria-sort":S,tabIndex:0,onClick:()=>{c?.(d==="asc"?"desc":"asc")},onKeyDown:z=>{z.key==="Enter"&&(z.stopPropagation(),c?.(d==="asc"?"desc":"asc"))},style:W,children:[e.jsx(q,{header:t,selection:n,selected:o,statusIcon:i,sortOrder:d,onSelectHeader:b,additionalInfo:y,contextualMenu:s,lines:oe,ellipsis:v,variant:a,children:N}),!!u&&!!h&&e.jsx(Be,{onResize:u,resetSize:h})]})}K.displayName="Table.Header";x.forwardRef(Z);function Z(a,t){return e.jsx(k,{...a,ref:t})}Z.displayName="Table.DataHeader(Deprecated)";x.forwardRef(Q);function Q(a,t){return e.jsx(k,{...a,ref:t})}Q.displayName="Table.ListHeader(Deprecated)";function G({...a}){const t=j();return e.jsx(C.Trigger,{placement:"bottom-end",...a,children:e.jsx(F,{size:"small","aria-label":t("table.header.more-actions.aria-label"),icon:e.jsx(E,{}),variant:"quiet",onClick:n=>{n.stopPropagation()}})})}function We({sortOrder:a,onSortChange:t,onManageColumns:n,onHideColumn:o,children:d}){const i=j();return e.jsxs(e.Fragment,{children:[!!t&&e.jsxs(e.Fragment,{children:[e.jsx(C.Item,{icon:e.jsx(A,{}),disabled:a==="asc",label:i("table.header.sort-ascending.label"),onClick:c=>{c.preventDefault(),c.stopPropagation(),t("asc")}}),e.jsx(C.Item,{icon:e.jsx(D,{}),disabled:a==="desc",label:i("table.header.sort-descending.label"),onClick:c=>{c.preventDefault(),c.stopPropagation(),t("desc")}}),e.jsx(C.Divider,{})]}),!!o&&e.jsx(C.Item,{icon:e.jsx(xe,{}),label:i("table.header.hide-column.label"),onClick:()=>{o()}}),!!n&&e.jsx(C.Item,{icon:e.jsx(de,{}),label:i("table.header.manage-columns-visbility.label"),onClick:c=>{n(c)}}),d]})}G.displayName="Table.HeaderMenuButton";function J({children:a,...t}){return e.jsx("div",{role:"row",className:r("flex-noreset","flex-nowrap",T.tr),...t,children:a})}J.displayName="Table.HeaderRow";function ee({children:a,...t}){const n=j();return e.jsx("div",{role:"row",className:r("flex","justify-center","items-center","size-full","bg-weak"),...t,children:e.jsx("div",{role:"cell","aria-live":"polite",children:a||e.jsx(L,{title:n("table.norows.message.default-title")})})})}ee.displayName="Table.Message";const ze=x.forwardRef(le);function le({children:a,height:t,interactive:n,selected:o,startPosition:d,...i},c){let s={blockSize:t};return d!==void 0&&(s={blockSize:t,transform:`translateY(${d}px)`}),e.jsx("div",{ref:c,style:s,role:"row",className:r("flex-noreset","flex-nowrap",T.tr,{[T.tr_selected]:!!o,[T.tr_interactive]:!!n,absolute:d!==void 0,"w-full":d!==void 0}),...i,children:a})}le.displayName="Table.Row";function ae({index:a}){return e.jsx("div",{className:r("font-label-s","text-weak","flex-noreset","py-0","px-m","gap-s","border-box","justify-center",T.row_number),children:a})}ae.displayName="Table.RowNumber";function te({isHeader:a,rowSelection:t,...n}){const o=j();return t?a?e.jsxs("label",{className:r("flex-noreset","p-m"),children:[t==="single"?e.jsx("div",{style:{visibility:"hidden"},children:e.jsx(I,{disabled:!0,...n})}):e.jsx(H,{...n}),e.jsx("span",{className:r("sr-only"),children:o("table.header.select-all.aria-label")})]}):e.jsxs("label",{className:r("flex-noreset","p-m"),children:[t==="single"?e.jsx(I,{"aria-label":o("table.row.selection.aria-label"),...n}):e.jsx(H,{"aria-label":o("table.row.selection.aria-label"),...n}),e.jsx("span",{className:r("sr-only"),children:o("table.row.selection.aria-label")})]}):null}te.displayName="Table.Selection";function ne({children:a,isHeader:t,interactive:n,...o}){return e.jsx("div",{...o,role:t?"columnheader":"gridcell",className:r("flex-noreset","grow-0","shrink-1","basis-auto",{"bg-moderate":!n,"bg-weak":!!n}),children:e.jsx(B,{noRole:!0,children:a})})}ne.displayName="Table.SupportCell";const Ee=r("flex-noreset","flex-row","border-box","size-full","flex-nowrap"),Ae=x.forwardRef(re);function re({variant:a,children:t,width:n,height:o,contentHeight:d,overflowY:i,...c},s){const[b,u]=x.useState(0),h=x.useMemo(()=>({overflowY:i??"default",containerHeight:o,contentHeight:d,scrollBarWidth:b,setScrollBarWidth:u}),[i,o,d,b,u]);return e.jsx(M.Provider,{value:h,children:e.jsx("div",{className:r(Ee,{"overflow-y-auto":i==="default"}),style:{blockSize:o?`${o}px`:void 0},children:e.jsx("div",{...c,role:"grid","data-variant":a,className:r("flex-noreset","flex-nowrap","border-box","flex-col","overflow-x-auto","size-full","radius-subtle","shrink-0",T.table),ref:s,style:{flex:`1 1 ${O(n)}`,blockSize:o?`${o}px`:void 0},children:t})})})}re.displayName="Table.Table";const l={Table:Ae,Head:Oe,Body:V,HeaderRow:J,Header:k,Row:ze,Cell:B,CellContent:P,CellActionWrapper:R,ContextualIconButton:U,SupportCell:ne,RowNumber:ae,Selection:te,ColumnVisibilityMenu:Me,HeaderMenuButton:G,HeaderMenuContent:We,Message:ee},De={title:"Components/Table"};function Fe(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"160",height:"100",fill:"none",viewBox:"0 0 160 100",children:e.jsxs("g",{children:[e.jsx("path",{stroke:"var(--sprout-illustration-color-palette-0, #595959)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M25.223 14.688 9 39.528l57.033 22.306 16.983-27.882-57.793-19.264Z"}),e.jsx("path",{stroke:"var(--sprout-illustration-color-palette-0, #595959)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M131 18 83 33.97l17.744 29.403 49.681-21.74L131 18ZM130.417 17.73 73.384 1 25.223 14.688M73.384 1v29.718"}),e.jsx("path",{stroke:"var(--sprout-illustration-color-palette-0, #595959)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M25.223 45.875V72.99l57.793 26.107V33.953M83.017 99.097l49.681-24.841V49.723"}),e.jsx("path",{stroke:"var(--sprout-illustration-color-palette-2, #009844)",strokeLinejoin:"round",strokeWidth:"2",d:"m41.91 62.725 19.502 8.08V64.53l-19.501-7.67v5.866Z"})]})})}const g={name:"Table HTML",args:{variant:"data"},argTypes:{variant:{control:{type:"select"},options:["list","data"]}},parameters:{chromatic:{disableSnapshot:!0},design:{type:"figma",url:"https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=27931-7373&t=8KuaKPqH6gSP8Hci-0"}},render:({variant:a})=>e.jsxs(l.Table,{variant:a,children:[e.jsx(l.Head,{children:e.jsxs(l.HeaderRow,{children:[e.jsx(l.SupportCell,{isHeader:!0,children:e.jsx(l.RowNumber,{index:"#"})}),e.jsx(l.SupportCell,{isHeader:!0,interactive:!0,children:e.jsx(l.Selection,{rowSelection:"multiple",isHeader:!0})}),e.jsx(l.Header,{additionalInfo:"sorted asc",header:"Header",sortOrder:"asc",children:e.jsx("span",{className:r("truncate","font-body-xs","text-weak"),children:"placeholder"})}),e.jsx(l.Header,{additionalInfo:"sorted desc",header:"Header",sortOrder:"desc"}),e.jsx(l.Header,{additionalInfo:"sortable",header:"Header",sortOrder:!1}),e.jsx(l.Header,{additionalInfo:"not sortable",header:"Header"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{interactive:!0,children:[e.jsx(l.SupportCell,{children:e.jsx(l.RowNumber,{index:1})}),e.jsx(l.SupportCell,{interactive:!0,children:e.jsx(l.Selection,{rowSelection:"multiple"})}),e.jsx(l.Cell,{children:e.jsx(l.CellContent,{children:"cell"})}),e.jsx(l.Cell,{children:e.jsx(l.CellContent,{variant:"number",children:"201,234.00"})}),e.jsx(l.Cell,{children:e.jsx(l.CellContent,{children:"cell"})}),e.jsx(l.Cell,{children:e.jsx(l.CellContent,{children:"cell"})})]}),e.jsxs(l.Row,{interactive:!0,children:[e.jsx(l.SupportCell,{children:e.jsx(l.RowNumber,{index:2})}),e.jsx(l.SupportCell,{interactive:!0,children:e.jsx(l.Selection,{rowSelection:"multiple"})}),e.jsx(l.Cell,{children:e.jsx(l.CellContent,{children:"cell"})}),e.jsx(l.Cell,{children:e.jsx(l.CellContent,{variant:"number",children:"201,234.00"})}),e.jsx(l.Cell,{children:e.jsx(l.CellContent,{children:"cell"})}),e.jsx(l.Cell,{children:e.jsx(l.CellContent,{children:"cell"})})]})]})]})};function f({children:a}){return e.jsx("h2",{className:r("font-heading-m","text-default"),children:a})}const p=e.jsx(C.Item,{label:"Contextual menu example",onClick:a=>{a.preventDefault(),a.stopPropagation()}}),w={name:"Visual Test",render:()=>e.jsxs("div",{className:r("flex","flex-col","gap-xl"),children:[e.jsx("div",{className:r("flex","flex-col","gap-s","w-l"),children:e.jsxs("div",{className:r("flex","justify-start","items-start","flex-row","gap-s","w-full"),style:{blockSize:"300px"},children:[e.jsxs("div",{className:r("grow-1"),children:[e.jsx(f,{children:"_ColumVisibilityMenu"}),e.jsx(l.ColumnVisibilityMenu,{initialOpen:!0,columns:[{id:"col1",label:"Col 1",visible:!0},{id:"col2",label:"Col 2",visible:!1}],onColumnVisibilityChange:()=>{},children:e.jsx(he,{label:"trigger"})})]}),e.jsxs("div",{className:r("grow-1"),style:{blockSize:180},children:[e.jsx(f,{children:"ContextualMenu"}),e.jsx(l.Table,{variant:"data",children:e.jsx(l.Head,{children:e.jsx(l.HeaderRow,{children:e.jsx(l.Header,{additionalInfo:"addition info",header:"Contextual",sortOrder:"desc","data-status":"hover",contextualMenu:e.jsx(l.HeaderMenuButton,{defaultOpen:!0,menu:e.jsx(l.HeaderMenuContent,{sortOrder:"desc",onSortChange:()=>{},onHideColumn:()=>{},onManageColumns:()=>{}})})})})})})]})]})}),e.jsx(f,{children:"Header(Data)"}),e.jsxs("div",{className:r("flex","flex-col","gap-xl","w-xl"),children:[e.jsx(l.Table,{variant:"data",children:e.jsx(l.Head,{children:e.jsxs(l.HeaderRow,{children:[e.jsx(l.Header,{header:"DataHeader"}),e.jsx(l.Header,{header:"DataHeader",additionalInfo:"additionalInfo"}),e.jsx(l.Header,{additionalInfo:"addition info",header:"Hover",sortOrder:"desc","data-status":"hover"}),e.jsx(l.Header,{additionalInfo:"addition info",header:"Contextual + Hover",sortOrder:"desc","data-status":"hover",contextualMenu:e.jsx(l.HeaderMenuButton,{menu:e.jsx(l.HeaderMenuContent,{sortOrder:"desc",onSortChange:()=>{},onHideColumn:()=>{},onManageColumns:()=>{}})})}),e.jsx(l.Header,{additionalInfo:"addition info",header:"Focus",sortOrder:"desc","data-status":"focus",contextualMenu:e.jsx(l.HeaderMenuButton,{menu:e.jsx(l.HeaderMenuContent,{sortOrder:"desc",onSortChange:()=>{},onHideColumn:()=>{},onManageColumns:()=>{}})})})]})})}),e.jsx(l.Table,{variant:"data",children:e.jsx(l.Head,{children:e.jsxs(l.HeaderRow,{children:[e.jsx(l.Header,{additionalInfo:"selection multiple",header:"DataHeader",sortOrder:"desc",selection:"multiple"}),e.jsx(l.Header,{additionalInfo:"selection multiple",header:"DataHeader hover",sortOrder:"desc",selection:"multiple","data-status":"hover"}),e.jsx(l.Header,{additionalInfo:"selection multiple + selected",header:"DataHeader",sortOrder:"desc",selection:"multiple",selected:!0}),e.jsx(l.Header,{additionalInfo:"selection multiple + selected + hover",header:"DataHeader",sortOrder:"desc",selection:"multiple",selected:!0,"data-status":"hover"}),e.jsx(l.Header,{additionalInfo:"selection multiple + selected + hover",header:"Overflowing DataHeader label",sortOrder:"desc",selection:"multiple",selected:!0,"data-status":"hover"})]})})}),e.jsx(l.Table,{variant:"data",children:e.jsx(l.Head,{children:e.jsxs(l.HeaderRow,{children:[e.jsx(l.Header,{additionalInfo:"selection single",header:"DataHeader",sortOrder:"desc",selection:"single"}),e.jsx(l.Header,{additionalInfo:"selection single + hover",header:"DataHeader",sortOrder:"desc",selection:"single","data-status":"hover"}),e.jsx(l.Header,{additionalInfo:"selection single + selected",header:"DataHeader",sortOrder:"desc",selection:"single",selected:!0}),e.jsx(l.Header,{additionalInfo:"selection single + selected + hover",header:"DataHeader",sortOrder:"desc",selection:"single",selected:!0,"data-status":"hover"}),e.jsx(l.Header,{additionalInfo:"selection single + selected + hover",header:"Overflowing DataHeader label",sortOrder:"desc",selection:"single",selected:!0,"data-status":"hover"})]})})}),e.jsx(l.Table,{variant:"data",width:602,children:e.jsx(l.Head,{children:e.jsxs(l.HeaderRow,{children:[e.jsx(l.Header,{additionalInfo:"default overflow",header:"Overflowing DataHeader label",sortOrder:"desc",selection:"single",width:150}),e.jsx(l.Header,{additionalInfo:"ellipsis for overflow",header:"Overflowing DataHeader label",sortOrder:"desc",selection:"single",ellipsis:!0,width:150}),e.jsx(l.Header,{additionalInfo:"2 lines before overflow",header:"Overflowing DataHeader label",sortOrder:"desc",selection:"single",lines:2,width:150}),e.jsx(l.Header,{additionalInfo:"addition info",header:"Overflowing header label",sortOrder:"desc","data-status":"hover",width:150,ellipsis:!0,contextualMenu:e.jsx(l.HeaderMenuButton,{menu:e.jsx(l.HeaderMenuContent,{sortOrder:"desc",onSortChange:()=>{},onHideColumn:()=>{},onManageColumns:()=>{}})})})]})})})]}),e.jsx(f,{children:"Header (List)"}),e.jsx("div",{className:r("flex","flex-col","gap-s","w-m"),children:e.jsx(l.Table,{variant:"list",children:e.jsx(l.Head,{children:e.jsxs(l.HeaderRow,{children:[e.jsx(l.Header,{additionalInfo:"additional info",header:"Header",sortOrder:"desc"}),e.jsx(l.Header,{additionalInfo:"additional info",header:"Header",sortOrder:"desc","data-status":"hover"}),e.jsx(l.Header,{additionalInfo:"additional info",header:"Header",sortOrder:"desc","data-status":"focus"})]})})})}),e.jsx(f,{children:"_TableCell"}),e.jsx("div",{className:r("flex","flex-col","gap-s","w-xl"),children:e.jsxs(l.Table,{variant:"list",children:[e.jsx(l.Head,{children:e.jsxs(l.HeaderRow,{children:[e.jsx(l.Header,{header:"Default"}),e.jsx(l.Header,{header:"Interactive"}),e.jsx(l.Header,{header:"ContextMenu"}),e.jsx(l.Header,{header:"Number"}),e.jsx(l.Header,{header:"Overflow"}),e.jsx(l.Header,{header:"OverflowWithMenu",ellipsis:!0})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:e.jsx(l.CellContent,{children:"Cell"})}),e.jsx(l.Cell,{interactive:!0,children:e.jsx(l.CellContent,{children:"Cell"})}),e.jsxs(l.Cell,{children:[e.jsx(l.CellContent,{children:"Cell"}),e.jsx(l.CellActionWrapper,{children:e.jsx(C.Trigger,{menu:p,children:e.jsx(l.ContextualIconButton,{})})})]}),e.jsx(l.Cell,{children:e.jsx(l.CellContent,{variant:"number",children:"0"})}),e.jsx(l.Cell,{children:e.jsx(l.CellContent,{children:"CellCellCell CellCellCell CellCellCell"})}),e.jsxs(l.Cell,{children:[e.jsx(l.CellContent,{children:"CellCellCell CellCellCell CellCellCell"}),e.jsx(l.CellActionWrapper,{children:e.jsx(C.Trigger,{menu:p,children:e.jsx(l.ContextualIconButton,{})})})]})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:e.jsx(l.CellContent,{children:":hover"})}),e.jsx(l.Cell,{interactive:!0,"data-status":"hover",children:e.jsx(l.CellContent,{children:":hover"})}),e.jsxs(l.Cell,{interactive:!0,"data-status":"hover",children:[e.jsx(l.CellContent,{children:":hover"}),e.jsx(l.CellActionWrapper,{children:e.jsx(C.Trigger,{menu:p,children:e.jsx(l.ContextualIconButton,{})})})]}),e.jsx(l.Cell,{children:e.jsx(l.CellContent,{variant:"number",children:"10"})}),e.jsx(l.Cell,{"data-status":"hover",children:e.jsx(l.CellContent,{children:"CellCellCell CellCellCell CellCellCell"})}),e.jsxs(l.Cell,{"data-status":"hover",children:[e.jsx(l.CellContent,{children:"CellCellCell CellCellCell CellCellCell"}),e.jsx(l.CellActionWrapper,{children:e.jsx(C.Trigger,{menu:p,children:e.jsx(l.ContextualIconButton,{})})})]})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{"data-status":"focus",children:e.jsx(l.CellContent,{children:":focus"})}),e.jsx(l.Cell,{interactive:!0,"data-status":"focus",children:e.jsx(l.CellContent,{children:":focus"})}),e.jsxs(l.Cell,{"data-status":"focus",children:[e.jsx(l.CellContent,{children:":focus "}),e.jsx(l.CellActionWrapper,{children:e.jsx(C.Trigger,{menu:p,children:e.jsx(l.ContextualIconButton,{})})})]}),e.jsx(l.Cell,{"data-status":"focus",children:e.jsx(l.CellContent,{variant:"number",children:"100"})}),e.jsx(l.Cell,{"data-status":"focus",children:e.jsx(l.CellContent,{children:"CellCellCell CellCellCell CellCellCell"})}),e.jsxs(l.Cell,{"data-status":"focus",children:[e.jsx(l.CellContent,{children:"CellCellCell CellCellCell CellCellCell"}),e.jsx(l.CellActionWrapper,{children:e.jsx(C.Trigger,{menu:p,children:e.jsx(l.ContextualIconButton,{})})})]})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{selected:!0,children:e.jsx(l.CellContent,{children:"Selected"})}),e.jsx(l.Cell,{interactive:!0,selected:!0,children:e.jsx(l.CellContent,{children:"Selected"})}),e.jsxs(l.Cell,{selected:!0,children:[e.jsx(l.CellContent,{children:"Selected"}),e.jsx(l.CellActionWrapper,{children:e.jsx(C.Trigger,{menu:p,children:e.jsx(l.ContextualIconButton,{})})})]}),e.jsx(l.Cell,{selected:!0,children:e.jsx(l.CellContent,{variant:"number",children:"1000"})}),e.jsx(l.Cell,{selected:!0,children:e.jsx(l.CellContent,{children:"CellCellCell CellCellCell CellCellCell"})}),e.jsxs(l.Cell,{selected:!0,children:[e.jsx(l.CellContent,{children:"CellCellCell CellCellCell CellCellCell"}),e.jsx(l.CellActionWrapper,{children:e.jsx(C.Trigger,{menu:p,children:e.jsx(l.ContextualIconButton,{})})})]})]}),e.jsxs(l.Row,{height:"40px",children:[e.jsx(l.Cell,{children:e.jsx(l.CellContent,{children:"Fixed height"})}),e.jsx(l.Cell,{interactive:!0,children:e.jsx(l.CellContent,{children:"Fixed height"})}),e.jsxs(l.Cell,{children:[e.jsx(l.CellContent,{children:"Fixed height"}),e.jsx(l.CellActionWrapper,{children:e.jsx(C.Trigger,{menu:p,children:e.jsx(l.ContextualIconButton,{})})})]}),e.jsx(l.Cell,{children:e.jsx(l.CellContent,{variant:"number",children:"32"})}),e.jsx(l.Cell,{children:e.jsx(l.CellContent,{children:"Fixed height Fixed height Fixed height"})}),e.jsxs(l.Cell,{children:[e.jsx(l.CellContent,{children:"Fixed height Fixed height Fixed height"}),e.jsx(l.CellActionWrapper,{children:e.jsx(C.Trigger,{menu:p,children:e.jsx(l.ContextualIconButton,{})})})]})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{width:150,children:e.jsx(l.CellContent,{ellipsis:!0,children:"Ellipses overflowing content"})}),e.jsx(l.Cell,{width:150,interactive:!0,children:e.jsx(l.CellContent,{ellipsis:!0,children:"Ellipses overflowing content"})}),e.jsxs(l.Cell,{width:150,children:[e.jsx(l.CellContent,{ellipsis:!0,children:"Ellipses overflowing content"}),e.jsx(l.CellActionWrapper,{children:e.jsx(C.Trigger,{menu:p,children:e.jsx(l.ContextualIconButton,{})})})]}),e.jsx(l.Cell,{width:150,children:e.jsx(l.CellContent,{ellipsis:!0,variant:"number",children:"12345678901234567890"})}),e.jsx(l.Cell,{width:150,children:e.jsx(l.CellContent,{ellipsis:!0,children:"Ellipses overflowing content Ellipses overflowing content"})}),e.jsxs(l.Cell,{width:150,children:[e.jsx(l.CellContent,{ellipsis:!0,children:"Ellipses overflowing content Ellipses overflowing content"}),e.jsx(l.CellActionWrapper,{children:e.jsx(C.Trigger,{menu:p,children:e.jsx(l.ContextualIconButton,{})})})]})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{width:150,height:"32px",children:e.jsx(l.CellContent,{lines:2,children:"2 lines of overflowing content"})}),e.jsx(l.Cell,{width:150,height:"32px",interactive:!0,children:e.jsx(l.CellContent,{lines:2,children:"2 lines of overflowing content"})}),e.jsxs(l.Cell,{width:150,height:"32px",children:[e.jsx(l.CellContent,{lines:2,children:"2 lines of overflowing content"}),e.jsx(l.CellActionWrapper,{children:e.jsx(C.Trigger,{menu:p,children:e.jsx(l.ContextualIconButton,{})})})]}),e.jsx(l.Cell,{width:150,height:"32px",children:e.jsx(l.CellContent,{lines:2,variant:"number",children:"12345678901234567890 12345678901234567890"})}),e.jsx(l.Cell,{width:150,height:"32px",children:e.jsx(l.CellContent,{lines:2,children:"2 lines of overflowing content 2 lines of overflowing content"})}),e.jsxs(l.Cell,{width:150,height:"32px",children:[e.jsx(l.CellContent,{lines:2,children:"2 lines of overflowing content 2 lines of overflowing content"}),e.jsx(l.CellActionWrapper,{children:e.jsx(C.Trigger,{menu:p,children:e.jsx(l.ContextualIconButton,{})})})]})]})]})]})}),e.jsx(f,{children:"Vertical scroll"}),e.jsx("div",{className:r("flex","flex-col","gap-s","w-xl"),children:e.jsxs(l.Table,{variant:"list",height:200,children:[e.jsx(l.Head,{children:e.jsxs(l.HeaderRow,{children:[e.jsx(l.SupportCell,{isHeader:!0,interactive:!0,children:e.jsx(l.Selection,{rowSelection:"multiple",isHeader:!0})}),e.jsx(l.Header,{header:"Header"}),e.jsx(l.Header,{header:"Header"}),e.jsx(l.Header,{header:"Header"})]})}),e.jsx(l.Body,{children:Array.from({length:20},(a,t)=>e.jsxs(l.Row,{interactive:!0,selected:t===3,"data-status":t===2?"hover":void 0,children:[e.jsx(l.SupportCell,{interactive:!0,children:e.jsx(l.Selection,{rowSelection:"multiple",checked:t===3})}),e.jsx(l.Cell,{children:e.jsxs(l.CellContent,{children:["Cell ",t+1]})}),e.jsx(l.Cell,{children:e.jsxs(l.CellContent,{children:["Cell ",t+1]})}),e.jsx(l.Cell,{children:e.jsxs(l.CellContent,{children:["Cell ",t+1]})})]},t))})]})}),e.jsx(f,{children:"Vertical scroll virtualized"}),e.jsx("div",{className:r("overflow-auto","gap-s","w-xl"),style:{blockSize:"200px"},children:e.jsxs(l.Table,{variant:"data",height:200,overflowY:"virtualized",contentHeight:3200,children:[e.jsx(l.Head,{children:e.jsxs(l.HeaderRow,{children:[e.jsx(l.SupportCell,{isHeader:!0,children:e.jsx(l.RowNumber,{index:"#"})}),e.jsx(l.SupportCell,{isHeader:!0,interactive:!0,children:e.jsx(l.Selection,{rowSelection:"single"})}),e.jsx(l.Header,{header:"Header"}),e.jsx(l.Header,{header:"Header"}),e.jsx(l.Header,{header:"Header"})]})}),e.jsx(l.Body,{children:Array.from({length:20},(a,t)=>e.jsxs(l.Row,{startPosition:t*32,children:[e.jsx(l.SupportCell,{children:e.jsx(l.RowNumber,{index:t})}),e.jsx(l.SupportCell,{interactive:!0,children:e.jsx(l.Selection,{rowSelection:"single",checked:t===3})}),e.jsx(l.Cell,{interactive:!0,children:e.jsxs(l.CellContent,{children:["Cell ",t+1]})}),e.jsx(l.Cell,{interactive:!0,children:e.jsxs(l.CellContent,{children:["Cell ",t+1]})}),e.jsx(l.Cell,{interactive:!0,children:e.jsxs(l.CellContent,{children:["Cell ",t+1]})})]},t))})]})}),e.jsx(f,{children:"Horizontal scroll"}),"TODO",e.jsx(f,{children:"Empty state"}),e.jsx("div",{className:r("overflow-auto","gap-s","w-xl"),style:{blockSize:"250px"},children:e.jsxs(l.Table,{variant:"data",height:250,overflowY:"virtualized",contentHeight:3200,children:[e.jsx(l.Head,{children:e.jsxs(l.HeaderRow,{children:[e.jsx(l.SupportCell,{isHeader:!0,children:e.jsx(l.RowNumber,{index:"#"})}),e.jsx(l.SupportCell,{isHeader:!0,interactive:!0,children:e.jsx(l.Selection,{rowSelection:"single"})}),e.jsx(l.Header,{header:"Header"}),e.jsx(l.Header,{header:"Header"}),e.jsx(l.Header,{header:"Header"})]})}),e.jsx(l.Message,{children:e.jsx(L,{title:"Empty table reason",message:"Description of why table is empty, replace illustration with best fit",illustration:e.jsx(Fe,{})})})]})})]}),parameters:{chromatic:{disableSnapshot:!1},controls:{disable:!0},pseudo:{hover:'[data-status="hover"]',active:'[data-status="active"]',focus:['[data-status="focus"]']}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Table HTML",
  args: {
    variant: "data"
  },
  argTypes: {
    variant: {
      control: {
        type: "select"
      },
      options: ["list", "data"]
    }
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=27931-7373&t=8KuaKPqH6gSP8Hci-0"
    }
  },
  render: ({
    variant
  }: TableProps["Table"]) => <Table.Table variant={variant}>
      <Table.Head>
        <Table.HeaderRow>
          <Table.SupportCell isHeader>
            <Table.RowNumber index="#" />
          </Table.SupportCell>
          <Table.SupportCell isHeader interactive>
            <Table.Selection rowSelection="multiple" isHeader />
          </Table.SupportCell>
          <Table.Header additionalInfo="sorted asc" header="Header" sortOrder="asc">
            <span className={classNames("truncate", "font-body-xs", "text-weak")}>
              placeholder
            </span>
          </Table.Header>
          <Table.Header additionalInfo="sorted desc" header="Header" sortOrder="desc" />
          <Table.Header additionalInfo="sortable" header="Header" sortOrder={false} />
          <Table.Header additionalInfo="not sortable" header="Header" />
        </Table.HeaderRow>
      </Table.Head>
      <Table.Body>
        <Table.Row interactive>
          <Table.SupportCell>
            <Table.RowNumber index={1} />
          </Table.SupportCell>
          <Table.SupportCell interactive>
            <Table.Selection rowSelection="multiple" />
          </Table.SupportCell>
          <Table.Cell>
            <Table.CellContent>cell</Table.CellContent>
          </Table.Cell>
          <Table.Cell>
            <Table.CellContent variant="number">201,234.00</Table.CellContent>
          </Table.Cell>
          <Table.Cell>
            <Table.CellContent>cell</Table.CellContent>
          </Table.Cell>
          <Table.Cell>
            <Table.CellContent>cell</Table.CellContent>
          </Table.Cell>
        </Table.Row>
        <Table.Row interactive>
          <Table.SupportCell>
            <Table.RowNumber index={2} />
          </Table.SupportCell>
          <Table.SupportCell interactive>
            <Table.Selection rowSelection="multiple" />
          </Table.SupportCell>
          <Table.Cell>
            <Table.CellContent>cell</Table.CellContent>
          </Table.Cell>
          <Table.Cell>
            <Table.CellContent variant="number">201,234.00</Table.CellContent>
          </Table.Cell>
          <Table.Cell>
            <Table.CellContent>cell</Table.CellContent>
          </Table.Cell>
          <Table.Cell>
            <Table.CellContent>cell</Table.CellContent>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Table>
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Visual Test",
  render: () => <div className={classNames("flex", "flex-col", "gap-xl")}>
      <div className={classNames("flex", "flex-col", "gap-s", "w-l")}>
        <div className={classNames("flex", "justify-start", "items-start", "flex-row", "gap-s", "w-full")} style={{
        blockSize: "300px"
      }}>
          <div className={classNames("grow-1")}>
            <H2>_ColumVisibilityMenu</H2>
            <Table.ColumnVisibilityMenu initialOpen columns={[{
            id: "col1",
            label: "Col 1",
            visible: true
          }, {
            id: "col2",
            label: "Col 2",
            visible: false
          }]} onColumnVisibilityChange={() => {}}>
              <Button label="trigger" />
            </Table.ColumnVisibilityMenu>
          </div>
          <div className={classNames("grow-1")} style={{
          blockSize: 180
        }}>
            <H2>ContextualMenu</H2>
            <Table.Table variant="data">
              <Table.Head>
                <Table.HeaderRow>
                  <Table.Header additionalInfo="addition info" header="Contextual" sortOrder="desc" data-status="hover" contextualMenu={<Table.HeaderMenuButton defaultOpen menu={<Table.HeaderMenuContent sortOrder="desc" onSortChange={() => {}} onHideColumn={() => {}} onManageColumns={() => {}} />} />} />
                </Table.HeaderRow>
              </Table.Head>
            </Table.Table>
          </div>
        </div>
      </div>
      <H2>Header(Data)</H2>
      <div className={classNames("flex", "flex-col", "gap-xl", "w-xl")}>
        <Table.Table variant="data">
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header header="DataHeader" />
              <Table.Header header="DataHeader" additionalInfo="additionalInfo" />
              <Table.Header additionalInfo="addition info" header="Hover" sortOrder="desc" data-status="hover" />
              <Table.Header additionalInfo="addition info" header="Contextual + Hover" sortOrder="desc" data-status="hover" contextualMenu={<Table.HeaderMenuButton menu={<Table.HeaderMenuContent sortOrder="desc" onSortChange={() => {}} onHideColumn={() => {}} onManageColumns={() => {}} />} />} />
              <Table.Header additionalInfo="addition info" header="Focus" sortOrder="desc" data-status="focus" contextualMenu={<Table.HeaderMenuButton menu={<Table.HeaderMenuContent sortOrder="desc" onSortChange={() => {}} onHideColumn={() => {}} onManageColumns={() => {}} />} />} />
            </Table.HeaderRow>
          </Table.Head>
        </Table.Table>
        <Table.Table variant="data">
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header additionalInfo="selection multiple" header="DataHeader" sortOrder="desc" selection="multiple" />
              <Table.Header additionalInfo="selection multiple" header="DataHeader hover" sortOrder="desc" selection="multiple" data-status="hover" />
              <Table.Header additionalInfo="selection multiple + selected" header="DataHeader" sortOrder="desc" selection="multiple" selected />
              <Table.Header additionalInfo="selection multiple + selected + hover" header="DataHeader" sortOrder="desc" selection="multiple" selected data-status="hover" />
              <Table.Header additionalInfo="selection multiple + selected + hover" header="Overflowing DataHeader label" sortOrder="desc" selection="multiple" selected data-status="hover" />
            </Table.HeaderRow>
          </Table.Head>
        </Table.Table>
        <Table.Table variant="data">
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header additionalInfo="selection single" header="DataHeader" sortOrder="desc" selection="single" />
              <Table.Header additionalInfo="selection single + hover" header="DataHeader" sortOrder="desc" selection="single" data-status="hover" />
              <Table.Header additionalInfo="selection single + selected" header="DataHeader" sortOrder="desc" selection="single" selected />
              <Table.Header additionalInfo="selection single + selected + hover" header="DataHeader" sortOrder="desc" selection="single" selected data-status="hover" />
              <Table.Header additionalInfo="selection single + selected + hover" header="Overflowing DataHeader label" sortOrder="desc" selection="single" selected data-status="hover" />
            </Table.HeaderRow>
          </Table.Head>
        </Table.Table>
        <Table.Table variant="data" width={602}>
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header additionalInfo="default overflow" header="Overflowing DataHeader label" sortOrder="desc" selection="single" width={150} />
              <Table.Header additionalInfo="ellipsis for overflow" header="Overflowing DataHeader label" sortOrder="desc" selection="single" ellipsis width={150} />
              <Table.Header additionalInfo="2 lines before overflow" header="Overflowing DataHeader label" sortOrder="desc" selection="single" lines={2} width={150} />
              <Table.Header additionalInfo="addition info" header="Overflowing header label" sortOrder="desc" data-status="hover" width={150} ellipsis contextualMenu={<Table.HeaderMenuButton menu={<Table.HeaderMenuContent sortOrder="desc" onSortChange={() => {}} onHideColumn={() => {}} onManageColumns={() => {}} />} />} />
            </Table.HeaderRow>
          </Table.Head>
        </Table.Table>
      </div>
      <H2>Header (List)</H2>
      <div className={classNames("flex", "flex-col", "gap-s", "w-m")}>
        <Table.Table variant="list">
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header additionalInfo="additional info" header="Header" sortOrder="desc" />
              <Table.Header additionalInfo="additional info" header="Header" sortOrder="desc" data-status="hover" />
              <Table.Header additionalInfo="additional info" header="Header" sortOrder="desc" data-status="focus" />
            </Table.HeaderRow>
          </Table.Head>
        </Table.Table>
      </div>
      <H2>_TableCell</H2>
      <div className={classNames("flex", "flex-col", "gap-s", "w-xl")}>
        <Table.Table variant="list">
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header header="Default" />
              <Table.Header header="Interactive" />
              <Table.Header header="ContextMenu" />
              <Table.Header header="Number" />
              <Table.Header header="Overflow" />
              <Table.Header header="OverflowWithMenu" ellipsis />
            </Table.HeaderRow>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Table.CellContent>Cell</Table.CellContent>
              </Table.Cell>
              <Table.Cell interactive>
                <Table.CellContent>Cell</Table.CellContent>
              </Table.Cell>
              <Table.Cell>
                <Table.CellContent>Cell</Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
              <Table.Cell>
                <Table.CellContent variant="number">0</Table.CellContent>
              </Table.Cell>
              <Table.Cell>
                <Table.CellContent>
                  CellCellCell CellCellCell CellCellCell
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell>
                <Table.CellContent>
                  CellCellCell CellCellCell CellCellCell
                </Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Table.CellContent>:hover</Table.CellContent>
              </Table.Cell>
              <Table.Cell interactive data-status="hover">
                <Table.CellContent>:hover</Table.CellContent>
              </Table.Cell>
              <Table.Cell interactive data-status="hover">
                <Table.CellContent>:hover</Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
              <Table.Cell>
                <Table.CellContent variant="number">10</Table.CellContent>
              </Table.Cell>
              <Table.Cell data-status="hover">
                <Table.CellContent>
                  CellCellCell CellCellCell CellCellCell
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell data-status="hover">
                <Table.CellContent>
                  CellCellCell CellCellCell CellCellCell
                </Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell data-status="focus">
                <Table.CellContent>:focus</Table.CellContent>
              </Table.Cell>
              <Table.Cell interactive data-status="focus">
                <Table.CellContent>:focus</Table.CellContent>
              </Table.Cell>
              <Table.Cell data-status="focus">
                <Table.CellContent>:focus </Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
              <Table.Cell data-status="focus">
                <Table.CellContent variant="number">100</Table.CellContent>
              </Table.Cell>
              <Table.Cell data-status="focus">
                <Table.CellContent>
                  CellCellCell CellCellCell CellCellCell
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell data-status="focus">
                <Table.CellContent>
                  CellCellCell CellCellCell CellCellCell
                </Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell selected>
                <Table.CellContent>Selected</Table.CellContent>
              </Table.Cell>
              <Table.Cell interactive selected>
                <Table.CellContent>Selected</Table.CellContent>
              </Table.Cell>
              <Table.Cell selected>
                <Table.CellContent>Selected</Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
              <Table.Cell selected>
                <Table.CellContent variant="number">1000</Table.CellContent>
              </Table.Cell>
              <Table.Cell selected>
                <Table.CellContent>
                  CellCellCell CellCellCell CellCellCell
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell selected>
                <Table.CellContent>
                  CellCellCell CellCellCell CellCellCell
                </Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
            </Table.Row>
            <Table.Row height="40px">
              <Table.Cell>
                <Table.CellContent>Fixed height</Table.CellContent>
              </Table.Cell>
              <Table.Cell interactive>
                <Table.CellContent>Fixed height</Table.CellContent>
              </Table.Cell>
              <Table.Cell>
                <Table.CellContent>Fixed height</Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
              <Table.Cell>
                <Table.CellContent variant="number">32</Table.CellContent>
              </Table.Cell>
              <Table.Cell>
                <Table.CellContent>
                  Fixed height Fixed height Fixed height
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell>
                <Table.CellContent>
                  Fixed height Fixed height Fixed height
                </Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell width={150}>
                <Table.CellContent ellipsis>
                  Ellipses overflowing content
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell width={150} interactive>
                <Table.CellContent ellipsis>
                  Ellipses overflowing content
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell width={150}>
                <Table.CellContent ellipsis>
                  Ellipses overflowing content
                </Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
              <Table.Cell width={150}>
                <Table.CellContent ellipsis variant="number">
                  12345678901234567890
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell width={150}>
                <Table.CellContent ellipsis>
                  Ellipses overflowing content Ellipses overflowing content
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell width={150}>
                <Table.CellContent ellipsis>
                  Ellipses overflowing content Ellipses overflowing content
                </Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell width={150} height="32px">
                <Table.CellContent lines={2}>
                  2 lines of overflowing content
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell width={150} height="32px" interactive>
                <Table.CellContent lines={2}>
                  2 lines of overflowing content
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell width={150} height="32px">
                <Table.CellContent lines={2}>
                  2 lines of overflowing content
                </Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
              <Table.Cell width={150} height="32px">
                <Table.CellContent lines={2} variant="number">
                  12345678901234567890 12345678901234567890
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell width={150} height="32px">
                <Table.CellContent lines={2}>
                  2 lines of overflowing content 2 lines of overflowing content
                </Table.CellContent>
              </Table.Cell>
              <Table.Cell width={150} height="32px">
                <Table.CellContent lines={2}>
                  2 lines of overflowing content 2 lines of overflowing content
                </Table.CellContent>
                <Table.CellActionWrapper>
                  <Menu.Trigger menu={CONTEXT_MENU}>
                    <Table.ContextualIconButton />
                  </Menu.Trigger>
                </Table.CellActionWrapper>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Table>
      </div>
      <H2>Vertical scroll</H2>
      <div className={classNames("flex", "flex-col", "gap-s", "w-xl")}>
        <Table.Table variant="list" height={200}>
          <Table.Head>
            <Table.HeaderRow>
              <Table.SupportCell isHeader interactive>
                <Table.Selection rowSelection="multiple" isHeader />
              </Table.SupportCell>
              <Table.Header header="Header" />
              <Table.Header header="Header" />
              <Table.Header header="Header" />
            </Table.HeaderRow>
          </Table.Head>
          <Table.Body>
            {Array.from({
            length: 20
          }, (_, i) => <Table.Row key={i} interactive selected={i === 3} data-status={i === 2 ? "hover" : undefined}>
                <Table.SupportCell interactive>
                  <Table.Selection rowSelection="multiple" checked={i === 3} />
                </Table.SupportCell>
                <Table.Cell>
                  <Table.CellContent>Cell {i + 1}</Table.CellContent>
                </Table.Cell>
                <Table.Cell>
                  <Table.CellContent>Cell {i + 1}</Table.CellContent>
                </Table.Cell>
                <Table.Cell>
                  <Table.CellContent>Cell {i + 1}</Table.CellContent>
                </Table.Cell>
              </Table.Row>)}
          </Table.Body>
        </Table.Table>
      </div>
      <H2>Vertical scroll virtualized</H2>
      <div className={classNames("overflow-auto", "gap-s", "w-xl")} style={{
      blockSize: "200px"
    }}>
        <Table.Table variant="data" height={200} overflowY="virtualized" contentHeight={100 * 32}>
          <Table.Head>
            <Table.HeaderRow>
              <Table.SupportCell isHeader>
                <Table.RowNumber index="#" />
              </Table.SupportCell>
              <Table.SupportCell isHeader interactive>
                <Table.Selection rowSelection="single" />
              </Table.SupportCell>
              <Table.Header header="Header" />
              <Table.Header header="Header" />
              <Table.Header header="Header" />
            </Table.HeaderRow>
          </Table.Head>
          <Table.Body>
            {Array.from({
            length: 20
          }, (_, i) => <Table.Row key={i} startPosition={i * 32}>
                <Table.SupportCell>
                  <Table.RowNumber index={i} />
                </Table.SupportCell>
                <Table.SupportCell interactive>
                  <Table.Selection rowSelection="single" checked={i === 3} />
                </Table.SupportCell>
                <Table.Cell interactive>
                  <Table.CellContent>Cell {i + 1}</Table.CellContent>
                </Table.Cell>
                <Table.Cell interactive>
                  <Table.CellContent>Cell {i + 1}</Table.CellContent>
                </Table.Cell>
                <Table.Cell interactive>
                  <Table.CellContent>Cell {i + 1}</Table.CellContent>
                </Table.Cell>
              </Table.Row>)}
          </Table.Body>
        </Table.Table>
      </div>
      <H2>Horizontal scroll</H2>
      TODO
      <H2>Empty state</H2>
      <div className={classNames("overflow-auto", "gap-s", "w-xl")} style={{
      blockSize: "250px"
    }}>
        <Table.Table variant="data" height={250} overflowY="virtualized" contentHeight={100 * 32}>
          <Table.Head>
            <Table.HeaderRow>
              <Table.SupportCell isHeader>
                <Table.RowNumber index="#" />
              </Table.SupportCell>
              <Table.SupportCell isHeader interactive>
                <Table.Selection rowSelection="single" />
              </Table.SupportCell>
              <Table.Header header="Header" />
              <Table.Header header="Header" />
              <Table.Header header="Header" />
            </Table.HeaderRow>
          </Table.Head>
          <Table.Message>
            <Message title="Empty table reason" message="Description of why table is empty, replace illustration with best fit" illustration={<EmptyIllustration />} />
          </Table.Message>
        </Table.Table>
      </div>
    </div>,
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    controls: {
      disable: true
    },
    pseudo: {
      hover: '[data-status="hover"]',
      active: '[data-status="active"]',
      focus: ['[data-status="focus"]']
    }
  }
}`,...w.parameters?.docs?.source}}};const Le=["HTMLTable","VisualTest"],tl=Object.freeze(Object.defineProperty({__proto__:null,HTMLTable:g,VisualTest:w,__namedExportsOrder:Le,default:De},Symbol.toStringTag,{value:"Module"}));export{g as H,tl as T};
