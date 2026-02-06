import{j as n,M as s,a as t}from"./iframe-itHhOQJ8.js";import{useMDXComponents as i}from"./index-M6OOd87p.js";import{RowActions as c,LazyRowActions as m}from"./ListTable.stories-CLM8UbSS.js";import"./DataTable.stories-sFbIX5nK.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-Df5yoS2C.js";import"./useI18n-DI5kaiCu.js";import"./Button-D1L5V1zp.js";import"./classNames-8u_YGv6N.js";import"./sprout-5bk7oM4L.js";import"./icons-ByJhQmwX.js";import"./Button.module-C2ELNEem.js";import"./Badge-Fno8cZv5.js";import"./Tooltip-CsCotLcm.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DcDxQLMY.js";import"./useId-B9bqBKq5.js";import"./ProgressCircular-DxTh7cF9.js";import"./SortDescending-BgGAHRpl.js";import"./IconButton-BFY56UPS.js";import"./Menu-BI017uJL.js";import"./useControl-tJx49zVQ.js";import"./Divider-Z7gRZlXH.js";import"./list-B1zo5gaH.js";import"./NewTab-CD_BiguK.js";import"./Skeleton-skQ_3lbg.js";import"./Checkbox-CJQPTyqO.js";import"./useValueControl-BoLujgBt.js";import"./HelperText-CZI4gvqv.js";import"./InfoTooltipPrimitive-BycnW3Wq.js";import"./Info-CR8Ra2BB.js";import"./List-BO2nz2p3.js";import"./useListGesture-BaRYVpJg.js";import"./Popover-D-VXifUT.js";import"./TextField-CrzVSwY1.js";import"./Error-CgMRcq7x.js";import"./InputButton-CobW-7UY.js";import"./useFieldProps-ZapC1bKU.js";import"./useFieldAriaProps-DJiNiZ9_.js";import"./Field-BglQDcK_.js";import"./FieldLabel-k_vhoLHi.js";import"./Radio-BuXCyg8H.js";import"./Message-Bc7eA00P.js";import"./ProgressBar-BYafVDdP.js";import"./entity-D0L1HH-P.js";import"./Edit-C4Gy6c5s.js";import"./Map-BgJ3dtI2.js";import"./Warning-Wt3nbj6y.js";import"./index-BKJVDtV4.js";import"./SelectComposition-1S4bJavw.js";import"./TagGroup-B35wMlua.js";import"./Tag-D6Whh4y4.js";import"./TextOverflow-ZR1lg4UG.js";import"./useHasOverflow-BPrWXac9.js";import"./Add-sGTd4JLT.js";import"./Close-DeQxVhkZ.js";import"./AlertInline-v7KfNwSs.js";import"./SeverityIcon-B8lRHlGc.js";import"./FloatingWrapper-CvOMWb5A.js";function r(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Table/Docs/Rows/Row actions"}),`
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
