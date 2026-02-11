import{r as c,j as e}from"./iframe-B-fqCePV.js";import{T as d}from"./TanstackTable-CDWO9Baz.js";import{e as m,R as g,T as u,h as o,P as G,C as H,H as B,S as _,a as O,b as L,m as i}from"./entity-HfeGt6TM.js";import{B as p}from"./Button-DgHw6K-5.js";import{c as t}from"./classNames-BHQ9ieoZ.js";import{M as z}from"./Menu-CaarWdBl.js";import{S as I}from"./Skeleton-CLuWHboh.js";import"./preload-helper-PPVm8Dsz.js";import"./useI18n-uzhF32fT.js";import"./SortDescending-CfflnELi.js";import"./IconButton-C1DotWTd.js";import"./Tooltip-DclK_iM1.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-BvkMXfLp.js";import"./useId-DU0uuk5t.js";import"./Checkbox-u2f0i23h.js";import"./useValueControl-D8vAvYvZ.js";import"./HelperText-B14iHzzi.js";import"./InfoTooltipPrimitive-D79OSySs.js";import"./Info-C4YmKgXN.js";import"./List-CBd3yLgn.js";import"./useListGesture-CsinPUm2.js";import"./list-B1zo5gaH.js";import"./Popover-D19D-oMR.js";import"./TextField-DEQy7r8U.js";import"./Error-BQGw3LDI.js";import"./sprout-DqOLOcsj.js";import"./InputButton-VrXIQIPl.js";import"./useControl-DDjCssuD.js";import"./ProgressCircular-CeNa-NP_.js";import"./useFieldProps-C5tdc_TS.js";import"./useFieldAriaProps-C2PPXi5-.js";import"./Field-BLDSqeK1.js";import"./FieldLabel-8GV8HzVd.js";import"./Divider-B2v-xVm0.js";import"./Radio-DFWUDyFe.js";import"./Message-DGshW5gP.js";import"./ProgressBar-BPq1EUCD.js";import"./icons-BXG-SLO7.js";import"./Button.module-C2ELNEem.js";import"./Badge-BMzhzV_X.js";import"./NewTab-DUTMcy5N.js";const J=[{id:1,name:"Qlik Cloud Analytics",description:"Uncover insights"},{id:2,name:"Qlik Talend Cloud",description:"Deliver trusted data"},{id:3,name:"Talend Data Fabric",description:"Unify, integrate and govern disparate data environments"},{id:4,name:"Qlik Sense (on-prem)",description:"Seamless integration of data from multiple systems"},{id:5,name:"Qlik Replicate",description:"Accelerate data ingestion and streaming"},{id:6,name:"Qlik Answers",description:"Gen-AI driven answers from unstructured content"}],U=[{field:"name",headerName:"Product Name",width:200},{field:"description",headerName:"Description",width:300}],{fn:V}=__STORYBOOK_MODULE_TEST__,Fe={title:"Table/List"},y={name:"Playground",parameters:{chromatic:{disableSnapshot:!0},layout:"fullscreen"},render:n=>{const r=[{id:"name",desc:!0}];return e.jsx("div",{className:t("w-full","p-xl","border-box","h-screen"),children:e.jsx(d,{defaultSorting:r,...n})})},args:{variant:"list",rowSelectionMode:"multiple",rows:i(100),columns:m,onRowSelectionChange:V()},argTypes:{...u,...g,...O,..._,...B,...H}},h={name:"Getting Started",render:n=>e.jsx(d,{...n}),args:{variant:"list",rows:J,columns:U,rowSelectionMode:"multiple"},argTypes:{variant:o,rows:u.rows,columns:u.columns,rowSelectionMode:g.rowSelectionMode}},f={name:"renderCell",render:n=>e.jsx("div",{className:t("w-l","p-xl","border_box","h-screen"),children:e.jsx(d,{...n})}),args:{variant:"list",rowSelectionMode:"multiple",rows:i(10),columns:L},argTypes:{variant:o,rows:o,columns:u.columns,rowSelectionMode:o,rowSelection:o,onRowSelectionChange:o}},T={parameters:{layout:"fullscreen"},render:({rows:n,...r})=>{const[l,s]=c.useState([...n]);return e.jsxs("div",{children:[e.jsxs("div",{className:t("flex","flex-row","gap-s","w-m","items-center","p-m"),children:[e.jsx(p,{onClick:()=>{s(a=>a.slice(0,-1))},label:"Remove a row"}),e.jsx(p,{onClick:()=>{s(a=>[...a,i(1)[0]])},label:"Add a row"})]}),e.jsx("div",{className:t("p-0","m-0"),style:{blockSize:300},children:e.jsx(d,{rows:l,...r})})]})},args:{variant:"list",rowSelectionMode:"multiple",rows:i(4),columns:m}},S={parameters:{layout:"fullscreen"},name:"Flex parent container",render:({rows:n,...r})=>{const[l,s]=c.useState([...n]);return e.jsxs("div",{className:t("flex","flex-col"),children:[e.jsxs("div",{className:t("flex","flex-row","gap-s","w-m","items-center","p-m"),children:[e.jsx(p,{onClick:()=>{s(a=>a.slice(0,-1))},label:"Remove a row"}),e.jsx(p,{onClick:()=>{s(a=>[...a,i(1)[0]])},label:"Add a row"})]}),e.jsx("div",{className:t("flex","flex-col","grow-1","shrink-1"),children:e.jsx(d,{rows:l,...r})})]})},args:{variant:"list",rowSelectionMode:"multiple",rows:i(4),columns:m}},A={parameters:{layout:"fullscreen"},name:"Flex parent container boundaries",render:({rows:n,...r})=>{const[l,s]=c.useState([...n]);return e.jsxs("div",{className:t("flex","flex-col"),children:[e.jsxs("div",{className:t("flex","flex-row","gap-s","w-m","items-center","p-m"),children:[e.jsx(p,{onClick:()=>{s(a=>a.slice(0,-1))},label:"Remove a row"}),e.jsx(p,{onClick:()=>{s(a=>[...a,i(1)[0]])},label:"Add a row"})]}),e.jsx("div",{className:t("flex","flex-col","p-0","m-0"),style:{minBlockSize:200,maxBlockSize:300},children:e.jsx(d,{rows:l,...r})})]})},args:{...S.args}},k={name:"Predefined dimensions",render:({rows:n,...r})=>{const[l,s]=c.useState(n);return e.jsxs("div",{className:t("flex","flex-col"),children:[e.jsxs("div",{className:t("flex","flex-row","gap-s","w-m","items-center","p-m"),children:[e.jsx(p,{onClick:()=>{s(a=>(a||[]).slice(0,-1))},label:"Remove a row"}),e.jsx(p,{onClick:()=>{s(a=>[...a||[],i(1)[0]])},label:"Add a row"})]}),e.jsx("div",{style:{blockSize:300,inlineSize:700},children:e.jsx(d,{...r,rows:l})})]})},args:{rows:i(4),columns:m,variant:"list"}},j={parameters:{chromatic:{disableSnapshot:!0}},render:n=>{const[r,l]=c.useState({});return e.jsxs("div",{className:t("w-full","p-xl","border_box"),children:[e.jsx("div",{style:{blockSize:200},children:e.jsx(d,{...n,onRowSelectionChange:s=>{l(s)},rowSelection:r})}),e.jsx("h2",{children:"rowSelection state"}),e.jsx("pre",{className:t("bg-inverse","text-inverse"),children:JSON.stringify(r,null,2)})]})},args:{variant:"list",rowSelectionMode:"single",rows:i(30),columns:m},argTypes:{variant:o,rows:o,columns:o,...g}},N={parameters:{chromatic:{disableSnapshot:!0}},render:n=>{const[r,l]=c.useState({});return e.jsxs("div",{className:t("w-full","p-xl","border_box"),children:[e.jsx("div",{style:{blockSize:200},children:e.jsx(d,{...n,onRowSelectionChange:s=>{l(s)},rowSelection:r})}),e.jsx("h2",{children:"rowSelection state"}),e.jsx("pre",{className:t("bg-inverse","text-inverse"),children:JSON.stringify(r,null,2)})]})},args:{variant:"list",rowSelectionMode:"multiple",rows:i(30),columns:m},argTypes:{variant:o,rows:o,columns:o,...g}},R={name:"rowActions",render:n=>e.jsx("div",{className:t("w-full","p-xl","border_box"),style:{blockSize:400},children:e.jsx(d,{...n})}),parameters:{chromatic:{disableSnapshot:!0}},args:{variant:"list",rowSelectionMode:"multiple",rows:i(100),columns:L,rowActions:()=>e.jsxs(e.Fragment,{children:[e.jsx(z.Item,{onClick:()=>{alert("onClick was triggered")},children:"Edit"}),e.jsx(z.Item,{onClick:()=>{alert("onClick was triggered")},children:"Delete"})]})},argTypes:{variant:o,rows:o,columns:u.columns,...u,...g,..._,...B}},C={name:"loading",parameters:{chromatic:{disableSnapshot:!0}},render:n=>e.jsx("div",{className:t("flex","grow-1","border_box"),style:{blockSize:300},children:e.jsx(d,{...n})}),args:{variant:"list",loading:!0,rowSelectionMode:"multiple",columns:m},argTypes:{...u,...g,..._,...B}},E={name:"Row toggling",parameters:{chromatic:{disableSnapshot:!0}},render:n=>e.jsx("div",{className:t("w-full","p-xl","border_box"),style:{blockSize:400},children:e.jsx(d,{variant:"list",rows:i(10),columns:m,...n})}),argTypes:{...g,...O,variant:o,rows:o,columns:o},args:{getRowId:n=>n.id,defaultToggledRowId:"34b40266-50ef-469f-8d12-b33526fbe46e"}};function K({row:n}){const r=c.useRef(null),[l,s]=c.useState(!1),[a,w]=c.useState(e.jsxs(e.Fragment,{children:[e.jsx("div",{className:t("flex","border_box","p-m"),children:e.jsx(I,{variant:"text",width:100,height:16})}),e.jsx("div",{className:t("flex","border_box","p-m"),children:e.jsx(I,{variant:"text",width:100,height:16})})]}));return c.useEffect(()=>{const v=new IntersectionObserver(([F])=>{s(F.isIntersecting)});return r.current&&v.observe(r.current),()=>{v.disconnect()}},[]),c.useEffect(()=>{l&&setTimeout(()=>{w(e.jsxs(e.Fragment,{children:[e.jsxs(z.Item,{children:["Edit ",n.name]}),e.jsxs(z.Item,{children:["Delete ",n.name]})]}))},1e3)},[l,n.name]),e.jsx("div",{ref:r,children:a})}const M={render:n=>e.jsx(d,{...n}),args:{variant:"list",rows:i(10),columns:m,rowActions:n=>e.jsx(K,{row:n})},parameters:{chromatic:{disableSnapshot:!0},controls:!1}},P={name:"Pagination / Infinite scroll",argTypes:{...G},parameters:{controls:!1,chromatic:{disableSnapshot:!0}},render:()=>{const[n,r]=c.useState(()=>i(20)),l=()=>new Promise(s=>{setTimeout(()=>{r(a=>[...a,...i(20)]),s()},500)});return e.jsx("div",{className:t("w-full","p-xl","border_box"),style:{blockSize:400},children:e.jsx(d,{variant:"list",rowSelectionMode:"multiple",columns:m,rows:n,nextPage:l})})},args:{}},D={name:"Server side sorting",parameters:{chromatic:{disableSnapshot:!0}},args:{variant:"list",rows:i(50),columns:m,sortingMode:"server"},argTypes:{variant:o,rows:o,columns:o,..._},render:n=>{const[r,l]=c.useState(()=>i(50)),[s,a]=c.useState([]);return c.useEffect(()=>{setTimeout(()=>{if(s.length===0)return;const w=s[0],v=[...r].sort((F,Q)=>{const b=F[w.id],x=Q[w.id];return b&&x&&b<x?w.desc?1:-1:b&&x&&b>x?w.desc?-1:1:0});l(v)},1e3)},[s,r]),e.jsx("div",{className:t("w-full","p-xl","border_box"),style:{blockSize:400},children:e.jsx(d,{...n,columns:m,rows:r,sorting:s,onSortingChange:a})})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};const Be=["Playground","GettingStarted","RenderCell","LayoutAuto","FlexParentContainer","FlexParentContainerBoundaries","PredefinedDimensions","RowSingleSelection","RowMultipleSelection","RowActions","loading","RowToggling","LazyRowActions","Pagination","ServerSideSorting"];export{S as FlexParentContainer,A as FlexParentContainerBoundaries,h as GettingStarted,T as LayoutAuto,M as LazyRowActions,P as Pagination,y as Playground,k as PredefinedDimensions,f as RenderCell,R as RowActions,N as RowMultipleSelection,j as RowSingleSelection,E as RowToggling,D as ServerSideSorting,Be as __namedExportsOrder,Fe as default,C as loading};
