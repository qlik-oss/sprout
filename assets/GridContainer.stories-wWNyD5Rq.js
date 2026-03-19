import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t}from"./Grid-DlCeueRz.js";import{hn as n}from"./iframe-DaKWDHAC.js";import{n as r}from"./Grid.argTypes-DYXAUTTm.js";var i=e(),a={title:`Components/Grid/Composition/Grid.Container`};function o({children:e}){return(0,i.jsx)(`div`,{className:n(`border-default`,`border-box`,`flex`,`items-center`,`p-m`),children:e})}var s={argTypes:r,parameters:{chromatic:{modes:{breakpoint_s:{viewport:`s`},breakpoint_m:{viewport:`m`},breakpoint_l:{viewport:`l`},breakpoint_xl:{viewport:`xl`}}}},render:e=>(0,i.jsxs)(t.Container,{...e,children:[(0,i.jsx)(t.Column,{s:`col_span_16`,m:`col_span_8`,l:`col_span_4`,children:(0,i.jsx)(o,{children:`s=col_span_16 m=col_span_8 l=col_span_4`})}),(0,i.jsx)(t.Column,{s:`col_span_16`,m:`col_span_8`,l:`col_span_4`,children:(0,i.jsx)(o,{children:`s=col_span_16 m=col_span_8 l=col_span_4`})}),(0,i.jsx)(t.Column,{s:`col_span_16`,m:`col_span_8`,l:`col_span_4`,children:(0,i.jsx)(o,{children:`s=col_span_16 m=col_span_8 l=col_span_4`})}),(0,i.jsx)(t.Column,{s:`col_span_16`,m:`col_span_8`,l:`col_span_4`,children:(0,i.jsx)(o,{children:`s=col_span_16 m=col_span_8 l=col_span_4`})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  argTypes: GridContainerArgTypes,
  parameters: {
    chromatic: {
      modes: {
        breakpoint_s: {
          viewport: "s" // 480
        },
        breakpoint_m: {
          viewport: "m" // 768
        },
        breakpoint_l: {
          viewport: "l" // 1280
        },
        breakpoint_xl: {
          viewport: "xl" // 1768
        }
      }
    }
  },
  render: props => {
    return <Grid.Container {...props}>
        <Grid.Column s="col_span_16" m="col_span_8" l="col_span_4">
          <Item>s=col_span_16 m=col_span_8 l=col_span_4</Item>
        </Grid.Column>
        <Grid.Column s="col_span_16" m="col_span_8" l="col_span_4">
          <Item>s=col_span_16 m=col_span_8 l=col_span_4</Item>
        </Grid.Column>
        <Grid.Column s="col_span_16" m="col_span_8" l="col_span_4">
          <Item>s=col_span_16 m=col_span_8 l=col_span_4</Item>
        </Grid.Column>
        <Grid.Column s="col_span_16" m="col_span_8" l="col_span_4">
          <Item>s=col_span_16 m=col_span_8 l=col_span_4</Item>
        </Grid.Column>
      </Grid.Container>;
  }
}`,...s.parameters?.docs?.source}}};var c=[`GridContainer`];export{s as GridContainer,c as __namedExportsOrder,a as default};