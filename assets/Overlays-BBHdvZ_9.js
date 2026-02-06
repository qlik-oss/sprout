import{j as o,M as m,a as i}from"./iframe-itHhOQJ8.js";import{useMDXComponents as n}from"./index-M6OOd87p.js";import"./ListTable.stories-CLM8UbSS.js";import{loading as p,NoRows as a,NoRowsOverlay as s}from"./DataTable.stories-sFbIX5nK.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-Df5yoS2C.js";import"./useI18n-DI5kaiCu.js";import"./Button-D1L5V1zp.js";import"./classNames-8u_YGv6N.js";import"./sprout-5bk7oM4L.js";import"./icons-ByJhQmwX.js";import"./Button.module-C2ELNEem.js";import"./Badge-Fno8cZv5.js";import"./Tooltip-CsCotLcm.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DcDxQLMY.js";import"./useId-B9bqBKq5.js";import"./ProgressCircular-DxTh7cF9.js";import"./SortDescending-BgGAHRpl.js";import"./IconButton-BFY56UPS.js";import"./Menu-BI017uJL.js";import"./useControl-tJx49zVQ.js";import"./Divider-Z7gRZlXH.js";import"./list-B1zo5gaH.js";import"./NewTab-CD_BiguK.js";import"./Skeleton-skQ_3lbg.js";import"./Checkbox-CJQPTyqO.js";import"./useValueControl-BoLujgBt.js";import"./HelperText-CZI4gvqv.js";import"./InfoTooltipPrimitive-BycnW3Wq.js";import"./Info-CR8Ra2BB.js";import"./List-BO2nz2p3.js";import"./useListGesture-BaRYVpJg.js";import"./Popover-D-VXifUT.js";import"./TextField-CrzVSwY1.js";import"./Error-CgMRcq7x.js";import"./InputButton-CobW-7UY.js";import"./useFieldProps-ZapC1bKU.js";import"./useFieldAriaProps-DJiNiZ9_.js";import"./Field-BglQDcK_.js";import"./FieldLabel-k_vhoLHi.js";import"./Radio-BuXCyg8H.js";import"./Message-Bc7eA00P.js";import"./ProgressBar-BYafVDdP.js";import"./entity-D0L1HH-P.js";import"./Edit-C4Gy6c5s.js";import"./Map-BgJ3dtI2.js";import"./Warning-Wt3nbj6y.js";import"./index-BKJVDtV4.js";import"./SelectComposition-1S4bJavw.js";import"./TagGroup-B35wMlua.js";import"./Tag-D6Whh4y4.js";import"./TextOverflow-ZR1lg4UG.js";import"./useHasOverflow-BPrWXac9.js";import"./Add-sGTd4JLT.js";import"./Close-DeQxVhkZ.js";import"./AlertInline-v7KfNwSs.js";import"./SeverityIcon-B8lRHlGc.js";import"./FloatingWrapper-CvOMWb5A.js";function e(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Table/Docs/Overlays"}),`
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
