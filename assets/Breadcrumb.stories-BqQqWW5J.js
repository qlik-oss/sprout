import{r as y,j as e}from"./iframe-B9QkJTIx.js";import{c as o}from"./classNames-CL7ibyjj.js";import{L as n}from"./Link-niI7jMR3.js";import{B as b}from"./Button-DJuasLWt.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-DgR7PjaR.js";import"./icons-Duy9VSzr.js";import"./Button.module-C2ELNEem.js";import"./Badge--_cWWvgS.js";import"./Tooltip-Csm9nS2W.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-Dge73wkB.js";import"./useId-HR4iyljw.js";import"./ProgressCircular-CftNoQ2F.js";import"./useI18n-CoLWfcqJ.js";const N="_breadcrumb_kecu7_1",L="_entry_kecu7_6",p={breadcrumb:N,entry:L};function r({children:a,...t}){return e.jsx("li",{className:p.entry,...t,children:e.jsx("div",{className:o("flex","flex-row","border-box","gap-m","items-center","flex-nowrap"),children:a})})}r.displayName="BreadcrumbItem";const s=y.forwardRef(h);function k(a){return a.toLowerCase().replace(/\s+/g,"-")}function h({label:a,items:t,children:f,...x},B){const g=()=>t?t.map(({children:j,label:d,...m},I)=>{const u=I===t.length-1;return e.jsx(r,{children:e.jsxs(n,{withEllipsis:!0,"aria-current":u?"page":void 0,disabled:u,...m,children:[d,j]})},`${m.href}-${k(d||"")}`)}):null;return e.jsx("nav",{...x,className:p.breadcrumb,ref:B,"aria-label":a||"breadcrumb",children:e.jsxs("ol",{className:o("flex","flex-row","border-box","justify-start","items-center"),children:[g(),f]})})}h.displayName="Breadcrumb";const v={children:{control:!1,table:{type:{summary:"ReactNode"}}},items:{control:!1,description:"Renders a breadcrumb from an array of items (label + href). When using this API, required WAI-ARIA breadcrumb attributes are applied automatically.",table:{type:{summary:"BreadcrumbItemProps"}}},label:{control:"text",table:{type:{summary:"string"}}}},O={title:"Components/Breadcrumb",component:s,parameters:{},argTypes:v},c={render:a=>e.jsx(s,{...a,items:[{children:"Root",href:"/"},{children:"Folder",href:"/folder"},{children:"Page",href:"/page"}]}),parameters:{chromatic:{disableSnapshot:!0}}},i={render:()=>e.jsxs(s,{label:"composition breadcrum",children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"Home"})}),e.jsx(r,{children:e.jsx(n,{href:"/folder",children:"Folder"})}),e.jsx(r,{children:e.jsx(n,{href:"/folder/mypage","aria-current":"page",disabled:!0,children:"current page"})})]}),parameters:{chromatic:{disableSnapshot:!0}}},l={render:()=>e.jsxs("div",{className:o("flex","flex-col","gap-xl"),children:[e.jsxs(s,{label:"composition breadcrum",children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"Home"})}),e.jsx(r,{children:e.jsx(n,{href:"/folder",children:"Folder"})}),e.jsx(r,{children:e.jsx(n,{href:"/folder/mypage","aria-current":"page",disabled:!0,children:"current page"})})]}),e.jsx(s,{items:[{children:"Root",href:"/"},{children:"Folder",href:"/folder"},{children:"Page",href:"/page"}]}),e.jsxs("div",{className:o("flex","flex-col","border-default","p-m","w-fit"),children:[e.jsx("h2",{className:o("text-default","font-heading-s"),children:"Composition using buttons (not accessible)"}),e.jsxs(s,{label:"Composition breadcrumb",children:[e.jsx(r,{children:e.jsx(b,{variant:"quiet",label:"Foo"})}),e.jsx(r,{children:e.jsx(b,{variant:"quiet",label:"Bar"})})]})]})]}),parameters:{controls:{disable:!0}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Breadcrumb {...args} items={[{
    children: "Root",
    href: "/"
  }, {
    children: "Folder",
    href: "/folder"
  }, {
    children: "Page",
    href: "/page"
  }]} />,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb label="composition breadcrum">
      <BreadcrumbItem>
        <Link href="/">Home</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href="/folder">Folder</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href="/folder/mypage" aria-current="page" disabled>
          current page
        </Link>
      </BreadcrumbItem>
    </Breadcrumb>,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "gap-xl")}>
      <Breadcrumb label="composition breadcrum">
        <BreadcrumbItem>
          <Link href="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/folder">Folder</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/folder/mypage" aria-current="page" disabled>
            current page
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb items={[{
      children: "Root",
      href: "/"
    }, {
      children: "Folder",
      href: "/folder"
    }, {
      children: "Page",
      href: "/page"
    }]} />
      <div className={classNames("flex", "flex-col", "border-default", "p-m", "w-fit")}>
        <h2 className={classNames("text-default", "font-heading-s")}>Composition using buttons (not accessible)</h2>
        <Breadcrumb label="Composition breadcrumb">
          <BreadcrumbItem>
            <Button variant="quiet" label="Foo" />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button variant="quiet" label="Bar" />
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...l.parameters?.docs?.source}}};const z=["Basic","Composition","VisualTest"];export{c as Basic,i as Composition,l as VisualTest,z as __namedExportsOrder,O as default};
