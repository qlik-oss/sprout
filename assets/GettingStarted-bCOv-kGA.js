import{j as e,M as r}from"./iframe-BQJExRCF.js";import{useMDXComponents as s}from"./index-BiT2RrsF.js";import"./preload-helper-PPVm8Dsz.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Getting Started"}),`
`,e.jsx(n.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.p,{children:"Welcome to the Sprout design system! This is the implementation of the Sprout design system built on top of React. To get started, ensure you have a React application set up and running. Once your React app is ready, you can add the following dependencies:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm i @qlik/sprout-css-react
`})}),`
`,e.jsxs(n.p,{children:["After installing the dependencies, you can test if everything works by adding the following snippet to your ",e.jsx(n.code,{children:"App.tsx"})," file:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {
  Button,
  ThemeProvider,
  classNames,
} from "@qlik/sprout-css-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider asDiv>
      <h1 className={className("m_o", "p_0", "text_default", "font_heading_m")}>
        Vite + React
      </h1>
      <div className={className("flex", "col", "gap_xs")}>
        <Button
          variant="primary"
          onClick={() => setCount((count) => count + 1)}
          label={\`Count is \${count}\`}
        />
        <p className={className("text_default", "font_body_m")}>
          Edit <code>src/App.tsx</code> and save to test HMR.
        </p>
      </div>
    </ThemeProvider>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"themeprovider",children:"ThemeProvider"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ThemeProvider"})," is responsible for creating the necessary data attributes on top of HTML elements and provide useful information to all the components. However, it does not distribute tokens — that remains the responsibility of the application."]}),`
`,e.jsx(n.p,{children:"This component is optional but highly useful in the following scenarios:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["When using React components that rely on ",e.jsx(n.a,{href:"https://react.dev/reference/react-dom/createPortal",rel:"nofollow",children:"portals"}),"."]}),`
`,e.jsx(n.li,{children:"When building a React application."}),`
`,e.jsxs(n.li,{children:["When setting up a Storybook instance (though we recommend using ",e.jsx(n.code,{children:"@qlik/sprout-css-storybook"})," for this purpose)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"api-highlights",children:"API Highlights"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"asDiv"})}),": This property allows you to create a ",e.jsx(n.code,{children:"div"})," element and apply the necessary data attributes to it."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"onLoad"})}),": This callback provides the attributes, enabling you to add them wherever needed using the native DOM API."]}),`
`]}),`
`,e.jsx(n.h3,{id:"using-themeprovider-with-portals",children:"Using ThemeProvider with Portals"}),`
`,e.jsxs(n.p,{children:["If your application uses ",e.jsx(n.a,{href:"https://react.dev/reference/react-dom/createPortal",rel:"nofollow",children:"portals"})," and tokens are embedded by the app but not on the root element of the page, you must use the ",e.jsx(n.code,{children:"ThemeProvider"})," to apply the tokens to the portal. The ",e.jsx(n.code,{children:"ThemeProvider"})," relies on React context to access the current theme, just like any other React provider."]}),`
`,e.jsx(n.p,{children:"Here’s an example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { type ReactNode } from "react";

import { ThemeProvider } from "@qlik/sprout-css-react";

const MyCustomElement = ({ children }: { children: ReactNode }) => {
  return createPortal(
    <ThemeProvider className="custom-class" id="theme-provider">
      {children}
    </ThemeProvider>,
    document.body,
  );
};
`})}),`
`,e.jsx(n.h2,{id:"storybook-setup",children:"Storybook Setup"}),`
`,e.jsxs(n.p,{children:["Setting up Sprout CSS in Storybook is straightforward. You can use the ",e.jsx(n.code,{children:"@qlik/sprout-css-storybook"})," package to simplify the process."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import {
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
`,e.jsx(n.h3,{id:"final-notes",children:"Final Notes"}),`
`,e.jsx(n.p,{children:"Sprout CSS is designed to make your development experience smoother while ensuring a consistent and polished design system. If you encounter any issues or have suggestions, feel free to reach out or contribute to the project. Happy coding!"})]})}function l(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{l as default};
