import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t}from"./Slider-BB8MGCLy.js";import{hn as n}from"./iframe-BRSAI4nO.js";var r={optional:{control:{type:`boolean`},description:`Indicates whether the field is optional. If true, an "(optional)" label will be displayed next to the field label.`,table:{type:{summary:`boolean`}}},infoIconTooltip:{control:`text`,description:`Text shown when hovering over the info icon next to the field label. Useful for providing additional context.`,table:{type:{summary:`string`}}},helpText:{control:{type:`text`},description:`Supplementary text displayed below the slider for guidance. Ignored if errorMessages are present.`,table:{type:{summary:`string`}}},disabled:{control:{type:`boolean`},table:{type:{summary:`boolean`}}},errorMessages:{control:{type:`select`,labels:{first:`One error message`,second:`Two error messages`}},options:[void 0,`one msg`,`two msg`],mapping:{"one msg":[`Error message 1`],"two msg":[`Error message 1`,`Error message 2`]},table:{type:{summary:`string[]`}},description:`The error messages that will be shown if the field is marked as error. Note when errorMessages is set, the helpText is ignored.`},label:{control:`text`,table:{type:{summary:`string`}}},min:{control:`number`,description:`The minimum value selectable on the slider.`,table:{defaultValue:{summary:`0`},type:{summary:`number`}}},max:{control:`number`,description:`The maximum value selectable on the slider.`,table:{defaultValue:{summary:`100`},type:{summary:`number`}}},step:{control:`number`,description:`The increment between selectable values on the slider.`,table:{defaultValue:{summary:`1`},type:{summary:`number`}}},hasError:{control:`boolean`,description:`If true, the slider will be marked as error.`,table:{type:{summary:`boolean`}}},orientation:{control:{type:`select`},options:[`horizontal`,`vertical`],description:`The orientation of the slider.`,table:{defaultValue:{summary:`horizontal`},type:{summary:`"horizontal" | "vertical"`}}},marks:{control:{type:`select`},options:[`None`,`Auto (true)`,`[{ value: 0, label: 'Min' }, { value: 25 }, { value: 50, label: 'Mid' }, { value: 75 }, { value: 100, label: 'Max' }]`],mapping:{None:void 0,"Auto (true)":!0,"[{ value: 0, label: 'Min' }, { value: 25 }, { value: 50, label: 'Mid' }, { value: 75 }, { value: 100, label: 'Max' }]":[{value:0,label:`Min`},{value:25},{value:50,label:`Mid`},{value:75},{value:100,label:`Max`}]},description:"Defines marks on the slider. Can be `true` to automatically generate marks at each step interval, `false` or `undefined` for no marks, or an array of mark objects with `value` and optional `label` properties. \n\nExamples:\n- `true` - creates marks at every step\n- `false` or `undefined` - no marks\n- `[{ value: 0, label: 'Min' }, { value: 50 }, { value: 100, label: 'Max' }]`\n - marks at specific positions with custom labels\n\nMin and max marks are always included and labeled when marks are enabled.",table:{type:{summary:`boolean | Array<{ value: number; label?: ReactNode }>`},defaultValue:{summary:`undefined`}}},markLabels:{control:`boolean`,description:"If true, displays labels for all marks. Min and max labels are always visible regardless of this setting. Only applies when `marks` is provided.",table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},verticalMarkLabels:{control:`boolean`,description:`If true, displays mark labels vertically (rotated 90 degrees). This is useful to save horizontal space when you have many marks or long labels. Only applies to horizontal orientation.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},valueLabelFormat:{control:{type:`select`},options:[`undefined`,`Percentage (%)`,`Currency ($)`,`Temperature (°C)`],mapping:{undefined:void 0,"Percentage (%)":e=>`${e}%`,"Currency ($)":e=>`$${e}`,"Temperature (°C)":e=>`${e}°C`},description:`A function that formats the display of mark labels. Takes the numeric value and returns a ReactNode.

Examples:
- \`(value) => value + '%'\` - displays '50%'
- \`(value) => '$' + value\` - displays '$50'
- \`(value) => value + '°C'\` - displays '50°C'
- \`(value) => ['Jan', 'Feb', 'Mar', 'Apr', 'May'][value]\` - maps values to months

Note: Custom labels in mark objects take precedence over this formatting.`,table:{type:{summary:`(value: number) => ReactNode`},defaultValue:{summary:`undefined`}}}},i={...r,defaultValue:{control:`number`,defaultValue:{summary:`min`},table:{type:{summary:`number`}}},inputRef:{control:!1,description:`A ref to the underlying input element.`,table:{type:{summary:`Ref<HTMLInputElement>`}}},value:{control:`number`,table:{type:{summary:`number`}}},onChange:{control:!1,description:`Callback fired when the slider value changes. Receives the new value and the triggering event.`,table:{type:{summary:`(value: number, event: Event) => void`}}},onChangeCommitted:{control:!1,description:"Callback function that is fired when the `pointerup` is triggered.",table:{type:{summary:`(value: number, event: Event) => void`}}}},a={...r,defaultValue:{control:`object`,description:`An array of numbers representing the default range. If not provided, the slider will default to using [min, max]. Only the first two values will be used, additional values will be ignored.`,table:{defaultValue:{summary:`[min, max]`},type:{summary:`number[]`}}},endInputRef:{control:!1,description:`A ref to the end grip's underlying input element.`,table:{type:{summary:`Ref<HTMLInputElement>`}}},endName:{control:`text`,description:`The name attribute for the end grip's input element.`,table:{type:{summary:`string`}}},value:{control:`object`,description:`An array of numbers representing the current range value. Only the first two values will be used, additional values will be ignored.`,table:{type:{summary:`number[]`}}},onChange:{control:!1,description:"Callback fired when either grip value changes. Receives a `number[]` (only the first two values will be used), the triggering event, and the index of the active grip.",table:{type:{summary:`(value: number[], event: Event, activeGripIndex: number) => void`}}},onChangeCommitted:{control:!1,description:"Callback function that is fired when the `pointerup` is triggered.",table:{type:{summary:`((value: number[], event: Event) => void`}}},startInputRef:{control:!1,description:`A ref to the start grip's underlying input element.`,table:{type:{summary:`Ref<HTMLInputElement>`}}},startName:{control:`text`,description:`The name attribute for the start grip's input element.`,table:{type:{summary:`string`}}}},o=e(),s={title:`Components/Slider`,component:t.Single,parameters:{}},c={render:e=>(0,o.jsx)(`div`,{className:n(`w-s`),children:(0,o.jsx)(t.Single,{...e})}),args:{label:`Slider single`,defaultValue:50,min:0,max:100,step:1,orientation:`horizontal`},argTypes:i,parameters:{chromatic:{disableSnapshot:!0}}},l={render:e=>(0,o.jsx)(`div`,{className:n(`w-s`),children:(0,o.jsx)(t.Range,{...e})}),args:{label:`Slider range`,defaultValue:[20,80],min:0,max:100,step:1,orientation:`horizontal`},argTypes:a,parameters:{chromatic:{disableSnapshot:!0}}},u={render:()=>(0,o.jsxs)(`div`,{className:n(`flex`,`flex-row`,`gap-xxl`),children:[(0,o.jsxs)(`div`,{className:n(`flex`,`flex-col`,`gap-l`,`w-xs`),children:[(0,o.jsx)(t.Single,{defaultValue:50,label:`Default`}),(0,o.jsx)(t.Single,{defaultValue:50,label:`Hover`,"data-testid":`hover`}),(0,o.jsx)(t.Single,{defaultValue:50,label:`Focus`,"data-testid":`focusVisible`}),(0,o.jsx)(t.Single,{defaultValue:50,label:`Disabled`,disabled:!0}),(0,o.jsx)(t.Single,{defaultValue:50,label:`With mark labels`,marks:[{value:0,label:`Min`},{value:25},{value:50,label:`Mid`},{value:75},{value:100,label:`Max`}],markLabels:!0}),(0,o.jsx)(t.Single,{defaultValue:50,label:`Vertical mark labels`,step:10,marks:!0,markLabels:!0,verticalMarkLabels:!0,valueLabelFormat:e=>`${e}%`}),(0,o.jsx)(t.Single,{defaultValue:50,label:`With helper text`,helpText:`Use the slider to choose a value within the allowed range`}),(0,o.jsx)(t.Single,{defaultValue:50,label:`With error`,errorMessages:[`This is an error`]})]}),(0,o.jsxs)(`div`,{className:n(`flex`,`flex-col`,`gap-l`,`w-xs`),children:[(0,o.jsx)(t.Range,{label:`Range`,defaultValue:[49,50]}),(0,o.jsx)(t.Range,{label:`Range with marks`,defaultValue:[30,70],step:10,marks:!0}),(0,o.jsx)(t.Range,{label:`Range custom min/max`,min:100,max:600,defaultValue:[200,470]}),(0,o.jsx)(t.Range,{label:`Range with optional`,defaultValue:[40,70],optional:!0,infoIconTooltip:`Info icon tooltip`})]}),(0,o.jsxs)(`div`,{className:n(`flex`,`flex-row`,`gap-l`),children:[(0,o.jsx)(t.Single,{defaultValue:50,label:`Vertical`,orientation:`vertical`}),(0,o.jsx)(t.Range,{label:`Vertical Range`,orientation:`vertical`,defaultValue:[49,50]}),(0,o.jsx)(t.Single,{defaultValue:50,label:`Vertical with marks`,orientation:`vertical`,helpText:`Helper text`,marks:[{value:0,label:`0`},{value:25},{value:50,label:`50`},{value:75},{value:100,label:`100`}]}),(0,o.jsx)(t.Range,{label:`Vertical with error`,orientation:`vertical`,defaultValue:[20,80],errorMessages:[`This is an error`]})]})]}),parameters:{controls:{disable:!0},pseudo:{hover:`[data-testid="hover"] [role="presentation"] [role="presentation"]`,focusVisible:`[data-testid="focusVisible"] input[type="range"]`}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("w-s")}>
      <Slider.Single {...props} />
    </div>,
  args: {
    label: "Slider single",
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 1,
    orientation: "horizontal"
  },
  argTypes: SliderSingleArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("w-s")}>
      <Slider.Range {...props} />
    </div>,
  args: {
    label: "Slider range",
    defaultValue: [20, 80],
    min: 0,
    max: 100,
    step: 1,
    orientation: "horizontal"
  },
  argTypes: SliderRangeArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-row", "gap-xxl")}>
      <div className={classNames("flex", "flex-col", "gap-l", "w-xs")}>
        <Slider.Single defaultValue={50} label="Default" />
        <Slider.Single defaultValue={50} label="Hover" data-testid="hover" />
        <Slider.Single defaultValue={50} label="Focus" data-testid="focusVisible" />
        <Slider.Single defaultValue={50} label="Disabled" disabled />
        <Slider.Single defaultValue={50} label="With mark labels" marks={[{
        value: 0,
        label: "Min"
      }, {
        value: 25
      }, {
        value: 50,
        label: "Mid"
      }, {
        value: 75
      }, {
        value: 100,
        label: "Max"
      }]} markLabels />
        <Slider.Single defaultValue={50} label="Vertical mark labels" step={10} marks markLabels verticalMarkLabels valueLabelFormat={value => \`\${value}%\`} />
        <Slider.Single defaultValue={50} label="With helper text" helpText="Use the slider to choose a value within the allowed range" />
        <Slider.Single defaultValue={50} label="With error" errorMessages={["This is an error"]} />
      </div>

      <div className={classNames("flex", "flex-col", "gap-l", "w-xs")}>
        <Slider.Range label="Range" defaultValue={[49, 50]} />

        <Slider.Range label="Range with marks" defaultValue={[30, 70]} step={10} marks />
        <Slider.Range label="Range custom min/max" min={100} max={600} defaultValue={[200, 470]} />
        <Slider.Range label="Range with optional" defaultValue={[40, 70]} optional infoIconTooltip="Info icon tooltip" />
      </div>

      <div className={classNames("flex", "flex-row", "gap-l")}>
        <Slider.Single defaultValue={50} label="Vertical" orientation="vertical" />
        <Slider.Range label="Vertical Range" orientation="vertical" defaultValue={[49, 50]} />
        <Slider.Single defaultValue={50} label="Vertical with marks" orientation="vertical" helpText="Helper text" marks={[{
        value: 0,
        label: "0"
      }, {
        value: 25
      }, {
        value: 50,
        label: "50"
      }, {
        value: 75
      }, {
        value: 100,
        label: "100"
      }]} />
        <Slider.Range label="Vertical with error" orientation="vertical" defaultValue={[20, 80]} errorMessages={["This is an error"]} />
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    },
    pseudo: {
      hover: '[data-testid="hover"] [role="presentation"] [role="presentation"]',
      focusVisible: '[data-testid="focusVisible"] input[type="range"]'
    }
  }
}`,...u.parameters?.docs?.source}}};var d=[`PlaygroundSingle`,`PlaygroundRange`,`VisualTest`];export{l as PlaygroundRange,c as PlaygroundSingle,u as VisualTest,d as __namedExportsOrder,s as default};