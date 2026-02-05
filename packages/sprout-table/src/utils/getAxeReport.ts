import { AxeBuilder } from "@axe-core/playwright";
import type { Page } from "@playwright/test";
import type { AxeResults } from "axe-core";

export async function getAxeReport(page: Page): Promise<AxeResults> {
  try {
    return await new AxeBuilder({ page })
      .include("#storybook-root")
      .include("#component-testing")
      .include("[data-floating-ui-portal]")
      .exclude("[data-floating-ui-focus-guard]")
      .analyze();
  } catch (error) {
    throw new Error(`Error while running axe-core: ${(error as Error).message}`);
  }
}
