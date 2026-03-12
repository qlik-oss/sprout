import{j as o,M as m,a as i}from"./iframe-s7Iwh0oT.js";import{useMDXComponents as n}from"./index-3LxxidSz.js";import"./ListTable.stories-B2OILioi.js";import{loading as p,NoRows as a,NoRowsOverlay as s}from"./DataTable.stories-BBk3Rj5r.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-DU4sN6ms.js";import"./useI18n-DNSc_Xzu.js";import"./Button-BLnymG9d.js";import"./classNames-BgUAGgdt.js";import"./sprout-Bvx94sbk.js";import"./Button.module-BSdpW5zV.js";import"./common-bQH3ZR03.js";import"./Badge-CjbZkwpT.js";import"./Tooltip-_uMFampe.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BoZIv2t8.js";import"./useId-C37lMSXz.js";import"./ProgressCircular-Dm76i-ei.js";import"./sort-descending-OBAQsHI9.js";import"./IconButton-zwf3qVx9.js";import"./Menu-CU8ixYLE.js";import"./useControl-CS-bltOB.js";import"./Divider-BMuu4i8A.js";import"./list-B1zo5gaH.js";import"./new-tab-WxcYfP2Y.js";import"./Skeleton-DC7wVjwf.js";import"./Popover-CD-kPJqZ.js";import"./padding-BXgzSss2.js";import"./TextField-ID03Gn3a.js";import"./useValueControl-BSJFleLi.js";import"./error-DwsaS794.js";import"./InputButton-D_n0MlAo.js";import"./useFieldProps-BTIA5NzZ.js";import"./useFieldAriaProps-Ctj7S-QK.js";import"./Field-DJxPk6rG.js";import"./FieldLabel-CwYUiiFr.js";import"./info-DM6050LP.js";import"./InfoTooltipPrimitive-HCfeTcaQ.js";import"./HelperText-Bw9VVLAT.js";import"./Checkbox-V5fI8Yve.js";import"./List-BKWt4BD6.js";import"./useListGesture-CpxhX8BH.js";import"./Radio-CsblJSff.js";import"./show-OD0q4moC.js";import"./Message-DStVeNgc.js";import"./ProgressBar-GO4kVXd6.js";import"./entity-BOlBRSsi.js";import"./edit-PEgxvuNP.js";import"./map-d8AgHSnc.js";import"./warning-CAFk7pxH.js";import"./index-BwVBT_Aw.js";import"./SelectComposition-jF7Zv2uF.js";import"./TagGroup-CvMtNFQT.js";import"./Tag-n2PVbDmU.js";import"./TextOverflow-BrM9-ZKJ.js";import"./useHasOverflow-Bo6hxDeF.js";import"./add-phUaYqr2.js";import"./close-Bbk9t1FU.js";import"./AlertInline-CMKa7hjh.js";import"./SeverityIcon-Btk8aNwb.js";import"./FloatingWrapper-97ZbCiI4.js";function e(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Table/Docs/Overlays"}),`
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
