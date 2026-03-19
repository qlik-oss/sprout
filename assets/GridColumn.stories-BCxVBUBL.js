import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t}from"./Grid-C5yl8Cak.js";import{hn as n}from"./iframe-DTk7xy32.js";import{t as r}from"./Grid.argTypes-DYXAUTTm.js";var i=e(),a={title:`Components/Grid/Composition/Grid.Column`,component:t.Column,argTypes:r};function o({children:e}){return(0,i.jsx)(`div`,{className:n(`border-default`,`border-box`,`flex`,`items-center`,`p-m`),children:e})}var s={render:e=>(0,i.jsxs)(t.Container,{className:n(`bg-default`,`text-default`),children:[(0,i.jsx)(t.Column,{...e,children:(0,i.jsx)(o,{children:`demo`})}),(0,i.jsx)(t.Column,{s:`col_span_16`,m:`col_span_8`,l:`col_span_4`,children:(0,i.jsx)(o,{children:`s=col_span_16 m=col_span_8 l=col_span_4`})}),(0,i.jsx)(t.Column,{s:`col_span_16`,m:`col_span_8`,l:`col_span_4`,children:(0,i.jsx)(o,{children:`s=col_span_16 m=col_span_8 l=col_span_4`})}),(0,i.jsx)(t.Column,{s:`col_span_16`,m:`col_span_8`,l:`col_span_4`,children:(0,i.jsx)(o,{children:`s=col_span_16 m=col_span_8 l=col_span_4`})})]}),args:{s:`col_span_16`,m:`col_span_8`,l:`col_span_4`},argTypes:r};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Grid.Container className={classNames("bg-default", "text-default")}>
        <Grid.Column {...props}>
          <Item>demo</Item>
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
  },
  args: {
    s: "col_span_16",
    m: "col_span_8",
    l: "col_span_4"
  },
  argTypes: GridColumnArgTypes
}`,...s.parameters?.docs?.source}}};var c=[`GridColumn`];export{s as GridColumn,c as __namedExportsOrder,a as default};