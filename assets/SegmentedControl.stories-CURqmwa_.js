import{j as e}from"./iframe-D-N3fK2j.js";import{F as t}from"./Bookmark-Dg1w8U2T.js";import{I as r,a as d}from"./Icons-CGLv6dp6.js";import{S as n}from"./SegmentedControl-T9Bm41GQ.js";import{c as a}from"./classNames-CrSIhzis.js";const g={label:{control:{type:"text"},description:"The text that describes the field.",table:{type:{summary:"ReactNode"}}},justified:{control:"boolean",if:{arg:"orientation",eq:"horizontal"},table:{type:{summary:"boolean"}}},name:{control:"text",description:"Must be set on each Segment or once on Group to link the segments together.",table:{type:{summary:"string"}}},iconOnly:{control:"boolean",table:{type:{summary:"boolean"}}},orientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Sets the orientation of the segmented control. Vertical orientation is limited to icon only. ",table:{defaultValue:{summary:"horizontal"},type:{summary:'"horizontal" | "vertical"'}}}},i={disabled:{control:"boolean",table:{type:{summary:"boolean"}}},label:{control:"text",table:{type:{summary:"string"}}},value:{control:"text",table:{type:{summary:"string"}}},icon:{control:{type:"select"},options:d,mapping:r,description:"Accepts a `ReactNode` and is rendered before the label. Use an icon from `@qlik/sprout-icons`",table:{type:{summary:"ReactNode"}}},name:{control:"text",description:"Must be set on each Segment or once on Group to link the segments together.",table:{type:{summary:"string"}}}},c={title:"Components/SegmentedControl",component:n.Group},l={render:m=>e.jsx("div",{className:a("flex"),"data-testid":"wrapper",children:e.jsxs(n.Group,{...m,children:[e.jsx(n.Segment,{value:"A",label:"Segment",icon:e.jsx(t,{}),defaultChecked:!0}),e.jsx(n.Segment,{value:"B",label:"Segment",icon:e.jsx(t,{})}),e.jsx(n.Segment,{value:"C",label:"Segment",icon:e.jsx(t,{}),disabled:!0}),e.jsx(n.Segment,{value:"D",label:"Segment",icon:e.jsx(t,{})}),e.jsx(n.Segment,{value:"E",label:"Segment",icon:e.jsx(t,{})})]})}),args:{name:"segmented-control-group",orientation:"horizontal"},argTypes:g},o={render:m=>e.jsx("div",{className:a("flex","w-full","gap-3xl"),"data-testid":"wrapper",children:e.jsx(n.Segment,{...m})}),args:{value:"segment",label:"Segment"},argTypes:i},s={render:()=>e.jsxs("div",{className:a("flex","flex-row","gap-xxl"),children:[e.jsxs("div",{className:a("flex","flex-col"),children:[e.jsx("div",{className:a("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(n.Segment,{label:"Default"})}),e.jsx("div",{className:a("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(n.Segment,{label:"Hover","data-testid":"hover"})}),e.jsx("div",{className:a("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(n.Segment,{label:"Pressed","data-testid":"pressed"})}),e.jsx("div",{className:a("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(n.Segment,{label:"Focus","data-testid":"focus"})}),e.jsx("div",{className:a("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(n.Segment,{label:"Toggled",checked:!0})}),e.jsx("div",{className:a("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(n.Segment,{label:"Disabled",disabled:!0})})]}),e.jsxs("div",{className:a("flex","flex-1"),children:[e.jsxs("span",{children:[e.jsx("h2",{className:a("font-heading-m","text-default"),children:" Default"}),e.jsxs(n.Group,{name:"segmented-control-group-1",children:[e.jsx(n.Segment,{value:"A",label:"Segment",defaultChecked:!0}),e.jsx(n.Segment,{value:"B",label:"Segment"}),e.jsx(n.Segment,{value:"C",label:"Segment",disabled:!0}),e.jsx(n.Segment,{value:"D",label:"Segment"}),e.jsx(n.Segment,{value:"E",label:"Segment"})]}),e.jsx("h2",{className:a("font-heading-m","text-default"),children:" With label"}),e.jsxs(n.Group,{name:"segmented-control-group-2",label:"Segmented Control Field Label",children:[e.jsx(n.Segment,{value:"A",label:"Segment",defaultChecked:!0}),e.jsx(n.Segment,{value:"B",label:"Segment"}),e.jsx(n.Segment,{value:"C",label:"Segment",disabled:!0}),e.jsx(n.Segment,{value:"D",label:"Segment"}),e.jsx(n.Segment,{value:"E",label:"Segment"})]})]}),e.jsxs("span",{children:[e.jsx("h2",{className:a("font-heading-m","text-default"),children:"Justified"}),e.jsxs(n.Group,{name:"segmented-control-group-3",justified:!0,children:[e.jsx(n.Segment,{value:"A",label:"Segment",icon:e.jsx(t,{}),defaultChecked:!0}),e.jsx(n.Segment,{value:"B",label:"Segment",icon:e.jsx(t,{})}),e.jsx(n.Segment,{value:"C",label:"Segment",icon:e.jsx(t,{}),disabled:!0}),e.jsx(n.Segment,{value:"D",label:"Segment",icon:e.jsx(t,{})}),e.jsx(n.Segment,{value:"E",label:"Segment",icon:e.jsx(t,{})})]})]}),e.jsxs("span",{children:[e.jsx("h2",{className:a("font-heading-m","text-default"),children:"Icon Only"}),e.jsxs(n.Group,{name:"segmented-control-group-4",iconOnly:!0,children:[e.jsx(n.Segment,{value:"A",label:"Segment",icon:e.jsx(t,{}),defaultChecked:!0}),e.jsx(n.Segment,{value:"B",label:"Segment",icon:e.jsx(t,{})}),e.jsx(n.Segment,{value:"C",label:"Segment",icon:e.jsx(t,{}),disabled:!0}),e.jsx(n.Segment,{value:"D",label:"Segment",icon:e.jsx(t,{})}),e.jsx(n.Segment,{value:"E",label:"Segment",icon:e.jsx(t,{})})]})]}),e.jsxs("span",{children:[e.jsx("h2",{className:a("font-heading-m","text-default"),children:"Vertical"}),e.jsxs(n.Group,{name:"segmented-control-group-5",orientation:"vertical",iconOnly:!0,children:[e.jsx(n.Segment,{value:"A",label:"Segment",icon:e.jsx(t,{}),defaultChecked:!0}),e.jsx(n.Segment,{value:"B",label:"Segment",icon:e.jsx(t,{})}),e.jsx(n.Segment,{value:"C",label:"Segment",icon:e.jsx(t,{}),disabled:!0}),e.jsx(n.Segment,{value:"D",label:"Segment",icon:e.jsx(t,{})}),e.jsx(n.Segment,{value:"E",label:"Segment",icon:e.jsx(t,{})})]})]})]})]}),parameters:{pseudo:{hover:"[data-testid=hover]",focusVisible:"[data-testid=focus]",active:"[data-testid=pressed]"}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <div className={classNames("flex")} data-testid="wrapper">
        <SegmentedControl.Group {...props}>
          <SegmentedControl.Segment value="A" label="Segment" icon={<BookmarkIcon />} defaultChecked />
          <SegmentedControl.Segment value="B" label="Segment" icon={<BookmarkIcon />} />
          <SegmentedControl.Segment value="C" label="Segment" icon={<BookmarkIcon />} disabled />
          <SegmentedControl.Segment value="D" label="Segment" icon={<BookmarkIcon />} />
          <SegmentedControl.Segment value="E" label="Segment" icon={<BookmarkIcon />} />
        </SegmentedControl.Group>
      </div>;
  },
  args: {
    name: "segmented-control-group",
    orientation: "horizontal"
  },
  argTypes: SegmentedControlGroupArgTypes
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("flex", "w-full", "gap-3xl")} data-testid="wrapper">
      <SegmentedControl.Segment {...props} />
    </div>,
  args: {
    value: "segment",
    label: "Segment"
  },
  argTypes: SegmentedControlSegmentArgTypes
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-row", "gap-xxl")}>
      <div className={classNames("flex", "flex-col")}>
        <div className={classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <SegmentedControl.Segment label="Default" />
        </div>
        <div className={classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <SegmentedControl.Segment label="Hover" data-testid="hover" />
        </div>
        <div className={classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <SegmentedControl.Segment label="Pressed" data-testid="pressed" />
        </div>
        <div className={classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <SegmentedControl.Segment label="Focus" data-testid="focus" />
        </div>
        <div className={classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <SegmentedControl.Segment label="Toggled" checked />
        </div>
        <div className={classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <SegmentedControl.Segment label="Disabled" disabled />
        </div>
      </div>

      <div className={classNames("flex", "flex-1")}>
        <span>
          <h2 className={classNames("font-heading-m", "text-default")}> Default</h2>
          <SegmentedControl.Group name="segmented-control-group-1">
            <SegmentedControl.Segment value="A" label="Segment" defaultChecked />
            <SegmentedControl.Segment value="B" label="Segment" />
            <SegmentedControl.Segment value="C" label="Segment" disabled />
            <SegmentedControl.Segment value="D" label="Segment" />
            <SegmentedControl.Segment value="E" label="Segment" />
          </SegmentedControl.Group>

          <h2 className={classNames("font-heading-m", "text-default")}> With label</h2>
          <SegmentedControl.Group name="segmented-control-group-2" label="Segmented Control Field Label">
            <SegmentedControl.Segment value="A" label="Segment" defaultChecked />
            <SegmentedControl.Segment value="B" label="Segment" />
            <SegmentedControl.Segment value="C" label="Segment" disabled />
            <SegmentedControl.Segment value="D" label="Segment" />
            <SegmentedControl.Segment value="E" label="Segment" />
          </SegmentedControl.Group>
        </span>

        <span>
          <h2 className={classNames("font-heading-m", "text-default")}>Justified</h2>
          <SegmentedControl.Group name="segmented-control-group-3" justified>
            <SegmentedControl.Segment value="A" label="Segment" icon={<BookmarkIcon />} defaultChecked />
            <SegmentedControl.Segment value="B" label="Segment" icon={<BookmarkIcon />} />
            <SegmentedControl.Segment value="C" label="Segment" icon={<BookmarkIcon />} disabled />
            <SegmentedControl.Segment value="D" label="Segment" icon={<BookmarkIcon />} />
            <SegmentedControl.Segment value="E" label="Segment" icon={<BookmarkIcon />} />
          </SegmentedControl.Group>
        </span>

        <span>
          <h2 className={classNames("font-heading-m", "text-default")}>Icon Only</h2>
          <SegmentedControl.Group name="segmented-control-group-4" iconOnly>
            <SegmentedControl.Segment value="A" label="Segment" icon={<BookmarkIcon />} defaultChecked />
            <SegmentedControl.Segment value="B" label="Segment" icon={<BookmarkIcon />} />
            <SegmentedControl.Segment value="C" label="Segment" icon={<BookmarkIcon />} disabled />
            <SegmentedControl.Segment value="D" label="Segment" icon={<BookmarkIcon />} />
            <SegmentedControl.Segment value="E" label="Segment" icon={<BookmarkIcon />} />
          </SegmentedControl.Group>
        </span>

        <span>
          <h2 className={classNames("font-heading-m", "text-default")}>Vertical</h2>
          <SegmentedControl.Group name="segmented-control-group-5" orientation="vertical" iconOnly>
            <SegmentedControl.Segment value="A" label="Segment" icon={<BookmarkIcon />} defaultChecked />
            <SegmentedControl.Segment value="B" label="Segment" icon={<BookmarkIcon />} />
            <SegmentedControl.Segment value="C" label="Segment" icon={<BookmarkIcon />} disabled />
            <SegmentedControl.Segment value="D" label="Segment" icon={<BookmarkIcon />} />
            <SegmentedControl.Segment value="E" label="Segment" icon={<BookmarkIcon />} />
          </SegmentedControl.Group>
        </span>
      </div>
    </div>,
  parameters: {
    pseudo: {
      hover: "[data-testid=hover]",
      focusVisible: "[data-testid=focus]",
      active: "[data-testid=pressed]"
    }
  }
}`,...s.parameters?.docs?.source}}};const S=["Playground","Segment","VisualTest"],f=Object.freeze(Object.defineProperty({__proto__:null,Playground:l,Segment:o,VisualTest:s,__namedExportsOrder:S,default:c},Symbol.toStringTag,{value:"Module"}));export{l as P,f as S,o as a};
