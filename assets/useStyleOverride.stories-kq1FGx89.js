import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import{t as e}from"./lib-Btq7eDYl.js";import{t}from"./sprout-tokens-DS4gz5z7.js";import{t as n}from"./jsx-runtime-BtS28q-4.js";import{t as r}from"./sprout-tokens-Dd0lQcAC.js";var i=n();function a(e){return e.replace(`--sprout-`,``).replace(/_/g,`-`)}var o=Object.keys(r).reduce((e,t)=>{let n=a(t);return e[n]=r[t].$value,e},{}),s=Object.keys(r).reduce((e,t)=>{let n=a(t),i=r[t];return e[n]={control:i.$type===`color`?`color`:`text`,defaultValue:i.$value},e},{}),c={title:`Hooks/useStyleOverride`},l={render:n=>(e(n,`#foo`),(0,i.jsx)(`div`,{id:`foo`,style:{blockSize:`100vh`,inlineSize:`100vw`,display:`flex`,justifyContent:`center`,alignItems:`center`,backgroundColor:t.common_background_color_default,color:t.common_foreground_color_default},children:`useStyleOverride hook`})),args:o,argTypes:s,parameters:{layout:`fullscreen`}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};var u=[`Default`];export{l as Default,u as __namedExportsOrder,c as default};