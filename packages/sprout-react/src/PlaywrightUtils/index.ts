import type { AxeResults } from "axe-core";

import { AxeBuilder } from "@axe-core/playwright";
import type { Page } from "@playwright/test";

export async function getAxeReport(page: Page): Promise<AxeResults> {
  return new AxeBuilder({ page })
    .include("#storybook-root")
    .include("#component-testing")
    .include("[data-floating-ui-portal]")
    .exclude("[data-floating-ui-focus-guard]")
    .analyze();
}
