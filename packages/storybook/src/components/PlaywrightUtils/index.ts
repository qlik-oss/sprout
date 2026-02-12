import type { AxeResults } from "axe-core";
import type { Page } from "playwright-core";

import { AxeBuilder } from "@axe-core/playwright";

export async function getAxeReport(page: Page): Promise<AxeResults> {
  return new AxeBuilder({ page })
    .include("#storybook-root")
    .include("#component-testing")
    .include("[data-floating-ui-portal]")
    .exclude("[data-floating-ui-focus-guard]")
    .analyze();
}
