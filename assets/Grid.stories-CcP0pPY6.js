import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,t as n}from"./lib-BpkjS7pE.js";import{bt as r,ki as i,t as a}from"./sprout-react-KA55n9ke.js";import{t as o}from"./jsx-runtime-Bq1bXGty.js";var s,c,l,u,d=e((()=>{n(),a(),s=o(),c={title:`Components/Grid`},l={parameters:{chromatic:{modes:{breakpoint_s:{viewport:`s`},breakpoint_m:{viewport:`m`},breakpoint_l:{viewport:`l`}}}},render:()=>{let e=t();return(0,s.jsx)(r.Container,{className:e.classNames({s:[`p_l`],m:[`p_xl`]}),children:Array.from([,,,,,,]).map((t,n)=>(0,s.jsx)(r.Column,{s:`col_span_6`,m:`col_span_4`,className:e.classNames({s:[`border_dashed`,`p_m`],m:[`border_default`,`p_l`]},i(`items-center`,`flex`,`border-box`)),children:(0,s.jsx)(`span`,{children:n+1})},n))})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    // FIXME: replace by the incoming useMedia when available in sprout-react-hooks
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
}`,...l.parameters?.docs?.source}}},u=[`ResponsiveStyles`]}));d();export{l as ResponsiveStyles,u as __namedExportsOrder,c as default,d as t};