import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as n}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{J as r,S as i,hn as a,x as o}from"./iframe-DaKWDHAC.js";import{t as s}from"./lib-BpZznhwW.js";import{a as c,c as l,d as u,f as d,l as f,n as p,p as m,r as h,s as g,t as _,u as v}from"./entity-C4CjlXQ9.js";var y=e(t()),b=[{id:1,name:`Qlik Cloud Analytics`,description:`Uncover insights`},{id:2,name:`Qlik Talend Cloud`,description:`Deliver trusted data`},{id:3,name:`Talend Data Fabric`,description:`Unify, integrate and govern disparate data environments`},{id:4,name:`Qlik Sense (on-prem)`,description:`Seamless integration of data from multiple systems`},{id:5,name:`Qlik Replicate`,description:`Accelerate data ingestion and streaming`},{id:6,name:`Qlik Answers`,description:`Gen-AI driven answers from unstructured content`}],x=[{field:`name`,headerName:`Product Name`,width:200},{field:`description`,headerName:`Description`,width:300}],S=n(),{fn:C}=__STORYBOOK_MODULE_TEST__,w={title:`Table/List`},T={name:`Playground`,parameters:{chromatic:{disableSnapshot:!0},layout:`fullscreen`},render:e=>(0,S.jsx)(`div`,{className:a(`w-full`,`p-xl`,`border-box`,`h-screen`),children:(0,S.jsx)(s,{defaultSorting:[{id:`name`,desc:!0}],...e})}),args:{variant:`list`,rowSelectionMode:`multiple`,rows:h(100),columns:_,onRowSelectionChange:C()},argTypes:{...d,...f,...v,...u,...g,...c}},E={name:`Getting Started`,render:e=>(0,S.jsx)(s,{...e}),args:{variant:`list`,rows:b,columns:x,rowSelectionMode:`multiple`},argTypes:{variant:m,rows:d.rows,columns:d.columns,rowSelectionMode:f.rowSelectionMode}},D={name:`renderCell`,render:e=>(0,S.jsx)(`div`,{className:a(`w-l`,`p-xl`,`border_box`,`h-screen`),children:(0,S.jsx)(s,{...e})}),args:{variant:`list`,rowSelectionMode:`multiple`,rows:h(10),columns:p},argTypes:{variant:m,rows:m,columns:d.columns,rowSelectionMode:m,rowSelection:m,onRowSelectionChange:m}},O={parameters:{layout:`fullscreen`},render:({rows:e,...t})=>{let[n,i]=(0,y.useState)([...e]);return(0,S.jsxs)(`div`,{children:[(0,S.jsxs)(`div`,{className:a(`flex`,`flex-row`,`gap-s`,`w-m`,`items-center`,`p-m`),children:[(0,S.jsx)(r,{onClick:()=>{i(e=>e.slice(0,-1))},label:`Remove a row`}),(0,S.jsx)(r,{onClick:()=>{i(e=>[...e,h(1)[0]])},label:`Add a row`})]}),(0,S.jsx)(`div`,{className:a(`p-0`,`m-0`),style:{blockSize:300},children:(0,S.jsx)(s,{rows:n,...t})})]})},args:{variant:`list`,rowSelectionMode:`multiple`,rows:h(4),columns:_}},k={parameters:{layout:`fullscreen`},name:`Flex parent container`,render:({rows:e,...t})=>{let[n,i]=(0,y.useState)([...e]);return(0,S.jsxs)(`div`,{className:a(`flex`,`flex-col`),children:[(0,S.jsxs)(`div`,{className:a(`flex`,`flex-row`,`gap-s`,`w-m`,`items-center`,`p-m`),children:[(0,S.jsx)(r,{onClick:()=>{i(e=>e.slice(0,-1))},label:`Remove a row`}),(0,S.jsx)(r,{onClick:()=>{i(e=>[...e,h(1)[0]])},label:`Add a row`})]}),(0,S.jsx)(`div`,{className:a(`flex`,`flex-col`,`grow-1`,`shrink-1`),children:(0,S.jsx)(s,{rows:n,...t})})]})},args:{variant:`list`,rowSelectionMode:`multiple`,rows:h(4),columns:_}},A={parameters:{layout:`fullscreen`},name:`Flex parent container boundaries`,render:({rows:e,...t})=>{let[n,i]=(0,y.useState)([...e]);return(0,S.jsxs)(`div`,{className:a(`flex`,`flex-col`),children:[(0,S.jsxs)(`div`,{className:a(`flex`,`flex-row`,`gap-s`,`w-m`,`items-center`,`p-m`),children:[(0,S.jsx)(r,{onClick:()=>{i(e=>e.slice(0,-1))},label:`Remove a row`}),(0,S.jsx)(r,{onClick:()=>{i(e=>[...e,h(1)[0]])},label:`Add a row`})]}),(0,S.jsx)(`div`,{className:a(`flex`,`flex-col`,`p-0`,`m-0`),style:{minBlockSize:200,maxBlockSize:300},children:(0,S.jsx)(s,{rows:n,...t})})]})},args:{...k.args}},j={name:`Predefined dimensions`,render:({rows:e,...t})=>{let[n,i]=(0,y.useState)(e);return(0,S.jsxs)(`div`,{className:a(`flex`,`flex-col`),children:[(0,S.jsxs)(`div`,{className:a(`flex`,`flex-row`,`gap-s`,`w-m`,`items-center`,`p-m`),children:[(0,S.jsx)(r,{onClick:()=>{i(e=>(e||[]).slice(0,-1))},label:`Remove a row`}),(0,S.jsx)(r,{onClick:()=>{i(e=>[...e||[],h(1)[0]])},label:`Add a row`})]}),(0,S.jsx)(`div`,{style:{blockSize:300,inlineSize:700},children:(0,S.jsx)(s,{...t,rows:n})})]})},args:{rows:h(4),columns:_,variant:`list`}},M={parameters:{chromatic:{disableSnapshot:!0}},render:e=>{let[t,n]=(0,y.useState)({});return(0,S.jsxs)(`div`,{className:a(`w-full`,`p-xl`,`border_box`),children:[(0,S.jsx)(`div`,{style:{blockSize:200},children:(0,S.jsx)(s,{...e,onRowSelectionChange:e=>{n(e)},rowSelection:t})}),(0,S.jsx)(`h2`,{children:`rowSelection state`}),(0,S.jsx)(`pre`,{className:a(`bg-inverse`,`text-inverse`),children:JSON.stringify(t,null,2)})]})},args:{variant:`list`,rowSelectionMode:`single`,rows:h(30),columns:_},argTypes:{variant:m,rows:m,columns:m,...f}},N={parameters:{chromatic:{disableSnapshot:!0}},render:e=>{let[t,n]=(0,y.useState)({});return(0,S.jsxs)(`div`,{className:a(`w-full`,`p-xl`,`border_box`),children:[(0,S.jsx)(`div`,{style:{blockSize:200},children:(0,S.jsx)(s,{...e,onRowSelectionChange:e=>{n(e)},rowSelection:t})}),(0,S.jsx)(`h2`,{children:`rowSelection state`}),(0,S.jsx)(`pre`,{className:a(`bg-inverse`,`text-inverse`),children:JSON.stringify(t,null,2)})]})},args:{variant:`list`,rowSelectionMode:`multiple`,rows:h(30),columns:_},argTypes:{variant:m,rows:m,columns:m,...f}},P={name:`rowActions`,render:e=>(0,S.jsx)(`div`,{className:a(`w-full`,`p-xl`,`border_box`),style:{blockSize:400},children:(0,S.jsx)(s,{...e})}),parameters:{chromatic:{disableSnapshot:!0}},args:{variant:`list`,rowSelectionMode:`multiple`,rows:h(100),columns:p,rowActions:()=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(o.Item,{onClick:()=>{alert(`onClick was triggered`)},children:`Edit`}),(0,S.jsx)(o.Item,{onClick:()=>{alert(`onClick was triggered`)},children:`Delete`})]})},argTypes:{variant:m,rows:m,columns:d.columns,...d,...f,...u,...g}},F={name:`loading`,parameters:{chromatic:{disableSnapshot:!0}},render:e=>(0,S.jsx)(`div`,{className:a(`flex`,`grow-1`,`border_box`),style:{blockSize:300},children:(0,S.jsx)(s,{...e})}),args:{variant:`list`,loading:!0,rowSelectionMode:`multiple`,columns:_},argTypes:{...d,...f,...u,...g}},I={name:`Row toggling`,parameters:{chromatic:{disableSnapshot:!0}},render:e=>(0,S.jsx)(`div`,{className:a(`w-full`,`p-xl`,`border_box`),style:{blockSize:400},children:(0,S.jsx)(s,{variant:`list`,rows:h(10),columns:_,...e})}),argTypes:{...f,...v,variant:m,rows:m,columns:m},args:{getRowId:e=>e.id,defaultToggledRowId:`34b40266-50ef-469f-8d12-b33526fbe46e`}};function L({row:e}){let t=(0,y.useRef)(null),[n,r]=(0,y.useState)(!1),[s,c]=(0,y.useState)((0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`div`,{className:a(`flex`,`border_box`,`p-m`),children:(0,S.jsx)(i,{variant:`text`,width:100,height:16})}),(0,S.jsx)(`div`,{className:a(`flex`,`border_box`,`p-m`),children:(0,S.jsx)(i,{variant:`text`,width:100,height:16})})]}));return(0,y.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{r(e.isIntersecting)});return t.current&&e.observe(t.current),()=>{e.disconnect()}},[]),(0,y.useEffect)(()=>{n&&setTimeout(()=>{c((0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(o.Item,{children:[`Edit `,e.name]}),(0,S.jsxs)(o.Item,{children:[`Delete `,e.name]})]}))},1e3)},[n,e.name]),(0,S.jsx)(`div`,{ref:t,children:s})}var R={render:e=>(0,S.jsx)(s,{...e}),args:{variant:`list`,rows:h(10),columns:_,rowActions:e=>(0,S.jsx)(L,{row:e})},parameters:{chromatic:{disableSnapshot:!0},controls:!1}},z={name:`Pagination / Infinite scroll`,argTypes:{...l},parameters:{controls:!1,chromatic:{disableSnapshot:!0}},render:()=>{let[e,t]=(0,y.useState)(()=>h(20));return(0,S.jsx)(`div`,{className:a(`w-full`,`p-xl`,`border_box`),style:{blockSize:400},children:(0,S.jsx)(s,{variant:`list`,rowSelectionMode:`multiple`,columns:_,rows:e,nextPage:()=>new Promise(e=>{setTimeout(()=>{t(e=>[...e,...h(20)]),e()},500)})})})},args:{}},B={name:`Server side sorting`,parameters:{chromatic:{disableSnapshot:!0}},args:{variant:`list`,rows:h(50),columns:_,sortingMode:`server`},argTypes:{variant:m,rows:m,columns:m,...u},render:e=>{let[t,n]=(0,y.useState)(()=>h(50)),[r,i]=(0,y.useState)([]);return(0,y.useEffect)(()=>{setTimeout(()=>{if(r.length===0)return;let e=r[0];n([...t].sort((t,n)=>{let r=t[e.id],i=n[e.id];return r&&i&&r<i?e.desc?1:-1:r&&i&&r>i?e.desc?-1:1:0}))},1e3)},[r,t]),(0,S.jsx)(`div`,{className:a(`w-full`,`p-xl`,`border_box`),style:{blockSize:400},children:(0,S.jsx)(s,{...e,columns:_,rows:t,sorting:r,onSortingChange:i})})}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};var V=[`Playground`,`GettingStarted`,`RenderCell`,`LayoutAuto`,`FlexParentContainer`,`FlexParentContainerBoundaries`,`PredefinedDimensions`,`RowSingleSelection`,`RowMultipleSelection`,`RowActions`,`loading`,`RowToggling`,`LazyRowActions`,`Pagination`,`ServerSideSorting`];export{k as FlexParentContainer,A as FlexParentContainerBoundaries,E as GettingStarted,O as LayoutAuto,R as LazyRowActions,z as Pagination,T as Playground,j as PredefinedDimensions,D as RenderCell,P as RowActions,N as RowMultipleSelection,M as RowSingleSelection,I as RowToggling,B as ServerSideSorting,V as __namedExportsOrder,w as default,F as loading};