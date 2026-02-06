import{j as e,M as r}from"./iframe-Dux6zP9l.js";import{useMDXComponents as o}from"./index-BCztanOQ.js";import"./preload-helper-PPVm8Dsz.js";function n(s){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"hooks/useMedia"}),`
`,e.jsx(t.h1,{id:"usemedia",children:"useMedia"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"useMedia"}),` hook allows you to respond to CSS media query changes in your React components.
It provides a way to conditionally render or style components based on the current viewport size or other media features.
It is an integration of `,e.jsx(t.a,{href:"https://effective-chainsaw-mz3je65.pages.github.io/?path=/docs/css-sprout-css-modules--docs#sproutmedia",rel:"nofollow",children:"@qlik/sprout-css-modules/docs/sprout.media"})," for react."]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"useMedia"})," do not accept any parameter. It returns the following object:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`// from @qlik/sprout-css-modules
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
`})})]})}function c(s={}){const{wrapper:t}={...o(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{c as default};
