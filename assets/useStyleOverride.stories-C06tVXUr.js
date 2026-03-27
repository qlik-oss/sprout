import{n as e}from"./chunk-BneVvdWh.js";import{Fn as t,In as n,Ln as r,Rn as i,zn as a}from"./iframe-RiXBydPV.js";import{n as o,t as s}from"./sprout-tokens-BQKe89Zd.js";function c(e){return e.replace(`--sprout-`,``).replace(/_/g,`-`)}var l,u,d,f,p,m,h=e((()=>{i(),s(),n(),l=t(),u=Object.keys(o).reduce((e,t)=>{let n=c(t);return e[n]=o[t].$value,e},{}),d=Object.keys(o).reduce((e,t)=>{let n=c(t),r=o[t];return e[n]={control:r.$type===`color`?`color`:`text`,defaultValue:r.$value},e},{}),f={title:`Hooks/useStyleOverride`},p={render:e=>(r(e,`#foo`),(0,l.jsx)(`div`,{id:`foo`,style:{blockSize:`100vh`,inlineSize:`100vw`,display:`flex`,justifyContent:`center`,alignItems:`center`,backgroundColor:a.common_background_color_default,color:a.common_foreground_color_default},children:`useStyleOverride hook`})),args:u,argTypes:d,parameters:{layout:`fullscreen`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (props: Record<string, string>) => {
    useStyleOverride(props, "#foo");
    return <div id="foo" style={{
      blockSize: "100vh",
      inlineSize: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: tokens.common_background_color_default,
      color: tokens.common_foreground_color_default
    }}>
        useStyleOverride hook
      </div>;
  },
  args: ARGS,
  argTypes: ARG_TYPES,
  parameters: {
    layout: "fullscreen"
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`]}));h();export{p as Default,m as __namedExportsOrder,f as default,h as t};