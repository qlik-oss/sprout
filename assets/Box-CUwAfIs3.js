import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{n as t,s as n}from"./iframe-DaKWDHAC.js";import{n as r}from"./lib-EjdzwnHJ.js";import{VisualTest as i}from"./Box.stories-CPgOQUVL.js";var a=e();function o(e){let o={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...r(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{title:`Components/Box`}),`
`,(0,a.jsx)(o.h1,{id:`box-deprecated`,children:`Box (deprecated)`}),`
`,(0,a.jsxs)(o.p,{children:[`Largely inspired from `,(0,a.jsx)(o.a,{href:`https://mui.com/system/react-box/%5D`,rel:`nofollow`,children:`MUI Box`}),` this component provide a quick way to get some layout sorted out.`]}),`
`,(0,a.jsxs)(o.p,{children:[`Box has some `,(0,a.jsx)(o.strong,{children:`drawbacks`}),` as it takes quite a lot of runtime. It has to check lots of props to be able to build the className.
Like Github we would like to `,(0,a.jsx)(o.a,{href:`https://github.com/primer/react/blob/main/contributor-docs/migration-from-box.md`,rel:`nofollow`,children:`Migrate away from Box`}),`.
You should consider to use the `,(0,a.jsx)(o.a,{href:`?path=/docs/utils-sprout-css-modules--docs`,children:`sprout-css-modules`}),` directly for `,(0,a.jsx)(o.strong,{children:`performance`}),` reasons but also for readability.`]}),`
`,(0,a.jsx)(o.p,{children:`As any other utility this component doesn't comes from Figma but it is using all our tokens.`}),`
`,(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:`language-typescript`,children:`import { Box } from "@qlik/sprout-react";


function MyComponent() {
    return <Box border="default" />
}
`})}),`
`,(0,a.jsx)(o.h2,{id:`component-props`,children:`Component Props`}),`
`,(0,a.jsxs)(o.p,{children:[`In terms of API it provides quick access to every `,(0,a.jsx)(o.a,{href:`https://css-tricks.com/snippets/css/a-guide-to-flexbox/`,rel:`nofollow`,children:`flex`}),` css properties.
By default it uses the following styles:`]}),`
`,(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:`language-css`,children:`.flex {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
}
`})}),`
`,(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:`language-typescript`,children:`type Spacing = "0" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "3xl";
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
`,(0,a.jsx)(o.h2,{id:`getboxprops-deprecated`,children:`getBoxProps (deprecated)`}),`
`,(0,a.jsxs)(o.p,{children:[`We are preparing a move away from Box for performance reason. For now only `,(0,a.jsx)(o.code,{children:`getBoxProps`}),` api is deprecated.`]}),`
`,(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:`language-tsx`,children:`import { classNames, getBoxProps } from "@qlik/sprout-react";

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
`,(0,a.jsx)(o.h2,{id:`demo`,children:`Demo`}),`
`,(0,a.jsx)(t,{of:i})]})}function s(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}export{s as default};