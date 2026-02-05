import { type ReactNode, StrictMode } from "react";

import { expect, test } from "@playwright/experimental-ct-react";
import { tokens } from "@qlik/design-tokens";

import { Modal } from ".";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { getAxeReport } from "../PlaywrightUtils";
import { Select } from "../Select";
import { KEYBOARD_KEYS } from "../Utils/keyboardKeys";
import {
  ModalContentTest,
  ModalFormFocusTest,
  ModalIntoModalTest,
  ModalPortalOrder,
  ModalWithRerender,
} from "./ModalTest";

const BIG_TEXT: Array<ReactNode> = [];
for (let i = 0; i < 1000; i++) {
  BIG_TEXT.push(
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et luctus
      diam. Pellentesque vitae enim gravida, gravida ante non, laoreet sem. Nam
      dictum placerat eleifend. Praesent eu mauris sit amet ex cursus consequat
      et vulputate sem. Integer eros nulla, facilisis eget felis in, maximus
      lacinia quam. Pellentesque et sem ac est eleifend placerat id sit amet
      mauris. Nunc dolor nisi, egestas vel pellentesque sed, suscipit ut metus.
      Aliquam vulputate ante vitae consequat porta. Fusce nec interdum sem,
      sollicitudin vehicula diam. Morbi nunc mi, molestie et feugiat ut,
      interdum sit amet urna. Fusce ut malesuada mauris. Phasellus id tortor
      diam. Suspendisse nisi est, placerat a placerat vitae, mollis in est.
      Aliquam suscipit suscipit lacus, eu vestibulum ante consequat id. Donec
      diam velit, porta at elit a, pretium aliquam arcu.
    </p>,
  );
}

test("should not have overflow with small content", async ({ page, mount }) => {
  await mount(
    <Modal
      headerTitle="Default Modal"
      headerDescription="This is a description"
      visible
      footerActions={
        <Button variant="primary" label="footerActions" onClick={() => {}} />
      }
    >
      <p>Simple text</p>
    </Modal>,
  );
  const modal = page.getByRole("dialog");
  await expect(modal).toBeVisible();
  // try to find divider
  const allPresentation = await page.locator("css=hr").all();
  expect(allPresentation.length).toBe(0);
});

test("should have overflow with lots of content", async ({ page, mount }) => {
  await mount(
    <Modal
      headerTitle="Default Modal"
      headerDescription="This is a description"
      visible
      footerActions={
        <Button variant="primary" label="footerActions" onClick={() => {}} />
      }
    >
      {BIG_TEXT.map((t) => t)}
    </Modal>,
  );
  const modal = page.getByRole("dialog");
  await expect(modal).toBeVisible();
  const allPresentation = await page.locator("css=hr").all();
  expect(allPresentation.length).toBe(2);
});

test(`should be accessible`, async ({ mount, page }) => {
  await mount(
    <Modal
      variant="dialog"
      headerTitle="Default Modal"
      headerDescription="This is a description"
      visible
      id="component-testing"
    >
      {BIG_TEXT.map((t) => t)}
    </Modal>,
  );
  // role="dialog"
  const modal = page.getByRole("dialog");
  await expect(modal).toBeVisible();

  // axe-core
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  const header = modal.getByTestId("modal.header");
  const headerTitleId = await header
    .getByText("Default Modal")
    .getAttribute("id");
  const headerDescriptionId = await header
    .getByText("This is a description")
    .getAttribute("id");
  await expect(modal).toHaveAttribute("aria-modal", "true");
  await expect(modal).toHaveAttribute("aria-labelledby", headerTitleId || "");
  await expect(modal).toHaveAttribute(
    "aria-describedby",
    headerDescriptionId || "",
  );

  // should have theme provider dataset
  const portal = page.locator('div[data-sprout-portal="true"]');
  await expect(portal).toHaveAttribute("data-qlik-appearance", "qlik-light");
  await expect(portal).toHaveAttribute("data-qlik-density", "comfortable");
  await expect(portal).toHaveAttribute("data-qlik-roundness", "soft");
  await expect(portal).toHaveAttribute("data-qlik-sizing", "mid-sized");
  await expect(portal).toHaveAttribute("data-qlik-typography", "source-sans");
});

