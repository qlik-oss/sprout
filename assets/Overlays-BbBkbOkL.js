import{j as o,M as m,a as i}from"./iframe-BThSoDrn.js";import{useMDXComponents as n}from"./index-dxYskzg-.js";import"./ListTable.stories-CBE61jpF.js";import{loading as p,NoRows as a,NoRowsOverlay as s}from"./DataTable.stories-DPDjtHWB.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-BSsjhkNm.js";import"./useI18n-DEBX20KE.js";import"./Button-DPdoSvtR.js";import"./classNames-dIthk07I.js";import"./sprout-C7A3N88C.js";import"./icons-m7QrAy0p.js";import"./Button.module-C2ELNEem.js";import"./Badge-BD7yv9SE.js";import"./Tooltip-g36jqBzQ.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DhaNE9oh.js";import"./useId-hgAQXGHZ.js";import"./ProgressCircular-3frmJwTX.js";import"./SortDescending-DRIoVd-M.js";import"./IconButton-BNf-P6Px.js";import"./Menu-ByKPQPeJ.js";import"./useControl-BsRaFebD.js";import"./Divider-BDGjRrdZ.js";import"./list-B1zo5gaH.js";import"./NewTab-RTkCp496.js";import"./Skeleton-CGjLWnQE.js";import"./Checkbox-CwbydU-X.js";import"./useValueControl-GMse0bib.js";import"./HelperText-bJIP0f1z.js";import"./InfoTooltipPrimitive-DKXNBt4b.js";import"./Info-CD_iaTpZ.js";import"./List-DdV_35GQ.js";import"./useListGesture-DQ4w9Z6Q.js";import"./Popover-BJedhRhh.js";import"./TextField-RzgPXNoi.js";import"./Error-LWra2rFD.js";import"./InputButton-D48x7m5m.js";import"./useFieldProps-ZuqHy8WE.js";import"./useFieldAriaProps-CdXcjcjf.js";import"./Field-FhdYhdWr.js";import"./FieldLabel-Bgszjlae.js";import"./Radio-DNI0-KRY.js";import"./Message-6bQP5MEx.js";import"./ProgressBar-C7xEEuQF.js";import"./entity-DzzI86Ua.js";import"./Edit-BnWU-wtK.js";import"./Map-BSYcvYLi.js";import"./Warning-BKQeZIO5.js";import"./index-DPypwqCx.js";import"./SelectComposition-BkFtZxST.js";import"./TagGroup-vpdbOI5u.js";import"./Tag-B1yXdr4G.js";import"./TextOverflow-DOzhudw2.js";import"./useHasOverflow-ChjOj1VO.js";import"./Add-BQFdkl2e.js";import"./Close-jEAlxUHo.js";import"./AlertInline-CTeynTLS.js";import"./SeverityIcon-CDrAKmG1.js";import"./FloatingWrapper-By9slcCq.js";function e(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Table/Docs/Overlays"}),`
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
