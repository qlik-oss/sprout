import{j as e,M as r,a as s}from"./iframe-B4Gn7jRD.js";import{useMDXComponents as i}from"./index-BtGsBDbQ.js";import"./ListTable.stories-RozaXcxt.js";import{InlineEditTable as a}from"./DataTable.stories-CcO9dkYA.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-_Ji6gqG1.js";import"./useI18n-DOe-EdfE.js";import"./Button-DuNeVE70.js";import"./classNames-CTBLippR.js";import"./sprout-CWCWYkgH.js";import"./icons-CPBvMsVh.js";import"./Button.module-C2ELNEem.js";import"./Badge-CknI2ibL.js";import"./Tooltip-BG958zrQ.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-COCCCrf6.js";import"./useId-DXegRsHP.js";import"./ProgressCircular-C_VqfatA.js";import"./SortDescending-CucUSsiY.js";import"./IconButton-CoZ792nv.js";import"./Menu-CwfGS8df.js";import"./useControl-7TH6mjrF.js";import"./Divider-OzvHaalV.js";import"./list-B1zo5gaH.js";import"./NewTab-BFfS-RhS.js";import"./Skeleton-V0Ckz_0t.js";import"./Checkbox-CO6m99Pi.js";import"./useValueControl-_ZNYrQQF.js";import"./HelperText-BkP0Ayki.js";import"./InfoTooltipPrimitive-YcCF56yH.js";import"./Info-C0xP7z1J.js";import"./List-DOrcG2Zx.js";import"./useListGesture-C4X2DLyP.js";import"./Popover-CYDrc_g3.js";import"./TextField-BiWstluF.js";import"./Error-ClTRWykU.js";import"./InputButton-BNDgbGEz.js";import"./useFieldProps-C0qESN5d.js";import"./useFieldAriaProps-BSt-3PUW.js";import"./Field-C61xY5sZ.js";import"./FieldLabel-DN1zz7rD.js";import"./Radio-_bFiK4Av.js";import"./Message-C4NcjTp4.js";import"./ProgressBar-CCNmV5z0.js";import"./entity-CgQN8bQP.js";import"./Edit-BJvse-oo.js";import"./Map-DeFMr3_u.js";import"./Warning-BFJpCY38.js";import"./index-6u6iDVFg.js";import"./SelectComposition-KKpfvx4F.js";import"./TagGroup-D2_tvUz2.js";import"./Tag-XD_XBSO2.js";import"./TextOverflow-BcmLE7aV.js";import"./useHasOverflow-B8tWSk8V.js";import"./Add-CKNXHNSz.js";import"./Close-DbHLglso.js";import"./AlertInline-Z7PlXDfi.js";import"./SeverityIcon-CafQc9yX.js";import"./FloatingWrapper-DqyIwrdS.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Table/Docs/Editing/InlineEdit"}),`
`,e.jsx(n.h1,{id:"editing---inlineedit",children:"Editing - InlineEdit"}),`
`,e.jsx(n.p,{children:"Composition is a powerful concept in software design, allowing developers to build complex systems by combining simpler components. In the context of editing, composition enables the creation of flexible and reusable editing components that can be tailored to specific use cases."}),`
`,e.jsxs(n.p,{children:["The core set of components of Sprout provides the ",e.jsx(n.a,{href:"https://effective-chainsaw-mz3je65.pages.github.io/?path=/docs/components-inlineedit--docs",rel:"nofollow",children:"InlineEdit"})," which allows for in-place editing of table cells, providing a seamless user experience."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"For very simple use cases we expose a simple API to economize on boilerplate."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Table, TableInlineEdit } from "@qlik/sprout-table";

const TableInlineEditContext = TableInlineEdit.createContext<Person>();
const InlineEditString = TableInlineEdit.getEditString<Person>(TableInlineEditContext);

const columns: ColumnDef<Person>[] = [
  {
    field: "firstName",
    headerName: "First Name",
    renderCell: (props) => {
      return <InlineEditString {...props} />;
    },
  },
  // ... other columns
];

function MyPersonTable({ data }: { data: Person[] }) {
  const [rows, setRows] = useState<Person[]>(initialRows as Person[]);
  const onRowChange = useCallback(
    (row: Person) => {
      // this is where you can call POST HTTP api
      setRows((prevRows) => prevRows.map((r) => (r.uuid === row.uuid ? { ...r, ...row } : r)));
    },
    [rows],
  );

  return (
    <TableInlineEditContext.Provider
      value={{
        onRowChange,
      }}
    >
      <Table variant="data" rows={rows} columns={columns} />
    </TableInlineEditContext.Provider>
  );
}
`})}),`
`,e.jsxs(n.p,{children:["But in many cases you will need to implement your own custom editing components. In this case you can use the ",e.jsx(n.code,{children:"InlineEdit.Primitive"})," component to create your own editing components and leverage the ",e.jsx(n.a,{href:"?path=/docs/docs-columns-column-definition--docs#rendercell",children:"renderCell"})," API."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TableCellParams, editUtility } from "@qlik/sprout-table";

function InlineEditNumber({ row, colDef, value }: TableCellParams<Person>) {
  const context = useContext(TableInlineEditContext);

  const field = colDef.field as keyof Person;
  const [state, setState] = useState<number>(value as number);

  useEffect(() => {
    setState(value as number);
  }, [value]);

  return (
    <div className={classNames("px-s", "border-box", "w-full", "relative")}>
      <InlineEdit.Primitive
        view={() => <span className={classNames("text-default", "font-label-s")}>{state}</span>}
        edit={() => <TextField value={state} type="number" onChange={(e) => setState(parseInt(e.target.value, 10))} />}
        onCancel={() => {
          setState(value as number);
        }}
        onSave={() => {
          context.onRowChange(editUtility.getUpdatedRow(row, colDef, state));
        }}
      />
    </div>
  );
}
`})}),`
`,e.jsx(s,{of:a})]})}function ue(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{ue as default};
