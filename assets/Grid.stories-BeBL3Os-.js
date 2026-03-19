import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import{n as e}from"./lib-Btq7eDYl.js";import{t}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t as n}from"./Grid-C5yl8Cak.js";import{hn as r}from"./iframe-DTk7xy32.js";var i=t(),a={title:`Components/Grid`},o={parameters:{chromatic:{modes:{breakpoint_s:{viewport:`s`},breakpoint_m:{viewport:`m`},breakpoint_l:{viewport:`l`}}}},render:()=>{let t=e();return(0,i.jsx)(n.Container,{className:t.classNames({s:[`p_l`],m:[`p_xl`]}),children:Array.from([,,,,,,]).map((e,a)=>(0,i.jsx)(n.Column,{s:`col_span_6`,m:`col_span_4`,className:t.classNames({s:[`border_dashed`,`p_m`],m:[`border_default`,`p_l`]},r(`items-center`,`flex`,`border-box`)),children:(0,i.jsx)(`span`,{children:a+1})},a))})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};var s=[`ResponsiveStyles`];export{o as ResponsiveStyles,s as __namedExportsOrder,a as default};