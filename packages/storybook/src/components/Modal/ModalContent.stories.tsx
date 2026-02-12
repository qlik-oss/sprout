import { Modal, classNames } from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react";

import { ModalContentArgTypes } from "./Modal.argTypes";

const meta: Meta<typeof Modal.Content> = {
  title: "Components/Modal/Composition/Content",
  component: Modal.Content,
};
export default meta;

export const Content: StoryObj<typeof Modal.Content> = {
  render: (props) => (
    <div className={classNames("max-w-3xl")}>
      <Modal.Content {...props}>
        <div className={classNames("px-xxl")}>
          <p className={classNames("text-default", "font-body-s")}>
            The modal content area displays any children passed to it. When the
            content height exceeds the available space, the section becomes
            scrollable and automatically renders top and bottom dividers to
            visually indicate overflow.
          </p>

          <p className={classNames("text-default", "font-body-s")}>
            The <code>`padding`</code> prop on <code>`ModalContent`</code> is
            deprecated. Instead, apply spacing directly to a wrapping element.
            In this example,
            <code>`padding=false`</code> removes internal padding from{" "}
            <code>`ModalContent`</code>, while the wrapper applies horizontal
            padding using the <code>`px_xxl`</code> utility class.
          </p>
        </div>
      </Modal.Content>
    </div>
  ),

  argTypes: ModalContentArgTypes,
};
