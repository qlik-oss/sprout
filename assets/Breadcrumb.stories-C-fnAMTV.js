import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as n}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t as r}from"./Link-KjN86Nqk.js";import{J as i,hn as a}from"./iframe-DaKWDHAC.js";var o={breadcrumb:`_breadcrumb_kecu7_1`,entry:`_entry_kecu7_6`,entry__collapsed:`_entry__collapsed_kecu7_13`,copy:`_copy_kecu7_17`},s=n(),c=e(t());function l({children:e,...t}){return(0,s.jsx)(`li`,{className:o.entry,...t,children:(0,s.jsx)(`div`,{className:a(`flex`,`flex-row`,`border-box`,`gap-m`,`items-center`,`flex-nowrap`),children:e})})}l.displayName=`BreadcrumbItem`;var u=(0,c.forwardRef)(f);function d(e){return e.toLowerCase().replace(/\s+/g,`-`)}function f({label:e,items:t,children:n,...i},c){let u=()=>t?t.map(({children:e,label:n,...i},a)=>{let o=a===t.length-1;return(0,s.jsx)(l,{children:(0,s.jsxs)(r,{withEllipsis:!0,"aria-current":o?`page`:void 0,disabled:o,...i,children:[n,e]})},`${i.href}-${d(n||``)}`)}):null;return(0,s.jsx)(`nav`,{...i,className:o.breadcrumb,ref:c,"aria-label":e||`breadcrumb`,children:(0,s.jsxs)(`ol`,{className:a(`flex`,`flex-row`,`border-box`,`justify-start`,`items-center`),children:[u(),n]})})}f.displayName=`Breadcrumb`;var p={title:`Components/Breadcrumb`,component:u,parameters:{},argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}},items:{control:!1,description:`Renders a breadcrumb from an array of items (label + href). When using this API, required WAI-ARIA breadcrumb attributes are applied automatically.`,table:{type:{summary:`BreadcrumbItemProps`}}},label:{control:`text`,table:{type:{summary:`string`}}}}},m={render:e=>(0,s.jsx)(u,{...e,items:[{children:`Root`,href:`/`},{children:`Folder`,href:`/folder`},{children:`Page`,href:`/page`}]}),parameters:{chromatic:{disableSnapshot:!0}}},h={render:()=>(0,s.jsxs)(u,{label:`composition breadcrum`,children:[(0,s.jsx)(l,{children:(0,s.jsx)(r,{href:`/`,children:`Home`})}),(0,s.jsx)(l,{children:(0,s.jsx)(r,{href:`/folder`,children:`Folder`})}),(0,s.jsx)(l,{children:(0,s.jsx)(r,{href:`/folder/mypage`,"aria-current":`page`,disabled:!0,children:`current page`})})]}),parameters:{chromatic:{disableSnapshot:!0}}},g={render:()=>(0,s.jsxs)(`div`,{className:a(`flex`,`flex-col`,`gap-xl`),children:[(0,s.jsxs)(u,{label:`composition breadcrum`,children:[(0,s.jsx)(l,{children:(0,s.jsx)(r,{href:`/`,children:`Home`})}),(0,s.jsx)(l,{children:(0,s.jsx)(r,{href:`/folder`,children:`Folder`})}),(0,s.jsx)(l,{children:(0,s.jsx)(r,{href:`/folder/mypage`,"aria-current":`page`,disabled:!0,children:`current page`})})]}),(0,s.jsx)(u,{items:[{children:`Root`,href:`/`},{children:`Folder`,href:`/folder`},{children:`Page`,href:`/page`}]}),(0,s.jsxs)(`div`,{className:a(`flex`,`flex-col`,`border-default`,`p-m`,`w-fit`),children:[(0,s.jsx)(`h2`,{className:a(`text-default`,`font-heading-s`),children:`Composition using buttons (not accessible)`}),(0,s.jsxs)(u,{label:`Composition breadcrumb`,children:[(0,s.jsx)(l,{children:(0,s.jsx)(i,{variant:`quiet`,label:`Foo`})}),(0,s.jsx)(l,{children:(0,s.jsx)(i,{variant:`quiet`,label:`Bar`})})]})]})]}),parameters:{controls:{disable:!0}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};var _=[`Basic`,`Composition`,`VisualTest`];export{m as Basic,h as Composition,g as VisualTest,_ as __namedExportsOrder,p as default};