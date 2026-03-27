import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Lc6HZYGU.js";import{Fn as n,l as r,n as i,s as a}from"./iframe-RiXBydPV.js";import{t as o}from"./mdx-react-shim-Cw1WyOhr.js";import{LazyRowActions as s,RowActions as c,t as l}from"./ListTable.stories-BTqrwU1i.js";import{t as u}from"./DataTable.stories-DpSkvHvD.js";function d(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a,{title:`Table/Docs/Rows/Row actions`}),`
`,(0,p.jsx)(n.h1,{id:`table---row-actions`,children:`Table - Row Actions`}),`
`,(0,p.jsx)(n.h2,{id:`rowactions`,children:`rowActions`}),`
`,(0,p.jsxs)(n.p,{children:[`The `,(0,p.jsx)(n.code,{children:`rowActions`}),` prop allows you to create a menu with actions that can be performed on each row of the table.`]}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-table";

return (
  <Table
    rowHeight={45}
    rows={rows}
    columns={columns}
    rowActions={(row) => (
      <>
        <Menu.Item onClick={(e) => {}}>Edit</Menu.Item>
        <Menu.Item onClick={(e) => {}}>Delete</Menu.Item>
      </>
    )}
  />
);
`})}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(n.p,{children:`If you need async processing to build the content of the menu you can manage it easily by providing a loading menu:`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`
function LazyMenu({ row }: { row: Entity }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [content, setContent] = useState(
    <>
      <div className={classNames("flex", "border_box", "p_m")}>
        <Skeleton variant="text" width={100} height={16} />
      </div>
      <div className={classNames("flex", "border_box", "p_m")}>
        <Skeleton variant="text" width={100} height={16} />
      </div>
    </>,
  );
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    if (isInView) {
      // simulate api call or any asynchreous operation using the row
      setTimeout(() => {
        setContent(
          <>
            <Menu.Item>Edit {row.name}</Menu.Item>
            <Menu.Item>Delete {row.name}</Menu.Item>
          </>,
        );
      }, 1000);
    }
  }, [isInView]);
  return <div ref={ref}>{content}</div>;
}
// now you can use this component in the rowActions prop
<Table ... rowActions={(row) => <LazyMenu row={row} />} />
`})}),`
`,(0,p.jsx)(i,{of:s}),`
`,(0,p.jsx)(n.h2,{id:`onrowclick`,children:`onRowClick`}),`
`,(0,p.jsxs)(n.p,{children:[`The `,(0,p.jsx)(n.code,{children:`onRowClick`}),` prop allows you to handle click events on the row. This can be useful for navigating to a detail view or performing an action when a row is clicked.`]}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-table";
import { rows, columns } from "./data";

<Table
  variant="list"
  columns={columns}
  rows={rows}
  onRowClick={(e, row) => {
    console.log("Row clicked:", row);
  }}
/>;
`})}),`
`,(0,p.jsxs)(n.p,{children:[`Note: This is different from the `,(0,p.jsx)(n.code,{children:`onCellClick`}),` prop, which allows you to handle click events on individual cells.`]}),`
`,(0,p.jsxs)(n.p,{children:[`Note: You can use the `,(0,p.jsx)(n.code,{children:`event`}),` argument and call `,(0,p.jsx)(n.code,{children:`preventDefault()`}),`. That will stop the Table from triggering the `,(0,p.jsx)(n.a,{href:`./?path=/docs/docs-rows-row-selection--docs`,children:`row selection`}),`.`]}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`// API
type onRowClick = (event: MouseEvent<HTMLDivElement>, row: ContentType) => void;
`})})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),o(),r(),l(),u()}))();export{f as default};