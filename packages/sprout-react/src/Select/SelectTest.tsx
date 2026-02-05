import { useEffect, useLayoutEffect, useRef } from "react";

import { Select, type SelectProps } from ".";
import { Modal } from "../Modal";
import { classNames } from "../classNames";

export const OPTIONS_WITH_GROUP = (
  <>
    <Select.OptGroup label="Basic Colors">
      <Select.Option value="red">Red</Select.Option>
      <Select.Option value="orange">Orange</Select.Option>
      <Select.Option value="green" disabled>
        Green
      </Select.Option>
      <Select.Option value="blue">Blue</Select.Option>
      <Select.Option value="yellow">Yellow</Select.Option>
      <Select.Option value="silver">Silver</Select.Option>
      <Select.Option value="maroon">Maroon</Select.Option>
      <Select.Option value="purple">Purple</Select.Option>
      <Select.Option value="lime">Lime</Select.Option>
      <Select.Option value="brown">Brown</Select.Option>
    </Select.OptGroup>
    <Select.Divider />
    <Select.OptGroup label="Cool Colors">
      <Select.Option value="coral">Coral</Select.Option>
      <Select.Option value="cyan">Cyan</Select.Option>
      <Select.Option value="purple">Purple</Select.Option>
    </Select.OptGroup>
  </>
);

export function SelectTest(props: SelectProps["Select"]) {
  return (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "border-box",
        "gap-xl",
        "p-l",
        "items-center",
      )}
    >
      <Select.Select
        label="color"
        placeholder="Please select a color"
        {...props}
      >
        <Select.Option value="">--Please choose colors--</Select.Option>
        {OPTIONS_WITH_GROUP}
        <Select.Divider />
        <Select.OptGroup label="Deprecated Colors">
          <Select.Option value="chartreuse">
            <Select.OptionStyled
              label="Chartreuse"
              description="nice color btw"
            />
          </Select.Option>
          <Select.Option value="cornsilk">Cornsilk</Select.Option>
          <Select.Option value="pink">Gainsboro</Select.Option>
        </Select.OptGroup>
      </Select.Select>
    </div>
  );
}

export function WithoutNoValueOption() {
  return (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "border-box",
        "gap-xl",
        "p-l",
        "items-center",
      )}
    >
      <Select.Select label="color" placeholder="Please select a color">
        {/* <Select.Option value="" label="--Please choose a color--" /> */}
        {OPTIONS_WITH_GROUP}
        <Select.Divider />
        <Select.OptGroup label="Deprecated Colors">
          <Select.Option value="chartreuse">
            <Select.OptionStyled
              label="Chartreuse"
              description="nice color btw"
            />
          </Select.Option>
          <Select.Option value="cornsilk">Cornsilk</Select.Option>
          <Select.Option value="pink">Gainsboro</Select.Option>
        </Select.OptGroup>
      </Select.Select>
    </div>
  );
}

export function SelectTestUpDown() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // there is a 8px margin on the body ... so let's remove it
        inlineSize: "calc(100% - 16px)",
        blockSize: "calc(100vh - 16px)",
        justifyContent: "space-between",
      }}
    >
      <Select.Select
        label="Floating should be downward"
        placeholder="Select a color"
        defaultValue="red"
      >
        <Select.Option value="">Please select a color</Select.Option>
        {OPTIONS_WITH_GROUP}
      </Select.Select>
      <Select.Select
        label="Floating should be upward"
        placeholder="Select a color"
        defaultValue="red"
      >
        <Select.Option value="">Please select a color</Select.Option>
        {OPTIONS_WITH_GROUP}
      </Select.Select>
    </div>
  );
}

export function SelectModalOverflow({
  defaultValue = "18",
}: { defaultValue?: string } = {}) {
  useEffect(() => {
    document.body.style.setProperty("overflow", "auto");
    document.body.style.setProperty("padding", "0");
    document.body.style.setProperty("blockSize", "100vh");
    document.body.style.setProperty("inlineSize", "100vw");
  }, []);
  return (
    <div style={{ blockSize: "100vh", inlineSize: "100vw", overflow: "auto" }}>
      <Modal headerTitle="Select in Modal" defaultVisible>
        <form>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div style={{ blockSize: "500px" }} />
            <Select.Select
              label="Feedback"
              placeholder="Select an option"
              defaultValue={defaultValue}
            >
              <Select.Option value="1">Please add more details</Select.Option>
              <Select.Option value="2">
                I want to hire people like you
              </Select.Option>
              <Select.Option value="3">Please add more details</Select.Option>
              <Select.Option value="4">
                I want to hire people like you
              </Select.Option>
              <Select.Option value="5">Please add more details</Select.Option>
              <Select.Option value="6">
                I want to hire people like you
              </Select.Option>
              <Select.Option value="7">Please add more details</Select.Option>
              <Select.Option value="8">
                I want to hire people like you
              </Select.Option>
              <Select.Option value="9">Please add more details</Select.Option>
              <Select.Option value="10">
                I want to hire people like you
              </Select.Option>
              <Select.Option value="11">Please add more details</Select.Option>
              <Select.Option value="12">
                I want to hire people like you
              </Select.Option>
              <Select.Option value="13">Please add more details</Select.Option>
              <Select.Option value="14">
                I want to hire people like you
              </Select.Option>
              <Select.Option value="15">Please add more details</Select.Option>
              <Select.Option value="16">
                I want to hire people like you
              </Select.Option>
              <Select.Option value="17">Please add more details</Select.Option>
              <Select.Option value="18" data-testid="myoption">
                My best value
              </Select.Option>
            </Select.Select>
            <div style={{ blockSize: "80px" }} />
          </div>
        </form>
      </Modal>
    </div>
  );
}

export function SelectDefaultValueFromRef() {
  const ref = useRef<HTMLInputElement>(null);
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.defaultValue = "blue";
    }
  }, []);

  return (
    <Select.Select
      label="Select with default value from ref"
      placeholder="Select a color"
      ref={ref}
    >
      <Select.Option value="">Please select a color</Select.Option>
      {OPTIONS_WITH_GROUP}
    </Select.Select>
  );
}

export function SelectInModal() {
  return (
    <Modal headerTitle="Select in Modal" defaultVisible>
      <form>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Select.Select
            label="Feedback"
            placeholder="Select an option"
            defaultValue="2"
          >
            <Select.Option value="1">Please add more details</Select.Option>
            <Select.Option value="2">
              I want to hire people like you
            </Select.Option>
            <Select.Option value="3">Please add more details</Select.Option>
            <Select.Option value="4" data-testid="myoption">
              I want to hire people like you
            </Select.Option>
          </Select.Select>
        </div>
      </form>
    </Modal>
  );
}

export function SearchableSelect(props: SelectProps["Select"]) {
  return (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "border-box",
        "gap-xl",
        "p-l",
        "items-center",
      )}
    >
      <Select.Select
        label="color"
        placeholder="Please select a color"
        {...props}
      >
        <Select.Search />
        <Select.Option value="">--Please choose colors--</Select.Option>
        {OPTIONS_WITH_GROUP}
        <Select.Divider />
        <Select.OptGroup label="Deprecated Colors">
          <Select.Option value="chartreuse">Chartreuse</Select.Option>
          <Select.Option value="cornsilk">Cornsilk</Select.Option>
          <Select.Option value="pink">Gainsboro</Select.Option>
        </Select.OptGroup>
      </Select.Select>
    </div>
  );
}
