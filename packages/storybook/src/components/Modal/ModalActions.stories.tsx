import { useContainer } from "@qlik/sprout-hooks";
import { Button, Checkbox, Modal, classNames } from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react";

import { ModalActionsArgTypes } from "./Modal.argTypes";

const meta: Meta<typeof Modal.Actions> = {
  title: "Components/Modal/Composition/Actions",
  component: Modal.Actions,
};
export default meta;

export const Actions: StoryObj<typeof Modal.Actions> = {
  render: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const container = useContainer({ boxSizing: "border-box" });

    return (
      <div ref={container.ref} className={classNames("max-w-3xl")}>
        <Modal.Actions {...props}>
          <Button
            variant="secondary"
            label="Child action 1"
            onClick={() => {}}
            justified={container.get<boolean>({
              xxs: true,
              s: false,
            })}
          />
          <Button
            variant="primary"
            label="Child action 2"
            onClick={() => {}}
            justified={container.get<boolean>({
              xxs: true,
              s: false,
            })}
          />
        </Modal.Actions>
      </div>
    );
  },
  args: {
    metaLabel: "Modal actions meta label",
    left: <Checkbox label="Left aligned checkbox" />,
  },
  argTypes: ModalActionsArgTypes,
};
