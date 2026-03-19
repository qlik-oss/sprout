import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import{a as e}from"./lib-Btq7eDYl.js";import{t}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t as n}from"./Modal-G8c19tco.js";import{F as r,J as i,hn as a}from"./iframe-DTk7xy32.js";import"./Icons-DrVGfMuG.js";import{n as o}from"./Modal.argTypes-jAPysF7u.js";var s=t(),c={title:`Components/Modal/Composition/Actions`,component:n.Actions},l={render:t=>{let r=e({boxSizing:`border-box`});return(0,s.jsx)(`div`,{ref:r.ref,className:a(`max-w-3xl`),children:(0,s.jsxs)(n.Actions,{...t,children:[(0,s.jsx)(i,{variant:`secondary`,label:`Child action 1`,onClick:()=>{},justified:r.get({xxs:!0,s:!1})}),(0,s.jsx)(i,{variant:`primary`,label:`Child action 2`,onClick:()=>{},justified:r.get({xxs:!0,s:!1})})]})})},args:{metaLabel:`Modal actions meta label`,left:(0,s.jsx)(r,{label:`Left aligned checkbox`})},argTypes:o};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const container = useContainer({
      boxSizing: "border-box"
    });
    return <div ref={container.ref} className={classNames("max-w-3xl")}>
        <Modal.Actions {...props}>
          <Button variant="secondary" label="Child action 1" onClick={() => {}} justified={container.get<boolean>({
          xxs: true,
          s: false
        })} />
          <Button variant="primary" label="Child action 2" onClick={() => {}} justified={container.get<boolean>({
          xxs: true,
          s: false
        })} />
        </Modal.Actions>
      </div>;
  },
  args: {
    metaLabel: "Modal actions meta label",
    left: <Checkbox label="Left aligned checkbox" />
  },
  argTypes: ModalActionsArgTypes
}`,...l.parameters?.docs?.source}}};var u=[`Actions`];export{l as Actions,u as __namedExportsOrder,c as default};