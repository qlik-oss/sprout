import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{n as t,s as n}from"./iframe-URhFfzNK.js";import{n as r}from"./lib-EjdzwnHJ.js";import"./lib-kOH7agXw.js";import"./entity-DM53pCFA.js";import"./ListTable.stories-Cadx7lxo.js";import{InlineEditTable as i}from"./DataTable.stories-Uk6wMN1Z.js";var a=e();function o(e){let o={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...r(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{title:`Table/Docs/Editing/InlineEdit`}),`
`,(0,a.jsx)(o.h1,{id:`editing---inlineedit`,children:`Editing - InlineEdit`}),`
`,(0,a.jsx)(o.p,{children:`Composition is a powerful concept in software design, allowing developers to build complex systems by combining simpler components. In the context of editing, composition enables the creation of flexible and reusable editing components that can be tailored to specific use cases.`}),`
`,(0,a.jsxs)(o.p,{children:[`The core set of components of Sprout provides the `,(0,a.jsx)(o.a,{href:`https://effective-chainsaw-mz3je65.pages.github.io/?path=/docs/components-inlineedit--docs`,rel:`nofollow`,children:`InlineEdit`}),` which allows for in-place editing of table cells, providing a seamless user experience.`]}),`
`,(0,a.jsx)(o.h2,{id:`usage`,children:`Usage`}),`
`,(0,a.jsx)(o.p,{children:`For very simple use cases we expose a simple API to economize on boilerplate.`}),`
`,(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:`language-tsx`,children:`import { Table, TableInlineEdit } from "@qlik/sprout-table";

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
`,(0,a.jsxs)(o.p,{children:[`But in many cases you will need to implement your own custom editing components. In this case you can use the `,(0,a.jsx)(o.code,{children:`InlineEdit.Primitive`}),` component to create your own editing components and leverage the `,(0,a.jsx)(o.a,{href:`?path=/docs/docs-columns-column-definition--docs#rendercell`,children:`renderCell`}),` API.`]}),`
`,(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:`language-tsx`,children:`import { TableCellParams, editUtility } from "@qlik/sprout-table";

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
`,(0,a.jsx)(t,{of:i})]})}function s(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}export{s as default};