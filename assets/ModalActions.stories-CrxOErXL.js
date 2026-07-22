import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{Fn as n,O as r,an as i,pa as a,ra as o,ta as s,xn as c}from"./iframe-UwarwtgL.js";import{n as l,s as u}from"./Modal.argTypes-CMXKCBgd.js";var d,f,p,m,h=e((()=>{o(),r(),u(),d=t(),f={title:`Components/Modal/Composition/Actions`,component:c.Actions},p={render:e=>{let t=a({boxSizing:`border-box`});return(0,d.jsx)(`div`,{ref:t.ref,className:s(`max-w-3xl`),children:(0,d.jsxs)(c.Actions,{...e,children:[(0,d.jsx)(n,{variant:`secondary`,label:`Child action 1`,onClick:()=>{},justified:t.get({xxs:!0,s:!1})}),(0,d.jsx)(n,{variant:`primary`,label:`Child action 2`,onClick:()=>{},justified:t.get({xxs:!0,s:!1})})]})})},args:{metaLabel:`Modal actions meta label`,left:(0,d.jsx)(i,{label:`Left aligned checkbox`})},argTypes:l},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Actions`]}));h();export{p as Actions,m as __namedExportsOrder,f as default,h as t};