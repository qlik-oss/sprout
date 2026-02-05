import{j as e,M as a,a as n,C as i}from"./iframe-BThSoDrn.js";import{useMDXComponents as c}from"./index-dxYskzg-.js";import{S as p,U as l,a as s}from"./Select.stories-DllQl-_y.js";import"./preload-helper-PPVm8Dsz.js";import"./Text-6G8hA-h1.js";import"./icons-VT9Nujk7.js";import"./Field.argTypes-1rEre7SB.js";import"./SelectTest-BrLwEsNg.js";import"./SelectComposition-BkFtZxST.js";import"./useControl-BsRaFebD.js";import"./Menu-ByKPQPeJ.js";import"./sprout-C7A3N88C.js";import"./classNames-dIthk07I.js";import"./icons-m7QrAy0p.js";import"./Divider-BDGjRrdZ.js";import"./Tooltip-g36jqBzQ.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DhaNE9oh.js";import"./useId-hgAQXGHZ.js";import"./list-B1zo5gaH.js";import"./NewTab-RTkCp496.js";import"./useI18n-DEBX20KE.js";import"./IconButton-BNf-P6Px.js";import"./Button-DPdoSvtR.js";import"./Button.module-C2ELNEem.js";import"./Badge-BD7yv9SE.js";import"./ProgressCircular-3frmJwTX.js";import"./Skeleton-CGjLWnQE.js";import"./Error-LWra2rFD.js";import"./InputButton-D48x7m5m.js";import"./TagGroup-vpdbOI5u.js";import"./Tag-B1yXdr4G.js";import"./TextOverflow-DOzhudw2.js";import"./useHasOverflow-ChjOj1VO.js";import"./useFieldProps-ZuqHy8WE.js";import"./useFieldAriaProps-CdXcjcjf.js";import"./Field-FhdYhdWr.js";import"./FieldLabel-Bgszjlae.js";import"./Info-CD_iaTpZ.js";import"./InfoTooltipPrimitive-DKXNBt4b.js";import"./Popover-BJedhRhh.js";import"./HelperText-bJIP0f1z.js";import"./Add-BQFdkl2e.js";import"./TextField-RzgPXNoi.js";import"./useValueControl-GMse0bib.js";function r(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/Select",of:p}),`
`,e.jsx(t.h1,{id:"select",children:"Select"}),`
`,e.jsx(t.p,{children:"Selects are form elements that allows a user to select an option from a list of several options."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Select } from "@qlik/sprout-react";

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
`,e.jsxs(t.p,{children:["By default, without ",e.jsx(t.code,{children:"onChange"})," and ",e.jsx(t.code,{children:"value"}),' you are using the "Uncontrolled" version of the component.']}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(t.h2,{id:"searchable-select",children:"Searchable Select"}),`
`,e.jsxs(t.p,{children:[`By default, the Select is not searchable.
In order to make it serchable, `,e.jsx(t.code,{children:"<Select.Search />"})," need to be passed as first child to ",e.jsx(t.code,{children:"<Select.Select>"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Select } from "@qlik/sprout-react";

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
`,e.jsx(n,{of:s}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(t.h2,{id:"onchange-api",children:"onChange API"}),`
`,e.jsx(t.p,{children:"We are exposing a type inside SelectProps['ChangeEvent'] that you can use with typescript"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`onChange: (event: SelectProps['ChangeEvent']) => void;
`})}),`
`,e.jsx(t.h2,{id:"manage-overflow",children:"Manage overflow"}),`
`,e.jsxs(t.p,{children:["By default the max-width of the listbox is ",e.jsx(t.code,{children:"--sprout-container-sizing-m"})," but you can change it by using the ",e.jsx(t.code,{children:"maxWidth"}),` prop.
For example it is pretty common to use maxWidth="reference" so it match the combobox.`]}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(t.p,{children:"Content after refer to the most important part of the following patterns:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",rel:"nofollow",children:"W3/WAI/ARIA/APG combobox"})}),`
`]}),`
`,e.jsx(t.p,{children:"HTML structure"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Combobox"})," use a button with the role ",e.jsx(t.code,{children:"combobox"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Combobox"})," require ",e.jsx(t.code,{children:"aria-controls"})," to be set."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Combobox"})," manage ",e.jsx(t.code,{children:"aria-expanded"})," to indicate the state of the popup."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Listbox"})," has the role ",e.jsx(t.code,{children:"listbox"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Option"})," has the role ",e.jsx(t.code,{children:"option"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"OptGroup"})," has the role ",e.jsx(t.code,{children:"group"})," and contains Option"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"OptGroup"})," must at least contains one Option: Dev are responsible for that"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"OptGroup"})," is not valid without the ",e.jsx(t.code,{children:"label"})," props"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Option"})," use a button tag so it rely on ",e.jsx(t.code,{children:"aria-selected"})," to indicate it's state"]}),`
`,e.jsxs(t.li,{children:["Only one ",e.jsx(t.code,{children:"Option"})," can be selected (implied by the value using a React Context)"]}),`
`,e.jsxs(t.li,{children:["All ",e.jsx(t.code,{children:"Option"})," that are not selected but selectable have the ",e.jsx(t.code,{children:"aria-selected"})," set to false"]}),`
`]}),`
`,e.jsx(t.p,{children:"Keyboard Navigation"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Combobox"})," keep the focus. The component has the ",e.jsx(t.code,{children:"aria-activedescendant"})," attribute to specify which element inside the listbox is in 'hover'. We will use the 'focus' word here but this is not the case."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ArrowDown"}),": If the listbox is closed, it becomes open with the focus on the first [selected] option."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ArrowDown"}),': If the listbox is opened, moves the "focus" to the next item.']}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ArrowUp"}),': If the listbox is opened the "focus" is moved to the previous option.']}),`
`,e.jsx(t.li,{children:"Loop over options is activated."}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Escape"}),": Dismisses the listbox. Optionally, if the popup is hidden before Escape is pressed, clears the combobox."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Enter"}),": If the combobox is editable and an autocomplete suggestion is selected in the popup, accepts the suggestion either by placing the input cursor at the end of the accepted value in the combobox or by performing a default action on the value."]}),`
`,e.jsx(t.li,{children:"TODO: Printable Characters should moves focus to a value that starts with the typed characters."}),`
`]}),`
`,e.jsx(t.p,{children:"Searchable select"}),`
`,e.jsx(t.p,{children:`Search input is displayed at the top of popover, and, the search input should be focused when opening the popover.
So, real focus will be kept on search input, and when navigating using keyboard, items will be visually focused using hover state.
Keyboard navigation works the same as for none searchable select.`}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{})})]})}function oe(o={}){const{wrapper:t}={...c(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r(o)}export{oe as default};
