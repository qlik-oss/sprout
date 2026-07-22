import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{d as t,t as n}from"./lib-BpkjS7pE.js";import{Jt as r,Mt as i,cn as a,ki as o,t as s}from"./sprout-react-KA55n9ke.js";import{t as c}from"./jsx-runtime-Bq1bXGty.js";import{n as l,s as u}from"./Modal.argTypes-D80wlyrJ.js";var d,f,p,m,h=e((()=>{n(),s(),u(),d=c(),f={title:`Components/Modal/Composition/Actions`,component:r.Actions},p={render:e=>{let n=t({boxSizing:`border-box`});return(0,d.jsx)(`div`,{ref:n.ref,className:o(`max-w-3xl`),children:(0,d.jsxs)(r.Actions,{...e,children:[(0,d.jsx)(a,{variant:`secondary`,label:`Child action 1`,onClick:()=>{},justified:n.get({xxs:!0,s:!1})}),(0,d.jsx)(a,{variant:`primary`,label:`Child action 2`,onClick:()=>{},justified:n.get({xxs:!0,s:!1})})]})})},args:{metaLabel:`Modal actions meta label`,left:(0,d.jsx)(i,{label:`Left aligned checkbox`})},argTypes:l},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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