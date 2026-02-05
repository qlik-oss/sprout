import { forwardRef, useEffect, useRef, useState } from "react";

import { Button } from "../Button";
import { TextField } from "../Input";
import { Textarea } from "../Textarea";
import { classNames } from "../classNames";
import { Menu, type MenuProps } from "./Menu";

// Enforce we have forwardRef in the Menu.Trigger
const ForwardRefTest = forwardRef<HTMLDivElement, MenuProps["Trigger"]>(
  (props, ref) => <Menu.Trigger ref={ref} {...props} />,
);
ForwardRefTest.displayName = "ForwardRefTest";

export function MenuFocusReturnTest() {
  const [displayForm, setDisplayForm] = useState(false);
  return (
    <div>
      {!displayForm ? (
        <div>
          <ForwardRefTest
            menu={
              <>
                <Menu.Item label="first" />
                <Menu.Item
                  label="display form"
                  onClick={() => {
                    setDisplayForm(true);
                  }}
                />
                <Menu.Item label="last" />
              </>
            }
          >
            <Button label="Open Menu" />
          </ForwardRefTest>
        </div>
      ) : (
        <form>
          <TextField label="name" autoFocus />
          <Textarea label="biography" />
        </form>
      )}
    </div>
  );
}

export function MenuRefTest() {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [newValue, setNewValue] = useState<string>("value");
  const [restoreFocus, setRestoreFocus] = useState<boolean>(false);
  const actionBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!editMode && restoreFocus) {
      actionBtnRef.current?.focus();
    }
  }, [editMode, restoreFocus]);

  return editMode ? (
    <input
      value={newValue}
      ref={(node) => {
        if (node) {
          node.focus();
        }
      }}
      onChange={(e) => {
        setNewValue(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          e.stopPropagation();
          setEditMode(false);
        }
      }}
    />
  ) : (
    <Menu.Trigger
      menu={
        <Menu.Item
          label="Edit"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setEditMode(true);
            setRestoreFocus(true);
          }}
        />
      }
    >
      <Button ref={actionBtnRef} variant="quiet" label="Menu" />
    </Menu.Trigger>
  );
}

export function MenuControlledOpenState() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div id="component-testing">
      <Button label="External trigger" onClick={handleOpen} />

      <Menu.Trigger
        open={open}
        menu={
          <>
            <Menu.Item icon={null} label="Profile" />
            <Menu.Item icon={null} label="Logout" />
          </>
        }
      >
        <Button label="Trigger" onClick={handleOpen} />
      </Menu.Trigger>
    </div>
  );
}

export function MenuControlledOpenChange() {
  const [callCount, setCallCount] = useState(0);

  const handleOpenChange = () => {
    setCallCount((c) => c + 1);
  };

  return (
    <div id="component-testing">
      <Button
        label="External trigger"
        onClick={() => {
          handleOpenChange();
        }}
      />
      <p className={classNames("font-body-m")}>
        onChange has been called:{" "}
        <span data-testid="call-count">{callCount}</span>
      </p>

      <Menu.Trigger
        onOpenChange={handleOpenChange}
        menu={
          <>
            <Menu.Item icon={null} label="Profile" />
            <Menu.Item icon={null} label="Logout" />
          </>
        }
      >
        <Button label="Trigger" />
      </Menu.Trigger>
    </div>
  );
}

export function MenuBackdropTest() {
  return (
    <div id="component-testing">
      <Menu.Trigger
        menu={
          <>
            <Menu.Item icon={null} label="Profile" />
            <Menu.Item icon={null} label="Logout" />
          </>
        }
      >
        <Button label="Open Menu" />
      </Menu.Trigger>
      <Button label="External Button" />
    </div>
  );
}
