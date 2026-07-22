import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{l as n,p as r,s as i}from"./iframe-UwarwtgL.js";import{t as a}from"./mdx-react-shim-DbLuWb1F.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...r(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`hooks/useMedia`}),`
`,(0,c.jsx)(t.h1,{id:`usemedia`,children:`useMedia`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`useMedia`}),` hook allows you to respond to CSS media query changes in your React components.
It provides a way to conditionally render or style components based on the current viewport size or other media features.
It is an integration of `,(0,c.jsx)(t.a,{href:`https://effective-chainsaw-mz3je65.pages.github.io/?path=/docs/css-sprout-css-modules--docs#sproutmedia`,rel:`nofollow`,children:`@qlik/sprout-css-modules/docs/sprout.media`}),` for react.`]}),`
`,(0,c.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`useMedia`}),` do not accept any parameter. It returns the following object:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`// from @qlik/sprout-css-modules
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
`})})]})}function s(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),n()}))();export{s as default};