test("should take the focus by default", async ({ mount, page }) => {
  await mount(
    <Modal headerTitle="Default Modal" visible preventEscaping>
      {BIG_TEXT.map((t) => t)}
    </Modal>,
  );
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("dialog")).toBeFocused();
});

test("should close the modal on escape key", async ({ mount, page }) => {
  const cache = { called: false };
  await mount(
    <Modal
      headerTitle="Default Modal"
      visible={!cache.called}
      onClose={() => {
        cache.called = true;
      }}
    >
      {BIG_TEXT.map((t) => t)}
    </Modal>,
  );
  const dialog = page.getByRole("dialog");

  expect(cache.called).toBe(false);
  await expect(dialog).toBeVisible();
  await dialog.press(KEYBOARD_KEYS.ESCAPE);
  expect(cache.called).toBe(true);
});

test("should not close if preventEscaping is true", async ({ mount, page }) => {
  const cache = { called: false };
  await mount(
    <Modal
      headerTitle="Default Modal"
      preventEscaping
      visible={!cache.called}
      onClose={() => {
        cache.called = true;
      }}
    >
      {BIG_TEXT.map((t) => t)}
    </Modal>,
  );

  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  expect(cache.called).toBe(false);
});

test("should close the modal on backdrop click", async ({ mount, page }) => {
  const cache = { called: false };
  await mount(
    <Modal
      headerTitle="Default Modal"
      visible={!cache.called}
      onClose={() => {
        cache.called = true;
      }}
    >
      {BIG_TEXT.map((t) => t)}
    </Modal>,
  );

  const backdrop = page.getByTestId("modal.backdrop");
  // by default playwright click in the middle of the backdrop so inside the modal
  await backdrop.click({ position: { x: 10, y: 10 } });
  expect(cache.called).toBe(true);
});

test("should not close the modal on backdrop click while preventEscaping is true", async ({
  mount,
  page,
}) => {
  const cache = { called: false };
  await mount(
    <Modal
      headerTitle="Default Modal"
      preventEscaping
      visible={!cache.called}
      onClose={() => {
        cache.called = true;
      }}
    >
      {BIG_TEXT.map((t) => t)}
    </Modal>,
  );
  expect(cache.called).toBe(false);
  const backdrop = page.getByTestId("modal.backdrop");
  await backdrop.click();
  expect(cache.called).toBe(false);
});

test("should display a checkbox on the left side of the footer", async ({
  mount,
  page,
}) => {
  await mount(
    <Modal
      headerTitle="Default Modal"
      visible
      footerLeft={
        <Checkbox
          name="checkbox-name"
          label="Checkbox label"
          onChange={() => {}}
        />
      }
    >
      Text
    </Modal>,
  );
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("checkbox")).toBeVisible();
});

test("should display a button on the left side of the footer", async ({
  mount,
  page,
}) => {
  await mount(
    <Modal
      headerTitle="Default Modal"
      visible
      footerLeft={
        <Button variant="default" label="Create" onClick={() => {}} />
      }
    >
      Text
    </Modal>,
  );
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(
    page.getByRole("button").filter({ hasText: "Create" }),
  ).toBeVisible();
});

test("should update the content text", async ({ mount, page }) => {
  const text = "Hello";
  await mount(<ModalContentTest text={text} />);
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.locator(`text=${text}`)).toBeVisible();
});

