import { AxeBuilder } from "@axe-core/playwright";
import type { Page } from "@playwright/test";
import type { AxeResults } from "axe-core";

type AxeBuilderOptions = ConstructorParameters<typeof AxeBuilder>[0];
type AxeBuilderPage = NonNullable<AxeBuilderOptions>["page"];

export async function getAxeReport(page: Page): Promise<AxeResults> {
  try {
    return await new AxeBuilder({ page: page as unknown as AxeBuilderPage })
      .include("#storybook-root")
      .include("#component-testing")
      .include("[data-floating-ui-portal]")
      .exclude("[data-floating-ui-focus-guard]")
      .analyze();
  } catch (error) {
    throw new Error(`Error while running axe-core: ${(error as Error).message}`);
  }
}
