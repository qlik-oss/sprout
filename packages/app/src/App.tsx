import { useState } from "react";

import sprout from "@qlik/sprout-css-modules";
import { BookmarkIcon } from "@qlik/sprout-icons/react";
import {
  Accordion,
  AlertBanner,
  AlertInline,
  Button,
  ButtonFloating,
  IconButton,
  Select,
  ThemeProvider,
} from "@qlik/sprout-react";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  return (
    <ThemeProvider asDiv className={sprout.classNames("flex", "col", "text_default", "bg_default", "gap_m")}>
      <h1 className={sprout.classNames("font_heading_l", "text_default")}>Vite + React</h1>
      <div className={sprout.classNames("flex", "col", "gap_xl")}>
        <h2>Accordion</h2>
        <Accordion.Container variant="default" renderContent openedDefault={0} behavior="linked">
          <Accordion.Item header="first panel" description="" value="value">
            <p>Content</p>
          </Accordion.Item>
        </Accordion.Container>
        <h2>AlertBanner</h2>
        <AlertBanner variant="info" content="Alert content" onClickDismiss={() => {}} action={<></>} />

        <h2>AlertInline</h2>
        <AlertInline
          severity="info"
          title="Title"
          // onDismiss handler trigger the display of the dismiss button
          onDismiss={() => console.log("Dismissed")}
          actionBar={<Button variant="primary" label="Label" />}
        >
          <p>Structured text but up to you to style it</p>
        </AlertInline>

        <h2>Button</h2>
        <Button variant="primary" size="small" label="Click me" onClick={() => {}} />
        <IconButton variant="default" icon={<BookmarkIcon />} label="Click me" onClick={() => {}} />
        <ButtonFloating>
          <Button variant="primary" size="small" label="Click me" onClick={() => {}} />
        </ButtonFloating>
        <ButtonFloating>
          <IconButton variant="default" icon={<BookmarkIcon />} label="Click me" onClick={() => {}} />
        </ButtonFloating>
        <Button variant="primary" onClick={() => setCount((count) => count + 1)} label={`count is ${count}`} />
        <Select.Select
          value={color}
          onChange={(e) => {
            setColor(e.target.value || "");
          }}
          placeholder="Select a color"
          size="default"
        >
          {/* This is good to have the empty value as in HTML */}
          <Select.Option value="">--Please choose an option--</Select.Option>
          {/* You can use the renderer if you have a datastructure */}
          {/* <Select.OptionRenderer options={OPTIONS} /> */}
          {/* Divider in case you have multiple groups */}
          <Select.Divider />
          {/* Simple and efficient composition */}
          <Select.OptGroup label="Deprecated Colors">
            <Select.Option value="chartreuse">Chartreuse</Select.Option>
            <Select.Option value="cornsilk">Cornsilk</Select.Option>
            <Select.Option value="pink">Gainsboro</Select.Option>
          </Select.OptGroup>
        </Select.Select>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </ThemeProvider>
  );
}

export default App;
