import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Lc6HZYGU.js";import{Fn as n,i as r,l as i,n as a,s as o}from"./iframe-RiXBydPV.js";import{t as s}from"./mdx-react-shim-Cw1WyOhr.js";import{CustomInlineEdit as c,MultiSelect as l,SelectDemo as u,TextField as d,n as f,t as p}from"./InlineEdit.stories-GXYkBw6M.js";function m(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{title:`Components/InlineEdit`,of:p}),`
`,(0,g.jsx)(n.h1,{id:`inlineedit`,children:`InlineEdit`}),`
`,(0,g.jsx)(n.p,{children:`Inline edit is a wrapper component that allows editing of content that is not in a traditional input element through the popping of a form-like UI in a popover-like UI. Use this pattern to simplify editing of simple fields.`}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-tsx`,children:`import { InlineEdit, type InlineEditProps } from "@qlik/sprout-react";
`})}),`
`,(0,g.jsx)(n.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.a,{href:`#inlineedittextfield`,children:`InlineEdit.TextField`})}),`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.a,{href:`#inlineeditselect`,children:`InlineEdit.Select`})}),`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.a,{href:`#inlineeditmultiselect`,children:`InlineEdit.MultiSelect`})}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`#inlineeditprimitive`,children:`InlineEdit.Primitive`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.a,{href:`#performance-and-usage-notes`,children:`Performance and usage notes`})}),`
`]}),`
`]}),`
`]}),`
`,(0,g.jsx)(n.hr,{}),`
`,(0,g.jsx)(n.h2,{id:`inlineedittextfield`,children:`InlineEdit.TextField`}),`
`,(0,g.jsx)(a,{of:d}),`
`,(0,g.jsx)(r,{of:d}),`
`,(0,g.jsx)(n.p,{children:`Providing onChange make the field to switch in control mode.
onSave and onCancel are helper to trigger backend API calls with the value.`}),`
`,(0,g.jsx)(n.p,{children:`If you use ref you will have the root element of the InlineEdit component so you can get your input from it.`}),`
`,(0,g.jsx)(n.h2,{id:`inlineeditselect`,children:`InlineEdit.Select`}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(r,{of:u}),`
`,(0,g.jsx)(n.h2,{id:`inlineeditmultiselect`,children:`InlineEdit.MultiSelect`}),`
`,(0,g.jsx)(a,{of:l}),`
`,(0,g.jsx)(r,{of:l}),`
`,(0,g.jsx)(n.h2,{id:`inlineeditprimitive`,children:`InlineEdit.Primitive`}),`
`,(0,g.jsx)(n.p,{children:`The primitive is meant to let you build your own InlineEdit component. It provides the basic structure and behavior of an inline edit component, allowing you to customize the content and controls as needed.`}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-tsx`,children:`import { InlineEdit, classNames } from "@qlik/sprout-react";
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
`,(0,g.jsx)(a,{of:c}),`
`,(0,g.jsx)(r,{of:c}),`
`,(0,g.jsx)(n.h3,{id:`performance-and-usage-notes`,children:`Performance and usage notes`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`InlineEdit`}),` accepts `,(0,g.jsx)(n.code,{children:`view`}),` and `,(0,g.jsx)(n.code,{children:`edit`}),` content as either a React element (`,(0,g.jsx)(n.code,{children:`JSX.Element`}),`) or a render function (`,(0,g.jsx)(n.code,{children:`() => JSX.Element`}),`). Both APIs are supported, but they have slightly different trade-offs:`]}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[`Use a `,(0,g.jsx)(n.strong,{children:`render function`}),` when the content is expensive to render, when the component is used many times (for example in tables), or when the view/edit content performs side effects (data fetching, subscriptions, etc.). The function form lets `,(0,g.jsx)(n.code,{children:`InlineEdit`}),` decide when to call the view or edit renderer so that only the active one is evaluated.`]}),`
`,(0,g.jsxs)(n.li,{children:[`Using a `,(0,g.jsx)(n.strong,{children:`pre-created React element`}),` (for example `,(0,g.jsx)(n.code,{children:`view={<MyView />}`}),`) is fine for simple, cheap content or when you already have an element instance you want to reuse.`]}),`
`]}),`
`,(0,g.jsxs)(n.p,{children:[`The `,(0,g.jsx)(n.code,{children:`react/no-unstable-nested-components`}),` rule warns when components are
defined inside another component’s render function. Defining components inside
render means they are recreated on every render and capture the parent’s
props and state. Even if you wrap them in `,(0,g.jsx)(n.code,{children:`useCallback`}),` or `,(0,g.jsx)(n.code,{children:`useMemo`}),`, their
definition still happens during the render phase and they are still considered
nested components. Keeping component definitions outside of render avoids
unnecessary work for React and reduces the risk of subtle bugs.`]}),`
`,(0,g.jsx)(n.p,{children:`This keeps components out of render functions (which satisfies the lint rule),
avoids unnecessary React work in large lists or tables, and still lets you
choose between the JSX and render-function APIs depending on your use case.`}),`
`,(0,g.jsx)(n.p,{children:`If you need to reuse a view or edit component, prefer defining it at the module
level and then using the render-function API to call it:`}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-tsx`,children:`const AiFeaturesView = ({ value }: { value: boolean }) => {
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
`})})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=n(),s(),i(),f()}))();export{h as default};