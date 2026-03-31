import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,l as r,s as i}from"./iframe-B0xl5hqz.js";import{t as a}from"./mdx-react-shim-C5WuC5zb.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`hooks/useMedia`}),`
`,(0,c.jsx)(n.h1,{id:`usemedia`,children:`useMedia`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`useMedia`}),` hook allows you to respond to CSS media query changes in your React components.
It provides a way to conditionally render or style components based on the current viewport size or other media features.
It is an integration of `,(0,c.jsx)(n.a,{href:`https://effective-chainsaw-mz3je65.pages.github.io/?path=/docs/css-sprout-css-modules--docs#sproutmedia`,rel:`nofollow`,children:`@qlik/sprout-css-modules/docs/sprout.media`}),` for react.`]}),`
`,(0,c.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`useMedia`}),` do not accept any parameter. It returns the following object:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-ts`,children:`// from @qlik/sprout-css-modules
type ViewportSize = "s" | "m" | "l" | "xl";
type ViewportOptions<T> = Partial<Record<ViewportSize, T>>;

// the object exported
export type MediaAPI = {
  /**
   * This API helps to get the data structure you want based on viewport sizes.
   * @return The data attached to the current viewport size
   */
  get<T>(options: ViewportOptions<T>): T | undefined;
  /**
   * This is a extension of sprout.classNames to support viewport based classNames
   * @param options
   * @param className string
   * @example
   * \`\`\`ts
   * sprout.media.classNames({
   *   s: [ "flex_col" ],
   *   m: [ "flex_row" ],
   * });
   * \`\`\`
   * @return string
   */
  classNames(
    options: ViewportOptions<AllClasses[] | AllClasses>,
    className?: string
  ): string;
  /**
   * @return the current viewport size based on the system definition of it
   */
  getViewportSize(): ViewportSize;
};
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};