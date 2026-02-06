import{j as n,M as s,a as t}from"./iframe-B4-nXs83.js";import{useMDXComponents as i}from"./index-BqykRLmO.js";import{RowActions as c,LazyRowActions as m}from"./ListTable.stories-kkj-broB.js";import"./DataTable.stories-Dm938kPV.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-BNlS3oNV.js";import"./useI18n-peGtGOOS.js";import"./Button-Cv6yFaKa.js";import"./classNames-eIMwhIDK.js";import"./sprout-SOoz1jzb.js";import"./icons-DuVV-LnW.js";import"./Button.module-C2ELNEem.js";import"./Badge-DvRPOsa9.js";import"./Tooltip-BmEIvhna.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CKYJ27w7.js";import"./useId-D71ehFqY.js";import"./ProgressCircular-CVxkPa9h.js";import"./SortDescending-CKWll_c0.js";import"./IconButton-D-KEKYAI.js";import"./Menu-DW09POVa.js";import"./useControl-DdRfwf_0.js";import"./Divider-DdqecLrr.js";import"./list-B1zo5gaH.js";import"./NewTab-Bx55GzRW.js";import"./Skeleton-BsrAjAGs.js";import"./Checkbox-BZ2qRRvw.js";import"./useValueControl-CtQhivtG.js";import"./HelperText-ByCNTNQH.js";import"./InfoTooltipPrimitive-D8jVv135.js";import"./Info-DTuI-Of7.js";import"./List-h-LY_Ssu.js";import"./useListGesture-KAVHmAzT.js";import"./Popover-CS5Gu0v5.js";import"./TextField-7zXX973B.js";import"./Error-D7GK58M_.js";import"./InputButton-bRj-07Rv.js";import"./useFieldProps-BBrAaKPm.js";import"./useFieldAriaProps-Cbzvhn2j.js";import"./Field-B3vU29tm.js";import"./FieldLabel-DdZy9tvM.js";import"./Radio-Y7kBaWyP.js";import"./Message-jaCKEo0_.js";import"./ProgressBar-DdBByWnw.js";import"./entity-DyXn2hc5.js";import"./Edit-DzJTkpRk.js";import"./Map-D3Po8JT9.js";import"./Warning-BAtVE0v3.js";import"./index-Bgl3-yHM.js";import"./SelectComposition-BaT4dRxA.js";import"./TagGroup-BFI8F1G-.js";import"./Tag-CObVgYEg.js";import"./TextOverflow-dP4PdhnE.js";import"./useHasOverflow-DZlgyJuB.js";import"./Add-BPhJi-H4.js";import"./Close-BgZ1uSF_.js";import"./AlertInline-DlnHae0G.js";import"./SeverityIcon-B1n60lm3.js";import"./FloatingWrapper-Y9LgBPDf.js";function r(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Table/Docs/Rows/Row actions"}),`
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
