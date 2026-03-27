import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{Bt as t,i as n,n as r,s as i,xt as a}from"./iframe-B5xoaqtW.js";import{n as o}from"./lib-EjdzwnHJ.js";import"./Content-Bil5yaVg.js";import{CreateContainer as s,RTL as c,Responsive as l,WidthObserver as u}from"./core.stories-SH-F6UBT.js";var d=e();function f(e){let f={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`CSS/sprout-css-modules/core`}),`
`,(0,d.jsx)(f.h1,{id:`core-concepts`,children:`Core concepts`}),`
`,(0,d.jsxs)(f.ul,{children:[`
`,(0,d.jsxs)(f.li,{children:[(0,d.jsx)(f.a,{href:`#responsive`,children:`Responsive`}),`
`,(0,d.jsxs)(f.ul,{children:[`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.a,{href:`#sproutmedia`,children:`sprout.media`})}),`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.a,{href:`#sproutwidthobserver`,children:`sprout.widthObserver`})}),`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.a,{href:`#sproutcreatecontainer`,children:`sprout.createContainer`})}),`
`]}),`
`]}),`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.a,{href:`#rtl`,children:`RTL`})}),`
`]}),`
`,(0,d.jsx)(f.h2,{id:`responsive`,children:`Responsive`}),`
`,(0,d.jsx)(f.p,{children:`Using responsive APIs to build adaptive user interfaces.`}),`
`,(0,d.jsx)(f.h3,{id:`sproutmedia`,children:`sprout.media`}),`
`,(0,d.jsxs)(f.p,{children:[(0,d.jsx)(f.code,{children:`sprout.media`}),` is an API that will give you everything you need to build layout based on viewport sizes.
It plays well with any JS framework and extend existing API like classNames.
It also expose the needed low-level API to build a responsive grid in your Framework.`]}),`
`,(0,d.jsxs)(f.p,{children:[`First, make sure you've added the viewport meta tag to the `,(0,d.jsx)(f.code,{children:`<head>`}),` of your document:`]}),`
`,(0,d.jsx)(f.pre,{children:(0,d.jsx)(f.code,{className:`language-html`,children:`<meta name="viewport" content="width=device-width, initial-scale=1.0" />
`})}),`
`,(0,d.jsx)(r,{of:l}),`
`,(0,d.jsx)(n,{of:l}),`
`,(0,d.jsx)(f.h3,{id:`sproutwidthobserver`,children:`sprout.widthObserver`}),`
`,(0,d.jsxs)(f.p,{children:[(0,d.jsx)(f.code,{children:`widthObserver`}),` wraps the native `,(0,d.jsx)(f.code,{children:`ResizeObserver`}),` and calls you back when an element’s width changes.`]}),`
`,(0,d.jsx)(r,{of:u}),`
`,(0,d.jsx)(f.h4,{id:`api`,children:`API`}),`
`,(0,d.jsx)(f.pre,{children:(0,d.jsx)(f.code,{className:`language-ts`,children:`
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
`,(0,d.jsx)(f.h5,{id:`parameters`,children:`Parameters`}),`
`,(0,d.jsxs)(f.ul,{children:[`
`,(0,d.jsxs)(f.li,{children:[(0,d.jsx)(f.code,{children:`element`}),`: The element to observe, or a function that returns it.`]}),`
`,(0,d.jsxs)(f.li,{children:[(0,d.jsx)(f.code,{children:`opts.boxSizing`}),`: Which box to measure. Defaults to `,(0,d.jsx)(f.code,{children:`"content-box"`}),`.`]}),`
`,(0,d.jsxs)(f.li,{children:[(0,d.jsx)(f.code,{children:`opts.onResize(width)`}),`: Called whenever the element’s width changes.`]}),`
`]}),`
`,(0,d.jsx)(f.h5,{id:`returns`,children:`Returns`}),`
`,(0,d.jsxs)(f.ul,{children:[`
`,(0,d.jsxs)(f.li,{children:[(0,d.jsx)(f.code,{children:`{ observe, disconnect }`}),`: Start and stop observing.`]}),`
`]}),`
`,(0,d.jsx)(f.h4,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(f.pre,{children:(0,d.jsx)(f.code,{className:`language-tsx`,children:`const observer = sprout.widthObserver(() => ref.current, {
  boxSizing: "border-box",
  onResize: (w) => setWidth(w),
});

observer.observe();
// later..
observer.disconnect();
`})}),`
`,(0,d.jsx)(f.hr,{}),`
`,(0,d.jsx)(f.h3,{id:`sproutcreatecontainer`,children:`sprout.createContainer`}),`
`,(0,d.jsxs)(f.p,{children:[(0,d.jsx)(f.code,{children:`createContainer(width, element)`}),` turns a measured width into a container with `,(0,d.jsx)(f.strong,{children:`size breakpoints`}),` you can query.`]}),`
`,(0,d.jsx)(r,{of:s}),`
`,(0,d.jsx)(f.h4,{id:`api-1`,children:`API`}),`
`,(0,d.jsx)(f.pre,{children:(0,d.jsx)(f.code,{className:`language-ts`,children:`type ContainerSize = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl";
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
`,(0,d.jsx)(f.h5,{id:`parameters-1`,children:`Parameters`}),`
`,(0,d.jsxs)(f.ul,{children:[`
`,(0,d.jsxs)(f.li,{children:[(0,d.jsx)(f.code,{children:`size`}),`: Container size context to bind (one of `,(0,d.jsx)(f.code,{children:`"xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl"`}),`).`]}),`
`,(0,d.jsxs)(f.li,{children:[(0,d.jsx)(f.code,{children:`element`}),`: Optional element whose computed styles hold the CSS variables; defaults to `,(0,d.jsx)(f.code,{children:`document.documentElement`}),`.`]}),`
`]}),`
`,(0,d.jsx)(f.h5,{id:`how-sizes-are-defined`,children:`How sizes are defined`}),`
`,(0,d.jsxs)(f.ul,{children:[`
`,(0,d.jsxs)(f.li,{children:[`Breakpoints come from CSS custom properties on `,(0,d.jsx)(f.code,{children:`element`}),`:`,`
`,(0,d.jsxs)(f.ul,{children:[`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.code,{children:`--sprout-container-sizing-xxs`})}),`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.code,{children:`--sprout-container-sizing-xs`})}),`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.code,{children:`--sprout-container-sizing-s`})}),`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.code,{children:`--sprout-container-sizing-m`})}),`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.code,{children:`--sprout-container-sizing-l`})}),`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.code,{children:`--sprout-container-sizing-xl`})}),`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.code,{children:`--sprout-container-sizing-xxl`})}),`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.code,{children:`--sprout-container-sizing-3xl`})}),`
`,(0,d.jsx)(f.li,{children:(0,d.jsx)(f.code,{children:`--sprout-container-sizing-4xl`})}),`
`]}),`
`]}),`
`]}),`
`,(0,d.jsx)(f.h5,{id:`returns-1`,children:`Returns`}),`
`,(0,d.jsxs)(f.ul,{children:[`
`,(0,d.jsxs)(f.li,{children:[(0,d.jsx)(f.code,{children:`{ classNames, get, match }`}),`: Utilities bound to the chosen size. Missing keys gracefully fall back to nearby sizes.`]}),`
`]}),`
`,(0,d.jsx)(f.h4,{id:`usage-1`,children:`Usage`}),`
`,(0,d.jsx)(f.pre,{children:(0,d.jsx)(f.code,{className:`language-tsx`,children:`const container = sprout.createContainer("m", ref.current);

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
`,(0,d.jsx)(f.h2,{id:`rtl`,children:`RTL`}),`
`,(0,d.jsxs)(f.p,{children:[`Icons that represent directional concepts (like arrows) should be mirrored, while icons that do not convey direction (like a home icon) should remain unchanged. `,(0,d.jsx)(t,{})]}),`
`,(0,d.jsxs)(f.p,{children:[`The majority of users in RTL-writing countries are also right-handed, so such icons should not be mirrored. `,(0,d.jsx)(a,{})]}),`
`,(0,d.jsx)(f.p,{children:`Not all icons are mirrored in RTL !`}),`
`,(0,d.jsx)(r,{of:c})]})}function p(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(f,{...e})}):f(e)}export{p as default};