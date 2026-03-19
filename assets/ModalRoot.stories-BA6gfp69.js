import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import{a as e}from"./lib-Btq7eDYl.js";import{t}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t as n}from"./Modal-DrhKVLL7.js";import{F as r,J as i}from"./iframe-DaKWDHAC.js";import"./Icons-DlU_uI0S.js";import{o as a}from"./Modal.argTypes-C_fduVJt.js";var o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Modal/Composition/Root`,component:n.Root},l={render:t=>{let a=e({boxSizing:`border-box`});return(0,o.jsxs)(n.Root,{...t,ref:a.ref,children:[(0,o.jsx)(n.Header,{description:`Header description`,children:`Modal with composition of JSX elements`}),(0,o.jsx)(n.Content,{padding:!0,children:`Content explicitly wrapped into ModalContent`}),(0,o.jsxs)(n.Actions,{metaLabel:`3 licences left`,left:(0,o.jsx)(r,{name:`checkbox-name`,label:`Checkbox label`,onChange:s()}),children:[(0,o.jsx)(i,{variant:`secondary`,label:`Secondary action`,onClick:()=>{},justified:a.get({xxs:!0,xs:!0,s:!1})}),(0,o.jsx)(i,{variant:`primary`,label:`Primary action`,onClick:()=>{},justified:a.get({xxs:!0,xs:!0,s:!1})})]})]})},args:{visible:!0,width:`l`},argTypes:a,parameters:{chromatic:{disableSnapshot:!0}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};var u=[`Root`];export{l as Root,u as __namedExportsOrder,c as default};