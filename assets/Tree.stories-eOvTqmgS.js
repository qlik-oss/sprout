import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-sE-G6KV_.js";import{t as n}from"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as r}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{F as i,Gt as a,K as o,Lt as s,Wt as c,Yt as l,et as u,g as d,hn as f,tn as p,tt as m,u as h,w as g}from"./iframe-B5xoaqtW.js";import{n as _,t as v}from"./Icons-DJikLCul.js";import{t as y}from"./lib-BqyORzYB.js";var b=e(t()),x=r(),S={id:{control:`text`,description:`Unique identifier for the tree item.`,table:{type:{summary:`string`}}},label:{control:`text`,description:`The label of the tree item.`,table:{type:{summary:`string`}}},path:{control:`object`,description:`An array representing the path to the tree item, used for nesting.`,table:{type:{summary:`string[]`}}},isLeaf:{control:`boolean`,description:`Indicates if the tree item is a leaf node (no children).`,table:{type:{summary:`boolean`}}},disabled:{control:`boolean`,description:`Disables the tree item and prevents user interaction.`,table:{type:{summary:`boolean`}}},nesting:{control:`number`,description:`The nesting level of the tree item, used for indentation.`,table:{type:{summary:`number`}}},expanded:{control:`boolean`,description:`Controls the expanded state of the tree item.`,table:{type:{summary:`boolean`}}},onExpand:{control:`object`,description:`Callback function when the tree item is expanded or collapsed.`,table:{type:{summary:`(id: string, expanded: boolean) => void`}}},icon:{control:`select`,if:{arg:`expandedIcon`,exists:!1},description:`Icon to display next to the tree item label.`,table:{type:{summary:`ReactNode | (expanded: boolean) => ReactNode`}},options:_,mapping:v},children:{control:`select`,description:`The content of the tree item.`,options:[`Text`,`Tag`],mapping:{Text:`This is a tree item`,Tag:(0,x.jsx)(g,{text:`Tag`})},table:{type:{summary:`ReactNode`}}}},C={title:`Components/Tree`},w={render:e=>(0,x.jsx)(h.TreeItem,{...e}),args:{id:`treeitem`,label:`TreeItem`},argTypes:S},T={render:()=>(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h1`,{className:n.classNames(`text-default`,`font-heading-m`),children:`TreeItem alone`}),(0,x.jsx)(h.TreeItem,{id:`simple`,label:`Simple`}),(0,x.jsx)(h.TreeItem,{id:`simple`,label:`Simple`,disabled:!0}),(0,x.jsx)(h.TreeItem,{id:`expanded`,label:`Expanded`,expanded:!0}),(0,x.jsx)(h.TreeItem,{id:`expanded-child`,path:[`expanded`],label:`Expanded child`}),(0,x.jsx)(h.TreeItem,{id:`folder`,label:`folder`,icon:(0,x.jsx)(c,{})}),(0,x.jsx)(h.TreeItem,{id:`folder_expanded`,label:`folder expanded`,displayFolderIcon:!0,expanded:!0}),(0,x.jsx)(h.TreeItem,{id:`leaf`,path:[`folder_expanded`],label:`Leaf`,isLeaf:!0}),(0,x.jsx)(h.TreeItem,{id:`leaf-icon`,path:[`folder_expanded`],label:`Leaf icon`,isLeaf:!0,icon:(0,x.jsx)(a,{})}),(0,x.jsxs)(d,{hasPadding:!1,children:[(0,x.jsx)(d.Item,{interactive:!0,children:(0,x.jsx)(h.TreeItem,{id:`context_simple`,label:`Simple`})}),(0,x.jsx)(d.Item,{interactive:!0,children:(0,x.jsx)(h.TreeItem,{id:`context_expanded`,label:`Expanded`})}),(0,x.jsx)(d.Item,{interactive:!0,children:(0,x.jsx)(h.TreeItem,{id:`context_folder`,label:`folder`,displayFolderIcon:!0})}),(0,x.jsx)(d.Item,{interactive:!0,children:(0,x.jsx)(h.TreeItem,{id:`context_folder_child`,path:[`context_folder`],label:`child`,isLeaf:!0})}),(0,x.jsx)(d.Item,{interactive:!0,children:(0,x.jsx)(h.TreeItem,{id:`context_folder_expanded`,label:`folder expanded`,displayFolderIcon:!0})}),(0,x.jsx)(d.Item,{interactive:!0,children:(0,x.jsx)(h.TreeItem,{id:`context_leaf`,path:[`context_folder_expanded`],label:`Leaf`,isLeaf:!0})}),(0,x.jsx)(d.Item,{interactive:!0,children:(0,x.jsx)(h.TreeItem,{id:`context_leaf-icon`,path:[`context_folder_expanded`],label:`Leaf icon`,isLeaf:!0,icon:(0,x.jsx)(a,{})})})]})]})},E=(0,b.createContext)({expanded:{},selected:{},onExpand:()=>{}}),D=[{id:`folder1`,label:`Folder with 1 folder and 2 files`},{id:`folder1.1`,label:`Folder with 1 files`,path:[`folder1`]},{id:`item1`,label:`File 1`,path:[`folder1`,`folder1.1`],isLeaf:!0},{id:`item2`,label:`File 2`,path:[`folder1`],isLeaf:!0},{id:`item3`,label:`File  3`,path:[`folder1`],isLeaf:!0},{id:`folder2`,label:`Empty folder`,children:(0,x.jsxs)(`div`,{className:f(`flex`,`flex-row`,`items-center`,`justify-end`,`w-full`),children:[(0,x.jsx)(o,{variant:`quiet`,icon:(0,x.jsx)(p,{}),"aria-label":`Copy`}),(0,x.jsx)(o,{variant:`quiet`,icon:(0,x.jsx)(l,{}),"aria-label":`Edit`})]})},{id:`item4`,label:`Orphan file`,isLeaf:!0,children:(0,x.jsx)(g,{text:`Tag`})},{id:`item5`,label:`Orphan file`,isLeaf:!0,children:(0,x.jsx)(u,{color:`info`})},{id:`item6`,label:`Orphan file`,isLeaf:!0,children:(0,x.jsx)(m,{title:`I'm a tooltip`,children:(0,x.jsx)(`button`,{type:`button`,className:f(`flex`,`p-xs`,`m-xs`,`border-box`,`border-none`,`bg-transparent`,`cursor-pointer`,`radius-round`,`outline-focus-visible-centered`),children:(0,x.jsx)(s,{})})})},{id:`item7`,label:`a-cron-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long (V2)`,isLeaf:!0}];function O(e,t){let n=new Set(t),r=new Map,i=new Map;for(let t of e){r.set(t.id,t);let e=t.path??[];if(e.length){let n=e[e.length-1];i.has(n)||i.set(n,[]),i.get(n).push(t.id)}}let a={};for(let t of e)(t.isLeaf||!i.has(t.id))&&(a[t.id]=!!n.has(t.id));let o=[...e].sort((e,t)=>(t.path?.length??0)-(e.path?.length??0));for(let e of o){if(e.isLeaf)continue;let t=(i.get(e.id)??[]).map(e=>a[e]);if(t.length===0)a[e.id]=!!n.has(e.id);else{let n=t.every(e=>e===!0),r=t.every(e=>e===!1);n?a[e.id]=!0:r?a[e.id]=!1:a[e.id]=`partial`}}return a}function k({id:e,label:t,onCheck:n,isLeaf:r,path:o,children:s}){let l=(0,b.useContext)(E),u=!0,p=l.selected[e]===`partial`,m=p?!0:!!l.selected[e],g=!!l.expanded[e];return l&&o&&(g=!!l?.expanded?.[e],u=o.every(e=>!!l?.expanded?.[e])),u?(0,x.jsx)(d.Item,{interactive:!0,onClick:()=>{l.onExpand?.(e,!g)},selected:m,children:(0,x.jsxs)(`div`,{className:f(`flex`,`flex-row`,`w-full`,`pl-l`,`pr-l`,`items-center`,`overflow-hidden`),children:[(0,x.jsx)(`div`,{className:f(`flex`,`w-fit`),children:(0,x.jsx)(i,{"aria-label":t,indeterminate:p,checked:m,onChange:t=>{n({id:e,checked:!m})}})}),(0,x.jsx)(h.TreeItem,{id:e,label:t,path:o,isLeaf:r,expanded:g,onExpand:()=>{l.onExpand?.(e,!g)},displayFolderIcon:!r,icon:r?(0,x.jsx)(a,{}):(0,x.jsx)(c,{}),children:s})]})}):null}function A(e,t,n,r){let i=new Map,a=new Map;for(let t of e){i.set(t.id,t);let e=t.path??[];if(e.length){let n=e[e.length-1];a.has(n)||a.set(n,[]),a.get(n).push(t.id)}}function o(e){let t=a.get(e)??[],n=[...t];for(let e of t)n.push(...o(e));return n}let s=new Set(t);if(!i.get(n))return t;let c=[n,...o(n)];if(r)for(let e of c)s.add(e);else for(let e of c)s.delete(e);return[...s]}var j={parameters:{chromatic:{disableSnapshot:!0}},render:()=>{let[e,t]=(0,b.useState)({item4:!0}),[n,r]=(0,b.useState)({}),i=n=>{t(O(D,A(D,Object.keys(e).filter(t=>e[t]===!0),n.id,n.checked)))};return(0,x.jsx)(`div`,{className:f(`flex`,`w-m`),children:(0,x.jsx)(d,{hasPadding:!1,children:(0,x.jsx)(E.Provider,{value:{expanded:n,selected:e,onExpand:(e,t)=>{r(n=>({...n,[e]:t}))}},children:D.map(e=>(0,x.jsx)(k,{id:e.id,path:e.path,isLeaf:e.isLeaf,label:e.label,onCheck:i,children:e.children},e.id))})})})}},M=[{id:`folder1`,label:`FirstFolderWithAReallyLongNameThatExceedsTheLimitAtSomePoint with 1 folder and 2 files`},{id:`folder1.1`,label:`SecondFolderWithAReallyLongNameThatExceedsTheLimitAtSomePoint with 1 files and 1 folder`,path:[`folder1`]},{id:`folder1.1.1`,label:`ThirdFolderWithAReallyLongNameThatExceedsTheLimitAtSomePoint without files`,path:[`folder1`,`folder1.1`]},{id:`item1`,label:`File 1`,path:[`folder1`,`folder1.1`],isLeaf:!0},{id:`item2`,label:`File 2`,path:[`folder1`],isLeaf:!0},{id:`item3`,label:`File  3`,path:[`folder1`],isLeaf:!0},{id:`folder2`,label:`Empty folder`},{id:`item4`,label:`Orphan file`,isLeaf:!0}],N={parameters:{chromatic:{disableSnapshot:!0}},render:()=>{let[e,t]=(0,b.useState)({}),[n,r]=(0,b.useState)({folder1:!0,"folder1.1":!0}),i=n=>{t(O(M,A(M,Object.keys(e).filter(t=>e[t]===!0),n.id,n.checked)))};return(0,x.jsx)(`div`,{className:f(`flex`,`w-m`,`border-weak`,`overflow-auto`),children:(0,x.jsx)(d,{hasPadding:!1,children:(0,x.jsx)(E.Provider,{value:{expanded:n,selected:e,onExpand:(e,t)=>{r(n=>({...n,[e]:t}))}},children:M.map(e=>(0,x.jsx)(k,{id:e.id,path:e.path,isLeaf:e.isLeaf,label:e.label,onCheck:i},e.id))})})})}};function P({row:e}){let t=(0,b.useContext)(E),n=!!t.expanded[e.id];return(0,x.jsx)(`div`,{className:f(`flex`,`flex-row`,`w-full`,`pl-l`,`pr-l`,`items-center`,`overflow-hidden`),onClick:()=>{t.onExpand?.(e.id,!n)},children:(0,x.jsx)(h.TreeItem,{onExpand:t.onExpand,expanded:n,id:e.id,displayFolderIcon:!e.isLeaf,label:e.label,isLeaf:e.isLeaf,path:e.path,icon:e.isLeaf?(0,x.jsx)(a,{}):(0,x.jsx)(c,{})})})}var F=[{field:`label`,headerName:`Name`,width:300,renderCell:e=>(0,x.jsx)(P,{row:e.row})},{field:`path`,headerName:`Path`,flex:1,renderCell:e=>(e.row.path||[]).join(` / `)}],I={parameters:{chromatic:{disableSnapshot:!0}},render:()=>{let[e,t]=(0,b.useState)({}),n=(0,b.useMemo)(()=>D.filter(t=>t.path?t.path.every(t=>!!e[t]):!0),[e,D]);return(0,x.jsxs)(`div`,{className:f(`border-weak`,`w-l`),children:[(0,x.jsx)(E.Provider,{value:{expanded:e,selected:{},onExpand:(n,r)=>{t({...e,[n]:r})}},children:(0,x.jsx)(y,{variant:`list`,rows:n,columns:F,rowHeight:40})}),(0,x.jsx)(`pre`,{children:JSON.stringify(e,null,2)})]})}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: props => <Tree.TreeItem {...props} />,
  args: {
    id: "treeitem",
    label: "TreeItem"
  },
  argTypes: TreeItemArgTypes
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};var L=[`TreeItem`,`Playground`,`WithCheckbox`,`WithCheckboxAndLongNames`,`TreeTable`];export{T as Playground,w as TreeItem,I as TreeTable,j as WithCheckbox,N as WithCheckboxAndLongNames,L as __namedExportsOrder,C as default};