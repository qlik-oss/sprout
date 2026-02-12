import{j as n,M as s,a as t}from"./iframe-B4Gn7jRD.js";import{useMDXComponents as i}from"./index-BtGsBDbQ.js";import{RowActions as c,LazyRowActions as m}from"./ListTable.stories-RozaXcxt.js";import"./DataTable.stories-CcO9dkYA.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-_Ji6gqG1.js";import"./useI18n-DOe-EdfE.js";import"./Button-DuNeVE70.js";import"./classNames-CTBLippR.js";import"./sprout-CWCWYkgH.js";import"./icons-CPBvMsVh.js";import"./Button.module-C2ELNEem.js";import"./Badge-CknI2ibL.js";import"./Tooltip-BG958zrQ.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-COCCCrf6.js";import"./useId-DXegRsHP.js";import"./ProgressCircular-C_VqfatA.js";import"./SortDescending-CucUSsiY.js";import"./IconButton-CoZ792nv.js";import"./Menu-CwfGS8df.js";import"./useControl-7TH6mjrF.js";import"./Divider-OzvHaalV.js";import"./list-B1zo5gaH.js";import"./NewTab-BFfS-RhS.js";import"./Skeleton-V0Ckz_0t.js";import"./Checkbox-CO6m99Pi.js";import"./useValueControl-_ZNYrQQF.js";import"./HelperText-BkP0Ayki.js";import"./InfoTooltipPrimitive-YcCF56yH.js";import"./Info-C0xP7z1J.js";import"./List-DOrcG2Zx.js";import"./useListGesture-C4X2DLyP.js";import"./Popover-CYDrc_g3.js";import"./TextField-BiWstluF.js";import"./Error-ClTRWykU.js";import"./InputButton-BNDgbGEz.js";import"./useFieldProps-C0qESN5d.js";import"./useFieldAriaProps-BSt-3PUW.js";import"./Field-C61xY5sZ.js";import"./FieldLabel-DN1zz7rD.js";import"./Radio-_bFiK4Av.js";import"./Message-C4NcjTp4.js";import"./ProgressBar-CCNmV5z0.js";import"./entity-CgQN8bQP.js";import"./Edit-BJvse-oo.js";import"./Map-DeFMr3_u.js";import"./Warning-BFJpCY38.js";import"./index-6u6iDVFg.js";import"./SelectComposition-KKpfvx4F.js";import"./TagGroup-D2_tvUz2.js";import"./Tag-XD_XBSO2.js";import"./TextOverflow-BcmLE7aV.js";import"./useHasOverflow-B8tWSk8V.js";import"./Add-CKNXHNSz.js";import"./Close-DbHLglso.js";import"./AlertInline-Z7PlXDfi.js";import"./SeverityIcon-CafQc9yX.js";import"./FloatingWrapper-DqyIwrdS.js";function r(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Table/Docs/Rows/Row actions"}),`
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
