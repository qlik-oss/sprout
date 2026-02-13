import{j as e,M as r,a as s}from"./iframe-D-N3fK2j.js";import{useMDXComponents as i}from"./index-BvagnWFp.js";import"./ListTable.stories-CgtPa8qs.js";import{InlineEditTable as a}from"./DataTable.stories-G-FDgUXQ.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-BQSmQzm2.js";import"./useI18n-ClHBar3-.js";import"./Button-BiiNVP7I.js";import"./classNames-CrSIhzis.js";import"./sprout-UDo5dA_z.js";import"./icons-BEmnCRju.js";import"./Button.module-CmdpHks8.js";import"./Badge-sJnchsAW.js";import"./Tooltip-DaX3jRge.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-25h2pNOO.js";import"./useId-Bkl3iN6O.js";import"./ProgressCircular-CdUDfayh.js";import"./SortDescending-7Is3TCUG.js";import"./IconButton-Dg4ysz4Z.js";import"./Menu-CpWAuarv.js";import"./useControl-U-WkQj2I.js";import"./Divider-Aa9jm5B9.js";import"./list-B1zo5gaH.js";import"./NewTab-DIWrR844.js";import"./Skeleton-Bx_f_eFM.js";import"./Checkbox-BypGcOIl.js";import"./useValueControl-DH7McdQ1.js";import"./HelperText-DkWywDIM.js";import"./InfoTooltipPrimitive-C8Uq1qY7.js";import"./Info-DKfyJpi1.js";import"./List-DiNkJdPa.js";import"./useListGesture-DW7ff4gI.js";import"./Popover-B17Az-M5.js";import"./TextField-DMygpcri.js";import"./Error-CZbJtLWx.js";import"./InputButton-BoVH_no0.js";import"./useFieldProps-Cnz6GbX_.js";import"./useFieldAriaProps-EzEn10HD.js";import"./Field-DHjy_kFd.js";import"./FieldLabel-BNj8Kiyj.js";import"./Radio-BUTN66Da.js";import"./Message-kE_O_eKL.js";import"./ProgressBar-S0aBvDe-.js";import"./entity-jHLCnT40.js";import"./Edit-69Qgo7Td.js";import"./Map-DsyJdFaB.js";import"./Warning-Dy5sqdbk.js";import"./index-umgVt7ll.js";import"./SelectComposition-2GVB6IHa.js";import"./TagGroup-7XjF8tBf.js";import"./Tag-CLp8bTu7.js";import"./TextOverflow-B0-vdnEr.js";import"./useHasOverflow-BWQUK3f5.js";import"./Add-DHz0bRTt.js";import"./Close-Clva93gw.js";import"./AlertInline-DkGYkHAy.js";import"./SeverityIcon-DDEIToER.js";import"./FloatingWrapper-CPYdMCWe.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Table/Docs/Editing/InlineEdit"}),`
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
