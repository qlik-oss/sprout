import { expect, test } from "@playwright/experimental-ct-react";

import { SideNav } from ".";
import { List, ListItem } from "../List";
import { getAxeReport } from "../PlaywrightUtils";

test(`should SideNav be accessible`, async ({ mount, page }) => {
  await mount(
    <SideNav.Nav id="component-testing">
      <SideNav.Section label="Files">
        <List gap="s">
          <ListItem hasPadding={false} interactive>
            <SideNav.Link href="#upload" label="Uploads" />
          </ListItem>
          <ListItem hasPadding={false} interactive selected>
            <SideNav.Link href="#recent" aria-current="page" label="Recent" />
          </ListItem>
          <ListItem hasPadding={false} interactive>
            <SideNav.Link href="#shared" label="Shared" />
          </ListItem>
        </List>
      </SideNav.Section>
    </SideNav.Nav>,
  );

  const sectionLabel = page.getByText("Files");
  await expect(sectionLabel).toBeVisible();
  const nav = page.getByRole("navigation");
  await expect(nav).toBeVisible();
  const section = page.getByRole("region");
  await expect(section).toBeVisible();
  const links = await page.getByRole("link").all();
  expect(links).toHaveLength(3);

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
});
