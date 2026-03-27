import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{n as t,s as n}from"./iframe-B5xoaqtW.js";import{n as r}from"./lib-EjdzwnHJ.js";import"./lib-BqyORzYB.js";import"./entity-BW1wQ0_F.js";import{LazyRowActions as i,RowActions as a}from"./ListTable.stories-UKG8RqLs.js";import"./DataTable.stories-DAkgWAkZ.js";var o=e();function s(e){let s={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...r(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{title:`Table/Docs/Rows/Row actions`}),`
`,(0,o.jsx)(s.h1,{id:`table---row-actions`,children:`Table - Row Actions`}),`
`,(0,o.jsx)(s.h2,{id:`rowactions`,children:`rowActions`}),`
`,(0,o.jsxs)(s.p,{children:[`The `,(0,o.jsx)(s.code,{children:`rowActions`}),` prop allows you to create a menu with actions that can be performed on each row of the table.`]}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-table";

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
`,(0,o.jsx)(t,{of:a}),`
`,(0,o.jsx)(s.p,{children:`If you need async processing to build the content of the menu you can manage it easily by providing a loading menu:`}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-tsx`,children:`
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
`,(0,o.jsx)(t,{of:i}),`
`,(0,o.jsx)(s.h2,{id:`onrowclick`,children:`onRowClick`}),`
`,(0,o.jsxs)(s.p,{children:[`The `,(0,o.jsx)(s.code,{children:`onRowClick`}),` prop allows you to handle click events on the row. This can be useful for navigating to a detail view or performing an action when a row is clicked.`]}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-table";
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
`,(0,o.jsxs)(s.p,{children:[`Note: This is different from the `,(0,o.jsx)(s.code,{children:`onCellClick`}),` prop, which allows you to handle click events on individual cells.`]}),`
`,(0,o.jsxs)(s.p,{children:[`Note: You can use the `,(0,o.jsx)(s.code,{children:`event`}),` argument and call `,(0,o.jsx)(s.code,{children:`preventDefault()`}),`. That will stop the Table from triggering the `,(0,o.jsx)(s.a,{href:`./?path=/docs/docs-rows-row-selection--docs`,children:`row selection`}),`.`]}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-tsx`,children:`// API
type onRowClick = (event: MouseEvent<HTMLDivElement>, row: ContentType) => void;
`})})]})}function c(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}export{c as default};