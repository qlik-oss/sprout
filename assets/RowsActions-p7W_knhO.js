import{j as n,M as s,a as t}from"./iframe-B9QkJTIx.js";import{useMDXComponents as i}from"./index-Ka0iXB8t.js";import{RowActions as c,LazyRowActions as m}from"./ListTable.stories-DyvHm3Wo.js";import"./DataTable.stories-DUB4ZTj6.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-D2Hm0_QA.js";import"./useI18n-CoLWfcqJ.js";import"./Button-DJuasLWt.js";import"./classNames-CL7ibyjj.js";import"./sprout-DgR7PjaR.js";import"./icons-Duy9VSzr.js";import"./Button.module-C2ELNEem.js";import"./Badge--_cWWvgS.js";import"./Tooltip-Csm9nS2W.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-Dge73wkB.js";import"./useId-HR4iyljw.js";import"./ProgressCircular-CftNoQ2F.js";import"./SortDescending-CLGWMbYc.js";import"./IconButton-CrQ3EA5C.js";import"./Menu-CYXlESaf.js";import"./useControl-CYR4PP7j.js";import"./Divider-CQpF3Ph8.js";import"./list-B1zo5gaH.js";import"./NewTab-BMd_bij_.js";import"./Skeleton-wIQNnjB0.js";import"./Checkbox-CYD4A7GS.js";import"./useValueControl-Db5KsQ4Q.js";import"./HelperText-BYWuUqrF.js";import"./InfoTooltipPrimitive-DoWpqGGg.js";import"./Info-BWEZF-KM.js";import"./List-CBxPPDGX.js";import"./useListGesture-BdSTCOqc.js";import"./Popover-GGNis2px.js";import"./TextField-D-V1YVvE.js";import"./Error-Blwva2SQ.js";import"./InputButton-BrKvM5py.js";import"./useFieldProps-YNPoJw4_.js";import"./useFieldAriaProps-B8MgKfHo.js";import"./Field-DqJdoNjO.js";import"./FieldLabel-DJkQe3UY.js";import"./Radio-BZg-I7CQ.js";import"./Message-B_naLpQf.js";import"./ProgressBar-BofdQq2I.js";import"./entity-CSiJwT8q.js";import"./Edit-BObi6k7U.js";import"./Map-D73tVC2W.js";import"./Warning-B4wA6Xoa.js";import"./index-cSFa6LUu.js";import"./SelectComposition-C03WeBSC.js";import"./TagGroup-h28o7ATL.js";import"./Tag-B3eV28ox.js";import"./TextOverflow-NR2fjX4A.js";import"./useHasOverflow-BYbTVzOs.js";import"./Add-BjVpk_Pb.js";import"./Close-ajP2gTu5.js";import"./AlertInline-CTpWXRpk.js";import"./SeverityIcon-CKoJLroj.js";import"./FloatingWrapper-YX7wMZJ8.js";function r(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Table/Docs/Rows/Row actions"}),`
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
