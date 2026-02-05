import{j as e,M as r,a as s}from"./iframe-BQJExRCF.js";import{useMDXComponents as i}from"./index-BiT2RrsF.js";import"./ListTable.stories-DkXQI7dE.js";import{InlineEditTable as a}from"./DataTable.stories-BfdWdzUH.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-Bs1NmEfZ.js";import"./useI18n-B99T9obj.js";import"./Button-C7-D-GN_.js";import"./classNames-B0wfWtWT.js";import"./sprout-DxA14K3u.js";import"./icons-CzMI2h-K.js";import"./Button.module-C2ELNEem.js";import"./Badge-B9--3FkB.js";import"./Tooltip-CVFOQrqK.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DAgGzV0n.js";import"./useId-Drz8gmS2.js";import"./ProgressCircular-B4mHH4_Y.js";import"./SortDescending-BWpZ9BF7.js";import"./IconButton-BEI3RZpW.js";import"./Menu-D_upy4ds.js";import"./useControl-XJuj1vyK.js";import"./Divider-Byw016rg.js";import"./list-B1zo5gaH.js";import"./NewTab-BMHt_Vx2.js";import"./Skeleton-C323E7Fo.js";import"./Checkbox-DxL7CNq4.js";import"./useValueControl-CRzMHMlu.js";import"./HelperText-CWubgWiG.js";import"./InfoTooltipPrimitive-BqPdPqRN.js";import"./Info-BfRROe8g.js";import"./List-BPN2kntc.js";import"./useListGesture-B8rp38Ns.js";import"./Popover-CTsqc6Mc.js";import"./TextField-C-5GsH-r.js";import"./Error-B95qseKK.js";import"./InputButton-CeEVJl7G.js";import"./useFieldProps-C0xARZ1e.js";import"./useFieldAriaProps-DaZEG-MV.js";import"./Field-BIldF_Al.js";import"./FieldLabel-BWOyYL3A.js";import"./Radio-CIqNDp5q.js";import"./Message-C0IrDS9-.js";import"./ProgressBar-LweF-ALg.js";import"./entity-CKGoLZWv.js";import"./Edit-Bc7r3LZJ.js";import"./Map-pFYOI1fT.js";import"./Warning-BB_ZpJQH.js";import"./index-BFgiYBXq.js";import"./SelectComposition-cKAmPh1H.js";import"./TagGroup-BsZ4uWAl.js";import"./Tag-DLmRXsBI.js";import"./TextOverflow-D_EYc0DY.js";import"./useHasOverflow-o-wZv5E2.js";import"./Add-CPO6AOva.js";import"./Close-VT6FC74F.js";import"./AlertInline-DLvQ03s1.js";import"./SeverityIcon-CI0epH8x.js";import"./FloatingWrapper-DTdVRmL6.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Table/Docs/Editing/InlineEdit"}),`
`,e.jsx(n.h1,{id:"editing---inlineedit",children:"Editing - InlineEdit"}),`
`,e.jsx(n.p,{children:"Composition is a powerful concept in software design, allowing developers to build complex systems by combining simpler components. In the context of editing, composition enables the creation of flexible and reusable editing components that can be tailored to specific use cases."}),`
`,e.jsxs(n.p,{children:["The core set of components of Sprout provides the ",e.jsx(n.a,{href:"https://effective-chainsaw-mz3je65.pages.github.io/?path=/docs/components-inlineedit--docs",rel:"nofollow",children:"InlineEdit"})," which allows for in-place editing of table cells, providing a seamless user experience."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"For very simple use cases we expose a simple API to economize on boilerplate."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Table, TableInlineEdit } from "@qlik/sprout-css-table";

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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TableCellParams, editUtility } from "@qlik/sprout-css-table";

function InlineEditNumber({ row, colDef, value }: TableCellParams<Person>) {
  const context = useContext(TableInlineEditContext);

  const field = colDef.field as keyof Person;
  const [state, setState] = useState<number>(value as number);

  useEffect(() => {
    setState(value as number);
  }, [value]);

  return (
    <div className={classNames("px_s", "border_box", "w_full", "relative")}>
      <InlineEdit.Primitive
        view={() => <span className={classNames("text_default", "font_label_s")}>{state}</span>}
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
