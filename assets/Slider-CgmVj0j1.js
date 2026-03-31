import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,i as r,l as i,n as a,s as o}from"./iframe-B0xl5hqz.js";import{t as s}from"./mdx-react-shim-C5WuC5zb.js";import{PlaygroundRange as c,PlaygroundSingle as l,t as u}from"./Slider.stories-CsRJ83fP.js";function d(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/Slider`}),`
`,(0,p.jsx)(n.h1,{id:`slider`,children:`Slider`}),`
`,(0,p.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { Slider } from "@qlik/sprout-react";

<Slider.Single label="Volume" min={0} max={100} step={1} value={50} />;

<Slider.Range label="Distance" min={0} max={100} step={10} value={[20, 50]} />;
`})}),`
`,(0,p.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,p.jsxs)(n.blockquote,{children:[`
`,(0,p.jsxs)(n.p,{children:[`The `,(0,p.jsx)(n.code,{children:`ref`}),` is forwarded to the root element of both `,(0,p.jsx)(n.code,{children:`Slider.Single`}),` and `,(0,p.jsx)(n.code,{children:`Slider.Range`}),`.`]}),`
`]}),`
`,(0,p.jsx)(n.h3,{id:`slidersingle`,children:`Slider.Single`}),`
`,(0,p.jsx)(a,{of:l}),`
`,(0,p.jsx)(r,{of:l}),`
`,(0,p.jsx)(n.h3,{id:`sliderrange`,children:`Slider.Range`}),`
`,(0,p.jsx)(a,{of:c}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`react-hook-form-integration`,children:`React Hook Form Integration`}),`
`,(0,p.jsxs)(n.p,{children:[`A live example is available `,(0,p.jsx)(n.a,{href:`/story/integration-react-hook-form--form`,children:`here`}),`.`]}),`
`,(0,p.jsxs)(n.p,{children:[`The Slider component can be integrated with React Hook Form using the `,(0,p.jsx)(n.code,{children:`Controller`}),` component to manage its state and validation. Here's an example of how to use it:`]}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { Controller, useForm } from "react-hook-form";

import { Slider } from "@qlik/sprout-react";

const { control, handleSubmit } = useForm();
const onSubmit = (data) => {
  console.log(data);
};
return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Controller
      control={control}
      name="amount"
      render={({
        field: { onChange, value, disabled },
        fieldState: { invalid, error },
      }) => (
        <Slider.Single
          value={value}
          onChange={onChange}
          disabled={disabled}
          isError={invalid}
          errorMessages={error?.message ? [error.message] : undefined}
        />
      )}
    />

    <Controller
      control={control}
      name="priceRange"
      rules={{
        validate: (value) => {
          if (!Array.isArray(value) || value.length !== 2) {
            return "Invalid range";
          }

          const [min, max] = value;
          return min !== max || "Start and end values can't be the same";
        },
      }}
      render={({
        field: { onChange, value, disabled },
        fieldState: { invalid, error },
      }) => (
        <Slider.Range
          label="Price Range"
          value={value}
          onChange={onChange}
          disabled={disabled}
          isError={invalid}
          errorMessages={error?.message ? [error.message] : undefined}
        />
      )}
    />
    <button type="submit">Submit</button>
  </form>
);
`})}),`
`,(0,p.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/slider/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Slider`}),` `,(0,p.jsx)(`br`,{}),`
`,(0,p.jsx)(n.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/examples/slider-multithumb/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Slider Multi-Thumb Pattern`})]}),`
`,(0,p.jsx)(n.h3,{id:`html-structure`,children:`HTML Structure`}),`
`,(0,p.jsx)(n.p,{children:`The slider components are built using compound components to promote reuse of shared structure and styles. The layout follows accessibility best practices:`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[`The `,(0,p.jsx)(n.strong,{children:`outer wrapper`}),` uses `,(0,p.jsx)(n.code,{children:`role="group"`}),` and `,(0,p.jsx)(n.code,{children:`aria-labelledby`}),` to associate the slider group with its visible label, allowing screen readers to announce the overall context of the control.`]}),`
`,(0,p.jsxs)(n.li,{children:[`The `,(0,p.jsx)(n.code,{children:`Field`}),` component wraps the entire slider and provides consistent handling of e.g. label, help text, error messages, and info icon tooltip. It is reused across multiple form elements, including `,(0,p.jsx)(n.a,{href:`/docs/components-textfield--docs`,children:`TextField`}),`.`]}),`
`,(0,p.jsxs)(n.li,{children:[`The `,(0,p.jsx)(n.strong,{children:`track`}),` and `,(0,p.jsx)(n.strong,{children:`indicator`}),` elements are purely visual and use `,(0,p.jsx)(n.code,{children:`role="presentation"`}),` so they are ignored by assistive technologies.`]}),`
`,(0,p.jsxs)(n.li,{children:[`Each `,(0,p.jsx)(n.strong,{children:`grip (thumb)`}),` is a styled `,(0,p.jsx)(n.code,{children:`div`}),` and contains a visually hidden `,(0,p.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/range`,rel:`nofollow`,children:`input type="range" element`}),`. This input enables native pointer and keyboard interaction.`]}),`
`,(0,p.jsxs)(n.li,{children:[`An `,(0,p.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/output`,rel:`nofollow`,children:`output element`}),` is rendered alongside each grip to visually display the current value of its corresponding input. The output uses `,(0,p.jsx)(n.code,{children:`aria-live="off"`}),` to prevent screen readers from announcing changes unless the grip is actively focused.`]}),`
`,(0,p.jsxs)(n.li,{children:[`The hidden input includes attributes like `,(0,p.jsx)(n.code,{children:`aria-valuemin`}),`, `,(0,p.jsx)(n.code,{children:`aria-valuemax`}),`, `,(0,p.jsx)(n.code,{children:`aria-valuenow`}),`, and `,(0,p.jsx)(n.code,{children:`aria-orientation`}),` to expose the value and behavior of the slider to assistive technologies.`]}),`
`,(0,p.jsxs)(n.li,{children:[`Each input also includes a `,(0,p.jsx)(n.code,{children:`tabindex="0"`}),` attribute to ensure keyboard accessibility.`]}),`
`,(0,p.jsxs)(n.li,{children:[`Each grip's input uses `,(0,p.jsx)(n.code,{children:`aria-labelledby`}),` to reference both the field label and its associated value label (`,(0,p.jsx)(n.code,{children:`<output>`}),`), allowing screen readers to announce full context such as "Slider range, 20".`]}),`
`]}),`
`,(0,p.jsx)(n.h3,{id:`keyboard-interaction`,children:`Keyboard Interaction`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Right Arrow`}),`: Increase the value of the slider by one step.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Up Arrow`}),`: Increase the value of the slider by one step.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Left Arrow`}),`: Decrease the value of the slider by one step.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Down Arrow`}),`: Decrease the value of the slider by one step.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Home`}),`: Set the slider to the first allowed value in its range.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`End`}),`: Set the slider to the last allowed value in its range.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Page Up`}),`: Increase the slider value by an amount larger than the step change made by `,(0,p.jsx)(n.code,{children:`Up/Right Arrow`}),`.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Page Down`}),`: Decrease the slider value by an amount larger than the step change made by `,(0,p.jsx)(n.code,{children:`Down/Left Arrow`}),`.`]}),`
`]}),`
`,(0,p.jsx)(n.h2,{id:`known-issues`,children:`Known Issues`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsx)(n.li,{children:`Disabled state: Visual and functional support for the disabled state is not fully implemented.`}),`
`,(0,p.jsx)(n.li,{children:`Value label collision: There is no design in place to handle overlapping value labels when slider thumbs are close together.`}),`
`,(0,p.jsx)(n.li,{children:`Error state: Error state styling and behavior are not fully implemented.`}),`
`,(0,p.jsx)(n.li,{children:`Track notch interaction: Clicking or tapping notches (e.g., at min/max) does not yet move the thumb to the corresponding value.`}),`
`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),s(),i(),u()}))();export{f as default};