import{j as n,M as s,a as i}from"./iframe-Bp0nu8X6.js";import{useMDXComponents as t}from"./index-CC_VpkT-.js";import{VisualTest as a}from"./Box.stories-B8bu_9Ng.js";import"./preload-helper-PPVm8Dsz.js";import"./classNames-BUd7eP-S.js";import"./sprout-rpr_484f.js";import"./padding-Z5rKYLph.js";function r(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Components/Box"}),`
`,n.jsx(e.h1,{id:"box-deprecated",children:"Box (deprecated)"}),`
`,n.jsxs(e.p,{children:["Largely inspired from ",n.jsx(e.a,{href:"https://mui.com/system/react-box/%5D",rel:"nofollow",children:"MUI Box"})," this component provide a quick way to get some layout sorted out."]}),`
`,n.jsxs(e.p,{children:["Box has some ",n.jsx(e.strong,{children:"drawbacks"}),` as it takes quite a lot of runtime. It has to check lots of props to be able to build the className.
Like Github we would like to `,n.jsx(e.a,{href:"https://github.com/primer/react/blob/main/contributor-docs/migration-from-box.md",rel:"nofollow",children:"Migrate away from Box"}),`.
You should consider to use the `,n.jsx(e.a,{href:"?path=/docs/utils-sprout-css-modules--docs",children:"sprout-css-modules"})," directly for ",n.jsx(e.strong,{children:"performance"})," reasons but also for readability."]}),`
`,n.jsx(e.p,{children:"As any other utility this component doesn't comes from Figma but it is using all our tokens."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { Box } from "@qlik/sprout-react";


function MyComponent() {
    return <Box border="default" />
}
`})}),`
`,n.jsx(e.h2,{id:"component-props",children:"Component Props"}),`
`,n.jsxs(e.p,{children:["In terms of API it provides quick access to every ",n.jsx(e.a,{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",rel:"nofollow",children:"flex"}),` css properties.
By default it uses the following styles:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.flex {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type Spacing = "0" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "3xl";
type Border =
  | "none"
  | "default"
  | "weak"
  | "moderate"
  | "strong"
  | "extra-strong";
type Align = "center" | "stretch" | "start" | "end";
type Justify = Align | "between" | "around" | "evenly";

export type BoxPropsOnly = {
  // flex properties
  direction?: "row" | "col";
  boxSizing?: "border-box" | "content-box";
  alignContent?: Align;
  alignItems?: Align;
  alignSelf?: Align;
  gap?: Spacing;
  columnGap?: Spacing;
  rowGap?: Spacing;
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  justify?: Justify;

  // border properties
  border?: Border;
  borderTop?: Border;
  borderRight?: Border;
  borderBottom?: Border;
  borderLeft?: Border;
  borderWidth?: "0" | "default" | "strong";

  // inline styles
  width?:
    | ["xxs", "xs", "s", "m", "l", "xl", "xxl", "3xl", "4xl"]
    | CSSProperties["width"];
  maxWidth?:
    | ["xxs", "xs", "s", "m", "l", "xl", "xxl", "3xl", "4xl"]
    | CSSProperties["maxWidth"];
  minWidth?:
    | ["xxs", "xs", "s", "m", "l", "xl", "xxl", "3xl", "4xl"]
    | CSSProperties["minWidth"];
  height?: CSSProperties["height"];
  minHeight?: CSSProperties["minHeight"];
  maxHeight?: CSSProperties["maxHeight"];
  shrink?: CSSProperties["flexShrink"];
  basis?: CSSProperties["flexBasis"];
  grow?: boolean | CSSProperties["flexGrow"];

  // padding properties
  p?: Spacing;
  px?: Spacing;
  py?: Spacing;
  pt?: Spacing;
  pr?: Spacing;
  pb?: Spacing;
  pl?: Spacing;

  // bgColor properties
  bgColor?:
    | "transparent"
    | "default"
    | "weak"
    | "moderate"
    | "strong"
    | "extra-strong"
    | "enabled"
    | "disabled"
    | "inverse"
    | "interactive";

  // boxShadow properties
  boxShadow?: "none" | "default" | "weak" | "moderate" | "strong";

  typography?: TypographyProps;
};
`})}),`
`,n.jsx(e.h2,{id:"getboxprops-deprecated",children:"getBoxProps (deprecated)"}),`
`,n.jsxs(e.p,{children:["We are preparing a move away from Box for performance reason. For now only ",n.jsx(e.code,{children:"getBoxProps"})," api is deprecated."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { classNames, getBoxProps } from "@qlik/sprout-react";

function MyComponent() {
  // @deprecated
  return (
    <h2
      {...getBoxProps({ typography: { font: "heading_s", color: "default" } })}
    >
      Hello world
    </h2>
  );
  // do this instead
  return (
    <h2
      className={classNames(
        "flex",
        "row",
        "border_box",
        "font_heading_s",
        "text_default",
      )}
    >
      Hello world
    </h2>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"demo",children:"Demo"}),`
`,n.jsx(i,{of:a})]})}function g(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{g as default};
