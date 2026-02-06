import{j as e,M as r,a as s}from"./iframe-qjjAf_pH.js";import{useMDXComponents as i}from"./index-BAT7sozL.js";import"./ListTable.stories-rCJ8u2aC.js";import{InlineEditTable as a}from"./DataTable.stories-CoQzY2SV.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-C1epY4k_.js";import"./useI18n-DleVkSsM.js";import"./Button-cYFf5aNk.js";import"./classNames-BVAN1ZTN.js";import"./sprout-Dvd5rbSu.js";import"./icons-5qhXnzWI.js";import"./Button.module-C2ELNEem.js";import"./Badge-CvmwyUY9.js";import"./Tooltip-DvaPb59I.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CXS0BGZe.js";import"./useId-CYaNFQmj.js";import"./ProgressCircular-BSs6AknY.js";import"./SortDescending-C3dNRiBL.js";import"./IconButton-DKYxz8uh.js";import"./Menu-C5_qGJie.js";import"./useControl-BNhHN6uq.js";import"./Divider-Cf0WguxB.js";import"./list-B1zo5gaH.js";import"./NewTab-CYZ0jhBQ.js";import"./Skeleton-BKmE9JlX.js";import"./Checkbox-Drk1Dunk.js";import"./useValueControl-CExQO3qq.js";import"./HelperText-CYjRsd29.js";import"./InfoTooltipPrimitive-CrOtV9y3.js";import"./Info-DxHQkaw3.js";import"./List-C3D7MMCm.js";import"./useListGesture-Brx4doHh.js";import"./Popover-DnFzFkcI.js";import"./TextField-CK34yAWN.js";import"./Error-BrLGh9jC.js";import"./InputButton-C0Pq6Rob.js";import"./useFieldProps-BNEikc4J.js";import"./useFieldAriaProps-7kz57GoE.js";import"./Field-Cf7Db6oK.js";import"./FieldLabel-bQ0UMnrf.js";import"./Radio-N-PXJ2J8.js";import"./Message-BZngrfl1.js";import"./ProgressBar-ChivX090.js";import"./entity-DKvlJDRY.js";import"./Edit-2pD94UJo.js";import"./Map-in9fWS3M.js";import"./Warning-CuGLZChC.js";import"./index-BkElCgI0.js";import"./SelectComposition-aqwnCHtS.js";import"./TagGroup-B7F15cvC.js";import"./Tag-CyqCz7gG.js";import"./TextOverflow-QXR0TMUv.js";import"./useHasOverflow-B98-wlZO.js";import"./Add-DSLcMkbC.js";import"./Close-Bp7FqXQR.js";import"./AlertInline-BvFLYRiR.js";import"./SeverityIcon-DTXO1k7w.js";import"./FloatingWrapper-wvjLqIRc.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Table/Docs/Editing/InlineEdit"}),`
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
