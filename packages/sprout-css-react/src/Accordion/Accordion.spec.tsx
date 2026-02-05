import { expect, test } from "@playwright/experimental-ct-react";

import { Accordion } from ".";
import { Button } from "../Button";
import { TextField } from "../Input";
import { getAxeReport } from "../PlaywrightUtils";

test("should link the accordion and keep only one opened", async ({
  page,
  mount,
}) => {
  const component = await mount(
    <Accordion.Container
      behavior="linked"
      id="component-testing"
      openedDefault={2}
      renderContent
    >
      <Accordion.Item header="first panel" id="first">
        <p data-testid="first">
          Quisque efficitur, magna sit amet tempor malesuada, orci mauris
          vestibulum enim, quis gravida est urna et ipsum. Nunc rutrum, magna id
          fermentum dignissim, magna sem volutpat risus, ut ultrices ipsum lacus
          vitae sapien. Curabitur sodales risus ac nibh efficitur, dapibus
          posuere ipsum bibendum. Proin erat ipsum, tempus in aliquet sed,
          auctor id sem. Maecenas ultrices, magna vitae pretium condimentum,
          ipsum lectus hendrerit est, a ultrices lacus odio in mi. Phasellus
          accumsan diam in metus dictum ultrices. In hac habitasse platea
          dictumst. Curabitur vestibulum vitae libero sit amet blandit. Nulla
          bibendum sollicitudin dolor at vehicula. Morbi quis viverra velit,
          eget ornare velit. Praesent porttitor sagittis nulla non vehicula. u
        </p>
      </Accordion.Item>
      <Accordion.Item header="second panel" id="second">
        <p data-testid="second">
          Quisque efficitur, magna sit amet tempor malesuada, orci mauris
          vestibulum enim, quis gravida est urna et ipsum.
        </p>
      </Accordion.Item>
      <Accordion.Item header="third panel" id="third">
        <p data-testid="third">
          Curabitur sodales risus ac nibh efficitur, dapibus posuere ipsum
          bibendum. Proin erat ipsum, tempus in aliquet sed, auctor id sem
        </p>
      </Accordion.Item>
    </Accordion.Container>,
  );
  await expect(component).toBeVisible();
  await expect(component.getByTestId("first")).not.toBeVisible();
  await expect(component.getByTestId("second")).not.toBeVisible();
  await expect(component.getByTestId("third")).toBeVisible();
  // a11y check
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
  await component.getByText("second panel").click();
  await expect(component.getByTestId("first")).not.toBeVisible();
  await expect(component.getByTestId("second")).toBeVisible();
  await expect(component.getByTestId("third")).not.toBeVisible();

  const allHeaders = await component.getByRole("button").all();
  const allPanels = await component
    .getByRole("region", { includeHidden: true })
    .all();

  //aria-expanded
  await expect(allHeaders[0]).toHaveAttribute("aria-expanded", "false");
  await expect(allHeaders[1]).toHaveAttribute("aria-expanded", "true");
  await expect(allHeaders[2]).toHaveAttribute("aria-expanded", "false");

  //aria-controls
  await expect(allHeaders[0]).toHaveAttribute(
    "aria-controls",
    "AccordionItem__content--first",
  );
  await expect(allHeaders[1]).toHaveAttribute(
    "aria-controls",
    "AccordionItem__content--second",
  );
  await expect(allHeaders[2]).toHaveAttribute(
    "aria-controls",
    "AccordionItem__content--third",
  );

  // aria-labelledby
  await expect(allPanels[0]).toHaveAttribute(
    "aria-labelledby",
    "AccordionItem__control--first",
  );
  await expect(allPanels[1]).toHaveAttribute(
    "aria-labelledby",
    "AccordionItem__control--second",
  );
  await expect(allPanels[2]).toHaveAttribute(
    "aria-labelledby",
    "AccordionItem__control--third",
  );

  // role=region
  await expect(allPanels[0]).toHaveAttribute("role", "region");
  await expect(allPanels[1]).toHaveAttribute("role", "region");
  await expect(allPanels[2]).toHaveAttribute("role", "region");

  // should manage keyboard navigation
  await expect(allHeaders[1]).toBeFocused();
  await component.press("Tab");
  await expect(allHeaders[2]).toBeFocused();
  await component.press("ArrowDown");
  await expect(allHeaders[0]).toBeFocused();
  await component.press("ArrowUp");
  await expect(allHeaders[2]).toBeFocused();
  await component.press("Home");
  await expect(allHeaders[0]).toBeFocused();
  await component.press("End");
  await expect(allHeaders[2]).toBeFocused();
  await component.press("Space");
  await expect(component.getByTestId("third")).toBeVisible();
});

test("should isolate the accordion and keep multiple opened", async ({
  mount,
}) => {
  const component = await mount(
    <Accordion.Container
      behavior="isolated"
      id="component-testing"
      openedDefault={2}
      renderContent
    >
      <Accordion.Item header="first panel">
        <p data-testid="first">Quisque efficitur, magna</p>
      </Accordion.Item>
      <Accordion.Item header="second panel">
        <p data-testid="second">Quisque efficitur, magna</p>
      </Accordion.Item>
      <Accordion.Item header="third panel">
        <p data-testid="third">
          Curabitur sodales risus ac nibh efficitur, dapibus posuere ipsum
          bibendum. Proin erat ipsum, tempus in aliquet sed, auctor id sem
        </p>
      </Accordion.Item>
    </Accordion.Container>,
  );

  await expect(component).toBeVisible();
  await expect(component.getByTestId("first")).not.toBeVisible();
  await expect(component.getByTestId("second")).not.toBeVisible();
  await expect(component.getByTestId("third")).toBeVisible();
  await component.getByText("second panel").click();
  await expect(component.getByTestId("first")).not.toBeVisible();
  await expect(component.getByTestId("second")).toBeVisible();
  await expect(component.getByTestId("third")).toBeVisible();
});

