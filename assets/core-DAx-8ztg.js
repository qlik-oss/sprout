import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,i as n,l as r,n as i}from"./blocks-CCeqoOOO.js";import{Yn as a,jr as o,xn as s}from"./sprout-react-KA55n9ke.js";import{t as c}from"./jsx-runtime-Bq1bXGty.js";import{i as l}from"./react-BnCtKaSV.js";import{t as u}from"./mdx-react-shim-9RzcSRdq.js";import{CreateContainer as d,RTL as f,Responsive as p,WidthObserver as m,t as h}from"./core.stories-TZHWIqvV.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...l(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r,{title:`CSS/sprout-css-modules/core`}),`
`,(0,v.jsx)(t.h1,{id:`core-concepts`,children:`Core concepts`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.a,{href:`#responsive`,children:`Responsive`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#sproutmedia`,children:`sprout.media`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#sproutwidthobserver`,children:`sprout.widthObserver`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#sproutcreatecontainer`,children:`sprout.createContainer`})}),`
`]}),`
`]}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#rtl`,children:`RTL`})}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`responsive`,children:`Responsive`}),`
`,(0,v.jsx)(t.p,{children:`Using responsive APIs to build adaptive user interfaces.`}),`
`,(0,v.jsx)(t.h3,{id:`sproutmedia`,children:`sprout.media`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`sprout.media`}),` is an API that will give you everything you need to build layout based on viewport sizes.
It plays well with any JS framework and extend existing API like classNames.
It also expose the needed low-level API to build a responsive grid in your Framework.`]}),`
`,(0,v.jsxs)(t.p,{children:[`First, make sure you've added the viewport meta tag to the `,(0,v.jsx)(t.code,{children:`<head>`}),` of your document:`]}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-html`,children:`<meta name="viewport" content="width=device-width, initial-scale=1.0" />
`})}),`
`,(0,v.jsx)(i,{of:p}),`
`,(0,v.jsx)(n,{of:p}),`
`,(0,v.jsx)(t.h3,{id:`sproutwidthobserver`,children:`sprout.widthObserver`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`widthObserver`}),` wraps the native `,(0,v.jsx)(t.code,{children:`ResizeObserver`}),` and calls you back when an element’s width changes.`]}),`
`,(0,v.jsx)(i,{of:m}),`
`,(0,v.jsx)(t.h4,{id:`api`,children:`API`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-ts`,children:`
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
`,(0,v.jsx)(t.h5,{id:`parameters`,children:`Parameters`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`element`}),`: The element to observe, or a function that returns it.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`opts.boxSizing`}),`: Which box to measure. Defaults to `,(0,v.jsx)(t.code,{children:`"content-box"`}),`.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`opts.onResize(width)`}),`: Called whenever the element’s width changes.`]}),`
`]}),`
`,(0,v.jsx)(t.h5,{id:`returns`,children:`Returns`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`{ observe, disconnect }`}),`: Start and stop observing.`]}),`
`]}),`
`,(0,v.jsx)(t.h4,{id:`usage`,children:`Usage`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`const observer = sprout.widthObserver(() => ref.current, {
  boxSizing: "border-box",
  onResize: (w) => setWidth(w),
});

observer.observe();
// later..
observer.disconnect();
`})}),`
`,(0,v.jsx)(t.hr,{}),`
`,(0,v.jsx)(t.h3,{id:`sproutcreatecontainer`,children:`sprout.createContainer`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`createContainer(width, element)`}),` turns a measured width into a container with `,(0,v.jsx)(t.strong,{children:`size breakpoints`}),` you can query.`]}),`
`,(0,v.jsx)(i,{of:d}),`
`,(0,v.jsx)(t.h4,{id:`api-1`,children:`API`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-ts`,children:`type ContainerSize = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl";
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
`,(0,v.jsx)(t.h5,{id:`parameters-1`,children:`Parameters`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`size`}),`: Container size context to bind (one of `,(0,v.jsx)(t.code,{children:`"xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl"`}),`).`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`element`}),`: Optional element whose computed styles hold the CSS variables; defaults to `,(0,v.jsx)(t.code,{children:`document.documentElement`}),`.`]}),`
`]}),`
`,(0,v.jsx)(t.h5,{id:`how-sizes-are-defined`,children:`How sizes are defined`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`Breakpoints come from CSS custom properties on `,(0,v.jsx)(t.code,{children:`element`}),`:`,`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.code,{children:`--sprout-container-sizing-xxs`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.code,{children:`--sprout-container-sizing-xs`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.code,{children:`--sprout-container-sizing-s`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.code,{children:`--sprout-container-sizing-m`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.code,{children:`--sprout-container-sizing-l`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.code,{children:`--sprout-container-sizing-xl`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.code,{children:`--sprout-container-sizing-xxl`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.code,{children:`--sprout-container-sizing-3xl`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.code,{children:`--sprout-container-sizing-4xl`})}),`
`]}),`
`]}),`
`]}),`
`,(0,v.jsx)(t.h5,{id:`returns-1`,children:`Returns`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`{ classNames, get, match }`}),`: Utilities bound to the chosen size. Missing keys gracefully fall back to nearby sizes.`]}),`
`]}),`
`,(0,v.jsx)(t.h4,{id:`usage-1`,children:`Usage`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`const container = sprout.createContainer("m", ref.current);

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
`,(0,v.jsx)(t.h2,{id:`rtl`,children:`RTL`}),`
`,(0,v.jsxs)(t.p,{children:[`Icons that represent directional concepts (like arrows) should be mirrored, while icons that do not convey direction (like a home icon) should remain unchanged. `,(0,v.jsx)(o,{})]}),`
`,(0,v.jsxs)(t.p,{children:[`The majority of users in RTL-writing countries are also right-handed, so such icons should not be mirrored. `,(0,v.jsx)(a,{})]}),`
`,(0,v.jsx)(t.p,{children:`Not all icons are mirrored in RTL !`}),`
`,(0,v.jsx)(i,{of:f})]})}function _(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=c(),u(),s(),t(),h()}))();export{_ as default};