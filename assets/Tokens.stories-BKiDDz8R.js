import{a as e,n as t}from"./chunk-BneVvdWh.js";import{C as n,Gn as r,In as i,Kn as a,Ln as o,Q as s,ir as c,v as l}from"./iframe-B0xl5hqz.js";import{n as u,t as d}from"./lib-2Xwj1dqI.js";import{n as f,t as p}from"./sprout-tokens-BO_GrNS_.js";function m(e){let t=e.split(`-`),n=t[3];return n===`brand`&&t[4]===`primary`?`brand-primary`:n}function h(e){let t=e.split(`-`),n=4;m(e)===`brand-primary`&&(n=5);let r=t[n];return r===`foreground`&&t[n+1]===`color`?r=`foreground-color`:r===`background`&&t[n+1]===`color`?r=`background-color`:r===`border`&&t[t.length-1]===`width`?r=`border-width`:r===`border`&&t[t.length-1]===`style`?r=`border-style`:r===`border`&&t[t.length-1]===`color`?r=`border-color`:r===`border`&&t[n+1]===`radius`?r=`border-radius`:r===`divider`&&t[t.length-1]===`width`?r=`divider-width`:r===`divider`&&t[t.length-1]===`style`?r=`divider-style`:r===`divider`&&t[t.length-1]===`color`?r=`divider-color`:r===`font`?t[t.length-1]===`size`?r=`font-size`:t[t.length-1]===`weight`?r=`font-weight`:t[t.length-1]===`style`?r=`font-style`:t[t.length-1]===`familly`?r=`font-familly`:t.length===5&&(r=`font`):(r===`nested`||r===`twice`)&&(r=`border`,t.includes(`radius`)&&(r=`border-radius`)),r}function g(){let e=[];return Object.keys(f).filter(Boolean).forEach(t=>{let n=t.replaceAll(`_`,`-`);e.push({name:n,defaultVariant:f[t].$value,dimension:f[t].$type,semantic:m(n),usage:h(n)})}),e.sort((e,t)=>e.name.localeCompare(t.name)),e}function _({children:e}){let[t,r]=(0,x.useState)([]),i=(0,x.useCallback)(e=>{let t=Math.random().toString();r(n=>[...n,{"data-id":t,...e}]),setTimeout(()=>{r(e=>e.filter(e=>e[`data-id`]!==t))},3e3)},[r]);return(0,S.jsxs)(w.Provider,{value:i,children:[e,(0,S.jsx)(n.Container,{placement:`bottom`,children:t.map((e,t)=>(0,S.jsx)(n.Content,{...e,onClose:()=>{r(t=>t.filter(t=>t.id!==e.id))}},t))})]})}function v({children:e,wrap:t}){let n=(0,x.useContext)(w),r=(x.Children.toArray(e).join(``)||``).toString();return(0,S.jsx)(`button`,{type:`button`,onClick:()=>{let e=t===`var`?`var(${r})`:`sprout.${r}`;navigator.clipboard.writeText(e).then(()=>{n({message:`token copied`})}).catch(()=>{n({message:`failed to copy token`})})},className:a.classNames(`flex`,`flex-row`,`ai-start`,`border-none`,`font-script-m`,`bg-transparent`,`text-default`,`w-full`,`overflow-hidden`,{"px-m":t===`sprout`}),style:{cursor:`copy`,textWrap:`nowrap`},children:(0,S.jsx)(`span`,{style:{color:`var(--sprout-script-color-string)`},children:r})})}function y({colDef:e,row:t}){let n=e.field;return n?(0,S.jsx)(v,{wrap:`var`,children:t[n]}):null}function b({colDef:e,row:t}){let n=(0,x.useRef)(null),[r,a]=(0,x.useState)(e.field?t[e.field]:``);return(0,x.useEffect)(()=>{n.current&&a(getComputedStyle(n.current).getPropertyValue(n.current.dataset.key||`color`))},[]),t.usage===`border`?(0,S.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`items-center`,`bg-default`,`p-s`,`h-full`),children:(0,S.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`),style:{border:`var(${t.name})`,inlineSize:`20px`,blockSize:`20px`}})}):t.usage===`divider`?(0,S.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`items-center`,`bg-default`,`p-s`,`h-full`),children:(0,S.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`),style:{borderBlockStart:`var(${t.name})`,inlineSize:`100px`,blockSize:`2px`}})}):t.usage===`foreground-color`?(0,S.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`items-center`,`p-s`,`h-full`,`w-full`,{"bg-default":t.semantic!==`inverse`,"bg-inverse":t.semantic===`inverse`}),children:(0,S.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`font-label-s`,`radius-round`),ref:n,"data-key":`color`,style:{color:`var(${t.name})`},children:r})}):[`background-color`,`color`,`border-color`,`divider-color`].includes(t.usage)?(0,S.jsxs)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`items-center`,`p-s`,`gap-s`,`size-full`,`font-label-s`,{"bg-default":t.semantic!==`inverse`,"bg-inverse":t.semantic===`inverse`,"text-inverse":t.semantic===`inverse`,"text-default":t.semantic!==`inverse`}),children:[(0,S.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`radius-round`,`border-default`),ref:n,"data-key":`background-color`,style:{backgroundColor:`var(${t.name})`,inlineSize:`20px`,blockSize:`20px`}}),r]}):t.usage===`elevation`?(0,S.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`items-center`,`h-full`,{"bg-inverse":t.semantic===`inverse`,"text-inverse":t.semantic===`inverse`,"bg-default":t.semantic!==`inverse`,"text-default":t.semantic!==`inverse`}),children:(0,S.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`items-center`,`justify-center`,`radius-subtle`,`w-fit`,`bg-default`,`font-label-xs`),style:{boxShadow:`var(${t.name})`,blockSize:`var(--sprout-common-sizing-xl)`,whiteSpace:`nowrap`},children:e.field?t[e.field]:null})}):t.dimension===`typography`&&t.usage===`font`?(0,S.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`items-center`,`p-s`,`h-full`,{"bg-inverse":t.semantic===`inverse`,"text-inverse":t.semantic===`inverse`,"bg-default":t.semantic!==`inverse`,"text-default":t.semantic!==`inverse`}),children:(0,S.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`items-center`,`justify-center`,`radius-subtle`,`bg-default`,`text-nowrap`,`w-fit`),style:{font:`var(${t.name})`},children:e.field?t[e.field]:null})}):(0,S.jsx)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`items-center`,`h-full`,`bg-default`,`text-default`,`p-s`),children:e.field?t[e.field]:null})}var x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{x=e(c()),p(),r(),l(),d(),S=o(),C={title:`Design Tokens/All Tokens`},w=(0,x.createContext)(()=>{}),T=g(),E=T.reduce((e,t)=>(e.includes(t.dimension)||e.push(t.dimension),e),[]),E.sort(),D=T.reduce((e,t)=>(e.includes(t.semantic)||e.push(t.semantic),e),[]),D.sort(),O=T.reduce((e,t)=>(e.includes(t.usage)||e.push(t.usage),e),[]),O.sort(),k=[{field:`name`,headerName:`Name`,renderCell:y,flex:1},{field:`defaultVariant`,headerName:`Default Variant`,renderCell:b,width:300},{field:`dimension`,headerName:`Dimension`,width:128},{field:`semantic`,headerName:`Semantic`,width:128},{field:`usage`,headerName:`Usage`,width:128}],A={name:`All Tokens`,render:({name:e,dimension:t,semantic:n,usage:r})=>{let[a,o]=(0,x.useState)(T),[c,l]=(0,x.useState)(``);(0,x.useEffect)(()=>{o(T.filter(i=>{let a=i.name.toLowerCase().includes((e||``).toLowerCase()),o=!t||i.dimension.toLowerCase()===(t||``).toLowerCase(),s=!n||i.semantic.toLowerCase()===(n||``).toLowerCase(),c=!r||i.usage.toLowerCase()===(r||``).toLowerCase();return a&&o&&s&&c}))},[e,t,n,r]);let d=(0,x.useMemo)(()=>a.filter(e=>[e.name,e.usage,e.dimension,e.semantic,e.defaultVariant].some(e=>e?.toLowerCase().includes(c.toLowerCase()))),[a,c]);return(0,S.jsx)(_,{children:(0,S.jsx)(`div`,{className:i(`flex`,`flex-col`,`border-box`,`h-screen`,`overflow-hidden`,`p-l`),children:(0,S.jsxs)(`div`,{className:i(`flex`,`flex-col`,`gap-m`,`border-box`,`size-full`),children:[(0,S.jsx)(`div`,{className:i(`flex`,`items-center`,`w-s`),children:(0,S.jsx)(s,{value:c,type:`search`,placeholder:`Search all tokens`,onChange:e=>{l(e.target.value||``)}})}),(0,S.jsx)(`div`,{className:i(`flex-auto`,`min-h-0`,`w-full`),children:(0,S.jsx)(u,{variant:`data`,columns:k,rowHeight:40,rows:d})})]})})})},argTypes:{name:{control:{type:`text`}},dimension:{control:{type:`select`},options:[``].concat(E)},semantic:{control:{type:`select`},options:[``].concat(D)},usage:{control:{type:`select`},options:[``].concat(O)}},parameters:{layout:`fullscreen`,chromatic:{disableSnapshot:!0}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`DataTable`]}));M();export{A as DataTable,j as __namedExportsOrder,C as default,M as t};