test('should render header h2 when use headerLevel="2"', async ({ mount }) => {
  const component = await mount(
    <Accordion.Container
      behavior="isolated"
      id="component-testing"
      renderContent
      headerLevel={2}
    >
      <Accordion.Item header="first panel">
        <p data-testid="first">Quisque efficitur, magna</p>
      </Accordion.Item>
    </Accordion.Container>,
  );
  await expect(component).toBeVisible();
  await expect(component.getByRole("heading", { level: 2 })).toBeVisible();
});

test("should manage keyboard navigation with focusable content", async ({
  mount,
}) => {
  const component = await mount(
    <Accordion.Container
      behavior="linked"
      id="component-testing"
      openedDefault={2}
      renderContent
    >
      <Accordion.Item header="first panel" id="first">
        <p data-testid="first">
          Quisque efficitur, magna sit amet tempor malesuada, orci mauris
          vestibulum enim, quis gravida est urna et ipsum. Nunc rutrum, magna id
          fermentum dignissim, magna sem volutpat risus, ut ultrices ipsum lacus
          vitae sapien. Curabitur sodales risus ac nibh efficitur, dapibus
          posuere ipsum bibendum. Proin erat ipsum, tempus in aliquet sed,
          auctor id sem. Maecenas ultrices, magna vitae pretium condimentum,
          ipsum lectus hendrerit est, a ultrices lacus odio in mi. Phasellus
          accumsan diam in metus dictum ultrices. In hac habitasse platea
          dictumst. Curabitur vestibulum vitae libero sit amet blandit. Nulla
          bibendum sollicitudin dolor at vehicula. Morbi quis viverra velit,
          eget ornare velit. Praesent porttitor sagittis nulla non vehicula.
        </p>
        <Button label="test" />
      </Accordion.Item>
      <Accordion.Item header="second panel" id="second">
        <p data-testid="second">
          Quisque efficitur, magna sit amet tempor malesuada, orci mauris
          vestibulum enim, quis gravida est urna et ipsum.
        </p>
      </Accordion.Item>
      <Accordion.Item header="third panel" id="third">
        <p data-testid="third">
          Curabitur sodales risus ac nibh efficitur, dapibus posuere ipsum
          bibendum. Proin erat ipsum, tempus in aliquet sed, auctor id sem
        </p>
        <TextField label="textfield" defaultValue="one two three" />
      </Accordion.Item>
    </Accordion.Container>,
  );
  const textfield = component.getByRole("textbox");
  await expect(textfield).toBeVisible();
  await textfield.click();
  await expect(textfield).toBeFocused();
  // check where is the cursor
  let selectionStart = await textfield.evaluate(
    (el) => (el as HTMLInputElement).selectionStart,
  );
  expect(selectionStart).toEqual(13);
  await textfield.press("Home");
  await expect(textfield).toBeFocused();
  selectionStart = await textfield.evaluate(
    (el) => (el as HTMLInputElement).selectionStart,
  );
  expect(selectionStart).toEqual(0);
});

test('should let all item opened by default with behavior="isolated" and openedDefault={undefined}', async ({
  mount,
}) => {
  const component = await mount(
    <Accordion.Container behavior="isolated">
      <Accordion.Item id="panel-a" header="first panel" openedDefault>
        <p>
          Quisque efficitur, magna sit amet tempor malesuada, orci mauris
          vestibulum enim, quis gravida est urna et ipsum.
        </p>
      </Accordion.Item>
      <Accordion.Item id="panel-b" header="second panel" openedDefault>
        <p>
          Quisque efficitur, magna sit amet tempor malesuada, orci mauris
          vestibulum enim, quis gravida est urna et ipsum.
        </p>
      </Accordion.Item>
      <Accordion.Item id="panel-c" header="third panel" openedDefault>
        <p>
          Quisque efficitur, magna sit amet tempor malesuada, orci mauris
          vestibulum enim, quis gravida est urna et ipsum.
        </p>
      </Accordion.Item>
    </Accordion.Container>,
  );
  await expect(component).toBeVisible();
  // check all panels are opened
  const header = component.getByTestId("panel.header");
  const allHeaders = await header.all();
  const panel = component.getByRole("region");
  const allPanels = await panel.all();

  expect(allHeaders).toHaveLength(3);
  expect(allPanels).toHaveLength(3);

  await expect(allPanels[0]).toBeVisible();
  await expect(allPanels[1]).toBeVisible();
  await expect(allPanels[2]).toBeVisible();
  await expect(allHeaders[0]).toHaveAttribute("aria-expanded", "true");
  await expect(allHeaders[1]).toHaveAttribute("aria-expanded", "true");
  await expect(allHeaders[2]).toHaveAttribute("aria-expanded", "true");
});
