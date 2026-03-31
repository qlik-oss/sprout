import{n as e}from"./chunk-BneVvdWh.js";import{Hn as t,In as n,Ln as r,Rn as i,nt as a,v as o}from"./iframe-B0xl5hqz.js";var s,c,l,u,d=e((()=>{i(),o(),s=r(),c={title:`Components/Grid`},l={parameters:{chromatic:{modes:{breakpoint_s:{viewport:`s`},breakpoint_m:{viewport:`m`},breakpoint_l:{viewport:`l`}}}},render:()=>{let e=t();return(0,s.jsx)(a.Container,{className:e.classNames({s:[`p_l`],m:[`p_xl`]}),children:Array.from([,,,,,,]).map((t,r)=>(0,s.jsx)(a.Column,{s:`col_span_6`,m:`col_span_4`,className:e.classNames({s:[`border_dashed`,`p_m`],m:[`border_default`,`p_l`]},n(`items-center`,`flex`,`border-box`)),children:(0,s.jsx)(`span`,{children:r+1})},r))})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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