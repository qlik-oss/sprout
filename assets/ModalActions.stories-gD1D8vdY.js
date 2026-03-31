import{n as e}from"./chunk-BneVvdWh.js";import{In as t,Ln as n,Rn as r,Wn as i,_t as a,ct as o,v as s,wt as c}from"./iframe-B0xl5hqz.js";import{n as l,s as u}from"./Modal.argTypes-CmTWBKne.js";var d,f,p,m,h=e((()=>{r(),s(),u(),d=n(),f={title:`Components/Modal/Composition/Actions`,component:a.Actions},p={render:e=>{let n=i({boxSizing:`border-box`});return(0,d.jsx)(`div`,{ref:n.ref,className:t(`max-w-3xl`),children:(0,d.jsxs)(a.Actions,{...e,children:[(0,d.jsx)(c,{variant:`secondary`,label:`Child action 1`,onClick:()=>{},justified:n.get({xxs:!0,s:!1})}),(0,d.jsx)(c,{variant:`primary`,label:`Child action 2`,onClick:()=>{},justified:n.get({xxs:!0,s:!1})})]})})},args:{metaLabel:`Modal actions meta label`,left:(0,d.jsx)(o,{label:`Left aligned checkbox`})},argTypes:l},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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