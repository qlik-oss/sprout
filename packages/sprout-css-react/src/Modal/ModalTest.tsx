import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../Button";
import { TextField } from "../Input";
import { MenuFocusReturnTest } from "../Menu/MenuTest";
import { Textarea } from "../Textarea";
import { classNames } from "../classNames";
import { Modal } from "./Modal";

export function ModalContentTest({ text }: { text: string }) {
  const handleModal = (node: HTMLDivElement) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, no-param-reassign
    node.querySelector('[data-testid="modal.content"]')!.innerHTML = text;
  };

  return (
    <Modal headerTitle="Default Modal" visible ref={handleModal}>
      Text
    </Modal>
  );
}

type MyFormData = {
  description: string;
  name: string;
};

export function ModalFormFocusTest() {
  const { register, handleSubmit, formState } = useForm<MyFormData>();
  // eslint-disable-next-line react/hook-use-state
  const [, setFormData] = useState<MyFormData>();
  const [visible, setVisible] = useState(true);

  // This log is raising the issue
  // eslint-disable-next-line no-console
  console.log("formState.dirtyFields", formState.dirtyFields);

  const onSubmit = async (data: MyFormData) => {
    setFormData(data);
  };

  return (
    <Modal
      headerTitle="Default Modal"
      visible={visible}
      onClose={() => {
        setVisible(false);
      }}
    >
      <form
        onSubmit={(e) => {
          void handleSubmit(onSubmit)(e);
        }}
        data-testid="wrapper"
      >
        <div
          className={classNames(
            "flex",
            "flex-col",
            "border-box",
            "gap-xl",
            "justify-stretch",
          )}
          style={{ inlineSize: "300px" }}
        >
          <TextField data-testid="name" label="name" {...register("name")} />
          <Textarea
            data-testid="description"
            label="description"
            {...register("description")}
          />
        </div>
      </form>
      <MenuFocusReturnTest />
    </Modal>
  );
}

export function ModalIntoModalTest() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Modal headerTitle="Main modal" visible width="xl">
      <div
        className={classNames(
          "flex",
          "flex-col",
          "border-box",
          "gap-xl",
          "pb-m",
        )}
      >
        <TextField label="Username" id="username_1" />
        <Button
          label="Show second modal"
          onClick={() => {
            setShowModal(true);
          }}
        />
      </div>
      <Modal
        headerTitle="Second Modal"
        headerDescription="This is a description"
        visible={showModal}
        width="m"
        onClose={() => {
          setShowModal(false);
        }}
      >
        <div
          className={classNames(
            "flex",
            "flex-col",
            "border-box",
            "gap-xl",
            "pb-m",
          )}
          style={{ blockSize: "50vh" }}
        >
          <TextField label="Username" id="username_2" />
        </div>
      </Modal>
    </Modal>
  );
}

export function ModalWithRerender({ onClose }: { onClose: () => void }) {
  const [headerTitle, setHeaderTitle] = useState("Playground modal");

  setTimeout(() => {
    setHeaderTitle("Changed header");
  }, 1000);

  return (
    <Modal headerTitle={headerTitle} onClose={onClose} defaultVisible>
      <form>
        <div
          className={classNames(
            "flex",
            "flex-col",
            "border-box",
            "gap-xl",
            "justify-stretch",
          )}
          style={{ inlineSize: "300px" }}
        >
          <TextField data-testid="name" label="name" />
          <Textarea data-testid="description" label="description" />
        </div>
      </form>
    </Modal>
  );
}

export function ModalPortalOrder() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (isAdded && !document.querySelector('[data-testid="added-element"]')) {
      const div = document.createElement("div");
      div.textContent = "I am added to body";
      div.dataset.testid = "added-element";
      document.body.appendChild(div);
    }
  }, [isAdded]);

  return (
    <div>
      <Button
        label="Open Modal"
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <Button
        label="Add element to body"
        onClick={() => {
          setIsAdded(true);
        }}
      />
      <Modal
        headerTitle="Modal Portal Order Test"
        visible={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div>Modal Content</div>
      </Modal>
    </div>
  );
}
