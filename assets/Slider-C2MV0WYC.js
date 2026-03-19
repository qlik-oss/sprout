import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-URhFfzNK.js";import{n as i}from"./lib-EjdzwnHJ.js";import{PlaygroundRange as a,PlaygroundSingle as o}from"./Slider.stories-CJ4ASv2_.js";var s=e();function c(e){let c={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`Components/Slider`}),`
`,(0,s.jsx)(c.h1,{id:`slider`,children:`Slider`}),`
`,(0,s.jsx)(c.h2,{id:`usage`,children:`Usage`}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`import { Slider } from "@qlik/sprout-react";

<Slider.Single label="Volume" min={0} max={100} step={1} value={50} />;

<Slider.Range label="Distance" min={0} max={100} step={10} value={[20, 50]} />;
`})}),`
`,(0,s.jsx)(c.h2,{id:`properties`,children:`Properties`}),`
`,(0,s.jsxs)(c.blockquote,{children:[`
`,(0,s.jsxs)(c.p,{children:[`The `,(0,s.jsx)(c.code,{children:`ref`}),` is forwarded to the root element of both `,(0,s.jsx)(c.code,{children:`Slider.Single`}),` and `,(0,s.jsx)(c.code,{children:`Slider.Range`}),`.`]}),`
`]}),`
`,(0,s.jsx)(c.h3,{id:`slidersingle`,children:`Slider.Single`}),`
`,(0,s.jsx)(n,{of:o}),`
`,(0,s.jsx)(t,{of:o}),`
`,(0,s.jsx)(c.h3,{id:`sliderrange`,children:`Slider.Range`}),`
`,(0,s.jsx)(n,{of:a}),`
`,(0,s.jsx)(t,{of:a}),`
`,(0,s.jsx)(c.h2,{id:`react-hook-form-integration`,children:`React Hook Form Integration`}),`
`,(0,s.jsxs)(c.p,{children:[`A live example is available `,(0,s.jsx)(c.a,{href:`/story/integration-react-hook-form--form`,children:`here`}),`.`]}),`
`,(0,s.jsxs)(c.p,{children:[`The Slider component can be integrated with React Hook Form using the `,(0,s.jsx)(c.code,{children:`Controller`}),` component to manage its state and validation. Here's an example of how to use it:`]}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`import { Controller, useForm } from "react-hook-form";

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
`,(0,s.jsx)(c.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,s.jsxs)(c.p,{children:[(0,s.jsx)(c.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/slider/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Slider`}),` `,(0,s.jsx)(`br`,{}),`
`,(0,s.jsx)(c.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/examples/slider-multithumb/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Slider Multi-Thumb Pattern`})]}),`
`,(0,s.jsx)(c.h3,{id:`html-structure`,children:`HTML Structure`}),`
`,(0,s.jsx)(c.p,{children:`The slider components are built using compound components to promote reuse of shared structure and styles. The layout follows accessibility best practices:`}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[`The `,(0,s.jsx)(c.strong,{children:`outer wrapper`}),` uses `,(0,s.jsx)(c.code,{children:`role="group"`}),` and `,(0,s.jsx)(c.code,{children:`aria-labelledby`}),` to associate the slider group with its visible label, allowing screen readers to announce the overall context of the control.`]}),`
`,(0,s.jsxs)(c.li,{children:[`The `,(0,s.jsx)(c.code,{children:`Field`}),` component wraps the entire slider and provides consistent handling of e.g. label, help text, error messages, and info icon tooltip. It is reused across multiple form elements, including `,(0,s.jsx)(c.a,{href:`/docs/components-textfield--docs`,children:`TextField`}),`.`]}),`
`,(0,s.jsxs)(c.li,{children:[`The `,(0,s.jsx)(c.strong,{children:`track`}),` and `,(0,s.jsx)(c.strong,{children:`indicator`}),` elements are purely visual and use `,(0,s.jsx)(c.code,{children:`role="presentation"`}),` so they are ignored by assistive technologies.`]}),`
`,(0,s.jsxs)(c.li,{children:[`Each `,(0,s.jsx)(c.strong,{children:`grip (thumb)`}),` is a styled `,(0,s.jsx)(c.code,{children:`div`}),` and contains a visually hidden `,(0,s.jsx)(c.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/range`,rel:`nofollow`,children:`input type="range" element`}),`. This input enables native pointer and keyboard interaction.`]}),`
`,(0,s.jsxs)(c.li,{children:[`An `,(0,s.jsx)(c.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/output`,rel:`nofollow`,children:`output element`}),` is rendered alongside each grip to visually display the current value of its corresponding input. The output uses `,(0,s.jsx)(c.code,{children:`aria-live="off"`}),` to prevent screen readers from announcing changes unless the grip is actively focused.`]}),`
`,(0,s.jsxs)(c.li,{children:[`The hidden input includes attributes like `,(0,s.jsx)(c.code,{children:`aria-valuemin`}),`, `,(0,s.jsx)(c.code,{children:`aria-valuemax`}),`, `,(0,s.jsx)(c.code,{children:`aria-valuenow`}),`, and `,(0,s.jsx)(c.code,{children:`aria-orientation`}),` to expose the value and behavior of the slider to assistive technologies.`]}),`
`,(0,s.jsxs)(c.li,{children:[`Each input also includes a `,(0,s.jsx)(c.code,{children:`tabindex="0"`}),` attribute to ensure keyboard accessibility.`]}),`
`,(0,s.jsxs)(c.li,{children:[`Each grip's input uses `,(0,s.jsx)(c.code,{children:`aria-labelledby`}),` to reference both the field label and its associated value label (`,(0,s.jsx)(c.code,{children:`<output>`}),`), allowing screen readers to announce full context such as "Slider range, 20".`]}),`
`]}),`
`,(0,s.jsx)(c.h3,{id:`keyboard-interaction`,children:`Keyboard Interaction`}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Right Arrow`}),`: Increase the value of the slider by one step.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Up Arrow`}),`: Increase the value of the slider by one step.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Left Arrow`}),`: Decrease the value of the slider by one step.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Down Arrow`}),`: Decrease the value of the slider by one step.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Home`}),`: Set the slider to the first allowed value in its range.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`End`}),`: Set the slider to the last allowed value in its range.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Page Up`}),`: Increase the slider value by an amount larger than the step change made by `,(0,s.jsx)(c.code,{children:`Up/Right Arrow`}),`.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Page Down`}),`: Decrease the slider value by an amount larger than the step change made by `,(0,s.jsx)(c.code,{children:`Down/Left Arrow`}),`.`]}),`
`]}),`
`,(0,s.jsx)(c.h2,{id:`known-issues`,children:`Known Issues`}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsx)(c.li,{children:`Disabled state: Visual and functional support for the disabled state is not fully implemented.`}),`
`,(0,s.jsx)(c.li,{children:`Value label collision: There is no design in place to handle overlapping value labels when slider thumbs are close together.`}),`
`,(0,s.jsx)(c.li,{children:`Error state: Error state styling and behavior are not fully implemented.`}),`
`,(0,s.jsx)(c.li,{children:`Track notch interaction: Clicking or tapping notches (e.g., at min/max) does not yet move the thumb to the corresponding value.`}),`
`]})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}export{l as default};