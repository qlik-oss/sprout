import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{Fn as n,O as r,an as i,pa as a,ra as o,xn as s}from"./iframe-UwarwtgL.js";import{o as c,s as l}from"./Modal.argTypes-CMXKCBgd.js";var u,d,f,p,m,h=e((()=>{o(),r(),l(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Modal/Composition/Root`,component:s.Root},p={render:e=>{let t=a({boxSizing:`border-box`});return(0,u.jsxs)(s.Root,{...e,ref:t.ref,children:[(0,u.jsx)(s.Header,{description:`Header description`,children:`Modal with composition of JSX elements`}),(0,u.jsx)(s.Content,{padding:!0,children:`Content explicitly wrapped into ModalContent`}),(0,u.jsxs)(s.Actions,{metaLabel:`3 licences left`,left:(0,u.jsx)(i,{name:`checkbox-name`,label:`Checkbox label`,onChange:d()}),children:[(0,u.jsx)(n,{variant:`secondary`,label:`Secondary action`,onClick:()=>{},justified:t.get({xxs:!0,xs:!0,s:!1})}),(0,u.jsx)(n,{variant:`primary`,label:`Primary action`,onClick:()=>{},justified:t.get({xxs:!0,xs:!0,s:!1})})]})]})},args:{visible:!0,width:`l`},argTypes:c,parameters:{chromatic:{disableSnapshot:!0}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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