import{j as o,M as m,a as i}from"./iframe-CxjlquLv.js";import{useMDXComponents as n}from"./index-CopXJ1Hs.js";import"./ListTable.stories-B_hDrE_A.js";import{loading as p,NoRows as a,NoRowsOverlay as s}from"./DataTable.stories-BziaPIZM.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-VGXBNFHL.js";import"./useI18n-DzUau43H.js";import"./Button-DovarDo_.js";import"./classNames-OYhIMgh8.js";import"./sprout-BMjCkMv3.js";import"./icons-LhMznsFI.js";import"./Button.module-CmdpHks8.js";import"./Badge-CT3AYSwq.js";import"./Tooltip-BF9waJvZ.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BEoUSBug.js";import"./useId-BK-xxnhR.js";import"./ProgressCircular-54Bo0zt0.js";import"./SortDescending-mZ0sHp6G.js";import"./IconButton-Dn95SqkZ.js";import"./Menu-BRV3ljPm.js";import"./useControl-BQvv0ErP.js";import"./Divider-7ZQA3_Ws.js";import"./list-B1zo5gaH.js";import"./NewTab-thqnkD83.js";import"./Skeleton-CHWVn6Ej.js";import"./Checkbox-D56eS5Zk.js";import"./useValueControl-z08PllWD.js";import"./HelperText-CEBD_W8W.js";import"./InfoTooltipPrimitive-e-SBoNBf.js";import"./Info-CmHBCOIz.js";import"./List-BVLqhIS2.js";import"./useListGesture-anBwufDx.js";import"./Popover-D095V7L6.js";import"./TextField-B4G6cpkZ.js";import"./Error-Cwyymijo.js";import"./InputButton-DFNinxRI.js";import"./useFieldProps-Cz5SVI77.js";import"./useFieldAriaProps-D_SD2qVI.js";import"./Field-lZWJhm0y.js";import"./FieldLabel-DnVlDuiw.js";import"./Radio-D-_kQXgp.js";import"./Message-DpCaJ6e8.js";import"./ProgressBar-CX2aaVFM.js";import"./entity-Cdgo7zpI.js";import"./Edit-CBUd60Nh.js";import"./Map-BEEFfX2w.js";import"./Warning-x2bCUA0M.js";import"./index-BLW33H7p.js";import"./SelectComposition-BpZ2JkqS.js";import"./TagGroup-DuRTMnnk.js";import"./Tag-BMD7KwwB.js";import"./TextOverflow-qrd-zg5J.js";import"./useHasOverflow-BuWth_t2.js";import"./Add-DmDJ4n-J.js";import"./Close-PE5EsNbf.js";import"./AlertInline-K94GNLTd.js";import"./SeverityIcon-BEUSi72k.js";import"./FloatingWrapper-DnCS5VAc.js";function e(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Table/Docs/Overlays"}),`
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
