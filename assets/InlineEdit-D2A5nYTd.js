import{j as e,M as m,a as i,C as o}from"./iframe-B4vjk2_C.js";import{useMDXComponents as c}from"./index-4mXTpVuF.js";import{S as p,T as s,a as r,M as a,C as l}from"./InlineEdit.stories-D7L3-7Go.js";import"./preload-helper-PPVm8Dsz.js";import"./AiSparkles-Dl0R-qK2.js";import"./TanstackTable-IrfVYjtU.js";import"./useI18n-DbSMZiRF.js";import"./Button-COVTwlCl.js";import"./classNames-DaRWzB8T.js";import"./sprout-DTAeqvbL.js";import"./icons-BjYZgjFf.js";import"./Button.module-C2ELNEem.js";import"./Badge-Coha5yr6.js";import"./Tooltip-D1n48xKC.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-D3fq_iUv.js";import"./useId-DsPr7Fl4.js";import"./ProgressCircular-CXDJvuy2.js";import"./SortDescending-B7jfx8Af.js";import"./IconButton-Ba8Tcb-S.js";import"./Menu-BL50xBAN.js";import"./useControl-DPltlHoP.js";import"./Divider-DqNucpfp.js";import"./list-B1zo5gaH.js";import"./NewTab-CGCvqCB9.js";import"./Skeleton-DGs4i03k.js";import"./Checkbox-yXCe54NU.js";import"./useValueControl-f2Qxn85g.js";import"./HelperText-B-4Si9bt.js";import"./InfoTooltipPrimitive-GcR7SVQV.js";import"./Info-qvjQZ4-p.js";import"./List-DC9jGULM.js";import"./useListGesture-ChCl8FYv.js";import"./Popover-B32coOjQ.js";import"./TextField-BIeh6d0s.js";import"./Error-aRqdswEO.js";import"./InputButton-iEaXDKyM.js";import"./useFieldProps-DJ-a4x7W.js";import"./useFieldAriaProps-7JTDckGo.js";import"./Field-C-ZgIs6T.js";import"./FieldLabel-BSgk2xJ9.js";import"./Radio-CD9AnLjJ.js";import"./Message-Cp0HRbTV.js";import"./ProgressBar-DV2vejgj.js";import"./SelectTest-DHkAQ6go.js";import"./SelectComposition-CjxfMaHc.js";import"./TagGroup-BD8-w4Bk.js";import"./Tag-BK4gk7JG.js";import"./TextOverflow-BMs1NRzU.js";import"./useHasOverflow-D8ib81fX.js";import"./Add-CrXyYGj8.js";import"./Switch-R93KNTDG.js";import"./index-DphJYWn8.js";import"./Close-CzhTZSOO.js";import"./Edit-DrJZ1rCf.js";import"./AlertInline-DKFV__in.js";import"./SeverityIcon-BXOn61Fa.js";import"./Warning-mmXjUrwg.js";import"./FloatingWrapper-FR8zykZr.js";function d(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Components/InlineEdit",of:p}),`
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

export const MyCustomInlineEdit = ({ value, onChange }: MyCustomInlineEditProps) => {
  return (
    <div className={classNames("flex", "border_box", "p_xl", "w_xs", "bg_weak")}>
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
          <div className={classNames("flex", "flex-row", "gap-m", "ai-center", "text-default")}>
            <SparkleIcon className={classNames("fill-current")} />
            <div className={classNames("flex", "flex-col", "gap-m")}>
              <span className={classNames("font-label-m-emphasized", "text-default")}>{value ? "On" : "Off"}</span>
              <span className={classNames("font-label-s", "text-weak")}>AI Features</span>
            </div>
          </div>
        }
        edit={
          <div className={classNames("flex", "flex-row", "bg-default", "gap-m", "px-m", "py-xl", "ai-center")}>
            <Switch checked={value} onChange={() => onChange(!value)} label="AI Features" />
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
    <div className={classNames("flex", "flex-row", "gap-m", "ai-center", "text-default")}>
      <SparkleIcon className={classNames("fill-current")} />
      <div className={classNames("flex", "flex-col", "gap-m")}>
        <span className={classNames("font-label-m-emphasized", "text-default")}>{value ? "On" : "Off"}</span>
        <span className={classNames("font-label-s", "text-weak")}>AI Features</span>
      </div>
    </div>
  );
};

export const MyCustomInlineEdit = ({ value, onChange }: MyCustomInlineEditProps) => {
  return (
    <InlineEdit.Primitive
      onCancel={() => {
        onChange(value, "cancel");
      }}
      onSave={() => {
        // submit the value to your backend or perform any action needed
      }}
      view={() => <AiFeaturesView value={value} />}
      edit={() => <Switch checked={value} onChange={() => onChange(!value)} label="AI Features" />}
    />
  );
};
`})})]})}function je(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{je as default};
