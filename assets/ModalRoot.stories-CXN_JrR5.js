import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{d as t,t as n}from"./lib-BpkjS7pE.js";import{Jt as r,Mt as i,cn as a,t as o}from"./sprout-react-KA55n9ke.js";import{t as s}from"./jsx-runtime-Bq1bXGty.js";import{o as c,s as l}from"./Modal.argTypes-D80wlyrJ.js";var u,d,f,p,m,h=e((()=>{n(),o(),l(),u=s(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Modal/Composition/Root`,component:r.Root},p={render:e=>{let n=t({boxSizing:`border-box`});return(0,u.jsxs)(r.Root,{...e,ref:n.ref,children:[(0,u.jsx)(r.Header,{description:`Header description`,children:`Modal with composition of JSX elements`}),(0,u.jsx)(r.Content,{padding:!0,children:`Content explicitly wrapped into ModalContent`}),(0,u.jsxs)(r.Actions,{metaLabel:`3 licences left`,left:(0,u.jsx)(i,{name:`checkbox-name`,label:`Checkbox label`,onChange:d()}),children:[(0,u.jsx)(a,{variant:`secondary`,label:`Secondary action`,onClick:()=>{},justified:n.get({xxs:!0,xs:!0,s:!1})}),(0,u.jsx)(a,{variant:`primary`,label:`Primary action`,onClick:()=>{},justified:n.get({xxs:!0,xs:!0,s:!1})})]})]})},args:{visible:!0,width:`l`},argTypes:c,parameters:{chromatic:{disableSnapshot:!0}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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