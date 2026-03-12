import{j as o,M as m,a as i}from"./iframe-DuYosUFD.js";import{useMDXComponents as n}from"./index-6fjbDpXn.js";import"./ListTable.stories-CBatvAVB.js";import{loading as p,NoRows as a,NoRowsOverlay as s}from"./DataTable.stories-C8Hrr7uJ.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-fpvLVI4M.js";import"./useI18n-BjJPdLTM.js";import"./Button-DI0ZynHS.js";import"./classNames-zePBlFY_.js";import"./sprout-CvRh1TM0.js";import"./Button.module-D6kzoXVn.js";import"./common-bQH3ZR03.js";import"./Badge-CPj7NTO4.js";import"./Tooltip-BJFaRrUy.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-DjHAObcc.js";import"./useId-DRaip_NL.js";import"./ProgressCircular-BvkbtoQi.js";import"./sort-descending-BgZWkgGz.js";import"./IconButton-BE9E_AnQ.js";import"./Menu-D_Niw5ai.js";import"./useControl-DOCWDNqa.js";import"./Divider-DVRuu_FL.js";import"./list-B1zo5gaH.js";import"./new-tab-Dp-d2eWd.js";import"./Skeleton-R2z-cDq5.js";import"./Popover-D-qbv7RV.js";import"./padding-BWxXYvmb.js";import"./TextField-DnT8J57g.js";import"./useValueControl-uslnr95T.js";import"./error-CXY2goRU.js";import"./InputButton-CpK-Hq67.js";import"./useFieldProps-BwY4Fxzy.js";import"./useFieldAriaProps-oaAu_ksb.js";import"./Field-MvuQg19v.js";import"./FieldLabel-BP167ITs.js";import"./info-Bxa3p2DF.js";import"./InfoTooltipPrimitive-D-yTz8eW.js";import"./HelperText-6attHadj.js";import"./Checkbox-4-pENTYN.js";import"./List-C-OREM0u.js";import"./useListGesture-EJR-Hpo1.js";import"./Radio-BsibNaRm.js";import"./show-Gqxo-URH.js";import"./Message-3Vh_XQrE.js";import"./ProgressBar-DUKTXS9W.js";import"./entity-BVuadDIQ.js";import"./edit-DeXKaZx5.js";import"./map-Be-Ow4bt.js";import"./warning-DO6AU_ml.js";import"./index-AUjBO46D.js";import"./SelectComposition-eEorCX1T.js";import"./TagGroup-CaR5HQlD.js";import"./Tag-DpwdOoAU.js";import"./TextOverflow-DsMnN-5j.js";import"./useHasOverflow-BuHjGHjQ.js";import"./add-Vg2U0mSE.js";import"./close-Dyzj91Dc.js";import"./AlertInline-BNeWuwr2.js";import"./SeverityIcon-DSoo49L9.js";import"./FloatingWrapper-BYrVCp-F.js";function e(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Table/Docs/Overlays"}),`
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
`,o.jsx(i,{of:s,sourceState:"shown"})]})}function go(r={}){const{wrapper:t}={...n(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(e,{...r})}):e(r)}export{go as default};
