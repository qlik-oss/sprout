import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-sE-G6KV_.js";import{t as n}from"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as r}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{D as i,d as a,hn as o}from"./iframe-BRSAI4nO.js";import{t as s}from"./lib-yrlbDAAk.js";import{t as c}from"./sprout-tokens-Dd0lQcAC.js";var l=e(t()),u=r(),d={title:`Design Tokens/All Tokens`};function f(e){let t=e.split(`-`),n=t[3];return n===`brand`&&t[4]===`primary`?`brand-primary`:n}function p(e){let t=e.split(`-`),n=4;f(e)===`brand-primary`&&(n=5);let r=t[n];return r===`foreground`&&t[n+1]===`color`?r=`foreground-color`:r===`background`&&t[n+1]===`color`?r=`background-color`:r===`border`&&t[t.length-1]===`width`?r=`border-width`:r===`border`&&t[t.length-1]===`style`?r=`border-style`:r===`border`&&t[t.length-1]===`color`?r=`border-color`:r===`border`&&t[n+1]===`radius`?r=`border-radius`:r===`divider`&&t[t.length-1]===`width`?r=`divider-width`:r===`divider`&&t[t.length-1]===`style`?r=`divider-style`:r===`divider`&&t[t.length-1]===`color`?r=`divider-color`:r===`font`?t[t.length-1]===`size`?r=`font-size`:t[t.length-1]===`weight`?r=`font-weight`:t[t.length-1]===`style`?r=`font-style`:t[t.length-1]===`familly`?r=`font-familly`:t.length===5&&(r=`font`):(r===`nested`||r===`twice`)&&(r=`border`,t.includes(`radius`)&&(r=`border-radius`)),r}function m(){let e=[];return Object.keys(c).filter(Boolean).forEach(t=>{let n=t.replaceAll(`_`,`-`);e.push({name:n,defaultVariant:c[t].$value,dimension:c[t].$type,semantic:f(n),usage:p(n)})}),e.sort((e,t)=>e.name.localeCompare(t.name)),e}var h=(0,l.createContext)(()=>{});function g({children:e}){let[t,n]=(0,l.useState)([]),r=(0,l.useCallback)(e=>{let t=Math.random().toString();n(n=>[...n,{"data-id":t,...e}]),setTimeout(()=>{n(e=>e.filter(e=>e[`data-id`]!==t))},3e3)},[n]);return(0,u.jsxs)(h.Provider,{value:r,children:[e,(0,u.jsx)(a.Container,{placement:`bottom`,children:t.map((e,t)=>(0,u.jsx)(a.Content,{...e,onClose:()=>{n(t=>t.filter(t=>t.id!==e.id))}},t))})]})}function _({children:e,wrap:t}){let r=(0,l.useContext)(h),i=(l.Children.toArray(e).join(``)||``).toString();return(0,u.jsx)(`button`,{type:`button`,onClick:()=>{let e=t===`var`?`var(${i})`:`sprout.${i}`;navigator.clipboard.writeText(e).then(()=>{r({message:`token copied`})}).catch(()=>{r({message:`failed to copy token`})})},className:n.classNames(`flex`,`flex-row`,`ai-start`,`border-none`,`font-script-m`,`bg-transparent`,`text-default`,`w-full`,`overflow-hidden`,{"px-m":t===`sprout`}),style:{cursor:`copy`,textWrap:`nowrap`},children:(0,u.jsx)(`span`,{style:{color:`var(--sprout-script-color-string)`},children:i})})}var v=m(),y=v.reduce((e,t)=>(e.includes(t.dimension)||e.push(t.dimension),e),[]);y.sort();var b=v.reduce((e,t)=>(e.includes(t.semantic)||e.push(t.semantic),e),[]);b.sort();var x=v.reduce((e,t)=>(e.includes(t.usage)||e.push(t.usage),e),[]);x.sort();function S({colDef:e,row:t}){let n=e.field;return n?(0,u.jsx)(_,{wrap:`var`,children:t[n]}):null}function C({colDef:e,row:t}){let n=(0,l.useRef)(null),[r,i]=(0,l.useState)(e.field?t[e.field]:``);return(0,l.useEffect)(()=>{n.current&&i(getComputedStyle(n.current).getPropertyValue(n.current.dataset.key||`color`))},[]),t.usage===`border`?(0,u.jsx)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`items-center`,`bg-default`,`p-s`,`h-full`),children:(0,u.jsx)(`div`,{className:o(`flex`,`flex-row`,`border-box`),style:{border:`var(${t.name})`,inlineSize:`20px`,blockSize:`20px`}})}):t.usage===`divider`?(0,u.jsx)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`items-center`,`bg-default`,`p-s`,`h-full`),children:(0,u.jsx)(`div`,{className:o(`flex`,`flex-row`,`border-box`),style:{borderBlockStart:`var(${t.name})`,inlineSize:`100px`,blockSize:`2px`}})}):t.usage===`foreground-color`?(0,u.jsx)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`items-center`,`p-s`,`h-full`,`w-full`,{"bg-default":t.semantic!==`inverse`,"bg-inverse":t.semantic===`inverse`}),children:(0,u.jsx)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`font-label-s`,`radius-round`),ref:n,"data-key":`color`,style:{color:`var(${t.name})`},children:r})}):[`background-color`,`color`,`border-color`,`divider-color`].includes(t.usage)?(0,u.jsxs)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`items-center`,`p-s`,`gap-s`,`size-full`,`font-label-s`,{"bg-default":t.semantic!==`inverse`,"bg-inverse":t.semantic===`inverse`,"text-inverse":t.semantic===`inverse`,"text-default":t.semantic!==`inverse`}),children:[(0,u.jsx)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`radius-round`,`border-default`),ref:n,"data-key":`background-color`,style:{backgroundColor:`var(${t.name})`,inlineSize:`20px`,blockSize:`20px`}}),r]}):t.usage===`elevation`?(0,u.jsx)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`items-center`,`h-full`,{"bg-inverse":t.semantic===`inverse`,"text-inverse":t.semantic===`inverse`,"bg-default":t.semantic!==`inverse`,"text-default":t.semantic!==`inverse`}),children:(0,u.jsx)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`items-center`,`justify-center`,`radius-subtle`,`w-fit`,`bg-default`,`font-label-xs`),style:{boxShadow:`var(${t.name})`,blockSize:`var(--sprout-common-sizing-xl)`,whiteSpace:`nowrap`},children:e.field?t[e.field]:null})}):t.dimension===`typography`&&t.usage===`font`?(0,u.jsx)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`items-center`,`p-s`,`h-full`,{"bg-inverse":t.semantic===`inverse`,"text-inverse":t.semantic===`inverse`,"bg-default":t.semantic!==`inverse`,"text-default":t.semantic!==`inverse`}),children:(0,u.jsx)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`items-center`,`justify-center`,`radius-subtle`,`bg-default`,`text-nowrap`,`w-fit`),style:{font:`var(${t.name})`},children:e.field?t[e.field]:null})}):(0,u.jsx)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`items-center`,`h-full`,`bg-default`,`text-default`,`p-s`),children:e.field?t[e.field]:null})}var w=[{field:`name`,headerName:`Name`,renderCell:S,flex:1},{field:`defaultVariant`,headerName:`Default Variant`,renderCell:C,width:300},{field:`dimension`,headerName:`Dimension`,width:128},{field:`semantic`,headerName:`Semantic`,width:128},{field:`usage`,headerName:`Usage`,width:128}],T={name:`All Tokens`,render:({name:e,dimension:t,semantic:n,usage:r})=>{let[a,c]=(0,l.useState)(v),[d,f]=(0,l.useState)(``);(0,l.useEffect)(()=>{c(v.filter(i=>{let a=i.name.toLowerCase().includes((e||``).toLowerCase()),o=!t||i.dimension.toLowerCase()===(t||``).toLowerCase(),s=!n||i.semantic.toLowerCase()===(n||``).toLowerCase(),c=!r||i.usage.toLowerCase()===(r||``).toLowerCase();return a&&o&&s&&c}))},[e,t,n,r]);let p=(0,l.useMemo)(()=>a.filter(e=>[e.name,e.usage,e.dimension,e.semantic,e.defaultVariant].some(e=>e?.toLowerCase().includes(d.toLowerCase()))),[a,d]);return(0,u.jsx)(g,{children:(0,u.jsx)(`div`,{className:o(`flex`,`flex-col`,`border-box`,`h-screen`,`overflow-hidden`,`p-l`),children:(0,u.jsxs)(`div`,{className:o(`flex`,`flex-col`,`gap-m`,`border-box`,`size-full`),children:[(0,u.jsx)(`div`,{className:o(`flex`,`items-center`,`w-s`),children:(0,u.jsx)(i,{value:d,type:`search`,placeholder:`Search all tokens`,onChange:e=>{f(e.target.value||``)}})}),(0,u.jsx)(`div`,{className:o(`flex-auto`,`min-h-0`,`w-full`),children:(0,u.jsx)(s,{variant:`data`,columns:w,rowHeight:40,rows:p})})]})})})},argTypes:{name:{control:{type:`text`}},dimension:{control:{type:`select`},options:[``].concat(y)},semantic:{control:{type:`select`},options:[``].concat(b)},usage:{control:{type:`select`},options:[``].concat(x)}},parameters:{layout:`fullscreen`,chromatic:{disableSnapshot:!0}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};var E=[`DataTable`];export{T as DataTable,E as __namedExportsOrder,d as default};