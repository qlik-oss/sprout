import{n as e}from"./chunk-BneVvdWh.js";import{Gn as t,Kn as n,Ln as r}from"./iframe-B0xl5hqz.js";import{c as i,d as a,f as o,l as s,p as c,r as l,t as u}from"./Content-C41FVtgA.js";var d,f,p,m,h,g,_;e((()=>{t(),o(),d=r(),f={title:`CSS/sprout-css-modules/spacing`},p=[{name:`p`,values:[`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`px`,values:[`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`py`,values:[`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`,`density-s`,`density-y`,`density-l`,`density-xl`,`density-xxl`,`density-3xl`]},{name:`pt`,values:[`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`pr`,values:[`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`pb`,values:[`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`pl`,values:[`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]}],m={name:`padding`,parameters:{controls:{disable:!0}},render:()=>(0,d.jsx)(`div`,{className:n.classNames(...u,`flex-col`,`border-none`,`gap-0`),children:p.map(e=>(0,d.jsx)(`div`,{className:n.classNames(...s),children:e.values.map(t=>{let r=`${e.name}-${t}`;return(0,d.jsxs)(`div`,{className:n.classNames(...i),children:[(0,d.jsx)(a,{children:r}),(0,d.jsx)(`div`,{className:n.classNames(...c(l,`p-xl`),r),children:`content`})]},r)})},e.name))})},h=[{name:`m`,values:[`auto`,`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`mx`,values:[`auto`,`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`my`,values:[`auto`,`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`mt`,values:[`auto`,`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`mr`,values:[`auto`,`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`mb`,values:[`auto`,`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]},{name:`ml`,values:[`auto`,`0`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`]}],g={name:`margin`,parameters:{controls:{disable:!0}},render:()=>(0,d.jsx)(`div`,{className:n.classNames(...u,`flex-col`,`border-none`,`gap-0`),children:h.map(e=>(0,d.jsx)(`div`,{className:n.classNames(...s),children:e.values.map(t=>(0,d.jsxs)(`div`,{className:n.classNames(...i),children:[(0,d.jsxs)(a,{children:[e.name,`-`,t]}),(0,d.jsx)(`div`,{className:n.classNames(`border-default`),children:(0,d.jsx)(`div`,{className:n.classNames(...l,`${e.name}_${t}`),children:`content`})})]},`${e.name}-${t}`))},e.name))})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Padding`,`Margin`]}))();export{g as Margin,m as Padding,_ as __namedExportsOrder,f as default};