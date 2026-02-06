import{r as p,j as m}from"./iframe-qjjAf_pH.js";import{t as l}from"./sprout-tokens-D9QRO1qB.js";import{t as s}from"./sprout-tokens-DrATkuH6.js";import{u as y}from"./useId-CYaNFQmj.js";import"./preload-helper-PPVm8Dsz.js";const S=Object.keys(l);function _(e){return S.includes(e)}function g(e){return Object.keys(e).filter(_)}function i(e){document.querySelector(`#${e}`)?.remove()}function k(e,o="body"){const r=y().replace(/:/g,"_");return p.useLayoutEffect(()=>{i(r);const t=g(e),c=document.createElement("style");c.id=r;const u=[];for(const a of t){const f=e[a];u.push(`  --sprout-${a.replace(/_/g,"-")}: ${f};
`)}c.innerText=`${o} {
${u.join("")}}
`,document.head.appendChild(c)},[e,o,r]),()=>{i(r)}}function d(e){return e.replace("--sprout-","").replace(/_/g,"-")}const v=Object.keys(s).reduce((e,o)=>{const r=d(o);return e[r]=s[o].$value,e},{}),b=Object.keys(s).reduce((e,o)=>{const r=d(o),t=s[o];return e[r]={control:t.$type==="color"?"color":"text",defaultValue:t.$value},e},{}),$={title:"Hooks/useStyleOverride"},n={render:e=>(k(e,"#foo"),m.jsx("div",{id:"foo",style:{blockSize:"100vh",inlineSize:"100vw",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:l.common_background_color_default,color:l.common_foreground_color_default},children:"useStyleOverride hook"})),args:v,argTypes:b,parameters:{layout:"fullscreen"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const T=["Default"];export{n as Default,T as __namedExportsOrder,$ as default};
