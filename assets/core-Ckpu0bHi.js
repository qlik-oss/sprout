import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Kt as n,Ln as r,i,jt as a,l as o,n as s,s as c,un as l}from"./iframe-B0xl5hqz.js";import{t as u}from"./mdx-react-shim-C5WuC5zb.js";import{CreateContainer as d,RTL as f,Responsive as p,WidthObserver as m,t as h}from"./core.stories-B4X9HVim.js";function g(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c,{title:`CSS/sprout-css-modules/core`}),`
`,(0,v.jsx)(r.h1,{id:`core-concepts`,children:`Core concepts`}),`
`,(0,v.jsxs)(r.ul,{children:[`
`,(0,v.jsxs)(r.li,{children:[(0,v.jsx)(r.a,{href:`#responsive`,children:`Responsive`}),`
`,(0,v.jsxs)(r.ul,{children:[`
`,(0,v.jsx)(r.li,{children:(0,v.jsx)(r.a,{href:`#sproutmedia`,children:`sprout.media`})}),`
`,(0,v.jsx)(r.li,{children:(0,v.jsx)(r.a,{href:`#sproutwidthobserver`,children:`sprout.widthObserver`})}),`
`,(0,v.jsx)(r.li,{children:(0,v.jsx)(r.a,{href:`#sproutcreatecontainer`,children:`sprout.createContainer`})}),`
`]}),`
`]}),`
`,(0,v.jsx)(r.li,{children:(0,v.jsx)(r.a,{href:`#rtl`,children:`RTL`})}),`
`]}),`
`,(0,v.jsx)(r.h2,{id:`responsive`,children:`Responsive`}),`
`,(0,v.jsx)(r.p,{children:`Using responsive APIs to build adaptive user interfaces.`}),`
`,(0,v.jsx)(r.h3,{id:`sproutmedia`,children:`sprout.media`}),`
`,(0,v.jsxs)(r.p,{children:[(0,v.jsx)(r.code,{children:`sprout.media`}),` is an API that will give you everything you need to build layout based on viewport sizes.
It plays well with any JS framework and extend existing API like classNames.
It also expose the needed low-level API to build a responsive grid in your Framework.`]}),`
`,(0,v.jsxs)(r.p,{children:[`First, make sure you've added the viewport meta tag to the `,(0,v.jsx)(r.code,{children:`<head>`}),` of your document:`]}),`
`,(0,v.jsx)(r.pre,{children:(0,v.jsx)(r.code,{className:`language-html`,children:`<meta name="viewport" content="width=device-width, initial-scale=1.0" />
`})}),`
`,(0,v.jsx)(s,{of:p}),`
`,(0,v.jsx)(i,{of:p}),`
`,(0,v.jsx)(r.h3,{id:`sproutwidthobserver`,children:`sprout.widthObserver`}),`
`,(0,v.jsxs)(r.p,{children:[(0,v.jsx)(r.code,{children:`widthObserver`}),` wraps the native `,(0,v.jsx)(r.code,{children:`ResizeObserver`}),` and calls you back when an element’s width changes.`]}),`
`,(0,v.jsx)(s,{of:m}),`
`,(0,v.jsx)(r.h4,{id:`api`,children:`API`}),`
`,(0,v.jsx)(r.pre,{children:(0,v.jsx)(r.code,{className:`language-ts`,children:`
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
`,(0,v.jsx)(r.h5,{id:`parameters`,children:`Parameters`}),`
`,(0,v.jsxs)(r.ul,{children:[`
`,(0,v.jsxs)(r.li,{children:[(0,v.jsx)(r.code,{children:`element`}),`: The element to observe, or a function that returns it.`]}),`
`,(0,v.jsxs)(r.li,{children:[(0,v.jsx)(r.code,{children:`opts.boxSizing`}),`: Which box to measure. Defaults to `,(0,v.jsx)(r.code,{children:`"content-box"`}),`.`]}),`
`,(0,v.jsxs)(r.li,{children:[(0,v.jsx)(r.code,{children:`opts.onResize(width)`}),`: Called whenever the element’s width changes.`]}),`
`]}),`
`,(0,v.jsx)(r.h5,{id:`returns`,children:`Returns`}),`
`,(0,v.jsxs)(r.ul,{children:[`
`,(0,v.jsxs)(r.li,{children:[(0,v.jsx)(r.code,{children:`{ observe, disconnect }`}),`: Start and stop observing.`]}),`
`]}),`
`,(0,v.jsx)(r.h4,{id:`usage`,children:`Usage`}),`
`,(0,v.jsx)(r.pre,{children:(0,v.jsx)(r.code,{className:`language-tsx`,children:`const observer = sprout.widthObserver(() => ref.current, {
  boxSizing: "border-box",
  onResize: (w) => setWidth(w),
});

observer.observe();
// later..
observer.disconnect();
`})}),`
`,(0,v.jsx)(r.hr,{}),`
`,(0,v.jsx)(r.h3,{id:`sproutcreatecontainer`,children:`sprout.createContainer`}),`
`,(0,v.jsxs)(r.p,{children:[(0,v.jsx)(r.code,{children:`createContainer(width, element)`}),` turns a measured width into a container with `,(0,v.jsx)(r.strong,{children:`size breakpoints`}),` you can query.`]}),`
`,(0,v.jsx)(s,{of:d}),`
`,(0,v.jsx)(r.h4,{id:`api-1`,children:`API`}),`
`,(0,v.jsx)(r.pre,{children:(0,v.jsx)(r.code,{className:`language-ts`,children:`type ContainerSize = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl";
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
`,(0,v.jsx)(r.h5,{id:`parameters-1`,children:`Parameters`}),`
`,(0,v.jsxs)(r.ul,{children:[`
`,(0,v.jsxs)(r.li,{children:[(0,v.jsx)(r.code,{children:`size`}),`: Container size context to bind (one of `,(0,v.jsx)(r.code,{children:`"xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl"`}),`).`]}),`
`,(0,v.jsxs)(r.li,{children:[(0,v.jsx)(r.code,{children:`element`}),`: Optional element whose computed styles hold the CSS variables; defaults to `,(0,v.jsx)(r.code,{children:`document.documentElement`}),`.`]}),`
`]}),`
`,(0,v.jsx)(r.h5,{id:`how-sizes-are-defined`,children:`How sizes are defined`}),`
`,(0,v.jsxs)(r.ul,{children:[`
`,(0,v.jsxs)(r.li,{children:[`Breakpoints come from CSS custom properties on `,(0,v.jsx)(r.code,{children:`element`}),`:`,`
`,(0,v.jsxs)(r.ul,{children:[`
`,(0,v.jsx)(r.li,{children:(0,v.jsx)(r.code,{children:`--sprout-container-sizing-xxs`})}),`
`,(0,v.jsx)(r.li,{children:(0,v.jsx)(r.code,{children:`--sprout-container-sizing-xs`})}),`
`,(0,v.jsx)(r.li,{children:(0,v.jsx)(r.code,{children:`--sprout-container-sizing-s`})}),`
`,(0,v.jsx)(r.li,{children:(0,v.jsx)(r.code,{children:`--sprout-container-sizing-m`})}),`
`,(0,v.jsx)(r.li,{children:(0,v.jsx)(r.code,{children:`--sprout-container-sizing-l`})}),`
`,(0,v.jsx)(r.li,{children:(0,v.jsx)(r.code,{children:`--sprout-container-sizing-xl`})}),`
`,(0,v.jsx)(r.li,{children:(0,v.jsx)(r.code,{children:`--sprout-container-sizing-xxl`})}),`
`,(0,v.jsx)(r.li,{children:(0,v.jsx)(r.code,{children:`--sprout-container-sizing-3xl`})}),`
`,(0,v.jsx)(r.li,{children:(0,v.jsx)(r.code,{children:`--sprout-container-sizing-4xl`})}),`
`]}),`
`]}),`
`]}),`
`,(0,v.jsx)(r.h5,{id:`returns-1`,children:`Returns`}),`
`,(0,v.jsxs)(r.ul,{children:[`
`,(0,v.jsxs)(r.li,{children:[(0,v.jsx)(r.code,{children:`{ classNames, get, match }`}),`: Utilities bound to the chosen size. Missing keys gracefully fall back to nearby sizes.`]}),`
`]}),`
`,(0,v.jsx)(r.h4,{id:`usage-1`,children:`Usage`}),`
`,(0,v.jsx)(r.pre,{children:(0,v.jsx)(r.code,{className:`language-tsx`,children:`const container = sprout.createContainer("m", ref.current);

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
    sprout.classNames("grid", "border-box", "p-m")
  )}
/>;
`})}),`
`,(0,v.jsx)(r.h2,{id:`rtl`,children:`RTL`}),`
`,(0,v.jsxs)(r.p,{children:[`Icons that represent directional concepts (like arrows) should be mirrored, while icons that do not convey direction (like a home icon) should remain unchanged. `,(0,v.jsx)(l,{})]}),`
`,(0,v.jsxs)(r.p,{children:[`The majority of users in RTL-writing countries are also right-handed, so such icons should not be mirrored. `,(0,v.jsx)(n,{})]}),`
`,(0,v.jsx)(r.p,{children:`Not all icons are mirrored in RTL !`}),`
`,(0,v.jsx)(s,{of:f})]})}function _(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,v.jsx)(n,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=r(),u(),a(),o(),h()}))();export{_ as default};