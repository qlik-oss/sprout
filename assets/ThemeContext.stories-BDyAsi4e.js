import{u as o,j as n}from"./iframe-B4-nXs83.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Components/ThemeContext",component:o},e={parameters:{chromatic:{disableSnapshot:!0}},render:()=>{const{isTouch:s}=o();return n.jsx("span",{children:s?"Touch device":"Non-touch device"})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {
      isTouch
    } = useTheme();
    return <span>{isTouch ? "Touch device" : "Non-touch device"}</span>;
  }
}`,...e.parameters?.docs?.source}}};const a=["UseThemeTouch"];export{e as UseThemeTouch,a as __namedExportsOrder,c as default};
