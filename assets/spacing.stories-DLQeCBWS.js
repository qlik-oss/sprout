import{j as s}from"./iframe-BQJExRCF.js";import{s as e}from"./sprout-DxA14K3u.js";import{P as o,C as t,b as c,c as x,B as d,o as i}from"./Content-DvZzG0Vr.js";import"./preload-helper-PPVm8Dsz.js";const S={title:"CSS/sprout-css-modules/spacing"},p=[{name:"p",values:["0","s","m","l","xl","xxl","3xl"]},{name:"px",values:["0","s","m","l","xl","xxl","3xl"]},{name:"py",values:["0","s","m","l","xl","xxl","3xl","density-s","density-y","density-l","density-xl","density-xxl","density-3xl"]},{name:"pt",values:["0","s","m","l","xl","xxl","3xl"]},{name:"pr",values:["0","s","m","l","xl","xxl","3xl"]},{name:"pb",values:["0","s","m","l","xl","xxl","3xl"]},{name:"pl",values:["0","s","m","l","xl","xxl","3xl"]}],n={name:"padding",parameters:{controls:{disable:!0}},render:()=>s.jsx("div",{className:e.classNames(...d,"flex-col","border-none","gap-0"),children:p.map(a=>s.jsx("div",{className:e.classNames(...x),children:a.values.map(l=>{const r=`${a.name}-${l}`;return s.jsxs("div",{className:e.classNames(...c),children:[s.jsx(o,{children:r}),s.jsx("div",{className:e.classNames(...i(t,"p-xl"),r),children:"content"})]},r)})},a.name))})},u=[{name:"m",values:["auto","0","s","m","l","xl","xxl","3xl"]},{name:"mx",values:["auto","0","s","m","l","xl","xxl","3xl"]},{name:"my",values:["auto","0","s","m","l","xl","xxl","3xl"]},{name:"mt",values:["auto","0","s","m","l","xl","xxl","3xl"]},{name:"mr",values:["auto","0","s","m","l","xl","xxl","3xl"]},{name:"mb",values:["auto","0","s","m","l","xl","xxl","3xl"]},{name:"ml",values:["auto","0","s","m","l","xl","xxl","3xl"]}],m={name:"margin",parameters:{controls:{disable:!0}},render:()=>s.jsx("div",{className:e.classNames(...d,"flex-col","border-none","gap-0"),children:u.map(a=>s.jsx("div",{className:e.classNames(...x),children:a.values.map(l=>s.jsxs("div",{className:e.classNames(...c),children:[s.jsxs(o,{children:[a.name,"-",l]}),s.jsx("div",{className:e.classNames("border-default"),children:s.jsx("div",{className:e.classNames(...t,`${a.name}_${l}`),children:"content"})})]},`${a.name}-${l}`))},a.name))})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "padding",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={sprout.classNames(...BOX_CLASSES, "flex-col", "border-none", "gap-0")}>
      {PADDING_PROPERTIES.map(property => <div key={property.name} className={sprout.classNames(...PROPERTY_ROW_PROPS)}>
          {property.values.map(value => {
        const className = \`\${property.name}-\${value}\` as AllClasses;
        return <div key={className} className={sprout.classNames(...PROPERTY_COL_PROPS)}>
                <PropertyValue>{className}</PropertyValue>
                <div className={sprout.classNames(...omit(CONTENT_CLASSES, "p-xl"), className)}>
                  content
                </div>
              </div>;
      })}
        </div>)}
    </div>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "margin",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={sprout.classNames(...BOX_CLASSES, "flex-col", "border-none", "gap-0")}>
      {MARGIN_PROPERTIES.map(property => <div key={property.name} className={sprout.classNames(...PROPERTY_ROW_PROPS)}>
          {property.values.map(value => <div key={\`\${property.name}-\${value}\`} className={sprout.classNames(...PROPERTY_COL_PROPS)}>
              <PropertyValue>
                {property.name}-{value}
              </PropertyValue>
              <div className={sprout.classNames("border-default")}>
                <div className={sprout.classNames(...CONTENT_CLASSES, \`\${property.name}_\${value}\` as AllClasses)}>
                  content
                </div>
              </div>
            </div>)}
        </div>)}
    </div>
}`,...m.parameters?.docs?.source}}};const O=["Padding","Margin"];export{m as Margin,n as Padding,O as __namedExportsOrder,S as default};
