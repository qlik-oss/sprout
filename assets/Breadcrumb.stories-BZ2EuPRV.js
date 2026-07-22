import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{Fn as n,O as r,fn as i,ln as a,ta as o,un as s}from"./iframe-UwarwtgL.js";var c,l=e((()=>{c={children:{control:!1,table:{type:{summary:`ReactNode`}}},items:{control:!1,description:`Renders a breadcrumb from an array of items (label + href). When using this API, required WAI-ARIA breadcrumb attributes are applied automatically.`,table:{type:{summary:`BreadcrumbItemProps`}}},label:{control:`text`,table:{type:{summary:`string`}}}}})),u,d,f,p,m,h,g=e((()=>{r(),l(),u=t(),d={title:`Components/Breadcrumb`,component:a,parameters:{},argTypes:c},f={render:e=>(0,u.jsx)(a,{...e,items:[{children:`Root`,href:`/`},{children:`Folder`,href:`/folder`},{children:`Page`,href:`/page`}]}),parameters:{chromatic:{disableSnapshot:!0}}},p={render:()=>(0,u.jsxs)(a,{label:`composition breadcrum`,children:[(0,u.jsx)(s,{children:(0,u.jsx)(i,{href:`/`,children:`Home`})}),(0,u.jsx)(s,{children:(0,u.jsx)(i,{href:`/folder`,children:`Folder`})}),(0,u.jsx)(s,{children:(0,u.jsx)(i,{href:`/folder/mypage`,"aria-current":`page`,disabled:!0,children:`current page`})})]}),parameters:{chromatic:{disableSnapshot:!0}}},m={render:()=>(0,u.jsxs)(`div`,{className:o(`flex`,`flex-col`,`gap-xl`),children:[(0,u.jsxs)(a,{label:`composition breadcrum`,children:[(0,u.jsx)(s,{children:(0,u.jsx)(i,{href:`/`,children:`Home`})}),(0,u.jsx)(s,{children:(0,u.jsx)(i,{href:`/folder`,children:`Folder`})}),(0,u.jsx)(s,{children:(0,u.jsx)(i,{href:`/folder/mypage`,"aria-current":`page`,disabled:!0,children:`current page`})})]}),(0,u.jsx)(a,{items:[{children:`Root`,href:`/`},{children:`Folder`,href:`/folder`},{children:`Page`,href:`/page`}]}),(0,u.jsxs)(`div`,{className:o(`flex`,`flex-col`,`border-default`,`p-m`,`w-fit`),children:[(0,u.jsx)(`h2`,{className:o(`text-default`,`font-heading-s`),children:`Composition using buttons (not accessible)`}),(0,u.jsxs)(a,{label:`Composition breadcrumb`,children:[(0,u.jsx)(s,{children:(0,u.jsx)(n,{variant:`quiet`,label:`Foo`})}),(0,u.jsx)(s,{children:(0,u.jsx)(n,{variant:`quiet`,label:`Bar`})})]})]})]}),parameters:{controls:{disable:!0}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <h2 className={classNames("text-default", "font-heading-s")}>
          Composition using buttons (not accessible)
        </h2>
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
}`,...m.parameters?.docs?.source}}},h=[`Basic`,`Composition`,`VisualTest`]}));g();export{f as Basic,p as Composition,m as VisualTest,h as __namedExportsOrder,d as default,g as t};