import{j as o,M as m,a as i}from"./iframe-BM36tKY9.js";import{useMDXComponents as n}from"./index-BCPnpXol.js";import"./ListTable.stories-Dl8ElP1F.js";import{loading as p,NoRows as a,NoRowsOverlay as s}from"./DataTable.stories-DSX7X2U-.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-DTzJl0cc.js";import"./useI18n-BRpGJeHe.js";import"./Button-wScfBKxi.js";import"./classNames-D2MVtjzd.js";import"./sprout-BcBmzfoy.js";import"./Button.module-Bn-SZyJ6.js";import"./common-bQH3ZR03.js";import"./Badge-CjLUVOBS.js";import"./Tooltip-DOknWAYm.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-lrfYqLit.js";import"./useId-Cih_zwB8.js";import"./ProgressCircular-DoqAoY81.js";import"./sort-descending-CgwSpVd_.js";import"./IconButton-DIyYlW0K.js";import"./Menu-b5Hl0xTM.js";import"./useControl-Bq0hCRWZ.js";import"./Divider-CVf_6yZu.js";import"./list-B1zo5gaH.js";import"./new-tab-CpKZypuy.js";import"./Skeleton-DwQqkdj6.js";import"./Popover-DaYy3ijw.js";import"./padding-BVrxRlLA.js";import"./TextField-xzsdu2-Y.js";import"./useValueControl-C1TwhPrN.js";import"./error-DJM79MqW.js";import"./InputButton-CEOVqhok.js";import"./useFieldProps-C0FKGzLz.js";import"./useFieldAriaProps-D-kZa2Fo.js";import"./Field-BP_0b4CU.js";import"./FieldLabel-DHI2P9wk.js";import"./info-By4pCjMF.js";import"./InfoTooltipPrimitive-B8ta45BR.js";import"./HelperText-BT_m4RdC.js";import"./Checkbox-Du9zmVCp.js";import"./List-5clCzlOh.js";import"./useListGesture-BjcVIGnC.js";import"./Radio-9eKl_Nwn.js";import"./show-C6fFsymT.js";import"./Message-BhbyFQzf.js";import"./ProgressBar-Uyun059k.js";import"./entity-CJQOLRZI.js";import"./edit-CKp5FD3E.js";import"./map-DnBNu0cY.js";import"./warning-GTpknHYS.js";import"./index-bW3DuZb5.js";import"./SelectComposition-BLwTa6RT.js";import"./TagGroup-OL8HiEl_.js";import"./Tag-Bmu-JbUV.js";import"./TextOverflow-7rHwN7fm.js";import"./useHasOverflow-BudGxDi5.js";import"./add-VKxZMCZ1.js";import"./close-CYEv2BwJ.js";import"./AlertInline-GaNDVBB-.js";import"./SeverityIcon-CnbcKgkd.js";import"./FloatingWrapper-BdIfZkqF.js";function e(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Table/Docs/Overlays"}),`
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
