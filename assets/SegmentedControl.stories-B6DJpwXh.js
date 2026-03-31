import{n as e,r as t}from"./chunk-BneVvdWh.js";import{I as n,In as r,Ln as i,Mn as a,jt as o,v as s}from"./iframe-B0xl5hqz.js";import{n as c,r as l,t as u}from"./Icons-Bt98yIEE.js";var d,f,p=e((()=>{l(),d={label:{control:{type:`text`},description:`The text that describes the field.`,table:{type:{summary:`ReactNode`}}},justified:{control:`boolean`,if:{arg:`orientation`,eq:`horizontal`},table:{type:{summary:`boolean`}}},name:{control:`text`,description:`Must be set on each Segment or once on Group to link the segments together.`,table:{type:{summary:`string`}}},iconOnly:{control:`boolean`,table:{type:{summary:`boolean`}}},orientation:{control:{type:`select`},options:[`horizontal`,`vertical`],description:`Sets the orientation of the segmented control. Vertical orientation is limited to icon only. `,table:{defaultValue:{summary:`horizontal`},type:{summary:`"horizontal" | "vertical"`}}}},f={disabled:{control:`boolean`,table:{type:{summary:`boolean`}}},label:{control:`text`,table:{type:{summary:`string`}}},value:{control:`text`,table:{type:{summary:`string`}}},icon:{control:{type:`select`},options:c,mapping:u,description:"Accepts a `ReactNode` and is rendered before the label. Use an icon from `@qlik/sprout-icons`",table:{type:{summary:`ReactNode`}}},name:{control:`text`,description:`Must be set on each Segment or once on Group to link the segments together.`,table:{type:{summary:`string`}}}}})),m=t({Playground:()=>_,Segment:()=>v,VisualTest:()=>y,__namedExportsOrder:()=>b,default:()=>g}),h,g,_,v,y,b,x=e((()=>{s(),o(),p(),h=i(),g={title:`Components/SegmentedControl`,component:n.Group},_={render:e=>(0,h.jsx)(`div`,{className:r(`flex`),"data-testid":`wrapper`,children:(0,h.jsxs)(n.Group,{...e,children:[(0,h.jsx)(n.Segment,{value:`A`,label:`Segment`,icon:(0,h.jsx)(a,{}),defaultChecked:!0}),(0,h.jsx)(n.Segment,{value:`B`,label:`Segment`,icon:(0,h.jsx)(a,{})}),(0,h.jsx)(n.Segment,{value:`C`,label:`Segment`,icon:(0,h.jsx)(a,{}),disabled:!0}),(0,h.jsx)(n.Segment,{value:`D`,label:`Segment`,icon:(0,h.jsx)(a,{})}),(0,h.jsx)(n.Segment,{value:`E`,label:`Segment`,icon:(0,h.jsx)(a,{})})]})}),args:{name:`segmented-control-group`,orientation:`horizontal`},argTypes:d},v={render:e=>(0,h.jsx)(`div`,{className:r(`flex`,`w-full`,`gap-3xl`),"data-testid":`wrapper`,children:(0,h.jsx)(n.Segment,{...e})}),args:{value:`segment`,label:`Segment`},argTypes:f},y={render:()=>(0,h.jsxs)(`div`,{className:r(`flex`,`flex-row`,`gap-xxl`),children:[(0,h.jsxs)(`div`,{className:r(`flex`,`flex-col`),children:[(0,h.jsx)(`div`,{className:r(`flex`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,h.jsx)(n.Segment,{label:`Default`})}),(0,h.jsx)(`div`,{className:r(`flex`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,h.jsx)(n.Segment,{label:`Hover`,"data-testid":`hover`})}),(0,h.jsx)(`div`,{className:r(`flex`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,h.jsx)(n.Segment,{label:`Pressed`,"data-testid":`pressed`})}),(0,h.jsx)(`div`,{className:r(`flex`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,h.jsx)(n.Segment,{label:`Focus`,"data-testid":`focus`})}),(0,h.jsx)(`div`,{className:r(`flex`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,h.jsx)(n.Segment,{label:`Toggled`,checked:!0})}),(0,h.jsx)(`div`,{className:r(`flex`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,h.jsx)(n.Segment,{label:`Disabled`,disabled:!0})})]}),(0,h.jsxs)(`div`,{className:r(`flex`,`flex-1`),children:[(0,h.jsxs)(`span`,{children:[(0,h.jsxs)(`h2`,{className:r(`font-heading-m`,`text-default`),children:[` `,`Default`]}),(0,h.jsxs)(n.Group,{name:`segmented-control-group-1`,children:[(0,h.jsx)(n.Segment,{value:`A`,label:`Segment`,defaultChecked:!0}),(0,h.jsx)(n.Segment,{value:`B`,label:`Segment`}),(0,h.jsx)(n.Segment,{value:`C`,label:`Segment`,disabled:!0}),(0,h.jsx)(n.Segment,{value:`D`,label:`Segment`}),(0,h.jsx)(n.Segment,{value:`E`,label:`Segment`})]}),(0,h.jsxs)(`h2`,{className:r(`font-heading-m`,`text-default`),children:[` `,`With label`]}),(0,h.jsxs)(n.Group,{name:`segmented-control-group-2`,label:`Segmented Control Field Label`,children:[(0,h.jsx)(n.Segment,{value:`A`,label:`Segment`,defaultChecked:!0}),(0,h.jsx)(n.Segment,{value:`B`,label:`Segment`}),(0,h.jsx)(n.Segment,{value:`C`,label:`Segment`,disabled:!0}),(0,h.jsx)(n.Segment,{value:`D`,label:`Segment`}),(0,h.jsx)(n.Segment,{value:`E`,label:`Segment`})]})]}),(0,h.jsxs)(`span`,{children:[(0,h.jsx)(`h2`,{className:r(`font-heading-m`,`text-default`),children:`Justified`}),(0,h.jsxs)(n.Group,{name:`segmented-control-group-3`,justified:!0,children:[(0,h.jsx)(n.Segment,{value:`A`,label:`Segment`,icon:(0,h.jsx)(a,{}),defaultChecked:!0}),(0,h.jsx)(n.Segment,{value:`B`,label:`Segment`,icon:(0,h.jsx)(a,{})}),(0,h.jsx)(n.Segment,{value:`C`,label:`Segment`,icon:(0,h.jsx)(a,{}),disabled:!0}),(0,h.jsx)(n.Segment,{value:`D`,label:`Segment`,icon:(0,h.jsx)(a,{})}),(0,h.jsx)(n.Segment,{value:`E`,label:`Segment`,icon:(0,h.jsx)(a,{})})]})]}),(0,h.jsxs)(`span`,{children:[(0,h.jsx)(`h2`,{className:r(`font-heading-m`,`text-default`),children:`Icon Only`}),(0,h.jsxs)(n.Group,{name:`segmented-control-group-4`,iconOnly:!0,children:[(0,h.jsx)(n.Segment,{value:`A`,label:`Segment`,icon:(0,h.jsx)(a,{}),defaultChecked:!0}),(0,h.jsx)(n.Segment,{value:`B`,label:`Segment`,icon:(0,h.jsx)(a,{})}),(0,h.jsx)(n.Segment,{value:`C`,label:`Segment`,icon:(0,h.jsx)(a,{}),disabled:!0}),(0,h.jsx)(n.Segment,{value:`D`,label:`Segment`,icon:(0,h.jsx)(a,{})}),(0,h.jsx)(n.Segment,{value:`E`,label:`Segment`,icon:(0,h.jsx)(a,{})})]})]}),(0,h.jsxs)(`span`,{children:[(0,h.jsx)(`h2`,{className:r(`font-heading-m`,`text-default`),children:`Vertical`}),(0,h.jsxs)(n.Group,{name:`segmented-control-group-5`,orientation:`vertical`,iconOnly:!0,children:[(0,h.jsx)(n.Segment,{value:`A`,label:`Segment`,icon:(0,h.jsx)(a,{}),defaultChecked:!0}),(0,h.jsx)(n.Segment,{value:`B`,label:`Segment`,icon:(0,h.jsx)(a,{})}),(0,h.jsx)(n.Segment,{value:`C`,label:`Segment`,icon:(0,h.jsx)(a,{}),disabled:!0}),(0,h.jsx)(n.Segment,{value:`D`,label:`Segment`,icon:(0,h.jsx)(a,{})}),(0,h.jsx)(n.Segment,{value:`E`,label:`Segment`,icon:(0,h.jsx)(a,{})})]})]})]})]}),parameters:{pseudo:{hover:`[data-testid=hover]`,focusVisible:`[data-testid=focus]`,active:`[data-testid=pressed]`}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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