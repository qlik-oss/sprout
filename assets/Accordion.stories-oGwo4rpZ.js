import{j as e}from"./iframe-B4-nXs83.js";import{F as o,a as i}from"./Filter-DrTBmiDb.js";import{A as a}from"./Accordion-H-Tm6Y7A.js";import{I as d}from"./IconButton-D-KEKYAI.js";import{c as n}from"./classNames-eIMwhIDK.js";import{M as f}from"./Menu-DW09POVa.js";import{B as I}from"./Button-Cv6yFaKa.js";import{T as g}from"./TextField-7zXX973B.js";const v={header:{control:{type:"text"},table:{type:{summary:"string"}}},description:{description:"Adds a description label to the accordion item.",control:{type:"text"},table:{type:{summary:"string"}}},value:{control:{type:"text"},table:{type:{summary:"string | number | readonly string[] | undefined"}}},children:{control:!1,description:"The content of the accordion that will be displayed/hidden.",table:{type:{summary:"ReactNode"}}},disabled:{description:"Disables the accordion item, preventing user interaction.",control:{type:"boolean"},table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},id:{control:{type:"text"},table:{type:{summary:"string"}}},openedDefault:{control:{type:"boolean"},description:"Initial opened state of the accordion item. Works only with behavior=isolated.",table:{type:{summary:"boolean"}}},width:{control:{type:"radio"},description:"When used alone you can use this property to make the accordion item width fit the content. It should never been used in an Accordion container",options:["full","compact"],table:{defaultValue:{summary:"full"},type:{summary:"full | compact"}}},icon:{description:"Adds an icon next to the label",control:{type:"object"},table:{type:{summary:"ReactNode"}}},chevronPosition:{description:"Controls the position of the chevron icon (arrow up/down).",control:{type:"select"},options:[void 0,"leading","trailing"],table:{type:{summary:"'leading' | 'trailing'"},defaultValue:{summary:"undefined"}}},affix:{description:"Adds custom content (like badges or menus).",control:{type:"select"},options:[void 0,"IconButton"],table:{type:{summary:"ReactNode"}}}},b={variant:{description:"Sets the visual style of the accordion.",control:{type:"radio"},options:["default","quiet"],table:{defaultValue:{summary:"default"},type:{summary:"default | quiet"}}},behavior:{control:{type:"radio"},description:"Controls the behavior of the accordion items. 'linked' means only one item can be opened at a time, 'isolated' allows multiple items to be opened simultaneously.",options:["linked","isolated"],table:{defaultValue:{summary:"linked"},type:{summary:"linked | isolated"}}},openedDefault:{control:{type:"number"},description:"Initial opened state of an accordion item.",table:{type:{summary:"number"}}},headerLevel:{control:{type:"select"},options:[2,3,4,5,6,void 0],description:"Specifies the heading level used for the header. Renders as an `<h2>` if `headerLevel={2}`, or a `<span>` if not set.",table:{type:{summary:"2 | 3 | 4 | 5 | 6 | undefined"}}},renderContent:{control:{type:"boolean"},description:"You can control if the content rendered when `opened={false}`",table:{type:{summary:"boolean"}}},children:{control:!1,description:"The Accordion.Item[] to be rendered within the container and controlled by it.",table:{type:{summary:"ReactElement[] | ReactElement"}}}},j={component:a.Item,title:"Components/Accordion"};function t(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:n("text-default","font-body-s"),children:"Quisque efficitur, magna sit amet tempor malesuada, orci mauris vestibulum enim, quis gravida est urna et ipsum. Nunc rutrum, magna id fermentum dignissim, magna sem volutpat risus, ut ultrices ipsum lacus vitae sapien. Curabitur sodales risus ac nibh efficitur, dapibus posuere ipsum bibendum. Proin erat ipsum, tempus in aliquet sed, auctor id sem. Maecenas ultrices, magna vitae pretium condimentum, ipsum lectus hendrerit est, a ultrices lacus odio in mi. Phasellus accumsan diam in metus dictum ultrices. In hac habitasse platea dictumst. Curabitur vestibulum vitae libero sit amet blandit. Nulla bibendum sollicitudin dolor at vehicula. Morbi quis viverra velit, eget ornare velit. Praesent porttitor sagittis nulla non vehicula. u"}),e.jsx(I,{variant:"primary",label:"ButtonLabel",onClick:()=>{}}),e.jsx(g,{label:"textfield",defaultValue:"one two three"})]})}const l={render:r=>{const c={...r,affix:r.affix==="IconButton"?e.jsx(d,{variant:"quiet",size:"small","aria-label":"More actions",onClick:x=>{x.stopPropagation()},icon:e.jsx(o,{height:void 0})}):r.affix};return e.jsx(a.Item,{...c,children:e.jsx(t,{})})},args:{id:"simple-panel",header:"simple panel",renderContent:!1,variant:"default"},argTypes:v,parameters:{chromatic:{disableSnapshot:!0}}},s={render:r=>e.jsxs(a.Container,{...r,children:[e.jsx(a.Item,{id:"panel-a",header:"first panel",children:e.jsx(t,{})}),e.jsx(a.Item,{id:"panel-b",header:"second panel",children:e.jsx(t,{})}),e.jsx(a.Item,{id:"panel-c",header:"third panel",children:e.jsx(t,{})})]}),args:{openedDefault:0,renderContent:!0,variant:"default",behavior:"linked"},argTypes:b,parameters:{chromatic:{disableSnapshot:!0}}},m={render:r=>e.jsx(a.Container,{...r,children:["a","b","c"].map(c=>e.jsx(a.Item,{id:`panel-${c}`,header:`panel ${c}`,children:e.jsx(t,{})},`panel-${c}`))}),args:{openedDefault:0,renderContent:!0,variant:"default",behavior:"linked"},argTypes:b,parameters:{chromatic:{disableSnapshot:!0}}},p={render:()=>e.jsxs(a.Container,{behavior:"isolated",children:[e.jsx(a.Item,{id:"panel-a",header:"first panel",openedDefault:!0,children:e.jsx(t,{})}),e.jsx(a.Item,{id:"panel-b",header:"second panel",openedDefault:!0,children:e.jsx(t,{})}),e.jsx(a.Item,{id:"panel-c",header:"third panel",openedDefault:!0,children:e.jsx(t,{})})]}),parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}}},h={render:()=>e.jsxs("div",{className:n("flex","flex-col","gap-xl"),children:[e.jsx("h2",{className:n("font-heading-m","text-default"),children:"Accordion container in default and quiet"}),e.jsxs("div",{className:n("flex","flex-row","gap-xl"),style:{inlineSize:"50vw"},children:[e.jsxs(a.Container,{variant:"default",children:[e.jsx(a.Item,{header:"HeaderLabel",openedDefault:!0,children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel","data-state":"hover",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel","data-state":"active",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel","data-state":"focus",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",disabled:!0,children:e.jsx(t,{})})]}),e.jsxs(a.Container,{variant:"quiet",renderContent:!0,children:[e.jsx(a.Item,{header:"HeaderLabel",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel","data-state":"hover",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel","data-state":"active",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel","data-state":"focus",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",disabled:!0,children:e.jsx(t,{})})]})]}),e.jsx("h2",{className:n("font-heading-m","text-default"),children:"Accordion.Item alone in full and compact"}),e.jsxs("div",{className:n("flex","flex-row","gap-xl"),style:{inlineSize:"50vw"},children:[e.jsxs("div",{className:n("flex","flex-col","gap-3xl"),style:{inlineSize:300},children:[e.jsx(a.Item,{header:"HeaderLabel",width:"full",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full","data-state":"hover",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full","data-state":"active",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full","data-state":"focus",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full",value:"ValueLabel",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full",description:"DescriptionLabel",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full",description:"Quisque efficitur, magna sit amet tempor malesuada, orci mauris vestibulum enim, quis gravida est urna et ipsum.",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full",icon:e.jsx(i,{}),children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full",icon:e.jsx(i,{}),description:"DescriptionLabel",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full",chevronPosition:"leading",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full",chevronPosition:"leading",value:"ValueLabel",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full",chevronPosition:"leading",icon:e.jsx(i,{}),children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full",affix:e.jsx(d,{variant:"quiet",size:"small","aria-label":"More actions",icon:e.jsx(o,{height:void 0})}),children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full",chevronPosition:"leading",affix:e.jsx(d,{variant:"quiet",size:"small","aria-label":"More actions",icon:e.jsx(o,{height:void 0})}),children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full",openedDefault:!0,children:e.jsx(t,{})})]}),e.jsxs("div",{className:n("flex","flex-col","gap-3xl"),style:{inlineSize:300},children:[e.jsx(a.Item,{header:"HeaderLabel",width:"compact",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"compact","data-state":"hover",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"compact","data-state":"active",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"compact","data-state":"focus",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"compact",value:"ValueLabel",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"compact",description:"DescriptionLabel",children:e.jsx(t,{})}),e.jsx(a.Item,{width:"compact",description:"Quisque efficitur, magna sit amet tempor malesuada, orci mauris vestibulum enim, quis gravida est urna.",header:"HeaderLabel",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"compact",icon:e.jsx(i,{}),children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"compact",icon:e.jsx(i,{}),description:"DescriptionLabel",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"compact",chevronPosition:"leading",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"compact",chevronPosition:"leading",value:"ValueLabel",children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"compact",chevronPosition:"leading",icon:e.jsx(i,{}),children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"compact",affix:e.jsx(d,{variant:"quiet",size:"small","aria-label":"More actions",icon:e.jsx(o,{height:void 0})}),children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"compact",chevronPosition:"leading",affix:e.jsx(d,{variant:"quiet",size:"small","aria-label":"More actions",icon:e.jsx(o,{height:void 0})}),children:e.jsx(t,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"compact",openedDefault:!0,children:e.jsx(t,{})})]})]})]}),parameters:{controls:{disable:!0},pseudo:{hover:'[data-state="hover"] > button',active:'[data-state="active"] > button',focusVisible:'[data-state="focus"] > button'}}},u={render:r=>e.jsx("div",{className:n("w-m","p-xl"),children:e.jsx(a.Item,{...r,children:"This accordion has a vertical menu as an affix element."})}),args:{header:"With Affix Menu",chevronPosition:"leading",affix:e.jsx(f.Trigger,{menu:e.jsxs(e.Fragment,{children:[e.jsx(f.Item,{onClick:r=>{r.stopPropagation()},children:"Create"}),e.jsx(f.Item,{onClick:r=>{r.stopPropagation()},children:"Edit"}),e.jsx(f.Item,{variant:"destructive",onClick:r=>{r.stopPropagation()},children:"Delete"})]}),children:e.jsx(d,{variant:"quiet",size:"small","aria-label":"More actions",icon:e.jsx(o,{height:void 0}),onClick:r=>{r.stopPropagation()}})})},parameters:{chromatic:{disableSnapshot:!0}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => {
    const mappedProps = {
      ...props,
      affix: props.affix === "IconButton" ? <IconButton variant="quiet" size="small" aria-label="More actions" onClick={(e: MouseEvent) => {
        e.stopPropagation();
      }} icon={<FilterIcon height={undefined} />} /> : props.affix
    };
    return <Accordion.Item {...mappedProps}>
        <SampleParagraph />
      </Accordion.Item>;
  },
  args: {
    id: "simple-panel",
    header: "simple panel",
    renderContent: false,
    variant: "default"
  },
  argTypes: AccordionItemArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Accordion.Container {...props}>
      <Accordion.Item id="panel-a" header="first panel">
        <SampleParagraph />
      </Accordion.Item>
      <Accordion.Item id="panel-b" header="second panel">
        <SampleParagraph />
      </Accordion.Item>
      <Accordion.Item id="panel-c" header="third panel">
        <SampleParagraph />
      </Accordion.Item>
    </Accordion.Container>,
  args: {
    openedDefault: 0,
    renderContent: true,
    variant: "default",
    behavior: "linked"
  },
  argTypes: AccordionContainerArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <Accordion.Container {...props}>
      {["a", "b", "c"].map(panelId => <Accordion.Item key={\`panel-\${panelId}\`} id={\`panel-\${panelId}\`} header={\`panel \${panelId}\`}>
          <SampleParagraph />
        </Accordion.Item>)}
    </Accordion.Container>,
  args: {
    openedDefault: 0,
    renderContent: true,
    variant: "default",
    behavior: "linked"
  },
  argTypes: AccordionContainerArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion.Container behavior="isolated">
      <Accordion.Item id="panel-a" header="first panel" openedDefault>
        <SampleParagraph />
      </Accordion.Item>
      <Accordion.Item id="panel-b" header="second panel" openedDefault>
        <SampleParagraph />
      </Accordion.Item>
      <Accordion.Item id="panel-c" header="third panel" openedDefault>
        <SampleParagraph />
      </Accordion.Item>
    </Accordion.Container>,
  parameters: {
    controls: {
      disable: true
    },
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "gap-xl")}>
      <h2 className={classNames("font-heading-m", "text-default")}>Accordion container in default and quiet</h2>
      <div className={classNames("flex", "flex-row", "gap-xl")} style={{
      inlineSize: "50vw"
    }}>
        <Accordion.Container variant="default">
          <Accordion.Item header="HeaderLabel" openedDefault>
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" data-state="hover">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" data-state="active">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" data-state="focus">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" disabled>
            <SampleParagraph />
          </Accordion.Item>
        </Accordion.Container>
        <Accordion.Container variant="quiet" renderContent>
          <Accordion.Item header="HeaderLabel">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" data-state="hover">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" data-state="active">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" data-state="focus">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" disabled>
            <SampleParagraph />
          </Accordion.Item>
        </Accordion.Container>
      </div>
      <h2 className={classNames("font-heading-m", "text-default")}>Accordion.Item alone in full and compact</h2>
      <div className={classNames("flex", "flex-row", "gap-xl")} style={{
      inlineSize: "50vw"
    }}>
        <div className={classNames("flex", "flex-col", "gap-3xl")} style={{
        inlineSize: 300
      }}>
          <Accordion.Item header="HeaderLabel" width="full">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="full" data-state="hover">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="full" data-state="active">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="full" data-state="focus">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="full" value="ValueLabel">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="full" description="DescriptionLabel">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="full" description="Quisque efficitur, magna sit amet tempor malesuada, orci mauris vestibulum enim, quis gravida est urna et ipsum.">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="full" icon={<DocumentationIcon />}>
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="full" icon={<DocumentationIcon />} description="DescriptionLabel">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="full" chevronPosition="leading">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="full" chevronPosition="leading" value="ValueLabel">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="full" chevronPosition="leading" icon={<DocumentationIcon />}>
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="full" affix={<IconButton variant="quiet" size="small" aria-label="More actions" icon={<FilterIcon height={undefined} />} />}>
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="full" chevronPosition="leading" affix={<IconButton variant="quiet" size="small" aria-label="More actions" icon={<FilterIcon height={undefined} />} />}>
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="full" openedDefault>
            <SampleParagraph />
          </Accordion.Item>
        </div>
        <div className={classNames("flex", "flex-col", "gap-3xl")} style={{
        inlineSize: 300
      }}>
          <Accordion.Item header="HeaderLabel" width="compact">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="compact" data-state="hover">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="compact" data-state="active">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="compact" data-state="focus">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="compact" value="ValueLabel">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="compact" description="DescriptionLabel">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item width="compact" description="Quisque efficitur, magna sit amet tempor malesuada, orci mauris vestibulum enim, quis gravida est urna." header="HeaderLabel">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="compact" icon={<DocumentationIcon />}>
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="compact" icon={<DocumentationIcon />} description="DescriptionLabel">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="compact" chevronPosition="leading">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="compact" chevronPosition="leading" value="ValueLabel">
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="compact" chevronPosition="leading" icon={<DocumentationIcon />}>
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="compact" affix={<IconButton variant="quiet" size="small" aria-label="More actions" icon={<FilterIcon height={undefined} />} />}>
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="compact" chevronPosition="leading" affix={<IconButton variant="quiet" size="small" aria-label="More actions" icon={<FilterIcon height={undefined} />} />}>
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="compact" openedDefault>
            <SampleParagraph />
          </Accordion.Item>
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    },
    pseudo: {
      hover: '[data-state="hover"] > button',
      active: '[data-state="active"] > button',
      focusVisible: '[data-state="focus"] > button'
    }
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("w-m", "p-xl")}>
      <Accordion.Item {...props}>This accordion has a vertical menu as an affix element.</Accordion.Item>
    </div>,
  args: {
    header: "With Affix Menu",
    chevronPosition: "leading",
    affix: <Menu.Trigger menu={<>
            <Menu.Item onClick={(e: MouseEvent) => {
        e.stopPropagation();
      }}>
              Create
            </Menu.Item>
            <Menu.Item onClick={(e: MouseEvent) => {
        e.stopPropagation();
      }}>
              Edit
            </Menu.Item>
            <Menu.Item variant="destructive" onClick={(e: MouseEvent) => {
        e.stopPropagation();
      }}>
              Delete
            </Menu.Item>
          </>}>
        <IconButton variant="quiet" size="small" aria-label="More actions" icon={<FilterIcon height={undefined} />} onClick={(e: MouseEvent) => {
        e.stopPropagation();
      }} />
      </Menu.Trigger>
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...u.parameters?.docs?.source}}};const A=["ItemPlayground","ContainerPlayground","AccordionItemLoopPlayground","AllOpened","VisualTest","WithAffix"],M=Object.freeze(Object.defineProperty({__proto__:null,AccordionItemLoopPlayground:m,AllOpened:p,ContainerPlayground:s,ItemPlayground:l,VisualTest:h,WithAffix:u,__namedExportsOrder:A,default:j},Symbol.toStringTag,{value:"Module"}));export{s as C,l as I,M as S,u as W};
