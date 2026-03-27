import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Fn as n,K as r,Pn as i,nr as a,q as o,v as s,wt as c}from"./iframe-RiXBydPV.js";import{n as l,t as u}from"./lib-Mf9b06gq.js";import{c as d,d as f,f as p,h as m,i as h,l as g,m as _,n as v,o as y,p as b,r as x,t as S,u as C}from"./entity-C1w86bGV.js";var w,T,E=t((()=>{w=[{id:1,name:`Qlik Cloud Analytics`,description:`Uncover insights`},{id:2,name:`Qlik Talend Cloud`,description:`Deliver trusted data`},{id:3,name:`Talend Data Fabric`,description:`Unify, integrate and govern disparate data environments`},{id:4,name:`Qlik Sense (on-prem)`,description:`Seamless integration of data from multiple systems`},{id:5,name:`Qlik Replicate`,description:`Accelerate data ingestion and streaming`},{id:6,name:`Qlik Answers`,description:`Gen-AI driven answers from unstructured content`}],T=[{field:`name`,headerName:`Product Name`,width:200},{field:`description`,headerName:`Description`,width:300}]}));function D({row:e}){let t=(0,O.useRef)(null),[n,a]=(0,O.useState)(!1),[s,c]=(0,O.useState)((0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`div`,{className:i(`flex`,`border_box`,`p-m`),children:(0,k.jsx)(o,{variant:`text`,width:100,height:16})}),(0,k.jsx)(`div`,{className:i(`flex`,`border_box`,`p-m`),children:(0,k.jsx)(o,{variant:`text`,width:100,height:16})})]}));return(0,O.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{a(e.isIntersecting)});return t.current&&e.observe(t.current),()=>{e.disconnect()}},[]),(0,O.useEffect)(()=>{n&&setTimeout(()=>{c((0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(r.Item,{children:[`Edit `,e.name]}),(0,k.jsxs)(r.Item,{children:[`Delete `,e.name]})]}))},1e3)},[n,e.name]),(0,k.jsx)(`div`,{ref:t,children:s})}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J=t((()=>{s(),O=e(a()),u(),m(),x(),E(),k=n(),{fn:A}=__STORYBOOK_MODULE_TEST__,j={title:`Table/List`},M={name:`Playground`,parameters:{chromatic:{disableSnapshot:!0},layout:`fullscreen`},render:e=>(0,k.jsx)(`div`,{className:i(`w-full`,`p-xl`,`border-box`,`h-screen`),children:(0,k.jsx)(l,{defaultSorting:[{id:`name`,desc:!0}],...e})}),args:{variant:`list`,rowSelectionMode:`multiple`,rows:h(100),columns:S,onRowSelectionChange:A()},argTypes:{...b,...C,...f,...p,...d,...y}},N={name:`Getting Started`,render:e=>(0,k.jsx)(l,{...e}),args:{variant:`list`,rows:w,columns:T,rowSelectionMode:`multiple`},argTypes:{variant:_,rows:b.rows,columns:b.columns,rowSelectionMode:C.rowSelectionMode}},P={name:`renderCell`,render:e=>(0,k.jsx)(`div`,{className:i(`w-l`,`p-xl`,`border_box`,`h-screen`),children:(0,k.jsx)(l,{...e})}),args:{variant:`list`,rowSelectionMode:`multiple`,rows:h(10),columns:v},argTypes:{variant:_,rows:_,columns:b.columns,rowSelectionMode:_,rowSelection:_,onRowSelectionChange:_}},F={parameters:{layout:`fullscreen`},render:({rows:e,...t})=>{let[n,r]=(0,O.useState)([...e]);return(0,k.jsxs)(`div`,{children:[(0,k.jsxs)(`div`,{className:i(`flex`,`flex-row`,`gap-s`,`w-m`,`items-center`,`p-m`),children:[(0,k.jsx)(c,{onClick:()=>{r(e=>e.slice(0,-1))},label:`Remove a row`}),(0,k.jsx)(c,{onClick:()=>{r(e=>[...e,h(1)[0]])},label:`Add a row`})]}),(0,k.jsx)(`div`,{className:i(`p-0`,`m-0`),style:{blockSize:300},children:(0,k.jsx)(l,{rows:n,...t})})]})},args:{variant:`list`,rowSelectionMode:`multiple`,rows:h(4),columns:S}},I={parameters:{layout:`fullscreen`},name:`Flex parent container`,render:({rows:e,...t})=>{let[n,r]=(0,O.useState)([...e]);return(0,k.jsxs)(`div`,{className:i(`flex`,`flex-col`),children:[(0,k.jsxs)(`div`,{className:i(`flex`,`flex-row`,`gap-s`,`w-m`,`items-center`,`p-m`),children:[(0,k.jsx)(c,{onClick:()=>{r(e=>e.slice(0,-1))},label:`Remove a row`}),(0,k.jsx)(c,{onClick:()=>{r(e=>[...e,h(1)[0]])},label:`Add a row`})]}),(0,k.jsx)(`div`,{className:i(`flex`,`flex-col`,`grow-1`,`shrink-1`),children:(0,k.jsx)(l,{rows:n,...t})})]})},args:{variant:`list`,rowSelectionMode:`multiple`,rows:h(4),columns:S}},L={parameters:{layout:`fullscreen`},name:`Flex parent container boundaries`,render:({rows:e,...t})=>{let[n,r]=(0,O.useState)([...e]);return(0,k.jsxs)(`div`,{className:i(`flex`,`flex-col`),children:[(0,k.jsxs)(`div`,{className:i(`flex`,`flex-row`,`gap-s`,`w-m`,`items-center`,`p-m`),children:[(0,k.jsx)(c,{onClick:()=>{r(e=>e.slice(0,-1))},label:`Remove a row`}),(0,k.jsx)(c,{onClick:()=>{r(e=>[...e,h(1)[0]])},label:`Add a row`})]}),(0,k.jsx)(`div`,{className:i(`flex`,`flex-col`,`p-0`,`m-0`),style:{minBlockSize:200,maxBlockSize:300},children:(0,k.jsx)(l,{rows:n,...t})})]})},args:{...I.args}},R={name:`Predefined dimensions`,render:({rows:e,...t})=>{let[n,r]=(0,O.useState)(e);return(0,k.jsxs)(`div`,{className:i(`flex`,`flex-col`),children:[(0,k.jsxs)(`div`,{className:i(`flex`,`flex-row`,`gap-s`,`w-m`,`items-center`,`p-m`),children:[(0,k.jsx)(c,{onClick:()=>{r(e=>(e||[]).slice(0,-1))},label:`Remove a row`}),(0,k.jsx)(c,{onClick:()=>{r(e=>[...e||[],h(1)[0]])},label:`Add a row`})]}),(0,k.jsx)(`div`,{style:{blockSize:300,inlineSize:700},children:(0,k.jsx)(l,{...t,rows:n})})]})},args:{rows:h(4),columns:S,variant:`list`}},z={parameters:{chromatic:{disableSnapshot:!0}},render:e=>{let[t,n]=(0,O.useState)({});return(0,k.jsxs)(`div`,{className:i(`w-full`,`p-xl`,`border_box`),children:[(0,k.jsx)(`div`,{style:{blockSize:200},children:(0,k.jsx)(l,{...e,onRowSelectionChange:e=>{n(e)},rowSelection:t})}),(0,k.jsx)(`h2`,{children:`rowSelection state`}),(0,k.jsx)(`pre`,{className:i(`bg-inverse`,`text-inverse`),children:JSON.stringify(t,null,2)})]})},args:{variant:`list`,rowSelectionMode:`single`,rows:h(30),columns:S},argTypes:{variant:_,rows:_,columns:_,...C}},B={parameters:{chromatic:{disableSnapshot:!0}},render:e=>{let[t,n]=(0,O.useState)({});return(0,k.jsxs)(`div`,{className:i(`w-full`,`p-xl`,`border_box`),children:[(0,k.jsx)(`div`,{style:{blockSize:200},children:(0,k.jsx)(l,{...e,onRowSelectionChange:e=>{n(e)},rowSelection:t})}),(0,k.jsx)(`h2`,{children:`rowSelection state`}),(0,k.jsx)(`pre`,{className:i(`bg-inverse`,`text-inverse`),children:JSON.stringify(t,null,2)})]})},args:{variant:`list`,rowSelectionMode:`multiple`,rows:h(30),columns:S},argTypes:{variant:_,rows:_,columns:_,...C}},V={name:`rowActions`,render:e=>(0,k.jsx)(`div`,{className:i(`w-full`,`p-xl`,`border_box`),style:{blockSize:400},children:(0,k.jsx)(l,{...e})}),parameters:{chromatic:{disableSnapshot:!0}},args:{variant:`list`,rowSelectionMode:`multiple`,rows:h(100),columns:v,rowActions:()=>(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(r.Item,{onClick:()=>{alert(`onClick was triggered`)},children:`Edit`}),(0,k.jsx)(r.Item,{onClick:()=>{alert(`onClick was triggered`)},children:`Delete`})]})},argTypes:{variant:_,rows:_,columns:b.columns,...b,...C,...p,...d}},H={name:`loading`,parameters:{chromatic:{disableSnapshot:!0}},render:e=>(0,k.jsx)(`div`,{className:i(`flex`,`grow-1`,`border_box`),style:{blockSize:300},children:(0,k.jsx)(l,{...e})}),args:{variant:`list`,loading:!0,rowSelectionMode:`multiple`,columns:S},argTypes:{...b,...C,...p,...d}},U={name:`Row toggling`,parameters:{chromatic:{disableSnapshot:!0}},render:e=>(0,k.jsx)(`div`,{className:i(`w-full`,`p-xl`,`border_box`),style:{blockSize:400},children:(0,k.jsx)(l,{variant:`list`,rows:h(10),columns:S,...e})}),argTypes:{...C,...f,variant:_,rows:_,columns:_},args:{getRowId:e=>e.id,defaultToggledRowId:`34b40266-50ef-469f-8d12-b33526fbe46e`}},W={render:e=>(0,k.jsx)(l,{...e}),args:{variant:`list`,rows:h(10),columns:S,rowActions:e=>(0,k.jsx)(D,{row:e})},parameters:{chromatic:{disableSnapshot:!0},controls:!1}},G={name:`Pagination / Infinite scroll`,argTypes:{...g},parameters:{controls:!1,chromatic:{disableSnapshot:!0}},render:()=>{let[e,t]=(0,O.useState)(()=>h(20));return(0,k.jsx)(`div`,{className:i(`w-full`,`p-xl`,`border_box`),style:{blockSize:400},children:(0,k.jsx)(l,{variant:`list`,rowSelectionMode:`multiple`,columns:S,rows:e,nextPage:()=>new Promise(e=>{setTimeout(()=>{t(e=>[...e,...h(20)]),e()},500)})})})},args:{}},K={name:`Server side sorting`,parameters:{chromatic:{disableSnapshot:!0}},args:{variant:`list`,rows:h(50),columns:S,sortingMode:`server`},argTypes:{variant:_,rows:_,columns:_,...p},render:e=>{let[t,n]=(0,O.useState)(()=>h(50)),[r,a]=(0,O.useState)([]);return(0,O.useEffect)(()=>{setTimeout(()=>{if(r.length===0)return;let e=r[0];n([...t].sort((t,n)=>{let r=t[e.id],i=n[e.id];return r&&i&&r<i?e.desc?1:-1:r&&i&&r>i?e.desc?-1:1:0}))},1e3)},[r,t]),(0,k.jsx)(`div`,{className:i(`w-full`,`p-xl`,`border_box`),style:{blockSize:400},children:(0,k.jsx)(l,{...e,columns:S,rows:t,sorting:r,onSortingChange:a})})}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Playground",
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    layout: "fullscreen"
  },
  render: (props: TableProps<Entity>) => {
    const defaultSorting: SortingState = [{
      id: "name",
      desc: true
    }];
    return <div className={classNames("w-full", "p-xl", "border-box", "h-screen")}>
        <Table defaultSorting={defaultSorting} {...props} />
      </div>;
  },
  args: {
    variant: "list",
    rowSelectionMode: "multiple",
    rows: makeEntity(100),
    columns: entityAllFields,
    onRowSelectionChange: fn()
  },
  argTypes: {
    ...TableArgTypes,
    ...RowSelectionArgTypes,
    ...RowTogglingArgTypes,
    ...SortArgTypes,
    ...HideArgTypes,
    ...ColumnSizingArgTypes
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Getting Started",
  render: (props: TableProps<Product>) => {
    return <Table {...props} />;
  },
  args: {
    variant: "list",
    rows: productsQlikCloud,
    columns: productColDef,
    rowSelectionMode: "multiple"
  },
  argTypes: {
    variant: hideArg,
    rows: TableArgTypes.rows,
    columns: TableArgTypes.columns,
    rowSelectionMode: RowSelectionArgTypes.rowSelectionMode
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "renderCell",
  render: (props: TableProps<Entity>) => {
    return <div className={classNames("w-l", "p-xl", "border_box", "h-screen")}>
        <Table {...props} />
      </div>;
  },
  args: {
    variant: "list",
    rowSelectionMode: "multiple",
    rows: makeEntity(10),
    columns: entityRenderCell
  },
  argTypes: {
    variant: hideArg,
    rows: hideArg,
    columns: TableArgTypes.columns,
    rowSelectionMode: hideArg,
    rowSelection: hideArg,
    onRowSelectionChange: hideArg
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: ({
    rows,
    ...props
  }: TableProps<Entity>) => {
    const [data, setData] = useState([...(rows as Array<Entity>)]);
    return <div>
        <div className={classNames("flex", "flex-row", "gap-s", "w-m", "items-center", "p-m")}>
          <Button onClick={() => {
          setData(prev => prev.slice(0, -1));
        }} label="Remove a row" />
          <Button onClick={() => {
          setData(prev => [...prev, makeEntity(1)[0]]);
        }} label="Add a row" />
        </div>

        <div className={classNames("p-0", "m-0")} style={{
        blockSize: 300
      }}>
          <Table rows={data} {...props} />
        </div>
      </div>;
  },
  args: {
    variant: "list",
    rowSelectionMode: "multiple",
    rows: makeEntity(4),
    columns: entityAllFields
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  name: "Flex parent container",
  render: ({
    rows,
    ...props
  }: TableProps<Entity>) => {
    const [data, setData] = useState([...(rows as Array<Entity>)]);
    return <div className={classNames("flex", "flex-col")}>
        <div className={classNames("flex", "flex-row", "gap-s", "w-m", "items-center", "p-m")}>
          <Button onClick={() => {
          setData(prev => prev.slice(0, -1));
        }} label="Remove a row" />
          <Button onClick={() => {
          setData(prev => [...prev, makeEntity(1)[0]]);
        }} label="Add a row" />
        </div>
        <div className={classNames("flex", "flex-col", "grow-1", "shrink-1")}>
          <Table rows={data} {...props} />
        </div>
      </div>;
  },
  args: {
    variant: "list",
    rowSelectionMode: "multiple",
    rows: makeEntity(4),
    columns: entityAllFields
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  name: "Flex parent container boundaries",
  render: ({
    rows,
    ...props
  }: TableProps<Entity>) => {
    const [data, setData] = useState([...(rows as Array<Entity>)]);
    return <div className={classNames("flex", "flex-col")}>
        <div className={classNames("flex", "flex-row", "gap-s", "w-m", "items-center", "p-m")}>
          <Button onClick={() => {
          setData(prev => prev.slice(0, -1));
        }} label="Remove a row" />
          <Button onClick={() => {
          setData(prev => [...prev, makeEntity(1)[0]]);
        }} label="Add a row" />
        </div>

        <div className={classNames("flex", "flex-col", "p-0", "m-0")} style={{
        minBlockSize: 200,
        maxBlockSize: 300
      }}>
          <Table rows={data} {...props} />
        </div>
      </div>;
  },
  args: {
    ...FlexParentContainer.args
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Predefined dimensions",
  render: ({
    rows,
    ...props
  }: TableProps<Entity>) => {
    const [data, setData] = useState(rows);
    return <div className={classNames("flex", "flex-col")}>
        <div className={classNames("flex", "flex-row", "gap-s", "w-m", "items-center", "p-m")}>
          <Button onClick={() => {
          setData(prev => (prev || []).slice(0, -1));
        }} label="Remove a row" />
          <Button onClick={() => {
          setData(prev => [...(prev || []), makeEntity(1)[0]]);
        }} label="Add a row" />
        </div>

        <div style={{
        blockSize: 300,
        inlineSize: 700
      }}>
          <Table {...props} rows={data} />
        </div>
      </div>;
  },
  args: {
    rows: makeEntity(4),
    columns: entityAllFields,
    variant: "list"
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: (props: TableProps<Entity>) => {
    const [selected, setSelected] = useState<Record<string, boolean>>({});
    return <div className={classNames("w-full", "p-xl", "border_box")}>
        <div style={{
        blockSize: 200
      }}>
          <Table {...props} onRowSelectionChange={v => {
          setSelected(v);
        }} rowSelection={selected} />
        </div>
        <h2>rowSelection state</h2>
        <pre className={classNames("bg-inverse", "text-inverse")}>{JSON.stringify(selected, null, 2)}</pre>
      </div>;
  },
  args: {
    variant: "list",
    rowSelectionMode: "single",
    rows: makeEntity(30) as Array<Entity>,
    columns: entityAllFields
  },
  argTypes: {
    variant: hideArg,
    rows: hideArg,
    columns: hideArg,
    ...RowSelectionArgTypes
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: (props: TableProps<Entity>) => {
    const [selected, setSelected] = useState<Record<string, boolean>>({});
    return <div className={classNames("w-full", "p-xl", "border_box")}>
        <div style={{
        blockSize: 200
      }}>
          <Table {...props} onRowSelectionChange={v => {
          setSelected(v);
        }} rowSelection={selected} />
        </div>
        <h2>rowSelection state</h2>
        <pre className={classNames("bg-inverse", "text-inverse")}>{JSON.stringify(selected, null, 2)}</pre>
      </div>;
  },
  args: {
    variant: "list",
    rowSelectionMode: "multiple",
    rows: makeEntity(30) as Array<Entity>,
    columns: entityAllFields
  },
  argTypes: {
    variant: hideArg,
    rows: hideArg,
    columns: hideArg,
    ...RowSelectionArgTypes
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "rowActions",
  render: (props: TableProps<Entity>) => {
    return <div className={classNames("w-full", "p-xl", "border_box")} style={{
      blockSize: 400
    }}>
        <Table {...props} />
      </div>;
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    variant: "list",
    rowSelectionMode: "multiple",
    rows: makeEntity(100),
    columns: entityRenderCell,
    rowActions: () => <>
        <Menu.Item onClick={() => {
        // eslint-disable-next-line no-alert
        alert("onClick was triggered");
      }}>
          Edit
        </Menu.Item>
        <Menu.Item onClick={() => {
        // eslint-disable-next-line no-alert
        alert("onClick was triggered");
      }}>
          Delete
        </Menu.Item>
      </>
  },
  argTypes: {
    variant: hideArg,
    rows: hideArg,
    columns: TableArgTypes.columns,
    ...TableArgTypes,
    ...RowSelectionArgTypes,
    ...SortArgTypes,
    ...HideArgTypes
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "loading",
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: (props: TableProps<Entity>) => {
    return <div className={classNames("flex", "grow-1", "border_box")} style={{
      blockSize: 300
    }}>
        <Table {...props} />
      </div>;
  },
  args: {
    variant: "list",
    loading: true,
    rowSelectionMode: "multiple",
    columns: entityAllFields
  },
  argTypes: {
    ...TableArgTypes,
    ...RowSelectionArgTypes,
    ...SortArgTypes,
    ...HideArgTypes
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Row toggling",
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: (props: Pick<TableProps<Entity>, "defaultToggledRowId" | "toggledRowId" | "onToggledRowChange">) => {
    return <div className={classNames("w-full", "p-xl", "border_box")} style={{
      blockSize: 400
    }}>
        <Table variant="list" rows={makeEntity(10)} columns={entityAllFields} {...props} />
      </div>;
  },
  argTypes: {
    ...RowSelectionArgTypes,
    ...RowTogglingArgTypes,
    variant: hideArg,
    rows: hideArg,
    columns: hideArg
  },
  args: {
    getRowId: row => row.id,
    defaultToggledRowId: "34b40266-50ef-469f-8d12-b33526fbe46e"
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: (props: TableProps<Entity>) => <Table {...props} />,
  args: {
    variant: "list",
    rows: makeEntity(10),
    columns: entityAllFields,
    rowActions: row => <LazyMenu row={row} />
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    controls: false
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Pagination / Infinite scroll",
  argTypes: {
    ...PaginationArgTypes
  },
  parameters: {
    controls: false,
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => {
    const [data, setData] = useState(() => makeEntity(20));
    const fetchMore = () => {
      return new Promise<void>(resolve => {
        setTimeout(() => {
          setData(prev => [...prev, ...makeEntity(20)]);
          resolve();
        }, 500);
      });
    };
    return <div className={classNames("w-full", "p-xl", "border_box")} style={{
      blockSize: 400
    }}>
        <Table variant="list" rowSelectionMode="multiple" columns={entityAllFields} rows={data} nextPage={fetchMore} />
      </div>;
  },
  args: {}
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Server side sorting",
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    variant: "list",
    rows: makeEntity(50),
    columns: entityAllFields,
    sortingMode: "server"
  },
  argTypes: {
    variant: hideArg,
    rows: hideArg,
    columns: hideArg,
    ...SortArgTypes
  },
  render: (props: TableProps<Entity>) => {
    const [data, setData] = useState(() => makeEntity(50));
    const [sorting, setSorting] = useState<SortingState>([]);
    useEffect(() => {
      setTimeout(() => {
        if (sorting.length === 0) {
          return;
        }
        const sort = sorting[0];
        const sortedData = [...data].sort((a, b) => {
          const objectA = a[sort.id as keyof Entity];
          const objectB = b[sort.id as keyof Entity];
          if (objectA && objectB && objectA < objectB) return sort.desc ? 1 : -1;
          if (objectA && objectB && objectA > objectB) return sort.desc ? -1 : 1;
          return 0;
        });
        setData(sortedData);
      }, 1000); // simulate server delay
    }, [sorting, data]);
    return <div className={classNames("w-full", "p-xl", "border_box")} style={{
      blockSize: 400
    }}>
        <Table {...props} columns={entityAllFields} rows={data} sorting={sorting} onSortingChange={setSorting} />
      </div>;
  }
}`,...K.parameters?.docs?.source}}},q=[`Playground`,`GettingStarted`,`RenderCell`,`LayoutAuto`,`FlexParentContainer`,`FlexParentContainerBoundaries`,`PredefinedDimensions`,`RowSingleSelection`,`RowMultipleSelection`,`RowActions`,`loading`,`RowToggling`,`LazyRowActions`,`Pagination`,`ServerSideSorting`]}));J();export{I as FlexParentContainer,L as FlexParentContainerBoundaries,N as GettingStarted,F as LayoutAuto,W as LazyRowActions,G as Pagination,M as Playground,R as PredefinedDimensions,P as RenderCell,V as RowActions,B as RowMultipleSelection,z as RowSingleSelection,U as RowToggling,K as ServerSideSorting,q as __namedExportsOrder,j as default,H as loading,J as t};