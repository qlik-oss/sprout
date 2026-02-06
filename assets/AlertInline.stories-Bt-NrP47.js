import{j as e}from"./iframe-B4-nXs83.js";import{A as n}from"./AlertInline-DlnHae0G.js";import{c as s}from"./classNames-eIMwhIDK.js";import{B as i}from"./Button-Cv6yFaKa.js";import{L as r}from"./Link-BgX08Hyd.js";const u={children:{control:{type:"text"},description:"Content of the alert inline. `message` prop has been deprecated.",table:{type:{summary:"ReactNode"}}},layout:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout of the `actionBar` in the component.",table:{type:{summary:"horizontal | vertical"},defaultValue:{summary:"vertical"}}},severity:{control:{type:"select"},options:["info","warning","error","success",void 0],description:"Severity of the alert inline.",table:{type:{summary:"info | warning | error | success"}}},actionBar:{description:"Action bar content, typically buttons.",table:{type:{summary:"ReactNode"}}},labelDismiss:{control:{type:"text"},description:"Label for the dismiss button.",table:{type:{summary:"string"},defaultValue:{summary:"Dismiss"}}},onDismiss:{action:"dismiss",description:"Callback when the alert is dismissed.",table:{type:{summary:"() => void"}}}},{fn:t}=__STORYBOOK_MODULE_TEST__,p={title:"Components/AlertInline",component:n},o={render:({...l})=>e.jsx("div",{className:s("flex","flex-row","w-xxl"),"data-testid":"wrapper",children:e.jsx(n,{...l,actionBar:e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"default",label:"Learn more"}),e.jsx(r,{isExternal:!0,children:"Link"})]})})}),parameters:{chromatic:{disableSnapshot:!0}},args:{severity:"info",title:"Components/Sed sed fermentum lacus. Integer consequat ut arcu non molestie",onDismiss:t(),children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis, tellus laoreet faucibus commodo.",layout:"vertical"},argTypes:u},c={render:({severity:l,...m})=>e.jsx("div",{className:s("flex","flex-row","p-s"),style:{inlineSize:"365px"},"data-testid":"wrapper",children:e.jsx(n,{severity:l||"info",...m})}),args:{children:"Licence will expire in 4 days"},argTypes:u,parameters:{design:{type:"figma",url:"https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=20351-2534&t=zfp8iCXBhJ5IIKm5-4"},chromatic:{disableSnapshot:!0}}};function a({children:l}){return e.jsx("h2",{className:s("text-default","font-heading-s"),children:l})}const d={render:()=>e.jsxs("div",{className:s("flex","flex-row","gap-l"),children:[e.jsxs("div",{className:s("flex","flex-col","gap-m"),style:{inlineSize:400},children:[e.jsx(a,{children:"Error"}),e.jsx(n,{severity:"error",children:"Password must contain at least one capital letter and one number."}),e.jsx(a,{children:"Warning"}),e.jsx(n,{severity:"warning",children:"Payment solution currently unavailable"}),e.jsx(a,{children:"Info"}),e.jsx(n,{severity:"info",children:"Licence will expire in 4 days"}),e.jsx(a,{children:"Success"}),e.jsx(n,{severity:"success",children:"Invitation sent"}),e.jsx(a,{children:"With title"}),e.jsx(n,{title:"Invite users",children:"Enter eail addresses to invite new users"}),e.jsx(a,{children:"With action"}),e.jsx(n,{severity:"error",title:"Connection interrupted",actionBar:e.jsx(i,{variant:"default",label:"Re-connect"}),children:"Could not complete request due to lost connection"}),e.jsx(n,{layout:"horizontal",severity:"error",onDismiss:t(),actionBar:e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"default",label:"Action"}),e.jsx(r,{href:"#",isExternal:!0,children:"Label"})]}),children:"Password must contain at least one capital letter and one number."}),e.jsx(a,{children:"Is dismissable"}),e.jsx(n,{severity:"info",title:"New beta features",actionBar:e.jsx(i,{variant:"default",label:"Learn more"}),onDismiss:t(),children:"Try out new beta features"}),e.jsx(n,{severity:"success",layout:"horizontal",actionBar:e.jsx(i,{variant:"default",label:"View details"}),onDismiss:t(),children:"Changes saved"}),e.jsx(n,{severity:"warning",onDismiss:t(),children:"Consider a stronger password"}),e.jsx(a,{children:"Text wrapping"}),e.jsx(n,{severity:"info",title:"Sed sed fermentum lacus. Integer consequat ut arcu non molestie",actionBar:e.jsx(i,{variant:"default",label:"Learn more"}),children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis, tellus laoreet faucibus commodo."}),e.jsx(n,{severity:"info",title:"TestOverflowWithOnlyOneBigWordThatShouldBeMoreThanParentContainerAndShouldWrap",actionBar:e.jsx(i,{variant:"default",label:"Learn more"}),children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis, tellus laoreet faucibus commodo."}),e.jsx(n,{severity:"info",title:"Sed sed fermentum lacus. Integer consequat ut arcu non molestie",actionBar:e.jsx(i,{variant:"default",label:"Learn more"}),children:"TestOverflowWithOnlyOneBigWordThatShouldBeMoreThanParentContainerAndShouldWrap"})]}),e.jsxs("div",{className:s("flex","flex-col","gap-m"),children:[e.jsxs("div",{className:s("flex","flex-col","gap-m"),children:[e.jsx(a,{children:"Layout"}),e.jsx(n,{title:"Horizontal",severity:"info",layout:"horizontal",actionBar:e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"default",label:"Learn more"}),e.jsx(r,{isExternal:!0,children:"Link"})]}),onDismiss:t(),children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e.jsxs(n,{severity:"info",layout:"horizontal",actionBar:e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"default",label:"Learn more"}),e.jsx(r,{isExternal:!0,children:"Link"})]}),onDismiss:t(),children:[e.jsx("i",{children:"Horizontal without title."})," Lorem ipsum dolor sit amet consectetur adipisicing elit."]}),e.jsxs(n,{severity:"info",layout:"horizontal",actionBar:e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"default",label:"Learn more"}),e.jsx(r,{isExternal:!0,children:"Link"})]}),onDismiss:t(),children:[e.jsx("i",{children:"Horizontal without title and a really long message."})," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos fugit odit pariatur obcaecati. Totam tenetur blanditiis itaque repellat minima quibusdam, sint quasi mollitia! Quibusdam hic odio et amet, aperiam delectus!"]}),e.jsx(n,{title:"Vertical",severity:"info",layout:"vertical",actionBar:e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"default",label:"Learn more"}),e.jsx(r,{isExternal:!0,children:"Link"})]}),onDismiss:t(),children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e.jsxs(n,{severity:"info",actionBar:e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"default",label:"Learn more"}),e.jsx(r,{isExternal:!0,children:"Link"})]}),onDismiss:t(),children:[e.jsx("i",{children:"Vertical without title."})," Lorem ipsum dolor sit amet consectetur adipisicing elit."]}),e.jsxs(n,{severity:"info",actionBar:e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"default",label:"Learn more"}),e.jsx(r,{isExternal:!0,children:"Link"})]}),onDismiss:t(),children:[e.jsx("i",{children:"Vertical without title and a really long message."})," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi deleniti eos libero voluptas fuga, repudiandae eius illum facere suscipit odit voluptate. Obcaecati consequatur commodi aliquid soluta sed repellat, modi aperiam corrupti omnis ea, ratione corporis culpa reprehenderit cupiditate laboriosam? Ab!"]})]}),e.jsxs("div",{className:s("flex","flex-col","gap-m"),children:[e.jsx(a,{children:"Custom content"}),e.jsxs(n,{title:"Explore",severity:"info",children:[e.jsx("p",{children:"This feed is populated with Insights based on the available Categories. A Category groups Metrics together from which Insights can be found and appear here."}),e.jsxs("ul",{children:[e.jsx("li",{children:"To change what you see, click Categories and choose from what is available."}),e.jsx("li",{children:"To keep track of an Insight, click to “Follow” it. Any future insights will now also appear in the Following feed."}),e.jsx("li",{children:"To see the source of an Insight, click on the ... menu and then “Open source”"})]})]})]})]})]}),parameters:{controls:{disable:!0}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ({
    ...args
  }: AlertInlineProps) => <div className={classNames("flex", "flex-row", "w-xxl")} data-testid="wrapper">
      <AlertInline {...args} actionBar={<>
            <Button variant="default" label="Learn more" />
            <Link isExternal>Link</Link>
          </>} />
    </div>,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    severity: "info",
    title: "Components/Sed sed fermentum lacus. Integer consequat ut arcu non molestie",
    onDismiss: fn(),
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis, tellus laoreet faucibus commodo.",
    layout: "vertical"
  },
  argTypes: AlertInlineArgTypes
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: ({
    severity,
    ...rest
  }: Partial<AlertInlineProps>) => <div className={classNames("flex", "flex-row", "p-s")} style={{
    inlineSize: "365px"
  }} data-testid="wrapper">
      <AlertInline severity={severity || "info"} {...rest} />
    </div>,
  args: {
    children: "Licence will expire in 4 days"
  },
  argTypes: AlertInlineArgTypes,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=20351-2534&t=zfp8iCXBhJ5IIKm5-4"
    },
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-row", "gap-l")}>
      <div className={classNames("flex", "flex-col", "gap-m")} style={{
      inlineSize: 400
    }}>
        <H2>Error</H2>
        <AlertInline severity="error">Password must contain at least one capital letter and one number.</AlertInline>
        <H2>Warning</H2>
        <AlertInline severity="warning">Payment solution currently unavailable</AlertInline>
        <H2>Info</H2>
        <AlertInline severity="info">Licence will expire in 4 days</AlertInline>
        <H2>Success</H2>
        <AlertInline severity="success">Invitation sent</AlertInline>
        <H2>With title</H2>
        <AlertInline title="Invite users">Enter eail addresses to invite new users</AlertInline>
        <H2>With action</H2>
        <AlertInline severity="error" title="Connection interrupted" actionBar={<Button variant="default" label="Re-connect" />}>
          Could not complete request due to lost connection
        </AlertInline>
        <AlertInline layout="horizontal" severity="error" onDismiss={fn()} actionBar={<>
              <Button variant="default" label="Action" />
              <Link href="#" isExternal>
                Label
              </Link>
            </>}>
          Password must contain at least one capital letter and one number.
        </AlertInline>
        <H2>Is dismissable</H2>
        <AlertInline severity="info" title="New beta features" actionBar={<Button variant="default" label="Learn more" />} onDismiss={fn()}>
          Try out new beta features
        </AlertInline>
        <AlertInline severity="success" layout="horizontal" actionBar={<Button variant="default" label="View details" />} onDismiss={fn()}>
          Changes saved
        </AlertInline>
        <AlertInline severity="warning" onDismiss={fn()}>
          Consider a stronger password
        </AlertInline>
        <H2>Text wrapping</H2>
        <AlertInline severity="info" title="Sed sed fermentum lacus. Integer consequat ut arcu non molestie" actionBar={<Button variant="default" label="Learn more" />}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis, tellus laoreet faucibus commodo.
        </AlertInline>
        <AlertInline severity="info" title="TestOverflowWithOnlyOneBigWordThatShouldBeMoreThanParentContainerAndShouldWrap" actionBar={<Button variant="default" label="Learn more" />}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis, tellus laoreet faucibus commodo.
        </AlertInline>
        <AlertInline severity="info" title="Sed sed fermentum lacus. Integer consequat ut arcu non molestie" actionBar={<Button variant="default" label="Learn more" />}>
          TestOverflowWithOnlyOneBigWordThatShouldBeMoreThanParentContainerAndShouldWrap
        </AlertInline>
      </div>

      <div className={classNames("flex", "flex-col", "gap-m")}>
        <div className={classNames("flex", "flex-col", "gap-m")}>
          <H2>Layout</H2>
          <AlertInline title="Horizontal" severity="info" layout="horizontal" actionBar={<>
                <Button variant="default" label="Learn more" />
                <Link isExternal>Link</Link>
              </>} onDismiss={fn()}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </AlertInline>
          <AlertInline severity="info" layout="horizontal" actionBar={<>
                <Button variant="default" label="Learn more" />
                <Link isExternal>Link</Link>
              </>} onDismiss={fn()}>
            <i>Horizontal without title.</i> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </AlertInline>
          <AlertInline severity="info" layout="horizontal" actionBar={<>
                <Button variant="default" label="Learn more" />
                <Link isExternal>Link</Link>
              </>} onDismiss={fn()}>
            <i>Horizontal without title and a really long message.</i> Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dignissimos fugit odit pariatur obcaecati. Totam tenetur blanditiis itaque repellat minima
            quibusdam, sint quasi mollitia! Quibusdam hic odio et amet, aperiam delectus!
          </AlertInline>

          <AlertInline title="Vertical" severity="info" layout="vertical" actionBar={<>
                <Button variant="default" label="Learn more" />
                <Link isExternal>Link</Link>
              </>} onDismiss={fn()}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </AlertInline>
          <AlertInline severity="info" actionBar={<>
                <Button variant="default" label="Learn more" />
                <Link isExternal>Link</Link>
              </>} onDismiss={fn()}>
            <i>Vertical without title.</i> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </AlertInline>
          <AlertInline severity="info" actionBar={<>
                <Button variant="default" label="Learn more" />
                <Link isExternal>Link</Link>
              </>} onDismiss={fn()}>
            <i>Vertical without title and a really long message.</i> Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Quasi deleniti eos libero voluptas fuga, repudiandae eius illum facere suscipit odit voluptate.
            Obcaecati consequatur commodi aliquid soluta sed repellat, modi aperiam corrupti omnis ea, ratione corporis
            culpa reprehenderit cupiditate laboriosam? Ab!
          </AlertInline>
        </div>
        <div className={classNames("flex", "flex-col", "gap-m")}>
          <H2>Custom content</H2>
          <AlertInline title="Explore" severity="info">
            <p>
              This feed is populated with Insights based on the available Categories. A Category groups Metrics together
              from which Insights can be found and appear here.
            </p>
            <ul>
              <li>To change what you see, click Categories and choose from what is available.</li>
              <li>
                To keep track of an Insight, click to “Follow” it. Any future insights will now also appear in the
                Following feed.
              </li>
              <li>To see the source of an Insight, click on the ... menu and then “Open source”</li>
            </ul>
          </AlertInline>
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...d.parameters?.docs?.source}}};const h=["Playground","Minimal","VisualTest"],b=Object.freeze(Object.defineProperty({__proto__:null,Minimal:c,Playground:o,VisualTest:d,__namedExportsOrder:h,default:p},Symbol.toStringTag,{value:"Module"}));export{o as P,b as S};
