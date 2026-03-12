import{j as e,M as m,a as i,C as o}from"./iframe-s7Iwh0oT.js";import{useMDXComponents as c}from"./index-3LxxidSz.js";import{S as p,T as s,a as r,M as a,C as l}from"./InlineEdit.stories-CFY_0AlS.js";import"./preload-helper-PPVm8Dsz.js";import"./generate-with-ai-BbRQXXpT.js";import"./TanstackTable-DU4sN6ms.js";import"./useI18n-DNSc_Xzu.js";import"./Button-BLnymG9d.js";import"./classNames-BgUAGgdt.js";import"./sprout-Bvx94sbk.js";import"./Button.module-BSdpW5zV.js";import"./common-bQH3ZR03.js";import"./Badge-CjbZkwpT.js";import"./Tooltip-_uMFampe.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BoZIv2t8.js";import"./useId-C37lMSXz.js";import"./ProgressCircular-Dm76i-ei.js";import"./sort-descending-OBAQsHI9.js";import"./IconButton-zwf3qVx9.js";import"./Menu-CU8ixYLE.js";import"./useControl-CS-bltOB.js";import"./Divider-BMuu4i8A.js";import"./list-B1zo5gaH.js";import"./new-tab-WxcYfP2Y.js";import"./Skeleton-DC7wVjwf.js";import"./Popover-CD-kPJqZ.js";import"./padding-BXgzSss2.js";import"./TextField-ID03Gn3a.js";import"./useValueControl-BSJFleLi.js";import"./error-DwsaS794.js";import"./InputButton-D_n0MlAo.js";import"./useFieldProps-BTIA5NzZ.js";import"./useFieldAriaProps-Ctj7S-QK.js";import"./Field-DJxPk6rG.js";import"./FieldLabel-CwYUiiFr.js";import"./info-DM6050LP.js";import"./InfoTooltipPrimitive-HCfeTcaQ.js";import"./HelperText-Bw9VVLAT.js";import"./Checkbox-V5fI8Yve.js";import"./List-BKWt4BD6.js";import"./useListGesture-CpxhX8BH.js";import"./Radio-CsblJSff.js";import"./show-OD0q4moC.js";import"./Message-DStVeNgc.js";import"./ProgressBar-GO4kVXd6.js";import"./SelectTest-B198ofEx.js";import"./SelectComposition-jF7Zv2uF.js";import"./TagGroup-CvMtNFQT.js";import"./Tag-n2PVbDmU.js";import"./TextOverflow-BrM9-ZKJ.js";import"./useHasOverflow-Bo6hxDeF.js";import"./add-phUaYqr2.js";import"./Switch-BE4FPb96.js";import"./index-BwVBT_Aw.js";import"./close-Bbk9t1FU.js";import"./edit-PEgxvuNP.js";import"./AlertInline-CMKa7hjh.js";import"./SeverityIcon-Btk8aNwb.js";import"./warning-CAFk7pxH.js";import"./FloatingWrapper-97ZbCiI4.js";function d(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Components/InlineEdit",of:p}),`
`,e.jsx(n.h1,{id:"inlineedit",children:"InlineEdit"}),`
`,e.jsx(n.p,{children:"Inline edit is a wrapper component that allows editing of content that is not in a traditional input element through the popping of a form-like UI in a popover-like UI. Use this pattern to simplify editing of simple fields."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { InlineEdit, type InlineEditProps } from "@qlik/sprout-react";
`})}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#inlineedittextfield",children:"InlineEdit.TextField"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#inlineeditselect",children:"InlineEdit.Select"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#inlineeditmultiselect",children:"InlineEdit.MultiSelect"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#inlineeditprimitive",children:"InlineEdit.Primitive"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#performance-and-usage-notes",children:"Performance and usage notes"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inlineedittextfield",children:"InlineEdit.TextField"}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(n.p,{children:`Providing onChange make the field to switch in control mode.
onSave and onCancel are helper to trigger backend API calls with the value.`}),`
`,e.jsx(n.p,{children:"If you use ref you will have the root element of the InlineEdit component so you can get your input from it."}),`
`,e.jsx(n.h2,{id:"inlineeditselect",children:"InlineEdit.Select"}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(n.h2,{id:"inlineeditmultiselect",children:"InlineEdit.MultiSelect"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h2,{id:"inlineeditprimitive",children:"InlineEdit.Primitive"}),`
`,e.jsx(n.p,{children:"The primitive is meant to let you build your own InlineEdit component. It provides the basic structure and behavior of an inline edit component, allowing you to customize the content and controls as needed."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { InlineEdit, classNames } from "@qlik/sprout-react";
import { SparkleIcon } from "@qlik/sprout-icons/react";

export type MyCustomInlineEditProps = {
  value: boolean;
  onChange: (newValue: boolean, reason?: "cancel") => void;
};

export const MyCustomInlineEdit = ({
  value,
  onChange,
}: MyCustomInlineEditProps) => {
  return (
    <div
      className={classNames("flex", "border_box", "p_xl", "w_xs", "bg_weak")}
    >
      <InlineEdit.Primitive
        onCancel={() => {
          // let the parent reset the initial value
          onChange(value, "cancel");
        }}
        onSave={() => {
          // submit the value to your backend or perform any action needed
        }}
        // JSX.Element API: pass pre-created elements
        view={
          <div
            className={classNames(
              "flex",
              "row",
              "gap_m",
              "ai_center",
              "text_default",
            )}
          >
            <SparkleIcon className={classNames("fill_current")} />
            <div className={classNames("flex", "col", "gap_m")}>
              <span
                className={classNames(
                  "font_label_m_emphasized",
                  "text_default",
                )}
              >
                {value ? "On" : "Off"}
              </span>
              <span className={classNames("font_label_s", "text_weak")}>
                AI Features
              </span>
            </div>
          </div>
        }
        edit={
          <div
            className={classNames(
              "flex",
              "row",
              "bg_default",
              "gap_m",
              "px_m",
              "py_xl",
              "ai_center",
            )}
          >
            <Switch
              checked={value}
              onChange={() => onChange(!value)}
              label="AI Features"
            />
          </div>
        }
      />
    </div>
  );
};
`})}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(n.h3,{id:"performance-and-usage-notes",children:"Performance and usage notes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"InlineEdit"})," accepts ",e.jsx(n.code,{children:"view"})," and ",e.jsx(n.code,{children:"edit"})," content as either a React element (",e.jsx(n.code,{children:"JSX.Element"}),") or a render function (",e.jsx(n.code,{children:"() => JSX.Element"}),"). Both APIs are supported, but they have slightly different trade-offs:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use a ",e.jsx(n.strong,{children:"render function"})," when the content is expensive to render, when the component is used many times (for example in tables), or when the view/edit content performs side effects (data fetching, subscriptions, etc.). The function form lets ",e.jsx(n.code,{children:"InlineEdit"})," decide when to call the view or edit renderer so that only the active one is evaluated."]}),`
`,e.jsxs(n.li,{children:["Using a ",e.jsx(n.strong,{children:"pre-created React element"})," (for example ",e.jsx(n.code,{children:"view={<MyView />}"}),") is fine for simple, cheap content or when you already have an element instance you want to reuse."]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"react/no-unstable-nested-components"}),` rule warns when components are
defined inside another component’s render function. Defining components inside
render means they are recreated on every render and capture the parent’s
props and state. Even if you wrap them in `,e.jsx(n.code,{children:"useCallback"})," or ",e.jsx(n.code,{children:"useMemo"}),`, their
definition still happens during the render phase and they are still considered
nested components. Keeping component definitions outside of render avoids
unnecessary work for React and reduces the risk of subtle bugs.`]}),`
`,e.jsx(n.p,{children:`This keeps components out of render functions (which satisfies the lint rule),
avoids unnecessary React work in large lists or tables, and still lets you
choose between the JSX and render-function APIs depending on your use case.`}),`
`,e.jsx(n.p,{children:`If you need to reuse a view or edit component, prefer defining it at the module
level and then using the render-function API to call it:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const AiFeaturesView = ({ value }: { value: boolean }) => {
  return (
    <div
      className={classNames(
        "flex",
        "row",
        "gap_m",
        "ai_center",
        "text_default",
      )}
    >
      <SparkleIcon className={classNames("fill_current")} />
      <div className={classNames("flex", "col", "gap_m")}>
        <span className={classNames("font_label_m_emphasized", "text_default")}>
          {value ? "On" : "Off"}
        </span>
        <span className={classNames("font_label_s", "text_weak")}>
          AI Features
        </span>
      </div>
    </div>
  );
};

export const MyCustomInlineEdit = ({
  value,
  onChange,
}: MyCustomInlineEditProps) => {
  return (
    <InlineEdit.Primitive
      onCancel={() => {
        onChange(value, "cancel");
      }}
      onSave={() => {
        // submit the value to your backend or perform any action needed
      }}
      view={() => <AiFeaturesView value={value} />}
      edit={() => (
        <Switch
          checked={value}
          onChange={() => onChange(!value)}
          label="AI Features"
        />
      )}
    />
  );
};
`})})]})}function Ie(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{Ie as default};
