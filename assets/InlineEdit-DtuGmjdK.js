import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-B5xoaqtW.js";import{n as i}from"./lib-EjdzwnHJ.js";import"./SelectTest-ifXGrLKh.js";import"./lib-BqyORzYB.js";import{CustomInlineEdit as a,MultiSelect as o,SelectDemo as s,TextField as c,t as l}from"./InlineEdit.stories-D0cBS-kK.js";var u=e();function d(e){let d={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{title:`Components/InlineEdit`,of:l}),`
`,(0,u.jsx)(d.h1,{id:`inlineedit`,children:`InlineEdit`}),`
`,(0,u.jsx)(d.p,{children:`Inline edit is a wrapper component that allows editing of content that is not in a traditional input element through the popping of a form-like UI in a popover-like UI. Use this pattern to simplify editing of simple fields.`}),`
`,(0,u.jsx)(d.pre,{children:(0,u.jsx)(d.code,{className:`language-tsx`,children:`import { InlineEdit, type InlineEditProps } from "@qlik/sprout-react";
`})}),`
`,(0,u.jsx)(d.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,u.jsxs)(d.ul,{children:[`
`,(0,u.jsx)(d.li,{children:(0,u.jsx)(d.a,{href:`#inlineedittextfield`,children:`InlineEdit.TextField`})}),`
`,(0,u.jsx)(d.li,{children:(0,u.jsx)(d.a,{href:`#inlineeditselect`,children:`InlineEdit.Select`})}),`
`,(0,u.jsx)(d.li,{children:(0,u.jsx)(d.a,{href:`#inlineeditmultiselect`,children:`InlineEdit.MultiSelect`})}),`
`,(0,u.jsxs)(d.li,{children:[(0,u.jsx)(d.a,{href:`#inlineeditprimitive`,children:`InlineEdit.Primitive`}),`
`,(0,u.jsxs)(d.ul,{children:[`
`,(0,u.jsx)(d.li,{children:(0,u.jsx)(d.a,{href:`#performance-and-usage-notes`,children:`Performance and usage notes`})}),`
`]}),`
`]}),`
`]}),`
`,(0,u.jsx)(d.hr,{}),`
`,(0,u.jsx)(d.h2,{id:`inlineedittextfield`,children:`InlineEdit.TextField`}),`
`,(0,u.jsx)(n,{of:c}),`
`,(0,u.jsx)(t,{of:c}),`
`,(0,u.jsx)(d.p,{children:`Providing onChange make the field to switch in control mode.
onSave and onCancel are helper to trigger backend API calls with the value.`}),`
`,(0,u.jsx)(d.p,{children:`If you use ref you will have the root element of the InlineEdit component so you can get your input from it.`}),`
`,(0,u.jsx)(d.h2,{id:`inlineeditselect`,children:`InlineEdit.Select`}),`
`,(0,u.jsx)(n,{of:s}),`
`,(0,u.jsx)(t,{of:s}),`
`,(0,u.jsx)(d.h2,{id:`inlineeditmultiselect`,children:`InlineEdit.MultiSelect`}),`
`,(0,u.jsx)(n,{of:o}),`
`,(0,u.jsx)(t,{of:o}),`
`,(0,u.jsx)(d.h2,{id:`inlineeditprimitive`,children:`InlineEdit.Primitive`}),`
`,(0,u.jsx)(d.p,{children:`The primitive is meant to let you build your own InlineEdit component. It provides the basic structure and behavior of an inline edit component, allowing you to customize the content and controls as needed.`}),`
`,(0,u.jsx)(d.pre,{children:(0,u.jsx)(d.code,{className:`language-tsx`,children:`import { InlineEdit, classNames } from "@qlik/sprout-react";
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
`,(0,u.jsx)(n,{of:a}),`
`,(0,u.jsx)(t,{of:a}),`
`,(0,u.jsx)(d.h3,{id:`performance-and-usage-notes`,children:`Performance and usage notes`}),`
`,(0,u.jsxs)(d.p,{children:[(0,u.jsx)(d.code,{children:`InlineEdit`}),` accepts `,(0,u.jsx)(d.code,{children:`view`}),` and `,(0,u.jsx)(d.code,{children:`edit`}),` content as either a React element (`,(0,u.jsx)(d.code,{children:`JSX.Element`}),`) or a render function (`,(0,u.jsx)(d.code,{children:`() => JSX.Element`}),`). Both APIs are supported, but they have slightly different trade-offs:`]}),`
`,(0,u.jsxs)(d.ul,{children:[`
`,(0,u.jsxs)(d.li,{children:[`Use a `,(0,u.jsx)(d.strong,{children:`render function`}),` when the content is expensive to render, when the component is used many times (for example in tables), or when the view/edit content performs side effects (data fetching, subscriptions, etc.). The function form lets `,(0,u.jsx)(d.code,{children:`InlineEdit`}),` decide when to call the view or edit renderer so that only the active one is evaluated.`]}),`
`,(0,u.jsxs)(d.li,{children:[`Using a `,(0,u.jsx)(d.strong,{children:`pre-created React element`}),` (for example `,(0,u.jsx)(d.code,{children:`view={<MyView />}`}),`) is fine for simple, cheap content or when you already have an element instance you want to reuse.`]}),`
`]}),`
`,(0,u.jsxs)(d.p,{children:[`The `,(0,u.jsx)(d.code,{children:`react/no-unstable-nested-components`}),` rule warns when components are
defined inside another component’s render function. Defining components inside
render means they are recreated on every render and capture the parent’s
props and state. Even if you wrap them in `,(0,u.jsx)(d.code,{children:`useCallback`}),` or `,(0,u.jsx)(d.code,{children:`useMemo`}),`, their
definition still happens during the render phase and they are still considered
nested components. Keeping component definitions outside of render avoids
unnecessary work for React and reduces the risk of subtle bugs.`]}),`
`,(0,u.jsx)(d.p,{children:`This keeps components out of render functions (which satisfies the lint rule),
avoids unnecessary React work in large lists or tables, and still lets you
choose between the JSX and render-function APIs depending on your use case.`}),`
`,(0,u.jsx)(d.p,{children:`If you need to reuse a view or edit component, prefer defining it at the module
level and then using the render-function API to call it:`}),`
`,(0,u.jsx)(d.pre,{children:(0,u.jsx)(d.code,{className:`language-tsx`,children:`const AiFeaturesView = ({ value }: { value: boolean }) => {
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
`})})]})}function f(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(d,{...e})}):d(e)}export{f as default};