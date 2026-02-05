import{j as n,M as s,a as t}from"./iframe-B4vjk2_C.js";import{useMDXComponents as i}from"./index-4mXTpVuF.js";import{RowActions as c,LazyRowActions as m}from"./ListTable.stories-oKZilo3k.js";import"./DataTable.stories-CZQOesl0.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-IrfVYjtU.js";import"./useI18n-DbSMZiRF.js";import"./Button-COVTwlCl.js";import"./classNames-DaRWzB8T.js";import"./sprout-DTAeqvbL.js";import"./icons-BjYZgjFf.js";import"./Button.module-C2ELNEem.js";import"./Badge-Coha5yr6.js";import"./Tooltip-D1n48xKC.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-D3fq_iUv.js";import"./useId-DsPr7Fl4.js";import"./ProgressCircular-CXDJvuy2.js";import"./SortDescending-B7jfx8Af.js";import"./IconButton-Ba8Tcb-S.js";import"./Menu-BL50xBAN.js";import"./useControl-DPltlHoP.js";import"./Divider-DqNucpfp.js";import"./list-B1zo5gaH.js";import"./NewTab-CGCvqCB9.js";import"./Skeleton-DGs4i03k.js";import"./Checkbox-yXCe54NU.js";import"./useValueControl-f2Qxn85g.js";import"./HelperText-B-4Si9bt.js";import"./InfoTooltipPrimitive-GcR7SVQV.js";import"./Info-qvjQZ4-p.js";import"./List-DC9jGULM.js";import"./useListGesture-ChCl8FYv.js";import"./Popover-B32coOjQ.js";import"./TextField-BIeh6d0s.js";import"./Error-aRqdswEO.js";import"./InputButton-iEaXDKyM.js";import"./useFieldProps-DJ-a4x7W.js";import"./useFieldAriaProps-7JTDckGo.js";import"./Field-C-ZgIs6T.js";import"./FieldLabel-BSgk2xJ9.js";import"./Radio-CD9AnLjJ.js";import"./Message-Cp0HRbTV.js";import"./ProgressBar-DV2vejgj.js";import"./entity-DwfCESMK.js";import"./Edit-DrJZ1rCf.js";import"./Map-CaMFTBLm.js";import"./Warning-mmXjUrwg.js";import"./index-DphJYWn8.js";import"./SelectComposition-CjxfMaHc.js";import"./TagGroup-BD8-w4Bk.js";import"./Tag-BK4gk7JG.js";import"./TextOverflow-BMs1NRzU.js";import"./useHasOverflow-D8ib81fX.js";import"./Add-CrXyYGj8.js";import"./Close-CzhTZSOO.js";import"./AlertInline-DKFV__in.js";import"./SeverityIcon-BXOn61Fa.js";import"./FloatingWrapper-FR8zykZr.js";function r(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Table/Docs/Rows/Row actions"}),`
`,n.jsx(e.h1,{id:"table---row-actions",children:"Table - Row Actions"}),`
`,n.jsx(e.h2,{id:"rowactions",children:"rowActions"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"rowActions"})," prop allows you to create a menu with actions that can be performed on each row of the table."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Table } from "@qlik/sprout-table";

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
`,n.jsx(t,{of:c}),`
`,n.jsx(e.p,{children:"If you need async processing to build the content of the menu you can manage it easily by providing a loading menu:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`
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
`,n.jsx(t,{of:m}),`
`,n.jsx(e.h2,{id:"onrowclick",children:"onRowClick"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"onRowClick"})," prop allows you to handle click events on the row. This can be useful for navigating to a detail view or performing an action when a row is clicked."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Table } from "@qlik/sprout-table";
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
`,n.jsxs(e.p,{children:["Note: This is different from the ",n.jsx(e.code,{children:"onCellClick"})," prop, which allows you to handle click events on individual cells."]}),`
`,n.jsxs(e.p,{children:["Note: You can use the ",n.jsx(e.code,{children:"event"})," argument and call ",n.jsx(e.code,{children:"preventDefault()"}),". That will stop the Table from triggering the ",n.jsx(e.a,{href:"./?path=/docs/docs-rows-row-selection--docs",children:"row selection"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// API
type onRowClick = (event: MouseEvent<HTMLDivElement>, row: ContentType) => void;
`})})]})}function wn(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{wn as default};