test("should navigate between form inputs and not loose focus", async ({
  mount,
  page,
}) => {
  await mount(<ModalFormFocusTest />);
  const modal = page.getByRole("dialog");
  await expect(modal).toBeVisible();
  const desc = page.getByTestId("description");

  // Focus description input and type "FOO"
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(desc).toBeFocused();
  await desc.press("F");
  await expect(desc).toHaveValue("F");
  await desc.press("O");
  await expect(desc).toHaveValue("FO");
  await desc.press("O");
  await expect(desc).toHaveValue("FOO");

  // MenuFocusReturnTest
  const menu = page.getByRole("menu");
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  const btn = page.getByRole("button", { name: "Open Menu" });
  await expect(btn).toBeFocused();
  await btn.click();
  await expect(menu).toBeVisible();
  const menuItems = await page.getByRole("menuitem").all();
  expect(menuItems.length).toBe(3);
  await menuItems[0].click();
  await expect(menu).not.toBeVisible();
  await btn.click();
  await menuItems[0].click();
  await expect(menu).not.toBeVisible();
  // return focus checked
  await expect(btn).toBeFocused();

  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(page.getByTestId("name")).toBeFocused();
});

test("should set focus on child modal", async ({ mount, page }) => {
  await mount(<ModalIntoModalTest />);

  let modals = await page.locator("role=dialog").all();
  await expect(modals[0].getByRole("button", { name: "Close" })).toBeFocused();

  await page.click("text=Show second modal");
  modals = await page.locator("role=dialog").all();
  await expect(modals[1].getByRole("textbox")).toBeVisible();

  await expect(
    modals[0].getByRole("button", { name: "Close" }),
  ).not.toBeFocused();
  await expect(modals[1].getByRole("button", { name: "Close" })).toBeFocused();

  await modals[1].getByRole("button", { name: "Close" }).click();

  await expect(
    page.getByRole("button", { name: "Show second modal" }),
  ).toBeFocused();
});

test("when the modal is open, the body should not scroll", async ({
  mount,
  page,
}) => {
  await mount(
    <Modal
      headerTitle="Default Modal"
      headerDescription="This is a description"
      defaultVisible
    >
      Text
    </Modal>,
  );
  const modal = page.getByRole("dialog");
  await expect(modal).toBeVisible();
  const body = page.locator("body");
  const overscrollBehavior = await body.evaluate(
    (el: HTMLElement) => getComputedStyle(el).overscrollBehavior,
  );
  expect(overscrollBehavior).toBe("none");
});

test("should call onClose once on ESC even after re-render", async ({
  mount,
  page,
}) => {
  const calls = { count: 0 };
  await mount(
    <ModalWithRerender
      onClose={() => {
        calls.count += 1;
      }}
    />,
  );

  const modal = page.getByRole("dialog");
  await expect(modal).toBeVisible();
  await expect(modal.getByText("Playground modal")).toBeVisible();
  await page.waitForTimeout(1000);

  await expect(modal.getByText("Changed header")).toBeVisible();

  await modal.press(KEYBOARD_KEYS.ESCAPE);
  await expect(modal).not.toBeVisible();
  expect(calls.count).toBe(1);
});

test("should render the select in front of the modal", async ({
  mount,
  page,
}) => {
  await mount(
    <StrictMode>
      <Modal headerTitle="Modal with select" visible>
        <Select.Select data-testid="select-in-modal">
          <Select.Option value="1">Option 1</Select.Option>
          <Select.Option value="2">Option 2</Select.Option>
          <Select.Option value="3">Option 3</Select.Option>
        </Select.Select>
      </Modal>
    </StrictMode>,
  );
  const modal = page.getByRole("dialog");
  await expect(modal).toBeVisible();
  const select = page.getByTestId("select-in-modal");
  await expect(select).toBeVisible();
  await select.click();
  const option = page.getByRole("option", { name: "Option 2" });
  await expect(option).toBeVisible();
});

