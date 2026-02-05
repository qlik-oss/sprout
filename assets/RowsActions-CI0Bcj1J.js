import{j as n,M as s,a as t}from"./iframe-BQJExRCF.js";import{useMDXComponents as i}from"./index-BiT2RrsF.js";import{RowActions as c,LazyRowActions as m}from"./ListTable.stories-DkXQI7dE.js";import"./DataTable.stories-BfdWdzUH.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-Bs1NmEfZ.js";import"./useI18n-B99T9obj.js";import"./Button-C7-D-GN_.js";import"./classNames-B0wfWtWT.js";import"./sprout-DxA14K3u.js";import"./icons-CzMI2h-K.js";import"./Button.module-C2ELNEem.js";import"./Badge-B9--3FkB.js";import"./Tooltip-CVFOQrqK.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DAgGzV0n.js";import"./useId-Drz8gmS2.js";import"./ProgressCircular-B4mHH4_Y.js";import"./SortDescending-BWpZ9BF7.js";import"./IconButton-BEI3RZpW.js";import"./Menu-D_upy4ds.js";import"./useControl-XJuj1vyK.js";import"./Divider-Byw016rg.js";import"./list-B1zo5gaH.js";import"./NewTab-BMHt_Vx2.js";import"./Skeleton-C323E7Fo.js";import"./Checkbox-DxL7CNq4.js";import"./useValueControl-CRzMHMlu.js";import"./HelperText-CWubgWiG.js";import"./InfoTooltipPrimitive-BqPdPqRN.js";import"./Info-BfRROe8g.js";import"./List-BPN2kntc.js";import"./useListGesture-B8rp38Ns.js";import"./Popover-CTsqc6Mc.js";import"./TextField-C-5GsH-r.js";import"./Error-B95qseKK.js";import"./InputButton-CeEVJl7G.js";import"./useFieldProps-C0xARZ1e.js";import"./useFieldAriaProps-DaZEG-MV.js";import"./Field-BIldF_Al.js";import"./FieldLabel-BWOyYL3A.js";import"./Radio-CIqNDp5q.js";import"./Message-C0IrDS9-.js";import"./ProgressBar-LweF-ALg.js";import"./entity-CKGoLZWv.js";import"./Edit-Bc7r3LZJ.js";import"./Map-pFYOI1fT.js";import"./Warning-BB_ZpJQH.js";import"./index-BFgiYBXq.js";import"./SelectComposition-cKAmPh1H.js";import"./TagGroup-BsZ4uWAl.js";import"./Tag-DLmRXsBI.js";import"./TextOverflow-D_EYc0DY.js";import"./useHasOverflow-o-wZv5E2.js";import"./Add-CPO6AOva.js";import"./Close-VT6FC74F.js";import"./AlertInline-DLvQ03s1.js";import"./SeverityIcon-CI0epH8x.js";import"./FloatingWrapper-DTdVRmL6.js";function r(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Table/Docs/Rows/Row actions"}),`
`,n.jsx(e.h1,{id:"table---row-actions",children:"Table - Row Actions"}),`
`,n.jsx(e.h2,{id:"rowactions",children:"rowActions"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"rowActions"})," prop allows you to create a menu with actions that can be performed on each row of the table."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Table } from "@qlik/sprout-css-table";

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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Table } from "@qlik/sprout-css-table";
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
