import"./react-sE-G6KV_.js";import{t as e}from"./sprout-DH_pwd-g.js";import{t}from"./jsx-runtime-BtS28q-4.js";import{c as n,d as r,f as i,l as a,r as o,t as s}from"./Content-Bil5yaVg.js";var c=t(),l={title:`CSS/sprout-css-modules/spacing`},u=[{name:`p`,values:[`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`px`,values:[`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`py`,values:[`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`,`density-s`,`density-y`,`density-l`,`density-xl`,`density-xxl`,`density-3xl`]},{name:`pt`,values:[`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`pr`,values:[`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`pb`,values:[`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`pl`,values:[`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]}],d={name:`padding`,parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(`div`,{className:e.classNames(...s,`flex-col`,`border-none`,`gap-0`),children:u.map(t=>(0,c.jsx)(`div`,{className:e.classNames(...a),children:t.values.map(a=>{let s=`${t.name}-${a}`;return(0,c.jsxs)(`div`,{className:e.classNames(...n),children:[(0,c.jsx)(r,{children:s}),(0,c.jsx)(`div`,{className:e.classNames(...i(o,`p-xl`),s),children:`content`})]},s)})},t.name))})},f=[{name:`m`,values:[`auto`,`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`mx`,values:[`auto`,`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`my`,values:[`auto`,`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`mt`,values:[`auto`,`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`mr`,values:[`auto`,`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`mb`,values:[`auto`,`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`ml`,values:[`auto`,`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]}],p={name:`margin`,parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(`div`,{className:e.classNames(...s,`flex-col`,`border-none`,`gap-0`),children:f.map(t=>(0,c.jsx)(`div`,{className:e.classNames(...a),children:t.values.map(i=>(0,c.jsxs)(`div`,{className:e.classNames(...n),children:[(0,c.jsxs)(r,{children:[t.name,`-`,i]}),(0,c.jsx)(`div`,{className:e.classNames(`border-default`),children:(0,c.jsx)(`div`,{className:e.classNames(...o,`${t.name}_${i}`),children:`content`})})]},`${t.name}-${i}`))},t.name))})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};var m=[`Padding`,`Margin`];export{p as Margin,d as Padding,m as __namedExportsOrder,l as default};