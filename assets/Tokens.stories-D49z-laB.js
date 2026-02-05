import{r as l,j as s}from"./iframe-CYyT-rNd.js";import{t as x}from"./sprout-tokens-DrATkuH6.js";import{s as j}from"./sprout-UDUY6uO8.js";import{T as k}from"./TanstackTable-DQ5rM_kH.js";import{T as h}from"./index-CVr9pO7k.js";import{T as E}from"./TextField-3so8vjFm.js";import{c as o}from"./classNames-BmP9dLUE.js";import"./preload-helper-PPVm8Dsz.js";import"./useI18n-B8acZ0ym.js";import"./Button-B_WU7ehq.js";import"./icons-BJP5nzPh.js";import"./Button.module-C2ELNEem.js";import"./Badge-M4fZ9aOR.js";import"./Tooltip-Bq8n5z5D.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-GWN5S5OT.js";import"./useId-BEfewr8x.js";import"./ProgressCircular-BThLXJeo.js";import"./SortDescending-CVAYxQhu.js";import"./IconButton-DQqeG5o4.js";import"./Menu-BJ4TKxRh.js";import"./useControl-CbxOYg9r.js";import"./Divider-DGcHtPQB.js";import"./list-B1zo5gaH.js";import"./NewTab-CSZjxaIu.js";import"./Skeleton-BcSpZhaC.js";import"./Checkbox-CEdksXS8.js";import"./useValueControl-DkREc4sR.js";import"./HelperText-PF_3nKgd.js";import"./InfoTooltipPrimitive-CcAfk6tw.js";import"./Info-kPGn8DpC.js";import"./List-CKMCLIEK.js";import"./useListGesture-BJWysAy8.js";import"./Popover-p0wTHRSq.js";import"./Radio-6dgqdk9y.js";import"./Message-1sVzd-4h.js";import"./ProgressBar-PgTOB488.js";import"./Close-IBeLqb5W.js";import"./SeverityIcon-B1bVDgD2.js";import"./Error-D7GnDcGx.js";import"./Warning-BO-41SRA.js";import"./Dialog-DpA2iiF0.js";import"./InputButton-CVMmk1vr.js";import"./useFieldProps-crQyhd-6.js";import"./useFieldAriaProps-O3JOrChf.js";import"./Field-WnapnPu6.js";import"./FieldLabel-B0tZljJj.js";const Le={title:"CSS/Tokens"};function b(r){const e=r.split("-"),n=e[3];return n==="brand"&&e[4]==="primary"?"brand-primary":n}function L(r){const e=r.split("-");let n=4;b(r)==="brand-primary"&&(n=5);let t=e[n];return t==="foreground"&&e[n+1]==="color"?t="foreground-color":t==="background"&&e[n+1]==="color"?t="background-color":t==="border"&&e[e.length-1]==="width"?t="border-width":t==="border"&&e[e.length-1]==="style"?t="border-style":t==="border"&&e[e.length-1]==="color"?t="border-color":t==="border"&&e[n+1]==="radius"?t="border-radius":t==="divider"&&e[e.length-1]==="width"?t="divider-width":t==="divider"&&e[e.length-1]==="style"?t="divider-style":t==="divider"&&e[e.length-1]==="color"?t="divider-color":t==="font"?e[e.length-1]==="size"?t="font-size":e[e.length-1]==="weight"?t="font-weight":e[e.length-1]==="style"?t="font-style":e[e.length-1]==="familly"?t="font-familly":e.length===5&&(t="font"):(t==="nested"||t==="twice")&&(t="border",e.includes("radius")&&(t="border-radius")),t}function D(){const r=[];return Object.keys(x).filter(Boolean).forEach(e=>{const n=e.replaceAll("_","-");r.push({name:n,defaultVariant:x[e].$value,dimension:x[e].$type,semantic:b(n),usage:L(n)})}),r.sort((e,n)=>e.name.localeCompare(n.name)),r}const g=l.createContext(()=>{});function A({children:r}){const[e,n]=l.useState([]),a=l.useCallback(t=>{const d=Math.random().toString();n(c=>[...c,{"data-id":d,...t}]),setTimeout(()=>{n(c=>c.filter(m=>m["data-id"]!==d))},3e3)},[n]);return s.jsxs(g.Provider,{value:a,children:[r,s.jsx(h.Container,{placement:"bottom",children:e.map((t,d)=>s.jsx(h.Content,{...t,onClose:()=>{n(c=>c.filter(m=>m.id!==t.id))}},d))})]})}function z({children:r,wrap:e}){const n=l.useContext(g),a=(l.Children.toArray(r).join("")||"").toString();return s.jsx("button",{type:"button",onClick:()=>{const t=e==="var"?`var(${a})`:`sprout.${a}`;navigator.clipboard.writeText(t).then(()=>{n({message:"token copied"})}).catch(()=>{n({message:"failed to copy token"})})},className:j.classNames("flex","flex-row","ai-start","border-none","font-script-m","bg-transparent","text-default","w-full","overflow-hidden",{"px-m":e==="sprout"}),style:{cursor:"copy",textWrap:"nowrap"},children:s.jsx("span",{style:{color:"var(--sprout-script-color-string)"},children:a})})}const u=D(),v=u.reduce((r,e)=>(r.includes(e.dimension)||r.push(e.dimension),r),[]);v.sort();const N=u.reduce((r,e)=>(r.includes(e.semantic)||r.push(e.semantic),r),[]);N.sort();const w=u.reduce((r,e)=>(r.includes(e.usage)||r.push(e.usage),r),[]);w.sort();function O({colDef:r,row:e}){const n=r.field;return n?s.jsx(z,{wrap:"var",children:e[n]}):null}function _({colDef:r,row:e}){const n=l.useRef(null),[a,t]=l.useState(r.field?e[r.field]:"");return l.useEffect(()=>{n.current&&t(getComputedStyle(n.current).getPropertyValue(n.current.dataset.key||"color"))},[]),e.usage==="border"?s.jsx("div",{className:o("flex","flex-row","border-box","items-center","bg-default","p-s","h-full"),children:s.jsx("div",{className:o("flex","flex-row","border-box"),style:{border:`var(${e.name})`,inlineSize:"20px",blockSize:"20px"}})}):e.usage==="divider"?s.jsx("div",{className:o("flex","flex-row","border-box","items-center","bg-default","p-s","h-full"),children:s.jsx("div",{className:o("flex","flex-row","border-box"),style:{borderBlockStart:`var(${e.name})`,inlineSize:"100px",blockSize:"2px"}})}):e.usage==="foreground-color"?s.jsx("div",{className:o("flex","flex-row","border-box","items-center","p-s","h-full","w-full",{"bg-default":e.semantic!=="inverse","bg-inverse":e.semantic==="inverse"}),children:s.jsx("div",{className:o("flex","flex-row","border-box","font-label-s","radius-round"),ref:n,"data-key":"color",style:{color:`var(${e.name})`},children:a})}):["background-color","color","border-color","divider-color"].includes(e.usage)?s.jsxs("div",{className:o("flex","flex-row","border-box","items-center","p-s","gap-s","size-full","font-label-s",{"bg-default":e.semantic!=="inverse","bg-inverse":e.semantic==="inverse","text-inverse":e.semantic==="inverse","text-default":e.semantic!=="inverse"}),children:[s.jsx("div",{className:o("flex","flex-row","border-box","radius-round","border-default"),ref:n,"data-key":"background-color",style:{backgroundColor:`var(${e.name})`,inlineSize:"20px",blockSize:"20px"}}),a]}):e.usage==="elevation"?s.jsx("div",{className:o("flex","flex-row","border-box","items-center","h-full",{"bg-inverse":e.semantic==="inverse","bg-default":e.semantic!=="inverse"}),children:s.jsx("div",{className:o("flex","flex-row","border-box","items-center","justify-center","radius-subtle","w-fit","bg-default","font-label-xs"),style:{boxShadow:`var(${e.name})`,blockSize:"var(--sprout-common-sizing-xl)",whiteSpace:"nowrap"},children:r.field?e[r.field]:null})}):e.dimension==="typography"&&e.usage==="font"?s.jsx("div",{className:o("flex","flex-row","border-box","items-center","p-s","h-full",{"bg-inverse":e.semantic==="inverse","bg-default":e.semantic!=="inverse"}),children:s.jsx("div",{className:o("flex","flex-row","border-box","items-center","justify-center","radius-subtle","bg-default","text-nowrap","w-fit"),style:{font:`var(${e.name})`},children:r.field?e[r.field]:null})}):s.jsx("div",{className:o("flex","flex-row","border-box","items-center","h-full"),children:r.field?e[r.field]:null})}const R=[{field:"name",headerName:"Name",renderCell:O,flex:1},{field:"defaultVariant",headerName:"Default Variant",renderCell:_,width:300},{field:"dimension",headerName:"Dimension",width:128},{field:"semantic",headerName:"Semantic",width:128},{field:"usage",headerName:"Usage",width:128}],f={name:"All Tokens",render:({name:r,dimension:e,semantic:n,usage:a})=>{const[t,d]=l.useState(u),[c,m]=l.useState("");l.useEffect(()=>{d(u.filter(i=>{const p=i.name.toLowerCase().includes((r||"").toLowerCase()),T=!e||i.dimension.toLowerCase()===(e||"").toLowerCase(),y=!n||i.semantic.toLowerCase()===(n||"").toLowerCase(),C=!a||i.usage.toLowerCase()===(a||"").toLowerCase();return p&&T&&y&&C}))},[r,e,n,a]);const S=l.useMemo(()=>t.filter(i=>[i.name,i.usage,i.dimension,i.semantic,i.defaultVariant].some(p=>p?.toLowerCase().includes(c.toLowerCase()))),[t,c]);return s.jsx(A,{children:s.jsx("div",{className:o("flex","flex-col","border-box","h-screen","overflow-hidden","p-l"),children:s.jsxs("div",{className:o("flex","flex-col","gap-m","border-box","size-full"),children:[s.jsx("div",{className:o("flex","items-center","w-s"),children:s.jsx(E,{value:c,type:"search",placeholder:"Search all tokens",onChange:i=>{m(i.target.value||"")}})}),s.jsx("div",{className:o("flex-auto","min-h-0","w-full"),children:s.jsx(k,{variant:"data",columns:R,rowHeight:40,rows:S})})]})})})},argTypes:{name:{control:{type:"text"}},dimension:{control:{type:"select"},options:[""].concat(v)},semantic:{control:{type:"select"},options:[""].concat(N)},usage:{control:{type:"select"},options:[""].concat(w)}},parameters:{layout:"fullscreen",chromatic:{disableSnapshot:!0}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "All Tokens",
  render: ({
    name,
    dimension,
    semantic,
    usage
  }: {
    name?: string;
    dimension?: string;
    semantic?: string;
    usage?: string;
  }) => {
    const [rowData, setRowData] = useState(TOKEN_DATA);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
      setRowData(TOKEN_DATA.filter(token => {
        const matchName = token.name.toLowerCase().includes((name || "").toLowerCase());
        const matchDimension = !dimension || token.dimension.toLowerCase() === (dimension || "").toLowerCase();
        const matchSemantic = !semantic || token.semantic.toLowerCase() === (semantic || "").toLowerCase();
        const matchUsage = !usage || token.usage.toLowerCase() === (usage || "").toLowerCase();
        return matchName && matchDimension && matchSemantic && matchUsage;
      }));
    }, [name, dimension, semantic, usage]);
    const filteredRows = useMemo(() => rowData.filter(row => [row.name, row.usage, row.dimension, row.semantic, row.defaultVariant].some(v => v?.toLowerCase().includes(searchTerm.toLowerCase()))), [rowData, searchTerm]);
    return <ToastContainerStory>
        <div className={classNames("flex", "flex-col", "border-box", "h-screen", "overflow-hidden", "p-l")}>
          <div className={classNames("flex", "flex-col", "gap-m", "border-box", "size-full")}>
            <div className={classNames("flex", "items-center", "w-s")}>
              <TextField value={searchTerm} type="search" placeholder="Search all tokens" onChange={e => {
              setSearchTerm(e.target.value || "");
            }} />
            </div>
            <div className={classNames("flex-auto", "min-h-0", "w-full")}>
              <Table variant="data" columns={colDef} rowHeight={40} rows={filteredRows} />
            </div>
          </div>
        </div>
      </ToastContainerStory>;
  },
  argTypes: {
    name: {
      control: {
        type: "text"
      }
    },
    dimension: {
      control: {
        type: "select"
      },
      options: [""].concat(TOKEN_DIMENSIONS)
    },
    semantic: {
      control: {
        type: "select"
      },
      options: [""].concat(TOKEN_SEMANTICS)
    },
    usage: {
      control: {
        type: "select"
      },
      options: [""].concat(TOKEN_USAGES)
    }
  },
  parameters: {
    layout: "fullscreen",
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...f.parameters?.docs?.source}}};const De=["DataTable"];export{f as DataTable,De as __namedExportsOrder,Le as default};
