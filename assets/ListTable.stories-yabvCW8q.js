import{a as e,n as t}from"./chunk-BneVvdWh.js";import{In as n,K as r,Ln as i,ir as a,q as o,v as s,wt as c}from"./iframe-B0xl5hqz.js";import{n as l,t as u}from"./lib-2Xwj1dqI.js";import{a as d,d as f,f as p,g as m,h,i as g,l as _,m as v,n as y,p as b,r as x,s as S,t as C,u as w}from"./entity-BP3vZpOY.js";var T,E,D=t((()=>{T=[{id:1,name:`Qlik Cloud Analytics`,description:`Uncover insights`},{id:2,name:`Qlik Talend Cloud`,description:`Deliver trusted data`},{id:3,name:`Talend Data Fabric`,description:`Unify, integrate and govern disparate data environments`},{id:4,name:`Qlik Sense (on-prem)`,description:`Seamless integration of data from multiple systems`},{id:5,name:`Qlik Replicate`,description:`Accelerate data ingestion and streaming`},{id:6,name:`Qlik Answers`,description:`Gen-AI driven answers from unstructured content`}],E=[{field:`name`,headerName:`Product Name`,width:200},{field:`description`,headerName:`Description`,width:300}]}));function O({row:e}){let t=(0,k.useRef)(null),[i,a]=(0,k.useState)(!1),[s,c]=(0,k.useState)((0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`div`,{className:n(`flex`,`border-box`,`p-m`),children:(0,A.jsx)(o,{variant:`text`,width:100,height:16})}),(0,A.jsx)(`div`,{className:n(`flex`,`border-box`,`p-m`),children:(0,A.jsx)(o,{variant:`text`,width:100,height:16})})]}));return(0,k.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{a(e.isIntersecting)});return t.current&&e.observe(t.current),()=>{e.disconnect()}},[]),(0,k.useEffect)(()=>{i&&setTimeout(()=>{c((0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(r.Item,{children:[`Edit `,e.name]}),(0,A.jsxs)(r.Item,{children:[`Delete `,e.name]})]}))},1e3)},[i,e.name]),(0,A.jsx)(`div`,{ref:t,children:s})}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z=t((()=>{k=e(a()),s(),u(),m(),g(),D(),A=i(),{fn:j}=__STORYBOOK_MODULE_TEST__,M={title:`Table/List`},N={name:`Playground`,parameters:{chromatic:{disableSnapshot:!0},layout:`fullscreen`},render:e=>(0,A.jsx)(`div`,{className:n(`w-full`,`p-xl`,`border-box`,`h-screen`),children:(0,A.jsx)(l,{defaultSorting:[{id:`name`,desc:!0}],...e})}),args:{variant:`list`,rowSelectionMode:`multiple`,rows:d(100),columns:C,onRowSelectionChange:j()},argTypes:{...v,...f,...p,...b,..._,...S}},P={name:`Getting Started`,render:e=>(0,A.jsx)(l,{...e}),args:{variant:`list`,rows:T,columns:E,rowSelectionMode:`multiple`},argTypes:{variant:h,rows:v.rows,columns:v.columns,rowSelectionMode:f.rowSelectionMode}},F={name:`renderCell`,render:e=>(0,A.jsx)(`div`,{className:n(`w-l`,`p-xl`,`border-box`,`h-screen`),children:(0,A.jsx)(l,{...e})}),args:{variant:`list`,rowSelectionMode:`multiple`,rows:d(10),columns:x},argTypes:{variant:h,rows:h,columns:v.columns,rowSelectionMode:h,rowSelection:h,onRowSelectionChange:h}},I={parameters:{layout:`fullscreen`},render:({rows:e,...t})=>{let[r,i]=(0,k.useState)([...e]);return(0,A.jsxs)(`div`,{children:[(0,A.jsxs)(`div`,{className:n(`flex`,`flex-row`,`gap-s`,`w-m`,`items-center`,`p-m`),children:[(0,A.jsx)(c,{onClick:()=>{i(e=>e.slice(0,-1))},label:`Remove a row`}),(0,A.jsx)(c,{onClick:()=>{i(e=>[...e,d(1)[0]])},label:`Add a row`})]}),(0,A.jsx)(`div`,{className:n(`p-0`,`m-0`),style:{blockSize:300},children:(0,A.jsx)(l,{rows:r,...t})})]})},args:{variant:`list`,rowSelectionMode:`multiple`,rows:d(4),columns:C}},L={parameters:{layout:`fullscreen`},name:`Flex parent container`,render:({rows:e,...t})=>{let[r,i]=(0,k.useState)([...e]);return(0,A.jsxs)(`div`,{className:n(`flex`,`flex-col`),children:[(0,A.jsxs)(`div`,{className:n(`flex`,`flex-row`,`gap-s`,`w-m`,`items-center`,`p-m`),children:[(0,A.jsx)(c,{onClick:()=>{i(e=>e.slice(0,-1))},label:`Remove a row`}),(0,A.jsx)(c,{onClick:()=>{i(e=>[...e,d(1)[0]])},label:`Add a row`})]}),(0,A.jsx)(`div`,{className:n(`flex`,`flex-col`,`grow-1`,`shrink-1`),children:(0,A.jsx)(l,{rows:r,...t})})]})},args:{variant:`list`,rowSelectionMode:`multiple`,rows:d(4),columns:C}},R={parameters:{layout:`fullscreen`},name:`Flex parent container boundaries`,render:({rows:e,...t})=>{let[r,i]=(0,k.useState)([...e]);return(0,A.jsxs)(`div`,{className:n(`flex`,`flex-col`),children:[(0,A.jsxs)(`div`,{className:n(`flex`,`flex-row`,`gap-s`,`w-m`,`items-center`,`p-m`),children:[(0,A.jsx)(c,{onClick:()=>{i(e=>e.slice(0,-1))},label:`Remove a row`}),(0,A.jsx)(c,{onClick:()=>{i(e=>[...e,d(1)[0]])},label:`Add a row`})]}),(0,A.jsx)(`div`,{className:n(`flex`,`flex-col`,`p-0`,`m-0`),style:{minBlockSize:200,maxBlockSize:300},children:(0,A.jsx)(l,{rows:r,...t})})]})},args:{...L.args}},z={name:`Predefined dimensions`,render:({rows:e,...t})=>{let[r,i]=(0,k.useState)(e);return(0,A.jsxs)(`div`,{className:n(`flex`,`flex-col`),children:[(0,A.jsxs)(`div`,{className:n(`flex`,`flex-row`,`gap-s`,`w-m`,`items-center`,`p-m`),children:[(0,A.jsx)(c,{onClick:()=>{i(e=>(e||[]).slice(0,-1))},label:`Remove a row`}),(0,A.jsx)(c,{onClick:()=>{i(e=>[...e||[],d(1)[0]])},label:`Add a row`})]}),(0,A.jsx)(`div`,{style:{blockSize:300,inlineSize:700},children:(0,A.jsx)(l,{...t,rows:r})})]})},args:{rows:d(4),columns:C,variant:`list`}},B={parameters:{chromatic:{disableSnapshot:!0}},render:e=>{let[t,r]=(0,k.useState)({});return(0,A.jsxs)(`div`,{className:n(`w-full`,`p-xl`,`border-box`),children:[(0,A.jsx)(`div`,{style:{blockSize:200},children:(0,A.jsx)(l,{...e,onRowSelectionChange:e=>{r(e)},rowSelection:t})}),(0,A.jsx)(`h2`,{children:`rowSelection state`}),(0,A.jsx)(`pre`,{className:n(`bg-inverse`,`text-inverse`),children:JSON.stringify(t,null,2)})]})},args:{variant:`list`,rowSelectionMode:`single`,rows:d(30),columns:C},argTypes:{variant:h,rows:h,columns:h,...f}},V={parameters:{chromatic:{disableSnapshot:!0}},render:e=>{let[t,r]=(0,k.useState)({});return(0,A.jsxs)(`div`,{className:n(`w-full`,`p-xl`,`border-box`),children:[(0,A.jsx)(`div`,{style:{blockSize:200},children:(0,A.jsx)(l,{...e,onRowSelectionChange:e=>{r(e)},rowSelection:t})}),(0,A.jsx)(`h2`,{children:`rowSelection state`}),(0,A.jsx)(`pre`,{className:n(`bg-inverse`,`text-inverse`),children:JSON.stringify(t,null,2)})]})},args:{variant:`list`,rowSelectionMode:`multiple`,rows:d(30),columns:C},argTypes:{variant:h,rows:h,columns:h,...f}},H={name:`rowActions`,render:e=>(0,A.jsx)(`div`,{className:n(`w-full`,`p-xl`,`border-box`),style:{blockSize:400},children:(0,A.jsx)(l,{...e})}),parameters:{chromatic:{disableSnapshot:!0}},args:{variant:`list`,rowSelectionMode:`multiple`,rows:d(100),columns:x,rowActions:()=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(r.Item,{onClick:()=>{alert(`onClick was triggered`)},children:`Edit`}),(0,A.jsx)(r.Item,{onClick:()=>{alert(`onClick was triggered`)},children:`Delete`})]})},argTypes:{variant:h,rows:h,columns:v.columns,...v,...f,...b,..._}},U={name:`loading`,parameters:{chromatic:{disableSnapshot:!0}},render:e=>(0,A.jsx)(`div`,{className:n(`flex`,`grow-1`,`border-box`),style:{blockSize:300},children:(0,A.jsx)(l,{...e})}),args:{variant:`list`,loading:!0,rowSelectionMode:`multiple`,columns:C},argTypes:{...v,...f,...b,..._}},W={name:`Row toggling`,parameters:{chromatic:{disableSnapshot:!0}},render:e=>(0,A.jsx)(`div`,{className:n(`w-full`,`p-xl`,`border-box`),style:{blockSize:400},children:(0,A.jsx)(l,{variant:`list`,rows:d(10),columns:C,...e})}),argTypes:{...f,...p,variant:h,rows:h,columns:h},args:{getRowId:e=>e.id,defaultToggledRowId:`34b40266-50ef-469f-8d12-b33526fbe46e`}},G={render:e=>(0,A.jsx)(l,{...e}),args:{variant:`list`,rows:d(10),columns:C,rowActions:e=>(0,A.jsx)(O,{row:e})},parameters:{chromatic:{disableSnapshot:!0},controls:!1}},K={name:`Pagination / Infinite scroll`,argTypes:{...w},parameters:{controls:!1,chromatic:{disableSnapshot:!0}},render:()=>{let[e,t]=(0,k.useState)(()=>d(20));return(0,A.jsx)(`div`,{className:n(`w-full`,`p-xl`,`border-box`),style:{blockSize:400},children:(0,A.jsx)(l,{variant:`list`,rowSelectionMode:`multiple`,columns:C,rows:e,nextPage:()=>new Promise(e=>{setTimeout(()=>{t(e=>[...e,...d(20)]),e()},500)})})})},args:{}},q={name:`Server side sorting`,parameters:{chromatic:{disableSnapshot:!0}},args:{variant:`list`,rows:d(50),columns:C,sortingMode:`server`},argTypes:{variant:h,rows:h,columns:h,...b},render:e=>{let[t,r]=(0,k.useState)(()=>d(50)),[i,a]=(0,k.useState)([]);return(0,k.useEffect)(()=>{setTimeout(()=>{if(i.length===0)return;let e=i[0];r([...t].sort((t,n)=>{let r=t[e.id],i=n[e.id];return r&&i&&r<i?e.desc?1:-1:r&&i&&r>i?e.desc?-1:1:0}))},1e3)},[i,t]),(0,A.jsx)(`div`,{className:n(`w-full`,`p-xl`,`border-box`),style:{blockSize:400},children:(0,A.jsx)(l,{...e,columns:C,rows:t,sorting:i,onSortingChange:a})})}},J={createDate:!1},Y={name:`defaultColumnVisibility`,parameters:{chromatic:{disableSnapshot:!0},controls:!1},render:()=>(0,A.jsx)(`div`,{className:n(`w-s`,`p-xl`,`border-box`),style:{blockSize:400},children:(0,A.jsx)(l,{rowHeight:48,variant:`list`,"data-testid":`dataset-schema-table`,columns:y,rows:d(5),defaultColumnVisibility:J})})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "renderCell",
  render: (props: TableProps<Entity>) => {
    return <div className={classNames("w-l", "p-xl", "border-box", "h-screen")}>
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: (props: TableProps<Entity>) => {
    const [selected, setSelected] = useState<Record<string, boolean>>({});
    return <div className={classNames("w-full", "p-xl", "border-box")}>
        <div style={{
        blockSize: 200
      }}>
          <Table {...props} onRowSelectionChange={v => {
          setSelected(v);
        }} rowSelection={selected} />
        </div>
        <h2>rowSelection state</h2>
        <pre className={classNames("bg-inverse", "text-inverse")}>
          {JSON.stringify(selected, null, 2)}
        </pre>
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: (props: TableProps<Entity>) => {
    const [selected, setSelected] = useState<Record<string, boolean>>({});
    return <div className={classNames("w-full", "p-xl", "border-box")}>
        <div style={{
        blockSize: 200
      }}>
          <Table {...props} onRowSelectionChange={v => {
          setSelected(v);
        }} rowSelection={selected} />
        </div>
        <h2>rowSelection state</h2>
        <pre className={classNames("bg-inverse", "text-inverse")}>
          {JSON.stringify(selected, null, 2)}
        </pre>
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "rowActions",
  render: (props: TableProps<Entity>) => {
    return <div className={classNames("w-full", "p-xl", "border-box")} style={{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "loading",
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: (props: TableProps<Entity>) => {
    return <div className={classNames("flex", "grow-1", "border-box")} style={{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Row toggling",
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: (props: Pick<TableProps<Entity>, "defaultToggledRowId" | "toggledRowId" | "onToggledRowChange">) => {
    return <div className={classNames("w-full", "p-xl", "border-box")} style={{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
    return <div className={classNames("w-full", "p-xl", "border-box")} style={{
      blockSize: 400
    }}>
        <Table variant="list" rowSelectionMode="multiple" columns={entityAllFields} rows={data} nextPage={fetchMore} />
      </div>;
  },
  args: {}
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
    return <div className={classNames("w-full", "p-xl", "border-box")} style={{
      blockSize: 400
    }}>
        <Table {...props} columns={entityAllFields} rows={data} sorting={sorting} onSortingChange={setSorting} />
      </div>;
  }
}`,...q.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "defaultColumnVisibility",
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    controls: false
  },
  render: () => {
    return <div className={classNames("w-s", "p-xl", "border-box")} style={{
      blockSize: 400
    }}>
        <Table rowHeight={48} variant="list" data-testid="dataset-schema-table" columns={entityFlex} rows={makeEntity(5)} defaultColumnVisibility={defaultColumnVisibility} />
      </div>;
  }
}`,...Y.parameters?.docs?.source}}},X=[`Playground`,`GettingStarted`,`RenderCell`,`LayoutAuto`,`FlexParentContainer`,`FlexParentContainerBoundaries`,`PredefinedDimensions`,`RowSingleSelection`,`RowMultipleSelection`,`RowActions`,`loading`,`RowToggling`,`LazyRowActions`,`Pagination`,`ServerSideSorting`,`DefaultColumnVisibility`]}));Z();export{Y as DefaultColumnVisibility,L as FlexParentContainer,R as FlexParentContainerBoundaries,P as GettingStarted,I as LayoutAuto,G as LazyRowActions,K as Pagination,N as Playground,z as PredefinedDimensions,F as RenderCell,H as RowActions,V as RowMultipleSelection,B as RowSingleSelection,W as RowToggling,q as ServerSideSorting,X as __namedExportsOrder,M as default,U as loading,Z as t};