import{j as e,M as r,a as s}from"./iframe-Bp0nu8X6.js";import{useMDXComponents as i}from"./index-CC_VpkT-.js";import"./ListTable.stories-CIPH3HVb.js";import{InlineEditTable as a}from"./DataTable.stories-BDunRDc0.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-DNTipomW.js";import"./useI18n-D2jaKmf9.js";import"./Button-CBkOB6z4.js";import"./classNames-BUd7eP-S.js";import"./sprout-rpr_484f.js";import"./Button.module-BRCMjQTg.js";import"./common-bQH3ZR03.js";import"./Badge-Br2oOa7d.js";import"./Tooltip-B3oqGcOh.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-D5e_-V2O.js";import"./useId-C38y77Da.js";import"./ProgressCircular-DO25q9z0.js";import"./sort-descending-Denwaaa7.js";import"./IconButton-Bu152FGZ.js";import"./Menu-Co2VX3TG.js";import"./useControl-CS67YHbK.js";import"./Divider-B3J7iNd7.js";import"./list-B1zo5gaH.js";import"./new-tab-uRDDQ1v4.js";import"./Skeleton-B__PZKef.js";import"./Popover-wxpNpCGf.js";import"./padding-Z5rKYLph.js";import"./TextField-BXk7dWee.js";import"./useValueControl-DAQoJtS1.js";import"./error-BcSU3HuT.js";import"./InputButton-BmHhXOBc.js";import"./useFieldProps-Cvv95kAj.js";import"./useFieldAriaProps-lqPBO4h4.js";import"./Field-4fYLnCC7.js";import"./FieldLabel-DBAKdsPr.js";import"./info-DGMlSu_6.js";import"./InfoTooltipPrimitive-C8AQG5h1.js";import"./HelperText-NWZ1zrXV.js";import"./Checkbox-Djd4-Wye.js";import"./List-Dh5d5DNB.js";import"./useListGesture-CvQX60jh.js";import"./Radio-CN8Ey4gw.js";import"./show-BUDxgafp.js";import"./Message-DGkKaG0R.js";import"./ProgressBar-DPn0IQrz.js";import"./entity-DMCVQWE7.js";import"./edit-Dwo3NC30.js";import"./map-BFrox4w-.js";import"./warning-CT_3wb2_.js";import"./index-B4OJwCVC.js";import"./SelectComposition-Yhre3dM9.js";import"./TagGroup-BRIA_TfO.js";import"./Tag-D6_7eg9E.js";import"./TextOverflow-D-B5LsyQ.js";import"./useHasOverflow-BYHEzBW0.js";import"./add-DiIoSsfz.js";import"./close-CJ5Ns5F2.js";import"./AlertInline-vLYNKOEh.js";import"./SeverityIcon-CBpxoadr.js";import"./FloatingWrapper-B5QsjZYg.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Table/Docs/Editing/InlineEdit"}),`
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
`,e.jsx(s,{of:a})]})}function xe(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{xe as default};
