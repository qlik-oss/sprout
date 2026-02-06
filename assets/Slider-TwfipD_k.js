import{j as e,M as d,a as i,C as l}from"./iframe-itHhOQJ8.js";import{useMDXComponents as a}from"./index-M6OOd87p.js";import{PlaygroundSingle as s,PlaygroundRange as o}from"./Slider.stories-CAtVlbCX.js";import"./preload-helper-PPVm8Dsz.js";import"./Slider-D7SogqZe.js";import"./classNames-8u_YGv6N.js";import"./sprout-5bk7oM4L.js";import"./icons-ByJhQmwX.js";import"./sprout-tokens-D9QRO1qB.js";import"./useId-B9bqBKq5.js";import"./useFieldAriaProps-DJiNiZ9_.js";import"./Field-BglQDcK_.js";import"./FieldLabel-k_vhoLHi.js";import"./useI18n-DI5kaiCu.js";import"./Info-CR8Ra2BB.js";import"./InfoTooltipPrimitive-BycnW3Wq.js";import"./Tooltip-CsCotLcm.js";import"./renderOrClone-DcDxQLMY.js";import"./Popover-D-VXifUT.js";import"./HelperText-CZI4gvqv.js";function t(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Components/Slider"}),`
`,e.jsx(n.h1,{id:"slider",children:"Slider"}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Slider } from "@qlik/sprout-react";

<Slider.Single label="Volume" min={0} max={100} step={1} value={50} />;

<Slider.Range label="Distance" min={0} max={100} step={10} value={[20, 50]} />;
`})}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ref"})," is forwarded to the root element of both ",e.jsx(n.code,{children:"Slider.Single"})," and ",e.jsx(n.code,{children:"Slider.Range"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"slidersingle",children:"Slider.Single"}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(n.h3,{id:"sliderrange",children:"Slider.Range"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h2,{id:"react-hook-form-integration",children:"React Hook Form Integration"}),`
`,e.jsxs(n.p,{children:["A live example is available ",e.jsx(n.a,{href:"/story/integration-react-hook-form--form",children:"here"}),"."]}),`
`,e.jsxs(n.p,{children:["The Slider component can be integrated with React Hook Form using the ",e.jsx(n.code,{children:"Controller"})," component to manage its state and validation. Here's an example of how to use it:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Controller, useForm } from "react-hook-form";

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
      render={({ field: { onChange, value, disabled }, fieldState: { invalid, error } }) => (
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
      render={({ field: { onChange, value, disabled }, fieldState: { invalid, error } }) => (
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
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/slider/",rel:"nofollow",children:"W3/WAI/ARIA/APG Slider"})," ",e.jsx("br",{}),`
`,e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/examples/slider-multithumb/",rel:"nofollow",children:"W3/WAI/ARIA/APG Slider Multi-Thumb Pattern"})]}),`
`,e.jsx(n.h3,{id:"html-structure",children:"HTML Structure"}),`
`,e.jsx(n.p,{children:"The slider components are built using compound components to promote reuse of shared structure and styles. The layout follows accessibility best practices:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.strong,{children:"outer wrapper"})," uses ",e.jsx(n.code,{children:'role="group"'})," and ",e.jsx(n.code,{children:"aria-labelledby"})," to associate the slider group with its visible label, allowing screen readers to announce the overall context of the control."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"Field"})," component wraps the entire slider and provides consistent handling of e.g. label, help text, error messages, and info icon tooltip. It is reused across multiple form elements, including ",e.jsx(n.a,{href:"/docs/components-textfield--docs",children:"TextField"}),"."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.strong,{children:"track"})," and ",e.jsx(n.strong,{children:"indicator"})," elements are purely visual and use ",e.jsx(n.code,{children:'role="presentation"'})," so they are ignored by assistive technologies."]}),`
`,e.jsxs(n.li,{children:["Each ",e.jsx(n.strong,{children:"grip (thumb)"})," is a styled ",e.jsx(n.code,{children:"div"})," and contains a visually hidden ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/range",rel:"nofollow",children:'input type="range" element'}),". This input enables native pointer and keyboard interaction."]}),`
`,e.jsxs(n.li,{children:["An ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/output",rel:"nofollow",children:"output element"})," is rendered alongside each grip to visually display the current value of its corresponding input. The output uses ",e.jsx(n.code,{children:'aria-live="off"'})," to prevent screen readers from announcing changes unless the grip is actively focused."]}),`
`,e.jsxs(n.li,{children:["The hidden input includes attributes like ",e.jsx(n.code,{children:"aria-valuemin"}),", ",e.jsx(n.code,{children:"aria-valuemax"}),", ",e.jsx(n.code,{children:"aria-valuenow"}),", and ",e.jsx(n.code,{children:"aria-orientation"})," to expose the value and behavior of the slider to assistive technologies."]}),`
`,e.jsxs(n.li,{children:["Each input also includes a ",e.jsx(n.code,{children:'tabindex="0"'})," attribute to ensure keyboard accessibility."]}),`
`,e.jsxs(n.li,{children:["Each grip's input uses ",e.jsx(n.code,{children:"aria-labelledby"})," to reference both the field label and its associated value label (",e.jsx(n.code,{children:"<output>"}),'), allowing screen readers to announce full context such as "Slider range, 20".']}),`
`]}),`
`,e.jsx(n.h3,{id:"keyboard-interaction",children:"Keyboard Interaction"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Right Arrow"}),": Increase the value of the slider by one step."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Up Arrow"}),": Increase the value of the slider by one step."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Left Arrow"}),": Decrease the value of the slider by one step."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Down Arrow"}),": Decrease the value of the slider by one step."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Home"}),": Set the slider to the first allowed value in its range."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"End"}),": Set the slider to the last allowed value in its range."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Page Up"}),": Increase the slider value by an amount larger than the step change made by ",e.jsx(n.code,{children:"Up/Right Arrow"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Page Down"}),": Decrease the slider value by an amount larger than the step change made by ",e.jsx(n.code,{children:"Down/Left Arrow"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"known-issues",children:"Known Issues"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Disabled state: Visual and functional support for the disabled state is not fully implemented."}),`
`,e.jsx(n.li,{children:"Value label collision: There is no design in place to handle overlapping value labels when slider thumbs are close together."}),`
`,e.jsx(n.li,{children:"Error state: Error state styling and behavior are not fully implemented."}),`
`,e.jsx(n.li,{children:"Track notch interaction: Clicking or tapping notches (e.g., at min/max) does not yet move the thumb to the corresponding value."}),`
`]})]})}function M(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{M as default};
