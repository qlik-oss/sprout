import{j as r}from"./iframe-CxjlquLv.js";import{u as o,G as a}from"./Grid-BzKgLqh5.js";import{c as m}from"./classNames-OYhIMgh8.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-BMjCkMv3.js";const _={title:"Components/Grid"},e={parameters:{chromatic:{modes:{breakpoint_s:{viewport:"s"},breakpoint_m:{viewport:"m"},breakpoint_l:{viewport:"l"}}}},render:()=>{const s=o();return r.jsx(a.Container,{className:s.classNames({s:["p_l"],m:["p_xl"]}),children:Array.from(Array(6)).map((t,n)=>r.jsx(a.Column,{s:"col_span_6",m:"col_span_4",className:s.classNames({s:["border_dashed","p_m"],m:["border_default","p_l"]},m("items-center","flex","border-box")),children:r.jsx("span",{children:n+1})},n))})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
        }
      }
    }
  },
  render: () => {
    // FIXME: replace by the incoming useMedia when available in sprout-hooks
    const media = useMedia();
    return <Grid.Container className={media.classNames({
      s: ["p_l"],
      m: ["p_xl"]
    })}>
        {Array.from(Array(6)).map((_, index) => <Grid.Column
      // eslint-disable-next-line react/no-array-index-key
      key={index} s="col_span_6" m="col_span_4" className={media.classNames({
        s: ["border_dashed", "p_m"],
        m: ["border_default", "p_l"]
      }, classNames("items-center", "flex", "border-box"))}>
            <span>{index + 1}</span>
          </Grid.Column>)}
      </Grid.Container>;
  }
}`,...e.parameters?.docs?.source}}};const b=["ResponsiveStyles"];export{e as ResponsiveStyles,b as __namedExportsOrder,_ as default};
