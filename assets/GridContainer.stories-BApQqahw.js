import{j as n}from"./iframe-CxjlquLv.js";import{a as l}from"./Grid.argTypes-DeEmhEIQ.js";import{G as o}from"./Grid-BzKgLqh5.js";import{c as a}from"./classNames-OYhIMgh8.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-BMjCkMv3.js";const d={title:"Components/Grid/Composition/Grid.Container"};function s({children:r}){return n.jsx("div",{className:a("border-default","border-box","flex","items-center","p-m"),children:r})}const _={argTypes:l,parameters:{chromatic:{modes:{breakpoint_s:{viewport:"s"},breakpoint_m:{viewport:"m"},breakpoint_l:{viewport:"l"},breakpoint_xl:{viewport:"xl"}}}},render:r=>n.jsxs(o.Container,{...r,children:[n.jsx(o.Column,{s:"col_span_16",m:"col_span_8",l:"col_span_4",children:n.jsx(s,{children:"s=col_span_16 m=col_span_8 l=col_span_4"})}),n.jsx(o.Column,{s:"col_span_16",m:"col_span_8",l:"col_span_4",children:n.jsx(s,{children:"s=col_span_16 m=col_span_8 l=col_span_4"})}),n.jsx(o.Column,{s:"col_span_16",m:"col_span_8",l:"col_span_4",children:n.jsx(s,{children:"s=col_span_16 m=col_span_8 l=col_span_4"})}),n.jsx(o.Column,{s:"col_span_16",m:"col_span_8",l:"col_span_4",children:n.jsx(s,{children:"s=col_span_16 m=col_span_8 l=col_span_4"})})]})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};const u=["GridContainer"];export{_ as GridContainer,u as __namedExportsOrder,d as default};
