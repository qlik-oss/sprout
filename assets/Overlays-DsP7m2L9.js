import{j as o,M as m,a as i}from"./iframe-BQJExRCF.js";import{useMDXComponents as n}from"./index-BiT2RrsF.js";import"./ListTable.stories-DkXQI7dE.js";import{loading as p,NoRows as a,NoRowsOverlay as s}from"./DataTable.stories-BfdWdzUH.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-Bs1NmEfZ.js";import"./useI18n-B99T9obj.js";import"./Button-C7-D-GN_.js";import"./classNames-B0wfWtWT.js";import"./sprout-DxA14K3u.js";import"./icons-CzMI2h-K.js";import"./Button.module-C2ELNEem.js";import"./Badge-B9--3FkB.js";import"./Tooltip-CVFOQrqK.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DAgGzV0n.js";import"./useId-Drz8gmS2.js";import"./ProgressCircular-B4mHH4_Y.js";import"./SortDescending-BWpZ9BF7.js";import"./IconButton-BEI3RZpW.js";import"./Menu-D_upy4ds.js";import"./useControl-XJuj1vyK.js";import"./Divider-Byw016rg.js";import"./list-B1zo5gaH.js";import"./NewTab-BMHt_Vx2.js";import"./Skeleton-C323E7Fo.js";import"./Checkbox-DxL7CNq4.js";import"./useValueControl-CRzMHMlu.js";import"./HelperText-CWubgWiG.js";import"./InfoTooltipPrimitive-BqPdPqRN.js";import"./Info-BfRROe8g.js";import"./List-BPN2kntc.js";import"./useListGesture-B8rp38Ns.js";import"./Popover-CTsqc6Mc.js";import"./TextField-C-5GsH-r.js";import"./Error-B95qseKK.js";import"./InputButton-CeEVJl7G.js";import"./useFieldProps-C0xARZ1e.js";import"./useFieldAriaProps-DaZEG-MV.js";import"./Field-BIldF_Al.js";import"./FieldLabel-BWOyYL3A.js";import"./Radio-CIqNDp5q.js";import"./Message-C0IrDS9-.js";import"./ProgressBar-LweF-ALg.js";import"./entity-CKGoLZWv.js";import"./Edit-Bc7r3LZJ.js";import"./Map-pFYOI1fT.js";import"./Warning-BB_ZpJQH.js";import"./index-BFgiYBXq.js";import"./SelectComposition-cKAmPh1H.js";import"./TagGroup-BsZ4uWAl.js";import"./Tag-DLmRXsBI.js";import"./TextOverflow-D_EYc0DY.js";import"./useHasOverflow-o-wZv5E2.js";import"./Add-CPO6AOva.js";import"./Close-VT6FC74F.js";import"./AlertInline-DLvQ03s1.js";import"./SeverityIcon-CI0epH8x.js";import"./FloatingWrapper-DTdVRmL6.js";function e(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Table/Docs/Overlays"}),`
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
