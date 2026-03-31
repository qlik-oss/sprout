import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,l as r,n as i,s as a}from"./iframe-B0xl5hqz.js";import{t as o}from"./mdx-react-shim-C5WuC5zb.js";import{InlineEditTable as s,t as c}from"./DataTable.stories-BafCGHBW.js";import{t as l}from"./ListTable.stories-yabvCW8q.js";function u(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{title:`table/Editing/InlineEdit`}),`
`,(0,f.jsx)(n.h1,{id:`editing---inlineedit`,children:`Editing - InlineEdit`}),`
`,(0,f.jsx)(n.p,{children:`Composition is a powerful concept in software design, allowing developers to build complex systems by combining simpler components. In the context of editing, composition enables the creation of flexible and reusable editing components that can be tailored to specific use cases.`}),`
`,(0,f.jsxs)(n.p,{children:[`The core set of components of Sprout provides the `,(0,f.jsx)(n.a,{href:`https://effective-chainsaw-mz3je65.pages.github.io/?path=/docs/components-inlineedit--docs`,rel:`nofollow`,children:`InlineEdit`}),` which allows for in-place editing of table cells, providing a seamless user experience.`]}),`
`,(0,f.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,f.jsx)(n.p,{children:`For very simple use cases we expose a simple API to economize on boilerplate.`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { Table, TableInlineEdit } from "@qlik/sprout-react-table";

const TableInlineEditContext = TableInlineEdit.createContext<Person>();
const InlineEditString = TableInlineEdit.getEditString<Person>(
  TableInlineEditContext
);

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
      setRows((prevRows) =>
        prevRows.map((r) => (r.uuid === row.uuid ? { ...r, ...row } : r))
      );
    },
    [rows]
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
`,(0,f.jsxs)(n.p,{children:[`But in many cases you will need to implement your own custom editing components. In this case you can use the `,(0,f.jsx)(n.code,{children:`InlineEdit.Primitive`}),` component to create your own editing components and leverage the `,(0,f.jsx)(n.a,{href:`?path=/docs/docs-columns-column-definition--docs#rendercell`,children:`renderCell`}),` API.`]}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { TableCellParams, editUtility } from "@qlik/sprout-react-table";

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
        view={() => (
          <span className={classNames("text-default", "font-label-s")}>
            {state}
          </span>
        )}
        edit={() => (
          <TextField
            value={state}
            type="number"
            onChange={(e) => setState(parseInt(e.target.value, 10))}
          />
        )}
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
`,(0,f.jsx)(i,{of:s})]})}function d(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,f.jsx)(n,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=n(),o(),r(),c(),l()}))();export{d as default};