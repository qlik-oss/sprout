import{j as e,M as l,a as i,C as d}from"./iframe-BThSoDrn.js";import{useMDXComponents as t}from"./index-dxYskzg-.js";import{F as c,a}from"./Search-c6Wqd6yN.js";import{Responsive as r,WidthObserver as h,CreateContainer as x,RTL as p}from"./core.stories-C0XuA5EG.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-C7A3N88C.js";import"./Next-1Q1bqM5p.js";import"./Content-CiWIOXdZ.js";import"./Button-DPdoSvtR.js";import"./classNames-dIthk07I.js";import"./icons-m7QrAy0p.js";import"./Button.module-C2ELNEem.js";import"./Badge-BD7yv9SE.js";import"./Tooltip-g36jqBzQ.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DhaNE9oh.js";import"./useId-hgAQXGHZ.js";import"./ProgressCircular-3frmJwTX.js";import"./useI18n-DEBX20KE.js";function o(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"CSS/sprout-css-modules/core"}),`
`,e.jsx(n.h1,{id:"core-concepts",children:"Core concepts"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#responsive",children:"Responsive"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#sproutmedia",children:"sprout.media"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#sproutwidthobserver",children:"sprout.widthObserver"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#sproutcreatecontainer",children:"sprout.createContainer"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#rtl",children:"RTL"})}),`
`]}),`
`,e.jsx(n.h2,{id:"responsive",children:"Responsive"}),`
`,e.jsx(n.p,{children:"Using responsive APIs to build adaptive user interfaces."}),`
`,e.jsx(n.h3,{id:"sproutmedia",children:"sprout.media"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"sprout.media"}),` is an API that will give you everything you need to build layout based on viewport sizes.
It plays well with any JS framework and extend existing API like classNames.
It also expose the needed low-level API to build a responsive grid in your Framework.`]}),`
`,e.jsxs(n.p,{children:["First, make sure you've added the viewport meta tag to the ",e.jsx(n.code,{children:"<head>"})," of your document:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<meta name="viewport" content="width=device-width, initial-scale=1.0" />
`})}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(d,{of:r}),`
`,e.jsx(n.h3,{id:"sproutwidthobserver",children:"sprout.widthObserver"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"widthObserver"})," wraps the native ",e.jsx(n.code,{children:"ResizeObserver"})," and calls you back when an element’s width changes."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h4,{id:"api",children:"API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`
type BoxSizing = "content-box" | "border-box" | "device-pixel-content-box";

widthObserver(
  element: HTMLElement | (() => HTMLElement | null) | null,
  opts?: {
    boxSizing?: BoxSizing;
    onResize?: (width: number | undefined) => void;
  }
): {
  observe(): void;
  disconnect(): void;
};
`})}),`
`,e.jsx(n.h5,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element"}),": The element to observe, or a function that returns it."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"opts.boxSizing"}),": Which box to measure. Defaults to ",e.jsx(n.code,{children:'"content-box"'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"opts.onResize(width)"}),": Called whenever the element’s width changes."]}),`
`]}),`
`,e.jsx(n.h5,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"{ observe, disconnect }"}),": Start and stop observing."]}),`
`]}),`
`,e.jsx(n.h4,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const observer = sprout.widthObserver(() => ref.current, {
  boxSizing: "border-box",
  onResize: (w) => setWidth(w),
});

observer.observe();
// later..
observer.disconnect();
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"sproutcreatecontainer",children:"sprout.createContainer"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"createContainer(width, element)"})," turns a measured width into a container with ",e.jsx(n.strong,{children:"size breakpoints"})," you can query."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h4,{id:"api-1",children:"API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type ContainerSize = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl";
type AllClasses = keyof typeof classes;
type ContainerOptions<T> = Partial<Record<ContainerSize, T>>;


createContainer(
  size: ContainerSize,
  element?: Element | null
): {
  classNames: (
    options: ContainerOptions<Array<AllClasses> | AllClasses>,
    className?: string
  ) => string;
  get: <T>(options: ContainerOptions<T>) => T;
  match: (
    width: number,
    element?: Element | null
  ) => ContainerSize
}
`})}),`
`,e.jsx(n.h5,{id:"parameters-1",children:"Parameters"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"size"}),": Container size context to bind (one of ",e.jsx(n.code,{children:'"xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl"'}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element"}),": Optional element whose computed styles hold the CSS variables; defaults to ",e.jsx(n.code,{children:"document.documentElement"}),"."]}),`
`]}),`
`,e.jsx(n.h5,{id:"how-sizes-are-defined",children:"How sizes are defined"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Breakpoints come from CSS custom properties on ",e.jsx(n.code,{children:"element"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--sprout-container-sizing-xxs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--sprout-container-sizing-xs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--sprout-container-sizing-s"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--sprout-container-sizing-m"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--sprout-container-sizing-l"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--sprout-container-sizing-xl"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--sprout-container-sizing-xxl"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--sprout-container-sizing-3xl"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--sprout-container-sizing-4xl"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h5,{id:"returns-1",children:"Returns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"{ classNames, get, match }"}),": Utilities bound to the chosen size. Missing keys gracefully fall back to nearby sizes."]}),`
`]}),`
`,e.jsx(n.h4,{id:"usage-1",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const container = sprout.createContainer("m", ref.current);

// Read a value that depends on the container size
const justified = container.get({ xxs: true, m: false });

// Compute classes that depend on the container size
<div
  className={container.classNames(
    {
      xxs: ["grid-cols-1", "gap-s"],
      xs: ["grid-cols-2", "gap-s"],
      s: ["grid-cols-3", "gap-m"],
      m: ["grid-cols-4", "gap-m"],
      l: ["grid-cols-5", "gap-l"],
      xl: ["grid-cols-6", "gap-l"],
      xxl: ["grid-cols-7", "gap-xl"],
      "3xl": ["grid-cols-8", "gap-xl"],
      "4xl": ["grid-cols-9", "gap-xl"],
    },
    sprout.classNames("grid", "border-box", "p-m"),
  )}
/>;
`})}),`
`,e.jsx(n.h2,{id:"rtl",children:"RTL"}),`
`,e.jsxs(n.p,{children:["Icons that represent directional concepts (like arrows) should be mirrored, while icons that do not convey direction (like a home icon) should remain unchanged. ",e.jsx(c,{})]}),`
`,e.jsxs(n.p,{children:["The majority of users in RTL-writing countries are also right-handed, so such icons should not be mirrored. ",e.jsx(a,{})]}),`
`,e.jsx(n.p,{children:"Not all icons are mirrored in RTL !"}),`
`,e.jsx(i,{of:p})]})}function M(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{M as default};
