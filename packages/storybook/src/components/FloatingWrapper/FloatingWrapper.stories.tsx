import {
  Button,
  FloatingWrapper,
  IconButton,
  TextField,
  ToggleButton,
  ToggleIconButton,
  classNames,
} from "@qlik/sprout-react";
import BinOutline from "@qlik/sprout-icons/react/BinOutline";

export default {
  title: "Components/FloatingWrapper",
  component: FloatingWrapper,
};

export const FloatingButton = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: () => (
    <div className={classNames("flex", "border-box", "flex-col")}>
      <FloatingWrapper>
        <Button label="label" />
      </FloatingWrapper>
    </div>
  ),
};

export const FloatingIconButton = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: () => (
    <div className={classNames("flex", "border-box", "flex-col")}>
      <FloatingWrapper>
        <IconButton icon={<BinOutline />} label="label" />
      </FloatingWrapper>
    </div>
  ),
};

export const FloatingToggleButton = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: () => (
    <div className={classNames("flex", "border-box", "flex-col")}>
      <FloatingWrapper>
        <ToggleButton label="label" defaultToggled />
      </FloatingWrapper>
    </div>
  ),
};

export const FloatingToggleIconButton = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: () => (
    <div className={classNames("flex", "border-box", "flex-col")}>
      <FloatingWrapper>
        <ToggleIconButton icon={<BinOutline />} label="label" defaultToggled />
      </FloatingWrapper>
    </div>
  ),
};

export const FloatingTextField = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: () => (
    <div className={classNames("flex", "border-box", "flex-col")}>
      <FloatingWrapper>
        <TextField defaultValue="value" />
      </FloatingWrapper>
    </div>
  ),
};

export const FloatingTextFieldSearch = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: () => (
    <div className={classNames("flex", "border-box", "flex-col")}>
      <FloatingWrapper>
        <TextField type="search" placeholder="Search" />
      </FloatingWrapper>
    </div>
  ),
};
export const VisualTest = {
  render: () => {
    return (
      <div className={classNames("flex", "border-box", "flex-col", "gap-xl")}>
        <FloatingWrapper>
          <Button label="label" />
        </FloatingWrapper>
        <FloatingWrapper>
          <IconButton icon={<BinOutline />} label="label" />
        </FloatingWrapper>
        <FloatingWrapper>
          <ToggleButton label="label" defaultToggled />
        </FloatingWrapper>
        <FloatingWrapper>
          <ToggleIconButton
            icon={<BinOutline />}
            label="label"
            defaultToggled
          />
        </FloatingWrapper>
        <FloatingWrapper>
          <TextField defaultValue="value" />
        </FloatingWrapper>
        <FloatingWrapper>
          <TextField type="search" placeholder="Search" />
        </FloatingWrapper>
      </div>
    );
  },
};
