/* eslint-disable react-hooks/rules-of-hooks */
import { fn } from "storybook/test";

import { useContainer } from "@qlik/sprout-css-hooks";
import { Button, Checkbox, Modal } from "@qlik/sprout-css-react";
import type { Meta } from "@storybook/react";

import { ModalRootArgTypes } from "./Modal.argTypes";

const meta: Meta<typeof Modal.Root> = {
  title: "Components/Modal/Composition/Root",
  component: Modal.Root,
};
export default meta;

export const Root: Meta<typeof Modal.Root> = {
  render: (props) => {
    const container = useContainer({ boxSizing: "border-box" });

    return (
      <Modal.Root {...props} ref={container.ref}>
        <Modal.Header description="Header description">
          Modal with composition of JSX elements
        </Modal.Header>
        <Modal.Content padding>
          Content explicitly wrapped into ModalContent
        </Modal.Content>
        <Modal.Actions
          metaLabel="3 licences left"
          left={
            <Checkbox
              name="checkbox-name"
              label="Checkbox label"
              onChange={fn()}
            />
          }
        >
          <Button
            variant="secondary"
            label="Secondary action"
            onClick={() => {}}
            justified={container.get<boolean>({
              xxs: true,
              xs: true,
              s: false,
            })}
          />
          <Button
            variant="primary"
            label="Primary action"
            onClick={() => {}}
            justified={container.get<boolean>({
              xxs: true,
              xs: true,
              s: false,
            })}
          />
        </Modal.Actions>
      </Modal.Root>
    );
  },
  args: {
    visible: true,
    width: "l",
  },
  argTypes: ModalRootArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
};
