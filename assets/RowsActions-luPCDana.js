import{j as n,M as s,a as t}from"./iframe-BThSoDrn.js";import{useMDXComponents as i}from"./index-dxYskzg-.js";import{RowActions as c,LazyRowActions as m}from"./ListTable.stories-CBE61jpF.js";import"./DataTable.stories-DPDjtHWB.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-BSsjhkNm.js";import"./useI18n-DEBX20KE.js";import"./Button-DPdoSvtR.js";import"./classNames-dIthk07I.js";import"./sprout-C7A3N88C.js";import"./icons-m7QrAy0p.js";import"./Button.module-C2ELNEem.js";import"./Badge-BD7yv9SE.js";import"./Tooltip-g36jqBzQ.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DhaNE9oh.js";import"./useId-hgAQXGHZ.js";import"./ProgressCircular-3frmJwTX.js";import"./SortDescending-DRIoVd-M.js";import"./IconButton-BNf-P6Px.js";import"./Menu-ByKPQPeJ.js";import"./useControl-BsRaFebD.js";import"./Divider-BDGjRrdZ.js";import"./list-B1zo5gaH.js";import"./NewTab-RTkCp496.js";import"./Skeleton-CGjLWnQE.js";import"./Checkbox-CwbydU-X.js";import"./useValueControl-GMse0bib.js";import"./HelperText-bJIP0f1z.js";import"./InfoTooltipPrimitive-DKXNBt4b.js";import"./Info-CD_iaTpZ.js";import"./List-DdV_35GQ.js";import"./useListGesture-DQ4w9Z6Q.js";import"./Popover-BJedhRhh.js";import"./TextField-RzgPXNoi.js";import"./Error-LWra2rFD.js";import"./InputButton-D48x7m5m.js";import"./useFieldProps-ZuqHy8WE.js";import"./useFieldAriaProps-CdXcjcjf.js";import"./Field-FhdYhdWr.js";import"./FieldLabel-Bgszjlae.js";import"./Radio-DNI0-KRY.js";import"./Message-6bQP5MEx.js";import"./ProgressBar-C7xEEuQF.js";import"./entity-DzzI86Ua.js";import"./Edit-BnWU-wtK.js";import"./Map-BSYcvYLi.js";import"./Warning-BKQeZIO5.js";import"./index-DPypwqCx.js";import"./SelectComposition-BkFtZxST.js";import"./TagGroup-vpdbOI5u.js";import"./Tag-B1yXdr4G.js";import"./TextOverflow-DOzhudw2.js";import"./useHasOverflow-ChjOj1VO.js";import"./Add-BQFdkl2e.js";import"./Close-jEAlxUHo.js";import"./AlertInline-CTeynTLS.js";import"./SeverityIcon-CDrAKmG1.js";import"./FloatingWrapper-By9slcCq.js";function r(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Table/Docs/Rows/Row actions"}),`
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
