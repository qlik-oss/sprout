import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{s as t}from"./iframe-BRSAI4nO.js";import{n}from"./lib-EjdzwnHJ.js";var r=e();function i(e){let i={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{title:`Getting Started`}),`
`,(0,r.jsx)(i.h1,{id:`getting-started`,children:`Getting Started`}),`
`,(0,r.jsx)(i.p,{children:`Welcome to the Sprout design system! This is the implementation of the Sprout design system built on top of React. To get started, ensure you have a React application set up and running. Once your React app is ready, you can add the following dependencies:`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-bash`,children:`pnpm install @qlik/design-tokens @qlik/sprout-icons @qlik/sprout-react
`})}),`
`,(0,r.jsxs)(i.p,{children:[`After installing the dependencies, you can test if everything works by adding the following snippet to your `,(0,r.jsx)(i.code,{children:`App.tsx`}),` file:`]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-tsx`,children:`// qlik theme depends on the following fonts
import "source-code-pro/source-code-pro.css";
import "source-sans-pro/source-sans-pro.css";

// theme's tokens must be setup at the app level (only once in the entire application)
import "@qlik/design-tokens/generated/tokens/css/sprout-tokens.css";
import {
  Button,
  // ThemeProvider is responsible to activate the theme using data-qlik-theme attribute and forwarding the theme to react's portals
  ThemeProvider,
  classNames,
} from "@qlik/sprout-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider asDiv>
      <h1
        className={classNames("m-0", "p-0", "text-default", "font-heading-m")}
      >
        Vite + React
      </h1>
      <div className={classNames("flex", "flex-col", "gap-xs")}>
        <Button
          variant="primary"
          onClick={() => setCount((count) => count + 1)}
          label={\`Count is \${count}\`}
        />
        <p className={classNames("text-default", "font-body-m")}>
          Edit <code>src/App.tsx</code> and save to test HMR.
        </p>
      </div>
    </ThemeProvider>
  );
}
`})}),`
`,(0,r.jsx)(i.h2,{id:`themeprovider`,children:`ThemeProvider`}),`
`,(0,r.jsxs)(i.p,{children:[`The `,(0,r.jsx)(i.code,{children:`ThemeProvider`}),` is responsible for creating the necessary data attributes on top of HTML elements and provide useful information to all the components. However, it does not distribute tokens — that remains the responsibility of the application.`]}),`
`,(0,r.jsx)(i.p,{children:`This component is optional but highly useful in the following scenarios:`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[`When using React components that rely on `,(0,r.jsx)(i.a,{href:`https://react.dev/reference/react-dom/createPortal`,rel:`nofollow`,children:`portals`}),`.`]}),`
`,(0,r.jsx)(i.li,{children:`When building a React application.`}),`
`,(0,r.jsxs)(i.li,{children:[`When setting up a Storybook instance (though we recommend using `,(0,r.jsx)(i.code,{children:`@qlik/sprout-css-storybook`}),` for this purpose).`]}),`
`]}),`
`,(0,r.jsx)(i.h3,{id:`api-highlights`,children:`API Highlights`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:`asDiv`})}),`: This property allows you to create a `,(0,r.jsx)(i.code,{children:`div`}),` element and apply the necessary data attributes to it.`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:`onLoad`})}),`: This callback provides the attributes, enabling you to add them wherever needed using the native DOM API.`]}),`
`]}),`
`,(0,r.jsx)(i.h3,{id:`using-themeprovider-with-portals`,children:`Using ThemeProvider with Portals`}),`
`,(0,r.jsxs)(i.p,{children:[`If your application uses `,(0,r.jsx)(i.a,{href:`https://react.dev/reference/react-dom/createPortal`,rel:`nofollow`,children:`portals`}),` and tokens are embedded by the app but not on the root element of the page, you must use the `,(0,r.jsx)(i.code,{children:`ThemeProvider`}),` to apply the tokens to the portal. The `,(0,r.jsx)(i.code,{children:`ThemeProvider`}),` relies on React context to access the current theme, just like any other React provider.`]}),`
`,(0,r.jsx)(i.p,{children:`Here’s an example:`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-tsx`,children:`import { type ReactNode } from "react";

import { ThemeProvider } from "@qlik/sprout-react";

const MyCustomElement = ({ children }: { children: ReactNode }) => {
  return createPortal(
    <ThemeProvider className="custom-class" id="theme-provider">
      {children}
    </ThemeProvider>,
    document.body,
  );
};
`})}),`
`,(0,r.jsx)(i.h2,{id:`storybook-setup`,children:`Storybook Setup`}),`
`,(0,r.jsxs)(i.p,{children:[`Setting up Sprout CSS in Storybook is straightforward. You can use the `,(0,r.jsx)(i.code,{children:`@qlik/sprout-css-storybook`}),` package to simplify the process.`]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-jsx`,children:`import {
  getSproutGlobalTypes,
  sproutCSSDecorator,
} from "@qlik/sprout-css-storybook";

export default {
  // Automatically wraps your stories with the ThemeProvider
  decorators: [sproutCSSDecorator],
  globalTypes: {
    // Enable appearance control via the default Storybook addon
    ...getSproutGlobalTypes({ appearance: false }),
  },
};
`})}),`
`,(0,r.jsx)(i.h3,{id:`final-notes`,children:`Final Notes`}),`
`,(0,r.jsx)(i.p,{children:`Sprout is designed to make your development experience smoother while ensuring a consistent and polished design system. If you encounter any issues or have suggestions, feel free to reach out or contribute to the project. Happy coding!`})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};