import{j as n,M as s,a as t}from"./iframe-s7Iwh0oT.js";import{useMDXComponents as i}from"./index-3LxxidSz.js";import{RowActions as c,LazyRowActions as m}from"./ListTable.stories-B2OILioi.js";import"./DataTable.stories-BBk3Rj5r.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-DU4sN6ms.js";import"./useI18n-DNSc_Xzu.js";import"./Button-BLnymG9d.js";import"./classNames-BgUAGgdt.js";import"./sprout-Bvx94sbk.js";import"./Button.module-BSdpW5zV.js";import"./common-bQH3ZR03.js";import"./Badge-CjbZkwpT.js";import"./Tooltip-_uMFampe.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BoZIv2t8.js";import"./useId-C37lMSXz.js";import"./ProgressCircular-Dm76i-ei.js";import"./sort-descending-OBAQsHI9.js";import"./IconButton-zwf3qVx9.js";import"./Menu-CU8ixYLE.js";import"./useControl-CS-bltOB.js";import"./Divider-BMuu4i8A.js";import"./list-B1zo5gaH.js";import"./new-tab-WxcYfP2Y.js";import"./Skeleton-DC7wVjwf.js";import"./Popover-CD-kPJqZ.js";import"./padding-BXgzSss2.js";import"./TextField-ID03Gn3a.js";import"./useValueControl-BSJFleLi.js";import"./error-DwsaS794.js";import"./InputButton-D_n0MlAo.js";import"./useFieldProps-BTIA5NzZ.js";import"./useFieldAriaProps-Ctj7S-QK.js";import"./Field-DJxPk6rG.js";import"./FieldLabel-CwYUiiFr.js";import"./info-DM6050LP.js";import"./InfoTooltipPrimitive-HCfeTcaQ.js";import"./HelperText-Bw9VVLAT.js";import"./Checkbox-V5fI8Yve.js";import"./List-BKWt4BD6.js";import"./useListGesture-CpxhX8BH.js";import"./Radio-CsblJSff.js";import"./show-OD0q4moC.js";import"./Message-DStVeNgc.js";import"./ProgressBar-GO4kVXd6.js";import"./entity-BOlBRSsi.js";import"./edit-PEgxvuNP.js";import"./map-d8AgHSnc.js";import"./warning-CAFk7pxH.js";import"./index-BwVBT_Aw.js";import"./SelectComposition-jF7Zv2uF.js";import"./TagGroup-CvMtNFQT.js";import"./Tag-n2PVbDmU.js";import"./TextOverflow-BrM9-ZKJ.js";import"./useHasOverflow-Bo6hxDeF.js";import"./add-phUaYqr2.js";import"./close-Bbk9t1FU.js";import"./AlertInline-CMKa7hjh.js";import"./SeverityIcon-Btk8aNwb.js";import"./FloatingWrapper-97ZbCiI4.js";function r(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Table/Docs/Rows/Row actions"}),`
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
