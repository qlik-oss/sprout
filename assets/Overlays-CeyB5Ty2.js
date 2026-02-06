import{j as o,M as m,a as i}from"./iframe-qjjAf_pH.js";import{useMDXComponents as n}from"./index-BAT7sozL.js";import"./ListTable.stories-rCJ8u2aC.js";import{loading as p,NoRows as a,NoRowsOverlay as s}from"./DataTable.stories-CoQzY2SV.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-C1epY4k_.js";import"./useI18n-DleVkSsM.js";import"./Button-cYFf5aNk.js";import"./classNames-BVAN1ZTN.js";import"./sprout-Dvd5rbSu.js";import"./icons-5qhXnzWI.js";import"./Button.module-C2ELNEem.js";import"./Badge-CvmwyUY9.js";import"./Tooltip-DvaPb59I.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CXS0BGZe.js";import"./useId-CYaNFQmj.js";import"./ProgressCircular-BSs6AknY.js";import"./SortDescending-C3dNRiBL.js";import"./IconButton-DKYxz8uh.js";import"./Menu-C5_qGJie.js";import"./useControl-BNhHN6uq.js";import"./Divider-Cf0WguxB.js";import"./list-B1zo5gaH.js";import"./NewTab-CYZ0jhBQ.js";import"./Skeleton-BKmE9JlX.js";import"./Checkbox-Drk1Dunk.js";import"./useValueControl-CExQO3qq.js";import"./HelperText-CYjRsd29.js";import"./InfoTooltipPrimitive-CrOtV9y3.js";import"./Info-DxHQkaw3.js";import"./List-C3D7MMCm.js";import"./useListGesture-Brx4doHh.js";import"./Popover-DnFzFkcI.js";import"./TextField-CK34yAWN.js";import"./Error-BrLGh9jC.js";import"./InputButton-C0Pq6Rob.js";import"./useFieldProps-BNEikc4J.js";import"./useFieldAriaProps-7kz57GoE.js";import"./Field-Cf7Db6oK.js";import"./FieldLabel-bQ0UMnrf.js";import"./Radio-N-PXJ2J8.js";import"./Message-BZngrfl1.js";import"./ProgressBar-ChivX090.js";import"./entity-DKvlJDRY.js";import"./Edit-2pD94UJo.js";import"./Map-in9fWS3M.js";import"./Warning-CuGLZChC.js";import"./index-BkElCgI0.js";import"./SelectComposition-aqwnCHtS.js";import"./TagGroup-B7F15cvC.js";import"./Tag-CyqCz7gG.js";import"./TextOverflow-QXR0TMUv.js";import"./useHasOverflow-B98-wlZO.js";import"./Add-DSLcMkbC.js";import"./Close-Bp7FqXQR.js";import"./AlertInline-BvFLYRiR.js";import"./SeverityIcon-DTXO1k7w.js";import"./FloatingWrapper-wvjLqIRc.js";function e(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Table/Docs/Overlays"}),`
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
