import{j as o,M as m,a as i}from"./iframe-B4Gn7jRD.js";import{useMDXComponents as n}from"./index-BtGsBDbQ.js";import"./ListTable.stories-RozaXcxt.js";import{loading as p,NoRows as a,NoRowsOverlay as s}from"./DataTable.stories-CcO9dkYA.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-_Ji6gqG1.js";import"./useI18n-DOe-EdfE.js";import"./Button-DuNeVE70.js";import"./classNames-CTBLippR.js";import"./sprout-CWCWYkgH.js";import"./icons-CPBvMsVh.js";import"./Button.module-C2ELNEem.js";import"./Badge-CknI2ibL.js";import"./Tooltip-BG958zrQ.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-COCCCrf6.js";import"./useId-DXegRsHP.js";import"./ProgressCircular-C_VqfatA.js";import"./SortDescending-CucUSsiY.js";import"./IconButton-CoZ792nv.js";import"./Menu-CwfGS8df.js";import"./useControl-7TH6mjrF.js";import"./Divider-OzvHaalV.js";import"./list-B1zo5gaH.js";import"./NewTab-BFfS-RhS.js";import"./Skeleton-V0Ckz_0t.js";import"./Checkbox-CO6m99Pi.js";import"./useValueControl-_ZNYrQQF.js";import"./HelperText-BkP0Ayki.js";import"./InfoTooltipPrimitive-YcCF56yH.js";import"./Info-C0xP7z1J.js";import"./List-DOrcG2Zx.js";import"./useListGesture-C4X2DLyP.js";import"./Popover-CYDrc_g3.js";import"./TextField-BiWstluF.js";import"./Error-ClTRWykU.js";import"./InputButton-BNDgbGEz.js";import"./useFieldProps-C0qESN5d.js";import"./useFieldAriaProps-BSt-3PUW.js";import"./Field-C61xY5sZ.js";import"./FieldLabel-DN1zz7rD.js";import"./Radio-_bFiK4Av.js";import"./Message-C4NcjTp4.js";import"./ProgressBar-CCNmV5z0.js";import"./entity-CgQN8bQP.js";import"./Edit-BJvse-oo.js";import"./Map-DeFMr3_u.js";import"./Warning-BFJpCY38.js";import"./index-6u6iDVFg.js";import"./SelectComposition-KKpfvx4F.js";import"./TagGroup-D2_tvUz2.js";import"./Tag-XD_XBSO2.js";import"./TextOverflow-BcmLE7aV.js";import"./useHasOverflow-B8tWSk8V.js";import"./Add-CKNXHNSz.js";import"./Close-DbHLglso.js";import"./AlertInline-Z7PlXDfi.js";import"./SeverityIcon-CafQc9yX.js";import"./FloatingWrapper-DqyIwrdS.js";function e(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Table/Docs/Overlays"}),`
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
