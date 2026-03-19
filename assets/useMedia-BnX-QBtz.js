import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{s as t}from"./iframe-URhFfzNK.js";import{n}from"./lib-EjdzwnHJ.js";var r=e();function i(e){let i={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{title:`hooks/useMedia`}),`
`,(0,r.jsx)(i.h1,{id:`usemedia`,children:`useMedia`}),`
`,(0,r.jsxs)(i.p,{children:[`The `,(0,r.jsx)(i.code,{children:`useMedia`}),` hook allows you to respond to CSS media query changes in your React components.
It provides a way to conditionally render or style components based on the current viewport size or other media features.
It is an integration of `,(0,r.jsx)(i.a,{href:`https://effective-chainsaw-mz3je65.pages.github.io/?path=/docs/css-sprout-css-modules--docs#sproutmedia`,rel:`nofollow`,children:`@qlik/sprout-css-modules/docs/sprout.media`}),` for react.`]}),`
`,(0,r.jsx)(i.h2,{id:`api`,children:`API`}),`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:`useMedia`}),` do not accept any parameter. It returns the following object:`]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-ts`,children:`// from @qlik/sprout-css-modules
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
  classNames(options: ViewportOptions<AllClasses[] | AllClasses>, className?: string): string;
  /**
   * @return the current viewport size based on the system definition of it
   */
  getViewportSize(): ViewportSize;
};
`})})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};