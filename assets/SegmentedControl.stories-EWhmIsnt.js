import{n as e}from"./chunk-DseTPa7n.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t as n}from"./SegmentedControl-ClTh_u6i.js";import{hn as r,ln as i}from"./iframe-BRSAI4nO.js";import{n as a,t as o}from"./Icons-DoZ1c5fe.js";var s={label:{control:{type:`text`},description:`The text that describes the field.`,table:{type:{summary:`ReactNode`}}},justified:{control:`boolean`,if:{arg:`orientation`,eq:`horizontal`},table:{type:{summary:`boolean`}}},name:{control:`text`,description:`Must be set on each Segment or once on Group to link the segments together.`,table:{type:{summary:`string`}}},iconOnly:{control:`boolean`,table:{type:{summary:`boolean`}}},orientation:{control:{type:`select`},options:[`horizontal`,`vertical`],description:`Sets the orientation of the segmented control. Vertical orientation is limited to icon only. `,table:{defaultValue:{summary:`horizontal`},type:{summary:`"horizontal" | "vertical"`}}}},c={disabled:{control:`boolean`,table:{type:{summary:`boolean`}}},label:{control:`text`,table:{type:{summary:`string`}}},value:{control:`text`,table:{type:{summary:`string`}}},icon:{control:{type:`select`},options:a,mapping:o,description:"Accepts a `ReactNode` and is rendered before the label. Use an icon from `@qlik/sprout-icons`",table:{type:{summary:`ReactNode`}}},name:{control:`text`,description:`Must be set on each Segment or once on Group to link the segments together.`,table:{type:{summary:`string`}}}},l=e({Playground:()=>f,Segment:()=>p,VisualTest:()=>m,__namedExportsOrder:()=>h,default:()=>d}),u=t(),d={title:`Components/SegmentedControl`,component:n.Group},f={render:e=>(0,u.jsx)(`div`,{className:r(`flex`),"data-testid":`wrapper`,children:(0,u.jsxs)(n.Group,{...e,children:[(0,u.jsx)(n.Segment,{value:`A`,label:`Segment`,icon:(0,u.jsx)(i,{}),defaultChecked:!0}),(0,u.jsx)(n.Segment,{value:`B`,label:`Segment`,icon:(0,u.jsx)(i,{})}),(0,u.jsx)(n.Segment,{value:`C`,label:`Segment`,icon:(0,u.jsx)(i,{}),disabled:!0}),(0,u.jsx)(n.Segment,{value:`D`,label:`Segment`,icon:(0,u.jsx)(i,{})}),(0,u.jsx)(n.Segment,{value:`E`,label:`Segment`,icon:(0,u.jsx)(i,{})})]})}),args:{name:`segmented-control-group`,orientation:`horizontal`},argTypes:s},p={render:e=>(0,u.jsx)(`div`,{className:r(`flex`,`w-full`,`gap-3xl`),"data-testid":`wrapper`,children:(0,u.jsx)(n.Segment,{...e})}),args:{value:`segment`,label:`Segment`},argTypes:c},m={render:()=>(0,u.jsxs)(`div`,{className:r(`flex`,`flex-row`,`gap-xxl`),children:[(0,u.jsxs)(`div`,{className:r(`flex`,`flex-col`),children:[(0,u.jsx)(`div`,{className:r(`flex`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,u.jsx)(n.Segment,{label:`Default`})}),(0,u.jsx)(`div`,{className:r(`flex`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,u.jsx)(n.Segment,{label:`Hover`,"data-testid":`hover`})}),(0,u.jsx)(`div`,{className:r(`flex`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,u.jsx)(n.Segment,{label:`Pressed`,"data-testid":`pressed`})}),(0,u.jsx)(`div`,{className:r(`flex`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,u.jsx)(n.Segment,{label:`Focus`,"data-testid":`focus`})}),(0,u.jsx)(`div`,{className:r(`flex`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,u.jsx)(n.Segment,{label:`Toggled`,checked:!0})}),(0,u.jsx)(`div`,{className:r(`flex`,`p-m`,`w-fit`),"data-testid":`wrapper`,children:(0,u.jsx)(n.Segment,{label:`Disabled`,disabled:!0})})]}),(0,u.jsxs)(`div`,{className:r(`flex`,`flex-1`),children:[(0,u.jsxs)(`span`,{children:[(0,u.jsxs)(`h2`,{className:r(`font-heading-m`,`text-default`),children:[` `,`Default`]}),(0,u.jsxs)(n.Group,{name:`segmented-control-group-1`,children:[(0,u.jsx)(n.Segment,{value:`A`,label:`Segment`,defaultChecked:!0}),(0,u.jsx)(n.Segment,{value:`B`,label:`Segment`}),(0,u.jsx)(n.Segment,{value:`C`,label:`Segment`,disabled:!0}),(0,u.jsx)(n.Segment,{value:`D`,label:`Segment`}),(0,u.jsx)(n.Segment,{value:`E`,label:`Segment`})]}),(0,u.jsxs)(`h2`,{className:r(`font-heading-m`,`text-default`),children:[` `,`With label`]}),(0,u.jsxs)(n.Group,{name:`segmented-control-group-2`,label:`Segmented Control Field Label`,children:[(0,u.jsx)(n.Segment,{value:`A`,label:`Segment`,defaultChecked:!0}),(0,u.jsx)(n.Segment,{value:`B`,label:`Segment`}),(0,u.jsx)(n.Segment,{value:`C`,label:`Segment`,disabled:!0}),(0,u.jsx)(n.Segment,{value:`D`,label:`Segment`}),(0,u.jsx)(n.Segment,{value:`E`,label:`Segment`})]})]}),(0,u.jsxs)(`span`,{children:[(0,u.jsx)(`h2`,{className:r(`font-heading-m`,`text-default`),children:`Justified`}),(0,u.jsxs)(n.Group,{name:`segmented-control-group-3`,justified:!0,children:[(0,u.jsx)(n.Segment,{value:`A`,label:`Segment`,icon:(0,u.jsx)(i,{}),defaultChecked:!0}),(0,u.jsx)(n.Segment,{value:`B`,label:`Segment`,icon:(0,u.jsx)(i,{})}),(0,u.jsx)(n.Segment,{value:`C`,label:`Segment`,icon:(0,u.jsx)(i,{}),disabled:!0}),(0,u.jsx)(n.Segment,{value:`D`,label:`Segment`,icon:(0,u.jsx)(i,{})}),(0,u.jsx)(n.Segment,{value:`E`,label:`Segment`,icon:(0,u.jsx)(i,{})})]})]}),(0,u.jsxs)(`span`,{children:[(0,u.jsx)(`h2`,{className:r(`font-heading-m`,`text-default`),children:`Icon Only`}),(0,u.jsxs)(n.Group,{name:`segmented-control-group-4`,iconOnly:!0,children:[(0,u.jsx)(n.Segment,{value:`A`,label:`Segment`,icon:(0,u.jsx)(i,{}),defaultChecked:!0}),(0,u.jsx)(n.Segment,{value:`B`,label:`Segment`,icon:(0,u.jsx)(i,{})}),(0,u.jsx)(n.Segment,{value:`C`,label:`Segment`,icon:(0,u.jsx)(i,{}),disabled:!0}),(0,u.jsx)(n.Segment,{value:`D`,label:`Segment`,icon:(0,u.jsx)(i,{})}),(0,u.jsx)(n.Segment,{value:`E`,label:`Segment`,icon:(0,u.jsx)(i,{})})]})]}),(0,u.jsxs)(`span`,{children:[(0,u.jsx)(`h2`,{className:r(`font-heading-m`,`text-default`),children:`Vertical`}),(0,u.jsxs)(n.Group,{name:`segmented-control-group-5`,orientation:`vertical`,iconOnly:!0,children:[(0,u.jsx)(n.Segment,{value:`A`,label:`Segment`,icon:(0,u.jsx)(i,{}),defaultChecked:!0}),(0,u.jsx)(n.Segment,{value:`B`,label:`Segment`,icon:(0,u.jsx)(i,{})}),(0,u.jsx)(n.Segment,{value:`C`,label:`Segment`,icon:(0,u.jsx)(i,{}),disabled:!0}),(0,u.jsx)(n.Segment,{value:`D`,label:`Segment`,icon:(0,u.jsx)(i,{})}),(0,u.jsx)(n.Segment,{value:`E`,label:`Segment`,icon:(0,u.jsx)(i,{})})]})]})]})]}),parameters:{pseudo:{hover:`[data-testid=hover]`,focusVisible:`[data-testid=focus]`,active:`[data-testid=pressed]`}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("flex", "w-full", "gap-3xl")} data-testid="wrapper">
      <SegmentedControl.Segment {...props} />
    </div>,
  args: {
    value: "segment",
    label: "Segment"
  },
  argTypes: SegmentedControlSegmentArgTypes
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};var h=[`Playground`,`Segment`,`VisualTest`];export{f as Playground,p as Segment,m as VisualTest,h as __namedExportsOrder,d as default,l as t};