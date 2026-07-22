import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{bt as t,ki as n,t as r}from"./sprout-react-KA55n9ke.js";import{t as i}from"./jsx-runtime-Bq1bXGty.js";import{r as a,t as o}from"./Grid.argTypes-kpCpPBh-.js";function s({children:e}){return(0,c.jsx)(`div`,{className:n(`border-default`,`border-box`,`flex`,`items-center`,`p-m`),children:e})}var c,l,u,d,f=e((()=>{r(),a(),c=i(),l={title:`Components/Grid/Composition/Grid.Column`,component:t.Column,argTypes:o},u={render:e=>(0,c.jsxs)(t.Container,{className:n(`bg-default`,`text-default`),children:[(0,c.jsx)(t.Column,{...e,children:(0,c.jsx)(s,{children:`demo`})}),(0,c.jsx)(t.Column,{s:`col_span_16`,m:`col_span_8`,l:`col_span_4`,children:(0,c.jsx)(s,{children:`s=col_span_16 m=col_span_8 l=col_span_4`})}),(0,c.jsx)(t.Column,{s:`col_span_16`,m:`col_span_8`,l:`col_span_4`,children:(0,c.jsx)(s,{children:`s=col_span_16 m=col_span_8 l=col_span_4`})}),(0,c.jsx)(t.Column,{s:`col_span_16`,m:`col_span_8`,l:`col_span_4`,children:(0,c.jsx)(s,{children:`s=col_span_16 m=col_span_8 l=col_span_4`})})]}),args:{s:`col_span_16`,m:`col_span_8`,l:`col_span_4`},argTypes:o},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`GridColumn`]}));f();export{u as GridColumn,d as __namedExportsOrder,l as default,f as t};