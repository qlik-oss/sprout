import{j as n,M as s,a as t}from"./iframe-DuYosUFD.js";import{useMDXComponents as i}from"./index-6fjbDpXn.js";import{RowActions as c,LazyRowActions as m}from"./ListTable.stories-CBatvAVB.js";import"./DataTable.stories-C8Hrr7uJ.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-fpvLVI4M.js";import"./useI18n-BjJPdLTM.js";import"./Button-DI0ZynHS.js";import"./classNames-zePBlFY_.js";import"./sprout-CvRh1TM0.js";import"./Button.module-D6kzoXVn.js";import"./common-bQH3ZR03.js";import"./Badge-CPj7NTO4.js";import"./Tooltip-BJFaRrUy.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-DjHAObcc.js";import"./useId-DRaip_NL.js";import"./ProgressCircular-BvkbtoQi.js";import"./sort-descending-BgZWkgGz.js";import"./IconButton-BE9E_AnQ.js";import"./Menu-D_Niw5ai.js";import"./useControl-DOCWDNqa.js";import"./Divider-DVRuu_FL.js";import"./list-B1zo5gaH.js";import"./new-tab-Dp-d2eWd.js";import"./Skeleton-R2z-cDq5.js";import"./Popover-D-qbv7RV.js";import"./padding-BWxXYvmb.js";import"./TextField-DnT8J57g.js";import"./useValueControl-uslnr95T.js";import"./error-CXY2goRU.js";import"./InputButton-CpK-Hq67.js";import"./useFieldProps-BwY4Fxzy.js";import"./useFieldAriaProps-oaAu_ksb.js";import"./Field-MvuQg19v.js";import"./FieldLabel-BP167ITs.js";import"./info-Bxa3p2DF.js";import"./InfoTooltipPrimitive-D-yTz8eW.js";import"./HelperText-6attHadj.js";import"./Checkbox-4-pENTYN.js";import"./List-C-OREM0u.js";import"./useListGesture-EJR-Hpo1.js";import"./Radio-BsibNaRm.js";import"./show-Gqxo-URH.js";import"./Message-3Vh_XQrE.js";import"./ProgressBar-DUKTXS9W.js";import"./entity-BVuadDIQ.js";import"./edit-DeXKaZx5.js";import"./map-Be-Ow4bt.js";import"./warning-DO6AU_ml.js";import"./index-AUjBO46D.js";import"./SelectComposition-eEorCX1T.js";import"./TagGroup-CaR5HQlD.js";import"./Tag-DpwdOoAU.js";import"./TextOverflow-DsMnN-5j.js";import"./useHasOverflow-BuHjGHjQ.js";import"./add-Vg2U0mSE.js";import"./close-Dyzj91Dc.js";import"./AlertInline-BNeWuwr2.js";import"./SeverityIcon-DSoo49L9.js";import"./FloatingWrapper-BYrVCp-F.js";function r(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Table/Docs/Rows/Row actions"}),`
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
`})})]})}function fn(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{fn as default};
