import{j as n}from"./iframe-BQJExRCF.js";import{G as a}from"./Grid.argTypes-DeEmhEIQ.js";import{G as s}from"./Grid-B-DYxgZZ.js";import{c as r}from"./classNames-B0wfWtWT.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-DxA14K3u.js";const i={title:"Components/Grid/Composition/Grid.Column",component:s.Column,argTypes:a};function o({children:_}){return n.jsx("div",{className:r("border-default","border-box","flex","items-center","p-m"),children:_})}const l={render:_=>n.jsxs(s.Container,{className:r("bg-default","text-default"),children:[n.jsx(s.Column,{..._,children:n.jsx(o,{children:"demo"})}),n.jsx(s.Column,{s:"col_span_16",m:"col_span_8",l:"col_span_4",children:n.jsx(o,{children:"s=col_span_16 m=col_span_8 l=col_span_4"})}),n.jsx(s.Column,{s:"col_span_16",m:"col_span_8",l:"col_span_4",children:n.jsx(o,{children:"s=col_span_16 m=col_span_8 l=col_span_4"})}),n.jsx(s.Column,{s:"col_span_16",m:"col_span_8",l:"col_span_4",children:n.jsx(o,{children:"s=col_span_16 m=col_span_8 l=col_span_4"})})]}),args:{s:"col_span_16",m:"col_span_8",l:"col_span_4"},argTypes:a};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const u=["GridColumn"];export{l as GridColumn,u as __namedExportsOrder,i as default};