test("should Modal.Content with overflowY=auto trigger a scroll bar", async ({
  page,
  mount,
}) => {
  await mount(
    <Modal.Root visible onClose={() => {}} height="s" variant="dialog">
      <Modal.Header>Modal with scrollable content</Modal.Header>
      <Modal.Content overflowY="auto" padding>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: "1",
          }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={i}>
              This is some content that should overflow the dialog content area.
            </p>
          ))}
        </div>
      </Modal.Content>
    </Modal.Root>,
  );
  const dialogContent = page.getByTestId("modal.content");
  await expect(dialogContent).toBeVisible();

  await page.waitForTimeout(100);
  await expect(dialogContent).toHaveAttribute("data-scrollable", "true");
});

test("should Modal.Content with overflowY=hidden let the content manage overflow", async ({
  page,
  mount,
}) => {
  await mount(
    <Modal.Root visible onClose={() => {}} height="s" variant="dialog">
      <Modal.Header>Modal with scrollable content</Modal.Header>
      <Modal.Content overflowY="hidden" divider="visible">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexGrow: "1",
            blockSize: "100%",
            inlineSize: "100%",
          }}
        >
          <div
            data-testid="side-nav"
            style={{
              display: "flex",
              flexDirection: "column",
              flexShrink: 0,
              flexGrow: 1,
              paddingInlineStart: tokens.common_spacing_m,
              borderInlineEnd: tokens.common_divider_default,
            }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <a href={`#${i}`} key={i}>
                link {i}
              </a>
            ))}
          </div>
          <div
            data-testid="main-content"
            style={{
              display: "flex",
              flexDirection: "column",
              flexShrink: 0,
              flexGrow: 1,
              paddingInlineStart: tokens.common_spacing_m,
              overflowBlock: "auto",
              borderInlineEnd: tokens.common_divider_default,
            }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <p key={i}>This is some content</p>
            ))}
          </div>
        </div>
      </Modal.Content>
    </Modal.Root>,
  );
  const dialogContent = page.getByTestId("modal.content");
  await expect(dialogContent).toBeVisible();
  const sideNav = page.getByTestId("side-nav");
  const mainContent = page.getByTestId("main-content");

  await expect(sideNav).toBeVisible();
  await expect(mainContent).toBeVisible();

  const sideNavOverflow = await sideNav.evaluate(
    (el: HTMLElement) => getComputedStyle(el).overflowY,
  );
  expect(sideNavOverflow).toBe("visible");

  const mainContentOverflow = await mainContent.evaluate(
    (el: HTMLElement) => getComputedStyle(el).overflowY,
  );
  expect(mainContentOverflow).toBe("auto");
  // check if it is scrollable
  const isScrollable = await mainContent.evaluate((el: HTMLElement) => {
    return el.scrollHeight > el.clientHeight;
  });
  expect(isScrollable).toBe(true);
});

test("should modal comes after anything in the body", async ({
  mount,
  page,
}) => {
  await mount(<ModalPortalOrder />);
  const modal = page.getByRole("dialog");
  const openButton = page.getByRole("button", { name: "Open Modal" });
  const addButton = page.getByRole("button", { name: "Add element to body" });
  const closeBtn = modal.getByRole("button", { name: "Close" });

  await expect(addButton).toBeVisible();
  await expect(openButton).toBeVisible();
  await expect(modal).not.toBeVisible();
  await openButton.click();
  await expect(modal).toBeVisible();
  await closeBtn.click();
  await expect(modal).not.toBeVisible();

  // add element to body
  await addButton.click();
  const newElement = page.locator('div[data-testid="added-element"]');
  await expect(newElement).toBeVisible();

  // open modal again
  await openButton.click();
  await expect(modal).toBeVisible();

  // Check
  const portalIsAfterAddedElement = await page.evaluate(() => {
    const portal = document.documentElement.querySelector(
      '[data-sprout-portal="true"]',
    );
    const addedElement = document.documentElement.querySelector(
      '[data-testid="added-element"]',
    );
    if (!portal || !addedElement) {
      return null;
    }
    return (
      addedElement.compareDocumentPosition(portal) ===
      document.documentElement.DOCUMENT_POSITION_FOLLOWING
    );
  });
  expect(portalIsAfterAddedElement).toBe(true);
});
