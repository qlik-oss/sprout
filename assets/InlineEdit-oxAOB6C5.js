import{j as e,M as m,a as i,C as o}from"./iframe-DuYosUFD.js";import{useMDXComponents as c}from"./index-6fjbDpXn.js";import{S as p,T as s,a as r,M as a,C as l}from"./InlineEdit.stories-ByY1GjCP.js";import"./preload-helper-PPVm8Dsz.js";import"./generate-with-ai-DxZm9B-P.js";import"./TanstackTable-fpvLVI4M.js";import"./useI18n-BjJPdLTM.js";import"./Button-DI0ZynHS.js";import"./classNames-zePBlFY_.js";import"./sprout-CvRh1TM0.js";import"./Button.module-D6kzoXVn.js";import"./common-bQH3ZR03.js";import"./Badge-CPj7NTO4.js";import"./Tooltip-BJFaRrUy.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-DjHAObcc.js";import"./useId-DRaip_NL.js";import"./ProgressCircular-BvkbtoQi.js";import"./sort-descending-BgZWkgGz.js";import"./IconButton-BE9E_AnQ.js";import"./Menu-D_Niw5ai.js";import"./useControl-DOCWDNqa.js";import"./Divider-DVRuu_FL.js";import"./list-B1zo5gaH.js";import"./new-tab-Dp-d2eWd.js";import"./Skeleton-R2z-cDq5.js";import"./Popover-D-qbv7RV.js";import"./padding-BWxXYvmb.js";import"./TextField-DnT8J57g.js";import"./useValueControl-uslnr95T.js";import"./error-CXY2goRU.js";import"./InputButton-CpK-Hq67.js";import"./useFieldProps-BwY4Fxzy.js";import"./useFieldAriaProps-oaAu_ksb.js";import"./Field-MvuQg19v.js";import"./FieldLabel-BP167ITs.js";import"./info-Bxa3p2DF.js";import"./InfoTooltipPrimitive-D-yTz8eW.js";import"./HelperText-6attHadj.js";import"./Checkbox-4-pENTYN.js";import"./List-C-OREM0u.js";import"./useListGesture-EJR-Hpo1.js";import"./Radio-BsibNaRm.js";import"./show-Gqxo-URH.js";import"./Message-3Vh_XQrE.js";import"./ProgressBar-DUKTXS9W.js";import"./SelectTest-CIaFLujX.js";import"./SelectComposition-eEorCX1T.js";import"./TagGroup-CaR5HQlD.js";import"./Tag-DpwdOoAU.js";import"./TextOverflow-DsMnN-5j.js";import"./useHasOverflow-BuHjGHjQ.js";import"./add-Vg2U0mSE.js";import"./Switch-_kSyTfKE.js";import"./index-AUjBO46D.js";import"./close-Dyzj91Dc.js";import"./edit-DeXKaZx5.js";import"./AlertInline-BNeWuwr2.js";import"./SeverityIcon-DSoo49L9.js";import"./warning-DO6AU_ml.js";import"./FloatingWrapper-BYrVCp-F.js";function d(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Components/InlineEdit",of:p}),`
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
