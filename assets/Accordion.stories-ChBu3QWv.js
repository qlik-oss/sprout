import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Fn as n,In as r,K as i,Ln as a,Q as o,bn as s,en as c,jt as l,v as u,wt as d,xt as f}from"./iframe-B0xl5hqz.js";var p,m,h=e((()=>{p={header:{control:{type:`text`},table:{type:{summary:`string`}}},description:{description:`Adds a description label to the accordion item.`,control:{type:`text`},table:{type:{summary:`string`}}},value:{control:{type:`text`},table:{type:{summary:`string | number | readonly string[] | undefined`}}},children:{control:!1,description:`The content of the accordion that will be displayed/hidden.`,table:{type:{summary:`ReactNode`}}},disabled:{description:`Disables the accordion item, preventing user interaction.`,control:{type:`boolean`},table:{defaultValue:{summary:`false`},type:{summary:`boolean`}}},id:{control:{type:`text`},table:{type:{summary:`string`}}},openedDefault:{control:{type:`boolean`},description:`Initial opened state of the accordion item. Works only with behavior=isolated.`,table:{type:{summary:`boolean`}}},width:{control:{type:`radio`},description:`When used alone you can use this property to make the accordion item width fit the content. It should never been used in an Accordion container`,options:[`full`,`compact`],table:{defaultValue:{summary:`full`},type:{summary:`full | compact`}}},icon:{description:`Adds an icon next to the label`,control:{type:`object`},table:{type:{summary:`ReactNode`}}},chevronPosition:{description:`Controls the position of the chevron icon (arrow up/down).`,control:{type:`select`},options:[void 0,`leading`,`trailing`],table:{type:{summary:`'leading' | 'trailing'`},defaultValue:{summary:`undefined`}}},affix:{description:`Adds custom content (like badges or menus).`,control:{type:`select`},options:[void 0,`IconButton`],table:{type:{summary:`ReactNode`}}}},m={variant:{description:`Sets the visual style of the accordion.`,control:{type:`radio`},options:[`default`,`quiet`],table:{defaultValue:{summary:`default`},type:{summary:`default | quiet`}}},behavior:{control:{type:`radio`},description:`Controls the behavior of the accordion items. 'linked' means only one item can be opened at a time, 'isolated' allows multiple items to be opened simultaneously.`,options:[`linked`,`isolated`],table:{defaultValue:{summary:`linked`},type:{summary:`linked | isolated`}}},openedDefault:{control:{type:`number`},description:`Initial opened state of an accordion item.`,table:{type:{summary:`number`}}},headerLevel:{control:{type:`select`},options:[2,3,4,5,6,void 0],description:"Specifies the heading level used for the header. Renders as an `<h2>` if `headerLevel={2}`, or a `<span>` if not set.",table:{type:{summary:`2 | 3 | 4 | 5 | 6 | undefined`}}},renderContent:{control:{type:`boolean`},description:"You can control if the content rendered when `opened={false}`",table:{type:{summary:`boolean`}}},children:{control:!1,description:`The Accordion.Item[] to be rendered within the container and controlled by it.`,table:{type:{summary:`ReactElement[] | ReactElement`}}}}})),g=t({AccordionItemLoopPlayground:()=>S,AllOpened:()=>C,ContainerPlayground:()=>x,ItemPlayground:()=>b,VisualTest:()=>w,WithAffix:()=>T,__namedExportsOrder:()=>E,default:()=>y});function _(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`p`,{className:r(`text-default`,`font-body-s`),children:`Quisque efficitur, magna sit amet tempor malesuada, orci mauris vestibulum enim, quis gravida est urna et ipsum. Nunc rutrum, magna id fermentum dignissim, magna sem volutpat risus, ut ultrices ipsum lacus vitae sapien. Curabitur sodales risus ac nibh efficitur, dapibus posuere ipsum bibendum. Proin erat ipsum, tempus in aliquet sed, auctor id sem. Maecenas ultrices, magna vitae pretium condimentum, ipsum lectus hendrerit est, a ultrices lacus odio in mi. Phasellus accumsan diam in metus dictum ultrices. In hac habitasse platea dictumst. Curabitur vestibulum vitae libero sit amet blandit. Nulla bibendum sollicitudin dolor at vehicula. Morbi quis viverra velit, eget ornare velit. Praesent porttitor sagittis nulla non vehicula. u`}),(0,v.jsx)(d,{variant:`primary`,label:`ButtonLabel`,onClick:()=>{}}),(0,v.jsx)(o,{label:`textfield`,defaultValue:`one two three`})]})}var v,y,b,x,S,C,w,T,E,D=e((()=>{u(),l(),h(),v=a(),y={component:n.Item,title:`Components/Accordion`},b={render:e=>{let t={...e,affix:e.affix===`IconButton`?(0,v.jsx)(f,{variant:`quiet`,size:`small`,"aria-label":`More actions`,icon:(0,v.jsx)(c,{height:void 0})}):e.affix};return(0,v.jsx)(n.Item,{...t,children:(0,v.jsx)(_,{})})},args:{id:`simple-panel`,header:`simple panel`,renderContent:!1,variant:`default`},argTypes:p,parameters:{chromatic:{disableSnapshot:!0}}},x={render:e=>(0,v.jsxs)(n.Container,{...e,children:[(0,v.jsx)(n.Item,{id:`panel-a`,header:`first panel`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{id:`panel-b`,header:`second panel`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{id:`panel-c`,header:`third panel`,children:(0,v.jsx)(_,{})})]}),args:{openedDefault:0,renderContent:!0,variant:`default`,behavior:`linked`},argTypes:m,parameters:{chromatic:{disableSnapshot:!0}}},S={render:e=>(0,v.jsx)(n.Container,{...e,children:[`a`,`b`,`c`].map(e=>(0,v.jsx)(n.Item,{id:`panel-${e}`,header:`panel ${e}`,children:(0,v.jsx)(_,{})},`panel-${e}`))}),args:{openedDefault:0,renderContent:!0,variant:`default`,behavior:`linked`},argTypes:m,parameters:{chromatic:{disableSnapshot:!0}}},C={render:()=>(0,v.jsxs)(n.Container,{behavior:`isolated`,children:[(0,v.jsx)(n.Item,{id:`panel-a`,header:`first panel`,openedDefault:!0,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{id:`panel-b`,header:`second panel`,openedDefault:!0,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{id:`panel-c`,header:`third panel`,openedDefault:!0,children:(0,v.jsx)(_,{})})]}),parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}}},w={render:()=>(0,v.jsxs)(`div`,{className:r(`flex`,`flex-col`,`gap-xl`),children:[(0,v.jsx)(`h2`,{className:r(`font-heading-m`,`text-default`),children:`Accordion container in default and quiet`}),(0,v.jsxs)(`div`,{className:r(`flex`,`flex-row`,`gap-xl`),style:{inlineSize:`50vw`},children:[(0,v.jsxs)(n.Container,{variant:`default`,children:[(0,v.jsx)(n.Item,{header:`HeaderLabel`,openedDefault:!0,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,"data-state":`hover`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,"data-state":`active`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,"data-state":`focus`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,disabled:!0,children:(0,v.jsx)(_,{})})]}),(0,v.jsxs)(n.Container,{variant:`quiet`,renderContent:!0,children:[(0,v.jsx)(n.Item,{header:`HeaderLabel`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,"data-state":`hover`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,"data-state":`active`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,"data-state":`focus`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,disabled:!0,children:(0,v.jsx)(_,{})})]})]}),(0,v.jsx)(`h2`,{className:r(`font-heading-m`,`text-default`),children:`Accordion.Item alone in full and compact`}),(0,v.jsxs)(`div`,{className:r(`flex`,`flex-row`,`gap-xl`),style:{inlineSize:`50vw`},children:[(0,v.jsxs)(`div`,{className:r(`flex`,`flex-col`,`gap-3xl`),style:{inlineSize:300},children:[(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`full`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`full`,"data-state":`hover`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`full`,"data-state":`active`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`full`,"data-state":`focus`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`full`,value:`ValueLabel`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`full`,description:`DescriptionLabel`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`full`,description:`Quisque efficitur, magna sit amet tempor malesuada, orci mauris vestibulum enim, quis gravida est urna et ipsum.`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`full`,icon:(0,v.jsx)(s,{}),children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`full`,icon:(0,v.jsx)(s,{}),description:`DescriptionLabel`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`full`,chevronPosition:`leading`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`full`,chevronPosition:`leading`,value:`ValueLabel`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`full`,chevronPosition:`leading`,icon:(0,v.jsx)(s,{}),children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`full`,affix:(0,v.jsx)(f,{variant:`quiet`,size:`small`,"aria-label":`More actions`,icon:(0,v.jsx)(c,{height:void 0})}),children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`full`,chevronPosition:`leading`,affix:(0,v.jsx)(f,{variant:`quiet`,size:`small`,"aria-label":`More actions`,icon:(0,v.jsx)(c,{height:void 0})}),children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`full`,openedDefault:!0,children:(0,v.jsx)(_,{})})]}),(0,v.jsxs)(`div`,{className:r(`flex`,`flex-col`,`gap-3xl`),style:{inlineSize:300},children:[(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`compact`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`compact`,"data-state":`hover`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`compact`,"data-state":`active`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`compact`,"data-state":`focus`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`compact`,value:`ValueLabel`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`compact`,description:`DescriptionLabel`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{width:`compact`,description:`Quisque efficitur, magna sit amet tempor malesuada, orci mauris vestibulum enim, quis gravida est urna.`,header:`HeaderLabel`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`compact`,icon:(0,v.jsx)(s,{}),children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`compact`,icon:(0,v.jsx)(s,{}),description:`DescriptionLabel`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`compact`,chevronPosition:`leading`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`compact`,chevronPosition:`leading`,value:`ValueLabel`,children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`compact`,chevronPosition:`leading`,icon:(0,v.jsx)(s,{}),children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`compact`,affix:(0,v.jsx)(f,{variant:`quiet`,size:`small`,"aria-label":`More actions`,icon:(0,v.jsx)(c,{height:void 0})}),children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`compact`,chevronPosition:`leading`,affix:(0,v.jsx)(f,{variant:`quiet`,size:`small`,"aria-label":`More actions`,icon:(0,v.jsx)(c,{height:void 0})}),children:(0,v.jsx)(_,{})}),(0,v.jsx)(n.Item,{header:`HeaderLabel`,width:`compact`,openedDefault:!0,children:(0,v.jsx)(_,{})})]})]})]}),parameters:{controls:{disable:!0},pseudo:{hover:`[data-state="hover"] > button`,active:`[data-state="active"] > button`,focusVisible:`[data-state="focus"] > button`}}},T={render:e=>(0,v.jsx)(`div`,{className:r(`w-m`,`p-xl`),children:(0,v.jsx)(n.Item,{...e,children:`This accordion has a vertical menu as an affix element.`})}),args:{header:`With Affix Menu`,chevronPosition:`leading`,affix:(0,v.jsx)(i.Trigger,{menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i.Item,{onClick:e=>{e.stopPropagation()},children:`Create`}),(0,v.jsx)(i.Item,{onClick:e=>{e.stopPropagation()},children:`Edit`}),(0,v.jsx)(i.Item,{variant:`destructive`,onClick:e=>{e.stopPropagation()},children:`Delete`})]}),children:(0,v.jsx)(f,{variant:`quiet`,size:`small`,"aria-label":`More actions`,icon:(0,v.jsx)(c,{height:void 0}),onClick:e=>{e.stopPropagation()}})})},parameters:{chromatic:{disableSnapshot:!0}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: props => {
    const mappedProps = {
      ...props,
      affix: props.affix === "IconButton" ? <IconButton variant="quiet" size="small" aria-label="More actions" icon={<MoreVerticalIcon height={undefined} />} /> : props.affix
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "gap-xl")}>
      <h2 className={classNames("font-heading-m", "text-default")}>
        Accordion container in default and quiet
      </h2>
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
      <h2 className={classNames("font-heading-m", "text-default")}>
        Accordion.Item alone in full and compact
      </h2>
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
          <Accordion.Item header="HeaderLabel" width="full" affix={<IconButton variant="quiet" size="small" aria-label="More actions" icon={<MoreVerticalIcon height={undefined} />} />}>
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="full" chevronPosition="leading" affix={<IconButton variant="quiet" size="small" aria-label="More actions" icon={<MoreVerticalIcon height={undefined} />} />}>
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
          <Accordion.Item header="HeaderLabel" width="compact" affix={<IconButton variant="quiet" size="small" aria-label="More actions" icon={<MoreVerticalIcon height={undefined} />} />}>
            <SampleParagraph />
          </Accordion.Item>
          <Accordion.Item header="HeaderLabel" width="compact" chevronPosition="leading" affix={<IconButton variant="quiet" size="small" aria-label="More actions" icon={<MoreVerticalIcon height={undefined} />} />}>
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("w-m", "p-xl")}>
      <Accordion.Item {...props}>
        This accordion has a vertical menu as an affix element.
      </Accordion.Item>
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
        <IconButton variant="quiet" size="small" aria-label="More actions" icon={<MoreVerticalIcon height={undefined} />} onClick={(e: MouseEvent) => {
        e.stopPropagation();
      }} />
      </Menu.Trigger>
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...T.parameters?.docs?.source}}},E=[`ItemPlayground`,`ContainerPlayground`,`AccordionItemLoopPlayground`,`AllOpened`,`VisualTest`,`WithAffix`]}));D();export{S as AccordionItemLoopPlayground,C as AllOpened,x as ContainerPlayground,b as ItemPlayground,w as VisualTest,T as WithAffix,E as __namedExportsOrder,y as default,D as n,g as t};