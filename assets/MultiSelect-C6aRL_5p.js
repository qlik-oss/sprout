import{j as e,M as r,a as i,C as c}from"./iframe-B9QkJTIx.js";import{useMDXComponents as s}from"./index-Ka0iXB8t.js";import{S as a,U as n,C as d}from"./MultiSelect.stories-cZ9SIvhU.js";import"./preload-helper-PPVm8Dsz.js";import"./icons-BGgmQIFx.js";import"./Field.argTypes-1rEre7SB.js";import"./SelectTest-yHRQ0YZL.js";import"./SelectComposition-C03WeBSC.js";import"./useControl-CYR4PP7j.js";import"./Menu-CYXlESaf.js";import"./sprout-DgR7PjaR.js";import"./classNames-CL7ibyjj.js";import"./icons-Duy9VSzr.js";import"./Divider-CQpF3Ph8.js";import"./Tooltip-Csm9nS2W.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-Dge73wkB.js";import"./useId-HR4iyljw.js";import"./list-B1zo5gaH.js";import"./NewTab-BMd_bij_.js";import"./useI18n-CoLWfcqJ.js";import"./IconButton-CrQ3EA5C.js";import"./Button-DJuasLWt.js";import"./Button.module-C2ELNEem.js";import"./Badge--_cWWvgS.js";import"./ProgressCircular-CftNoQ2F.js";import"./Skeleton-wIQNnjB0.js";import"./Error-Blwva2SQ.js";import"./InputButton-BrKvM5py.js";import"./TagGroup-h28o7ATL.js";import"./Tag-B3eV28ox.js";import"./TextOverflow-NR2fjX4A.js";import"./useHasOverflow-BYbTVzOs.js";import"./useFieldProps-YNPoJw4_.js";import"./useFieldAriaProps-B8MgKfHo.js";import"./Field-DqJdoNjO.js";import"./FieldLabel-DJkQe3UY.js";import"./Info-BWEZF-KM.js";import"./InfoTooltipPrimitive-DoWpqGGg.js";import"./Popover-GGNis2px.js";import"./HelperText-BYWuUqrF.js";import"./Add-BjVpk_Pb.js";import"./TextField-D-V1YVvE.js";import"./useValueControl-Db5KsQ4Q.js";function l(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/MultiSelect",of:a}),`
`,e.jsx(t.h1,{id:"multiselect",children:"MultiSelect"}),`
`,e.jsx(t.p,{children:"Multi select elements are UI components that let users choose multiple options from a predefined list. Commonly found in forms, they simplify selection tasks and enhance usability by presenting choices in an organized format and allowing to filter them."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Select } from "@qlik/sprout-react";

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
    <Select.Option label="Chartreuse" value="chartreuse" description="nice color btw" />
    <Select.Option label="Cornsilk" value="cornsilk" />
    <Select.Option label="Gainsboro" value="pink" />
  </Select.OptGroup>
</Select.Multi>;
`})}),`
`,e.jsxs(t.p,{children:["By default, without ",e.jsx(t.code,{children:"onChange"})," and ",e.jsx(t.code,{children:"value"}),' you are using the "Uncontrolled" version of the component.']}),`
`,e.jsx(i,{of:n}),`
`,e.jsx(c,{of:n}),`
`,e.jsx(t.h2,{id:"onchange-api",children:"onChange API"}),`
`,e.jsx(t.p,{children:"We are exposing a type inside SelectProps['ChangeEvent'] that you can use with typescript"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`onChange: (event: SelectProps['ChangeEvent']) => void;
`})}),`
`,e.jsx(t.h2,{id:"create-new-option",children:"Create new option"}),`
`,e.jsxs(t.p,{children:["The following example let the user create a new option using ",e.jsx(t.code,{children:"Select.OptionCreate"}),` component.
You must add it as the last option of the dropdown, it will appear after typing at least 2 characters.
Clicking on it both creates and selects the option.`]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(t.p,{children:"Content after refer to the most important part of the following patterns:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",rel:"nofollow",children:"W3/WAI/ARIA/APG combobox"})}),`
`]}),`
`,e.jsx(t.p,{children:"HTML structure"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["The field state is synchronized in a visually hidden HTML ",e.jsx(t.code,{children:"select"})," element with the ",e.jsx(t.code,{children:"multiple"})," attribute set which receive ",e.jsx(t.code,{children:"ref"})," and ",e.jsx(t.code,{children:"name"})," attributes."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ComboboxEditable"})," use a input type text with the role ",e.jsx(t.code,{children:"combobox"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ComboboxEditable"})," manage ",e.jsx(t.code,{children:"aria-expanded"})," to indicate the state of the popup."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Listbox"})," has the role ",e.jsx(t.code,{children:"listbox"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Option"})," has the role ",e.jsx(t.code,{children:"option"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"OptGroup"})," has the role ",e.jsx(t.code,{children:"group"})," and contains Option"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"OptGroup"})," must at least contains one Option: Dev are responsible for that"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"OptGroup"})," is not valid without the ",e.jsx(t.code,{children:"label"})," props"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Option"})," use a button tag so it rely on ",e.jsx(t.code,{children:"aria-selected"})," to indicate it's state"]}),`
`,e.jsxs(t.li,{children:["Multiple ",e.jsx(t.code,{children:"Option"})," can be selected (implied by the value using a React Context)"]}),`
`,e.jsxs(t.li,{children:["All ",e.jsx(t.code,{children:"Option"})," that are not selected but selectable have the ",e.jsx(t.code,{children:"aria-selected"})," set to false"]}),`
`]}),`
`,e.jsx(t.p,{children:"Keyboard Navigation"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ComboboxEditable"})," will keep the focus during the usage of the field."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Tab"})," will move the focus from/to the combobox or to the next tabbable elements."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Shift + Tab"})," will move the focus from/to the combobox or to the previous tabbable elements."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Tag"})," are used to display each selected option. It displays a button to remove it and they are tabbable."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ComboboxEditable"})," add ",e.jsx(t.code,{children:"aria-activedescendant"})," attribute to specify which element inside the listbox is in 'hover' state. We will use the 'focus' word here but this is not the case."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ArrowDown"}),": If the listbox is closed, it opens it with the focus on the first [selected] option."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ArrowDown"}),': If the listbox is opened, moves the "focus" to the next item.']}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ArrowUp"}),': If the listbox is opened the "focus" is moved to the previous option.']}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ArrowDown"})," and ",e.jsx(t.code,{children:"ArrowUp"})," make loop over options."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Escape"}),": Dismisses the listbox."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Enter"}),": If the combobox is editable and an autocomplete suggestion is focused in the popup, accepts the suggestion reset the filter the accepted value in the combobox."]}),`
`]})]})}function te(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(l,{...o})}):l(o)}export{te as default};
