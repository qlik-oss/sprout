import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Lc6HZYGU.js";import{Fn as n,i as r,l as i,n as a,s as o}from"./iframe-RiXBydPV.js";import{t as s}from"./mdx-react-shim-Cw1WyOhr.js";import{Searchable as c,UnControlled as l,n as u,t as d}from"./Select.stories-CrFIqKv0.js";function f(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{title:`Components/Select`,of:d}),`
`,(0,m.jsx)(n.h1,{id:`select`,children:`Select`}),`
`,(0,m.jsx)(n.p,{children:`Selects are form elements that allows a user to select an option from a list of several options.`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { Select } from "@qlik/sprout-react";

<Select.Select defaultValue="red" placeholder="Select a color" size="default">
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
  <Select.Divider />
  <Select.OptGroup label="Deprecated Colors">
    <Select.Option value="chartreuse">
      <Select.OptionStyled label="Chartreuse" description="nice color btw" />
    </Select.Option>
    <Select.Option value="cornsilk">Cornsilk</Select.Option>
    <Select.Option value="pink">Gainsboro</Select.Option>
  </Select.OptGroup>
</Select.Select>;
`})}),`
`,(0,m.jsxs)(n.p,{children:[`By default, without `,(0,m.jsx)(n.code,{children:`onChange`}),` and `,(0,m.jsx)(n.code,{children:`value`}),` you are using the "Uncontrolled" version of the component.`]}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsx)(r,{of:l}),`
`,(0,m.jsx)(n.h2,{id:`searchable-select`,children:`Searchable Select`}),`
`,(0,m.jsxs)(n.p,{children:[`By default, the Select is not searchable.
In order to make it serchable, `,(0,m.jsx)(n.code,{children:`<Select.Search />`}),` need to be passed as first child to `,(0,m.jsx)(n.code,{children:`<Select.Select>`}),`.`]}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { Select } from "@qlik/sprout-react";

<Select.Select defaultValue="red" placeholder="Select a color" size="default">
  {/* Select.Search need to be passed as first child */}
  <Select.Search />
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
</Select.Select>;
`})}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(r,{of:c}),`
`,(0,m.jsx)(n.h2,{id:`onchange-api`,children:`onChange API`}),`
`,(0,m.jsx)(n.p,{children:`We are exposing a type inside SelectProps['ChangeEvent'] that you can use with typescript`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`onChange: (event: SelectProps['ChangeEvent']) => void;
`})}),`
`,(0,m.jsx)(n.h2,{id:`manage-overflow`,children:`Manage overflow`}),`
`,(0,m.jsxs)(n.p,{children:[`By default the max-width of the listbox is `,(0,m.jsx)(n.code,{children:`--sprout-container-sizing-m`}),` but you can change it by using the `,(0,m.jsx)(n.code,{children:`maxWidth`}),` prop.
For example it is pretty common to use maxWidth="reference" so it match the combobox.`]}),`
`,(0,m.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsx)(n.p,{children:`Content after refer to the most important part of the following patterns:`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsx)(n.li,{children:(0,m.jsx)(n.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/combobox/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG combobox`})}),`
`]}),`
`,(0,m.jsx)(n.p,{children:`HTML structure`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Combobox`}),` use a button with the role `,(0,m.jsx)(n.code,{children:`combobox`}),`.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Combobox`}),` require `,(0,m.jsx)(n.code,{children:`aria-controls`}),` to be set.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Combobox`}),` manage `,(0,m.jsx)(n.code,{children:`aria-expanded`}),` to indicate the state of the popup.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Listbox`}),` has the role `,(0,m.jsx)(n.code,{children:`listbox`}),`.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Option`}),` has the role `,(0,m.jsx)(n.code,{children:`option`})]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`OptGroup`}),` has the role `,(0,m.jsx)(n.code,{children:`group`}),` and contains Option`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`OptGroup`}),` must at least contains one Option: Dev are responsible for that`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`OptGroup`}),` is not valid without the `,(0,m.jsx)(n.code,{children:`label`}),` props`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Option`}),` use a button tag so it rely on `,(0,m.jsx)(n.code,{children:`aria-selected`}),` to indicate it's state`]}),`
`,(0,m.jsxs)(n.li,{children:[`Only one `,(0,m.jsx)(n.code,{children:`Option`}),` can be selected (implied by the value using a React Context)`]}),`
`,(0,m.jsxs)(n.li,{children:[`All `,(0,m.jsx)(n.code,{children:`Option`}),` that are not selected but selectable have the `,(0,m.jsx)(n.code,{children:`aria-selected`}),` set to false`]}),`
`]}),`
`,(0,m.jsx)(n.p,{children:`Keyboard Navigation`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Combobox`}),` keep the focus. The component has the `,(0,m.jsx)(n.code,{children:`aria-activedescendant`}),` attribute to specify which element inside the listbox is in 'hover'. We will use the 'focus' word here but this is not the case.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`ArrowDown`}),`: If the listbox is closed, it becomes open with the focus on the first [selected] option.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`ArrowDown`}),`: If the listbox is opened, moves the "focus" to the next item.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`ArrowUp`}),`: If the listbox is opened the "focus" is moved to the previous option.`]}),`
`,(0,m.jsx)(n.li,{children:`Loop over options is activated.`}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Escape`}),`: Dismisses the listbox. Optionally, if the popup is hidden before Escape is pressed, clears the combobox.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Enter`}),`: If the combobox is editable and an autocomplete suggestion is selected in the popup, accepts the suggestion either by placing the input cursor at the end of the accepted value in the combobox or by performing a default action on the value.`]}),`
`,(0,m.jsx)(n.li,{children:`TODO: Printable Characters should moves focus to a value that starts with the typed characters.`}),`
`]}),`
`,(0,m.jsx)(n.p,{children:`Searchable select`}),`
`,(0,m.jsx)(n.p,{children:`Search input is displayed at the top of popover, and, the search input should be focused when opening the popover.
So, real focus will be kept on search input, and when navigating using keyboard, items will be visually focused using hover state.
Keyboard navigation works the same as for none searchable select.`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{})})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=n(),s(),i(),u()}))();export{p as default};