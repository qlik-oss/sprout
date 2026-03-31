import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Dt as n,Gn as r,H as i,In as a,Kn as o,Ln as s,Ot as c,Tn as l,Z as u,b as d,ct as f,gn as p,hn as m,ir as h,jt as g,on as _,v,xt as y,yn as b}from"./iframe-B0xl5hqz.js";import{n as x,r as S,t as C}from"./Icons-Bt98yIEE.js";import{n as w,t as T}from"./lib-2Xwj1dqI.js";var E,D,O=t((()=>{v(),S(),E=s(),D={id:{control:`text`,description:`Unique identifier for the tree item.`,table:{type:{summary:`string`}}},label:{control:`text`,description:`The label of the tree item.`,table:{type:{summary:`string`}}},path:{control:`object`,description:`An array representing the path to the tree item, used for nesting.`,table:{type:{summary:`string[]`}}},isLeaf:{control:`boolean`,description:`Indicates if the tree item is a leaf node (no children).`,table:{type:{summary:`boolean`}}},disabled:{control:`boolean`,description:`Disables the tree item and prevents user interaction.`,table:{type:{summary:`boolean`}}},nesting:{control:`number`,description:`The nesting level of the tree item, used for indentation.`,table:{type:{summary:`number`}}},expanded:{control:`boolean`,description:`Controls the expanded state of the tree item.`,table:{type:{summary:`boolean`}}},onExpand:{control:`object`,description:`Callback function when the tree item is expanded or collapsed.`,table:{type:{summary:`(id: string, expanded: boolean) => void`}}},icon:{control:`select`,if:{arg:`expandedIcon`,exists:!1},description:`Icon to display next to the tree item label.`,table:{type:{summary:`ReactNode | (expanded: boolean) => ReactNode`}},options:x,mapping:C},children:{control:`select`,description:`The content of the tree item.`,options:[`Text`,`Tag`],mapping:{Text:`This is a tree item`,Tag:(0,E.jsx)(u,{text:`Tag`})},table:{type:{summary:`ReactNode`}}}}}));function k(e,t){let n=new Set(t),r=new Map,i=new Map;for(let t of e){r.set(t.id,t);let e=t.path??[];if(e.length){let n=e[e.length-1];i.has(n)||i.set(n,[]),i.get(n).push(t.id)}}let a={};for(let t of e)(t.isLeaf||!i.has(t.id))&&(a[t.id]=!!n.has(t.id));let o=[...e].sort((e,t)=>(t.path?.length??0)-(e.path?.length??0));for(let e of o){if(e.isLeaf)continue;let t=(i.get(e.id)??[]).map(e=>a[e]);if(t.length===0)a[e.id]=!!n.has(e.id);else{let n=t.every(e=>e===!0),r=t.every(e=>e===!1);n?a[e.id]=!0:r?a[e.id]=!1:a[e.id]=`partial`}}return a}function A({id:e,label:t,onCheck:n,isLeaf:r,path:o,children:s}){let c=(0,N.useContext)(R),l=!0,u=c.selected[e]===`partial`,h=u?!0:!!c.selected[e],g=!!c.expanded[e];return c&&o&&(g=!!c?.expanded?.[e],l=o.every(e=>!!c?.expanded?.[e])),l?(0,P.jsx)(i.Item,{interactive:!0,onClick:()=>{c.onExpand?.(e,!g)},selected:h,children:(0,P.jsxs)(`div`,{className:a(`flex`,`flex-row`,`w-full`,`pl-l`,`pr-l`,`items-center`,`overflow-hidden`),children:[(0,P.jsx)(`div`,{className:a(`flex`,`w-fit`),children:(0,P.jsx)(f,{"aria-label":t,indeterminate:u,checked:h,onChange:t=>{n({id:e,checked:!h})}})}),(0,P.jsx)(d.TreeItem,{id:e,label:t,path:o,isLeaf:r,expanded:g,onExpand:()=>{c.onExpand?.(e,!g)},displayFolderIcon:!r,icon:r?(0,P.jsx)(p,{}):(0,P.jsx)(m,{}),children:s})]})}):null}function j(e,t,n,r){let i=new Map,a=new Map;for(let t of e){i.set(t.id,t);let e=t.path??[];if(e.length){let n=e[e.length-1];a.has(n)||a.set(n,[]),a.get(n).push(t.id)}}function o(e){let t=a.get(e)??[],n=[...t];for(let e of t)n.push(...o(e));return n}let s=new Set(t);if(!i.get(n))return t;let c=[n,...o(n)];if(r)for(let e of c)s.add(e);else for(let e of c)s.delete(e);return[...s]}function M({row:e}){let t=(0,N.useContext)(R),n=!!t.expanded[e.id];return(0,P.jsx)(`div`,{className:a(`flex`,`flex-row`,`w-full`,`pl-l`,`pr-l`,`items-center`,`overflow-hidden`),onClick:()=>{t.onExpand?.(e.id,!n)},children:(0,P.jsx)(d.TreeItem,{onExpand:t.onExpand,expanded:n,id:e.id,displayFolderIcon:!e.isLeaf,label:e.label,isLeaf:e.isLeaf,path:e.path,icon:e.isLeaf?(0,P.jsx)(p,{}):(0,P.jsx)(m,{})})})}var N,P,F,I,L,R,z,B,V,H,U,W,G,K=t((()=>{N=e(h()),r(),v(),T(),g(),O(),P=s(),F={title:`Components/Tree`},I={render:e=>(0,P.jsx)(d.TreeItem,{...e}),args:{id:`treeitem`,label:`TreeItem`},argTypes:D},L={render:()=>(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h1`,{className:o.classNames(`text-default`,`font-heading-m`),children:`TreeItem alone`}),(0,P.jsx)(d.TreeItem,{id:`simple`,label:`Simple`}),(0,P.jsx)(d.TreeItem,{id:`simple`,label:`Simple`,disabled:!0}),(0,P.jsx)(d.TreeItem,{id:`expanded`,label:`Expanded`,expanded:!0}),(0,P.jsx)(d.TreeItem,{id:`expanded-child`,path:[`expanded`],label:`Expanded child`}),(0,P.jsx)(d.TreeItem,{id:`folder`,label:`folder`,icon:(0,P.jsx)(m,{})}),(0,P.jsx)(d.TreeItem,{id:`folder_expanded`,label:`folder expanded`,displayFolderIcon:!0,expanded:!0}),(0,P.jsx)(d.TreeItem,{id:`leaf`,path:[`folder_expanded`],label:`Leaf`,isLeaf:!0}),(0,P.jsx)(d.TreeItem,{id:`leaf-icon`,path:[`folder_expanded`],label:`Leaf icon`,isLeaf:!0,icon:(0,P.jsx)(p,{})}),(0,P.jsxs)(i,{hasPadding:!1,children:[(0,P.jsx)(i.Item,{interactive:!0,children:(0,P.jsx)(d.TreeItem,{id:`context_simple`,label:`Simple`})}),(0,P.jsx)(i.Item,{interactive:!0,children:(0,P.jsx)(d.TreeItem,{id:`context_expanded`,label:`Expanded`})}),(0,P.jsx)(i.Item,{interactive:!0,children:(0,P.jsx)(d.TreeItem,{id:`context_folder`,label:`folder`,displayFolderIcon:!0})}),(0,P.jsx)(i.Item,{interactive:!0,children:(0,P.jsx)(d.TreeItem,{id:`context_folder_child`,path:[`context_folder`],label:`child`,isLeaf:!0})}),(0,P.jsx)(i.Item,{interactive:!0,children:(0,P.jsx)(d.TreeItem,{id:`context_folder_expanded`,label:`folder expanded`,displayFolderIcon:!0})}),(0,P.jsx)(i.Item,{interactive:!0,children:(0,P.jsx)(d.TreeItem,{id:`context_leaf`,path:[`context_folder_expanded`],label:`Leaf`,isLeaf:!0})}),(0,P.jsx)(i.Item,{interactive:!0,children:(0,P.jsx)(d.TreeItem,{id:`context_leaf-icon`,path:[`context_folder_expanded`],label:`Leaf icon`,isLeaf:!0,icon:(0,P.jsx)(p,{})})})]})]})},R=(0,N.createContext)({expanded:{},selected:{},onExpand:()=>{}}),z=[{id:`folder1`,label:`Folder with 1 folder and 2 files`},{id:`folder1.1`,label:`Folder with 1 files`,path:[`folder1`]},{id:`item1`,label:`File 1`,path:[`folder1`,`folder1.1`],isLeaf:!0},{id:`item2`,label:`File 2`,path:[`folder1`],isLeaf:!0},{id:`item3`,label:`File  3`,path:[`folder1`],isLeaf:!0},{id:`folder2`,label:`Empty folder`,children:(0,P.jsxs)(`div`,{className:a(`flex`,`flex-row`,`items-center`,`justify-end`,`w-full`),children:[(0,P.jsx)(y,{variant:`quiet`,icon:(0,P.jsx)(l,{}),"aria-label":`Copy`}),(0,P.jsx)(y,{variant:`quiet`,icon:(0,P.jsx)(b,{}),"aria-label":`Edit`})]})},{id:`item4`,label:`Orphan file`,isLeaf:!0,children:(0,P.jsx)(u,{text:`Tag`})},{id:`item5`,label:`Orphan file`,isLeaf:!0,children:(0,P.jsx)(n,{color:`info`})},{id:`item6`,label:`Orphan file`,isLeaf:!0,children:(0,P.jsx)(c,{title:`I'm a tooltip`,children:(0,P.jsx)(`button`,{type:`button`,className:a(`flex`,`p-xs`,`m-xs`,`border-box`,`border-none`,`bg-transparent`,`cursor-pointer`,`radius-round`,`outline-focus-visible-centered`),children:(0,P.jsx)(_,{})})})},{id:`item7`,label:`a-cron-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long (V2)`,isLeaf:!0}],B={parameters:{chromatic:{disableSnapshot:!0}},render:()=>{let[e,t]=(0,N.useState)({item4:!0}),[n,r]=(0,N.useState)({}),o=n=>{t(k(z,j(z,Object.keys(e).filter(t=>e[t]===!0),n.id,n.checked)))};return(0,P.jsx)(`div`,{className:a(`flex`,`w-m`),children:(0,P.jsx)(i,{hasPadding:!1,children:(0,P.jsx)(R.Provider,{value:{expanded:n,selected:e,onExpand:(e,t)=>{r(n=>({...n,[e]:t}))}},children:z.map(e=>(0,P.jsx)(A,{id:e.id,path:e.path,isLeaf:e.isLeaf,label:e.label,onCheck:o,children:e.children},e.id))})})})}},V=[{id:`folder1`,label:`FirstFolderWithAReallyLongNameThatExceedsTheLimitAtSomePoint with 1 folder and 2 files`},{id:`folder1.1`,label:`SecondFolderWithAReallyLongNameThatExceedsTheLimitAtSomePoint with 1 files and 1 folder`,path:[`folder1`]},{id:`folder1.1.1`,label:`ThirdFolderWithAReallyLongNameThatExceedsTheLimitAtSomePoint without files`,path:[`folder1`,`folder1.1`]},{id:`item1`,label:`File 1`,path:[`folder1`,`folder1.1`],isLeaf:!0},{id:`item2`,label:`File 2`,path:[`folder1`],isLeaf:!0},{id:`item3`,label:`File  3`,path:[`folder1`],isLeaf:!0},{id:`folder2`,label:`Empty folder`},{id:`item4`,label:`Orphan file`,isLeaf:!0}],H={parameters:{chromatic:{disableSnapshot:!0}},render:()=>{let[e,t]=(0,N.useState)({}),[n,r]=(0,N.useState)({folder1:!0,"folder1.1":!0}),o=n=>{t(k(V,j(V,Object.keys(e).filter(t=>e[t]===!0),n.id,n.checked)))};return(0,P.jsx)(`div`,{className:a(`flex`,`w-m`,`border-weak`,`overflow-auto`),children:(0,P.jsx)(i,{hasPadding:!1,children:(0,P.jsx)(R.Provider,{value:{expanded:n,selected:e,onExpand:(e,t)=>{r(n=>({...n,[e]:t}))}},children:V.map(e=>(0,P.jsx)(A,{id:e.id,path:e.path,isLeaf:e.isLeaf,label:e.label,onCheck:o},e.id))})})})}},U=[{field:`label`,headerName:`Name`,width:300,renderCell:e=>(0,P.jsx)(M,{row:e.row})},{field:`path`,headerName:`Path`,flex:1,renderCell:e=>(e.row.path||[]).join(` / `)}],W={parameters:{chromatic:{disableSnapshot:!0}},render:()=>{let[e,t]=(0,N.useState)({}),n=(0,N.useMemo)(()=>z.filter(t=>t.path?t.path.every(t=>!!e[t]):!0),[e,z]);return(0,P.jsxs)(`div`,{className:a(`border-weak`,`w-l`),children:[(0,P.jsx)(R.Provider,{value:{expanded:e,selected:{},onExpand:(n,r)=>{t({...e,[n]:r})}},children:(0,P.jsx)(w,{variant:`list`,rows:n,columns:U,rowHeight:40})}),(0,P.jsx)(`pre`,{children:JSON.stringify(e,null,2)})]})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: props => <Tree.TreeItem {...props} />,
  args: {
    id: "treeitem",
    label: "TreeItem"
  },
  argTypes: TreeItemArgTypes
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <h1 className={sprout.classNames("text-default", "font-heading-m")}>
        TreeItem alone
      </h1>
      <Tree.TreeItem id="simple" label="Simple" />
      <Tree.TreeItem id="simple" label="Simple" disabled />
      <Tree.TreeItem id="expanded" label="Expanded" expanded />
      <Tree.TreeItem id="expanded-child" path={["expanded"]} label="Expanded child" />
      <Tree.TreeItem id="folder" label="folder" icon={<FolderClosedIcon />} />
      <Tree.TreeItem id="folder_expanded" label="folder expanded" displayFolderIcon expanded />
      <Tree.TreeItem id="leaf" path={["folder_expanded"]} label="Leaf" isLeaf />
      <Tree.TreeItem id="leaf-icon" path={["folder_expanded"]} label="Leaf icon" isLeaf icon={<FileIcon />} />
      <List hasPadding={false}>
        <List.Item interactive>
          <Tree.TreeItem id="context_simple" label="Simple" />
        </List.Item>
        <List.Item interactive>
          <Tree.TreeItem id="context_expanded" label="Expanded" />
        </List.Item>
        <List.Item interactive>
          <Tree.TreeItem id="context_folder" label="folder" displayFolderIcon />
        </List.Item>
        <List.Item interactive>
          <Tree.TreeItem id="context_folder_child" path={["context_folder"]} label="child" isLeaf />
        </List.Item>
        <List.Item interactive>
          <Tree.TreeItem id="context_folder_expanded" label="folder expanded" displayFolderIcon />
        </List.Item>
        <List.Item interactive>
          <Tree.TreeItem id="context_leaf" path={["context_folder_expanded"]} label="Leaf" isLeaf />
        </List.Item>
        <List.Item interactive>
          <Tree.TreeItem id="context_leaf-icon" path={["context_folder_expanded"]} label="Leaf icon" isLeaf icon={<FileIcon />} />
        </List.Item>
      </List>
    </div>
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => {
    const [treeSelected, setTreeSelected] = useState<TreeContextType["selected"]>({
      item4: true
    });
    const [treeExpanded, setTreeExpanded] = useState<TreeContextType["expanded"]>({});
    const onCheck = (e: {
      id: string;
      checked: boolean;
    }) => {
      const selectedNodesIds = Object.keys(treeSelected).filter(key => treeSelected[key] === true);
      const newSelectedIds = updateSelectedNodeIds(data, selectedNodesIds, e.id, e.checked);
      const newState = computeNodeSelectionState(data, newSelectedIds);
      setTreeSelected(newState);
    };
    const onExpand = (id: string, expanded: boolean) => {
      setTreeExpanded(prev => ({
        ...prev,
        [id]: expanded
      }));
    };
    return <div className={classNames("flex", "w-m")}>
        <List hasPadding={false}>
          <TreeContext.Provider value={{
          expanded: treeExpanded,
          selected: treeSelected,
          onExpand
        }}>
            {data.map(item => <MyListItem key={item.id} id={item.id} path={item.path} isLeaf={item.isLeaf} label={item.label} onCheck={onCheck}>
                {item.children}
              </MyListItem>)}
          </TreeContext.Provider>
        </List>
      </div>;
  }
}`,...B.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => {
    const [treeSelected, setTreeSelected] = useState<TreeContextType["selected"]>({});
    const [treeExpanded, setTreeExpanded] = useState<TreeContextType["expanded"]>({
      folder1: true,
      "folder1.1": true
    });
    const onCheck = (e: {
      id: string;
      checked: boolean;
    }) => {
      const selectedNodesIds = Object.keys(treeSelected).filter(key => treeSelected[key] === true);
      const newSelectedIds = updateSelectedNodeIds(dataWithLongNames, selectedNodesIds, e.id, e.checked);
      const newState = computeNodeSelectionState(dataWithLongNames, newSelectedIds);
      setTreeSelected(newState);
    };
    const onExpand = (id: string, expanded: boolean) => {
      setTreeExpanded(prev => ({
        ...prev,
        [id]: expanded
      }));
    };
    return <div className={classNames("flex", "w-m", "border-weak", "overflow-auto")}>
        <List hasPadding={false}>
          <TreeContext.Provider value={{
          expanded: treeExpanded,
          selected: treeSelected,
          onExpand
        }}>
            {dataWithLongNames.map(item => <MyListItem key={item.id} id={item.id} path={item.path} isLeaf={item.isLeaf} label={item.label} onCheck={onCheck} />)}
          </TreeContext.Provider>
        </List>
      </div>;
  }
}`,...H.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => {
    const [treeExpanded, setTreeExpanded] = useState<TreeContextType["expanded"]>({});
    const filteredData = useMemo(() => {
      return data.filter(item => {
        if (!item.path) return true;
        return item.path.every(p => !!treeExpanded[p]);
      });
    }, [treeExpanded, data]);
    return <div className={classNames("border-weak", "w-l")}>
        <TreeContext.Provider value={{
        expanded: treeExpanded,
        selected: {},
        onExpand: (id: string, expanded: boolean) => {
          setTreeExpanded({
            ...treeExpanded,
            [id]: expanded
          });
        }
      }}>
          <Table variant="list" rows={filteredData} columns={columns} rowHeight={40} />
        </TreeContext.Provider>
        <pre>{JSON.stringify(treeExpanded, null, 2)}</pre>
      </div>;
  }
}`,...W.parameters?.docs?.source}}},G=[`TreeItem`,`Playground`,`WithCheckbox`,`WithCheckboxAndLongNames`,`TreeTable`]}));K();export{L as Playground,I as TreeItem,W as TreeTable,B as WithCheckbox,H as WithCheckboxAndLongNames,G as __namedExportsOrder,F as default,K as t};