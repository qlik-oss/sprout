import{n as e}from"./chunk-BneVvdWh.js";import{Ln as t,Rn as n,Wn as r,_t as i,ct as a,v as o,wt as s}from"./iframe-B0xl5hqz.js";import{o as c,s as l}from"./Modal.argTypes-CmTWBKne.js";var u,d,f,p,m,h=e((()=>{n(),o(),l(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Modal/Composition/Root`,component:i.Root},p={render:e=>{let t=r({boxSizing:`border-box`});return(0,u.jsxs)(i.Root,{...e,ref:t.ref,children:[(0,u.jsx)(i.Header,{description:`Header description`,children:`Modal with composition of JSX elements`}),(0,u.jsx)(i.Content,{padding:!0,children:`Content explicitly wrapped into ModalContent`}),(0,u.jsxs)(i.Actions,{metaLabel:`3 licences left`,left:(0,u.jsx)(a,{name:`checkbox-name`,label:`Checkbox label`,onChange:d()}),children:[(0,u.jsx)(s,{variant:`secondary`,label:`Secondary action`,onClick:()=>{},justified:t.get({xxs:!0,xs:!0,s:!1})}),(0,u.jsx)(s,{variant:`primary`,label:`Primary action`,onClick:()=>{},justified:t.get({xxs:!0,xs:!0,s:!1})})]})]})},args:{visible:!0,width:`l`},argTypes:c,parameters:{chromatic:{disableSnapshot:!0}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const container = useContainer({
      boxSizing: "border-box"
    });
    return <Modal.Root {...props} ref={container.ref}>
        <Modal.Header description="Header description">
          Modal with composition of JSX elements
        </Modal.Header>
        <Modal.Content padding>
          Content explicitly wrapped into ModalContent
        </Modal.Content>
        <Modal.Actions metaLabel="3 licences left" left={<Checkbox name="checkbox-name" label="Checkbox label" onChange={fn()} />}>
          <Button variant="secondary" label="Secondary action" onClick={() => {}} justified={container.get<boolean>({
          xxs: true,
          xs: true,
          s: false
        })} />
          <Button variant="primary" label="Primary action" onClick={() => {}} justified={container.get<boolean>({
          xxs: true,
          xs: true,
          s: false
        })} />
        </Modal.Actions>
      </Modal.Root>;
  },
  args: {
    visible: true,
    width: "l"
  },
  argTypes: ModalRootArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...p.parameters?.docs?.source}}},m=[`Root`]}));h();export{p as Root,m as __namedExportsOrder,f as default,h as t};