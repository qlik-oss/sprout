import{j as o,M as m,a as i}from"./iframe-B4-nXs83.js";import{useMDXComponents as n}from"./index-BqykRLmO.js";import"./ListTable.stories-kkj-broB.js";import{loading as p,NoRows as a,NoRowsOverlay as s}from"./DataTable.stories-Dm938kPV.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-BNlS3oNV.js";import"./useI18n-peGtGOOS.js";import"./Button-Cv6yFaKa.js";import"./classNames-eIMwhIDK.js";import"./sprout-SOoz1jzb.js";import"./icons-DuVV-LnW.js";import"./Button.module-C2ELNEem.js";import"./Badge-DvRPOsa9.js";import"./Tooltip-BmEIvhna.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CKYJ27w7.js";import"./useId-D71ehFqY.js";import"./ProgressCircular-CVxkPa9h.js";import"./SortDescending-CKWll_c0.js";import"./IconButton-D-KEKYAI.js";import"./Menu-DW09POVa.js";import"./useControl-DdRfwf_0.js";import"./Divider-DdqecLrr.js";import"./list-B1zo5gaH.js";import"./NewTab-Bx55GzRW.js";import"./Skeleton-BsrAjAGs.js";import"./Checkbox-BZ2qRRvw.js";import"./useValueControl-CtQhivtG.js";import"./HelperText-ByCNTNQH.js";import"./InfoTooltipPrimitive-D8jVv135.js";import"./Info-DTuI-Of7.js";import"./List-h-LY_Ssu.js";import"./useListGesture-KAVHmAzT.js";import"./Popover-CS5Gu0v5.js";import"./TextField-7zXX973B.js";import"./Error-D7GK58M_.js";import"./InputButton-bRj-07Rv.js";import"./useFieldProps-BBrAaKPm.js";import"./useFieldAriaProps-Cbzvhn2j.js";import"./Field-B3vU29tm.js";import"./FieldLabel-DdZy9tvM.js";import"./Radio-Y7kBaWyP.js";import"./Message-jaCKEo0_.js";import"./ProgressBar-DdBByWnw.js";import"./entity-DyXn2hc5.js";import"./Edit-DzJTkpRk.js";import"./Map-D3Po8JT9.js";import"./Warning-BAtVE0v3.js";import"./index-Bgl3-yHM.js";import"./SelectComposition-BaT4dRxA.js";import"./TagGroup-BFI8F1G-.js";import"./Tag-CObVgYEg.js";import"./TextOverflow-dP4PdhnE.js";import"./useHasOverflow-DZlgyJuB.js";import"./Add-BPhJi-H4.js";import"./Close-BgZ1uSF_.js";import"./AlertInline-DlnHae0G.js";import"./SeverityIcon-B1n60lm3.js";import"./FloatingWrapper-Y9LgBPDf.js";function e(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Table/Docs/Overlays"}),`
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
