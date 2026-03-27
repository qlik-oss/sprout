import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-B5xoaqtW.js";import{n as i}from"./lib-EjdzwnHJ.js";import"./SelectTest-ifXGrLKh.js";import"./icons-CsjC9TfL.js";import{CreateOption as a,UnControlled as o,t as s}from"./MultiSelect.stories-Nd-qkgig.js";var c=e();function l(e){let l={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Components/MultiSelect`,of:s}),`
`,(0,c.jsx)(l.h1,{id:`multiselect`,children:`MultiSelect`}),`
`,(0,c.jsx)(l.p,{children:`Multi select elements are UI components that let users choose multiple options from a predefined list. Commonly found in forms, they simplify selection tasks and enhance usability by presenting choices in an organized format and allowing to filter them.`}),`
`,(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:`language-tsx`,children:`import { Select } from "@qlik/sprout-react";

<Select.Multi defaultValue={["red", "orange"]} placeholder="Select a color">
  {/* This is good to have the empty value as in HTML */}
  <Select.Option value="" label="--Please choose an option--" />
  <Select.OptGroup label="Basic Colors">
    <Select.Option value="red">Red</Select.Option>
    <Select.Option value="orange">Orange</Select.Option>
    <Select.Option value="green" disabled>
      Green
    </Select.Option>
  </Select.OptGroup>
  {/* Divider in case you have multiple groups */}
  <Select.Divider />
  <Select.OptGroup label="Cool Colors">
    <Select.Option value="cyan">Cyan</Select.Option>
    <Select.Option value="purple">Purple</Select.Option>
  </Select.OptGroup>
  {/* Divider in case you have multiple groups */}
  <Select.Divider />
  {/* Simple and efficient composition */}
  <Select.OptGroup label="Deprecated Colors">
    <Select.Option
      label="Chartreuse"
      value="chartreuse"
      description="nice color btw"
    />
    <Select.Option label="Cornsilk" value="cornsilk" />
    <Select.Option label="Gainsboro" value="pink" />
  </Select.OptGroup>
</Select.Multi>;
`})}),`
`,(0,c.jsxs)(l.p,{children:[`By default, without `,(0,c.jsx)(l.code,{children:`onChange`}),` and `,(0,c.jsx)(l.code,{children:`value`}),` you are using the "Uncontrolled" version of the component.`]}),`
`,(0,c.jsx)(n,{of:o}),`
`,(0,c.jsx)(t,{of:o}),`
`,(0,c.jsx)(l.h2,{id:`onchange-api`,children:`onChange API`}),`
`,(0,c.jsx)(l.p,{children:`We are exposing a type inside SelectProps['ChangeEvent'] that you can use with typescript`}),`
`,(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:`language-tsx`,children:`onChange: (event: SelectProps['ChangeEvent']) => void;
`})}),`
`,(0,c.jsx)(l.h2,{id:`create-new-option`,children:`Create new option`}),`
`,(0,c.jsxs)(l.p,{children:[`The following example let the user create a new option using `,(0,c.jsx)(l.code,{children:`Select.OptionCreate`}),` component.
You must add it as the last option of the dropdown, it will appear after typing at least 2 characters.
Clicking on it both creates and selects the option.`]}),`
`,(0,c.jsx)(n,{of:a}),`
`,(0,c.jsx)(l.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,c.jsx)(l.p,{children:`Content after refer to the most important part of the following patterns:`}),`
`,(0,c.jsxs)(l.ul,{children:[`
`,(0,c.jsx)(l.li,{children:(0,c.jsx)(l.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/combobox/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG combobox`})}),`
`]}),`
`,(0,c.jsx)(l.p,{children:`HTML structure`}),`
`,(0,c.jsxs)(l.ul,{children:[`
`,(0,c.jsxs)(l.li,{children:[`The field state is synchronized in a visually hidden HTML `,(0,c.jsx)(l.code,{children:`select`}),` element with the `,(0,c.jsx)(l.code,{children:`multiple`}),` attribute set which receive `,(0,c.jsx)(l.code,{children:`ref`}),` and `,(0,c.jsx)(l.code,{children:`name`}),` attributes.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`ComboboxEditable`}),` use a input type text with the role `,(0,c.jsx)(l.code,{children:`combobox`}),`.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`ComboboxEditable`}),` manage `,(0,c.jsx)(l.code,{children:`aria-expanded`}),` to indicate the state of the popup.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`Listbox`}),` has the role `,(0,c.jsx)(l.code,{children:`listbox`}),`.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`Option`}),` has the role `,(0,c.jsx)(l.code,{children:`option`})]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`OptGroup`}),` has the role `,(0,c.jsx)(l.code,{children:`group`}),` and contains Option`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`OptGroup`}),` must at least contains one Option: Dev are responsible for that`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`OptGroup`}),` is not valid without the `,(0,c.jsx)(l.code,{children:`label`}),` props`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`Option`}),` use a button tag so it rely on `,(0,c.jsx)(l.code,{children:`aria-selected`}),` to indicate it's state`]}),`
`,(0,c.jsxs)(l.li,{children:[`Multiple `,(0,c.jsx)(l.code,{children:`Option`}),` can be selected (implied by the value using a React Context)`]}),`
`,(0,c.jsxs)(l.li,{children:[`All `,(0,c.jsx)(l.code,{children:`Option`}),` that are not selected but selectable have the `,(0,c.jsx)(l.code,{children:`aria-selected`}),` set to false`]}),`
`]}),`
`,(0,c.jsx)(l.p,{children:`Keyboard Navigation`}),`
`,(0,c.jsxs)(l.ul,{children:[`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`ComboboxEditable`}),` will keep the focus during the usage of the field.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`Tab`}),` will move the focus from/to the combobox or to the next tabbable elements.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`Shift + Tab`}),` will move the focus from/to the combobox or to the previous tabbable elements.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`Tag`}),` are used to display each selected option. It displays a button to remove it and they are tabbable.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`ComboboxEditable`}),` add `,(0,c.jsx)(l.code,{children:`aria-activedescendant`}),` attribute to specify which element inside the listbox is in 'hover' state. We will use the 'focus' word here but this is not the case.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`ArrowDown`}),`: If the listbox is closed, it opens it with the focus on the first [selected] option.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`ArrowDown`}),`: If the listbox is opened, moves the "focus" to the next item.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`ArrowUp`}),`: If the listbox is opened the "focus" is moved to the previous option.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`ArrowDown`}),` and `,(0,c.jsx)(l.code,{children:`ArrowUp`}),` make loop over options.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`Escape`}),`: Dismisses the listbox.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`Enter`}),`: If the combobox is editable and an autocomplete suggestion is focused in the popup, accepts the suggestion reset the filter the accepted value in the combobox.`]}),`
`]})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}export{u as default};