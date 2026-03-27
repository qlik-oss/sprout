import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Lc6HZYGU.js";import{Fn as n,i as r,l as i,n as a,s as o}from"./iframe-RiXBydPV.js";import{t as s}from"./mdx-react-shim-Cw1WyOhr.js";import{CreateOption as c,UnControlled as l,n as u,t as d}from"./MultiSelect.stories-2JBdiUNj.js";function f(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{title:`Components/MultiSelect`,of:d}),`
`,(0,m.jsx)(n.h1,{id:`multiselect`,children:`MultiSelect`}),`
`,(0,m.jsx)(n.p,{children:`Multi select elements are UI components that let users choose multiple options from a predefined list. Commonly found in forms, they simplify selection tasks and enhance usability by presenting choices in an organized format and allowing to filter them.`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { Select } from "@qlik/sprout-react";

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
`,(0,m.jsxs)(n.p,{children:[`By default, without `,(0,m.jsx)(n.code,{children:`onChange`}),` and `,(0,m.jsx)(n.code,{children:`value`}),` you are using the "Uncontrolled" version of the component.`]}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsx)(r,{of:l}),`
`,(0,m.jsx)(n.h2,{id:`onchange-api`,children:`onChange API`}),`
`,(0,m.jsx)(n.p,{children:`We are exposing a type inside SelectProps['ChangeEvent'] that you can use with typescript`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`onChange: (event: SelectProps['ChangeEvent']) => void;
`})}),`
`,(0,m.jsx)(n.h2,{id:`create-new-option`,children:`Create new option`}),`
`,(0,m.jsxs)(n.p,{children:[`The following example let the user create a new option using `,(0,m.jsx)(n.code,{children:`Select.OptionCreate`}),` component.
You must add it as the last option of the dropdown, it will appear after typing at least 2 characters.
Clicking on it both creates and selects the option.`]}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsx)(n.p,{children:`Content after refer to the most important part of the following patterns:`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsx)(n.li,{children:(0,m.jsx)(n.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/combobox/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG combobox`})}),`
`]}),`
`,(0,m.jsx)(n.p,{children:`HTML structure`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsxs)(n.li,{children:[`The field state is synchronized in a visually hidden HTML `,(0,m.jsx)(n.code,{children:`select`}),` element with the `,(0,m.jsx)(n.code,{children:`multiple`}),` attribute set which receive `,(0,m.jsx)(n.code,{children:`ref`}),` and `,(0,m.jsx)(n.code,{children:`name`}),` attributes.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`ComboboxEditable`}),` use a input type text with the role `,(0,m.jsx)(n.code,{children:`combobox`}),`.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`ComboboxEditable`}),` manage `,(0,m.jsx)(n.code,{children:`aria-expanded`}),` to indicate the state of the popup.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Listbox`}),` has the role `,(0,m.jsx)(n.code,{children:`listbox`}),`.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Option`}),` has the role `,(0,m.jsx)(n.code,{children:`option`})]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`OptGroup`}),` has the role `,(0,m.jsx)(n.code,{children:`group`}),` and contains Option`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`OptGroup`}),` must at least contains one Option: Dev are responsible for that`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`OptGroup`}),` is not valid without the `,(0,m.jsx)(n.code,{children:`label`}),` props`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Option`}),` use a button tag so it rely on `,(0,m.jsx)(n.code,{children:`aria-selected`}),` to indicate it's state`]}),`
`,(0,m.jsxs)(n.li,{children:[`Multiple `,(0,m.jsx)(n.code,{children:`Option`}),` can be selected (implied by the value using a React Context)`]}),`
`,(0,m.jsxs)(n.li,{children:[`All `,(0,m.jsx)(n.code,{children:`Option`}),` that are not selected but selectable have the `,(0,m.jsx)(n.code,{children:`aria-selected`}),` set to false`]}),`
`]}),`
`,(0,m.jsx)(n.p,{children:`Keyboard Navigation`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`ComboboxEditable`}),` will keep the focus during the usage of the field.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Tab`}),` will move the focus from/to the combobox or to the next tabbable elements.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Shift + Tab`}),` will move the focus from/to the combobox or to the previous tabbable elements.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Tag`}),` are used to display each selected option. It displays a button to remove it and they are tabbable.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`ComboboxEditable`}),` add `,(0,m.jsx)(n.code,{children:`aria-activedescendant`}),` attribute to specify which element inside the listbox is in 'hover' state. We will use the 'focus' word here but this is not the case.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`ArrowDown`}),`: If the listbox is closed, it opens it with the focus on the first [selected] option.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`ArrowDown`}),`: If the listbox is opened, moves the "focus" to the next item.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`ArrowUp`}),`: If the listbox is opened the "focus" is moved to the previous option.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`ArrowDown`}),` and `,(0,m.jsx)(n.code,{children:`ArrowUp`}),` make loop over options.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Escape`}),`: Dismisses the listbox.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Enter`}),`: If the combobox is editable and an autocomplete suggestion is focused in the popup, accepts the suggestion reset the filter the accepted value in the combobox.`]}),`
`]})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=n(),s(),i(),u()}))();export{p as default};