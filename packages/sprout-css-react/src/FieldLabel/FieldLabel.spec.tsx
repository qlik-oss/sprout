import { expect, test } from "@playwright/experimental-ct-react";

import { FieldLabel } from ".";

test("renders with optional in parenthesis", async ({ mount }) => {
  const component = await mount(<FieldLabel label="Test Label" optional />);
  await expect(component).toHaveText("Test Label(optional)");
  // update the language to something else than "en" and after render to make sure it still works
  await component.page().evaluate(() => {
    document.documentElement.lang = "fr";
  });
  await expect(component).toHaveText("Test Label(facultatif)");
});

// didn't succeed to parameterize the test, so wrote them out manually

test("renders with optional in de", async ({ page, mount }) => {
  await page.evaluate(() => {
    document.documentElement.lang = "de";
  });
  const component = await mount(<FieldLabel label="Test Label" optional />);
  await expect(component).toHaveText("Test Label(optional)");
});

test("renders with optional in en", async ({ page, mount }) => {
  await page.evaluate(() => {
    document.documentElement.lang = "en";
  });
  const component = await mount(<FieldLabel label="Test Label" optional />);
  await expect(component).toHaveText("Test Label(optional)");
});

test("renders with optional in es", async ({ page, mount }) => {
  await page.evaluate(() => {
    document.documentElement.lang = "es";
  });
  const component = await mount(<FieldLabel label="Test Label" optional />);
  await expect(component).toHaveText("Test Label(opcional)");
});

test("renders with optional in fr", async ({ page, mount }) => {
  await page.evaluate(() => {
    document.documentElement.lang = "fr";
  });
  const component = await mount(<FieldLabel label="Test Label" optional />);
  await expect(component).toHaveText("Test Label(facultatif)");
});

test("renders with optional in it", async ({ page, mount }) => {
  await page.evaluate(() => {
    document.documentElement.lang = "it";
  });
  const component = await mount(<FieldLabel label="Test Label" optional />);
  await expect(component).toHaveText("Test Label(opzionale)");
});

test("renders with optional in ja", async ({ page, mount }) => {
  await page.evaluate(() => {
    document.documentElement.lang = "ja";
  });
  const component = await mount(<FieldLabel label="Test Label" optional />);
  await expect(component).toHaveText("Test Label((オプション))");
});

test("renders with optional in ko", async ({ page, mount }) => {
  await page.evaluate(() => {
    document.documentElement.lang = "ko";
  });
  const component = await mount(<FieldLabel label="Test Label" optional />);
  await expect(component).toHaveText("Test Label(선택 사항)");
});

test("renders with optional in nl", async ({ page, mount }) => {
  await page.evaluate(() => {
    document.documentElement.lang = "nl";
  });
  const component = await mount(<FieldLabel label="Test Label" optional />);
  await expect(component).toHaveText("Test Label(optioneel)");
});

test("renders with optional in pl", async ({ page, mount }) => {
  await page.evaluate(() => {
    document.documentElement.lang = "pl";
  });
  const component = await mount(<FieldLabel label="Test Label" optional />);
  await expect(component).toHaveText("Test Label(opcjonalne)");
});

test("renders with optional in pt", async ({ page, mount }) => {
  await page.evaluate(() => {
    document.documentElement.lang = "pt";
  });
  const component = await mount(<FieldLabel label="Test Label" optional />);
  await expect(component).toHaveText("Test Label(opcional)");
});

test("renders with optional in ru", async ({ page, mount }) => {
  await page.evaluate(() => {
    document.documentElement.lang = "ru";
  });
  const component = await mount(<FieldLabel label="Test Label" optional />);
  await expect(component).toHaveText("Test Label(дополнительно)");
});

test("renders with optional in sv", async ({ page, mount }) => {
  await page.evaluate(() => {
    document.documentElement.lang = "sv";
  });
  const component = await mount(<FieldLabel label="Test Label" optional />);
  await expect(component).toHaveText("Test Label(valfritt)");
});

test("renders with optional in tr", async ({ page, mount }) => {
  await page.evaluate(() => {
    document.documentElement.lang = "tr";
  });
  const component = await mount(<FieldLabel label="Test Label" optional />);
  await expect(component).toHaveText("Test Label(isteğe bağlı)");
});

test("renders with optional in zh-CN", async ({ page, mount }) => {
  await page.evaluate(() => {
    document.documentElement.lang = "zh-CN";
  });
  const component = await mount(<FieldLabel label="Test Label" optional />);
  await expect(component).toHaveText("Test Label(可选)");
});

test("renders with optional in zh-TW", async ({ page, mount }) => {
  await page.evaluate(() => {
    document.documentElement.lang = "zh-TW";
  });
  const component = await mount(<FieldLabel label="Test Label" optional />);
  await expect(component).toHaveText("Test Label(選用)");
});

test("renders with info tooltip", async ({ mount }) => {
  const component = await mount(
    <FieldLabel label="Test Label" infoIconTooltip="My info to display" />,
  );
  // THEN the tooltip info button should be rendered
  await expect(component.getByTestId("info-tooltip-button")).toBeVisible();
});

test("renders with info popover", async ({ mount }) => {
  const component = await mount(
    <FieldLabel label="Test Label" infoIconPopover="My info to display" />,
  );
  // THEN the popover info button should be rendered
  await expect(component.getByTestId("info-popover-button")).toBeVisible();
});

test("should not render both info tooltip and info popover", async ({
  mount,
}) => {
  const component = await mount(
    <FieldLabel
      label="Test Label"
      infoIconTooltip="My info to display in tooltip"
      infoIconPopover="My info to display in popover"
    />,
  );
  // THEN the tooltip info button should be rendered
  await expect(component.getByTestId("info-tooltip-button")).toBeVisible();
  // AND the popover info button should not be rendered
  await expect(component.getByTestId("info-popover-button")).not.toBeVisible();
});
