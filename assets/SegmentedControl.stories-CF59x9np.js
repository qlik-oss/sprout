import{n as e,r as t}from"./chunk-BneVvdWh.js";import{An as n,Fn as r,I as i,Pn as a,jt as o,v as s}from"./iframe-RiXBydPV.js";import{n as c,r as l,t as u}from"./Icons-C4p2uBG3.js";var d,f,p=e((()=>{l(),d={label:{control:{type:`text`},description:`The text that describes the field.`,table:{type:{summary:`ReactNode`}}},justified:{control:`boolean`,if:{arg:`orientation`,eq:`horizontal`},table:{type:{summary:`boolean`}}},name:{control:`text`,description:`Must be set on each Segment or once on Group to link the segments together.`,table:{type:{summary:`string`}}},iconOnly:{control:`boolean`,table:{type:{summary:`boolean`}}},orientation:{control:{type:`select`},options:[`horizontal`,`vertical`],description:`Sets the orientation of the segmented control. Vertical orientation is limited to icon only. `,table:{defaultValue:{summary:`horizontal`},type:{summary:`"horizontal" | "vertical"`}}}},f={disabled:{control:`boolean`,table:{type:{summary:`boolean`}}},label:{control:`text`,table:{type:{summary:`string`}}},value:{control:`text`,table:{type:{summary:`string`}}},icon:{control:{type:`select`},options:c,mapping:u,description:"Accepts a `ReactNode` and is rendered before the label. Use an icon from `@qlik/sprout-icons`",table:{type:{summary:`ReactNode`}}},name:{control:`text`,description:`Must be set on each Segment or once on Group to link the segments together.`,table:{type:{summary:`string`}}}}})),m=t({Playground:()=>_,Segment:()=>v,VisualTest:()=>y,__namedExportsOrder:()=>b,default:()=>g}),h,g,_,v,y,b,x=e((()=>{s(),o(),p(),h=r(),g={title:`Components/SegmentedControl`,component:i.Group},_={render:e=>(0,h.jsx)(`div`,{className:a(`flex`),"data-testid":`wrapper`,children:(0,h.jsxs)(i.Group,{...e,children:[(0,h.jsx)(i.Segment,{value:`A`,label:`Segment`,icon:(0,h.jsx)(n,{}),defaultChecked:!0}),(0,h.jsx)(i.Segment,{value:`B`,label:`Segment`,icon:(0,h.jsx)(n,{})}),(0,h.jsx)(i.Segment,{value:`C`,label:`Segment`,icon:(0,h.jsx)(n,{}),disabled:!0}),(0,h.jsx)(i.Segment,{value:`D`,label:`Segment`,icon:(0,h.jsx)(n,{})}),(0,h.jsx)(i.Segment,{value:`E`,label:`Segment`,icon:(0,h.jsx)(n,{})})]})}),args:{name:`segmented-control-group`,orientation:`horizontal`},argTypes:d},v={render:e=>(0,h.jsx)(`div`,{className:a(`flex`,`w-full`,`gap-3xl`),"data-testid":`wrapper`,children:(0,h.jsx)(i.Segment,{...e})}),args:{value:`segment`,label:`Segment`},argTypes:f},y={render:()=>(0,h.jsxs)(`div`,{className:a(`flex`,`flex-row`,`gap-xxl`),children:[(0,h.jsxs)(`div`,{className:a(`flex`,`flex-col`),children:[(0,h.jsx)(`div`,{className:a(`flex`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,h.jsx)(i.Segment,{label:`Default`})}),(0,h.jsx)(`div`,{className:a(`flex`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,h.jsx)(i.Segment,{label:`Hover`,"data-testid":`hover`})}),(0,h.jsx)(`div`,{className:a(`flex`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,h.jsx)(i.Segment,{label:`Pressed`,"data-testid":`pressed`})}),(0,h.jsx)(`div`,{className:a(`flex`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,h.jsx)(i.Segment,{label:`Focus`,"data-testid":`focus`})}),(0,h.jsx)(`div`,{className:a(`flex`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,h.jsx)(i.Segment,{label:`Toggled`,checked:!0})}),(0,h.jsx)(`div`,{className:a(`flex`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,h.jsx)(i.Segment,{label:`Disabled`,disabled:!0})})]}),(0,h.jsxs)(`div`,{className:a(`flex`,`flex-1`),children:[(0,h.jsxs)(`span`,{children:[(0,h.jsxs)(`h2`,{className:a(`font-heading-m`,`text-default`),children:[` `,`Default`]}),(0,h.jsxs)(i.Group,{name:`segmented-control-group-1`,children:[(0,h.jsx)(i.Segment,{value:`A`,label:`Segment`,defaultChecked:!0}),(0,h.jsx)(i.Segment,{value:`B`,label:`Segment`}),(0,h.jsx)(i.Segment,{value:`C`,label:`Segment`,disabled:!0}),(0,h.jsx)(i.Segment,{value:`D`,label:`Segment`}),(0,h.jsx)(i.Segment,{value:`E`,label:`Segment`})]}),(0,h.jsxs)(`h2`,{className:a(`font-heading-m`,`text-default`),children:[` `,`With label`]}),(0,h.jsxs)(i.Group,{name:`segmented-control-group-2`,label:`Segmented Control Field Label`,children:[(0,h.jsx)(i.Segment,{value:`A`,label:`Segment`,defaultChecked:!0}),(0,h.jsx)(i.Segment,{value:`B`,label:`Segment`}),(0,h.jsx)(i.Segment,{value:`C`,label:`Segment`,disabled:!0}),(0,h.jsx)(i.Segment,{value:`D`,label:`Segment`}),(0,h.jsx)(i.Segment,{value:`E`,label:`Segment`})]})]}),(0,h.jsxs)(`span`,{children:[(0,h.jsx)(`h2`,{className:a(`font-heading-m`,`text-default`),children:`Justified`}),(0,h.jsxs)(i.Group,{name:`segmented-control-group-3`,justified:!0,children:[(0,h.jsx)(i.Segment,{value:`A`,label:`Segment`,icon:(0,h.jsx)(n,{}),defaultChecked:!0}),(0,h.jsx)(i.Segment,{value:`B`,label:`Segment`,icon:(0,h.jsx)(n,{})}),(0,h.jsx)(i.Segment,{value:`C`,label:`Segment`,icon:(0,h.jsx)(n,{}),disabled:!0}),(0,h.jsx)(i.Segment,{value:`D`,label:`Segment`,icon:(0,h.jsx)(n,{})}),(0,h.jsx)(i.Segment,{value:`E`,label:`Segment`,icon:(0,h.jsx)(n,{})})]})]}),(0,h.jsxs)(`span`,{children:[(0,h.jsx)(`h2`,{className:a(`font-heading-m`,`text-default`),children:`Icon Only`}),(0,h.jsxs)(i.Group,{name:`segmented-control-group-4`,iconOnly:!0,children:[(0,h.jsx)(i.Segment,{value:`A`,label:`Segment`,icon:(0,h.jsx)(n,{}),defaultChecked:!0}),(0,h.jsx)(i.Segment,{value:`B`,label:`Segment`,icon:(0,h.jsx)(n,{})}),(0,h.jsx)(i.Segment,{value:`C`,label:`Segment`,icon:(0,h.jsx)(n,{}),disabled:!0}),(0,h.jsx)(i.Segment,{value:`D`,label:`Segment`,icon:(0,h.jsx)(n,{})}),(0,h.jsx)(i.Segment,{value:`E`,label:`Segment`,icon:(0,h.jsx)(n,{})})]})]}),(0,h.jsxs)(`span`,{children:[(0,h.jsx)(`h2`,{className:a(`font-heading-m`,`text-default`),children:`Vertical`}),(0,h.jsxs)(i.Group,{name:`segmented-control-group-5`,orientation:`vertical`,iconOnly:!0,children:[(0,h.jsx)(i.Segment,{value:`A`,label:`Segment`,icon:(0,h.jsx)(n,{}),defaultChecked:!0}),(0,h.jsx)(i.Segment,{value:`B`,label:`Segment`,icon:(0,h.jsx)(n,{})}),(0,h.jsx)(i.Segment,{value:`C`,label:`Segment`,icon:(0,h.jsx)(n,{}),disabled:!0}),(0,h.jsx)(i.Segment,{value:`D`,label:`Segment`,icon:(0,h.jsx)(n,{})}),(0,h.jsx)(i.Segment,{value:`E`,label:`Segment`,icon:(0,h.jsx)(n,{})})]})]})]})]}),parameters:{pseudo:{hover:`[data-testid=hover]`,focusVisible:`[data-testid=focus]`,active:`[data-testid=pressed]`}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("flex", "w-full", "gap-3xl")} data-testid="wrapper">
      <SegmentedControl.Segment {...props} />
    </div>,
  args: {
    value: "segment",
    label: "Segment"
  },
  argTypes: SegmentedControlSegmentArgTypes
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
          <h2 className={classNames("font-heading-m", "text-default")}>
            {" "}
            Default
          </h2>
          <SegmentedControl.Group name="segmented-control-group-1">
            <SegmentedControl.Segment value="A" label="Segment" defaultChecked />
            <SegmentedControl.Segment value="B" label="Segment" />
            <SegmentedControl.Segment value="C" label="Segment" disabled />
            <SegmentedControl.Segment value="D" label="Segment" />
            <SegmentedControl.Segment value="E" label="Segment" />
          </SegmentedControl.Group>

          <h2 className={classNames("font-heading-m", "text-default")}>
            {" "}
            With label
          </h2>
          <SegmentedControl.Group name="segmented-control-group-2" label="Segmented Control Field Label">
            <SegmentedControl.Segment value="A" label="Segment" defaultChecked />
            <SegmentedControl.Segment value="B" label="Segment" />
            <SegmentedControl.Segment value="C" label="Segment" disabled />
            <SegmentedControl.Segment value="D" label="Segment" />
            <SegmentedControl.Segment value="E" label="Segment" />
          </SegmentedControl.Group>
        </span>

        <span>
          <h2 className={classNames("font-heading-m", "text-default")}>
            Justified
          </h2>
          <SegmentedControl.Group name="segmented-control-group-3" justified>
            <SegmentedControl.Segment value="A" label="Segment" icon={<BookmarkIcon />} defaultChecked />
            <SegmentedControl.Segment value="B" label="Segment" icon={<BookmarkIcon />} />
            <SegmentedControl.Segment value="C" label="Segment" icon={<BookmarkIcon />} disabled />
            <SegmentedControl.Segment value="D" label="Segment" icon={<BookmarkIcon />} />
            <SegmentedControl.Segment value="E" label="Segment" icon={<BookmarkIcon />} />
          </SegmentedControl.Group>
        </span>

        <span>
          <h2 className={classNames("font-heading-m", "text-default")}>
            Icon Only
          </h2>
          <SegmentedControl.Group name="segmented-control-group-4" iconOnly>
            <SegmentedControl.Segment value="A" label="Segment" icon={<BookmarkIcon />} defaultChecked />
            <SegmentedControl.Segment value="B" label="Segment" icon={<BookmarkIcon />} />
            <SegmentedControl.Segment value="C" label="Segment" icon={<BookmarkIcon />} disabled />
            <SegmentedControl.Segment value="D" label="Segment" icon={<BookmarkIcon />} />
            <SegmentedControl.Segment value="E" label="Segment" icon={<BookmarkIcon />} />
          </SegmentedControl.Group>
        </span>

        <span>
          <h2 className={classNames("font-heading-m", "text-default")}>
            Vertical
          </h2>
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
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`Segment`,`VisualTest`]}));x();export{_ as Playground,v as Segment,y as VisualTest,b as __namedExportsOrder,g as default,x as n,m as t};