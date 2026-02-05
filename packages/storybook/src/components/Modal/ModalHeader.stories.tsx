import { Modal, classNames } from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react";

import { ModalHeaderArgTypes } from "./Modal.argTypes";

const meta: Meta<typeof Modal.Header> = {
  title: "Components/Modal/Composition/Header",
  component: Modal.Header,
};
export default meta;

export const Header: StoryObj<typeof Modal.Header> = {
  render: (props) => (
    <div className={classNames("max-w-3xl")}>
      <Modal.Header {...props} />
    </div>
  ),
  args: {
    children: "Modal Header",
    description: "This is a description for the modal header",
    preventClose: false,
  },
  argTypes: ModalHeaderArgTypes,
};
