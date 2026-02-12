import{j as e,M as m,a as i,C as o}from"./iframe-B9QkJTIx.js";import{useMDXComponents as c}from"./index-Ka0iXB8t.js";import{S as p,T as s,a as r,M as a,C as l}from"./InlineEdit.stories-E3zw1no4.js";import"./preload-helper-PPVm8Dsz.js";import"./GenerateWithAi-DIR2TiqE.js";import"./TanstackTable-D2Hm0_QA.js";import"./useI18n-CoLWfcqJ.js";import"./Button-DJuasLWt.js";import"./classNames-CL7ibyjj.js";import"./sprout-DgR7PjaR.js";import"./icons-Duy9VSzr.js";import"./Button.module-C2ELNEem.js";import"./Badge--_cWWvgS.js";import"./Tooltip-Csm9nS2W.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-Dge73wkB.js";import"./useId-HR4iyljw.js";import"./ProgressCircular-CftNoQ2F.js";import"./SortDescending-CLGWMbYc.js";import"./IconButton-CrQ3EA5C.js";import"./Menu-CYXlESaf.js";import"./useControl-CYR4PP7j.js";import"./Divider-CQpF3Ph8.js";import"./list-B1zo5gaH.js";import"./NewTab-BMd_bij_.js";import"./Skeleton-wIQNnjB0.js";import"./Checkbox-CYD4A7GS.js";import"./useValueControl-Db5KsQ4Q.js";import"./HelperText-BYWuUqrF.js";import"./InfoTooltipPrimitive-DoWpqGGg.js";import"./Info-BWEZF-KM.js";import"./List-CBxPPDGX.js";import"./useListGesture-BdSTCOqc.js";import"./Popover-GGNis2px.js";import"./TextField-D-V1YVvE.js";import"./Error-Blwva2SQ.js";import"./InputButton-BrKvM5py.js";import"./useFieldProps-YNPoJw4_.js";import"./useFieldAriaProps-B8MgKfHo.js";import"./Field-DqJdoNjO.js";import"./FieldLabel-DJkQe3UY.js";import"./Radio-BZg-I7CQ.js";import"./Message-B_naLpQf.js";import"./ProgressBar-BofdQq2I.js";import"./SelectTest-yHRQ0YZL.js";import"./SelectComposition-C03WeBSC.js";import"./TagGroup-h28o7ATL.js";import"./Tag-B3eV28ox.js";import"./TextOverflow-NR2fjX4A.js";import"./useHasOverflow-BYbTVzOs.js";import"./Add-BjVpk_Pb.js";import"./Switch-DnwVq2zF.js";import"./index-cSFa6LUu.js";import"./Close-ajP2gTu5.js";import"./Edit-BObi6k7U.js";import"./AlertInline-CTpWXRpk.js";import"./SeverityIcon-CKoJLroj.js";import"./Warning-B4wA6Xoa.js";import"./FloatingWrapper-YX7wMZJ8.js";function d(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Components/InlineEdit",of:p}),`
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
