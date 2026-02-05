import{j as o,M as m,a as i}from"./iframe-B4vjk2_C.js";import{useMDXComponents as n}from"./index-4mXTpVuF.js";import"./ListTable.stories-oKZilo3k.js";import{loading as p,NoRows as a,NoRowsOverlay as s}from"./DataTable.stories-CZQOesl0.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-IrfVYjtU.js";import"./useI18n-DbSMZiRF.js";import"./Button-COVTwlCl.js";import"./classNames-DaRWzB8T.js";import"./sprout-DTAeqvbL.js";import"./icons-BjYZgjFf.js";import"./Button.module-C2ELNEem.js";import"./Badge-Coha5yr6.js";import"./Tooltip-D1n48xKC.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-D3fq_iUv.js";import"./useId-DsPr7Fl4.js";import"./ProgressCircular-CXDJvuy2.js";import"./SortDescending-B7jfx8Af.js";import"./IconButton-Ba8Tcb-S.js";import"./Menu-BL50xBAN.js";import"./useControl-DPltlHoP.js";import"./Divider-DqNucpfp.js";import"./list-B1zo5gaH.js";import"./NewTab-CGCvqCB9.js";import"./Skeleton-DGs4i03k.js";import"./Checkbox-yXCe54NU.js";import"./useValueControl-f2Qxn85g.js";import"./HelperText-B-4Si9bt.js";import"./InfoTooltipPrimitive-GcR7SVQV.js";import"./Info-qvjQZ4-p.js";import"./List-DC9jGULM.js";import"./useListGesture-ChCl8FYv.js";import"./Popover-B32coOjQ.js";import"./TextField-BIeh6d0s.js";import"./Error-aRqdswEO.js";import"./InputButton-iEaXDKyM.js";import"./useFieldProps-DJ-a4x7W.js";import"./useFieldAriaProps-7JTDckGo.js";import"./Field-C-ZgIs6T.js";import"./FieldLabel-BSgk2xJ9.js";import"./Radio-CD9AnLjJ.js";import"./Message-Cp0HRbTV.js";import"./ProgressBar-DV2vejgj.js";import"./entity-DwfCESMK.js";import"./Edit-DrJZ1rCf.js";import"./Map-CaMFTBLm.js";import"./Warning-mmXjUrwg.js";import"./index-DphJYWn8.js";import"./SelectComposition-CjxfMaHc.js";import"./TagGroup-BD8-w4Bk.js";import"./Tag-BK4gk7JG.js";import"./TextOverflow-BMs1NRzU.js";import"./useHasOverflow-D8ib81fX.js";import"./Add-CrXyYGj8.js";import"./Close-CzhTZSOO.js";import"./AlertInline-DKFV__in.js";import"./SeverityIcon-BXOn61Fa.js";import"./FloatingWrapper-FR8zykZr.js";function e(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Table/Docs/Overlays"}),`
`,o.jsx(t.h2,{id:"loading",children:"loading"}),`
`,o.jsxs(t.p,{children:["If the data are fecthed but you have the column definition you can display the Table using the ",o.jsx(t.code,{children:"loading"})," property."]}),`
`,o.jsx(i,{of:p}),`
`,o.jsxs(t.p,{children:["Loading leverage the ",o.jsx(t.code,{children:"renderCellLoading"})," if defined in the column definition."]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`{
    field: "name",
    headerName: "Name",
    flex: 1,
    renderCellLoading: () => (
      <div className={classNames("flex", "row", "gap_m")}>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </div>
    ),
  },
`})}),`
`,o.jsx(t.h2,{id:"norowsoverlay",children:"noRowsOverlay"}),`
`,o.jsxs(t.p,{children:["If no rows are passed you will have a default message. You can customize this overlay by using the property ",o.jsx(t.code,{children:"noRowsOverlay"})]}),`
`,o.jsx(i,{of:a,sourceState:"shown"}),`
`,o.jsx(i,{of:s,sourceState:"shown"})]})}function fo(r={}){const{wrapper:t}={...n(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(e,{...r})}):e(r)}export{fo as default};
